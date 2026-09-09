"""Editorial IA — Backend API.

Endpoints:
  GET  /api/health   -> estado del servicio y configuracion de Gemini
  POST /api/chat     -> conversacion con el LLM (Gemini por defecto)

Gemini se usa via su endpoint OpenAI-compatible:
  https://generativelanguage.googleapis.com/v1beta/openai

Si no hay GEMINI_API_KEY, se prueba cualquier proveedor OpenAI-compatible
configurado con LLM_BASE_URL + LLM_API_KEY (+ LLM_MODEL opcional).
Sin ninguna clave, /api/chat responde en modo offline.
"""

import os
from typing import Dict, List

from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel, Field

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(BASE_DIR, ".env"))

GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/openai"
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "").strip()
GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-2.5-flash").strip()
LLM_BASE_URL = os.getenv("LLM_BASE_URL", "").strip()
LLM_API_KEY = os.getenv("LLM_API_KEY", "").strip()
LLM_MODEL = os.getenv("LLM_MODEL", "").strip()

PROMPT_SISTEMA = (
    "Eres el Director Editorial de Editorial IA. Coordinas la produccion "
    "de cuentos infantiles cumpliendo los protocolos del repositorio "
    "05_PROTOCOLOS (ahorro de tokens, coherencia, handoff). Responde en espanol."
)

app = FastAPI(title="Editorial IA API", version="0.2.0")


class ChatRequest(BaseModel):
    mensaje: str = Field(..., min_length=1)
    historial: List[Dict[str, str]] = Field(default_factory=list)
    tarea: str = Field(default="")


def _proveedor():
    """Devuelve (proveedor, modelo) segun las claves presentes."""
    if GEMINI_API_KEY:
        return "gemini", GEMINI_MODEL
    if LLM_BASE_URL and LLM_API_KEY:
        return "openai-compatible", LLM_MODEL or "gpt-4o-mini"
    return None, None


def _crear_cliente():
    from openai import OpenAI  # import diferido: no bloquea /api/health
    if GEMINI_API_KEY:
        return OpenAI(base_url=GEMINI_BASE_URL, api_key=GEMINI_API_KEY)
    if LLM_BASE_URL and LLM_API_KEY:
        return OpenAI(base_url=LLM_BASE_URL, api_key=LLM_API_KEY)
    return None


@app.get("/api/health")
def health():
    proveedor, modelo = _proveedor()
    return {
        "estado": "OK",
        "gemini_configurado": proveedor == "gemini",
        "proveedor": proveedor or "ninguno",
        "modelo": modelo or GEMINI_MODEL,
    }


@app.post("/api/chat")
def chat(req: ChatRequest):
    proveedor, modelo = _proveedor()
    if proveedor is None:
        return {
            "ok": False,
            "modo": "offline",
            "mensaje": (
                "Modo offline: no hay clave configurada. "
                "Copia 02_APP/.env.example a 02_APP/.env y pega tu GEMINI_API_KEY "
                "(https://aistudio.google.com/apikey). Alternativa: LLM_BASE_URL + LLM_API_KEY."
            ),
        }
    try:
        cliente = _crear_cliente()
    except Exception:
        return {
            "ok": False,
            "modo": "offline",
            "mensaje": "Falta la dependencia 'openai'. Ejecuta: pip install -r 02_APP/requirements.txt",
        }

    mensajes = [{"role": "system", "content": PROMPT_SISTEMA}] + [
        {"role": m.get("role", "user"), "content": m.get("content", "")}
        for m in req.historial[-10:]
    ] + [{"role": "user", "content": req.mensaje}]

    try:
        respuesta = cliente.chat.completions.create(
            model=modelo, messages=mensajes, temperature=0.7
        )
        return {
            "ok": True,
            "respuesta": respuesta.choices[0].message.content,
            "modelo": modelo,
            "proveedor": proveedor,
        }
    except Exception as exc:
        texto = str(exc)
        if any(k in texto for k in ("API key", "api key", "Invalid", "invalid", "401", "403", "permission", "denied")):
            return {
                "ok": False,
                "error": (
                    "Error de autenticacion con el proveedor de IA. "
                    "Revisa GEMINI_API_KEY en 02_APP/.env (o LLM_API_KEY si usas otro proveedor)."
                ),
            }
        return {"ok": False, "error": f"Error del LLM: {texto[:300]}"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
