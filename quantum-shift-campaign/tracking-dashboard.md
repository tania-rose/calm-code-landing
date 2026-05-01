# Tracking Dashboard

Single source of truth for performance during the campaign. Update each section daily during the active window. Build the live version in GHL Reports + a Google Sheet for the metrics that GHL does not surface cleanly.

---

## UTM scheme

Every link in every email and ad uses the same five-parameter scheme. Apply consistently or the dashboard breaks.

```
?utm_source=<channel>
&utm_medium=<broadcast|nurture|paid|organic|partner>
&utm_campaign=qs-2026
&utm_content=<email-id-or-creative-id>
&utm_term=<segment-or-keyword>
```

| Parameter | Allowed values |
|---|---|
| `utm_source` | `email`, `meta`, `google`, `instagram`, `youtube`, `partner-<name>`, `direct` |
| `utm_medium` | `broadcast`, `nurture`, `paid`, `organic`, `partner` |
| `utm_campaign` | Always `qs-2026` for this event |
| `utm_content` | Email file name without extension, or ad creative ID |
| `utm_term` | Segment label (`vip`, `prospect`, `past-attendee`) or paid keyword |

Example: `https://go.alchemyofbreath.com/quantum-shift?utm_source=email&utm_medium=broadcast&utm_campaign=qs-2026&utm_content=07-48-hours&utm_term=prospect`

---

## Email performance dashboard

Pull from GHL Email Reports daily during the active window. Track these six numbers per email.

| Email | Sent | Delivered | Open rate | Click rate | Click-to-open | Conversions | Notes |
|---|---|---|---|---|---|---|---|
| 01-save-the-date | | | | | | | |
| 02-the-why | | | | | | | |
| 03-meet-your-hosts | | | | | | | |
| 04-what-youll-experience | | | | | | | |
| 05-social-proof | | | | | | | |
| 06-arm-tease | | | | | | | |
| 07-48-hours | | | | | | | |
| 08-tomorrow | | | | | | | |
| 09-starting-soon | | | | | | | |
| 10-did-you-feel-that | | | | | | | |
| 11-recording-delivery | | | | | | | |
| 12-arm-deep-dive | | | | | | | |
| 13-final-call | | | | | | | |

**Conversion definition:** Per email, count "form submission attributable to that email" as the conversion. Use UTM `utm_content` matching to attribute.

**Benchmarks:**

- Open rate: 30%+ broadcast, 50%+ for nurture confirmation
- Click rate: 4%+ for early acquisition, 8%+ for late-funnel push
- Unsubscribe rate: under 0.3% per send (over 0.5% means revisit copy)

---

## Registration funnel tracker

Update this daily. The cells fill themselves if you connect the GHL form to a Google Sheet via Zapier or native integration.

| Date | LP visits | Form submits | Recording sales | Cumulative regs | Day-over-day delta |
|---|---|---|---|---|---|
| 1 May | | | | | |
| 2 May | | | | | |
| 3 May | | | | | |
| 4 May | | | | | |
| 5 May | | | | | |
| 6 May | | | | | |
| 7 May | | | | | |
| 8 May | | | | | |
| 9 May | | | | | |
| 10 May | | | | | |
| 11 May | | | | | |
| 12 May | | | | | |
| 13 May | | | | | |
| 14 May | | | | | |
| 15 May | | | | | |
| 16 May | | | | | |
| 17 May | | | | | |

**Trigger thresholds:**

- If cumulative regs at 10 May < 600, accelerate paid spend.
- If LP visits high but form submits low, audit the form (slow load, broken field, etc.).
- If recording sales < 10 by 14 May, send a dedicated recording-only email to non-registrants.

---

## ARM conversion tracker

Post-event. Update daily 17 May to 31 May.

| Date | Attended live | Recording purchased | ARM waitlist joins | Discovery calls booked | ARM enrolments | Revenue ($) |
|---|---|---|---|---|---|---|
| 17 May | | | | | | |
| 18 May | | | | | | |
| 19 May | | | | | | |
| 20 May | | | | | | |
| 21 May | | | | | | |
| 22 May | | | | | | |
| 23 May | | | | | | |
| 24 May | | | | | | |

**Targets at end of window:**

- 300+ on ARM waitlist
- 25+ discovery calls booked
- 30-40 ARM Online enrolments
- ~$10,000 revenue at $299 per enrolment

---

## Post-mortem template (run on 25 May)

Hold a 30-minute review. Answer the five questions below in writing and file in this folder as `post-mortem-2026-05.md`.

1. Which email had the highest click-to-conversion ratio? Why?
2. Which email had the worst? Why?
3. What was the single biggest unexpected friction point in the funnel?
4. What would we run again, unchanged, next time?
5. What would we cut next time?

Use the post-mortem to set the priors for the next event campaign. Each event should leave the playbook stronger, not just the bank balance.
