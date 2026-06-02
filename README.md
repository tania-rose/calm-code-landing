# Calm Code — Landing Page Pipeline

Plug-and-play landing page builder. Originally built for The Calm Code (Alchemy of Breath); now generalised so any client's brand tokens + copy + assets produce an on-brand landing page in one command.

## Quick start

```bash
# 1. (one-time) Pull reference repos used as design inspiration. Gitignored.
bash scripts/fetch-references.sh

# 2. Edit pipeline/brand.config.json and pipeline/content.config.json.

# 3. Build.
node scripts/build.mjs
# → pipeline/build/index.html
```

## Repo layout

```
.
├── pipeline/              ← the builder
│   ├── brand.config.json  ← client tokens (colors, fonts, tone)
│   ├── content.config.json← client copy
│   ├── assets/            ← client images
│   ├── sections/          ← reusable HTML fragments
│   ├── templates/         ← page assemblies
│   └── build/             ← generated output (gitignored)
├── scripts/
│   ├── build.mjs          ← token + section inliner
│   └── fetch-references.sh
├── references/            ← 13 design-reference repos (gitignored)
├── docs/
│   ├── PIPELINE.md        ← how the builder works
│   └── REPOS.md           ← inventory of reference repos
├── index.html             ← original Calm Code prototype (kept for diffing)
└── CLAUDE-PROMPTS.md      ← prompt swipe file for content generation
```

## What's next

1. **Brand-brief schema.** `brand.config.json` and `content.config.json` are placeholders. Replace them with the finalised schema; section templates stay the same (or get minor renames).
2. **Section library.** Port animated section variants (hero with breathing orb, marquees, pricing cards) from the reference repos in `references/component-libraries/`.
3. **Multi-client support.** Move per-client configs into `clients/<slug>/` and build each with `--brand` / `--content` flags.

Full pipeline docs: [`docs/PIPELINE.md`](docs/PIPELINE.md). Reference repo inventory: [`docs/REPOS.md`](docs/REPOS.md).
