# NIMMAN — Learning modules and configurable assessments
Release: 25 September 2026

## Start here
Open `index.html` from a web server. Choose Continue as guest, then one of three courses.
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
- Spa Therapist: 280 words, 236 phrases; 5 day-based modules.
- Hair & Nail: 194 words, 135 phrases; 5 day-based modules.
All 900 original Spa/Cruise word/phrase entries remain mapped in their original path.
59 new words and 36 new phrases were authored as support, not extracted verbatim.

## Editing content
`content/curriculum.json` is the source of truth for the new curriculum view.
`entries` holds canonical IDs; `mappings` gives one primary module plus revision modules.
Shared entries are reused, not copied as repeated assessment targets.
Edit the JSON and run `python tools/sync_curriculum.py`, then
`node tests/validate_learning.cjs`. Update the guide/counts after substantial edits.
Original learning/practice banks remain in the original files. Their archival
`content/content.json` is not the full new curriculum map.

## Progress and deployment
Existing per-account, per-course JSON storage is reused; no SQL schema change is required
for the new string course ID. Back up production files and the database before deploying.
Retain any private backend configuration already installed. Do not reinitialise a live
user database. Deploy to staging and check registration, login, per-course saving and reload.

New self-study progress, assessment preferences, per-entry review state and the latest
50 compact attempt summaries are stored separately from legacy best-score records.
Detailed answers are available in the current results view and JSON export. Guests keep
only in-memory progress for the current session. Guest progress is not migrated to a new
account by this release.

An unsuccessful initial server-progress load blocks replacement writes to protect
existing data. Account errors are shown. Restore the connection and reopen the course;
temporary changes made while initial loading failed are not merged automatically.
The change is not a full offline synchronisation or concurrent multi-device merge system.

## Tests and limits
`node tests/validate_learning.cjs` — mapping, original coverage, count, uniqueness,
compatibility, manual selection, review filters and answer-normalisation checks.
`python tests/learning_browser_test.py` — Chromium integration with actual JS/CSS;
in-memory localStorage, mocked audio and mocked transport failure/success scenarios.
Repetitive answer interactions use DOM click events; form inputs use browser controls.
See `tests/learning-validation-report.json` and `tests/learning-browser-report.json`.

Direct HTTP/file navigation was blocked in the authoring environment. Live PHP/MySQL
persistence, production hosting, audible playback quality, microphone scoring,
Safari/iOS and independent linguistic/clinical/psychometric validation were not verified.
Historical test artifacts in the original upload are not proof of this release's status.

Previously identified source-content issues have not all been independently revalidated.
This release focuses on curriculum organisation and custom word/phrase practice.
