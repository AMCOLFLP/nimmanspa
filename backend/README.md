# Backend — accounts & progress (PHP + MySQL)

Registered learners receive **30 consecutive days per course**, beginning when
they explicitly press **Start course**. Signing in, browsing the chooser, and
saving progress do not start or extend that period. Accounts, access dates, and
progress live on the server. Guest previews never call this backend.

## Requirements

- PHP 8.0+ with the `pdo_mysql` and `mbstring` extensions.
- MySQL 5.7+ or MariaDB 10.2+ (needs native `JSON` column support).
- The whole app (static front end + `backend/`) served from **one origin**.
  GitHub Pages cannot run PHP, so this backend needs a host that executes
  PHP — a shared host (cPanel etc.), a VPS, or similar.

## Setup

1. Create a database and a database user for it.
2. Import the schema:
   ```sh
   mysql -u youruser -p yourdatabase < backend/schema.sql
   ```
   For an **existing installation**, back up the database, then import
   `backend/migrations/20261105_course_access.sql`, followed by
   `backend/migrations/20261105_admin_dashboard.sql`, **before deploying the updated
   API and frontend** instead. Both migrations are additive and safe to rerun;
   accounts and saved progress are preserved. Existing learners start their
   first 30-day period when they next explicitly start each course.
3. Copy `backend/config.example.php` to `backend/config.php` and fill in your
   database host/name/user/password. `config.php` is gitignored — never
   commit real credentials. (Every setting also accepts an environment
   variable, e.g. `NIMMAN_DB_PASS`, if your host prefers that.)
4. Once the site is served over HTTPS, set `'secure_cookies' => true` in
   `config.php` so the session cookie requires HTTPS.
5. Upload/deploy the whole repository (front end + `backend/`) to your PHP
   host, keeping the folder layout as-is — the front end calls
   `backend/api/*.php` using relative paths.
6. Register the intended administrator through the normal sign-up screen, then
   run this on the server using the exact email of that existing account:
   ```sh
   php backend/tools/promote-admin.php existing-account@example.com
   ```
   The command creates no account and has no default password. It can only run
   from the command line. It enables administrator access, writes an audit event,
   and ends existing sessions for that account. Sign in again and open the Admin
   dashboard. No account receives admin access automatically from its profession,
   email address, registration fields, or the browser's teacher mode.

The admin migration requires existing users to sign in again. Deploy the frontend
and backend together: older sessions do not contain the new session version.

## What it does

- `api/register.php`, `api/login.php` — create/verify an account, then start
  a PHP session (`password_hash`/`password_verify`; the session id is
  regenerated on every successful auth to avoid session fixation).
- `api/logout.php` — destroys the session server-side.
- `api/session.php` — checks the current server session and returns the current
  account plus a CSRF token. Disabled accounts and revoked sessions receive 401.
- `api/change-password.php` — authenticated `POST {current_password,new_password}`
  with `X-CSRF-Token`. New passwords require at least 10 characters and at most
  72 UTF-8 bytes, and must differ from the current password. A successful change
  ends other sessions, rotates the current session and token, and clears the
  mandatory password-change flag.
- `api/access.php` — authenticated `GET` lists course windows;
  `POST {course:"spa"}` starts the requested course once and returns the same
  full status payload. Repeated requests never change the original dates.
- `api/progress.php` — `GET ?course=spa|cruise|salon` returns that course's saved
  progress as JSON; `POST {course, data}` upserts it. The whole progress
  object (known words, quiz scores, streaks, daily state, review schedule)
  is stored as a single JSON blob per (user, course) — the same shape the
  client used to keep in localStorage — so the sync contract stays simple.
  Both reads and writes require active course access. HTTP 403 responses use
  `access_not_started` or `access_expired`; expiry does not delete saved data.
- Failed logins are throttled per email (8 per 15 minutes) via the
  `login_attempts` table.

All SQL uses parameterised PDO statements; nothing user-supplied is ever
concatenated into a query.

## Thirty-day access policy

- Each course has its own window, beginning only when the learner explicitly
  starts it. Registering an account never starts a course window.
- One month means exactly **30 x 24 hours**, including weekends and breaks.
  The database supplies the UTC clock. The start is inclusive and expiry is
  exclusive. A device clock, login, or progress update cannot extend a window.
- The unique `(user_id, course_id)` key and insert-only dates make starts
  idempotent, including repeated starts after expiry. There is no renewal or
  teacher override endpoint in this release.
- Add new course ids to `LEARNING_COURSES` in `backend/lib/course_access.php`
  when adding them to the frontend registry.

The access response includes `ok`, `server_now` (UTC ISO), `duration_days:30`,
`trigger`, and `courses`, keyed by `spa`, `cruise`, and `salon`. Each course has
`course_id`, `status` (`not_started`, `active`, or `expired`), `started_at`,
`expires_at`, and `remaining_days`. Unstarted dates are `null`; all stored dates
are returned as UTC ISO strings. Responses are marked `Cache-Control: no-store`.

