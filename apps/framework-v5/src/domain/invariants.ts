import type { FrameworkProject } from "./model";

export interface DomainIssue {
  code: string;
  message: string;
}

export const validateProjectInvariants = (
  project: FrameworkProject,
): DomainIssue[] => {
  const issues: DomainIssue[] = [];
  if (!project.state.problem.trim()) {
    issues.push({ code: "PROBLEM_REQUIRED", message: "El problema es obligatorio." });
  }
  if (!project.state.purpose.trim()) {
    issues.push({ code: "PURPOSE_REQUIRED", message: "El propósito es obligatorio." });
  }
  if (project.state.activeProfiles.length === 0) {
    issues.push({
      code: "ACTIVE_PROFILE_REQUIRED",
      message: "START requiere al menos un perfil autorizado.",
    });
  }
  return issues;
};
