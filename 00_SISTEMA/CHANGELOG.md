# CHANGELOG

## [0.2.0] — 2026-09-09
- Backend 02_APP: POST /api/chat con Gemini (endpoint OpenAI-compatible de Google) y GET /api/health que informa gemini_configurado sin exponer la clave. Fallback a cualquier proveedor OpenAI-compatible (LLM_BASE_URL) y modo offline sin clave.
- .env.example (GEMINI_API_KEY, GEMINI_MODEL) + .gitignore que protege claves; requirements.txt para 02_APP.
- Pipeline LEO-PÉREZ: TASK-015 Storyboard v1 DONE (20 unidades / 40 páginas) y TASK-016 Dirección de arte + prompts de ilustración DONE (DIRECCION_ARTE_v1.md + PROMPTS_ILUSTRACION_v1.md).
- Decisiones de dirección de arte AD-01…AD-08 registradas en DECISIONES.md.
- PRÓXIMA: TASK-017 Producción de ilustraciones (requiere confirmación del autor por coste).

## [0.1.0] — Inicial
- Arquitectura base del sistema iniciada.
- CANON, decisiones, problemas y tareas creados.
- Se establece control documental para reducir repeticiones y mantener coherencia.

## [0.3.0] — 2026-09-09
- Nueva aplicación móvil Expo en `02_APP/mobile/` con panel de inicio, chat del equipo, herramientas editoriales, dirección de estilo, economía por escenarios y vista del proyecto LEO-PÉREZ.
- Integración server-side con tRPC/LLM gestionado; fallback local sin claves en el cliente.
- La app respeta AD-08: no genera ilustraciones y mantiene TASK-017 bloqueada por confirmación autoral.
- Validación: TypeScript sin errores, 3 pruebas editoriales activas y revisión visual en viewport móvil.
