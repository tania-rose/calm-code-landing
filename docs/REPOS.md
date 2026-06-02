# Reference Repos

Thirteen repos cloned (shallow, single-branch) into `references/` for design and code inspiration. The directory is gitignored — re-fetch with `bash scripts/fetch-references.sh`.

Organised by role in the pipeline.

## Component / section libraries — the Lego bricks

Pull animated hero blocks, marquees, beam effects, feature grids, pricing cards from these. Built on React + Tailwind + Framer Motion + shadcn/ui — you copy snippets and port their patterns into our vanilla section templates.

| Repo | Stars | Why use it |
|---|---|---|
| `magicui`        | 21.1k | Animated components catalog — beam, marquee, gradient effects. Best source for hero motion. |
| `page-ui`        |  1.7k | Components purpose-built for landing pages (hero, features, pricing, testimonials). |
| `launch-ui`      |   786 | Whole landing kit, copy/paste ready. Clean defaults. |
| `uitripled`      |  1.2k | Production blocks plus a Landing Page Builder, Background Builder, Grid Generator. Closest mental model to what we're building. |
| `spectrum-ui`    |   993 | Aceternity + MagicUI + shadcn mashup. Wider variety of effects. |

## Full landing-page starters — scaffolds

Reference these for layout structure, section ordering, content patterns, and how mature templates handle responsive/dark mode.

| Repo | Stars | Stack | Why use it |
|---|---|---|---|
| `astroship`         |  1.9k | Astro + Tailwind  | **Closest match to our static deploy story.** Section components + tokens. |
| `cruip-open-react`  |  4.6k | Next + Tailwind   | Polished out of the box, well-organised section structure. |
| `cruip-tailwind`    |  4.4k | Next + Tailwind   | Sister to above; "Simple Light" aesthetic — minimal, clean. |
| `ixartz-landing`    |  2.1k | Next + Tailwind   | Lean landing-only template, DX-focused (Husky, ESLint, etc.). |
| `ixartz-saas`       |  7.1k | Next + Tailwind + shadcn + i18n | Full SaaS — auth, multi-tenancy, payments. Reference for when we need more. |
| `ant-design-landing`|  6.5k | React             | Has a visual page editor — interesting if we want non-technical client edits later. |
| `open-saas`         | 14.6k | Wasp + React + Prisma | Heaviest — full SaaS w/ Stripe, auth. Reference only unless we need it. |

## Inspiration

| Repo | Stars | Why use it |
|---|---|---|
| `awesome-landing-page` | 3.8k | Curated gallery of landing-page references — swipe layouts and section ideas. |

## How they map to our pipeline

- **`pipeline/sections/hero.html`** → take motion from `magicui`, layout structure from `cruip-open-react` or `astroship`.
- **`pipeline/sections/modules.html`** (feature grid pattern) → `page-ui` and `launch-ui` have the cleanest grids.
- **`pipeline/sections/testimonials.html`** → `cruip-tailwind` and `launch-ui` for testimonial card layouts.
- **`pipeline/sections/enrol.html`** (pricing/CTA) → `ixartz-saas` for pricing structure, `launch-ui` for CTA cards.
- **Backgrounds / blob shapes / breathing-orb motion** → `magicui` (beam, gradient, animated grid).
