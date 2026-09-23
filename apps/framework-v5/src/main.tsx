import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LocalStorageProjectRepository } from "./adapters/storage/local-storage-project-repository";
import { InMemoryProjectRepository } from "./adapters/memory/in-memory-project-repository";
import { App } from "./presentation/App";
import "./presentation/styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("APP_ROOT_MISSING");

const resolveStorage = (): Storage | null => {
  try {
    const storage = globalThis.localStorage;
    const probe = "framework-v5:probe";
    storage.setItem(probe, "1");
    storage.removeItem(probe);
    return storage;
  } catch {
    return null;
  }
};

const storage = resolveStorage();
const repository = storage
  ? new LocalStorageProjectRepository(storage)
  : new InMemoryProjectRepository();

createRoot(root).render(
  <StrictMode>
    <App repository={repository} persistenceMode={storage ? "local" : "memory"} />
  </StrictMode>,
);
