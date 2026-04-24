# CTA hierarchy

Every page uses this three-tier structure. No more, no less.

## The three tiers

| Tier | Intent | Style | Placement |
|---|---|---|---|
| Primary | Commit | Gold button (`btn-gold`) | Nav, hero, mid-page, final CTA |
| Secondary | Try before commit | Outline button (`btn-outline` or `btn-outline-dark`) | Hero, final CTA |
| Tertiary | Start a conversation | Text link / small outline | FAQ closer, footer, final CTA fallback |

## Copy by tier and archetype

### Tier 1: Primary (gold button)

This is the main conversion. The copy is always action-oriented and specific to the offer.

| Archetype | Preferred copy | Alternates |
|---|---|---|
| Residential (Regulation Method) | "Book Your Place at ASHA" | "Secure Your Place" |
| Residential (BreathCamp) | "Choose Your Dates" | "Book This Session" |
| Online course (Inner Journey) | "Start the Journey" | "Choose Your Path" |
| Certification (Facilitator) | "Apply Now" | "Begin Your Application" |
| Workshop | "Save My Spot" | "Register Free" (if free) |

### Tier 2: Secondary (outline button): "Try a free breathwork session"

The soft on-ramp. For people who are not ready to commit today but want to experience the work.

**Default copy: "Try a Free Breathwork Session"**

Route: free resources page (ask user for URL: see `assets.md` TODO).

Alternate copy when "breathwork session" is off-tone:
- Online course pages: "Watch the First Chapter" or "Read the First Chapter" (if sample)
- Certification: "See a Sample Class" (if available)
- Workshop: (skip secondary: workshops are already the on-ramp)

**Placement rules**:
- Hero: Always alongside primary. "Apply Now / Try a Free Breathwork Session"
- Final CTA: Always alongside primary.
- Mid-page: Use sparingly. Every card does not need a secondary.
- Nav: Never. Nav has one CTA only.

### Tier 3: Tertiary (text link or small outline): "Book a discovery call"

The lowest-friction option. A 15-minute conversation.

**Default copy: "Book a Discovery Call"**

Route: `https://go.alchemyofbreath.com/book-your-discovery-call-page`

Alternate framings:
- "Not sure yet? Talk to us first."
- "Still have questions? Book a free 15-minute call."
- "Prefer a conversation? Book a discovery call."

**Placement rules**:
- FAQ section closer (after the last question)
- Footer (always)
- Pricing section ("Not sure which path? Book a free 15-minute call.")
- Final CTA as secondary option when "Try a free breathwork session" doesn't fit

## Combined patterns

### Hero CTA row
```html
<div class="flex flex-wrap gap-4">
  <a href="#apply" class="btn-gold">[Primary copy]</a>
  <a href="#resources" class="btn-outline">Try a Free Breathwork Session</a>
</div>
```

### Final CTA row
```html
<div class="flex flex-col sm:flex-row gap-4 justify-center">
  <a href="#apply" class="btn-gold" style="font-size:14px;padding:16px 40px;">[Primary copy]</a>
  <a href="#resources" class="btn-outline" style="font-size:14px;padding:16px 40px;">Try a Free Breathwork Session</a>
</div>
<p style="font-size:12px;color:rgba(255,255,255,.35);letter-spacing:.04em;margin-top:16px;">
  Prefer to talk first? <a href="https://go.alchemyofbreath.com/book-your-discovery-call-page" style="color:#cc9924;">Book a discovery call</a>.
</p>
```

### FAQ closer
Last FAQ item always:
```
Q: I still have questions. Can we talk?
A: Of course. Book a free 15-minute discovery call with our team and we will answer anything. No pressure to commit.
```

## Anti-patterns

### Do not stack more than three CTAs
A hero with three buttons is a hero with no buttons.

### Do not use the primary CTA color for anything else
Gold is reserved for CTAs. Not section dividers, not background accents in the same visual field as a button. (It's fine for eyebrows and decorative lines: that's on the type layer, not the interaction layer.)

### Do not change the CTA mid-scroll
The same primary action across the entire page. "Apply Now" in the nav, hero, mid-page, and final CTA. Consistency compounds.

### Do not hide the tertiary
The discovery call option should always be visible somewhere. People who can't commit and don't want to try a free session are the ones who convert on a call.

### Do not write "Learn More" as a CTA
It's vague. Replace with specific anchors: "View the Curriculum", "See the Dates", "Meet Your Guides".
