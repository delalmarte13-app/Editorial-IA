import { describe, expect, it } from "vitest";
import { editorialDocuments, editorialTasks, editorialSpecialists } from "../shared/editorial";

describe("Editorial IA MVP", () => {
  it("expone el pipeline crítico con TASK-017 bloqueada por decisión autoral", () => {
    const task = editorialTasks.find((item) => item.id === "TASK-017");
    expect(task).toMatchObject({ status: "BLOCKED", priority: "P1" });
    expect(task?.detail).toContain("confirmación creativa");
  });

  it("mantiene las referencias del canon disponibles por nombre", () => {
    expect(editorialDocuments).toEqual(expect.arrayContaining(["CANON.md", "WORLD_BIBLE_v1.md", "VISUAL_BIBLE_v1.md"]));
  });

  it("define especialistas editoriales y económicos con responsabilidades distintas", () => {
    expect(editorialSpecialists).toHaveLength(5);
    expect(editorialSpecialists.some((person) => person.role.includes("Economía"))).toBe(true);
    expect(new Set(editorialSpecialists.map((person) => person.role)).size).toBe(5);
  });
});
