# SEO, meta, Open Graph, and JSON-LD

Every AoB page needs proper metadata. This is the template.

## Head block template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Primary -->
  <title>[Page-specific title] | Alchemy of Breath</title>
  <meta name="description" content="[155 char max description]" />
  <link rel="canonical" href="https://[canonical-url]" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="[Same as title tag]" />
  <meta property="og:description" content="[Same as description]" />
  <meta property="og:image" content="[1200x630 social share image URL]" />
  <meta property="og:url" content="https://[canonical-url]" />
  <meta property="og:site_name" content="Alchemy of Breath" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="[Same as title tag]" />
  <meta name="twitter:description" content="[Same as description]" />
  <meta name="twitter:image" content="[Same as og:image]" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />

  <!-- Tailwind + config -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>/* tailwind config */</script>

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.png" />

  <!-- JSON-LD schema (archetype-specific, see below) -->
  <script type="application/ld+json">
    [see below]
  </script>
</head>
```

## Title tag formulas

Keep under 60 characters (Google truncates beyond ~60).

### By archetype
- Residential: `[Program] | [X]-Day Retreat in Tuscany | Alchemy of Breath`
  - e.g. "BreathCamp Tuscany | 7-Day Breathwork Retreat | Alchemy of Breath"
- Online course: `[Program] | [N]-Chapter Course | Alchemy of Breath`
  - e.g. "Inner Journey | A 7-Chapter Course on Who You Are and Why | Alchemy of Breath"
- Certification: `Breathwork Facilitator Training | Alchemy of Breath`
- Workshop: `[Workshop Name] | Free [Format] | Alchemy of Breath`

**Always use pipe "|" as the separator in title tags. Never em dashes or en dashes.**

## Meta description formulas

155 characters max. One sentence. No exaggeration.

### Templates
- Residential: `A [N]-day residential breathwork retreat in Tuscany. [Core promise]. [Next session date range if known].`
- Online course: `A [N]-chapter video course by [Anthony Abbagnano]. [Core promise]. Self-paced or guided.`
- Certification: `Become a certified breathwork facilitator. [N]-hour online training with live mentorship. Graduate at BreathCamp in Tuscany.`
- Workshop: `[One-line description]. [Date if known]. Free to attend / [price].`

## Open Graph image specs

- Dimensions: 1200 × 630 px
- Format: PNG or JPG, under 300KB
- Should include: Alchemy of Breath logo (top left), page title, a warm photo (ASHA landscape preferred)
- Dark gradient overlay for legibility

**TODO**: Ask user for canonical OG image URLs per page. For now, use the hero image of each page.

## JSON-LD schema templates

### Course schema (online course + certification pages)

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "[Program Name]",
  "description": "[Same as meta description]",
  "provider": {
    "@type": "Organization",
    "name": "Alchemy of Breath",
    "url": "https://alchemyofbreath.com",
    "logo": "https://assets.cdn.filesafe.space/5lz2Wm44CNDwLSZWgAPf/media/69c78cc9104e4ff7ea6eb72d.png"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online" or "Blended" or "Onsite",
    "courseWorkload": "PT400H",
    "startDate": "2026-09-01",
    "endDate": "2027-05-01"
  },
  "offers": {
    "@type": "Offer",
    "price": "6700",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "instructor": {
    "@type": "Person",
    "name": "Anthony Abbagnano",
    "jobTitle": "Founder, Alchemy of Breath"
  }
}
```

### Event schema (residential retreats / BreathCamp)

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "BreathCamp [Session]",
  "startDate": "2026-08-16",
  "endDate": "2026-08-22",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "ASHA Retreat Centre",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Localit√† Le Piane",
      "addressLocality": "Castell'Azzara",
      "addressRegion": "Tuscany",
      "addressCountry": "IT"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Alchemy of Breath",
    "url": "https://alchemyofbreath.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "1319",
    "priceCurrency": "EUR",
    "url": "https://asha.secure.retreat.guru/",
    "availability": "https://schema.org/InStock"
  },
  "image": "[Hero image URL]",
  "description": "[Meta description]"
}
```

### FAQ schema (every page with an FAQ section)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Exact question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Exact answer text, plain text, no HTML]"
      }
    }
  ]
}
```

### Organization schema (site-wide, include on every page)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Alchemy of Breath",
  "url": "https://alchemyofbreath.com",
  "logo": "https://assets.cdn.filesafe.space/5lz2Wm44CNDwLSZWgAPf/media/69c78cc9104e4ff7ea6eb72d.png",
  "description": "A school of breathwork. 12+ years, 1000+ graduates, 40+ countries.",
  "sameAs": [
    "https://www.instagram.com/alchemyofbreath",
    "https://www.facebook.com/alchemyofbreath"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@alchemyofbreath.com",
    "contactType": "customer service"
  }
}
```

**TODO**: Confirm social media handles with user before going live.

## Sitemap placement

When a new page is built, add it to `sitemap.xml` with:
- `<priority>` 0.8 for flagship pages (Facilitator, BreathCamp)
- `<priority>` 0.7 for tier 1 and 2 pages (Regulation, Inner Journey)
- `<priority>` 0.5 for workshops and one-off events

## Analytics

Pages should load GA4 and Meta Pixel via a single tag manager snippet. The snippet goes in the head and is kept separate from content.

**TODO**: Ask user for GTM container ID and confirm which analytics tools to include.

## Robots and indexing

- Production pages: `<meta name="robots" content="index, follow" />`
- Cohort landing pages that are closed: `<meta name="robots" content="noindex, nofollow" />` (so closed cohorts don't compete in search)
- Staging / draft pages: `<meta name="robots" content="noindex, nofollow" />`

## Performance checklist

Before shipping a page:
- [ ] All images have `loading="lazy"` except the hero image
- [ ] All images have explicit width/height or aspect-ratio to prevent CLS
- [ ] Fonts are preconnected (not just linked)
- [ ] Tailwind is loaded from CDN (acceptable for now; move to compiled CSS if size becomes an issue)
- [ ] No console errors on page load
- [ ] Video `preload="metadata"` unless the video is above the fold
- [ ] First contentful paint under 2.5s on a typical connection
