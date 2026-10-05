import type { MaturityLevel, Profile } from "../domain/model";
import type { KnowledgeItem } from "../knowledge/federated-index";
import { ALL_KNOWLEDGE_INDEX } from "../knowledge/common-knowledge";

export interface KnowledgeQuery {
  need: string;
  profiles: Profile[];
  level: MaturityLevel;
}

const normalize = (value: string): string =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export const recommendKnowledge = (
  query: KnowledgeQuery,
  limit = 3,
): KnowledgeItem[] => {
  const need = normalize(query.need);
  const terms = need.split(/\s+/).filter((term) => term.length >= 3);
  return ALL_KNOWLEDGE_INDEX
    .map((item) => {
      const keywordScore = item.keywords.filter((keyword) =>
        need.includes(normalize(keyword)),
      ).length;
      const searchable = normalize([
        item.title,
        item.purpose,
        item.citation ?? "",
        ...item.keywords,
      ].join(" "));
      const textScore = terms.filter((term) => searchable.includes(term)).length;
      const profileScore = item.profiles.some((profile) =>
        query.profiles.includes(profile),
      ) ? 2 : 0;
      const levelScore = item.levels.includes(query.level) ? 1 : 0;
      return { item, score: keywordScore * 3 + textScore * 2 + profileScore + levelScore };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map(({ item }) => item);
};
