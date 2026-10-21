import { describe, expect, it } from "vitest";
import { createProject, exportProject, stageImport, recordDecision, recordTransfer } from "../application/project-service";
import { buildPortableZip, stagePortableZipImport } from "../application/portable-zip";
import type { Mode } from "../domain/model";

/** Gate FW53: behavioral contract, not a claim of full UI E2E or validated TSR. */
const createCase = (mode: Mode) => createProject({
  name: `Piloto ${mode}`,
  mode,
  problem: "Preservar significado en una transferencia situada",
  purpose: "Contrastar exportación y retorno",
  context: "Caso sintético, sin datos humanos",
  activeProfiles: ["PH", "IT", "AT"],
  ...(mode === "START" ? {} : {
    source: {
      description: "Proyecto preexistente, conservación no invasiva",
      repositoryUrl: "https://example.invalid/reference",
      existingArtifacts: ["README.md", "registro.md"],
    },
  }),
  ...(mode === "AUDIT" ? { auditFocus: "Inspeccionar procedencia e integridad" } : {}),
}, "2026-10-20T18:30:00.000Z");

describe("G-FW53-EXEC-01: tres modos y retorno documentado", () => {
  for (const mode of ["START", "INTEGRATE", "AUDIT"] as Mode[]) {
    it(`${mode}: JSON y ZIP preservan campos centrales y autoridad humana`, () => {
      let original = createCase(mode);
      original = recordDecision(original, {
        question: "¿Autorizar ensayo?",
        decision: "Aprobado para piloto experimental",
        reason: "Caso sintético con límites explícitos",
        reversible: "yes",
      }, "2026-10-20T18:31:00.000Z");
      original = recordTransfer(original, {
        origin: "IT", destination: "PH", object: "Evidencia sintética",
        purpose: "Comparación T1-T8", limits: ["No acreditado externamente"], state: "proposed",
      }, "2026-10-20T18:32:00.000Z");
      const jsonRestored = stageImport(JSON.parse(JSON.stringify(exportProject(original)))).project;
      const zipRestored = stagePortableZipImport(buildPortableZip(original)).project;
      for (const restored of [jsonRestored, zipRestored]) {
        expect(restored.id).toBe(original.id);
        expect(restored.frameworkVersion).toBe(original.frameworkVersion);
        expect(restored.mode).toBe(mode);
        expect(restored.state).toEqual(original.state);
        expect(restored.portfolio).toEqual(original.portfolio);
        expect(restored.decisions).toEqual(original.decisions);
        expect(restored.transfers).toEqual(original.transfers);
        expect(restored.decisions[0]?.authority).toBe("human");
      }
      if (mode !== "START") {
        expect(zipRestored.state.source?.preservationRule).toBe("preserve_source");
        expect(zipRestored.state.source?.existingArtifacts).toEqual(["README.md", "registro.md"]);
      }
      if (mode === "AUDIT") {
        expect(zipRestored.status).toBe("review");
        expect(zipRestored.state.auditFocus).toBe("Inspeccionar procedencia e integridad");
      }
    });
  }

  it("INTEGRATE rechaza falta de fuente", () => {
    expect(() => createProject({
      name: "Inválido", mode: "INTEGRATE", problem: "Problema",
      purpose: "Propósito", context: "", activeProfiles: ["IT"],
    })).toThrow();
  });
  it("AUDIT rechaza falta de foco", () => {
    expect(() => createProject({
      name: "Inválido", mode: "AUDIT", problem: "Problema",
      purpose: "Propósito", context: "", activeProfiles: ["IT"],
      source: { description: "Fuente", existingArtifacts: ["README.md"] },
    })).toThrow();
  });
  it("candidato JSON alterado es rechazado por contrato", () => {
    const candidate = exportProject(createCase("START")) as unknown as Record<string, unknown>;
    candidate.unexpected = true;
    expect(() => stageImport(candidate)).toThrow("IMPORT_PACKAGE_INVALID");
  });
  it("ZIP de bytes arbitrarios no se admite", () => {
    expect(() => stagePortableZipImport(new Uint8Array([1, 2, 3, 4, 5]))).toThrow();
  });
});
