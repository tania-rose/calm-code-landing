#!/usr/bin/env node
/**
 * Build every client in clients/ (excluding _template).
 * Continues on individual client failures and reports a summary.
 */
import { readdirSync, statSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const clients = readdirSync("clients").filter(name => {
  if (name.startsWith("_")) return false;
  if (!statSync(`clients/${name}`).isDirectory()) return false;
  return existsSync(`clients/${name}/brand.config.json`);
});

let ok = 0, fail = 0;
for (const client of clients) {
  const r = spawnSync("node", ["scripts/build.mjs", "--client", client], { stdio: "inherit" });
  if (r.status === 0) ok++; else fail++;
}
console.log(`\n${ok} built, ${fail} failed (${clients.length} clients)`);
process.exit(fail ? 1 : 0);
