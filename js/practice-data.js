/* Authored quiz and activity expansion. Stable IDs preserve existing progress. */
const PRACTICE_CONTENT = {
  "spa": {
    "mc": [
      {
        "q": "What does “exfoliation” mean?",
        "options": [
          "Removing dead skin cells from the surface",
          "Adding oil to the skin",
          "Cooling the treatment room",
          "Applying make-up"
        ],
        "correct": 0,
        "hit": "That’s exactly right — exfoliation removes dead skin cells.",
        "miss": "Exfoliation means removing dead skin cells from the surface.",
        "id": "spa-mc-001",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "That’s exactly right — exfoliation removes dead skin cells."
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
        "id": "spa-mc-002",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — always check for these before treating a guest."
      },
      {
        "q": "Which is the most professional way to greet a guest?",
        "options": [
          "Hey, what do you want?",
          "You’re here, come in.",
          "Good afternoon, welcome to the spa. How may I help you today?",
          "Yeah, sit down."
        ],
        "correct": 2,
        "hit": "Warm and formal — a great first impression.",
        "miss": "A warm, formal greeting builds trust from the first moment.",
        "id": "spa-mc-003",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Warm and formal — a great first impression."
      },
      {
        "q": "“Effleurage” is best described as:",
        "options": [
          "A deep kneading technique",
          "A type of facial mask",
          "A breathing exercise",
          "A light, gliding massage stroke"
        ],
        "correct": 3,
        "hit": "Right — effleurage is the light, warming opening stroke.",
        "miss": "Effleurage is a light, gliding stroke used to open a massage.",
        "id": "spa-mc-004",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — effleurage is the light, warming opening stroke."
      },
      {
        "q": "What should you always ask before starting a treatment?",
        "options": [
          "Do you have any allergies or sensitivities?",
          "What’s your favourite colour?",
          "How much money do you have?",
          "Are you in a hurry?"
        ],
        "correct": 0,
        "hit": "Exactly — this is a key safety step, every time.",
        "miss": "Always check for allergies or sensitivities first, for safety.",
        "id": "spa-mc-005",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Exactly — this is a key safety step, every time."
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
        "id": "spa-mc-006",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Perfect — polite and reassuring."
      },
      {
        "q": "Which phrase asks for information without promising a treatment result?",
        "options": [
          "This treatment guarantees a cure.",
          "This works for every guest.",
          "Could you tell me what you hope to achieve?",
          "You will not need medical advice."
        ],
        "correct": 2,
        "hit": "Ask about the guest’s expectations without guaranteeing an outcome.",
        "miss": "Ask about expectations; do not make a medical or universal promise.",
        "id": "spa-mc-007",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Ask about the guest’s expectations without guaranteeing an outcome."
      },
      {
        "q": "A guest asks for aftercare instructions. Which reply is most appropriate?",
        "options": [
          "Every treatment has the same aftercare.",
          "You will not need any instructions.",
          "Use whichever advice you remember.",
          "Let me explain the approved instructions for your treatment."
        ],
        "correct": 3,
        "hit": "Use instructions appropriate to the specific treatment and guest.",
        "miss": "Explain the approved, treatment-specific instructions rather than guessing.",
        "id": "spa-mc-008",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Use instructions appropriate to the specific treatment and guest."
      },
      {
        "q": "What is a “walk-in” guest?",
        "options": [
          "A guest who arrives without a booking",
          "A guest who cancels",
          "A guest who complains",
          "A regular member"
        ],
        "correct": 0,
        "hit": "Correct — walk-ins arrive without booking ahead.",
        "miss": "A walk-in is a guest who arrives without a prior booking.",
        "id": "spa-mc-009",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — walk-ins arrive without booking ahead."
      },
      {
        "q": "What does “single-use” mean on a treatment supply label?",
        "options": [
          "Use it for every guest today.",
          "Use it only once, then dispose of it as instructed.",
          "Use it again after folding it.",
          "Use it only on Mondays."
        ],
        "correct": 1,
        "hit": "Single-use means intended for one use only.",
        "miss": "Single-use does not mean one day of repeated use.",
        "id": "spa-mc-010",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Single-use means intended for one use only."
      },
      {
        "q": "A “cuticle” is:",
        "options": [
          "A type of nail polish",
          "A pedicure tool",
          "The thin skin at the base of a nail",
          "A hand cream"
        ],
        "correct": 2,
        "hit": "Correct — the cuticle sits at the base of the nail.",
        "miss": "A cuticle is the thin skin at the base of a nail.",
        "id": "spa-mc-011",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — the cuticle sits at the base of the nail."
      },
      {
        "q": "A guest says, “Please do not massage that area.” What is the appropriate response?",
        "options": [
          "I will work on that area quickly.",
          "It is included in the price.",
          "You should let me try first.",
          "Of course. I will avoid that area."
        ],
        "correct": 3,
        "hit": "Acknowledge the request and respect the guest’s boundary.",
        "miss": "Do not try to persuade a guest to accept unwanted contact.",
        "id": "spa-mc-012",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Acknowledge the request and respect the guest’s boundary."
      },
      {
        "q": "“VIP guest” refers to:",
        "options": [
          "A very important guest who may need extra care",
          "Any first-time visitor",
          "A guest who complained",
          "A staff member"
        ],
        "correct": 0,
        "hit": "Right — VIP guests often receive extra attention.",
        "miss": "A VIP guest is a very important guest needing extra care.",
        "id": "spa-mc-013",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — VIP guests often receive extra attention."
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
        "id": "spa-mc-014",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — the relaxation lounge is exactly for waiting."
      },
      {
        "q": "A guest says the pressure is too firm. What do you say?",
        "options": [
          "That’s the normal pressure.",
          "Everyone finds it firm at first.",
          "Thank you for telling me — I’ll lighten it right away.",
          "You should try to relax more."
        ],
        "correct": 2,
        "hit": "Perfect — you validated the feedback and acted on it.",
        "miss": "Thank the guest and adjust immediately, rather than explaining it away.",
        "id": "spa-mc-015",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Perfect — you validated the feedback and acted on it."
      },
      {
        "q": "What does “cross-contamination” mean?",
        "options": [
          "Mixing two essential oils",
          "Booking two guests at once",
          "Using cold and hot water together",
          "Unwanted transfer of bacteria between tools or people"
        ],
        "correct": 3,
        "hit": "Correct — this is why tools are sanitised between guests.",
        "miss": "Cross-contamination is the unwanted transfer of bacteria between tools, surfaces or people.",
        "id": "spa-mc-016",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — this is why tools are sanitised between guests."
      },
      {
        "q": "A guest arrives without a booking and you are fully booked. Best response?",
        "options": [
          "I’m afraid we’re fully booked today, but may I find you a time this week?",
          "No, we’re full.",
          "You should have booked.",
          "Come back later."
        ],
        "correct": 0,
        "hit": "Right — a refusal plus a helpful alternative.",
        "miss": "Offer a genuine alternative rather than a flat refusal.",
        "id": "spa-mc-017",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — a refusal plus a helpful alternative."
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
        "id": "spa-mc-018",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — complimentary means free of charge."
      },
      {
        "q": "Which phrase best invites feedback during a massage?",
        "options": [
          "Don’t talk, just relax.",
          "This is how I always do it.",
          "Let me know at any point if you’d like more or less pressure.",
          "It should feel fine."
        ],
        "correct": 2,
        "hit": "Exactly — it opens the door for honest feedback.",
        "miss": "Invite feedback openly so the guest feels able to speak up.",
        "id": "spa-mc-019",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Exactly — it opens the door for honest feedback."
      },
      {
        "q": "What is a “patch test” for?",
        "options": [
          "Testing the room temperature",
          "Testing a massage table",
          "Checking a guest’s posture",
          "Checking for a skin reaction before full use of a product"
        ],
        "correct": 3,
        "hit": "Right — it checks for a reaction before full application.",
        "miss": "A patch test checks for a skin reaction before a product is used fully.",
        "id": "spa-mc-020",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — it checks for a reaction before full application."
      },
      {
        "q": "“Threading” is a technique used for:",
        "options": [
          "Precise hair removal, often on eyebrows",
          "Nail shaping",
          "Deep tissue massage",
          "Applying serum"
        ],
        "correct": 0,
        "hit": "Correct — threading removes hair precisely with cotton thread.",
        "miss": "Threading is a precise hair removal technique, often used on eyebrows.",
        "id": "spa-mc-021",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — threading removes hair precisely with cotton thread."
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
        "id": "spa-mc-022",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — explain the value in concrete terms."
      },
      {
        "q": "“Ambience” in a spa refers to:",
        "options": [
          "The price list",
          "The booking system",
          "The atmosphere created by lighting, music and scent",
          "The therapist’s uniform"
        ],
        "correct": 2,
        "hit": "Correct — ambience is the overall mood of the space.",
        "miss": "Ambience is the atmosphere created by lighting, music and scent.",
        "id": "spa-mc-023",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — ambience is the overall mood of the space."
      },
      {
        "q": "A guest asks to skip the consultation form. Best reply?",
        "options": [
          "You have to, it’s the rule.",
          "Fine, skip it.",
          "The manager will be angry.",
          "This form helps us keep you safe — it only takes a moment."
        ],
        "correct": 3,
        "hit": "Right — explaining the reason works better than citing rules.",
        "miss": "Explain the safety reason behind the form rather than just insisting.",
        "id": "spa-mc-024",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — explaining the reason works better than citing rules."
      },
      {
        "q": "“Informed consent” means the guest has:",
        "options": [
          "Agreed to treatment after understanding what it involves",
          "Paid a deposit",
          "Signed the visitor book",
          "Joined the loyalty programme"
        ],
        "correct": 0,
        "hit": "Correct — understanding must come before agreement.",
        "miss": "Informed consent is agreement given after the guest understands the treatment.",
        "id": "spa-mc-025",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — understanding must come before agreement."
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
        "id": "spa-mc-026",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Perfect — unhurried and warm."
      },
      {
        "q": "“Thermotherapy” uses:",
        "options": [
          "Cold air",
          "Bright light",
          "Heat, such as hot stones or warm wraps",
          "Salt water only"
        ],
        "correct": 2,
        "hit": "Correct — thermotherapy uses heat to relax muscles.",
        "miss": "Thermotherapy uses heat, such as hot stones or warm wraps.",
        "id": "spa-mc-027",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — thermotherapy uses heat to relax muscles."
      },
      {
        "q": "Best way to offer a product without pressure?",
        "options": [
          "You need this for your skin.",
          "Everyone buys this one.",
          "Your skin needs help.",
          "This would complement today’s treatment, if you’d like a closer look."
        ],
        "correct": 3,
        "hit": "Right — optional, positive and free of judgement.",
        "miss": "Frame a product as optional and complementary, never as a criticism.",
        "id": "spa-mc-028",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — optional, positive and free of judgement."
      },
      {
        "q": "A “deposit” is:",
        "options": [
          "A partial advance payment to secure a booking",
          "A discount for members",
          "A tip for the therapist",
          "The final bill"
        ],
        "correct": 0,
        "hit": "Correct — it secures the booking in advance.",
        "miss": "A deposit is a partial advance payment that secures a booking.",
        "id": "spa-mc-029",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — it secures the booking in advance."
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
        "id": "spa-mc-030",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — you explained the pause politely."
      },
      {
        "q": "What does “draping” mean in a treatment room?",
        "options": [
          "Hanging decorations",
          "Folding towels for storage",
          "Covering a guest so only the working area is exposed",
          "Closing the curtains"
        ],
        "correct": 2,
        "hit": "Correct — draping protects a guest’s privacy throughout.",
        "miss": "Draping means covering a guest so only the area being worked on is exposed.",
        "id": "spa-mc-031",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — draping protects a guest’s privacy throughout."
      },
      {
        "q": "A guest asks something you don’t know. Best reply?",
        "options": [
          "I don’t know.",
          "Ask someone else.",
          "It’s not my job.",
          "That’s a good question — let me find out for you right away."
        ],
        "correct": 3,
        "hit": "Right — it keeps your credibility and promises action.",
        "miss": "Offer to find out rather than closing the conversation with “I don’t know.”",
        "id": "spa-mc-032",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — it keeps your credibility and promises action."
      },
      {
        "q": "“Dehydrated skin” means skin that lacks:",
        "options": [
          "Water",
          "Oil",
          "Colour",
          "Elasticity only"
        ],
        "correct": 0,
        "hit": "Correct — dehydrated skin lacks water, even when oily.",
        "miss": "Dehydrated skin lacks water. Dry skin is what lacks oil.",
        "id": "spa-mc-033",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — dehydrated skin lacks water, even when oily."
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
        "id": "spa-mc-034",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — a no-show books but never arrives or cancels."
      },
      {
        "q": "A guest speaks limited English. What works best?",
        "options": [
          "You don’t understand?",
          "Speak louder to them.",
          "Let me explain that again more slowly — stop me any time.",
          "Ask them to bring a translator."
        ],
        "correct": 2,
        "hit": "Exactly — it puts the work on your explanation, not their ability.",
        "miss": "Offer to explain again slowly. Never imply the fault is the guest’s.",
        "id": "spa-mc-035",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Exactly — it puts the work on your explanation, not their ability."
      },
      {
        "q": "“Turnaround” in spa work refers to:",
        "options": [
          "Turning a guest over on the table",
          "Reversing a booking",
          "A refund",
          "The time to clean and reset a room between guests"
        ],
        "correct": 3,
        "hit": "Correct — it’s the reset time between guests.",
        "miss": "Turnaround is the time needed to clean and reset a room between guests.",
        "id": "spa-mc-036",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — it’s the reset time between guests."
      },
      {
        "q": "A guest falls asleep during the massage. You should:",
        "options": [
          "Let them wake gently and say there’s no rush",
          "Wake them immediately and loudly",
          "Leave the room without a word",
          "Tell them off for wasting time"
        ],
        "correct": 0,
        "hit": "Right — a gentle wake-up protects the calm you created.",
        "miss": "Wake the guest gently and reassure them there is no rush.",
        "id": "spa-mc-037",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — a gentle wake-up protects the calm you created."
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
        "id": "spa-mc-038",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Perfect — a clear offer plus an easy way out."
      },
      {
        "q": "“Hypoallergenic” describes a product that is:",
        "options": [
          "Guaranteed never to cause an allergy",
          "Only available on prescription",
          "Described as less likely to cause a reaction, but not allergy-free",
          "Made without water"
        ],
        "correct": 2,
        "hit": "The label is not a guarantee: a reaction is still possible.",
        "miss": "Hypoallergenic does not mean allergy-free. Check the ingredients and the guest’s concerns.",
        "id": "spa-mc-039",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The label is not a guarantee: a reaction is still possible."
      },
      {
        "q": "You spot oil spilled on the floor. What is it?",
        "options": [
          "Someone else’s problem",
          "Normal and safe",
          "A sign to close the room",
          "A slip hazard to clean immediately"
        ],
        "correct": 3,
        "hit": "Right — clean a slip hazard straight away.",
        "miss": "Spilled oil is a slip hazard and should be cleaned immediately.",
        "id": "spa-mc-040",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — clean a slip hazard straight away."
      },
      {
        "q": "A colleague caused the problem. What do you say to the guest?",
        "options": [
          "I’m sorry that happened — let me put it right for you now.",
          "That wasn’t me, it was the other therapist.",
          "You should complain to them.",
          "Nothing, just continue."
        ],
        "correct": 0,
        "hit": "Exactly — guests see the spa as one team.",
        "miss": "Take shared responsibility. Blaming a colleague damages the guest’s trust.",
        "id": "spa-mc-041",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Exactly — guests see the spa as one team."
      },
      {
        "q": "Choose the word that means \"the part of the body between the neck and upper arm\":",
        "options": [
          "Total",
          "Shoulder",
          "Hip",
          "Availability"
        ],
        "correct": 1,
        "vocabularyId": "spa-v-shoulder",
        "word": "Shoulder",
        "added": true,
        "id": "spa-mc-042",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Shoulder: The part of the body between the neck and upper arm. Example: Is your left shoulder comfortable?",
        "explainTh": "ไหล่ซ้ายของคุณสบายดีไหมคะ"
      },
      {
        "q": "Choose the word that means \"the part that joins the head to the body\":",
        "options": [
          "Shoulder",
          "Treatment menu",
          "Neck",
          "Ankle"
        ],
        "correct": 2,
        "vocabularyId": "spa-v-neck",
        "word": "Neck",
        "added": true,
        "id": "spa-mc-043",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Neck: The part that joins the head to the body. Example: Would you like more support for your neck?",
        "explainTh": "ต้องการที่รองคอเพิ่มไหมคะ"
      },
      {
        "q": "Choose the word that means \"the rear part of the body below the shoulders\":",
        "options": [
          "Wrist",
          "Knee",
          "Spill",
          "Back"
        ],
        "correct": 3,
        "vocabularyId": "spa-v-back",
        "word": "Back",
        "added": true,
        "id": "spa-mc-044",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Back: The rear part of the body below the shoulders. Example: Would you like a cushion behind your back?",
        "explainTh": "ต้องการหมอนรองหลังไหมคะ"
      },
      {
        "q": "Choose the word that means \"the body part between the shoulder and the hand\":",
        "options": [
          "Arm",
          "Late arrival",
          "Leg",
          "Treatment menu"
        ],
        "correct": 0,
        "vocabularyId": "spa-v-arm",
        "word": "Arm",
        "added": true,
        "id": "spa-mc-045",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Arm: The body part between the shoulder and the hand. Example: Please rest your arm here.",
        "explainTh": "กรุณาวางแขนไว้ตรงนี้ค่ะ"
      },
      {
        "q": "Choose the word that means \"the joint in the middle of the arm\":",
        "options": [
          "Tissue",
          "Elbow",
          "Pain",
          "Hip"
        ],
        "correct": 1,
        "vocabularyId": "spa-v-elbow",
        "word": "Elbow",
        "added": true,
        "id": "spa-mc-046",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Elbow: The joint in the middle of the arm. Example: Is this support comfortable under your elbow?",
        "explainTh": "ที่รองใต้ข้อศอกนี้สบายดีไหมคะ"
      },
      {
        "q": "Choose the word that means \"the joint between the hand and the arm\":",
        "options": [
          "Sheet",
          "Phone number",
          "Wrist",
          "Temperature"
        ],
        "correct": 2,
        "vocabularyId": "spa-v-wrist",
        "word": "Wrist",
        "added": true,
        "id": "spa-mc-047",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Wrist: The joint between the hand and the arm. Example: Please keep your wrist in a comfortable position.",
        "explainTh": "กรุณาวางข้อมือในท่าที่สบายค่ะ"
      },
      {
        "q": "Choose the word that means \"the body part at the end of the arm\":",
        "options": [
          "Appointment",
          "Basket",
          "Duration",
          "Hand"
        ],
        "correct": 3,
        "vocabularyId": "spa-v-hand",
        "word": "Hand",
        "added": true,
        "id": "spa-mc-048",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Hand: The body part at the end of the arm. Example: May I hold your hand to support you?",
        "explainTh": "ขอจับมือเพื่อช่วยพยุงได้ไหมคะ"
      },
      {
        "q": "Choose the word that means \"one of the long parts of a hand\":",
        "options": [
          "Finger",
          "Toe",
          "Surname",
          "Confirmation"
        ],
        "correct": 0,
        "vocabularyId": "spa-v-finger",
        "word": "Finger",
        "added": true,
        "id": "spa-mc-049",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Finger: One of the long parts of a hand. Example: Please tell me if a finger feels uncomfortable.",
        "explainTh": "กรุณาบอกหากรู้สึกไม่สบายที่นิ้วมือค่ะ"
      },
      {
        "q": "Choose the word that means \"the joint between the foot and the leg\":",
        "options": [
          "Leg",
          "Ankle",
          "Face",
          "Forehead"
        ],
        "correct": 1,
        "vocabularyId": "spa-v-ankle",
        "word": "Ankle",
        "added": true,
        "id": "spa-mc-050",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Ankle: The joint between the foot and the leg. Example: Please let me know if your ankle feels uncomfortable.",
        "explainTh": "กรุณาบอกหากรู้สึกไม่สบายที่ข้อเท้าค่ะ"
      },
      {
        "q": "Choose the word that means \"the body part at the end of the leg\":",
        "options": [
          "Waiting time",
          "Duration",
          "Foot",
          "Fragrance"
        ],
        "correct": 2,
        "vocabularyId": "spa-v-foot",
        "word": "Foot",
        "added": true,
        "id": "spa-mc-051",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Foot: The body part at the end of the leg. Example: Please place your foot on this clean towel.",
        "explainTh": "กรุณาวางเท้าบนผ้าขนหนูสะอาดผืนนี้ค่ะ"
      },
      {
        "q": "Choose the word that means \"the back part of the foot underneath the ankle\":",
        "options": [
          "Sheet",
          "Headband",
          "Leg",
          "Heel"
        ],
        "correct": 3,
        "vocabularyId": "spa-v-heel",
        "word": "Heel",
        "added": true,
        "id": "spa-mc-052",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Heel: The back part of the foot underneath the ankle. Example: Does your heel need more support?",
        "explainTh": "ต้องการที่รองส้นเท้าเพิ่มไหมคะ"
      },
      {
        "q": "Choose the word that means \"one of the small parts at the end of a foot\":",
        "options": [
          "Toe",
          "Price",
          "Mirror",
          "Back"
        ],
        "correct": 0,
        "vocabularyId": "spa-v-toe",
        "word": "Toe",
        "added": true,
        "id": "spa-mc-053",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Toe: One of the small parts at the end of a foot. Example: Please tell me if any toe feels sore.",
        "explainTh": "กรุณาบอกหากเจ็บนิ้วเท้าใดนิ้วหนึ่งค่ะ"
      },
      {
        "q": "Choose the word that means \"the side of the body above the upper leg\":",
        "options": [
          "Blanket",
          "Hip",
          "Pain",
          "Back"
        ],
        "correct": 1,
        "vocabularyId": "spa-v-hip",
        "word": "Hip",
        "added": true,
        "id": "spa-mc-054",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Hip: The side of the body above the upper leg. Example: Is your hip comfortable in this position?",
        "explainTh": "ท่านี้ทำให้สะโพกรู้สึกสบายไหมคะ"
      },
      {
        "q": "Choose the word that means \"the front of the head, including the eyes and mouth\":",
        "options": [
          "Towel",
          "Skin",
          "Face",
          "Finger"
        ],
        "correct": 2,
        "vocabularyId": "spa-v-face",
        "word": "Face",
        "added": true,
        "id": "spa-mc-055",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Face: The front of the head, including the eyes and mouth. Example: May I place this towel near your face?",
        "explainTh": "ขอวางผ้าขนหนูใกล้ใบหน้าได้ไหมคะ"
      },
      {
        "q": "Choose the word that means \"the area of the face above the eyes\":",
        "options": [
          "Pain",
          "Pressure",
          "Pillow",
          "Forehead"
        ],
        "correct": 3,
        "vocabularyId": "spa-v-forehead",
        "word": "Forehead",
        "added": true,
        "id": "spa-mc-056",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Forehead: The area of the face above the eyes. Example: Would you like me to avoid your forehead?",
        "explainTh": "ต้องการให้หลีกเลี่ยงบริเวณหน้าผากไหมคะ"
      },
      {
        "q": "Choose the word that means \"the skin on the top of the head\":",
        "options": [
          "Scalp",
          "Sheet",
          "Back",
          "Cup"
        ],
        "correct": 0,
        "vocabularyId": "spa-v-scalp",
        "word": "Scalp",
        "added": true,
        "id": "spa-mc-057",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Scalp: The skin on the top of the head. Example: Would you like me to avoid your scalp?",
        "explainTh": "ต้องการให้หลีกเลี่ยงบริเวณหนังศีรษะไหมคะ"
      },
      {
        "q": "Choose the word that means \"the outer covering of the body\":",
        "options": [
          "Heel",
          "Skin",
          "Supervisor",
          "Refund"
        ],
        "correct": 1,
        "vocabularyId": "spa-v-skin",
        "word": "Skin",
        "added": true,
        "id": "spa-mc-058",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Skin: The outer covering of the body. Example: Please tell me if your skin feels itchy.",
        "explainTh": "กรุณาบอกหากรู้สึกคันผิวค่ะ"
      },
      {
        "q": "Choose the word that means \"the amount of force used when pressing\":",
        "options": [
          "Refund",
          "Foot",
          "Pressure",
          "Hand"
        ],
        "correct": 2,
        "vocabularyId": "spa-v-pressure",
        "word": "Pressure",
        "added": true,
        "id": "spa-mc-059",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Pressure: The amount of force used when pressing. Example: Is the pressure comfortable?",
        "explainTh": "แรงกดสบายดีไหมคะ"
      },
      {
        "q": "Choose the word that means \"feeling relaxed and without discomfort\":",
        "options": [
          "Dizzy",
          "Clean",
          "Unwell",
          "Comfortable"
        ],
        "correct": 3,
        "vocabularyId": "spa-v-comfortable",
        "word": "Comfortable",
        "added": true,
        "id": "spa-mc-060",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Comfortable: Feeling relaxed and without discomfort. Example: Are you comfortable?",
        "explainTh": "คุณรู้สึกสบายดีไหมคะ"
      },
      {
        "q": "Choose the word that means \"not feeling physically comfortable\":",
        "options": [
          "Uncomfortable",
          "Sore",
          "Lighter",
          "Hot"
        ],
        "correct": 0,
        "vocabularyId": "spa-v-uncomfortable",
        "word": "Uncomfortable",
        "added": true,
        "id": "spa-mc-061",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Uncomfortable: Not feeling physically comfortable. Example: Please tell me if you feel uncomfortable.",
        "explainTh": "กรุณาบอกหากรู้สึกไม่สบายตัวค่ะ"
      },
      {
        "id": "spa-mc-062",
        "q": "Complete the sentence: Please ___ your name on the form.",
        "options": [
          "writes",
          "write",
          "writing",
          "wrote"
        ],
        "correct": 1,
        "explain": "After “please”, use the base verb: write.",
        "explainTh": "หลัง please ใช้คำกริยารูปพื้นฐาน write",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-063",
        "q": "Complete the sentence: Could you ___ your surname, please?",
        "options": [
          "spells",
          "spelling",
          "spell",
          "spelled"
        ],
        "correct": 2,
        "explain": "A modal verb such as “could” is followed by the base verb.",
        "explainTh": "หลัง could ใช้คำกริยารูปพื้นฐาน",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-064",
        "q": "Complete the sentence: The reception desk ___ open now.",
        "options": [
          "are",
          "be",
          "am",
          "is"
        ],
        "correct": 3,
        "explain": "“The reception desk” is singular, so use “is”.",
        "explainTh": "ประธานเป็นเอกพจน์ จึงใช้ is",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-065",
        "q": "Complete the sentence: There ___ two clean towels on the shelf.",
        "options": [
          "are",
          "is",
          "am",
          "be"
        ],
        "correct": 0,
        "explain": "“Two towels” is plural, so use “there are”.",
        "explainTh": "two towels เป็นพหูพจน์ จึงใช้ there are",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-066",
        "q": "Complete the sentence: Your appointment is ___ Monday.",
        "options": [
          "at",
          "on",
          "in",
          "to"
        ],
        "correct": 1,
        "explain": "Use “on” with a day of the week.",
        "explainTh": "ใช้ on กับวันในสัปดาห์",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-067",
        "q": "Complete the sentence: The meeting starts ___ three o’clock.",
        "options": [
          "on",
          "in",
          "at",
          "by"
        ],
        "correct": 2,
        "explain": "Use “at” to state the exact starting time.",
        "explainTh": "ใช้ at เพื่อบอกเวลาเริ่มที่แน่นอน",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-068",
        "q": "Complete the sentence: This locker is ___, not mine.",
        "options": [
          "your",
          "you",
          "yourself",
          "yours"
        ],
        "correct": 3,
        "explain": "“Yours” stands alone; “your” must come before a noun.",
        "explainTh": "yours ใช้เดี่ยวได้ ส่วน your ต้องมีคำนามตามหลัง",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-069",
        "q": "Complete the sentence: Is this ___ receipt?",
        "options": [
          "your",
          "yours",
          "you",
          "yourself"
        ],
        "correct": 0,
        "explain": "Use the possessive determiner “your” before “receipt”.",
        "explainTh": "ใช้ your หน้าคำนาม receipt",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-070",
        "q": "Complete the sentence: How ___ guests are in your group?",
        "options": [
          "much",
          "many",
          "any",
          "every"
        ],
        "correct": 1,
        "explain": "Use “how many” with plural countable nouns.",
        "explainTh": "ใช้ how many กับคำนามนับได้รูปพหูพจน์",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-071",
        "q": "Complete the sentence: How ___ water would you like?",
        "options": [
          "many",
          "few",
          "much",
          "several"
        ],
        "correct": 2,
        "explain": "Water is uncountable here, so use “how much”.",
        "explainTh": "water ในประโยคนี้นับไม่ได้ จึงใช้ how much",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-072",
        "q": "Complete the sentence: Would you like ___ extra towel?",
        "options": [
          "a",
          "many",
          "these",
          "an"
        ],
        "correct": 3,
        "explain": "“Extra” starts with a vowel sound, so use “an”.",
        "explainTh": "extra ขึ้นต้นด้วยเสียงสระ จึงใช้ an",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-073",
        "q": "Complete the sentence: Please wait ___ the reception desk.",
        "options": [
          "at",
          "on",
          "into",
          "through"
        ],
        "correct": 0,
        "explain": "“At the desk” names the service point where the guest should wait.",
        "explainTh": "at the reception desk หมายถึงจุดที่ให้รอ",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-074",
        "q": "Complete the sentence: We do not ___ this payment method.",
        "options": [
          "accepts",
          "accept",
          "accepting",
          "accepted"
        ],
        "correct": 1,
        "explain": "After “do not”, use the base verb “accept”.",
        "explainTh": "หลัง do not ใช้คำกริยารูปพื้นฐาน",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-075",
        "q": "Complete the sentence: ___ you need any help?",
        "options": [
          "Does",
          "Is",
          "Do",
          "Has"
        ],
        "correct": 2,
        "explain": "Use “do” for a present-simple question with “you”.",
        "explainTh": "คำถาม present simple ที่มี you ใช้ Do",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-076",
        "q": "Complete the sentence: She ___ the evening shift.",
        "options": [
          "work",
          "working",
          "are work",
          "works"
        ],
        "correct": 3,
        "explain": "With “she”, add -s to the present-simple verb.",
        "explainTh": "ประธาน she ใช้กริยา present simple เติม s",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-077",
        "q": "Complete the sentence: Please speak more ___; I did not hear the number.",
        "options": [
          "slowly",
          "slow",
          "slowerly",
          "slowness"
        ],
        "correct": 0,
        "explain": "“Slowly” is an adverb describing how to speak.",
        "explainTh": "slowly เป็นคำวิเศษณ์ขยายการพูด",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-078",
        "q": "Complete the sentence: Thank you for ___ us know.",
        "options": [
          "let",
          "letting",
          "lets",
          "to let"
        ],
        "correct": 1,
        "explain": "After “for”, use the -ing form in this expression.",
        "explainTh": "หลัง for ในสำนวนนี้ใช้ letting",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-079",
        "q": "Complete the sentence: I will ___ with my supervisor.",
        "options": [
          "checked",
          "checking",
          "check",
          "checks"
        ],
        "correct": 2,
        "explain": "After “will”, use the base verb “check”.",
        "explainTh": "หลัง will ใช้คำกริยารูปพื้นฐาน",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-080",
        "q": "Complete the sentence: The guest ___ two towels yesterday.",
        "options": [
          "request",
          "requests",
          "requesting",
          "requested"
        ],
        "correct": 3,
        "explain": "“Yesterday” places the completed action in the past.",
        "explainTh": "yesterday บอกอดีต จึงใช้ requested",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-081",
        "q": "Complete the sentence: We ___ your message ten minutes ago.",
        "options": [
          "received",
          "receive",
          "receives",
          "receiving"
        ],
        "correct": 0,
        "explain": "Use the past simple with “ago”.",
        "explainTh": "ใช้ past simple กับ ago",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-082",
        "q": "Complete the sentence: I am ___ the details now.",
        "options": [
          "check",
          "checking",
          "checked",
          "checks"
        ],
        "correct": 1,
        "explain": "“Am” plus an -ing form describes an action happening now.",
        "explainTh": "am ตามด้วยกริยาเติม ing เพื่อบอกสิ่งที่กำลังทำ",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-083",
        "q": "Complete the sentence: Could you tell me where the lounge ___?",
        "options": [
          "does",
          "be",
          "is",
          "are"
        ],
        "correct": 2,
        "explain": "An indirect question uses statement order: “where the lounge is”.",
        "explainTh": "คำถามทางอ้อมใช้ลำดับ where the lounge is",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-084",
        "q": "Complete the sentence: Would you mind ___ here for a moment?",
        "options": [
          "wait",
          "waits",
          "to wait",
          "waiting"
        ],
        "correct": 3,
        "explain": "“Would you mind” is followed by an -ing form.",
        "explainTh": "หลัง Would you mind ใช้กริยาเติม ing",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-085",
        "q": "Complete the sentence: The guest has already ___ the form.",
        "options": [
          "completed",
          "complete",
          "completes",
          "completing"
        ],
        "correct": 0,
        "explain": "“Has” plus the past participle forms the present perfect.",
        "explainTh": "has ตามด้วย past participle ใน present perfect",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-086",
        "q": "Complete the sentence: The waiting area is ___ than the corridor.",
        "options": [
          "quietest",
          "quieter",
          "quietly",
          "more quieter"
        ],
        "correct": 1,
        "explain": "“Than” introduces a comparison: use “quieter”.",
        "explainTh": "การเปรียบเทียบใช้ quieter than ไม่ใช้ more quieter",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-087",
        "q": "Complete the sentence: We have ___ clean towels, but not enough for the whole group.",
        "options": [
          "a little",
          "much",
          "a few",
          "any"
        ],
        "correct": 2,
        "explain": "“A few” means a small positive number of countable items.",
        "explainTh": "a few ใช้กับคำนามนับได้ หมายถึงมีอยู่เล็กน้อย",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-088",
        "q": "Complete the sentence: There is ___ water left in the bottle.",
        "options": [
          "a few",
          "many",
          "several",
          "a little"
        ],
        "correct": 3,
        "explain": "Use “a little” with uncountable water.",
        "explainTh": "ใช้ a little กับ water ซึ่งนับไม่ได้",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-089",
        "q": "Complete the sentence: The manager is not here, ___ I can take a message.",
        "options": [
          "but",
          "because",
          "unless",
          "although"
        ],
        "correct": 0,
        "explain": "“But” connects the limitation with a helpful alternative.",
        "explainTh": "but เชื่อมข้อจำกัดกับทางเลือกที่ช่วยได้",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-090",
        "q": "Complete the sentence: Please let me know ___ you need anything else.",
        "options": [
          "until",
          "if",
          "than",
          "despite"
        ],
        "correct": 1,
        "explain": "“If” introduces the condition: needing something else.",
        "explainTh": "if ใช้แสดงเงื่อนไขว่าต้องการสิ่งอื่นหรือไม่",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-091",
        "q": "Complete the sentence: The room is ___ cleaned at the moment.",
        "options": [
          "been",
          "be",
          "being",
          "was"
        ],
        "correct": 2,
        "explain": "“Is being cleaned” is a present continuous passive form.",
        "explainTh": "is being cleaned หมายถึงกำลังถูกทำความสะอาด",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-092",
        "q": "Complete the sentence: The schedule has ___ changed.",
        "options": [
          "being",
          "be",
          "was",
          "been"
        ],
        "correct": 3,
        "explain": "“Has been changed” is a present perfect passive form.",
        "explainTh": "has been changed เป็น present perfect passive",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-093",
        "q": "Complete the sentence: I am sorry ___ the delay.",
        "options": [
          "about",
          "to",
          "at",
          "of"
        ],
        "correct": 0,
        "explain": "“Sorry about” introduces the problem being apologised for.",
        "explainTh": "ใช้ sorry about เพื่อขอโทษเกี่ยวกับปัญหา",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-094",
        "q": "Complete the sentence: Please confirm whether the guest ___ received the message.",
        "options": [
          "have",
          "has",
          "is",
          "do"
        ],
        "correct": 1,
        "explain": "“The guest” is singular; “has received” describes completion.",
        "explainTh": "the guest เป็นเอกพจน์ จึงใช้ has received",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-095",
        "q": "Complete the sentence: We cannot confirm the refund ___ the manager reviews the request.",
        "options": [
          "during",
          "since",
          "until",
          "than"
        ],
        "correct": 2,
        "explain": "“Until” marks the point before which confirmation cannot happen.",
        "explainTh": "until บอกจุดเวลาที่ต้องรอก่อนยืนยัน",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-096",
        "q": "Complete the sentence: Neither of these keys ___ working.",
        "options": [
          "are being",
          "be",
          "have",
          "is"
        ],
        "correct": 3,
        "explain": "In this sentence, “neither” takes the singular verb “is”.",
        "explainTh": "ในประโยคนี้ neither ใช้กับกริยาเอกพจน์ is",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-097",
        "q": "Complete the sentence: The guest asked us ___ the details by email.",
        "options": [
          "to send",
          "sending",
          "sent",
          "sends"
        ],
        "correct": 0,
        "explain": "The pattern is “ask someone to do something”.",
        "explainTh": "โครงสร้างคือ ask someone to do something",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-098",
        "q": "Complete the sentence: Please check the amount before ___ the payment.",
        "options": [
          "take",
          "taking",
          "takes",
          "taken"
        ],
        "correct": 1,
        "explain": "Use an -ing form after the preposition “before”.",
        "explainTh": "หลัง before ที่เป็นบุพบทใช้กริยาเติม ing",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-099",
        "q": "Complete the sentence: The notice says the desk ___ close early tomorrow.",
        "options": [
          "did",
          "has",
          "will",
          "was"
        ],
        "correct": 2,
        "explain": "“Tomorrow” refers to the future; “will close” fits.",
        "explainTh": "tomorrow บอกอนาคต จึงใช้ will close",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "spa-mc-100",
        "q": "Complete the sentence: I have written ___ the guest’s request so the next shift can read it.",
        "options": [
          "up",
          "off",
          "away",
          "down"
        ],
        "correct": 3,
        "explain": "“Write down” means record in writing.",
        "explainTh": "write down หมายถึงจดบันทึก",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      }
    ],
    "tf": [
      {
        "statement": "You should always check for contraindications before a treatment begins.",
        "answer": true,
        "why": "Checking contraindications is a core safety step before every treatment.",
        "id": "spa-tf-001",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "“Exfoliation” means adding moisture back into the skin.",
        "answer": false,
        "why": "Exfoliation removes dead skin cells. Hydrating adds moisture.",
        "id": "spa-tf-002",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "A late arrival may affect the available treatment time, so staff should explain the options clearly.",
        "answer": true,
        "why": "Explain any verified time limit politely and let the guest understand the available options.",
        "id": "spa-tf-003",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "A guest should be asked to undress only to their own comfort level.",
        "answer": true,
        "why": "Guests must always keep control over their own privacy and comfort.",
        "id": "spa-tf-004",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "Tools only need sanitising at the end of the working day.",
        "answer": false,
        "why": "Tools are sanitised between every guest to prevent cross-contamination.",
        "id": "spa-tf-005",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "“Complimentary” means the service is offered free of charge.",
        "answer": true,
        "why": "Complimentary means free of charge, often as an included extra.",
        "id": "spa-tf-006",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "The phrase “lighter pressure” asks for less pressure.",
        "answer": true,
        "why": "“Lighter” compares the pressure with its current level and asks for a reduction.",
        "id": "spa-tf-007",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "Aftercare advice should be appropriate to the specific treatment and guest.",
        "answer": true,
        "why": "Use approved treatment-specific advice; do not give the same health advice to every guest.",
        "id": "spa-tf-008",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "If a guest complains, you should explain why they are mistaken.",
        "answer": false,
        "why": "Start with empathy and offer to put things right, not with a defence.",
        "id": "spa-tf-009",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "A patch test checks for a reaction before a product is fully applied.",
        "answer": true,
        "why": "That is exactly its purpose — a small trial application first.",
        "id": "spa-tf-010",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "It is fine to blame a colleague if the spa is running late.",
        "answer": false,
        "why": "Stay professional: thank the guest for waiting without blaming anyone.",
        "id": "spa-tf-011",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "A “walk-in” is a guest who arrives without a booking.",
        "answer": true,
        "why": "Correct — walk-ins have made no prior appointment.",
        "id": "spa-tf-012",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "Staff should give every facial guest exactly the same aftercare instructions.",
        "answer": false,
        "why": "Use approved instructions for the particular treatment and guest; do not generalise.",
        "id": "spa-tf-013",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "You should ask guests whether they prefer conversation or quiet.",
        "answer": true,
        "why": "Asking respects the guest’s preferred experience during treatment.",
        "id": "spa-tf-014",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "“Clean” and “sterile” can be used as exact synonyms in workplace instructions.",
        "answer": false,
        "why": "These words describe different hygiene conditions. Follow the approved procedure and its exact terminology.",
        "id": "spa-tf-015",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "A cuticle is the thin layer of skin at the base of the nail.",
        "answer": true,
        "why": "Correct — that is precisely what a cuticle is.",
        "id": "spa-tf-016",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "It is acceptable to say “your skin looks bad” when recommending a product.",
        "answer": false,
        "why": "Never judge a guest’s appearance. Frame products as an optional complement.",
        "id": "spa-tf-017",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "Reflexology focuses on pressure points in the feet, hands or ears.",
        "answer": true,
        "why": "Correct — reflexology works on these specific pressure-point areas.",
        "id": "spa-tf-018",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "A deposit is money refunded to the guest after treatment.",
        "answer": false,
        "why": "A deposit is paid in advance to secure the booking.",
        "id": "spa-tf-019",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "“Ambience” describes the atmosphere created by lighting, music and scent.",
        "answer": true,
        "why": "Correct — it is the overall mood of the space.",
        "id": "spa-tf-020",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "Draping exists mainly to keep the treatment room tidy.",
        "answer": false,
        "why": "Draping protects the guest’s privacy and warmth, not tidiness.",
        "id": "spa-tf-021",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "You should tell a guest when their therapist made a mistake, naming the colleague.",
        "answer": false,
        "why": "Apologise and fix it. Guests experience the spa as one team.",
        "id": "spa-tf-022",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "Dehydrated skin lacks water, while dry skin lacks oil.",
        "answer": true,
        "why": "Correct — they are different conditions with different treatments.",
        "id": "spa-tf-023",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "Prenatal massage uses the same positions and pressure as a standard massage.",
        "answer": false,
        "why": "Pregnancy-related treatments require an appropriately qualified practitioner and individual assessment; do not assume one position or technique suits everyone.",
        "id": "spa-tf-024",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "A spilled bottle of oil on the floor is a slip hazard.",
        "answer": true,
        "why": "Correct — it should be cleaned immediately to prevent a fall.",
        "id": "spa-tf-025",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "It is good practice to keep offering an add-on after a guest has declined.",
        "answer": false,
        "why": "Once a guest declines, accept it gracefully and move on.",
        "id": "spa-tf-026",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "A shift handover should include guests’ pressure preferences.",
        "answer": true,
        "why": "Correct — that detail helps the next therapist look after them well.",
        "id": "spa-tf-027",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "“Escalate” means to make a guest more upset.",
        "answer": false,
        "why": "To escalate is to pass a problem to a manager or someone more senior.",
        "id": "spa-tf-028",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-029",
        "statement": "“Available” means that something can be used or booked.",
        "answer": true,
        "why": "It describes something that is free for use, not already taken.",
        "explainTh": "available หมายถึงพร้อมใช้หรือว่างให้จอง",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-030",
        "statement": "“Earlier” means after the time originally mentioned.",
        "answer": false,
        "why": "Earlier means before that time; later means after it.",
        "explainTh": "earlier หมายถึงก่อนเวลาเดิม ส่วน later คือหลังเวลาเดิม",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-031",
        "statement": "“Could you repeat that?” asks someone to say something again.",
        "answer": true,
        "why": "Repeat means say or do something again.",
        "explainTh": "repeat หมายถึงพูดหรือทำซ้ำ",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-032",
        "statement": "“Two extra towels” means two fewer towels.",
        "answer": false,
        "why": "Extra means additional, not fewer.",
        "explainTh": "extra หมายถึงเพิ่มเติม ไม่ใช่น้อยลง",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-033",
        "statement": "“Your receipt” uses “your” correctly before a noun.",
        "answer": true,
        "why": "“Your” comes before a noun; “yours” can stand alone.",
        "explainTh": "your ใช้หน้าคำนาม ส่วน yours ใช้เดี่ยวได้",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-034",
        "statement": "“How many water?” is the usual form for asking about an amount of water.",
        "answer": false,
        "why": "Use “how much water” because water is uncountable here.",
        "explainTh": "water นับไม่ได้ จึงใช้ how much water",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-035",
        "statement": "“I will check” promises to check, not that the request is already approved.",
        "answer": true,
        "why": "The next action is checking; approval has not been stated.",
        "explainTh": "ประโยคนี้รับปากว่าจะตรวจสอบ แต่ยังไม่ได้อนุมัติ",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-036",
        "statement": "A guest who says “No, thank you” has accepted the offer.",
        "answer": false,
        "why": "The phrase politely declines an offer.",
        "explainTh": "No, thank you เป็นการปฏิเสธอย่างสุภาพ",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-037",
        "statement": "A polite sentence can still be unhelpful when it does not answer the guest’s actual request.",
        "answer": true,
        "why": "Politeness and relevance both matter in a useful response.",
        "explainTh": "คำตอบควรสุภาพและตรงกับสิ่งที่ผู้ใช้บริการถาม",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-038",
        "statement": "When a time is unconfirmed, staff should present it as a definite promise.",
        "answer": false,
        "why": "Say that you need to check before confirming the time.",
        "explainTh": "ควรตรวจสอบเวลาก่อนยืนยัน ไม่รับปากโดยยังไม่ทราบ",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-039",
        "statement": "“Let me check I understood” introduces a confirmation of details.",
        "answer": true,
        "why": "Repeating key details lets the guest correct a misunderstanding.",
        "explainTh": "ทวนรายละเอียดเพื่อให้ผู้ใช้บริการแก้ความเข้าใจผิดได้",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-040",
        "statement": "“Could you spell that?” asks for a translation into Thai.",
        "answer": false,
        "why": "It asks for the letters in a name or word.",
        "explainTh": "เป็นการขอให้สะกดตัวอักษร ไม่ใช่แปลภาษา",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-041",
        "statement": "A question beginning “Would you like…?” usually offers a choice.",
        "answer": true,
        "why": "It invites the guest to accept or decline an offer.",
        "explainTh": "ใช้เสนอทางเลือกให้รับหรือปฏิเสธ",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-042",
        "statement": "“I have already sent it” means the message has not been sent yet.",
        "answer": false,
        "why": "Already indicates completion before now.",
        "explainTh": "already แสดงว่าส่งเรียบร้อยแล้ว",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-043",
        "statement": "“Please confirm” asks the other person to check or state that something is correct.",
        "answer": true,
        "why": "Confirm means make a detail certain or agreed.",
        "explainTh": "confirm หมายถึงยืนยันว่ารายละเอียดถูกต้องหรือตกลงแล้ว",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-044",
        "statement": "“Not yet” means the same as “never”.",
        "answer": false,
        "why": "Not yet means it has not happened up to now; it may happen later.",
        "explainTh": "not yet คือยังไม่เกิดขึ้น แต่อาจเกิดในภายหลัง",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-045",
        "statement": "“May be delayed” states a possibility rather than a certainty.",
        "answer": true,
        "why": "May expresses possibility; it does not guarantee a delay.",
        "explainTh": "may แสดงความเป็นไปได้ ไม่ได้ยืนยันว่าจะล่าช้าแน่นอน",
        "level": 3,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-046",
        "statement": "“I can request a refund” guarantees that a refund has been approved.",
        "answer": false,
        "why": "Requesting approval is different from receiving approval.",
        "explainTh": "การขออนุมัติต่างจากการได้รับอนุมัติแล้ว",
        "level": 3,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-047",
        "statement": "“Could you tell me where the desk is?” uses correct indirect-question word order.",
        "answer": true,
        "why": "After “where”, use statement order: the desk is.",
        "explainTh": "คำถามทางอ้อมใช้ where the desk is",
        "level": 3,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-048",
        "statement": "“Would you mind wait here?” has the correct verb form.",
        "answer": false,
        "why": "Use “Would you mind waiting here?” with an -ing form.",
        "explainTh": "หลัง Would you mind ใช้ waiting",
        "level": 3,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-049",
        "statement": "A useful follow-up confirms whether the guest still needs help.",
        "answer": true,
        "why": "The original action may not have fully resolved the request.",
        "explainTh": "การติดตามช่วยตรวจว่าคำขอได้รับการแก้ไขแล้วหรือยัง",
        "level": 3,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-tf-050",
        "statement": "The word “approximately” guarantees an exact time or amount.",
        "answer": false,
        "why": "Approximately means about, so the figure is an estimate.",
        "explainTh": "approximately หมายถึงประมาณ ไม่ใช่ตัวเลขที่แน่นอน",
        "level": 3,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      }
    ],
    "error": [
      {
        "wrong": "Wait here.",
        "options": [
          "Please have a seat while we prepare your room.",
          "Stand there please.",
          "You wait now."
        ],
        "correct": 0,
        "why": "A warm invitation with a reason, rather than a bare command.",
        "id": "spa-error-001",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "You don’t have allergies, right?",
        "options": [
          "No allergies then?",
          "Could you tell me about any allergies or sensitivities?",
          "You are fine, correct?"
        ],
        "correct": 1,
        "why": "An open question doesn’t assume the answer, so guests disclose more.",
        "id": "spa-error-002",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "Time’s up, you need to leave.",
        "options": [
          "We are finished now.",
          "Please leave the room.",
          "That brings us to the end of your session — take your time getting up."
        ],
        "correct": 2,
        "why": "Closes the session gently instead of rushing the guest.",
        "id": "spa-error-003",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
        "id": "spa-error-004",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "It’s not hot.",
        "options": [
          "The temperature is safe for everyone.",
          "Thank you for telling me. I will stop and check the temperature.",
          "It cannot be too hot."
        ],
        "correct": 1,
        "why": "Acknowledge the reported heat and check; do not guarantee safety or dismiss discomfort.",
        "id": "spa-error-005",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "That’s normal pressure, everyone gets the same.",
        "options": [
          "It is standard pressure.",
          "You will get used to it.",
          "Thank you for telling me — I’ll adjust that right away."
        ],
        "correct": 2,
        "why": "Validates the feedback and acts on it immediately.",
        "id": "spa-error-006",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
        "id": "spa-error-007",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "You have to fill this in, it’s the rule.",
        "options": [
          "It is required by the spa.",
          "This form helps us keep you safe — it only takes a moment.",
          "No form, no treatment."
        ],
        "correct": 1,
        "why": "Explains the reason behind the rule rather than only citing it.",
        "id": "spa-error-008",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "The therapist before you took too long.",
        "options": [
          "It is not my fault.",
          "The last guest was slow.",
          "Thank you for your patience — we’re running a few minutes behind today."
        ],
        "correct": 2,
        "why": "Stays professional without blaming a colleague in front of a guest.",
        "id": "spa-error-009",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
        "id": "spa-error-010",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "We don’t do discounts.",
        "options": [
          "No discounts here.",
          "I can’t reduce today’s price, but may I tell you about our loyalty programme?",
          "That is the price."
        ],
        "correct": 1,
        "why": "Redirects to a real, positive alternative instead of a flat no.",
        "id": "spa-error-011",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "There’s nothing wrong with it.",
        "options": [
          "It looks fine to me.",
          "That is the normal result.",
          "Let’s talk through what you were hoping for, so we can make it right."
        ],
        "correct": 2,
        "why": "Opens a real conversation instead of dismissing the guest.",
        "id": "spa-error-012",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
        "id": "spa-error-013",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "You don’t understand?",
        "options": [
          "I already told you.",
          "Let me explain that again more slowly — please stop me any time.",
          "Listen carefully this time."
        ],
        "correct": 1,
        "why": "Puts the responsibility on your explanation, never on the guest.",
        "id": "spa-error-014",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "Wake up, we’re finished!",
        "options": [
          "Time to get up now.",
          "You fell asleep again.",
          "Take your time waking up — there’s no rush at all."
        ],
        "correct": 2,
        "why": "A gentle wake-up protects the calm the treatment created.",
        "id": "spa-error-015",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
        "id": "spa-error-016",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "That wasn’t me, it was the other therapist.",
        "options": [
          "You should talk to her about it.",
          "I’m sorry that happened — let me put it right for you now.",
          "It was not my shift."
        ],
        "correct": 1,
        "why": "Guests see the spa as one team; deflecting blame breaks their trust.",
        "id": "spa-error-017",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "No, we can’t do that.",
        "options": [
          "That is not allowed.",
          "It is against the rules.",
          "For your safety I’d recommend against that today — may I suggest an alternative?"
        ],
        "correct": 2,
        "why": "Grounds a refusal in the guest’s wellbeing and offers a way forward.",
        "id": "spa-error-018",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-019",
        "wrong": "She work at reception.",
        "options": [
          "She works at reception.",
          "She working at reception.",
          "She are work at reception."
        ],
        "correct": 0,
        "why": "Use “works” with the singular subject “she”.",
        "explainTh": "ประธาน she ใช้ works",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-020",
        "wrong": "There is two guests waiting.",
        "options": [
          "There be two guests waiting.",
          "There are two guests waiting.",
          "There am two guests waiting."
        ],
        "correct": 1,
        "why": "Use “are” with the plural noun “guests”.",
        "explainTh": "guests เป็นพหูพจน์ ใช้ are",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-021",
        "wrong": "Could you spells your name?",
        "options": [
          "Could you spelling your name?",
          "Could you spelled your name?",
          "Could you spell your name?"
        ],
        "correct": 2,
        "why": "A modal verb is followed by the base form.",
        "explainTh": "หลัง could ใช้กริยารูปพื้นฐาน",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-022",
        "wrong": "Please writes your room number.",
        "options": [
          "Please write your room number.",
          "Please writing your room number.",
          "Please wrote your room number."
        ],
        "correct": 0,
        "why": "Use the base verb in a request beginning with “please”.",
        "explainTh": "หลัง please ใช้ write",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-023",
        "wrong": "Is this yours bag?",
        "options": [
          "Is this you bag?",
          "Is this your bag?",
          "Is this yourself bag?"
        ],
        "correct": 1,
        "why": "Use “your” before a noun.",
        "explainTh": "ใช้ your หน้าคำนาม bag",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-024",
        "wrong": "This key is your.",
        "options": [
          "This key is you.",
          "This key is yourself.",
          "This key is yours."
        ],
        "correct": 2,
        "why": "Use “yours” when the possessive stands alone.",
        "explainTh": "ใช้ yours เมื่อไม่มีคำนามตามหลัง",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-025",
        "wrong": "How many money is the deposit?",
        "options": [
          "How much money is the deposit?",
          "How few money is the deposit?",
          "How several money is the deposit?"
        ],
        "correct": 0,
        "why": "Money is uncountable: use “how much”.",
        "explainTh": "money นับไม่ได้ ใช้ how much",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-026",
        "wrong": "How much towels do you need?",
        "options": [
          "How little towels do you need?",
          "How many towels do you need?",
          "How every towels do you need?"
        ],
        "correct": 1,
        "why": "Towels are countable: use “how many”.",
        "explainTh": "towels นับได้ ใช้ how many",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-027",
        "wrong": "We opens at nine.",
        "options": [
          "We opening at nine.",
          "We is open at nine.",
          "We open at nine."
        ],
        "correct": 2,
        "why": "Use “open” with the subject “we”.",
        "explainTh": "ประธาน we ใช้ open",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-028",
        "wrong": "He are the duty manager.",
        "options": [
          "He is the duty manager.",
          "He am the duty manager.",
          "He be the duty manager."
        ],
        "correct": 0,
        "why": "Use “is” with “he”.",
        "explainTh": "ประธาน he ใช้ is",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-029",
        "wrong": "Please speak slow.",
        "options": [
          "Please speak slowness.",
          "Please speak slowly.",
          "Please speak slowerly."
        ],
        "correct": 1,
        "why": "Use the adverb “slowly” to describe speaking.",
        "explainTh": "ใช้ slowly ขยาย speak",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-030",
        "wrong": "Would you like a extra blanket?",
        "options": [
          "Would you like these extra blanket?",
          "Would you like many extra blanket?",
          "Would you like an extra blanket?"
        ],
        "correct": 2,
        "why": "Use “an” before the vowel sound in “extra”.",
        "explainTh": "extra ขึ้นต้นด้วยเสียงสระ ใช้ an",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-031",
        "wrong": "The appointment is at Friday.",
        "options": [
          "The appointment is on Friday.",
          "The appointment is into Friday.",
          "The appointment is in Friday."
        ],
        "correct": 0,
        "why": "Use “on” with a day of the week.",
        "explainTh": "ใช้ on กับวันในสัปดาห์",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-032",
        "wrong": "The desk opens in eight o’clock.",
        "options": [
          "The desk opens on eight o’clock.",
          "The desk opens at eight o’clock.",
          "The desk opens into eight o’clock."
        ],
        "correct": 1,
        "why": "Use “at” with an exact opening time.",
        "explainTh": "ใช้ at กับเวลาเปิดที่แน่นอน",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-033",
        "wrong": "Thank you for wait.",
        "options": [
          "Thank you for waits.",
          "Thank you for waited.",
          "Thank you for waiting."
        ],
        "correct": 2,
        "why": "Use an -ing form after “for”.",
        "explainTh": "หลัง for ใช้ waiting",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-034",
        "wrong": "I will checking that for you.",
        "options": [
          "I will check that for you.",
          "I will checks that for you.",
          "I will checked that for you."
        ],
        "correct": 0,
        "why": "“Will” takes the base form “check”.",
        "explainTh": "หลัง will ใช้ check",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-035",
        "wrong": "I am check the booking.",
        "options": [
          "I am checks the booking.",
          "I am checking the booking.",
          "I am checked the booking."
        ],
        "correct": 1,
        "why": "Use “am” plus an -ing verb for an action in progress.",
        "explainTh": "ใช้ am checking เพื่อบอกว่ากำลังตรวจสอบ",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-036",
        "wrong": "The guest arrive yesterday.",
        "options": [
          "The guest arrives yesterday.",
          "The guest arriving yesterday.",
          "The guest arrived yesterday."
        ],
        "correct": 2,
        "why": "Use the past simple with “yesterday”.",
        "explainTh": "yesterday บอกอดีต ใช้ arrived",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-037",
        "wrong": "We has received the message.",
        "options": [
          "We have received the message.",
          "We is received the message.",
          "We do received the message."
        ],
        "correct": 0,
        "why": "Use “have” with “we”.",
        "explainTh": "ประธาน we ใช้ have received",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-038",
        "wrong": "She have already paid.",
        "options": [
          "She is already paid.",
          "She has already paid.",
          "She do already paid."
        ],
        "correct": 1,
        "why": "Use “has” with “she” in the present perfect.",
        "explainTh": "ประธาน she ใช้ has already paid",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-039",
        "wrong": "Could you tell me where is reception?",
        "options": [
          "Could you tell me where reception be?",
          "Could you tell me where does reception is?",
          "Could you tell me where reception is?"
        ],
        "correct": 2,
        "why": "Indirect questions use statement word order.",
        "explainTh": "คำถามทางอ้อมใช้ where reception is",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-040",
        "wrong": "Would you mind to wait?",
        "options": [
          "Would you mind waiting?",
          "Would you mind waits?",
          "Would you mind waited?"
        ],
        "correct": 0,
        "why": "Use an -ing form after “would you mind”.",
        "explainTh": "หลัง would you mind ใช้ waiting",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-041",
        "wrong": "This room is more quieter.",
        "options": [
          "This room is quietest than.",
          "This room is quieter.",
          "This room is quietlier."
        ],
        "correct": 1,
        "why": "Do not use “more” together with the -er comparative.",
        "explainTh": "ไม่ใช้ more ซ้อนกับ quieter",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-042",
        "wrong": "There are a little towels left.",
        "options": [
          "There are much towels left.",
          "There are a water towels left.",
          "There are a few towels left."
        ],
        "correct": 2,
        "why": "Use “a few” with plural countable towels.",
        "explainTh": "ใช้ a few กับ towels ซึ่งนับได้",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-043",
        "wrong": "There is a few water left.",
        "options": [
          "There is a little water left.",
          "There is many water left.",
          "There is several water left."
        ],
        "correct": 0,
        "why": "Use “a little” with uncountable water.",
        "explainTh": "ใช้ a little กับ water ซึ่งนับไม่ได้",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-044",
        "wrong": "Please let me to check.",
        "options": [
          "Please let me checking.",
          "Please let me check.",
          "Please let me checked."
        ],
        "correct": 1,
        "why": "The pattern is “let someone do”, without “to”.",
        "explainTh": "โครงสร้าง let me check ไม่เติม to",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-045",
        "wrong": "I suggest to check the details.",
        "options": [
          "I suggest checks the details.",
          "I suggest checked the details.",
          "I suggest checking the details."
        ],
        "correct": 2,
        "why": "In this pattern, “suggest” takes an -ing form.",
        "explainTh": "ในโครงสร้างนี้ suggest ตามด้วย checking",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-046",
        "wrong": "Please remember bring your receipt.",
        "options": [
          "Please remember to bring your receipt.",
          "Please remember brings your receipt.",
          "Please remember brought your receipt."
        ],
        "correct": 0,
        "why": "Use “remember to” for an action still to be done.",
        "explainTh": "remember to ใช้เตือนให้ทำสิ่งที่ยังไม่ได้ทำ",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-047",
        "wrong": "The request has being approved.",
        "options": [
          "The request has be approved.",
          "The request has been approved.",
          "The request has was approved."
        ],
        "correct": 1,
        "why": "The present perfect passive is “has been approved”.",
        "explainTh": "present perfect passive ใช้ has been approved",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-048",
        "wrong": "The form was fill in yesterday.",
        "options": [
          "The form was fills in yesterday.",
          "The form was filling in yesterday.",
          "The form was filled in yesterday."
        ],
        "correct": 2,
        "why": "Use a past participle after “was” in a passive sentence.",
        "explainTh": "ประโยค passive ใช้ was filled in",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-049",
        "wrong": "The guest asked me sending an email.",
        "options": [
          "The guest asked me to send an email.",
          "The guest asked me sends an email.",
          "The guest asked me sent an email."
        ],
        "correct": 0,
        "why": "The pattern is “ask someone to do something”.",
        "explainTh": "ใช้ ask someone to do something",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-error-050",
        "wrong": "Please check before take payment.",
        "options": [
          "Please check before takes payment.",
          "Please check before taking payment.",
          "Please check before taken payment."
        ],
        "correct": 1,
        "why": "Use an -ing form after “before” in this pattern.",
        "explainTh": "โครงสร้างนี้ใช้ before taking",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      }
    ],
    "listen": [
      {
        "target": "Acupressure",
        "distractors": [
          "Aromatherapy",
          "Reflexology",
          "Sanitise"
        ],
        "id": "spa-listen-001",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Finger pressure on set points",
        "explainTh": "การกดจุด"
      },
      {
        "target": "Exfoliation",
        "distractors": [
          "Extraction",
          "Hydrotherapy",
          "Rejuvenating"
        ],
        "id": "spa-listen-002",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Removing dead skin cells",
        "explainTh": "การขัดผิว"
      },
      {
        "target": "Contraindication",
        "distractors": [
          "Consultation form",
          "Cross-contamination",
          "Cancellation policy"
        ],
        "id": "spa-listen-003",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A reason a treatment is unsafe",
        "explainTh": "ข้อห้ามในการทำทรีตเมนต์"
      },
      {
        "target": "Aromatherapy",
        "distractors": [
          "Acupressure",
          "Thermotherapy",
          "Cryotherapy"
        ],
        "id": "spa-listen-004",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Treatment using essential oils",
        "explainTh": "สุคนธบำบัด"
      },
      {
        "target": "Rejuvenating",
        "distractors": [
          "Detoxifying",
          "Hydrating",
          "Anti-ageing"
        ],
        "id": "spa-listen-005",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Makes skin look fresher",
        "explainTh": "ฟื้นฟูความอ่อนเยาว์"
      },
      {
        "target": "Lymphatic drainage",
        "distractors": [
          "Deep tissue",
          "Trigger point",
          "Sports massage"
        ],
        "id": "spa-listen-006",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Gentle strokes to move fluid",
        "explainTh": "การนวดระบายน้ำเหลือง"
      },
      {
        "target": "Therapeutic",
        "distractors": [
          "Complimentary",
          "Thermotherapy",
          "Wellbeing"
        ],
        "id": "spa-listen-007",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Having a healing effect",
        "explainTh": "เพื่อการบำบัดรักษา"
      },
      {
        "target": "Microdermabrasion",
        "distractors": [
          "Exfoliation",
          "Extraction",
          "Chemical peel"
        ],
        "id": "spa-listen-008",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Machine skin resurfacing",
        "explainTh": "การขัดผิวหน้าด้วยเครื่องไมโครเดิร์ม"
      },
      {
        "target": "Reflexology",
        "distractors": [
          "Acupressure",
          "Petrissage",
          "Effleurage"
        ],
        "id": "spa-listen-009",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Pressure work based on traditional body-area connections.",
        "explainTh": "การนวดกดจุดสะท้อนฝ่าเท้า"
      },
      {
        "target": "Complimentary",
        "distractors": [
          "Consultation form",
          "Cancellation policy",
          "Membership"
        ],
        "id": "spa-listen-010",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Offered free of charge",
        "explainTh": "บริการฟรี"
      },
      {
        "target": "Petrissage",
        "distractors": [
          "Effleurage",
          "Tapotement",
          "Compression"
        ],
        "id": "spa-listen-011",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Kneading, deeper muscle work",
        "explainTh": "การนวดคลึงและบีบกล้ามเนื้อ"
      },
      {
        "target": "Tapotement",
        "distractors": [
          "Petrissage",
          "Friction",
          "Kneading"
        ],
        "id": "spa-listen-012",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Rhythmic tapping movement",
        "explainTh": "การนวดสับเบาๆ"
      },
      {
        "target": "Hydrotherapy",
        "distractors": [
          "Thermotherapy",
          "Cryotherapy",
          "Aromatherapy"
        ],
        "id": "spa-listen-013",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Water-based treatment",
        "explainTh": "ธาราบำบัด"
      },
      {
        "target": "Cuticle",
        "distractors": [
          "Callus",
          "Blemish",
          "Pore"
        ],
        "id": "spa-listen-014",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Thin skin at nail base",
        "explainTh": "หนังกำพร้าโคนเล็บ"
      },
      {
        "target": "Sterilise",
        "distractors": [
          "Sanitise",
          "Disposable",
          "Detox"
        ],
        "id": "spa-listen-015",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Completely destroy bacteria on tools",
        "explainTh": "การทำให้ปราศจากเชื้อ"
      },
      {
        "target": "Reschedule",
        "distractors": [
          "Referral",
          "Reception",
          "Rejuvenating"
        ],
        "id": "spa-listen-016",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Move a booking to another time",
        "explainTh": "เลื่อนนัดหมาย"
      },
      {
        "target": "Collagen",
        "distractors": [
          "Serum",
          "Moisturiser",
          "Toning"
        ],
        "id": "spa-listen-017",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Protein that keeps skin firm",
        "explainTh": "คอลลาเจน"
      },
      {
        "target": "Metabolism",
        "distractors": [
          "Mindfulness",
          "Circulation",
          "Posture"
        ],
        "id": "spa-listen-018",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Converts food into energy",
        "explainTh": "กระบวนการเผาผลาญ"
      },
      {
        "target": "Hypoallergenic",
        "distractors": [
          "Fragrance-free",
          "Disposable",
          "Contraindication"
        ],
        "id": "spa-listen-019",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A claim of lower allergy risk, not an allergy-free guarantee.",
        "explainTh": "ระบุว่ามีโอกาสก่ออาการแพ้น้อย แต่ยังอาจแพ้ได้"
      },
      {
        "target": "Draping",
        "distractors": [
          "Bolster",
          "Kneading",
          "Toning"
        ],
        "id": "spa-listen-020",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Covering a guest with towels",
        "explainTh": "การคลุมผ้าให้ลูกค้า"
      },
      {
        "target": "Turnaround",
        "distractors": [
          "Stocktake",
          "Restock",
          "Rota"
        ],
        "id": "spa-listen-021",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Resetting a room between guests",
        "explainTh": "เวลาจัดห้องใหม่"
      },
      {
        "target": "Dehydrated skin",
        "distractors": [
          "Congested skin",
          "Combination skin",
          "Blemish"
        ],
        "id": "spa-listen-022",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Skin lacking water, looks dull",
        "explainTh": "ผิวขาดน้ำ"
      },
      {
        "target": "Itinerary",
        "distractors": [
          "Testimonial",
          "Membership",
          "Referral"
        ],
        "id": "spa-listen-023",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Planned schedule for a visit",
        "explainTh": "กำหนดการทรีตเมนต์"
      },
      {
        "target": "Escalate",
        "distractors": [
          "Reschedule",
          "Restock",
          "Sanitise"
        ],
        "id": "spa-listen-024",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Pass a problem to a manager",
        "explainTh": "ส่งต่อให้หัวหน้า"
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
        "id": "spa-listen-025",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The part of the body between the neck and upper arm.",
        "explainTh": "ไหล่"
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
        "id": "spa-listen-026",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The part that joins the head to the body.",
        "explainTh": "คอ"
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
        "id": "spa-listen-027",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The rear part of the body below the shoulders.",
        "explainTh": "หลัง"
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
        "id": "spa-listen-028",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The area of the back just above the hips.",
        "explainTh": "หลังส่วนล่าง"
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
        "id": "spa-listen-029",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The body part between the shoulder and the hand.",
        "explainTh": "แขน"
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
        "id": "spa-listen-030",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The joint in the middle of the arm.",
        "explainTh": "ข้อศอก"
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
        "id": "spa-listen-031",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The joint between the hand and the arm.",
        "explainTh": "ข้อมือ"
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
        "id": "spa-listen-032",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The body part at the end of the arm.",
        "explainTh": "มือ"
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
        "id": "spa-listen-033",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "One of the long parts of a hand.",
        "explainTh": "นิ้วมือ"
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
        "id": "spa-listen-034",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The body part used for standing and walking.",
        "explainTh": "ขา"
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
        "id": "spa-listen-035",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The joint in the middle of the leg.",
        "explainTh": "เข่า"
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
        "id": "spa-listen-036",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The joint between the foot and the leg.",
        "explainTh": "ข้อเท้า"
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
        "id": "spa-listen-037",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The body part at the end of the leg.",
        "explainTh": "เท้า"
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
        "id": "spa-listen-038",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The back part of the foot underneath the ankle.",
        "explainTh": "ส้นเท้า"
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
        "id": "spa-listen-039",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "One of the small parts at the end of a foot.",
        "explainTh": "นิ้วเท้า"
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
        "id": "spa-listen-040",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The side of the body above the upper leg.",
        "explainTh": "สะโพก"
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
        "id": "spa-listen-041",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The front of the head, including the eyes and mouth.",
        "explainTh": "ใบหน้า"
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
        "id": "spa-listen-042",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The area of the face above the eyes.",
        "explainTh": "หน้าผาก"
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
        "id": "spa-listen-043",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The skin on the top of the head.",
        "explainTh": "หนังศีรษะ"
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
        "id": "spa-listen-044",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The outer covering of the body.",
        "explainTh": "ผิวหนัง"
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
        "id": "spa-listen-045",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The amount of force used when pressing.",
        "explainTh": "แรงกด"
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
        "id": "spa-listen-046",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Feeling relaxed and without discomfort.",
        "explainTh": "สบาย"
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
        "id": "spa-listen-047",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Not feeling physically comfortable.",
        "explainTh": "ไม่สบายตัว"
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
        "id": "spa-listen-048",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Using little force and taking care.",
        "explainTh": "เบาและนุ่มนวล"
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
        "id": "spa-listen-049",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Using more pressure, without meaning painful.",
        "explainTh": "หนักแน่น"
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
        "id": "spa-listen-050",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Using less force than before.",
        "explainTh": "เบาลง"
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
        "id": "spa-listen-051",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A little hot, but not very hot.",
        "explainTh": "อุ่น"
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
        "id": "spa-listen-052",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A little cold rather than warm.",
        "explainTh": "เย็น"
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
        "id": "spa-listen-053",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Having a high temperature.",
        "explainTh": "ร้อน"
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
        "id": "spa-listen-054",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Having a low temperature or feeling a lack of warmth.",
        "explainTh": "หนาว / เย็น"
      },
      {
        "id": "spa-listen-055",
        "target": "Headband",
        "distractors": [
          "Slippers",
          "Cup",
          "Hair tie"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-headband",
        "explain": "A band that keeps hair away from the face.",
        "explainTh": "ที่คาดผม",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-056",
        "target": "Detox",
        "distractors": [
          "Metabolism",
          "Energy flow",
          "Mindfulness"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-detox",
        "explain": "A wellness marketing term; not medical detoxification.",
        "explainTh": "ดีท็อกซ์: คำทางการตลาด ไม่ใช่การรักษาทางการแพทย์",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-057",
        "target": "Sunscreen",
        "distractors": [
          "Cleansing",
          "Moisturiser",
          "Serum"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-sunscreen",
        "explain": "Protects skin from UV rays",
        "explainTh": "ครีมกันแดด",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-058",
        "target": "Mud treatment",
        "distractors": [
          "Thermotherapy",
          "Steam room",
          "Sauna"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-mud-treatment",
        "explain": "Mineral-rich mud treatment",
        "explainTh": "การพอกโคลน",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-059",
        "target": "Cover",
        "distractors": [
          "Remove",
          "Pause",
          "Spell"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-cover",
        "explain": "Place something over someone or something.",
        "explainTh": "คลุม",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-060",
        "target": "Pause",
        "distractors": [
          "Prefer",
          "Check",
          "Face down"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-pause",
        "explain": "Stop for a short time.",
        "explainTh": "พักชั่วครู่",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-061",
        "target": "Adjust",
        "distractors": [
          "Continue",
          "Remove",
          "Spell"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-adjust",
        "explain": "Change something slightly to make it more suitable.",
        "explainTh": "ปรับ",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-062",
        "target": "Washbasin",
        "distractors": [
          "Water",
          "Pillow",
          "Towel"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-washbasin",
        "explain": "A bowl with taps for washing the hands or face.",
        "explainTh": "อ่างล้างมือ",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-063",
        "target": "Payment",
        "distractors": [
          "Signature",
          "Confirmation",
          "Testimonial"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-payment",
        "explain": "Money given for a product or service.",
        "explainTh": "การชำระเงิน",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-064",
        "target": "Waxing",
        "distractors": [
          "Pedicure",
          "Manicure",
          "Ingrown nail"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-waxing",
        "explain": "Warm-wax hair removal",
        "explainTh": "การแวกซ์ขน",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-065",
        "target": "Unwell",
        "distractors": [
          "First aid",
          "Consent",
          "Sterilise"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-unwell",
        "explain": "Not feeling well.",
        "explainTh": "รู้สึกไม่สบาย",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-066",
        "target": "Permission",
        "distractors": [
          "Cross-contamination",
          "Emergency",
          "Disposable"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-permission",
        "explain": "Agreement that someone may do something.",
        "explainTh": "การอนุญาต",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-067",
        "target": "Cover a shift",
        "distractors": [
          "Stocktake",
          "Escalate",
          "Shift handover"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-cover-a-shift",
        "explain": "Work a colleague’s shift",
        "explainTh": "ทำงานแทนกะ",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-068",
        "target": "Waiting time",
        "distractors": [
          "Itinerary",
          "Fully booked",
          "Booking"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-waiting-time",
        "explain": "How long someone needs to wait.",
        "explainTh": "ระยะเวลารอ",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-069",
        "target": "Basket",
        "distractors": [
          "Washbasin",
          "Shampoo",
          "Headband"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-basket",
        "explain": "A container used for holding small items.",
        "explainTh": "ตะกร้า",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-070",
        "target": "Sore",
        "distractors": [
          "Temperature",
          "Gentle",
          "Uncomfortable"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-sore",
        "explain": "Painful or uncomfortable, especially when touched.",
        "explainTh": "เจ็บระบม",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-071",
        "target": "Prefer",
        "distractors": [
          "Breathe",
          "Remove",
          "Lie down"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-prefer",
        "explain": "Like one choice more than another.",
        "explainTh": "ชอบมากกว่า",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-072",
        "target": "Pain",
        "distractors": [
          "Warm",
          "Relaxed",
          "Hot"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-pain",
        "explain": "An unpleasant feeling that something hurts.",
        "explainTh": "ความเจ็บปวด",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-073",
        "target": "Fragrance",
        "distractors": [
          "Spill",
          "Permission",
          "Unwell"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-fragrance",
        "explain": "A scent, or a substance added to give a scent.",
        "explainTh": "กลิ่นหอม / สารให้กลิ่นหอม",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-074",
        "target": "Remove",
        "distractors": [
          "Change",
          "Lie down",
          "Check"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-remove",
        "explain": "Take something away from its position.",
        "explainTh": "ถอด / นำออก",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-075",
        "target": "Ingredient",
        "distractors": [
          "Fragrance",
          "Consent",
          "Slip hazard"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-ingredient",
        "explain": "One of the substances used to make a product.",
        "explainTh": "ส่วนผสม",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-076",
        "target": "Email address",
        "distractors": [
          "Waiting list",
          "Testimonial",
          "Itinerary"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-email-address",
        "explain": "The address used to send someone an email.",
        "explainTh": "ที่อยู่อีเมล",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-077",
        "target": "Sheet",
        "distractors": [
          "Water",
          "Washbasin",
          "Soap"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-sheet",
        "explain": "A large piece of cloth covering a bed or table.",
        "explainTh": "ผ้าปู",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-078",
        "target": "Explain",
        "distractors": [
          "Turn over",
          "Wait",
          "Pause"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-explain",
        "explain": "Make something clear with words.",
        "explainTh": "อธิบาย",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-079",
        "target": "Follow",
        "distractors": [
          "Sit up",
          "Cover",
          "Confirm"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-follow",
        "explain": "Go behind someone to the same place.",
        "explainTh": "เดินตาม",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-listen-080",
        "target": "Cup",
        "distractors": [
          "Soap",
          "Tissue",
          "Towel"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "spa-v-cup",
        "explain": "A small container for a drink.",
        "explainTh": "ถ้วย",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      }
    ],
    "builder": [
      {
        "th": "วันนี้มีอะไรให้ช่วยไหมคะ",
        "sentence": "How may I assist you today?",
        "id": "spa-builder-001",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "เชิญนั่งพักผ่อนตามสบายค่ะ",
        "sentence": "Please have a seat and relax.",
        "id": "spa-builder-002",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "have a seat and relax, please."
        ]
      },
      {
        "th": "แรงกดแน่นเกินไปไหมคะ",
        "sentence": "Is the pressure too firm?",
        "id": "spa-builder-003",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ต้องการน้ำดื่มไหมคะ",
        "sentence": "Would you like some water?",
        "id": "spa-builder-004",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขอบคุณที่เลือกใช้บริการเราวันนี้ค่ะ",
        "sentence": "Thank you for choosing us today.",
        "id": "spa-builder-005",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ดิฉันจะปรับให้ทันทีค่ะ",
        "sentence": "I will adjust that right away.",
        "id": "spa-builder-006",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "การนัดหมายของคุณยืนยันแล้วสำหรับวันเสาร์",
        "sentence": "Your appointment is confirmed for Saturday.",
        "id": "spa-builder-007",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "เป็นเกียรติที่ได้ดูแลคุณค่ะ",
        "sentence": "It was a pleasure to help you.",
        "id": "spa-builder-008",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "อุณหภูมิห้องสบายไหมคะ",
        "sentence": "Is the room temperature comfortable?",
        "id": "spa-builder-009",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "นักบำบัดของคุณจะมาถึงในอีกสักครู่",
        "sentence": "Your therapist will be with you shortly.",
        "id": "spa-builder-010",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "คุณมีอาการแพ้อะไรบ้างไหมคะ",
        "sentence": "Do you have any allergies?",
        "id": "spa-builder-011",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "กรุณาหลีกเลี่ยงแสงแดดโดยตรง",
        "sentence": "Please avoid direct sun exposure.",
        "id": "spa-builder-012",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "avoid direct sun exposure, please."
        ]
      },
      {
        "th": "ขอรับชื่อและเบอร์ติดต่อได้ไหมคะ",
        "sentence": "May I take your name and number?",
        "id": "spa-builder-013",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขอบคุณที่แจ้งเรื่องนี้ให้เราทราบ",
        "sentence": "Thank you for bringing this to our attention.",
        "id": "spa-builder-014",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ทรีตเมนต์นี้ใช้เวลาหกสิบนาที",
        "sentence": "This treatment takes sixty minutes.",
        "id": "spa-builder-015",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "อยากจองคิวครั้งต่อไปไหมคะ",
        "sentence": "Would you like to book your next appointment?",
        "id": "spa-builder-016",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "บอกได้เลยถ้าอยากพัก",
        "sentence": "Let me know if you would like a break.",
        "id": "spa-builder-017",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "หวังว่าจะได้พบคุณอีกเร็วๆ นี้",
        "sentence": "We hope to see you again soon.",
        "id": "spa-builder-018",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขอไปหาคำตอบให้ทันทีนะคะ",
        "sentence": "Let me find out for you right away.",
        "id": "spa-builder-019",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขออธิบายอีกครั้งแบบช้าๆ นะคะ",
        "sentence": "Let me explain that again more slowly.",
        "id": "spa-builder-020",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ค่อยๆ ตื่นนะคะ ไม่ต้องรีบ",
        "sentence": "Take your time. There is no rush.",
        "id": "spa-builder-021",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "สนใจเพิ่มนวดเท้าไหมคะ",
        "sentence": "Would you like to add a foot massage?",
        "id": "spa-builder-022",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ห้องสองต้องจัดใหม่ก่อนแขกคนต่อไป",
        "sentence": "Room two needs a turnaround before the next guest.",
        "id": "spa-builder-023",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ไฮโปอัลเลอร์เจนิกไม่ได้หมายความว่าจะไม่เกิดอาการแพ้",
        "sentence": "Hypoallergenic does not mean allergy-free.",
        "id": "spa-builder-024",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "กรุณาถอดเสื้อผ้าเท่าที่คุณสบายใจ",
        "sentence": "Please undress to your comfort level.",
        "id": "spa-builder-025",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "undress to your comfort level, please."
        ]
      },
      {
        "th": "ขออภัยที่เกิดเรื่องนี้ขึ้นค่ะ",
        "sentence": "I am sorry that happened.",
        "id": "spa-builder-026",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "สวัสดีค่ะ มีอะไรให้ช่วยไหมคะ",
        "sentence": "Hello. How can I help?",
        "phraseId": "spa-p-everyday-011",
        "added": true,
        "id": "spa-builder-027",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ได้ค่ะ จะตรวจสอบให้นะคะ",
        "sentence": "Of course. I will check for you.",
        "phraseId": "spa-p-everyday-012",
        "added": true,
        "id": "spa-builder-028",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ไม่ต้องรีบนะคะ",
        "sentence": "Please take your time.",
        "phraseId": "spa-p-everyday-013",
        "added": true,
        "id": "spa-builder-029",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "take your time, please."
        ]
      },
      {
        "th": "จะกลับมาสักครู่นะคะ",
        "sentence": "I will be right back.",
        "phraseId": "spa-p-everyday-014",
        "added": true,
        "id": "spa-builder-030",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขอบคุณที่แจ้งให้ทราบค่ะ",
        "sentence": "Thank you for telling me.",
        "phraseId": "spa-p-everyday-015",
        "added": true,
        "id": "spa-builder-031",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ได้นัดหมายไว้ไหมคะ",
        "sentence": "Do you have an appointment?",
        "phraseId": "spa-p-welcome-009",
        "added": true,
        "id": "spa-builder-032",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขอทราบชื่อได้ไหมคะ",
        "sentence": "May I have your name, please?",
        "phraseId": "spa-p-welcome-010",
        "added": true,
        "id": "spa-builder-033",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "เชิญนั่งค่ะ",
        "sentence": "Please have a seat.",
        "phraseId": "spa-p-welcome-011",
        "added": true,
        "id": "spa-builder-034",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "have a seat, please."
        ]
      },
      {
        "th": "นี่คือรายการทรีตเมนต์ของเราค่ะ",
        "sentence": "Here is our treatment menu.",
        "phraseId": "spa-p-welcome-012",
        "added": true,
        "id": "spa-builder-035",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "มาใช้บริการครั้งแรกใช่ไหมคะ",
        "sentence": "Is this your first visit?",
        "phraseId": "spa-p-welcome-013",
        "added": true,
        "id": "spa-builder-036",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "กรุณาตามมาค่ะ",
        "sentence": "Please follow me.",
        "phraseId": "spa-p-guiding-008",
        "added": true,
        "id": "spa-builder-037",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "follow me, please."
        ]
      },
      {
        "th": "ห้องเปลี่ยนเสื้อผ้าอยู่ทางนี้ค่ะ",
        "sentence": "The changing room is this way.",
        "phraseId": "spa-p-guiding-009",
        "added": true,
        "id": "spa-builder-038",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "กรุณาระวังขั้นบันไดค่ะ",
        "sentence": "Please watch your step.",
        "phraseId": "spa-p-guiding-010",
        "added": true,
        "id": "spa-builder-039",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "watch your step, please."
        ]
      },
      {
        "th": "ต้องการให้ช่วยถือกระเป๋าไหมคะ",
        "sentence": "Would you like help with your bag?",
        "phraseId": "spa-p-guiding-011",
        "added": true,
        "id": "spa-builder-040",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "วางรองเท้าไว้ตรงนี้ได้ค่ะ",
        "sentence": "You can leave your shoes here.",
        "phraseId": "spa-p-guiding-012",
        "added": true,
        "id": "spa-builder-041",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "กรอกแบบฟอร์มปรึกษาเรียบร้อยแล้วหรือยังคะ",
        "sentence": "Have you completed your consultation form?",
        "added": true,
        "id": "spa-builder-042",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "มีบริเวณไหนที่ควรหลีกเลี่ยงไหมคะ",
        "sentence": "Is there any area I should avoid?",
        "phraseId": "spa-p-consultation-010",
        "added": true,
        "id": "spa-builder-043",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขอถามสักเล็กน้อยก่อนได้ไหมคะ",
        "sentence": "May I ask you a few questions first?",
        "phraseId": "spa-p-consultation-011",
        "added": true,
        "id": "spa-builder-044",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ต้องการความช่วยเหลือในการกรอกแบบฟอร์มไหมคะ",
        "sentence": "Would you like help with the form?",
        "phraseId": "spa-p-consultation-012",
        "added": true,
        "id": "spa-builder-045",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "มีคำถามก่อนเริ่มไหมคะ",
        "sentence": "Do you have any questions before we begin?",
        "phraseId": "spa-p-consultation-013",
        "added": true,
        "id": "spa-builder-046",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "id": "spa-builder-047",
        "sentence": "Shall we run through the briefing before we open?",
        "th": "มาสรุปงานกันก่อนเปิดร้านไหม",
        "level": 3,
        "topic": "communication",
        "phraseId": "spa-p-teamwork-008",
        "explain": "Starting a pre-shift meeting.",
        "explainTh": "ใช้ในสถานการณ์การสื่อสารกับทีมงาน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-048",
        "sentence": "Please seek appropriate medical advice about severe, persistent or unusual symptoms.",
        "th": "กรุณาขอคำแนะนำทางการแพทย์ที่เหมาะสมหากมีอาการรุนแรง ต่อเนื่อง หรือผิดปกติค่ะ",
        "level": 3,
        "topic": "communication",
        "phraseId": "spa-p-aftercare-003",
        "explain": "Do not describe all post-treatment pain as normal.",
        "explainTh": "อย่าบอกว่าอาการปวดหลังทรีตเมนต์ทุกอย่างเป็นเรื่องปกติ",
        "addedIn": "practice-expansion",
        "alternatives": [
          "seek appropriate medical advice about severe, persistent or unusual symptoms, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-049",
        "sentence": "The weather has been very warm this week, hasn’t it?",
        "th": "อาทิตย์นี้อากาศร้อนมากเลยนะคะ",
        "level": 3,
        "topic": "communication",
        "phraseId": "spa-p-smalltalk-002",
        "explain": "A safe, easy opener in any country.",
        "explainTh": "ใช้ในสถานการณ์การสนทนาทั่วไปกับแขก โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-050",
        "sentence": "I want to make sure you leave feeling happy with today’s experience.",
        "th": "ดิฉันอยากให้แน่ใจว่าคุณจะกลับไปด้วยความพึงพอใจกับวันนี้",
        "level": 3,
        "topic": "communication",
        "phraseId": "spa-p-concerns-006",
        "explain": "States your genuine intention plainly.",
        "explainTh": "ใช้ในสถานการณ์การจัดการข้อร้องเรียน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-051",
        "sentence": "Is there anything else I can do for you?",
        "th": "มีอะไรให้ดิฉันช่วยอีกไหมคะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "spa-p-everyday-009",
        "explain": "Closes any interaction well.",
        "explainTh": "ใช้ในสถานการณ์คำสุภาพที่ใช้ทุกวัน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-052",
        "sentence": "Have I understood your concern correctly?",
        "th": "เข้าใจข้อกังวลของคุณถูกต้องไหมคะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "spa-p-concerns-011",
        "explain": "Summarise the concern before asking this question.",
        "explainTh": "สรุปข้อกังวลก่อนถามประโยคนี้",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-053",
        "sentence": "Let me ask a colleague who can help with the language.",
        "th": "ขอเรียกเพื่อนร่วมงานที่ช่วยด้านภาษาได้ค่ะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "spa-p-clarifying-006",
        "explain": "Seek appropriate support, especially for consent or safety.",
        "explainTh": "ขอความช่วยเหลือที่เหมาะสม โดยเฉพาะเรื่องความยินยอมและความปลอดภัย",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-054",
        "sentence": "Please turn over onto your back when you’re ready.",
        "th": "กรุณาพลิกตัวนอนหงายเมื่อพร้อมนะคะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "spa-p-during-002",
        "explain": "Never rush a position change.",
        "explainTh": "ใช้ในสถานการณ์ระหว่างทำทรีตเมนต์ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [
          "turn over onto your back when you’re ready, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-055",
        "sentence": "We can lower the bed to make getting on easier.",
        "th": "เราปรับเตียงให้ต่ำลงเพื่อขึ้นได้สะดวกขึ้นได้นะคะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "spa-p-special-004",
        "explain": "Offer before the guest has to ask.",
        "explainTh": "ใช้ในสถานการณ์การดูแลกรณีพิเศษ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-056",
        "sentence": "Please follow the activity advice in the aftercare instructions for your treatment.",
        "th": "กรุณาทำตามคำแนะนำเรื่องกิจกรรมในเอกสารหลังทรีตเมนต์ของคุณค่ะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "spa-p-aftercare-006",
        "explain": "Use treatment-specific instructions.",
        "explainTh": "ใช้คำแนะนำเฉพาะทรีตเมนต์",
        "addedIn": "practice-expansion",
        "alternatives": [
          "follow the activity advice in the aftercare instructions for your treatment, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-057",
        "sentence": "Could I take a small deposit to secure your booking?",
        "th": "ขอรับมัดจำเล็กน้อยเพื่อยืนยันการจองได้ไหมคะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "spa-p-booking-006",
        "explain": "Explains a deposit request politely.",
        "explainTh": "ใช้ในสถานการณ์การจองและการชำระเงิน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-058",
        "sentence": "Please help yourself to water and tea in the lounge.",
        "th": "เชิญดื่มน้ำหรือชาได้ตามสบายที่ห้องรับรองนะคะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "spa-p-guiding-006",
        "explain": "An easy way to make guests comfortable.",
        "explainTh": "ใช้ในสถานการณ์การนำแขกชมสถานที่ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [
          "help yourself to water and tea in the lounge, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-059",
        "sentence": "Is this your first massage? I’ll explain each step as we go.",
        "th": "นี่เป็นการนวดครั้งแรกไหมคะ ดิฉันจะอธิบายทุกขั้นตอนไปพร้อมกัน",
        "level": 2,
        "topic": "communication",
        "phraseId": "spa-p-special-005",
        "explain": "Settles a nervous first-timer.",
        "explainTh": "ใช้ในสถานการณ์การดูแลกรณีพิเศษ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-060",
        "sentence": "Safe travels, and we look forward to welcoming you back.",
        "th": "เดินทางปลอดภัยนะคะ แล้วหวังว่าจะได้ต้อนรับคุณอีกครั้ง",
        "level": 2,
        "topic": "communication",
        "phraseId": "spa-p-closing-006",
        "explain": "A caring final line as guests leave.",
        "explainTh": "ใช้ในสถานการณ์การกล่าวลา โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-061",
        "sentence": "The showers are just through that door on the left.",
        "th": "ห้องอาบน้ำอยู่ตรงประตูด้านซ้ายค่ะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "spa-p-guiding-004",
        "explain": "Point as you speak.",
        "explainTh": "ใช้ในสถานการณ์การนำแขกชมสถานที่ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-062",
        "sentence": "Today’s treatment includes a full-body exfoliation, followed by a hydrating mask.",
        "th": "ทรีตเมนต์วันนี้ประกอบด้วยการขัดผิวทั้งตัว ตามด้วยมาส์กให้ความชุ่มชื้น",
        "level": 2,
        "topic": "communication",
        "phraseId": "spa-p-explain-001",
        "explain": "Sets out clear expectations.",
        "explainTh": "ใช้ในสถานการณ์การอธิบายทรีตเมนต์ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-063",
        "sentence": "Could you speak a little more slowly, please?",
        "th": "ช่วยพูดช้าลงเล็กน้อยได้ไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-phone-007",
        "explain": "Use when you cannot reliably follow the caller.",
        "explainTh": "ใช้เมื่อฟังข้อมูลผู้โทรไม่ทัน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-064",
        "sentence": "Would you like to talk, or relax quietly?",
        "th": "ต้องการพูดคุยหรือพักเงียบ ๆ คะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-smalltalk-007",
        "explain": "Make both choices equally acceptable.",
        "explainTh": "ยอมรับทั้งสองทางเลือกเท่าเทียมกัน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-065",
        "sentence": "May I cover your legs with this towel?",
        "th": "ขอคลุมขาด้วยผ้าขนหนูนี้ได้ไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-during-010",
        "explain": "Explain the action and ask permission.",
        "explainTh": "อธิบายสิ่งที่จะทำและขออนุญาต",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-066",
        "sentence": "I hope you enjoy the rest of your stay in Thailand.",
        "th": "หวังว่าคุณจะสนุกกับการพักผ่อนที่เมืองไทยนะคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-smalltalk-005",
        "explain": "A warm closing line for visitors.",
        "explainTh": "ใช้ในสถานการณ์การสนทนาทั่วไปกับแขก โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-067",
        "sentence": "You do not have to continue.",
        "th": "ไม่จำเป็นต้องทำต่อค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-consultation-016",
        "explain": "Respect a decision to decline or stop.",
        "explainTh": "เคารพการตัดสินใจปฏิเสธหรือหยุดบริการ",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-068",
        "sentence": "We can keep your original booking.",
        "th": "คงการจองเดิมไว้ได้ค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-upsell-009",
        "explain": "Accept a refusal without pressure.",
        "explainTh": "ยอมรับการปฏิเสธโดยไม่กดดัน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-069",
        "sentence": "Let me speak to my supervisor.",
        "th": "ขอพูดคุยกับหัวหน้างานก่อนนะคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-concerns-010",
        "explain": "Refer issues beyond your authority.",
        "explainTh": "ส่งต่อปัญหาที่เกินอำนาจหน้าที่",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-070",
        "sentence": "Would you like a pillow under your knees?",
        "th": "ต้องการหมอนรองใต้เข่าไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-comfort-012",
        "explain": "Ask before changing the guest's position.",
        "explainTh": "ถามก่อนปรับท่าของลูกค้า",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-071",
        "sentence": "Would you like me to pause?",
        "th": "ต้องการให้พักสักครู่ไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-during-012",
        "explain": "Pause when requested and check before restarting.",
        "explainTh": "พักเมื่อได้รับคำขอและถามก่อนเริ่มใหม่",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-072",
        "sentence": "How would you like to pay?",
        "th": "สะดวกชำระเงินด้วยวิธีใดคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-payment-001",
        "explain": "Offer only payment methods the business accepts.",
        "explainTh": "เสนอเฉพาะวิธีชำระเงินที่ร้านรับ",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-073",
        "sentence": "Would you prefer morning or afternoon?",
        "th": "สะดวกช่วงเช้าหรือบ่ายคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-booking-009",
        "explain": "Offer broad time options.",
        "explainTh": "เสนอช่วงเวลาให้เลือก",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-074",
        "sentence": "Would you like assistance?",
        "th": "ต้องการความช่วยเหลือไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-special-009",
        "explain": "Ask before physically helping.",
        "explainTh": "ถามก่อนเข้าไปช่วยพยุง",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-075",
        "sentence": "Would you like some quiet time?",
        "th": "ต้องการพักเงียบ ๆ ไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-comfort-014",
        "explain": "Respect a wish not to make conversation.",
        "explainTh": "เคารพความต้องการไม่สนทนา",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-076",
        "sentence": "Would you like me to stop now?",
        "th": "ต้องการให้หยุดตอนนี้ไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-comfort-015",
        "explain": "Stop promptly when requested; follow the workplace procedure.",
        "explainTh": "หยุดทันทีเมื่อได้รับคำขอและทำตามขั้นตอนสถานที่ทำงาน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-077",
        "sentence": "Did you say ten or twelve?",
        "th": "พูดว่าสิบหรือสิบสองคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-clarifying-002",
        "explain": "Check similar-sounding numbers.",
        "explainTh": "ตรวจสอบตัวเลขที่ฟังคล้ายกัน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-078",
        "sentence": "Here are your aftercare instructions.",
        "th": "นี่คือคำแนะนำการดูแลหลังทรีตเมนต์ค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-aftercare-008",
        "explain": "Use instructions approved for the specific treatment.",
        "explainTh": "ใช้คำแนะนำที่อนุมัติสำหรับทรีตเมนต์นั้น",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-079",
        "sentence": "Good morning. How are you today?",
        "th": "สวัสดีตอนเช้าค่ะ วันนี้เป็นอย่างไรบ้างคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-everyday-001",
        "explain": "The one you will use most often.",
        "explainTh": "ใช้ในสถานการณ์คำสุภาพที่ใช้ทุกวัน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-builder-080",
        "sentence": "Please tell me what happened.",
        "th": "กรุณาเล่าให้ฟังว่าเกิดอะไรขึ้นค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "spa-p-concerns-009",
        "explain": "Listen before deciding what action is needed.",
        "explainTh": "รับฟังก่อนตัดสินใจว่าจะดำเนินการอย่างไร",
        "addedIn": "practice-expansion",
        "alternatives": [
          "tell me what happened, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      }
    ],
    "dialogues": [
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
            "correct": "assist",
            "id": "spa-dialogue-arrival-1",
            "feedback": "Use “assist” to complete this model exchange."
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
            "correct": "booking",
            "id": "spa-dialogue-arrival-3",
            "feedback": "Use “booking” to complete this model exchange."
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
            "correct": "check",
            "id": "spa-dialogue-arrival-5",
            "feedback": "Use “check” to complete this model exchange."
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
            "correct": "comfortable",
            "id": "spa-dialogue-arrival-6",
            "feedback": "Use “comfortable” to complete this model exchange."
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
            "correct": "firmer",
            "id": "spa-dialogue-arrival-7",
            "feedback": "Use “firmer” to complete this model exchange."
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
            "correct": "aftercare",
            "id": "spa-dialogue-arrival-8",
            "feedback": "Use “aftercare” to complete this model exchange."
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
            "correct": "see",
            "id": "spa-dialogue-arrival-10",
            "feedback": "Use “see” to complete this model exchange."
          }
        ],
        "trainingExample": true,
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "correct": "help",
            "id": "spa-dialogue-phone-1",
            "feedback": "Use “help” to complete this model exchange."
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
            "correct": "check",
            "id": "spa-dialogue-phone-3",
            "feedback": "Use “check” to complete this model exchange."
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
            "correct": "free",
            "id": "spa-dialogue-phone-5",
            "feedback": "Use “free” to complete this model exchange."
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
            "correct": "confirmation",
            "id": "spa-dialogue-phone-7",
            "feedback": "Use “confirmation” to complete this model exchange."
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
            "correct": "secure",
            "id": "spa-dialogue-phone-8",
            "feedback": "Use “secure” to complete this model exchange."
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
            "correct": "calling",
            "id": "spa-dialogue-phone-10",
            "feedback": "Use “calling” to complete this model exchange."
          }
        ],
        "trainingExample": true,
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "correct": "sorry",
            "id": "spa-dialogue-concern-2",
            "feedback": "Use “sorry” to complete this model exchange."
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
            "correct": "increase",
            "id": "spa-dialogue-concern-3",
            "feedback": "Use “increase” to complete this model exchange."
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
            "correct": "checked",
            "id": "spa-dialogue-concern-5",
            "feedback": "Use “checked” to complete this model exchange."
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
            "correct": "frustration",
            "id": "spa-dialogue-concern-6",
            "feedback": "Use “frustration” to complete this model exchange."
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
            "correct": "manager",
            "id": "spa-dialogue-concern-7",
            "feedback": "Use “manager” to complete this model exchange."
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
            "correct": "feedback",
            "id": "spa-dialogue-concern-9",
            "feedback": "Use “feedback” to complete this model exchange."
          }
        ],
        "trainingExample": true,
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Check whether the guest has booked.",
            "id": "spa-dialogue-first-visit-2"
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
            "feedback": "Show the current menu rather than guessing.",
            "id": "spa-dialogue-first-visit-4"
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
            "feedback": "Find out whether an introduction is needed.",
            "id": "spa-dialogue-first-visit-6"
          }
        ],
        "level": 1,
        "phraseIds": [
          "spa-p-welcome-009",
          "spa-p-welcome-012",
          "spa-p-welcome-013"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Ask for the day before checking availability.",
            "id": "spa-dialogue-new-booking-2"
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
            "feedback": "Offer broad time options.",
            "id": "spa-dialogue-new-booking-4"
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
            "feedback": "Check the diary before promising a slot.",
            "id": "spa-dialogue-new-booking-6"
          }
        ],
        "level": 1,
        "phraseIds": [
          "spa-p-booking-008",
          "spa-p-booking-009",
          "spa-p-booking-010"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Check the guest's intention before changing the booking.",
            "id": "spa-dialogue-booking-change-2"
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
            "feedback": "Use only the current approved policy.",
            "id": "spa-dialogue-booking-change-4"
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
            "feedback": "Confirm the email address before sending.",
            "id": "spa-dialogue-booking-change-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "spa-p-booking-012",
          "spa-p-booking-013",
          "spa-p-booking-014"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Check comfort early and again during the session.",
            "id": "spa-dialogue-pressure-check-2"
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
            "feedback": "Adjust only with the guest's agreement.",
            "id": "spa-dialogue-pressure-check-4"
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
            "feedback": "Stop promptly when requested; follow the workplace procedure.",
            "id": "spa-dialogue-pressure-check-6"
          }
        ],
        "level": 1,
        "phraseIds": [
          "spa-p-comfort-008",
          "spa-p-comfort-009",
          "spa-p-comfort-015"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Ask about temperature with two clear choices.",
            "id": "spa-dialogue-room-comfort-2"
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
            "feedback": "Offer a practical comfort adjustment.",
            "id": "spa-dialogue-room-comfort-4"
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
            "feedback": "Adjust the volume rather than assuming a preference.",
            "id": "spa-dialogue-room-comfort-6"
          }
        ],
        "level": 1,
        "phraseIds": [
          "spa-p-comfort-010",
          "spa-p-comfort-011",
          "spa-p-comfort-013"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Check consent before starting.",
            "id": "spa-dialogue-consent-break-2"
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
            "feedback": "Pause when requested and check before restarting.",
            "id": "spa-dialogue-consent-break-4"
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
            "feedback": "Offer a genuine choice after a pause.",
            "id": "spa-dialogue-consent-break-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "spa-p-during-009",
          "spa-p-during-012",
          "spa-p-during-014"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Ask clearly and record the answer privately.",
            "id": "spa-dialogue-ingredient-check-2"
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
            "feedback": "Natural ingredients are not automatically suitable for everyone.",
            "id": "spa-dialogue-ingredient-check-4"
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
            "feedback": "Do not promise suitability without an appropriate assessment.",
            "id": "spa-dialogue-ingredient-check-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "spa-p-consultation-009",
          "spa-p-explain-011",
          "spa-p-explain-012"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Ask again instead of guessing.",
            "id": "spa-dialogue-language-help-2"
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
            "feedback": "Use the menu or an appropriate visual aid.",
            "id": "spa-dialogue-language-help-4"
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
            "feedback": "Seek appropriate support, especially for consent or safety.",
            "id": "spa-dialogue-language-help-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "spa-p-clarifying-001",
          "spa-p-clarifying-003",
          "spa-p-clarifying-006"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Make the amount clear before payment.",
            "id": "spa-dialogue-paying-bill-2"
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
            "feedback": "Verify the record before changing the bill.",
            "id": "spa-dialogue-paying-bill-4"
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
            "feedback": "Offer only payment methods the business accepts.",
            "id": "spa-dialogue-paying-bill-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "spa-p-payment-003",
          "spa-p-payment-004",
          "spa-p-payment-001"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Explain each item using the actual bill.",
            "id": "spa-dialogue-refund-request-2"
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
            "feedback": "Do not approve a refund outside your authority.",
            "id": "spa-dialogue-refund-request-4"
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
            "feedback": "Promise an update, not an unconfirmed outcome.",
            "id": "spa-dialogue-refund-request-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "spa-p-payment-007",
          "spa-p-payment-005",
          "spa-p-concerns-012"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Ask the person rather than making assumptions.",
            "id": "spa-dialogue-access-and-privacy-2"
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
            "feedback": "Verify the route rather than promising access.",
            "id": "spa-dialogue-access-and-privacy-4"
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
            "feedback": "Offer another way to communicate.",
            "id": "spa-dialogue-access-and-privacy-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "spa-p-special-008",
          "spa-p-special-010",
          "spa-p-special-011"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Use instructions approved for the specific treatment.",
            "id": "spa-dialogue-aftercare-questions-2"
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
            "feedback": "Explain in small steps and check understanding.",
            "id": "spa-dialogue-aftercare-questions-4"
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
            "feedback": "Invite questions rather than asking only 'understand?'",
            "id": "spa-dialogue-aftercare-questions-6"
          }
        ],
        "level": 1,
        "phraseIds": [
          "spa-p-aftercare-008",
          "spa-p-aftercare-009",
          "spa-p-aftercare-011"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Check readiness before inviting a guest in.",
            "id": "spa-dialogue-shift-preparation-2"
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
            "feedback": "Staff-to-staff request; not a guest phrase.",
            "id": "spa-dialogue-shift-preparation-4"
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
            "feedback": "Do not use faulty equipment while awaiting instructions.",
            "id": "spa-dialogue-shift-preparation-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "spa-p-teamwork-011",
          "spa-p-teamwork-009",
          "spa-p-teamwork-012"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Use when you cannot reliably follow the caller.",
            "id": "spa-dialogue-phone-details-2"
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
            "feedback": "Record the name and read it back.",
            "id": "spa-dialogue-phone-details-4"
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
            "feedback": "Confirm the number and the reason for the call.",
            "id": "spa-dialogue-phone-details-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "spa-p-phone-007",
          "spa-p-phone-009",
          "spa-p-phone-010"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Listen before deciding what action is needed.",
            "id": "spa-dialogue-concern-report-2"
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
            "feedback": "Summarise the concern before asking this question.",
            "id": "spa-dialogue-concern-report-4"
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
            "feedback": "Refer issues beyond your authority.",
            "id": "spa-dialogue-concern-report-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "spa-p-concerns-009",
          "spa-p-concerns-011",
          "spa-p-concerns-010"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Ask permission before describing extras.",
            "id": "spa-dialogue-optional-service-2"
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
            "feedback": "Confirm price, time and suitability before agreement.",
            "id": "spa-dialogue-optional-service-4"
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
            "feedback": "Accept a refusal without pressure.",
            "id": "spa-dialogue-optional-service-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "spa-p-upsell-007",
          "spa-p-upsell-008",
          "spa-p-upsell-009"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
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
            "feedback": "Allow time and offer help if requested.",
            "id": "spa-dialogue-leaving-spa-2"
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
            "feedback": "Check gently before the guest leaves.",
            "id": "spa-dialogue-leaving-spa-4"
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
            "feedback": "Invite honest feedback without suggesting an answer.",
            "id": "spa-dialogue-leaving-spa-6"
          }
        ],
        "level": 1,
        "phraseIds": [
          "spa-p-closing-007",
          "spa-p-closing-008",
          "spa-p-closing-009"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-spa-01",
        "title": "Confirming a changed appointment",
        "th": "ยืนยันการเปลี่ยนเวลานัด",
        "lines": [
          {
            "speaker": "Guest",
            "before": "Could I move my appointment to Friday?",
            "after": "",
            "fixed": true,
            "th": "ขอเลื่อนนัดเป็นวันศุกร์ได้ไหมคะ"
          },
          {
            "id": "spa-dialogue-extra-01-1",
            "speaker": "Staff",
            "before": "Let me check Friday’s ",
            "after": ".",
            "th": "ขอตรวจสอบเวลาว่างของวันศุกร์ก่อนค่ะ",
            "correct": "availability",
            "options": [
              "availability",
              "receipt",
              "temperature",
              "pressure"
            ],
            "feedback": "The complete response is: Let me check Friday’s availability.",
            "feedbackTh": "ขอตรวจสอบเวลาว่างของวันศุกร์ก่อนค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "Thank you. Is there a morning appointment?",
            "after": "",
            "fixed": true,
            "th": "ขอบคุณค่ะ มีเวลาว่างช่วงเช้าไหมคะ"
          },
          {
            "id": "spa-dialogue-extra-01-3",
            "speaker": "Staff",
            "before": "Yes. Ten o’clock is ",
            "after": ". Would that suit you?",
            "th": "มีค่ะ สิบโมงว่าง สะดวกเวลานี้ไหมคะ",
            "correct": "available",
            "options": [
              "available",
              "broken",
              "used",
              "closed"
            ],
            "feedback": "The complete response is: Yes. Ten o’clock is available. Would that suit you?",
            "feedbackTh": "มีค่ะ สิบโมงว่าง สะดวกเวลานี้ไหมคะ"
          }
        ],
        "level": 1,
        "topic": "booking",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-spa-02",
        "title": "Checking comfort again",
        "th": "ตรวจสอบความสบายอีกครั้ง",
        "lines": [
          {
            "speaker": "Guest",
            "before": "The pressure is too strong.",
            "after": "",
            "fixed": true,
            "th": "แรงกดหนักเกินไปค่ะ"
          },
          {
            "id": "spa-dialogue-extra-02-1",
            "speaker": "Staff",
            "before": "Thank you. I will use ",
            "after": " pressure.",
            "th": "ขอบคุณที่แจ้งค่ะ จะลดแรงกดลงค่ะ",
            "correct": "lighter",
            "options": [
              "lighter",
              "later",
              "louder",
              "larger"
            ],
            "feedback": "The complete response is: Thank you. I will use lighter pressure.",
            "feedbackTh": "ขอบคุณที่แจ้งค่ะ จะลดแรงกดลงค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "That feels better now.",
            "after": "",
            "fixed": true,
            "th": "ตอนนี้รู้สึกดีขึ้นค่ะ"
          },
          {
            "id": "spa-dialogue-extra-02-3",
            "speaker": "Staff",
            "before": "I am glad. Please tell me if you need another ",
            "after": ".",
            "th": "ยินดีค่ะ หากต้องการปรับอีก กรุณาแจ้งนะคะ",
            "correct": "adjustment",
            "options": [
              "adjustment",
              "appointment",
              "invoice",
              "entrance"
            ],
            "feedback": "The complete response is: I am glad. Please tell me if you need another adjustment.",
            "feedbackTh": "ยินดีค่ะ หากต้องการปรับอีก กรุณาแจ้งนะคะ"
          }
        ],
        "level": 1,
        "topic": "comfort",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-spa-03",
        "title": "Returning a lost item",
        "th": "คืนสิ่งของที่ลืมไว้",
        "lines": [
          {
            "speaker": "Guest",
            "before": "I left a silver watch here yesterday.",
            "after": "",
            "fixed": true,
            "th": "ลืมนาฬิกาสีเงินไว้ที่นี่เมื่อวานค่ะ"
          },
          {
            "id": "spa-dialogue-extra-03-1",
            "speaker": "Staff",
            "before": "Let me check our lost-property ",
            "after": ".",
            "th": "ขอตรวจบันทึกทรัพย์สินสูญหายก่อนค่ะ",
            "correct": "record",
            "options": [
              "record",
              "pressure",
              "blanket",
              "treatment"
            ],
            "feedback": "The complete response is: Let me check our lost-property record.",
            "feedbackTh": "ขอตรวจบันทึกทรัพย์สินสูญหายก่อนค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "It has a blue strap.",
            "after": "",
            "fixed": true,
            "th": "สายสีน้ำเงินค่ะ"
          },
          {
            "id": "spa-dialogue-extra-03-3",
            "speaker": "Staff",
            "before": "Thank you for the ",
            "after": ". I will check the details with the team.",
            "th": "ขอบคุณที่อธิบายลักษณะค่ะ จะตรวจรายละเอียดกับทีมค่ะ",
            "correct": "description",
            "options": [
              "description",
              "payment",
              "allergy",
              "booking"
            ],
            "feedback": "The complete response is: Thank you for the description. I will check the details with the team.",
            "feedbackTh": "ขอบคุณที่อธิบายลักษณะค่ะ จะตรวจรายละเอียดกับทีมค่ะ"
          }
        ],
        "level": 2,
        "topic": "communication",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-spa-04",
        "title": "Explaining a form",
        "th": "อธิบายแบบฟอร์ม",
        "lines": [
          {
            "speaker": "Guest",
            "before": "I do not understand this question on the form.",
            "after": "",
            "fixed": true,
            "th": "ไม่เข้าใจคำถามในแบบฟอร์มข้อนี้ค่ะ"
          },
          {
            "id": "spa-dialogue-extra-04-1",
            "speaker": "Staff",
            "before": "Let me ",
            "after": " it in simpler words.",
            "th": "ขออธิบายด้วยคำที่ง่ายขึ้นค่ะ",
            "correct": "explain",
            "options": [
              "explain",
              "charge",
              "cancel",
              "close"
            ],
            "feedback": "The complete response is: Let me explain it in simpler words.",
            "feedbackTh": "ขออธิบายด้วยคำที่ง่ายขึ้นค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "Thank you. Now I understand.",
            "after": "",
            "fixed": true,
            "th": "ขอบคุณค่ะ ตอนนี้เข้าใจแล้ว"
          },
          {
            "id": "spa-dialogue-extra-04-3",
            "speaker": "Staff",
            "before": "You are welcome. Please ask if another question is ",
            "after": ".",
            "th": "ยินดีค่ะ หากข้ออื่นไม่ชัดเจน สอบถามได้ค่ะ",
            "correct": "unclear",
            "options": [
              "unclear",
              "available",
              "included",
              "paid"
            ],
            "feedback": "The complete response is: You are welcome. Please ask if another question is unclear.",
            "feedbackTh": "ยินดีค่ะ หากข้ออื่นไม่ชัดเจน สอบถามได้ค่ะ"
          }
        ],
        "level": 1,
        "topic": "communication",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-spa-05",
        "title": "Checking a payment discrepancy",
        "th": "ตรวจรายการชำระเงินที่ไม่ตรง",
        "lines": [
          {
            "speaker": "Guest",
            "before": "This amount is different from my email.",
            "after": "",
            "fixed": true,
            "th": "ยอดนี้ไม่ตรงกับอีเมลค่ะ"
          },
          {
            "id": "spa-dialogue-extra-05-1",
            "speaker": "Staff",
            "before": "Let us ",
            "after": " the email with the booking record.",
            "th": "ขอเปรียบเทียบอีเมลกับบันทึกการจองค่ะ",
            "correct": "compare",
            "options": [
              "compare",
              "cancel",
              "delete",
              "fold"
            ],
            "feedback": "The complete response is: Let us compare the email with the booking record.",
            "feedbackTh": "ขอเปรียบเทียบอีเมลกับบันทึกการจองค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "Here is the confirmation email.",
            "after": "",
            "fixed": true,
            "th": "นี่คืออีเมลยืนยันค่ะ"
          },
          {
            "id": "spa-dialogue-extra-05-3",
            "speaker": "Staff",
            "before": "Thank you. I will check the ",
            "after": " before taking payment.",
            "th": "ขอบคุณค่ะ จะตรวจความต่างก่อนรับชำระเงินค่ะ",
            "correct": "difference",
            "options": [
              "difference",
              "towel",
              "music",
              "surname"
            ],
            "feedback": "The complete response is: Thank you. I will check the difference before taking payment.",
            "feedbackTh": "ขอบคุณค่ะ จะตรวจความต่างก่อนรับชำระเงินค่ะ"
          }
        ],
        "level": 2,
        "topic": "payment",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-spa-06",
        "title": "Asking before changing a position",
        "th": "ถามก่อนเปลี่ยนท่าทาง",
        "lines": [
          {
            "speaker": "Staff",
            "before": "Would you like help changing position?",
            "after": "",
            "fixed": true,
            "th": "ต้องการให้ช่วยเปลี่ยนท่าทางไหมคะ"
          },
          {
            "id": "spa-dialogue-extra-06-1",
            "speaker": "Guest",
            "before": "Yes, but please ",
            "after": " what I should do first.",
            "th": "ต้องการค่ะ แต่ช่วยอธิบายสิ่งที่ต้องทำก่อนนะคะ",
            "correct": "explain",
            "options": [
              "explain",
              "refund",
              "book",
              "charge"
            ],
            "feedback": "The complete response is: Yes, but please explain what I should do first.",
            "feedbackTh": "ต้องการค่ะ แต่ช่วยอธิบายสิ่งที่ต้องทำก่อนนะคะ"
          },
          {
            "speaker": "Staff",
            "before": "Of course. I will explain before we move.",
            "after": "",
            "fixed": true,
            "th": "ได้ค่ะ จะอธิบายก่อนเปลี่ยนท่าค่ะ"
          },
          {
            "id": "spa-dialogue-extra-06-3",
            "speaker": "Guest",
            "before": "Thank you. Please speak ",
            "after": ".",
            "th": "ขอบคุณค่ะ กรุณาพูดช้า ๆ นะคะ",
            "correct": "slowly",
            "options": [
              "slowly",
              "strongly",
              "early",
              "loudness"
            ],
            "feedback": "The complete response is: Thank you. Please speak slowly.",
            "feedbackTh": "ขอบคุณค่ะ กรุณาพูดช้า ๆ นะคะ"
          }
        ],
        "level": 2,
        "topic": "comfort",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-spa-07",
        "title": "Choosing not to buy",
        "th": "เลือกไม่ซื้อสินค้า",
        "lines": [
          {
            "speaker": "Staff",
            "before": "Would you like information about this product?",
            "after": "",
            "fixed": true,
            "th": "ต้องการข้อมูลเกี่ยวกับผลิตภัณฑ์นี้ไหมคะ"
          },
          {
            "id": "spa-dialogue-extra-07-1",
            "speaker": "Guest",
            "before": "No, thank you. I am not ",
            "after": " anything today.",
            "th": "ไม่ค่ะ ขอบคุณ วันนี้ยังไม่ซื้ออะไรค่ะ",
            "correct": "buying",
            "options": [
              "buying",
              "waiting",
              "booking",
              "resting"
            ],
            "feedback": "The complete response is: No, thank you. I am not buying anything today.",
            "feedbackTh": "ไม่ค่ะ ขอบคุณ วันนี้ยังไม่ซื้ออะไรค่ะ"
          },
          {
            "speaker": "Staff",
            "before": "Of course. There is no obligation to buy.",
            "after": "",
            "fixed": true,
            "th": "ได้ค่ะ ไม่มีข้อผูกมัดว่าต้องซื้อค่ะ"
          },
          {
            "id": "spa-dialogue-extra-07-3",
            "speaker": "Guest",
            "before": "Thank you for ",
            "after": ".",
            "th": "ขอบคุณที่เข้าใจค่ะ",
            "correct": "understanding",
            "options": [
              "understanding",
              "charging",
              "cancelling",
              "repeating"
            ],
            "feedback": "The complete response is: Thank you for understanding.",
            "feedbackTh": "ขอบคุณที่เข้าใจค่ะ"
          }
        ],
        "level": 1,
        "topic": "payment",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-spa-08",
        "title": "Arranging a supervisor call",
        "th": "นัดให้หัวหน้าติดต่อกลับ",
        "lines": [
          {
            "speaker": "Guest",
            "before": "Could your supervisor call me about my request?",
            "after": "",
            "fixed": true,
            "th": "ขอให้หัวหน้าติดต่อกลับเรื่องคำขอได้ไหมคะ"
          },
          {
            "id": "spa-dialogue-extra-08-1",
            "speaker": "Staff",
            "before": "Certainly. May I ",
            "after": " the best contact number?",
            "th": "ได้ค่ะ ขอทวนหมายเลขติดต่อที่สะดวกค่ะ",
            "correct": "confirm",
            "options": [
              "confirm",
              "cancel",
              "reduce",
              "clean"
            ],
            "feedback": "The complete response is: Certainly. May I confirm the best contact number?",
            "feedbackTh": "ได้ค่ะ ขอทวนหมายเลขติดต่อที่สะดวกค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "Please use the number on my booking.",
            "after": "",
            "fixed": true,
            "th": "ใช้หมายเลขในการจองได้เลยค่ะ"
          },
          {
            "id": "spa-dialogue-extra-08-3",
            "speaker": "Staff",
            "before": "Thank you. I will pass on the ",
            "after": " and ask the supervisor to confirm a time.",
            "th": "ขอบคุณค่ะ จะส่งคำขอและให้หัวหน้ายืนยันเวลาค่ะ",
            "correct": "request",
            "options": [
              "request",
              "temperature",
              "blanket",
              "ingredient"
            ],
            "feedback": "The complete response is: Thank you. I will pass on the request and ask the supervisor to confirm a time.",
            "feedbackTh": "ขอบคุณค่ะ จะส่งคำขอและให้หัวหน้ายืนยันเวลาค่ะ"
          }
        ],
        "level": 3,
        "topic": "communication",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-spa-09",
        "title": "Checking product information",
        "th": "ตรวจข้อมูลผลิตภัณฑ์",
        "lines": [
          {
            "speaker": "Guest",
            "before": "Can I see the ingredients before I decide?",
            "after": "",
            "fixed": true,
            "th": "ขอดูส่วนผสมก่อนตัดสินใจได้ไหมคะ"
          },
          {
            "id": "spa-dialogue-extra-09-1",
            "speaker": "Staff",
            "before": "Of course. Let me find the product ",
            "after": ".",
            "th": "ได้ค่ะ ขอตรวจหาข้อมูลผลิตภัณฑ์ก่อนค่ะ",
            "correct": "information",
            "options": [
              "information",
              "appointment",
              "receipt",
              "corridor"
            ],
            "feedback": "The complete response is: Of course. Let me find the product information.",
            "feedbackTh": "ได้ค่ะ ขอตรวจหาข้อมูลผลิตภัณฑ์ก่อนค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "I would also like to ask the practitioner a question.",
            "after": "",
            "fixed": true,
            "th": "อยากถามผู้ให้บริการที่มีคุณสมบัติเหมาะสมด้วยค่ะ"
          },
          {
            "id": "spa-dialogue-extra-09-3",
            "speaker": "Staff",
            "before": "Certainly. I will ask the practitioner to discuss your ",
            "after": " before we proceed.",
            "th": "ได้ค่ะ จะให้ผู้ให้บริการพูดคุยข้อกังวลก่อนดำเนินการค่ะ",
            "correct": "concern",
            "options": [
              "concern",
              "discount",
              "surname",
              "change"
            ],
            "feedback": "The complete response is: Certainly. I will ask the practitioner to discuss your concern before we proceed.",
            "feedbackTh": "ได้ค่ะ จะให้ผู้ให้บริการพูดคุยข้อกังวลก่อนดำเนินการค่ะ"
          }
        ],
        "level": 3,
        "topic": "comfort",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-spa-10",
        "title": "Following up a request",
        "th": "ติดตามคำขอ",
        "lines": [
          {
            "speaker": "Guest",
            "before": "The extra towel has not arrived.",
            "after": "",
            "fixed": true,
            "th": "ผ้าขนหนูที่ขอเพิ่มยังไม่มาค่ะ"
          },
          {
            "id": "spa-dialogue-extra-10-1",
            "speaker": "Staff",
            "before": "I am sorry. I will follow up with the ",
            "after": " now.",
            "th": "ขออภัยค่ะ จะติดตามกับทีมตอนนี้ค่ะ",
            "correct": "team",
            "options": [
              "team",
              "bill",
              "form",
              "locker"
            ],
            "feedback": "The complete response is: I am sorry. I will follow up with the team now.",
            "feedbackTh": "ขออภัยค่ะ จะติดตามกับทีมตอนนี้ค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "Thank you. I am waiting in the lounge.",
            "after": "",
            "fixed": true,
            "th": "ขอบคุณค่ะ รออยู่ที่ห้องรับรองนะคะ"
          },
          {
            "id": "spa-dialogue-extra-10-3",
            "speaker": "Staff",
            "before": "I will tell them your ",
            "after": " and check that it reaches you.",
            "th": "จะแจ้งจุดที่รอและตรวจว่าส่งถึงคุณแล้วค่ะ",
            "correct": "location",
            "options": [
              "location",
              "pressure",
              "payment",
              "allergy"
            ],
            "feedback": "The complete response is: I will tell them your location and check that it reaches you.",
            "feedbackTh": "จะแจ้งจุดที่รอและตรวจว่าส่งถึงคุณแล้วค่ะ"
          }
        ],
        "level": 2,
        "topic": "communication",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      }
    ],
    "scenario": [
      {
        "id": "spa-scenario-001",
        "q": "A guest says, “The pressure is a little too strong.” Which reply best responds to this request?",
        "guest": "The pressure is a little too strong.",
        "guestTh": "แรงกดหนักเกินไปเล็กน้อยค่ะ",
        "options": [
          "Thank you. I will use lighter pressure.",
          "I will make the room warmer.",
          "I will use firmer pressure.",
          "I will add more time."
        ],
        "correct": 0,
        "explain": "“Too strong” concerns pressure; the response should offer less pressure.",
        "explainTh": "ผู้ใช้บริการพูดถึงแรงกด ควรตอบว่าจะลดแรงกด",
        "level": 1,
        "topic": "comfort",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-002",
        "q": "A guest says, “Could I have a towel for my hair?” Which reply best responds to this request?",
        "guest": "Could I have a towel for my hair?",
        "guestTh": "ขอผ้าขนหนูสำหรับผมได้ไหมคะ",
        "options": [
          "Certainly. I will bring you a receipt.",
          "Certainly. I will bring you a clean towel.",
          "Certainly. I will change your appointment.",
          "Certainly. I will check the music."
        ],
        "correct": 1,
        "explain": "Respond to the requested item: a towel.",
        "explainTh": "ตอบให้ตรงกับสิ่งที่ขอ คือผ้าขนหนู",
        "level": 1,
        "topic": "comfort",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-003",
        "q": "A guest says, “Can I book a treatment for tomorrow?” Which reply best responds to this request?",
        "guest": "Can I book a treatment for tomorrow?",
        "guestTh": "ขอจองทรีตเมนต์สำหรับพรุ่งนี้ได้ไหมคะ",
        "options": [
          "Let me check yesterday’s payment.",
          "Let me print your old receipt.",
          "Let me check tomorrow’s availability.",
          "Let me collect your used towel."
        ],
        "correct": 2,
        "explain": "Check availability before confirming a booking.",
        "explainTh": "ตรวจสอบเวลาว่างก่อนยืนยันการจอง",
        "level": 1,
        "topic": "booking",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-004",
        "q": "A guest says, “Sorry, could you say the price again?” Which reply best responds to this request?",
        "guest": "Sorry, could you say the price again?",
        "guestTh": "ขอโทษค่ะ ช่วยบอกราคาอีกครั้งได้ไหมคะ",
        "options": [
          "Of course. I will change your treatment.",
          "Of course. I will cancel the booking.",
          "Of course. I will speak more quickly.",
          "Of course. I will repeat the price slowly."
        ],
        "correct": 3,
        "explain": "The guest asks for repetition, not a different service.",
        "explainTh": "ผู้ใช้บริการขอให้พูดซ้ำ ไม่ได้ขอเปลี่ยนบริการ",
        "level": 1,
        "topic": "communication",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-005",
        "q": "A guest says, “I would prefer a quiet session.” Which reply best responds to this request?",
        "guest": "I would prefer a quiet session.",
        "guestTh": "อยากให้ช่วงรับบริการเงียบ ๆ ค่ะ",
        "options": [
          "Of course. I will keep conversation to a minimum.",
          "Of course. I will explain every product aloud.",
          "Of course. I will increase the music volume.",
          "Of course. I will invite another guest in."
        ],
        "correct": 0,
        "explain": "Respect the stated preference for quiet.",
        "explainTh": "เคารพความต้องการให้บรรยากาศเงียบ",
        "level": 1,
        "topic": "comfort",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-006",
        "q": "A guest says, “Could I have a receipt, please?” Which reply best responds to this request?",
        "guest": "Could I have a receipt, please?",
        "guestTh": "ขอใบเสร็จด้วยค่ะ",
        "options": [
          "Certainly. I will bring a consultation form.",
          "Certainly. I will prepare your receipt.",
          "Certainly. I will check your room temperature.",
          "Certainly. I will offer another massage."
        ],
        "correct": 1,
        "explain": "A receipt records the payment; respond to that request.",
        "explainTh": "receipt คือใบเสร็จ ควรตอบตรงกับคำขอ",
        "level": 1,
        "topic": "payment",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-007",
        "q": "A guest says, “The room feels cold.” Which reply best responds to this request?",
        "guest": "The room feels cold.",
        "guestTh": "ห้องนี้รู้สึกหนาวค่ะ",
        "options": [
          "Would you like a receipt while I check the price?",
          "Would you like stronger pressure instead?",
          "Would you like a blanket while I check the temperature?",
          "Would you like me to turn the temperature down?"
        ],
        "correct": 2,
        "explain": "Offer help related to the reported cold.",
        "explainTh": "เสนอความช่วยเหลือที่เกี่ยวข้องกับความหนาว",
        "level": 1,
        "topic": "comfort",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-008",
        "q": "A guest says, “My appointment is under the name Lee.” Which reply best responds to this request?",
        "guest": "My appointment is under the name Lee.",
        "guestTh": "นัดหมายใช้ชื่อ Lee ค่ะ",
        "options": [
          "Thank you. Let me choose a new surname.",
          "Thank you. Let me close your account.",
          "Thank you. Let me bring the menu first.",
          "Thank you. Let me find your booking."
        ],
        "correct": 3,
        "explain": "“Under the name” gives the name used for the booking.",
        "explainTh": "under the name บอกชื่อที่ใช้จอง",
        "level": 1,
        "topic": "booking",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-009",
        "q": "A guest says, “What does “optional” mean?” Which reply best responds to this request?",
        "guest": "What does “optional” mean?",
        "guestTh": "optional หมายความว่าอะไรคะ",
        "options": [
          "It means you can choose whether to have it.",
          "It means you must buy it today.",
          "It means it is already paid for.",
          "It means it is not available."
        ],
        "correct": 0,
        "explain": "Optional means a choice, not an obligation.",
        "explainTh": "optional หมายถึงเลือกได้ ไม่ใช่ข้อบังคับ",
        "level": 1,
        "topic": "communication",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-010",
        "q": "A guest says, “Please stop the treatment.” Which reply best responds to this request?",
        "guest": "Please stop the treatment.",
        "guestTh": "กรุณาหยุดทรีตเมนต์ค่ะ",
        "options": [
          "I will continue for two more minutes.",
          "Of course. I will stop now.",
          "I will finish this area first.",
          "I will use stronger pressure instead."
        ],
        "correct": 1,
        "explain": "The guest has explicitly asked to stop.",
        "explainTh": "ผู้ใช้บริการขอให้หยุดอย่างชัดเจน ควรหยุดทันที",
        "level": 1,
        "topic": "comfort",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-011",
        "q": "A guest says, “Could we move my booking to a later time today?” Which reply best responds to this request?",
        "guest": "Could we move my booking to a later time today?",
        "guestTh": "ขอเลื่อนนัดเป็นเวลาที่ช้าลงในวันนี้ได้ไหมคะ",
        "options": [
          "Let me confirm the same time tomorrow.",
          "Let me cancel it without checking.",
          "Let me check what later times are available today.",
          "Let me book an earlier time today."
        ],
        "correct": 2,
        "explain": "Later today keeps the same day and asks for a later time.",
        "explainTh": "later today หมายถึงวันเดิมแต่เวลาช้าลง",
        "level": 2,
        "topic": "booking",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-012",
        "q": "A guest says, “I do not recognise this charge on my bill.” Which reply best responds to this request?",
        "guest": "I do not recognise this charge on my bill.",
        "guestTh": "ไม่ทราบว่าค่าใช้จ่ายรายการนี้คืออะไรค่ะ",
        "options": [
          "Let us add the same charge again.",
          "Let us ignore that line and pay.",
          "Let us discuss tomorrow’s bookings instead.",
          "Let us check that charge together."
        ],
        "correct": 3,
        "explain": "Review the specific charge before explaining or correcting it.",
        "explainTh": "ตรวจสอบรายการที่สงสัยก่อนอธิบายหรือแก้ไข",
        "level": 2,
        "topic": "payment",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-013",
        "q": "A guest says, “Could you explain what happens next before you begin?” Which reply best responds to this request?",
        "guest": "Could you explain what happens next before you begin?",
        "guestTh": "ช่วยอธิบายขั้นตอนถัดไปก่อนเริ่มได้ไหมคะ",
        "options": [
          "Of course. I will explain the next step first.",
          "Of course. I will start and explain afterwards.",
          "Of course. I will ask you after finishing.",
          "Of course. I will skip your question."
        ],
        "correct": 0,
        "explain": "The guest requests information before the next action.",
        "explainTh": "ผู้ใช้บริการต้องการทราบขั้นตอนก่อนเริ่ม",
        "level": 2,
        "topic": "comfort",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-014",
        "q": "A guest says, “I am not sure I understood the instructions.” Which reply best responds to this request?",
        "guest": "I am not sure I understood the instructions.",
        "guestTh": "ไม่แน่ใจว่าเข้าใจคำแนะนำถูกหรือไม่ค่ะ",
        "options": [
          "Let me use more technical words.",
          "Let me explain them in shorter steps.",
          "Let me repeat them more quickly.",
          "Let me ask you to guess the meaning."
        ],
        "correct": 1,
        "explain": "Simplify the explanation and check understanding.",
        "explainTh": "อธิบายเป็นขั้นตอนสั้น ๆ และตรวจสอบความเข้าใจ",
        "level": 2,
        "topic": "communication",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-015",
        "q": "A guest says, “I booked for two people, not one.” Which reply best responds to this request?",
        "guest": "I booked for two people, not one.",
        "guestTh": "จองสำหรับสองคน ไม่ใช่คนเดียวค่ะ",
        "options": [
          "Thank you. I will assume one person is correct.",
          "Thank you. I will charge for three people.",
          "Thank you. Let me check the booking details.",
          "Thank you. I will change your name instead."
        ],
        "correct": 2,
        "explain": "Check the discrepancy before changing the arrangement.",
        "explainTh": "ตรวจสอบจำนวนผู้รับบริการที่ไม่ตรงกันก่อนแก้ไข",
        "level": 2,
        "topic": "booking",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-016",
        "q": "A guest says, “Is this product included in the treatment price?” Which reply best responds to this request?",
        "guest": "Is this product included in the treatment price?",
        "guestTh": "ผลิตภัณฑ์นี้รวมอยู่ในราคาทรีตเมนต์ไหมคะ",
        "options": [
          "Let me add it to your bill first.",
          "Let me assume every product is free.",
          "Let me explain the price after you buy it.",
          "Let me confirm whether it is included before you decide."
        ],
        "correct": 3,
        "explain": "Clarify inclusion and cost before the guest chooses.",
        "explainTh": "แจ้งว่ารวมในราคาหรือไม่ก่อนให้ตัดสินใจ",
        "level": 2,
        "topic": "payment",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-017",
        "q": "A guest says, “Please avoid my right shoulder.” Which reply best responds to this request?",
        "guest": "Please avoid my right shoulder.",
        "guestTh": "กรุณาหลีกเลี่ยงไหล่ขวาค่ะ",
        "options": [
          "Certainly. I will avoid your right shoulder.",
          "Certainly. I will work only on that shoulder.",
          "Certainly. I will avoid your left foot.",
          "Certainly. I will press harder there."
        ],
        "correct": 0,
        "explain": "Repeat the specific boundary accurately.",
        "explainTh": "ทวนบริเวณที่ขอให้หลีกเลี่ยงให้ถูกต้อง",
        "level": 2,
        "topic": "comfort",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-018",
        "q": "A guest says, “Can you write that down for me?” Which reply best responds to this request?",
        "guest": "Can you write that down for me?",
        "guestTh": "ช่วยเขียนให้ได้ไหมคะ",
        "options": [
          "Of course. I will say it more loudly.",
          "Of course. I will write the information clearly.",
          "Of course. I will erase the information.",
          "Of course. I will ask you to memorise it."
        ],
        "correct": 1,
        "explain": "The guest asks for written information.",
        "explainTh": "ผู้ใช้บริการต้องการข้อมูลเป็นลายลักษณ์อักษร",
        "level": 2,
        "topic": "communication",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-019",
        "q": "A guest says, “I may be ten minutes late. What are my options?” Which reply best responds to this request?",
        "guest": "I may be ten minutes late. What are my options?",
        "guestTh": "อาจไปช้าสิบนาทีค่ะ มีทางเลือกอย่างไรบ้างคะ",
        "options": [
          "Your full treatment time is guaranteed without checking.",
          "Your booking is cancelled automatically in every case.",
          "Let me check how that affects your booking and explain the options.",
          "There is no need to tell the reception team."
        ],
        "correct": 2,
        "explain": "Check the real arrangement rather than inventing a policy.",
        "explainTh": "ตรวจสอบเงื่อนไขจริง ไม่เดาหรือสร้างนโยบายขึ้นเอง",
        "level": 2,
        "topic": "booking",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-020",
        "q": "A guest says, “May I get changed in private?” Which reply best responds to this request?",
        "guest": "May I get changed in private?",
        "guestTh": "ขอเปลี่ยนเสื้อผ้าเป็นการส่วนตัวได้ไหมคะ",
        "options": [
          "Of course. I will stay and watch.",
          "Of course. I will leave the door open.",
          "Of course. I will ask another guest to join you.",
          "Of course. I will step outside and explain how to call me."
        ],
        "correct": 3,
        "explain": "Provide privacy and a clear way to ask for assistance.",
        "explainTh": "ให้ความเป็นส่วนตัวและบอกวิธีเรียกพนักงาน",
        "level": 2,
        "topic": "comfort",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-021",
        "q": "A guest says, “Can you guarantee that my refund will be approved?” Which reply best responds to this request?",
        "guest": "Can you guarantee that my refund will be approved?",
        "guestTh": "ยืนยันได้ไหมคะว่าจะอนุมัติเงินคืนแน่นอน",
        "options": [
          "I can submit the request, but approval must be confirmed.",
          "Yes. Every refund is automatically approved.",
          "Yes. I can approve it without authorisation.",
          "No. I will not pass on your request."
        ],
        "correct": 0,
        "explain": "Distinguish submitting a request from approving it.",
        "explainTh": "แยกการส่งคำขอออกจากการอนุมัติ",
        "level": 3,
        "topic": "payment",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-022",
        "q": "A guest says, “Can you guarantee this treatment will remove my pain?” Which reply best responds to this request?",
        "guest": "Can you guarantee this treatment will remove my pain?",
        "guestTh": "รับรองได้ไหมคะว่าทรีตเมนต์นี้ทำให้อาการปวดหาย",
        "options": [
          "Yes. It removes pain for everyone.",
          "I cannot guarantee that. Let me refer your question to the qualified practitioner.",
          "Yes. You will not need medical advice.",
          "Yes. Stronger pressure always solves it."
        ],
        "correct": 1,
        "explain": "Avoid guarantees and refer clinical questions appropriately.",
        "explainTh": "ไม่รับรองผลการรักษา และส่งต่อคำถามให้ผู้มีคุณสมบัติเหมาะสม",
        "level": 3,
        "topic": "comfort",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-023",
        "q": "A guest says, “I told the previous staff member about my request. Do I need to explain it again?” Which reply best responds to this request?",
        "guest": "I told the previous staff member about my request. Do I need to explain it again?",
        "guestTh": "แจ้งพนักงานคนก่อนแล้ว ต้องอธิบายอีกครั้งไหมคะ",
        "options": [
          "You must start again because we never share requests.",
          "I will assume I know without checking.",
          "Let me check the handover, then confirm any missing details with you.",
          "The previous staff member is always responsible."
        ],
        "correct": 2,
        "explain": "Check the existing record and clarify only what is missing.",
        "explainTh": "ตรวจบันทึกส่งต่องาน แล้วถามเฉพาะข้อมูลที่ยังขาด",
        "level": 3,
        "topic": "communication",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-024",
        "q": "A guest says, “I need a quieter room, but I do not want to change my appointment time.” Which reply best responds to this request?",
        "guest": "I need a quieter room, but I do not want to change my appointment time.",
        "guestTh": "ต้องการห้องที่เงียบกว่าแต่ไม่อยากเปลี่ยนเวลานัดค่ะ",
        "options": [
          "I will move you to tomorrow without asking.",
          "I will cancel the appointment now.",
          "I will keep the room and change only your payment.",
          "Let me check for a quieter room at your existing time."
        ],
        "correct": 3,
        "explain": "Keep both conditions in mind: quieter room and unchanged time.",
        "explainTh": "คำนึงถึงทั้งห้องที่เงียบกว่าและเวลานัดเดิม",
        "level": 3,
        "topic": "booking",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-025",
        "q": "A guest says, “The price you just quoted is different from my confirmation email.” Which reply best responds to this request?",
        "guest": "The price you just quoted is different from my confirmation email.",
        "guestTh": "ราคาที่แจ้งไม่ตรงกับอีเมลยืนยันค่ะ",
        "options": [
          "Let us compare the email with the booking record before payment.",
          "The newer price must be correct, so pay now.",
          "Delete the email so the difference disappears.",
          "I will apply a discount without checking either record."
        ],
        "correct": 0,
        "explain": "Compare the evidence and resolve the discrepancy before payment.",
        "explainTh": "เปรียบเทียบหลักฐานและแก้ความต่างก่อนรับชำระเงิน",
        "level": 3,
        "topic": "payment",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-026",
        "q": "A guest says, “I want to know which product you will use before I agree.” Which reply best responds to this request?",
        "guest": "I want to know which product you will use before I agree.",
        "guestTh": "อยากทราบว่าจะใช้ผลิตภัณฑ์อะไร ก่อนตัดสินใจค่ะ",
        "options": [
          "I will apply it first and show you later.",
          "I will show you the product information before asking for your agreement.",
          "Agreement is not needed for any product.",
          "All products have exactly the same ingredients."
        ],
        "correct": 1,
        "explain": "Give the requested information before seeking agreement.",
        "explainTh": "ให้ข้อมูลที่ต้องการก่อนขอความยินยอม",
        "level": 3,
        "topic": "comfort",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-027",
        "q": "A guest says, “Could you ask your manager to speak with me?” Which reply best responds to this request?",
        "guest": "Could you ask your manager to speak with me?",
        "guestTh": "ช่วยติดต่อผู้จัดการให้คุยด้วยได้ไหมคะ",
        "options": [
          "Of course. Let me avoid telling the manager.",
          "Of course. Let me close your request.",
          "Of course. Let me contact the manager for you.",
          "Of course. Let me choose another treatment."
        ],
        "correct": 2,
        "explain": "The request is to speak to the manager, not to buy a service.",
        "explainTh": "คำขอคือพบผู้จัดการ ไม่ใช่เลือกบริการอื่น",
        "level": 2,
        "topic": "communication",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-028",
        "q": "A guest says, “I received two confirmation messages. Do I have two bookings?” Which reply best responds to this request?",
        "guest": "I received two confirmation messages. Do I have two bookings?",
        "guestTh": "ได้รับข้อความยืนยันสองข้อความ มีการจองสองครั้งหรือคะ",
        "options": [
          "Two messages always mean two paid bookings.",
          "You must attend both without checking.",
          "Please ignore all confirmation messages.",
          "Let me check whether they refer to the same booking."
        ],
        "correct": 3,
        "explain": "Check the booking references before assuming duplication.",
        "explainTh": "ตรวจเลขอ้างอิงก่อนสรุปว่าจองซ้ำ",
        "level": 2,
        "topic": "booking",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-029",
        "q": "A guest says, “Can you tell me the total before I pay?” Which reply best responds to this request?",
        "guest": "Can you tell me the total before I pay?",
        "guestTh": "ขอทราบยอดรวมก่อนชำระเงินค่ะ",
        "options": [
          "Certainly. I will confirm the full amount and any applicable charges.",
          "Certainly. I will take the payment before checking.",
          "Certainly. I will tell you only one part of the price.",
          "Certainly. I will explain it after you leave."
        ],
        "correct": 0,
        "explain": "Confirm the total, not just an incomplete price.",
        "explainTh": "แจ้งยอดรวม ไม่ใช่เพียงบางส่วนของราคา",
        "level": 2,
        "topic": "payment",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "spa-scenario-030",
        "q": "A guest says, “The problem is still happening after the first check.” Which reply best responds to this request?",
        "guest": "The problem is still happening after the first check.",
        "guestTh": "ตรวจสอบครั้งแรกแล้วแต่ยังมีปัญหาอยู่ค่ะ",
        "options": [
          "The first check means the problem must be solved.",
          "Thank you for the update. I will follow up with the responsible team.",
          "Please stop mentioning it because we checked once.",
          "I will mark the request completed without checking."
        ],
        "correct": 1,
        "explain": "An unresolved request needs follow-up rather than premature closure.",
        "explainTh": "คำขอที่ยังไม่สำเร็จต้องติดตาม ไม่ปิดงานก่อนแก้ไข",
        "level": 2,
        "topic": "communication",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      }
    ],
    "readings": [
      {
        "id": "spa-reading-001",
        "title": "A booking message",
        "titleTh": "ข้อความการจอง",
        "level": 1,
        "topic": "booking",
        "passage": "Anna has a massage appointment on Friday at 10:00. She asks to arrive at 09:45 to complete a short form. Her treatment lasts 45 minutes. The receptionist sends a message confirming the date, the appointment time and the earlier arrival time.",
        "passageTh": "แอนนามีนัดนวดวันศุกร์เวลา 10:00 น. เธอขอมาถึงเวลา 09:45 น. เพื่อกรอกแบบฟอร์มสั้น ๆ ทรีตเมนต์ใช้เวลา 45 นาที พนักงานส่งข้อความยืนยันวัน เวลานัด และเวลาที่จะมาถึงก่อนนัด",
        "trainingExample": true,
        "questions": [
          {
            "id": "spa-reading-001-q1",
            "q": "What is the message mainly about?",
            "options": [
              "Confirming an appointment",
              "Reporting a missing bag",
              "Explaining a refund",
              "Ordering new towels"
            ],
            "correct": 0,
            "explain": "The message confirms the booking and arrival details.",
            "explainTh": "ข้อความยืนยันรายละเอียดการนัดหมายและการมาถึง",
            "level": 1,
            "topic": "booking"
          },
          {
            "id": "spa-reading-001-q2",
            "q": "What time is Anna’s appointment?",
            "options": [
              "10:00",
              "09:45",
              "10:45",
              "11:00"
            ],
            "correct": 0,
            "explain": "The appointment is at 10:00; 09:45 is the arrival time.",
            "explainTh": "นัดเวลา 10:00 น. ส่วน 09:45 น. คือเวลามาถึง",
            "level": 1,
            "topic": "booking"
          },
          {
            "id": "spa-reading-001-q3",
            "q": "Why does Anna plan to arrive early?",
            "options": [
              "To complete a short form",
              "To buy a product",
              "To meet the manager",
              "To collect lost property"
            ],
            "correct": 0,
            "explain": "The passage says she will complete a form before the appointment.",
            "explainTh": "ข้อความระบุว่าจะกรอกแบบฟอร์มก่อนเวลานัด",
            "level": 1,
            "topic": "booking"
          }
        ]
      },
      {
        "id": "spa-reading-002",
        "title": "A room-preparation note",
        "titleTh": "บันทึกเตรียมห้อง",
        "level": 1,
        "topic": "comfort",
        "passage": "Room Three needs two clean towels and one small cushion. Put the towels on the shelf and the cushion on the chair. Do not start the music yet. The guest has requested a quiet session. Tell reception when the room is ready.",
        "passageTh": "ห้องสามต้องใช้ผ้าขนหนูสะอาดสองผืนและหมอนรองเล็กหนึ่งใบ วางผ้าบนชั้นและหมอนบนเก้าอี้ ยังไม่เปิดเพลง เพราะผู้ใช้บริการขอความเงียบ เมื่อห้องพร้อมให้แจ้งแผนกต้อนรับ",
        "trainingExample": true,
        "questions": [
          {
            "id": "spa-reading-002-q1",
            "q": "What is the main purpose of the note?",
            "options": [
              "To explain how to prepare a room",
              "To confirm a payment",
              "To cancel a treatment",
              "To advertise a product"
            ],
            "correct": 0,
            "explain": "It lists supplies and preparation instructions.",
            "explainTh": "บันทึกระบุอุปกรณ์และวิธีเตรียมห้อง",
            "level": 1,
            "topic": "comfort"
          },
          {
            "id": "spa-reading-002-q2",
            "q": "Where should the cushion go?",
            "options": [
              "On the chair",
              "On the shelf",
              "At reception",
              "Outside the room"
            ],
            "correct": 0,
            "explain": "The cushion belongs on the chair; the towels go on the shelf.",
            "explainTh": "หมอนวางบนเก้าอี้ ส่วนผ้าวางบนชั้น",
            "level": 1,
            "topic": "comfort"
          },
          {
            "id": "spa-reading-002-q3",
            "q": "Why should the music remain off?",
            "options": [
              "The guest requested a quiet session",
              "The music system is broken",
              "The room is closed all day",
              "Reception is having a meeting"
            ],
            "correct": 0,
            "explain": "The guest’s preference for quiet is explicitly stated.",
            "explainTh": "ข้อความระบุว่าผู้ใช้บริการต้องการความเงียบ",
            "level": 1,
            "topic": "comfort"
          }
        ]
      },
      {
        "id": "spa-reading-003",
        "title": "A changed appointment",
        "titleTh": "การเปลี่ยนเวลานัด",
        "level": 1,
        "topic": "booking",
        "passage": "Ben cannot attend his appointment at 14:00 on Tuesday. Reception offers 16:00 on the same day or 11:00 on Wednesday. Ben chooses the later Tuesday time. Reception updates the booking and sends one new confirmation message.",
        "passageTh": "เบนมาตามนัดวันอังคารเวลา 14:00 น. ไม่ได้ พนักงานเสนอวันเดิมเวลา 16:00 น. หรือวันพุธเวลา 11:00 น. เบนเลือกวันอังคารช่วงที่ช้าลง พนักงานจึงแก้การจองและส่งข้อความยืนยันใหม่หนึ่งข้อความ",
        "trainingExample": true,
        "questions": [
          {
            "id": "spa-reading-003-q1",
            "q": "What change does Ben request?",
            "options": [
              "A different appointment time",
              "A new payment method",
              "A different therapist name",
              "A replacement receipt"
            ],
            "correct": 0,
            "explain": "The note is about rescheduling an appointment.",
            "explainTh": "ข้อความกล่าวถึงการเลื่อนเวลานัด",
            "level": 1,
            "topic": "booking"
          },
          {
            "id": "spa-reading-003-q2",
            "q": "Which appointment does Ben choose?",
            "options": [
              "Tuesday at 16:00",
              "Tuesday at 14:00",
              "Wednesday at 11:00",
              "Wednesday at 16:00"
            ],
            "correct": 0,
            "explain": "He chooses the later time on Tuesday.",
            "explainTh": "เขาเลือกวันอังคารเวลาที่ช้ากว่า คือ 16:00 น.",
            "level": 1,
            "topic": "booking"
          },
          {
            "id": "spa-reading-003-q3",
            "q": "What does reception do after updating the booking?",
            "options": [
              "Sends a new confirmation",
              "Closes the spa",
              "Adds a second appointment",
              "Requests a new name"
            ],
            "correct": 0,
            "explain": "The final sentence states that a new confirmation is sent.",
            "explainTh": "ประโยคท้ายระบุว่าส่งข้อความยืนยันใหม่",
            "level": 1,
            "topic": "booking"
          }
        ]
      },
      {
        "id": "spa-reading-004",
        "title": "A product request",
        "titleTh": "คำขอข้อมูลผลิตภัณฑ์",
        "level": 1,
        "topic": "payment",
        "passage": "Mina asks about a moisturiser after her treatment. She wants to read the product information but does not want to buy anything today. The receptionist gives her the information and confirms that buying the product is optional. Mina thanks the receptionist.",
        "passageTh": "มีนาสอบถามมอยส์เจอไรเซอร์หลังรับบริการ เธอต้องการอ่านข้อมูลแต่ยังไม่ซื้อวันนี้ พนักงานให้ข้อมูลและยืนยันว่าซื้อหรือไม่ก็ได้ มีนาขอบคุณพนักงาน",
        "trainingExample": true,
        "questions": [
          {
            "id": "spa-reading-004-q1",
            "q": "What does Mina want now?",
            "options": [
              "Product information",
              "An immediate purchase",
              "A refund",
              "A new appointment"
            ],
            "correct": 0,
            "explain": "She requests information, not a purchase.",
            "explainTh": "เธอขอข้อมูล ไม่ได้ต้องการซื้อทันที",
            "level": 1,
            "topic": "payment"
          },
          {
            "id": "spa-reading-004-q2",
            "q": "When does she want to buy the product?",
            "options": [
              "She does not want to buy it today",
              "Immediately",
              "Before reading the information",
              "Before her treatment"
            ],
            "correct": 0,
            "explain": "The passage says she does not want to buy anything today.",
            "explainTh": "ข้อความบอกว่าเธอยังไม่ซื้ออะไรในวันนี้",
            "level": 1,
            "topic": "payment"
          },
          {
            "id": "spa-reading-004-q3",
            "q": "What does “optional” mean here?",
            "options": [
              "Mina can choose whether to buy it",
              "Mina must buy it",
              "It is automatically free",
              "It is already on her bill"
            ],
            "correct": 0,
            "explain": "Optional means not compulsory.",
            "explainTh": "optional หมายถึงไม่บังคับ",
            "level": 1,
            "topic": "payment"
          }
        ]
      },
      {
        "id": "spa-reading-005",
        "title": "A handover request",
        "titleTh": "คำขอในการส่งต่องาน",
        "level": 2,
        "topic": "communication",
        "passage": "Before leaving her shift, Nok records a guest’s request for an extra towel in the lounge. She has asked the attendant to deliver it, but delivery is not yet confirmed. In the handover note, Nok asks the next receptionist to check whether the guest has received the towel.",
        "passageTh": "ก่อนหมดกะ นกบันทึกว่าผู้ใช้บริการในห้องรับรองขอผ้าขนหนูเพิ่ม เธอแจ้งพนักงานให้นำไปส่งแล้ว แต่ยังไม่ยืนยันว่าส่งถึง ในบันทึกส่งต่องานจึงขอให้พนักงานกะถัดไปตรวจว่าผู้ใช้บริการได้รับหรือยัง",
        "trainingExample": true,
        "questions": [
          {
            "id": "spa-reading-005-q1",
            "q": "What is the note mainly intended to do?",
            "options": [
              "Ensure an unfinished request is followed up",
              "Record a completed refund",
              "Advertise a new service",
              "Change the opening time"
            ],
            "correct": 0,
            "explain": "The delivery still needs confirmation by the next shift.",
            "explainTh": "กะถัดไปยังต้องตรวจยืนยันการส่งถึง",
            "level": 2,
            "topic": "communication"
          },
          {
            "id": "spa-reading-005-q2",
            "q": "What has already happened?",
            "options": [
              "An attendant has been asked to deliver a towel",
              "The guest confirmed receipt",
              "The request was cancelled",
              "The towel was charged twice"
            ],
            "correct": 0,
            "explain": "Nok has requested delivery, but completion is not confirmed.",
            "explainTh": "นกขอให้ส่งแล้ว แต่ยังไม่ยืนยันว่าส่งสำเร็จ",
            "level": 2,
            "topic": "communication"
          },
          {
            "id": "spa-reading-005-q3",
            "q": "What should the next receptionist check?",
            "options": [
              "Whether the guest received the towel",
              "Whether the guest bought a product",
              "Whether the lounge needs a new name",
              "Whether Nok booked an appointment"
            ],
            "correct": 0,
            "explain": "The final sentence states the follow-up question.",
            "explainTh": "ประโยคท้ายระบุให้ตรวจว่าได้รับผ้าหรือยัง",
            "level": 2,
            "topic": "communication"
          }
        ]
      },
      {
        "id": "spa-reading-006",
        "title": "An itemised bill",
        "titleTh": "ใบแจ้งค่าใช้จ่ายแยกรายการ",
        "level": 2,
        "topic": "payment",
        "passage": "In this training example, a treatment costs 900 baht and an optional product costs 250 baht. Dao chose the treatment but declined the product. Her bill mistakenly shows both items. The receptionist checks the record and asks for the bill to be corrected before Dao pays.",
        "passageTh": "ในตัวอย่างฝึกนี้ ทรีตเมนต์ราคา 900 บาท และผลิตภัณฑ์ที่เลือกซื้อเพิ่มราคา 250 บาท ดาวรับทรีตเมนต์แต่ไม่ซื้อผลิตภัณฑ์ ใบแจ้งค่าใช้จ่ายกลับมีทั้งสองรายการ พนักงานตรวจบันทึกและขอแก้ไขก่อนดาวชำระเงิน",
        "trainingExample": true,
        "questions": [
          {
            "id": "spa-reading-006-q1",
            "q": "Why is the bill being checked?",
            "options": [
              "It includes an item Dao declined",
              "The treatment was cancelled",
              "Dao ordered two products",
              "The currency is unknown"
            ],
            "correct": 0,
            "explain": "The unwanted product appears on the bill.",
            "explainTh": "ใบแจ้งค่าใช้จ่ายมีผลิตภัณฑ์ที่ดาวปฏิเสธ",
            "level": 2,
            "topic": "payment"
          },
          {
            "id": "spa-reading-006-q2",
            "q": "Which item did Dao actually choose?",
            "options": [
              "The 900-baht treatment",
              "The 250-baht product",
              "Both items",
              "Neither item"
            ],
            "correct": 0,
            "explain": "She chose only the treatment.",
            "explainTh": "ดาวเลือกเฉพาะทรีตเมนต์",
            "level": 2,
            "topic": "payment"
          },
          {
            "id": "spa-reading-006-q3",
            "q": "When should the correction happen?",
            "options": [
              "Before Dao pays",
              "After she leaves",
              "After the next appointment",
              "Only at the end of the month"
            ],
            "correct": 0,
            "explain": "The passage specifies correction before payment.",
            "explainTh": "ข้อความระบุให้แก้ก่อนชำระเงิน",
            "level": 2,
            "topic": "payment"
          }
        ]
      },
      {
        "id": "spa-reading-007",
        "title": "A consent conversation",
        "titleTh": "การพูดคุยก่อนยินยอม",
        "level": 2,
        "topic": "comfort",
        "passage": "A guest wants to know which product will be used and asks the practitioner to avoid the right shoulder. The practitioner explains the product and confirms the area to avoid. Before starting, the practitioner asks whether the guest is happy to proceed. The guest can ask to pause or stop.",
        "passageTh": "ผู้ใช้บริการต้องการทราบผลิตภัณฑ์ที่จะใช้และขอให้หลีกเลี่ยงไหล่ขวา ผู้ให้บริการอธิบายผลิตภัณฑ์และยืนยันบริเวณที่จะหลีกเลี่ยง ก่อนเริ่มถามว่ายินดีให้ดำเนินการหรือไม่ ผู้ใช้บริการสามารถขอพักหรือหยุดได้",
        "trainingExample": true,
        "questions": [
          {
            "id": "spa-reading-007-q1",
            "q": "What is the main focus of this passage?",
            "options": [
              "Explaining and confirming the guest’s choices",
              "Offering a guaranteed cure",
              "Calculating a discount",
              "Advertising shoulder treatment"
            ],
            "correct": 0,
            "explain": "The practitioner explains, checks preferences and asks before starting.",
            "explainTh": "ผู้ให้บริการอธิบาย ตรวจความต้องการ และถามก่อนเริ่ม",
            "level": 2,
            "topic": "comfort"
          },
          {
            "id": "spa-reading-007-q2",
            "q": "Which area should be avoided?",
            "options": [
              "The right shoulder",
              "The left shoulder",
              "Both feet",
              "The lower back"
            ],
            "correct": 0,
            "explain": "The guest specifically names the right shoulder.",
            "explainTh": "ผู้ใช้บริการระบุไหล่ขวาโดยเฉพาะ",
            "level": 2,
            "topic": "comfort"
          },
          {
            "id": "spa-reading-007-q3",
            "q": "What happens before the practitioner starts?",
            "options": [
              "The guest is asked whether to proceed",
              "The product is applied without explanation",
              "The price is doubled",
              "The guest is told stopping is impossible"
            ],
            "correct": 0,
            "explain": "The passage explicitly includes a question before starting.",
            "explainTh": "ข้อความระบุว่าถามความยินยอมก่อนเริ่ม",
            "level": 2,
            "topic": "comfort"
          }
        ]
      },
      {
        "id": "spa-reading-008",
        "title": "A found watch",
        "titleTh": "นาฬิกาที่พบ",
        "level": 2,
        "topic": "communication",
        "passage": "A silver watch with a blue strap was found in a changing area. A guest telephones to ask about a missing watch. Reception records the description given by the guest and checks it against the lost-property record. The item is returned only after the workplace verification procedure is completed.",
        "passageTh": "พบนาฬิกาสีเงินสายสีน้ำเงินในบริเวณเปลี่ยนเสื้อผ้า ผู้ใช้บริการโทรถามเรื่องนาฬิกาหาย พนักงานบันทึกลักษณะที่แจ้งและเทียบกับบันทึกทรัพย์สินสูญหาย จะคืนสิ่งของหลังดำเนินการตรวจสอบตามขั้นตอนของสถานประกอบการ",
        "trainingExample": true,
        "questions": [
          {
            "id": "spa-reading-008-q1",
            "q": "What is the passage about?",
            "options": [
              "Handling a lost-property enquiry",
              "Selling a watch",
              "Changing a treatment time",
              "Reporting a late therapist"
            ],
            "correct": 0,
            "explain": "The guest is asking about a missing item.",
            "explainTh": "ผู้ใช้บริการสอบถามสิ่งของที่หาย",
            "level": 2,
            "topic": "communication"
          },
          {
            "id": "spa-reading-008-q2",
            "q": "What colour is the strap?",
            "options": [
              "Blue",
              "Silver",
              "Black",
              "Green"
            ],
            "correct": 0,
            "explain": "The watch is silver, but the strap is blue.",
            "explainTh": "ตัวนาฬิกาสีเงิน แต่สายสีน้ำเงิน",
            "level": 2,
            "topic": "communication"
          },
          {
            "id": "spa-reading-008-q3",
            "q": "What must happen before returning the watch?",
            "options": [
              "Completion of the verification procedure",
              "A new product purchase",
              "Automatic payment of a fee",
              "A second treatment booking"
            ],
            "correct": 0,
            "explain": "The final sentence states the return condition.",
            "explainTh": "ประโยคท้ายระบุเงื่อนไขก่อนคืนสิ่งของ",
            "level": 2,
            "topic": "communication"
          }
        ]
      },
      {
        "id": "spa-reading-009",
        "title": "A conditional room change",
        "titleTh": "การเปลี่ยนห้องที่มีเงื่อนไข",
        "level": 3,
        "topic": "booking",
        "passage": "A guest requests a quieter room without changing the 15:00 appointment. The only quieter room is booked until 15:30. Reception must not confirm the requested arrangement yet. The receptionist explains the conflict and asks whether the guest would prefer the original room at 15:00 or the quieter room at 15:30.",
        "passageTh": "ผู้ใช้บริการขอห้องที่เงียบกว่าโดยไม่เปลี่ยนนัด 15:00 น. แต่ห้องที่เงียบกว่าจะว่างเวลา 15:30 น. พนักงานจึงยังยืนยันตามคำขอไม่ได้ ต้องอธิบายข้อขัดข้องและถามว่าจะเลือกห้องเดิมเวลาเดิม หรือห้องเงียบเวลา 15:30 น.",
        "trainingExample": true,
        "questions": [
          {
            "id": "spa-reading-009-q1",
            "q": "Why cannot reception confirm the original request?",
            "options": [
              "The quieter room is not free at 15:00",
              "The guest cancelled",
              "Both rooms are closed all day",
              "The appointment record is missing"
            ],
            "correct": 0,
            "explain": "The available room and requested time do not match.",
            "explainTh": "ห้องที่ต้องการไม่ว่างในเวลาที่ขอ",
            "level": 3,
            "topic": "booking"
          },
          {
            "id": "spa-reading-009-q2",
            "q": "Which option keeps the appointment time unchanged?",
            "options": [
              "The original room at 15:00",
              "The quieter room at 15:30",
              "Any room tomorrow",
              "The quieter room at 16:00"
            ],
            "correct": 0,
            "explain": "Only the original room retains 15:00.",
            "explainTh": "ห้องเดิมเป็นตัวเลือกที่คงเวลา 15:00 น.",
            "level": 3,
            "topic": "booking"
          },
          {
            "id": "spa-reading-009-q3",
            "q": "What is the next appropriate communication step?",
            "options": [
              "Ask the guest to choose between the explained options",
              "Promise both conditions can be met",
              "Change the time without asking",
              "Hide the room conflict"
            ],
            "correct": 0,
            "explain": "The passage asks reception to explain and seek a choice.",
            "explainTh": "ข้อความให้พนักงานอธิบายและขอให้เลือก",
            "level": 3,
            "topic": "booking"
          }
        ]
      },
      {
        "id": "spa-reading-010",
        "title": "A refund request is not an approval",
        "titleTh": "คำขอคืนเงินยังไม่ใช่การอนุมัติ",
        "level": 3,
        "topic": "payment",
        "passage": "A guest requests a refund. The receptionist records the reason and sends the request to the manager, who is authorised to make the decision. The receptionist tells the guest that the request has been submitted, not approved. A follow-up time will be confirmed after checking the manager’s availability.",
        "passageTh": "ผู้ใช้บริการขอคืนเงิน พนักงานบันทึกเหตุผลและส่งคำขอให้ผู้จัดการที่มีอำนาจตัดสินใจ พนักงานแจ้งว่าส่งคำขอแล้ว แต่ยังไม่ได้อนุมัติ และจะยืนยันเวลาติดตามหลังตรวจเวลาว่างของผู้จัดการ",
        "trainingExample": true,
        "questions": [
          {
            "id": "spa-reading-010-q1",
            "q": "What distinction does the passage emphasise?",
            "options": [
              "Submitting a request is different from approving it",
              "All refunds are immediately approved",
              "Only cash payments can be refunded",
              "A manager never reviews requests"
            ],
            "correct": 0,
            "explain": "The receptionist has submitted the request, not decided it.",
            "explainTh": "พนักงานส่งคำขอแล้ว แต่ยังไม่ได้ตัดสินใจอนุมัติ",
            "level": 3,
            "topic": "payment"
          },
          {
            "id": "spa-reading-010-q2",
            "q": "Who is authorised to decide?",
            "options": [
              "The manager",
              "Any waiting guest",
              "The laundry attendant",
              "The next customer"
            ],
            "correct": 0,
            "explain": "The manager is explicitly named as the decision-maker.",
            "explainTh": "ข้อความระบุผู้จัดการเป็นผู้มีอำนาจตัดสินใจ",
            "level": 3,
            "topic": "payment"
          },
          {
            "id": "spa-reading-010-q3",
            "q": "Why is a follow-up time not promised immediately?",
            "options": [
              "The manager’s availability must be checked",
              "The guest has already received the money",
              "The request was deleted",
              "The reason was not recorded"
            ],
            "correct": 0,
            "explain": "The passage states that availability must be checked first.",
            "explainTh": "ต้องตรวจเวลาว่างก่อนยืนยันเวลาติดตาม",
            "level": 3,
            "topic": "payment"
          }
        ]
      }
    ],
    "listenRespond": [
      {
        "id": "spa-listen-response-001",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "The pressure is a little too strong.",
        "guestTh": "แรงกดหนักเกินไปเล็กน้อยค่ะ",
        "options": [
          "Thank you. I will use lighter pressure.",
          "I will make the room warmer.",
          "I will use firmer pressure.",
          "I will add more time."
        ],
        "correct": 0,
        "explain": "“Too strong” concerns pressure; the response should offer less pressure.",
        "explainTh": "ผู้ใช้บริการพูดถึงแรงกด ควรตอบว่าจะลดแรงกด",
        "level": 1,
        "topic": "comfort",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "The pressure is a little too strong.",
        "audioTextTh": "แรงกดหนักเกินไปเล็กน้อยค่ะ"
      },
      {
        "id": "spa-listen-response-002",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Could I have a towel for my hair?",
        "guestTh": "ขอผ้าขนหนูสำหรับผมได้ไหมคะ",
        "options": [
          "Certainly. I will bring you a receipt.",
          "Certainly. I will bring you a clean towel.",
          "Certainly. I will change your appointment.",
          "Certainly. I will check the music."
        ],
        "correct": 1,
        "explain": "Respond to the requested item: a towel.",
        "explainTh": "ตอบให้ตรงกับสิ่งที่ขอ คือผ้าขนหนู",
        "level": 1,
        "topic": "comfort",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Could I have a towel for my hair?",
        "audioTextTh": "ขอผ้าขนหนูสำหรับผมได้ไหมคะ"
      },
      {
        "id": "spa-listen-response-003",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Can I book a treatment for tomorrow?",
        "guestTh": "ขอจองทรีตเมนต์สำหรับพรุ่งนี้ได้ไหมคะ",
        "options": [
          "Let me check yesterday’s payment.",
          "Let me print your old receipt.",
          "Let me check tomorrow’s availability.",
          "Let me collect your used towel."
        ],
        "correct": 2,
        "explain": "Check availability before confirming a booking.",
        "explainTh": "ตรวจสอบเวลาว่างก่อนยืนยันการจอง",
        "level": 1,
        "topic": "booking",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Can I book a treatment for tomorrow?",
        "audioTextTh": "ขอจองทรีตเมนต์สำหรับพรุ่งนี้ได้ไหมคะ"
      },
      {
        "id": "spa-listen-response-004",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Sorry, could you say the price again?",
        "guestTh": "ขอโทษค่ะ ช่วยบอกราคาอีกครั้งได้ไหมคะ",
        "options": [
          "Of course. I will change your treatment.",
          "Of course. I will cancel the booking.",
          "Of course. I will speak more quickly.",
          "Of course. I will repeat the price slowly."
        ],
        "correct": 3,
        "explain": "The guest asks for repetition, not a different service.",
        "explainTh": "ผู้ใช้บริการขอให้พูดซ้ำ ไม่ได้ขอเปลี่ยนบริการ",
        "level": 1,
        "topic": "communication",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Sorry, could you say the price again?",
        "audioTextTh": "ขอโทษค่ะ ช่วยบอกราคาอีกครั้งได้ไหมคะ"
      },
      {
        "id": "spa-listen-response-005",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "I would prefer a quiet session.",
        "guestTh": "อยากให้ช่วงรับบริการเงียบ ๆ ค่ะ",
        "options": [
          "Of course. I will keep conversation to a minimum.",
          "Of course. I will explain every product aloud.",
          "Of course. I will increase the music volume.",
          "Of course. I will invite another guest in."
        ],
        "correct": 0,
        "explain": "Respect the stated preference for quiet.",
        "explainTh": "เคารพความต้องการให้บรรยากาศเงียบ",
        "level": 1,
        "topic": "comfort",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "I would prefer a quiet session.",
        "audioTextTh": "อยากให้ช่วงรับบริการเงียบ ๆ ค่ะ"
      },
      {
        "id": "spa-listen-response-006",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Could I have a receipt, please?",
        "guestTh": "ขอใบเสร็จด้วยค่ะ",
        "options": [
          "Certainly. I will bring a consultation form.",
          "Certainly. I will prepare your receipt.",
          "Certainly. I will check your room temperature.",
          "Certainly. I will offer another massage."
        ],
        "correct": 1,
        "explain": "A receipt records the payment; respond to that request.",
        "explainTh": "receipt คือใบเสร็จ ควรตอบตรงกับคำขอ",
        "level": 1,
        "topic": "payment",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Could I have a receipt, please?",
        "audioTextTh": "ขอใบเสร็จด้วยค่ะ"
      },
      {
        "id": "spa-listen-response-007",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "The room feels cold.",
        "guestTh": "ห้องนี้รู้สึกหนาวค่ะ",
        "options": [
          "Would you like a receipt while I check the price?",
          "Would you like stronger pressure instead?",
          "Would you like a blanket while I check the temperature?",
          "Would you like me to turn the temperature down?"
        ],
        "correct": 2,
        "explain": "Offer help related to the reported cold.",
        "explainTh": "เสนอความช่วยเหลือที่เกี่ยวข้องกับความหนาว",
        "level": 1,
        "topic": "comfort",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "The room feels cold.",
        "audioTextTh": "ห้องนี้รู้สึกหนาวค่ะ"
      },
      {
        "id": "spa-listen-response-008",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "My appointment is under the name Lee.",
        "guestTh": "นัดหมายใช้ชื่อ Lee ค่ะ",
        "options": [
          "Thank you. Let me choose a new surname.",
          "Thank you. Let me close your account.",
          "Thank you. Let me bring the menu first.",
          "Thank you. Let me find your booking."
        ],
        "correct": 3,
        "explain": "“Under the name” gives the name used for the booking.",
        "explainTh": "under the name บอกชื่อที่ใช้จอง",
        "level": 1,
        "topic": "booking",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "My appointment is under the name Lee.",
        "audioTextTh": "นัดหมายใช้ชื่อ Lee ค่ะ"
      },
      {
        "id": "spa-listen-response-011",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Could we move my booking to a later time today?",
        "guestTh": "ขอเลื่อนนัดเป็นเวลาที่ช้าลงในวันนี้ได้ไหมคะ",
        "options": [
          "Let me check what later times are available today.",
          "Let me confirm the same time tomorrow.",
          "Let me cancel it without checking.",
          "Let me book an earlier time today."
        ],
        "correct": 0,
        "explain": "Later today keeps the same day and asks for a later time.",
        "explainTh": "later today หมายถึงวันเดิมแต่เวลาช้าลง",
        "level": 2,
        "topic": "booking",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Could we move my booking to a later time today?",
        "audioTextTh": "ขอเลื่อนนัดเป็นเวลาที่ช้าลงในวันนี้ได้ไหมคะ"
      },
      {
        "id": "spa-listen-response-012",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "I do not recognise this charge on my bill.",
        "guestTh": "ไม่ทราบว่าค่าใช้จ่ายรายการนี้คืออะไรค่ะ",
        "options": [
          "Let us add the same charge again.",
          "Let us check that charge together.",
          "Let us ignore that line and pay.",
          "Let us discuss tomorrow’s bookings instead."
        ],
        "correct": 1,
        "explain": "Review the specific charge before explaining or correcting it.",
        "explainTh": "ตรวจสอบรายการที่สงสัยก่อนอธิบายหรือแก้ไข",
        "level": 2,
        "topic": "payment",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "I do not recognise this charge on my bill.",
        "audioTextTh": "ไม่ทราบว่าค่าใช้จ่ายรายการนี้คืออะไรค่ะ"
      },
      {
        "id": "spa-listen-response-013",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Could you explain what happens next before you begin?",
        "guestTh": "ช่วยอธิบายขั้นตอนถัดไปก่อนเริ่มได้ไหมคะ",
        "options": [
          "Of course. I will start and explain afterwards.",
          "Of course. I will ask you after finishing.",
          "Of course. I will explain the next step first.",
          "Of course. I will skip your question."
        ],
        "correct": 2,
        "explain": "The guest requests information before the next action.",
        "explainTh": "ผู้ใช้บริการต้องการทราบขั้นตอนก่อนเริ่ม",
        "level": 2,
        "topic": "comfort",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Could you explain what happens next before you begin?",
        "audioTextTh": "ช่วยอธิบายขั้นตอนถัดไปก่อนเริ่มได้ไหมคะ"
      },
      {
        "id": "spa-listen-response-014",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "I am not sure I understood the instructions.",
        "guestTh": "ไม่แน่ใจว่าเข้าใจคำแนะนำถูกหรือไม่ค่ะ",
        "options": [
          "Let me use more technical words.",
          "Let me repeat them more quickly.",
          "Let me ask you to guess the meaning.",
          "Let me explain them in shorter steps."
        ],
        "correct": 3,
        "explain": "Simplify the explanation and check understanding.",
        "explainTh": "อธิบายเป็นขั้นตอนสั้น ๆ และตรวจสอบความเข้าใจ",
        "level": 2,
        "topic": "communication",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "I am not sure I understood the instructions.",
        "audioTextTh": "ไม่แน่ใจว่าเข้าใจคำแนะนำถูกหรือไม่ค่ะ"
      },
      {
        "id": "spa-listen-response-015",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "I booked for two people, not one.",
        "guestTh": "จองสำหรับสองคน ไม่ใช่คนเดียวค่ะ",
        "options": [
          "Thank you. Let me check the booking details.",
          "Thank you. I will assume one person is correct.",
          "Thank you. I will charge for three people.",
          "Thank you. I will change your name instead."
        ],
        "correct": 0,
        "explain": "Check the discrepancy before changing the arrangement.",
        "explainTh": "ตรวจสอบจำนวนผู้รับบริการที่ไม่ตรงกันก่อนแก้ไข",
        "level": 2,
        "topic": "booking",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "I booked for two people, not one.",
        "audioTextTh": "จองสำหรับสองคน ไม่ใช่คนเดียวค่ะ"
      },
      {
        "id": "spa-listen-response-016",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Is this product included in the treatment price?",
        "guestTh": "ผลิตภัณฑ์นี้รวมอยู่ในราคาทรีตเมนต์ไหมคะ",
        "options": [
          "Let me add it to your bill first.",
          "Let me confirm whether it is included before you decide.",
          "Let me assume every product is free.",
          "Let me explain the price after you buy it."
        ],
        "correct": 1,
        "explain": "Clarify inclusion and cost before the guest chooses.",
        "explainTh": "แจ้งว่ารวมในราคาหรือไม่ก่อนให้ตัดสินใจ",
        "level": 2,
        "topic": "payment",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Is this product included in the treatment price?",
        "audioTextTh": "ผลิตภัณฑ์นี้รวมอยู่ในราคาทรีตเมนต์ไหมคะ"
      },
      {
        "id": "spa-listen-response-017",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Please avoid my right shoulder.",
        "guestTh": "กรุณาหลีกเลี่ยงไหล่ขวาค่ะ",
        "options": [
          "Certainly. I will work only on that shoulder.",
          "Certainly. I will avoid your left foot.",
          "Certainly. I will avoid your right shoulder.",
          "Certainly. I will press harder there."
        ],
        "correct": 2,
        "explain": "Repeat the specific boundary accurately.",
        "explainTh": "ทวนบริเวณที่ขอให้หลีกเลี่ยงให้ถูกต้อง",
        "level": 2,
        "topic": "comfort",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Please avoid my right shoulder.",
        "audioTextTh": "กรุณาหลีกเลี่ยงไหล่ขวาค่ะ"
      },
      {
        "id": "spa-listen-response-018",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Can you write that down for me?",
        "guestTh": "ช่วยเขียนให้ได้ไหมคะ",
        "options": [
          "Of course. I will say it more loudly.",
          "Of course. I will erase the information.",
          "Of course. I will ask you to memorise it.",
          "Of course. I will write the information clearly."
        ],
        "correct": 3,
        "explain": "The guest asks for written information.",
        "explainTh": "ผู้ใช้บริการต้องการข้อมูลเป็นลายลักษณ์อักษร",
        "level": 2,
        "topic": "communication",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Can you write that down for me?",
        "audioTextTh": "ช่วยเขียนให้ได้ไหมคะ"
      },
      {
        "id": "spa-listen-response-021",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Can you guarantee that my refund will be approved?",
        "guestTh": "ยืนยันได้ไหมคะว่าจะอนุมัติเงินคืนแน่นอน",
        "options": [
          "I can submit the request, but approval must be confirmed.",
          "Yes. Every refund is automatically approved.",
          "Yes. I can approve it without authorisation.",
          "No. I will not pass on your request."
        ],
        "correct": 0,
        "explain": "Distinguish submitting a request from approving it.",
        "explainTh": "แยกการส่งคำขอออกจากการอนุมัติ",
        "level": 3,
        "topic": "payment",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Can you guarantee that my refund will be approved?",
        "audioTextTh": "ยืนยันได้ไหมคะว่าจะอนุมัติเงินคืนแน่นอน"
      },
      {
        "id": "spa-listen-response-022",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Can you guarantee this treatment will remove my pain?",
        "guestTh": "รับรองได้ไหมคะว่าทรีตเมนต์นี้ทำให้อาการปวดหาย",
        "options": [
          "Yes. It removes pain for everyone.",
          "I cannot guarantee that. Let me refer your question to the qualified practitioner.",
          "Yes. You will not need medical advice.",
          "Yes. Stronger pressure always solves it."
        ],
        "correct": 1,
        "explain": "Avoid guarantees and refer clinical questions appropriately.",
        "explainTh": "ไม่รับรองผลการรักษา และส่งต่อคำถามให้ผู้มีคุณสมบัติเหมาะสม",
        "level": 3,
        "topic": "comfort",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Can you guarantee this treatment will remove my pain?",
        "audioTextTh": "รับรองได้ไหมคะว่าทรีตเมนต์นี้ทำให้อาการปวดหาย"
      },
      {
        "id": "spa-listen-response-023",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "I told the previous staff member about my request. Do I need to explain it again?",
        "guestTh": "แจ้งพนักงานคนก่อนแล้ว ต้องอธิบายอีกครั้งไหมคะ",
        "options": [
          "You must start again because we never share requests.",
          "I will assume I know without checking.",
          "Let me check the handover, then confirm any missing details with you.",
          "The previous staff member is always responsible."
        ],
        "correct": 2,
        "explain": "Check the existing record and clarify only what is missing.",
        "explainTh": "ตรวจบันทึกส่งต่องาน แล้วถามเฉพาะข้อมูลที่ยังขาด",
        "level": 3,
        "topic": "communication",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "I told the previous staff member about my request. Do I need to explain it again?",
        "audioTextTh": "แจ้งพนักงานคนก่อนแล้ว ต้องอธิบายอีกครั้งไหมคะ"
      },
      {
        "id": "spa-listen-response-024",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "I need a quieter room, but I do not want to change my appointment time.",
        "guestTh": "ต้องการห้องที่เงียบกว่าแต่ไม่อยากเปลี่ยนเวลานัดค่ะ",
        "options": [
          "I will move you to tomorrow without asking.",
          "I will cancel the appointment now.",
          "I will keep the room and change only your payment.",
          "Let me check for a quieter room at your existing time."
        ],
        "correct": 3,
        "explain": "Keep both conditions in mind: quieter room and unchanged time.",
        "explainTh": "คำนึงถึงทั้งห้องที่เงียบกว่าและเวลานัดเดิม",
        "level": 3,
        "topic": "booking",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "I need a quieter room, but I do not want to change my appointment time.",
        "audioTextTh": "ต้องการห้องที่เงียบกว่าแต่ไม่อยากเปลี่ยนเวลานัดค่ะ"
      }
    ],
    "order": [
      {
        "id": "spa-order-001",
        "title": "Confirming a changed appointment",
        "titleTh": "ยืนยันการเปลี่ยนเวลานัด",
        "opening": {
          "speaker": "Guest",
          "text": "Could I move my appointment to Friday?",
          "th": "ขอเลื่อนนัดเป็นวันศุกร์ได้ไหมคะ"
        },
        "turns": [
          {
            "speaker": "Staff",
            "text": "Let me check Friday’s availability.",
            "th": "ขอตรวจสอบเวลาว่างของวันศุกร์ก่อนค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "Thank you. Is there a morning appointment?",
            "th": "ขอบคุณค่ะ มีเวลาว่างช่วงเช้าไหมคะ"
          },
          {
            "speaker": "Staff",
            "text": "Yes. Ten o’clock is available. Would that suit you?",
            "th": "มีค่ะ สิบโมงว่าง สะดวกเวลานี้ไหมคะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 1,
        "topic": "booking",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-order-002",
        "title": "Checking comfort again",
        "titleTh": "ตรวจสอบความสบายอีกครั้ง",
        "opening": {
          "speaker": "Guest",
          "text": "The pressure is too strong.",
          "th": "แรงกดหนักเกินไปค่ะ"
        },
        "turns": [
          {
            "speaker": "Staff",
            "text": "Thank you. I will use lighter pressure.",
            "th": "ขอบคุณที่แจ้งค่ะ จะลดแรงกดลงค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "That feels better now.",
            "th": "ตอนนี้รู้สึกดีขึ้นค่ะ"
          },
          {
            "speaker": "Staff",
            "text": "I am glad. Please tell me if you need another adjustment.",
            "th": "ยินดีค่ะ หากต้องการปรับอีก กรุณาแจ้งนะคะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 1,
        "topic": "comfort",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-order-003",
        "title": "Returning a lost item",
        "titleTh": "คืนสิ่งของที่ลืมไว้",
        "opening": {
          "speaker": "Guest",
          "text": "I left a silver watch here yesterday.",
          "th": "ลืมนาฬิกาสีเงินไว้ที่นี่เมื่อวานค่ะ"
        },
        "turns": [
          {
            "speaker": "Staff",
            "text": "Let me check our lost-property record.",
            "th": "ขอตรวจบันทึกทรัพย์สินสูญหายก่อนค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "It has a blue strap.",
            "th": "สายสีน้ำเงินค่ะ"
          },
          {
            "speaker": "Staff",
            "text": "Thank you for the description. I will check the details with the team.",
            "th": "ขอบคุณที่อธิบายลักษณะค่ะ จะตรวจรายละเอียดกับทีมค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 2,
        "topic": "communication",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-order-004",
        "title": "Explaining a form",
        "titleTh": "อธิบายแบบฟอร์ม",
        "opening": {
          "speaker": "Guest",
          "text": "I do not understand this question on the form.",
          "th": "ไม่เข้าใจคำถามในแบบฟอร์มข้อนี้ค่ะ"
        },
        "turns": [
          {
            "speaker": "Staff",
            "text": "Let me explain it in simpler words.",
            "th": "ขออธิบายด้วยคำที่ง่ายขึ้นค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "Thank you. Now I understand.",
            "th": "ขอบคุณค่ะ ตอนนี้เข้าใจแล้ว"
          },
          {
            "speaker": "Staff",
            "text": "You are welcome. Please ask if another question is unclear.",
            "th": "ยินดีค่ะ หากข้ออื่นไม่ชัดเจน สอบถามได้ค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 1,
        "topic": "communication",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-order-005",
        "title": "Checking a payment discrepancy",
        "titleTh": "ตรวจรายการชำระเงินที่ไม่ตรง",
        "opening": {
          "speaker": "Guest",
          "text": "This amount is different from my email.",
          "th": "ยอดนี้ไม่ตรงกับอีเมลค่ะ"
        },
        "turns": [
          {
            "speaker": "Staff",
            "text": "Let us compare the email with the booking record.",
            "th": "ขอเปรียบเทียบอีเมลกับบันทึกการจองค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "Here is the confirmation email.",
            "th": "นี่คืออีเมลยืนยันค่ะ"
          },
          {
            "speaker": "Staff",
            "text": "Thank you. I will check the difference before taking payment.",
            "th": "ขอบคุณค่ะ จะตรวจความต่างก่อนรับชำระเงินค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 2,
        "topic": "payment",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-order-006",
        "title": "Asking before changing a position",
        "titleTh": "ถามก่อนเปลี่ยนท่าทาง",
        "opening": {
          "speaker": "Staff",
          "text": "Would you like help changing position?",
          "th": "ต้องการให้ช่วยเปลี่ยนท่าทางไหมคะ"
        },
        "turns": [
          {
            "speaker": "Guest",
            "text": "Yes, but please explain what I should do first.",
            "th": "ต้องการค่ะ แต่ช่วยอธิบายสิ่งที่ต้องทำก่อนนะคะ"
          },
          {
            "speaker": "Staff",
            "text": "Of course. I will explain before we move.",
            "th": "ได้ค่ะ จะอธิบายก่อนเปลี่ยนท่าค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "Thank you. Please speak slowly.",
            "th": "ขอบคุณค่ะ กรุณาพูดช้า ๆ นะคะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 2,
        "topic": "comfort",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-order-007",
        "title": "Choosing not to buy",
        "titleTh": "เลือกไม่ซื้อสินค้า",
        "opening": {
          "speaker": "Staff",
          "text": "Would you like information about this product?",
          "th": "ต้องการข้อมูลเกี่ยวกับผลิตภัณฑ์นี้ไหมคะ"
        },
        "turns": [
          {
            "speaker": "Guest",
            "text": "No, thank you. I am not buying anything today.",
            "th": "ไม่ค่ะ ขอบคุณ วันนี้ยังไม่ซื้ออะไรค่ะ"
          },
          {
            "speaker": "Staff",
            "text": "Of course. There is no obligation to buy.",
            "th": "ได้ค่ะ ไม่มีข้อผูกมัดว่าต้องซื้อค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "Thank you for understanding.",
            "th": "ขอบคุณที่เข้าใจค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 1,
        "topic": "payment",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-order-008",
        "title": "Arranging a supervisor call",
        "titleTh": "นัดให้หัวหน้าติดต่อกลับ",
        "opening": {
          "speaker": "Guest",
          "text": "Could your supervisor call me about my request?",
          "th": "ขอให้หัวหน้าติดต่อกลับเรื่องคำขอได้ไหมคะ"
        },
        "turns": [
          {
            "speaker": "Staff",
            "text": "Certainly. May I confirm the best contact number?",
            "th": "ได้ค่ะ ขอทวนหมายเลขติดต่อที่สะดวกค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "Please use the number on my booking.",
            "th": "ใช้หมายเลขในการจองได้เลยค่ะ"
          },
          {
            "speaker": "Staff",
            "text": "Thank you. I will pass on the request and ask the supervisor to confirm a time.",
            "th": "ขอบคุณค่ะ จะส่งคำขอและให้หัวหน้ายืนยันเวลาค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 3,
        "topic": "communication",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-order-009",
        "title": "Checking product information",
        "titleTh": "ตรวจข้อมูลผลิตภัณฑ์",
        "opening": {
          "speaker": "Guest",
          "text": "Can I see the ingredients before I decide?",
          "th": "ขอดูส่วนผสมก่อนตัดสินใจได้ไหมคะ"
        },
        "turns": [
          {
            "speaker": "Staff",
            "text": "Of course. Let me find the product information.",
            "th": "ได้ค่ะ ขอตรวจหาข้อมูลผลิตภัณฑ์ก่อนค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "I would also like to ask the practitioner a question.",
            "th": "อยากถามผู้ให้บริการที่มีคุณสมบัติเหมาะสมด้วยค่ะ"
          },
          {
            "speaker": "Staff",
            "text": "Certainly. I will ask the practitioner to discuss your concern before we proceed.",
            "th": "ได้ค่ะ จะให้ผู้ให้บริการพูดคุยข้อกังวลก่อนดำเนินการค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 3,
        "topic": "comfort",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "spa-order-010",
        "title": "Following up a request",
        "titleTh": "ติดตามคำขอ",
        "opening": {
          "speaker": "Guest",
          "text": "The extra towel has not arrived.",
          "th": "ผ้าขนหนูที่ขอเพิ่มยังไม่มาค่ะ"
        },
        "turns": [
          {
            "speaker": "Staff",
            "text": "I am sorry. I will follow up with the team now.",
            "th": "ขออภัยค่ะ จะติดตามกับทีมตอนนี้ค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "Thank you. I am waiting in the lounge.",
            "th": "ขอบคุณค่ะ รออยู่ที่ห้องรับรองนะคะ"
          },
          {
            "speaker": "Staff",
            "text": "I will tell them your location and check that it reaches you.",
            "th": "จะแจ้งจุดที่รอและตรวจว่าส่งถึงคุณแล้วค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 2,
        "topic": "communication",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      }
    ],
    "context": [
      {
        "id": "spa-context-001",
        "sentence": "Please ___ your surname so I can write it correctly.",
        "answer": "spell",
        "accepted": [
          "spell"
        ],
        "hint": "Say the letters of a word in order.",
        "hintTh": "บอกตัวอักษรของคำตามลำดับ",
        "level": 1,
        "topic": "booking",
        "vocabularyId": "spa-v-spell",
        "explain": "Spell: Say the letters of a word in order.",
        "explainTh": "บอกตัวอักษรของคำตามลำดับ",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-002",
        "sentence": "Would you like a clean ___ to dry your hands?",
        "answer": "towel",
        "accepted": [
          "towel"
        ],
        "hint": "A piece of absorbent cloth used for drying.",
        "hintTh": "ผ้าที่ใช้เช็ดให้แห้ง",
        "level": 1,
        "topic": "comfort",
        "vocabularyId": "spa-v-towel",
        "explain": "Towel: A piece of absorbent cloth used for drying.",
        "explainTh": "ผ้าที่ใช้เช็ดให้แห้ง",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-003",
        "sentence": "The room is cold. Would you like a ___ to keep warm?",
        "answer": "blanket",
        "accepted": [
          "blanket"
        ],
        "hint": "A covering used for warmth.",
        "hintTh": "ผ้าคลุมเพื่อให้ความอบอุ่น",
        "level": 1,
        "topic": "comfort",
        "vocabularyId": "spa-v-blanket",
        "explain": "Blanket: A covering used for warmth.",
        "explainTh": "ผ้าคลุมเพื่อให้ความอบอุ่น",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-004",
        "sentence": "Here is your ___ as proof of payment.",
        "answer": "receipt",
        "accepted": [
          "receipt"
        ],
        "hint": "A document showing that money has been paid.",
        "hintTh": "เอกสารยืนยันว่าชำระเงินแล้ว",
        "level": 1,
        "topic": "payment",
        "vocabularyId": "spa-v-receipt",
        "explain": "Receipt: A document showing that money has been paid.",
        "explainTh": "เอกสารยืนยันว่าชำระเงินแล้ว",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-005",
        "sentence": "Let me check your ___ in our booking record.",
        "answer": "appointment",
        "accepted": [
          "appointment"
        ],
        "hint": "An arrangement to meet at a particular time.",
        "hintTh": "การนัดพบในเวลาที่กำหนด",
        "level": 1,
        "topic": "booking",
        "vocabularyId": "spa-v-appointment",
        "explain": "Appointment: An arrangement to meet at a particular time.",
        "explainTh": "การนัดพบในเวลาที่กำหนด",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-006",
        "sentence": "Is the massage ___ too strong?",
        "answer": "pressure",
        "accepted": [
          "pressure"
        ],
        "hint": "The force used when pressing.",
        "hintTh": "แรงที่ใช้กด",
        "level": 1,
        "topic": "comfort",
        "vocabularyId": "spa-v-pressure",
        "explain": "Pressure: The force used when pressing.",
        "explainTh": "แรงที่ใช้กด",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-007",
        "sentence": "Could you ___ the number? I did not hear it.",
        "answer": "repeat",
        "accepted": [
          "repeat"
        ],
        "hint": "Say the same thing again.",
        "hintTh": "พูดสิ่งเดิมอีกครั้ง",
        "level": 1,
        "topic": "communication",
        "vocabularyId": "spa-v-repeat",
        "explain": "Repeat: Say the same thing again.",
        "explainTh": "พูดสิ่งเดิมอีกครั้ง",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-008",
        "sentence": "Which date would you ___ for your visit?",
        "answer": "prefer",
        "accepted": [
          "prefer"
        ],
        "hint": "Like one choice more than another.",
        "hintTh": "ชอบทางเลือกหนึ่งมากกว่าอีกทางเลือก",
        "level": 1,
        "topic": "booking",
        "vocabularyId": "spa-v-prefer",
        "explain": "Prefer: Like one choice more than another.",
        "explainTh": "ชอบทางเลือกหนึ่งมากกว่าอีกทางเลือก",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-009",
        "sentence": "Please tell me if you feel ___ in this position.",
        "answer": "uncomfortable",
        "accepted": [
          "uncomfortable"
        ],
        "hint": "Not physically at ease.",
        "hintTh": "รู้สึกไม่สบายตัว",
        "level": 1,
        "topic": "comfort",
        "vocabularyId": "spa-v-uncomfortable",
        "explain": "Uncomfortable: Not physically at ease.",
        "explainTh": "รู้สึกไม่สบายตัว",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-010",
        "sentence": "Please speak ___ so I can follow the instructions.",
        "answer": "slowly",
        "accepted": [
          "slowly"
        ],
        "hint": "At a reduced speed, not quickly.",
        "hintTh": "อย่างช้า ๆ ไม่รวดเร็ว",
        "level": 1,
        "topic": "communication",
        "vocabularyId": null,
        "explain": "Slowly: At a reduced speed, not quickly.",
        "explainTh": "อย่างช้า ๆ ไม่รวดเร็ว",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-011",
        "sentence": "We need to ___ the booking because the guest wants a different time.",
        "answer": "reschedule",
        "accepted": [
          "reschedule"
        ],
        "hint": "Arrange a new time for an existing appointment.",
        "hintTh": "เปลี่ยนเวลาให้กับนัดเดิม",
        "level": 2,
        "topic": "booking",
        "vocabularyId": "spa-v-reschedule",
        "explain": "Reschedule: Arrange a new time for an existing appointment.",
        "explainTh": "เปลี่ยนเวลาให้กับนัดเดิม",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-012",
        "sentence": "Please ___ the total before I pay.",
        "answer": "confirm",
        "accepted": [
          "confirm"
        ],
        "hint": "State that a detail is correct or agreed.",
        "hintTh": "ยืนยันว่ารายละเอียดถูกต้องหรือตกลงแล้ว",
        "level": 2,
        "topic": "payment",
        "vocabularyId": "spa-v-confirm",
        "explain": "Confirm: State that a detail is correct or agreed.",
        "explainTh": "ยืนยันว่ารายละเอียดถูกต้องหรือตกลงแล้ว",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-013",
        "sentence": "Could you ___ the next step in simple words?",
        "answer": "explain",
        "accepted": [
          "explain"
        ],
        "hint": "Make something clear by giving information.",
        "hintTh": "ทำให้เข้าใจด้วยการให้ข้อมูล",
        "level": 2,
        "topic": "communication",
        "vocabularyId": "spa-v-explain",
        "explain": "Explain: Make something clear by giving information.",
        "explainTh": "ทำให้เข้าใจด้วยการให้ข้อมูล",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-014",
        "sentence": "I will ___ the request in the handover notes.",
        "answer": "record",
        "accepted": [
          "record"
        ],
        "hint": "Write information so it can be checked later.",
        "hintTh": "จดข้อมูลไว้เพื่อตรวจภายหลัง",
        "level": 2,
        "topic": "communication",
        "vocabularyId": null,
        "explain": "Record: Write information so it can be checked later.",
        "explainTh": "จดข้อมูลไว้เพื่อตรวจภายหลัง",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-015",
        "sentence": "The guest would like to request a ___ for the cancelled service.",
        "answer": "refund",
        "accepted": [
          "refund"
        ],
        "hint": "Money returned to a customer.",
        "hintTh": "เงินที่คืนให้ลูกค้า",
        "level": 2,
        "topic": "payment",
        "vocabularyId": "spa-v-refund",
        "explain": "Refund: Money returned to a customer.",
        "explainTh": "เงินที่คืนให้ลูกค้า",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-016",
        "sentence": "Is a morning appointment ___, or are they all booked?",
        "answer": "available",
        "accepted": [
          "available"
        ],
        "hint": "Free to be used or booked.",
        "hintTh": "ว่างให้ใช้หรือจองได้",
        "level": 2,
        "topic": "booking",
        "vocabularyId": "spa-v-available",
        "explain": "Available: Free to be used or booked.",
        "explainTh": "ว่างให้ใช้หรือจองได้",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-017",
        "sentence": "Is the product ___ in the price, or is there an extra charge?",
        "answer": "included",
        "accepted": [
          "included"
        ],
        "hint": "Part of the stated amount or package.",
        "hintTh": "รวมอยู่ในราคาหรือแพ็กเกจแล้ว",
        "level": 2,
        "topic": "payment",
        "vocabularyId": null,
        "explain": "Included: Part of the stated amount or package.",
        "explainTh": "รวมอยู่ในราคาหรือแพ็กเกจแล้ว",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-018",
        "sentence": "Please ___ that area; the guest does not want it touched.",
        "answer": "avoid",
        "accepted": [
          "avoid"
        ],
        "hint": "Keep away from or do not touch something.",
        "hintTh": "หลีกเลี่ยงหรือไม่สัมผัส",
        "level": 2,
        "topic": "comfort",
        "vocabularyId": null,
        "explain": "Avoid: Keep away from or do not touch something.",
        "explainTh": "หลีกเลี่ยงหรือไม่สัมผัส",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-019",
        "sentence": "May I ___ the cushion to make you more comfortable?",
        "answer": "adjust",
        "accepted": [
          "adjust"
        ],
        "hint": "Change the position or setting slightly.",
        "hintTh": "ปรับตำแหน่งหรือการตั้งค่าเล็กน้อย",
        "level": 2,
        "topic": "comfort",
        "vocabularyId": "spa-v-adjust",
        "explain": "Adjust: Change the position or setting slightly.",
        "explainTh": "ปรับตำแหน่งหรือการตั้งค่าเล็กน้อย",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-020",
        "sentence": "Thank you for your ___ while we check the details.",
        "answer": "patience",
        "accepted": [
          "patience"
        ],
        "hint": "The ability to wait calmly.",
        "hintTh": "ความอดทนในการรออย่างสงบ",
        "level": 2,
        "topic": "communication",
        "vocabularyId": null,
        "explain": "Patience: The ability to wait calmly.",
        "explainTh": "ความอดทนในการรออย่างสงบ",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-021",
        "sentence": "We ask for a ___ to secure this booking.",
        "answer": "deposit",
        "accepted": [
          "deposit"
        ],
        "hint": "An amount paid in advance toward a booking.",
        "hintTh": "เงินที่จ่ายล่วงหน้าเพื่อยืนยันการจอง",
        "level": 2,
        "topic": "booking",
        "vocabularyId": "spa-v-deposit",
        "explain": "Deposit: An amount paid in advance toward a booking.",
        "explainTh": "เงินที่จ่ายล่วงหน้าเพื่อยืนยันการจอง",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-022",
        "sentence": "I will contact my ___ about this request.",
        "answer": "supervisor",
        "accepted": [
          "supervisor"
        ],
        "hint": "The person who oversees your work.",
        "hintTh": "ผู้ที่ควบคุมดูแลงานของคุณ",
        "level": 2,
        "topic": "communication",
        "vocabularyId": "spa-v-supervisor",
        "explain": "Supervisor: The person who oversees your work.",
        "explainTh": "ผู้ที่ควบคุมดูแลงานของคุณ",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-023",
        "sentence": "Please ask for the guest’s ___ before proceeding.",
        "answer": "consent",
        "accepted": [
          "consent"
        ],
        "hint": "Permission given for an action.",
        "hintTh": "ความยินยอมให้ดำเนินการ",
        "level": 2,
        "topic": "comfort",
        "vocabularyId": "spa-v-consent",
        "explain": "Consent: Permission given for an action.",
        "explainTh": "ความยินยอมให้ดำเนินการ",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-024",
        "sentence": "We will close the door to protect your ___.",
        "answer": "privacy",
        "accepted": [
          "privacy"
        ],
        "hint": "Freedom from unwanted observation or intrusion.",
        "hintTh": "ความเป็นส่วนตัวที่ไม่ถูกรบกวน",
        "level": 2,
        "topic": "comfort",
        "vocabularyId": "spa-v-privacy",
        "explain": "Privacy: Freedom from unwanted observation or intrusion.",
        "explainTh": "ความเป็นส่วนตัวที่ไม่ถูกรบกวน",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-025",
        "sentence": "Please ___ the concern to the manager because it is beyond your authority.",
        "answer": "escalate",
        "accepted": [
          "escalate"
        ],
        "hint": "Refer an issue to a person with more authority.",
        "hintTh": "ส่งเรื่องให้ผู้มีอำนาจสูงกว่าพิจารณา",
        "level": 3,
        "topic": "communication",
        "vocabularyId": "spa-v-escalate",
        "explain": "Escalate: Refer an issue to a person with more authority.",
        "explainTh": "ส่งเรื่องให้ผู้มีอำนาจสูงกว่าพิจารณา",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-026",
        "sentence": "Include the unfinished request in the shift ___.",
        "answer": "handover",
        "accepted": [
          "handover"
        ],
        "hint": "The transfer of work information to the next person or shift.",
        "hintTh": "การส่งต่อข้อมูลงานให้คนหรือกะถัดไป",
        "level": 3,
        "topic": "communication",
        "vocabularyId": null,
        "explain": "Handover: The transfer of work information to the next person or shift.",
        "explainTh": "การส่งต่อข้อมูลงานให้คนหรือกะถัดไป",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-027",
        "sentence": "A refund request still needs managerial ___.",
        "answer": "approval",
        "accepted": [
          "approval"
        ],
        "hint": "An official agreement allowing an action.",
        "hintTh": "การอนุมัติให้ดำเนินการ",
        "level": 3,
        "topic": "payment",
        "vocabularyId": null,
        "explain": "Approval: An official agreement allowing an action.",
        "explainTh": "การอนุมัติให้ดำเนินการ",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-028",
        "sentence": "Read the product ___ before answering the guest’s question.",
        "answer": "information",
        "accepted": [
          "information"
        ],
        "hint": "Facts or details about something.",
        "hintTh": "ข้อเท็จจริงหรือรายละเอียดเกี่ยวกับสิ่งหนึ่ง",
        "level": 3,
        "topic": "comfort",
        "vocabularyId": null,
        "explain": "Information: Facts or details about something.",
        "explainTh": "ข้อเท็จจริงหรือรายละเอียดเกี่ยวกับสิ่งหนึ่ง",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-029",
        "sentence": "Please ___ the guest’s choice accurately in your notes.",
        "answer": "document",
        "accepted": [
          "document"
        ],
        "hint": "Record information in a written record.",
        "hintTh": "บันทึกข้อมูลไว้เป็นลายลักษณ์อักษร",
        "level": 3,
        "topic": "communication",
        "vocabularyId": null,
        "explain": "Document: Record information in a written record.",
        "explainTh": "บันทึกข้อมูลไว้เป็นลายลักษณ์อักษร",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "spa-context-030",
        "sentence": "We should ___ the issue with the responsible team.",
        "answer": "discuss",
        "accepted": [
          "discuss"
        ],
        "hint": "Talk about a matter to exchange information.",
        "hintTh": "พูดคุยเรื่องหนึ่งเพื่อแลกเปลี่ยนข้อมูล",
        "level": 3,
        "topic": "communication",
        "vocabularyId": null,
        "explain": "Discuss: Talk about a matter to exchange information.",
        "explainTh": "พูดคุยเรื่องหนึ่งเพื่อแลกเปลี่ยนข้อมูล",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      }
    ]
  },
  "cruise": {
    "mc": [
      {
        "q": "What is a “muster station”?",
        "options": [
          "The place a guest goes in an emergency",
          "A crew dining room",
          "A cabin with a balcony",
          "The ship’s kitchen"
        ],
        "correct": 0,
        "hit": "Check the guest’s assigned muster station using this ship’s current safety information.",
        "miss": "A muster station is the assigned emergency assembly point. Confirm its location using this ship’s instructions.",
        "id": "cruise-mc-001",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Check the guest’s assigned muster station using this ship’s current safety information."
      },
      {
        "q": "“Starboard” means:",
        "options": [
          "The front of the ship",
          "The right side when facing forward",
          "The back of the ship",
          "The top deck"
        ],
        "correct": 1,
        "hit": "Right — starboard is the right-hand side facing forward.",
        "miss": "Starboard is the right-hand side of the ship when facing forward.",
        "id": "cruise-mc-002",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — starboard is the right-hand side facing forward."
      },
      {
        "q": "A guest asks where the theatre is. Best answer?",
        "options": [
          "It’s upstairs.",
          "Somewhere on five.",
          "It’s on deck five, forward — take the lift and turn left.",
          "Ask someone else."
        ],
        "correct": 2,
        "hit": "Exactly — deck number, direction, then the turn.",
        "miss": "On a ship, always give the deck number and a direction. “Upstairs” means nothing.",
        "id": "cruise-mc-003",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Exactly — deck number, direction, then the turn."
      },
      {
        "q": "“All aboard time” is:",
        "options": [
          "When the buffet opens",
          "The start of the muster drill",
          "When the bar closes",
          "The time every guest must be back on the ship"
        ],
        "correct": 3,
        "hit": "Correct — and it is worth repeating twice to guests.",
        "miss": "All aboard time is the deadline for guests to be back on the ship.",
        "id": "cruise-mc-004",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — and it is worth repeating twice to guests."
      },
      {
        "q": "What does a “tender boat” do?",
        "options": [
          "Carries guests ashore where the ship cannot dock",
          "Delivers luggage",
          "Tows the ship",
          "Collects rubbish"
        ],
        "correct": 0,
        "hit": "Right — used when there is no berth for the ship.",
        "miss": "A tender boat carries guests ashore where the ship cannot dock.",
        "id": "cruise-mc-005",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — used when there is no berth for the ship."
      },
      {
        "q": "The general emergency alarm is:",
        "options": [
          "One short blast",
          "Seven or more short blasts followed by one long blast",
          "Three long blasts",
          "Continuous music"
        ],
        "correct": 1,
        "hit": "Correct. Follow the crew’s instructions and the ship’s safety procedures.",
        "miss": "The general emergency alarm is seven or more short blasts followed by one long blast. Follow the crew’s instructions.",
        "id": "cruise-mc-006",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct. Follow the crew’s instructions and the ship’s safety procedures."
      },
      {
        "q": "A guest’s drink is not in their package. What do you say?",
        "options": [
          "That’s not included.",
          "You have to pay.",
          "That one falls outside your package — there’s a small extra charge. Would you still like it?",
          "I’ll charge you anyway."
        ],
        "correct": 2,
        "hit": "Right — tell them before you pour, and let them choose.",
        "miss": "Explain the extra charge before serving, and let the guest decide.",
        "id": "cruise-mc-007",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — tell them before you pour, and let them choose."
      },
      {
        "q": "“Turndown service” means:",
        "options": [
          "Refusing a guest request",
          "Turning off the air conditioning",
          "Lowering the price",
          "Preparing the bed and cabin in the evening"
        ],
        "correct": 3,
        "hit": "Correct — the evening cabin visit.",
        "miss": "Turndown service is the evening visit to prepare the bed and tidy the cabin.",
        "id": "cruise-mc-008",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — the evening cabin visit."
      },
      {
        "q": "A guest feels seasick. Best response?",
        "options": [
          "I’m sorry you feel unwell. I will contact the medical team.",
          "You will be fine; do not worry.",
          "Take this tablet without asking anyone.",
          "Ignore it and continue your tour."
        ],
        "correct": 0,
        "hit": "Acknowledge the concern and seek appropriate medical assistance.",
        "miss": "Do not diagnose, prescribe or promise recovery. Contact the medical team according to ship procedure.",
        "id": "cruise-mc-009",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Acknowledge the concern and seek appropriate medical assistance."
      },
      {
        "q": "What is a guest’s “onboard account”?",
        "options": [
          "Their loyalty number",
          "The running bill of everything they charge",
          "Their cabin number",
          "Their booking reference"
        ],
        "correct": 1,
        "hit": "Correct — charged with the cruise card.",
        "miss": "The onboard account is the running bill of a guest’s charges.",
        "id": "cruise-mc-010",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — charged with the cruise card."
      },
      {
        "q": "A guest asks to enter a crew-only area. Best reply?",
        "options": [
          "You can’t go there.",
          "It’s forbidden.",
          "That area is crew only, but I’d be glad to take your request there myself.",
          "Nobody is allowed."
        ],
        "correct": 2,
        "hit": "Right — refuse the access, not the person.",
        "miss": "Refuse the access but offer to help with what they actually needed.",
        "id": "cruise-mc-011",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — refuse the access, not the person."
      },
      {
        "q": "“Disembarkation” is:",
        "options": [
          "Boarding the ship",
          "A safety drill",
          "A shore excursion",
          "Leaving the ship at the end of a cruise"
        ],
        "correct": 3,
        "hit": "Correct — the opposite of embarkation.",
        "miss": "Disembarkation is the process of leaving the ship at the end of a cruise.",
        "id": "cruise-mc-012",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — the opposite of embarkation."
      },
      {
        "q": "Why must a fire door stay closed?",
        "options": [
          "To hold back fire and smoke",
          "To keep the corridor quiet",
          "To save electricity",
          "To stop guests entering"
        ],
        "correct": 0,
        "hit": "Right — and always explain that reason to guests.",
        "miss": "A fire door holds back fire and smoke, so it must stay shut.",
        "id": "cruise-mc-013",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — and always explain that reason to guests."
      },
      {
        "q": "Best way to handle a complaint you cannot fix yourself?",
        "options": [
          "There’s nothing I can do.",
          "I’m sorry — let me take your cabin number and speak with my supervisor.",
          "Complain to guest services.",
          "That’s not my department."
        ],
        "correct": 1,
        "hit": "Exactly — always offer the next step.",
        "miss": "Never close the conversation. Take details and escalate.",
        "id": "cruise-mc-014",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Exactly — always offer the next step."
      },
      {
        "q": "“Ship’s time” matters because:",
        "options": [
          "It is always GMT",
          "It changes every hour",
          "It may differ from local time ashore",
          "Only the crew use it"
        ],
        "correct": 2,
        "hit": "Correct — this is how guests miss the ship.",
        "miss": "Ship’s time can differ from local time, so all aboard time follows the ship.",
        "id": "cruise-mc-015",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — this is how guests miss the ship."
      },
      {
        "q": "A “dietary requirement” is:",
        "options": [
          "A guest’s favourite dish",
          "A menu price",
          "A table booking",
          "A food a guest must avoid, for health or belief"
        ],
        "correct": 3,
        "hit": "Right — and the galley must be told.",
        "miss": "A dietary requirement is food a guest must avoid, for health or belief.",
        "id": "cruise-mc-016",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — and the galley must be told."
      },
      {
        "q": "Guest’s cabin is not ready. Best answer?",
        "options": [
          "Your stateroom will be ready by two — until then the buffet on deck eleven is open.",
          "Your cabin is not ready. Wait.",
          "Come back later.",
          "I don’t know when."
        ],
        "correct": 0,
        "hit": "Perfect — a time plus something to do meanwhile.",
        "miss": "Give a specific time and suggest something to do in the meantime.",
        "id": "cruise-mc-017",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Perfect — a time plus something to do meanwhile."
      },
      {
        "q": "“Gratuity” means:",
        "options": [
          "A discount",
          "A service tip",
          "A refund",
          "A free upgrade"
        ],
        "correct": 1,
        "hit": "Correct — often added daily to the onboard account.",
        "miss": "A gratuity is a service tip, often added to the onboard account.",
        "id": "cruise-mc-018",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — often added daily to the onboard account."
      },
      {
        "q": "How should you confirm where a guest’s life jacket is kept?",
        "options": [
          "Assume every ship uses the wardrobe",
          "Guess from another ship",
          "Check this ship’s current safety instructions",
          "Ask the guest to search every deck"
        ],
        "correct": 2,
        "hit": "Use the current instructions for the actual ship.",
        "miss": "Locations and arrangements vary. Check this ship’s safety instructions.",
        "id": "cruise-mc-019",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Use the current instructions for the actual ship."
      },
      {
        "q": "During the muster drill, guests should:",
        "options": [
          "Use the lifts",
          "Stay in their cabins",
          "Wait at the bar",
          "Use the stairs"
        ],
        "correct": 3,
        "hit": "Correct — stairs only during a drill.",
        "miss": "Guests must use the stairs, not the lifts, during a drill.",
        "id": "cruise-mc-020",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — stairs only during a drill."
      },
      {
        "q": "A guest returns late from shore. Best response?",
        "options": [
          "I’m glad you made it back safely — do check tomorrow’s all aboard time.",
          "You’re late, the ship almost left.",
          "You should be more careful.",
          "Next time we’ll leave you."
        ],
        "correct": 0,
        "hit": "Right — relief plus a forward-looking reminder.",
        "miss": "Express relief, then remind them about the next all aboard time.",
        "id": "cruise-mc-021",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — relief plus a forward-looking reminder."
      },
      {
        "q": "“Port of call” means:",
        "options": [
          "The left side of the ship",
          "A place the ship stops so guests can go ashore",
          "The harbour office",
          "A type of drink"
        ],
        "correct": 1,
        "hit": "Correct — note it is different from “port side”.",
        "miss": "A port of call is a place the ship stops so guests can go ashore.",
        "id": "cruise-mc-022",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — note it is different from “port side”."
      },
      {
        "q": "What should a guest take ashore?",
        "options": [
          "Their passport only",
          "Nothing at all",
          "Their cruise card and some local currency",
          "Their life jacket"
        ],
        "correct": 2,
        "hit": "Right — those two prevent most problems.",
        "miss": "Guests need their cruise card to reboard, plus some local currency.",
        "id": "cruise-mc-023",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right — those two prevent most problems."
      },
      {
        "q": "A “folio” is:",
        "options": [
          "A shore excursion ticket",
          "A cabin key",
          "The dinner menu",
          "The printed statement of a guest’s onboard charges"
        ],
        "correct": 3,
        "hit": "Correct — delivered before disembarkation.",
        "miss": "A folio is the printed statement of a guest’s onboard charges.",
        "id": "cruise-mc-024",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Correct — delivered before disembarkation."
      },
      {
        "q": "Choose the word that means \"a piece of cloth used for drying or covering\":",
        "options": [
          "Towel",
          "Arrival",
          "Exit",
          "Local time"
        ],
        "correct": 0,
        "vocabularyId": "cruise-v-towel",
        "word": "Towel",
        "added": true,
        "id": "cruise-mc-025",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Towel: A piece of cloth used for drying or covering. Example: Here is a clean towel.",
        "explainTh": "นี่คือผ้าขนหนูสะอาดค่ะ"
      },
      {
        "q": "Choose the word that means \"a cover used to keep someone warm\":",
        "options": [
          "Leak",
          "Blanket",
          "Pillow",
          "Hearing aid"
        ],
        "correct": 1,
        "vocabularyId": "cruise-v-blanket",
        "word": "Blanket",
        "added": true,
        "id": "cruise-mc-026",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Blanket: A cover used to keep someone warm. Example: Would you like another blanket?",
        "explainTh": "ต้องการผ้าห่มเพิ่มไหมคะ"
      },
      {
        "q": "Choose the word that means \"a soft support for the head or body\":",
        "options": [
          "Alarm",
          "Receipt",
          "Pillow",
          "Departure"
        ],
        "correct": 2,
        "vocabularyId": "cruise-v-pillow",
        "word": "Pillow",
        "added": true,
        "id": "cruise-mc-027",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Pillow: A soft support for the head or body. Example: Would you like a smaller pillow?",
        "explainTh": "ต้องการหมอนใบเล็กลงไหมคะ"
      },
      {
        "q": "Choose the word that means \"a soft pad used for support or comfort\":",
        "options": [
          "Emergency contact",
          "Authorisation",
          "Delay",
          "Cushion"
        ],
        "correct": 3,
        "vocabularyId": "cruise-v-cushion",
        "word": "Cushion",
        "added": true,
        "id": "cruise-mc-028",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Cushion: A soft pad used for support or comfort. Example: Would you like a cushion for your chair?",
        "explainTh": "ต้องการหมอนรองเก้าอี้ไหมคะ"
      },
      {
        "q": "Choose the word that means \"a large piece of cloth covering a bed or table\":",
        "options": [
          "Sheet",
          "Waiting time",
          "Allergy",
          "Starter"
        ],
        "correct": 0,
        "vocabularyId": "cruise-v-sheet",
        "word": "Sheet",
        "added": true,
        "id": "cruise-mc-029",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Sheet: A large piece of cloth covering a bed or table. Example: Would you like a fresh sheet?",
        "explainTh": "ต้องการผ้าปูที่นอนผืนใหม่ไหมคะ"
      },
      {
        "q": "Choose the word that means \"soft paper used for wiping the face or hands\":",
        "options": [
          "Confirmation",
          "Tissue",
          "Reference number",
          "Hanger"
        ],
        "correct": 1,
        "vocabularyId": "cruise-v-tissue",
        "word": "Tissue",
        "added": true,
        "id": "cruise-mc-030",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Tissue: Soft paper used for wiping the face or hands. Example: Would you like a tissue?",
        "explainTh": "ต้องการกระดาษเช็ดหน้าไหมคะ"
      },
      {
        "q": "Choose the word that means \"a product used with water for washing\":",
        "options": [
          "Waiting time",
          "Cutlery",
          "Soap",
          "Sheet"
        ],
        "correct": 2,
        "vocabularyId": "cruise-v-soap",
        "word": "Soap",
        "added": true,
        "id": "cruise-mc-031",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Soap: A product used with water for washing. Example: Soap is beside the washbasin.",
        "explainTh": "สบู่อยู่ข้างอ่างล้างมือค่ะ"
      },
      {
        "q": "Choose the word that means \"a product used for washing hair\":",
        "options": [
          "Departure",
          "Pain",
          "Sheet",
          "Shampoo"
        ],
        "correct": 3,
        "vocabularyId": "cruise-v-shampoo",
        "word": "Shampoo",
        "added": true,
        "id": "cruise-mc-032",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Shampoo: A product used for washing hair. Example: Shampoo is available in the shower.",
        "explainTh": "มีแชมพูในห้องอาบน้ำค่ะ"
      },
      {
        "q": "Choose the word that means \"a container used for holding small items\":",
        "options": [
          "Basket",
          "Luggage",
          "Currency",
          "Departure"
        ],
        "correct": 0,
        "vocabularyId": "cruise-v-basket",
        "word": "Basket",
        "added": true,
        "id": "cruise-mc-033",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Basket: A container used for holding small items. Example: The towels are in this basket.",
        "explainTh": "ผ้าขนหนูอยู่ในตะกร้านี้ค่ะ"
      },
      {
        "q": "Choose the word that means \"a surface in which you can see yourself\":",
        "options": [
          "Authorisation",
          "Mirror",
          "Checklist",
          "Shampoo"
        ],
        "correct": 1,
        "vocabularyId": "cruise-v-mirror",
        "word": "Mirror",
        "added": true,
        "id": "cruise-mc-034",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Mirror: A surface in which you can see yourself. Example: I will report the broken mirror.",
        "explainTh": "จะรายงานเรื่องกระจกที่แตกค่ะ"
      },
      {
        "q": "Choose the word that means \"a small container for a drink\":",
        "options": [
          "Order",
          "Exit",
          "Cup",
          "Pain"
        ],
        "correct": 2,
        "vocabularyId": "cruise-v-cup",
        "word": "Cup",
        "added": true,
        "id": "cruise-mc-035",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Cup: A small container for a drink. Example: Would you like a cup of water?",
        "explainTh": "ต้องการน้ำสักถ้วยไหมคะ"
      },
      {
        "q": "Choose the word that means \"the clear liquid people drink and use for washing\":",
        "options": [
          "Payment",
          "Hearing aid",
          "Local time",
          "Water"
        ],
        "correct": 3,
        "vocabularyId": "cruise-v-water",
        "word": "Water",
        "added": true,
        "id": "cruise-mc-036",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Water: The clear liquid people drink and use for washing. Example: Would you like some water?",
        "explainTh": "ต้องการน้ำไหมคะ"
      },
      {
        "q": "Choose the word that means \"a reaction of the body to a particular substance\":",
        "options": [
          "Allergy",
          "Lift",
          "Cash",
          "Laundry"
        ],
        "correct": 0,
        "vocabularyId": "cruise-v-allergy",
        "word": "Allergy",
        "added": true,
        "id": "cruise-mc-037",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Allergy: A reaction of the body to a particular substance. Example: Do you have an allergy we should know about?",
        "explainTh": "มีอาการแพ้ที่เราควรทราบไหมคะ"
      },
      {
        "q": "Choose the word that means \"one of the substances used to make a product\":",
        "options": [
          "Shift",
          "Ingredient",
          "Leak",
          "Menu"
        ],
        "correct": 1,
        "vocabularyId": "cruise-v-ingredient",
        "word": "Ingredient",
        "added": true,
        "id": "cruise-mc-038",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Ingredient: One of the substances used to make a product. Example: Let me check the ingredient list.",
        "explainTh": "ขอตรวจสอบรายการส่วนผสมค่ะ"
      },
      {
        "q": "Choose the word that means \"feeling relaxed and without discomfort\":",
        "options": [
          "Blocked",
          "Warm",
          "Comfortable",
          "Extra"
        ],
        "correct": 2,
        "vocabularyId": "cruise-v-comfortable",
        "word": "Comfortable",
        "added": true,
        "id": "cruise-mc-039",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Comfortable: Feeling relaxed and without discomfort. Example: Are you comfortable?",
        "explainTh": "คุณรู้สึกสบายดีไหมคะ"
      },
      {
        "q": "Choose the word that means \"not feeling physically comfortable\":",
        "options": [
          "Vegan",
          "Hot",
          "Warm",
          "Uncomfortable"
        ],
        "correct": 3,
        "vocabularyId": "cruise-v-uncomfortable",
        "word": "Uncomfortable",
        "added": true,
        "id": "cruise-mc-040",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Uncomfortable: Not feeling physically comfortable. Example: Please tell me if you feel uncomfortable.",
        "explainTh": "กรุณาบอกหากรู้สึกไม่สบายตัวค่ะ"
      },
      {
        "q": "Choose the word that means \"a little hot, but not very hot\":",
        "options": [
          "Warm",
          "Vegetarian",
          "Cold",
          "Uncomfortable"
        ],
        "correct": 0,
        "vocabularyId": "cruise-v-warm",
        "word": "Warm",
        "added": true,
        "id": "cruise-mc-041",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Warm: A little hot, but not very hot. Example: Is this towel warm enough?",
        "explainTh": "ผ้าขนหนูผืนนี้อุ่นพอไหมคะ"
      },
      {
        "q": "Choose the word that means \"a little cold rather than warm\":",
        "options": [
          "Unwell",
          "Cool",
          "Cold",
          "Spicy"
        ],
        "correct": 1,
        "vocabularyId": "cruise-v-cool",
        "word": "Cool",
        "added": true,
        "id": "cruise-mc-042",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Cool: A little cold rather than warm. Example: Would you prefer a cool towel?",
        "explainTh": "ต้องการผ้าขนหนูเย็นไหมคะ"
      },
      {
        "q": "Choose the word that means \"having a high temperature\":",
        "options": [
          "Warm",
          "Comfortable",
          "Hot",
          "Cool"
        ],
        "correct": 2,
        "vocabularyId": "cruise-v-hot",
        "word": "Hot",
        "added": true,
        "id": "cruise-mc-043",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Hot: Having a high temperature. Example: Please tell me if the towel feels too hot.",
        "explainTh": "กรุณาบอกหากผ้าขนหนูร้อนเกินไปค่ะ"
      },
      {
        "q": "Choose the word that means \"having a low temperature or feeling a lack of warmth\":",
        "options": [
          "Extra",
          "Spicy",
          "Missing",
          "Cold"
        ],
        "correct": 3,
        "vocabularyId": "cruise-v-cold",
        "word": "Cold",
        "added": true,
        "id": "cruise-mc-044",
        "level": 1,
        "topic": "vocabulary",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Cold: Having a low temperature or feeling a lack of warmth. Example: Are you feeling cold?",
        "explainTh": "คุณรู้สึกหนาวไหมคะ"
      },
      {
        "id": "cruise-mc-045",
        "q": "Complete the sentence: Please ___ your name on the form.",
        "options": [
          "write",
          "writes",
          "writing",
          "wrote"
        ],
        "correct": 0,
        "explain": "After “please”, use the base verb: write.",
        "explainTh": "หลัง please ใช้คำกริยารูปพื้นฐาน write",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-046",
        "q": "Complete the sentence: Could you ___ your surname, please?",
        "options": [
          "spells",
          "spell",
          "spelling",
          "spelled"
        ],
        "correct": 1,
        "explain": "A modal verb such as “could” is followed by the base verb.",
        "explainTh": "หลัง could ใช้คำกริยารูปพื้นฐาน",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-047",
        "q": "Complete the sentence: The reception desk ___ open now.",
        "options": [
          "are",
          "be",
          "is",
          "am"
        ],
        "correct": 2,
        "explain": "“The reception desk” is singular, so use “is”.",
        "explainTh": "ประธานเป็นเอกพจน์ จึงใช้ is",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-048",
        "q": "Complete the sentence: There ___ two clean towels on the shelf.",
        "options": [
          "is",
          "am",
          "be",
          "are"
        ],
        "correct": 3,
        "explain": "“Two towels” is plural, so use “there are”.",
        "explainTh": "two towels เป็นพหูพจน์ จึงใช้ there are",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-049",
        "q": "Complete the sentence: Your shore excursion is ___ Monday.",
        "options": [
          "on",
          "at",
          "in",
          "to"
        ],
        "correct": 0,
        "explain": "Use “on” with a day of the week.",
        "explainTh": "ใช้ on กับวันในสัปดาห์",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-050",
        "q": "Complete the sentence: The meeting starts ___ three o’clock.",
        "options": [
          "on",
          "at",
          "in",
          "by"
        ],
        "correct": 1,
        "explain": "Use “at” to state the exact starting time.",
        "explainTh": "ใช้ at เพื่อบอกเวลาเริ่มที่แน่นอน",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-051",
        "q": "Complete the sentence: This cabin is ___, not mine.",
        "options": [
          "your",
          "you",
          "yours",
          "yourself"
        ],
        "correct": 2,
        "explain": "“Yours” stands alone; “your” must come before a noun.",
        "explainTh": "yours ใช้เดี่ยวได้ ส่วน your ต้องมีคำนามตามหลัง",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-052",
        "q": "Complete the sentence: Is this ___ receipt?",
        "options": [
          "yours",
          "you",
          "yourself",
          "your"
        ],
        "correct": 3,
        "explain": "Use the possessive determiner “your” before “receipt”.",
        "explainTh": "ใช้ your หน้าคำนาม receipt",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-053",
        "q": "Complete the sentence: How ___ guests are in your group?",
        "options": [
          "many",
          "much",
          "any",
          "every"
        ],
        "correct": 0,
        "explain": "Use “how many” with plural countable nouns.",
        "explainTh": "ใช้ how many กับคำนามนับได้รูปพหูพจน์",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-054",
        "q": "Complete the sentence: How ___ water would you like?",
        "options": [
          "many",
          "much",
          "few",
          "several"
        ],
        "correct": 1,
        "explain": "Water is uncountable here, so use “how much”.",
        "explainTh": "water ในประโยคนี้นับไม่ได้ จึงใช้ how much",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-055",
        "q": "Complete the sentence: Would you like ___ extra towel?",
        "options": [
          "a",
          "many",
          "an",
          "these"
        ],
        "correct": 2,
        "explain": "“Extra” starts with a vowel sound, so use “an”.",
        "explainTh": "extra ขึ้นต้นด้วยเสียงสระ จึงใช้ an",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-056",
        "q": "Complete the sentence: Please wait ___ the reception desk.",
        "options": [
          "on",
          "into",
          "through",
          "at"
        ],
        "correct": 3,
        "explain": "“At the desk” names the service point where the guest should wait.",
        "explainTh": "at the reception desk หมายถึงจุดที่ให้รอ",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-057",
        "q": "Complete the sentence: We do not ___ this payment method.",
        "options": [
          "accept",
          "accepts",
          "accepting",
          "accepted"
        ],
        "correct": 0,
        "explain": "After “do not”, use the base verb “accept”.",
        "explainTh": "หลัง do not ใช้คำกริยารูปพื้นฐาน",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-058",
        "q": "Complete the sentence: ___ you need any help?",
        "options": [
          "Does",
          "Do",
          "Is",
          "Has"
        ],
        "correct": 1,
        "explain": "Use “do” for a present-simple question with “you”.",
        "explainTh": "คำถาม present simple ที่มี you ใช้ Do",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-059",
        "q": "Complete the sentence: She ___ the evening shift.",
        "options": [
          "work",
          "working",
          "works",
          "are work"
        ],
        "correct": 2,
        "explain": "With “she”, add -s to the present-simple verb.",
        "explainTh": "ประธาน she ใช้กริยา present simple เติม s",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-060",
        "q": "Complete the sentence: Please speak more ___; I did not hear the number.",
        "options": [
          "slow",
          "slowerly",
          "slowness",
          "slowly"
        ],
        "correct": 3,
        "explain": "“Slowly” is an adverb describing how to speak.",
        "explainTh": "slowly เป็นคำวิเศษณ์ขยายการพูด",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-061",
        "q": "Complete the sentence: Thank you for ___ us know.",
        "options": [
          "letting",
          "let",
          "lets",
          "to let"
        ],
        "correct": 0,
        "explain": "After “for”, use the -ing form in this expression.",
        "explainTh": "หลัง for ในสำนวนนี้ใช้ letting",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-062",
        "q": "Complete the sentence: I will ___ with my supervisor.",
        "options": [
          "checked",
          "check",
          "checking",
          "checks"
        ],
        "correct": 1,
        "explain": "After “will”, use the base verb “check”.",
        "explainTh": "หลัง will ใช้คำกริยารูปพื้นฐาน",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-063",
        "q": "Complete the sentence: The guest ___ two towels yesterday.",
        "options": [
          "request",
          "requests",
          "requested",
          "requesting"
        ],
        "correct": 2,
        "explain": "“Yesterday” places the completed action in the past.",
        "explainTh": "yesterday บอกอดีต จึงใช้ requested",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-064",
        "q": "Complete the sentence: We ___ your message ten minutes ago.",
        "options": [
          "receive",
          "receives",
          "receiving",
          "received"
        ],
        "correct": 3,
        "explain": "Use the past simple with “ago”.",
        "explainTh": "ใช้ past simple กับ ago",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-065",
        "q": "Complete the sentence: I am ___ the details now.",
        "options": [
          "checking",
          "check",
          "checked",
          "checks"
        ],
        "correct": 0,
        "explain": "“Am” plus an -ing form describes an action happening now.",
        "explainTh": "am ตามด้วยกริยาเติม ing เพื่อบอกสิ่งที่กำลังทำ",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-066",
        "q": "Complete the sentence: Could you tell me where the lounge ___?",
        "options": [
          "does",
          "is",
          "be",
          "are"
        ],
        "correct": 1,
        "explain": "An indirect question uses statement order: “where the lounge is”.",
        "explainTh": "คำถามทางอ้อมใช้ลำดับ where the lounge is",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-067",
        "q": "Complete the sentence: Would you mind ___ here for a moment?",
        "options": [
          "wait",
          "waits",
          "waiting",
          "to wait"
        ],
        "correct": 2,
        "explain": "“Would you mind” is followed by an -ing form.",
        "explainTh": "หลัง Would you mind ใช้กริยาเติม ing",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-068",
        "q": "Complete the sentence: The guest has already ___ the form.",
        "options": [
          "complete",
          "completes",
          "completing",
          "completed"
        ],
        "correct": 3,
        "explain": "“Has” plus the past participle forms the present perfect.",
        "explainTh": "has ตามด้วย past participle ใน present perfect",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-069",
        "q": "Complete the sentence: The waiting area is ___ than the corridor.",
        "options": [
          "quieter",
          "quietest",
          "quietly",
          "more quieter"
        ],
        "correct": 0,
        "explain": "“Than” introduces a comparison: use “quieter”.",
        "explainTh": "การเปรียบเทียบใช้ quieter than ไม่ใช้ more quieter",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-070",
        "q": "Complete the sentence: We have ___ clean towels, but not enough for the whole group.",
        "options": [
          "a little",
          "a few",
          "much",
          "any"
        ],
        "correct": 1,
        "explain": "“A few” means a small positive number of countable items.",
        "explainTh": "a few ใช้กับคำนามนับได้ หมายถึงมีอยู่เล็กน้อย",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-071",
        "q": "Complete the sentence: There is ___ water left in the bottle.",
        "options": [
          "a few",
          "many",
          "a little",
          "several"
        ],
        "correct": 2,
        "explain": "Use “a little” with uncountable water.",
        "explainTh": "ใช้ a little กับ water ซึ่งนับไม่ได้",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-072",
        "q": "Complete the sentence: The manager is not here, ___ I can take a message.",
        "options": [
          "because",
          "unless",
          "although",
          "but"
        ],
        "correct": 3,
        "explain": "“But” connects the limitation with a helpful alternative.",
        "explainTh": "but เชื่อมข้อจำกัดกับทางเลือกที่ช่วยได้",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-073",
        "q": "Complete the sentence: Please let me know ___ you need anything else.",
        "options": [
          "if",
          "until",
          "than",
          "despite"
        ],
        "correct": 0,
        "explain": "“If” introduces the condition: needing something else.",
        "explainTh": "if ใช้แสดงเงื่อนไขว่าต้องการสิ่งอื่นหรือไม่",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-074",
        "q": "Complete the sentence: The room is ___ cleaned at the moment.",
        "options": [
          "been",
          "being",
          "be",
          "was"
        ],
        "correct": 1,
        "explain": "“Is being cleaned” is a present continuous passive form.",
        "explainTh": "is being cleaned หมายถึงกำลังถูกทำความสะอาด",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-075",
        "q": "Complete the sentence: The schedule has ___ changed.",
        "options": [
          "being",
          "be",
          "been",
          "was"
        ],
        "correct": 2,
        "explain": "“Has been changed” is a present perfect passive form.",
        "explainTh": "has been changed เป็น present perfect passive",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-076",
        "q": "Complete the sentence: I am sorry ___ the delay.",
        "options": [
          "to",
          "at",
          "of",
          "about"
        ],
        "correct": 3,
        "explain": "“Sorry about” introduces the problem being apologised for.",
        "explainTh": "ใช้ sorry about เพื่อขอโทษเกี่ยวกับปัญหา",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-077",
        "q": "Complete the sentence: Please confirm whether the guest ___ received the message.",
        "options": [
          "has",
          "have",
          "is",
          "do"
        ],
        "correct": 0,
        "explain": "“The guest” is singular; “has received” describes completion.",
        "explainTh": "the guest เป็นเอกพจน์ จึงใช้ has received",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-078",
        "q": "Complete the sentence: We cannot confirm the refund ___ the manager reviews the request.",
        "options": [
          "during",
          "until",
          "since",
          "than"
        ],
        "correct": 1,
        "explain": "“Until” marks the point before which confirmation cannot happen.",
        "explainTh": "until บอกจุดเวลาที่ต้องรอก่อนยืนยัน",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-079",
        "q": "Complete the sentence: Neither of these keys ___ working.",
        "options": [
          "are being",
          "be",
          "is",
          "have"
        ],
        "correct": 2,
        "explain": "In this sentence, “neither” takes the singular verb “is”.",
        "explainTh": "ในประโยคนี้ neither ใช้กับกริยาเอกพจน์ is",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-080",
        "q": "Complete the sentence: The guest asked us ___ the details by email.",
        "options": [
          "sending",
          "sent",
          "sends",
          "to send"
        ],
        "correct": 3,
        "explain": "The pattern is “ask someone to do something”.",
        "explainTh": "โครงสร้างคือ ask someone to do something",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-081",
        "q": "Complete the sentence: Please check the amount before ___ the payment.",
        "options": [
          "taking",
          "take",
          "takes",
          "taken"
        ],
        "correct": 0,
        "explain": "Use an -ing form after the preposition “before”.",
        "explainTh": "หลัง before ที่เป็นบุพบทใช้กริยาเติม ing",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-082",
        "q": "Complete the sentence: The notice says the desk ___ close early tomorrow.",
        "options": [
          "did",
          "will",
          "has",
          "was"
        ],
        "correct": 1,
        "explain": "“Tomorrow” refers to the future; “will close” fits.",
        "explainTh": "tomorrow บอกอนาคต จึงใช้ will close",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-083",
        "q": "Complete the sentence: I have written ___ the guest’s request so the next shift can read it.",
        "options": [
          "up",
          "off",
          "down",
          "away"
        ],
        "correct": 2,
        "explain": "“Write down” means record in writing.",
        "explainTh": "write down หมายถึงจดบันทึก",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-084",
        "q": "Complete the sentence: Please make sure the details ___ correct.",
        "options": [
          "is",
          "be",
          "am",
          "are"
        ],
        "correct": 3,
        "explain": "“Details” is plural, so use “are”.",
        "explainTh": "details เป็นพหูพจน์ จึงใช้ are",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-085",
        "q": "Complete the sentence: The towels are ___ the cupboard, not on top of it.",
        "options": [
          "inside",
          "above",
          "behind",
          "beside"
        ],
        "correct": 0,
        "explain": "“Inside” means within the cupboard.",
        "explainTh": "inside หมายถึงอยู่ภายใน",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-086",
        "q": "Complete the sentence: Turn left ___ the lift.",
        "options": [
          "in",
          "at",
          "into",
          "from"
        ],
        "correct": 1,
        "explain": "Use “at” to name the point where someone turns.",
        "explainTh": "ใช้ at เพื่อบอกจุดที่ให้เลี้ยว",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-087",
        "q": "Complete the sentence: Your bags ___ outside your cabin.",
        "options": [
          "is",
          "be",
          "are",
          "am"
        ],
        "correct": 2,
        "explain": "“Bags” is plural, so use “are”.",
        "explainTh": "bags เป็นพหูพจน์ จึงใช้ are",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-088",
        "q": "Complete the sentence: Would you like tea ___ coffee?",
        "options": [
          "because",
          "although",
          "until",
          "or"
        ],
        "correct": 3,
        "explain": "“Or” offers a choice between two drinks.",
        "explainTh": "or ใช้ให้เลือกระหว่างสองอย่าง",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-089",
        "q": "Complete the sentence: There is ___ passenger at the desk.",
        "options": [
          "a",
          "an",
          "many",
          "these"
        ],
        "correct": 0,
        "explain": "A singular countable noun needs “a” here.",
        "explainTh": "passenger เป็นนามนับได้เอกพจน์ จึงใช้ a",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-090",
        "q": "Complete the sentence: Please ___ the handrail.",
        "options": [
          "holds",
          "hold",
          "holding",
          "held"
        ],
        "correct": 1,
        "explain": "After “please”, use the base verb “hold”.",
        "explainTh": "หลัง please ใช้กริยารูปพื้นฐาน hold",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-091",
        "q": "Complete the sentence: We ___ fresh towels every morning.",
        "options": [
          "delivers",
          "delivering",
          "deliver",
          "delivered"
        ],
        "correct": 2,
        "explain": "“Every morning” describes a routine; with “we”, use “deliver”.",
        "explainTh": "กิจวัตรที่มีประธาน we ใช้ deliver",
        "level": 1,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-092",
        "q": "Complete the sentence: The passenger ___ waiting for a blanket.",
        "options": [
          "are",
          "have",
          "do",
          "is"
        ],
        "correct": 3,
        "explain": "“The passenger” is singular; use “is waiting”.",
        "explainTh": "ผู้โดยสารหนึ่งคนใช้ is waiting",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-093",
        "q": "Complete the sentence: The kitchen has ___ your request.",
        "options": [
          "received",
          "receive",
          "receiving",
          "receives"
        ],
        "correct": 0,
        "explain": "After “has”, use the past participle “received”.",
        "explainTh": "หลัง has ใช้ received ซึ่งเป็น past participle",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-094",
        "q": "Complete the sentence: Could you show me ___ cabin number?",
        "options": [
          "yours",
          "your",
          "you",
          "yourself"
        ],
        "correct": 1,
        "explain": "“Your” comes before the noun phrase “cabin number”.",
        "explainTh": "ใช้ your หน้ากลุ่มคำนาม cabin number",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-095",
        "q": "Complete the sentence: We are sorry for ___ you waiting.",
        "options": [
          "keep",
          "keeps",
          "keeping",
          "kept"
        ],
        "correct": 2,
        "explain": "“For” is followed by the -ing form “keeping”.",
        "explainTh": "หลัง for ใช้กริยาเติม ing",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-096",
        "q": "Complete the sentence: The shore desk opens ___ nine each morning.",
        "options": [
          "on",
          "in",
          "into",
          "at"
        ],
        "correct": 3,
        "explain": "“At” introduces a clock time.",
        "explainTh": "ใช้ at กับเวลาตามนาฬิกา",
        "level": 2,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-097",
        "q": "Complete the sentence: The request was ___ to housekeeping.",
        "options": [
          "sent",
          "send",
          "sending",
          "sends"
        ],
        "correct": 0,
        "explain": "A passive verb uses “was” plus a past participle.",
        "explainTh": "รูป passive ใช้ was ตามด้วย past participle",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-098",
        "q": "Complete the sentence: Please check ___ the drink is included before ordering it.",
        "options": [
          "during",
          "whether",
          "unless",
          "despite"
        ],
        "correct": 1,
        "explain": "“Whether” introduces a yes-or-no point to check.",
        "explainTh": "whether ใช้กับประเด็นที่ต้องตรวจสอบว่าใช่หรือไม่",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-099",
        "q": "Complete the sentence: The guest would prefer ___ near the window.",
        "options": [
          "sit",
          "sat",
          "to sit",
          "sits"
        ],
        "correct": 2,
        "explain": "“Would prefer” can be followed by “to” plus the base verb.",
        "explainTh": "would prefer ตามด้วย to และกริยารูปพื้นฐาน",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      },
      {
        "id": "cruise-mc-100",
        "q": "Complete the sentence: The bill shows a charge that the guest does not ___.",
        "options": [
          "recognises",
          "recognising",
          "recognised",
          "recognise"
        ],
        "correct": 3,
        "explain": "After “does not”, use the base verb.",
        "explainTh": "หลัง does not ใช้คำกริยารูปพื้นฐาน",
        "level": 3,
        "topic": "grammar",
        "objective": "Choose the correct grammatical form in a workplace sentence.",
        "addedIn": "practice-expansion"
      }
    ],
    "tf": [
      {
        "statement": "A guest who has cruised before can assume the safety instructions are unchanged.",
        "answer": false,
        "why": "The guest should follow the current ship’s safety briefing and instructions.",
        "id": "cruise-tf-001",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "“Starboard” is the right-hand side of the ship when facing forward.",
        "answer": true,
        "why": "Correct — and port side is the left.",
        "id": "cruise-tf-002",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "Giving a verified deck number makes a direction clearer than saying only “upstairs”.",
        "answer": true,
        "why": "A verified deck number provides a specific destination. Offer a map or further help if needed.",
        "id": "cruise-tf-003",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "All aboard time follows ship’s time, not local time ashore.",
        "answer": true,
        "why": "Correct — this is exactly how guests miss the ship.",
        "id": "cruise-tf-004",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "A tender boat is used when the ship cannot dock at a port.",
        "answer": true,
        "why": "Correct — it carries guests between ship and shore.",
        "id": "cruise-tf-005",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "You should tell a guest about an extra charge after serving the drink.",
        "answer": false,
        "why": "Always explain the charge before serving, and let them choose.",
        "id": "cruise-tf-006",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "Guests should follow the current ship’s directions about routes and assistance during a drill.",
        "answer": true,
        "why": "Use the ship’s actual arrangements; do not invent a universal route or assistance procedure.",
        "id": "cruise-tf-007",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "Crew may ignore a safety-door instruction when a corridor is busy.",
        "answer": false,
        "why": "Follow the posted and ship-specific safety instructions, even when the area is busy.",
        "id": "cruise-tf-008",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "Turndown service happens in the evening.",
        "answer": true,
        "why": "Correct — the bed is prepared and the cabin tidied for the night.",
        "id": "cruise-tf-009",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "“Embarkation” means leaving the ship at the end of a cruise.",
        "answer": false,
        "why": "That is disembarkation. Embarkation is boarding.",
        "id": "cruise-tf-010",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "You should confirm your assigned muster station using this ship’s safety information.",
        "answer": true,
        "why": "Do not assume the location is always printed on a particular card.",
        "id": "cruise-tf-011",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "It is professional to tell a guest which colleague caused a problem.",
        "answer": false,
        "why": "Apologise and fix it. Guests experience one ship, not separate shifts.",
        "id": "cruise-tf-012",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "The general emergency alarm is seven or more short blasts followed by one long blast.",
        "answer": true,
        "why": "Follow the crew’s instructions and the ship’s procedures when the alarm sounds.",
        "id": "cruise-tf-013",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "A dietary requirement only means vegetarian food.",
        "answer": false,
        "why": "It covers any food a guest must avoid, for health or belief.",
        "id": "cruise-tf-014",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "Crew should refer questions about medication for seasickness to the medical team.",
        "answer": true,
        "why": "Do not prescribe or promise that a drink or medicine will solve the problem.",
        "id": "cruise-tf-015",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "Guests need their cruise card to get back on board.",
        "answer": true,
        "why": "Correct — remind them before they go ashore.",
        "id": "cruise-tf-016",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "“Port of call” and “port side” mean the same thing.",
        "answer": false,
        "why": "A port of call is a stop; port side is the left of the ship.",
        "id": "cruise-tf-017",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "statement": "If you cannot answer a guest’s question, it is best to say only “I don’t know”.",
        "answer": false,
        "why": "Offer to find out and give them a time you will return.",
        "id": "cruise-tf-018",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-019",
        "statement": "“Available” means that something can be used or booked.",
        "answer": true,
        "why": "It describes something that is free for use, not already taken.",
        "explainTh": "available หมายถึงพร้อมใช้หรือว่างให้จอง",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-020",
        "statement": "“Earlier” means after the time originally mentioned.",
        "answer": false,
        "why": "Earlier means before that time; later means after it.",
        "explainTh": "earlier หมายถึงก่อนเวลาเดิม ส่วน later คือหลังเวลาเดิม",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-021",
        "statement": "“Could you repeat that?” asks someone to say something again.",
        "answer": true,
        "why": "Repeat means say or do something again.",
        "explainTh": "repeat หมายถึงพูดหรือทำซ้ำ",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-022",
        "statement": "“Two extra towels” means two fewer towels.",
        "answer": false,
        "why": "Extra means additional, not fewer.",
        "explainTh": "extra หมายถึงเพิ่มเติม ไม่ใช่น้อยลง",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-023",
        "statement": "“Your receipt” uses “your” correctly before a noun.",
        "answer": true,
        "why": "“Your” comes before a noun; “yours” can stand alone.",
        "explainTh": "your ใช้หน้าคำนาม ส่วน yours ใช้เดี่ยวได้",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-024",
        "statement": "“How many water?” is the usual form for asking about an amount of water.",
        "answer": false,
        "why": "Use “how much water” because water is uncountable here.",
        "explainTh": "water นับไม่ได้ จึงใช้ how much water",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-025",
        "statement": "“I will check” promises to check, not that the request is already approved.",
        "answer": true,
        "why": "The next action is checking; approval has not been stated.",
        "explainTh": "ประโยคนี้รับปากว่าจะตรวจสอบ แต่ยังไม่ได้อนุมัติ",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-026",
        "statement": "A guest who says “No, thank you” has accepted the offer.",
        "answer": false,
        "why": "The phrase politely declines an offer.",
        "explainTh": "No, thank you เป็นการปฏิเสธอย่างสุภาพ",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-027",
        "statement": "“Please wait a moment” asks someone to wait briefly.",
        "answer": true,
        "why": "A moment suggests a short wait, not an exact number of minutes.",
        "explainTh": "a moment หมายถึงช่วงสั้น ๆ ไม่ได้ระบุนาทีแน่นอน",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-028",
        "statement": "“Included” and “extra charge” always mean the same thing.",
        "answer": false,
        "why": "Included is part of the stated price; an extra charge adds a cost.",
        "explainTh": "included คือรวมในราคาแล้ว ส่วน extra charge คือค่าใช้จ่ายเพิ่ม",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-029",
        "statement": "A polite sentence can still be unhelpful when it does not answer the guest’s actual request.",
        "answer": true,
        "why": "Politeness and relevance both matter in a useful response.",
        "explainTh": "คำตอบควรสุภาพและตรงกับสิ่งที่ผู้ใช้บริการถาม",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-030",
        "statement": "When a time is unconfirmed, staff should present it as a definite promise.",
        "answer": false,
        "why": "Say that you need to check before confirming the time.",
        "explainTh": "ควรตรวจสอบเวลาก่อนยืนยัน ไม่รับปากโดยยังไม่ทราบ",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-031",
        "statement": "“Let me check I understood” introduces a confirmation of details.",
        "answer": true,
        "why": "Repeating key details lets the guest correct a misunderstanding.",
        "explainTh": "ทวนรายละเอียดเพื่อให้ผู้ใช้บริการแก้ความเข้าใจผิดได้",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-032",
        "statement": "“Could you spell that?” asks for a translation into Thai.",
        "answer": false,
        "why": "It asks for the letters in a name or word.",
        "explainTh": "เป็นการขอให้สะกดตัวอักษร ไม่ใช่แปลภาษา",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-033",
        "statement": "A question beginning “Would you like…?” usually offers a choice.",
        "answer": true,
        "why": "It invites the guest to accept or decline an offer.",
        "explainTh": "ใช้เสนอทางเลือกให้รับหรือปฏิเสธ",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-034",
        "statement": "“I have already sent it” means the message has not been sent yet.",
        "answer": false,
        "why": "Already indicates completion before now.",
        "explainTh": "already แสดงว่าส่งเรียบร้อยแล้ว",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-035",
        "statement": "“Please confirm” asks the other person to check or state that something is correct.",
        "answer": true,
        "why": "Confirm means make a detail certain or agreed.",
        "explainTh": "confirm หมายถึงยืนยันว่ารายละเอียดถูกต้องหรือตกลงแล้ว",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-036",
        "statement": "“Not yet” means the same as “never”.",
        "answer": false,
        "why": "Not yet means it has not happened up to now; it may happen later.",
        "explainTh": "not yet คือยังไม่เกิดขึ้น แต่อาจเกิดในภายหลัง",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-037",
        "statement": "“By five o’clock” can express a deadline.",
        "answer": true,
        "why": "It means no later than five o’clock in a deadline statement.",
        "explainTh": "by five o’clock ใช้บอกกำหนดไม่เกินห้าโมง",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-038",
        "statement": "“At five o’clock” and “for five hours” both describe a duration.",
        "answer": false,
        "why": "At five o’clock gives a time; for five hours gives a duration.",
        "explainTh": "at บอกเวลา ส่วน for five hours บอกระยะเวลา",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-039",
        "statement": "If a guest declines assistance, staff can acknowledge the choice politely.",
        "answer": true,
        "why": "Respect the choice and explain how to ask for help later.",
        "explainTh": "เคารพการตัดสินใจและบอกช่องทางขอความช่วยเหลือภายหลัง",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-040",
        "statement": "A service handover is complete when it says only “someone needs something”.",
        "answer": false,
        "why": "Record the relevant request, status and next action clearly.",
        "explainTh": "ควรบันทึกคำขอ สถานะ และสิ่งที่ต้องทำต่อให้ชัดเจน",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-041",
        "statement": "“Please check with your supervisor” identifies who to ask next.",
        "answer": true,
        "why": "It names the next contact instead of ending the conversation.",
        "explainTh": "ระบุผู้ที่จะติดต่อถัดไปอย่างชัดเจน",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-042",
        "statement": "“I am checking” always means the check was completed yesterday.",
        "answer": false,
        "why": "The present continuous describes checking in progress.",
        "explainTh": "I am checking หมายถึงกำลังตรวจสอบอยู่",
        "level": 2,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-043",
        "statement": "“May be delayed” states a possibility rather than a certainty.",
        "answer": true,
        "why": "May expresses possibility; it does not guarantee a delay.",
        "explainTh": "may แสดงความเป็นไปได้ ไม่ได้ยืนยันว่าจะล่าช้าแน่นอน",
        "level": 3,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-044",
        "statement": "“I can request a refund” guarantees that a refund has been approved.",
        "answer": false,
        "why": "Requesting approval is different from receiving approval.",
        "explainTh": "การขออนุมัติต่างจากการได้รับอนุมัติแล้ว",
        "level": 3,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-045",
        "statement": "“Could you tell me where the desk is?” uses correct indirect-question word order.",
        "answer": true,
        "why": "After “where”, use statement order: the desk is.",
        "explainTh": "คำถามทางอ้อมใช้ where the desk is",
        "level": 3,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-046",
        "statement": "“Would you mind wait here?” has the correct verb form.",
        "answer": false,
        "why": "Use “Would you mind waiting here?” with an -ing form.",
        "explainTh": "หลัง Would you mind ใช้ waiting",
        "level": 3,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-047",
        "statement": "A useful follow-up confirms whether the guest still needs help.",
        "answer": true,
        "why": "The original action may not have fully resolved the request.",
        "explainTh": "การติดตามช่วยตรวจว่าคำขอได้รับการแก้ไขแล้วหรือยัง",
        "level": 3,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-048",
        "statement": "The word “approximately” guarantees an exact time or amount.",
        "answer": false,
        "why": "Approximately means about, so the figure is an estimate.",
        "explainTh": "approximately หมายถึงประมาณ ไม่ใช่ตัวเลขที่แน่นอน",
        "level": 3,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-049",
        "statement": "“Next to the desk” describes a place beside the desk.",
        "answer": true,
        "why": "Next to means immediately beside something.",
        "explainTh": "next to หมายถึงอยู่ถัดจากหรือข้าง ๆ",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-tf-050",
        "statement": "“Before lunch” means after lunch has finished.",
        "answer": false,
        "why": "Before means earlier than; after means later than.",
        "explainTh": "before คือก่อน ส่วน after คือหลัง",
        "level": 1,
        "topic": "communication",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      }
    ],
    "error": [
      {
        "wrong": "It’s upstairs.",
        "options": [
          "It’s on deck nine, just above us — shall I show you the deck plan?",
          "Somewhere up there.",
          "Go up and look."
        ],
        "correct": 0,
        "why": "On a ship you must give the deck number and a direction.",
        "id": "cruise-error-001",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "You have to go to the drill, it’s the rule.",
        "options": [
          "You can skip it because you have cruised before.",
          "Please follow this ship’s safety briefing instructions. Let me check the arrangements for you.",
          "Every ship uses exactly the same drill."
        ],
        "correct": 1,
        "why": "Explain the verified arrangements without inventing a duration or a legal exception.",
        "id": "cruise-error-002",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "You’re late. The ship almost left.",
        "options": [
          "You should have been earlier.",
          "Next time we leave without you.",
          "I’m glad you made it back safely — do check tomorrow’s all aboard time."
        ],
        "correct": 2,
        "why": "Relief plus a forward-looking reminder, not blame.",
        "id": "cruise-error-003",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "You can’t go there.",
        "options": [
          "That area is crew only, but I’d be glad to take your request there myself.",
          "It’s not allowed.",
          "Guests are forbidden."
        ],
        "correct": 0,
        "why": "Refuse the access without refusing the person.",
        "id": "cruise-error-004",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "That’s not included. It costs extra.",
        "options": [
          "You must pay more.",
          "That one falls just outside your package — there’s a small extra charge. Would you still like it?",
          "Not in your package."
        ],
        "correct": 1,
        "why": "Tell the guest before you pour, and let them choose.",
        "id": "cruise-error-005",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "Everyone gets seasick, it’s normal.",
        "options": [
          "It happens to everybody.",
          "You’ll get used to it.",
          "I’m sorry you feel unwell. I will contact the medical team."
        ],
        "correct": 2,
        "why": "Acknowledge the guest’s concern and contact the medical team; do not diagnose or give unapproved treatment advice.",
        "id": "cruise-error-006",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "Your cabin is not ready. Wait.",
        "options": [
          "Let me confirm when your stateroom will be ready and where you can wait.",
          "It will be ready in five minutes, although I have not checked.",
          "You can wait anywhere on the ship."
        ],
        "correct": 0,
        "why": "Confirm the time and a suitable waiting area instead of promising unverified details.",
        "id": "cruise-error-007",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "There’s nothing I can do about it.",
        "options": [
          "That’s not my department.",
          "I’m sorry — let me take your cabin number and speak with my supervisor.",
          "You’ll have to accept it."
        ],
        "correct": 1,
        "why": "Never close the conversation. Offer the next step.",
        "id": "cruise-error-008",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "I don’t know.",
        "options": [
          "You should ask someone else yourself.",
          "There is no way to find out.",
          "Let me check with the team and confirm when I can update you."
        ],
        "correct": 2,
        "why": "Offer a clear next step without promising a time you have not confirmed.",
        "id": "cruise-error-009",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "Don’t leave that open.",
        "options": [
          "May I close this for you? It’s a fire door, so it needs to stay shut.",
          "Close the door.",
          "That must be shut."
        ],
        "correct": 0,
        "why": "Do it yourself and give the reason.",
        "id": "cruise-error-010",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "No photos here.",
        "options": [
          "Photography is banned.",
          "I’m afraid we can’t take photographs in this area — but the promenade deck has a wonderful view.",
          "Put your camera away."
        ],
        "correct": 1,
        "why": "Pair the refusal with a better alternative.",
        "id": "cruise-error-011",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "wrong": "That wasn’t me, it was the night steward.",
        "options": [
          "You should speak to him.",
          "It wasn’t my shift.",
          "I’m sorry that happened — let me put it right for you now."
        ],
        "correct": 2,
        "why": "Guests experience one ship. Deflecting blame breaks their trust.",
        "id": "cruise-error-012",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-013",
        "wrong": "She work at reception.",
        "options": [
          "She works at reception.",
          "She working at reception.",
          "She are work at reception."
        ],
        "correct": 0,
        "why": "Use “works” with the singular subject “she”.",
        "explainTh": "ประธาน she ใช้ works",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-014",
        "wrong": "There is two guests waiting.",
        "options": [
          "There be two guests waiting.",
          "There are two guests waiting.",
          "There am two guests waiting."
        ],
        "correct": 1,
        "why": "Use “are” with the plural noun “guests”.",
        "explainTh": "guests เป็นพหูพจน์ ใช้ are",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-015",
        "wrong": "Could you spells your name?",
        "options": [
          "Could you spelling your name?",
          "Could you spelled your name?",
          "Could you spell your name?"
        ],
        "correct": 2,
        "why": "A modal verb is followed by the base form.",
        "explainTh": "หลัง could ใช้กริยารูปพื้นฐาน",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-016",
        "wrong": "Please writes your room number.",
        "options": [
          "Please write your room number.",
          "Please writing your room number.",
          "Please wrote your room number."
        ],
        "correct": 0,
        "why": "Use the base verb in a request beginning with “please”.",
        "explainTh": "หลัง please ใช้ write",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-017",
        "wrong": "Is this yours bag?",
        "options": [
          "Is this you bag?",
          "Is this your bag?",
          "Is this yourself bag?"
        ],
        "correct": 1,
        "why": "Use “your” before a noun.",
        "explainTh": "ใช้ your หน้าคำนาม bag",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-018",
        "wrong": "This key is your.",
        "options": [
          "This key is you.",
          "This key is yourself.",
          "This key is yours."
        ],
        "correct": 2,
        "why": "Use “yours” when the possessive stands alone.",
        "explainTh": "ใช้ yours เมื่อไม่มีคำนามตามหลัง",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-019",
        "wrong": "How many money is the deposit?",
        "options": [
          "How much money is the deposit?",
          "How few money is the deposit?",
          "How several money is the deposit?"
        ],
        "correct": 0,
        "why": "Money is uncountable: use “how much”.",
        "explainTh": "money นับไม่ได้ ใช้ how much",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-020",
        "wrong": "How much towels do you need?",
        "options": [
          "How little towels do you need?",
          "How many towels do you need?",
          "How every towels do you need?"
        ],
        "correct": 1,
        "why": "Towels are countable: use “how many”.",
        "explainTh": "towels นับได้ ใช้ how many",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-021",
        "wrong": "We opens at nine.",
        "options": [
          "We opening at nine.",
          "We is open at nine.",
          "We open at nine."
        ],
        "correct": 2,
        "why": "Use “open” with the subject “we”.",
        "explainTh": "ประธาน we ใช้ open",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-022",
        "wrong": "He are the duty manager.",
        "options": [
          "He is the duty manager.",
          "He am the duty manager.",
          "He be the duty manager."
        ],
        "correct": 0,
        "why": "Use “is” with “he”.",
        "explainTh": "ประธาน he ใช้ is",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-023",
        "wrong": "Please speak slow.",
        "options": [
          "Please speak slowness.",
          "Please speak slowly.",
          "Please speak slowerly."
        ],
        "correct": 1,
        "why": "Use the adverb “slowly” to describe speaking.",
        "explainTh": "ใช้ slowly ขยาย speak",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-024",
        "wrong": "Would you like a extra blanket?",
        "options": [
          "Would you like these extra blanket?",
          "Would you like many extra blanket?",
          "Would you like an extra blanket?"
        ],
        "correct": 2,
        "why": "Use “an” before the vowel sound in “extra”.",
        "explainTh": "extra ขึ้นต้นด้วยเสียงสระ ใช้ an",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-025",
        "wrong": "The excursion is at Friday.",
        "options": [
          "The excursion is on Friday.",
          "The excursion is into Friday.",
          "The excursion is in Friday."
        ],
        "correct": 0,
        "why": "Use “on” with a day of the week.",
        "explainTh": "ใช้ on กับวันในสัปดาห์",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-026",
        "wrong": "The desk opens in eight o’clock.",
        "options": [
          "The desk opens on eight o’clock.",
          "The desk opens at eight o’clock.",
          "The desk opens into eight o’clock."
        ],
        "correct": 1,
        "why": "Use “at” with an exact opening time.",
        "explainTh": "ใช้ at กับเวลาเปิดที่แน่นอน",
        "level": 1,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-027",
        "wrong": "Thank you for wait.",
        "options": [
          "Thank you for waits.",
          "Thank you for waited.",
          "Thank you for waiting."
        ],
        "correct": 2,
        "why": "Use an -ing form after “for”.",
        "explainTh": "หลัง for ใช้ waiting",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-028",
        "wrong": "I will checking that for you.",
        "options": [
          "I will check that for you.",
          "I will checks that for you.",
          "I will checked that for you."
        ],
        "correct": 0,
        "why": "“Will” takes the base form “check”.",
        "explainTh": "หลัง will ใช้ check",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-029",
        "wrong": "I am check the booking.",
        "options": [
          "I am checks the booking.",
          "I am checking the booking.",
          "I am checked the booking."
        ],
        "correct": 1,
        "why": "Use “am” plus an -ing verb for an action in progress.",
        "explainTh": "ใช้ am checking เพื่อบอกว่ากำลังตรวจสอบ",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-030",
        "wrong": "The guest arrive yesterday.",
        "options": [
          "The guest arrives yesterday.",
          "The guest arriving yesterday.",
          "The guest arrived yesterday."
        ],
        "correct": 2,
        "why": "Use the past simple with “yesterday”.",
        "explainTh": "yesterday บอกอดีต ใช้ arrived",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-031",
        "wrong": "We has received the message.",
        "options": [
          "We have received the message.",
          "We is received the message.",
          "We do received the message."
        ],
        "correct": 0,
        "why": "Use “have” with “we”.",
        "explainTh": "ประธาน we ใช้ have received",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-032",
        "wrong": "She have already paid.",
        "options": [
          "She is already paid.",
          "She has already paid.",
          "She do already paid."
        ],
        "correct": 1,
        "why": "Use “has” with “she” in the present perfect.",
        "explainTh": "ประธาน she ใช้ has already paid",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-033",
        "wrong": "Could you tell me where is reception?",
        "options": [
          "Could you tell me where reception be?",
          "Could you tell me where does reception is?",
          "Could you tell me where reception is?"
        ],
        "correct": 2,
        "why": "Indirect questions use statement word order.",
        "explainTh": "คำถามทางอ้อมใช้ where reception is",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-034",
        "wrong": "Would you mind to wait?",
        "options": [
          "Would you mind waiting?",
          "Would you mind waits?",
          "Would you mind waited?"
        ],
        "correct": 0,
        "why": "Use an -ing form after “would you mind”.",
        "explainTh": "หลัง would you mind ใช้ waiting",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-035",
        "wrong": "This room is more quieter.",
        "options": [
          "This room is quietest than.",
          "This room is quieter.",
          "This room is quietlier."
        ],
        "correct": 1,
        "why": "Do not use “more” together with the -er comparative.",
        "explainTh": "ไม่ใช้ more ซ้อนกับ quieter",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-036",
        "wrong": "There are a little towels left.",
        "options": [
          "There are much towels left.",
          "There are a water towels left.",
          "There are a few towels left."
        ],
        "correct": 2,
        "why": "Use “a few” with plural countable towels.",
        "explainTh": "ใช้ a few กับ towels ซึ่งนับได้",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-037",
        "wrong": "There is a few water left.",
        "options": [
          "There is a little water left.",
          "There is many water left.",
          "There is several water left."
        ],
        "correct": 0,
        "why": "Use “a little” with uncountable water.",
        "explainTh": "ใช้ a little กับ water ซึ่งนับไม่ได้",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-038",
        "wrong": "Please let me to check.",
        "options": [
          "Please let me checking.",
          "Please let me check.",
          "Please let me checked."
        ],
        "correct": 1,
        "why": "The pattern is “let someone do”, without “to”.",
        "explainTh": "โครงสร้าง let me check ไม่เติม to",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-039",
        "wrong": "I suggest to check the details.",
        "options": [
          "I suggest checks the details.",
          "I suggest checked the details.",
          "I suggest checking the details."
        ],
        "correct": 2,
        "why": "In this pattern, “suggest” takes an -ing form.",
        "explainTh": "ในโครงสร้างนี้ suggest ตามด้วย checking",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-040",
        "wrong": "Please remember bring your receipt.",
        "options": [
          "Please remember to bring your receipt.",
          "Please remember brings your receipt.",
          "Please remember brought your receipt."
        ],
        "correct": 0,
        "why": "Use “remember to” for an action still to be done.",
        "explainTh": "remember to ใช้เตือนให้ทำสิ่งที่ยังไม่ได้ทำ",
        "level": 2,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-041",
        "wrong": "The request has being approved.",
        "options": [
          "The request has be approved.",
          "The request has been approved.",
          "The request has was approved."
        ],
        "correct": 1,
        "why": "The present perfect passive is “has been approved”.",
        "explainTh": "present perfect passive ใช้ has been approved",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-042",
        "wrong": "The form was fill in yesterday.",
        "options": [
          "The form was fills in yesterday.",
          "The form was filling in yesterday.",
          "The form was filled in yesterday."
        ],
        "correct": 2,
        "why": "Use a past participle after “was” in a passive sentence.",
        "explainTh": "ประโยค passive ใช้ was filled in",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-043",
        "wrong": "The guest asked me sending an email.",
        "options": [
          "The guest asked me to send an email.",
          "The guest asked me sends an email.",
          "The guest asked me sent an email."
        ],
        "correct": 0,
        "why": "The pattern is “ask someone to do something”.",
        "explainTh": "ใช้ ask someone to do something",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-044",
        "wrong": "Please check before take payment.",
        "options": [
          "Please check before takes payment.",
          "Please check before taking payment.",
          "Please check before taken payment."
        ],
        "correct": 1,
        "why": "Use an -ing form after “before” in this pattern.",
        "explainTh": "โครงสร้างนี้ใช้ before taking",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-045",
        "wrong": "I look forward to see you again.",
        "options": [
          "I look forward to saw you again.",
          "I look forward to sees you again.",
          "I look forward to seeing you again."
        ],
        "correct": 2,
        "why": "“Look forward to” is followed by an -ing form.",
        "explainTh": "หลัง look forward to ใช้ seeing",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-046",
        "wrong": "We apologise for keep you waiting.",
        "options": [
          "We apologise for keeping you waiting.",
          "We apologise for keeps you waiting.",
          "We apologise for kept you waiting."
        ],
        "correct": 0,
        "why": "Use “keeping” after “for”.",
        "explainTh": "หลัง for ใช้ keeping",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-047",
        "wrong": "The price includes to use the lounge.",
        "options": [
          "The price includes uses the lounge.",
          "The price includes using the lounge.",
          "The price includes used the lounge."
        ],
        "correct": 1,
        "why": "In this sentence, “includes” takes an -ing phrase.",
        "explainTh": "ประโยคนี้ includes ตามด้วย using",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-048",
        "wrong": "The guest prefers sit by the window.",
        "options": [
          "The guest prefers sits by the window.",
          "The guest prefers sat by the window.",
          "The guest prefers to sit by the window."
        ],
        "correct": 2,
        "why": "“Prefers to sit” is a correct verb pattern.",
        "explainTh": "ใช้ prefers to sit ในโครงสร้างนี้",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-049",
        "wrong": "The notice was wrote this morning.",
        "options": [
          "The notice was written this morning.",
          "The notice was write this morning.",
          "The notice was writes this morning."
        ],
        "correct": 0,
        "why": "“Written” is the past participle used after “was”.",
        "explainTh": "written เป็น past participle ของ write",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-error-050",
        "wrong": "We need confirming the request.",
        "options": [
          "We need confirms the request.",
          "We need to confirm the request.",
          "We need confirmed the request."
        ],
        "correct": 1,
        "why": "The pattern is “need to” plus the base verb.",
        "explainTh": "ใช้ need to ตามด้วยกริยารูปพื้นฐาน",
        "level": 3,
        "topic": "grammar",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      }
    ],
    "listen": [
      {
        "target": "Embarkation",
        "distractors": [
          "Disembarkation",
          "Accessibility",
          "Itinerary"
        ],
        "id": "cruise-listen-001",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Boarding the ship",
        "explainTh": "การขึ้นเรือ"
      },
      {
        "target": "Disembarkation",
        "distractors": [
          "Embarkation",
          "Gratuity",
          "Amenities"
        ],
        "id": "cruise-listen-002",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Leaving the ship",
        "explainTh": "การลงจากเรือ"
      },
      {
        "target": "Muster station",
        "distractors": [
          "Medical centre",
          "Meeting point",
          "Crew mess"
        ],
        "id": "cruise-listen-003",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Emergency assembly point",
        "explainTh": "จุดรวมพลฉุกเฉิน"
      },
      {
        "target": "Starboard",
        "distractors": [
          "Port side",
          "Stern",
          "Bow"
        ],
        "id": "cruise-listen-004",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Right side of the ship",
        "explainTh": "กราบขวาของเรือ"
      },
      {
        "target": "Gangway",
        "distractors": [
          "Galley",
          "Atrium",
          "Gratuity"
        ],
        "id": "cruise-listen-005",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Walkway on and off the ship",
        "explainTh": "สะพานขึ้นลงเรือ"
      },
      {
        "target": "Gratuity",
        "distractors": [
          "Folio",
          "Upgrade",
          "Itinerary"
        ],
        "id": "cruise-listen-006",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Service tip",
        "explainTh": "ค่าทิปบริการ"
      },
      {
        "target": "Tender boat",
        "distractors": [
          "Lifeboat",
          "Life jacket",
          "Deck plan"
        ],
        "id": "cruise-listen-007",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Small boat to shore",
        "explainTh": "เรือเล็กรับส่งขึ้นฝั่ง"
      },
      {
        "target": "Itinerary",
        "distractors": [
          "Amenities",
          "Accessibility",
          "Curfew"
        ],
        "id": "cruise-listen-008",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Planned route and schedule",
        "explainTh": "กำหนดการเดินเรือ"
      },
      {
        "target": "Amenities",
        "distractors": [
          "Accessibility",
          "Gratuity",
          "Minibar"
        ],
        "id": "cruise-listen-009",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Cabin toiletries and extras",
        "explainTh": "ของใช้ในห้องพัก"
      },
      {
        "target": "Stateroom",
        "distractors": [
          "Interior cabin",
          "Balcony cabin",
          "Crew mess"
        ],
        "id": "cruise-listen-010",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A passenger cabin",
        "explainTh": "ห้องพักผู้โดยสาร"
      },
      {
        "target": "Buffet",
        "distractors": [
          "Galley",
          "Wine list",
          "Last call"
        ],
        "id": "cruise-listen-011",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Self-service meal",
        "explainTh": "บุฟเฟ่ต์"
      },
      {
        "target": "Seasickness",
        "distractors": [
          "Special assistance",
          "Mobility assistance",
          "Quiet zone"
        ],
        "id": "cruise-listen-012",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Nausea from ship movement",
        "explainTh": "อาการเมาเรือ"
      },
      {
        "target": "Turndown service",
        "distractors": [
          "Linen change",
          "Housekeeping trolley",
          "Do not disturb sign"
        ],
        "id": "cruise-listen-013",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Evening bed preparation",
        "explainTh": "บริการจัดเตียงตอนเย็น"
      },
      {
        "target": "Port of call",
        "distractors": [
          "Port side",
          "Sea day",
          "Shore leave"
        ],
        "id": "cruise-listen-014",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A stop where guests go ashore",
        "explainTh": "ท่าเรือที่แวะจอด"
      },
      {
        "target": "Accessibility",
        "distractors": [
          "Amenities",
          "Priority boarding",
          "Special assistance"
        ],
        "id": "cruise-listen-015",
        "level": 3,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Ease of use for disabled guests",
        "explainTh": "การเข้าถึงสำหรับทุกคน"
      },
      {
        "target": "Cruise card",
        "distractors": [
          "Cabin key card",
          "Boarding pass",
          "Allergy card"
        ],
        "id": "cruise-listen-016",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Onboard ID, key and payment",
        "explainTh": "บัตรประจำตัวผู้โดยสาร"
      },
      {
        "target": "Towel",
        "distractors": [
          "Cup",
          "Water",
          "Allergy"
        ],
        "vocabularyId": "cruise-v-towel",
        "added": true,
        "id": "cruise-listen-017",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A piece of cloth used for drying or covering.",
        "explainTh": "ผ้าขนหนู"
      },
      {
        "target": "Blanket",
        "distractors": [
          "Cup",
          "Water",
          "Allergy"
        ],
        "vocabularyId": "cruise-v-blanket",
        "added": true,
        "id": "cruise-listen-018",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A cover used to keep someone warm.",
        "explainTh": "ผ้าห่ม"
      },
      {
        "target": "Pillow",
        "distractors": [
          "Cup",
          "Water",
          "Allergy"
        ],
        "vocabularyId": "cruise-v-pillow",
        "added": true,
        "id": "cruise-listen-019",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A soft support for the head or body.",
        "explainTh": "หมอน"
      },
      {
        "target": "Cushion",
        "distractors": [
          "Cup",
          "Water",
          "Allergy"
        ],
        "vocabularyId": "cruise-v-cushion",
        "added": true,
        "id": "cruise-listen-020",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A soft pad used for support or comfort.",
        "explainTh": "หมอนอิง / เบาะรอง"
      },
      {
        "target": "Sheet",
        "distractors": [
          "Cup",
          "Water",
          "Allergy"
        ],
        "vocabularyId": "cruise-v-sheet",
        "added": true,
        "id": "cruise-listen-021",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A large piece of cloth covering a bed or table.",
        "explainTh": "ผ้าปู"
      },
      {
        "target": "Tissue",
        "distractors": [
          "Cup",
          "Water",
          "Allergy"
        ],
        "vocabularyId": "cruise-v-tissue",
        "added": true,
        "id": "cruise-listen-022",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Soft paper used for wiping the face or hands.",
        "explainTh": "กระดาษเช็ดหน้า"
      },
      {
        "target": "Soap",
        "distractors": [
          "Cup",
          "Water",
          "Allergy"
        ],
        "vocabularyId": "cruise-v-soap",
        "added": true,
        "id": "cruise-listen-023",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A product used with water for washing.",
        "explainTh": "สบู่"
      },
      {
        "target": "Shampoo",
        "distractors": [
          "Cup",
          "Water",
          "Allergy"
        ],
        "vocabularyId": "cruise-v-shampoo",
        "added": true,
        "id": "cruise-listen-024",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A product used for washing hair.",
        "explainTh": "แชมพู"
      },
      {
        "target": "Basket",
        "distractors": [
          "Cup",
          "Water",
          "Allergy"
        ],
        "vocabularyId": "cruise-v-basket",
        "added": true,
        "id": "cruise-listen-025",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A container used for holding small items.",
        "explainTh": "ตะกร้า"
      },
      {
        "target": "Mirror",
        "distractors": [
          "Cup",
          "Water",
          "Allergy"
        ],
        "vocabularyId": "cruise-v-mirror",
        "added": true,
        "id": "cruise-listen-026",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A surface in which you can see yourself.",
        "explainTh": "กระจก"
      },
      {
        "target": "Cup",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-cup",
        "added": true,
        "id": "cruise-listen-027",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A small container for a drink.",
        "explainTh": "ถ้วย"
      },
      {
        "target": "Water",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-water",
        "added": true,
        "id": "cruise-listen-028",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "The clear liquid people drink and use for washing.",
        "explainTh": "น้ำ"
      },
      {
        "target": "Allergy",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-allergy",
        "added": true,
        "id": "cruise-listen-029",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A reaction of the body to a particular substance.",
        "explainTh": "อาการแพ้ / ภาวะแพ้"
      },
      {
        "target": "Ingredient",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-ingredient",
        "added": true,
        "id": "cruise-listen-030",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "One of the substances used to make a product.",
        "explainTh": "ส่วนผสม"
      },
      {
        "target": "Comfortable",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-comfortable",
        "added": true,
        "id": "cruise-listen-031",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Feeling relaxed and without discomfort.",
        "explainTh": "สบาย"
      },
      {
        "target": "Uncomfortable",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-uncomfortable",
        "added": true,
        "id": "cruise-listen-032",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Not feeling physically comfortable.",
        "explainTh": "ไม่สบายตัว"
      },
      {
        "target": "Warm",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-warm",
        "added": true,
        "id": "cruise-listen-033",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A little hot, but not very hot.",
        "explainTh": "อุ่น"
      },
      {
        "target": "Cool",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-cool",
        "added": true,
        "id": "cruise-listen-034",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A little cold rather than warm.",
        "explainTh": "เย็น"
      },
      {
        "target": "Hot",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-hot",
        "added": true,
        "id": "cruise-listen-035",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Having a high temperature.",
        "explainTh": "ร้อน"
      },
      {
        "target": "Cold",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-cold",
        "added": true,
        "id": "cruise-listen-036",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Having a low temperature or feeling a lack of warmth.",
        "explainTh": "หนาว / เย็น"
      },
      {
        "target": "Pain",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-pain",
        "added": true,
        "id": "cruise-listen-037",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "An unpleasant feeling that something hurts.",
        "explainTh": "ความเจ็บปวด"
      },
      {
        "target": "Dizzy",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-dizzy",
        "added": true,
        "id": "cruise-listen-038",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Feeling unsteady or as if things are moving.",
        "explainTh": "เวียนศีรษะ"
      },
      {
        "target": "Sensitive",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-sensitive",
        "added": true,
        "id": "cruise-listen-039",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Easily affected by touch or by a product.",
        "explainTh": "ไวต่อการสัมผัสหรือการระคายเคือง"
      },
      {
        "target": "Temperature",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-temperature",
        "added": true,
        "id": "cruise-listen-040",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "How hot or cold something is.",
        "explainTh": "อุณหภูมิ"
      },
      {
        "target": "Quiet",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-quiet",
        "added": true,
        "id": "cruise-listen-041",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Making very little noise.",
        "explainTh": "เงียบ"
      },
      {
        "target": "Unwell",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-unwell",
        "added": true,
        "id": "cruise-listen-042",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Not feeling well.",
        "explainTh": "รู้สึกไม่สบาย"
      },
      {
        "target": "Payment",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-payment",
        "added": true,
        "id": "cruise-listen-043",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Money given for a product or service.",
        "explainTh": "การชำระเงิน"
      },
      {
        "target": "Cash",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-cash",
        "added": true,
        "id": "cruise-listen-044",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Money in notes and coins.",
        "explainTh": "เงินสด"
      },
      {
        "target": "Receipt",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-receipt",
        "added": true,
        "id": "cruise-listen-045",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "A record showing that payment has been made.",
        "explainTh": "ใบเสร็จรับเงิน"
      },
      {
        "target": "Refund",
        "distractors": [
          "Towel",
          "Blanket",
          "Pillow"
        ],
        "vocabularyId": "cruise-v-refund",
        "added": true,
        "id": "cruise-listen-046",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "explain": "Money paid back after a payment.",
        "explainTh": "การคืนเงิน"
      },
      {
        "id": "cruise-listen-047",
        "target": "Email address",
        "distractors": [
          "Resolve",
          "Complimentary",
          "Exchange rate"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-email-address",
        "explain": "The address used to send someone an email.",
        "explainTh": "ที่อยู่อีเมล",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-048",
        "target": "Ramp",
        "distractors": [
          "Seasickness",
          "Cold",
          "Accessibility"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-ramp",
        "explain": "A sloping surface used instead of steps.",
        "explainTh": "ทางลาด",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-049",
        "target": "Quiet zone",
        "distractors": [
          "Hot",
          "Dizzy",
          "Interpreter"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-quiet-zone",
        "explain": "Area kept quiet",
        "explainTh": "โซนเงียบ",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-050",
        "target": "Arrival",
        "distractors": [
          "All aboard time",
          "Transfer",
          "Customs and immigration"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-arrival",
        "explain": "The act or time of reaching a place.",
        "explainTh": "การมาถึง",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-051",
        "target": "Guided tour",
        "distractors": [
          "Cancelled",
          "Ship time",
          "Itinerary"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-guided-tour",
        "explain": "Trip led by a guide",
        "explainTh": "ทัวร์พร้อมไกด์",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-052",
        "target": "Spell",
        "distractors": [
          "Adjust",
          "Stop",
          "Repeat"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-spell",
        "explain": "Say or write the letters in a word.",
        "explainTh": "สะกด",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-053",
        "target": "Starter",
        "distractors": [
          "Corkage fee",
          "Mocktail",
          "Allergy card"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-starter",
        "explain": "A small dish served before the main course.",
        "explainTh": "อาหารเรียกน้ำย่อย",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-054",
        "target": "Phone number",
        "distractors": [
          "Onboard credit",
          "Boarding pass",
          "Waiting time"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-phone-number",
        "explain": "The number used to contact someone by phone.",
        "explainTh": "หมายเลขโทรศัพท์",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-055",
        "target": "Explain",
        "distractors": [
          "Adjust",
          "Check",
          "Wait"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-explain",
        "explain": "Make something clear with words.",
        "explainTh": "อธิบาย",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-056",
        "target": "Departure",
        "distractors": [
          "All aboard time",
          "Return time",
          "Cancelled"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-departure",
        "explain": "The act or time of leaving a place.",
        "explainTh": "การออกเดินทาง",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-057",
        "target": "Spicy",
        "distractors": [
          "Seating time",
          "Beverage package",
          "Order"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-spicy",
        "explain": "Having a hot taste from spices or chillies.",
        "explainTh": "เผ็ด",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-058",
        "target": "Right",
        "distractors": [
          "Galley",
          "Stairs",
          "Next to"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-right",
        "explain": "Towards the side opposite the left.",
        "explainTh": "ทางขวา",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-059",
        "target": "Laundry list",
        "distractors": [
          "Mirror",
          "Sheet",
          "Tissue"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-laundry-list",
        "explain": "A form recording clothes sent for washing.",
        "explainTh": "รายการเสื้อผ้าส่งซัก",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-060",
        "target": "Emergency exit",
        "distractors": [
          "Supervisor",
          "Man overboard",
          "Crew drill"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-emergency-exit",
        "explain": "Marked emergency route",
        "explainTh": "ทางออกฉุกเฉิน",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-061",
        "target": "Wait",
        "distractors": [
          "Follow",
          "Check",
          "Prefer"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-wait",
        "explain": "Stay until something happens or someone is ready.",
        "explainTh": "รอ",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-062",
        "target": "Meeting point",
        "distractors": [
          "Delay",
          "Queue",
          "Customs and immigration"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-meeting-point",
        "explain": "Where a tour group gathers",
        "explainTh": "จุดนัดพบ",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-063",
        "target": "Gluten",
        "distractors": [
          "Maître d’",
          "À la carte",
          "Dietary requirement"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-gluten",
        "explain": "A group of proteins in wheat, barley and rye.",
        "explainTh": "กลูเตน",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-064",
        "target": "Minibar",
        "distractors": [
          "Amenities",
          "Soap",
          "Cabin key card"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-minibar",
        "explain": "Small in-cabin drinks fridge",
        "explainTh": "มินิบาร์ในห้อง",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-065",
        "target": "Supervisor",
        "distractors": [
          "General emergency alarm",
          "Restricted area",
          "Soap and water"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-supervisor",
        "explain": "A person responsible for overseeing staff and work.",
        "explainTh": "หัวหน้างาน",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-066",
        "target": "Lifeboat",
        "distractors": [
          "Restricted area",
          "Permission",
          "Emergency exit"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-lifeboat",
        "explain": "Boat used to evacuate",
        "explainTh": "เรือชูชีพ",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-067",
        "target": "Local time",
        "distractors": [
          "Sea day",
          "Passport",
          "Embarkation"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-local-time",
        "explain": "The time used at the place being visited.",
        "explainTh": "เวลาท้องถิ่น",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-068",
        "target": "Confirmation",
        "distractors": [
          "Receipt",
          "Reference number",
          "Refund"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-confirmation",
        "explain": "A message showing that an arrangement is agreed.",
        "explainTh": "การยืนยัน",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-069",
        "target": "Balcony cabin",
        "distractors": [
          "Bin",
          "Hairdryer",
          "Laundry list"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-balcony-cabin",
        "explain": "Cabin with a private balcony",
        "explainTh": "ห้องพักมีระเบียง",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-070",
        "target": "Passport",
        "distractors": [
          "Meeting point",
          "Arrival",
          "Ship time"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-passport",
        "explain": "An official document used for international travel.",
        "explainTh": "หนังสือเดินทาง",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-071",
        "target": "Dairy",
        "distractors": [
          "Wine list",
          "Last call",
          "Speciality restaurant"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-dairy",
        "explain": "Milk and foods made from milk.",
        "explainTh": "นมและผลิตภัณฑ์จากนม",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-072",
        "target": "Boarding pass",
        "distractors": [
          "Shore excursion desk",
          "Folio",
          "Description"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-boarding-pass",
        "explain": "Document to board",
        "explainTh": "บัตรขึ้นเรือ",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-073",
        "target": "Guest comment card",
        "distractors": [
          "Pain",
          "Unwell",
          "Priority boarding"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-guest-comment-card",
        "explain": "Form for guest feedback",
        "explainTh": "บัตรแสดงความคิดเห็น",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-074",
        "target": "Crew training",
        "distractors": [
          "Shift",
          "Overtime",
          "Equipment"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-crew-training",
        "explain": "Safety and service sessions",
        "explainTh": "การอบรมลูกเรือ",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-075",
        "target": "Bin",
        "distractors": [
          "Replace",
          "Extra",
          "Towel"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-bin",
        "explain": "A container for rubbish.",
        "explainTh": "ถังขยะ",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-076",
        "target": "Napkin",
        "distractors": [
          "Refill",
          "Maître d’",
          "Buffet"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-napkin",
        "explain": "Cloth or paper used while eating.",
        "explainTh": "ผ้าเช็ดปาก / กระดาษเช็ดปาก",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-077",
        "target": "Opposite",
        "distractors": [
          "Lift",
          "Port side",
          "Aft"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-opposite",
        "explain": "On the other side, facing something.",
        "explainTh": "ตรงข้าม",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-078",
        "target": "Guest services desk",
        "distractors": [
          "Waiting time",
          "Balance",
          "Reference number"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-guest-services-desk",
        "explain": "Reception counter for guests",
        "explainTh": "เคาน์เตอร์บริการผู้โดยสาร",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-079",
        "target": "Blocked",
        "distractors": [
          "Remote control",
          "Laundry list",
          "Air conditioning"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-blocked",
        "explain": "Not allowing water or objects to pass through.",
        "explainTh": "อุดตัน",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-listen-080",
        "target": "Left",
        "distractors": [
          "Aft",
          "Handrail",
          "Stairs"
        ],
        "level": 1,
        "topic": "vocabulary",
        "vocabularyId": "cruise-v-left",
        "explain": "Towards the side opposite the right.",
        "explainTh": "ทางซ้าย",
        "addedIn": "practice-expansion",
        "objective": "Use clear, appropriate workplace English."
      }
    ],
    "builder": [
      {
        "th": "ยินดีต้อนรับขึ้นเรือค่ะ",
        "sentence": "Welcome aboard.",
        "id": "cruise-builder-001",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขอดูบัตรประจำตัวผู้โดยสารหน่อยนะคะ",
        "sentence": "May I see your cruise card?",
        "id": "cruise-builder-002",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ห้องพักของคุณอยู่ชั้นเก้าค่ะ",
        "sentence": "Your stateroom is on deck nine.",
        "id": "cruise-builder-003",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "กรุณาตรวจสอบจุดรวมพลที่กำหนดให้คุณค่ะ",
        "sentence": "Please check your assigned muster station.",
        "id": "cruise-builder-004",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "check your assigned muster station, please."
        ]
      },
      {
        "th": "เวลากลับขึ้นเรือคือสี่โมงครึ่ง",
        "sentence": "All aboard time is four thirty.",
        "id": "cruise-builder-005",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "กรุณาปฏิบัติตามคำแนะนำด้านความปลอดภัยของลูกเรือค่ะ",
        "sentence": "Please follow the crew’s safety instructions.",
        "id": "cruise-builder-006",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "follow the crew’s safety instructions, please."
        ]
      },
      {
        "th": "กรุณาปฏิบัติตามคำแนะนำของลูกเรือเกี่ยวกับเสื้อชูชีพค่ะ",
        "sentence": "Please follow the crew’s life jacket instructions.",
        "id": "cruise-builder-007",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "follow the crew’s life jacket instructions, please."
        ]
      },
      {
        "th": "ท่านมีอาการแพ้อาหารไหมคะ",
        "sentence": "Do you have any food allergies?",
        "id": "cruise-builder-008",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขออนุญาตเก็บจานได้ไหมคะ",
        "sentence": "May I clear these plates?",
        "id": "cruise-builder-009",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขอให้อร่อยนะคะ",
        "sentence": "Enjoy your meal.",
        "id": "cruise-builder-010",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "เครื่องดื่มนี้รวมในแพ็กเกจของท่านแล้ว",
        "sentence": "That drink is included in your package.",
        "id": "cruise-builder-011",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ดิฉันจะติดต่อทีมแพทย์ค่ะ",
        "sentence": "I will contact the medical team.",
        "id": "cruise-builder-012",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ดิฉันจะกลับมาจัดเตียงตอนเย็น",
        "sentence": "I will return this evening for turndown service.",
        "id": "cruise-builder-013",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "กรุณาวางกระเป๋าไว้หน้าห้องพัก",
        "sentence": "Please leave your suitcases outside your cabin.",
        "id": "cruise-builder-014",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "leave your suitcases outside your cabin, please."
        ]
      },
      {
        "th": "ขอบคุณที่ร่วมเดินทางกับเรานะคะ",
        "sentence": "Thank you for sailing with us.",
        "id": "cruise-builder-015",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขอไปหาคำตอบให้ทันทีนะคะ",
        "sentence": "Let me find out for you right away.",
        "id": "cruise-builder-016",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "สวัสดีค่ะ มีอะไรให้ช่วยไหมคะ",
        "sentence": "Hello. How can I help you?",
        "phraseId": "cruise-p-everyday-008",
        "added": true,
        "id": "cruise-builder-017",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "กรุณาตามมาค่ะ",
        "sentence": "Please follow me.",
        "phraseId": "cruise-p-everyday-009",
        "added": true,
        "id": "cruise-builder-018",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "follow me, please."
        ]
      },
      {
        "th": "ขอตรวจสอบให้ค่ะ",
        "sentence": "Let me check that for you.",
        "phraseId": "cruise-p-everyday-010",
        "added": true,
        "id": "cruise-builder-019",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ไม่ต้องรีบนะคะ",
        "sentence": "Please take your time.",
        "phraseId": "cruise-p-everyday-011",
        "added": true,
        "id": "cruise-builder-020",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "take your time, please."
        ]
      },
      {
        "th": "ขอบคุณที่แจ้งให้ทราบค่ะ",
        "sentence": "Thank you for letting me know.",
        "phraseId": "cruise-p-everyday-012",
        "added": true,
        "id": "cruise-builder-021",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขอตรวจสอบหมายเลขห้องพักได้ไหมคะ",
        "sentence": "May I check your cabin number?",
        "phraseId": "cruise-p-embark-007",
        "added": true,
        "id": "cruise-builder-022",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ล่องเรือครั้งแรกใช่ไหมคะ",
        "sentence": "Is this your first cruise?",
        "phraseId": "cruise-p-embark-008",
        "added": true,
        "id": "cruise-builder-023",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "กรุณาเตรียมบัตรขึ้นเรือให้พร้อมค่ะ",
        "sentence": "Please have your boarding pass ready.",
        "phraseId": "cruise-p-embark-009",
        "added": true,
        "id": "cruise-builder-024",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "have your boarding pass ready, please."
        ]
      },
      {
        "th": "ต้องการความช่วยเหลือเรื่องเส้นทางไหมคะ",
        "sentence": "Would you like help with the directions?",
        "phraseId": "cruise-p-embark-010",
        "added": true,
        "id": "cruise-builder-025",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขอตรวจสอบสถานะการนำส่งสัมภาระค่ะ",
        "sentence": "Let me check the delivery status of your luggage.",
        "phraseId": "cruise-p-embark-011",
        "added": true,
        "id": "cruise-builder-026",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "กรุณาตรวจสอบชื่อบนป้ายสัมภาระค่ะ",
        "sentence": "Please check the name on your luggage tag.",
        "phraseId": "cruise-p-embark-012",
        "added": true,
        "id": "cruise-builder-027",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": [
          "check the name on your luggage tag, please."
        ]
      },
      {
        "th": "ลูกเรือจะอธิบายการจัดเตรียมด้านความปลอดภัยของวันนี้ค่ะ",
        "sentence": "The crew will explain today's safety arrangements.",
        "phraseId": "cruise-p-embark-013",
        "added": true,
        "id": "cruise-builder-028",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ขอเข้าไปได้ไหมคะ",
        "sentence": "May I come in?",
        "phraseId": "cruise-p-cabin-007",
        "added": true,
        "id": "cruise-builder-029",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ต้องการผ้าขนหนูสะอาดไหมคะ",
        "sentence": "Would you like fresh towels?",
        "phraseId": "cruise-p-cabin-008",
        "added": true,
        "id": "cruise-builder-030",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ต้องการหมอนเพิ่มกี่ใบคะ",
        "sentence": "How many extra pillows do you need?",
        "phraseId": "cruise-p-cabin-009",
        "added": true,
        "id": "cruise-builder-031",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ต้องการผ้าห่มเพิ่มไหมคะ",
        "sentence": "Would you like another blanket?",
        "phraseId": "cruise-p-cabin-010",
        "added": true,
        "id": "cruise-builder-032",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "สะดวกให้ทำความสะอาดกี่โมงคะ",
        "sentence": "What time would be convenient for cleaning?",
        "phraseId": "cruise-p-cabin-011",
        "added": true,
        "id": "cruise-builder-033",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "ของชิ้นไหนหายไปคะ",
        "sentence": "Which item is missing?",
        "phraseId": "cruise-p-cabin-012",
        "added": true,
        "id": "cruise-builder-034",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "จะรายงานปัญหาเครื่องปรับอากาศให้ฝ่ายซ่อมบำรุงค่ะ",
        "sentence": "I will report the air-conditioning problem to maintenance.",
        "phraseId": "cruise-p-cabin-013",
        "added": true,
        "id": "cruise-builder-035",
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "th": "พบการรั่วบริเวณไหนคะ",
        "sentence": "Where did you notice the leak?",
        "phraseId": "cruise-p-cabin-014",
        "added": true,
        "id": "cruise-builder-036",
        "level": 1,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English.",
        "alternatives": []
      },
      {
        "id": "cruise-builder-037",
        "sentence": "I completely understand, and I’ll raise this with my department head now.",
        "th": "ดิฉันเข้าใจอย่างยิ่งค่ะ และจะแจ้งหัวหน้าแผนกทันที",
        "level": 3,
        "topic": "communication",
        "phraseId": "cruise-p-complaints-003",
        "explain": "Shows the guest it will move.",
        "explainTh": "ใช้ในสถานการณ์การจัดการข้อร้องเรียน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-038",
        "sentence": "Let me check the step-free route and assistance arrangements for the theatre.",
        "th": "ขอตรวจสอบเส้นทางไปโรงละครที่ไม่มีขั้นบันไดและการช่วยเหลือค่ะ",
        "level": 3,
        "topic": "communication",
        "phraseId": "cruise-p-care-004",
        "explain": "Confirm accessibility on this ship.",
        "explainTh": "ยืนยันการเข้าถึงบนเรือลำนี้",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-039",
        "sentence": "I’ll return this evening for turndown service, at around eight.",
        "th": "ดิฉันจะกลับมาจัดเตียงตอนเย็นประมาณแปดโมงนะคะ",
        "level": 3,
        "topic": "communication",
        "phraseId": "cruise-p-cabin-005",
        "explain": "Sets a clear expectation.",
        "explainTh": "ใช้ในสถานการณ์ห้องพักและงานแม่บ้าน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-040",
        "sentence": "Disembarkation begins at seven. Your luggage tags show your group colour.",
        "th": "การลงจากเรือเริ่มเจ็ดโมงค่ะ ป้ายกระเป๋าจะระบุสีกลุ่มของท่าน",
        "level": 3,
        "topic": "communication",
        "phraseId": "cruise-p-farewell-001",
        "explain": "Two facts guests need together.",
        "explainTh": "ใช้ในสถานการณ์การลงจากเรือและกล่าวลา โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-041",
        "sentence": "I will ask a colleague for language support.",
        "th": "จะขอให้เพื่อนร่วมงานช่วยด้านภาษาค่ะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "cruise-p-clarifying-006",
        "explain": "Use suitable language support for important information.",
        "explainTh": "ใช้ความช่วยเหลือทางภาษาที่เหมาะสมกับข้อมูลสำคัญ",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-042",
        "sentence": "All aboard time is four thirty this afternoon, please don’t be late.",
        "th": "เวลากลับขึ้นเรือคือสี่โมงครึ่งบ่ายนี้ กรุณาอย่ามาสายนะคะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "cruise-p-excursion-001",
        "explain": "Repeat the time twice; it matters most.",
        "explainTh": "ใช้ในสถานการณ์ท่าเรือและทัวร์ชายฝั่ง โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-043",
        "sentence": "I will confirm the extra charge before you order.",
        "th": "จะยืนยันค่าใช้จ่ายเพิ่มก่อนสั่งค่ะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "cruise-p-bar-011",
        "explain": "State the confirmed amount and currency.",
        "explainTh": "แจ้งยอดและสกุลเงินที่ยืนยันแล้ว",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-044",
        "sentence": "Could you cover my section? I’m running a few minutes behind.",
        "th": "ช่วยดูแลโซนของฉันแทนได้ไหม ฉันช้าไปสองสามนาที",
        "level": 2,
        "topic": "communication",
        "phraseId": "cruise-p-crewtalk-002",
        "explain": "Ask clearly and early.",
        "explainTh": "ใช้ในสถานการณ์การสื่อสารกับทีมงาน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-045",
        "sentence": "Tonight’s speciality restaurant still has a table at eight.",
        "th": "ห้องอาหารพิเศษคืนนี้ยังมีโต๊ะว่างเวลาแปดโมงค่ะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "cruise-p-selling-004",
        "explain": "A gentle reason to decide now.",
        "explainTh": "ใช้ในสถานการณ์การแนะนำบริการเสริม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-046",
        "sentence": "I will check the latest information about the delay.",
        "th": "จะตรวจสอบข้อมูลล่าสุดเกี่ยวกับความล่าช้าค่ะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "cruise-p-excursion-012",
        "explain": "Give verified information without inventing a reason.",
        "explainTh": "ให้ข้อมูลที่ยืนยันแล้วโดยไม่แต่งสาเหตุ",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-047",
        "sentence": "Please tell the next shift about the maintenance request.",
        "th": "กรุณาแจ้งกะถัดไปเรื่องคำขอซ่อมบำรุง",
        "level": 2,
        "topic": "communication",
        "phraseId": "cruise-p-crewtalk-009",
        "explain": "Include the current status without claiming completion.",
        "explainTh": "แจ้งสถานะปัจจุบันโดยไม่บอกว่าเสร็จแล้ว",
        "addedIn": "practice-expansion",
        "alternatives": [
          "tell the next shift about the maintenance request, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-048",
        "sentence": "I’ve logged it in the handover book for the next watch.",
        "th": "ฉันบันทึกไว้ในสมุดส่งงานให้เวรถัดไปแล้ว",
        "level": 2,
        "topic": "communication",
        "phraseId": "cruise-p-crewtalk-003",
        "explain": "Written records prevent repeats.",
        "explainTh": "ใช้ในสถานการณ์การสื่อสารกับทีมงาน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-049",
        "sentence": "Please check whether today's ship time differs from local time.",
        "th": "กรุณาตรวจสอบว่าวันนี้เวลาบนเรือต่างจากเวลาท้องถิ่นหรือไม่ค่ะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "cruise-p-excursion-006",
        "explain": "Ship time and local time may match or differ.",
        "explainTh": "เวลาบนเรือและเวลาท้องถิ่นอาจตรงกันหรือต่างกัน",
        "addedIn": "practice-expansion",
        "alternatives": [
          "check whether today's ship time differs from local time, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-050",
        "sentence": "May I see your cruise card, please?",
        "th": "ขอดูบัตรประจำตัวผู้โดยสารหน่อยนะคะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "cruise-p-bar-003",
        "explain": "Needed for every charge.",
        "explainTh": "ใช้ในสถานการณ์บริการบาร์และเครื่องดื่ม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-051",
        "sentence": "Let me check whether this is included in your package.",
        "th": "ขอตรวจสอบว่ารวมในแพ็กเกจของคุณหรือไม่ค่ะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "cruise-p-bar-010",
        "explain": "Check the current package conditions.",
        "explainTh": "ตรวจสอบเงื่อนไขแพ็กเกจปัจจุบัน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-052",
        "sentence": "Today’s programme is delivered to your cabin each evening.",
        "th": "กำหนดการของแต่ละวันจะส่งไปที่ห้องพักทุกเย็นค่ะ",
        "level": 2,
        "topic": "communication",
        "phraseId": "cruise-p-shipinfo-005",
        "explain": "Points guests to the answer next time.",
        "explainTh": "ใช้ในสถานการณ์คำถามเกี่ยวกับเรือ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-053",
        "sentence": "What is your tour name?",
        "th": "ทัวร์ชื่ออะไรคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-excursion-007",
        "explain": "Identify the tour before giving instructions.",
        "explainTh": "ระบุทัวร์ก่อนให้คำแนะนำ",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-054",
        "sentence": "What can I get you this evening?",
        "th": "เย็นนี้รับเครื่องดื่มอะไรดีคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-bar-001",
        "explain": "A friendly, open opener.",
        "explainTh": "ใช้ในสถานการณ์บริการบาร์และเครื่องดื่ม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-055",
        "sentence": "Which charge would you like me to check?",
        "th": "ต้องการให้ตรวจสอบค่าใช้จ่ายรายการไหนคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-account-001",
        "explain": "Refer to the actual account statement.",
        "explainTh": "อ้างอิงรายการบัญชีจริง",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-056",
        "sentence": "Would you like a copy of your statement?",
        "th": "ต้องการสำเนารายการบัญชีไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-account-003",
        "explain": "Provide access through the authorised process.",
        "explainTh": "ให้ข้อมูลผ่านขั้นตอนที่ได้รับอนุญาต",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-057",
        "sentence": "Go straight ahead, then turn right.",
        "th": "ตรงไปแล้วเลี้ยวขวาค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-shipinfo-009",
        "explain": "Give directions in short steps after confirming the route.",
        "explainTh": "บอกทางเป็นขั้นสั้น ๆ หลังยืนยันเส้นทาง",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-058",
        "sentence": "Could you repeat that, please?",
        "th": "ช่วยพูดซ้ำอีกครั้งได้ไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-clarifying-001",
        "explain": "Ask again rather than guessing.",
        "explainTh": "ถามซ้ำแทนการคาดเดา",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-059",
        "sentence": "Could you bring two clean towels, please?",
        "th": "ช่วยนำผ้าขนหนูสะอาดสองผืนมาให้ได้ไหม",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-crewtalk-008",
        "explain": "Confirm both the item and the quantity.",
        "explainTh": "ยืนยันทั้งสิ่งของและจำนวน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-060",
        "sentence": "I will contact the medical team for you.",
        "th": "จะติดต่อทีมแพทย์ให้ค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-care-010",
        "explain": "Seek appropriate help rather than diagnosing or prescribing.",
        "explainTh": "ขอความช่วยเหลือที่เหมาะสม แทนวินิจฉัยหรือแนะนำยาเอง",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-061",
        "sentence": "Would you like assistance?",
        "th": "ต้องการความช่วยเหลือไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-care-007",
        "explain": "Ask before helping or touching mobility equipment.",
        "explainTh": "ถามก่อนช่วยหรือจับอุปกรณ์ช่วยเคลื่อนที่",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-062",
        "sentence": "Please keep this exit clear.",
        "th": "กรุณาอย่าวางสิ่งของกีดขวางทางออกนี้ค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-safety-008",
        "explain": "Do not allow objects to block an exit.",
        "explainTh": "ไม่ให้สิ่งของกีดขวางทางออก",
        "addedIn": "practice-expansion",
        "alternatives": [
          "keep this exit clear, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-063",
        "sentence": "Enjoy the rest of your day.",
        "th": "ขอให้สนุกกับช่วงเวลาที่เหลือของวันนะคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-everyday-007",
        "explain": "A warm everyday farewell.",
        "explainTh": "ใช้ในสถานการณ์คำสุภาพที่ใช้ทุกวัน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-064",
        "sentence": "Would you like me to explain the options?",
        "th": "ต้องการให้อธิบายทางเลือกไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-selling-007",
        "explain": "Ask permission before describing optional purchases.",
        "explainTh": "ขออนุญาตก่อนอธิบายการซื้อเพิ่มเติม",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-065",
        "sentence": "Please tell me if you feel unsteady.",
        "th": "กรุณาบอกหากรู้สึกทรงตัวไม่มั่นคงค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-care-012",
        "explain": "Contact the appropriate team and avoid unsupported reassurance.",
        "explainTh": "ติดต่อทีมที่เหมาะสมและไม่รับรองว่าไม่เป็นอะไร",
        "addedIn": "practice-expansion",
        "alternatives": [
          "tell me if you feel unsteady, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-066",
        "sentence": "Please watch your step.",
        "th": "กรุณาระวังขั้นบันไดค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-safety-010",
        "explain": "Warn about a visible change in level.",
        "explainTh": "เตือนเมื่อมีระดับพื้นต่างกัน",
        "addedIn": "practice-expansion",
        "alternatives": [
          "watch your step, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-067",
        "sentence": "Would you like still or sparkling water?",
        "th": "ต้องการน้ำเปล่าหรือน้ำอัดก๊าซคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-bar-007",
        "explain": "Confirm the drink and any applicable charge.",
        "explainTh": "ยืนยันเครื่องดื่มและค่าใช้จ่ายที่อาจมี",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-068",
        "sentence": "Have you checked your cabin for belongings?",
        "th": "ตรวจสอบของส่วนตัวในห้องพักแล้วไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-farewell-007",
        "explain": "Give a helpful reminder without delaying official instructions.",
        "explainTh": "เตือนอย่างเหมาะสมโดยไม่ขัดกำหนดการทางการ",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-069",
        "sentence": "It is next to the lift.",
        "th": "อยู่ข้างลิฟต์ค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-shipinfo-010",
        "explain": "Use only when this matches the actual location.",
        "explainTh": "ใช้เมื่อตรงกับตำแหน่งจริงเท่านั้น",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-070",
        "sentence": "Would you like ice?",
        "th": "ต้องการน้ำแข็งไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-bar-008",
        "explain": "Check the guest's preference.",
        "explainTh": "ถามความต้องการของลูกค้า",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-071",
        "sentence": "Please hold the handrail.",
        "th": "กรุณาจับราวค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-safety-009",
        "explain": "Offer support through the approved procedure.",
        "explainTh": "ช่วยเหลือตามขั้นตอนที่กำหนด",
        "addedIn": "practice-expansion",
        "alternatives": [
          "hold the handrail, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-072",
        "sentence": "Would you like the sauce on the side?",
        "th": "ต้องการแยกซอสไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-dining-014",
        "explain": "Confirm whether the kitchen can accommodate the request.",
        "explainTh": "ยืนยันว่าครัวทำตามคำขอได้หรือไม่",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-073",
        "sentence": "How many people are in your party?",
        "th": "มากี่ท่านคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-dining-009",
        "explain": "Party means the group, not a celebration.",
        "explainTh": "คำว่า party ในที่นี้หมายถึงกลุ่มผู้รับประทานอาหาร",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-074",
        "sentence": "Thank you for sailing with us. Safe travels home.",
        "th": "ขอบคุณที่ร่วมเดินทางกับเรานะคะ เดินทางกลับปลอดภัยค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-farewell-005",
        "explain": "The last thing a guest hears.",
        "explainTh": "ใช้ในสถานการณ์การลงจากเรือและกล่าวลา โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-075",
        "sentence": "Please stay calm and listen to the crew.",
        "th": "กรุณาตั้งสติและฟังลูกเรือค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-safety-007",
        "explain": "Support the ship's actual emergency instructions.",
        "explainTh": "ใช้สนับสนุนคำสั่งฉุกเฉินจริงของเรือ",
        "addedIn": "practice-expansion",
        "alternatives": [
          "stay calm and listen to the crew, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-076",
        "sentence": "Please check the meeting point on your ticket.",
        "th": "กรุณาตรวจสอบจุดนัดพบบนตั๋วค่ะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-excursion-011",
        "explain": "Do not assume every tour uses the same location.",
        "explainTh": "อย่าสรุปว่าทุกทัวร์นัดพบที่เดียวกัน",
        "addedIn": "practice-expansion",
        "alternatives": [
          "check the meeting point on your ticket, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-077",
        "sentence": "May I repeat your order?",
        "th": "ขอทวนรายการอาหารได้ไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-dining-015",
        "explain": "Read back dishes and important special requests.",
        "explainTh": "ทวนอาหารและคำขอพิเศษที่สำคัญ",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-078",
        "sentence": "Please record the cabin number and the request.",
        "th": "กรุณาบันทึกหมายเลขห้องและคำขอ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-crewtalk-007",
        "explain": "Staff handover language, not guest-facing language.",
        "explainTh": "ภาษาส่งมอบงานระหว่างเจ้าหน้าที่ ไม่ใช่พูดกับลูกค้า",
        "addedIn": "practice-expansion",
        "alternatives": [
          "record the cabin number and the request, please."
        ],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-079",
        "sentence": "Would you like a few more minutes?",
        "th": "ต้องการเวลาอีกสักครู่ไหมคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-dining-010",
        "explain": "Offer time before taking the order.",
        "explainTh": "ให้เวลาก่อนรับรายการอาหาร",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-builder-080",
        "sentence": "Thank you for waiting.",
        "th": "ขอบคุณที่รอนะคะ",
        "level": 1,
        "topic": "communication",
        "phraseId": "cruise-p-everyday-003",
        "explain": "Say it even after a short wait.",
        "explainTh": "ใช้ในสถานการณ์คำสุภาพที่ใช้ทุกวัน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "addedIn": "practice-expansion",
        "alternatives": [],
        "objective": "Use clear, appropriate workplace English."
      }
    ],
    "dialogues": [
      {
        "id": "embark",
        "title": "Embarkation day",
        "th": "วันขึ้นเรือ",
        "lines": [
          {
            "speaker": "Crew",
            "before": "Good afternoon, and welcome ",
            "after": ". May I see your boarding pass?",
            "options": [
              "aboard",
              "inside",
              "over",
              "along"
            ],
            "correct": "aboard",
            "id": "cruise-dialogue-embark-1",
            "feedback": "Use “aboard” to complete this model exchange."
          },
          {
            "speaker": "Guest",
            "before": "Here it is. This is our first cruise.",
            "after": "",
            "fixed": true
          },
          {
            "speaker": "Crew",
            "before": "Then let me explain a few things. Your ",
            "after": " is on deck nine, midship.",
            "options": [
              "stateroom",
              "gangway",
              "galley",
              "folio"
            ],
            "correct": "stateroom",
            "id": "cruise-dialogue-embark-3",
            "feedback": "Use “stateroom” to complete this model exchange."
          },
          {
            "speaker": "Guest",
            "before": "Thank you. When will our luggage arrive?",
            "after": "",
            "fixed": true
          },
          {
            "speaker": "Crew",
            "before": "Let me check when your luggage is expected to be ",
            "after": " to your cabin.",
            "options": [
              "delivered",
              "cancelled",
              "charged",
              "booked"
            ],
            "correct": "delivered",
            "id": "cruise-dialogue-embark-5",
            "feedback": "Use “delivered” to complete this model exchange."
          },
          {
            "speaker": "Crew",
            "before": "Please check the current safety briefing arrangements and your assigned ",
            "after": " station.",
            "options": [
              "muster",
              "tender",
              "dining",
              "service"
            ],
            "correct": "muster",
            "id": "cruise-dialogue-embark-6",
            "feedback": "Use “muster” to complete this model exchange."
          },
          {
            "speaker": "Guest",
            "before": "Where do we need to go?",
            "after": "",
            "fixed": true
          },
          {
            "speaker": "Crew",
            "before": "I will check the current safety ",
            "after": " to confirm where you should go.",
            "options": [
              "instructions",
              "prices",
              "menus",
              "discounts"
            ],
            "correct": "instructions",
            "id": "cruise-dialogue-embark-8",
            "feedback": "Use “instructions” to complete this model exchange."
          },
          {
            "speaker": "Crew",
            "before": "Please follow the crew’s instructions about the safe ",
            "after": " to use.",
            "options": [
              "route",
              "price",
              "menu",
              "order"
            ],
            "correct": "route",
            "id": "cruise-dialogue-embark-9",
            "feedback": "Use “route” to complete this model exchange."
          },
          {
            "speaker": "Guest",
            "before": "Understood. Thank you for your help.",
            "after": "",
            "fixed": true
          },
          {
            "speaker": "Crew",
            "before": "It’s my pleasure. Do ",
            "after": " the rest of your afternoon.",
            "options": [
              "enjoy",
              "avoid",
              "delay",
              "forget"
            ],
            "correct": "enjoy",
            "id": "cruise-dialogue-embark-11",
            "feedback": "Use “enjoy” to complete this model exchange."
          }
        ],
        "trainingExample": true,
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "port",
        "title": "A day in port",
        "th": "วันแวะท่าเรือ",
        "lines": [
          {
            "speaker": "Guest",
            "before": "Excuse me, what time do we have to be back on the ship?",
            "after": "",
            "fixed": true
          },
          {
            "speaker": "Crew",
            "before": "All ",
            "after": " time is four thirty this afternoon.",
            "options": [
              "aboard",
              "ashore",
              "around",
              "abroad"
            ],
            "correct": "aboard",
            "id": "cruise-dialogue-port-2",
            "feedback": "Use “aboard” to complete this model exchange."
          },
          {
            "speaker": "Crew",
            "before": "Please confirm whether the announced time is ship time or ",
            "after": " time.",
            "options": [
              "local",
              "meal",
              "departure",
              "arrival"
            ],
            "correct": "local",
            "id": "cruise-dialogue-port-3",
            "feedback": "Use “local” to complete this model exchange."
          },
          {
            "speaker": "Guest",
            "before": "Good to know. How do we get ashore?",
            "after": "",
            "fixed": true
          },
          {
            "speaker": "Crew",
            "before": "The ship cannot dock here, so a ",
            "after": " boat will take you across.",
            "options": [
              "tender",
              "life",
              "sail",
              "row"
            ],
            "correct": "tender",
            "id": "cruise-dialogue-port-5",
            "feedback": "Use “tender” to complete this model exchange."
          },
          {
            "speaker": "Crew",
            "before": "It leaves from the ",
            "after": " every twenty minutes.",
            "options": [
              "gangway",
              "galley",
              "atrium",
              "bridge"
            ],
            "correct": "gangway",
            "id": "cruise-dialogue-port-6",
            "feedback": "Use “gangway” to complete this model exchange."
          },
          {
            "speaker": "Guest",
            "before": "Should we take anything with us?",
            "after": "",
            "fixed": true
          },
          {
            "speaker": "Crew",
            "before": "Please take your cruise card and some local ",
            "after": ".",
            "options": [
              "currency",
              "language",
              "weather",
              "luggage"
            ],
            "correct": "currency",
            "id": "cruise-dialogue-port-8",
            "feedback": "Use “currency” to complete this model exchange."
          },
          {
            "speaker": "Crew",
            "before": "If you’d like a guided tour, the shore ",
            "after": " desk is on deck five.",
            "options": [
              "excursion",
              "service",
              "landing",
              "arrival"
            ],
            "correct": "excursion",
            "id": "cruise-dialogue-port-9",
            "feedback": "Use “excursion” to complete this model exchange."
          },
          {
            "speaker": "Guest",
            "before": "Perfect, thank you very much.",
            "after": "",
            "fixed": true
          }
        ],
        "trainingExample": true,
        "level": 2,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "arrival-help",
        "title": "Finding your cabin and luggage",
        "th": "หาห้องพักและสัมภาระ",
        "lines": [
          {
            "speaker": "Guest",
            "before": "I need help finding my room.",
            "after": "",
            "fixed": true,
            "th": "ต้องการความช่วยเหลือในการหาห้องค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "May I check your cabin ",
            "after": "?",
            "correct": "number",
            "options": [
              "number",
              "temperature",
              "price",
              "colour"
            ],
            "th": "ขอตรวจสอบหมายเลขห้องพักได้ไหมคะ",
            "phraseId": "cruise-p-embark-007",
            "feedback": "Confirm the number before giving directions.",
            "id": "cruise-dialogue-arrival-help-2"
          },
          {
            "speaker": "Guest",
            "before": "My suitcase has not arrived.",
            "after": "",
            "fixed": true,
            "th": "กระเป๋าเดินทางยังมาไม่ถึงค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Let me check the delivery status of your ",
            "after": ".",
            "correct": "luggage",
            "options": [
              "luggage",
              "dinner",
              "receipt",
              "soap"
            ],
            "th": "ขอตรวจสอบสถานะการนำส่งสัมภาระค่ะ",
            "phraseId": "cruise-p-embark-011",
            "feedback": "Check the luggage record instead of promising a time.",
            "id": "cruise-dialogue-arrival-help-4"
          },
          {
            "speaker": "Guest",
            "before": "Is this the correct bag?",
            "after": "",
            "fixed": true,
            "th": "กระเป๋าใบนี้ถูกต้องไหมคะ"
          },
          {
            "speaker": "Crew",
            "before": "Please check the name on your luggage ",
            "after": ".",
            "correct": "tag",
            "options": [
              "tag",
              "menu",
              "glass",
              "plate"
            ],
            "th": "กรุณาตรวจสอบชื่อบนป้ายสัมภาระค่ะ",
            "phraseId": "cruise-p-embark-012",
            "feedback": "Verify the label before handing over luggage.",
            "id": "cruise-dialogue-arrival-help-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-embark-007",
          "cruise-p-embark-011",
          "cruise-p-embark-012"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cabin-supplies",
        "title": "Extra cabin supplies",
        "th": "ขอของใช้ในห้องพักเพิ่ม",
        "lines": [
          {
            "speaker": "Guest",
            "before": "We have used all the towels.",
            "after": "",
            "fixed": true,
            "th": "ใช้ผ้าขนหนูหมดแล้วค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Would you like fresh ",
            "after": "?",
            "correct": "towels",
            "options": [
              "towels",
              "tickets",
              "statements",
              "orders"
            ],
            "th": "ต้องการผ้าขนหนูสะอาดไหมคะ",
            "phraseId": "cruise-p-cabin-008",
            "feedback": "Check the quantity needed.",
            "id": "cruise-dialogue-cabin-supplies-2"
          },
          {
            "speaker": "Guest",
            "before": "Could we have more pillows?",
            "after": "",
            "fixed": true,
            "th": "ขอหมอนเพิ่มได้ไหมคะ"
          },
          {
            "speaker": "Crew",
            "before": "How many extra ",
            "after": " do you need?",
            "correct": "pillows",
            "options": [
              "pillows",
              "charges",
              "transfers",
              "tickets"
            ],
            "th": "ต้องการหมอนเพิ่มกี่ใบคะ",
            "phraseId": "cruise-p-cabin-009",
            "feedback": "Confirm quantity rather than guessing.",
            "id": "cruise-dialogue-cabin-supplies-4"
          },
          {
            "speaker": "Guest",
            "before": "The cabin feels cold.",
            "after": "",
            "fixed": true,
            "th": "รู้สึกว่าห้องพักเย็นค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Would you like another ",
            "after": "?",
            "correct": "blanket",
            "options": [
              "blanket",
              "receipt",
              "menu",
              "reference"
            ],
            "th": "ต้องการผ้าห่มเพิ่มไหมคะ",
            "phraseId": "cruise-p-cabin-010",
            "feedback": "Offer an immediate comfort option.",
            "id": "cruise-dialogue-cabin-supplies-6"
          }
        ],
        "level": 1,
        "phraseIds": [
          "cruise-p-cabin-008",
          "cruise-p-cabin-009",
          "cruise-p-cabin-010"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "maintenance-report",
        "title": "Reporting cabin problems",
        "th": "รายงานปัญหาในห้องพัก",
        "lines": [
          {
            "speaker": "Guest",
            "before": "The air conditioning is not working.",
            "after": "",
            "fixed": true,
            "th": "เครื่องปรับอากาศไม่ทำงานค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "I will report the air-conditioning problem to ",
            "after": ".",
            "correct": "maintenance",
            "options": [
              "maintenance",
              "dining",
              "entertainment",
              "shore excursions"
            ],
            "th": "จะรายงานปัญหาเครื่องปรับอากาศให้ฝ่ายซ่อมบำรุงค่ะ",
            "phraseId": "cruise-p-cabin-013",
            "feedback": "Report the fault without promising an unconfirmed repair time.",
            "id": "cruise-dialogue-maintenance-report-2"
          },
          {
            "speaker": "Guest",
            "before": "There is water on the bathroom floor.",
            "after": "",
            "fixed": true,
            "th": "มีน้ำอยู่บนพื้นห้องน้ำค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Where did you notice the ",
            "after": "?",
            "correct": "leak",
            "options": [
              "leak",
              "bill",
              "menu",
              "ticket"
            ],
            "th": "พบการรั่วบริเวณไหนคะ",
            "phraseId": "cruise-p-cabin-014",
            "feedback": "Identify the location and follow the safety procedure.",
            "id": "cruise-dialogue-maintenance-report-4"
          },
          {
            "speaker": "Guest",
            "before": "This chair is broken.",
            "after": "",
            "fixed": true,
            "th": "เก้าอี้ตัวนี้ชำรุดค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Please do not use the ",
            "after": " item.",
            "correct": "broken",
            "options": [
              "broken",
              "clean",
              "fresh",
              "new"
            ],
            "th": "กรุณาอย่าใช้สิ่งของที่ชำรุดค่ะ",
            "phraseId": "cruise-p-cabin-015",
            "feedback": "Keep the guest away from the identified hazard and report it.",
            "id": "cruise-dialogue-maintenance-report-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-cabin-013",
          "cruise-p-cabin-014",
          "cruise-p-cabin-015"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "housekeeping-visit",
        "title": "A housekeeping visit",
        "th": "การเข้าทำความสะอาดห้องพัก",
        "lines": [
          {
            "speaker": "Guest",
            "before": "Who is at the door?",
            "after": "",
            "fixed": true,
            "th": "ใครอยู่หน้าประตูคะ"
          },
          {
            "speaker": "Crew",
            "before": "May I come ",
            "after": "?",
            "correct": "in",
            "options": [
              "in",
              "out",
              "away",
              "back"
            ],
            "th": "ขอเข้าไปได้ไหมคะ",
            "phraseId": "cruise-p-cabin-007",
            "feedback": "Identify yourself first and wait for permission.",
            "id": "cruise-dialogue-housekeeping-visit-2"
          },
          {
            "speaker": "Guest",
            "before": "Please come back later.",
            "after": "",
            "fixed": true,
            "th": "กรุณากลับมาภายหลังค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "What time would be convenient for ",
            "after": "?",
            "correct": "cleaning",
            "options": [
              "cleaning",
              "dining",
              "boarding",
              "refunding"
            ],
            "th": "สะดวกให้ทำความสะอาดกี่โมงคะ",
            "phraseId": "cruise-p-cabin-011",
            "feedback": "Check the requested time against the work schedule.",
            "id": "cruise-dialogue-housekeeping-visit-4"
          },
          {
            "speaker": "Guest",
            "before": "My laundry is ready.",
            "after": "",
            "fixed": true,
            "th": "เตรียมเสื้อผ้าส่งซักแล้วค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "May I collect your ",
            "after": " bag?",
            "correct": "laundry",
            "options": [
              "laundry",
              "hand",
              "shopping",
              "travel"
            ],
            "th": "ขอรับถุงเสื้อผ้าส่งซักได้ไหมคะ",
            "phraseId": "cruise-p-cabin-016",
            "feedback": "Confirm the laundry form and applicable charges.",
            "id": "cruise-dialogue-housekeeping-visit-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-cabin-007",
          "cruise-p-cabin-011",
          "cruise-p-cabin-016"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "dinner-order",
        "title": "Taking a dinner order",
        "th": "รับรายการอาหารเย็น",
        "lines": [
          {
            "speaker": "Guest",
            "before": "We would like dinner.",
            "after": "",
            "fixed": true,
            "th": "ต้องการรับประทานอาหารเย็นค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Do you have a ",
            "after": "?",
            "correct": "reservation",
            "options": [
              "reservation",
              "blanket",
              "suitcase",
              "passport"
            ],
            "th": "จองโต๊ะไว้ไหมคะ",
            "phraseId": "cruise-p-dining-008",
            "feedback": "Check the reservation before seating.",
            "id": "cruise-dialogue-dinner-order-2"
          },
          {
            "speaker": "Guest",
            "before": "We are still choosing.",
            "after": "",
            "fixed": true,
            "th": "ยังเลือกอาหารอยู่ค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Would you like a few more ",
            "after": "?",
            "correct": "minutes",
            "options": [
              "minutes",
              "blankets",
              "charges",
              "tickets"
            ],
            "th": "ต้องการเวลาอีกสักครู่ไหมคะ",
            "phraseId": "cruise-p-dining-010",
            "feedback": "Offer time before taking the order.",
            "id": "cruise-dialogue-dinner-order-4"
          },
          {
            "speaker": "Guest",
            "before": "That is everything we would like.",
            "after": "",
            "fixed": true,
            "th": "สั่งครบแล้วค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "May I repeat your ",
            "after": "?",
            "correct": "order",
            "options": [
              "order",
              "cabin",
              "passport",
              "luggage"
            ],
            "th": "ขอทวนรายการอาหารได้ไหมคะ",
            "phraseId": "cruise-p-dining-015",
            "feedback": "Read back dishes and important special requests.",
            "id": "cruise-dialogue-dinner-order-6"
          }
        ],
        "level": 1,
        "phraseIds": [
          "cruise-p-dining-008",
          "cruise-p-dining-010",
          "cruise-p-dining-015"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "food-allergy",
        "title": "Checking a food allergy",
        "th": "ตรวจสอบอาการแพ้อาหาร",
        "lines": [
          {
            "speaker": "Guest",
            "before": "I need to check the ingredients.",
            "after": "",
            "fixed": true,
            "th": "ต้องตรวจสอบส่วนผสมค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Do you have any food ",
            "after": "?",
            "correct": "allergies",
            "options": [
              "allergies",
              "tickets",
              "blankets",
              "charges"
            ],
            "th": "มีอาการแพ้อาหารอะไรไหมคะ",
            "phraseId": "cruise-p-dining-011",
            "feedback": "Pass allergy information to the responsible food-service team.",
            "id": "cruise-dialogue-food-allergy-2"
          },
          {
            "speaker": "Guest",
            "before": "Does this contain peanuts?",
            "after": "",
            "fixed": true,
            "th": "อาหารนี้มีถั่วลิสงไหมคะ"
          },
          {
            "speaker": "Crew",
            "before": "I will check the ingredients with the ",
            "after": ".",
            "correct": "chef",
            "options": [
              "chef",
              "captain",
              "steward",
              "tour guide"
            ],
            "th": "จะตรวจสอบส่วนผสมกับเชฟค่ะ",
            "phraseId": "cruise-p-dining-012",
            "feedback": "Never guess about allergens.",
            "id": "cruise-dialogue-food-allergy-4"
          },
          {
            "speaker": "Guest",
            "before": "Is this safe for my allergy?",
            "after": "",
            "fixed": true,
            "th": "อาหารนี้ปลอดภัยสำหรับอาการแพ้ของฉันไหมคะ"
          },
          {
            "speaker": "Crew",
            "before": "I cannot ",
            "after": " that yet; let me check with the kitchen.",
            "correct": "confirm",
            "options": [
              "confirm",
              "deliver",
              "pay",
              "clear"
            ],
            "th": "ยังยืนยันไม่ได้ค่ะ ขอสอบถามครัวก่อน",
            "phraseId": "cruise-p-dining-013",
            "feedback": "Do not promise allergen safety without confirmation.",
            "id": "cruise-dialogue-food-allergy-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-dining-011",
          "cruise-p-dining-012",
          "cruise-p-dining-013"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "drink-order",
        "title": "Checking a drink order",
        "th": "ตรวจสอบรายการเครื่องดื่ม",
        "lines": [
          {
            "speaker": "Guest",
            "before": "May I have some water?",
            "after": "",
            "fixed": true,
            "th": "ขอน้ำได้ไหมคะ"
          },
          {
            "speaker": "Crew",
            "before": "Would you like still or ",
            "after": " water?",
            "correct": "sparkling",
            "options": [
              "sparkling",
              "broken",
              "missing",
              "blocked"
            ],
            "th": "ต้องการน้ำเปล่าหรือน้ำอัดก๊าซคะ",
            "phraseId": "cruise-p-bar-007",
            "feedback": "Confirm the drink and any applicable charge.",
            "id": "cruise-dialogue-drink-order-2"
          },
          {
            "speaker": "Guest",
            "before": "I would like an orange juice.",
            "after": "",
            "fixed": true,
            "th": "ต้องการน้ำส้มค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Would you like ",
            "after": "?",
            "correct": "ice",
            "options": [
              "ice",
              "cutlery",
              "laundry",
              "soap"
            ],
            "th": "ต้องการน้ำแข็งไหมคะ",
            "phraseId": "cruise-p-bar-008",
            "feedback": "Check the guest's preference.",
            "id": "cruise-dialogue-drink-order-4"
          },
          {
            "speaker": "Guest",
            "before": "Is this drink included?",
            "after": "",
            "fixed": true,
            "th": "เครื่องดื่มนี้รวมในแพ็กเกจไหมคะ"
          },
          {
            "speaker": "Crew",
            "before": "Let me check whether this is included in your ",
            "after": ".",
            "correct": "package",
            "options": [
              "package",
              "passport",
              "cabin",
              "luggage"
            ],
            "th": "ขอตรวจสอบว่ารวมในแพ็กเกจของคุณหรือไม่ค่ะ",
            "phraseId": "cruise-p-bar-010",
            "feedback": "Check the current package conditions.",
            "id": "cruise-dialogue-drink-order-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-bar-007",
          "cruise-p-bar-008",
          "cruise-p-bar-010"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "ship-directions",
        "title": "Giving clear ship directions",
        "th": "บอกทางบนเรือให้ชัดเจน",
        "lines": [
          {
            "speaker": "Guest",
            "before": "Where is the theatre?",
            "after": "",
            "fixed": true,
            "th": "โรงละครอยู่ที่ไหนคะ"
          },
          {
            "speaker": "Crew",
            "before": "Let me show you on the deck ",
            "after": ".",
            "correct": "plan",
            "options": [
              "plan",
              "charge",
              "ticket",
              "glass"
            ],
            "th": "ให้ชี้บนแผนผังดาดฟ้านะคะ",
            "phraseId": "cruise-p-shipinfo-007",
            "feedback": "Use the actual ship plan.",
            "id": "cruise-dialogue-ship-directions-2"
          },
          {
            "speaker": "Guest",
            "before": "Which way should I turn?",
            "after": "",
            "fixed": true,
            "th": "ควรเลี้ยวทางไหนคะ"
          },
          {
            "speaker": "Crew",
            "before": "Turn left at the end of the ",
            "after": ".",
            "correct": "corridor",
            "options": [
              "corridor",
              "statement",
              "menu",
              "plate"
            ],
            "th": "เลี้ยวซ้ายสุดทางเดินค่ะ",
            "phraseId": "cruise-p-shipinfo-008",
            "feedback": "Training route only; verify the real route before using.",
            "id": "cruise-dialogue-ship-directions-4"
          },
          {
            "speaker": "Guest",
            "before": "What is happening this afternoon?",
            "after": "",
            "fixed": true,
            "th": "บ่ายนี้มีกิจกรรมอะไรคะ"
          },
          {
            "speaker": "Crew",
            "before": "Let me check the latest ",
            "after": " for you.",
            "correct": "programme",
            "options": [
              "programme",
              "pillow",
              "cutlery",
              "soap"
            ],
            "th": "ขอตรวจสอบกำหนดการล่าสุดให้ค่ะ",
            "phraseId": "cruise-p-shipinfo-012",
            "feedback": "Use current onboard information.",
            "id": "cruise-dialogue-ship-directions-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-shipinfo-007",
          "cruise-p-shipinfo-008",
          "cruise-p-shipinfo-012"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "accessible-route",
        "title": "Checking an accessible route",
        "th": "ตรวจสอบเส้นทางที่เข้าถึงได้",
        "lines": [
          {
            "speaker": "Guest",
            "before": "I am having difficulty here.",
            "after": "",
            "fixed": true,
            "th": "ตรงนี้ทำได้ลำบากค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Would you like ",
            "after": "?",
            "correct": "assistance",
            "options": [
              "assistance",
              "payment",
              "laundry",
              "boarding"
            ],
            "th": "ต้องการความช่วยเหลือไหมคะ",
            "phraseId": "cruise-p-care-007",
            "feedback": "Ask before helping or touching mobility equipment.",
            "id": "cruise-dialogue-accessible-route-2"
          },
          {
            "speaker": "Guest",
            "before": "I need a little support.",
            "after": "",
            "fixed": true,
            "th": "ต้องการความช่วยเหลือเล็กน้อยค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "How can I help you most ",
            "after": "?",
            "correct": "comfortably",
            "options": [
              "comfortably",
              "expensively",
              "secretly",
              "late"
            ],
            "th": "ให้ช่วยอย่างไรจึงจะสบายที่สุดคะ",
            "phraseId": "cruise-p-care-008",
            "feedback": "Let the person explain their preference.",
            "id": "cruise-dialogue-accessible-route-4"
          },
          {
            "speaker": "Guest",
            "before": "Can my wheelchair get to the restaurant?",
            "after": "",
            "fixed": true,
            "th": "ใช้รถเข็นไปห้องอาหารได้ไหมคะ"
          },
          {
            "speaker": "Crew",
            "before": "May I check the ",
            "after": " route to the restaurant?",
            "correct": "step-free",
            "options": [
              "step-free",
              "cancelled",
              "blocked",
              "restricted"
            ],
            "th": "ขอตรวจสอบเส้นทางไปห้องอาหารที่ไม่มีขั้นบันไดได้ไหมคะ",
            "phraseId": "cruise-p-care-011",
            "feedback": "Verify the actual route and any current restrictions.",
            "id": "cruise-dialogue-accessible-route-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-care-007",
          "cruise-p-care-008",
          "cruise-p-care-011"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "tour-meeting",
        "title": "Finding a tour meeting point",
        "th": "หาจุดนัดพบทัวร์",
        "lines": [
          {
            "speaker": "Guest",
            "before": "I am looking for my tour.",
            "after": "",
            "fixed": true,
            "th": "กำลังหาทัวร์ที่จองไว้ค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "What is your tour ",
            "after": "?",
            "correct": "name",
            "options": [
              "name",
              "temperature",
              "colour",
              "balance"
            ],
            "th": "ทัวร์ชื่ออะไรคะ",
            "phraseId": "cruise-p-excursion-007",
            "feedback": "Identify the tour before giving instructions.",
            "id": "cruise-dialogue-tour-meeting-2"
          },
          {
            "speaker": "Guest",
            "before": "Where should I meet my group?",
            "after": "",
            "fixed": true,
            "th": "ควรพบกลุ่มที่ไหนคะ"
          },
          {
            "speaker": "Crew",
            "before": "May I check your tour ",
            "after": "?",
            "correct": "ticket",
            "options": [
              "ticket",
              "towel",
              "glass",
              "fork"
            ],
            "th": "ขอตรวจตั๋วทัวร์ได้ไหมคะ",
            "phraseId": "cruise-p-excursion-008",
            "feedback": "Use the current ticket and meeting instructions.",
            "id": "cruise-dialogue-tour-meeting-4"
          },
          {
            "speaker": "Guest",
            "before": "Do we meet at the gangway?",
            "after": "",
            "fixed": true,
            "th": "พบกันที่สะพานขึ้นลงเรือใช่ไหมคะ"
          },
          {
            "speaker": "Crew",
            "before": "Please check the ",
            "after": " point on your ticket.",
            "correct": "meeting",
            "options": [
              "meeting",
              "boiling",
              "selling",
              "charging"
            ],
            "th": "กรุณาตรวจสอบจุดนัดพบบนตั๋วค่ะ",
            "phraseId": "cruise-p-excursion-011",
            "feedback": "Do not assume every tour uses the same location.",
            "id": "cruise-dialogue-tour-meeting-6"
          }
        ],
        "level": 1,
        "phraseIds": [
          "cruise-p-excursion-007",
          "cruise-p-excursion-008",
          "cruise-p-excursion-011"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "return-time",
        "title": "Checking times in port",
        "th": "ตรวจสอบเวลาในท่าเรือ",
        "lines": [
          {
            "speaker": "Guest",
            "before": "What time must we come back?",
            "after": "",
            "fixed": true,
            "th": "ต้องกลับกี่โมงคะ"
          },
          {
            "speaker": "Crew",
            "before": "Please confirm the all ",
            "after": " time before going ashore.",
            "correct": "aboard",
            "options": [
              "aboard",
              "abroad",
              "around",
              "along"
            ],
            "th": "กรุณายืนยันเวลาที่ทุกคนต้องกลับขึ้นเรือก่อนขึ้นฝั่งค่ะ",
            "phraseId": "cruise-p-excursion-009",
            "feedback": "Distinguish the required return time from departure time.",
            "id": "cruise-dialogue-return-time-2"
          },
          {
            "speaker": "Guest",
            "before": "My phone shows a different time.",
            "after": "",
            "fixed": true,
            "th": "โทรศัพท์แสดงเวลาไม่ตรงกันค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Let me check whether that time is ship time or ",
            "after": " time.",
            "correct": "local",
            "options": [
              "local",
              "departure",
              "arrival",
              "dining"
            ],
            "th": "ขอตรวจสอบว่าเวลานั้นเป็นเวลาบนเรือหรือเวลาท้องถิ่นค่ะ",
            "phraseId": "cruise-p-excursion-010",
            "feedback": "Never assume the two clocks match.",
            "id": "cruise-dialogue-return-time-4"
          },
          {
            "speaker": "Guest",
            "before": "Why has our tour not started?",
            "after": "",
            "fixed": true,
            "th": "ทำไมทัวร์ยังไม่เริ่มคะ"
          },
          {
            "speaker": "Crew",
            "before": "I will check the latest information about the ",
            "after": ".",
            "correct": "delay",
            "options": [
              "delay",
              "menu",
              "soap",
              "pillow"
            ],
            "th": "จะตรวจสอบข้อมูลล่าสุดเกี่ยวกับความล่าช้าค่ะ",
            "phraseId": "cruise-p-excursion-012",
            "feedback": "Give verified information without inventing a reason.",
            "id": "cruise-dialogue-return-time-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-excursion-009",
          "cruise-p-excursion-010",
          "cruise-p-excursion-012"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "account-review",
        "title": "Reviewing the onboard account",
        "th": "ตรวจสอบบัญชีค่าใช้จ่ายบนเรือ",
        "lines": [
          {
            "speaker": "Guest",
            "before": "I do not recognise this charge.",
            "after": "",
            "fixed": true,
            "th": "ไม่รู้จักค่าใช้จ่ายรายการนี้ค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Which ",
            "after": " would you like me to check?",
            "correct": "charge",
            "options": [
              "charge",
              "cabin",
              "tour",
              "towel"
            ],
            "th": "ต้องการให้ตรวจสอบค่าใช้จ่ายรายการไหนคะ",
            "phraseId": "cruise-p-account-001",
            "feedback": "Refer to the actual account statement.",
            "id": "cruise-dialogue-account-review-2"
          },
          {
            "speaker": "Guest",
            "before": "This payment appears twice.",
            "after": "",
            "fixed": true,
            "th": "รายการชำระนี้ปรากฏสองครั้งค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "I will ask the accounts team to review the ",
            "after": " charge.",
            "correct": "duplicate",
            "options": [
              "duplicate",
              "clean",
              "quiet",
              "empty"
            ],
            "th": "จะขอให้ฝ่ายบัญชีตรวจสอบการเรียกเก็บเงินซ้ำค่ะ",
            "phraseId": "cruise-p-account-005",
            "feedback": "Verify the transactions before promising a correction.",
            "id": "cruise-dialogue-account-review-4"
          },
          {
            "speaker": "Guest",
            "before": "Can I review my charges?",
            "after": "",
            "fixed": true,
            "th": "ตรวจสอบค่าใช้จ่ายได้ไหมคะ"
          },
          {
            "speaker": "Crew",
            "before": "Would you like a copy of your ",
            "after": "?",
            "correct": "statement",
            "options": [
              "statement",
              "blanket",
              "fork",
              "shampoo"
            ],
            "th": "ต้องการสำเนารายการบัญชีไหมคะ",
            "phraseId": "cruise-p-account-003",
            "feedback": "Provide access through the authorised process.",
            "id": "cruise-dialogue-account-review-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-account-001",
          "cruise-p-account-005",
          "cruise-p-account-003"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "service-concern",
        "title": "Following up a service concern",
        "th": "ติดตามข้อกังวลเรื่องบริการ",
        "lines": [
          {
            "speaker": "Guest",
            "before": "I want to make a complaint.",
            "after": "",
            "fixed": true,
            "th": "ต้องการร้องเรียนค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Please tell me what ",
            "after": ".",
            "correct": "happened",
            "options": [
              "happened",
              "cost",
              "opened",
              "folded"
            ],
            "th": "กรุณาเล่าให้ฟังว่าเกิดอะไรขึ้นค่ะ",
            "phraseId": "cruise-p-complaints-007",
            "feedback": "Listen first and do not argue.",
            "id": "cruise-dialogue-service-concern-2"
          },
          {
            "speaker": "Guest",
            "before": "Those are all the details.",
            "after": "",
            "fixed": true,
            "th": "รายละเอียดมีเท่านี้ค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Let me make sure I have recorded this ",
            "after": ".",
            "correct": "correctly",
            "options": [
              "correctly",
              "slowly",
              "loudly",
              "early"
            ],
            "th": "ขอตรวจสอบว่าบันทึกเรื่องนี้ถูกต้องค่ะ",
            "phraseId": "cruise-p-complaints-009",
            "feedback": "Read back the essential facts.",
            "id": "cruise-dialogue-service-concern-4"
          },
          {
            "speaker": "Guest",
            "before": "Please let me know what happens.",
            "after": "",
            "fixed": true,
            "th": "ช่วยแจ้งผลให้ทราบด้วยค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "May I confirm how you would like us to ",
            "after": " you?",
            "correct": "contact",
            "options": [
              "contact",
              "charge",
              "board",
              "serve"
            ],
            "th": "ขอยืนยันช่องทางที่สะดวกให้ติดต่อได้ไหมคะ",
            "phraseId": "cruise-p-complaints-011",
            "feedback": "Agree on a suitable, private contact method.",
            "id": "cruise-dialogue-service-concern-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-complaints-007",
          "cruise-p-complaints-009",
          "cruise-p-complaints-011"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "medical-help",
        "title": "Seeking medical assistance",
        "th": "ขอความช่วยเหลือทางการแพทย์",
        "lines": [
          {
            "speaker": "Guest",
            "before": "I feel unwell.",
            "after": "",
            "fixed": true,
            "th": "รู้สึกไม่สบายค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "I will contact the ",
            "after": " team for you.",
            "correct": "medical",
            "options": [
              "medical",
              "accounts",
              "entertainment",
              "dining"
            ],
            "th": "จะติดต่อทีมแพทย์ให้ค่ะ",
            "phraseId": "cruise-p-care-010",
            "feedback": "Seek appropriate help rather than diagnosing or prescribing.",
            "id": "cruise-dialogue-medical-help-2"
          },
          {
            "speaker": "Guest",
            "before": "I feel a little dizzy.",
            "after": "",
            "fixed": true,
            "th": "รู้สึกเวียนศีรษะเล็กน้อยค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Please tell me if you feel ",
            "after": ".",
            "correct": "unsteady",
            "options": [
              "unsteady",
              "included",
              "booked",
              "charged"
            ],
            "th": "กรุณาบอกหากรู้สึกทรงตัวไม่มั่นคงค่ะ",
            "phraseId": "cruise-p-care-012",
            "feedback": "Contact the appropriate team and avoid unsupported reassurance.",
            "id": "cruise-dialogue-medical-help-4"
          },
          {
            "speaker": "Guest",
            "before": "I cannot hear you clearly.",
            "after": "",
            "fixed": true,
            "th": "ได้ยินไม่ชัดค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Would you prefer ",
            "after": " information?",
            "correct": "written",
            "options": [
              "written",
              "frozen",
              "washed",
              "folded"
            ],
            "th": "ต้องการข้อมูลเป็นลายลักษณ์อักษรไหมคะ",
            "phraseId": "cruise-p-care-009",
            "feedback": "Offer an alternative communication method.",
            "id": "cruise-dialogue-medical-help-6"
          }
        ],
        "level": 1,
        "phraseIds": [
          "cruise-p-care-010",
          "cruise-p-care-012",
          "cruise-p-care-009"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "handwashing",
        "title": "Handwashing and supplies",
        "th": "การล้างมือและอุปกรณ์",
        "lines": [
          {
            "speaker": "Guest",
            "before": "Is there somewhere to wash my hands?",
            "after": "",
            "fixed": true,
            "th": "มีที่ล้างมือไหมคะ"
          },
          {
            "speaker": "Crew",
            "before": "Please wash your hands with ",
            "after": " and water.",
            "correct": "soap",
            "options": [
              "soap",
              "oil",
              "juice",
              "sauce"
            ],
            "th": "กรุณาล้างมือด้วยสบู่และน้ำค่ะ",
            "phraseId": "cruise-p-hygiene-001",
            "feedback": "Hand sanitiser is not a substitute for handwashing against norovirus.",
            "id": "cruise-dialogue-handwashing-2"
          },
          {
            "speaker": "Guest",
            "before": "There is no soap at the washbasin.",
            "after": "",
            "fixed": true,
            "th": "ไม่มีสบู่ที่อ่างล้างมือค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "I will report that the soap dispenser is ",
            "after": ".",
            "correct": "empty",
            "options": [
              "empty",
              "included",
              "booked",
              "early"
            ],
            "th": "จะรายงานว่าที่จ่ายสบู่หมดค่ะ",
            "phraseId": "cruise-p-hygiene-004",
            "feedback": "Arrange replenishment through the appropriate team.",
            "id": "cruise-dialogue-handwashing-4"
          },
          {
            "speaker": "Guest",
            "before": "Where can I wash my hands?",
            "after": "",
            "fixed": true,
            "th": "ล้างมือได้ที่ไหนคะ"
          },
          {
            "speaker": "Crew",
            "before": "Please use the ",
            "after": " indicated by the crew.",
            "correct": "washbasin",
            "options": [
              "washbasin",
              "minibar",
              "safe",
              "lifeboat"
            ],
            "th": "กรุณาใช้อ่างล้างมือที่ลูกเรือแนะนำค่ะ",
            "phraseId": "cruise-p-hygiene-005",
            "feedback": "Direct the guest to an available handwashing facility.",
            "id": "cruise-dialogue-handwashing-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-hygiene-001",
          "cruise-p-hygiene-004",
          "cruise-p-hygiene-005"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "crew-handover",
        "title": "A clear crew handover",
        "th": "ส่งมอบงานลูกเรือให้ชัดเจน",
        "lines": [
          {
            "speaker": "Colleague",
            "before": "The guest needs more blankets.",
            "after": "",
            "fixed": true,
            "th": "ลูกค้าต้องการผ้าห่มเพิ่ม"
          },
          {
            "speaker": "Crew",
            "before": "Please record the cabin number and the ",
            "after": ".",
            "correct": "request",
            "options": [
              "request",
              "dessert",
              "fragrance",
              "currency"
            ],
            "th": "กรุณาบันทึกหมายเลขห้องและคำขอ",
            "phraseId": "cruise-p-crewtalk-007",
            "feedback": "Staff handover language, not guest-facing language.",
            "id": "cruise-dialogue-crew-handover-2"
          },
          {
            "speaker": "Colleague",
            "before": "The repair is not finished yet.",
            "after": "",
            "fixed": true,
            "th": "ยังซ่อมไม่เสร็จ"
          },
          {
            "speaker": "Crew",
            "before": "Please tell the next ",
            "after": " about the maintenance request.",
            "correct": "shift",
            "options": [
              "shift",
              "meal",
              "port",
              "ticket"
            ],
            "th": "กรุณาแจ้งกะถัดไปเรื่องคำขอซ่อมบำรุง",
            "phraseId": "cruise-p-crewtalk-009",
            "feedback": "Include the current status without claiming completion.",
            "id": "cruise-dialogue-crew-handover-4"
          },
          {
            "speaker": "Colleague",
            "before": "We are still waiting for a reply.",
            "after": "",
            "fixed": true,
            "th": "ยังรอคำตอบอยู่"
          },
          {
            "speaker": "Crew",
            "before": "Has the guest been ",
            "after": " about the delay?",
            "correct": "updated",
            "options": [
              "updated",
              "washed",
              "charged",
              "boarded"
            ],
            "th": "แจ้งลูกค้าเรื่องความล่าช้าแล้วหรือยัง",
            "phraseId": "cruise-p-crewtalk-010",
            "feedback": "Check communication as well as task completion.",
            "id": "cruise-dialogue-crew-handover-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-crewtalk-007",
          "cruise-p-crewtalk-009",
          "cruise-p-crewtalk-010"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "departure-day",
        "title": "Preparing to disembark",
        "th": "เตรียมลงจากเรือ",
        "lines": [
          {
            "speaker": "Guest",
            "before": "We are ready to leave.",
            "after": "",
            "fixed": true,
            "th": "พร้อมออกแล้วค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Have you checked your cabin for ",
            "after": "?",
            "correct": "belongings",
            "options": [
              "belongings",
              "departures",
              "discounts",
              "charges"
            ],
            "th": "ตรวจสอบของส่วนตัวในห้องพักแล้วไหมคะ",
            "phraseId": "cruise-p-farewell-007",
            "feedback": "Give a helpful reminder without delaying official instructions.",
            "id": "cruise-dialogue-departure-day-2"
          },
          {
            "speaker": "Guest",
            "before": "Can we leave now?",
            "after": "",
            "fixed": true,
            "th": "ลงจากเรือตอนนี้ได้ไหมคะ"
          },
          {
            "speaker": "Crew",
            "before": "Please follow the current disembarkation ",
            "after": ".",
            "correct": "instructions",
            "options": [
              "instructions",
              "blankets",
              "payments",
              "menus"
            ],
            "th": "กรุณาปฏิบัติตามคำแนะนำการลงจากเรือปัจจุบันค่ะ",
            "phraseId": "cruise-p-farewell-008",
            "feedback": "Check the assigned group and instructions.",
            "id": "cruise-dialogue-departure-day-4"
          },
          {
            "speaker": "Guest",
            "before": "Where is our airport bus?",
            "after": "",
            "fixed": true,
            "th": "รถไปสนามบินอยู่ที่ไหนคะ"
          },
          {
            "speaker": "Crew",
            "before": "Let me check where your ",
            "after": " meets.",
            "correct": "transfer",
            "options": [
              "transfer",
              "dessert",
              "receipt",
              "towel"
            ],
            "th": "ขอตรวจสอบจุดนัดพบบริการรับส่งค่ะ",
            "phraseId": "cruise-p-farewell-009",
            "feedback": "Confirm the actual transport booking.",
            "id": "cruise-dialogue-departure-day-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-farewell-007",
          "cruise-p-farewell-008",
          "cruise-p-farewell-009"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "clarify-request",
        "title": "Clarifying a guest request",
        "th": "ทำความเข้าใจคำขอของลูกค้า",
        "lines": [
          {
            "speaker": "Guest",
            "before": "I need something for my cabin.",
            "after": "",
            "fixed": true,
            "th": "ต้องการของบางอย่างในห้องพักค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Could you ",
            "after": " that, please?",
            "correct": "repeat",
            "options": [
              "repeat",
              "deliver",
              "wash",
              "charge"
            ],
            "th": "ช่วยพูดซ้ำอีกครั้งได้ไหมคะ",
            "phraseId": "cruise-p-clarifying-001",
            "feedback": "Ask again rather than guessing.",
            "id": "cruise-dialogue-clarify-request-2"
          },
          {
            "speaker": "Guest",
            "before": "We are on deck fourteen.",
            "after": "",
            "fixed": true,
            "th": "อยู่ดาดฟ้าสิบสี่ค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Did you say deck four or deck ",
            "after": "?",
            "correct": "fourteen",
            "options": [
              "fourteen",
              "forward",
              "further",
              "follow"
            ],
            "th": "พูดว่าดาดฟ้าสี่หรือสิบสี่คะ",
            "phraseId": "cruise-p-clarifying-003",
            "feedback": "Check similar-sounding numbers.",
            "id": "cruise-dialogue-clarify-request-4"
          },
          {
            "speaker": "Guest",
            "before": "We need two towels and one blanket.",
            "after": "",
            "fixed": true,
            "th": "ต้องการผ้าขนหนูสองผืนและผ้าห่มหนึ่งผืนค่ะ"
          },
          {
            "speaker": "Crew",
            "before": "Let me repeat that to make sure I ",
            "after": ".",
            "correct": "understood",
            "options": [
              "understood",
              "delivered",
              "charged",
              "boarded"
            ],
            "th": "ขอทวนเพื่อให้แน่ใจว่าเข้าใจถูกต้องค่ะ",
            "phraseId": "cruise-p-clarifying-005",
            "feedback": "Read back item names and quantities.",
            "id": "cruise-dialogue-clarify-request-6"
          }
        ],
        "level": 2,
        "phraseIds": [
          "cruise-p-clarifying-001",
          "cruise-p-clarifying-003",
          "cruise-p-clarifying-005"
        ],
        "trainingExample": true,
        "topic": "communication",
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-cruise-01",
        "title": "Delivering extra towels",
        "th": "ส่งผ้าขนหนูเพิ่มเติม",
        "lines": [
          {
            "speaker": "Guest",
            "before": "Could I have two extra towels?",
            "after": "",
            "fixed": true,
            "th": "ขอผ้าขนหนูเพิ่มสองผืนได้ไหมคะ"
          },
          {
            "id": "cruise-dialogue-extra-01-1",
            "speaker": "Crew",
            "before": "Certainly. May I ",
            "after": " your cabin number?",
            "th": "ได้ค่ะ ขอทวนหมายเลขห้องพักค่ะ",
            "correct": "confirm",
            "options": [
              "confirm",
              "cancel",
              "repair",
              "charge"
            ],
            "feedback": "The complete response is: Certainly. May I confirm your cabin number?",
            "feedbackTh": "ได้ค่ะ ขอทวนหมายเลขห้องพักค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "It is cabin 412.",
            "after": "",
            "fixed": true,
            "th": "ห้อง 412 ค่ะ"
          },
          {
            "id": "cruise-dialogue-extra-01-3",
            "speaker": "Crew",
            "before": "Thank you. I will request ",
            "after": " towels for that cabin.",
            "th": "ขอบคุณค่ะ จะขอผ้าขนหนูสองผืนให้ห้องนั้นค่ะ",
            "correct": "two",
            "options": [
              "two",
              "six",
              "ten",
              "zero"
            ],
            "feedback": "The complete response is: Thank you. I will request two towels for that cabin.",
            "feedbackTh": "ขอบคุณค่ะ จะขอผ้าขนหนูสองผืนให้ห้องนั้นค่ะ"
          }
        ],
        "level": 1,
        "topic": "cabin",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-cruise-02",
        "title": "Checking the correct meal",
        "th": "ตรวจอาหารที่สั่ง",
        "lines": [
          {
            "speaker": "Guest",
            "before": "I ordered soup, not salad.",
            "after": "",
            "fixed": true,
            "th": "สั่งซุป ไม่ใช่สลัดค่ะ"
          },
          {
            "id": "cruise-dialogue-extra-02-1",
            "speaker": "Crew",
            "before": "I am sorry. Let me check your ",
            "after": ".",
            "th": "ขออภัยค่ะ ขอตรวจคำสั่งอาหารค่ะ",
            "correct": "order",
            "options": [
              "order",
              "cabin",
              "excursion",
              "luggage"
            ],
            "feedback": "The complete response is: I am sorry. Let me check your order.",
            "feedbackTh": "ขออภัยค่ะ ขอตรวจคำสั่งอาหารค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "It was the vegetable soup.",
            "after": "",
            "fixed": true,
            "th": "เป็นซุปผักค่ะ"
          },
          {
            "id": "cruise-dialogue-extra-02-3",
            "speaker": "Crew",
            "before": "Thank you for ",
            "after": ". I will speak to the dining team.",
            "th": "ขอบคุณที่ยืนยันค่ะ จะประสานทีมอาหารค่ะ",
            "correct": "confirming",
            "options": [
              "confirming",
              "cancelling",
              "sailing",
              "boarding"
            ],
            "feedback": "The complete response is: Thank you for confirming. I will speak to the dining team.",
            "feedbackTh": "ขอบคุณที่ยืนยันค่ะ จะประสานทีมอาหารค่ะ"
          }
        ],
        "level": 1,
        "topic": "dining",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-cruise-03",
        "title": "Finding a current meeting point",
        "th": "หาจุดนัดพบปัจจุบัน",
        "lines": [
          {
            "speaker": "Guest",
            "before": "Has the shore-tour meeting point changed?",
            "after": "",
            "fixed": true,
            "th": "จุดนัดพบทัวร์ฝั่งเปลี่ยนไหมคะ"
          },
          {
            "id": "cruise-dialogue-extra-03-1",
            "speaker": "Crew",
            "before": "Let me check today’s excursion ",
            "after": ".",
            "th": "ขอตรวจประกาศทัศนศึกษาของวันนี้ค่ะ",
            "correct": "notice",
            "options": [
              "notice",
              "blanket",
              "receipt",
              "dessert"
            ],
            "feedback": "The complete response is: Let me check today’s excursion notice.",
            "feedbackTh": "ขอตรวจประกาศทัศนศึกษาของวันนี้ค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "My ticket shows the old meeting point.",
            "after": "",
            "fixed": true,
            "th": "ตั๋วระบุจุดนัดพบเดิมค่ะ"
          },
          {
            "id": "cruise-dialogue-extra-03-3",
            "speaker": "Crew",
            "before": "I will confirm the ",
            "after": " location with the excursion team.",
            "th": "จะยืนยันจุดปัจจุบันกับทีมทัศนศึกษาค่ะ",
            "correct": "current",
            "options": [
              "current",
              "previous",
              "yesterday’s",
              "unrelated"
            ],
            "feedback": "The complete response is: I will confirm the current location with the excursion team.",
            "feedbackTh": "จะยืนยันจุดปัจจุบันกับทีมทัศนศึกษาค่ะ"
          }
        ],
        "level": 2,
        "topic": "directions",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-cruise-04",
        "title": "Following up maintenance",
        "th": "ติดตามงานซ่อมบำรุง",
        "lines": [
          {
            "speaker": "Guest",
            "before": "The air conditioning is still not working.",
            "after": "",
            "fixed": true,
            "th": "เครื่องปรับอากาศยังไม่ทำงานค่ะ"
          },
          {
            "id": "cruise-dialogue-extra-04-1",
            "speaker": "Crew",
            "before": "I am sorry. I will follow up on the ",
            "after": " request.",
            "th": "ขออภัยค่ะ จะติดตามคำขอซ่อมบำรุงค่ะ",
            "correct": "maintenance",
            "options": [
              "maintenance",
              "restaurant",
              "excursion",
              "payment"
            ],
            "feedback": "The complete response is: I am sorry. I will follow up on the maintenance request.",
            "feedbackTh": "ขออภัยค่ะ จะติดตามคำขอซ่อมบำรุงค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "Could the team come while I am in the cabin?",
            "after": "",
            "fixed": true,
            "th": "ทีมมาตรวจตอนที่ฉันอยู่ในห้องได้ไหมคะ"
          },
          {
            "id": "cruise-dialogue-extra-04-3",
            "speaker": "Crew",
            "before": "Let me arrange a ",
            "after": " time with you and the team.",
            "th": "ขอนัดเวลาที่เหมาะกับคุณและทีมค่ะ",
            "correct": "suitable",
            "options": [
              "suitable",
              "broken",
              "unpaid",
              "missing"
            ],
            "feedback": "The complete response is: Let me arrange a suitable time with you and the team.",
            "feedbackTh": "ขอนัดเวลาที่เหมาะกับคุณและทีมค่ะ"
          }
        ],
        "level": 2,
        "topic": "cabin",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-cruise-05",
        "title": "Checking an account entry",
        "th": "ตรวจรายการบัญชี",
        "lines": [
          {
            "speaker": "Guest",
            "before": "I do not recognise this account entry.",
            "after": "",
            "fixed": true,
            "th": "ไม่ทราบว่ารายการบัญชีนี้คืออะไรค่ะ"
          },
          {
            "id": "cruise-dialogue-extra-05-1",
            "speaker": "Crew",
            "before": "Let us check the date and ",
            "after": " together.",
            "th": "ขอตรวจวันที่และจำนวนเงินด้วยกันค่ะ",
            "correct": "amount",
            "options": [
              "amount",
              "weather",
              "pressure",
              "pillow"
            ],
            "feedback": "The complete response is: Let us check the date and amount together.",
            "feedbackTh": "ขอตรวจวันที่และจำนวนเงินด้วยกันค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "The same amount appears twice on that date.",
            "after": "",
            "fixed": true,
            "th": "วันนั้นมียอดเท่ากันสองรายการค่ะ"
          },
          {
            "id": "cruise-dialogue-extra-05-3",
            "speaker": "Crew",
            "before": "Thank you. I will ask the account team to review ",
            "after": " entries.",
            "th": "ขอบคุณค่ะ จะให้ทีมบัญชีตรวจทั้งสองรายการค่ะ",
            "correct": "both",
            "options": [
              "both",
              "neither",
              "zero",
              "each other"
            ],
            "feedback": "The complete response is: Thank you. I will ask the account team to review both entries.",
            "feedbackTh": "ขอบคุณค่ะ จะให้ทีมบัญชีตรวจทั้งสองรายการค่ะ"
          }
        ],
        "level": 2,
        "topic": "payment",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-cruise-06",
        "title": "Offering accessible assistance",
        "th": "เสนอความช่วยเหลือด้านการเข้าถึง",
        "lines": [
          {
            "speaker": "Guest",
            "before": "I cannot use the stairs to reach the lounge.",
            "after": "",
            "fixed": true,
            "th": "ใช้บันไดไปห้องรับรองไม่ได้ค่ะ"
          },
          {
            "id": "cruise-dialogue-extra-06-1",
            "speaker": "Crew",
            "before": "Let me check the ",
            "after": " route and available assistance.",
            "th": "ขอตรวจเส้นทางที่เข้าถึงได้และการช่วยเหลือที่มีค่ะ",
            "correct": "accessible",
            "options": [
              "accessible",
              "expensive",
              "cancelled",
              "unpaid"
            ],
            "feedback": "The complete response is: Let me check the accessible route and available assistance.",
            "feedbackTh": "ขอตรวจเส้นทางที่เข้าถึงได้และการช่วยเหลือที่มีค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "Thank you. Please tell me before arranging help.",
            "after": "",
            "fixed": true,
            "th": "ขอบคุณค่ะ กรุณาแจ้งก่อนจัดคนมาช่วยนะคะ"
          },
          {
            "id": "cruise-dialogue-extra-06-3",
            "speaker": "Crew",
            "before": "Of course. I will explain the options and ask what you ",
            "after": ".",
            "th": "ได้ค่ะ จะอธิบายทางเลือกและถามความต้องการก่อนค่ะ",
            "correct": "prefer",
            "options": [
              "prefer",
              "charge",
              "sail",
              "repair"
            ],
            "feedback": "The complete response is: Of course. I will explain the options and ask what you prefer.",
            "feedbackTh": "ได้ค่ะ จะอธิบายทางเลือกและถามความต้องการก่อนค่ะ"
          }
        ],
        "level": 3,
        "topic": "directions",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-cruise-07",
        "title": "Checking ingredients",
        "th": "ตรวจส่วนผสมอาหาร",
        "lines": [
          {
            "speaker": "Guest",
            "before": "Does this sauce contain peanuts?",
            "after": "",
            "fixed": true,
            "th": "ซอสนี้มีถั่วลิสงไหมคะ"
          },
          {
            "id": "cruise-dialogue-extra-07-1",
            "speaker": "Crew",
            "before": "Let me check the ",
            "after": " information with the kitchen.",
            "th": "ขอตรวจข้อมูลส่วนผสมกับครัวค่ะ",
            "correct": "ingredient",
            "options": [
              "ingredient",
              "excursion",
              "payment",
              "luggage"
            ],
            "feedback": "The complete response is: Let me check the ingredient information with the kitchen.",
            "feedbackTh": "ขอตรวจข้อมูลส่วนผสมกับครัวค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "Thank you. I need to know before ordering.",
            "after": "",
            "fixed": true,
            "th": "ขอบคุณค่ะ ต้องทราบก่อนสั่งค่ะ"
          },
          {
            "id": "cruise-dialogue-extra-07-3",
            "speaker": "Crew",
            "before": "I will confirm the information ",
            "after": " taking your order.",
            "th": "จะยืนยันข้อมูลก่อนรับคำสั่งอาหารค่ะ",
            "correct": "before",
            "options": [
              "before",
              "after",
              "despite",
              "since"
            ],
            "feedback": "The complete response is: I will confirm the information before taking your order.",
            "feedbackTh": "จะยืนยันข้อมูลก่อนรับคำสั่งอาหารค่ะ"
          }
        ],
        "level": 3,
        "topic": "dining",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-cruise-08",
        "title": "Checking laundry delivery",
        "th": "ตรวจการส่งเสื้อผ้าซัก",
        "lines": [
          {
            "speaker": "Guest",
            "before": "Has my laundry come back yet?",
            "after": "",
            "fixed": true,
            "th": "เสื้อผ้าที่ส่งซักกลับมาหรือยังคะ"
          },
          {
            "id": "cruise-dialogue-extra-08-1",
            "speaker": "Crew",
            "before": "Let me check the delivery ",
            "after": ".",
            "th": "ขอตรวจสถานะการจัดส่งค่ะ",
            "correct": "status",
            "options": [
              "status",
              "weather",
              "price list",
              "departure"
            ],
            "feedback": "The complete response is: Let me check the delivery status.",
            "feedbackTh": "ขอตรวจสถานะการจัดส่งค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "I handed it in yesterday morning.",
            "after": "",
            "fixed": true,
            "th": "ส่งเมื่อวานตอนเช้าค่ะ"
          },
          {
            "id": "cruise-dialogue-extra-08-3",
            "speaker": "Crew",
            "before": "Thank you. I will pass that ",
            "after": " to the laundry team.",
            "th": "ขอบคุณค่ะ จะแจ้งรายละเอียดนี้ให้ทีมซักรีดค่ะ",
            "correct": "detail",
            "options": [
              "detail",
              "blanket",
              "menu",
              "alarm"
            ],
            "feedback": "The complete response is: Thank you. I will pass that detail to the laundry team.",
            "feedbackTh": "ขอบคุณค่ะ จะแจ้งรายละเอียดนี้ให้ทีมซักรีดค่ะ"
          }
        ],
        "level": 1,
        "topic": "cabin",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-cruise-09",
        "title": "Writing down a time",
        "th": "เขียนเวลานัดหมาย",
        "lines": [
          {
            "speaker": "Guest",
            "before": "Could you write down the confirmed meeting time?",
            "after": "",
            "fixed": true,
            "th": "ช่วยเขียนเวลานัดพบที่ยืนยันแล้วได้ไหมคะ"
          },
          {
            "id": "cruise-dialogue-extra-09-1",
            "speaker": "Crew",
            "before": "Certainly. I will write it ",
            "after": " on this card.",
            "th": "ได้ค่ะ จะเขียนบนบัตรนี้ให้ชัดเจนค่ะ",
            "correct": "clearly",
            "options": [
              "clearly",
              "early",
              "strongly",
              "firmly"
            ],
            "feedback": "The complete response is: Certainly. I will write it clearly on this card.",
            "feedbackTh": "ได้ค่ะ จะเขียนบนบัตรนี้ให้ชัดเจนค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "Thank you. Could you add the meeting place too?",
            "after": "",
            "fixed": true,
            "th": "ขอบคุณค่ะ เพิ่มสถานที่นัดพบด้วยได้ไหมคะ"
          },
          {
            "id": "cruise-dialogue-extra-09-3",
            "speaker": "Crew",
            "before": "Of course. I will add the confirmed ",
            "after": ".",
            "th": "ได้ค่ะ จะเพิ่มสถานที่ที่ยืนยันแล้วค่ะ",
            "correct": "location",
            "options": [
              "location",
              "refund",
              "ingredient",
              "blanket"
            ],
            "feedback": "The complete response is: Of course. I will add the confirmed location.",
            "feedbackTh": "ได้ค่ะ จะเพิ่มสถานที่ที่ยืนยันแล้วค่ะ"
          }
        ],
        "level": 1,
        "topic": "communication",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "practice-cruise-10",
        "title": "Explaining an extra charge",
        "th": "อธิบายค่าใช้จ่ายเพิ่ม",
        "lines": [
          {
            "speaker": "Guest",
            "before": "Is this drink included in my package?",
            "after": "",
            "fixed": true,
            "th": "เครื่องดื่มนี้รวมในแพ็กเกจไหมคะ"
          },
          {
            "id": "cruise-dialogue-extra-10-1",
            "speaker": "Crew",
            "before": "Let me check your package ",
            "after": " first.",
            "th": "ขอตรวจรายละเอียดแพ็กเกจก่อนค่ะ",
            "correct": "details",
            "options": [
              "details",
              "towels",
              "luggage",
              "doors"
            ],
            "feedback": "The complete response is: Let me check your package details first.",
            "feedbackTh": "ขอตรวจรายละเอียดแพ็กเกจก่อนค่ะ"
          },
          {
            "speaker": "Guest",
            "before": "Please tell me the extra cost if it is not included.",
            "after": "",
            "fixed": true,
            "th": "ถ้าไม่รวม กรุณาบอกค่าใช้จ่ายเพิ่มค่ะ"
          },
          {
            "id": "cruise-dialogue-extra-10-3",
            "speaker": "Crew",
            "before": "Certainly. I will confirm the ",
            "after": " before you decide.",
            "th": "ได้ค่ะ จะยืนยันค่าใช้จ่ายก่อนให้ตัดสินใจค่ะ",
            "correct": "charge",
            "options": [
              "charge",
              "cabin",
              "weather",
              "route"
            ],
            "feedback": "The complete response is: Certainly. I will confirm the charge before you decide.",
            "feedbackTh": "ได้ค่ะ จะยืนยันค่าใช้จ่ายก่อนให้ตัดสินใจค่ะ"
          }
        ],
        "level": 2,
        "topic": "payment",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      }
    ],
    "scenario": [
      {
        "id": "cruise-scenario-001",
        "q": "A guest says, “Could I have an extra pillow?” Which reply best responds to this request?",
        "guest": "Could I have an extra pillow?",
        "guestTh": "ขอหมอนเพิ่มได้ไหมคะ",
        "options": [
          "Certainly. I will bring you an extra pillow.",
          "Certainly. I will bring you a menu.",
          "Certainly. I will change your excursion.",
          "Certainly. I will print your account."
        ],
        "correct": 0,
        "explain": "Respond to the requested cabin item.",
        "explainTh": "ตอบให้ตรงกับของใช้ในห้องพักที่ขอ",
        "level": 1,
        "topic": "cabin",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-002",
        "q": "A guest says, “Could I see the menu, please?” Which reply best responds to this request?",
        "guest": "Could I see the menu, please?",
        "guestTh": "ขอดูเมนูหน่อยค่ะ",
        "options": [
          "Of course. Here is the laundry form.",
          "Of course. Here is the menu.",
          "Of course. Here is the deck plan.",
          "Of course. Here is your luggage tag."
        ],
        "correct": 1,
        "explain": "The guest wants to see the dining choices.",
        "explainTh": "ผู้ใช้บริการต้องการดูรายการอาหาร",
        "level": 1,
        "topic": "dining",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-003",
        "q": "A guest says, “Please say the cabin number again.” Which reply best responds to this request?",
        "guest": "Please say the cabin number again.",
        "guestTh": "ช่วยบอกหมายเลขห้องพักอีกครั้งค่ะ",
        "options": [
          "Of course. I will change your room.",
          "Of course. I will repeat the meal price.",
          "Of course. I will repeat the number slowly.",
          "Of course. I will speak more quickly."
        ],
        "correct": 2,
        "explain": "Repeat the specific information requested.",
        "explainTh": "ทวนข้อมูลที่ขอโดยเฉพาะ",
        "level": 1,
        "topic": "communication",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-004",
        "q": "A guest says, “We need two clean towels.” Which reply best responds to this request?",
        "guest": "We need two clean towels.",
        "guestTh": "ต้องการผ้าขนหนูสะอาดสองผืนค่ะ",
        "options": [
          "Certainly. I will take away your pillows.",
          "Certainly. I will bring one menu.",
          "Certainly. I will book a table for two.",
          "Certainly. I will bring two clean towels."
        ],
        "correct": 3,
        "explain": "Confirm both the item and the quantity.",
        "explainTh": "ยืนยันทั้งสิ่งของและจำนวน",
        "level": 1,
        "topic": "cabin",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-005",
        "q": "A guest says, “Could I have water without ice?” Which reply best responds to this request?",
        "guest": "Could I have water without ice?",
        "guestTh": "ขอน้ำไม่ใส่น้ำแข็งค่ะ",
        "options": [
          "Certainly. Water without ice.",
          "Certainly. Water with extra ice.",
          "Certainly. A hot coffee.",
          "Certainly. A glass of juice instead."
        ],
        "correct": 0,
        "explain": "Preserve the guest’s stated preference: no ice.",
        "explainTh": "คงความต้องการที่ระบุ คือไม่ใส่น้ำแข็ง",
        "level": 1,
        "topic": "dining",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-006",
        "q": "A guest says, “Could you show me the lounge on the map?” Which reply best responds to this request?",
        "guest": "Could you show me the lounge on the map?",
        "guestTh": "ช่วยชี้ห้องรับรองบนแผนที่ได้ไหมคะ",
        "options": [
          "Of course. Let me take your food order.",
          "Of course. Let me show you the lounge.",
          "Of course. Let me cancel the lounge booking.",
          "Of course. Let me show you yesterday’s bill."
        ],
        "correct": 1,
        "explain": "Use the requested map to identify the destination.",
        "explainTh": "ใช้แผนที่ชี้จุดหมายตามที่ขอ",
        "level": 1,
        "topic": "directions",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-007",
        "q": "A guest says, “The air conditioning is not working.” Which reply best responds to this request?",
        "guest": "The air conditioning is not working.",
        "guestTh": "เครื่องปรับอากาศไม่ทำงานค่ะ",
        "options": [
          "I am sorry. I will bring the dessert menu.",
          "I am sorry. I will book a shore tour.",
          "I am sorry. I will report it to the maintenance team.",
          "I am sorry. I will change your surname."
        ],
        "correct": 2,
        "explain": "A fault needs to be reported to the relevant team.",
        "explainTh": "รายงานอุปกรณ์ขัดข้องให้ทีมที่รับผิดชอบ",
        "level": 1,
        "topic": "cabin",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-008",
        "q": "A guest says, “Where can I check my onboard account?” Which reply best responds to this request?",
        "guest": "Where can I check my onboard account?",
        "guestTh": "ตรวจสอบบัญชีค่าใช้จ่ายบนเรือได้ที่ไหนคะ",
        "options": [
          "Let me explain how to fold a towel.",
          "Let me choose a new table for you.",
          "Let me take you to an unverified office.",
          "Let me show you the correct account-service point."
        ],
        "correct": 3,
        "explain": "Help the guest find the verified place for account enquiries.",
        "explainTh": "แนะนำจุดบริการตรวจสอบบัญชีที่ยืนยันแล้ว",
        "level": 1,
        "topic": "payment",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-009",
        "q": "A guest says, “A table for two, please.” Which reply best responds to this request?",
        "guest": "A table for two, please.",
        "guestTh": "ขอโต๊ะสำหรับสองคนค่ะ",
        "options": [
          "Certainly. Let me check a table for two.",
          "Certainly. Let me check two cabins.",
          "Certainly. Let me bring two blankets.",
          "Certainly. Let me check a table for six."
        ],
        "correct": 0,
        "explain": "Keep the requested service and number accurate.",
        "explainTh": "ตอบให้ตรงประเภทบริการและจำนวนคน",
        "level": 1,
        "topic": "dining",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-010",
        "q": "A guest says, “Could you speak a little more slowly?” Which reply best responds to this request?",
        "guest": "Could you speak a little more slowly?",
        "guestTh": "ช่วยพูดช้าลงเล็กน้อยได้ไหมคะ",
        "options": [
          "Of course. I will speak more loudly and quickly.",
          "Of course. I will explain it more slowly.",
          "Of course. I will use longer technical terms.",
          "Of course. I will stop answering your question."
        ],
        "correct": 1,
        "explain": "The guest is asking for a slower speaking rate.",
        "explainTh": "ผู้ใช้บริการขอให้พูดช้าลง",
        "level": 1,
        "topic": "communication",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-011",
        "q": "A guest says, “Please do not clean the cabin yet.” Which reply best responds to this request?",
        "guest": "Please do not clean the cabin yet.",
        "guestTh": "ยังไม่ต้องทำความสะอาดห้องพักค่ะ",
        "options": [
          "Of course. I will start cleaning now.",
          "Of course. I will remove your belongings.",
          "Of course. When would a better time be?",
          "Of course. I will leave the door open all day."
        ],
        "correct": 2,
        "explain": "“Not yet” delays the service; ask about a suitable time.",
        "explainTh": "not yet หมายถึงยังไม่ตอนนี้ จึงถามเวลาที่สะดวก",
        "level": 2,
        "topic": "cabin",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-012",
        "q": "A guest says, “Does this dish contain peanuts?” Which reply best responds to this request?",
        "guest": "Does this dish contain peanuts?",
        "guestTh": "อาหารจานนี้มีถั่วลิสงไหมคะ",
        "options": [
          "I cannot see peanuts, so it must be safe.",
          "Every dish on board is peanut-free.",
          "Try a little first and decide.",
          "Let me check the ingredient information with the kitchen."
        ],
        "correct": 3,
        "explain": "Check reliable ingredient information instead of guessing.",
        "explainTh": "ตรวจสอบส่วนผสมกับครัว ไม่เดาจากรูปลักษณ์",
        "level": 2,
        "topic": "dining",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-013",
        "q": "A guest says, “This drink is not in my package. What will it cost?” Which reply best responds to this request?",
        "guest": "This drink is not in my package. What will it cost?",
        "guestTh": "เครื่องดื่มนี้ไม่รวมในแพ็กเกจ ต้องจ่ายเท่าไรคะ",
        "options": [
          "Let me confirm the extra charge before you order.",
          "Let me serve it first and explain later.",
          "All drinks cost the same on every ship.",
          "You must order it before seeing the price."
        ],
        "correct": 0,
        "explain": "Clarify the extra cost before the guest commits.",
        "explainTh": "แจ้งค่าใช้จ่ายเพิ่มก่อนให้ผู้ใช้บริการสั่ง",
        "level": 2,
        "topic": "payment",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-014",
        "q": "A guest says, “Has today’s meeting point changed?” Which reply best responds to this request?",
        "guest": "Has today’s meeting point changed?",
        "guestTh": "จุดนัดพบวันนี้เปลี่ยนหรือไม่คะ",
        "options": [
          "I will use last week’s meeting point.",
          "Let me check the latest notice for today.",
          "Every meeting uses the same place.",
          "Please choose any location yourself."
        ],
        "correct": 1,
        "explain": "Use current information, not an old assumption.",
        "explainTh": "ใช้ประกาศปัจจุบัน ไม่ยึดข้อมูลเก่า",
        "level": 2,
        "topic": "directions",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-015",
        "q": "A guest says, “The shower is leaking and the floor is wet.” Which reply best responds to this request?",
        "guest": "The shower is leaking and the floor is wet.",
        "guestTh": "ฝักบัวรั่วและพื้นเปียกค่ะ",
        "options": [
          "I will mark the cabin as ready without checking.",
          "Please repair the shower yourself.",
          "I will report the leak and arrange help under our procedure.",
          "A wet floor never needs attention."
        ],
        "correct": 2,
        "explain": "Acknowledge the fault and arrange the responsible team’s help.",
        "explainTh": "รับทราบปัญหาและประสานทีมที่รับผิดชอบ",
        "level": 2,
        "topic": "cabin",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-016",
        "q": "A guest says, “Can you write the meeting time on this card?” Which reply best responds to this request?",
        "guest": "Can you write the meeting time on this card?",
        "guestTh": "ช่วยเขียนเวลานัดพบบนบัตรนี้ได้ไหมคะ",
        "options": [
          "Certainly. I will write an estimated price instead.",
          "Certainly. I will change the meeting without asking.",
          "Certainly. I will tell you to remember it.",
          "Certainly. I will write the confirmed time clearly."
        ],
        "correct": 3,
        "explain": "Provide the requested written time after checking it.",
        "explainTh": "เขียนเวลาที่ตรวจสอบแล้วให้ชัดเจน",
        "level": 2,
        "topic": "communication",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-017",
        "q": "A guest says, “The blanket still has not arrived.” Which reply best responds to this request?",
        "guest": "The blanket still has not arrived.",
        "guestTh": "ผ้าห่มยังไม่มาถึงเลยค่ะ",
        "options": [
          "I am sorry. Let me follow up on the delivery.",
          "It must have arrived because I requested it.",
          "Please make a new booking for a cabin.",
          "I will close the request without checking."
        ],
        "correct": 0,
        "explain": "Requesting an item is not the same as confirming delivery.",
        "explainTh": "การส่งคำขอต่างจากการยืนยันว่าส่งถึงแล้ว",
        "level": 2,
        "topic": "cabin",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-018",
        "q": "A guest says, “Which time should I use for returning to the ship?” Which reply best responds to this request?",
        "guest": "Which time should I use for returning to the ship?",
        "guestTh": "ควรยึดเวลาใดในการกลับขึ้นเรือคะ",
        "options": [
          "Use any clock you find ashore.",
          "Let me confirm the ship’s current time and all-aboard instructions.",
          "All local clocks always match ship’s time.",
          "There is no need to check the return instructions."
        ],
        "correct": 1,
        "explain": "Confirm the current instructions rather than assuming times match.",
        "explainTh": "ตรวจคำแนะนำปัจจุบัน ไม่ถือว่าเวลาทุกแห่งตรงกัน",
        "level": 2,
        "topic": "directions",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-019",
        "q": "A guest says, “I think I was charged twice for the same item.” Which reply best responds to this request?",
        "guest": "I think I was charged twice for the same item.",
        "guestTh": "คิดว่ารายการเดียวถูกคิดเงินสองครั้งค่ะ",
        "options": [
          "Please pay both entries without checking.",
          "I will add a third entry now.",
          "Let us check both entries on your account.",
          "Two entries always mean two separate purchases."
        ],
        "correct": 2,
        "explain": "Compare the entries before deciding whether a charge is duplicated.",
        "explainTh": "ตรวจรายการทั้งสองก่อนสรุปว่าคิดซ้ำหรือไม่",
        "level": 2,
        "topic": "payment",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-020",
        "q": "A guest says, “We ordered soup, but these are salads.” Which reply best responds to this request?",
        "guest": "We ordered soup, but these are salads.",
        "guestTh": "สั่งซุป แต่ได้รับสลัดค่ะ",
        "options": [
          "You should accept the salads without asking.",
          "I will cancel your cabin booking instead.",
          "Soup and salad are exactly the same.",
          "I am sorry. Let me check your order with the team."
        ],
        "correct": 3,
        "explain": "Acknowledge the mismatch and verify the original order.",
        "explainTh": "รับทราบอาหารที่ไม่ตรง และตรวจคำสั่งเดิม",
        "level": 2,
        "topic": "dining",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-021",
        "q": "A guest says, “I cannot use the stairs. How can I reach the meeting point?” Which reply best responds to this request?",
        "guest": "I cannot use the stairs. How can I reach the meeting point?",
        "guestTh": "ใช้บันไดไม่ได้ จะไปจุดนัดพบอย่างไรคะ",
        "options": [
          "Let me check the accessible route and assistance arrangements.",
          "Every lift is always available in every situation.",
          "You must find a route without help.",
          "The stairs are the only possible route without checking."
        ],
        "correct": 0,
        "explain": "Check the actual accessible arrangements rather than assume.",
        "explainTh": "ตรวจเส้นทางและการช่วยเหลือที่มีจริง ไม่คาดเดา",
        "level": 3,
        "topic": "directions",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-022",
        "q": "A guest says, “Can you approve a refund now without your supervisor?” Which reply best responds to this request?",
        "guest": "Can you approve a refund now without your supervisor?",
        "guestTh": "อนุมัติเงินคืนได้เลยโดยไม่ผ่านหัวหน้าไหมคะ",
        "options": [
          "Yes. Approval is never needed for any refund.",
          "I need to follow the approval process and confirm the outcome.",
          "Yes. I will bypass the process for you.",
          "No. I will not record your request."
        ],
        "correct": 1,
        "explain": "Stay within your authority and explain the approval step.",
        "explainTh": "ดำเนินการตามอำนาจหน้าที่และอธิบายขั้นตอนอนุมัติ",
        "level": 3,
        "topic": "payment",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-023",
        "q": "A guest says, “The menu says vegetarian. Does that guarantee it is suitable for my allergy?” Which reply best responds to this request?",
        "guest": "The menu says vegetarian. Does that guarantee it is suitable for my allergy?",
        "guestTh": "เมนูระบุว่าเป็นมังสวิรัติ จึงรับรองว่าเหมาะกับอาการแพ้ของฉันไหมคะ",
        "options": [
          "Yes. Vegetarian always means free from every allergen.",
          "Yes. Every vegetarian meal has identical ingredients.",
          "Not necessarily. Let me check your specific allergy with the kitchen.",
          "Please taste it to find out."
        ],
        "correct": 2,
        "explain": "Vegetarian and allergy suitability are different questions; check specifics.",
        "explainTh": "อาหารมังสวิรัติกับอาหารที่เหมาะกับอาการแพ้เป็นคนละประเด็น",
        "level": 3,
        "topic": "dining",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-024",
        "q": "A guest says, “The previous shift said someone would contact me, but nobody has.” Which reply best responds to this request?",
        "guest": "The previous shift said someone would contact me, but nobody has.",
        "guestTh": "กะก่อนบอกว่าจะมีคนติดต่อ แต่ยังไม่มีเลยค่ะ",
        "options": [
          "The previous shift is the only team allowed to help.",
          "I will assume someone already called.",
          "Please stop asking because a message was sent.",
          "Let me check the handover and follow up with the responsible team."
        ],
        "correct": 3,
        "explain": "Check both the recorded action and whether follow-up occurred.",
        "explainTh": "ตรวจทั้งบันทึกคำขอและการติดตามที่เกิดขึ้นจริง",
        "level": 3,
        "topic": "communication",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-025",
        "q": "A guest says, “My printed ticket and the latest notice show different meeting points.” Which reply best responds to this request?",
        "guest": "My printed ticket and the latest notice show different meeting points.",
        "guestTh": "จุดนัดพบในตั๋วกับประกาศล่าสุดไม่ตรงกันค่ะ",
        "options": [
          "Let me verify the current meeting point with the excursion team.",
          "Choose whichever location is closer.",
          "Printed tickets always override every new notice.",
          "Ignore both documents and wait in your cabin."
        ],
        "correct": 0,
        "explain": "Resolve conflicting information with the responsible team.",
        "explainTh": "ตรวจข้อมูลที่ขัดแย้งกับทีมที่รับผิดชอบ",
        "level": 3,
        "topic": "directions",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-026",
        "q": "A guest says, “I need a room check, but please arrange it while I am present.” Which reply best responds to this request?",
        "guest": "I need a room check, but please arrange it while I am present.",
        "guestTh": "ต้องการให้ตรวจห้อง แต่ขอให้นัดตอนที่ฉันอยู่ค่ะ",
        "options": [
          "I will send someone in without checking your availability.",
          "Let me arrange a suitable time with you and the team.",
          "I will cancel the request permanently.",
          "I will assume you are always in the cabin."
        ],
        "correct": 1,
        "explain": "Respect the condition that the guest be present.",
        "explainTh": "เคารพเงื่อนไขว่าผู้ใช้บริการต้องอยู่ด้วย",
        "level": 3,
        "topic": "cabin",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-027",
        "q": "A guest says, “Could you contact the medical team for me?” Which reply best responds to this request?",
        "guest": "Could you contact the medical team for me?",
        "guestTh": "ช่วยติดต่อทีมแพทย์ให้หน่อยได้ไหมคะ",
        "options": [
          "Of course. I will choose medication myself.",
          "Of course. I will guarantee you are fine.",
          "Of course. I will contact the medical team using our procedure.",
          "Of course. I will send the restaurant menu."
        ],
        "correct": 2,
        "explain": "The guest explicitly requests the medical team, not an unqualified diagnosis.",
        "explainTh": "ผู้ใช้บริการขอทีมแพทย์ ไม่ใช่การวินิจฉัยจากผู้ไม่มีหน้าที่",
        "level": 2,
        "topic": "communication",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-028",
        "q": "A guest says, “Could you check whether my laundry has been delivered?” Which reply best responds to this request?",
        "guest": "Could you check whether my laundry has been delivered?",
        "guestTh": "ช่วยตรวจว่าเสื้อผ้าที่ส่งซักมาถึงแล้วหรือยังคะ",
        "options": [
          "Let me assume it is ready without checking.",
          "Let me charge for another load instead.",
          "Let me book your dinner table.",
          "Let me check the laundry delivery status."
        ],
        "correct": 3,
        "explain": "Check the requested status, rather than a different service.",
        "explainTh": "ตรวจสถานะที่ถาม ไม่เปลี่ยนไปบริการอื่น",
        "level": 2,
        "topic": "cabin",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-029",
        "q": "A guest says, “Could you explain this amount before I sign?” Which reply best responds to this request?",
        "guest": "Could you explain this amount before I sign?",
        "guestTh": "ช่วยอธิบายยอดเงินนี้ก่อนเซ็นได้ไหมคะ",
        "options": [
          "Certainly. Let us review the amount before you sign.",
          "Please sign first and ask later.",
          "The amount is always correct without checking.",
          "I will cover the amount so you cannot see it."
        ],
        "correct": 0,
        "explain": "Explain the charge before seeking confirmation.",
        "explainTh": "อธิบายยอดเงินก่อนให้ลงนามยืนยัน",
        "level": 2,
        "topic": "payment",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      },
      {
        "id": "cruise-scenario-030",
        "q": "A guest says, “I have found a bag that is not mine. Who should I tell?” Which reply best responds to this request?",
        "guest": "I have found a bag that is not mine. Who should I tell?",
        "guestTh": "พบกระเป๋าที่ไม่ใช่ของฉัน ควรแจ้งใครคะ",
        "options": [
          "Please open it and remove the contents.",
          "Let me contact the responsible team and follow the lost-property procedure.",
          "Please give it to any passenger nearby.",
          "Please keep it without reporting it."
        ],
        "correct": 1,
        "explain": "Use the proper reporting route rather than handling ownership informally.",
        "explainTh": "แจ้งทีมที่รับผิดชอบตามขั้นตอนทรัพย์สินสูญหาย",
        "level": 2,
        "topic": "communication",
        "objective": "Choose a relevant, appropriate response without making unsupported promises.",
        "trainingExample": true
      }
    ],
    "readings": [
      {
        "id": "cruise-reading-001",
        "title": "A towel delivery",
        "titleTh": "การส่งผ้าขนหนู",
        "level": 1,
        "topic": "cabin",
        "passage": "Cabin 412 requests two clean towels and one extra pillow. The steward has the towels ready, but the pillow is not yet available. The steward delivers the towels first and tells the guest that the pillow request is still being checked.",
        "passageTh": "ห้อง 412 ขอผ้าขนหนูสะอาดสองผืนและหมอนเพิ่มหนึ่งใบ พนักงานมีผ้าพร้อมแล้ว แต่หมอนยังไม่พร้อม จึงนำผ้าไปส่งก่อนและแจ้งว่ายังตรวจคำขอหมอนอยู่",
        "trainingExample": true,
        "questions": [
          {
            "id": "cruise-reading-001-q1",
            "q": "What is the passage mainly about?",
            "options": [
              "The status of a cabin request",
              "A restaurant booking",
              "An account refund",
              "A cancelled excursion"
            ],
            "correct": 0,
            "explain": "It describes which requested items are ready.",
            "explainTh": "ข้อความบอกว่าของที่ขอรายการใดพร้อมแล้ว",
            "level": 1,
            "topic": "cabin"
          },
          {
            "id": "cruise-reading-001-q2",
            "q": "How many towels does the guest request?",
            "options": [
              "Two",
              "One",
              "Three",
              "Four"
            ],
            "correct": 0,
            "explain": "The first sentence specifies two towels.",
            "explainTh": "ประโยคแรกระบุผ้าขนหนูสองผืน",
            "level": 1,
            "topic": "cabin"
          },
          {
            "id": "cruise-reading-001-q3",
            "q": "Which item is not yet available?",
            "options": [
              "The extra pillow",
              "The two towels",
              "The cabin key",
              "The menu"
            ],
            "correct": 0,
            "explain": "The pillow is still being checked.",
            "explainTh": "หมอนยังอยู่ระหว่างตรวจสอบ",
            "level": 1,
            "topic": "cabin"
          }
        ]
      },
      {
        "id": "cruise-reading-002",
        "title": "A breakfast order",
        "titleTh": "รายการอาหารเช้า",
        "level": 1,
        "topic": "dining",
        "passage": "In this practice order, Sam requests one bowl of soup and a glass of water without ice. His friend requests a salad and hot tea. The server repeats both orders before sending them to the kitchen. Sam confirms that his water should have no ice.",
        "passageTh": "ในการสั่งอาหารฝึกนี้ แซมขอซุปหนึ่งถ้วยและน้ำไม่ใส่น้ำแข็งหนึ่งแก้ว เพื่อนขอสลัดและชาร้อน พนักงานทวนทั้งสองรายการก่อนส่งครัว แซมยืนยันว่าน้ำของเขาไม่ใส่น้ำแข็ง",
        "trainingExample": true,
        "questions": [
          {
            "id": "cruise-reading-002-q1",
            "q": "Why does the server repeat the orders?",
            "options": [
              "To check the details before sending them",
              "To change the prices",
              "To cancel the meal",
              "To ask for cabin keys"
            ],
            "correct": 0,
            "explain": "Repeating allows the guests to confirm the order.",
            "explainTh": "การทวนเปิดโอกาสให้ยืนยันรายการอาหาร",
            "level": 1,
            "topic": "dining"
          },
          {
            "id": "cruise-reading-002-q2",
            "q": "What drink does Sam request?",
            "options": [
              "Water without ice",
              "Hot tea",
              "Water with extra ice",
              "Coffee"
            ],
            "correct": 0,
            "explain": "Sam requests water; the tea belongs to his friend.",
            "explainTh": "แซมสั่งน้ำ ส่วนชาร้อนเป็นของเพื่อน",
            "level": 1,
            "topic": "dining"
          },
          {
            "id": "cruise-reading-002-q3",
            "q": "Who requests the salad?",
            "options": [
              "Sam’s friend",
              "Sam",
              "The server",
              "The chef"
            ],
            "correct": 0,
            "explain": "The second sentence assigns the salad to the friend.",
            "explainTh": "ประโยคที่สองระบุว่าเพื่อนสั่งสลัด",
            "level": 1,
            "topic": "dining"
          }
        ]
      },
      {
        "id": "cruise-reading-003",
        "title": "A laundry message",
        "titleTh": "ข้อความเรื่องซักรีด",
        "level": 1,
        "topic": "cabin",
        "passage": "A guest gives a bag of laundry to the steward on Monday morning. On Tuesday afternoon, the guest asks whether it has been returned. The steward checks the laundry record and contacts the laundry team. The steward does not say that delivery is complete before checking.",
        "passageTh": "ผู้ใช้บริการส่งถุงเสื้อผ้าให้พนักงานเช้าวันจันทร์ บ่ายวันอังคารถามว่าส่งกลับแล้วหรือยัง พนักงานตรวจบันทึกและติดต่อทีมซักรีด โดยไม่ยืนยันว่าส่งเสร็จก่อนตรวจสอบ",
        "trainingExample": true,
        "questions": [
          {
            "id": "cruise-reading-003-q1",
            "q": "What does the guest want to know?",
            "options": [
              "Whether the laundry has been returned",
              "Whether the cabin is larger",
              "Whether dinner is included",
              "Whether the ship has arrived"
            ],
            "correct": 0,
            "explain": "The question concerns the return of the laundry.",
            "explainTh": "คำถามเกี่ยวกับการส่งเสื้อผ้ากลับ",
            "level": 1,
            "topic": "cabin"
          },
          {
            "id": "cruise-reading-003-q2",
            "q": "When was the laundry handed in?",
            "options": [
              "Monday morning",
              "Tuesday morning",
              "Monday afternoon",
              "Tuesday evening"
            ],
            "correct": 0,
            "explain": "Monday morning is the hand-in time.",
            "explainTh": "ส่งผ้าวันจันทร์ตอนเช้า",
            "level": 1,
            "topic": "cabin"
          },
          {
            "id": "cruise-reading-003-q3",
            "q": "Who does the steward contact?",
            "options": [
              "The laundry team",
              "The excursion guide",
              "The kitchen team",
              "The photographer"
            ],
            "correct": 0,
            "explain": "The passage names the laundry team.",
            "explainTh": "ข้อความระบุทีมซักรีด",
            "level": 1,
            "topic": "cabin"
          }
        ]
      },
      {
        "id": "cruise-reading-004",
        "title": "A simple deck-plan note",
        "titleTh": "บันทึกแผนผังดาดฟ้า",
        "level": 1,
        "topic": "directions",
        "passage": "On this fictional deck plan, the lounge is beside the library on Deck Four. The restaurant is on Deck Five. A guest is already on Deck Four and asks for the lounge. The crew member points out the library and explains that the lounge is next to it.",
        "passageTh": "ในแผนผังสมมตินี้ ห้องรับรองอยู่ข้างห้องสมุดบนดาดฟ้าชั้นสี่ ร้านอาหารอยู่ชั้นห้า ผู้ใช้บริการอยู่ชั้นสี่แล้วและถามหาห้องรับรอง พนักงานชี้ห้องสมุดและอธิบายว่าห้องรับรองอยู่ข้างกัน",
        "trainingExample": true,
        "questions": [
          {
            "id": "cruise-reading-004-q1",
            "q": "What is the crew member helping the guest do?",
            "options": [
              "Find the lounge",
              "Pay a restaurant bill",
              "Book an excursion",
              "Check a laundry bag"
            ],
            "correct": 0,
            "explain": "The guest asks for the lounge.",
            "explainTh": "ผู้ใช้บริการถามหาห้องรับรอง",
            "level": 1,
            "topic": "directions"
          },
          {
            "id": "cruise-reading-004-q2",
            "q": "What is beside the lounge on this plan?",
            "options": [
              "The library",
              "The restaurant",
              "The laundry",
              "The medical centre"
            ],
            "correct": 0,
            "explain": "The fictional plan places the lounge beside the library.",
            "explainTh": "แผนผังสมมติระบุห้องรับรองข้างห้องสมุด",
            "level": 1,
            "topic": "directions"
          },
          {
            "id": "cruise-reading-004-q3",
            "q": "Does the guest need to change decks to reach the lounge in this example?",
            "options": [
              "No; both the guest and lounge are on Deck Four",
              "Yes; go to Deck Five",
              "Yes; go to Deck Two",
              "The guest is already in the restaurant"
            ],
            "correct": 0,
            "explain": "Both are on Deck Four in the passage.",
            "explainTh": "ข้อความระบุว่าทั้งผู้ใช้บริการและห้องรับรองอยู่ชั้นสี่",
            "level": 1,
            "topic": "directions"
          }
        ]
      },
      {
        "id": "cruise-reading-005",
        "title": "An updated excursion notice",
        "titleTh": "ประกาศทัศนศึกษาที่เปลี่ยน",
        "level": 2,
        "topic": "directions",
        "passage": "An old excursion ticket lists a 09:00 meeting outside the theatre. Today’s updated notice lists 09:15 in the lounge. The guest notices the difference and asks a crew member. The crew member contacts the excursion team to verify the current arrangements before giving directions.",
        "passageTh": "ตั๋วทัศนศึกษาเดิมระบุนัด 09:00 น. หน้าโรงละคร ประกาศใหม่ของวันนี้ระบุ 09:15 น. ในห้องรับรอง ผู้ใช้บริการพบว่าข้อมูลต่างกันและถามพนักงาน พนักงานติดต่อทีมทัศนศึกษาเพื่อยืนยันก่อนบอกทาง",
        "trainingExample": true,
        "questions": [
          {
            "id": "cruise-reading-005-q1",
            "q": "Why does the guest ask for help?",
            "options": [
              "Two sources give different meeting details",
              "The guest has no ticket",
              "The theatre is on fire",
              "The tour has definitely been cancelled"
            ],
            "correct": 0,
            "explain": "The ticket and updated notice disagree.",
            "explainTh": "ข้อมูลในตั๋วกับประกาศใหม่ไม่ตรงกัน",
            "level": 2,
            "topic": "directions"
          },
          {
            "id": "cruise-reading-005-q2",
            "q": "What does the updated notice say?",
            "options": [
              "09:15 in the lounge",
              "09:00 outside the theatre",
              "09:15 in the restaurant",
              "09:00 in the library"
            ],
            "correct": 0,
            "explain": "These are the time and place in the new notice.",
            "explainTh": "นี่คือเวลาและสถานที่ในประกาศใหม่",
            "level": 2,
            "topic": "directions"
          },
          {
            "id": "cruise-reading-005-q3",
            "q": "What does the crew member do before giving directions?",
            "options": [
              "Verifies the arrangements with the excursion team",
              "Chooses the older time automatically",
              "Asks the guest to guess",
              "Deletes the ticket"
            ],
            "correct": 0,
            "explain": "The final sentence states the verification step.",
            "explainTh": "ประโยคท้ายระบุขั้นตอนยืนยันข้อมูล",
            "level": 2,
            "topic": "directions"
          }
        ]
      },
      {
        "id": "cruise-reading-006",
        "title": "A duplicate charge query",
        "titleTh": "ข้อสงสัยเรื่องคิดเงินซ้ำ",
        "level": 2,
        "topic": "payment",
        "passage": "A guest’s account shows two identical laundry charges on the same date. The guest remembers using the laundry service only once. Guest Services records the query and asks the account team to review both entries. The crew member does not promise a refund before the review is complete.",
        "passageTh": "บัญชีผู้ใช้บริการมีค่าซักรีดยอดเท่ากันสองรายการในวันเดียวกัน ผู้ใช้บริการจำได้ว่าใช้ครั้งเดียว ฝ่ายบริการบันทึกข้อสงสัยและให้ทีมบัญชีตรวจทั้งสองรายการ โดยไม่สัญญาคืนเงินก่อนตรวจเสร็จ",
        "trainingExample": true,
        "questions": [
          {
            "id": "cruise-reading-006-q1",
            "q": "What is being reviewed?",
            "options": [
              "Two identical laundry charges",
              "Two dinner reservations",
              "A missing passport",
              "A cabin temperature setting"
            ],
            "correct": 0,
            "explain": "The account contains two matching laundry entries.",
            "explainTh": "บัญชีมีรายการซักรีดตรงกันสองรายการ",
            "level": 2,
            "topic": "payment"
          },
          {
            "id": "cruise-reading-006-q2",
            "q": "How many times does the guest remember using the service?",
            "options": [
              "Once",
              "Twice",
              "Three times",
              "Not at all"
            ],
            "correct": 0,
            "explain": "The guest recalls only one use.",
            "explainTh": "ผู้ใช้บริการจำได้ว่าใช้ครั้งเดียว",
            "level": 2,
            "topic": "payment"
          },
          {
            "id": "cruise-reading-006-q3",
            "q": "What has not yet been promised?",
            "options": [
              "A refund",
              "A review of the entries",
              "Recording the query",
              "Contacting the account team"
            ],
            "correct": 0,
            "explain": "The passage says a refund is not promised before review.",
            "explainTh": "ข้อความระบุว่ายังไม่สัญญาคืนเงินก่อนตรวจสอบ",
            "level": 2,
            "topic": "payment"
          }
        ]
      },
      {
        "id": "cruise-reading-007",
        "title": "A maintenance appointment",
        "titleTh": "การนัดซ่อมบำรุง",
        "level": 2,
        "topic": "cabin",
        "passage": "Cabin 608 reports a leaking shower. The guest wants to be present during the check and is available after 15:00. The steward records both the fault and the time preference, then contacts maintenance. A visit time must be confirmed with the guest; it has not been agreed yet.",
        "passageTh": "ห้อง 608 แจ้งฝักบัวรั่ว ผู้ใช้บริการต้องการอยู่ด้วยขณะตรวจและสะดวกหลัง 15:00 น. พนักงานบันทึกทั้งอาการขัดข้องและเวลาที่ต้องการ แล้วติดต่อซ่อมบำรุง ยังต้องยืนยันเวลาตรวจร่วมกับผู้ใช้บริการ",
        "trainingExample": true,
        "questions": [
          {
            "id": "cruise-reading-007-q1",
            "q": "What two details must the steward pass on?",
            "options": [
              "The leaking shower and the guest’s time preference",
              "Only the cabin colour",
              "Only the price of the shower",
              "The restaurant opening time and menu"
            ],
            "correct": 0,
            "explain": "The note includes the fault and preferred availability.",
            "explainTh": "บันทึกมีทั้งปัญหาฝักบัวและเวลาที่สะดวก",
            "level": 2,
            "topic": "cabin"
          },
          {
            "id": "cruise-reading-007-q2",
            "q": "When is the guest available?",
            "options": [
              "After 15:00",
              "Before 09:00",
              "At any time without notice",
              "Only at midnight"
            ],
            "correct": 0,
            "explain": "The passage explicitly says after 15:00.",
            "explainTh": "ข้อความระบุหลัง 15:00 น.",
            "level": 2,
            "topic": "cabin"
          },
          {
            "id": "cruise-reading-007-q3",
            "q": "Is a visit time already agreed?",
            "options": [
              "No; it still needs confirmation",
              "Yes; exactly 15:00",
              "Yes; tomorrow morning",
              "Yes; the visit has finished"
            ],
            "correct": 0,
            "explain": "Availability does not equal a confirmed appointment.",
            "explainTh": "เวลาที่สะดวกยังไม่เท่ากับเวลานัดที่ยืนยันแล้ว",
            "level": 2,
            "topic": "cabin"
          }
        ]
      },
      {
        "id": "cruise-reading-008",
        "title": "An unfinished handover",
        "titleTh": "งานที่ยังไม่จบในการส่งต่อกะ",
        "level": 2,
        "topic": "communication",
        "passage": "The day shift records that a guest requested a callback about an account query. A message has been sent to Guest Services, but no callback is confirmed. The evening shift should check the message and ask when the guest can expect an update. The request remains open.",
        "passageTh": "กะกลางวันบันทึกว่าผู้ใช้บริการขอให้โทรกลับเรื่องบัญชี ส่งข้อความถึงฝ่ายบริการแล้วแต่ยังไม่ยืนยันว่าโทรกลับ กะเย็นควรตรวจข้อความและถามว่าจะอัปเดตเมื่อไร คำขอนี้ยังไม่ปิด",
        "trainingExample": true,
        "questions": [
          {
            "id": "cruise-reading-008-q1",
            "q": "What is the purpose of this handover?",
            "options": [
              "To continue an unresolved callback request",
              "To announce a completed refund",
              "To change every cabin number",
              "To close the account permanently"
            ],
            "correct": 0,
            "explain": "The callback remains unconfirmed.",
            "explainTh": "ยังไม่ยืนยันว่าโทรกลับแล้ว",
            "level": 2,
            "topic": "communication"
          },
          {
            "id": "cruise-reading-008-q2",
            "q": "What has already been done?",
            "options": [
              "A message has been sent to Guest Services",
              "The guest has confirmed a callback",
              "The request has been closed",
              "The account has been deleted"
            ],
            "correct": 0,
            "explain": "Sending the message is the completed action.",
            "explainTh": "สิ่งที่ทำแล้วคือส่งข้อความ",
            "level": 2,
            "topic": "communication"
          },
          {
            "id": "cruise-reading-008-q3",
            "q": "What is the request’s current status?",
            "options": [
              "Open",
              "Completed",
              "Cancelled",
              "Rejected"
            ],
            "correct": 0,
            "explain": "The final sentence says the request remains open.",
            "explainTh": "ประโยคท้ายระบุว่ายังเปิดคำขออยู่",
            "level": 2,
            "topic": "communication"
          }
        ]
      },
      {
        "id": "cruise-reading-009",
        "title": "A dining information check",
        "titleTh": "ตรวจข้อมูลอาหารก่อนสั่ง",
        "level": 3,
        "topic": "dining",
        "passage": "A guest asks whether a vegetarian sauce contains peanuts. The server does not assume that the vegetarian label answers the allergy question. The server checks the current ingredient information with the kitchen and explains that the guest needs this information before ordering. The order is not taken until the question has been addressed.",
        "passageTh": "ผู้ใช้บริการถามว่าซอสมังสวิรัติมีถั่วลิสงหรือไม่ พนักงานไม่ถือว่าป้ายมังสวิรัติตอบคำถามเรื่องแพ้แล้ว จึงตรวจข้อมูลส่วนผสมปัจจุบันกับครัวและแจ้งว่าต้องทราบก่อนสั่ง ยังไม่รับคำสั่งอาหารจนกว่าจะตอบประเด็นนี้",
        "trainingExample": true,
        "questions": [
          {
            "id": "cruise-reading-009-q1",
            "q": "Why is the vegetarian label insufficient in this situation?",
            "options": [
              "The guest has asked about a specific ingredient",
              "The guest is asking about a cabin",
              "Vegetarian labels give a meeting time",
              "The guest already ordered twice"
            ],
            "correct": 0,
            "explain": "The question concerns peanuts, not just the vegetarian category.",
            "explainTh": "คำถามเกี่ยวกับถั่วลิสง ไม่ใช่เพียงประเภทมังสวิรัติ",
            "level": 3,
            "topic": "dining"
          },
          {
            "id": "cruise-reading-009-q2",
            "q": "Where does the server check the information?",
            "options": [
              "With the kitchen",
              "With another passenger",
              "With the laundry team",
              "With a photographer"
            ],
            "correct": 0,
            "explain": "The passage identifies the kitchen as the information source.",
            "explainTh": "ข้อความระบุให้ตรวจข้อมูลกับครัว",
            "level": 3,
            "topic": "dining"
          },
          {
            "id": "cruise-reading-009-q3",
            "q": "When does the guest need the information?",
            "options": [
              "Before ordering",
              "After eating",
              "After leaving the ship",
              "Only after paying"
            ],
            "correct": 0,
            "explain": "The timing is explicitly stated.",
            "explainTh": "ข้อความระบุว่าต้องทราบก่อนสั่ง",
            "level": 3,
            "topic": "dining"
          }
        ]
      },
      {
        "id": "cruise-reading-010",
        "title": "Two conditions for a meeting route",
        "titleTh": "สองเงื่อนไขของเส้นทางไปจุดนัดพบ",
        "level": 3,
        "topic": "directions",
        "passage": "A guest needs to reach a meeting point without using stairs and asks to be told before assistance is arranged. The crew member checks the current accessible route and available support. The crew member then explains the options to the guest and asks which option the guest prefers before confirming the arrangement.",
        "passageTh": "ผู้ใช้บริการต้องไปจุดนัดพบโดยไม่ใช้บันได และขอให้แจ้งก่อนจัดความช่วยเหลือ พนักงานตรวจเส้นทางที่เข้าถึงได้และการสนับสนุนที่มี แล้วอธิบายทางเลือก ถามความต้องการ และจึงยืนยันการจัดการ",
        "trainingExample": true,
        "questions": [
          {
            "id": "cruise-reading-010-q1",
            "q": "Which two conditions must the crew member respect?",
            "options": [
              "No stairs and discussion before arranging assistance",
              "A cheaper ticket and a new cabin",
              "A refund and an earlier breakfast",
              "No luggage and no meeting"
            ],
            "correct": 0,
            "explain": "Both conditions appear in the first sentence.",
            "explainTh": "เงื่อนไขทั้งสองอยู่ในประโยคแรก",
            "level": 3,
            "topic": "directions"
          },
          {
            "id": "cruise-reading-010-q2",
            "q": "What happens before the guest chooses?",
            "options": [
              "The crew member checks and explains the available options",
              "The arrangement is confirmed without discussion",
              "The guest is sent to any lift",
              "The request is cancelled"
            ],
            "correct": 0,
            "explain": "Checking and explaining come before the choice.",
            "explainTh": "ตรวจสอบและอธิบายก่อนให้เลือก",
            "level": 3,
            "topic": "directions"
          },
          {
            "id": "cruise-reading-010-q3",
            "q": "What should not be assumed from this passage?",
            "options": [
              "That every ship has the same accessible route",
              "That the guest wants to reach the meeting",
              "That the guest cannot use stairs",
              "That options should be explained"
            ],
            "correct": 0,
            "explain": "The passage requires checking the current route rather than making a universal assumption.",
            "explainTh": "ต้องตรวจเส้นทางปัจจุบัน ไม่ถือว่าทุกเรือเหมือนกัน",
            "level": 3,
            "topic": "directions"
          }
        ]
      }
    ],
    "listenRespond": [
      {
        "id": "cruise-listen-response-001",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Could I have an extra pillow?",
        "guestTh": "ขอหมอนเพิ่มได้ไหมคะ",
        "options": [
          "Certainly. I will bring you an extra pillow.",
          "Certainly. I will bring you a menu.",
          "Certainly. I will change your excursion.",
          "Certainly. I will print your account."
        ],
        "correct": 0,
        "explain": "Respond to the requested cabin item.",
        "explainTh": "ตอบให้ตรงกับของใช้ในห้องพักที่ขอ",
        "level": 1,
        "topic": "cabin",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Could I have an extra pillow?",
        "audioTextTh": "ขอหมอนเพิ่มได้ไหมคะ"
      },
      {
        "id": "cruise-listen-response-002",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Could I see the menu, please?",
        "guestTh": "ขอดูเมนูหน่อยค่ะ",
        "options": [
          "Of course. Here is the laundry form.",
          "Of course. Here is the menu.",
          "Of course. Here is the deck plan.",
          "Of course. Here is your luggage tag."
        ],
        "correct": 1,
        "explain": "The guest wants to see the dining choices.",
        "explainTh": "ผู้ใช้บริการต้องการดูรายการอาหาร",
        "level": 1,
        "topic": "dining",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Could I see the menu, please?",
        "audioTextTh": "ขอดูเมนูหน่อยค่ะ"
      },
      {
        "id": "cruise-listen-response-003",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Please say the cabin number again.",
        "guestTh": "ช่วยบอกหมายเลขห้องพักอีกครั้งค่ะ",
        "options": [
          "Of course. I will change your room.",
          "Of course. I will repeat the meal price.",
          "Of course. I will repeat the number slowly.",
          "Of course. I will speak more quickly."
        ],
        "correct": 2,
        "explain": "Repeat the specific information requested.",
        "explainTh": "ทวนข้อมูลที่ขอโดยเฉพาะ",
        "level": 1,
        "topic": "communication",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Please say the cabin number again.",
        "audioTextTh": "ช่วยบอกหมายเลขห้องพักอีกครั้งค่ะ"
      },
      {
        "id": "cruise-listen-response-004",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "We need two clean towels.",
        "guestTh": "ต้องการผ้าขนหนูสะอาดสองผืนค่ะ",
        "options": [
          "Certainly. I will take away your pillows.",
          "Certainly. I will bring one menu.",
          "Certainly. I will book a table for two.",
          "Certainly. I will bring two clean towels."
        ],
        "correct": 3,
        "explain": "Confirm both the item and the quantity.",
        "explainTh": "ยืนยันทั้งสิ่งของและจำนวน",
        "level": 1,
        "topic": "cabin",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "We need two clean towels.",
        "audioTextTh": "ต้องการผ้าขนหนูสะอาดสองผืนค่ะ"
      },
      {
        "id": "cruise-listen-response-005",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Could I have water without ice?",
        "guestTh": "ขอน้ำไม่ใส่น้ำแข็งค่ะ",
        "options": [
          "Certainly. Water without ice.",
          "Certainly. Water with extra ice.",
          "Certainly. A hot coffee.",
          "Certainly. A glass of juice instead."
        ],
        "correct": 0,
        "explain": "Preserve the guest’s stated preference: no ice.",
        "explainTh": "คงความต้องการที่ระบุ คือไม่ใส่น้ำแข็ง",
        "level": 1,
        "topic": "dining",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Could I have water without ice?",
        "audioTextTh": "ขอน้ำไม่ใส่น้ำแข็งค่ะ"
      },
      {
        "id": "cruise-listen-response-006",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Could you show me the lounge on the map?",
        "guestTh": "ช่วยชี้ห้องรับรองบนแผนที่ได้ไหมคะ",
        "options": [
          "Of course. Let me take your food order.",
          "Of course. Let me show you the lounge.",
          "Of course. Let me cancel the lounge booking.",
          "Of course. Let me show you yesterday’s bill."
        ],
        "correct": 1,
        "explain": "Use the requested map to identify the destination.",
        "explainTh": "ใช้แผนที่ชี้จุดหมายตามที่ขอ",
        "level": 1,
        "topic": "directions",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Could you show me the lounge on the map?",
        "audioTextTh": "ช่วยชี้ห้องรับรองบนแผนที่ได้ไหมคะ"
      },
      {
        "id": "cruise-listen-response-007",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "The air conditioning is not working.",
        "guestTh": "เครื่องปรับอากาศไม่ทำงานค่ะ",
        "options": [
          "I am sorry. I will bring the dessert menu.",
          "I am sorry. I will book a shore tour.",
          "I am sorry. I will report it to the maintenance team.",
          "I am sorry. I will change your surname."
        ],
        "correct": 2,
        "explain": "A fault needs to be reported to the relevant team.",
        "explainTh": "รายงานอุปกรณ์ขัดข้องให้ทีมที่รับผิดชอบ",
        "level": 1,
        "topic": "cabin",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "The air conditioning is not working.",
        "audioTextTh": "เครื่องปรับอากาศไม่ทำงานค่ะ"
      },
      {
        "id": "cruise-listen-response-008",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Where can I check my onboard account?",
        "guestTh": "ตรวจสอบบัญชีค่าใช้จ่ายบนเรือได้ที่ไหนคะ",
        "options": [
          "Let me explain how to fold a towel.",
          "Let me choose a new table for you.",
          "Let me take you to an unverified office.",
          "Let me show you the correct account-service point."
        ],
        "correct": 3,
        "explain": "Help the guest find the verified place for account enquiries.",
        "explainTh": "แนะนำจุดบริการตรวจสอบบัญชีที่ยืนยันแล้ว",
        "level": 1,
        "topic": "payment",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Where can I check my onboard account?",
        "audioTextTh": "ตรวจสอบบัญชีค่าใช้จ่ายบนเรือได้ที่ไหนคะ"
      },
      {
        "id": "cruise-listen-response-011",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Please do not clean the cabin yet.",
        "guestTh": "ยังไม่ต้องทำความสะอาดห้องพักค่ะ",
        "options": [
          "Of course. When would a better time be?",
          "Of course. I will start cleaning now.",
          "Of course. I will remove your belongings.",
          "Of course. I will leave the door open all day."
        ],
        "correct": 0,
        "explain": "“Not yet” delays the service; ask about a suitable time.",
        "explainTh": "not yet หมายถึงยังไม่ตอนนี้ จึงถามเวลาที่สะดวก",
        "level": 2,
        "topic": "cabin",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Please do not clean the cabin yet.",
        "audioTextTh": "ยังไม่ต้องทำความสะอาดห้องพักค่ะ"
      },
      {
        "id": "cruise-listen-response-012",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Does this dish contain peanuts?",
        "guestTh": "อาหารจานนี้มีถั่วลิสงไหมคะ",
        "options": [
          "I cannot see peanuts, so it must be safe.",
          "Let me check the ingredient information with the kitchen.",
          "Every dish on board is peanut-free.",
          "Try a little first and decide."
        ],
        "correct": 1,
        "explain": "Check reliable ingredient information instead of guessing.",
        "explainTh": "ตรวจสอบส่วนผสมกับครัว ไม่เดาจากรูปลักษณ์",
        "level": 2,
        "topic": "dining",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Does this dish contain peanuts?",
        "audioTextTh": "อาหารจานนี้มีถั่วลิสงไหมคะ"
      },
      {
        "id": "cruise-listen-response-013",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "This drink is not in my package. What will it cost?",
        "guestTh": "เครื่องดื่มนี้ไม่รวมในแพ็กเกจ ต้องจ่ายเท่าไรคะ",
        "options": [
          "Let me serve it first and explain later.",
          "All drinks cost the same on every ship.",
          "Let me confirm the extra charge before you order.",
          "You must order it before seeing the price."
        ],
        "correct": 2,
        "explain": "Clarify the extra cost before the guest commits.",
        "explainTh": "แจ้งค่าใช้จ่ายเพิ่มก่อนให้ผู้ใช้บริการสั่ง",
        "level": 2,
        "topic": "payment",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "This drink is not in my package. What will it cost?",
        "audioTextTh": "เครื่องดื่มนี้ไม่รวมในแพ็กเกจ ต้องจ่ายเท่าไรคะ"
      },
      {
        "id": "cruise-listen-response-014",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Has today’s meeting point changed?",
        "guestTh": "จุดนัดพบวันนี้เปลี่ยนหรือไม่คะ",
        "options": [
          "I will use last week’s meeting point.",
          "Every meeting uses the same place.",
          "Please choose any location yourself.",
          "Let me check the latest notice for today."
        ],
        "correct": 3,
        "explain": "Use current information, not an old assumption.",
        "explainTh": "ใช้ประกาศปัจจุบัน ไม่ยึดข้อมูลเก่า",
        "level": 2,
        "topic": "directions",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Has today’s meeting point changed?",
        "audioTextTh": "จุดนัดพบวันนี้เปลี่ยนหรือไม่คะ"
      },
      {
        "id": "cruise-listen-response-015",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "The shower is leaking and the floor is wet.",
        "guestTh": "ฝักบัวรั่วและพื้นเปียกค่ะ",
        "options": [
          "I will report the leak and arrange help under our procedure.",
          "I will mark the cabin as ready without checking.",
          "Please repair the shower yourself.",
          "A wet floor never needs attention."
        ],
        "correct": 0,
        "explain": "Acknowledge the fault and arrange the responsible team’s help.",
        "explainTh": "รับทราบปัญหาและประสานทีมที่รับผิดชอบ",
        "level": 2,
        "topic": "cabin",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "The shower is leaking and the floor is wet.",
        "audioTextTh": "ฝักบัวรั่วและพื้นเปียกค่ะ"
      },
      {
        "id": "cruise-listen-response-016",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Can you write the meeting time on this card?",
        "guestTh": "ช่วยเขียนเวลานัดพบบนบัตรนี้ได้ไหมคะ",
        "options": [
          "Certainly. I will write an estimated price instead.",
          "Certainly. I will write the confirmed time clearly.",
          "Certainly. I will change the meeting without asking.",
          "Certainly. I will tell you to remember it."
        ],
        "correct": 1,
        "explain": "Provide the requested written time after checking it.",
        "explainTh": "เขียนเวลาที่ตรวจสอบแล้วให้ชัดเจน",
        "level": 2,
        "topic": "communication",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Can you write the meeting time on this card?",
        "audioTextTh": "ช่วยเขียนเวลานัดพบบนบัตรนี้ได้ไหมคะ"
      },
      {
        "id": "cruise-listen-response-017",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "The blanket still has not arrived.",
        "guestTh": "ผ้าห่มยังไม่มาถึงเลยค่ะ",
        "options": [
          "It must have arrived because I requested it.",
          "Please make a new booking for a cabin.",
          "I am sorry. Let me follow up on the delivery.",
          "I will close the request without checking."
        ],
        "correct": 2,
        "explain": "Requesting an item is not the same as confirming delivery.",
        "explainTh": "การส่งคำขอต่างจากการยืนยันว่าส่งถึงแล้ว",
        "level": 2,
        "topic": "cabin",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "The blanket still has not arrived.",
        "audioTextTh": "ผ้าห่มยังไม่มาถึงเลยค่ะ"
      },
      {
        "id": "cruise-listen-response-018",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Which time should I use for returning to the ship?",
        "guestTh": "ควรยึดเวลาใดในการกลับขึ้นเรือคะ",
        "options": [
          "Use any clock you find ashore.",
          "All local clocks always match ship’s time.",
          "There is no need to check the return instructions.",
          "Let me confirm the ship’s current time and all-aboard instructions."
        ],
        "correct": 3,
        "explain": "Confirm the current instructions rather than assuming times match.",
        "explainTh": "ตรวจคำแนะนำปัจจุบัน ไม่ถือว่าเวลาทุกแห่งตรงกัน",
        "level": 2,
        "topic": "directions",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Which time should I use for returning to the ship?",
        "audioTextTh": "ควรยึดเวลาใดในการกลับขึ้นเรือคะ"
      },
      {
        "id": "cruise-listen-response-021",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "I cannot use the stairs. How can I reach the meeting point?",
        "guestTh": "ใช้บันไดไม่ได้ จะไปจุดนัดพบอย่างไรคะ",
        "options": [
          "Let me check the accessible route and assistance arrangements.",
          "Every lift is always available in every situation.",
          "You must find a route without help.",
          "The stairs are the only possible route without checking."
        ],
        "correct": 0,
        "explain": "Check the actual accessible arrangements rather than assume.",
        "explainTh": "ตรวจเส้นทางและการช่วยเหลือที่มีจริง ไม่คาดเดา",
        "level": 3,
        "topic": "directions",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "I cannot use the stairs. How can I reach the meeting point?",
        "audioTextTh": "ใช้บันไดไม่ได้ จะไปจุดนัดพบอย่างไรคะ"
      },
      {
        "id": "cruise-listen-response-022",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "Can you approve a refund now without your supervisor?",
        "guestTh": "อนุมัติเงินคืนได้เลยโดยไม่ผ่านหัวหน้าไหมคะ",
        "options": [
          "Yes. Approval is never needed for any refund.",
          "I need to follow the approval process and confirm the outcome.",
          "Yes. I will bypass the process for you.",
          "No. I will not record your request."
        ],
        "correct": 1,
        "explain": "Stay within your authority and explain the approval step.",
        "explainTh": "ดำเนินการตามอำนาจหน้าที่และอธิบายขั้นตอนอนุมัติ",
        "level": 3,
        "topic": "payment",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "Can you approve a refund now without your supervisor?",
        "audioTextTh": "อนุมัติเงินคืนได้เลยโดยไม่ผ่านหัวหน้าไหมคะ"
      },
      {
        "id": "cruise-listen-response-023",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "The menu says vegetarian. Does that guarantee it is suitable for my allergy?",
        "guestTh": "เมนูระบุว่าเป็นมังสวิรัติ จึงรับรองว่าเหมาะกับอาการแพ้ของฉันไหมคะ",
        "options": [
          "Yes. Vegetarian always means free from every allergen.",
          "Yes. Every vegetarian meal has identical ingredients.",
          "Not necessarily. Let me check your specific allergy with the kitchen.",
          "Please taste it to find out."
        ],
        "correct": 2,
        "explain": "Vegetarian and allergy suitability are different questions; check specifics.",
        "explainTh": "อาหารมังสวิรัติกับอาหารที่เหมาะกับอาการแพ้เป็นคนละประเด็น",
        "level": 3,
        "topic": "dining",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "The menu says vegetarian. Does that guarantee it is suitable for my allergy?",
        "audioTextTh": "เมนูระบุว่าเป็นมังสวิรัติ จึงรับรองว่าเหมาะกับอาการแพ้ของฉันไหมคะ"
      },
      {
        "id": "cruise-listen-response-024",
        "q": "Listen to the guest. Which reply best answers the request?",
        "guest": "The previous shift said someone would contact me, but nobody has.",
        "guestTh": "กะก่อนบอกว่าจะมีคนติดต่อ แต่ยังไม่มีเลยค่ะ",
        "options": [
          "The previous shift is the only team allowed to help.",
          "I will assume someone already called.",
          "Please stop asking because a message was sent.",
          "Let me check the handover and follow up with the responsible team."
        ],
        "correct": 3,
        "explain": "Check both the recorded action and whether follow-up occurred.",
        "explainTh": "ตรวจทั้งบันทึกคำขอและการติดตามที่เกิดขึ้นจริง",
        "level": 3,
        "topic": "communication",
        "objective": "Understand a spoken guest request and choose an appropriate response.",
        "trainingExample": true,
        "audioText": "The previous shift said someone would contact me, but nobody has.",
        "audioTextTh": "กะก่อนบอกว่าจะมีคนติดต่อ แต่ยังไม่มีเลยค่ะ"
      }
    ],
    "order": [
      {
        "id": "cruise-order-001",
        "title": "Delivering extra towels",
        "titleTh": "ส่งผ้าขนหนูเพิ่มเติม",
        "opening": {
          "speaker": "Guest",
          "text": "Could I have two extra towels?",
          "th": "ขอผ้าขนหนูเพิ่มสองผืนได้ไหมคะ"
        },
        "turns": [
          {
            "speaker": "Crew",
            "text": "Certainly. May I confirm your cabin number?",
            "th": "ได้ค่ะ ขอทวนหมายเลขห้องพักค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "It is cabin 412.",
            "th": "ห้อง 412 ค่ะ"
          },
          {
            "speaker": "Crew",
            "text": "Thank you. I will request two towels for that cabin.",
            "th": "ขอบคุณค่ะ จะขอผ้าขนหนูสองผืนให้ห้องนั้นค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 1,
        "topic": "cabin",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-order-002",
        "title": "Checking the correct meal",
        "titleTh": "ตรวจอาหารที่สั่ง",
        "opening": {
          "speaker": "Guest",
          "text": "I ordered soup, not salad.",
          "th": "สั่งซุป ไม่ใช่สลัดค่ะ"
        },
        "turns": [
          {
            "speaker": "Crew",
            "text": "I am sorry. Let me check your order.",
            "th": "ขออภัยค่ะ ขอตรวจคำสั่งอาหารค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "It was the vegetable soup.",
            "th": "เป็นซุปผักค่ะ"
          },
          {
            "speaker": "Crew",
            "text": "Thank you for confirming. I will speak to the dining team.",
            "th": "ขอบคุณที่ยืนยันค่ะ จะประสานทีมอาหารค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 1,
        "topic": "dining",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-order-003",
        "title": "Finding a current meeting point",
        "titleTh": "หาจุดนัดพบปัจจุบัน",
        "opening": {
          "speaker": "Guest",
          "text": "Has the shore-tour meeting point changed?",
          "th": "จุดนัดพบทัวร์ฝั่งเปลี่ยนไหมคะ"
        },
        "turns": [
          {
            "speaker": "Crew",
            "text": "Let me check today’s excursion notice.",
            "th": "ขอตรวจประกาศทัศนศึกษาของวันนี้ค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "My ticket shows the old meeting point.",
            "th": "ตั๋วระบุจุดนัดพบเดิมค่ะ"
          },
          {
            "speaker": "Crew",
            "text": "I will confirm the current location with the excursion team.",
            "th": "จะยืนยันจุดปัจจุบันกับทีมทัศนศึกษาค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 2,
        "topic": "directions",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-order-004",
        "title": "Following up maintenance",
        "titleTh": "ติดตามงานซ่อมบำรุง",
        "opening": {
          "speaker": "Guest",
          "text": "The air conditioning is still not working.",
          "th": "เครื่องปรับอากาศยังไม่ทำงานค่ะ"
        },
        "turns": [
          {
            "speaker": "Crew",
            "text": "I am sorry. I will follow up on the maintenance request.",
            "th": "ขออภัยค่ะ จะติดตามคำขอซ่อมบำรุงค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "Could the team come while I am in the cabin?",
            "th": "ทีมมาตรวจตอนที่ฉันอยู่ในห้องได้ไหมคะ"
          },
          {
            "speaker": "Crew",
            "text": "Let me arrange a suitable time with you and the team.",
            "th": "ขอนัดเวลาที่เหมาะกับคุณและทีมค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 2,
        "topic": "cabin",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-order-005",
        "title": "Checking an account entry",
        "titleTh": "ตรวจรายการบัญชี",
        "opening": {
          "speaker": "Guest",
          "text": "I do not recognise this account entry.",
          "th": "ไม่ทราบว่ารายการบัญชีนี้คืออะไรค่ะ"
        },
        "turns": [
          {
            "speaker": "Crew",
            "text": "Let us check the date and amount together.",
            "th": "ขอตรวจวันที่และจำนวนเงินด้วยกันค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "The same amount appears twice on that date.",
            "th": "วันนั้นมียอดเท่ากันสองรายการค่ะ"
          },
          {
            "speaker": "Crew",
            "text": "Thank you. I will ask the account team to review both entries.",
            "th": "ขอบคุณค่ะ จะให้ทีมบัญชีตรวจทั้งสองรายการค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 2,
        "topic": "payment",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-order-006",
        "title": "Offering accessible assistance",
        "titleTh": "เสนอความช่วยเหลือด้านการเข้าถึง",
        "opening": {
          "speaker": "Guest",
          "text": "I cannot use the stairs to reach the lounge.",
          "th": "ใช้บันไดไปห้องรับรองไม่ได้ค่ะ"
        },
        "turns": [
          {
            "speaker": "Crew",
            "text": "Let me check the accessible route and available assistance.",
            "th": "ขอตรวจเส้นทางที่เข้าถึงได้และการช่วยเหลือที่มีค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "Thank you. Please tell me before arranging help.",
            "th": "ขอบคุณค่ะ กรุณาแจ้งก่อนจัดคนมาช่วยนะคะ"
          },
          {
            "speaker": "Crew",
            "text": "Of course. I will explain the options and ask what you prefer.",
            "th": "ได้ค่ะ จะอธิบายทางเลือกและถามความต้องการก่อนค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 3,
        "topic": "directions",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-order-007",
        "title": "Checking ingredients",
        "titleTh": "ตรวจส่วนผสมอาหาร",
        "opening": {
          "speaker": "Guest",
          "text": "Does this sauce contain peanuts?",
          "th": "ซอสนี้มีถั่วลิสงไหมคะ"
        },
        "turns": [
          {
            "speaker": "Crew",
            "text": "Let me check the ingredient information with the kitchen.",
            "th": "ขอตรวจข้อมูลส่วนผสมกับครัวค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "Thank you. I need to know before ordering.",
            "th": "ขอบคุณค่ะ ต้องทราบก่อนสั่งค่ะ"
          },
          {
            "speaker": "Crew",
            "text": "I will confirm the information before taking your order.",
            "th": "จะยืนยันข้อมูลก่อนรับคำสั่งอาหารค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 3,
        "topic": "dining",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-order-008",
        "title": "Checking laundry delivery",
        "titleTh": "ตรวจการส่งเสื้อผ้าซัก",
        "opening": {
          "speaker": "Guest",
          "text": "Has my laundry come back yet?",
          "th": "เสื้อผ้าที่ส่งซักกลับมาหรือยังคะ"
        },
        "turns": [
          {
            "speaker": "Crew",
            "text": "Let me check the delivery status.",
            "th": "ขอตรวจสถานะการจัดส่งค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "I handed it in yesterday morning.",
            "th": "ส่งเมื่อวานตอนเช้าค่ะ"
          },
          {
            "speaker": "Crew",
            "text": "Thank you. I will pass that detail to the laundry team.",
            "th": "ขอบคุณค่ะ จะแจ้งรายละเอียดนี้ให้ทีมซักรีดค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 1,
        "topic": "cabin",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-order-009",
        "title": "Writing down a time",
        "titleTh": "เขียนเวลานัดหมาย",
        "opening": {
          "speaker": "Guest",
          "text": "Could you write down the confirmed meeting time?",
          "th": "ช่วยเขียนเวลานัดพบที่ยืนยันแล้วได้ไหมคะ"
        },
        "turns": [
          {
            "speaker": "Crew",
            "text": "Certainly. I will write it clearly on this card.",
            "th": "ได้ค่ะ จะเขียนบนบัตรนี้ให้ชัดเจนค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "Thank you. Could you add the meeting place too?",
            "th": "ขอบคุณค่ะ เพิ่มสถานที่นัดพบด้วยได้ไหมคะ"
          },
          {
            "speaker": "Crew",
            "text": "Of course. I will add the confirmed location.",
            "th": "ได้ค่ะ จะเพิ่มสถานที่ที่ยืนยันแล้วค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 1,
        "topic": "communication",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      },
      {
        "id": "cruise-order-010",
        "title": "Explaining an extra charge",
        "titleTh": "อธิบายค่าใช้จ่ายเพิ่ม",
        "opening": {
          "speaker": "Guest",
          "text": "Is this drink included in my package?",
          "th": "เครื่องดื่มนี้รวมในแพ็กเกจไหมคะ"
        },
        "turns": [
          {
            "speaker": "Crew",
            "text": "Let me check your package details first.",
            "th": "ขอตรวจรายละเอียดแพ็กเกจก่อนค่ะ"
          },
          {
            "speaker": "Guest",
            "text": "Please tell me the extra cost if it is not included.",
            "th": "ถ้าไม่รวม กรุณาบอกค่าใช้จ่ายเพิ่มค่ะ"
          },
          {
            "speaker": "Crew",
            "text": "Certainly. I will confirm the charge before you decide.",
            "th": "ได้ค่ะ จะยืนยันค่าใช้จ่ายก่อนให้ตัดสินใจค่ะ"
          }
        ],
        "explain": "Follow the exchange: initial request → first response → guest clarification → final response. Use the references and details in each turn.",
        "explainTh": "เรียงตามคำขอ คำตอบแรก การชี้แจงของผู้ใช้บริการ และคำตอบสุดท้าย โดยดูข้อมูลที่เชื่อมกัน",
        "level": 2,
        "topic": "payment",
        "trainingExample": true,
        "objective": "Use clear, appropriate workplace English."
      }
    ],
    "context": [
      {
        "id": "cruise-context-001",
        "sentence": "Would you like another ___ to support your head in bed?",
        "answer": "pillow",
        "accepted": [
          "pillow"
        ],
        "hint": "A soft support for the head when resting.",
        "hintTh": "หมอนรองศีรษะขณะพักผ่อน",
        "level": 1,
        "topic": "cabin",
        "vocabularyId": "cruise-v-pillow",
        "explain": "Pillow: A soft support for the head when resting.",
        "explainTh": "หมอนรองศีรษะขณะพักผ่อน",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-002",
        "sentence": "I will bring a warm ___ for your bed.",
        "answer": "blanket",
        "accepted": [
          "blanket"
        ],
        "hint": "A covering used to keep someone warm.",
        "hintTh": "ผ้าห่มเพื่อให้ความอบอุ่น",
        "level": 1,
        "topic": "cabin",
        "vocabularyId": "cruise-v-blanket",
        "explain": "Blanket: A covering used to keep someone warm.",
        "explainTh": "ผ้าห่มเพื่อให้ความอบอุ่น",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-003",
        "sentence": "Here is a clean ___ to dry your hands.",
        "answer": "towel",
        "accepted": [
          "towel"
        ],
        "hint": "A piece of absorbent cloth for drying.",
        "hintTh": "ผ้าสำหรับเช็ดให้แห้ง",
        "level": 1,
        "topic": "cabin",
        "vocabularyId": "cruise-v-towel",
        "explain": "Towel: A piece of absorbent cloth for drying.",
        "explainTh": "ผ้าสำหรับเช็ดให้แห้ง",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-004",
        "sentence": "May I see the ___ before choosing my meal?",
        "answer": "menu",
        "accepted": [
          "menu"
        ],
        "hint": "A list of available food and drinks.",
        "hintTh": "รายการอาหารและเครื่องดื่ม",
        "level": 1,
        "topic": "dining",
        "vocabularyId": "cruise-v-menu",
        "explain": "Menu: A list of available food and drinks.",
        "explainTh": "รายการอาหารและเครื่องดื่ม",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-005",
        "sentence": "Please keep your ___ as proof of payment.",
        "answer": "receipt",
        "accepted": [
          "receipt"
        ],
        "hint": "A document showing that payment was made.",
        "hintTh": "เอกสารยืนยันการชำระเงิน",
        "level": 1,
        "topic": "payment",
        "vocabularyId": "cruise-v-receipt",
        "explain": "Receipt: A document showing that payment was made.",
        "explainTh": "เอกสารยืนยันการชำระเงิน",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-006",
        "sentence": "Could you ___ the meeting time? I did not hear it.",
        "answer": "repeat",
        "accepted": [
          "repeat"
        ],
        "hint": "Say something again.",
        "hintTh": "พูดสิ่งเดิมอีกครั้ง",
        "level": 1,
        "topic": "communication",
        "vocabularyId": "cruise-v-repeat",
        "explain": "Repeat: Say something again.",
        "explainTh": "พูดสิ่งเดิมอีกครั้ง",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-007",
        "sentence": "The lounge is on the fourth ___ in this example.",
        "answer": "deck",
        "accepted": [
          "deck"
        ],
        "hint": "A level or floor on a ship.",
        "hintTh": "ชั้นหรือพื้นระดับหนึ่งบนเรือ",
        "level": 1,
        "topic": "directions",
        "vocabularyId": null,
        "explain": "Deck: A level or floor on a ship.",
        "explainTh": "ชั้นหรือพื้นระดับหนึ่งบนเรือ",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-008",
        "sentence": "Please leave the clean towels in the ___.",
        "answer": "cupboard",
        "accepted": [
          "cupboard"
        ],
        "hint": "An enclosed storage space with doors and shelves.",
        "hintTh": "ตู้เก็บของที่มีประตูและชั้น",
        "level": 1,
        "topic": "cabin",
        "vocabularyId": null,
        "explain": "Cupboard: An enclosed storage space with doors and shelves.",
        "explainTh": "ตู้เก็บของที่มีประตูและชั้น",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-009",
        "sentence": "The shower is broken. Please call the ___ team.",
        "answer": "maintenance",
        "accepted": [
          "maintenance"
        ],
        "hint": "The work of keeping equipment in working order.",
        "hintTh": "งานดูแลซ่อมบำรุงอุปกรณ์ให้ใช้งานได้",
        "level": 1,
        "topic": "cabin",
        "vocabularyId": "cruise-v-maintenance",
        "explain": "Maintenance: The work of keeping equipment in working order.",
        "explainTh": "งานดูแลซ่อมบำรุงอุปกรณ์ให้ใช้งานได้",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-010",
        "sentence": "Could you speak more ___, please?",
        "answer": "slowly",
        "accepted": [
          "slowly"
        ],
        "hint": "At a reduced speed.",
        "hintTh": "อย่างช้าลง",
        "level": 1,
        "topic": "communication",
        "vocabularyId": null,
        "explain": "Slowly: At a reduced speed.",
        "explainTh": "อย่างช้าลง",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-011",
        "sentence": "I will check the ___ list with the kitchen.",
        "answer": "ingredient",
        "accepted": [
          "ingredient"
        ],
        "hint": "A substance or food used to make a dish.",
        "hintTh": "วัตถุดิบหรือส่วนผสมที่ใช้ทำอาหาร",
        "level": 2,
        "topic": "dining",
        "vocabularyId": "cruise-v-ingredient",
        "explain": "Ingredient: A substance or food used to make a dish.",
        "explainTh": "วัตถุดิบหรือส่วนผสมที่ใช้ทำอาหาร",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-012",
        "sentence": "Please check whether the laundry ___ is complete.",
        "answer": "delivery",
        "accepted": [
          "delivery"
        ],
        "hint": "The act of bringing an item to its destination.",
        "hintTh": "การนำสิ่งของไปส่งยังจุดหมาย",
        "level": 2,
        "topic": "cabin",
        "vocabularyId": null,
        "explain": "Delivery: The act of bringing an item to its destination.",
        "explainTh": "การนำสิ่งของไปส่งยังจุดหมาย",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-013",
        "sentence": "The guest does not recognise this ___ on the account.",
        "answer": "charge",
        "accepted": [
          "charge"
        ],
        "hint": "An amount of money requested for a service or item.",
        "hintTh": "จำนวนเงินที่คิดสำหรับบริการหรือสิ่งของ",
        "level": 2,
        "topic": "payment",
        "vocabularyId": "cruise-v-charge",
        "explain": "Charge: An amount of money requested for a service or item.",
        "explainTh": "จำนวนเงินที่คิดสำหรับบริการหรือสิ่งของ",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-014",
        "sentence": "Is the drink ___ in the package price?",
        "answer": "included",
        "accepted": [
          "included"
        ],
        "hint": "Part of the price already stated.",
        "hintTh": "รวมอยู่ในราคาที่ระบุแล้ว",
        "level": 2,
        "topic": "payment",
        "vocabularyId": "cruise-v-included",
        "explain": "Included: Part of the price already stated.",
        "explainTh": "รวมอยู่ในราคาที่ระบุแล้ว",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-015",
        "sentence": "We need to ___ today’s meeting point before giving directions.",
        "answer": "confirm",
        "accepted": [
          "confirm"
        ],
        "hint": "Check and state that a detail is correct.",
        "hintTh": "ตรวจสอบและยืนยันว่ารายละเอียดถูกต้อง",
        "level": 2,
        "topic": "directions",
        "vocabularyId": "cruise-v-confirm",
        "explain": "Confirm: Check and state that a detail is correct.",
        "explainTh": "ตรวจสอบและยืนยันว่ารายละเอียดถูกต้อง",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-016",
        "sentence": "Please ___ the request so the next shift can read it.",
        "answer": "record",
        "accepted": [
          "record"
        ],
        "hint": "Write information down for later reference.",
        "hintTh": "จดข้อมูลไว้ใช้อ้างอิงภายหลัง",
        "level": 2,
        "topic": "communication",
        "vocabularyId": null,
        "explain": "Record: Write information down for later reference.",
        "explainTh": "จดข้อมูลไว้ใช้อ้างอิงภายหลัง",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-017",
        "sentence": "The guest is ___ after three o’clock for the cabin check.",
        "answer": "available",
        "accepted": [
          "available"
        ],
        "hint": "Free at a particular time.",
        "hintTh": "ว่างในเวลาที่กำหนด",
        "level": 2,
        "topic": "cabin",
        "vocabularyId": null,
        "explain": "Available: Free at a particular time.",
        "explainTh": "ว่างในเวลาที่กำหนด",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-018",
        "sentence": "Let me contact my ___ about your concern.",
        "answer": "supervisor",
        "accepted": [
          "supervisor"
        ],
        "hint": "The person who oversees the work of a team.",
        "hintTh": "ผู้ควบคุมดูแลงานของทีม",
        "level": 2,
        "topic": "communication",
        "vocabularyId": "cruise-v-supervisor",
        "explain": "Supervisor: The person who oversees the work of a team.",
        "explainTh": "ผู้ควบคุมดูแลงานของทีม",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-019",
        "sentence": "Where is the meeting ___ for today’s excursion?",
        "answer": "point",
        "accepted": [
          "point"
        ],
        "hint": "A particular place chosen for meeting.",
        "hintTh": "จุดที่กำหนดให้นัดพบ",
        "level": 2,
        "topic": "directions",
        "vocabularyId": null,
        "explain": "Point: A particular place chosen for meeting.",
        "explainTh": "จุดที่กำหนดให้นัดพบ",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-020",
        "sentence": "Please report the water ___ in the shower.",
        "answer": "leak",
        "accepted": [
          "leak"
        ],
        "hint": "An escape of liquid through a hole or faulty connection.",
        "hintTh": "การรั่วของน้ำผ่านรูหรือจุดต่อที่ชำรุด",
        "level": 2,
        "topic": "cabin",
        "vocabularyId": "cruise-v-leak",
        "explain": "Leak: An escape of liquid through a hole or faulty connection.",
        "explainTh": "การรั่วของน้ำผ่านรูหรือจุดต่อที่ชำรุด",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-021",
        "sentence": "The guest wants to request a ___ for the cancelled excursion.",
        "answer": "refund",
        "accepted": [
          "refund"
        ],
        "hint": "Money returned to a customer.",
        "hintTh": "เงินคืนให้ลูกค้า",
        "level": 2,
        "topic": "payment",
        "vocabularyId": "cruise-v-refund",
        "explain": "Refund: Money returned to a customer.",
        "explainTh": "เงินคืนให้ลูกค้า",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-022",
        "sentence": "Please check the guest’s food ___ before discussing ingredients.",
        "answer": "allergy",
        "accepted": [
          "allergy"
        ],
        "hint": "A harmful reaction to a substance that the body is sensitive to.",
        "hintTh": "อาการแพ้ต่อสารที่ร่างกายไวต่อสารนั้น",
        "level": 2,
        "topic": "dining",
        "vocabularyId": "cruise-v-allergy",
        "explain": "Allergy: A harmful reaction to a substance that the body is sensitive to.",
        "explainTh": "อาการแพ้ต่อสารที่ร่างกายไวต่อสารนั้น",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-023",
        "sentence": "Thank you for your ___ while we investigate.",
        "answer": "patience",
        "accepted": [
          "patience"
        ],
        "hint": "The ability to wait calmly.",
        "hintTh": "ความอดทนในการรออย่างสงบ",
        "level": 2,
        "topic": "communication",
        "vocabularyId": null,
        "explain": "Patience: The ability to wait calmly.",
        "explainTh": "ความอดทนในการรออย่างสงบ",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-024",
        "sentence": "We need to ___ a suitable time for the repair visit.",
        "answer": "arrange",
        "accepted": [
          "arrange"
        ],
        "hint": "Organise a plan or appointment.",
        "hintTh": "จัดเตรียมหรือนัดหมาย",
        "level": 2,
        "topic": "cabin",
        "vocabularyId": null,
        "explain": "Arrange: Organise a plan or appointment.",
        "explainTh": "จัดเตรียมหรือนัดหมาย",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-025",
        "sentence": "Check the ___ route for a guest who cannot use stairs.",
        "answer": "accessible",
        "accepted": [
          "accessible"
        ],
        "hint": "Usable by someone with particular access needs.",
        "hintTh": "ที่เข้าถึงและใช้งานได้สำหรับผู้มีข้อจำกัด",
        "level": 3,
        "topic": "directions",
        "vocabularyId": null,
        "explain": "Accessible: Usable by someone with particular access needs.",
        "explainTh": "ที่เข้าถึงและใช้งานได้สำหรับผู้มีข้อจำกัด",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-026",
        "sentence": "Add the unresolved query to the shift ___.",
        "answer": "handover",
        "accepted": [
          "handover"
        ],
        "hint": "Information passed to the next shift.",
        "hintTh": "ข้อมูลที่ส่งต่อให้กะถัดไป",
        "level": 3,
        "topic": "communication",
        "vocabularyId": null,
        "explain": "Handover: Information passed to the next shift.",
        "explainTh": "ข้อมูลที่ส่งต่อให้กะถัดไป",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-027",
        "sentence": "Please ___ this issue because it requires a manager’s decision.",
        "answer": "escalate",
        "accepted": [
          "escalate"
        ],
        "hint": "Refer a matter to a person with more authority.",
        "hintTh": "ส่งเรื่องให้ผู้มีอำนาจสูงกว่าพิจารณา",
        "level": 3,
        "topic": "communication",
        "vocabularyId": null,
        "explain": "Escalate: Refer a matter to a person with more authority.",
        "explainTh": "ส่งเรื่องให้ผู้มีอำนาจสูงกว่าพิจารณา",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-028",
        "sentence": "Do not say the refund is approved before receiving ___.",
        "answer": "authorisation",
        "accepted": [
          "authorisation",
          "authorization"
        ],
        "hint": "Official permission to carry out an action.",
        "hintTh": "การให้อำนาจหรืออนุญาตอย่างเป็นทางการ",
        "level": 3,
        "topic": "payment",
        "vocabularyId": "cruise-v-authorisation",
        "explain": "Authorisation: Official permission to carry out an action.",
        "explainTh": "การให้อำนาจหรืออนุญาตอย่างเป็นทางการ",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-029",
        "sentence": "Check the most ___ notice, not an old copy.",
        "answer": "recent",
        "accepted": [
          "recent"
        ],
        "hint": "Nearest to the present time.",
        "hintTh": "ที่เกิดขึ้นใกล้เวลาปัจจุบันที่สุด",
        "level": 3,
        "topic": "directions",
        "vocabularyId": null,
        "explain": "Recent: Nearest to the present time.",
        "explainTh": "ที่เกิดขึ้นใกล้เวลาปัจจุบันที่สุด",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      },
      {
        "id": "cruise-context-030",
        "sentence": "Give the guest an ___ once the team confirms the details.",
        "answer": "update",
        "accepted": [
          "update"
        ],
        "hint": "New information about progress or changes.",
        "hintTh": "ข้อมูลใหม่เกี่ยวกับความคืบหน้าหรือการเปลี่ยนแปลง",
        "level": 3,
        "topic": "communication",
        "vocabularyId": "cruise-v-update",
        "explain": "Update: New information about progress or changes.",
        "explainTh": "ข้อมูลใหม่เกี่ยวกับความคืบหน้าหรือการเปลี่ยนแปลง",
        "objective": "Recall the target word from its initial letter, meaning and workplace context."
      }
    ]
  }
};
SPA_MC_BANK.splice(0, SPA_MC_BANK.length, ...PRACTICE_CONTENT.spa.mc);
SPA_TRUE_FALSE_BANK.splice(0, SPA_TRUE_FALSE_BANK.length, ...PRACTICE_CONTENT.spa.tf);
SPA_ERROR_BANK.splice(0, SPA_ERROR_BANK.length, ...PRACTICE_CONTENT.spa.error);
SPA_LISTEN_BANK.splice(0, SPA_LISTEN_BANK.length, ...PRACTICE_CONTENT.spa.listen);
SPA_BUILDER_BANK.splice(0, SPA_BUILDER_BANK.length, ...PRACTICE_CONTENT.spa.builder);
SPA_FILL_DIALOGUES.splice(0, SPA_FILL_DIALOGUES.length, ...PRACTICE_CONTENT.spa.dialogues);
CRUISE_MC_BANK.splice(0, CRUISE_MC_BANK.length, ...PRACTICE_CONTENT.cruise.mc);
CRUISE_TRUE_FALSE_BANK.splice(0, CRUISE_TRUE_FALSE_BANK.length, ...PRACTICE_CONTENT.cruise.tf);
CRUISE_ERROR_BANK.splice(0, CRUISE_ERROR_BANK.length, ...PRACTICE_CONTENT.cruise.error);
CRUISE_LISTEN_BANK.splice(0, CRUISE_LISTEN_BANK.length, ...PRACTICE_CONTENT.cruise.listen);
CRUISE_BUILDER_BANK.splice(0, CRUISE_BUILDER_BANK.length, ...PRACTICE_CONTENT.cruise.builder);
CRUISE_FILL_DIALOGUES.splice(0, CRUISE_FILL_DIALOGUES.length, ...PRACTICE_CONTENT.cruise.dialogues);
SPA_SAYTHIS.splice(0, SPA_SAYTHIS.length, ...[{"scenario": "A guest arrives early", "dont": "Wait here.", "dontTh": "รอตรงนี้", "doo": "Please have a seat in our lounge while we finish preparing your room — it won’t be long.", "dooTh": "เชิญนั่งพักที่ห้องรับรองระหว่างที่เราเตรียมห้องให้นะคะ ใช้เวลาไม่นานค่ะ", "why": "Gives a warm invitation and a clear time expectation instead of a bare command.", "id": "spa-say-001"}, {"scenario": "Checking for allergies", "dont": "You don’t have any allergies, right?", "dontTh": "คุณไม่มีอาการแพ้ใช่ไหม", "doo": "Could you tell me if you have any allergies or skin sensitivities we should know about?", "dooTh": "ช่วยบอกได้ไหมคะว่ามีอาการแพ้หรือผิวแพ้ง่ายที่เราควรทราบหรือเปล่า", "why": "An open question doesn’t assume the answer, so guests are more likely to disclose something important.", "id": "spa-say-002"}, {"scenario": "Reassuring about temperature", "dont": "It’s not hot.", "dontTh": "มันไม่ร้อนหรอก", "doo": "Thank you for telling me. I will stop and check the temperature.", "dooTh": "ขอบคุณที่แจ้งค่ะ จะหยุดและตรวจสอบอุณหภูมิก่อนค่ะ", "why": "Acknowledge the reported heat, stop and check instead of guaranteeing that it is safe.", "id": "spa-say-003"}, {"scenario": "A guest is running late", "dont": "You’re late, so we have less time now.", "dontTh": "คุณมาสาย เวลาก็เลยน้อยลง", "doo": "No problem at all — we’ll make the very best use of the time we have together.", "dooTh": "ไม่เป็นไรเลยค่ะ เราจะใช้เวลาที่มีให้คุ้มค่าที่สุด", "why": "Keeps the guest relaxed instead of making them feel at fault.", "id": "spa-say-004"}, {"scenario": "Asking a guest to undress", "dont": "Take your clothes off and lie down.", "dontTh": "ถอดเสื้อผ้าแล้วนอนลง", "doo": "Please undress to your comfort level and lie face-down under the towel whenever you’re ready.", "dooTh": "กรุณาถอดเสื้อผ้าเท่าที่คุณสบายใจ แล้วนอนคว่ำใต้ผ้าขนหนูเมื่อพร้อมนะคะ", "why": "Gives the guest control over their own privacy and comfort.", "id": "spa-say-005"}, {"scenario": "Recommending a product", "dont": "You should buy this, your skin looks bad.", "dontTh": "คุณควรซื้ออันนี้ ผิวคุณดูแย่", "doo": "This would really complement today’s treatment, if you’d like to take a closer look.", "dooTh": "อันนี้จะช่วยเสริมทรีตเมนต์วันนี้ได้ดีค่ะ ถ้าสนใจลองดูใกล้ๆ ได้นะคะ", "why": "Avoids any judgement and frames the suggestion as entirely optional.", "id": "spa-say-006"}, {"scenario": "Ending the session", "dont": "Time’s up, you need to leave now.", "dontTh": "หมดเวลาแล้ว คุณต้องออกไปตอนนี้", "doo": "That brings us to the end of your session — please take a moment to relax before you head out.", "dooTh": "ทรีตเมนต์วันนี้จบแล้วค่ะ พักผ่อนสักครู่ก่อนออกไปได้นะคะ", "why": "Closes the session warmly rather than rushing the guest out.", "id": "spa-say-007"}, {"scenario": "Feedback about pressure", "dont": "That’s normal pressure, everyone gets the same.", "dontTh": "นั่นคือแรงกดปกติ ทุกคนก็ได้แบบนี้", "doo": "Thank you for telling me — I’ll adjust that for you right away.", "dooTh": "ขอบคุณที่บอกนะคะ ดิฉันจะปรับให้ทันที", "why": "Validates the guest’s feedback instead of dismissing it.", "id": "spa-say-008"}, {"scenario": "Discussing price", "dont": "It’s expensive because it’s the best.", "dontTh": "มันแพงเพราะมันดีที่สุด", "doo": "This treatment is a little more, as it includes an extended massage and a hydrating mask.", "dooTh": "ทรีตเมนต์นี้ราคาสูงขึ้นเล็กน้อยเพราะรวมการนวดที่ยาวขึ้นและมาส์กให้ความชุ่มชื้นค่ะ", "why": "Explains the value clearly instead of sounding defensive.", "id": "spa-say-009"}, {"scenario": "Declining a same-day request", "dont": "No, we’re full.", "dontTh": "ไม่ได้ เราเต็มแล้ว", "doo": "I’m afraid today is fully booked, but I’d love to find you a time later this week.", "dooTh": "วันนี้คิวเต็มแล้วค่ะ แต่ดิฉันยินดีหาเวลาให้ในสัปดาห์นี้นะคะ", "why": "Turns a flat refusal into a genuinely helpful alternative.", "id": "spa-say-010"}, {"scenario": "Guest asks for a discount", "dont": "We don’t do discounts.", "dontTh": "เราไม่มีส่วนลด", "doo": "I can’t reduce today’s price, but I’d be happy to tell you about our loyalty programme.", "dooTh": "ดิฉันลดราคาวันนี้ไม่ได้ค่ะ แต่ยินดีแนะนำโปรแกรมสมาชิกสะสมแต้มให้นะคะ", "why": "Redirects to a real, positive alternative rather than a flat no.", "id": "spa-say-011"}, {"scenario": "Running behind schedule", "dont": "The therapist before you took too long.", "dontTh": "นักบำบัดคนก่อนใช้เวลานานเกินไป", "doo": "Thank you for your patience — we’re just running a few minutes behind today.", "dooTh": "ขอบคุณที่รอนะคะ วันนี้เราล่าช้าไปเล็กน้อยค่ะ", "why": "Stays professional without blaming a colleague in front of the guest.", "id": "spa-say-012"}, {"scenario": "Guest wants to skip the form", "dont": "You have to fill this in, it’s the rule.", "dontTh": "คุณต้องกรอกอันนี้ มันเป็นกฎ", "doo": "This form helps us keep you safe during treatment — it only takes a moment.", "dooTh": "แบบฟอร์มนี้ช่วยให้เราดูแลความปลอดภัยของคุณระหว่างทรีตเมนต์ค่ะ ใช้เวลาแค่แป๊บเดียว", "why": "Explains the reason behind a rule instead of only citing it.", "id": "spa-say-013"}, {"scenario": "Guest is unhappy with results", "dont": "There’s nothing wrong with it.", "dontTh": "มันไม่มีอะไรผิดปกติ", "doo": "Let’s talk through what you were hoping for, so we can make it right.", "dooTh": "มาคุยกันนะคะว่าคุณคาดหวังผลลัพธ์แบบไหน เพื่อที่เราจะได้แก้ไขให้ถูกต้อง", "why": "Opens a real conversation instead of dismissing the guest’s feelings.", "id": "spa-say-014"}, {"scenario": "Guest asks a question you can’t answer", "dont": "I don’t know.", "dontTh": "ไม่รู้", "doo": "That’s a good question — let me find out for you right away.", "dooTh": "เป็นคำถามที่ดีค่ะ ขอไปหาคำตอบให้ทันทีนะคะ", "why": "Keeps your credibility and promises action instead of closing the conversation.", "id": "spa-say-015"}, {"scenario": "Guest speaks limited English", "dont": "You don’t understand?", "dontTh": "ไม่เข้าใจเหรอ", "doo": "Let me explain that again more slowly — please stop me any time.", "dooTh": "ขออธิบายอีกครั้งแบบช้าๆ นะคะ หยุดถามได้ทุกเมื่อเลยค่ะ", "why": "Puts the responsibility on your explanation, never on the guest’s ability.", "id": "spa-say-016"}, {"scenario": "A colleague made the mistake", "dont": "That wasn’t me, it was the other therapist.", "dontTh": "ไม่ใช่ฉัน เป็นนักบำบัดอีกคน", "doo": "I’m sorry that happened — let me put it right for you now.", "dooTh": "ขออภัยที่เกิดเรื่องนี้ขึ้นค่ะ ขอแก้ไขให้เลยนะคะ", "why": "Guests experience the spa as one team, so deflecting blame damages that trust.", "id": "spa-say-017"}, {"scenario": "Guest falls asleep in treatment", "dont": "Wake up, we’re finished!", "dontTh": "ตื่นแล้ว เสร็จแล้วนะ", "doo": "Take your time waking up — there’s no rush at all.", "dooTh": "ค่อยๆ ตื่นนะคะ ไม่ต้องรีบเลยค่ะ", "why": "Falling asleep is a compliment, and a gentle wake-up protects that calm.", "id": "spa-say-018"}, {"scenario": "Guest requests an unsafe treatment", "dont": "No, we can’t do that.", "dontTh": "ไม่ได้ เราทำไม่ได้", "doo": "For your safety I’d recommend against that today, but may I suggest an alternative?", "dooTh": "เพื่อความปลอดภัยของคุณ วันนี้ดิฉันไม่แนะนำค่ะ แต่ขอเสนอทางเลือกอื่นได้ไหมคะ", "why": "Grounds the refusal in the guest’s wellbeing and still offers a way forward.", "id": "spa-say-019"}, {"scenario": "Guest is on the phone mid-treatment", "dont": "Put your phone away.", "dontTh": "เก็บโทรศัพท์ด้วย", "doo": "Would you like me to pause for a moment while you finish your call?", "dooTh": "ให้หยุดพักสักครู่ระหว่างที่คุณคุยสายให้เสร็จไหมคะ", "why": "Offers a courtesy rather than an instruction, and usually solves it faster.", "id": "spa-say-020"}]);
