# VIP Experience &middot; Offer Spec

**Purpose:** Post-opt-in upsell that converts free registrants into paid VIPs, qualifies the hottest buyers, and increases conversion into the ARM at ASHA in-person retreat downstream.

**Audience:** Anyone who just registered for the free event. This page is the first thing they see after the form submit.

**Price:** $97 on this page only, $197 after. (See pricing logic below.)

**Conversion target:** 12-18% of registrants take the VIP. Within VIPs, 25-35% convert to ARM at ASHA in-person.

**Format:** Page section that lives on the thank-you funnel step, between the confirmation block and the share-with-a-friend block. Replaces the $49.99 recording upsell (the recording moves into the VIP bundle).

---

## The strategic frame

The free event gives them the experience. The VIP gives them the work.

Three things make this offer convert:

1. **Scarcity is real, not manufactured.** The small circle is capped at 25 seats because the work has to be real. Cap is a logistical truth, not a tactic.
2. **The promise is regulation, not transformation.** Anchored in the nervous system language Amy already uses. No "breakthroughs," no "shifts," no hype.
3. **The VIP is the audition for ARM at ASHA.** This is the funnel's actual job. The VIP page never mentions the in-person retreat by price, only by access ("VIP seats open first"). That keeps the in-person price discovery for the post-event conversation, where the warmth is.

---

## Page section copy (drop-in)

```
─────────────────────────────────────────────
EYEBROW:    ONE MORE INVITATION

HEADLINE:   Sit in the small circle.

SUB-HEAD:   The main room is open to everyone. The small circle is for the
            people who want their actual nervous system met, in real time, by
            Anthony and Amy. Twenty-five seats. That is the whole cap.

BODY:       The free event gives you the experience. The small circle gives
            you the work.

            After each main session, the room closes and the VIP circle opens.
            Forty-five minutes. Your question. Your pattern. Your body. Met
            directly by Anthony or Amy, with the same trained facilitation
            team holding the room.

            The people who do the work in the small circle are the ones who
            walk out with a regulated baseline they can actually return to.
─────────────────────────────────────────────
```

### What is included &middot; the six-stack

```
1. The small circle, after every session.
   45 minutes, 25 seats. You bring one question or one pattern.
   Anthony or Amy meets it directly. The facilitation team holds the room.

2. A 1:1 integration call.
   One week after the event, you get a 30-minute call with a senior AoB
   facilitator. You map your next 30 days of practice, fitted to your
   nervous system, not a template.

3. The integration channel.
   A private group on Telegram. Anthony, Amy and the facilitation team
   check in daily for the 14 days after the event. Ask anything. Send a
   voice note. We answer.

4. The Regulation Companion.
   A printable PDF and a short daily audio. Ten minutes a day for fourteen
   days, built around the six stages of ARM. By the end of two weeks you
   will have walked through the method once, in your own body.

5. Lifetime replay access.
   Both main sessions, plus every VIP circle, time-stamped and chaptered.
   You return to the moment that landed, not scrub through ninety minutes.

6. First access to ARM at ASHA.
   VIP seats open 48 hours before public registration, at the founding rate.
   If you decide to take the work into the room with Anthony in person,
   you go first.
```

### Why this is priced the way it is

```
The small circle is capped at 25 seats so the work is real. The price is
intentionally low so it is not the deciding factor for anyone who wants to
be in the room.
```

### Price block

```
$97   On this page only
$197  If you come back later

   [ YES &mdash; OPEN THE VIP CIRCLE FOR ME &middot; $97 ]

   [ No thanks, I will stay in the main room ]
```

### Risk reversal

```
Sit in the first VIP circle on day one. If it does not give your nervous
system something the main room cannot, full refund. No questions.
```

### Testimonial

```
"I have done a lot of trainings. The small circle was different. It was
the first time anyone asked my body what it needed instead of telling it
what to do."

  &mdash; Hannah K., somatic coach, AoB graduate 2024
```

(Swap with a real practitioner testimonial pulled from AoB grad pool before launch. Keep the body-led, non-hype voice.)

---

## Pricing logic &middot; why $97 / $197

Two anchors to think about:

| Anchor | Price | Role |
|---|---|---|
| Recording | $49.99 | Floor. Just the artifact, no contact. |
| VIP Experience | **$97 / $197** | Mid-tier. Direct access, integration, replay. |
| ARM Online | $299 founding | The course, full method. |
| ARM at ASHA in-person | (set separately) | Top tier, the room. |

$97 sits above the recording (more is included) and well under ARM Online (so it is not a substitute, it is the on-ramp). $197 post-page anchor protects perceived value if anyone tries to come back through the funnel later.

