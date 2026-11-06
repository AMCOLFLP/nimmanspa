# NIMMANSPA — 30-day learning programme
Release: 6 November 2026. Local implementation; not deployed.

## Access and learning plan

Registration creates an account without starting an access period. Choosing
**Start my 30 days** starts that course once, for exactly 30 consecutive 24-hour
days. Each of `spa`, `cruise`, and `salon` has a separate period. Signing out,
switching devices, repeating Start or resetting progress does not renew it.
The server supplies the dates; the learner sees the deadline and days remaining.
After expiry the app locks lessons/practice for that account and retains its
saved progress.

Each course now contains **30 individually authored daily lessons**: 90 lessons
across Spa, Cruise, and Hair & Nail. Four seven-day weeks end in checkpoints on
days 7, 14, 21 and 28; day 29 reviews combined skills and day 30 is a practical
capstone. All source chapter IDs are retained and every chapter has daily lessons.
Day numbers describe the sequence, not calendar locks or a reset of access dates.
The suggested 25–35 minute session has five parts: recall, two explained language
points with examples, a spoken model, the learner's own response and self-checks,
then two knowledge checks with explanations and retries. English models remain
visible when Thai support is selected. Speaking and writing criteria are learner
self-checks; they are not automatic language assessment or certification.

A day can be completed after the teaching/model checkbox, a response of at least
10 characters, all three self-checks, and two correct answers. Editing work reopens
the day. Daily drafts, checks and completion persist in `learningDays` inside the
existing per-course progress JSON. Completion updates the corresponding chapter
after all its daily lessons are finished. Older chapter/reference marks remain
available but do not skip the new daily sequence. Home and sidebar track days / 30.
The lesson reference library initially shows 12 entries, with search and more
entries on demand. Source notes and formal assessment details remain available
in disclosures.

The signed-out screen, course chooser, learning plan and access states use a
refreshed responsive design. Guest access opens all courses and practice
activities without a timer. Guest progress is kept in memory for the current
visit, separately for each course, and clears on refresh or sign-out. Registered
learners keep their own saved progress and 30-day course periods.

**Before deployment:** run `backend/migrations/20261105_course_access.sql`
against the existing database. It adds the access table without changing users
or progress; existing learners start their period when they next start a course.
Deploy all updated frontend/backend files together. See `backend/README.md`.
The server protects account progress and access dates. Static lesson JS and
standalone reference HTML remain publicly downloadable; this release does not
provide a private content delivery system.

## Start here
Open `index.html` from a web server. Choose Continue as guest, then a course.
For accounts, retain/configure the existing PHP/MySQL backend as documented in
`backend/README.md`. The standalone HTML preview is guest-only and has no account server.

Read `LEARNING_GUIDE.html` for the source mapping, source conflicts, complete searchable
word/phrase allocations, implementation decisions and testing limits.

## New frontend
- `Learning` tab: source-aligned modules, short lessons, model exchanges, word/phrase
  cards, English/Thai support, self-study checkmarks, and a direct practice link.
- `Assess` tab: module/category/content filters, manual target selection, missed items,
  exact count presets and custom counts, seven assessment formats, practice/end feedback,
  category results, retries, and result export.
- New Hair & Nail course (`salon`), including newly authored specialist learning support.
- Original Spa (`spa`) and Cruise (`cruise`) IDs and original content IDs retained.
- Existing 20-card activity libraries remain separate, expandable libraries for Spa/Cruise.
  They do not inherit the new builder's module/category/target selections.

## Content and source decisions
The four user-provided outlines are the basis for course themes and organisation.
Module-to-item allocations and newly written lessons/examples are editorial support,
not newly approved curriculum rules. Conflicting course durations are flagged rather
than resolved without authority. Foundation Module 8 retains its source numbering;
no Module 7 has been invented. Safety language is an explicitly labelled supplement.
Teacher-led CV, speaking, role-play and interview assessment remains separate.
No practice result is an official course grade, CEFR determination or Marlins score.

