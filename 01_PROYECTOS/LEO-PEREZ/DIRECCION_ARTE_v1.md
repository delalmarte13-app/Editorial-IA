# DIRECCIÓN DE ARTE v1 — LA LEYENDA DE LEO Y EL RATONCITO PÉREZ

Fuentes canónicas: VISUAL_BIBLE_v1.md · STORYBOARD_v1.md · CANON.md · ESCALeta_v1.md.
Este documento define el SISTEMA visual; ninguna ilustración se genera ni se aprueba sin pasar por él.

## 1. Identidad visual por personaje (referencia operativa)
- **LEO**: niño de ~7 años, mirada despierta y curiosa, "cara de pensar" (cejas levemente elevadas/fruncidas), silueta infantil clara, vestuario sencillo de cuento (nada de modas actuales). Lenguaje corporal de observador, jamás héroe musculoso.
- **PÉREZ**: ratón pequeño antropomórfico y entrañable, sombrero + pequeño chaleco constantes, manos expresivas, ojos grandes pero no excesivamente caricaturescos. Comienza nervioso/reservado; después seguro y alegre. Escala diminuta frente al mobiliario humano.
- **DINTRIDESKA**: bruja de cuento elegante y ligeramente excéntrica, misterio no pesadilla, silueta clara (sombrero/cabello/ropa), capaz de frustración ante las sonrisas del pueblo. Presencia acotada: prólogo, sombras, torre, recuerdos.
- **DIENTESPUCK**: pueblo-personaje, cálido, luminoso, variado. El queso es su símbolo dorado recurrente; la moneda, un punto de luz cálida.
- **CONSEJO DE ROEDORES**: muchos ratones con personalidades diferenciadas (siluetas, ropas y gestos distintos entre sí).

## 2. Sistema de color (por ACTO emocional, nunca por imagen suelta)
| Acto | Unidades | Tratamiento cromático |
|---|---|---|
| Apertura feliz | U01 | Ambar/miel, amanecer dorado, saturación plena |
| Maldición | U02–U04 | Desaturación progresiva, azules/grises nocturnos, luna fría |
| Investigación y espera | U05–U08 | Contraste interior cálido (hogar, cocina, linterna) sobre noches azules |
| Encuentro y alianza | U09–U12 | Calor dorado del queso como foco; noche suave, luces puntuales |
| Descubrimiento y pacto | U13–U15 | Castillo mágico en dorados elegantes; U15 luz compartida (clímax) |
| Resolución y celebración | U16–U19 | Recuperación gradual del color hasta plenitud; amanecer, atardecer |
| Ritual final | U20 | Noche serena con queso/moneda como luz cálida de cierre |

Regla: el color del pueblo ES el indicador emocional del relato. Contrastes obligados: U04 vuelve a U01 en gris; U17 recupera el color de U01.

## 3. Estilo de línea y acabado
- Ilustración de álbum infantil contemporáneo: pictórica, cálida, con profundidad cinematográfica, textura artesanal (gouache/acuarela digital, grano de papel).
- Personajes altamente expresivos; trazo suave; nunca clip-art, plantilla genérica, vector plano ni fotorrealismo.
- **Prohibido texto dentro de la imagen** (letras, títulos, rotulación): el texto lo añade la maquetación.

## 4. Composición y cámara
- Doble página = formato apaisado (generar 16:9; ajuste final a pliego en maquetación).
- Una unidad visual dominante por doble página; alternar planos generales de mundo y primeros planos emocionales.
- Zona central (pliegue) libre de caras y detalles esenciales.
- Zonas de descanso para el texto: tercio inferior o franja superior despejadas (indicado por unidad).
- La ilustración NUNCA repite literalmente el texto: lo complementa.

## 5. Iluminación por momento
Día cálido del pueblo → noche de luna fría (maldición) → interior cálido de cocina → linterna/cesta en la espera → dorado mágico del castillo → amanecer de la resolución → noche serena del ritual.

## 6. Parámetros técnicos de generación
- Relación de aspecto: 16:9 (spreads). Resolución alta (≥1K).
- Modo de trabajo: imagen a imagen con referencia de la última imagen aprobada del personaje/escenario (continuidad), nunca solo texto.
- Bloque de estilo común + bloque negativo común: ver PROMPTS_ILUSTRACION_v1.md (cabecera).
- Naming de archivos: `U01_apertura.png` … `U20_ritual.png` (01_PROYECTOS/LEO-PEREZ/ilustraciones/).

## 7. QA visual obligatorio (10 puntos, cada imagen)
1 identidad de personaje · 2 proporciones/escala · 3 vestuario · 4 continuidad espacial · 5 iluminación del momento · 6 emoción correcta · 7 ausencia de elementos modernos/no canónicos · 8 espacio para texto · 9 manos, ojos, dientes y accesorios correctos · 10 continuidad con la ilustración anterior.
Si falla un punto → regenerar con corrección puntual; registrar el fallo en PROBLEMAS.md.

## 8. Estado
Dirección de arte v1 = documento de trabajo. Refinable tras las primeras pruebas de personaje; cualquier cambio estructural se registra en DECISIONES.md.
