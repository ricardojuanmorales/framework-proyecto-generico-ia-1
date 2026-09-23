import type { FrameworkProject } from "../../domain/model";
import type { ProjectRepository } from "../../ports/project-repository";

export class InMemoryProjectRepository implements ProjectRepository {
  private readonly projects = new Map<string, FrameworkProject>();
  private latestId: string | null = null;

  async save(project: FrameworkProject): Promise<void> {
    this.projects.set(project.id, structuredClone(project));
    this.latestId = project.id;
  }

  async get(id: string): Promise<FrameworkProject | null> {
    const value = this.projects.get(id);
    return value ? structuredClone(value) : null;
  }

  async latest(): Promise<FrameworkProject | null> {
    return this.latestId ? this.get(this.latestId) : null;
  }
}
