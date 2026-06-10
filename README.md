# Alchemy of Breath — Facilitator Training Landing Page

High-converting, organic-feel certification landing page for the 8-month, 400-hour
Breathwork Facilitator Training by Alchemy of Breath. Single-file `index.html`,
optimised to book free discovery calls.

## Brand Spec
- **Background:** `#F7F4EF` warm off-white
- **Teal:** `#00a5b2` (digital accent) · deep teal `#04444b` / `#062f34` for dark sections
- **Gold:** `#E1B668`
- **Ink:** `#221F20`
- **Fonts:** Cormorant Garamond (display) + Khula (body)

## Signature Features
- Live breathing orb in the hero — 4 concentric rings on a 7-second inhale/hold/exhale
  cycle with a synced word cue
- Organic morphing blob photo masks, parallax blobs, GSAP ScrollTrigger reveals,
  animated stat counters, slow-zoom Tuscany banner
- Authority strip with inline-SVG trust badges: GPBA, AADP, 400-hour diploma,
  trauma-informed, 60+ countries
- Sticky mobile CTA bar that hides when the booking section is in view

## Sections
Nav · Hero (orb + trust stats) · Accreditation strip · About/Founder · Who It's For ·
8-Month Curriculum (dark) · BreathCamp Tuscany banner · Testimonials · Outcomes +
Certificate card · Discovery-call booking · FAQ (accordion) · Footer

## SEO
- Title/meta/canonical, Open Graph + Twitter cards
- JSON-LD: Organization + Course + FAQPage
- Semantic headings, alt text, lazy-loaded images, `prefers-reduced-motion` support,
  no-JS fallback (content visible without GSAP)

## Deploy
| Platform | Method |
|---|---|
| GoHighLevel | Paste HTML into custom page editor |
| GitHub Pages | Settings → Pages → main branch |
| Netlify | Drag-drop the folder |

## To Customise (before publishing)
1. Edit `:root` CSS variables for brand tokens
2. Swap the 3 marked `BRAND PHOTO SWAP` images for real Alchemy of Breath photography
3. Replace the placeholder testimonials with real, permissioned graduate quotes
4. Replace the booking form with the GHL calendar / Calendly embed (marked swap point),
   or set the redirect URL in the form's submit handler
5. Confirm stats, dates, and pricing with Anthony/Amy

Built with: Vanilla HTML/CSS/JS · GSAP 3 + ScrollTrigger (CDN) · Google Fonts ·
CSS custom properties · Inline SVG badges · Blob animations
