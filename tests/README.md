# Current-release checks

For the 30-day programme (5 November 2026), run these additional checks:

```sh
node tests/course-access.test.js
node tests/validate_study_plan.cjs
node tests/validate_learning.cjs
node --test --test-isolation=none tests/tutorial.test.cjs
php backend/tests/course_access_test.php
python backend/tests/admin_integration_test.py
```

For PHP/MySQL endpoint coverage, see `backend/tests/access_integration_test.py`
and `backend/README.md`. These checks use isolated test data. On Windows, set
`PYTHONUTF8=1` before running the Python content validators below.

The admin integration harness covers permissions, CSRF, safe migration,
student metrics, account creation/editing/suspension, password hashing,
mandatory password changes, session revocation, and unchanged course periods.
`tests/admin-ui.test.cjs` checks dashboard rendering, escaping, request races
and temporary-password cleanup with a mocked DOM/transport.

`tests/tutorial.test.cjs` covers the replayable English/Thai tutorial, including
guest access, first-use preference, topic navigation and modal cleanup. This
uses a DOM harness; it does not replace browser visual or screen-reader QA.

Guests have unrestricted course and practice access, with temporary in-memory
progress that clears on refresh or sign-out. Registered-account browser checks
need a mocked or real active account. Historical browser reports are not visual
QA of the refreshed UI or proof of the current guest workflow.

Run from the app directory:

```sh
python tests/validate_content.py
python tests/validate_activities.py
python tests/activity_browser_test.py
```

The structural activity check requires Node.js. Browser tests require Python
Playwright and Chromium at `/usr/bin/chromium` (adjust that executable path for
your environment). No package download or extra service is required by the app.

`activity-validation-report.json`: current counts, keys, levels, option uniqueness,
IDs and runtime/export equality. `content/validation.json`: core-content fields,
links and category validation. Structural checks do not establish item validity.

`activity-browser-test-report.json`: the current regression result. Tests inline
the app's actual scripts, styles and logo assets because navigation to a local
HTTP server is blocked in the authoring environment. localStorage is an in-memory
shim and text-to-speech is replaced by a deterministic stub. Interaction and
scoring are tested, not production hosting, real persistence or audible output.

Screenshots show local font fallbacks and mobile/desktop layouts. Full-page
captures include the fixed navigation at its viewport position. No Safari/iOS,
live microphone, formal accessibility or independent language review is implied.

`previous-release/` contains historical tests and screenshots from the earlier
900-entry vocabulary/phrase release. They are not the current assessment counts
or a substitute for the reports above.

## Historical browser coverage

`activity_browser_test.py` runs entirely in guest mode. Account registration,
login and progress save/load now call the PHP+MySQL backend in `backend/`
(see `backend/README.md`), which this no-network, in-memory harness has no
server to talk to. Verifying that code path currently means either running
against a real PHP+MySQL instance, or adding Playwright route mocks for
`backend/api/*.php`. Guest learning uses no account/access/progress API, so its
course and practice flows can be tested without a backend. Historical results
must be rerun to verify changes to guest access and progress.
