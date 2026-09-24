import { readFile } from "node:fs/promises";

const app = await readFile(new URL("../src/presentation/App.tsx", import.meta.url), "utf8");
const checks = [
  ["main landmark", app.includes("<main")],
  ["label usage", app.includes("<label")],
  ["fieldset/legend", app.includes("<fieldset") && app.includes("<legend")],
  ["aria-live status", app.includes('aria-live="polite"')],
  ["section headings", app.includes("<h2")],
];
const failed = checks.filter(([, ok]) => !ok);
if (failed.length) {
  console.error("Accessibility baseline failed: " + failed.map(([name]) => name).join(", "));
  process.exit(1);
}
console.log("Accessibility baseline: PASS");
