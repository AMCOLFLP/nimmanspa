# Current release: accounts & progress move to a PHP/MySQL backend — 22 September 2026

Accounts and their progress no longer live only in the browser. Registering
or signing in now calls a PHP backend (`backend/api/`) which hashes passwords
with `password_hash`/`password_verify`, holds a server-side PHP session, and
stores each account's per-course progress as a JSON document in MySQL/MariaDB
(`backend/schema.sql`). Progress therefore now follows an account across
devices instead of staying pinned to one browser. Guest mode is unchanged:
still local, session-only, and never sent to the server.

Signing in, registering or continuing as guest now always leads to the
course chooser before anything else loads, instead of silently resuming the
last-studied course — the learner picks spa or cruise every time. Once a
course is picked, the client fetches that course's saved progress from the
server, and every subsequent change (known words, quiz scores, streaks,
Daily Five, practice history) is saved back to the server in the background.
If the server session expires while the app is open, the learner is
returned to sign-in with an explanation rather than having changes silently
fail to save.

Failed logins are throttled per email address. All SQL uses parameterised
PDO statements. See `backend/README.md` for setup, requirements (PHP 8+,
MySQL 5.7+/MariaDB 10.2+, one shared origin for the front end and backend —
this will not run on GitHub Pages) and the security notes for deployment.

The Chromium regression suite (`tests/activity_browser_test.py`) runs in
guest mode only and has no server to talk to, so the new backend code paths
are not covered by it yet — see `tests/README.md`.

---

# Previous release: quizzes and applied activities — 22 September 2026

## Compared with the previously delivered expanded-content app

| Bank | Before | Now | Added |
|---|---:|---:|---:|
| Main multiple-choice questions | 105 | 200 | 95 |
| True / false | 46 | 100 | 54 |
| Sentence correction | 30 | 100 | 70 |
| Word listening | 100 | 160 | 60 |
| Sentence building | 82 | 160 | 78 |
| Guided dialogues | 40 | 60 | 20 |

New banks: 60 curated workplace scenarios; 20 reading passages with 60 questions;
40 listen-and-respond items; 20 conversation-order tasks; 60 typed context tasks.
The old scenario activity generated items from say-this/not-that pairs. The new
60-item scenario bank replaces that generator for the normal practice launcher;
those original phrase pairs remain available as reference material.

Each course now has 100 MC, 50 true/false, 50 correction, 80 listening targets,
80 sentence builders, 30 dialogues, 30 scenarios, 10 readings, 20 audio-response,
10 ordering and 30 context tasks. Core words and phrases remain 500 + 400.

## Content quality

Replaced ambiguous inherited gap questions with decisive meaning or grammar
clues. Corrected selected treatment/temperature assurances, arrival-time claims,
and ship-specific timing statements. Distinguish language examples from approved
procedures. New scenarios and passages use explicit context; Thai support is
provided in new feedback. Removed an inherited duplicate sentence-builder prompt
while preserving its ID. The two courses retain their own practical service focus.

## Learner experience

Added a shared player with 5/10/15/20-item session settings, editorial difficulty
filters, unseen-first sampling, English/Thai UI, accessible button interaction,
first-response feedback, answer review and missed-only retries. Reading keeps
complete question groups. Dialogues reveal scored turns in sequence. Built-in
builder alternatives and typed spelling variants are checked deterministically.

Browser-TTS requests have optional transcript support and a fallback. Supported
listening scores are stored separately; a supported correct answer does not erase
an earlier mistake. No claim of real audio playback verification is made.

## Compatibility and fixes

Existing arrays are expanded in place before course registration; old word and
question IDs remain. Added per-course practice histories and settings without
replacing previous progress fields. Fixed guest progress reset and Daily Five's
ISO due-date comparison. Kept the legacy Daily Five MC launcher functioning.
Cleared stale review panels when unrelated activities show results.

## Delivery and test scope

Includes the full static app, teacher guide/answer bank, JSON content export,
structural checks, a Chromium in-memory regression suite and screenshots.
See the current reports, rather than historical reports, for tested scope.
No live deployment, secure authentication, audio recording, cross-device sync,
Safari/iOS verification or independent language/operational validation is claimed.

---

# Previous release: core content expansion — 22 September 2026

## Before and after

| Content | Original | Updated | Added |
|---|---:|---:|---:|
| Spa vocabulary | 137 | 250 | 113 |
| Cruise vocabulary | 98 | 250 | 152 |
| Spa phrases | 121 | 220 | 99 |
| Cruise phrases | 80 | 180 | 100 |
| **Core entries** | **436** | **900** | **464** |
| Guided dialogues | 5 | 40 | 35 |
| Pronunciation guides | 29 | 80 | 51 |
| Multiple-choice questions | 65 | 105 | 40 |
| Listening targets | 40 | 100 | 60 |
| Sentence-building items | 42 | 82 | 40 |

The existing 46 true/false items, 30 error-correction items and 34 say-this/not-that pairs remain, with selected corrections. Practice totals are not additional unique vocabulary counts.

## Content improvements

All 500 vocabulary entries now have an English workplace example, a Thai example translation and a common word combination. The 199 new phrases include a guest or colleague prompt with Thai support, a staff response and bilingual usage guidance. The new dialogues practise connected exchanges rather than isolated definitions.

Spa additions prioritise body parts, comfort, pressure, temperature, treatment-room items, permission, stopping or pausing, appointments, payments and communication repair. Cruise additions prioritise cabin supplies, housekeeping, maintenance, dining, ingredient checks, directions, port arrangements, accounts, assistance and handovers.

Easy-labelled phrase coverage increased from 34 of 201 to 170 of 400. These are editorial learning levels, not a formal CEFR validation. More complex service and technical language is retained.

Selected existing wording was corrected for allergy claims, detox marketing, medical referral, treatment-specific advice, ship-specific safety arrangements and manager-authorised remedies. Pronunciation stress was corrected for acupressure, reflexology and petrissage. See SOURCES.md.

## Learning experience

Context panels were added below vocabulary flashcards. Phrase entries now include expandable exchange practice and links to relevant dialogues. Search includes workplace examples and Thai usage support. Beginner entries are shown first. Dialogue turns are revealed in sequence instead of exposing future responses.

Multiple-choice options now shuffle per attempt without changing the correct answer. Daily Five records each response instead of marking all five words as known on completion. Missed words return for review; successful reviews use an editorial 1/3/7/14-day interval sequence. This is not a claim of validated mastery scheduling.

Multiword and hyphenated terms are included in word-speaking practice. Phrase of the Day uses guest-facing metadata rather than a course-specific category exclusion. Browser-local account and speech-provider notices were clarified. Pinch-zoom is no longer prohibited by the viewport tag.

## Compatibility and limits

No existing vocabulary word key or course ID was changed. The application is still a client-side demo with local progress. No secure account backend, cross-device sync, human-recorded audio or live deployment was added.

The release includes automated content checks and a Chromium in-memory test report. Independent editorial/workplace review, live microphone checks, Safari/iOS testing and real-origin persistence testing remain outside the verified scope.
