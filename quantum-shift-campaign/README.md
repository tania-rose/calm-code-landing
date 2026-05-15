# Quantum Shift Event Campaign Playbook

**Event:** Quantum Shift, a free one-day live breathwork event
**Date:** Sunday 17 May 2026 (morning + evening sessions)
**Hosts:** Anthony Abbagnano & Amy Rachelle, ND
**Live attendance:** Free
**Recording:** $49.99
**Onward funnel:** Alchemy Regulation Method (ARM) Online, $299 founding rate (saves $400)
**Campaign window:** 1 May to 21 May 2026 (16 days pre-event, 4 days post-event)

---

## Campaign goals

| Metric | Target |
|---|---|
| Landing page visitors | 5,000 |
| Opt-ins (LP → form submit) | 1,250 (25% conversion) |
| Live attendance (registered → showed up) | 500 (40%) |
| Recording sales (LP visitor → $49.99) | 50-100 (1-2%) |
| ARM waitlist after event | 300+ |
| Discovery calls booked | 25+ (5% of attendees) |
| ARM Online enrolments | 30-40 |

---

## Campaign architecture

The campaign runs in **five phases**, with **two parallel tracks**:

- **Track A: Acquisition.** Broadcast emails to the AoB list driving registration.
- **Track B: Nurture.** Auto-triggered sequence for anyone who registers, layering in ARM education before and after the event.

```
                       ACQUISITION (Track A)                         NURTURE (Track B)
                       broadcast to list                             auto-trigger on registration

  Phase 1: Save the Date     Email 1 (May 1)
  May 1 to 3                 Email 2 (May 3)         ────────►      Confirmation (T+0)
                                                                     Welcome + what to expect
  Phase 2: Invitation        Email 3 (May 5)         ────────►      ARM primer 1 (T+2)
  May 5 to 9                 Email 4 (May 8)                         Why your nervous system runs the show

  Phase 3: Registration      Email 5 (May 11)        ────────►      ARM primer 2 (T+5)
  push                       Email 6 (May 13)                        The six stages, explained
  May 11 to 15               Email 7 (May 15)

  Phase 4: Pre-event         Email 8 (May 16)        ────────►      24-hour reminder
  May 16 to 17               Email 9 (May 17 AM)                     2-hour reminder

  Phase 5: Post-event        Email 10 (May 17 PM)    ────────►      Did you feel that?
  May 17 to 21               Email 11 (May 18)                       Recording delivery (paid only)
                             Email 12 (May 19)                       ARM founding rate primer
                             Email 13 (May 21)                       Last call to lock $299
```

---

## Email manifest

All HTML email files live in `emails/`. Each is built with inline styles for client compatibility, table-based layout, mobile-responsive, brand colours (`#cc9924` gold, `#354d4c` teal, `#1a1a18` ink, `#f9f8f5` off-white), Marcellus + Roboto webfonts, and zero em dashes.

| # | Filename | Phase | Send | Audience | Subject line |
|---|---|---|---|---|---|
| 01 | `01-save-the-date.html` | Save the date | May 1, 9:00 host TZ | Full list | Sunday 17 May. Save the date. |
| 02 | `02-the-why.html` | Save the date | May 3, 9:00 | Full list | Why this Sunday matters more than you think |
| 03 | `03-meet-your-hosts.html` | Invitation | May 5, 9:00 | Full list | Meet the two people holding the room on Sunday |
| 04 | `04-what-youll-experience.html` | Invitation | May 8, 9:00 | Full list | Here is what one breath at a time actually feels like |
| 05 | `05-social-proof.html` | Registration push | May 11, 9:00 | Unregistered | 800 people from 40 countries are already in |
| 06 | `06-arm-tease.html` | Registration push | May 13, 9:00 | Unregistered | After Sunday, this is what comes next |
| 07 | `07-48-hours.html` | Registration push | May 15, 9:00 | Unregistered | 48 hours to Quantum Shift. Are you in? |
| 08 | `08-tomorrow.html` | Pre-event | May 16, 17:00 | Registered | Tomorrow. Here is everything you need. |
| 09 | `09-starting-soon.html` | Pre-event | May 17, two hours pre-session | Registered | Starting in 2 hours. The link is below. |
| 10 | `10-did-you-feel-that.html` | Post-event | May 17, 21:00 | Live attendees | Did you feel that? |
| 11 | `11-recording-delivery.html` | Post-event | May 18, 9:00 | Recording purchasers + no-shows | Your recording is here |
| 12 | `12-arm-deep-dive.html` | Post-event | May 19, 9:00 | Attendees + recording | The method behind what you just felt |
| 13 | `13-final-call.html` | Post-event | May 21, 17:00 | Engaged non-converters | Last chance: $299 founding rate closes Friday |
| N1 | `nurture-01-confirmation.html` | Auto on register | T+0 | Registrants | You are in. Welcome to Quantum Shift. |
| N2 | `nurture-02-arm-primer-1.html` | Auto on register | T+2 days | Registrants | Why your nervous system runs the show |
| N3 | `nurture-03-arm-primer-2.html` | Auto on register | T+5 days | Registrants | The six stages of the Alchemy Regulation Method |

