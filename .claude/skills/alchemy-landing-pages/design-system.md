# Design system

The north-star reference is the Inner Journey page. When in doubt, look at how that page handles it.

## Color tokens

```
teal:    #354d4c   /* primary brand, dark backgrounds, nav */
gold:    #cc9924   /* CTAs, accents, eyebrows, focal points */
beige:   #d3cdb3   /* borders, dividers, quiet accents */
offwhite:#f9f8f5   /* page background (light sections) */
green:   #52bb90   /* success states, "included" checkmarks */
ink:     #1a1a18   /* primary text, dark backgrounds */
inksoft: #4a4a46   /* secondary text, body copy on light */
gray:    #c5c3c2   /* tertiary text, fine print, dividers */
```

### When to use each color

- **Teal**: sanctuary, trust, depth. Use for primary hero backgrounds, nav, and the quieter dark sections. Never use as a CTA color.
- **Gold**: warmth, invitation, value. Reserved for CTAs (buttons, active states), eyebrow labels, the gold rule divider, and focal decorative elements. Use sparingly. If every heading is gold, nothing is.
- **Beige**: the soft edge. Card borders, hairline dividers, subtle separators on light backgrounds.
- **Offwhite**: default page background for all light sections. Never pure white for a full section background. Use `#fff` only for cards and sub-containers.
- **Green**: included / yes / success. Never a primary color. Never on a CTA.
- **Ink**: primary dark. Headings on light backgrounds, dark section backgrounds, card text.
- **Inksoft**: body copy on light backgrounds. Not too light. 15-17px at `#4a4a46` is the default body treatment.
- **Gray**: fine print, timestamps, dates under headings, "per person" qualifiers.

## Typography

```
display: 'Marcellus', Georgia, serif   /* all h1-h4, pull quotes */
body:    'Roboto', sans-serif          /* everything else */
weights: 300 (body default), 400 (emphasis), 500 (buttons, eyebrows)
```

### Type scale

| Element | Size (clamp) | Weight | Family | Letter-spacing |
|---|---|---|---|---|
| Hero h1 | clamp(36px, 5vw, 60px) | 400 | display | -0.02em |
| Section h2 | clamp(28px, 3.5vw, 42px) | 400 | display | -0.02em |
| Subhead h3 | 24-28px | 400 | display | -0.01em |
| Card h4 | 18-20px | 400 | display | -0.01em |
| Eyebrow | 10-11px | 500 | body | 0.18-0.22em, uppercase |
| Body lead | 17-18px | 300 | body | 0 |
| Body | 15-16px | 300 | body | 0 |
| Caption | 12-13px | 400 | body | 0.04-0.08em |

Line height: 1.7-1.8 for body, 1.15-1.25 for display.

### The eyebrow pattern

Every major section opens with an eyebrow. It is a small label above the heading in gold, uppercase, with wide letter-spacing. Think of it as the section's nametag.

```css
.eyebrow {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #cc9924;
}
```

Examples: `THE JOURNEY`, `FROM THE FOUNDER`, `INVESTMENT`, `QUESTIONS`, `WHO THIS IS FOR`.

### The gold rule

A 2px gold bar, 40px wide, sits between the eyebrow and the heading. It is the visual exhale between section label and content.

```css
.gold-rule { width: 40px; height: 2px; background: #cc9924; margin: 20px 0 28px; }
.gold-rule.centered { margin: 20px auto 28px; }
```

## Spacing

Use an 8px base grid for small spacing, jumping to larger rhythm for sections.

- **Section padding**: `py-24` (96px top/bottom) is the default for major sections on desktop. `py-20` for quieter sections.
- **Section-to-section rhythm**: Alternate dark / light / dark / light to keep the page moving.
- **Card inner padding**: 28-40px. Pricing cards use 36-40px. Compact cards use 28-32px.
- **Gap between cards**: 20-32px depending on density. Default `gap-8`.

## Elevation (shadows)

Three tiers. Never use generic Tailwind shadow defaults.

```css
/* Soft lift: cards on light backgrounds */
.lift-card {
  box-shadow:
    0 1px 3px rgba(53, 77, 76, 0.04),
    0 8px 24px rgba(53, 77, 76, 0.06),
    0 24px 48px -16px rgba(53, 77, 76, 0.08);
}
.lift-card:hover {
  box-shadow:
    0 2px 6px rgba(53, 77, 76, 0.05),
    0 16px 32px rgba(53, 77, 76, 0.08),
    0 40px 64px -16px rgba(204, 153, 36, 0.12);
}

/* Dark lift: cards on dark backgrounds */
.lift-card-dark {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.2),
    0 12px 32px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);
}

/* Glass: the premium pricing card on dark */
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}
```

