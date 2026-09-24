import { useEffect, useMemo, useState } from "react";
import type { FrameworkProject, MaturityLevel, Mode, Profile, ProjectPackage } from "../domain/model";
import type { ProjectRepository } from "../ports/project-repository";
import { recommendKnowledge } from "../application/knowledge-service";
import { buildPortableZip, stagePortableZipImport } from "../application/portable-zip";
import {
  addPortfolioEntry,
  correctPortfolioEntry,
  createProject,
  exportProject,
  importProject,
  invokeKnowledgeItem,
  recordDecision,
  recordTransfer,
  reopenProject,
  supersedeDecision,
  stageImport,
  updateMaturity,
  updateTransferState,
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
  const [portfolioFilter, setPortfolioFilter] = useState<"all" | "portfolio" | "decisions" | "transfers">("all");
  const [correctionText, setCorrectionText] = useState("");
  const [decisionRevision, setDecisionRevision] = useState("");
  const [decisionRevisionReason, setDecisionRevisionReason] = useState("");
  const [selectedPortfolioId, setSelectedPortfolioId] = useState<string | null>(null);
  const [selectedDecisionId, setSelectedDecisionId] = useState<string | null>(null);

  useEffect(() => {
    void repository.latest().then((latest) => {
      if (latest) {
        setProject(latest);
        setMode(latest.mode);
        setName(latest.name);
        setProblem(latest.state.problem);
        setContext(latest.state.context);
        setPurpose(latest.state.purpose);
        setProfiles(latest.state.activeProfiles);
        setSourceDescription(latest.state.source?.description ?? "");
        setSourceRepositoryUrl(latest.state.source?.repositoryUrl ?? "");
        setExistingArtifacts(latest.state.source?.existingArtifacts.join("\n") ?? "");
        setAuditFocus(latest.state.auditFocus ?? "");
        setStatus("Proyecto local restaurado.");
      }
    });
  }, [repository]);

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

  const onCorrectPortfolioEntry = async () => {
    if (!project || !selectedPortfolioId || !correctionText.trim()) return;
    const next = correctPortfolioEntry(project, selectedPortfolioId, correctionText);
    await persistProject(next, "Corrección trazable registrada en portafolio.");
    setCorrectionText("");
    setSelectedPortfolioId(null);
  };

  const onSupersedeDecision = async () => {
    if (!project || !selectedDecisionId || !decisionRevision.trim()) return;
    const next = supersedeDecision(project, selectedDecisionId, decisionRevision, decisionRevisionReason);
    await persistProject(next, "Nueva decisión registrada sin borrar la anterior.");
    setDecisionRevision("");
    setDecisionRevisionReason("");
    setSelectedDecisionId(null);
  };

  const onTransferState = async (id: string, state: "proposed" | "accepted" | "completed" | "reopened") => {
    if (!project) return;
    const next = updateTransferState(project, id, state);
    await persistProject(next, "Estado de transferencia actualizado.");
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
    try {
      const target = project ?? await repository.latest();
      if (!target) {
        setStatus("No hay proyecto activo o persistido para registrar la invocación.");
        return;
      }
      const next = invokeKnowledgeItem(target, item);
      await repository.save(next);
      setProject(next);
      setStatus(`Conocimiento invocado: ${item.title}. Registrado en ${next.name}.`);
    } catch (error) {
      const message = error instanceof Error ? error.message : "ERROR_DESCONOCIDO";
      setStatus(`No se pudo registrar la invocación: ${message}`);
    }
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
    const zipBuffer = Uint8Array.from(bytes).buffer;
    downloadBlob(new Blob([zipBuffer], { type: "application/zip" }), `${project.id}.framework-v5.zip`);
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

      <section aria-labelledby="learn-title" className="card learn-zone">
        <h2 id="learn-title">Aprender</h2>
        <p className="lead"><strong>Empieza por el problema, no por las herramientas.</strong> El Framework ayuda a decidir qué lentes, conocimientos y niveles de apoyo necesitas para actuar con trazabilidad sin inflar el proceso.</p>

        <div className="learn-path" aria-label="Ruta breve de aprendizaje">
          <span>1 · Problema</span>
          <span>2 · Lentes</span>
          <span>3 · Madurez</span>
          <span>4 · Evidencia</span>
          <span>5 · Decisión humana</span>
        </div>

        <details open>
          <summary><strong>1. ¿Qué problema resuelve el Framework?</strong></summary>
          <p>Ayuda a personas, equipos, máquinas e IA a trabajar sobre problemas complejos de forma situada, trazable y evolutiva. No obliga a usar todos los perfiles ni toda la documentación.</p>
          <p><strong>Pregunta guía:</strong> ¿Qué necesito comprender, construir o transformar para avanzar responsablemente?</p>
        </details>

        <details>
          <summary><strong>2. ¿Qué son PH, IT y AT?</strong></summary>
          <div className="grid-two">
            <article>
              <h3>PH · Programador Humanista</h3>
              <p>Se ocupa de construir e integrar tecnología de manera situada, responsable y comprensible.</p>
              <p><strong>Actívalo cuando:</strong> hay que diseñar, implementar, integrar o gobernar una solución tecnológica.</p>
            </article>
            <article>
              <h3>IT · Investigador Transdisciplinario</h3>
              <p>Cuida método, evidencia, validez, límites del conocimiento y coherencia epistemológica.</p>
              <p><strong>Actívalo cuando:</strong> necesitas investigar, contrastar afirmaciones, diseñar evidencia o evaluar qué puede sostenerse.</p>
            </article>
            <article>
              <h3>AT · Artista Transdisciplinario</h3>
              <p>Aporta percepción, imaginación, mediación, experiencia y transformación sensible del problema.</p>
              <p><strong>Actívalo cuando:</strong> la experiencia, la representación, la mediación cultural o nuevas formas de percibir son materiales para la solución.</p>
            </article>
          </div>
          <p><strong>Importante:</strong> consultar conocimiento de un perfil no significa activarlo automáticamente. La activación debe responder al problema real.</p>
        </details>

        <details>
          <summary><strong>3. ¿Qué es el Caleidoscopio?</strong></summary>
          <p>No es un cuarto perfil. Es una propiedad emergente que puede aparecer cuando dos o más lentes activas producen una relación nueva, trazable y útil que ninguna generaría por sí sola.</p>
          <p><strong>Pregunta guía:</strong> ¿la combinación está produciendo algo nuevo o solo estamos acumulando perspectivas?</p>
        </details>

        <details>
          <summary><strong>4. ¿Qué significan N1–N4?</strong></summary>
          <div className="grid-two">
            <article><h3>N1 · Exploración guiada</h3><p>Se entiende el problema y se prueba con acompañamiento cercano.</p></article>
            <article><h3>N2 · Producción asistida</h3><p>Ya existe producción útil con evidencia y apoyo estructurado.</p></article>
            <article><h3>N3 · Integración avanzada</h3><p>Las capacidades se coordinan con mayor autonomía, trazabilidad y transferencia.</p></article>
            <article><h3>N4 · Ecosistema gobernado</h3><p>La operación es sostenible, revisable y gobernada. No significa “más IA” ni “más documentos”.</p></article>
          </div>
          <p><strong>No son puntuaciones.</strong> El nivel describe una condición operacional situada del proyecto y su autonomía.</p>
        </details>

        <details>
          <summary><strong>5. ¿Qué papel tienen humano, máquina e IA?</strong></summary>
          <p><strong>Framework propone.</strong> La IA puede explicar, comparar, resumir, detectar tensiones y sugerir opciones. La máquina ejecuta y produce evidencia verificable. <strong>La persona decide y autoriza lo material.</strong></p>
          <p>La IA no es juez final, no modifica el canon por sí sola y no debe activar cambios irreversibles sin revisión humana.</p>
        </details>

        <details>
          <summary><strong>6. ¿Cómo empiezo?</strong></summary>
          <p>Elige el modo que corresponda:</p>
          <ul>
            <li><strong>START:</strong> comienzas un proyecto nuevo.</li>
            <li><strong>INTEGRATE:</strong> incorporas el Framework a un proyecto existente sin colonizar su estructura.</li>
            <li><strong>AUDIT:</strong> contrastas un proyecto maduro sin asumir que debe reorganizarse.</li>
          </ul>
          <p>Después registra solo lo necesario: decisiones, evidencia, transferencias, nivel de madurez e invocaciones de conocimiento.</p>
        </details>
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

        {project ? (
          <section className="portfolio-zone" aria-labelledby="portfolio-title">
            <div className="portfolio-header">
              <div>
                <h3 id="portfolio-title">Portafolio</h3>
                <p>Memoria viva del proyecto: revisar, corregir y continuar sin borrar historia.</p>
              </div>
              <div className="portfolio-tabs" aria-label="Filtros de portafolio">
                {(["all","portfolio","decisions","transfers"] as const).map((filter) => (
                  <button
                    key={filter}
                    className={portfolioFilter === filter ? "active" : ""}
                    onClick={() => setPortfolioFilter(filter)}
                  >
                    {filter === "all" ? "Todo" : filter === "portfolio" ? "Entradas" : filter === "decisions" ? "Decisiones" : "Transferencias"}
                  </button>
                ))}
              </div>
            </div>

            <div className="portfolio-summary grid-two">
              <article><strong>Estado</strong><p>{project.status}</p></article>
              <article><strong>Madurez</strong><p>{project.state.projectLevel} · autonomía {project.state.autonomyLevel}</p></article>
              <article><strong>Perfiles activos</strong><p>{project.state.activeProfiles.join(", ")}</p></article>
              <article><strong>Siguiente paso</strong><p>{project.state.nextStep}</p></article>
            </div>

            {(portfolioFilter === "all" || portfolioFilter === "portfolio") ? (
              <div className="portfolio-list">
                <h4>Entradas</h4>
                {project.portfolio.length === 0 ? <p>Sin entradas todavía.</p> : project.portfolio.map((entry) => (
                  <article key={entry.id} className="record-card">
                    <div className="record-meta"><span>{entry.type}</span><time>{new Date(entry.createdAt).toLocaleString()}</time></div>
                    <h5>{entry.title}</h5>
                    <p>{entry.summary}</p>
                    <button onClick={() => setSelectedPortfolioId(entry.id)}>Registrar corrección</button>
                    {selectedPortfolioId === entry.id ? (
                      <div className="record-action">
                        <label>Corrección o aclaración<textarea value={correctionText} onChange={(e) => setCorrectionText(e.target.value)} /></label>
                        <button disabled={!correctionText.trim()} onClick={() => void onCorrectPortfolioEntry()}>Guardar como nueva entrada trazable</button>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}

            {(portfolioFilter === "all" || portfolioFilter === "decisions") ? (
              <div className="portfolio-list">
                <h4>Decisiones humanas</h4>
                {project.decisions.length === 0 ? <p>Sin decisiones todavía.</p> : project.decisions.map((decision) => (
                  <article key={decision.id} className="record-card">
                    <div className="record-meta"><span>{decision.authority}</span><time>{new Date(decision.createdAt).toLocaleString()}</time></div>
                    <h5>{decision.question}</h5>
                    <p><strong>Decisión:</strong> {decision.decision}</p>
                    <p><strong>Razón:</strong> {decision.reason}</p>
                    <p><strong>Reversible:</strong> {decision.reversible}</p>
                    <button onClick={() => setSelectedDecisionId(decision.id)}>Revisar / superseder</button>
                    {selectedDecisionId === decision.id ? (
                      <div className="record-action">
                        <label>Nueva decisión<input value={decisionRevision} onChange={(e) => setDecisionRevision(e.target.value)} /></label>
                        <label>Razón de la revisión<textarea value={decisionRevisionReason} onChange={(e) => setDecisionRevisionReason(e.target.value)} /></label>
                        <button disabled={!decisionRevision.trim()} onClick={() => void onSupersedeDecision()}>Registrar nueva decisión</button>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}

            {(portfolioFilter === "all" || portfolioFilter === "transfers") ? (
              <div className="portfolio-list">
                <h4>Transferencias</h4>
                {project.transfers.length === 0 ? <p>Sin transferencias todavía.</p> : project.transfers.map((transfer) => (
                  <article key={transfer.id} className="record-card">
                    <h5>{transfer.origin} → {transfer.destination}</h5>
                    <p><strong>Objeto:</strong> {transfer.object}</p>
                    <p><strong>Propósito:</strong> {transfer.purpose}</p>
                    <label>
                      Estado
                      <select value={transfer.state} onChange={(e) => void onTransferState(transfer.id, e.target.value as "proposed" | "accepted" | "completed" | "reopened")}>
                        <option value="proposed">proposed</option>
                        <option value="accepted">accepted</option>
                        <option value="completed">completed</option>
                        <option value="reopened">reopened</option>
                      </select>
                    </label>
                  </article>
                ))}
              </div>
            ) : null}
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
                  <p className="hint">
                    Destino: <strong>{project?.name ?? "último proyecto local persistido"}</strong>
                  </p>
                  <button
                    type="button"
                    title="Registrar esta invocación en el proyecto activo o en el último proyecto local persistido"
                    onClick={() => void onInvokeKnowledge(item)}
                  >
                    Invocar y registrar
                  </button>
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
