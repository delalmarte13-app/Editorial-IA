# Editorial IA — aplicación móvil

MVP móvil construido con Expo SDK 54, React Native, TypeScript, Expo Router y NativeWind. La app está pensada como una mesa editorial compacta para el proyecto piloto LEO-PÉREZ.

## Capacidades

La aplicación permite consultar el estado del pipeline, revisar tareas y documentos por nombre, conversar con el equipo editorial, usar plantillas de diagnóstico/re escritura/estrategia/dirección de estilo y calcular escenarios económicos bajo, medio y alto a partir de datos introducidos por el usuario. No genera ilustraciones. `TASK-017` aparece bloqueada hasta la confirmación creativa expresa del autor, de acuerdo con `AD-08`.

El equipo visible está formado por Lía (análisis), Nico (reescritura), Ada (investigación y estrategia), Santi (coherencia y QA) y Mara (economía y rentabilidad). La interfaz evita cifras inventadas: los escenarios económicos permanecen vacíos hasta recibir precio, coste y unidades.

## Arquitectura segura

El cliente móvil consume rutas tRPC del servidor WebDev. El chat invoca el LLM únicamente desde el servidor mediante el secreto gestionado por WebDev; no se solicita ni se guarda una clave del proveedor en el dispositivo. Si el secreto no está disponible, el chat devuelve un estado local legible sin perder el texto del usuario.

La verificación del repositorio fuente `02_APP/backend` no confirmó una `GEMINI_API_KEY` local real: no existe `02_APP/.env` en el checkout y `.env.example` mantiene el valor vacío. La app reporta esta condición sin mostrar secretos. Para activar un proveedor, configúralo como secreto del backend mediante WebDev y vuelve a ejecutar el endpoint de salud; nunca lo comitees.

## Desarrollo y validación

Desde este directorio:

```bash
pnpm install
pnpm dev
pnpm check
pnpm test
```

La validación de esta entrega pasó TypeScript y Vitest. La prueba existente de `auth.logout` permanece omitida porque la autenticación no forma parte del flujo obligatorio del MVP; las pruebas de pipeline editorial están activas.

## Referencias canónicas

La app trabaja por referencias compactas a `CANON.md`, `MANUSCRITO_v1.md`, `WORLD_BIBLE_v1.md`, `VISUAL_BIBLE_v1.md`, `STORYBOARD_v1.md` y `DIRECCION_ARTE_v1.md`, siguiendo el protocolo de ahorro de tokens. No duplica esos documentos dentro de prompts del cliente.
