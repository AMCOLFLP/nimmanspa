NIMMAN ENGLISH — EXPANDED QUIZZES & ACTIVITIES
22 September 2026

A complete updated copy of the uploaded app. The existing branding, two-course
structure, 500 vocabulary entries and 400 phrases are retained.
This package has NOT been deployed to the live website.

CURRENT PRACTICE BANKS
Activity                            Spa       Cruise      Combined
Workplace multiple-choice quiz      100       100         200
True / false                         50        50         100
Correct the sentence                 50        50         100
Hear the word                        80        80         160
Build a sentence                     80        80         160
Guided dialogues                     30        30          60
Workplace scenarios                  30        30          60
Reading passages                     10        10          20
  Questions across those passages    30        30          60
Listen & respond                     20        20          40
Order the conversation               10        10          20
Word in context                      30        30          60

There are 90 spa and 87 cruise dialogue blanks. Including those blanks, there
are 1,137 authored scored prompts. This is NOT a count of unique words or wholly
distinct situations: modes deliberately reuse language and some conversations.
Dynamic definition quizzes additionally draw from 250 vocabulary entries per
course. Existing vocabulary drills and speaking activities are retained.

Core content: spa 250 words / 220 phrases; cruise 250 words / 180 phrases.
Pronunciation guides: 40 per course. All 900 core vocabulary/phrase entries from
the previous content-expanded release remain.

HOW TO OPEN
1. Extract the ZIP. Keep index.html, styles.css, js and assets together.
2. For a simple desktop preview, open index.html in a browser.
3. For a local server, open a terminal in this folder and run:
   python -m http.server 8000 --bind 127.0.0.1
   Then visit http://localhost:8000 in your browser.
4. Choose Continue as guest, choose a course, and open Practice.
5. For deployment, back up the old app and upload the complete folder contents
   to your static host. Use the host's secure HTTPS configuration. Do not upload
   only one JS file: the new player depends on the updated HTML, CSS and scripts.

HOW TO USE THE NEW PRACTICE
Choose 5, 10, 15 or 20 items and Starter / Everyday / Extended / All levels.
These are editorial difficulty labels, not CEFR certification.
Settings affect the quiz and applied-activity cards, not all vocabulary drills.
Unseen items come first; previously attempted items are ordered by recency.
Reading keeps each passage's three questions together, so length settings
5 / 10 / 15 / 20 yield up to 3 / 9 / 15 / 18 reading questions.
Dialogue length follows its own number of blanks. Small filtered banks may
return fewer items than the selected session length.

New activities:
- Read a workplace message: find purpose, details and a next action.
- Listen & respond: hear a guest/colleague and choose a relevant reply.
- Order the conversation: keep the opening fixed; arrange the next three turns.
- Word in context: type a word using a meaning clue, initial letter and length.

Words/turns are clickable buttons: select, undo by tapping the placed item, or
Clear. Typed marking ignores case and surrounding punctuation and accepts
listed variants only. It does not guess misspellings or assess open-ended writing.

Feedback gives a model and an explanation. Newly authored items include Thai
support; some inherited explanations remain English-only.
The end screen retains first responses and offers Retry missed items or a new
set. Review my mistakes combines missed questions in the CURRENT course across
levels. Retrying does not overwrite the original activity score.

Listening transcripts are hidden until requested or the answer is submitted.
Opening the transcript, known playback failure, or answering without pressing
Play records supported practice with a separate score key. This is not evidence
that playback succeeded or that the learner heard the audio. A correct supported
answer does not clear an earlier mistake from the review list.
Audio is browser text-to-speech, not human recordings.

TEACHER RESOURCES & CONTENT FILES
QUIZ_ACTIVITY_GUIDE.html — searchable guide and answer bank for all 1,137 authored
scored prompts. Contains answers; intended for teacher preparation, not a secure
exam. Keep this optional file private when independent learner testing matters.
CONTENT_LIBRARY.html — previous standalone catalogue of 900 core words/phrases.
content/content.json — complete structured export for content review.
CHANGELOG.md — current changes and clearly labelled previous-release history.
SOURCES.md — editorial reference notes and review boundaries.

RUNTIME DATA / EDITING
The app loads js/data.js, js/activities.js, js/data-cruise.js, then
js/practice-data.js before js/courses.js. practice-data.js applies the expanded
assessment banks to existing arrays in place. It is authoritative for those
banks. js/practice-lab.js supplies the new player and hub controls.
Changing content/content.json alone does NOT change the running application.
Keep the runtime overlay and JSON review copy in sync when editing.
Old word keys, course IDs and existing question IDs have been retained.

PROGRESS, PRIVACY AND ACCOUNTS
Demo-account progress remains browser-local and course-specific. It does not
synchronise between devices. Guests have session-only progress. Changing host,
browser/profile or clearing site data can make existing progress unavailable.
New fields are added without replacing existing known words, scores or streaks.

The inherited sign-in is a demonstration, NOT production-grade authentication;
it stores demo credentials in localStorage. Do not use real or reused passwords.
No account backend, secure authentication or cross-device sync has been added.
Browser speech recognition may involve the browser provider's remote service.
No audio recording storage is added by this release.

TESTING
See tests/README.md, activity-validation-report.json and
activity-browser-test-report.json. Structural checks cover counts, options,
answer keys, IDs, levels, links and matching runtime/export data. Chromium UI
checks use the actual app in an in-memory HTML/localStorage harness because
local HTTP navigation is blocked in the authoring environment. TTS is stubbed
for those checks. Screenshots omit remote fonts and reflect local fallbacks.
Live deployment, real-origin persistence, Safari/iOS, actual audio playback and
live microphone recognition have NOT been verified. A formal accessibility
or psychometric assessment has not been performed.

WORKPLACE REVIEW
Examples are language practice, not medical advice, treatment protocols,
emergency training or a replacement for approved workplace procedures. Confirm
actual prices, times, locations, permissions and compensation arrangements.
Independent Thai-language and workplace-specialist review is recommended before
formal rollout. Incorrect answer choices are deliberately unsuitable examples.
