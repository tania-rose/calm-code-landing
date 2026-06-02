# Landing Page Pipeline

Plug-and-play landing page builder. Drop in a client's brand tokens + copy + images, run one command, get a deployable `index.html`.

## How it works

```
.
├── pipeline/              ← shared building blocks (sections, default template)
│   ├── sections/          ← reusable HTML fragments (one file per section)
│   └── templates/
│       └── landing.html   ← default page assembly (used if a client has none)
├── clients/               ← one directory per client
│   ├── _template/         ← bootstrap skeleton (copy to start a new client)
│   ├── calm-code/         ← example client
│   │   ├── brand.config.json
│   │   ├── content.config.json
│   │   ├── template.html  ← optional per-client template override
│   │   ├── assets/        ← client images
│   │   └── build/
│   │       └── index.html ← generated (gitignored)
│   └── ...
└── scripts/
    ├── build.mjs          ← build one client
    ├── build-all.mjs      ← build every client in clients/
    ├── new-client.sh      ← copy _template/ to a new slug
    └── fetch-references.sh
```

## Commands

```bash
# Build one client. Defaults to calm-code.
node scripts/build.mjs --client calm-code

# Build every client under clients/ (skips _template).
node scripts/build-all.mjs

# Start a new client from the template.
bash scripts/new-client.sh acme
```

The output for each client lands at `clients/<slug>/build/index.html`.

## Adding a new client

```bash
bash scripts/new-client.sh acme
```

Then:

1. Edit `clients/acme/brand.config.json` (colors, fonts, shadows, tone).
2. Edit `clients/acme/content.config.json` (copy, items, CTAs, meta).
3. Drop client images into `clients/acme/assets/`.
4. (Optional) Customise section order or swap section variants by creating `clients/acme/template.html` — see Calm Code's template for the pattern.
5. `node scripts/build.mjs --client acme`.

## Template syntax

Three constructs, deliberately minimal:

| Syntax | Meaning |
|---|---|
| `{{> section-name}}`                       | Inline `pipeline/sections/section-name.html`. |
| `{{brand.colors.teal}}` / `{{content.hero.headline}}` | Resolve a dotted path from the JSON configs. Hyphens allowed in segments. |
| `{{#content.modules.items}} … {{/content.modules.items}}` | Loop. Inside, `{{title}}` resolves from the current item first, then root. `{{.}}` is the current scalar. |

Missing tokens warn but don't crash — page still builds.

## Section variants

A "variant" is a section file with the same role but different markup/motion. To use one for a client, override the page template:

1. Copy `pipeline/templates/landing.html` to `clients/<slug>/template.html`.
2. Replace the section you want — e.g. swap `{{> hero}}` for `{{> hero-breathing}}`.

Built-in variants:

| Variant                | Role | Notes |
|------------------------|------|-------|
| `hero`                 | Hero | Default. Image on right, headline + CTAs on left. |
| `hero-breathing`       | Hero | Calm Code signature: 4 concentric rings, 7s breath cycle, pure CSS. Honours `prefers-reduced-motion`. |

## Adding a new section

1. Create `pipeline/sections/my-section.html` (an HTML fragment, not a full document).
2. Reference content via `{{content.my_section.…}}`.
3. Add `my_section` to your client's `content.config.json`.
4. Add `{{> my-section}}` to the page template (`pipeline/templates/landing.html` for everyone, or `clients/<slug>/template.html` for one client).
5. `node scripts/build.mjs --client <slug>`.

## Adding a new brand token

1. Add the key to `brand.config.json` under the relevant group (`colors`, `fonts`, `shadows`, …).
2. Reference it from `pipeline/sections/_tokens.html` as a CSS variable: `--my-token: {{brand.group.my-token}};`.
3. Use the variable in any section: `style="background: var(--my-token);"`.

## Brand-schema slot

Both config files are **placeholders mirroring current section needs**. When the client brand-brief schema is finalised, replace `clients/_template/*.config.json` to match it; `clients/<slug>/` directories should follow the same shape. Renames may require updating `pipeline/sections/_tokens.html` (CSS variable bindings) and any token references in section files.

## Deploy

Each build is a single self-contained `index.html` (inline CSS, Google Fonts via CDN):

| Target        | Method |
|---------------|--------|
| GoHighLevel   | Paste `clients/<slug>/build/index.html` into the custom-page editor. |
| GitHub Pages  | Settings → Pages → main branch, point at the built file. |
| Netlify       | Drag-drop `clients/<slug>/build/`. |

## References

`references/` holds 13 shallow-cloned repos used as design inspiration — see [REPOS.md](./REPOS.md). The directory is gitignored. Re-fetch any time:

```bash
bash scripts/fetch-references.sh
```
