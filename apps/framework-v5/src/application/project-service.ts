import {
  SCHEMA_VERSION,
  type FrameworkProject,
  type HumanDecision,
  type MaturityLevel,
  type Mode,
  type PortfolioEntry,
  type Profile,
  type ProjectPackage,
  type SourceContext,
  type Transfer,
} from "../domain/model";
import { validateProjectInvariants } from "../domain/invariants";
import type { ProjectRepository } from "../ports/project-repository";
import { validatePackage, validateProject } from "../schemas/runtime-validators";

export interface CreateProjectInput {
  name: string;
  mode?: Mode;
  problem: string;
  context: string;
  purpose: string;
  activeProfiles: Profile[];
  source?: Omit<SourceContext, "preservationRule">;
  auditFocus?: string;
}

const nextStepByMode: Record<Mode, string> = {
  START: "Revisar configuración inicial y definir primer bloque de trabajo.",
  INTEGRATE: "Confirmar procedencia y seleccionar qué capa Framework añadir sin reorganizar el proyecto fuente.",
  AUDIT: "Definir criterios de contraste y revisar evidencia sin modificar el proyecto fuente.",
};

export const createProject = (
  input: CreateProjectInput,
  now = new Date().toISOString(),
): FrameworkProject => {
  const mode = input.mode ?? "START";
  const project: FrameworkProject = {
    schemaVersion: SCHEMA_VERSION,
    id: globalThis.crypto?.randomUUID?.() ?? `project-${Date.now()}`,
    name: input.name.trim(),
    mode,
    status: mode === "AUDIT" ? "review" : "active",
    frameworkVersion: "5.0.0-dev",
    createdAt: now,
    updatedAt: now,
    state: {
      problem: input.problem.trim(),
      context: input.context.trim(),
      purpose: input.purpose.trim(),
      activeProfiles: input.activeProfiles,
      latentProfiles: [],
      projectLevel: "N1",
      autonomyLevel: "N1",
      methodsInvoked: [],
      knowledgeInvoked: [],
      risks: [],
      gates: [],
      nextStep: nextStepByMode[mode],
      ...(input.source
        ? {
            source: {
              ...input.source,
              description: input.source.description.trim(),
              repositoryUrl: input.source.repositoryUrl?.trim() || undefined,
              existingArtifacts: input.source.existingArtifacts.map((item) => item.trim()).filter(Boolean),
              preservationRule: "preserve_source" as const,
            },
          }
        : {}),
      ...(input.auditFocus?.trim() ? { auditFocus: input.auditFocus.trim() } : {}),
    },
    portfolio: [],
    decisions: [],
    transfers: [],
  };

  const issues = validateProjectInvariants(project);
  if (issues.length > 0) throw new Error(issues.map((i) => i.message).join(" "));
  if (!validateProject(project)) throw new Error("PROJECT_SCHEMA_INVALID");
  return project;
};

const validateMutation = (project: FrameworkProject): FrameworkProject => {
  const issues = validateProjectInvariants(project);
  if (issues.length > 0) throw new Error(issues.map((i) => i.message).join(" "));
  if (!validateProject(project)) throw new Error("PROJECT_SCHEMA_INVALID");
  return project;
};

export const addPortfolioEntry = (
  project: FrameworkProject,
  entry: Omit<PortfolioEntry, "id" | "createdAt">,
  now = new Date().toISOString(),
): FrameworkProject =>
  validateMutation({
    ...project,
    updatedAt: now,
    portfolio: [
      ...project.portfolio,
      {
        ...entry,
        id: globalThis.crypto?.randomUUID?.() ?? `portfolio-${Date.now()}`,
        createdAt: now,
      },
    ],
  });

export const recordDecision = (
  project: FrameworkProject,
  decision: Omit<HumanDecision, "id" | "authority" | "createdAt">,
  now = new Date().toISOString(),
): FrameworkProject =>
  validateMutation({
    ...project,
    updatedAt: now,
    decisions: [
      ...project.decisions,
      {
        ...decision,
        id: globalThis.crypto?.randomUUID?.() ?? `decision-${Date.now()}`,
        authority: "human",
        createdAt: now,
      },
    ],
  });

export const recordTransfer = (
  project: FrameworkProject,
  transfer: Omit<Transfer, "id">,
  now = new Date().toISOString(),
): FrameworkProject =>
  validateMutation({
    ...project,
    updatedAt: now,
    transfers: [
      ...project.transfers,
      {
        ...transfer,
        id: globalThis.crypto?.randomUUID?.() ?? `transfer-${Date.now()}`,
      },
    ],
  });

export const updateMaturity = (
  project: FrameworkProject,
  projectLevel: MaturityLevel,
  autonomyLevel: MaturityLevel,
  now = new Date().toISOString(),
): FrameworkProject =>
  validateMutation({
    ...project,
    updatedAt: now,
    state: {
      ...project.state,
      projectLevel,
      autonomyLevel,
    },
  });

export const reopenProject = (
  project: FrameworkProject,
  reason: string,
  now = new Date().toISOString(),
): FrameworkProject => {
  const reopened = addPortfolioEntry(
    {
      ...project,
      status: "reopened",
      updatedAt: now,
      state: {
        ...project.state,
        nextStep: "Revisar la razón de reapertura y redefinir el siguiente bloque de trabajo.",
      },
    },
    {
      type: "milestone",
      title: "Proyecto reabierto",
      summary: reason.trim(),
    },
    now,
  );
  return validateMutation(reopened);
};

export const exportProject = (
  project: FrameworkProject,
  now = new Date().toISOString(),
): ProjectPackage => {
  const pkg: ProjectPackage = {
    packageType: "framework_project",
    packageVersion: "0.1.0",
    exportedAt: now,
    project,
  };
  if (!validatePackage(pkg)) throw new Error("EXPORT_PACKAGE_INVALID");
  return pkg;
};

export const stageImport = (candidate: unknown): ProjectPackage => {
  if (!validatePackage(candidate)) throw new Error("IMPORT_PACKAGE_INVALID");
  const pkg = candidate as ProjectPackage;
  const issues = validateProjectInvariants(pkg.project);
  if (issues.length > 0) throw new Error("IMPORT_DOMAIN_INVALID");
  return pkg;
};

export const importProject = async (
  repository: ProjectRepository,
  staged: ProjectPackage,
): Promise<FrameworkProject> => {
  await repository.save(staged.project);
  return staged.project;
};
