import { readFile, readdir } from "node:fs/promises";

const src = new URL("../src/", import.meta.url);
const forbidden = ["google-analytics", "gtag(", "mixpanel", "segment.io", "sentry.init", "posthog"];

async function walk(dirUrl) {
  const entries = await readdir(dirUrl, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const next = new URL(entry.name + (entry.isDirectory() ? "/" : ""), dirUrl);
    if (entry.isDirectory()) files.push(...await walk(next));
    else if (/\.(ts|tsx|js|jsx|html)$/.test(entry.name)) files.push(next);
  }
  return files;
}

const violations = [];
for (const file of await walk(src)) {
  const text = (await readFile(file, "utf8")).toLowerCase();
  for (const token of forbidden) if (text.includes(token)) violations.push(`${file.pathname}: ${token}`);
}
if (violations.length) {
  console.error("Privacy audit failed:\n" + violations.join("\n"));
  process.exit(1);
}
console.log("Privacy audit: PASS");
