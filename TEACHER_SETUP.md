# NIMMANSPA administration

The admin dashboard uses real PHP/MySQL accounts and saved student progress.
The previous browser-only teacher demo and its built-in login have been removed.
Old local demo records are not imported into the server.

## First-time setup

1. Apply `backend/migrations/20261105_course_access.sql` if the 30-day access
   update has not already been installed.
2. Apply `backend/migrations/20261105_admin_dashboard.sql`. Existing accounts,
   progress and course windows are preserved. Old sessions must sign in again.
3. Register an account normally using your own email and password.
4. From the PHP host's command line, promote that account:

   ```sh
   php backend/tools/promote-admin.php your-email@example.com
   ```

5. Sign in again through the normal login page. The server-issued admin flag
   opens the dashboard automatically. There is no shared/default admin password.

The promotion helper runs only from the command line. Account registration and
student management cannot create administrators. Keep server configuration and
CLI access with the site operator. See `backend/README.md` for database setup.

## Student progress

Search students by name or email and filter by course, access period or account
status. Open a student to inspect each course's chapter checklist, known words,
practice summary, last saved activity and 30-day access dates. Progress is read
from the database, including expired courses, across devices.

Chapter checkmarks are self-study records. Practice scores are not official
course grades. No saved activity is shown separately from zero completion.

## Accounts

Create a student account, correct their name/email, choose their occupation and
preferred language, or suspend/re-enable sign-in. Suspension revokes existing
sessions and keeps progress and course dates. Account creation does not start
course access. Students start each course themselves.

This dashboard manages students only. It does not delete accounts, assign admin
privileges, renew course windows or send email automatically.

## Password resets

1. Open the intended student and choose Reset password.
2. Review the student's name/email and confirm the reset.
3. Copy the temporary password shown once and provide it to the student through
   your usual private channel. The app does not send it automatically.
4. The student signs in with it and must set a new password before continuing.

The previous password stops working and existing student sessions are revoked.
The database stores a password hash; neither old passwords nor temporary
passwords can be retrieved later. If the temporary password is lost, reset it
again. Resetting never changes course dates or learning progress.

Students can also change their password from Account. Administrators can change
their own password from the dashboard. Password changes sign out other sessions.

## Validation and deployment

Admin changes require a live server-side admin role and CSRF validation. Account
updates and password resets have an audit record without passwords or tokens.
See `backend/tests/admin_integration_test.py` for isolated endpoint checks and
`tests/README.md` for frontend tests. These changes are local until deployed to
the configured PHP host; a static preview cannot provide the dashboard.