## Administrator dashboard

Administrators can search and filter student accounts, inspect saved course
progress, create or edit accounts, suspend/reactivate access, and issue a new
temporary password. The server checks `users.is_admin` on every request;
`users.role` remains the learner's profession. Admin accounts are excluded from
the student directory and cannot be edited or reset through student endpoints.

All administrator writes require the current session's `X-CSRF-Token` header.
Login, registration, session inspection, and password changes return
`{ok:true,user,csrf_token}`. The user object contains `id`, `name`, `email`, `role`,
`lang`, `is_admin`, `is_active`, and `must_change_password`; hashes, passwords and
session versions are never included. Errors use `{ok:false,error,message}`.

| Endpoint | Request | Result |
| --- | --- | --- |
| `api/admin/students.php` | `GET` with optional `q`, `course`, `access`, `account`, `page`, `per_page` | `students`, `pagination`, global `summary`, `server_now` |
| `api/admin/student.php` | `GET ?id=123` | `student`, including chapter checklist and recent practice |
| `api/admin/students.php` | `POST {name,email,role,lang,is_active}` | Newly created `student` and one-time `temporary_password` (201) |
| `api/admin/student.php` | `POST {id,name,email,role,lang,is_active}` | Updated `student` |
| `api/admin/reset-password.php` | `POST {id}` | One-time `temporary_password`, `must_change_password:true` |

`course` accepts `all`, `spa`, `cruise`, or `salon`; `access` accepts `all`,
`not_started`, `active`, or `expired`; `account` accepts `all`, `active`, or
`inactive`. Page size defaults to 25 and is limited to 100. A course filter with
`access=all` selects students enrolled in that course. Selecting `not_started`
instead includes accounts without that course window. With all courses selected,
an access filter matches a student when any course has the requested status.
Summary cards always describe the full student population, independently of
directory filters; enrollment counts include windows on suspended accounts.

Each student has a `courses` array with three course records. Completion is the
percentage of canonical curriculum chapters marked studied. Unknown chapter,
review-item and known-word identifiers do not inflate those counts. Chapter
marks and practice scores are learner-recorded evidence, not verified attendance,
teacher grades, or certification. A missing score is `null`, not zero. Last
activity is the server timestamp of the latest progress save, not the device's
clock or a promise of attendance. Practice/assessment counts refer to retained
history (up to 50 each); details show the latest 10 retained attempts. Deploy
`content/curriculum.json` alongside the backend to keep the dashboard aligned
with course chapters.

Creating an account or resetting its password generates a cryptographically
random temporary password. It is shown only in that response, stored only as a
hash, and never emailed automatically. The administrator must share it with the
intended student through a trusted channel. At the next sign-in, the student
must enter that temporary password and choose a new password before learning.
If the administrator closes the password display before recording it, issue
another reset; the old temporary password stops working.

Password resets and account changes end previous sessions. Suspending an account
blocks sign-in and immediately invalidates active API sessions. Reactivating it
requires a fresh sign-in. These actions preserve all progress and **do not pause,
renew, restart, or extend any 30-day course window**. Creation starts no course.

`admin_audit_log` records the acting administrator, target account, action,
changed field names, and UTC timestamp. It contains no password, hash, or token.
The server operator can inspect it directly; this release has no audit-log UI or
administrator-management UI. Back up this table with accounts and learning data.

## Validation

```sh
php backend/tests/course_access_test.php
python backend/tests/access_integration_test.py
python backend/tests/admin_integration_test.py
```

The PHP test checks the exact expiry boundary, UTC handling, known course ids,
and 30-day periods across varying calendar months. The Windows integration test
starts isolated temporary MariaDB and PHP servers, tests the real HTTP endpoints,
then removes its own temporary data. It never reads `config.php` or connects to
an existing database. Set `NIMMAN_TEST_PHP` and `NIMMAN_TEST_MYSQL_BIN` if binaries
are outside PATH and the default XAMPP installation.

## Content access limits

The backend enforces account and progress access. Lesson JavaScript, images,
and standalone HTML guides remain public static assets. Frontend route checks
do not make those files private; a paid or confidential content boundary needs
authenticated content delivery and web-server rules. Guest previews do not
create account access. There is no identity verification to prevent a person
from creating another account.

## Security notes for whoever deploys this

- This is now real user data (real emails, real passwords). Use HTTPS in
  production and set `secure_cookies` accordingly (see step 4 above).
- Keep PHP and MySQL patched; don't disable `password_hash`'s default
  algorithm choice.
- Back up `users`, `course_access`, `progress`, and `admin_audit_log` together.
- Password recovery is administrator-assisted. There is no automated email-reset
  link or email-verification service. Verify the student's identity before
  sharing a temporary password. If an administrator loses access, a trusted
  server operator must recover it; student reset endpoints cannot target admins.
