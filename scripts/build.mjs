#!/usr/bin/env node
/**
 * Plug-and-play landing page builder.
 *
 * Usage:
 *   node scripts/build.mjs [--client <slug>] [other flags]
 *
 * With --client <slug>, resolves:
 *   --brand    clients/<slug>/brand.config.json
 *   --content  clients/<slug>/content.config.json
 *   --template clients/<slug>/template.html (if present) else pipeline/templates/landing.html
 *   --out      clients/<slug>/build/index.html
 *
 * Any flag explicitly passed overrides the client-derived default.
 *
 * Template syntax (in templates and section files):
 *   {{> section-name}}                            include pipeline/sections/<name>.html
 *   {{brand.colors.teal}} / {{content.hero.headline}}   dotted-path lookup
 *   {{#content.modules.items}} ... {{/...}}       iterate; inside, {{.}} is the scalar item
 *
 * Missing tokens warn but don't crash.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

const args = parseArgs(process.argv.slice(2));
const CLIENT = args.client ?? "calm-code";

const BRAND_PATH    = args.brand    ?? `clients/${CLIENT}/brand.config.json`;
const CONTENT_PATH  = args.content  ?? `clients/${CLIENT}/content.config.json`;
const CLIENT_TPL    = `clients/${CLIENT}/template.html`;
const TEMPLATE_PATH = args.template ?? (existsSync(CLIENT_TPL) ? CLIENT_TPL : "pipeline/templates/landing.html");
const SECTIONS_DIR  = args.sections ?? "pipeline/sections";
const OUT_PATH      = args.out      ?? `clients/${CLIENT}/build/index.html`;

const brand   = readJson(BRAND_PATH);
const content = readJson(CONTENT_PATH);
const root    = { brand, content };
const warnings = new Set();

let html = readFileSync(TEMPLATE_PATH, "utf8");
html = expandPartials(html);
html = render(html, [root]);

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, html);

console.log(`built  ${OUT_PATH}  (${html.length.toLocaleString()} bytes)  [client: ${CLIENT}, template: ${TEMPLATE_PATH}]`);
if (warnings.size) {
  console.log(`warnings:`);
  for (const w of warnings) console.log(`  - ${w}`);
}

// ---- internals -------------------------------------------------------------

function expandPartials(src) {
  for (let i = 0; i < 10; i++) {
    let changed = false;
    src = src.replace(/\{\{>\s*([\w./-]+)\s*\}\}/g, (_, name) => {
      const file = resolve(SECTIONS_DIR, `${name}.html`);
      if (!existsSync(file)) {
        warnings.add(`missing section: ${name} (expected at ${file})`);
        return "";
      }
      changed = true;
      return readFileSync(file, "utf8");
    });
    if (!changed) break;
  }
  return src;
}

function render(src, stack) {
  while (true) {
    const m = src.match(/\{\{#\s*([\w.]+)\s*\}\}((?:(?!\{\{#)[\s\S])*?)\{\{\/\s*\1\s*\}\}/);
    if (!m) break;
    const [full, path, inner] = m;
    const arr = lookupStack(stack, path);
    let rendered = "";
    if (Array.isArray(arr)) {
      for (const item of arr) rendered += render(inner, [item, ...stack]);
    } else if (arr) {
      rendered = render(inner, [arr, ...stack]);
    } else {
      warnings.add(`missing array: ${path}`);
    }
    src = src.slice(0, m.index) + rendered + src.slice(m.index + full.length);
  }

  src = src.replace(/\{\{\s*([.\w-]+)\s*\}\}/g, (_, path) => {
    if (path === ".") {
      const top = stack[0];
      if (top !== undefined && (typeof top === "string" || typeof top === "number")) return String(top);
      warnings.add(`{{.}} used outside a scalar loop`);
      return "";
    }
    const v = lookupStack(stack, path);
    if (v === undefined || v === null) {
      warnings.add(`missing token: ${path}`);
      return "";
    }
    return String(v);
  });

  return src;
}

function lookupStack(stack, path) {
  for (const frame of stack) {
    const v = lookup(frame, path);
    if (v !== undefined) return v;
  }
  return undefined;
}

function lookup(obj, path) {
  return path.split(".").reduce((acc, k) => (acc == null ? undefined : acc[k]), obj);
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) out[a.slice(2)] = argv[++i];
  }
  return out;
}
