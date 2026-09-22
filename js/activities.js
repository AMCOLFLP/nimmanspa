/* =========================================================================
   ACTIVITY BANKS + QUESTION GENERATORS
   Hand-written banks are randomly sampled each attempt, so a learner meets a
   different set every time. The generators below build questions directly
   from the 102-word VOCAB pool, which means the vocabulary activities never
   run out of material.
   ========================================================================= */

/* ---------- shared helpers ---------- */
function shuffle(arr){
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function sample(arr, n){ return shuffle(arr).slice(0, Math.min(n, arr.length)); }
/* Shared pool filter: category + difficulty level. `level` is 'all' or
   '1' | '2' | '3', matching the filter chips. */
function vocabPool(catId, level){
  let pool = (catId && catId !== 'all') ? VOCAB.filter(v => v.cat === catId) : VOCAB;
  if (level && level !== 'all') pool = pool.filter(v => String(v.level) === String(level));
  return pool;
}

function catLabel(catId){
  const c = VOCAB_CATEGORIES.find(c => c.id === catId);
  if (!c) return catId;
  return I18N.current === 'th' ? c.th : c.en;
}

/* =========================================================================
   MULTIPLE CHOICE BANK — 30 hand-written questions
   12 are sampled per attempt.
   ========================================================================= */
const SPA_MC_BANK = [
  {
    "q": "What does “exfoliation” mean?",
    "options": [
      "Adding oil to the skin",
      "Removing dead skin cells from the surface",
      "Cooling the treatment room",
      "Applying make-up"
    ],
    "correct": 1,
    "hit": "That’s exactly right — exfoliation removes dead skin cells.",
    "miss": "Exfoliation means removing dead skin cells from the surface.",
    "id": "spa-mc-001"
  },
  {
    "q": "A “contraindication” is best described as:",
    "options": [
      "A treatment guests love",
      "A reason a treatment should not go ahead",
      "A relaxing essential oil",
      "A type of massage stroke"
    ],
    "correct": 1,
    "hit": "Correct — always check for these before treating a guest.",
    "miss": "A contraindication is a reason a treatment shouldn’t go ahead.",
    "id": "spa-mc-002"
  },
  {
    "q": "Which is the most professional way to greet a guest?",
    "options": [
      "Hey, what do you want?",
      "Good afternoon, welcome to the spa. How may I help you today?",
      "You’re here, come in.",
      "Yeah, sit down."
    ],
    "correct": 1,
    "hit": "Warm and formal — a great first impression.",
    "miss": "A warm, formal greeting builds trust from the first moment.",
    "id": "spa-mc-003"
  },
  {
    "q": "“Effleurage” is best described as:",
    "options": [
      "A deep kneading technique",
      "A light, gliding massage stroke",
      "A type of facial mask",
      "A breathing exercise"
    ],
    "correct": 1,
    "hit": "Right — effleurage is the light, warming opening stroke.",
    "miss": "Effleurage is a light, gliding stroke used to open a massage.",
    "id": "spa-mc-004"
  },
  {
    "q": "What should you always ask before starting a treatment?",
    "options": [
      "What’s your favourite colour?",
      "Do you have any allergies or sensitivities?",
      "How much money do you have?",
      "Are you in a hurry?"
    ],
    "correct": 1,
    "hit": "Exactly — this is a key safety step, every time.",
    "miss": "Always check for allergies or sensitivities first, for safety.",
    "id": "spa-mc-005"
  },
  {
    "q": "Which is the most polite way to ask a guest to wait?",
    "options": [
      "Wait here.",
      "Please have a seat while we get everything ready for you.",
      "You need to wait.",
      "Hurry up and sit."
    ],
    "correct": 1,
    "hit": "Perfect — polite and reassuring.",
    "miss": "Adding warmth and a reason turns a command into an invitation.",
    "id": "spa-mc-006"
  },
  {
    "q": "“Lymphatic drainage” mainly helps with:",
    "options": [
      "Building muscle",
      "Reducing fluid retention",
      "Removing hair",
      "Tanning the skin"
    ],
    "correct": 1,
    "hit": "Correct — it encourages fluid to move naturally.",
    "miss": "Lymphatic drainage mainly helps reduce fluid retention.",
    "id": "spa-mc-007"
  },
  {
    "q": "After a facial, guests are usually advised to avoid:",
    "options": [
      "Drinking water",
      "Direct sun exposure",
      "Talking to staff",
      "Wearing shoes"
    ],
    "correct": 1,
    "hit": "Right — skin is more sun-sensitive after a facial.",
    "miss": "Guests should usually avoid direct sun exposure after a facial.",
    "id": "spa-mc-008"
  },
  {
    "q": "What is a “walk-in” guest?",
    "options": [
      "A guest who cancels",
      "A guest who arrives without a booking",
      "A guest who complains",
      "A regular member"
    ],
    "correct": 1,
    "hit": "Correct — walk-ins arrive without booking ahead.",
    "miss": "A walk-in is a guest who arrives without a prior booking.",
    "id": "spa-mc-009"
  },
  {
    "q": "“Sterilise” means to:",
    "options": [
      "Add fragrance",
      "Completely destroy bacteria and germs",
      "Warm up a towel",
      "Fold linens neatly"
    ],
    "correct": 1,
    "hit": "Right — sterilising fully destroys bacteria and germs.",
    "miss": "Sterilise means to completely destroy bacteria and germs.",
    "id": "spa-mc-010"
  },
  {
    "q": "A “cuticle” is:",
    "options": [
      "A type of nail polish",
      "The thin skin at the base of a nail",
      "A pedicure tool",
      "A hand cream"
    ],
    "correct": 1,
    "hit": "Correct — the cuticle sits at the base of the nail.",
    "miss": "A cuticle is the thin skin at the base of a nail.",
    "id": "spa-mc-011"
  },
  {
    "q": "What’s the best response to a guest’s “trigger point”?",
    "options": [
      "Ignore it and continue",
      "Apply gentle, focused pressure with care",
      "Avoid the whole massage",
      "Tell them to leave"
    ],
    "correct": 1,
    "hit": "Exactly — treat trigger points carefully and attentively.",
    "miss": "Apply gentle, focused pressure to a trigger point with care.",
    "id": "spa-mc-012"
  },
  {
    "q": "“VIP guest” refers to:",
    "options": [
      "Any first-time visitor",
      "A very important guest who may need extra care",
      "A guest who complained",
      "A staff member"
    ],
    "correct": 1,
    "hit": "Right — VIP guests often receive extra attention.",
    "miss": "A VIP guest is a very important guest needing extra care.",
    "id": "spa-mc-013"
  },
  {
    "q": "Complete: “Please take a seat in the ___ while you wait.”",
    "options": [
      "treatment room",
      "relaxation lounge",
      "stockroom",
      "car park"
    ],
    "correct": 1,
    "hit": "Correct — the relaxation lounge is exactly for waiting.",
    "miss": "The relaxation lounge is where waiting guests are seated.",
    "id": "spa-mc-014"
  },
  {
    "q": "A guest says the pressure is too firm. What do you say?",
    "options": [
      "That’s the normal pressure.",
      "Thank you for telling me — I’ll lighten it right away.",
      "Everyone finds it firm at first.",
      "You should try to relax more."
    ],
    "correct": 1,
    "hit": "Perfect — you validated the feedback and acted on it.",
    "miss": "Thank the guest and adjust immediately, rather than explaining it away.",
    "id": "spa-mc-015"
  },
  {
    "q": "What does “cross-contamination” mean?",
    "options": [
      "Mixing two essential oils",
      "Unwanted transfer of bacteria between tools or people",
      "Booking two guests at once",
      "Using cold and hot water together"
    ],
    "correct": 1,
    "hit": "Correct — this is why tools are sanitised between guests.",
    "miss": "Cross-contamination is the unwanted transfer of bacteria between tools, surfaces or people.",
    "id": "spa-mc-016"
  },
  {
    "q": "A guest arrives without a booking and you are fully booked. Best response?",
    "options": [
      "No, we’re full.",
      "I’m afraid we’re fully booked today, but may I find you a time this week?",
      "You should have booked.",
      "Come back later."
    ],
    "correct": 1,
    "hit": "Right — a refusal plus a helpful alternative.",
    "miss": "Offer a genuine alternative rather than a flat refusal.",
    "id": "spa-mc-017"
  },
  {
    "q": "“Complimentary” means:",
    "options": [
      "Very expensive",
      "Offered free of charge",
      "Requiring a deposit",
      "Only for members"
    ],
    "correct": 1,
    "hit": "Correct — complimentary means free of charge.",
    "miss": "Complimentary means offered free of charge.",
    "id": "spa-mc-018"
  },
  {
    "q": "Which phrase best invites feedback during a massage?",
    "options": [
      "Don’t talk, just relax.",
      "Let me know at any point if you’d like more or less pressure.",
      "This is how I always do it.",
      "It should feel fine."
    ],
    "correct": 1,
    "hit": "Exactly — it opens the door for honest feedback.",
    "miss": "Invite feedback openly so the guest feels able to speak up.",
    "id": "spa-mc-019"
  },
  {
    "q": "What is a “patch test” for?",
    "options": [
      "Testing the room temperature",
      "Checking for a skin reaction before full use of a product",
      "Testing a massage table",
      "Checking a guest’s posture"
    ],
    "correct": 1,
    "hit": "Right — it checks for a reaction before full application.",
    "miss": "A patch test checks for a skin reaction before a product is used fully.",
    "id": "spa-mc-020"
  },
  {
    "q": "“Threading” is a technique used for:",
    "options": [
      "Nail shaping",
      "Precise hair removal, often on eyebrows",
      "Deep tissue massage",
      "Applying serum"
    ],
    "correct": 1,
    "hit": "Correct — threading removes hair precisely with cotton thread.",
    "miss": "Threading is a precise hair removal technique, often used on eyebrows.",
    "id": "spa-mc-021"
  },
  {
    "q": "How should you explain a higher price?",
    "options": [
      "It’s expensive because it’s the best.",
      "This treatment includes an extended massage and a hydrating mask.",
      "Everything here costs a lot.",
      "You get what you pay for."
    ],
    "correct": 1,
    "hit": "Right — explain the value in concrete terms.",
    "miss": "Explain what the extra cost includes, rather than sounding defensive.",
    "id": "spa-mc-022"
  },
  {
    "q": "“Ambience” in a spa refers to:",
    "options": [
      "The price list",
      "The atmosphere created by lighting, music and scent",
      "The booking system",
      "The therapist’s uniform"
    ],
    "correct": 1,
    "hit": "Correct — ambience is the overall mood of the space.",
    "miss": "Ambience is the atmosphere created by lighting, music and scent.",
    "id": "spa-mc-023"
  },
  {
    "q": "A guest asks to skip the consultation form. Best reply?",
    "options": [
      "You have to, it’s the rule.",
      "This form helps us keep you safe — it only takes a moment.",
      "Fine, skip it.",
      "The manager will be angry."
    ],
    "correct": 1,
    "hit": "Right — explaining the reason works better than citing rules.",
    "miss": "Explain the safety reason behind the form rather than just insisting.",
    "id": "spa-mc-024"
  },
  {
    "q": "“Informed consent” means the guest has:",
    "options": [
      "Paid a deposit",
      "Agreed to treatment after understanding what it involves",
      "Signed the visitor book",
      "Joined the loyalty programme"
    ],
    "correct": 1,
    "hit": "Correct — understanding must come before agreement.",
    "miss": "Informed consent is agreement given after the guest understands the treatment.",
    "id": "spa-mc-025"
  },
  {
    "q": "Which is correct for ending a session warmly?",
    "options": [
      "Time’s up.",
      "That brings us to the end of your session — take your time getting up.",
      "You can go now.",
      "We’re finished, hurry please."
    ],
    "correct": 1,
    "hit": "Perfect — unhurried and warm.",
    "miss": "Close the session gently rather than rushing the guest out.",
    "id": "spa-mc-026"
  },
  {
    "q": "“Thermotherapy” uses:",
    "options": [
      "Cold air",
      "Heat, such as hot stones or warm wraps",
      "Bright light",
      "Salt water only"
    ],
    "correct": 1,
    "hit": "Correct — thermotherapy uses heat to relax muscles.",
    "miss": "Thermotherapy uses heat, such as hot stones or warm wraps.",
    "id": "spa-mc-027"
  },
  {
    "q": "Best way to offer a product without pressure?",
    "options": [
      "You need this for your skin.",
      "This would complement today’s treatment, if you’d like a closer look.",
      "Everyone buys this one.",
      "Your skin needs help."
    ],
    "correct": 1,
    "hit": "Right — optional, positive and free of judgement.",
    "miss": "Frame a product as optional and complementary, never as a criticism.",
    "id": "spa-mc-028"
  },
  {
    "q": "A “deposit” is:",
    "options": [
      "A discount for members",
      "A partial advance payment to secure a booking",
      "A tip for the therapist",
      "The final bill"
    ],
    "correct": 1,
    "hit": "Correct — it secures the booking in advance.",
    "miss": "A deposit is a partial advance payment that secures a booking.",
    "id": "spa-mc-029"
  },
  {
    "q": "On the phone, what should you say before checking the diary?",
    "options": [
      "Hold on.",
      "I’ll just place you on hold for a moment while I check.",
      "Wait, I’m busy.",
      "Call back later."
    ],
    "correct": 1,
    "hit": "Right — you explained the pause politely.",
    "miss": "Explain the pause politely before placing a caller on hold.",
    "id": "spa-mc-030"
  },
  {
    "q": "What does “draping” mean in a treatment room?",
    "options": [
      "Hanging decorations",
      "Covering a guest so only the working area is exposed",
      "Folding towels for storage",
      "Closing the curtains"
    ],
    "correct": 1,
    "hit": "Correct — draping protects a guest’s privacy throughout.",
    "miss": "Draping means covering a guest so only the area being worked on is exposed.",
    "id": "spa-mc-031"
  },
  {
    "q": "A guest asks something you don’t know. Best reply?",
    "options": [
      "I don’t know.",
      "That’s a good question — let me find out for you right away.",
      "Ask someone else.",
      "It’s not my job."
    ],
    "correct": 1,
    "hit": "Right — it keeps your credibility and promises action.",
    "miss": "Offer to find out rather than closing the conversation with “I don’t know.”",
    "id": "spa-mc-032"
  },
  {
    "q": "“Dehydrated skin” means skin that lacks:",
    "options": [
      "Oil",
      "Water",
      "Colour",
      "Elasticity only"
    ],
    "correct": 1,
    "hit": "Correct — dehydrated skin lacks water, even when oily.",
    "miss": "Dehydrated skin lacks water. Dry skin is what lacks oil.",
    "id": "spa-mc-033"
  },
  {
    "q": "What is a “no-show”?",
    "options": [
      "A guest who cancels in advance",
      "A guest who books but never arrives",
      "A treatment with no products",
      "An empty treatment room"
    ],
    "correct": 1,
    "hit": "Right — a no-show books but never arrives or cancels.",
    "miss": "A no-show is a guest who books but neither arrives nor cancels.",
    "id": "spa-mc-034"
  },
  {
    "q": "A guest speaks limited English. What works best?",
    "options": [
      "You don’t understand?",
      "Let me explain that again more slowly — stop me any time.",
      "Speak louder to them.",
      "Ask them to bring a translator."
    ],
    "correct": 1,
    "hit": "Exactly — it puts the work on your explanation, not their ability.",
    "miss": "Offer to explain again slowly. Never imply the fault is the guest’s.",
    "id": "spa-mc-035"
  },
  {
    "q": "“Turnaround” in spa work refers to:",
    "options": [
      "Turning a guest over on the table",
      "The time to clean and reset a room between guests",
      "Reversing a booking",
      "A refund"
    ],
    "correct": 1,
    "hit": "Correct — it’s the reset time between guests.",
    "miss": "Turnaround is the time needed to clean and reset a room between guests.",
    "id": "spa-mc-036"
  },
  {
    "q": "A guest falls asleep during the massage. You should:",
    "options": [
      "Wake them immediately and loudly",
      "Let them wake gently and say there’s no rush",
      "Leave the room without a word",
      "Tell them off for wasting time"
    ],
    "correct": 1,
    "hit": "Right — a gentle wake-up protects the calm you created.",
    "miss": "Wake the guest gently and reassure them there is no rush.",
    "id": "spa-mc-037"
  },
  {
    "q": "Which phrase best offers an add-on without pressure?",
    "options": [
      "You need a foot massage too.",
      "Would you like to add a foot massage? No problem at all either way.",
      "Everyone adds a foot massage.",
      "You should spend more."
    ],
    "correct": 1,
    "hit": "Perfect — a clear offer plus an easy way out.",
    "miss": "Offer the extra clearly and always give the guest an easy way to decline.",
    "id": "spa-mc-038"
  },
  {
    "q": "“Hypoallergenic” describes a product that is:",
    "options": [
      "Guaranteed never to cause an allergy",
      "Described as less likely to cause a reaction, but not allergy-free",
      "Only available on prescription",
      "Made without water"
    ],
    "correct": 1,
    "hit": "The label is not a guarantee: a reaction is still possible.",
    "miss": "Hypoallergenic does not mean allergy-free. Check the ingredients and the guest’s concerns.",
    "id": "spa-mc-039"
  },
  {
    "q": "You spot oil spilled on the floor. What is it?",
    "options": [
      "A slip hazard to clean immediately",
      "Someone else’s problem",
      "Normal and safe",
      "A sign to close the room"
    ],
    "correct": 0,
    "hit": "Right — clean a slip hazard straight away.",
    "miss": "Spilled oil is a slip hazard and should be cleaned immediately.",
    "id": "spa-mc-040"
  },
  {
    "q": "A colleague caused the problem. What do you say to the guest?",
    "options": [
      "That wasn’t me, it was the other therapist.",
      "I’m sorry that happened — let me put it right for you now.",
      "You should complain to them.",
      "Nothing, just continue."
    ],
    "correct": 1,
    "hit": "Exactly — guests see the spa as one team.",
    "miss": "Take shared responsibility. Blaming a colleague damages the guest’s trust.",
    "id": "spa-mc-041"
  },
  {
    "q": "Complete the workplace sentence: Is your left _____ comfortable?",
    "options": [
      "shoulder",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Is your left shoulder comfortable? — ไหล่ซ้ายของคุณสบายดีไหมคะ",
    "miss": "Use “shoulder”. ไหล่ซ้ายของคุณสบายดีไหมคะ",
    "vocabularyId": "spa-v-shoulder",
    "word": "Shoulder",
    "added": true,
    "id": "spa-mc-042"
  },
  {
    "q": "Complete the workplace sentence: Would you like more support for your _____ ?",
    "options": [
      "neck",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Would you like more support for your neck? — ต้องการที่รองคอเพิ่มไหมคะ",
    "miss": "Use “neck”. ต้องการที่รองคอเพิ่มไหมคะ",
    "vocabularyId": "spa-v-neck",
    "word": "Neck",
    "added": true,
    "id": "spa-mc-043"
  },
  {
    "q": "Complete the workplace sentence: Would you like a cushion behind your _____ ?",
    "options": [
      "back",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Would you like a cushion behind your back? — ต้องการหมอนรองหลังไหมคะ",
    "miss": "Use “back”. ต้องการหมอนรองหลังไหมคะ",
    "vocabularyId": "spa-v-back",
    "word": "Back",
    "added": true,
    "id": "spa-mc-044"
  },
  {
    "q": "Complete the workplace sentence: Please rest your _____ here.",
    "options": [
      "arm",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Please rest your arm here. — กรุณาวางแขนไว้ตรงนี้ค่ะ",
    "miss": "Use “arm”. กรุณาวางแขนไว้ตรงนี้ค่ะ",
    "vocabularyId": "spa-v-arm",
    "word": "Arm",
    "added": true,
    "id": "spa-mc-045"
  },
  {
    "q": "Complete the workplace sentence: Is this support comfortable under your _____ ?",
    "options": [
      "elbow",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Is this support comfortable under your elbow? — ที่รองใต้ข้อศอกนี้สบายดีไหมคะ",
    "miss": "Use “elbow”. ที่รองใต้ข้อศอกนี้สบายดีไหมคะ",
    "vocabularyId": "spa-v-elbow",
    "word": "Elbow",
    "added": true,
    "id": "spa-mc-046"
  },
  {
    "q": "Complete the workplace sentence: Please keep your _____ in a comfortable position.",
    "options": [
      "wrist",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Please keep your wrist in a comfortable position. — กรุณาวางข้อมือในท่าที่สบายค่ะ",
    "miss": "Use “wrist”. กรุณาวางข้อมือในท่าที่สบายค่ะ",
    "vocabularyId": "spa-v-wrist",
    "word": "Wrist",
    "added": true,
    "id": "spa-mc-047"
  },
  {
    "q": "Complete the workplace sentence: May I hold your _____ to support you?",
    "options": [
      "hand",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "May I hold your hand to support you? — ขอจับมือเพื่อช่วยพยุงได้ไหมคะ",
    "miss": "Use “hand”. ขอจับมือเพื่อช่วยพยุงได้ไหมคะ",
    "vocabularyId": "spa-v-hand",
    "word": "Hand",
    "added": true,
    "id": "spa-mc-048"
  },
  {
    "q": "Complete the workplace sentence: Please tell me if a _____ feels uncomfortable.",
    "options": [
      "finger",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Please tell me if a finger feels uncomfortable. — กรุณาบอกหากรู้สึกไม่สบายที่นิ้วมือค่ะ",
    "miss": "Use “finger”. กรุณาบอกหากรู้สึกไม่สบายที่นิ้วมือค่ะ",
    "vocabularyId": "spa-v-finger",
    "word": "Finger",
    "added": true,
    "id": "spa-mc-049"
  },
  {
    "q": "Complete the workplace sentence: Please let me know if your _____ feels uncomfortable.",
    "options": [
      "ankle",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Please let me know if your ankle feels uncomfortable. — กรุณาบอกหากรู้สึกไม่สบายที่ข้อเท้าค่ะ",
    "miss": "Use “ankle”. กรุณาบอกหากรู้สึกไม่สบายที่ข้อเท้าค่ะ",
    "vocabularyId": "spa-v-ankle",
    "word": "Ankle",
    "added": true,
    "id": "spa-mc-050"
  },
  {
    "q": "Complete the workplace sentence: Please place your _____ on this clean towel.",
    "options": [
      "foot",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Please place your foot on this clean towel. — กรุณาวางเท้าบนผ้าขนหนูสะอาดผืนนี้ค่ะ",
    "miss": "Use “foot”. กรุณาวางเท้าบนผ้าขนหนูสะอาดผืนนี้ค่ะ",
    "vocabularyId": "spa-v-foot",
    "word": "Foot",
    "added": true,
    "id": "spa-mc-051"
  },
  {
    "q": "Complete the workplace sentence: Does your _____ need more support?",
    "options": [
      "heel",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Does your heel need more support? — ต้องการที่รองส้นเท้าเพิ่มไหมคะ",
    "miss": "Use “heel”. ต้องการที่รองส้นเท้าเพิ่มไหมคะ",
    "vocabularyId": "spa-v-heel",
    "word": "Heel",
    "added": true,
    "id": "spa-mc-052"
  },
  {
    "q": "Complete the workplace sentence: Please tell me if any _____ feels sore.",
    "options": [
      "toe",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Please tell me if any toe feels sore. — กรุณาบอกหากเจ็บนิ้วเท้าใดนิ้วหนึ่งค่ะ",
    "miss": "Use “toe”. กรุณาบอกหากเจ็บนิ้วเท้าใดนิ้วหนึ่งค่ะ",
    "vocabularyId": "spa-v-toe",
    "word": "Toe",
    "added": true,
    "id": "spa-mc-053"
  },
  {
    "q": "Complete the workplace sentence: Is your _____ comfortable in this position?",
    "options": [
      "hip",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Is your hip comfortable in this position? — ท่านี้ทำให้สะโพกรู้สึกสบายไหมคะ",
    "miss": "Use “hip”. ท่านี้ทำให้สะโพกรู้สึกสบายไหมคะ",
    "vocabularyId": "spa-v-hip",
    "word": "Hip",
    "added": true,
    "id": "spa-mc-054"
  },
  {
    "q": "Complete the workplace sentence: May I place this towel near your _____ ?",
    "options": [
      "face",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "May I place this towel near your face? — ขอวางผ้าขนหนูใกล้ใบหน้าได้ไหมคะ",
    "miss": "Use “face”. ขอวางผ้าขนหนูใกล้ใบหน้าได้ไหมคะ",
    "vocabularyId": "spa-v-face",
    "word": "Face",
    "added": true,
    "id": "spa-mc-055"
  },
  {
    "q": "Complete the workplace sentence: Would you like me to avoid your _____ ?",
    "options": [
      "forehead",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Would you like me to avoid your forehead? — ต้องการให้หลีกเลี่ยงบริเวณหน้าผากไหมคะ",
    "miss": "Use “forehead”. ต้องการให้หลีกเลี่ยงบริเวณหน้าผากไหมคะ",
    "vocabularyId": "spa-v-forehead",
    "word": "Forehead",
    "added": true,
    "id": "spa-mc-056"
  },
  {
    "q": "Complete the workplace sentence: Would you like me to avoid your _____ ?",
    "options": [
      "scalp",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Would you like me to avoid your scalp? — ต้องการให้หลีกเลี่ยงบริเวณหนังศีรษะไหมคะ",
    "miss": "Use “scalp”. ต้องการให้หลีกเลี่ยงบริเวณหนังศีรษะไหมคะ",
    "vocabularyId": "spa-v-scalp",
    "word": "Scalp",
    "added": true,
    "id": "spa-mc-057"
  },
  {
    "q": "Complete the workplace sentence: Please tell me if your _____ feels itchy.",
    "options": [
      "skin",
      "pressure",
      "comfortable",
      "uncomfortable"
    ],
    "correct": 0,
    "hit": "Please tell me if your skin feels itchy. — กรุณาบอกหากรู้สึกคันผิวค่ะ",
    "miss": "Use “skin”. กรุณาบอกหากรู้สึกคันผิวค่ะ",
    "vocabularyId": "spa-v-skin",
    "word": "Skin",
    "added": true,
    "id": "spa-mc-058"
  },
  {
    "q": "Complete the workplace sentence: Is the _____ comfortable?",
    "options": [
      "pressure",
      "shoulder",
      "neck",
      "back"
    ],
    "correct": 0,
    "hit": "Is the pressure comfortable? — แรงกดสบายดีไหมคะ",
    "miss": "Use “pressure”. แรงกดสบายดีไหมคะ",
    "vocabularyId": "spa-v-pressure",
    "word": "Pressure",
    "added": true,
    "id": "spa-mc-059"
  },
  {
    "q": "Complete the workplace sentence: Are you _____ ?",
    "options": [
      "comfortable",
      "shoulder",
      "neck",
      "back"
    ],
    "correct": 0,
    "hit": "Are you comfortable? — คุณรู้สึกสบายดีไหมคะ",
    "miss": "Use “comfortable”. คุณรู้สึกสบายดีไหมคะ",
    "vocabularyId": "spa-v-comfortable",
    "word": "Comfortable",
    "added": true,
    "id": "spa-mc-060"
  },
  {
    "q": "Complete the workplace sentence: Please tell me if you feel _____ .",
    "options": [
      "uncomfortable",
      "shoulder",
      "neck",
      "back"
    ],
    "correct": 0,
    "hit": "Please tell me if you feel uncomfortable. — กรุณาบอกหากรู้สึกไม่สบายตัวค่ะ",
    "miss": "Use “uncomfortable”. กรุณาบอกหากรู้สึกไม่สบายตัวค่ะ",
    "vocabularyId": "spa-v-uncomfortable",
    "word": "Uncomfortable",
    "added": true,
    "id": "spa-mc-061"
  }
];

/* =========================================================================
   TRUE OR FALSE BANK — 20 statements, 12 sampled per attempt
   ========================================================================= */
const SPA_TRUE_FALSE_BANK = [
  {
    "statement": "You should always check for contraindications before a treatment begins.",
    "answer": true,
    "why": "Checking contraindications is a core safety step before every treatment.",
    "id": "spa-tf-001"
  },
  {
    "statement": "“Exfoliation” means adding moisture back into the skin.",
    "answer": false,
    "why": "Exfoliation removes dead skin cells. Hydrating adds moisture.",
    "id": "spa-tf-002"
  },
  {
    "statement": "It is professional to tell a late guest that they have less time now.",
    "answer": false,
    "why": "Reassure the guest instead: “we’ll make the best use of the time we have.”",
    "id": "spa-tf-003"
  },
  {
    "statement": "A guest should be asked to undress only to their own comfort level.",
    "answer": true,
    "why": "Guests must always keep control over their own privacy and comfort.",
    "id": "spa-tf-004"
  },
  {
    "statement": "Tools only need sanitising at the end of the working day.",
    "answer": false,
    "why": "Tools are sanitised between every guest to prevent cross-contamination.",
    "id": "spa-tf-005"
  },
  {
    "statement": "“Complimentary” means the service is offered free of charge.",
    "answer": true,
    "why": "Complimentary means free of charge, often as an included extra.",
    "id": "spa-tf-006"
  },
  {
    "statement": "Deep tissue massage uses lighter pressure than effleurage.",
    "answer": false,
    "why": "Effleurage is the light stroke; deep tissue works firmly into inner layers.",
    "id": "spa-tf-007"
  },
  {
    "statement": "Aftercare advice should be appropriate to the specific treatment and guest.",
    "answer": true,
    "why": "Use approved treatment-specific advice; do not give the same health advice to every guest.",
    "id": "spa-tf-008"
  },
  {
    "statement": "If a guest complains, you should explain why they are mistaken.",
    "answer": false,
    "why": "Start with empathy and offer to put things right, not with a defence.",
    "id": "spa-tf-009"
  },
  {
    "statement": "A patch test checks for a reaction before a product is fully applied.",
    "answer": true,
    "why": "That is exactly its purpose — a small trial application first.",
    "id": "spa-tf-010"
  },
  {
    "statement": "It is fine to blame a colleague if the spa is running late.",
    "answer": false,
    "why": "Stay professional: thank the guest for waiting without blaming anyone.",
    "id": "spa-tf-011"
  },
  {
    "statement": "A “walk-in” is a guest who arrives without a booking.",
    "answer": true,
    "why": "Correct — walk-ins have made no prior appointment.",
    "id": "spa-tf-012"
  },
  {
    "statement": "Sun exposure is recommended immediately after a facial.",
    "answer": false,
    "why": "Skin is more sun-sensitive after a facial, so direct sun should be avoided.",
    "id": "spa-tf-013"
  },
  {
    "statement": "You should ask guests whether they prefer conversation or quiet.",
    "answer": true,
    "why": "Asking respects the guest’s preferred experience during treatment.",
    "id": "spa-tf-014"
  },
  {
    "statement": "“Sterilise” and “sanitise” mean exactly the same thing.",
    "answer": false,
    "why": "Sterilising destroys all bacteria; sanitising reduces them to a safe level.",
    "id": "spa-tf-015"
  },
  {
    "statement": "A cuticle is the thin layer of skin at the base of the nail.",
    "answer": true,
    "why": "Correct — that is precisely what a cuticle is.",
    "id": "spa-tf-016"
  },
  {
    "statement": "It is acceptable to say “your skin looks bad” when recommending a product.",
    "answer": false,
    "why": "Never judge a guest’s appearance. Frame products as an optional complement.",
    "id": "spa-tf-017"
  },
  {
    "statement": "Reflexology focuses on pressure points in the feet, hands or ears.",
    "answer": true,
    "why": "Correct — reflexology works on these specific pressure-point areas.",
    "id": "spa-tf-018"
  },
  {
    "statement": "A deposit is money refunded to the guest after treatment.",
    "answer": false,
    "why": "A deposit is paid in advance to secure the booking.",
    "id": "spa-tf-019"
  },
  {
    "statement": "“Ambience” describes the atmosphere created by lighting, music and scent.",
    "answer": true,
    "why": "Correct — it is the overall mood of the space.",
    "id": "spa-tf-020"
  },
  {
    "statement": "Draping exists mainly to keep the treatment room tidy.",
    "answer": false,
    "why": "Draping protects the guest’s privacy and warmth, not tidiness.",
    "id": "spa-tf-021"
  },
  {
    "statement": "You should tell a guest when their therapist made a mistake, naming the colleague.",
    "answer": false,
    "why": "Apologise and fix it. Guests experience the spa as one team.",
    "id": "spa-tf-022"
  },
  {
    "statement": "Dehydrated skin lacks water, while dry skin lacks oil.",
    "answer": true,
    "why": "Correct — they are different conditions with different treatments.",
    "id": "spa-tf-023"
  },
  {
    "statement": "Prenatal massage uses the same positions and pressure as a standard massage.",
    "answer": false,
    "why": "Pregnancy-related treatments require an appropriately qualified practitioner and individual assessment; do not assume one position or technique suits everyone.",
    "id": "spa-tf-024"
  },
  {
    "statement": "A spilled bottle of oil on the floor is a slip hazard.",
    "answer": true,
    "why": "Correct — it should be cleaned immediately to prevent a fall.",
    "id": "spa-tf-025"
  },
  {
    "statement": "It is good practice to keep offering an add-on after a guest has declined.",
    "answer": false,
    "why": "Once a guest declines, accept it gracefully and move on.",
    "id": "spa-tf-026"
  },
  {
    "statement": "A shift handover should include guests’ pressure preferences.",
    "answer": true,
    "why": "Correct — that detail helps the next therapist look after them well.",
    "id": "spa-tf-027"
  },
  {
    "statement": "“Escalate” means to make a guest more upset.",
    "answer": false,
    "why": "To escalate is to pass a problem to a manager or someone more senior.",
    "id": "spa-tf-028"
  }
];

/* =========================================================================
   ERROR CORRECTION BANK — 12 items, 8 sampled per attempt
   The learner reads a blunt line and picks the professional rewrite.
   ========================================================================= */
const SPA_ERROR_BANK = [
  {
    "wrong": "Wait here.",
    "options": [
      "Please have a seat while we prepare your room.",
      "Stand there please.",
      "You wait now."
    ],
    "correct": 0,
    "why": "A warm invitation with a reason, rather than a bare command.",
    "id": "spa-error-001"
  },
  {
    "wrong": "You don’t have allergies, right?",
    "options": [
      "Could you tell me about any allergies or sensitivities?",
      "No allergies then?",
      "You are fine, correct?"
    ],
    "correct": 0,
    "why": "An open question doesn’t assume the answer, so guests disclose more.",
    "id": "spa-error-002"
  },
  {
    "wrong": "Time’s up, you need to leave.",
    "options": [
      "That brings us to the end of your session — take your time getting up.",
      "We are finished now.",
      "Please leave the room."
    ],
    "correct": 0,
    "why": "Closes the session gently instead of rushing the guest.",
    "id": "spa-error-003"
  },
  {
    "wrong": "No, we’re full.",
    "options": [
      "I’m afraid today is fully booked, but may I find you a time this week?",
      "We have nothing.",
      "Try another spa."
    ],
    "correct": 0,
    "why": "A refusal paired with a genuinely helpful alternative.",
    "id": "spa-error-004"
  },
  {
    "wrong": "It’s not hot.",
    "options": [
      "The temperature is gentle and completely safe for your skin.",
      "Don’t worry about it.",
      "It is normal temperature."
    ],
    "correct": 0,
    "why": "Reassures with positive description rather than denying the concern.",
    "id": "spa-error-005"
  },
  {
    "wrong": "That’s normal pressure, everyone gets the same.",
    "options": [
      "Thank you for telling me — I’ll adjust that right away.",
      "It is standard pressure.",
      "You will get used to it."
    ],
    "correct": 0,
    "why": "Validates the feedback and acts on it immediately.",
    "id": "spa-error-006"
  },
  {
    "wrong": "You should buy this, your skin looks bad.",
    "options": [
      "This would complement today’s treatment, if you’d like a closer look.",
      "Your skin needs this product.",
      "You must buy this one."
    ],
    "correct": 0,
    "why": "Removes judgement and makes the suggestion optional.",
    "id": "spa-error-007"
  },
  {
    "wrong": "You have to fill this in, it’s the rule.",
    "options": [
      "This form helps us keep you safe — it only takes a moment.",
      "It is required by the spa.",
      "No form, no treatment."
    ],
    "correct": 0,
    "why": "Explains the reason behind the rule rather than only citing it.",
    "id": "spa-error-008"
  },
  {
    "wrong": "The therapist before you took too long.",
    "options": [
      "Thank you for your patience — we’re running a few minutes behind today.",
      "It is not my fault.",
      "The last guest was slow."
    ],
    "correct": 0,
    "why": "Stays professional without blaming a colleague in front of a guest.",
    "id": "spa-error-009"
  },
  {
    "wrong": "Take your clothes off and lie down.",
    "options": [
      "Please undress to your comfort level and lie face-down under the towel.",
      "Remove clothing now.",
      "Undress and wait."
    ],
    "correct": 0,
    "why": "Respects privacy and gives the guest control.",
    "id": "spa-error-010"
  },
  {
    "wrong": "We don’t do discounts.",
    "options": [
      "I can’t reduce today’s price, but may I tell you about our loyalty programme?",
      "No discounts here.",
      "That is the price."
    ],
    "correct": 0,
    "why": "Redirects to a real, positive alternative instead of a flat no.",
    "id": "spa-error-011"
  },
  {
    "wrong": "There’s nothing wrong with it.",
    "options": [
      "Let’s talk through what you were hoping for, so we can make it right.",
      "It looks fine to me.",
      "That is the normal result."
    ],
    "correct": 0,
    "why": "Opens a real conversation instead of dismissing the guest.",
    "id": "spa-error-012"
  },
  {
    "wrong": "I don’t know.",
    "options": [
      "That’s a good question — let me find out for you right away.",
      "Nobody knows that.",
      "Ask someone else."
    ],
    "correct": 0,
    "why": "Promises action and keeps your credibility intact.",
    "id": "spa-error-013"
  },
  {
    "wrong": "You don’t understand?",
    "options": [
      "Let me explain that again more slowly — please stop me any time.",
      "I already told you.",
      "Listen carefully this time."
    ],
    "correct": 0,
    "why": "Puts the responsibility on your explanation, never on the guest.",
    "id": "spa-error-014"
  },
  {
    "wrong": "Wake up, we’re finished!",
    "options": [
      "Take your time waking up — there’s no rush at all.",
      "Time to get up now.",
      "You fell asleep again."
    ],
    "correct": 0,
    "why": "A gentle wake-up protects the calm the treatment created.",
    "id": "spa-error-015"
  },
  {
    "wrong": "Put your phone away.",
    "options": [
      "Would you like me to pause while you finish your call?",
      "No phones in here.",
      "You are disturbing the treatment."
    ],
    "correct": 0,
    "why": "A courtesy works faster than an instruction, and keeps the mood calm.",
    "id": "spa-error-016"
  },
  {
    "wrong": "That wasn’t me, it was the other therapist.",
    "options": [
      "I’m sorry that happened — let me put it right for you now.",
      "You should talk to her about it.",
      "It was not my shift."
    ],
    "correct": 0,
    "why": "Guests see the spa as one team; deflecting blame breaks their trust.",
    "id": "spa-error-017"
  },
  {
    "wrong": "No, we can’t do that.",
    "options": [
      "For your safety I’d recommend against that today — may I suggest an alternative?",
      "That is not allowed.",
      "It is against the rules."
    ],
    "correct": 0,
    "why": "Grounds a refusal in the guest’s wellbeing and offers a way forward.",
    "id": "spa-error-018"
  }
];

/* =========================================================================
   LISTEN & CHOOSE BANK — 18 rounds, 10 sampled per attempt
   ========================================================================= */
const SPA_LISTEN_BANK = [
  {
    "target": "Acupressure",
    "distractors": [
      "Aromatherapy",
      "Reflexology",
      "Sanitise"
    ],
    "id": "spa-listen-001"
  },
  {
    "target": "Exfoliation",
    "distractors": [
      "Extraction",
      "Hydrotherapy",
      "Rejuvenating"
    ],
    "id": "spa-listen-002"
  },
  {
    "target": "Contraindication",
    "distractors": [
      "Consultation form",
      "Cross-contamination",
      "Cancellation policy"
    ],
    "id": "spa-listen-003"
  },
  {
    "target": "Aromatherapy",
    "distractors": [
      "Acupressure",
      "Thermotherapy",
      "Cryotherapy"
    ],
    "id": "spa-listen-004"
  },
  {
    "target": "Rejuvenating",
    "distractors": [
      "Detoxifying",
      "Hydrating",
      "Anti-ageing"
    ],
    "id": "spa-listen-005"
  },
  {
    "target": "Lymphatic drainage",
    "distractors": [
      "Deep tissue",
      "Trigger point",
      "Sports massage"
    ],
    "id": "spa-listen-006"
  },
  {
    "target": "Therapeutic",
    "distractors": [
      "Complimentary",
      "Thermotherapy",
      "Wellbeing"
    ],
    "id": "spa-listen-007"
  },
  {
    "target": "Microdermabrasion",
    "distractors": [
      "Exfoliation",
      "Extraction",
      "Chemical peel"
    ],
    "id": "spa-listen-008"
  },
  {
    "target": "Reflexology",
    "distractors": [
      "Acupressure",
      "Petrissage",
      "Effleurage"
    ],
    "id": "spa-listen-009"
  },
  {
    "target": "Complimentary",
    "distractors": [
      "Consultation form",
      "Cancellation policy",
      "Membership"
    ],
    "id": "spa-listen-010"
  },
  {
    "target": "Petrissage",
    "distractors": [
      "Effleurage",
      "Tapotement",
      "Compression"
    ],
    "id": "spa-listen-011"
  },
  {
    "target": "Tapotement",
    "distractors": [
      "Petrissage",
      "Friction",
      "Kneading"
    ],
    "id": "spa-listen-012"
  },
  {
    "target": "Hydrotherapy",
    "distractors": [
      "Thermotherapy",
      "Cryotherapy",
      "Aromatherapy"
    ],
    "id": "spa-listen-013"
  },
  {
    "target": "Cuticle",
    "distractors": [
      "Callus",
      "Blemish",
      "Pore"
    ],
    "id": "spa-listen-014"
  },
  {
    "target": "Sterilise",
    "distractors": [
      "Sanitise",
      "Disposable",
      "Detox"
    ],
    "id": "spa-listen-015"
  },
  {
    "target": "Reschedule",
    "distractors": [
      "Referral",
      "Reception",
      "Rejuvenating"
    ],
    "id": "spa-listen-016"
  },
  {
    "target": "Collagen",
    "distractors": [
      "Serum",
      "Moisturiser",
      "Toning"
    ],
    "id": "spa-listen-017"
  },
  {
    "target": "Metabolism",
    "distractors": [
      "Mindfulness",
      "Circulation",
      "Posture"
    ],
    "id": "spa-listen-018"
  },
  {
    "target": "Hypoallergenic",
    "distractors": [
      "Fragrance-free",
      "Disposable",
      "Contraindication"
    ],
    "id": "spa-listen-019"
  },
  {
    "target": "Draping",
    "distractors": [
      "Bolster",
      "Kneading",
      "Toning"
    ],
    "id": "spa-listen-020"
  },
  {
    "target": "Turnaround",
    "distractors": [
      "Stocktake",
      "Restock",
      "Rota"
    ],
    "id": "spa-listen-021"
  },
  {
    "target": "Dehydrated skin",
    "distractors": [
      "Congested skin",
      "Combination skin",
      "Blemish"
    ],
    "id": "spa-listen-022"
  },
  {
    "target": "Itinerary",
    "distractors": [
      "Testimonial",
      "Membership",
      "Referral"
    ],
    "id": "spa-listen-023"
  },
  {
    "target": "Escalate",
    "distractors": [
      "Reschedule",
      "Restock",
      "Sanitise"
    ],
    "id": "spa-listen-024"
  },
  {
    "target": "Shoulder",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-shoulder",
    "added": true,
    "id": "spa-listen-025"
  },
  {
    "target": "Neck",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-neck",
    "added": true,
    "id": "spa-listen-026"
  },
  {
    "target": "Back",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-back",
    "added": true,
    "id": "spa-listen-027"
  },
  {
    "target": "Lower back",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-lower-back",
    "added": true,
    "id": "spa-listen-028"
  },
  {
    "target": "Arm",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-arm",
    "added": true,
    "id": "spa-listen-029"
  },
  {
    "target": "Elbow",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-elbow",
    "added": true,
    "id": "spa-listen-030"
  },
  {
    "target": "Wrist",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-wrist",
    "added": true,
    "id": "spa-listen-031"
  },
  {
    "target": "Hand",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-hand",
    "added": true,
    "id": "spa-listen-032"
  },
  {
    "target": "Finger",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-finger",
    "added": true,
    "id": "spa-listen-033"
  },
  {
    "target": "Leg",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-leg",
    "added": true,
    "id": "spa-listen-034"
  },
  {
    "target": "Knee",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-knee",
    "added": true,
    "id": "spa-listen-035"
  },
  {
    "target": "Ankle",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-ankle",
    "added": true,
    "id": "spa-listen-036"
  },
  {
    "target": "Foot",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-foot",
    "added": true,
    "id": "spa-listen-037"
  },
  {
    "target": "Heel",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-heel",
    "added": true,
    "id": "spa-listen-038"
  },
  {
    "target": "Toe",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-toe",
    "added": true,
    "id": "spa-listen-039"
  },
  {
    "target": "Hip",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-hip",
    "added": true,
    "id": "spa-listen-040"
  },
  {
    "target": "Face",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-face",
    "added": true,
    "id": "spa-listen-041"
  },
  {
    "target": "Forehead",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-forehead",
    "added": true,
    "id": "spa-listen-042"
  },
  {
    "target": "Scalp",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-scalp",
    "added": true,
    "id": "spa-listen-043"
  },
  {
    "target": "Skin",
    "distractors": [
      "Pressure",
      "Comfortable",
      "Uncomfortable"
    ],
    "vocabularyId": "spa-v-skin",
    "added": true,
    "id": "spa-listen-044"
  },
  {
    "target": "Pressure",
    "distractors": [
      "Shoulder",
      "Neck",
      "Back"
    ],
    "vocabularyId": "spa-v-pressure",
    "added": true,
    "id": "spa-listen-045"
  },
  {
    "target": "Comfortable",
    "distractors": [
      "Shoulder",
      "Neck",
      "Back"
    ],
    "vocabularyId": "spa-v-comfortable",
    "added": true,
    "id": "spa-listen-046"
  },
  {
    "target": "Uncomfortable",
    "distractors": [
      "Shoulder",
      "Neck",
      "Back"
    ],
    "vocabularyId": "spa-v-uncomfortable",
    "added": true,
    "id": "spa-listen-047"
  },
  {
    "target": "Gentle",
    "distractors": [
      "Shoulder",
      "Neck",
      "Back"
    ],
    "vocabularyId": "spa-v-gentle",
    "added": true,
    "id": "spa-listen-048"
  },
  {
    "target": "Firm",
    "distractors": [
      "Shoulder",
      "Neck",
      "Back"
    ],
    "vocabularyId": "spa-v-firm",
    "added": true,
    "id": "spa-listen-049"
  },
  {
    "target": "Lighter",
    "distractors": [
      "Shoulder",
      "Neck",
      "Back"
    ],
    "vocabularyId": "spa-v-lighter",
    "added": true,
    "id": "spa-listen-050"
  },
  {
    "target": "Warm",
    "distractors": [
      "Shoulder",
      "Neck",
      "Back"
    ],
    "vocabularyId": "spa-v-warm",
    "added": true,
    "id": "spa-listen-051"
  },
  {
    "target": "Cool",
    "distractors": [
      "Shoulder",
      "Neck",
      "Back"
    ],
    "vocabularyId": "spa-v-cool",
    "added": true,
    "id": "spa-listen-052"
  },
  {
    "target": "Hot",
    "distractors": [
      "Shoulder",
      "Neck",
      "Back"
    ],
    "vocabularyId": "spa-v-hot",
    "added": true,
    "id": "spa-listen-053"
  },
  {
    "target": "Cold",
    "distractors": [
      "Shoulder",
      "Neck",
      "Back"
    ],
    "vocabularyId": "spa-v-cold",
    "added": true,
    "id": "spa-listen-054"
  }
];

/* =========================================================================
   PHRASE BUILDER BANK — 18 sentences, 8 sampled per attempt
   ========================================================================= */
const SPA_BUILDER_BANK = [
  {
    "th": "วันนี้มีอะไรให้ช่วยไหมคะ",
    "sentence": "How may I assist you today?",
    "id": "spa-builder-001"
  },
  {
    "th": "เชิญนั่งพักผ่อนตามสบายค่ะ",
    "sentence": "Please have a seat and relax.",
    "id": "spa-builder-002"
  },
  {
    "th": "แรงกดแน่นเกินไปไหมคะ",
    "sentence": "Is the pressure too firm?",
    "id": "spa-builder-003"
  },
  {
    "th": "ต้องการน้ำดื่มไหมคะ",
    "sentence": "Would you like some water?",
    "id": "spa-builder-004"
  },
  {
    "th": "ขอบคุณที่เลือกใช้บริการเราวันนี้ค่ะ",
    "sentence": "Thank you for choosing us today.",
    "id": "spa-builder-005"
  },
  {
    "th": "ดิฉันจะปรับให้ทันทีค่ะ",
    "sentence": "I will adjust that right away.",
    "id": "spa-builder-006"
  },
  {
    "th": "การนัดหมายของคุณยืนยันแล้วสำหรับวันเสาร์",
    "sentence": "Your appointment is confirmed for Saturday.",
    "id": "spa-builder-007"
  },
  {
    "th": "เป็นเกียรติที่ได้ดูแลคุณค่ะ",
    "sentence": "It was a pleasure to help you.",
    "id": "spa-builder-008"
  },
  {
    "th": "อุณหภูมิห้องสบายไหมคะ",
    "sentence": "Is the room temperature comfortable?",
    "id": "spa-builder-009"
  },
  {
    "th": "นักบำบัดของคุณจะมาถึงในอีกสักครู่",
    "sentence": "Your therapist will be with you shortly.",
    "id": "spa-builder-010"
  },
  {
    "th": "คุณมีอาการแพ้อะไรบ้างไหมคะ",
    "sentence": "Do you have any allergies?",
    "id": "spa-builder-011"
  },
  {
    "th": "กรุณาหลีกเลี่ยงแสงแดดโดยตรง",
    "sentence": "Please avoid direct sun exposure.",
    "id": "spa-builder-012"
  },
  {
    "th": "ขอรับชื่อและเบอร์ติดต่อได้ไหมคะ",
    "sentence": "May I take your name and number?",
    "id": "spa-builder-013"
  },
  {
    "th": "ขอบคุณที่แจ้งเรื่องนี้ให้เราทราบ",
    "sentence": "Thank you for bringing this to our attention.",
    "id": "spa-builder-014"
  },
  {
    "th": "ทรีตเมนต์นี้ใช้เวลาหกสิบนาที",
    "sentence": "This treatment takes sixty minutes.",
    "id": "spa-builder-015"
  },
  {
    "th": "อยากจองคิวครั้งต่อไปไหมคะ",
    "sentence": "Would you like to book your next appointment?",
    "id": "spa-builder-016"
  },
  {
    "th": "บอกได้เลยถ้าอยากพัก",
    "sentence": "Let me know if you would like a break.",
    "id": "spa-builder-017"
  },
  {
    "th": "หวังว่าจะได้พบคุณอีกเร็วๆ นี้",
    "sentence": "We hope to see you again soon.",
    "id": "spa-builder-018"
  },
  {
    "th": "ขอไปหาคำตอบให้ทันทีนะคะ",
    "sentence": "Let me find out for you right away.",
    "id": "spa-builder-019"
  },
  {
    "th": "ขออธิบายอีกครั้งแบบช้าๆ นะคะ",
    "sentence": "Let me explain that again more slowly.",
    "id": "spa-builder-020"
  },
  {
    "th": "ค่อยๆ ตื่นนะคะ ไม่ต้องรีบ",
    "sentence": "Take your time. There is no rush.",
    "id": "spa-builder-021"
  },
  {
    "th": "สนใจเพิ่มนวดเท้าไหมคะ",
    "sentence": "Would you like to add a foot massage?",
    "id": "spa-builder-022"
  },
  {
    "th": "ห้องสองต้องจัดใหม่ก่อนแขกคนต่อไป",
    "sentence": "Room two needs a turnaround before the next guest.",
    "id": "spa-builder-023"
  },
  {
    "th": "ไฮโปอัลเลอร์เจนิกไม่ได้หมายความว่าจะไม่เกิดอาการแพ้",
    "sentence": "Hypoallergenic does not mean allergy-free.",
    "id": "spa-builder-024"
  },
  {
    "th": "กรุณาถอดเสื้อผ้าเท่าที่คุณสบายใจ",
    "sentence": "Please undress to your comfort level.",
    "id": "spa-builder-025"
  },
  {
    "th": "ขออภัยที่เกิดเรื่องนี้ขึ้นค่ะ",
    "sentence": "I am sorry that happened.",
    "id": "spa-builder-026"
  },
  {
    "th": "สวัสดีค่ะ มีอะไรให้ช่วยไหมคะ",
    "sentence": "Hello. How can I help?",
    "phraseId": "spa-p-everyday-011",
    "added": true,
    "id": "spa-builder-027"
  },
  {
    "th": "ได้ค่ะ จะตรวจสอบให้นะคะ",
    "sentence": "Of course. I will check for you.",
    "phraseId": "spa-p-everyday-012",
    "added": true,
    "id": "spa-builder-028"
  },
  {
    "th": "ไม่ต้องรีบนะคะ",
    "sentence": "Please take your time.",
    "phraseId": "spa-p-everyday-013",
    "added": true,
    "id": "spa-builder-029"
  },
  {
    "th": "จะกลับมาสักครู่นะคะ",
    "sentence": "I will be right back.",
    "phraseId": "spa-p-everyday-014",
    "added": true,
    "id": "spa-builder-030"
  },
  {
    "th": "ขอบคุณที่แจ้งให้ทราบค่ะ",
    "sentence": "Thank you for telling me.",
    "phraseId": "spa-p-everyday-015",
    "added": true,
    "id": "spa-builder-031"
  },
  {
    "th": "ได้นัดหมายไว้ไหมคะ",
    "sentence": "Do you have an appointment?",
    "phraseId": "spa-p-welcome-009",
    "added": true,
    "id": "spa-builder-032"
  },
  {
    "th": "ขอทราบชื่อได้ไหมคะ",
    "sentence": "May I have your name, please?",
    "phraseId": "spa-p-welcome-010",
    "added": true,
    "id": "spa-builder-033"
  },
  {
    "th": "เชิญนั่งค่ะ",
    "sentence": "Please have a seat.",
    "phraseId": "spa-p-welcome-011",
    "added": true,
    "id": "spa-builder-034"
  },
  {
    "th": "นี่คือรายการทรีตเมนต์ของเราค่ะ",
    "sentence": "Here is our treatment menu.",
    "phraseId": "spa-p-welcome-012",
    "added": true,
    "id": "spa-builder-035"
  },
  {
    "th": "มาใช้บริการครั้งแรกใช่ไหมคะ",
    "sentence": "Is this your first visit?",
    "phraseId": "spa-p-welcome-013",
    "added": true,
    "id": "spa-builder-036"
  },
  {
    "th": "กรุณาตามมาค่ะ",
    "sentence": "Please follow me.",
    "phraseId": "spa-p-guiding-008",
    "added": true,
    "id": "spa-builder-037"
  },
  {
    "th": "ห้องเปลี่ยนเสื้อผ้าอยู่ทางนี้ค่ะ",
    "sentence": "The changing room is this way.",
    "phraseId": "spa-p-guiding-009",
    "added": true,
    "id": "spa-builder-038"
  },
  {
    "th": "กรุณาระวังขั้นบันไดค่ะ",
    "sentence": "Please watch your step.",
    "phraseId": "spa-p-guiding-010",
    "added": true,
    "id": "spa-builder-039"
  },
  {
    "th": "ต้องการให้ช่วยถือกระเป๋าไหมคะ",
    "sentence": "Would you like help with your bag?",
    "phraseId": "spa-p-guiding-011",
    "added": true,
    "id": "spa-builder-040"
  },
  {
    "th": "วางรองเท้าไว้ตรงนี้ได้ค่ะ",
    "sentence": "You can leave your shoes here.",
    "phraseId": "spa-p-guiding-012",
    "added": true,
    "id": "spa-builder-041"
  },
  {
    "th": "มีอาการแพ้อะไรไหมคะ",
    "sentence": "Do you have any allergies?",
    "phraseId": "spa-p-consultation-009",
    "added": true,
    "id": "spa-builder-042"
  },
  {
    "th": "มีบริเวณไหนที่ควรหลีกเลี่ยงไหมคะ",
    "sentence": "Is there any area I should avoid?",
    "phraseId": "spa-p-consultation-010",
    "added": true,
    "id": "spa-builder-043"
  },
  {
    "th": "ขอถามสักเล็กน้อยก่อนได้ไหมคะ",
    "sentence": "May I ask you a few questions first?",
    "phraseId": "spa-p-consultation-011",
    "added": true,
    "id": "spa-builder-044"
  },
  {
    "th": "ต้องการความช่วยเหลือในการกรอกแบบฟอร์มไหมคะ",
    "sentence": "Would you like help with the form?",
    "phraseId": "spa-p-consultation-012",
    "added": true,
    "id": "spa-builder-045"
  },
  {
    "th": "มีคำถามก่อนเริ่มไหมคะ",
    "sentence": "Do you have any questions before we begin?",
    "phraseId": "spa-p-consultation-013",
    "added": true,
    "id": "spa-builder-046"
  }
];

/* =========================================================================
   FILL-IN-THE-BLANK DIALOGUES — 3 complete scripts
   ========================================================================= */
const SPA_FILL_DIALOGUES = [
  {
    "id": "arrival",
    "title": "Front desk & treatment room",
    "th": "หน้าเคาน์เตอร์และห้องทรีตเมนต์",
    "lines": [
      {
        "speaker": "Front desk",
        "before": "Good afternoon, and welcome to Willow & Stone. How may I ",
        "after": " you today?",
        "options": [
          "assist",
          "ignore",
          "delay",
          "question"
        ],
        "correct": "assist"
      },
      {
        "speaker": "Guest",
        "before": "Hi, I have a two o’clock booking for a deep tissue massage.",
        "after": "",
        "fixed": true
      },
      {
        "speaker": "Front desk",
        "before": "Let me check… yes, I have that ",
        "after": " under your name. Could you fill out this short consultation form for us first?",
        "options": [
          "booking",
          "complaint",
          "bill",
          "mistake"
        ],
        "correct": "booking"
      },
      {
        "speaker": "Guest",
        "before": "Of course. I should mention I have some lower back pain.",
        "after": "",
        "fixed": true
      },
      {
        "speaker": "Front desk",
        "before": "Thank you for telling us. The qualified practitioner will ",
        "after": " whether this treatment is suitable for you.",
        "options": [
          "check",
          "guarantee",
          "cancel",
          "forget"
        ],
        "correct": "check"
      },
      {
        "speaker": "Therapist",
        "before": "Hello, I’m Maya, I’ll be your therapist today. Is the room temperature ",
        "after": " for you?",
        "options": [
          "comfortable",
          "expensive",
          "loud",
          "early"
        ],
        "correct": "comfortable"
      },
      {
        "speaker": "Therapist",
        "before": "Wonderful. Please let me know at any point if you’d like the pressure ",
        "after": " or lighter.",
        "options": [
          "firmer",
          "colder",
          "shorter",
          "cheaper"
        ],
        "correct": "firmer"
      },
      {
        "speaker": "Therapist",
        "before": "That is the end of your session. Please follow the ",
        "after": " instructions for your treatment.",
        "options": [
          "aftercare",
          "payment",
          "booking",
          "laundry"
        ],
        "correct": "aftercare"
      },
      {
        "speaker": "Guest",
        "before": "I will, thank you — that was wonderful.",
        "after": "",
        "fixed": true
      },
      {
        "speaker": "Front desk",
        "before": "It was a pleasure. We hope to ",
        "after": " you again soon — enjoy the rest of your day.",
        "options": [
          "see",
          "bill",
          "rush",
          "avoid"
        ],
        "correct": "see"
      }
    ],
    "trainingExample": true
  },
  {
    "id": "phone",
    "title": "Booking by phone",
    "th": "การจองทางโทรศัพท์",
    "lines": [
      {
        "speaker": "Front desk",
        "before": "Good morning, Willow & Stone Spa, this is Praew speaking. How can I ",
        "after": " you?",
        "options": [
          "help",
          "avoid",
          "ignore",
          "rush"
        ],
        "correct": "help"
      },
      {
        "speaker": "Guest",
        "before": "Hi, I’d like to book a facial for this Friday, please.",
        "after": "",
        "fixed": true
      },
      {
        "speaker": "Front desk",
        "before": "Of course — would you like me to ",
        "after": " our availability for Friday afternoon?",
        "options": [
          "check",
          "cancel",
          "forget",
          "lose"
        ],
        "correct": "check"
      },
      {
        "speaker": "Guest",
        "before": "Yes please, around two o’clock if possible.",
        "after": "",
        "fixed": true
      },
      {
        "speaker": "Front desk",
        "before": "You’re in luck, two o’clock is ",
        "after": ". Can I take your name and phone number?",
        "options": [
          "free",
          "expensive",
          "closed",
          "late"
        ],
        "correct": "free"
      },
      {
        "speaker": "Guest",
        "before": "It’s Somchai, and my number is 08X-XXX-XXXX.",
        "after": "",
        "fixed": true
      },
      {
        "speaker": "Front desk",
        "before": "Thank you. I’ve sent a ",
        "after": " to your email — please check that everything looks correct.",
        "options": [
          "confirmation",
          "complaint",
          "invoice",
          "warning"
        ],
        "correct": "confirmation"
      },
      {
        "speaker": "Front desk",
        "before": "We ask for a small deposit to ",
        "after": " the booking — is that alright with you?",
        "options": [
          "secure",
          "delete",
          "refuse",
          "postpone"
        ],
        "correct": "secure"
      },
      {
        "speaker": "Guest",
        "before": "That’s fine, no problem.",
        "after": "",
        "fixed": true
      },
      {
        "speaker": "Front desk",
        "before": "Wonderful. Thank you for ",
        "after": ", and we look forward to seeing you on Friday.",
        "options": [
          "calling",
          "shouting",
          "complaining",
          "leaving"
        ],
        "correct": "calling"
      }
    ],
    "trainingExample": true
  },
  {
    "id": "concern",
    "title": "Handling a guest concern",
    "th": "การจัดการข้อร้องเรียนของแขก",
    "lines": [
      {
        "speaker": "Guest",
        "before": "Excuse me — the massage was much lighter than I expected.",
        "after": "",
        "fixed": true
      },
      {
        "speaker": "Therapist",
        "before": "I’m so ",
        "after": " to hear that. Thank you for telling me.",
        "options": [
          "sorry",
          "busy",
          "pleased",
          "tired"
        ],
        "correct": "sorry"
      },
      {
        "speaker": "Therapist",
        "before": "Would you like me to ",
        "after": " the pressure for the remaining time?",
        "options": [
          "increase",
          "cancel",
          "ignore",
          "shorten"
        ],
        "correct": "increase"
      },
      {
        "speaker": "Guest",
        "before": "Yes, that would be better. I did ask for deep tissue.",
        "after": "",
        "fixed": true
      },
      {
        "speaker": "Therapist",
        "before": "You did, and I should have ",
        "after": " with you sooner. Let’s adjust it now.",
        "options": [
          "checked",
          "argued",
          "finished",
          "delayed"
        ],
        "correct": "checked"
      },
      {
        "speaker": "Front desk",
        "before": "I understand your ",
        "after": " completely, and I’ll speak with my manager right away.",
        "options": [
          "frustration",
          "excitement",
          "booking",
          "payment"
        ],
        "correct": "frustration"
      },
      {
        "speaker": "Front desk",
        "before": "I will ask my ",
        "after": " about the options available under our policy.",
        "options": [
          "manager",
          "towel",
          "receipt",
          "locker"
        ],
        "correct": "manager"
      },
      {
        "speaker": "Guest",
        "before": "That’s very kind, thank you.",
        "after": "",
        "fixed": true
      },
      {
        "speaker": "Front desk",
        "before": "Your ",
        "after": " means a lot to us — it helps us look after everyone better.",
        "options": [
          "feedback",
          "payment",
          "silence",
          "patience"
        ],
        "correct": "feedback"
      }
    ],
    "trainingExample": true
  },
  {
    "id": "first-visit",
    "title": "A first visit",
    "th": "การมาใช้บริการครั้งแรก",
    "lines": [
      {
        "speaker": "Guest",
        "before": "I am here for a treatment.",
        "after": "",
        "fixed": true,
        "th": "มาใช้บริการทรีตเมนต์ค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Do you have an ",
        "after": "?",
        "correct": "appointment",
        "options": [
          "appointment",
          "receipt",
          "refund",
          "signature"
        ],
        "th": "ได้นัดหมายไว้ไหมคะ",
        "phraseId": "spa-p-welcome-009",
        "feedback": "Check whether the guest has booked."
      },
      {
        "speaker": "Guest",
        "before": "What treatments do you offer?",
        "after": "",
        "fixed": true,
        "th": "มีทรีตเมนต์อะไรบ้างคะ"
      },
      {
        "speaker": "Staff",
        "before": "Here is our treatment ",
        "after": ".",
        "correct": "menu",
        "options": [
          "menu",
          "pillow",
          "locker",
          "towel"
        ],
        "th": "นี่คือรายการทรีตเมนต์ของเราค่ะ",
        "phraseId": "spa-p-welcome-012",
        "feedback": "Show the current menu rather than guessing."
      },
      {
        "speaker": "Guest",
        "before": "I would like to know how it works.",
        "after": "",
        "fixed": true,
        "th": "อยากทราบขั้นตอนการใช้บริการค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Is this your ",
        "after": " visit?",
        "correct": "first",
        "options": [
          "first",
          "cold",
          "clean",
          "quiet"
        ],
        "th": "มาใช้บริการครั้งแรกใช่ไหมคะ",
        "phraseId": "spa-p-welcome-013",
        "feedback": "Find out whether an introduction is needed."
      }
    ],
    "level": 1,
    "phraseIds": [
      "spa-p-welcome-009",
      "spa-p-welcome-012",
      "spa-p-welcome-013"
    ],
    "trainingExample": true
  },
  {
    "id": "new-booking",
    "title": "Choosing an appointment",
    "th": "เลือกวันและเวลานัดหมาย",
    "lines": [
      {
        "speaker": "Guest",
        "before": "I would like to book a treatment.",
        "after": "",
        "fixed": true,
        "th": "ต้องการจองทรีตเมนต์ค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "What ",
        "after": " would you like to come?",
        "correct": "day",
        "options": [
          "day",
          "price",
          "towel",
          "room"
        ],
        "th": "ต้องการมาวันไหนคะ",
        "phraseId": "spa-p-booking-008",
        "feedback": "Ask for the day before checking availability."
      },
      {
        "speaker": "Guest",
        "before": "I can come tomorrow.",
        "after": "",
        "fixed": true,
        "th": "มาพรุ่งนี้ได้ค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Would you prefer ",
        "after": " or afternoon?",
        "correct": "morning",
        "options": [
          "morning",
          "payment",
          "shoulder",
          "soap"
        ],
        "th": "สะดวกช่วงเช้าหรือบ่ายคะ",
        "phraseId": "spa-p-booking-009",
        "feedback": "Offer broad time options."
      },
      {
        "speaker": "Guest",
        "before": "Do you have a space tomorrow?",
        "after": "",
        "fixed": true,
        "th": "พรุ่งนี้มีคิวว่างไหมคะ"
      },
      {
        "speaker": "Staff",
        "before": "Let me check tomorrow's ",
        "after": ".",
        "correct": "availability",
        "options": [
          "availability",
          "temperature",
          "fragrance",
          "pressure"
        ],
        "th": "ขอตรวจสอบเวลาว่างของวันพรุ่งนี้ค่ะ",
        "phraseId": "spa-p-booking-010",
        "feedback": "Check the diary before promising a slot."
      }
    ],
    "level": 1,
    "phraseIds": [
      "spa-p-booking-008",
      "spa-p-booking-009",
      "spa-p-booking-010"
    ],
    "trainingExample": true
  },
  {
    "id": "booking-change",
    "title": "Changing a booking",
    "th": "เปลี่ยนการจอง",
    "lines": [
      {
        "speaker": "Guest",
        "before": "I cannot come at the booked time.",
        "after": "",
        "fixed": true,
        "th": "มาตามเวลาที่จองไม่ได้ค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Would you like to change or ",
        "after": " your appointment?",
        "correct": "cancel",
        "options": [
          "cancel",
          "cover",
          "breathe",
          "wash"
        ],
        "th": "ต้องการเปลี่ยนหรือยกเลิกนัดหมายคะ",
        "phraseId": "spa-p-booking-012",
        "feedback": "Check the guest's intention before changing the booking."
      },
      {
        "speaker": "Guest",
        "before": "Will I have to pay a fee?",
        "after": "",
        "fixed": true,
        "th": "ต้องเสียค่าธรรมเนียมไหมคะ"
      },
      {
        "speaker": "Staff",
        "before": "I will explain any cancellation ",
        "after": " before making a change.",
        "correct": "fee",
        "options": [
          "fee",
          "towel",
          "room",
          "pillow"
        ],
        "th": "จะอธิบายค่าธรรมเนียมยกเลิกที่อาจมี ก่อนแก้ไขการจองค่ะ",
        "phraseId": "spa-p-booking-013",
        "feedback": "Use only the current approved policy."
      },
      {
        "speaker": "Guest",
        "before": "Can you send me the details?",
        "after": "",
        "fixed": true,
        "th": "ส่งรายละเอียดให้ได้ไหมคะ"
      },
      {
        "speaker": "Staff",
        "before": "Would you like a ",
        "after": " by email?",
        "correct": "confirmation",
        "options": [
          "confirmation",
          "blanket",
          "temperature",
          "shampoo"
        ],
        "th": "ต้องการรับการยืนยันทางอีเมลไหมคะ",
        "phraseId": "spa-p-booking-014",
        "feedback": "Confirm the email address before sending."
      }
    ],
    "level": 2,
    "phraseIds": [
      "spa-p-booking-012",
      "spa-p-booking-013",
      "spa-p-booking-014"
    ],
    "trainingExample": true
  },
  {
    "id": "pressure-check",
    "title": "Checking massage pressure",
    "th": "ตรวจสอบแรงกดขณะนวด",
    "lines": [
      {
        "speaker": "Guest",
        "before": "Could you check the pressure with me?",
        "after": "",
        "fixed": true,
        "th": "ช่วยถามเรื่องแรงกดด้วยได้ไหมคะ"
      },
      {
        "speaker": "Staff",
        "before": "Is the ",
        "after": " comfortable?",
        "correct": "pressure",
        "options": [
          "pressure",
          "receipt",
          "payment",
          "signature"
        ],
        "th": "แรงกดสบายดีไหมคะ",
        "phraseId": "spa-p-comfort-008",
        "feedback": "Check comfort early and again during the session."
      },
      {
        "speaker": "Guest",
        "before": "That feels a little too firm.",
        "after": "",
        "fixed": true,
        "th": "รู้สึกว่าหนักไปนิดค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Would you like ",
        "after": " pressure?",
        "correct": "lighter",
        "options": [
          "lighter",
          "later",
          "longer",
          "louder"
        ],
        "th": "ต้องการแรงกดเบาลงไหมคะ",
        "phraseId": "spa-p-comfort-009",
        "feedback": "Adjust only with the guest's agreement."
      },
      {
        "speaker": "Guest",
        "before": "This does not feel right.",
        "after": "",
        "fixed": true,
        "th": "รู้สึกไม่ค่อยดีค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Would you like me to ",
        "after": " now?",
        "correct": "stop",
        "options": [
          "stop",
          "charge",
          "book",
          "sell"
        ],
        "th": "ต้องการให้หยุดตอนนี้ไหมคะ",
        "phraseId": "spa-p-comfort-015",
        "feedback": "Stop promptly when requested; follow the workplace procedure."
      }
    ],
    "level": 1,
    "phraseIds": [
      "spa-p-comfort-008",
      "spa-p-comfort-009",
      "spa-p-comfort-015"
    ],
    "trainingExample": true
  },
  {
    "id": "room-comfort",
    "title": "Making the room comfortable",
    "th": "ปรับความสบายในห้อง",
    "lines": [
      {
        "speaker": "Guest",
        "before": "I am not quite comfortable.",
        "after": "",
        "fixed": true,
        "th": "ยังไม่ค่อยสบายตัวค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Are you too warm or too ",
        "after": "?",
        "correct": "cold",
        "options": [
          "cold",
          "late",
          "full",
          "loud"
        ],
        "th": "รู้สึกร้อนหรือหนาวเกินไปไหมคะ",
        "phraseId": "spa-p-comfort-010",
        "feedback": "Ask about temperature with two clear choices."
      },
      {
        "speaker": "Guest",
        "before": "I feel cold.",
        "after": "",
        "fixed": true,
        "th": "รู้สึกหนาวค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Would you like another ",
        "after": "?",
        "correct": "blanket",
        "options": [
          "blanket",
          "receipt",
          "menu",
          "signature"
        ],
        "th": "ต้องการผ้าห่มเพิ่มไหมคะ",
        "phraseId": "spa-p-comfort-011",
        "feedback": "Offer a practical comfort adjustment."
      },
      {
        "speaker": "Guest",
        "before": "The music is quite loud.",
        "after": "",
        "fixed": true,
        "th": "เพลงค่อนข้างดังค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Would you prefer the music ",
        "after": "?",
        "correct": "lower",
        "options": [
          "lower",
          "later",
          "longer",
          "lighter"
        ],
        "th": "ต้องการให้ลดเสียงเพลงไหมคะ",
        "phraseId": "spa-p-comfort-013",
        "feedback": "Adjust the volume rather than assuming a preference."
      }
    ],
    "level": 1,
    "phraseIds": [
      "spa-p-comfort-010",
      "spa-p-comfort-011",
      "spa-p-comfort-013"
    ],
    "trainingExample": true
  },
  {
    "id": "consent-break",
    "title": "Permission and a break",
    "th": "ขออนุญาตและพักระหว่างบริการ",
    "lines": [
      {
        "speaker": "Guest",
        "before": "I am ready now.",
        "after": "",
        "fixed": true,
        "th": "พร้อมแล้วค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "May I ",
        "after": "?",
        "correct": "begin",
        "options": [
          "begin",
          "pay",
          "book",
          "print"
        ],
        "th": "ขอเริ่มได้ไหมคะ",
        "phraseId": "spa-p-during-009",
        "feedback": "Check consent before starting."
      },
      {
        "speaker": "Guest",
        "before": "I need a short break.",
        "after": "",
        "fixed": true,
        "th": "ต้องการพักสักครู่ค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Would you like me to ",
        "after": "?",
        "correct": "pause",
        "options": [
          "pause",
          "sell",
          "sign",
          "book"
        ],
        "th": "ต้องการให้พักสักครู่ไหมคะ",
        "phraseId": "spa-p-during-012",
        "feedback": "Pause when requested and check before restarting."
      },
      {
        "speaker": "Guest",
        "before": "I have had a short rest.",
        "after": "",
        "fixed": true,
        "th": "พักสักครู่แล้วค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Are you ready to ",
        "after": ", or would you prefer to finish?",
        "correct": "continue",
        "options": [
          "continue",
          "charge",
          "refund",
          "restock"
        ],
        "th": "พร้อมทำต่อหรือต้องการจบการบริการคะ",
        "phraseId": "spa-p-during-014",
        "feedback": "Offer a genuine choice after a pause."
      }
    ],
    "level": 2,
    "phraseIds": [
      "spa-p-during-009",
      "spa-p-during-012",
      "spa-p-during-014"
    ],
    "trainingExample": true
  },
  {
    "id": "ingredient-check",
    "title": "Checking product concerns",
    "th": "ตรวจสอบข้อกังวลเรื่องผลิตภัณฑ์",
    "lines": [
      {
        "speaker": "Guest",
        "before": "What do you need to know before we start?",
        "after": "",
        "fixed": true,
        "th": "ต้องแจ้งอะไรบ้างก่อนเริ่มคะ"
      },
      {
        "speaker": "Staff",
        "before": "Do you have any ",
        "after": "?",
        "correct": "allergies",
        "options": [
          "allergies",
          "receipts",
          "appointments",
          "lockers"
        ],
        "th": "มีอาการแพ้อะไรไหมคะ",
        "phraseId": "spa-p-consultation-009",
        "feedback": "Ask clearly and record the answer privately."
      },
      {
        "speaker": "Guest",
        "before": "Some fragrances irritate my skin.",
        "after": "",
        "fixed": true,
        "th": "กลิ่นหอมบางชนิดทำให้ผิวระคายเคืองค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Let me check the ",
        "after": " before we choose an oil.",
        "correct": "ingredients",
        "options": [
          "ingredients",
          "opening hours",
          "phone numbers",
          "towels"
        ],
        "th": "ขอตรวจสอบส่วนผสมก่อนเลือกน้ำมันค่ะ",
        "phraseId": "spa-p-explain-011",
        "feedback": "Natural ingredients are not automatically suitable for everyone."
      },
      {
        "speaker": "Guest",
        "before": "Is this treatment suitable for me?",
        "after": "",
        "fixed": true,
        "th": "ทรีตเมนต์นี้เหมาะกับฉันไหมคะ"
      },
      {
        "speaker": "Staff",
        "before": "The practitioner will confirm whether this treatment is ",
        "after": ".",
        "correct": "suitable",
        "options": [
          "suitable",
          "finished",
          "paid",
          "booked"
        ],
        "th": "ผู้ปฏิบัติงานจะยืนยันว่าทรีตเมนต์นี้เหมาะสมหรือไม่ค่ะ",
        "phraseId": "spa-p-explain-012",
        "feedback": "Do not promise suitability without an appropriate assessment."
      }
    ],
    "level": 2,
    "phraseIds": [
      "spa-p-consultation-009",
      "spa-p-explain-011",
      "spa-p-explain-012"
    ],
    "trainingExample": true
  },
  {
    "id": "language-help",
    "title": "Asking for language help",
    "th": "ขอความช่วยเหลือด้านภาษา",
    "lines": [
      {
        "speaker": "Guest",
        "before": "I would like to change the time.",
        "after": "",
        "fixed": true,
        "th": "ต้องการเปลี่ยนเวลาค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Could you ",
        "after": " that, please?",
        "correct": "repeat",
        "options": [
          "repeat",
          "cancel",
          "cover",
          "pay"
        ],
        "th": "ช่วยพูดซ้ำอีกครั้งได้ไหมคะ",
        "phraseId": "spa-p-clarifying-001",
        "feedback": "Ask again instead of guessing."
      },
      {
        "speaker": "Guest",
        "before": "I would like that treatment.",
        "after": "",
        "fixed": true,
        "th": "ต้องการทรีตเมนต์นั้นค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Could you ",
        "after": " me which one?",
        "correct": "show",
        "options": [
          "show",
          "charge",
          "cancel",
          "wash"
        ],
        "th": "ช่วยชี้ให้ดูว่าอันไหนได้ไหมคะ",
        "phraseId": "spa-p-clarifying-003",
        "feedback": "Use the menu or an appropriate visual aid."
      },
      {
        "speaker": "Guest",
        "before": "I do not understand English very well.",
        "after": "",
        "fixed": true,
        "th": "เข้าใจภาษาอังกฤษไม่ค่อยดีค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Let me ask a colleague who can help with the ",
        "after": ".",
        "correct": "language",
        "options": [
          "language",
          "payment",
          "temperature",
          "laundry"
        ],
        "th": "ขอเรียกเพื่อนร่วมงานที่ช่วยด้านภาษาได้ค่ะ",
        "phraseId": "spa-p-clarifying-006",
        "feedback": "Seek appropriate support, especially for consent or safety."
      }
    ],
    "level": 2,
    "phraseIds": [
      "spa-p-clarifying-001",
      "spa-p-clarifying-003",
      "spa-p-clarifying-006"
    ],
    "trainingExample": true
  },
  {
    "id": "paying-bill",
    "title": "Checking and paying the bill",
    "th": "ตรวจสอบและชำระเงิน",
    "lines": [
      {
        "speaker": "Guest",
        "before": "Is this the full amount?",
        "after": "",
        "fixed": true,
        "th": "นี่คือยอดทั้งหมดไหมคะ"
      },
      {
        "speaker": "Staff",
        "before": "Please check the ",
        "after": " before paying.",
        "correct": "total",
        "options": [
          "total",
          "towel",
          "shoulder",
          "music"
        ],
        "th": "กรุณาตรวจสอบยอดรวมก่อนชำระค่ะ",
        "phraseId": "spa-p-payment-003",
        "feedback": "Make the amount clear before payment."
      },
      {
        "speaker": "Guest",
        "before": "I already paid a deposit.",
        "after": "",
        "fixed": true,
        "th": "จ่ายเงินมัดจำแล้วค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Let me check whether your ",
        "after": " has been deducted.",
        "correct": "deposit",
        "options": [
          "deposit",
          "blanket",
          "scalp",
          "shampoo"
        ],
        "th": "ขอตรวจสอบว่าหักเงินมัดจำแล้วหรือไม่ค่ะ",
        "phraseId": "spa-p-payment-004",
        "feedback": "Verify the record before changing the bill."
      },
      {
        "speaker": "Guest",
        "before": "I am ready to pay.",
        "after": "",
        "fixed": true,
        "th": "พร้อมชำระเงินแล้วค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "How would you like to ",
        "after": "?",
        "correct": "pay",
        "options": [
          "pay",
          "lie",
          "breathe",
          "turn"
        ],
        "th": "สะดวกชำระเงินด้วยวิธีใดคะ",
        "phraseId": "spa-p-payment-001",
        "feedback": "Offer only payment methods the business accepts."
      }
    ],
    "level": 2,
    "phraseIds": [
      "spa-p-payment-003",
      "spa-p-payment-004",
      "spa-p-payment-001"
    ],
    "trainingExample": true
  },
  {
    "id": "refund-request",
    "title": "A refund request",
    "th": "คำขอคืนเงิน",
    "lines": [
      {
        "speaker": "Guest",
        "before": "I do not understand this bill.",
        "after": "",
        "fixed": true,
        "th": "ไม่เข้าใจบิลนี้ค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Is there a ",
        "after": " you would like me to explain?",
        "correct": "charge",
        "options": [
          "charge",
          "cushion",
          "headband",
          "shoulder"
        ],
        "th": "มีค่าใช้จ่ายรายการไหนที่ต้องการคำอธิบายไหมคะ",
        "phraseId": "spa-p-payment-007",
        "feedback": "Explain each item using the actual bill."
      },
      {
        "speaker": "Guest",
        "before": "Could I have a refund?",
        "after": "",
        "fixed": true,
        "th": "ขอคืนเงินได้ไหมคะ"
      },
      {
        "speaker": "Staff",
        "before": "I will ask my ",
        "after": " about your refund request.",
        "correct": "supervisor",
        "options": [
          "supervisor",
          "slippers",
          "fragrance",
          "locker"
        ],
        "th": "จะสอบถามหัวหน้างานเรื่องคำขอคืนเงินค่ะ",
        "phraseId": "spa-p-payment-005",
        "feedback": "Do not approve a refund outside your authority."
      },
      {
        "speaker": "Guest",
        "before": "What will happen next?",
        "after": "",
        "fixed": true,
        "th": "จะทำอย่างไรต่อคะ"
      },
      {
        "speaker": "Staff",
        "before": "I will ",
        "after": " you once I have confirmed the next step.",
        "correct": "update",
        "options": [
          "update",
          "massage",
          "charge",
          "cover"
        ],
        "th": "จะแจ้งความคืบหน้าเมื่อยืนยันขั้นตอนต่อไปแล้วค่ะ",
        "phraseId": "spa-p-concerns-012",
        "feedback": "Promise an update, not an unconfirmed outcome."
      }
    ],
    "level": 2,
    "phraseIds": [
      "spa-p-payment-007",
      "spa-p-payment-005",
      "spa-p-concerns-012"
    ],
    "trainingExample": true
  },
  {
    "id": "access-and-privacy",
    "title": "Access and communication preferences",
    "th": "การเข้าถึงและความต้องการสื่อสาร",
    "lines": [
      {
        "speaker": "Guest",
        "before": "I need some extra support.",
        "after": "",
        "fixed": true,
        "th": "ต้องการความช่วยเหลือเพิ่มเติมค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "What would help you feel ",
        "after": "?",
        "correct": "comfortable",
        "options": [
          "comfortable",
          "expensive",
          "late",
          "empty"
        ],
        "th": "อะไรจะช่วยให้คุณรู้สึกสบายขึ้นคะ",
        "phraseId": "spa-p-special-008",
        "feedback": "Ask the person rather than making assumptions."
      },
      {
        "speaker": "Guest",
        "before": "I use a wheelchair.",
        "after": "",
        "fixed": true,
        "th": "ใช้รถเข็นค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "May I check a step-free ",
        "after": " for you?",
        "correct": "route",
        "options": [
          "route",
          "receipt",
          "price",
          "fragrance"
        ],
        "th": "ขอตรวจสอบเส้นทางที่ไม่มีขั้นบันไดให้ได้ไหมคะ",
        "phraseId": "spa-p-special-010",
        "feedback": "Verify the route rather than promising access."
      },
      {
        "speaker": "Guest",
        "before": "I find it difficult to hear in this room.",
        "after": "",
        "fixed": true,
        "th": "ได้ยินไม่ชัดในห้องนี้ค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Would you prefer ",
        "after": " information?",
        "correct": "written",
        "options": [
          "written",
          "frozen",
          "heated",
          "folded"
        ],
        "th": "ต้องการข้อมูลเป็นลายลักษณ์อักษรไหมคะ",
        "phraseId": "spa-p-special-011",
        "feedback": "Offer another way to communicate."
      }
    ],
    "level": 2,
    "phraseIds": [
      "spa-p-special-008",
      "spa-p-special-010",
      "spa-p-special-011"
    ],
    "trainingExample": true
  },
  {
    "id": "aftercare-questions",
    "title": "Understanding aftercare",
    "th": "ทำความเข้าใจการดูแลหลังทรีตเมนต์",
    "lines": [
      {
        "speaker": "Guest",
        "before": "What should I do after the treatment?",
        "after": "",
        "fixed": true,
        "th": "หลังทรีตเมนต์ควรทำอย่างไรคะ"
      },
      {
        "speaker": "Staff",
        "before": "Here are your aftercare ",
        "after": ".",
        "correct": "instructions",
        "options": [
          "instructions",
          "slippers",
          "payments",
          "appointments"
        ],
        "th": "นี่คือคำแนะนำการดูแลหลังทรีตเมนต์ค่ะ",
        "phraseId": "spa-p-aftercare-008",
        "feedback": "Use instructions approved for the specific treatment."
      },
      {
        "speaker": "Guest",
        "before": "This leaflet is difficult to understand.",
        "after": "",
        "fixed": true,
        "th": "เอกสารนี้เข้าใจยากค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Would you like me to ",
        "after": " this leaflet?",
        "correct": "explain",
        "options": [
          "explain",
          "charge",
          "cancel",
          "fold"
        ],
        "th": "ต้องการให้อธิบายเอกสารนี้ไหมคะ",
        "phraseId": "spa-p-aftercare-009",
        "feedback": "Explain in small steps and check understanding."
      },
      {
        "speaker": "Guest",
        "before": "I have read the leaflet.",
        "after": "",
        "fixed": true,
        "th": "อ่านเอกสารแล้วค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Do you have any ",
        "after": " about the instructions?",
        "correct": "questions",
        "options": [
          "questions",
          "towels",
          "lockers",
          "receipts"
        ],
        "th": "มีคำถามเกี่ยวกับคำแนะนำไหมคะ",
        "phraseId": "spa-p-aftercare-011",
        "feedback": "Invite questions rather than asking only 'understand?'"
      }
    ],
    "level": 1,
    "phraseIds": [
      "spa-p-aftercare-008",
      "spa-p-aftercare-009",
      "spa-p-aftercare-011"
    ],
    "trainingExample": true
  },
  {
    "id": "shift-preparation",
    "title": "Preparing the next treatment room",
    "th": "เตรียมห้องสำหรับลูกค้าคนถัดไป",
    "lines": [
      {
        "speaker": "Colleague",
        "before": "The next guest has arrived.",
        "after": "",
        "fixed": true,
        "th": "ลูกค้าคนถัดไปมาถึงแล้ว"
      },
      {
        "speaker": "Staff",
        "before": "Could you confirm that the room is ",
        "after": "?",
        "correct": "ready",
        "options": [
          "ready",
          "refunded",
          "delayed",
          "cancelled"
        ],
        "th": "ช่วยยืนยันว่าห้องพร้อมแล้วได้ไหม",
        "phraseId": "spa-p-teamwork-011",
        "feedback": "Check readiness before inviting a guest in."
      },
      {
        "speaker": "Colleague",
        "before": "What do you need for the room?",
        "after": "",
        "fixed": true,
        "th": "ต้องการอะไรสำหรับห้องนี้"
      },
      {
        "speaker": "Staff",
        "before": "Could you bring clean ",
        "after": ", please?",
        "correct": "towels",
        "options": [
          "towels",
          "receipts",
          "payments",
          "signatures"
        ],
        "th": "ช่วยนำผ้าขนหนูสะอาดมาให้หน่อยได้ไหม",
        "phraseId": "spa-p-teamwork-009",
        "feedback": "Staff-to-staff request; not a guest phrase."
      },
      {
        "speaker": "Colleague",
        "before": "The table control is not working.",
        "after": "",
        "fixed": true,
        "th": "ปุ่มปรับเตียงไม่ทำงาน"
      },
      {
        "speaker": "Staff",
        "before": "Please tell the ",
        "after": " about the equipment problem.",
        "correct": "supervisor",
        "options": [
          "supervisor",
          "guest menu",
          "price list",
          "blanket"
        ],
        "th": "กรุณาแจ้งหัวหน้างานเกี่ยวกับปัญหาอุปกรณ์",
        "phraseId": "spa-p-teamwork-012",
        "feedback": "Do not use faulty equipment while awaiting instructions."
      }
    ],
    "level": 2,
    "phraseIds": [
      "spa-p-teamwork-011",
      "spa-p-teamwork-009",
      "spa-p-teamwork-012"
    ],
    "trainingExample": true
  },
  {
    "id": "phone-details",
    "title": "Taking details over the phone",
    "th": "รับข้อมูลทางโทรศัพท์",
    "lines": [
      {
        "speaker": "Guest",
        "before": "I would like to give you my details.",
        "after": "",
        "fixed": true,
        "th": "ต้องการแจ้งรายละเอียดค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Could you speak a little more ",
        "after": ", please?",
        "correct": "slowly",
        "options": [
          "slowly",
          "loudly",
          "quickly",
          "quietly"
        ],
        "th": "ช่วยพูดช้าลงเล็กน้อยได้ไหมคะ",
        "phraseId": "spa-p-phone-007",
        "feedback": "Use when you cannot reliably follow the caller."
      },
      {
        "speaker": "Guest",
        "before": "My name is difficult to spell.",
        "after": "",
        "fixed": true,
        "th": "ชื่อสะกดยากค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Could you ",
        "after": " your name, please?",
        "correct": "spell",
        "options": [
          "spell",
          "pay",
          "wash",
          "cover"
        ],
        "th": "ช่วยสะกดชื่อได้ไหมคะ",
        "phraseId": "spa-p-phone-009",
        "feedback": "Record the name and read it back."
      },
      {
        "speaker": "Guest",
        "before": "Could you call me when you know?",
        "after": "",
        "fixed": true,
        "th": "โทรกลับเมื่อทราบข้อมูลได้ไหมคะ"
      },
      {
        "speaker": "Staff",
        "before": "What ",
        "after": " should we use to call you back?",
        "correct": "number",
        "options": [
          "number",
          "towel",
          "mask",
          "temperature"
        ],
        "th": "ควรติดต่อกลับที่หมายเลขใดคะ",
        "phraseId": "spa-p-phone-010",
        "feedback": "Confirm the number and the reason for the call."
      }
    ],
    "level": 2,
    "phraseIds": [
      "spa-p-phone-007",
      "spa-p-phone-009",
      "spa-p-phone-010"
    ],
    "trainingExample": true
  },
  {
    "id": "concern-report",
    "title": "Listening to a concern",
    "th": "รับฟังข้อกังวล",
    "lines": [
      {
        "speaker": "Guest",
        "before": "I would like to make a complaint.",
        "after": "",
        "fixed": true,
        "th": "ต้องการร้องเรียนค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Please tell me what ",
        "after": ".",
        "correct": "happened",
        "options": [
          "happened",
          "cost",
          "closed",
          "folded"
        ],
        "th": "กรุณาเล่าให้ฟังว่าเกิดอะไรขึ้นค่ะ",
        "phraseId": "spa-p-concerns-009",
        "feedback": "Listen before deciding what action is needed."
      },
      {
        "speaker": "Guest",
        "before": "That is what happened.",
        "after": "",
        "fixed": true,
        "th": "เหตุการณ์เป็นอย่างนั้นค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Have I understood your concern ",
        "after": "?",
        "correct": "correctly",
        "options": [
          "correctly",
          "quietly",
          "quickly",
          "early"
        ],
        "th": "เข้าใจข้อกังวลของคุณถูกต้องไหมคะ",
        "phraseId": "spa-p-concerns-011",
        "feedback": "Summarise the concern before asking this question."
      },
      {
        "speaker": "Guest",
        "before": "Who can help with this problem?",
        "after": "",
        "fixed": true,
        "th": "ใครช่วยแก้ปัญหานี้ได้คะ"
      },
      {
        "speaker": "Staff",
        "before": "Let me speak to my ",
        "after": ".",
        "correct": "supervisor",
        "options": [
          "supervisor",
          "diffuser",
          "pillow",
          "menu"
        ],
        "th": "ขอพูดคุยกับหัวหน้างานก่อนนะคะ",
        "phraseId": "spa-p-concerns-010",
        "feedback": "Refer issues beyond your authority."
      }
    ],
    "level": 2,
    "phraseIds": [
      "spa-p-concerns-009",
      "spa-p-concerns-011",
      "spa-p-concerns-010"
    ],
    "trainingExample": true
  },
  {
    "id": "optional-service",
    "title": "Offering an optional service",
    "th": "เสนอบริการเพิ่มเติมแบบไม่กดดัน",
    "lines": [
      {
        "speaker": "Guest",
        "before": "Is there anything else available?",
        "after": "",
        "fixed": true,
        "th": "มีบริการอื่นอีกไหมคะ"
      },
      {
        "speaker": "Staff",
        "before": "Would you like to hear the ",
        "after": "?",
        "correct": "options",
        "options": [
          "options",
          "allergies",
          "signatures",
          "ingredients"
        ],
        "th": "ต้องการฟังทางเลือกไหมคะ",
        "phraseId": "spa-p-upsell-007",
        "feedback": "Ask permission before describing extras."
      },
      {
        "speaker": "Guest",
        "before": "Can I add another treatment?",
        "after": "",
        "fixed": true,
        "th": "เพิ่มทรีตเมนต์ได้ไหมคะ"
      },
      {
        "speaker": "Staff",
        "before": "I will explain the extra time and ",
        "after": " first.",
        "correct": "cost",
        "options": [
          "cost",
          "soap",
          "neck",
          "linen"
        ],
        "th": "จะอธิบายเวลาและค่าใช้จ่ายที่เพิ่มก่อนค่ะ",
        "phraseId": "spa-p-upsell-008",
        "feedback": "Confirm price, time and suitability before agreement."
      },
      {
        "speaker": "Guest",
        "before": "I do not want to add anything.",
        "after": "",
        "fixed": true,
        "th": "ไม่ต้องการเพิ่มอะไรค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "We can keep your ",
        "after": " booking.",
        "correct": "original",
        "options": [
          "original",
          "cancelled",
          "dirty",
          "empty"
        ],
        "th": "คงการจองเดิมไว้ได้ค่ะ",
        "phraseId": "spa-p-upsell-009",
        "feedback": "Accept a refusal without pressure."
      }
    ],
    "level": 2,
    "phraseIds": [
      "spa-p-upsell-007",
      "spa-p-upsell-008",
      "spa-p-upsell-009"
    ],
    "trainingExample": true
  },
  {
    "id": "leaving-spa",
    "title": "Finishing the visit",
    "th": "จบการใช้บริการ",
    "lines": [
      {
        "speaker": "Guest",
        "before": "Is the session finished?",
        "after": "",
        "fixed": true,
        "th": "จบการบริการแล้วใช่ไหมคะ"
      },
      {
        "speaker": "Staff",
        "before": "Please sit up when you feel ",
        "after": ".",
        "correct": "ready",
        "options": [
          "ready",
          "paid",
          "booked",
          "late"
        ],
        "th": "กรุณาลุกขึ้นนั่งเมื่อพร้อมค่ะ",
        "phraseId": "spa-p-closing-007",
        "feedback": "Allow time and offer help if requested."
      },
      {
        "speaker": "Guest",
        "before": "I am ready to leave.",
        "after": "",
        "fixed": true,
        "th": "พร้อมกลับแล้วค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "Have you collected all your ",
        "after": "?",
        "correct": "belongings",
        "options": [
          "belongings",
          "appointments",
          "refunds",
          "payments"
        ],
        "th": "เก็บของส่วนตัวครบแล้วไหมคะ",
        "phraseId": "spa-p-closing-008",
        "feedback": "Check gently before the guest leaves."
      },
      {
        "speaker": "Guest",
        "before": "Thank you for the session.",
        "after": "",
        "fixed": true,
        "th": "ขอบคุณสำหรับการบริการค่ะ"
      },
      {
        "speaker": "Staff",
        "before": "How was your ",
        "after": " today?",
        "correct": "experience",
        "options": [
          "experience",
          "surname",
          "number",
          "currency"
        ],
        "th": "วันนี้รู้สึกอย่างไรกับการบริการคะ",
        "phraseId": "spa-p-closing-009",
        "feedback": "Invite honest feedback without suggesting an answer."
      }
    ],
    "level": 1,
    "phraseIds": [
      "spa-p-closing-007",
      "spa-p-closing-008",
      "spa-p-closing-009"
    ],
    "trainingExample": true
  }
];

/* =========================================================================
   GENERATORS — build questions straight from the 102-word VOCAB pool
   ========================================================================= */

/* Term → which definition? (distractors drawn from other categories where
   possible, so the wrong answers are plausible but not confusing.) */
function genDefinitionQuestions(count, catId, level){
  const pool = vocabPool(catId, level);
  return sample(pool, count).map(word => {
    const others = sample(VOCAB.filter(v => v.word !== word.word), 3);
    const options = shuffle([word, ...others]);
    return {
      prompt: word.word,
      promptSub: word.phon,
      promptTh: word.th,
      options: options.map(o => o.short),
      correct: options.findIndex(o => o.word === word.word),
      explain: `${word.word} — ${word.def}`,
    };
  });
}

/* Definition → which term? Distractors prefer the same category (so the
   choice is a real discrimination), then top up from the wider pool.
   Deduplicated by word, or the same term could appear twice as an option. */
function genReverseQuestions(count, catId, level){
  const pool = vocabPool(catId, level);
  return sample(pool, count).map(word => {
    const sameCat = shuffle(VOCAB.filter(v => v.word !== word.word && v.cat === word.cat));
    const wider   = shuffle(VOCAB.filter(v => v.word !== word.word && v.cat !== word.cat));
    const picked = [];
    [...sameCat, ...wider].forEach(cand => {
      if (picked.length < 3 && !picked.some(p => p.word === cand.word)) picked.push(cand);
    });
    const options = shuffle([word, ...picked]);
    return {
      prompt: word.short,
      promptSub: catLabel(word.cat),
      promptTh: null,
      options: options.map(o => o.word),
      correct: options.findIndex(o => o.word === word.word),
      explain: `${word.word} — ${word.def}`,
    };
  });
}

/* Thai → which English term? */
function genThaiQuestions(count, catId, level){
  let pool = vocabPool(catId, level);
  // A narrow category+level combination can leave only one or two words,
  // which makes for a pointless quiz. Relax the category but keep the
  // level, so the difficulty the learner asked for still holds.
  if (pool.length < 4){
    const wider = vocabPool('all', level);
    if (wider.length > pool.length) pool = wider;
  }
  return sample(pool, count).map(word => {
    const others = sample(VOCAB.filter(v => v.word !== word.word), 3);
    const options = shuffle([word, ...others]);
    return {
      prompt: word.th,
      promptSub: null,
      promptTh: null,
      isThaiPrompt: true,
      options: options.map(o => o.word),
      correct: options.findIndex(o => o.word === word.word),
      explain: `${word.word} (${word.th}) — ${word.def}`,
    };
  });
}

/* Word scramble: letters of the term, shuffled, with the definition as clue.
   Single-word terms only — merging the letters of "lymphatic drainage" into
   one anagram is unsolvable in practice. */
function genScrambleRounds(count, catId, level){
  let pool = vocabPool(catId, level)
    .filter(v => !/[\s-]/.test(v.word) && v.word.length >= 4 && v.word.length <= 14);
  // A narrow filter can leave too few single-word terms to build a round,
  // so widen back to the whole level before giving up.
  if (pool.length < count){
    const wider = vocabPool('all', level)
      .filter(v => !/[\s-]/.test(v.word) && v.word.length >= 4 && v.word.length <= 14);
    if (wider.length > pool.length) pool = wider;
  }
  return sample(pool, count).map(word => {
    const letters = word.word.toUpperCase().split('');
    let scrambled = shuffle(letters);
    let guard = 0;
    while (scrambled.join('') === letters.join('') && letters.length > 2 && guard++ < 8){
      scrambled = shuffle(letters);
    }
    return {
      answer: word.word,
      answerLetters: letters,
      scrambled,
      clue: word.def,
      clueTh: word.th,
      category: word.cat,
      level: word.level,
      phon: word.phon,
    };
  });
}

/* Category sort: N terms to drop into 3 category buckets. */
function genCategorySortRound(termCount = 9){
  const cats = sample(VOCAB_CATEGORIES, 3);
  const perCat = Math.ceil(termCount / 3);
  let terms = [];
  cats.forEach(c => {
    terms = terms.concat(sample(VOCAB.filter(v => v.cat === c.id), perCat));
  });
  return { buckets: cats, terms: shuffle(terms).slice(0, termCount) };
}

/* Speed round: rapid definition → term, as many as possible in the time. */
function genSpeedQuestions(count = 40){
  return genReverseQuestions(count, 'all');
}

/* Odd one out: three terms from one category plus one intruder. */
function genOddOneOutRounds(count){
  const rounds = [];
  for (let i = 0; i < count; i++){
    const [home, away] = sample(VOCAB_CATEGORIES, 2);
    const homeTerms = sample(VOCAB.filter(v => v.cat === home.id), 3);
    const intruder = sample(VOCAB.filter(v => v.cat === away.id), 1)[0];
    if (homeTerms.length < 3 || !intruder){ i--; continue; }
    const options = shuffle([...homeTerms, intruder]);
    rounds.push({
      options: options.map(o => o.word),
      correct: options.findIndex(o => o.word === intruder.word),
      homeLabel: home,
      awayLabel: away,
      explain: `${intruder.word} belongs to ${away.en}; the others are ${home.en}.`,
    });
  }
  return rounds;
}
