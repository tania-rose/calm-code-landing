# Alchemy of Breath Landing Pages Skill

A Claude Code skill for building and updating landing pages for Alchemy of Breath offerings (Alchemy Regulation Method, Inner Journey, Facilitator Training, BreathCamp, and workshops).

## What this skill does

Keeps every AoB landing page consistent in voice, design, and structure without relying on memory. Every page uses the same color tokens, the same component vocabulary, the same honest-framing voice, and the same CTA hierarchy.

## How it's used

When a Claude Code session asks for any of:
- "Create a landing page for [AoB offer]"
- "Redesign / update / rebuild the [program] page"
- "Add a section to [page]"
- "Optimize the [page]"

The skill loads automatically. It guides the agent through:
1. Clarifying the offer (which tier? who's the audience? what's the CTA?)
2. Picking the right archetype and template
3. Writing optimization footnotes FIRST (not editing until the user approves)
4. Composing the page from components (not writing HTML from scratch)
5. Running voice and SEO checks before shipping

## Files

| File | Purpose |
|---|---|
| `SKILL.md` | Entry point. Workflow, triggers, hard rules. Loaded first. |
| `voice-guide.md` | Hard copy rules. No em dashes. American spelling. Banned vocabulary. Honest-framing patterns. |
| `design-system.md` | Color tokens, typography, spacing, elevation, motion. |
| `brand-guide.md` | Positioning. Four tiers. Canonical claims. Personas. CTA hierarchy. |
| `page-archetypes.md` | Four archetypes: residential, online course, certification, workshop. Decision tree. |
| `assets.md` | Canonical image URLs, video URLs, logo, GHL form IDs, booking URLs. |
| `patterns/cta-hierarchy.md` | Primary / secondary / tertiary CTA structure. |
| `patterns/honest-framing.md` | "We will not promise X" pattern library. |
| `patterns/microcopy.md` | Button labels, form fields, error states, badges, dates, money. |
| `patterns/seo-meta.md` | Title, meta, Open Graph, JSON-LD schema per archetype. |
| `components/base.html` | Shared CSS + JS (Tailwind config, nav scroll, reveal observer, smooth scroll, FAQ toggle). |
| `components/nav.html` | Sticky top nav with mobile drawer. |
| `components/hero.html` | Three hero variants: parallax, image, mandala. |
| `components/breathing.html` | Two breathing primitives: simple orb, sacred geometry mandala. |
| `components/journey-arc.html` | Click-to-reveal stepper for sequenced content. |
| `components/faq.html` | Single-open accordion FAQ. |
| `components/pricing.html` | Dual-tier cards + pricing tabs variants. |
| `components/carousel.html` | ASHA image carousel + logo marquee. |
| `components/testimonials.html` | Video, written quote, founder video variants. |
| `components/instructor-card.html` | Anthony feature + team grid. |
| `components/stat-strip.html` | Trust numbers row. |
| `components/parallax-quote.html` | Parallax quote break section. |
| `components/email-capture.html` | Lead magnet block. |
| `components/cross-sell.html` | Route to adjacent tier. |
| `components/cta-final.html` | End-of-page CTA. |
| `components/footer.html` | Site footer with disclaimers. |
| `components/announcement-bar.html` | Dismissible top strip (for real announcements only). |
| `components/sticky-mobile-cta.html` | Bottom-fixed mobile CTA. |
| `templates/base.html` | Minimal skeleton. |
| `templates/online-course.html` | Section order + component map for Inner Journey archetype. |
| `templates/residential.html` | Section order for Regulation Method / BreathCamp. |
| `templates/certification.html` | Section order for Facilitator Training. |
| `templates/workshop.html` | Section order for short workshops / free intro events. |
| `examples/inner-journey.html` | Full reference implementation. North-star design. |

## The hard rules

Seven rules that can never be broken:

1. **No em dashes.** Use periods, commas, "and", or restructure.
2. **American spelling.** Except "ASHA Retreat Centre" (proper noun).
3. **No overpromising.** No "transform", "unlock", "guaranteed".
4. **No fake urgency.** Scarcity only when real.
5. **No therapy claims.** Disclaim in every footer.
6. **Honest framing.** "We will not promise you X. What we can offer is Y."
7. **Build from components.** Do not write HTML from scratch.

Full rules in `voice-guide.md`.

## CTA hierarchy

1. **Primary:** Apply / Book / Enroll. Gold button. In nav, hero, final CTA.
2. **Secondary:** "Try a Free Breathwork Session" → free resources. Outline button. In hero and final CTA.
3. **Tertiary:** "Book a Discovery Call." Text link. In FAQ and footer.

Full copy variants in `patterns/cta-hierarchy.md`.

## Workflow for any task

See `SKILL.md` → "Workflow for any landing page task".

Short version:
1. Clarify the offer
2. Pick the archetype
3. Write optimization footnotes first and wait for approval
4. Build from components
5. Run the voice check
6. Apply SEO and metadata
7. Commit

## Version and ownership

Project-scoped skill, version-controlled in this repo at `.claude/skills/alchemy-landing-pages/`.

Contact: `hello@alchemyofbreath.com`
