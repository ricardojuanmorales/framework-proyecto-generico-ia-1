import { describe, expect, it } from "vitest";
import { recommendKnowledge } from "../application/knowledge-service";
import { COMMON_KNOWLEDGE_INDEX } from "../knowledge/common-knowledge";

describe("Base de Conocimiento común", () => {
  it("migra 54 registros preservando el conflicto BA-003", () => {
    expect(COMMON_KNOWLEDGE_INDEX).toHaveLength(54);
    const duplicate = COMMON_KNOWLEDGE_INDEX.filter((item) =>
      item.canonicalSource.includes("BA-003"),
    );
    expect(duplicate).toHaveLength(2);
    expect(duplicate.every((item) => item.risks.includes("duplicate_source_id"))).toBe(true);
  });

  it("recupera bibliografía común por necesidad sin crear silos por perfil", () => {
    const results = recommendKnowledge({
      need: "information literacy authority research",
      profiles: ["IT"],
      level: "N2",
    }, 10);
    expect(results.some((item) => item.id === "biblio-ba-034")).toBe(true);
    const acrl = results.find((item) => item.id === "biblio-ba-034");
    expect(acrl?.owner).toBe("COMMON");
    expect(acrl?.verificationStatus).toBe("pending_primary_source");
  });
});
