# Quantum Shift Thank-You Page

**Page URL:** `go.alchemyofbreath.com/quantum-shift/thank-you`
**Source:** GHL funnel step (child of the Quantum Shift funnel that owns the opt-in page)
**Audience:** Anyone who just submitted the opt-in form
**Conversion target:** 8-12% of registrants buy the $49.99 recording on this page (the highest-intent moment in the entire funnel)

The job of this page is two things, in this order:
1. **Confirm.** They need to know it worked, what happens next, and where the link will arrive.
2. **Upsell the recording.** Right after the yes is the warmest moment to ask for the $49.99.

Pitch is soft, framed as insurance against missing the live, not as a separate product.

---

## Section flow

| # | Section | Goal |
|---|---|---|
| 1 | Confirmation hero | Reassurance, calendar add |
| 2 | What to expect on Sunday (3 short lines) | Lower no-show rate |
| 3 | Recording upsell with embedded checkout | Conversion |
| 4 | Share with a friend | Viral lift |
| 5 | Footer | Legal, navigation |

Page uses the same brand tokens as the opt-in page: gold `#cc9924`, teal `#354d4c`, ink `#1a1a18`, off-white `#f9f8f5`, Marcellus + Roboto. Same hero treatment, same gold rule, same pulsing orb (smaller).

---

## Section 1 &middot; Confirmation hero

```
Eyebrow:   YOU ARE IN
Headline:  Your seat is saved.
Sub-head:  Check your inbox in the next 90 seconds for your live link and calendar invite. We will send two reminders before Sunday.
Pills:     Sunday 17 May 2026  ·  Morning 10:00 BST  ·  Evening 19:00 BST
CTA row:   [ Add to calendar ]   [ Send the link to a friend ]
```

`Add to calendar` button drops the `.ics` (one button, generates Google / Apple / Outlook).
`Send the link to a friend` opens a pre-filled mailto with the LP URL.

---

## Section 2 &middot; What to expect (short, reassuring)

```
Three things to know before Sunday.

1. There is nothing to prepare. Just turn up.
2. You will be lying down for 90 minutes per session. Quiet room, water, headphones.
3. Anthony or Amy guides every breath. The room is held by trained facilitators.
```

This is the same content as `nurture-01-confirmation.html` &middot; on purpose, so the page reinforces the email instead of replacing it.

---

## Section 3 &middot; Recording upsell with embedded checkout

This is the conversion section. Frame it as **insurance**, not a product:

```
Eyebrow:   ONE THING BEFORE YOU GO
Headline:  Cannot make it live? Or want to keep it forever?
Body:      Both Sunday sessions, full recordings, lifetime access in your AoB account. So if life gets in the way on Sunday, or if a session lands deep and you want to revisit it, you have it.

Bullets:
  &middot;  Both sessions, edited and indexed
  &middot;  Anthony &amp; Amy's intro and integration segments
  &middot;  Lifetime access via your AoB account
  &middot;  $49.99, one-time, no subscription

[ EMBEDDED GHL ORDER FORM HERE: 1-step, name + email pre-filled, card field, Pay $49.99 button ]

Helper:    Same email you just used. We will send your recording within 24 hours of the event ending.
```

Pre-fill the order form's name and email from the contact that just registered (GHL passes `contact_id` through the funnel automatically &middot; see embed notes below).

If they buy, success state: replace this section with a "You have lifetime access. The recording will arrive in your inbox within 24 hours of the event." card. Trigger `quantum-shift-recording-purchased` tag.

If they do not buy and leave, that is fine &middot; they will see the offer again in `11-recording-delivery.html` if they no-show, and `13-final-call.html` as a bundle.

---

## Section 4 &middot; Share with a friend

Light, optional, no friction.

```
Eyebrow:  PASS IT ON
Headline: Know one person who needs Sunday more than you do?
Body:     Send them the link. The room can hold them.
[ Copy link ]   [ Share by email ]   [ Share by WhatsApp ]
```

Links route to `https://go.alchemyofbreath.com/quantum-shift?utm_source=share&utm_medium=referral&utm_campaign=qs-2026&utm_content={{contact.id}}` so referrals are attributable.

---

## Section 5 &middot; Footer

Same footer as the opt-in page. Privacy, terms, contact, social.

---

## Embedding the checkout in GHL &middot; the actual how-to

You have three real options. In order of recommendation:

### Option A &middot; GHL native 1-step order form (recommended)

This is the cleanest path because you are already on GHL and have Stripe connected.

