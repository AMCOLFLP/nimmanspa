# Learning and assessment release tests

Current release: 25 September 2026.

- `learning-validation-report.json`: 160 structural and pure-model checks passed.
- `learning-browser-report.json`: 75 Chromium integration checks passed.
- `learning-final-smoke.json`: 45 final artifact, interaction and asset checks passed.
- `learning-syntax-report.txt`: current JavaScript and PHP syntax checks passed.

These are individual checks, not counts of complete examination sessions or students.
See `../LEARNING_RELEASE_README.md` for test methods and limitations. Browser checks
use an in-memory Chromium page, mocked local storage, audio, and selected server responses.
Live PHP/MySQL persistence and production-origin navigation were not tested.

To rerun the model checks: `node tests/validate_learning.cjs`.
To rerun browser integration: install Python Playwright and Chromium, then run
`python tests/learning_browser_test.py` from the project directory.

Screenshots prefixed `learning-` show the new implementation. Older test scripts remain
for reference; old report JSON and old screenshots were omitted from this distribution.
The final artifact smoke check was run against the separate self-contained HTML preview
and module guide; the report records those checks, not a live hosted deployment.
