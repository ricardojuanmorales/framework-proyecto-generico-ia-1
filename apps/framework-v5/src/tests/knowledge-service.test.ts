import { describe, expect, it } from "vitest";
import { recommendKnowledge } from "../application/knowledge-service";

describe("Base Federada mínima", () => {
  it("prioriza SDD para necesidad de desarrollo y arquitectura", () => {
    const items = recommendKnowledge({
      need: "Necesito una metodología para desarrollo de software, arquitectura y verificación.",
      profiles: ["PH"],
      level: "N2",
    });
    expect(items[0]?.id).toBe("method-sdd");
  });

  it("propone orquestación para coordinación de perfiles", () => {
    const items = recommendKnowledge({
      need: "Quiero coordinar PH, IT y AT y manejar transferencias.",
      profiles: ["PH","IT","AT"],
      level: "N2",
    });
    expect(items.some((item) => item.id === "protocol-orchestration")).toBe(true);
  });

  it("limita resultados para reducir carga cognitiva", () => {
    const items = recommendKnowledge({
      need: "proyecto perfil nivel método conocimiento activación",
      profiles: ["PH","IT","AT"],
      level: "N1",
    }, 2);
    expect(items.length).toBeLessThanOrEqual(2);
  });
});
