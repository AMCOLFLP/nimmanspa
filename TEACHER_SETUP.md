# Teacher account & class dashboard

## Signing in (local build)

| | |
|---|---|
| Email | `teacher@nimman.local` |
| Password | `nimman-teacher` |

Enter those on the normal sign-in form. The teacher goes straight to the class
dashboard; there is no course to choose, and the learner chrome (tabs, side
panel, course progress) is hidden.

## ⚠ This account is a development fixture, not security

The credentials above are written in `js/teacher.js`, which is served to every
browser that opens the app. **Anyone can read them and sign in as the teacher.**

That is acceptable today only because everything the teacher account unlocks is
also local to the browser: a class list and progress snapshots in `localStorage`.
It is not acceptable the moment real students' records are involved.

**Do not deploy this as the way teachers sign in.** What has to happen first is
listed under "Moving it to the server" below.

## What the dashboard shows

- **A KPI row** — students enrolled, how many studied this week, the average
  share of chapters marked studied, and the average daily streak.
- **A class table** — one row per student with a chapters meter (`3/5`), words
  learned, daily streak and when they last studied. Sort is by progress.
- **A student detail panel**, opened by tapping a row: activities done, practice
  average, whether today's Daily Five is finished, and the full chapter list
  with each one ticked or not.
- **Enrolment** — name, email and course adds a student to the class list.

"Studied" is the learner's own mark on a chapter, not a graded result. The
dashboard says so, and nothing here should be read as an assessment outcome.

## Where the data comes from

Two sources, and the difference matters:

1. **Sample students** — six seeded rows so the dashboard is reviewable on a
   fresh install. Every one is badged `SAMPLE` and they can all be removed in
   one tap. They are fabricated; they are not real learners.
2. **Real snapshots** — whenever a signed-in learner (not a guest) opens their
   Daily tab in *this browser*, their figures are written to
   `localStorage.nimman_student_progress_v1`, keyed by email and course. The
   dashboard matches those to the roster by email.

So a student enrolled here who has never studied **on this device** shows "No
study data on this device yet", not zeros. Guests are never recorded — they have
no email to attribute anything to.

This is the honest limit of a local build: one browser's worth of data. A class
spread across the students' own phones cannot be seen from here. That is what
the server version fixes.

### Storage keys

| Key | Holds |
|---|---|
| `nimman_roster_v1` | the class list |
| `nimman_student_progress_v1` | progress snapshots, keyed `email__course` |
| `nimman_roster_seeded_v1` | whether the samples have been seeded |

## Moving it to the server

The backend in `backend/` already has `users` (with a `role` column) and
`progress` (one JSON blob per user per course). To make this real:

1. **Give the teacher a real account.** Insert a user with `role = 'teacher'`
   and a `password_hash` from `password_hash()`, exactly like any learner.
   Delete `LOCAL_TEACHER` from `js/teacher.js` and the fixture branch in
   `app.js`'s login handler; the normal login path already returns the role, and
   `afterAuthSuccess` already routes a `teacher` role to the dashboard.
2. **Add enrolment tables.** A `classes` table and an `enrolments` table
   (`class_id`, `user_id`) — the roster then belongs to a class, not a browser.
3. **Add `backend/api/class.php`.** It must check `$_SESSION` role is `teacher`
   *on the server* before returning anything, and return only students enrolled
   in that teacher's own classes. A client-side role check is not a check.
4. **Read progress server-side.** The dashboard then reads the `progress` rows
   for those students instead of `localStorage` snapshots, so it works wherever
   the teacher signs in and whatever device the student studied on.
5. **Decide what a teacher may see.** Progress figures are personal data. Agree
   with the school what is shown, tell the learners, and keep a teacher to their
   own class.

Until step 3 exists, treat the dashboard as a demo of the interface, not as a
place to keep records.