The recording is folded into the VIP stack (item 5), so this page replaces the standalone $49.99 recording upsell on the thank-you page. Anyone who declines VIP can still buy just the recording from the no-show email (`11-recording-delivery.html`) at $49.99 &middot; that becomes the down-sell.

### Alternative price points to test

- **$47 / $97** &middot; matches the source format you referenced. Lower friction, higher take rate, lower revenue per registrant. Use if cold paid traffic is the main source and qualification volume matters more than revenue.
- **$97 / $197** &middot; recommended starting point. Higher perceived value, sustainable for the level of facilitator time included.
- **$147 / $297** &middot; only if the warm AoB list is the primary source and they are already high-trust. Practitioners will pay this.

Start at $97 / $197. Re-test in the next event window.

---

## Conversion mechanics on the page

- **Headline is outcome-led, not feature-led.** "Sit in the small circle" promises the experience, not the deliverable.
- **Scarcity is the cap, not a countdown.** 25 seats is real. Do not run a fake timer here &middot; the audience is too somatically literate and will read it.
- **Single primary CTA.** The decline link is plain text, not a button, so the visual hierarchy is honest about which path the page is asking for.
- **Testimonial sits below the CTA**, not above. The page leads with the offer; social proof handles late-stage doubt.
- **No "limited time" language.** Use "on this page only" for the anchor. That is true (it triggers off the funnel cookie) and does not raise the sympathetic nervous system.

---

## Funnel wiring (GHL)

```
Funnel: ARM Quantum Shift 2026
   Step 1: /event                       (opt-in LP)
   Step 2: /event/vip                   (this offer, embedded GHL 1-step order form)
            on purchase  &rarr; Step 3a
            on decline   &rarr; Step 3b
   Step 3a: /event/vip-confirmed        (VIP welcome, replay portal, Telegram link)
   Step 3b: /event/thank-you            (standard TY, no recording upsell)
```

- VIP product in GHL: `event-vip-experience-2026`, $97, Stripe processor, success tag `vip-experience-purchased`.
- Decline CTA = link to Step 3b (`/event/thank-you`), no payment skip required.
- Order form pre-fills name + email from the contact passed through the funnel.
- Hidden field `recording_included = true` on VIP purchase so the recording delivery automation also fires for VIPs.

### Workflow triggers

| Trigger | Action |
|---|---|
| Tag `vip-experience-purchased` added | Add to VIP segment, send VIP welcome email, deliver Telegram invite link, suppress recording up-sell emails |
| Tag `vip-experience-purchased` AND event date passes | Add to ARM at ASHA early-access list, send 48h-early invite |
| Page exit on /event/vip without purchase | Add to `vip-declined` segment, surface recording offer in `11-recording-delivery.html` |

---

## Tracking pixels on /event/vip

```html
<!-- Page load -->
fbq('track', 'ViewContent', {value: 97.00, currency: 'USD', content_name: 'vip-experience-upsell'});
gtag('event', 'view_item', {currency: 'USD', value: 97.00, items: [{item_id: 'event-vip', item_name: 'VIP Experience'}]});

<!-- Purchase -->
fbq('track', 'Purchase', {value: 97.00, currency: 'USD', content_name: 'vip-experience'});
gtag('event', 'purchase', {transaction_id: '{{order_id}}', value: 97.00, currency: 'USD'});
```

---

## A/B test queue

1. **Price:** $97 / $197 (control) vs $47 / $97 (lower friction).
2. **Headline:** "Sit in the small circle" vs "Bring your nervous system into the room" vs "The small circle is for the work."
3. **Cap framing:** "25 seats" vs "limited to one cohort" vs no cap mentioned, see if the scarcity is doing the work.
4. **Testimonial position:** below CTA (control) vs above the six-stack.
5. **Decline CTA copy:** "No thanks, I will stay in the main room" vs "Continue with the free event" vs "Not for me right now."

Run one test at a time, not all at once. Price test first &middot; biggest lever.

---

## Open questions for you before this ships

1. **Event length.** The source you shared is for a multi-day challenge. Is the new ARM event still one day with two sessions, or has it expanded? The Telegram window, daily Companion, and post-event integration call all work either way, but if it stays one day, "after each main session" becomes "after each of the two sessions" (clearer).
2. **Who runs the small circle?** Anthony and Amy each, or both together? Affects the cap (25 with one host, 40 with two).
3. **Integration call format.** 1:1 with a senior facilitator (premium, higher cost to deliver) vs small-group call with Anthony (lower cost, still high perceived value). Recommend small-group for the $97 price point, 1:1 only at $147+.
4. **Recording handling.** Confirm: bundle the $49.99 recording into VIP and remove the standalone recording upsell from the thank-you page? Down-sell the recording only through the no-show email path?
