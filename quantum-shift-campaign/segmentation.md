# Quantum Shift Segmentation Plan

Three primary audience cuts. Each gets a tailored variant of the cornerstone emails (`01-save-the-date` and `08-tomorrow`) and is dropped into a different post-event sequence based on behaviour.

---

## Segment A: VIP

**Definition:** AoB customers who have purchased before, FT graduates, retreat alumni, anyone tagged `customer` or `alumni` in GHL.

**Hook:** Earned trust, premium positioning, first access.

**Copy variant for `01-save-the-date.html`:**

```
Subject: We saved you a seat at the front
Preheader: Quantum Shift, 17 May. You already know the work.

Hi {{contact.first_name}},

You already know what we do. So this note is short.

On Sunday 17 May, Anthony and Amy are running Quantum Shift. Two free sessions, open to anyone. Because you have stood in our rooms before, we wanted you to have first sight of it.

There is a private Q&A segment after the evening session for our existing community. The link will be in your confirmation email if you register through this email.

[Reserve my seat]

We would love to see you in there.
```

**Post-event:** Skip the founding-rate education emails (12, 13). Drop directly into a "what is your next step" email tree with three branches:
- Already done ARM L1 → ARM L2 waitlist
- Looking at FT → discovery call invitation
- Wanting to bring this in-house → ASHA in-person card

---

## Segment B: Prospect

**Definition:** Cold and warm AoB list, never purchased, no behavioural data beyond opens.

**Hook:** Curiosity, validation of overwhelm, free as the easy yes.

**Copy variant:** Use the standard `01-save-the-date.html` and `08-tomorrow.html` as written. They are tuned for this audience.

**Post-event branching:**
- Attended live → drop into `10` → `12` → `13`.
- Registered, did not attend → drop into `11` (recording delivery, with a "you missed it, here it is" framing).
- Registered, did not attend, did not purchase recording → cold sequence at T+7 with a single re-engagement email and then unsubscribe if no opens.

---

## Segment C: Past attendee

**Definition:** Anyone who has attended a previous AoB online event. Tag: `event-attendee`.

**Hook:** "Last time was an opening. This is the door."

**Copy variant for `01-save-the-date.html`:**

```
Subject: The next door
Preheader: After the last event, you said you wanted to go deeper. Here is the deeper.

Hi {{contact.first_name}},

We saw you in the room last time. Thank you for being there.

A lot of you wrote in afterwards saying the experience opened something but you did not know what to do with it. This is what to do with it.

Quantum Shift is a longer-form session, designed as the entry point to the Alchemy Regulation Method. Same warmth, deeper work, two sessions to choose from on Sunday 17 May.

[Reserve my seat]

If your nervous system has been waiting for permission to keep going, this is it.
```

**Post-event:** Past attendees who register and attend get an early-access window to the ARM founding rate. Specifically: email `12-arm-deep-dive.html` lands in their inbox 24 hours before it goes to the wider list, with a unique discount code that expires when public access opens. Tag: `qs-2026-vip-early-access`.

---

## Tagging logic

| Tag | Set when |
|---|---|
| `quantum-shift-registered` | QS form submitted |
| `quantum-shift-attended-live` | Webhook from Zoom or manual export, marked the day after |
| `quantum-shift-recording-purchased` | Stripe / GHL payment success |
| `arm-waitlist` | ARM waitlist form submitted |
| `arm-discovery-call-booked` | Calendly / GHL booking confirmed |
| `arm-online-enrolled` | Stripe success on ARM |
| `qs-2026-no-show` | Registered, did not attend, did not purchase recording (set May 18) |

These tags drive the workflow branching. Build them as standalone tag conditions in GHL, not nested triggers, so they are easier to maintain.

---

## Send-time strategy

| Segment | Best window (recipient local) |
|---|---|
| VIP | Tuesday or Thursday, 9:00 to 11:00 |
| Prospect | Wednesday, 7:00 (catches morning inbox sweep) |
| Past attendee | Sunday, 18:00 (reflective time, less competition) |

Use GHL's recipient-local-time send. If unavailable, default to 9:00 in the contact's stated time zone (from form question 3).

---

## A/B test plan

Run a single A/B on the registration push push (`07-48-hours.html`). Two subject lines:

- A: `48 hours to Quantum Shift. Are you in?`
- B: `Two days. The room is filling.`

Send to 20% of the unregistered list, hold the winner for the remaining 80% sent six hours later. Decide on open rate; if tied, decide on click rate. Document the winner in `tracking-dashboard.md` so the next event can start from a stronger baseline.
