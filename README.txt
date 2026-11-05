NIMMANSPA — YOUR MONTH OF ENGLISH
5 November 2026 · local implementation, not deployed

ADMIN DASHBOARD
Real administrators sign in through the normal login page. The dashboard
reads student accounts and progress from the server across devices, with
search, course/access/account filters, chapter status and practice results.
Admins can create/edit student accounts, suspend sign-in, and issue a
temporary password. Students must replace temporary passwords before learning.
Password resets revoke old sessions and preserve course dates and progress.

Apply backend/migrations/20261105_admin_dashboard.sql before deployment.
Register the intended admin account, then run on the PHP host:
  php backend/tools/promote-admin.php your-email@example.com
Sign in again. There is no shared/default admin password. The former local
teacher demo has been removed. See TEACHER_SETUP.md for complete instructions.

WHAT CHANGED
A learner registers without starting any access period. Choosing “Start my
30 days” opens 30 consecutive 24-hour days for that course. Each course has
its own start and expiry. Signing out, changing devices, resetting progress
or clicking Start again never renews an existing period.

The app shows the deadline and remaining days. At expiry, lessons and
practice lock, while saved progress stays in the database. Account settings
and course selection remain available. There is no automatic renewal or
payment flow.

Guest access keeps every course and practice activity open without a timer.
Guest progress is held in memory for the current visit, separately by course,
and clears on refresh or sign-out. It does not transfer to a registered account
or appear in the admin dashboard. Registered accounts keep saved progress and
the 30-day access period for each course they start.

A FOUR-WEEK STUDY PLAN
Each course follows four suggested weeks, then days 29–30 for review.
All chapters remain available during the access period; weeks guide pacing.
The daily suggestion is 15–20 minutes: read, practise aloud, then apply.
This is a self-study schedule, not a replacement for the source course’s
teaching hours or teacher-assessed tasks.

  Spa Therapist at Sea
    Week 1: Introduce your professional self
    Week 2: Build your spa service language
    Week 3: Handle guest and interview situations
    Week 4: Put your interview together

  Working at Sea
    Week 1: Start with everyday English
    Week 2: Find your way through work
    Week 3: Support guests with confidence
    Week 4: Prepare for your crew role

  Hair & Nails at Sea
    Week 1: Introduce your salon experience
    Week 2: Explain hair and nail services
    Week 3: Practise guest conversations
    Week 4: Rehearse your salon interview

The Learn screen opens with the next lesson, weekly outcomes and studied
chapters. Source notes and formal assessment details are available below.
Lessons start with a manageable reference list; search and Show 12 more
expose additional words and phrases without a long initial page.

THE COURSE LIBRARIES
Current canonical targets (shared entries may occur across courses):
  Spa:    321 words, 257 phrases, 5 chapters
  Cruise: 273 words, 200 phrases, 9 sections including safety supplement
  Salon:  194 words, 135 phrases, 5 chapters
Original content IDs and saved course IDs (spa, cruise, salon) are retained.
The earlier spa/cruise activity banks and custom practice builder remain.
Self-study checkmarks and practice scores are not official grades.

GETTING AROUND
Learn: your month plan, chapters and the spa interview rehearsal.
Daily: five words and a knowledge check, plus revision shortcuts.
Words: vocabulary, pronunciation and the spa body map where available.
Phrases: practical English with Thai support.
Practice: ready-made activities or a custom set; salon uses the builder.
Account: access deadline, language, progress and course switching.
The sidebar provides the same destinations on larger screens.

LOCAL PREVIEW AND ACCOUNT SETUP
A static preview can be opened with:
  python -m http.server 8000 --bind 127.0.0.1
Visit http://localhost:8000 and choose Continue as guest.
Account registration, login, access dates and saved progress require PHP 8+
with MySQL/MariaDB; a static server or GitHub Pages cannot provide them.
See backend/README.md for database and private configuration setup.

EXISTING INSTALLATION — REQUIRED MIGRATION
Before deploying, back up the database and apply:
  backend/migrations/20261105_course_access.sql
This adds course_access without changing existing user/progress records.
Existing learners start their period on their next explicit course start.
Deploy the updated HTML, CSS, JS and backend together. Preserve the private
backend/config.php and use the host’s HTTPS configuration.

The server protects account progress and access dates. Course content is
still shipped as public static JS and reference HTML, so the learning lock
is not private content delivery. Static preview hosts cannot enforce account
access or provide the admin dashboard. Admin account management does not
renew course access periods.

CONTENT MAINTENANCE
js/study-plan.js: suggested weeks and bilingual outcomes.
content/curriculum.json: canonical curriculum and mappings.
Run python tools/sync_curriculum.py after changing that JSON.
js/practice-data.js: authoritative overlay for original activity banks.
content/content.json: review export of the older core/activity banks;
changing it alone does not update the runtime app.
SOURCES.md and LEARNING_GUIDE.html: source provenance and review boundaries.
The standalone guides are reference resources, not the new month plan.

VERIFICATION
See tests/README.md and backend/README.md for commands. Automated content,
activity, curriculum, study-plan, frontend lifecycle and PHP/MySQL access
checks pass. Tests cover immutable dates, exact expiry, repeated starts,
user/course isolation, migration safety and retained progress.
The browser access host was unavailable in this session; the refreshed UI
has not been visually verified in a live browser. Historical screenshots
and guest-mode browser reports do not verify this release.

Browser audio uses text-to-speech. Actual playback, microphone recognition,
Safari/iOS behavior and independent Thai/workplace review remain separate
checks. Examples teach language, not treatment protocols or emergency
procedures. Use approved workplace instructions and real experience.
