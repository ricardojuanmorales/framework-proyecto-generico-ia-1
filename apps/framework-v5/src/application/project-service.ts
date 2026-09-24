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
    frameworkVersion: "5.0.0-rc.1",
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


export const correctPortfolioEntry = (
  project: FrameworkProject,
  originalId: string,
  correction: string,
  now = new Date().toISOString(),
): FrameworkProject => {
  const original = project.portfolio.find((entry) => entry.id === originalId);
  if (!original) throw new Error("PORTFOLIO_ENTRY_NOT_FOUND");
  return addPortfolioEntry(project, {
    type: "reflection",
    title: `Corrección · ${original.title}`,
    summary: `Corrige entrada ${original.id}: ${correction.trim()}`,
  }, now);
};

export const supersedeDecision = (
  project: FrameworkProject,
  originalId: string,
  decision: string,
  reason: string,
  now = new Date().toISOString(),
): FrameworkProject => {
  const original = project.decisions.find((item) => item.id === originalId);
  if (!original) throw new Error("DECISION_NOT_FOUND");
  return recordDecision(project, {
    question: `Revisión de decisión ${original.id}: ${original.question}`,
    decision: decision.trim(),
    reason: `Supersede decisión previa. ${reason.trim()}`,
    reversible: "yes",
  }, now);
};

export const updateTransferState = (
  project: FrameworkProject,
  transferId: string,
  state: Transfer["state"],
  now = new Date().toISOString(),
): FrameworkProject => {
  if (!project.transfers.some((item) => item.id === transferId)) {
    throw new Error("TRANSFER_NOT_FOUND");
  }
  return validateMutation({
    ...project,
    updatedAt: now,
    transfers: project.transfers.map((item) =>
      item.id === transferId ? { ...item, state } : item,
    ),
  });
};

export const invokeKnowledgeItem = (
  project: FrameworkProject,
  item: { id: string; title: string; purpose: string; canonicalSource: string },
  now = new Date().toISOString(),
): FrameworkProject => {
  const withInvocation: FrameworkProject = {
    ...project,
    updatedAt: now,
    state: {
      ...project.state,
      knowledgeInvoked: Array.from(new Set([...project.state.knowledgeInvoked, item.id])),
    },
  };
  return addPortfolioEntry(withInvocation, {
    type: "invocation",
    title: item.title,
    summary: `${item.purpose} · Fuente: ${item.canonicalSource}`,
  }, now);
};

export const removeKnowledgeItem = (
  project: FrameworkProject,
  item: { id: string; title: string; canonicalSource: string },
  now = new Date().toISOString(),
): FrameworkProject => {
  if (!project.state.knowledgeInvoked.includes(item.id)) {
    throw new Error("KNOWLEDGE_NOT_ACTIVE");
  }
  const withoutKnowledge: FrameworkProject = {
    ...project,
    updatedAt: now,
    state: {
      ...project.state,
      knowledgeInvoked: project.state.knowledgeInvoked.filter((id) => id !== item.id),
    },
  };
  return addPortfolioEntry(withoutKnowledge, {
    type: "reflection",
    title: `Conocimiento retirado · ${item.title}`,
    summary: `Se retiró del conjunto activo ${item.title}. Fuente: ${item.canonicalSource}. La invocación histórica se conserva.`,
  }, now);
};

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

export interface PortableFiles {
  "README.md": string;
  "manifest.json": string;
  "framework-state.json": string;
  "portfolio.json": string;
  "decisions.json": string;
  "transfers.json": string;
}

export const materializePortableFiles = (
  project: FrameworkProject,
): PortableFiles => {
  const manifest = {
    project_id: project.id,
    project_name: project.name,
    framework_version: project.frameworkVersion,
    package_version: "0.1.0",
    mode: project.mode,
    created_at: project.createdAt,
    updated_at: project.updatedAt,
    schema_versions: {
      project: project.schemaVersion,
      framework_state: "0.1.0",
      portfolio: "0.1.0",
      decision: "0.1.0",
      transfer: "0.1.0"
    },
    status: project.status,
  };

  const readme = [
    `# ${project.name}`,
    "",
    `Modo: ${project.mode}`,
    `Framework: ${project.frameworkVersion}`,
    "",
    "## Problema",
    project.state.problem,
    "",
    "## Propósito",
    project.state.purpose,
    "",
    "## Continuidad",
    project.state.nextStep,
  ].join("\n");

  return {
    "README.md": readme,
    "manifest.json": JSON.stringify(manifest, null, 2),
    "framework-state.json": JSON.stringify(project.state, null, 2),
    "portfolio.json": JSON.stringify(project.portfolio, null, 2),
    "decisions.json": JSON.stringify(project.decisions, null, 2),
    "transfers.json": JSON.stringify(project.transfers, null, 2),
  };
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
