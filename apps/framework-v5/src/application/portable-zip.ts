import { strFromU8, strToU8, unzipSync, zipSync } from "fflate";
import type { FrameworkProject, ProjectPackage } from "../domain/model";
import { materializePortableFiles, stageImport } from "./project-service";
import projectSchema from "../schemas/project.schema.json";
import frameworkStateSchema from "../schemas/framework-state.schema.json";
import portfolioSchema from "../schemas/portfolio.schema.json";
import decisionSchema from "../schemas/decision.schema.json";
import transferSchema from "../schemas/transfer.schema.json";
import knowledgeInvocationSchema from "../schemas/knowledge-invocation.schema.json";
import caleidoscopeEventSchema from "../schemas/caleidoscope-event.schema.json";

const encode = (value: string): Uint8Array => strToU8(value);
const decode = (value: Uint8Array | undefined, name: string): string => {
  if (!value) throw new Error(`ZIP_FILE_MISSING:${name}`);
  return strFromU8(value);
};

export const buildPortableZip = (project: FrameworkProject): Uint8Array => {
  const files = materializePortableFiles(project);
  const archive = {
    "README.md": encode(files["README.md"]),
    "manifest.json": encode(files["manifest.json"]),
    "framework-state.json": encode(files["framework-state.json"]),
    "portfolio.json": encode(files["portfolio.json"]),
    "decisions.json": encode(files["decisions.json"]),
    "transfers.json": encode(files["transfers.json"]),
    "knowledge-invocations.json": encode(files["knowledge-invocations.json"]),
    "caleidoscope-events.json": encode(files["caleidoscope-events.json"]),
    "schemas/project.schema.json": encode(JSON.stringify(projectSchema, null, 2)),
    "schemas/framework-state.schema.json": encode(JSON.stringify(frameworkStateSchema, null, 2)),
    "schemas/portfolio.schema.json": encode(JSON.stringify(portfolioSchema, null, 2)),
    "schemas/decision.schema.json": encode(JSON.stringify(decisionSchema, null, 2)),
    "schemas/transfer.schema.json": encode(JSON.stringify(transferSchema, null, 2)),
    "schemas/knowledge-invocation.schema.json": encode(JSON.stringify(knowledgeInvocationSchema, null, 2)),
    "schemas/caleidoscope-event.schema.json": encode(JSON.stringify(caleidoscopeEventSchema, null, 2)),
  };

  return zipSync(archive, { level: 6 });
};

interface PortableManifest {
  project_id: string;
  project_name: string;
  framework_version: "5.0.0";
  package_version: "0.1.0";
  mode: FrameworkProject["mode"];
  created_at: string;
  updated_at: string;
  schema_versions: { project: "0.1.0" };
  status: FrameworkProject["status"];
}

export const stagePortableZipImport = (bytes: Uint8Array): ProjectPackage => {
  const files = unzipSync(bytes);
  const manifest = JSON.parse(decode(files["manifest.json"], "manifest.json")) as PortableManifest;
  const state = JSON.parse(decode(files["framework-state.json"], "framework-state.json"));
  const portfolio = JSON.parse(decode(files["portfolio.json"], "portfolio.json"));
  const decisions = JSON.parse(decode(files["decisions.json"], "decisions.json"));
  const transfers = JSON.parse(decode(files["transfers.json"], "transfers.json"));
  const knowledgeInvocations = files["knowledge-invocations.json"]
    ? JSON.parse(decode(files["knowledge-invocations.json"], "knowledge-invocations.json"))
    : [];
  const caleidoscopeEvents = files["caleidoscope-events.json"]
    ? JSON.parse(decode(files["caleidoscope-events.json"], "caleidoscope-events.json"))
    : [];

  const project: FrameworkProject = {
    schemaVersion: manifest.schema_versions.project,
    id: manifest.project_id,
    name: manifest.project_name,
    mode: manifest.mode,
    status: manifest.status,
    frameworkVersion: manifest.framework_version,
    createdAt: manifest.created_at,
    updatedAt: manifest.updated_at,
    state,
    portfolio,
    decisions,
    transfers,
    knowledgeInvocations,
    caleidoscopeEvents,
  };

  return stageImport({
    packageType: "framework_project",
    packageVersion: manifest.package_version,
    exportedAt: new Date().toISOString(),
    project,
  });
};
