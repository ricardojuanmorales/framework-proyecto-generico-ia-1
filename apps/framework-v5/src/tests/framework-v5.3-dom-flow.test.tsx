// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { App } from "../presentation/App";
import { InMemoryProjectRepository } from "../adapters/memory/in-memory-project-repository";
(globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
let host: HTMLDivElement | undefined;
let root: Root | undefined;
afterEach(async () => { if(root) await act(async()=>root?.unmount());host?.remove();root=undefined;host=undefined; });

const formLabel = (name: string): HTMLLabelElement => {
  const labels=Array.from(host!.querySelectorAll("label"));
  const label=labels.find(l=>l.textContent?.trim().startsWith(name));
  if(!label) throw Error(`Label missing: ${name}`);
  return label;
};
const change = async (control: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, value:string) => {
  const setter=Object.getOwnPropertyDescriptor(control.tagName==="TEXTAREA"?HTMLTextAreaElement.prototype:control.tagName==="SELECT"?HTMLSelectElement.prototype:HTMLInputElement.prototype,"value")!.set!;
  await act(async()=>{setter.call(control,value);control.dispatchEvent(new Event(control.tagName==="SELECT"?"change":"input",{bubbles:true}));});
};
const button = (label:string):HTMLButtonElement => {
  const b=Array.from(host!.querySelectorAll("button")).find(x=>x.textContent?.trim()===label);
  if(!b)throw Error(`Button missing: ${label}`);
  return b;
};
describe("G-FW53-EXEC-01 interacción de formulario DOM en tres modos", () => {
  for(const mode of ["START","INTEGRATE","AUDIT"] as const){
    it(`${mode} requiere campos y guarda proyecto mediante UI`,async()=>{
      const repository=new InMemoryProjectRepository();
      host=document.createElement("div");document.body.appendChild(host);root=createRoot(host);
      await act(async()=>root!.render(<App repository={repository} persistenceMode="memory"/>));
      const selector=formLabel("Modo").querySelector("select")!;
      await change(selector,mode);
      expect(button(`Crear ${mode}`).disabled).toBe(true);
      await change(formLabel("Nombre").querySelector("input")!,"Piloto "+mode);
      await change(formLabel("Problema").querySelector("textarea")!,"Probar recorrido UI");
      await change(formLabel("Propósito").querySelector("textarea")!,"Preservar datos");
      if(mode!=="START"){
        expect(button(`Crear ${mode}`).disabled).toBe(true);
        await change(formLabel("Procedencia del proyecto existente").querySelector("textarea")!,"Proyecto previo autorizado");
      }
      if(mode==="AUDIT"){
        expect(button(`Crear ${mode}`).disabled).toBe(true);
        await change(formLabel("Foco de auditoría").querySelector("textarea")!,"Verificar procedencia");
      }
      expect(button(`Crear ${mode}`).disabled).toBe(false);
      await act(async()=>{button(`Crear ${mode}`).click();});
      const saved=await repository.latest();
      expect(saved?.mode).toBe(mode);
      expect(saved?.name).toBe("Piloto "+mode);
      expect(saved?.state.activeProfiles).toContain("PH");
      if(mode!=="START")expect(saved?.state.source?.preservationRule).toBe("preserve_source");
      if(mode==="AUDIT")expect(saved?.status).toBe("review");
      expect(button("Exportar JSON técnico").disabled).toBe(false);
      expect(button("Exportar paquete ZIP").disabled).toBe(false);
    });
  }
});
