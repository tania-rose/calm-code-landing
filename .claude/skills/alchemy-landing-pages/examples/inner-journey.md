# Example reference: Inner Journey page

The Inner Journey page is the **north-star design** for all AoB landing pages. This file documents what makes it work so future sessions can reproduce the feel.

## Why this page is the reference

- It does the honest-framing pattern best ("We will not promise you a new life...")
- It uses parallax sections for breathing room between content blocks
- The journey arc stepper handles sequenced content elegantly
- It has the cleanest information hierarchy of the four existing pages
- It commits to the meditative voice register without becoming precious

## Key stylistic decisions

### 1. The parallax hero
Background image + deep gradient overlay + content bottom-aligned. The overlay goes from 50% opacity at top to 92% at bottom. This keeps the image as atmosphere without fighting the text.

```css
background: linear-gradient(to bottom,
  rgba(26,26,24,0.5) 0%,
  rgba(26,26,24,0.3) 40%,
  rgba(26,26,24,0.92) 100%);
```

Background image: `https://static.wixstatic.com/media/c2dd9b_09ee1d8f65814030a6f5c5852eb71d36~mv2.jpg` (DSCF7077)

### 2. The "what is this?" section as the FIRST content block
Before any features, stats, or sales copy, the page opens with three paragraphs of honest framing:

> "A 7-chapter course. One honest look at yourself."
>
> "Most of us are running on autopilot. Patterns we picked up in childhood still shape how we love, work, argue, and retreat. We do not choose them. We just repeat them."
>
> "It is not therapy. It is not a bootcamp. It is a quiet, structured way of meeting yourself on purpose."

This is the order. Clarity before persuasion. Most wellness pages get this wrong.

### 3. The stats are small
Four tiny stats: `7 Chapters · 20+ Breathwork Sessions · 1 yr Access · 7 day Guarantee`. They're not shouted. They're context.

### 4. Parallax quote breaks do the emotional lifting
Two parallax sections with founder quotes separate the main content blocks:

- After the stats, before the chapters: "It's not your fault. But it is your turn to choose."
- After the chapters, before how-it-works: "We will not promise you a new life..."

These are the page's emotional beats. Everything else is factual.

### 5. The journey arc is the spine
Seven clickable steps, click-to-reveal. Each step opens a detail card with an image and a paragraph. No auto-cycling, no forced motion. The reader controls the pace.

### 6. Pricing is honest and direct
Two cards side by side. No urgency manipulation. Strike-through on the "original" price, current price in Marcellus serif at 40px. The featured card uses teal background with gold accents. The secondary (self-paced) is simple white.

### 7. Final CTA is also parallax
Same treatment as the hero. Bookends the page in the same visual register.

## The four breathing sections of the page

The page inhales and exhales visually:
1. Hero (dark image) — inhale
2. What it is (off-white) — exhale
3. Parallax quote (dark image) — inhale
4. The chapters (off-white) — exhale
5. Parallax quote (dark image) — inhale
6. How it works (off-white) — exhale
7. Guide bio (white) — hold
8. Testimonials (teal) — inhale
9. Pricing (off-white) — exhale
10. FAQ (white) — hold
11. Final CTA (parallax dark) — inhale

Alternating dark / light / dark / light is what makes the page feel like breath.

## What NOT to copy

- **Length**: Inner Journey is a meditative course. A BreathCamp or Facilitator Training page should not be as slow-paced. They need more stats, more outcomes, more practical information.
- **Solo voice**: Inner Journey is almost entirely in the founder voice. Other pages mix in team / outcome / process voice more.
- **Zero video in hero**: Inner Journey has no video above the fold. Other pages may benefit from one.

## Live reference

The full HTML for Inner Journey was shared in the original conversation that produced this skill. If that's no longer in context:

- See `components/` for the patterns (hero parallax, journey arc, parallax quote, pricing dual-card).
- See `design-system.md` for the tokens and elevation.
- See `patterns/honest-framing.md` for the voice.

Every piece of what makes Inner Journey the north star is extracted into those files. Rebuild from the pieces, not by copying the page.
