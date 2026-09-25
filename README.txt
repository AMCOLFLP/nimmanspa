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
1. Extract the ZIP. Keep index.html, styles.css, js, assets and backend together.
2. Guest mode only, quick preview: open index.html directly in a browser, or
   serve it with:
   python -m http.server 8000 --bind 127.0.0.1
   Then visit http://localhost:8000 and choose Continue as guest.
   Account sign-in/registration needs the PHP backend (step 3) and will not
   work from a plain file:// preview or a plain static file server.
3. For accounts (sign-in/registration and server-saved progress), you need a
   host that runs PHP 8+ with a MySQL/MariaDB database. See backend/README.md
   to create the database, import backend/schema.sql and configure
   backend/config.php, then serve the whole folder (front end + backend/)
   from that PHP host. GitHub Pages cannot run PHP, so it can only host the
   guest-mode experience, not accounts.
4. Choose Continue as guest (or sign in/register, once the backend is set up),
   choose a course, and open Practice.
5. For deployment, back up the old app and upload the complete folder contents
   — including backend/ with your own backend/config.php — to your PHP host.
   Use the host's secure HTTPS configuration and set 'secure_cookies' => true
   in backend/config.php once HTTPS is live. Do not upload only one JS file:
   the app depends on the updated HTML, CSS, scripts and backend together.

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
Accounts and their progress are now stored server-side in a MySQL/MariaDB
database via a PHP backend (see backend/README.md), course-specific per
account. Passwords are hashed (never stored in plain text); the PHP session
cookie, not anything the browser sends, is what the server trusts. Progress
now follows the account across devices, since it lives on the server rather
than in one browser's storage.
Guests are unchanged: session-only, browser-local, never sent to the server.
Signing out (or the app's automatic sign-out on load, for shared devices)
ends the session; progress is safe on the server until signed back in.

The backend requires PHP 8+ with a MySQL/MariaDB database — it will not run
on GitHub Pages or another static-only host. See backend/README.md for setup.
There is still no email verification or password-reset flow; "Forgot
password" remains a placeholder note, as in the previous localStorage-only
demo.
Browser speech recognition may involve the browser provider's remote service.
No audio recording storage is added by this release.

GETTING AROUND
Five tabs along the bottom, for the five things a learner does repeatedly:
  Home      today's card, streak, phrase of the day, continue your path
  Learn     the module path for this course
  Words     vocabulary drills, plus Body map and Pronunciation
  Phrases   phrase banks, plus Say this, not that
  Practice  build an assessment, and the original activity library

Daily Five no longer has its own tab. It is a card on Home, which is where
a once-a-day habit belongs, and Home stays highlighted while you are in it.

The side panel (button at the top left, or docked from 1024px) is the full
index, grouped Learn / Words & phrases / Practice / Account. Everything in
the app is listed there exactly once. Nothing is reachable only from the
panel: every entry in it can also be reached from the bottom bar, through
the tab that owns it.
  Daily Five           Home, the card at the top
  Body map             Words, link below the filters
  Pronunciation        Words, link below the filters
  Say this, not that   Phrases, link below the filters
  Your account         the avatar, top right
  Settings             Your account
Home's list below the stats shows the same extras, so there are two routes
to each of them and none depends on finding the panel.

Entries appear only where the course has that content: the cruise course has
no Body map, and the salon course has neither Body map, Pronunciation nor
Say this, not that.

BODY MAP — WHERE TO FIND IT
Home > Body map, the side panel, or the Body map chip in the Vocab screen's
row of drills. It does not have its own tab in the bottom bar: it is another
route into the same vocabulary, so it lives under Vocab (that tab stays
highlighted while the map is open), and a seventh tab would leave about 55px
per tab on a phone.
On phones the selected word, its Thai and a play button stay pinned above the
bottom bar while you use the map, because the full-body photo is taller than
a phone screen and the word panel would otherwise sit below the fold.
"Word details" opens the full entry.
"Match pairs" under the word list starts an assessment built from this
course's body vocabulary, so the parts you have just learned can be practised
without rebuilding the filter by hand. Body parts is also selectable as a
category in the assessment builder.

BODY MAP (SPA)
Home > Body map opens an interactive diagram with front, back and face views.
Tapping a region shows that part's English name, IPA, Thai, an example
sentence you can say to a guest, and a play button. Regions are drawn from the
course's own Body parts vocabulary, so nothing is duplicated: the spa course
has 53 such words. Body words with no place on a diagram (tendon, joint,
pressure point, muscle knot and similar) appear as chips below it.
The diagram is a simplified service illustration for naming areas in English.
It is not a clinical or anatomical reference and does not indicate what any
treatment should do. It appears only for courses that teach enough body
vocabulary to fill it, so the cruise and salon courses do not show it.

SIDE PANEL, TABLET AND PHONE LAYOUT
A side panel carries the learner's profile, course, progress bars and a full
navigation list. Below 1024px it is a drawer: closed by default, opened with
the button at the top left, and dismissed by tapping the dimmed background,
pressing Escape, or choosing a destination. The bottom tab bar stays in place
as the main navigation on phones and small tablets.
From 1024px up the panel docks beside the content and the tab bar is hidden,
because the panel already lists every destination. Hiding the panel brings
the tab bar straight back, so there is never a state with no navigation, and
the choice is remembered on that device.

MICROPHONE AND THE SPEAKING TEST
The speaking test needs an https:// address on phones. Browsers only allow
the microphone in a secure context: https, or localhost on a computer. A LAN
address such as http://192.168.0.10:8000 counts as insecure, so the test
works on the development machine and the microphone is silently blocked on
the handset. The app now detects this and says so on the speaking screen
instead of offering a microphone that cannot work.
Scoring also needs a browser that exposes speech recognition. On iPhone and
iPad that is Safari only — Chrome, Firefox and Edge there cannot reach the
recogniser. On Android, use Chrome. Android's recogniser needs an internet
connection.
Where scoring is unavailable, or the learner declines the microphone
permission, the test falls back to self-check: record, compare with the
model voice, and self-rate. Those results are labelled as self-rated, never
presented as measured accuracy.

TESTING
See tests/README.md, activity-validation-report.json and
activity-browser-test-report.json. Structural checks cover counts, options,
answer keys, IDs, levels, links and matching runtime/export data. Chromium UI
checks use the actual app in an in-memory HTML/localStorage harness because
local HTTP navigation is blocked in the authoring environment. TTS is stubbed
for those checks. Screenshots omit remote fonts and reflect local fallbacks.
Live deployment, real-origin persistence, Safari/iOS, actual audio playback and
live microphone recognition have NOT been verified. A formal accessibility
or psychometric assessment has not been performed. The Chromium checks run in
guest mode only; the PHP/MySQL backend (accounts and server-saved progress)
has no automated test coverage yet — see tests/README.md.

WORKPLACE REVIEW
Examples are language practice, not medical advice, treatment protocols,
emergency training or a replacement for approved workplace procedures. Confirm
actual prices, times, locations, permissions and compensation arrangements.
Independent Thai-language and workplace-specialist review is recommended before
formal rollout. Incorrect answer choices are deliberately unsuitable examples.
