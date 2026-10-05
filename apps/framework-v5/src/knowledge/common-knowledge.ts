import type { MaturityLevel, Profile } from "../domain/model";
import seed from "./common-knowledge.seed.json";
import { FEDERATED_INDEX, type KnowledgeItem } from "./federated-index";

interface SeedKnowledgeItem {
  id: string;
  type: "bibliographic_source";
  title: string;
  citation: string;
  owner: "COMMON";
  profiles: Profile[];
  maturityStatus: "proposed" | "reviewed" | "validated" | "reference" | "superseded";
  verificationStatus: "pending_primary_source" | "verified_primary_source" | "not_applicable" | "verification_failed";
  sourceRecordId: string;
  migrationIssues: string[];
}

const allLevels: MaturityLevel[] = ["N1","N2","N3","N4"];

const tokenize = (value: string): string[] =>
  Array.from(new Set(
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .split(/[^a-z0-9áéíóúñü]+/i)
      .map((token) => token.trim())
      .filter((token) => token.length >= 4),
  )).slice(0, 40);

export const COMMON_KNOWLEDGE_INDEX: KnowledgeItem[] = (seed as SeedKnowledgeItem[]).map((item) => ({
  id: item.id,
  title: item.title,
  type: "bibliographic_source",
  purpose: "Fuente bibliográfica del patrimonio común. Usar de forma situada y verificar la fuente primaria antes de elevar su estado.",
  canonicalSource: `Base de Conocimiento común · ${item.sourceRecordId}`,
  owner: item.owner,
  profiles: item.profiles,
  levels: allLevels,
  keywords: tokenize(`${item.title} ${item.citation}`),
  risks: item.migrationIssues,
  evidenceHint: "cita identificada + procedencia + verificación primaria cuando corresponda",
  citation: item.citation,
  maturityStatus: item.maturityStatus,
  verificationStatus: item.verificationStatus,
}));

export const ALL_KNOWLEDGE_INDEX: KnowledgeItem[] = [
  ...FEDERATED_INDEX,
  ...COMMON_KNOWLEDGE_INDEX,
];