---

## Segmentation strategy

### VIP (existing customers, retreat alumni, FT graduates)
- Send list: All emails, but with a separate VIP-tagged version of `01` and `08`.
- Hook: "You already know the work. We saved you a seat at the front."
- Bonus: Private Q&A segment after the evening session, link in confirmation.
- CTA: Direct to ARM at-ASHA in-person card on the LP, not waitlist.

### Prospect (cold and warm AoB list, never purchased)
- Send list: All Track A emails.
- Hook: Curiosity, validation of overwhelm, free entry as the easy yes.
- CTA: "Register for free."

### Past attendee (anyone who attended a previous AoB online event)
- Send list: All Track A emails, but `01` and `04` get the past-attendee variant.
- Hook: "What we shared last time was an opening. This is the door."
- Bonus: First access to the ARM founding rate before the public list.
- CTA: Register, with a postscript noting their early-access window for ARM.

---

## Personalisation tokens

All emails use these GHL merge fields. Falls back to safe defaults if blank.

| Token | Fallback | Used in |
|---|---|---|
| `{{contact.first_name}}` | "friend" | Greetings |
| `{{custom_values.qs_event_date_pretty}}` | "Sunday 17 May 2026" | Body, footers |
| `{{custom_values.qs_morning_session_time}}` | "09:00 BST" | Reminders |
| `{{custom_values.qs_evening_session_time}}` | "17:00 BST" | Reminders |
| `{{custom_values.qs_live_link}}` | (Zoom URL set day-of) | Reminders |
| `{{custom_values.qs_recording_purchase_url}}` | placeholder Stripe | All emails |
| `{{custom_values.arm_online_url}}` | `go.alchemyofbreath.com/alchemy-regulation-method-online` | Post-event, nurture |
| `{{custom_values.breathwork_facilitator_training__discovery_call_url}}` | `go.alchemyofbreath.com/book-your-discovery-call-page` | Post-event |

---

## Files in this playbook

```
quantum-shift-campaign/
├── README.md                       (this file)
├── landing-page-strategy.md        (LP copy spec, form fields, structured data)
├── segmentation.md                 (audience cuts, copy variants, tagging)
├── tracking-dashboard.md           (KPI tracker, UTM scheme, weekly review)
├── post-event-followup.md          (post-event funnel detail, ARM conversion)
└── emails/
    ├── 01-save-the-date.html
    ├── 02-the-why.html
    ├── 03-meet-your-hosts.html
    ├── 04-what-youll-experience.html
    ├── 05-social-proof.html
    ├── 06-arm-tease.html
    ├── 07-48-hours.html
    ├── 08-tomorrow.html
    ├── 09-starting-soon.html
    ├── 10-did-you-feel-that.html
    ├── 11-recording-delivery.html
    ├── 12-arm-deep-dive.html
    ├── 13-final-call.html
    ├── nurture-01-confirmation.html
    ├── nurture-02-arm-primer-1.html
    └── nurture-03-arm-primer-2.html
```

---

## Brand and tone non-negotiables

- No em dashes anywhere. Use periods, commas, semicolons, or `&middot;`.
- Marcellus for headings; Roboto 300 for body; 500 for buttons.
- Gold `#cc9924`. Teal `#354d4c`. Ink `#1a1a18`. Off-white `#f9f8f5`.
- Grounded, second-person, no hype. Mirror Amy's "Why this matters" voice.
- Trauma-informed. ARM is the foundation that makes deeper modalities safer; never described as "trauma catharsis" or "altered state."
- Always preview emails in Litmus or Email on Acid before broadcast.
- Before pushing, grep across `emails/*.html` for the em dash unicode character (U+2014) and its HTML entity equivalent. Both should return zero matches.
