export const SCHEMA_VERSION = "0.1.0" as const;
export type Mode = "START" | "INTEGRATE" | "AUDIT";
export type Profile = "PH" | "IT" | "AT";
export type MaturityLevel = "N1" | "N2" | "N3" | "N4";

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

export interface FrameworkProject {
  schemaVersion: typeof SCHEMA_VERSION;
  id: string;
  name: string;
  mode: Mode;
  status: "active" | "review" | "closed" | "reopened";
  frameworkVersion: "5.0.0-dev";
  createdAt: string;
  updatedAt: string;
  state: FrameworkState;
  portfolio: PortfolioEntry[];
  decisions: HumanDecision[];
  transfers: Transfer[];
}

export interface ProjectPackage {
  packageType: "framework_project";
  packageVersion: "0.1.0";
  exportedAt: string;
  project: FrameworkProject;
}
