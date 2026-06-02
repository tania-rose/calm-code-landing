#!/usr/bin/env node
/**
 * Plug-and-play landing page builder.
 *
 * Inputs:
 *   --brand    path to brand config JSON   (default: pipeline/brand.config.json)
 *   --content  path to content config JSON (default: pipeline/content.config.json)
 *   --template path to page template HTML  (default: pipeline/templates/landing.html)
 *   --sections path to sections directory  (default: pipeline/sections)
 *   --out      path to write rendered HTML (default: pipeline/build/index.html)
 *
 * Syntax inside templates and section files:
 *
 *   {{> section-name}}
 *       Include pipeline/sections/section-name.html. The included content
 *       is also rendered (token replacement runs after inclusion).
 *
 *   {{brand.colors.teal}}
 *   {{content.hero.headline}}
 *       Resolve a dotted path against the merged context { brand, content }.
 *
 *   {{#content.modules.items}} ... {{/content.modules.items}}
 *       Iterate over an array. Inside the block the current item is pushed
 *       onto the context stack — top-level keys like {{title}} resolve from
 *       the item first, then fall back to {brand, content}.
 *
 * Missing tokens emit a warning and render as empty string so the page
 * still builds while the schema is in flux.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

const args = parseArgs(process.argv.slice(2));
const BRAND_PATH    = args.brand    ?? "pipeline/brand.config.json";
const CONTENT_PATH  = args.content  ?? "pipeline/content.config.json";
const TEMPLATE_PATH = args.template ?? "pipeline/templates/landing.html";
const SECTIONS_DIR  = args.sections ?? "pipeline/sections";
const OUT_PATH      = args.out      ?? "pipeline/build/index.html";

const brand   = readJson(BRAND_PATH);
const content = readJson(CONTENT_PATH);
const root    = { brand, content };
const warnings = new Set();

let html = readFileSync(TEMPLATE_PATH, "utf8");
html = expandPartials(html);
html = render(html, [root]);

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, html);

console.log(`built  ${OUT_PATH}  (${html.length.toLocaleString()} bytes)`);
if (warnings.size) {
  console.log(`warnings:`);
  for (const w of warnings) console.log(`  - ${w}`);
}

// ---- internals -------------------------------------------------------------

function expandPartials(src) {
  // Multiple passes in case a partial includes another partial.
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
  // 1. Handle loop blocks first, innermost-out, to keep regex simple.
  while (true) {
    // Match a block with no nested same-name block inside.
    const m = src.match(/\{\{#\s*([\w.]+)\s*\}\}((?:(?!\{\{#)[\s\S])*?)\{\{\/\s*\1\s*\}\}/);
    if (!m) break;
    const [full, path, inner] = m;
    const arr = lookupStack(stack, path);
    let rendered = "";
    if (Array.isArray(arr)) {
      for (const item of arr) {
        rendered += render(inner, [item, ...stack]);
      }
    } else if (arr) {
      // truthy non-array: render once with arr pushed on stack (Mustache-ish).
      rendered = render(inner, [arr, ...stack]);
    } else {
      warnings.add(`missing array: ${path}`);
    }
    src = src.slice(0, m.index) + rendered + src.slice(m.index + full.length);
  }

  // 2. Token replacement. `{{.}}` references the current scalar loop item.
  // Path segments allow word chars and hyphens (e.g. brand.colors.bg-warm).
  src = src.replace(/\{\{\s*([.\w-]+)\s*\}\}/g, (_, path) => {
    if (path === ".") {
      const top = stack[0];
      if (top !== undefined && (typeof top === "string" || typeof top === "number")) {
        return String(top);
      }
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
