import { describe, expect, it } from "vitest";
import { InMemoryProjectRepository } from "../adapters/memory/in-memory-project-repository";
import {
  createProject,
  exportProject,
  importProject,
  stageImport,
} from "../application/project-service";
import type { Mode } from "../domain/model";

const roundtrip = async (mode: Mode) => {
  const source = createProject({
    name: `Proyecto ${mode}`,
    mode,
    problem: "Necesitamos coordinar un problema complejo.",
    context: "Contexto situado",
    purpose: "Diseñar una respuesta responsable.",
    activeProfiles: mode === "AUDIT" ? ["IT"] : ["PH", "IT"],
    ...(mode === "START"
      ? {}
      : {
          source: {
            description: "Proyecto existente con historia previa.",
            repositoryUrl: "https://example.invalid/proyecto",
            existingArtifacts: ["README.md", "evidencia/base.md"],
          },
        }),
    ...(mode === "AUDIT" ? { auditFocus: "Contrastar trazabilidad y evidencia." } : {}),
  }, "2026-09-23T12:00:00.000Z");

  const portable = exportProject(source, "2026-09-23T12:05:00.000Z");
  const staged = stageImport(JSON.parse(JSON.stringify(portable)));
  const repository = new InMemoryProjectRepository();
  const restored = await importProject(repository, staged);
  return { source, restored, repository };
};

describe("roundtrip operacional", () => {
  for (const mode of ["START", "INTEGRATE", "AUDIT"] as Mode[]) {
    it(`${mode} crea, exporta, valida, importa y preserva significado`, async () => {
      const { source, restored, repository } = await roundtrip(mode);

      expect(restored.id).toBe(source.id);
      expect(restored.mode).toBe(mode);
      expect(restored.state.problem).toBe(source.state.problem);
      expect(restored.state.activeProfiles).toEqual(source.state.activeProfiles);
      expect(restored.state.source).toEqual(source.state.source);
      expect(restored.state.auditFocus).toBe(source.state.auditFocus);
      expect((await repository.latest())?.id).toBe(source.id);
    });
  }

  it("INTEGRATE exige procedencia", () => {
    expect(() =>
      createProject({
        name: "Integración inválida",
        mode: "INTEGRATE",
        problem: "Problema",
        context: "",
        purpose: "Propósito",
        activeProfiles: ["PH"],
      }),
    ).toThrow("INTEGRATE requiere procedencia");
  });

  it("AUDIT exige foco de contraste", () => {
    expect(() =>
      createProject({
        name: "Auditoría inválida",
        mode: "AUDIT",
        problem: "Problema",
        context: "",
        purpose: "Propósito",
        activeProfiles: ["IT"],
        source: {
          description: "Proyecto existente",
          existingArtifacts: [],
        },
      }),
    ).toThrow("AUDIT requiere un foco");
  });

  it("rechaza candidato alterado estructuralmente", () => {
    const source = createProject({
      name: "Proyecto",
      problem: "Problema",
      context: "",
      purpose: "Propósito",
      activeProfiles: ["PH"],
    });
    const candidate = exportProject(source) as unknown as Record<string, unknown>;
    candidate.unexpected = true;
    expect(() => stageImport(candidate)).toThrow("IMPORT_PACKAGE_INVALID");
  });
});
