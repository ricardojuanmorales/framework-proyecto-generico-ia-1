import { describe, expect, it } from "vitest";
import { createProject, materializePortableFiles } from "../application/project-service";

describe("materialización portable", () => {
  it("produce el conjunto mínimo de archivos lógicos", () => {
    const project = createProject({
      name: "Proyecto portable",
      problem: "Problema",
      context: "Contexto",
      purpose: "Propósito",
      activeProfiles: ["PH"],
    }, "2026-09-23T14:00:00.000Z");

    const files = materializePortableFiles(project);

    expect(Object.keys(files)).toEqual([
      "README.md",
      "manifest.json",
      "framework-state.json",
      "portfolio.json",
      "decisions.json",
      "transfers.json",
    ]);

    expect(JSON.parse(files["manifest.json"]).project_id).toBe(project.id);
    expect(files["README.md"]).toContain("Proyecto portable");
  });
});
