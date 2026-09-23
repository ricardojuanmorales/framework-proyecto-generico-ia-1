import { describe, expect, it } from "vitest";
import { InMemoryProjectRepository } from "../adapters/memory/in-memory-project-repository";
import {
  createProject,
  exportProject,
  importProject,
  stageImport,
} from "../application/project-service";

describe("START roundtrip", () => {
  it("crea, exporta, valida, importa y preserva significado", async () => {
    const source = createProject({
      name: "Proyecto semilla",
      problem: "Necesitamos coordinar un problema complejo.",
      context: "Contexto situado",
      purpose: "Diseñar una respuesta responsable.",
      activeProfiles: ["PH", "IT"],
    }, "2026-09-23T12:00:00.000Z");

    const portable = exportProject(source, "2026-09-23T12:05:00.000Z");
    const staged = stageImport(JSON.parse(JSON.stringify(portable)));
    const repository = new InMemoryProjectRepository();
    const restored = await importProject(repository, staged);

    expect(restored.id).toBe(source.id);
    expect(restored.state.problem).toBe(source.state.problem);
    expect(restored.state.activeProfiles).toEqual(["PH", "IT"]);
    expect((await repository.latest())?.id).toBe(source.id);
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
