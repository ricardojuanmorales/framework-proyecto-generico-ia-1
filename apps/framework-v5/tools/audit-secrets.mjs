import { readFile, readdir } from "node:fs/promises";

const src = new URL("../src/", import.meta.url);
const patterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /sk-[A-Za-z0-9_-]{20,}/,
  /ghp_[A-Za-z0-9]{20,}/,
  /AIza[0-9A-Za-z\-_]{30,}/,
];

async function walk(dirUrl) {
  const entries = await readdir(dirUrl, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const next = new URL(entry.name + (entry.isDirectory() ? "/" : ""), dirUrl);
    if (entry.isDirectory()) files.push(...await walk(next));
    else if (/\.(ts|tsx|json|css|html)$/.test(entry.name)) files.push(next);
  }
  return files;
}
const hits = [];
for (const file of await walk(src)) {
  const text = await readFile(file, "utf8");
  for (const pattern of patterns) if (pattern.test(text)) hits.push(file.pathname);
}
if (hits.length) {
  console.error("Secrets audit failed:\n" + [...new Set(hits)].join("\n"));
  process.exit(1);
}
console.log("Secrets audit: PASS");
