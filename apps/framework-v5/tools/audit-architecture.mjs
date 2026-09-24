import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../src/domain/", import.meta.url);
const forbidden = ["/presentation/", "/adapters/", "react", "localStorage", "window.", "document."];

async function walk(dirUrl) {
  const entries = await readdir(dirUrl, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const next = new URL(entry.name + (entry.isDirectory() ? "/" : ""), dirUrl);
    if (entry.isDirectory()) files.push(...await walk(next));
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(next);
  }
  return files;
}

const violations = [];
for (const file of await walk(root)) {
  const text = await readFile(file, "utf8");
  for (const token of forbidden) {
    if (text.includes(token)) violations.push(`${file.pathname}: ${token}`);
  }
}
if (violations.length) {
  console.error("Architecture audit failed:\n" + violations.join("\n"));
  process.exit(1);
}
console.log("Architecture audit: PASS");
