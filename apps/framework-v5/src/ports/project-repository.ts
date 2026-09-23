import type { FrameworkProject } from "../domain/model";

export interface ProjectRepository {
  save(project: FrameworkProject): Promise<void>;
  get(id: string): Promise<FrameworkProject | null>;
  latest(): Promise<FrameworkProject | null>;
}
