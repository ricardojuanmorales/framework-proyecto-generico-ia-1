import { describe, expect, it } from "vitest";
import { createProject } from "../application/project-service";
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

  it("rechaza ZIP sin manifest", () => {
    expect(() => stagePortableZipImport(new Uint8Array([80,75,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))).toThrow();
  });
});
