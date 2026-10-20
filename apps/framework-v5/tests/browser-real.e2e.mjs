import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("/tmp/fw53-playwright/node_modules/playwright");

const base = process.env.E2E_BASE_URL || "http://127.0.0.1:4173/";
const browser = await chromium.launch({ headless: true });
try {
  for (const mode of ["START", "INTEGRATE", "AUDIT"]) {
    const context = await browser.newContext({ acceptDownloads: true });
    const page = await context.newPage();
    page.on("dialog", dialog => dialog.dismiss());
    const browserErrors = [];
    page.on("pageerror", err => browserErrors.push(String(err)));
    page.on("console", m => { if (m.type() === "error") browserErrors.push(m.text()); });
    await page.goto(base);
    await page.waitForLoadState("networkidle");
    const selectors = await page.locator("select").count();
    process.stdout.write("DIAG "+mode+" select-count="+selectors+" title="+await page.title()+" body="+(await page.locator("body").innerText()).slice(0,250)+" errors="+browserErrors.join("|")+"\\n");
    assert.ok(selectors > 0, "No select elements rendered: " + browserErrors.join("|"));
    const label = (name) => page.getByLabel(name, { exact: true });
    await page.locator("select").first().selectOption(mode);
    await label("Nombre").fill("Prueba E2E " + mode);
    await label("Problema").fill("Verificar persistencia en Chromium");
    await label("Propósito").fill("Ensayo sintético sin datos personales");
    if (mode !== "START") await label("Procedencia del proyecto existente").fill("Origen independiente conservado");
    if (mode === "AUDIT") await label("Foco de auditoría").fill("Auditar trazabilidad sin alterar fuente");
    await page.getByRole("button", { name: "Crear " + mode }).click();
    await page.getByText("Proyecto " + mode + " creado y persistido.").waitFor();
    await page.reload();
    await page.getByText("Proyecto local restaurado.").waitFor();
    const area = page.locator("section").filter({ has: page.locator("h2", { hasText: "Estado" }) }).first();
    await area.getByText("Prueba E2E " + mode).waitFor();
    if(mode !== "START") await area.getByText("preserve_source").waitFor();
    if(mode === "AUDIT") await area.getByText("Auditar trazabilidad sin alterar fuente").waitFor();
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("button", { name: "Exportar JSON técnico" }).click();
    const dl = await downloadPromise;
    const bytes = await (await dl.createReadStream()).toArray();
    const pkg = JSON.parse(Buffer.concat(bytes).toString("utf8"));
    assert.equal(pkg.project.mode, mode);
    assert.equal(pkg.project.name, "Prueba E2E " + mode);
    const chooser = page.locator('input[type="file"]');
    await chooser.setInputFiles({name:"invalid.json", mimeType:"application/json",buffer:Buffer.from('{"untrusted":true}')});
    await page.getByText(/Rechazado: invalid.json/).waitFor();
    await chooser.setInputFiles({name:"valid.json", mimeType:"application/json",buffer:Buffer.from(JSON.stringify(pkg))});
    await page.getByText(/Importación cancelada: valid.json/).waitFor();
    await context.close();
    process.stdout.write("PASS "+mode+" browser persistence/export/import rejection & cancellation\n");
  }
} finally { await browser.close(); }
