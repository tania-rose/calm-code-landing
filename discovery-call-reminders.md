# Discovery Call Reminder Sequence — Alchemy of Breath

A warm, human reminder sequence for AoB discovery calls. Designed to be pasted into
GoHighLevel workflows. Every dynamic value uses a GHL custom value token so the
sequence is reusable across calls, calendars and coaches.

## Brand voice (keep this in mind when editing)

- Warm, human, breath-led. Spoken, not corporate.
- Short sentences. Real pauses. Trust the reader.
- No em dashes. Use commas, full stops or line breaks instead.
- Invite, never pressure. The call is a meeting, not a sale.
- Use the prospect's first name once, naturally. Not in every line.
- Lean on AoB phrases: *feel the work first*, *breathe the world*, *the body knows*.

## GHL custom value tokens used

Swap these to match the exact merge fields in your GHL sub-account if they differ.

| Token | Meaning |
|---|---|
| `{{contact.first_name}}` | Prospect first name |
| `{{appointment.start_date}}` | Date of the discovery call |
| `{{appointment.start_time}}` | Time of the discovery call (in contact timezone) |
| `{{appointment.timezone}}` | Contact timezone label |
| `{{appointment.meeting_location}}` | Zoom or call link |
| `{{user.first_name}}` | The AoB guide hosting the call |
| `{{user.email}}` | Reply-to email for the host |
| `{{custom_values.breathe_the_world_url}}` | https://alchemyofbreath.com/free-breathwork-sessions/ |
| `{{custom_values.fundamentals_url}}` | https://alchemyofbreath.com/breathwork-fundamentals/ |
| `{{custom_values.reschedule_url}}` | Calendar reschedule link |

Set the two AoB URLs as account-level custom values in GHL so they stay consistent
across every workflow and can be updated in one place.

---

## Sequence overview

| # | When | Channel | Purpose |
|---|---|---|---|
| 1 | Immediately on booking | Email | Confirm. Invite to feel the work before the call. |
| 2 | T minus 48 hours | Email | Soft nudge. Offer the Fundamentals course as homework. |
| 3 | T minus 24 hours | SMS | One line, one link. Confirm they are coming. |
| 4 | T minus 2 hours | Email | Practical details. What to bring. A breath to arrive with. |
| 5 | T minus 15 minutes | SMS | Link in pocket. We are ready when you are. |
| 6 | T plus 30 minutes (no show) | Email | Kind reopen. Easy reschedule. No guilt. |

---

## 1. Booking confirmation email

**Send:** Immediately on appointment booked
**Subject:** You are booked, {{contact.first_name}}. Here is a breath while you wait.
**Preview text:** A small invitation before we meet on {{appointment.start_date}}.

```
Hi {{contact.first_name}},

You are booked in for a discovery call on
{{appointment.start_date}} at {{appointment.start_time}} ({{appointment.timezone}}).

I will meet you here: {{appointment.meeting_location}}

Before we talk, a gentle invitation.

Most people decide about breathwork with their head.
The body has a better answer, and it is faster than thinking.

So between now and our call, feel the work for yourself.

Two ways to do that, both free, no sign up gymnastics:

1. Join a live Breathe the World session.
   We sit together with around 300 breathers every week.
   One hour. Cameras optional. You leave lighter.
   {{custom_values.breathe_the_world_url}}

2. Or move at your own pace with our free
   Breathwork Fundamentals course.
   Short videos. Real practices. Yours to keep.
   {{custom_values.fundamentals_url}}

You do not need to do either before we talk.
But if you do, our conversation will be the easy bit.

See you on {{appointment.start_date}}.

With breath,
{{user.first_name}}
Alchemy of Breath

Need to move the time? {{custom_values.reschedule_url}}
```

---

## 2. T minus 48 hours email

**Send:** 48 hours before appointment start
**Subject:** A small thing to try before we meet, {{contact.first_name}}
**Preview text:** Feel the work first. Decide after.

