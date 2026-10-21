// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { App } from "../presentation/App";
import { InMemoryProjectRepository } from "../adapters/memory/in-memory-project-repository";

(globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
let root: Root | undefined;
let host: HTMLElement | undefined;

afterEach(async () => {
  if (root) await act(async () => root?.unmount());
  host?.remove();
  root = undefined;
  host = undefined;
});

describe("G-FW53: interfaz de los tres modos en DOM aislado", () => {
  it("monta sin backend, expone tres modos y protege exportación antes de crear proyecto", async () => {
    host = document.createElement("div");
    document.body.appendChild(host);
    root = createRoot(host);
    await act(async () => {
      root?.render(<App repository={new InMemoryProjectRepository()} persistenceMode="memory" />);
    });
    const modeSelector = host.querySelector<HTMLSelectElement>('select');
    expect(modeSelector).not.toBeNull();
    expect(Array.from(modeSelector!.options, (item) => item.value)).toEqual(["START","INTEGRATE","AUDIT"]);
    const buttons = Array.from(host.querySelectorAll("button"));
    expect(buttons.find((b) => b.textContent?.includes("Crear START"))?.disabled).toBe(true);
    expect(buttons.find((b) => b.textContent?.includes("Exportar paquete ZIP"))?.disabled).toBe(true);
    expect(buttons.find((b) => b.textContent?.includes("Exportar JSON técnico"))?.disabled).toBe(true);
    expect(host.textContent).toContain("local-first");
  });
});
