# Microcopy library

The small words carry the brand. Button labels, form fields, error states, success states, tooltips, hint text. This file is the canonical list.

## Button labels

### Primary (commit)
- "Apply Now"
- "Start the Journey"
- "Book Your Place at ASHA"
- "Choose Your Dates"
- "Secure Your Place"
- "Reserve Your Place"
- "Begin Your Application"
- "Save My Spot"
- "Register Free" (free workshops only)

### Secondary (try)
- "Try a Free Breathwork Session"
- "Watch the First Chapter"
- "Read the First Chapter"
- "See a Sample Class"
- "View Full Curriculum"
- "See the Dates"
- "Meet Your Guides"

### Tertiary (talk)
- "Book a Discovery Call"
- "Talk to Us First"
- "Book a Free 15-Minute Call"
- "Not sure? Let's talk."

### Navigation / directional
- "Explore ASHA →"
- "See the Journey"
- "Learn More": **avoid**. Always replace with something specific.

### Never use
- "Click Here"
- "Submit"
- "Get Started" (vague)
- "Get Access"
- "Unlock" / "Unlock Now"
- "Join Now"
- "Buy Now"

## Form fields

### Labels (above field)
- "Your name" (not "First Name" unless required)
- "Email address"
- "Where in the world are you?" (friendlier than "Country")
- "What draws you to this?"
- "A little about you"

### Placeholders
Avoid. Use proper labels. Placeholders fail accessibility.

### Help text (below field)
- "We respond within 48 hours."
- "No spam, ever."
- "We will only use this to reach you about [program name]."

### Error states
- "We need your name to get back to you."
- "That email address doesn't look quite right. Can you check?"
- "Something didn't go through. Try again or email us at hello@alchemyofbreath.com."

### Success state
- "Thank you. We'll be in touch."
- "Got it. Check your inbox in the next few minutes."
- "We've received your application. One of the team will reach out within 48 hours."

## Pricing microcopy

### Price qualifiers
- "/mo" for monthly plans
- "(per person)" for shared accommodation
- "Paid in full"
- "[N] monthly payments of [amount]"
- "Total: [amount]"

### Payment plan descriptions
- "Pay 20% today to secure your place. The rest is split into monthly installments, with the final balance due two weeks before arrival."
- "Pay in full and save $500 with the super early bird."

### Price strike-through
When showing an early bird discount:
```
<span class="price-strike">€2,745</span> €2,196
```
Always with context: `<span class="eb-badge">Early Bird</span>` nearby.

### Price section disclaimers
- "Travel not included. Booking handled through Retreat Guru."
- "Flights not included. Accommodation selected during booking."
- "BreathCamp at ASHA in Tuscany is a separate registration and is not included in this tuition."

## FAQ copy conventions

### Questions
- Use natural, conversational phrasing.
- Start with the real question a reader would ask.
- "Do I need prior breathwork experience?" (not "Prerequisites")
- "What is the weekly time commitment?" (not "Duration")

### Answers
- Start with a direct answer: "Yes." / "No." / "Plan for approximately..." / "All live sessions are recorded."
- Follow with one sentence of context.
- Keep answers under 80 words where possible.
- End with a concrete action or reassurance when relevant.

### Last FAQ item (always)
```
Q: I still have questions.
A: Book a free 15-minute discovery call with our team. We will answer anything and help you figure out if this is the right fit. No pressure.
```

## Nav microcopy

### Link labels
- "Program" / "The Program"
- "Chapters" / "Modules"
- "The Journey" / "The Week"
- "Dates"
- "Stories" (testimonials)
- "Your Guides" / "Instructors"
- "Pricing" / "Investment"
- "FAQ"

### Max 4-5 links in the nav. More is too many.

## Trust strip labels

Compact, uppercase, letter-spaced:
- "Years" (after a number like "12+")
- "Graduates"
- "Countries"
- "Accredited"
- "Total hours"
- "Days residential"
- "Hectares of Tuscan land"

## Badge / pill copy

### Scarcity
- "Filling Fast"
- "A Few Spots Left"
- "Last Few Spots"
- Never: "Last Chance!", "Only 1 Left!", countdown-manipulated numbers.

### Early bird
- "Early Bird"
- "Super Early Bird"
- "Save $500"
- "Save 20%"

### Featured
- "Most Popular"
- "Founding Cohort"

## Date and time formatting

- Dates: "August 16–22, 2026" (en dash for ranges, this is the ONE place en dashes are allowed: never the em dash for emphasis)
- Month spans: "August 30 to September 5, 2026"
- Times: "2:30 PM to 5:00 PM" (spell out "to", don't use dash)
- Years: "2026" (no comma)

## Money formatting

- USD: `$499`, `$1,499`, `$6,700`
- EUR: `€1,319`, `€2,738` (euro symbol, no space)
- Always include the currency symbol, never bare numbers.

## Progress and loading

- "Loading your application..."
- "Saving..."
- "We've saved your place. One more step."

## Email subject lines (for future use)

- "Welcome to the Inner Journey"
- "Your BreathCamp place is confirmed"
- "Next steps for your application"
- Never: "URGENT:", "Don't miss out!", "Last chance!"

## Thank you / confirmation page copy

Default thank you block after form submit:
> "Thank you.
> We have received your [application / request / booking].
> One of the team will be in touch within 48 hours.
> In the meantime, take a breath."

## 404 / error page copy

> "This page has drifted away.
> The link may have changed, or the page may have been moved.
> Try one of these:"
> (list of main navigation links)

## Cookie / consent banner (if needed)

Keep it human, not legal:
> "We use a few cookies to keep the site working and to understand how it's used. Read our privacy policy or just click 'OK'."
> [OK] [Privacy Policy]

No dark patterns. No pre-ticked boxes.
