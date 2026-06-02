# Calm Code — Landing Page Pipeline

Plug-and-play landing page builder. One repo, many clients. Drop in a client's brand tokens, copy, and images; run one command; get a deployable `index.html`.

## Quick start

```bash
# 1. (one-time) Pull reference repos used as design inspiration. Gitignored.
bash scripts/fetch-references.sh

# 2. Bootstrap a new client.
bash scripts/new-client.sh acme

# 3. Edit clients/acme/brand.config.json + content.config.json, drop images in assets/.

# 4. Build.
node scripts/build.mjs --client acme
# → clients/acme/build/index.html
```

Build every client at once:

```bash
node scripts/build-all.mjs
```

## Repo layout

```
.
├── pipeline/              ← shared building blocks
│   ├── sections/          ← reusable HTML fragments (hero, modules, faq, …)
│   └── templates/
│       └── landing.html   ← default page assembly
├── clients/               ← one directory per client
│   ├── _template/         ← copy to start a new client
│   └── calm-code/         ← example: original Alchemy of Breath landing
├── scripts/
│   ├── build.mjs          ← build one client
│   ├── build-all.mjs      ← build every client
│   ├── new-client.sh      ← bootstrap a new client
│   └── fetch-references.sh
├── references/            ← 13 design-reference repos (gitignored)
├── docs/
│   ├── PIPELINE.md        ← how the builder works
│   └── REPOS.md           ← inventory of reference repos
├── index.html             ← original Calm Code prototype (kept for diffing)
└── CLAUDE-PROMPTS.md      ← prompt swipe file for content generation
```

Full pipeline docs: [`docs/PIPELINE.md`](docs/PIPELINE.md).
Reference repo inventory: [`docs/REPOS.md`](docs/REPOS.md).

## What's next

1. **Brand-brief schema.** Configs in `clients/_template/` are placeholders. Replace them with the finalised schema; existing clients re-shape to match.
2. **More section variants.** `hero-breathing` (Calm Code signature) shipped; port more from `references/component-libraries/` as needed.
3. **More clients.** `bash scripts/new-client.sh <slug>` and go.