Unique targets per course (shared entries may appear in multiple courses):
- Cruise Ship Employment: 273 words, 200 phrases; 8 source-structure sections + 1 supplement.
- Spa Therapist: 321 words, 257 phrases; 5 chapters.
- Hair & Nail: 194 words, 135 phrases; 5 day-based modules.
All 900 original Spa/Cruise word/phrase entries remain mapped in their original path.
Additional specialist entries were authored as support, not extracted verbatim.

## Editing content
`content/curriculum.json` is the source of truth for the new curriculum view.
`entries` holds canonical IDs; `mappings` gives one primary module plus revision modules.
Shared entries are reused, not copied as repeated assessment targets.
Edit the JSON and run `python tools/sync_curriculum.py`, then
`node tests/validate_learning.cjs`. Update the guide/counts after substantial edits.
Daily teaching is authored separately in `content/program-spa.json`,
`content/program-cruise.json` and `content/program-salon.json`. Run
`python tools/sync_daily_program.py` to validate their bilingual structure and
rebuild `js/daily-program-data.js`, then `node tests/validate_study_plan.cjs`.
Deploy the generated bundle, `js/daily-learning.js`, and `daily-learning.css`
alongside the updated frontend. No new database migration is needed for daily work.
Original learning/practice banks remain in the original files. Their archival
`content/content.json` is not the full new curriculum map.

## Progress and deployment
Existing per-account, per-course JSON storage is reused. The access table migration
above is required. Back up production files and the database before deploying.
Retain any private backend configuration already installed. Do not reinitialise a live
user database. Deploy to staging and check registration, login, per-course saving and reload.

New self-study progress, assessment preferences, per-entry review state and the latest
50 compact attempt summaries are stored separately from legacy best-score records.
Detailed answers are available in the current results view and JSON export.
Guest progress is temporary, does not transfer to an account, and does not
appear in the administrator dashboard.

An unsuccessful initial server-progress load blocks replacement writes to protect
existing data. Account errors are shown. Restore the connection and reopen the course;
temporary changes made while initial loading failed are not merged automatically.
The change is not a full offline synchronisation or concurrent multi-device merge system.

## Tests and limits
`node tests/course-access.test.js` — access dates, expiry, route restrictions,
account changes and saving behavior with mocked transport/time.
`node tests/validate_study_plan.cjs` — all 90 bilingual daily lessons, chapter
coverage, completion requirements, retries, resume, course isolation, API draft
saving, escaped learner text and rendering every day in English and Thai.
`php backend/tests/course_access_test.php` — timestamp boundaries.
`python backend/tests/access_integration_test.py` — isolated PHP/MySQL API checks
(Windows harness; starts and removes its own disposable database instance).

On this release, automated content, activity, curriculum, study-plan and access
checks passed. The browser access host was unavailable, so the refreshed layout
has not been visually verified in a live browser. The older browser reports
below describe earlier releases. They do not verify the current guest workflow.

`node tests/validate_learning.cjs` — mapping, original coverage, count, uniqueness,
compatibility, manual selection, review filters and answer-normalisation checks.
`python tests/learning_browser_test.py` — Chromium integration with actual JS/CSS;
in-memory localStorage, mocked audio and mocked transport failure/success scenarios.
Repetitive answer interactions use DOM click events; form inputs use browser controls.
See `tests/learning-validation-report.json` and `tests/learning-browser-report.json`.

Live PHP/MySQL account and expiry paths were tested against isolated local instances.
Production hosting, audible playback quality, microphone scoring, Safari/iOS,
and independent linguistic/clinical/psychometric validation were not verified.
Historical test artifacts in the original upload are not proof of this release's status.

Previously identified source-content issues have not all been independently revalidated.
This release focuses on curriculum organisation and custom word/phrase practice.
