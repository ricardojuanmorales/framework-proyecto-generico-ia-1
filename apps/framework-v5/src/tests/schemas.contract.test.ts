import { describe, expect, it } from "vitest";
import { createProject, exportProject } from "../application/project-service";
import { validatePackage, validateProject } from "../schemas/runtime-validators";

describe("schemas V5 0.1.0", () => {
  it("acepta un START mínimo válido", () => {
    const project = createProject({
      name: "Caso mínimo",
      problem: "Problema complejo",
      context: "Contexto",
      purpose: "Propósito",
      activeProfiles: ["PH"],
    }, "2026-09-23T12:00:00.000Z");

    expect(validateProject(project)).toBe(true);
    expect(validatePackage(
      exportProject(project, "2026-09-23T12:01:00.000Z"),
    )).toBe(true);
  });

  it("rechaza campos desconocidos", () => {
    const project = {
      ...createProject({
        name: "Caso",
        problem: "Problema",
        context: "",
        purpose: "Propósito",
        activeProfiles: ["PH"],
      }),
      unexpected: true,
    };
    expect(validateProject(project)).toBe(false);
  });
});
