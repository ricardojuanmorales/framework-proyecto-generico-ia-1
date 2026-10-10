import { describe, expect, it } from "vitest";
import { createProject, exportProject, stageImport } from "../application/project-service";
import { buildPortableZip, stagePortableZipImport } from "../application/portable-zip";
import projectSchema from "../schemas/project.schema.json";

const project = () => createProject({
  name: "Compatibilidad histórica",
  mode: "START",
  problem: "Verificar continuidad de versiones",
  context: "Auditoría v5.2",
  purpose: "Preservar proyectos existentes",
  activeProfiles: ["PH", "IT", "AT"],
}, "2026-10-09T12:00:00.000Z");

describe("Framework v5.2.0: continuidad de versiones", () => {
  it("el contrato JSON incluye todas las versiones admitidas", () => {
    expect(projectSchema.properties.frameworkVersion.enum).toEqual(["5.0.0", "5.1.0", "5.2.0"]);
  });
  it("crea proyectos nuevos con version 5.2.0 sin cambiar schema 0.1.0", () => {
    const candidate = project();
    expect(candidate.frameworkVersion).toBe("5.2.0");
    expect(candidate.schemaVersion).toBe("0.1.0");
    const staged = stageImport(exportProject(candidate));
    expect(staged.project.frameworkVersion).toBe("5.2.0");
  });

  for (const historicalVersion of ["5.0.0", "5.1.0"] as const) {
    it(`acepta proyecto historico ${historicalVersion} sin migracion forzada`, () => {
      const historical = { ...project(), frameworkVersion: historicalVersion };
      const staged = stageImport(exportProject(historical));
      expect(staged.project.frameworkVersion).toBe(historicalVersion);
      const restored = stagePortableZipImport(buildPortableZip(historical));
      expect(restored.project.frameworkVersion).toBe(historicalVersion);
    });
  }

  it("exporta e importa ZIP v5.2.0 con version manifiesto 0.1.0", () => {
    const staged = stagePortableZipImport(buildPortableZip(project()));
    expect(staged.project.frameworkVersion).toBe("5.2.0");
    expect(staged.packageVersion).toBe("0.1.0");
  });
});
