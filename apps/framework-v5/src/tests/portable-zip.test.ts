import { describe, expect, it } from "vitest";
import { createProject, recordKnowledgeInvocation, recordCaleidoscopeEvent } from "../application/project-service";
import { buildPortableZip, stagePortableZipImport } from "../application/portable-zip";

describe("packaging ZIP portable", () => {
  it("exporta e importa preservando significado", () => {
    const source = createProject({
      name: "Proyecto ZIP",
      mode: "INTEGRATE",
      problem: "Problema",
      context: "Contexto",
      purpose: "Propósito",
      activeProfiles: ["PH","IT"],
      source: {
        description: "Proyecto existente",
        repositoryUrl: "https://example.invalid/project",
        existingArtifacts: ["README.md"],
      },
    }, "2026-09-23T15:00:00.000Z");

    const bytes = buildPortableZip(source);
    const staged = stagePortableZipImport(bytes);

    expect(staged.project.id).toBe(source.id);
    expect(staged.project.mode).toBe("INTEGRATE");
    expect(staged.project.state.source?.description).toBe("Proyecto existente");
    expect(bytes.byteLength).toBeGreaterThan(100);
  });

  it("preserva invocaciones y candidatos caleidoscópicos en roundtrip ZIP", () => {
    let source = createProject({
      name: "Proyecto ZIP enriquecido",
      problem: "Problema",
      context: "Contexto",
      purpose: "Propósito",
      activeProfiles: ["PH","IT"],
    }, "2026-10-05T14:00:00.000Z");

    source = recordKnowledgeInvocation(source, {
      profiles: ["PH","IT"],
      knowledgeIds: ["biblio-ba-034"],
      need: "Contrastar alfabetización informacional",
      purpose: "Apoyar una decisión situada.",
      interpretation: "",
      consequence: "Invocación registrada.",
    }, "2026-10-05T14:01:00.000Z");

    source = recordCaleidoscopeEvent(source, {
      status: "candidate",
      situation: "Problema",
      lenses: ["PH","IT"],
      knowledgeIds: ["biblio-ba-034"],
      contrast: "Diseño y evidencia se tensionan.",
      emergence: "Nueva condición de diseño.",
      mediation: { human: "decide", machine: "persiste", ai: "contrasta" },
      traceability: "Invocación + PORTAFOLIO",
    }, "2026-10-05T14:02:00.000Z");

    const staged = stagePortableZipImport(buildPortableZip(source));
    expect(staged.project.knowledgeInvocations).toHaveLength(1);
    expect(staged.project.caleidoscopeEvents).toHaveLength(1);
    expect(staged.project.caleidoscopeEvents?.[0]?.status).toBe("candidate");
  });

  it("rechaza ZIP sin manifest", () => {
    expect(() => stagePortableZipImport(new Uint8Array([80,75,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))).toThrow();
  });

  it("rechaza bytes que no son ZIP válido", () => {
    expect(() => stagePortableZipImport(new Uint8Array([1,2,3,4,5]))).toThrow();
  });
});
