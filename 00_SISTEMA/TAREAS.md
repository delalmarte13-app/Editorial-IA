# TAREAS

Toda tarea debe producir un resultado verificable.

## Modo de ejecución
El sistema trabaja en cadena: al terminar una tarea, debe identificar y ejecutar automáticamente la siguiente tarea OPEN de mayor prioridad, salvo que exista una decisión que requiera autorización explícita del autor o una dependencia externa bloqueante.

### Regla de avance automático
1. Leer PROJECT_MASTER, CANON, DECISIONES, PROBLEMAS y TAREAS.
2. Seleccionar la tarea OPEN de mayor prioridad que no esté bloqueada.
3. Marcarla IN PROGRESS.
4. Ejecutarla completamente.
5. Registrar el resultado en el documento correspondiente.
6. Marcarla DONE si tiene resultado verificable.
7. Crear/desbloquear la siguiente tarea necesaria.
8. Continuar sin pedir confirmación si la siguiente acción es técnica/editorial reversible y está dentro del objetivo aprobado.
9. Detenerse únicamente ante: decisión creativa crítica del autor, información indispensable ausente, conflicto de CANON, riesgo legal/IP relevante o acción irreversible.

## Prioridades
- P0 — Crítica
- P1 — Importante
- P2 — Mejora

## Estado
- OPEN
- IN PROGRESS
- DONE
- BLOCKED

## PIPELINE DEL PROYECTO LEO-PÉREZ

### TASK-001 — Resolver lógica de la maldición
- Prioridad: P0
- Resultado esperado: propuesta de canon con alternativas y recomendación.
- Estado: DONE

### TASK-002 — Definir identidad profunda de Leo
- Prioridad: P0
- Resultado esperado: ficha de personaje propuesta.
- Estado: DONE

### TASK-003 — Definir identidad de Pérez
- Prioridad: P0
- Resultado esperado: ficha de personaje propuesta.
- Estado: DONE

### TASK-004 — Resolver motivación de Dintrideska
- Prioridad: P0
- Resultado esperado: alternativas y recomendación.
- Estado: DONE

### TASK-005 — Diseñar escalada y clímax
- Prioridad: P0
- Resultado esperado: nueva arquitectura de escenas.
- Estado: DONE

### TASK-006 — Resolver confusión Leo/Pérez
- Prioridad: P0
- Resultado esperado: sistema de nombres recomendado.
- Estado: DONE

### TASK-007 — Optimizar título comercial
- Prioridad: P0
- Resultado esperado: shortlist de títulos y recomendación.
- Estado: DONE

### TASK-008 — Consolidar DECISIONES 01
- Prioridad: P0
- Objetivo: transformar los resultados de TASK-001 a TASK-007 en decisiones de trabajo y marcar cuáles requieren aprobación del autor.
- Responsable/herramienta: Director Editorial IA.
- Resultado esperado: DECISIONES.md actualizado.
- Estado: IN PROGRESS

### TASK-009 — Construir CANON 01 de Leo y Pérez
- Prioridad: P0
- Dependencia: TASK-008.
- Resultado esperado: CANON.md actualizado.
- Estado: OPEN

### TASK-010 — Reestructurar manuscrito
- Prioridad: P0
- Dependencia: TASK-009.
- Resultado esperado: escaleta profesional escena por escena.
- Estado: OPEN

### TASK-011 — Reescritura editorial v1
- Prioridad: P0
- Dependencia: TASK-010.
- Resultado esperado: manuscrito v1 + registro de cambios.
- Estado: OPEN

### TASK-012 — QA literario y de coherencia
- Prioridad: P0
- Dependencia: TASK-011.
- Resultado esperado: informe QA + correcciones propuestas.
- Estado: OPEN

### TASK-013 — Definir target, extensión y paginación
- Prioridad: P1
- Dependencia: TASK-012.
- Resultado esperado: especificación editorial.
- Estado: OPEN

### TASK-014 — World Bible y Visual Bible
- Prioridad: P1
- Dependencia: TASK-009.
- Resultado esperado: documentación visual para ilustración consistente.
- Estado: OPEN

### TASK-015 — Storyboard / Scene Sheets
- Prioridad: P1
- Dependencia: TASK-013 + TASK-014.
- Resultado esperado: plan de ilustraciones y páginas.
- Estado: OPEN

### TASK-016 — Dirección de arte y prompts maestros
- Prioridad: P1
- Dependencia: TASK-015.
- Resultado esperado: sistema de generación visual consistente.
- Estado: OPEN

### TASK-017 — Producción de ilustraciones
- Prioridad: P1
- Dependencia: TASK-016.
- Resultado esperado: set de ilustraciones finales + QA visual.
- Estado: OPEN

### TASK-018 — Maquetación y preparación KDP
- Prioridad: P1
- Dependencia: TASK-017.
- Resultado esperado: interiores y portada listos para revisión.
- Estado: OPEN

### TASK-019 — QA editorial final
- Prioridad: P0
- Dependencia: TASK-018.
- Resultado esperado: checklist de publicación sin bloqueos críticos.
- Estado: OPEN

### TASK-020 — Estrategia comercial y lanzamiento
- Prioridad: P1
- Dependencia: TASK-019.
- Resultado esperado: metadatos, posicionamiento, descripción, keywords, categorías y plan de lanzamiento.
- Estado: OPEN

## REGLA DE CONTINUIDAD
Cuando el usuario diga "continúa", "adelante", "sigue" o equivalente, el Director debe retomar la primera tarea OPEN/IN PROGRESS de mayor prioridad y continuar la cadena. No debe volver a explicar el sistema completo ni esperar una nueva instrucción para cada tarea.
