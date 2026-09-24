import { describe, expect, it } from "vitest";
import {
  addPortfolioEntry,
  createProject,
  exportProject,
  recordDecision,
  recordTransfer,
  reopenProject,
  stageImport,
  updateMaturity,
  correctPortfolioEntry,
  supersedeDecision,
  updateTransferState,
  invokeKnowledgeItem,
} from "../application/project-service";

describe("estado vivo del proyecto", () => {
  it("registra evidencia, decisión, transferencia y madurez preservables", () => {
    let project = createProject({
      name: "Proyecto vivo",
      problem: "Problema",
      context: "Contexto",
      purpose: "Propósito",
      activeProfiles: ["PH", "IT"],
    }, "2026-09-23T13:00:00.000Z");

    project = addPortfolioEntry(project, {
      type: "evidence",
      title: "Evidencia inicial",
      summary: "Resultado verificable del primer bloque.",
    }, "2026-09-23T13:05:00.000Z");

    project = recordDecision(project, {
      question: "¿Continuar con el enfoque actual?",
      decision: "Sí, con reserva explícita.",
      reason: "La evidencia es suficiente para el alcance actual.",
      reversible: "yes",
    }, "2026-09-23T13:10:00.000Z");

    project = recordTransfer(project, {
      origin: "IT",
      destination: "PH",
      object: "Criterio de trazabilidad de evidencia",
      purpose: "Fortalecer la implementación sin transferir responsabilidad epistemológica.",
      limits: ["No sustituye revisión IT."],
      state: "accepted",
    }, "2026-09-23T13:15:00.000Z");

    project = updateMaturity(project, "N2", "N2", "2026-09-23T13:20:00.000Z");

    const staged = stageImport(JSON.parse(JSON.stringify(exportProject(
      project,
      "2026-09-23T13:25:00.000Z",
    ))));

    expect(staged.project.portfolio).toHaveLength(1);
    expect(staged.project.decisions[0]?.authority).toBe("human");
    expect(staged.project.transfers[0]?.origin).toBe("IT");
    expect(staged.project.state.projectLevel).toBe("N2");
  });

  it("reabre de forma explícita y registra hito", () => {
    const base = createProject({
      name: "Proyecto",
      problem: "Problema",
      context: "",
      purpose: "Propósito",
      activeProfiles: ["PH"],
    });

    const reopened = reopenProject(base, "Nueva evidencia cambia el contexto.");

    expect(reopened.status).toBe("reopened");
    expect(reopened.portfolio.at(-1)?.type).toBe("milestone");
    expect(reopened.portfolio.at(-1)?.summary).toContain("Nueva evidencia");
  });
  it("corrige portafolio sin borrar entrada original", () => {
    let project = createProject({
      name: "Proyecto",
      problem: "Problema",
      context: "",
      purpose: "Propósito",
      activeProfiles: ["PH"],
    });
    project = addPortfolioEntry(project, {
      type: "evidence",
      title: "Evidencia",
      summary: "Versión inicial",
    });
    const originalId = project.portfolio[0]!.id;
    const corrected = correctPortfolioEntry(project, originalId, "Aclaración posterior");
    expect(corrected.portfolio).toHaveLength(2);
    expect(corrected.portfolio[0]!.summary).toBe("Versión inicial");
    expect(corrected.portfolio[1]!.summary).toContain(originalId);
  });

  it("supersede una decisión sin borrar la anterior", () => {
    let project = createProject({
      name: "Proyecto",
      problem: "Problema",
      context: "",
      purpose: "Propósito",
      activeProfiles: ["PH"],
    });
    project = recordDecision(project, {
      question: "¿A?",
      decision: "A",
      reason: "Primera razón",
      reversible: "yes",
    });
    const firstId = project.decisions[0]!.id;
    const revised = supersedeDecision(project, firstId, "B", "Nueva evidencia");
    expect(revised.decisions).toHaveLength(2);
    expect(revised.decisions[0]!.decision).toBe("A");
    expect(revised.decisions[1]!.decision).toBe("B");
    expect(revised.decisions[1]!.question).toContain(firstId);
  });

  it("actualiza el estado de transferencia preservando el registro", () => {
    let project = createProject({
      name: "Proyecto",
      problem: "Problema",
      context: "",
      purpose: "Propósito",
      activeProfiles: ["PH","IT"],
    });
    project = recordTransfer(project, {
      origin: "IT",
      destination: "PH",
      object: "Criterio",
      purpose: "Transferir",
      limits: [],
      state: "accepted",
    });
    const id = project.transfers[0]!.id;
    const updated = updateTransferState(project, id, "completed");
    expect(updated.transfers).toHaveLength(1);
    expect(updated.transfers[0]!.state).toBe("completed");
  });
  it("registra invocación de conocimiento en estado y portafolio", () => {
    const project = createProject({
      name: "Proyecto",
      problem: "Problema",
      context: "",
      purpose: "Propósito",
      activeProfiles: ["PH"],
    });
    const invoked = invokeKnowledgeItem(project, {
      id: "method-sdd",
      title: "Spec-Driven Development (SDD)",
      purpose: "Desarrollar con especificación y verificación.",
      canonicalSource: "00_CONTROL_MAESTRO/Spec_Driven_Development/",
    });
    expect(invoked.state.knowledgeInvoked).toContain("method-sdd");
    expect(invoked.portfolio.at(-1)?.type).toBe("invocation");
    expect(invoked.portfolio.at(-1)?.title).toContain("SDD");
  });
});
