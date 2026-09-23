import {
  SCHEMA_VERSION,
  type FrameworkProject,
  type Mode,
  type Profile,
  type ProjectPackage,
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
}

export const createProject = (
  input: CreateProjectInput,
  now = new Date().toISOString(),
): FrameworkProject => {
  const project: FrameworkProject = {
    schemaVersion: SCHEMA_VERSION,
    id: globalThis.crypto?.randomUUID?.() ?? `project-${Date.now()}`,
    name: input.name.trim(),
    mode: input.mode ?? "START",
    status: "active",
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
      nextStep: "Revisar configuración inicial y definir primer bloque de trabajo."
    },
    portfolio: [],
    decisions: [],
    transfers: []
  };

  const issues = validateProjectInvariants(project);
  if (issues.length > 0) throw new Error(issues.map((i) => i.message).join(" "));
  if (!validateProject(project)) throw new Error("PROJECT_SCHEMA_INVALID");
  return project;
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
