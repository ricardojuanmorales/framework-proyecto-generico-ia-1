import { useMemo, useState } from "react";
import type { FrameworkProject, MaturityLevel, Mode, Profile, ProjectPackage } from "../domain/model";
import type { ProjectRepository } from "../ports/project-repository";
import { recommendKnowledge } from "../application/knowledge-service";
import { buildPortableZip, stagePortableZipImport } from "../application/portable-zip";
import {
  addPortfolioEntry,
  createProject,
  exportProject,
  importProject,
  recordDecision,
  recordTransfer,
  reopenProject,
  stageImport,
  updateMaturity,
} from "../application/project-service";

interface Props {
  repository: ProjectRepository;
  persistenceMode: "local" | "memory";
}

export function App({ repository, persistenceMode }: Props) {
  const [project, setProject] = useState<FrameworkProject | null>(null);
  const [status, setStatus] = useState("Listo para activar.");
  const [mode, setMode] = useState<Mode>("START");
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const [purpose, setPurpose] = useState("");
  const [context, setContext] = useState("");
  const [sourceDescription, setSourceDescription] = useState("");
  const [sourceRepositoryUrl, setSourceRepositoryUrl] = useState("");
  const [existingArtifacts, setExistingArtifacts] = useState("");
  const [auditFocus, setAuditFocus] = useState("");
  const [profiles, setProfiles] = useState<Profile[]>(["PH"]);
  const [evidenceTitle, setEvidenceTitle] = useState("");
  const [evidenceSummary, setEvidenceSummary] = useState("");
  const [decisionText, setDecisionText] = useState("");
  const [decisionReason, setDecisionReason] = useState("");
  const [transferOrigin, setTransferOrigin] = useState("IT");
  const [transferDestination, setTransferDestination] = useState("PH");
  const [transferObject, setTransferObject] = useState("");
  const [reopenReason, setReopenReason] = useState("");
  const [knowledgeNeed, setKnowledgeNeed] = useState("");
  const [knowledgeResults, setKnowledgeResults] = useState<ReturnType<typeof recommendKnowledge>>([]);

  const needsSource = mode === "INTEGRATE" || mode === "AUDIT";
  const canCreate = useMemo(
    () =>
      Boolean(name.trim() && problem.trim() && purpose.trim() && profiles.length > 0) &&
      (!needsSource || Boolean(sourceDescription.trim())) &&
      (mode !== "AUDIT" || Boolean(auditFocus.trim())),
    [name, problem, purpose, profiles, needsSource, sourceDescription, mode, auditFocus],
  );

  const toggleProfile = (profile: Profile) => {
    setProfiles((current) =>
      current.includes(profile) ? current.filter((p) => p !== profile) : [...current, profile],
    );
  };

  const onCreate = async () => {
    const next = createProject({
      name,
      mode,
      problem,
      purpose,
      context,
      activeProfiles: profiles,
      ...(needsSource
        ? {
            source: {
              description: sourceDescription,
              repositoryUrl: sourceRepositoryUrl,
              existingArtifacts: existingArtifacts.split("\n"),
            },
          }
        : {}),
      ...(mode === "AUDIT" ? { auditFocus } : {}),
    });
    await repository.save(next);
    setProject(next);
    setStatus(`Proyecto ${mode} creado y persistido.`);
  };

  const persistProject = async (next: FrameworkProject, message: string) => {
    await repository.save(next);
    setProject(next);
    setStatus(message);
  };

  const onAddEvidence = async () => {
    if (!project || !evidenceTitle.trim()) return;
    const next = addPortfolioEntry(project, {
      type: "evidence",
      title: evidenceTitle,
      summary: evidenceSummary,
    });
    await persistProject(next, "Evidencia registrada.");
    setEvidenceTitle("");
    setEvidenceSummary("");
  };

  const onDecision = async () => {
    if (!project || !decisionText.trim()) return;
    const next = recordDecision(project, {
      question: "Decisión material del proyecto",
      decision: decisionText,
      reason: decisionReason,
      reversible: "yes",
    });
    await persistProject(next, "Decisión humana registrada.");
    setDecisionText("");
    setDecisionReason("");
  };

  const onTransfer = async () => {
    if (!project || !transferObject.trim()) return;
    const next = recordTransfer(project, {
      origin: transferOrigin,
      destination: transferDestination,
      object: transferObject,
      purpose: "Transferencia situada registrada desde la aplicación V5.",
      limits: [],
      state: "accepted",
    });
    await persistProject(next, "Transferencia registrada.");
    setTransferObject("");
  };

  const onMaturity = async (field: "project" | "autonomy", level: MaturityLevel) => {
    if (!project) return;
    const next = updateMaturity(
      project,
      field === "project" ? level : project.state.projectLevel,
      field === "autonomy" ? level : project.state.autonomyLevel,
    );
    await persistProject(next, "Madurez operacional actualizada.");
  };

  const onReopen = async () => {
    if (!project || !reopenReason.trim()) return;
    const next = reopenProject(project, reopenReason);
    await persistProject(next, "Proyecto reabierto de forma trazable.");
    setReopenReason("");
  };

  const onKnowledgeSearch = () => {
    const activeProfiles = project?.state.activeProfiles ?? profiles;
    const level = project?.state.projectLevel ?? "N1";
    setKnowledgeResults(
      recommendKnowledge({
        need: knowledgeNeed,
        profiles: activeProfiles,
        level,
      }),
    );
    setStatus("Base Federada consultada localmente.");
  };

  const onInvokeKnowledge = async (item: ReturnType<typeof recommendKnowledge>[number]) => {
    if (!project) return;
    const next = addPortfolioEntry(
      {
        ...project,
        state: {
          ...project.state,
          knowledgeInvoked: Array.from(new Set([...project.state.knowledgeInvoked, item.id])),
        },
      },
      {
        type: "invocation",
        title: item.title,
        summary: `${item.purpose} · Fuente: ${item.canonicalSource}`,
      },
    );
    await persistProject(next, "Conocimiento invocado y registrado en portafolio.");
  };

  const downloadBlob = (blob: Blob, name: string) => {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = name;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const onExportZip = () => {
    if (!project) return;
    const bytes = buildPortableZip(project);
    downloadBlob(new Blob([bytes], { type: "application/zip" }), `${project.id}.framework-v5.zip`);
    setStatus("Paquete portable ZIP exportado.");
  };

  const onExportJson = () => {
    if (!project) return;
    const pkg = exportProject(project);
    downloadBlob(
      new Blob([JSON.stringify(pkg, null, 2)], { type: "application/json" }),
      `${project.id}.framework-v5.json`,
    );
    setStatus("JSON técnico exportado.");
  };

  const onImport = async (file: File) => {
    if (file.size > 2_000_000) throw new Error("IMPORT_FILE_TOO_LARGE");
    const staged: ProjectPackage = file.name.toLowerCase().endsWith(".zip")
      ? stagePortableZipImport(new Uint8Array(await file.arrayBuffer()))
      : stageImport(JSON.parse(await file.text()));
    const accepted = globalThis.confirm("El paquete es válido. ¿Deseas importarlo y persistirlo?");
    if (!accepted) {
      setStatus("Importación cancelada por decisión humana.");
      return;
    }
    const imported = await importProject(repository, staged);
    setProject(imported);
    setStatus("Paquete validado e importado.");
  };

  return (
    <main className="shell">
      <header>
        <p className="eyebrow">Framework Genérico V5 · núcleo operacional 0.1</p>
        <h1>{mode} local-first</h1>
        <p>Activar, persistir, exportar e importar sin backend ni IA externa.</p>
        <p className="mode">Persistencia: <strong>{persistenceMode}</strong></p>
      </header>

      <section aria-labelledby="learn-title" className="card">
        <h2 id="learn-title">Aprender</h2>
        <p><strong>Problema al centro.</strong> PH, IT y AT son lentes situadas; el Caleidoscopio es una emergencia posible, no un cuarto perfil.</p>
        <div className="grid-two">
          <article><h3>PH</h3><p>Construcción e integración tecnológica situada.</p></article>
          <article><h3>IT</h3><p>Responsabilidad epistemológica sobre método, evidencia y validez.</p></article>
          <article><h3>AT</h3><p>Percepción, imaginación, mediación y transformación artística situada.</p></article>
          <article><h3>N1–N4</h3><p>Madurez operacional situada, no puntuación ni jerarquía.</p></article>
        </div>
        <p>La IA puede explicar, contrastar y sugerir. La decisión material sigue siendo humana.</p>
      </section>

      <section aria-labelledby="activate-title" className="card">
        <h2 id="activate-title">Activar proyecto</h2>

        <label>
          Modo
          <select value={mode} onChange={(e) => setMode(e.target.value as Mode)}>
            <option value="START">START · proyecto nuevo</option>
            <option value="INTEGRATE">INTEGRATE · proyecto existente</option>
            <option value="AUDIT">AUDIT · contraste de proyecto maduro</option>
          </select>
        </label>

        <label>Nombre<input value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label>Problema<textarea value={problem} onChange={(e) => setProblem(e.target.value)} /></label>
        <label>Contexto<textarea value={context} onChange={(e) => setContext(e.target.value)} /></label>
        <label>Propósito<textarea value={purpose} onChange={(e) => setPurpose(e.target.value)} /></label>

        {needsSource ? (
          <>
            <label>
              Procedencia del proyecto existente
              <textarea value={sourceDescription} onChange={(e) => setSourceDescription(e.target.value)} />
            </label>
            <label>
              Repositorio o referencia opcional
              <input value={sourceRepositoryUrl} onChange={(e) => setSourceRepositoryUrl(e.target.value)} />
            </label>
            <label>
              Artefactos existentes, uno por línea
              <textarea value={existingArtifacts} onChange={(e) => setExistingArtifacts(e.target.value)} />
            </label>
          </>
        ) : null}

        {mode === "AUDIT" ? (
          <label>
            Foco de auditoría
            <textarea value={auditFocus} onChange={(e) => setAuditFocus(e.target.value)} />
          </label>
        ) : null}

        <fieldset>
          <legend>Perfiles autorizados</legend>
          {(["PH","IT","AT"] as Profile[]).map((profile) => (
            <label key={profile} className="check">
              <input
                type="checkbox"
                checked={profiles.includes(profile)}
                onChange={() => toggleProfile(profile)}
              />
              {profile}
            </label>
          ))}
        </fieldset>

        <button disabled={!canCreate} onClick={onCreate}>Crear {mode}</button>
      </section>

      <section className="card" aria-live="polite">
        <h2>Estado</h2>
        <p>{status}</p>
        {project ? (
          <dl>
            <dt>Proyecto</dt><dd>{project.name}</dd>
            <dt>Modo</dt><dd>{project.mode}</dd>
            <dt>Estado</dt><dd>{project.status}</dd>
            <dt>Problema</dt><dd>{project.state.problem}</dd>
            <dt>Propósito</dt><dd>{project.state.purpose}</dd>
            <dt>Nivel</dt><dd>{project.state.projectLevel}</dd>
            <dt>Perfiles</dt><dd>{project.state.activeProfiles.join(", ")}</dd>
            {project.state.source ? (
              <>
                <dt>Procedencia</dt><dd>{project.state.source.description}</dd>
                <dt>Preservación</dt><dd>{project.state.source.preservationRule}</dd>
              </>
            ) : null}
            {project.state.auditFocus ? (
              <><dt>Foco AUDIT</dt><dd>{project.state.auditFocus}</dd></>
            ) : null}
            <dt>Siguiente paso</dt><dd>{project.state.nextStep}</dd>
          </dl>
        ) : <p>No hay proyecto activo.</p>}
        {project ? (
          <section className="live-state" aria-labelledby="live-state-title">
            <h3 id="live-state-title">Estado vivo</h3>

            <div className="grid-two">
              <label>
                Nivel del proyecto
                <select
                  value={project.state.projectLevel}
                  onChange={(e) => void onMaturity("project", e.target.value as MaturityLevel)}
                >
                  {(["N1","N2","N3","N4"] as MaturityLevel[]).map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </label>
              <label>
                Autonomía
                <select
                  value={project.state.autonomyLevel}
                  onChange={(e) => void onMaturity("autonomy", e.target.value as MaturityLevel)}
                >
                  {(["N1","N2","N3","N4"] as MaturityLevel[]).map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </label>
            </div>

            <label>Título de evidencia<input value={evidenceTitle} onChange={(e) => setEvidenceTitle(e.target.value)} /></label>
            <label>Resumen de evidencia<textarea value={evidenceSummary} onChange={(e) => setEvidenceSummary(e.target.value)} /></label>
            <button disabled={!evidenceTitle.trim()} onClick={() => void onAddEvidence()}>Registrar evidencia</button>

            <label>Decisión humana<input value={decisionText} onChange={(e) => setDecisionText(e.target.value)} /></label>
            <label>Razón<textarea value={decisionReason} onChange={(e) => setDecisionReason(e.target.value)} /></label>
            <button disabled={!decisionText.trim()} onClick={() => void onDecision()}>Registrar decisión</button>

            <div className="grid-two">
              <label>Origen<input value={transferOrigin} onChange={(e) => setTransferOrigin(e.target.value)} /></label>
              <label>Destino<input value={transferDestination} onChange={(e) => setTransferDestination(e.target.value)} /></label>
            </div>
            <label>Objeto transferido<input value={transferObject} onChange={(e) => setTransferObject(e.target.value)} /></label>
            <button disabled={!transferObject.trim()} onClick={() => void onTransfer()}>Registrar transferencia</button>

            <label>Razón de reapertura<input value={reopenReason} onChange={(e) => setReopenReason(e.target.value)} /></label>
            <button disabled={!reopenReason.trim()} onClick={() => void onReopen()}>Reabrir proyecto</button>

            <p>
              Portafolio: <strong>{project.portfolio.length}</strong> · Decisiones: <strong>{project.decisions.length}</strong> · Transferencias: <strong>{project.transfers.length}</strong>
            </p>
          </section>
        ) : null}

        <section className="live-state" aria-labelledby="knowledge-title">
          <h3 id="knowledge-title">Invocar conocimiento</h3>
          <p>Describe qué necesitas. La búsqueda ocurre localmente sobre un índice federado mínimo.</p>
          <label>
            Necesidad
            <textarea value={knowledgeNeed} onChange={(e) => setKnowledgeNeed(e.target.value)} />
          </label>
          <button disabled={!knowledgeNeed.trim()} onClick={onKnowledgeSearch}>Buscar orientación</button>
          {knowledgeResults.length > 0 ? (
            <div className="knowledge-results">
              {knowledgeResults.map((item) => (
                <article key={item.id} className="knowledge-item">
                  <h4>{item.title}</h4>
                  <p>{item.purpose}</p>
                  <p><strong>Fuente:</strong> {item.canonicalSource}</p>
                  <p><strong>Evidencia esperada:</strong> {item.evidenceHint}</p>
                  {project ? (
                    <button onClick={() => void onInvokeKnowledge(item)}>Invocar y registrar</button>
                  ) : null}
                </article>
              ))}
            </div>
          ) : null}
        </section>

        <div className="grid-two">
          <button disabled={!project} onClick={onExportZip}>Exportar paquete ZIP</button>
          <button disabled={!project} onClick={onExportJson}>Exportar JSON técnico</button>
        </div>
        <label className="import">
          Importar paquete
          <input
            type="file"
            accept="application/zip,.zip,application/json,.json"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              try { await onImport(file); }
              catch { setStatus("Importación rechazada: paquete inválido o no confiable."); }
              e.currentTarget.value = "";
            }}
          />
        </label>
      </section>
    </main>
  );
}
