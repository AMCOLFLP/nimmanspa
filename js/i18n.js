/* =========================================================================
   i18n — interface-level translation (English / Thai)
   Content data (vocab, phrases, etc.) carries its own `th` fields in
   data.js; this file only covers the surrounding app chrome: nav labels,
   headings, instructions, buttons, auth screens.
   ========================================================================= */

const UI_STRINGS = {
  en: {
    appName: 'NIMMAN Willow & Stone English',
    appTagline: 'Spa & wellness English · Sriracha',
    courseProgress: 'Course progress',
    complete: 'complete',

    navHome: 'Home', navVocab: 'Vocab', navSpeak: 'Speak', navPhrases: 'Phrases', navAssess: 'Assess',

    greetingEyebrow: 'Good to see you',
    greetingHeading: 'Ready for today\u2019s practice?',
    greetingBody: 'Fifteen quiet minutes a day is enough to sound calm, warm and confident with every guest who walks through your door.',
    phraseOfDayLabel: 'Phrase of the day',
    continueLearning: 'Continue learning',
    statWords: 'WORDS LEARNED',
    statQuiz: 'QUIZ AVERAGE',
    statLessons: 'ACTIVITIES DONE',
    exploreCourse: 'Explore the course',
    modulesCount: '6 modules',
    tipOfDay: 'Tip of the day',
    tipOfDayBody: 'Instead of \u201cIt\u2019s not hot,\u201d try \u201cThe temperature is gentle and completely safe for your skin.\u201d It reassures rather than simply denying the guest\u2019s concern.',

    menuVocabTitle: 'Vocabulary & practice', menuVocabDesc: 'Flashcards and a matching game for spa terminology',
    menuPronTitle: 'Pronunciation', menuPronDesc: 'Hear and repeat the industry\u2019s trickiest words',
    menuPhrasesTitle: 'Useful phrases', menuPhrasesDesc: 'Ready phrase banks for real guest scenarios',
    menuSaythisTitle: 'Say this, not that', menuSaythisDesc: 'Turn blunt phrases into polished, guest-ready ones',
    menuAssessTitle: 'Knowledge assessment', menuAssessDesc: 'Eight activities with instant, constructive feedback',

    vocabHeading: 'Vocabulary & practice',
    vocabLede: '137 essential terms across nine areas of spa work, with six ways to practise them.',
    modeFlash: 'Flashcards', modeMatch: 'Matching game',
    catAll: 'All terms',
    cardOf: 'Card', of: 'of', known: 'known',
    tapReveal: 'TAP TO REVEAL THE DEFINITION', tapFlip: 'TAP TO FLIP BACK', definition: 'DEFINITION',
    stillLearning: 'Still learning', iKnowThis: 'I know this',
    matchInstruction: 'Tap a term, then tap its matching definition.',
    matchedPair: 'Matched!', pairsFound: 'pairs found.', allMatched: 'All matched \u2014 beautifully done.', notQuite: 'Not quite \u2014 try again.',
    newRound: 'New round', showThai: 'Show Thai',

    pronHeading: 'Pronunciation guide',
    pronLede: 'Tap play to hear each word spoken aloud, watch which syllable carries the stress, then repeat it yourself.',
    pronAudioNote: 'Playback uses your device\u2019s built-in voice, so tone can vary slightly by browser.',
    example: 'Example',

    phrasesHeading: 'Useful phrases',
    phrasesLede: 'Eleven situations you\u2019ll meet every shift, each with ready-made lines you can use word for word.',

    saythisHeading: 'Say this, not that',
    saythisLede: 'Twenty everyday moments where a small change in wording makes a guest feel looked after.',
    dontSay: 'Don\u2019t say', doSay: 'Do say', whyItMatters: 'Why it matters',

    assessHeading: 'Knowledge assessment',
    assessLede: 'Eight activities to check what\u2019s sticking, with feedback after every answer.',
    bestScores: 'Your best scores',
    actMcTitle: 'Multiple choice quiz', actMcDesc: '12 questions drawn from a bank of 41',
    actFillTitle: 'Fill-in-the-blank dialogue', actFillDesc: 'Complete a full guest conversation, start to finish',
    actListenTitle: 'Listen & choose', actListenDesc: 'Hear a word spoken aloud and pick what you heard',
    actBuilderTitle: 'Phrase builder', actBuilderDesc: 'Rebuild the English sentence from its Thai meaning',
    actScenarioTitle: 'What would you say?', actScenarioDesc: 'Pick the professional response to a real situation',

    selectAnswer: 'Select an answer', nextQuestion: 'Next question', seeResults: 'See your results',
    selectWord: 'Select a word', nextLine: 'Next line',
    chooseWordBlank: 'Choose the word that completes the highlighted blank.',
    correct: 'Correct.', notQuiteCap: 'Not quite.', almostCap: 'Almost.', fitsHere: 'fits naturally here.', bestFit: 'The word that fits best is',

    dialoguePicker: 'Choose a dialogue',
    listenLede: 'Tap play, listen carefully, then choose the word you heard.',
    listenPlay: 'Play word', roundOf: 'Round',
    builderLede: 'Read the Thai meaning, then tap the English words in the correct order.',
    builderCheck: 'Check sentence', builderClear: 'Clear', builderCorrect: 'Perfect \u2014 that\u2019s the correct order.', builderWrong: 'Not quite the right order \u2014 try again.',
    scenarioLede: 'Read the situation, then choose the most professional way to respond.',
    scenarioQuestion: 'What\u2019s the more professional way to say this?',

    resultsHeading: 'Your results',
    questions: 'QUESTIONS', correctLabel: 'CORRECT', toReview: 'TO REVIEW',
    coachNote: 'Coach\u2019s note',
    backToAssessments: 'Back to assessments', returnHome: 'Return home',
    outstanding: 'Outstanding work', greatEffort: 'Great effort', goodStart: 'Good start \u2014 keep practising',

    modeScramble: 'Word scramble', modeThai: 'Thai \u2192 English', modeSort: 'Category sort', modeSpeed: 'Speed round',
    thaiPromptLabel: 'Which English term means this?',
    sortInstruction: 'Tap a term, then tap the category it belongs to.',
    sortRemaining: 'terms left to sort', sortDone: 'Round complete \u2014 see how you did below.',
    speedTitle: '60-second speed round', speedBody: 'Read the definition and tap the matching term as fast as you can. Every correct answer builds your streak.',
    speedStart: 'Start the timer', speedSeconds: 'SECONDS LEFT', speedCorrect: 'CORRECT', speedStreak: 'STREAK', speedBestStreak: 'Best streak',
    mcKicker: 'Vocabulary & guest etiquette',
    scenarioKicker: 'Real guest situations',
    defKicker: 'Definitions & terminology',
    actDefTitle: 'Definition quiz', actDefDesc: 'Endless questions drawn from all 137 terms',
    actTfTitle: 'True or false', actTfDesc: '12 statements on safety, etiquette and terminology',
    actErrTitle: 'Fix the phrase', actErrDesc: 'Spot the blunt line and choose the polished rewrite',
    defQuestion: 'What does this mean:', revQuestion: 'Which term means:',
    errLede: 'Each line below would sound abrupt to a guest. Choose the professional rewrite.',
    tfTrue: 'True', tfFalse: 'False',
    blanksLabel: 'blanks to complete',
    builderThaiLabel: 'Say this in English', builderEmpty: 'Tap the words below in order',
    listenReplay: 'Play it again',
    coachHigh: 'You\u2019re ready to use this confidently on the floor. Try a harder activity or a new vocabulary category next.',
    coachMid: 'Solid work. Revisit the terms you missed in the Vocabulary module, then try this again in a day or two.',
    coachLow: 'Spend ten minutes with the Flashcards and \u201cSay This, Not That\u201d sections, then come back and try again.',

    navDaily: 'Daily',
    menuDailyTitle: 'Daily Five', menuDailyDesc: 'Five words a day, swiped and checked',
    dailyHeading: 'Daily Five',
    dailyLede: 'Five words for today. Swipe right when you understand one, left to see it again. Get all five and the knowledge check unlocks.',
    dailyKicker: 'TODAY\u2019S SET',
    dailyCtaTitle: 'Study your Daily Five', dailyCtaProgress: 'understood so far',
    dailyCtaReadyTitle: 'Knowledge check ready', dailyCtaReadyBody: 'All five understood \u2014 test yourself now.',
    dailyCtaDoneTitle: 'Daily Five complete',
    swipeGotIt: 'I understand', swipeNotYet: 'Not yet',
    swipeGotItStamp: 'GOT IT', swipeNotYetStamp: 'AGAIN',
    swipeHint: 'Drag the card, or use the buttons below.',
    dailyReadyTitle: 'All five understood', dailyReadyBody: 'Now check that it stuck. Five quick questions on exactly these words.',
    dailyStartCheck: 'Start the knowledge check',
    dailyCheckTitle: 'Daily Five check', dailyCheckKicker: 'Today\u2019s five words',
    dailyDoneTitle: 'Today\u2019s set is done', dailyDoneScore: 'You scored', dailyComeBack: 'Come back tomorrow for five more.',
    dailyRetake: 'Take the check again',
    dailyBanked: 'These five words are now counted as learned.',
    backToDaily: 'Back to Daily Five',

    partnerCaption: 'A programme by Nimmanoradee International School & Barter Group',
    searchVocabPh: 'Search 137 words\u2026',
    searchPhrasePh: 'Search all phrases\u2026',
    searchResults: 'matches', searchNoResultsTitle: 'No matches',
    searchNoResultsBody: 'Try a shorter word, or search in Thai.',
    settingsHeading: 'Settings', settingsDesc: 'Voice, text size and language',
    setAudioGroup: 'AUDIO', setDisplayGroup: 'DISPLAY', setDataGroup: 'YOUR DATA',
    setVoiceTitle: 'Pronunciation voice',
    setVoiceDesc: 'We pick a neutral female English voice automatically. Change it here if you prefer another.',
    setVoiceTest: 'Test this voice',
    setVoiceAuto: 'Automatic (recommended)',
    setVoiceNone: 'No voices found on this device',
    setVoiceRecommended: 'recommended',
    setSpeedTitle: 'Speaking speed', setSpeedDesc: 'Slower is easier to copy when practising.',
    setSpeedSlow: 'Slow', setSpeedNormal: 'Normal', setSpeedNatural: 'Natural',
    setTextSizeTitle: 'Text size', setTextSizeDesc: 'Applies to reading content.',
    setResetTitle: 'Reset my progress', setResetDesc: 'Clears known words and all scores. This cannot be undone.',
    setResetBtn: 'Reset progress', setResetConfirm: 'Reset everything? This cannot be undone.', setResetDone: 'Your progress has been reset.',
    voiceSampleText: 'Good afternoon, welcome to the spa. How may I assist you today?',
    hintVocab: 'Tip: tap a card to flip it, then mark whether you knew it. Your progress saves automatically.',
    hintDismiss: 'Dismiss',

    // Auth
    authWelcome: 'Welcome',
    authTagline: 'Sign in to save your progress across every device.',
    loginTab: 'Log in', registerTab: 'Register',
    fieldName: 'Full name', fieldEmail: 'Email', fieldPassword: 'Password', fieldConfirm: 'Confirm password', fieldRole: 'Your role', fieldLanguage: 'Preferred language',
    roleTherapist: 'Therapist', roleReception: 'Receptionist', roleManager: 'Manager', roleOther: 'Other',
    loginBtn: 'Log in', registerBtn: 'Create account',
    forgotPassword: 'Forgot password?', forgotPasswordNote: 'Please ask your spa manager to reset it for you.',
    continueGuest: 'Continue as guest',
    guestNote: 'Guest progress isn\u2019t saved between visits.',
    demoNote: 'Demo mode \u2014 accounts are stored only on this device, not on a secure server.',
    errRequired: 'Please fill in every field.',
    errPasswordMatch: 'Those passwords don\u2019t match.',
    errPasswordShort: 'Use at least 6 characters.',
    errEmailUsed: 'An account already exists with that email.',
    errEmailFormat: 'Please enter a valid email address.',
    errLoginFailed: 'We couldn\u2019t find an account with that email and password.',
    haveAccount: 'Already have an account?', noAccount: 'New here?',

    // Account
    accountHeading: 'Your account',
    accountGuestName: 'Guest',
    accountStats: 'Your progress',
    accountLanguage: 'App language',
    accountLogout: 'Log out',
    accountRegisterCta: 'Create a free account to save this progress',
    streakDays: 'day streak', streakDay: 'day streak',
  },

  th: {
    appName: 'NIMMAN วิลโลว์แอนด์สโตน อิงลิช',
    appTagline: 'สำหรับพนักงานสปาและเวลเนสมืออาชีพ',
    courseProgress: 'ความคืบหน้าของหลักสูตร',
    complete: 'เสร็จสมบูรณ์',

    navHome: 'หน้าแรก', navVocab: 'คำศัพท์', navSpeak: 'ออกเสียง', navPhrases: 'ประโยค', navAssess: 'ทดสอบ',

    greetingEyebrow: 'ยินดีที่ได้พบคุณ',
    greetingHeading: 'พร้อมฝึกฝนสำหรับวันนี้หรือยังคะ?',
    greetingBody: 'ใช้เวลาเพียงสิบห้านาทีต่อวันก็เพียงพอที่จะพูดกับแขกได้อย่างสงบ อบอุ่น และมั่นใจในทุกครั้ง',
    phraseOfDayLabel: 'ประโยคประจำวัน',
    continueLearning: 'เรียนต่อ',
    statWords: 'คำศัพท์ที่เรียนแล้ว',
    statQuiz: 'คะแนนเฉลี่ยแบบทดสอบ',
    statLessons: 'กิจกรรมที่ทำแล้ว',
    exploreCourse: 'สำรวจหลักสูตร',
    modulesCount: '6 หมวดหมู่',
    tipOfDay: 'เคล็ดลับประจำวัน',
    tipOfDayBody: 'แทนที่จะพูดว่า "It\u2019s not hot" ลองพูดว่า "The temperature is gentle and completely safe for your skin" แทน เพราะช่วยสร้างความมั่นใจมากกว่าการปฏิเสธความกังวลของแขกตรงๆ',

    menuVocabTitle: 'คำศัพท์และแบบฝึกหัด', menuVocabDesc: 'แฟลชการ์ดและเกมจับคู่คำศัพท์สปา',
    menuPronTitle: 'การออกเสียง', menuPronDesc: 'ฟังและฝึกออกเสียงคำศัพท์ที่ยากที่สุดในวงการ',
    menuPhrasesTitle: 'ประโยคที่ใช้บ่อย', menuPhrasesDesc: 'คลังประโยคพร้อมใช้สำหรับสถานการณ์จริงกับแขก',
    menuSaythisTitle: 'พูดแบบนี้ ไม่ใช่แบบนั้น', menuSaythisDesc: 'เปลี่ยนคำพูดห้วนๆ ให้สุภาพและมืออาชีพ',
    menuAssessTitle: 'แบบทดสอบความรู้', menuAssessDesc: 'แปดกิจกรรมพร้อมผลตอบรับทันที',

    vocabHeading: 'คำศัพท์และแบบฝึกหัด',
    vocabLede: 'คำศัพท์สำคัญ 137 คำ ครอบคลุม 9 หมวดของงานสปา พร้อมแบบฝึก 6 รูปแบบ',
    modeFlash: 'แฟลชการ์ด', modeMatch: 'เกมจับคู่',
    catAll: 'ทั้งหมด',
    cardOf: 'การ์ดที่', of: 'จาก', known: 'จำได้แล้ว',
    tapReveal: 'แตะเพื่อดูคำแปล', tapFlip: 'แตะเพื่อพลิกกลับ', definition: 'ความหมาย',
    stillLearning: 'ยังไม่จำ', iKnowThis: 'จำได้แล้ว',
    matchInstruction: 'แตะคำศัพท์ แล้วแตะคำแปลที่ตรงกัน',
    matchedPair: 'จับคู่ถูก!', pairsFound: 'คู่ที่หาเจอแล้ว', allMatched: 'จับคู่ครบทุกคู่แล้ว เยี่ยมมาก', notQuite: 'ยังไม่ถูกนะคะ ลองอีกครั้ง',
    newRound: 'รอบใหม่', showThai: 'แสดงภาษาไทย',

    pronHeading: 'คู่มือการออกเสียง',
    pronLede: 'แตะปุ่มเล่นเพื่อฟังคำ สังเกตพยางค์ที่เน้นเสียงหนัก แล้วลองออกเสียงตาม',
    pronAudioNote: 'เสียงเล่นใช้เสียงพูดในตัวอุปกรณ์ของคุณ น้ำเสียงอาจต่างกันไปตามเบราว์เซอร์',
    example: 'ตัวอย่าง',

    phrasesHeading: 'ประโยคที่ใช้บ่อย',
    phrasesLede: 'สิบเอ็ดสถานการณ์ที่เจอได้ทุกกะการทำงาน พร้อมประโยคสำเร็จรูปที่ใช้ได้ทันที',

    saythisHeading: 'พูดแบบนี้ ไม่ใช่แบบนั้น',
    saythisLede: 'ยี่สิบสถานการณ์ที่การเปลี่ยนคำพูดเพียงเล็กน้อยทำให้แขกรู้สึกได้รับการดูแล',
    dontSay: 'อย่าพูดว่า', doSay: 'ควรพูดว่า', whyItMatters: 'ทำไมถึงสำคัญ',

    assessHeading: 'แบบทดสอบความรู้',
    assessLede: 'แปดกิจกรรมเพื่อตรวจสอบความเข้าใจ พร้อมผลตอบรับหลังทุกคำตอบ',
    bestScores: 'คะแนนสูงสุดของคุณ',
    actMcTitle: 'แบบทดสอบปรนัย', actMcDesc: '12 ข้อ สุ่มจากคลังคำถาม 41 ข้อ',
    actFillTitle: 'เติมคำในบทสนทนา', actFillDesc: 'ทำบทสนทนากับแขกให้สมบูรณ์ตั้งแต่ต้นจนจบ',
    actListenTitle: 'ฟังแล้วเลือก', actListenDesc: 'ฟังคำศัพท์แล้วเลือกคำที่ได้ยิน',
    actBuilderTitle: 'เรียงประโยค', actBuilderDesc: 'เรียงประโยคภาษาอังกฤษจากความหมายภาษาไทย',
    actScenarioTitle: 'คุณจะพูดว่าอย่างไร?', actScenarioDesc: 'เลือกคำตอบที่มืออาชีพที่สุดสำหรับสถานการณ์จริง',

    selectAnswer: 'เลือกคำตอบ', nextQuestion: 'ข้อถัดไป', seeResults: 'ดูผลคะแนน',
    selectWord: 'เลือกคำ', nextLine: 'บรรทัดถัดไป',
    chooseWordBlank: 'เลือกคำที่เติมในช่องว่างที่ไฮไลต์ไว้',
    correct: 'ถูกต้อง', notQuiteCap: 'ยังไม่ถูกนะคะ', almostCap: 'เกือบแล้ว', fitsHere: 'เหมาะสมที่สุดตรงนี้', bestFit: 'คำที่เหมาะสมที่สุดคือ',

    dialoguePicker: 'เลือกบทสนทนา',
    listenLede: 'แตะเล่น ฟังให้ดี แล้วเลือกคำที่ได้ยิน',
    listenPlay: 'เล่นคำศัพท์', roundOf: 'รอบที่',
    builderLede: 'อ่านความหมายภาษาไทย แล้วแตะคำภาษาอังกฤษให้เรียงลำดับถูกต้อง',
    builderCheck: 'ตรวจประโยค', builderClear: 'ล้าง', builderCorrect: 'เยี่ยมมาก เรียงลำดับถูกต้อง', builderWrong: 'ลำดับยังไม่ถูก ลองอีกครั้ง',
    scenarioLede: 'อ่านสถานการณ์ แล้วเลือกวิธีตอบที่มืออาชีพที่สุด',
    scenarioQuestion: 'วิธีพูดแบบมืออาชีพที่ดีกว่าคืออะไร?',

    resultsHeading: 'ผลคะแนนของคุณ',
    questions: 'คำถาม', correctLabel: 'ถูก', toReview: 'ควรทบทวน',
    coachNote: 'คำแนะนำจากโค้ช',
    backToAssessments: 'กลับไปหน้าแบบทดสอบ', returnHome: 'กลับหน้าแรก',
    outstanding: 'ยอดเยี่ยมมาก', greatEffort: 'ทำได้ดีมาก', goodStart: 'เริ่มต้นได้ดี ฝึกต่อไปนะคะ',

    modeScramble: 'เรียงตัวอักษร', modeThai: 'ไทย \u2192 อังกฤษ', modeSort: 'จัดหมวดหมู่', modeSpeed: 'รอบจับเวลา',
    thaiPromptLabel: 'คำศัพท์ภาษาอังกฤษใดมีความหมายนี้?',
    sortInstruction: 'แตะคำศัพท์ แล้วแตะหมวดหมู่ที่ถูกต้อง',
    sortRemaining: 'คำที่เหลือ', sortDone: 'จบรอบแล้ว ดูผลด้านล่างได้เลย',
    speedTitle: 'รอบจับเวลา 60 วินาที', speedBody: 'อ่านคำแปลแล้วแตะคำศัพท์ที่ตรงกันให้เร็วที่สุด ทุกคำตอบที่ถูกจะเพิ่มสตรีคของคุณ',
    speedStart: 'เริ่มจับเวลา', speedSeconds: 'วินาทีที่เหลือ', speedCorrect: 'ตอบถูก', speedStreak: 'สตรีค', speedBestStreak: 'สตรีคสูงสุด',
    mcKicker: 'คำศัพท์และมารยาทกับแขก',
    scenarioKicker: 'สถานการณ์จริงกับแขก',
    defKicker: 'ความหมายและคำศัพท์เฉพาะ',
    actDefTitle: 'แบบทดสอบความหมาย', actDefDesc: 'คำถามไม่จำกัดจากคำศัพท์ทั้ง 137 คำ',
    actTfTitle: 'ถูกหรือผิด', actTfDesc: '12 ข้อความเกี่ยวกับความปลอดภัย มารยาท และคำศัพท์',
    actErrTitle: 'แก้ประโยคให้สุภาพ', actErrDesc: 'หาประโยคที่ห้วน แล้วเลือกประโยคที่สุภาพกว่า',
    defQuestion: 'คำนี้มีความหมายว่าอะไร:', revQuestion: 'คำศัพท์ใดมีความหมายว่า:',
    errLede: 'แต่ละประโยคด้านล่างฟังดูห้วนสำหรับแขก เลือกประโยคที่สุภาพและเป็นมืออาชีพกว่า',
    tfTrue: 'ถูก', tfFalse: 'ผิด',
    blanksLabel: 'ช่องว่างที่ต้องเติม',
    builderThaiLabel: 'พูดประโยคนี้เป็นภาษาอังกฤษ', builderEmpty: 'แตะคำด้านล่างให้เรียงลำดับถูกต้อง',
    listenReplay: 'ฟังอีกครั้ง',
    coachHigh: 'คุณพร้อมใช้งานจริงกับแขกได้อย่างมั่นใจแล้ว ลองกิจกรรมที่ยากขึ้นหรือหมวดคำศัพท์ใหม่ต่อไป',
    coachMid: 'ทำได้ดีมาก กลับไปทบทวนคำที่ตอบผิดในหมวดคำศัพท์ แล้วลองทำอีกครั้งในอีกวันสองวัน',
    coachLow: 'ใช้เวลาสิบนาทีกับแฟลชการ์ดและหมวด "พูดแบบนี้ ไม่ใช่แบบนั้น" แล้วกลับมาลองอีกครั้ง',

    navDaily: 'รายวัน',
    menuDailyTitle: 'ห้าคำต่อวัน', menuDailyDesc: 'วันละห้าคำ ปัดเรียนแล้วทดสอบ',
    dailyHeading: 'ห้าคำต่อวัน',
    dailyLede: 'คำศัพท์ห้าคำสำหรับวันนี้ ปัดขวาถ้าเข้าใจแล้ว ปัดซ้ายเพื่อดูอีกครั้ง เมื่อเข้าใจครบทั้งห้าคำ แบบทดสอบจะเปิดให้ทำ',
    dailyKicker: 'ชุดคำศัพท์วันนี้',
    dailyCtaTitle: 'เรียนห้าคำประจำวัน', dailyCtaProgress: 'คำที่เข้าใจแล้ว',
    dailyCtaReadyTitle: 'แบบทดสอบพร้อมแล้ว', dailyCtaReadyBody: 'เข้าใจครบทั้งห้าคำแล้ว มาทดสอบกันเลย',
    dailyCtaDoneTitle: 'ทำครบแล้ววันนี้',
    swipeGotIt: 'เข้าใจแล้ว', swipeNotYet: 'ยังไม่เข้าใจ',
    swipeGotItStamp: 'เข้าใจ', swipeNotYetStamp: 'อีกครั้ง',
    swipeHint: 'ลากการ์ด หรือกดปุ่มด้านล่าง',
    dailyReadyTitle: 'เข้าใจครบทั้งห้าคำ', dailyReadyBody: 'มาตรวจสอบว่าจำได้จริงไหม ห้าคำถามสั้นๆ จากคำศัพท์ชุดนี้',
    dailyStartCheck: 'เริ่มแบบทดสอบ',
    dailyCheckTitle: 'ทดสอบห้าคำประจำวัน', dailyCheckKicker: 'คำศัพท์ห้าคำของวันนี้',
    dailyDoneTitle: 'ชุดคำศัพท์วันนี้เสร็จแล้ว', dailyDoneScore: 'คุณได้คะแนน', dailyComeBack: 'กลับมาพบกันใหม่พรุ่งนี้กับอีกห้าคำ',
    dailyRetake: 'ทำแบบทดสอบอีกครั้ง',
    dailyBanked: 'คำศัพท์ห้าคำนี้ถูกนับเป็นคำที่เรียนแล้ว',
    backToDaily: 'กลับไปห้าคำต่อวัน',

    partnerCaption: 'โปรแกรมโดย โรงเรียนฝึกอบรมนิมมานรดี อินเตอร์เนชั่นแนล และ Barter Group',
    searchVocabPh: 'ค้นหาคำศัพท์ 137 คำ\u2026',
    searchPhrasePh: 'ค้นหาประโยคทั้งหมด\u2026',
    searchResults: 'รายการที่พบ', searchNoResultsTitle: 'ไม่พบรายการ',
    searchNoResultsBody: 'ลองใช้คำที่สั้นลง หรือค้นหาเป็นภาษาไทย',
    settingsHeading: 'ตั้งค่า', settingsDesc: 'เสียง ขนาดตัวอักษร และภาษา',
    setAudioGroup: 'เสียง', setDisplayGroup: 'การแสดงผล', setDataGroup: 'ข้อมูลของคุณ',
    setVoiceTitle: 'เสียงอ่านคำศัพท์',
    setVoiceDesc: 'ระบบเลือกเสียงผู้หญิงสำเนียงอังกฤษกลางให้อัตโนมัติ เปลี่ยนได้ที่นี่หากต้องการ',
    setVoiceTest: 'ทดลองฟังเสียงนี้',
    setVoiceAuto: 'อัตโนมัติ (แนะนำ)',
    setVoiceNone: 'ไม่พบเสียงพูดในอุปกรณ์นี้',
    setVoiceRecommended: 'แนะนำ',
    setSpeedTitle: 'ความเร็วในการพูด', setSpeedDesc: 'พูดช้าลงจะพูดตามได้ง่ายกว่า',
    setSpeedSlow: 'ช้า', setSpeedNormal: 'ปกติ', setSpeedNatural: 'เป็นธรรมชาติ',
    setTextSizeTitle: 'ขนาดตัวอักษร', setTextSizeDesc: 'มีผลกับเนื้อหาที่อ่าน',
    setResetTitle: 'รีเซ็ตความคืบหน้า', setResetDesc: 'ลบคำศัพท์ที่จำได้และคะแนนทั้งหมด ไม่สามารถย้อนกลับได้',
    setResetBtn: 'รีเซ็ตความคืบหน้า', setResetConfirm: 'ต้องการรีเซ็ตทั้งหมดหรือไม่? ไม่สามารถย้อนกลับได้', setResetDone: 'รีเซ็ตความคืบหน้าเรียบร้อยแล้ว',
    voiceSampleText: 'Good afternoon, welcome to the spa. How may I assist you today?',
    hintVocab: 'เคล็ดลับ: แตะการ์ดเพื่อพลิกดูคำแปล แล้วเลือกว่าจำได้หรือยัง ความคืบหน้าจะบันทึกอัตโนมัติ',
    hintDismiss: 'ปิด',

    // Auth
    authWelcome: 'ยินดีต้อนรับ',
    authTagline: 'เข้าสู่ระบบเพื่อบันทึกความคืบหน้าของคุณในทุกอุปกรณ์',
    loginTab: 'เข้าสู่ระบบ', registerTab: 'สมัครสมาชิก',
    fieldName: 'ชื่อ-นามสกุล', fieldEmail: 'อีเมล', fieldPassword: 'รหัสผ่าน', fieldConfirm: 'ยืนยันรหัสผ่าน', fieldRole: 'ตำแหน่งของคุณ', fieldLanguage: 'ภาษาที่ต้องการ',
    roleTherapist: 'นักบำบัด', roleReception: 'พนักงานต้อนรับ', roleManager: 'ผู้จัดการ', roleOther: 'อื่นๆ',
    loginBtn: 'เข้าสู่ระบบ', registerBtn: 'สร้างบัญชี',
    forgotPassword: 'ลืมรหัสผ่าน?', forgotPasswordNote: 'กรุณาติดต่อผู้จัดการสปาของคุณเพื่อรีเซ็ตรหัสผ่าน',
    continueGuest: 'ใช้งานแบบผู้เยี่ยมชม',
    guestNote: 'ความคืบหน้าของผู้เยี่ยมชมจะไม่ถูกบันทึกไว้',
    demoNote: 'โหมดสาธิต — บัญชีจะถูกเก็บไว้บนอุปกรณ์นี้เท่านั้น ไม่ใช่บนเซิร์ฟเวอร์ที่ปลอดภัย',
    errRequired: 'กรุณากรอกข้อมูลให้ครบทุกช่อง',
    errPasswordMatch: 'รหัสผ่านไม่ตรงกัน',
    errPasswordShort: 'กรุณาใช้อย่างน้อย 6 ตัวอักษร',
    errEmailUsed: 'มีบัญชีที่ใช้อีเมลนี้อยู่แล้ว',
    errEmailFormat: 'กรุณากรอกอีเมลให้ถูกต้อง',
    errLoginFailed: 'ไม่พบบัญชีที่ตรงกับอีเมลและรหัสผ่านนี้',
    haveAccount: 'มีบัญชีอยู่แล้ว?', noAccount: 'ยังไม่มีบัญชี?',

    // Account
    accountHeading: 'บัญชีของคุณ',
    accountGuestName: 'ผู้เยี่ยมชม',
    accountStats: 'ความคืบหน้าของคุณ',
    accountLanguage: 'ภาษาของแอป',
    accountLogout: 'ออกจากระบบ',
    accountRegisterCta: 'สร้างบัญชีฟรีเพื่อบันทึกความคืบหน้านี้',
    streakDays: 'วันติดต่อกัน', streakDay: 'วันติดต่อกัน',
  }
};

const I18N = (() => {
  let current = (localStorage.getItem('spa_lang') === 'th') ? 'th' : 'en';

  function t(key){
    return (UI_STRINGS[current] && UI_STRINGS[current][key]) || UI_STRINGS.en[key] || key;
  }

  function applyStatic(){
    document.documentElement.setAttribute('lang', current);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });
    document.querySelectorAll('.lang-toggle').forEach(el => {
      el.querySelectorAll('.lang-opt').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === current);
      });
    });
  }

  return {
    get current(){ return current; },
    t,
    applyStatic,
    set(lang, rerender){
      current = (lang === 'th') ? 'th' : 'en';
      localStorage.setItem('spa_lang', current);
      applyStatic();
      if (typeof rerender === 'function') rerender();
    }
  };
})();
