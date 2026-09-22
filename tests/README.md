# Current-release checks

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
