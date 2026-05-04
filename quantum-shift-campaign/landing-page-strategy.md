# Quantum Shift Landing Page Strategy

**Page URL:** `go.alchemyofbreath.com/quantum-shift`
**Source file:** `aob/quantum-shift.html`
**Form ID:** `JXFlOEgAhMoElAqLBG1L` (AOB | Event: QS Optin | ARM)
**Audience:** Cold to warm AoB list, plus paid traffic from Meta, IG, and YouTube.
**Conversion target:** 25% LP-to-form, 1-2% LP-to-recording.

---

## Above the fold (3-second test)

Visitor lands and within three seconds knows:

1. What it is. Quantum Shift, a free live breathwork event.
2. When it is. Sunday 17 May 2026, two sessions.
3. Who is leading. Anthony Abbagnano and Amy Rachelle.
4. What to do. Register for free.

### Hero copy

```
Eyebrow:    QUANTUM SHIFT  ·  SUNDAY 17 MAY 2026
Headline:   One day. Two sessions. One breath at a time.
Sub-head:   A free, live one-day breathwork event with Anthony Abbagnano and Amy Rachelle. Drop your nervous system into the gear it has been trying to find for years.
Primary:    RESERVE MY FREE SEAT  (anchors to #reserve)
Trust strip: 2,000+ Alchemy of Breath graduates &middot; 40+ countries &middot; 14+ years
Session pills: Morning · 10:00 BST   |   Evening · 19:00 BST
Countdown:  Doors close in 03d 14h 22m  (live counter to first session)
```

### Hero design

- Background: subtle gradient teal-to-ink with a soft gold orb pulsing at 7-second cycle (mirroring ARM page).
- Mobile: stack pills vertically; hero CTA full-width.
- Above the fold height capped at 90vh so the next section is visible.

---

## Section flow

| # | Section | Goal | Word count |
|---|---|---|---|
| 1 | Hero | Conversion | 60 |
| 2 | Why this matters (Amy) | Validation, urgency | 180 |
| 3 | Image break + pull quote | Felt-shift, breath as autonomic lever | 30 |
| 4 | What Quantum Shift is | Format clarity + founder portraits | 200 |
| 5 | Outcome cards (4) | Make the experience concrete | 4 x 30 |
| 6 | Image break + pull quote | "Regulate, measurably, in real time" | 20 |
| 7 | Inline registration form | Conversion | n/a |
| 8 | FAQ (objection handling next to CTA) | Reduce drop-off | 250 |
| 9 | What happens next (ARM Coach L1 callout) | Funnel reveal | 100 |
| 10 | Image break + closing quote | "One day. Two sessions. One breath at a time." | 15 |
| 11 | Final CTA | Conversion | 40 |
| 12 | Footer | Legal, navigation | n/a |

Recording offer ($49.99) is removed from the main page flow and lives only on the thank-you page (see `thank-you-page.md`) and post-event nurture. This protects the free opt-in target by removing the price-decision friction point above the form.

---

## Form spec

Inline form at `#reserve`, embedded GHL form `JXFlOEgAhMoElAqLBG1L`.

### Visible fields

1. **First name** (required, text)
2. **Email** (required, email)

Time zone, "what pulled you here?" and "are you a practitioner?" are collected post-registration via `nurture-01-confirmation` and a follow-up survey, not on the LP. Time zone is auto-detected from the browser (`Intl.DateTimeFormat().resolvedOptions().timeZone`) and stored as a hidden field for reminder timing.

### Hidden fields (auto-populated from URL)

- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`
- `referrer_url`
- `event_tag` = `quantum-shift-2026-05-17`
- `landing_page_id` = `qs-2026`

### Submit copy

- Button: "Reserve my free seat"
- Helper line 1: "Takes 30 seconds. No card needed."
- Helper line 2: "Pre-event reminders only. Unsubscribe anytime."
- Post-submit redirect: `/quantum-shift/thank-you` (full GHL funnel page, not modal — the recording upsell needs the real estate). See `thank-you-page.md` for the full spec.

---

## Recording purchase flow

The recording is no longer pitched on the opt-in page. It is offered:

1. **On the thank-you page** as the primary upsell (see `thank-you-page.md`). Embedded GHL 1-step order form with Stripe-connected product, no redirect.
2. **In `11-recording-delivery.html`** for no-shows.
3. **In `13-final-call.html`** as part of the final-call bundle.

- Product: GHL product `qs-recording-2026` (Stripe processor).
- Price: $49.99 USD.
- Includes: both sessions, full recording, lifetime access.
- Triggers: `quantum-shift-recording-purchased` tag on payment success, drops contact into recording delivery sequence.

---

## Trust elements (above and below form)

- 2,000+ Alchemy of Breath graduates
- 40+ countries
- 14+ years
- ICF / SHRM / CIPD recognised at L1 (mention only on ARM card)

---

## SEO and meta

### Title tag

`Quantum Shift · A Free One-Day Breathwork Event · 17 May 2026`
(Hits 60 characters with the date, fits Google SERPs.)

### Meta description

`Sunday 17 May 2026. A free, live one-day breathwork event with Anthony Abbagnano and Amy Rachelle. Two sessions. One regulated nervous system at a time.`

### Open Graph + Twitter Card

```html
<meta property="og:title" content="Quantum Shift · A Free One-Day Breathwork Event">
<meta property="og:description" content="Sunday 17 May 2026. Two sessions. Free live attendance with Anthony Abbagnano and Amy Rachelle.">
<meta property="og:image" content="https://alchemyofbreath.com/og/quantum-shift-1200x630.jpg">
<meta property="og:url" content="https://go.alchemyofbreath.com/quantum-shift">
<meta property="og:type" content="event">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Quantum Shift · 17 May 2026">
<meta name="twitter:description" content="A free one-day breathwork event with Anthony Abbagnano and Amy Rachelle.">
<meta name="twitter:image" content="https://alchemyofbreath.com/og/quantum-shift-1200x630.jpg">
```

### JSON-LD (Event schema)

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Quantum Shift",
  "startDate": "2026-05-17T10:00:00+01:00",
  "endDate": "2026-05-17T20:30:00+01:00",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://go.alchemyofbreath.com/quantum-shift"
  },
  "image": "https://alchemyofbreath.com/og/quantum-shift-1200x630.jpg",
  "description": "A free one-day live breathwork event with two sessions, hosted by Anthony Abbagnano and Amy Rachelle, ND.",
  "organizer": {
    "@type": "Organization",
    "name": "Alchemy of Breath",
    "url": "https://alchemyofbreath.com"
  },
  "performer": [
    {"@type": "Person", "name": "Anthony Abbagnano"},
    {"@type": "Person", "name": "Amy Rachelle, ND"}
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "Live attendance",
      "price": "0.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://go.alchemyofbreath.com/quantum-shift",
      "validFrom": "2026-05-01T00:00:00+01:00"
    },
    {
      "@type": "Offer",
      "name": "Recording",
      "price": "49.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://link.alchemyofbreath.com/payment-link/quantum-shift-recording"
    }
  ]
}
```

### Canonical and favicon

```html
<link rel="canonical" href="https://go.alchemyofbreath.com/quantum-shift">
<link rel="icon" href="https://alchemyofbreath.com/favicon.ico">
```

---

## Accessibility checks

- All images have alt text describing the scene, not the keyword.
- Form labels are explicit (no placeholder-only fields).
- Colour contrast: gold on off-white passes AA at body size; gold on dark passes AAA.
- All CTAs are real `<button>` or `<a>` elements, not `<div>` with click handlers.
- Focus states visible (2px gold outline).
