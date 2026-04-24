---
name: alchemy-landing-pages
description: Build or update landing pages for Alchemy of Breath offerings (Alchemy Regulation Method, Inner Journey, Facilitator Training, BreathCamp, workshops). Use when the user asks to create, redesign, or optimize a landing page for an AoB program, retreat, or course. Handles voice, design system, component library, SEO, and page archetype selection.
---

# Alchemy of Breath Landing Pages

You are building landing pages for Alchemy of Breath, a breathwork school and retreat center. This skill exists so every page is consistent in voice, design, and structure without relying on memory.

## When to invoke

Trigger this skill whenever the user asks for any of:
- "Create a landing page for [AoB offer]"
- "Redesign / update / rebuild the [program] page"
- "Add a new section to [page]"
- "Optimize the [page]"
- Any HTML work on files in this repo that represent an AoB program, retreat, or course.

## Always load first

1. **`voice-guide.md`**: hard rules for every line of copy (no em dashes, American spelling, no overpromising, banned vocabulary, sentence patterns). Non-negotiable.
2. **`design-system.md`**: colors, fonts, spacing, motion. The reference design is the Inner Journey page.
3. **`brand-guide.md`**: positioning, personas, CTA hierarchy, canonical claims.

## Workflow for any landing page task

### Step 1: Clarify the offer
Before writing a single line, confirm:
- What tier is this? (Regulation Method / Inner Journey / Facilitator Training / BreathCamp / workshop)
- Who is the audience for *this* page specifically?
- What is the primary CTA? (Apply / Book / Enroll)
- Are there live dates, cohort sizes, prices? Use only confirmed claims from `brand-guide.md` unless the user gives new numbers.

### Step 2: Pick the archetype
Consult `page-archetypes.md`. Each archetype maps to a template in `templates/`:
- **Residential training** (BreathCamp, Regulation Method) → `templates/residential.html`
- **Online course** (Inner Journey) → `templates/online-course.html`
- **Certification** (Facilitator Training) → `templates/certification.html`
- **Workshop / single event** → `templates/workshop.html`

### Step 3: Write optimization footnotes FIRST
Before editing any existing page, produce a **footnotes block** for the user to approve. This is not optional. It is the format:

```
## Optimization notes for [page name]

### What stays
- [List the sections and patterns that are working]

### What changes
1. **[Section name]**: [what is changing and why, in 1-2 sentences]
2. ...

### Voice fixes
- [Any em dashes, overpromising, or banned vocabulary to correct]

### CTA hierarchy
- Primary: [current] → [proposed]
- Secondary: [current] → [proposed, default "Try a free breathwork session"]

### Net effect
[One paragraph: what the page will feel like after, without exaggeration]
```

Wait for approval. Do not start editing until the user confirms.

### Step 4: Build from components
Compose the page from `components/` rather than writing HTML from scratch. Every component already follows the voice and design rules. If a component is missing, add it to `components/` (do not inline).

### Step 5: Run the voice check
Before declaring the page done, do a pass for:
- Em dashes (search for `—`, `–`, ` - ` used as em dash)
- American spelling (colour → color, organisation → organization, realise → realize, centre → center *except when it is part of "ASHA Retreat Centre" which is a proper noun*)
- Banned vocabulary from `voice-guide.md`
- Overpromising claims
- Length: sentences over 30 words usually need a split

### Step 6: SEO and metadata
Apply `patterns/seo-meta.md`: title tag, meta description, Open Graph tags, and JSON-LD schema (Course for online programs, Event for retreats, FAQ for the FAQ block).

## Hard rules (never break)

- **No em dashes.** Replace with periods, commas, "and", or restructure.
- **American spelling** except for "ASHA Retreat Centre" (proper noun).
- **No superlatives:** "life-changing", "transformative", "breakthrough", "unlock", "revolutionary", "guaranteed outcome", "secret", "world-class" (only used once on BreathCamp page in a careful context: see brand-guide).
- **No fake urgency.** Scarcity only when real (actual spot counts, actual cohort close dates).
- **No therapy claims.** Always disclaim: "educational and contemplative", "not a substitute for therapy or medical care" in the footer.
- **Keep the honest-framing pattern:** "We will not promise you X. What we can offer is Y." (see `patterns/honest-framing.md`).

## CTA hierarchy (approved)

Every page uses a three-tier CTA structure:

1. **Primary**: Apply / Book / Enroll / Secure Your Place. Gold button. Appears in nav, hero, mid-page, and final CTA.
2. **Secondary**: **Try a free breathwork session** → routes to free resources. Outline button. Appears alongside primary in hero and final CTA. This is the soft on-ramp for people not ready to commit.
3. **Tertiary**: Book a discovery call. Text link or small outline button. Appears in FAQ section and footer.

See `patterns/cta-hierarchy.md` for copy variants per tier.

## Dynamic elements available

Pulled from the 4 existing pages, standardized in `components/`:

- `breathing-orb.html`: simple box breath (use on residential/workshop pages)
- `breathing-mandala.html`: sacred geometry (use on certification/flagship pages only)
- `journey-arc.html`: click-to-reveal stepper (use for sequenced offers: chapters, days, modules)
- `carousel.html`: auto-scroll image gallery (use for ASHA + cohort photos)
- `logo-marquee.html`: "as featured in" infinite scroll
- `faq.html`: accordion, single-open
- `pricing-tabs.html`: payment plan toggle
- `parallax-quote.html`: quote break section
- `announcement-bar.html`: top-of-page strip, dismissible
- `sticky-mobile-cta.html`: mobile bottom-fixed CTA
- `email-capture.html`: lead magnet / newsletter block
- `cross-sell.html`: route to adjacent tier
- `scarcity-badge.html`: "Filling fast" / "A few spots left"

## Files in this skill

```
alchemy-landing-pages/
├── SKILL.md                     ← you are here
├── voice-guide.md               ← hard rules for every line
├── design-system.md             ← tokens, spacing, motion
├── brand-guide.md               ← positioning, personas, claims
├── page-archetypes.md           ← which template for which offer
├── components/                  ← reusable HTML blocks
├── templates/                   ← page skeletons by archetype
├── patterns/
│   ├── seo-meta.md              ← title, description, OG, JSON-LD
│   ├── microcopy.md             ← button labels, form fields, errors
│   ├── honest-framing.md        ← the "We will not promise X" pattern
│   └── cta-hierarchy.md         ← primary/secondary/tertiary copy
├── assets.md                    ← canonical image URLs, logos
└── examples/
    └── inner-journey.html       ← north-star reference design
```

## Working on this repo

- Primary branch: `claude/alchemy-breath-landing-EdWBu`
- Commit every time a page is updated. Commit message format: `Update [page]: [1-line what/why]`
- Do not push without the user asking.
