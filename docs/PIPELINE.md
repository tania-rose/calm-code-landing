# Landing Page Pipeline

Plug-and-play landing page builder. Drop in a client's brand tokens + copy, run one command, get a deployable `index.html`.

## How it works

```
pipeline/
├── brand.config.json      ← client tokens (colors, fonts, shadows, tone)
├── content.config.json    ← client copy (sections, items, CTAs, meta)
├── assets/                ← client images, logos, favicons
├── sections/              ← reusable HTML fragments (one file per section)
├── templates/
│   └── landing.html       ← page assembly: lists which sections, in what order
└── build/
    └── index.html         ← generated output (gitignored)
```

The build script (`scripts/build.mjs`) reads the template, inlines each section, and substitutes `{{brand.…}}` and `{{content.…}}` tokens from the two JSON configs.

## Build

```bash
node scripts/build.mjs
```

That's it. Defaults to `pipeline/brand.config.json` + `pipeline/content.config.json` → `pipeline/build/index.html`. To build a different client without touching the defaults:

```bash
node scripts/build.mjs \
  --brand   clients/acme/brand.json \
  --content clients/acme/content.json \
  --out     clients/acme/index.html
```

## Template syntax

Three constructs, deliberately minimal:

| Syntax | Meaning |
|---|---|
| `{{> section-name}}`                       | Inline `pipeline/sections/section-name.html`. |
| `{{brand.colors.teal}}` / `{{content.hero.headline}}` | Resolve a dotted path from the JSON configs. |
| `{{#content.modules.items}} … {{/content.modules.items}}` | Loop over an array; inside, `{{title}}` resolves from the current item first, then falls back to root. `{{.}}` is the current item when it's a scalar (string/number). |

Missing tokens warn but don't crash — the page still builds while the schema is in flux.

## Adding a new section

1. Create `pipeline/sections/my-section.html` (an HTML fragment, not a full document).
2. Reference content via `{{content.my_section.…}}` tokens.
3. Add `my_section` to `content.config.json`.
4. Add `{{> my-section}}` to `pipeline/templates/landing.html` in the position you want.
5. `node scripts/build.mjs`.

## Adding a new brand token

1. Add the key to `brand.config.json` under the appropriate group (`colors`, `fonts`, `shadows`, …).
2. Reference it from `pipeline/sections/_tokens.html` as a CSS variable: `--my-token: {{brand.group.my-token}};`.
3. Use the CSS variable in any section: `style="background: var(--my-token);"`.

## Brand-schema slot

`brand.config.json` and `content.config.json` are **placeholders**. They mirror the keys used by the current section templates so the build is green. When the client brand-brief schema is finalised, swap these two files (and rename token references in `pipeline/sections/_tokens.html` to match). Section markup itself should rarely need to change.

## Deploy

The output is a single self-contained `index.html` (inline CSS, Google Fonts via CDN). Same deploy paths as the original prototype:

| Target        | Method                                |
|---------------|----------------------------------------|
| GoHighLevel   | Paste `pipeline/build/index.html` into the custom-page editor. |
| GitHub Pages  | Settings → Pages → main branch, point at the built file. |
| Netlify       | Drag-drop `pipeline/build/`. |

## References

`references/` holds 13 shallow-cloned repos used as design/code inspiration — see [REPOS.md](./REPOS.md). The directory is gitignored. Re-fetch any time with:

```bash
bash scripts/fetch-references.sh
```
