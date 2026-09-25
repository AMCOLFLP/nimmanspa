# NIMMAN Body Map — Male & Female PNG Integration

Release: `png-bodymap-1` · 25 September 2026
Base: the user's updated `nimmanspa(1).zip`.

## Open the feature

In the application, select **Cruise Ship Spa Therapist English**, then open
**Body map** from Home or the side menu. Choose **Female** or **Male**, then
**Front**, **Back**, or **Face**. Tap a numbered point, an image region, or a
word-list button. **Show numbered points** can be turned off without disabling
the word list or the surface hotspots.

The six supplied PNG files replace the old SVG body/face drawings. Their
original pixels, alpha channels and canvas dimensions are unchanged. No new
photo was generated for this integration. Interface icons such as the play
triangle remain unchanged; they are not the body illustration.

## Included behavior

- Separate, calibrated coordinates for all six model/view combinations.
- Front: 18 word labels; Back: 16; Face: 10. These overlap across views and
  represent **38 unique mapped vocabulary entries**, not 44 different terms.
- All **53 existing body-vocabulary entries** remain available: 38 mapped and
  15 in the related-word list. No vocabulary, Thai meaning, example, ID or
  difficulty label was rewritten by this integration.
- English terms, phonetic guides when supplied, Thai meanings, existing
  definitions and guest-service examples. Word and example pronunciation use
  the app's existing speech engine and rate setting.
- Both members of a paired region, such as shoulders or calves, can be
  selected. A single numbered pin per word avoids duplicate labels.
- Large word-list controls and native keyboard-accessible buttons provide an
  alternative to small image landmarks. Changing the selected word does not
  replace the image or forcibly move the page.
- Model/view and marker-display preferences use their own optional localStorage
  key, `nimman_bodymap_preferences_v1`. They do not record a learner's gender,
  modify quiz scores, mark words learned or write account progress.
- Dynamic controls update when the app language changes. The existing course
  availability threshold is retained: courses without enough mapped body
  words do not acquire a mostly empty map.
- A missing image shows an error and hides the overlay; the word list still
  works. Audio errors leave the readable content available.

## Important content distinction

These AI-generated figures support **English body-area vocabulary**, not
clinical anatomy, diagnosis, pressure-point location or treatment instruction.
Hotspots mark approximate surface locations. Some named areas lie beneath skin
or clothing. Soles and sinuses are not visible in these supplied images and
are therefore retained in the related-word list instead of receiving a false
image hotspot. Other broad/non-localised terms remain in that same list.

The vocabulary definitions and example sentences are the existing course
content. They were preserved, not independently medically or linguistically
certified in this release.

## Deployment

1. Back up the existing website and its database before replacing files.
2. Extract the ZIP. The `nimmanspa/` folder is the application web root.
3. Upload the updated application files to the same web root, including the
   complete `assets/anatomy/` folder, `anatomy.css` and `js/anatomy-data.js`.
   Preserve the production `backend/config.php` and database. This update does
   not include a production config file or require a schema migration.
4. Open the site, choose the Spa course and test all six views. The changed
   resources are referenced with `?v=png-bodymap-1` to refresh browser caches.
5. Check actual audio playback and the existing account/progress endpoints on
   the deployed site. No live website has been changed by delivering this ZIP.

Existing learning, assessment, vocabulary, speech and backend functionality is
retained. This release does not claim to resolve unrelated issues in earlier
webpage/content audits. The original uploaded ZIP is unchanged.

## Main implementation files

| File | Purpose |
|---|---|
| `assets/anatomy/{female,male}-{front,back,face}.png` | Six original PNGs |
| `assets/anatomy/manifest.json` | Original filenames, dimensions and hashes |
| `content/anatomy-map.json` | Editable, image-specific coordinates |
| `js/anatomy-data.js` | Browser-ready copy of the coordinate data |
| `js/anatomy.js` | Native HTML hotspots, model/view state, details and audio |
| `anatomy.css` | Responsive image, controls and word-list styles |
| `index.html` | Feature structure and dependencies |
| `js/app.js`, `js/i18n.js` | Active-map language refresh and updated wording |
| `styles.css`, `learning.css` | Removed obsolete silhouette styling and page width |

Coordinates are percentages of the **entire original PNG canvas**, including
transparent margins. Do not crop the files, stretch the images, replace them
with a different pose or use `object-fit: cover`: recalibrate coordinates first.
After editing `content/anatomy-map.json`, regenerate the `AnatomyMapData` JSON
constant in `js/anatomy-data.js` and rebuild the standalone preview.

## Preview and tests

The separately supplied `NIMMAN_Body_Map_Preview.html` is a standalone feature
preview with all six PNGs embedded. It uses the same body-map renderer and the
same 53 source vocabulary records. It has no login, database or assessment
recording. It can be rebuilt with:

```bash
python tools/build_bodymap_preview.py --output BODY_MAP_PREVIEW.html
```

The release includes test scripts, reports and screenshots in `tests/bodymap/`.
Run `python tests/bodymap/validate_assets.py` for coordinate/PNG/syntax checks.
Run `python tests/bodymap/browser_test.py /path/to/preview.html` for the focused
Chromium integration checks. Development tests require Pillow, Playwright,
Node.js and a Chromium executable; the deployed app needs no new JavaScript
library or image service.

Verification performed:

- Six original PNG files, alpha channels, dimensions and SHA-256 hashes.
- All marker anchors lie on the non-transparent figure and within their own
  assigned hit regions. Coordinates remain inside the image canvas.
- 176 actual marker clicks: all six views at desktop and 320 px phone width.
- Additional layouts at 390, 768 and 1280 px; image/overlay aspect alignment,
  English/Thai switching, both-side selection, Enter/Space input, hidden pins,
  missing-image fallback and simulated audio success/failure.
- Preserved progress while browsing, retained course restrictions and a smoke
  test of the original custom assessment builder.
- The existing 160-check learning-model/selection regression test passed.

Limitations: local URL navigation is blocked in the authoring environment, so
Chromium loaded the actual scripts/styles/PNGs in an in-memory page with mocked
localStorage and TTS callbacks. This is not a live PHP/MySQL, audible speech,
Safari/iOS, clinical-anatomy or independent translation validation. Historical
reports outside `tests/bodymap/` were inherited from the uploaded project.

No Git history, Python bytecode or font files are included in the release ZIP.
