import type { FrameworkProject } from "../../domain/model";
import type { ProjectRepository } from "../../ports/project-repository";
import { validateProject } from "../../schemas/runtime-validators";

const PREFIX = "framework-v5:project:";
const LATEST = "framework-v5:latest";

export class LocalStorageProjectRepository implements ProjectRepository {
  constructor(private readonly storage: Storage) {}

  async save(project: FrameworkProject): Promise<void> {
    if (!validateProject(project)) throw new Error("PERSISTENCE_PROJECT_INVALID");
    this.storage.setItem(`${PREFIX}${project.id}`, JSON.stringify(project));
    this.storage.setItem(LATEST, project.id);
  }

  async get(id: string): Promise<FrameworkProject | null> {
    const raw = this.storage.getItem(`${PREFIX}${id}`);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!validateProject(parsed)) throw new Error("PERSISTENCE_DATA_CORRUPTED");
    return parsed as FrameworkProject;
  }

  async latest(): Promise<FrameworkProject | null> {
    const id = this.storage.getItem(LATEST);
    return id ? this.get(id) : null;
  }
}