```
Hi {{contact.first_name}},

Two sleeps until our call on {{appointment.start_date}}.

If you have twenty quiet minutes this week,
the most useful thing you can do is breathe.

Not because you need to prepare.
Because the body knows things the brain is still arguing about.

Pick whichever is easier:

Live with us, Breathe the World, free every week.
{{custom_values.breathe_the_world_url}}

Or in your own time, Breathwork Fundamentals, also free.
{{custom_values.fundamentals_url}}

When we speak, you will already know
whether this work belongs in your life.
That makes the call honest, on both sides.

Talk soon,
{{user.first_name}}

Time no longer works? {{custom_values.reschedule_url}}
```

---

## 3. T minus 24 hours SMS

**Send:** 24 hours before appointment start
**Channel:** SMS
**Char count:** Under 320 (two SMS segments)

```
Hi {{contact.first_name}}, this is {{user.first_name}} from Alchemy of Breath.
We meet tomorrow at {{appointment.start_time}} ({{appointment.timezone}}).

Link: {{appointment.meeting_location}}

If you would like to feel the work first, our weekly Breathe the World is free:
{{custom_values.breathe_the_world_url}}

Reply here if anything changes.
```

---

## 4. T minus 2 hours email

**Send:** 2 hours before appointment start
**Subject:** A breath before we talk, {{contact.first_name}}
**Preview text:** What to bring, and one thing to try in the next five minutes.

```
Hi {{contact.first_name}},

We meet in about two hours,
{{appointment.start_time}} ({{appointment.timezone}}).

The link, in case you need it again:
{{appointment.meeting_location}}

What to bring:
A glass of water.
Somewhere you will not be interrupted for 30 minutes.
Headphones if you have them.

One breath to arrive with, before we meet:
In through the nose for four,
soft hold for two,
out through the mouth for six.
Three rounds is enough to change the room.

That is the whole work, in miniature.

If you want more of that on your own time,
Breathwork Fundamentals lives here, free:
{{custom_values.fundamentals_url}}

See you soon,
{{user.first_name}}

Need to reschedule at the last minute? {{custom_values.reschedule_url}}
```

---

## 5. T minus 15 minutes SMS

**Send:** 15 minutes before appointment start
**Channel:** SMS

```
{{contact.first_name}}, we start in 15 minutes.
Here is the room: {{appointment.meeting_location}}

Take three slow breaths before you click. I will see you there.
{{user.first_name}}
```

---

## 6. No show follow up email

**Send:** 30 minutes after appointment start, only if status is No Show
**Subject:** No worries, {{contact.first_name}}. Want to try again?
**Preview text:** Life happens. The door is open.

```
Hi {{contact.first_name}},

I did not see you on the call today, which is completely fine.
Life moves faster than calendars.

If you would still like to talk, pick a new time here:
{{custom_values.reschedule_url}}

If the timing is just not right, that is also a real answer.
You are welcome at Breathe the World any week,
no commitment, no call needed:
{{custom_values.breathe_the_world_url}}

And the free Breathwork Fundamentals course is yours whenever:
{{custom_values.fundamentals_url}}

Warmly,
{{user.first_name}}
Alchemy of Breath
```

---

## GHL workflow notes

- Trigger: **Appointment Booked** on the discovery call calendar.
- Add a **Wait** step before each message tied to `{{appointment.start_time}}`.
- Branch step 6 on **Appointment Status = No Show**. Exit the workflow on
  **Appointment Status = Showed** so post-call sequences take over.
- Add an **If/Else** at the top to skip SMS if the contact has no phone or has
  opted out, and fall back to email instead.
- Keep the two AoB URLs as account-level custom values
  (`breathe_the_world_url`, `fundamentals_url`) so a single update propagates
  across every workflow.
- Tag contacts who click either URL (`tag: aob-felt-the-work`) so the host can
  open the call already knowing they have practised.
