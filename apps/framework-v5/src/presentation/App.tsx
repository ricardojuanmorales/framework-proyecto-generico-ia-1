import { useMemo, useState } from "react";
import type { FrameworkProject, Profile, ProjectPackage } from "../domain/model";
import type { ProjectRepository } from "../ports/project-repository";
import { createProject, exportProject, importProject, stageImport } from "../application/project-service";

interface Props {
  repository: ProjectRepository;
  persistenceMode: "local" | "memory";
}

export function App({ repository, persistenceMode }: Props) {
  const [project, setProject] = useState<FrameworkProject | null>(null);
  const [status, setStatus] = useState("Listo para START.");
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const [purpose, setPurpose] = useState("");
  const [context, setContext] = useState("");
  const [profiles, setProfiles] = useState<Profile[]>(["PH"]);

  const canCreate = useMemo(
    () => name.trim() && problem.trim() && purpose.trim() && profiles.length > 0,
    [name, problem, purpose, profiles],
  );

  const toggleProfile = (profile: Profile) => {
    setProfiles((current) =>
      current.includes(profile) ? current.filter((p) => p !== profile) : [...current, profile],
    );
  };

  const onCreate = async () => {
    const next = createProject({ name, problem, purpose, context, activeProfiles: profiles });
    await repository.save(next);
    setProject(next);
    setStatus("Proyecto START creado y persistido.");
  };

  const onExport = () => {
    if (!project) return;
    const pkg = exportProject(project);
    const blob = new Blob([JSON.stringify(pkg, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${project.id}.framework-v5.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    setStatus("Paquete portable exportado.");
  };

  const onImport = async (file: File) => {
    if (file.size > 2_000_000) throw new Error("IMPORT_FILE_TOO_LARGE");
    const parsed: unknown = JSON.parse(await file.text());
    const staged: ProjectPackage = stageImport(parsed);
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
        <p className="eyebrow">Framework Genérico V5 · vertical slice 0.1</p>
        <h1>START local-first</h1>
        <p>Crear, persistir, exportar e importar sin backend ni IA externa.</p>
        <p className="mode">Persistencia: <strong>{persistenceMode}</strong></p>
      </header>

      <section aria-labelledby="start-title" className="card">
        <h2 id="start-title">Crear proyecto</h2>
        <label>Nombre<input value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label>Problema<textarea value={problem} onChange={(e) => setProblem(e.target.value)} /></label>
        <label>Contexto<textarea value={context} onChange={(e) => setContext(e.target.value)} /></label>
        <label>Propósito<textarea value={purpose} onChange={(e) => setPurpose(e.target.value)} /></label>
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
        <button disabled={!canCreate} onClick={onCreate}>Crear START</button>
      </section>

      <section className="card" aria-live="polite">
        <h2>Estado</h2>
        <p>{status}</p>
        {project ? (
          <dl>
            <dt>Proyecto</dt><dd>{project.name}</dd>
            <dt>Problema</dt><dd>{project.state.problem}</dd>
            <dt>Propósito</dt><dd>{project.state.purpose}</dd>
            <dt>Nivel</dt><dd>{project.state.projectLevel}</dd>
            <dt>Perfiles</dt><dd>{project.state.activeProfiles.join(", ")}</dd>
            <dt>Siguiente paso</dt><dd>{project.state.nextStep}</dd>
          </dl>
        ) : <p>No hay proyecto activo.</p>}
        <button disabled={!project} onClick={onExport}>Exportar paquete</button>
        <label className="import">
          Importar paquete
          <input
            type="file"
            accept="application/json,.json"
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