## Motion

Every transition uses the same easing curve: `cubic-bezier(0.4, 0, 0.2, 1)`.

- **Hover lifts**: `transform: translateY(-2px to -4px)` over 200-250ms.
- **Reveal on scroll**: `opacity 0 → 1` and `translateY(20-30px → 0)` over 700-900ms. Trigger at 12-15% visible.
- **Accordions and pricing tabs**: `max-height` transition, 400ms.
- **Breathing animations**: 4-5 second cycle, matching the inhale/exhale rhythm.
- **Carousels**: linear animation, 40s loop for image gallery, 20-24s for logos.

**Always respect `prefers-reduced-motion`.** Disable animations, keep the content visible.

## Grain texture

Every major dark section gets a subtle SVG noise overlay at 3.5% opacity. This is what makes the brand feel "analog" rather than "SaaS". The `.grain::after` rule in the example pages is canonical.

## Background patterns

### Radial glow
Dark sections get a soft radial glow using either gold or green at 4-10% opacity:

```css
background: radial-gradient(ellipse at 80% 20%, rgba(204, 153, 36, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 20% 80%, rgba(82, 187, 144, 0.05) 0%, transparent 50%);
```

### Mandala backgrounds
Faint concentric circles as decorative elements on dark sections. Use sparingly, max 2 per page, positioned off-edge.

### Ghost vesica piscis
On flagship pages (Facilitator Training hero), a large faint vesica piscis SVG sits behind the content at 5% opacity. Reserved for flagship pages only.

## Images

### Photography style
- Real practitioners in session, not stock. Grayscale-10% filter in portraits to blend with the palette.
- ASHA grounds: warm, slightly desaturated. The existing Tuscany photos are canonical.
- Always a gradient overlay on hero images:
  ```css
  background: linear-gradient(to top, rgba(53, 77, 76, 0.5) 0%, transparent 50%);
  /* Or for deep overlays: */
  background: linear-gradient(to bottom, rgba(26, 26, 24, 0.95) 0%, rgba(26, 26, 24, 0.3) 45%, transparent 70%);
  ```
- Aspect ratios: 3/4 for portraits, 4/5 for section images, 16/9 for hero and video, 3/2 for carousels.

### Image overlay pattern
```css
.img-overlay { position: relative; overflow: hidden; }
.img-overlay::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(53, 77, 76, 0.5) 0%, transparent 50%);
}
```

### Canonical image sources

See `assets.md` for the full list. Key sources:
- ASHA carousel: `static.wixstatic.com/media/c2dd9b_*`
- Instructors: `assets.cdn.filesafe.space/5lz2Wm44CNDwLSZWgAPf/media/*` and `alchemyofbreath.com/wp-content/uploads/*`
- Logo: `assets.cdn.filesafe.space/5lz2Wm44CNDwLSZWgAPf/media/69c78cc9104e4ff7ea6eb72d.png`

## Buttons

### Primary (gold)
```html
<a href="#apply" class="btn-gold">Apply Now</a>
```
Gold background, white text, subtle gold glow shadow, lifts 1px on hover.

### Secondary outline (on dark)
```html
<a href="#resources" class="btn-outline">Try a Free Breathwork Session</a>
```
Transparent with white border, white text. On hover, gold border with faint gold fill.

### Secondary outline (on light)
```html
<a href="#" class="btn-outline-dark">View Full Curriculum</a>
```
Transparent with ink border, ink text. On hover, gold border and gold text.

## Section divider

Between sections inside a single block, use the gold-dot divider:
```html
<div class="section-divider"><span></span></div>
```
Two hair-thin gold gradient lines flanking a 6px gold dot.

## Responsive breakpoints

- Mobile: < 768px
- Tablet: 768-1024px
- Desktop: > 1024px

Mobile first. Every interactive element must have a finger-friendly tap target (44px min).

## Accessibility

- Focus visible on every interactive element: `outline: 2px solid #cc9924; outline-offset: 3px;`
- ARIA on accordions, tabs, and the breathing button (`role="button"`, `aria-expanded`).
- Honor `prefers-reduced-motion`.
- Alt text on every image that conveys meaning.
- Color contrast: body text on offwhite must be `#4a4a46` minimum.
