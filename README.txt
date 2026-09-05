NIMMAN Willow & Stone English
=============================

HOW TO RUN
----------
Most of the app works by simply opening index.html in a browser.

The SPEAKING TEST needs the microphone, and browsers only allow that on a
real web address — not on a file:// path. Use one of these:

  1. Upload this folder to any web host and open it over https://
  2. Or run a local server from inside this folder:
        python3 -m http.server 8000
     then open  http://localhost:8000

If you open index.html directly, the speaking test will tell you this and
offer self-check mode instead.

GETTING AROUND
--------------
Five tabs along the bottom:

  Home      Today's summary, phrase of the day, and links to everything
  Daily     The Daily Five: five words a day, swiped, then a knowledge check
  Vocab     Browse the 137 terms as flashcards, with search and filters
  Phrases   75 ready-made lines across 11 guest situations
  Practice  ALL 16 activities in one place, in three groups:
              - Learn the words   (6 vocabulary drills)
              - Test yourself     (8 quizzes)
              - Say it out loud   (pronunciation guide + speaking test)

Everything is graded Easy / Intermediate / Advanced, and the whole interface
switches between English and Thai with the EN/ไทย toggle.

ABOUT THE SPEAKING SCORE
------------------------
The score comes from your browser's own speech recognition. Your speech is
transcribed on your device and compared with the target text, so the number
reflects how clearly you were understood.

It is an intelligibility measure, not a phoneme-by-phoneme assessment.
Background noise or a poor microphone can lower it. Treat it as practice
feedback, not an exam result. Nothing is uploaded or stored by this app.

Speech recognition is available in Safari (iPhone/Mac) and Chrome. In
browsers without it (e.g. Firefox), the app switches to self-check mode:
you record, compare with the model voice, and rate yourself. It will not
invent a percentage without a recogniser.
