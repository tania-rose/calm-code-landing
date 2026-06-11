# Alchemy of Breath — Facilitator Training Landing Page

A handcrafted, conversion-focused landing page for the 8-month online Breathwork
Facilitator Training, optimized for booking a free discovery call.
Single self-contained file: `index.html` (no build step, no dependencies).

## Brand system
- **Background:** `#FBF7F0` warm ivory (light, airy, layered depth via warm-hued shadows + paper grain)
- **Brand red (headings & voice):** `#A93821` rust, deep `#7E2A18`
- **Gold accent:** `#C09032`
- **Ink:** `#3A332C`
- **Fonts:** Cormorant Garamond (display) + Khula (body) — matching alchemyofbreath.com
- American spelling throughout.

## Page flow (conversion path)
Hero (breathing orb + animated stats) → Accreditation trust bar (GPBA / FHT / AADP)
→ "Is this calling you?" empathy section → Founder video (lazy YouTube embed)
→ 8-month journey timeline (scroll-drawn progress) → Learning platform mockup
(CSS laptop + phone) → Curriculum accordion → Founder (Anthony Abbagnano)
→ Testimonial slider → Certification (dark section, spinning GPBA seal)
→ Outcomes → **Discovery call booking section** → FAQ → Final CTA → Footer.
A sticky mobile CTA appears after the hero and hides near the booking section.

## Interactions
Live 10-second breathing orb with synced inhale/hold/exhale cues · scroll reveals ·
animated counters · timeline progress line · accordions · auto-advancing
testimonial slider · click-to-load video facade · nav shrink on scroll.

## Before launch
1. Point the booking CTA (`Reserve My Free Call` in `#book` and all `#book` anchors)
   at the real scheduling link (Calendly/GHL) — currently links to the live training page.
2. Replace the founder portrait card (`.fo-card`) with a real photo of Anthony.
3. Swap the SVG accreditation marks for official logo files if licensing allows.
4. Confirm testimonial attributions (currently quoted verbatim from public
   sources, attributed to "Facilitator Training Graduate").
