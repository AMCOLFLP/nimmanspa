# Backend — accounts & progress (PHP + MySQL)

Real accounts and their progress are now stored server-side instead of in the
browser's localStorage. Guest mode is unchanged: it stays entirely local and
never touches this backend.

## Requirements

- PHP 8.0+ with the `pdo_mysql` extension (standard on almost all PHP hosting).
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
3. Copy `backend/config.example.php` to `backend/config.php` and fill in your
   database host/name/user/password. `config.php` is gitignored — never
   commit real credentials. (Every setting also accepts an environment
   variable, e.g. `NIMMAN_DB_PASS`, if your host prefers that.)
4. Once the site is served over HTTPS, set `'secure_cookies' => true` in
   `config.php` so the session cookie requires HTTPS.
5. Upload/deploy the whole repository (front end + `backend/`) to your PHP
   host, keeping the folder layout as-is — the front end calls
   `backend/api/*.php` using relative paths.

## What it does

- `api/register.php`, `api/login.php` — create/verify an account, then start
  a PHP session (`password_hash`/`password_verify`; the session id is
  regenerated on every successful auth to avoid session fixation).
- `api/logout.php` — destroys the session server-side.
- `api/progress.php` — `GET ?course=spa|cruise` returns that course's saved
  progress as JSON; `POST {course, data}` upserts it. The whole progress
  object (known words, quiz scores, streaks, daily state, review schedule)
  is stored as a single JSON blob per (user, course) — the same shape the
  client used to keep in localStorage — so the sync contract stays simple.
- Failed logins are throttled per email (8 per 15 minutes) via the
  `login_attempts` table.

All SQL uses parameterised PDO statements; nothing user-supplied is ever
concatenated into a query.

## Security notes for whoever deploys this

- This is now real user data (real emails, real passwords). Use HTTPS in
  production and set `secure_cookies` accordingly (see step 4 above).
- Keep PHP and MySQL patched; don't disable `password_hash`'s default
  algorithm choice.
- Back up the database — an account's progress lives only in the `progress`
  table now, not in the learner's browser.
- There's no email verification or password-reset flow. "Forgot password"
  on the sign-in screen still just shows a placeholder note, same as the
  previous localStorage-only demo.