1. **Create the product in GHL.** Payments &rarr; Products &rarr; New Product. Name: `Quantum Shift Recording 2026`. Price: $49.99 USD, one-time. Set the success tag to `quantum-shift-recording-purchased`. Connect to your Stripe account under Payments &rarr; Integrations.
2. **Build the thank-you page as a funnel step.** In the same funnel as the opt-in page, add a new step called `thank-you`. Set the opt-in form's "After submit" redirect to this new step (not an external URL &mdash; staying inside the funnel is what allows GHL to pass the contact through and pre-fill the order form).
3. **Drop the 1-step order form element.** On the thank-you step, add Element &rarr; Order Form &rarr; 1-Step. Select the `Quantum Shift Recording 2026` product. Toggle on "Pre-fill from contact." Style: brand colours, Roboto button, no shipping fields, no upsell bumps (those create decision fatigue here).
4. **Style the embedded form to match.** GHL's form styling is limited but enough &middot; set primary button to `#cc9924`, text colour to `#1a1a18`, background to `#f9f8f5`, border radius 0. Hide the product image (the page hero already carries the visual weight).
5. **Set the success action.** On payment success, swap the order form section for the success state described in Section 3 above. Use a "Show on payment success" conditional element in GHL, or redirect to a `/recording-confirmed` sub-step if you want a clean trigger for downstream automations.
6. **Wire the workflow.** Workflows &rarr; trigger on tag `quantum-shift-recording-purchased` &rarr; send `11-recording-delivery.html` immediately, add to recording-buyers list, suppress no-show variant of post-event emails.

This keeps the entire purchase inside the funnel, no redirects, full attribution, and Stripe handles cards / Apple Pay / Google Pay through GHL's payment elements.

### Option B &middot; Stripe Payment Link button (fallback if GHL Stripe sync misbehaves)

If the GHL native form is not an option (Stripe connection issue, multi-currency need GHL does not handle, etc.), do this:

1. Create a Stripe Payment Link directly in the Stripe dashboard. Set price $49.99, success URL = `go.alchemyofbreath.com/quantum-shift/recording-confirmed?email={CHECKOUT_SESSION_CUSTOMER_EMAIL}`.
2. On the GHL thank-you page, replace the embedded form with a brand-styled button: **"Get the recording &middot; $49.99"**. Link target = the Stripe Payment Link, with `target="_blank"` (Stripe blocks iframing, so do not try).
3. On the success URL page (a second GHL funnel step), use a webhook from Stripe (Workflows &rarr; Inbound Webhook trigger) to tag the contact `quantum-shift-recording-purchased` by matching email.

Downside vs Option A: opens in a new tab, and the tag fires via webhook with a few seconds of lag. Conversion is typically 15-25% lower than embedded checkout because you lose people in the tab switch.

### Option C &middot; Stripe Embedded Checkout via custom HTML element (most flexibility, most engineering)

Only do this if you need full control over the checkout UI (e.g. custom upsell bump that GHL does not support).

1. Create a Stripe Checkout session server-side (a Cloudflare Worker or any small backend) that returns a `client_secret` for `mode: 'embedded'`.
2. In GHL, drop a Custom HTML element on the thank-you page with the Stripe.js embedded checkout snippet, calling your worker for the session.
3. Handle webhooks for `checkout.session.completed` &rarr; tag in GHL via API.

Downside: requires a backend you maintain. For one event with one product, Option A is the right answer.

### Why not iframe a Stripe Payment Link directly?

Stripe sets `X-Frame-Options: DENY` on Payment Links and Hosted Checkout. Iframing them is blocked by the browser. The only Stripe surfaces that can be embedded are Embedded Checkout (Option C) and Stripe Elements (more custom code). Do not waste time trying to iframe the Payment Link &middot; it will not render.

---

## GHL funnel wiring summary

```
Funnel: Quantum Shift 2026
&nbsp;&nbsp;&nbsp;Step 1: /quantum-shift              (opt-in LP)
&nbsp;&nbsp;&nbsp;Step 2: /quantum-shift/thank-you    (this page, embedded order form)
&nbsp;&nbsp;&nbsp;Step 3: /quantum-shift/recording-confirmed   (post-purchase confirm)

Forms:
&nbsp;&nbsp;&nbsp;JXFlOEgAhMoElAqLBG1L  (opt-in form, on Step 1)
&nbsp;&nbsp;&nbsp;1-step order form     (on Step 2, product = Quantum Shift Recording 2026)

Triggers off Step 2:
&nbsp;&nbsp;&nbsp;Payment success    &rarr; tag quantum-shift-recording-purchased
&nbsp;&nbsp;&nbsp;                       &rarr; show success state, suppress no-show emails
&nbsp;&nbsp;&nbsp;Page exit          &rarr; no action (offer reappears in nurture)
```

---

## Tracking on the thank-you page

Fire these on page load (Lead) and on payment success (Purchase). Both Meta and GA4.

```html
<!-- Meta Pixel -->
fbq('track', 'Lead', {value: 0.00, currency: 'USD', content_name: 'quantum-shift-registration'});
<!-- on payment success -->
fbq('track', 'Purchase', {value: 49.99, currency: 'USD', content_name: 'quantum-shift-recording'});

<!-- GA4 -->
gtag('event', 'sign_up', {method: 'quantum-shift-form'});
gtag('event', 'purchase', {transaction_id: '{{order_id}}', value: 49.99, currency: 'USD'});
```

Without the Lead event firing here, Meta cannot optimise the paid traffic ad sets. This is the single most-missed step on GHL thank-you pages.

---

## Accessibility &middot; same standards as opt-in page

- All form fields keyboard-accessible (GHL native order form passes by default).
- Success state announces via `aria-live="polite"`.
- Focus moves to the order form heading on page load so screen readers know what is next.
- Card field placeholder is not the only label.
