export const SCHEMA_VERSION = "0.1.0" as const;
export type Mode = "START" | "INTEGRATE" | "AUDIT";
export type Profile = "PH" | "IT" | "AT";
export type MaturityLevel = "N1" | "N2" | "N3" | "N4";

export interface SourceContext {
  description: string;
  repositoryUrl?: string;
  existingArtifacts: string[];
  preservationRule: "preserve_source";
}

export interface FrameworkState {
  problem: string;
  context: string;
  purpose: string;
  activeProfiles: Profile[];
  latentProfiles: Profile[];
  projectLevel: MaturityLevel;
  autonomyLevel: MaturityLevel;
  methodsInvoked: string[];
  knowledgeInvoked: string[];
  risks: string[];
  gates: string[];
  nextStep: string;
  source?: SourceContext;
  auditFocus?: string;
}

export interface PortfolioEntry {
  id: string;
  type: "artifact" | "evidence" | "reflection" | "invocation" | "milestone";
  title: string;
  summary: string;
  createdAt: string;
}

export interface HumanDecision {
  id: string;
  question: string;
  decision: string;
  reason: string;
  authority: "human";
  reversible: "yes" | "no" | "partial";
  createdAt: string;
}

export interface Transfer {
  id: string;
  origin: string;
  destination: string;
  object: string;
  purpose: string;
  limits: string[];
  state: "proposed" | "accepted" | "completed" | "reopened";
}

export interface KnowledgeInvocation {
  id: string;
  profiles: Profile[];
  knowledgeIds: string[];
  need: string;
  purpose: string;
  interpretation: string;
  consequence: string;
  createdAt: string;
}

export interface CaleidoscopeEvent {
  id: string;
  status: "candidate" | "recognized" | "validated" | "transferred";
  situation: string;
  lenses: Profile[];
  knowledgeIds: string[];
  contrast: string;
  emergence: string;
  mediation: {
    human: string;
    machine: string;
    ai: string;
  };
  traceability: string;
  createdAt: string;
}

export interface FrameworkProject {
  schemaVersion: typeof SCHEMA_VERSION;
  id: string;
  name: string;
  mode: Mode;
  status: "active" | "review" | "closed" | "reopened";
  frameworkVersion: "5.0.0" | "5.1.0";
  createdAt: string;
  updatedAt: string;
  state: FrameworkState;
  portfolio: PortfolioEntry[];
  decisions: HumanDecision[];
  transfers: Transfer[];
  /**
   * Additive V5 operational fields.
   * Optional to preserve import compatibility with earlier 0.1.0 packages.
   */
  knowledgeInvocations?: KnowledgeInvocation[];
  caleidoscopeEvents?: CaleidoscopeEvent[];
}

export interface ProjectPackage {
  packageType: "framework_project";
  packageVersion: "0.1.0";
  exportedAt: string;
  project: FrameworkProject;
}
