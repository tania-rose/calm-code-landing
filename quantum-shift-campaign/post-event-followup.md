# Post-Event Follow-Up Plan

The window from event end (17 May, 21:00) to founding-rate close (22 May, midnight) is the highest-value five days of the campaign. Every workflow below should be built and tested in GHL before 17 May.

---

## Day-of execution (17 May)

| Time | Action | Owner |
|---|---|---|
| Pre-morning session | Open Zoom 15 min early. Welcome message in chat with recording link. | Tech lead |
| Post-morning session | Tag attendees `quantum-shift-attended-live`. Export attendee list. | Tania |
| Pre-evening session | Reuse same Zoom room. Same chat welcome. | Tech lead |
| Post-evening session | Tag evening attendees. Combined attendee list to GHL. | Tania |
| 21:00 | Send `10-did-you-feel-that.html` to anyone tagged `quantum-shift-attended-live`. | GHL workflow |
| 22:00 | Quick post-mortem with Anthony, Amy, tech lead. Capture 3 things that worked, 1 that did not. | Tania |

---

## Day-after execution (18 May)

| Time | Action | Owner |
|---|---|---|
| 09:00 | Send `11-recording-delivery.html` to: recording purchasers + registrants who did not attend. | GHL workflow |
| 09:00 | Tag no-show registrants as `qs-2026-no-show` so they get a different sequence than attendees. | Workflow rule |
| 14:00 | Upload session recording to members area. Confirm all purchasers can access. | Tech lead |
| 17:00 | Spot-check 5 random attendee inboxes to confirm `10` and `11` rendered correctly. | Tania |

---

## Following days (19-22 May)

| Day | Email | Audience |
|---|---|---|
| 19 May | `12-arm-deep-dive.html` | All attendees + recording purchasers |
| 20 May | (rest day, soft social only) | n/a |
| 21 May | `13-final-call.html` | Anyone who has clicked any post-event link but not yet enrolled in ARM |
| 22 May, 17:00 | "Final 7 hours" SMS-style email | Same audience as 13 |
| 22 May, 23:55 | "Doors closing in 5 minutes" final push | Same audience |

After 23 May, founding rate goes off; ARM page reverts to standard $699 pricing. Send a "the founding cohort is full" email to the rest of the list with a soft invitation to ARM Online at standard pricing or to the in-person retreat.

---

## Branching decision tree

```
                    ┌────────────────────────┐
                    │  17 May, post-event    │
                    └───────────┬────────────┘
                                │
                ┌───────────────┴────────────────┐
                │                                │
        Attended live?                   Did not attend?
                │                                │
                ▼                                ▼
    Send 10 (did you feel that)     Tag no-show, send 11 with
    Tag arm-warm                    "you missed it" framing
                │                                │
                └────────────┬───────────────────┘
                             ▼
                ┌──────────────────────────────┐
                │  19 May: Send 12 to all      │
                └─────────────┬────────────────┘
                              │
              ┌───────────────┴──────────────┐
              │                              │
      Clicked CTA in 12?              No click in 12?
              │                              │
              ▼                              ▼
      Send 13 final call          Drop into low-pressure
      Tag arm-hot                 nurture at T+30 days
              │
   ┌──────────┴──────────┐
   │                     │
Enrolled              Not enrolled
   │                     │
   ▼                     ▼
Welcome to ARM     Tag arm-deferred
sequence           Re-engage in 60 days
                   for next cohort
```

---

## Scripts for ad-hoc replies

When attendees reply to `10-did-you-feel-that.html`, expect a flood. Have a one-line reply ready that personalises and points to the next step. Three templates below.

**Template 1 (positive: "I cried, I felt it, I am buzzing")**

```
That feeling is the regulated baseline your body has been quietly asking for. Hold it gently tonight, water and warm food, and rest.

When you are ready, this is the eight-week walk through the same method:
{{custom_values.arm_online_url}}

Or if you would rather talk it through:
{{custom_values.breathwork_facilitator_training__discovery_call_url}}

In breath,
Anthony
```

**Template 2 (mixed: "I felt something but I am not sure")**

```
That is normal. The body sometimes registers a shift before the mind has the words.

Give it 24 to 48 hours. If anything starts to surface, journal it. The next email from us walks through the why, which often makes the felt experience click into place.

If you want to talk through what came up, this is what the 45-minute discovery call is for:
{{custom_values.breathwork_facilitator_training__discovery_call_url}}

In breath,
Amy
```

**Template 3 (concerned: "Should I see a doctor?")**

```
Thank you for telling us. The first thing to know: nothing dangerous happened. Conscious breath can stir up old physiology. Tingling, emotion, even nausea are all normal and pass within a few hours.

If you have an underlying condition or anything is persisting beyond 24 hours, please do speak with your physician.

Reply to this email if you want one of us to call you. We have a clinical lens (Amy is an ND) and we will hold the call ourselves.

With care,
Amy
```

---

## Soft-pitch checklist (for the live close)

Use during the evening session, in the last 5 minutes. Anthony or Amy delivers in their own voice.

- Acknowledge the room. Thank everyone by name where possible.
- Name the felt shift. "Notice the difference between the body that started this session and the body that is in it now."
- Bridge to ARM. "The shift is real. Holding it as a baseline is what the Alchemy Regulation Method is built for."
- Make the offer. "We have an eight-week online cohort opening in June. The founding rate for everyone in this room is $299, normally $699."
- Soft CTA. "If you want to think it over, the link is in the chat. If you want to talk it through with one of us first, there is a discovery call link too."
- Close. "Either way: thank you for being here today."

Do not push. The room is already pre-sold by the experience. The ask is just the door, not the sales pitch.
