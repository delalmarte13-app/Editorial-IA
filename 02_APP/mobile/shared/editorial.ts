export type EditorialTask = {
  id: string;
  priority: "P0" | "P1";
  title: string;
  status: "DONE" | "OPEN" | "BLOCKED";
  detail: string;
  next: string;
};

export const editorialTasks: EditorialTask[] = [
  { id: "TASK-017", priority: "P1", title: "Producción de ilustraciones", status: "BLOCKED", detail: "Requiere confirmación creativa expresa del autor.", next: "Esperar decisión AD-08" },
  { id: "TASK-018", priority: "P1", title: "Maquetación + KDP", status: "OPEN", detail: "Preparar edición y distribución del manuscrito.", next: "Definir formato y flujo KDP" },
  { id: "TASK-019", priority: "P0", title: "QA editorial final", status: "OPEN", detail: "Revisión de coherencia y calidad antes de publicar.", next: "Ejecutar checklist P0" },
  { id: "TASK-020", priority: "P1", title: "Estrategia comercial + lanzamiento", status: "OPEN", detail: "Posicionamiento, audiencia y salida al mercado.", next: "Construir hipótesis de lanzamiento" },
];

export const editorialDocuments = ["CANON.md", "MANUSCRITO_v1.md", "WORLD_BIBLE_v1.md", "VISUAL_BIBLE_v1.md", "STORYBOARD_v1.md", "DIRECCION_ARTE_v1.md"];

export const editorialSpecialists = [
  { name: "Lía", role: "Análisis y diagnóstico", accent: "#D8B4FE" },
  { name: "Nico", role: "Reescritura y estilo", accent: "#93C5FD" },
  { name: "Ada", role: "Investigación y estrategia", accent: "#86EFAC" },
  { name: "Santi", role: "Coherencia y QA", accent: "#FDBA74" },
  { name: "Mara", role: "Economía y rentabilidad", accent: "#F9A8D4" },
];

export const economicScenarios = [
  { id: "low", label: "Bajo", description: "Demanda prudente" },
  { id: "mid", label: "Medio", description: "Demanda probable" },
  { id: "high", label: "Alto", description: "Demanda favorable" },
];
