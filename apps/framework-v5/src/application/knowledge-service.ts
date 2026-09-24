import type { MaturityLevel, Profile } from "../domain/model";
import { FEDERATED_INDEX, type KnowledgeItem } from "../knowledge/federated-index";

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
  return FEDERATED_INDEX
    .map((item) => {
      const keywordScore = item.keywords.filter((keyword) =>
        need.includes(normalize(keyword)),
      ).length;
      const profileScore = item.profiles.some((profile) =>
        query.profiles.includes(profile),
      ) ? 2 : 0;
      const levelScore = item.levels.includes(query.level) ? 1 : 0;
      return { item, score: keywordScore * 3 + profileScore + levelScore };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map(({ item }) => item);
};
