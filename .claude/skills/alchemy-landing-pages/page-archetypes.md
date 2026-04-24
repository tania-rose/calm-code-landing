# Page archetypes

Four archetypes cover every landing page AoB needs. Pick the one that matches the offer, use the matching template, and fill in the slots.

---

## Archetype 1: Residential training

**When to use**: Any in-person retreat, residential training, or multi-day immersion at ASHA.

**Examples**: Alchemy Regulation Method, BreathCamp.

**Template**: `templates/residential.html`

**Required sections (in order)**:
1. Sticky nav
2. Hero (image + gradient + eyebrow + h1 + subhead + primary CTA + secondary "Try a free breathwork session")
3. Trust strip (5 stats: days, hours, trainers, hectares, years running)
4. Breathing probe (simple box-breath orb)
5. Founder quote or "what this is" section
6. Program breakdown (the core curriculum, day-by-day or pillar-by-pillar)
7. Outcomes section (what you leave with)
8. ASHA carousel
9. About ASHA + program details card
10. Instructors grid (4 per row)
11. Founder video
12. Who it's for + who it's not for
13. Pricing (accommodation options or session selector)
14. FAQ
15. Final CTA
16. Footer with disclaimer

**Voice notes**:
- Emphasize the in-person, embodied aspect. "Your own body first."
- Do not over-dramatize the retreat. Tuscany sells itself; don't sell Tuscany.
- Include the "who this isn't for" pattern explicitly.

**Dynamic components**:
- Breathing orb (simple)
- ASHA carousel
- FAQ accordion
- Pricing cards / table
- Scarcity badges where real

---

## Archetype 2: Online course

**When to use**: Any self-paced or cohort-based online program.

**Example**: Inner Journey.

**Template**: `templates/online-course.html`

**Required sections (in order)**:
1. Sticky nav
2. Hero (parallax image + gradient + eyebrow + h1 + subhead + primary CTA + secondary)
3. What it is (3-paragraph "clarity first" block)
4. What's in it (stats: chapters, hours, access duration, guarantee)
5. Parallax quote break
6. The chapters / modules (journey arc stepper with click-to-reveal)
7. Who it's for
8. Parallax quote break
9. How it works (4-step weekly rhythm)
10. Your guide (Anthony bio block)
11. Testimonials (written or video)
12. Pricing (self-paced vs guided or single tier)
13. FAQ
14. Final parallax CTA
15. Footer with disclaimer

**Voice notes**:
- Emphasize "at your own pace" and "quiet container".
- This is the most meditative of the four. Lean into stillness.
- The honest-framing pattern appears 2-3 times: "We will not promise you X."

**Dynamic components**:
- Journey arc stepper
- Parallax sections
- FAQ accordion
- Pricing cards (two variants side by side)

---

## Archetype 3: Certification

**When to use**: Multi-month professional certification with post-graduation path.

**Example**: Facilitator Training.

**Template**: `templates/certification.html`

**Required sections (in order)**:
1. Sticky nav
2. Hero (dark + ghost vesica piscis + breathing mandala + eyebrow + h1 + subhead + CTAs)
3. Trust strip (years, graduates, countries, accredited)
4. "As featured in" logo marquee
5. The tension (personal, emotional section: "you already know this")
6. The invitation (4-card outcomes grid)
7. Why us (6-card differentiator grid + accreditation badges)
8. Full-width image break
9. Graduate video testimonials (3 videos)
10. How it works (4-phase journey, each with large image + text)
11. Your guides (founder feature + team grid)
12. Founder video feature (with glowing frame)
13. ASHA + BreathCamp section with carousel
14. Who it's for / who it's not for (two-column)
15. Full-width image break with overlay quote
16. Beyond certification (3 pathways)
17. Pricing (tabs: pay in full / 6-month / 8-month + deposit option card)
18. FAQ
19. How to get started (3 steps)
20. Application form (embedded)
21. Footer with disclaimer

**Voice notes**:
- This is the flagship. Highest stakes for the reader.
- Use the founder voice more. Anthony's quotes carry weight here.
- Lean into what happens AFTER certification. No other school offers what AoB offers post-grad.
- Be explicit about accreditations.

**Dynamic components**:
- Breathing mandala (sacred geometry, flagship only)
- Logo marquee
- Video testimonial cards
- Pricing tabs
- ASHA carousel
- Embedded form

---

## Archetype 4: Workshop / single event

**When to use**: Short workshop, single live class, one-off event, free introduction.

**Examples**: Free breathwork class, 90-minute intro workshop, single-day retreat.

**Template**: `templates/workshop.html`

**Required sections (in order)**:
1. Sticky nav (simpler: no multi-section nav)
2. Hero (compact, single image + eyebrow + h1 + date + CTA)
3. What you'll experience (3-column grid)
4. Who leads it (compact instructor card)
5. What's included
6. Pricing / free banner
7. Short FAQ (5-6 questions max)
8. Final CTA
9. Footer

**Voice notes**:
- Keep it tight. This is a short commitment, treat it as one.
- Don't over-explain. Workshops are intros.
- Primary CTA is often "Save My Spot" or "Register Free".

**Dynamic components**:
- Breathing orb (optional)
- FAQ accordion
- Compact pricing block

---

## Shared across all archetypes

These components belong on every page regardless of archetype:

- Sticky nav (logo + 4 anchor links max + primary CTA)
- Footer with disclaimer
- Mobile menu drawer (when nav links would collide)
- Sticky mobile CTA (bottom-fixed on mobile)
- Announcement bar (when there's something real to announce)
- Email capture block (before the final CTA, unless the page has an embedded form already)
- Cross-sell module (one tier up or down, contextual)

## Decision tree

```
Is this an in-person multi-day program?
├── Yes → Archetype 1 (Residential)
└── No ↓

Is this a multi-month online program with certification?
├── Yes → Archetype 3 (Certification)
└── No ↓

Is this a self-paced or cohort-based online course?
├── Yes → Archetype 2 (Online Course)
└── No ↓

Is this a single event, workshop, or intro?
├── Yes → Archetype 4 (Workshop)
└── No → Clarify with user before proceeding.
```

## Anti-patterns

### Do not mix archetypes mid-page
If you're building a residential training page and you find yourself adding a "7-chapter self-paced component" section, stop. It belongs on a separate page cross-sold via the cross-sell module.

### Do not copy a page from a different tier
Each tier has its own voice register. The Inner Journey is more meditative. The Facilitator Training is more professional. The Regulation Method is more practical. Don't lift copy across.

### Do not add sections that aren't listed
Every addition is a distraction. If you want to add a section that isn't in the archetype, ask the user first and document why.
