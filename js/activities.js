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
  { q:'What does \u201cexfoliation\u201d mean?', options:['Adding oil to the skin','Removing dead skin cells from the surface','Cooling the treatment room','Applying make-up'], correct:1,
    hit:'That\u2019s exactly right — exfoliation removes dead skin cells.', miss:'Exfoliation means removing dead skin cells from the surface.' },
  { q:'A \u201ccontraindication\u201d is best described as:', options:['A treatment guests love','A reason a treatment should not go ahead','A relaxing essential oil','A type of massage stroke'], correct:1,
    hit:'Correct — always check for these before treating a guest.', miss:'A contraindication is a reason a treatment shouldn\u2019t go ahead.' },
  { q:'Which is the most professional way to greet a guest?', options:['Hey, what do you want?','Good afternoon, welcome to the spa. How may I help you today?','You\u2019re here, come in.','Yeah, sit down.'], correct:1,
    hit:'Warm and formal — a great first impression.', miss:'A warm, formal greeting builds trust from the first moment.' },
  { q:'\u201cEffleurage\u201d is best described as:', options:['A deep kneading technique','A light, gliding massage stroke','A type of facial mask','A breathing exercise'], correct:1,
    hit:'Right — effleurage is the light, warming opening stroke.', miss:'Effleurage is a light, gliding stroke used to open a massage.' },
  { q:'What should you always ask before starting a treatment?', options:['What\u2019s your favourite colour?','Do you have any allergies or sensitivities?','How much money do you have?','Are you in a hurry?'], correct:1,
    hit:'Exactly — this is a key safety step, every time.', miss:'Always check for allergies or sensitivities first, for safety.' },
  { q:'Which is the most polite way to ask a guest to wait?', options:['Wait here.','Please have a seat while we get everything ready for you.','You need to wait.','Hurry up and sit.'], correct:1,
    hit:'Perfect — polite and reassuring.', miss:'Adding warmth and a reason turns a command into an invitation.' },
  { q:'\u201cLymphatic drainage\u201d mainly helps with:', options:['Building muscle','Reducing fluid retention','Removing hair','Tanning the skin'], correct:1,
    hit:'Correct — it encourages fluid to move naturally.', miss:'Lymphatic drainage mainly helps reduce fluid retention.' },
  { q:'After a facial, guests are usually advised to avoid:', options:['Drinking water','Direct sun exposure','Talking to staff','Wearing shoes'], correct:1,
    hit:'Right — skin is more sun-sensitive after a facial.', miss:'Guests should usually avoid direct sun exposure after a facial.' },
  { q:'What is a \u201cwalk-in\u201d guest?', options:['A guest who cancels','A guest who arrives without a booking','A guest who complains','A regular member'], correct:1,
    hit:'Correct — walk-ins arrive without booking ahead.', miss:'A walk-in is a guest who arrives without a prior booking.' },
  { q:'\u201cSterilise\u201d means to:', options:['Add fragrance','Completely destroy bacteria and germs','Warm up a towel','Fold linens neatly'], correct:1,
    hit:'Right — sterilising fully destroys bacteria and germs.', miss:'Sterilise means to completely destroy bacteria and germs.' },
  { q:'A \u201ccuticle\u201d is:', options:['A type of nail polish','The thin skin at the base of a nail','A pedicure tool','A hand cream'], correct:1,
    hit:'Correct — the cuticle sits at the base of the nail.', miss:'A cuticle is the thin skin at the base of a nail.' },
  { q:'What\u2019s the best response to a guest\u2019s \u201ctrigger point\u201d?', options:['Ignore it and continue','Apply gentle, focused pressure with care','Avoid the whole massage','Tell them to leave'], correct:1,
    hit:'Exactly — treat trigger points carefully and attentively.', miss:'Apply gentle, focused pressure to a trigger point with care.' },
  { q:'\u201cVIP guest\u201d refers to:', options:['Any first-time visitor','A very important guest who may need extra care','A guest who complained','A staff member'], correct:1,
    hit:'Right — VIP guests often receive extra attention.', miss:'A VIP guest is a very important guest needing extra care.' },
  { q:'Complete: \u201cPlease take a seat in the ___ while you wait.\u201d', options:['treatment room','relaxation lounge','stockroom','car park'], correct:1,
    hit:'Correct — the relaxation lounge is exactly for waiting.', miss:'The relaxation lounge is where waiting guests are seated.' },
  { q:'A guest says the pressure is too firm. What do you say?', options:['That\u2019s the normal pressure.','Thank you for telling me — I\u2019ll lighten it right away.','Everyone finds it firm at first.','You should try to relax more.'], correct:1,
    hit:'Perfect — you validated the feedback and acted on it.', miss:'Thank the guest and adjust immediately, rather than explaining it away.' },
  { q:'What does \u201ccross-contamination\u201d mean?', options:['Mixing two essential oils','Unwanted transfer of bacteria between tools or people','Booking two guests at once','Using cold and hot water together'], correct:1,
    hit:'Correct — this is why tools are sanitised between guests.', miss:'Cross-contamination is the unwanted transfer of bacteria between tools, surfaces or people.' },
  { q:'A guest arrives without a booking and you are fully booked. Best response?', options:['No, we\u2019re full.','I\u2019m afraid we\u2019re fully booked today, but may I find you a time this week?','You should have booked.','Come back later.'], correct:1,
    hit:'Right — a refusal plus a helpful alternative.', miss:'Offer a genuine alternative rather than a flat refusal.' },
  { q:'\u201cComplimentary\u201d means:', options:['Very expensive','Offered free of charge','Requiring a deposit','Only for members'], correct:1,
    hit:'Correct — complimentary means free of charge.', miss:'Complimentary means offered free of charge.' },
  { q:'Which phrase best invites feedback during a massage?', options:['Don\u2019t talk, just relax.','Let me know at any point if you\u2019d like more or less pressure.','This is how I always do it.','It should feel fine.'], correct:1,
    hit:'Exactly — it opens the door for honest feedback.', miss:'Invite feedback openly so the guest feels able to speak up.' },
  { q:'What is a \u201cpatch test\u201d for?', options:['Testing the room temperature','Checking for a skin reaction before full use of a product','Testing a massage table','Checking a guest\u2019s posture'], correct:1,
    hit:'Right — it checks for a reaction before full application.', miss:'A patch test checks for a skin reaction before a product is used fully.' },
  { q:'\u201cThreading\u201d is a technique used for:', options:['Nail shaping','Precise hair removal, often on eyebrows','Deep tissue massage','Applying serum'], correct:1,
    hit:'Correct — threading removes hair precisely with cotton thread.', miss:'Threading is a precise hair removal technique, often used on eyebrows.' },
  { q:'How should you explain a higher price?', options:['It\u2019s expensive because it\u2019s the best.','This treatment includes an extended massage and a hydrating mask.','Everything here costs a lot.','You get what you pay for.'], correct:1,
    hit:'Right — explain the value in concrete terms.', miss:'Explain what the extra cost includes, rather than sounding defensive.' },
  { q:'\u201cAmbience\u201d in a spa refers to:', options:['The price list','The atmosphere created by lighting, music and scent','The booking system','The therapist\u2019s uniform'], correct:1,
    hit:'Correct — ambience is the overall mood of the space.', miss:'Ambience is the atmosphere created by lighting, music and scent.' },
  { q:'A guest asks to skip the consultation form. Best reply?', options:['You have to, it\u2019s the rule.','This form helps us keep you safe — it only takes a moment.','Fine, skip it.','The manager will be angry.'], correct:1,
    hit:'Right — explaining the reason works better than citing rules.', miss:'Explain the safety reason behind the form rather than just insisting.' },
  { q:'\u201cInformed consent\u201d means the guest has:', options:['Paid a deposit','Agreed to treatment after understanding what it involves','Signed the visitor book','Joined the loyalty programme'], correct:1,
    hit:'Correct — understanding must come before agreement.', miss:'Informed consent is agreement given after the guest understands the treatment.' },
  { q:'Which is correct for ending a session warmly?', options:['Time\u2019s up.','That brings us to the end of your session — take your time getting up.','You can go now.','We\u2019re finished, hurry please.'], correct:1,
    hit:'Perfect — unhurried and warm.', miss:'Close the session gently rather than rushing the guest out.' },
  { q:'\u201cThermotherapy\u201d uses:', options:['Cold air','Heat, such as hot stones or warm wraps','Bright light','Salt water only'], correct:1,
    hit:'Correct — thermotherapy uses heat to relax muscles.', miss:'Thermotherapy uses heat, such as hot stones or warm wraps.' },
  { q:'Best way to offer a product without pressure?', options:['You need this for your skin.','This would complement today\u2019s treatment, if you\u2019d like a closer look.','Everyone buys this one.','Your skin needs help.'], correct:1,
    hit:'Right — optional, positive and free of judgement.', miss:'Frame a product as optional and complementary, never as a criticism.' },
  { q:'A \u201cdeposit\u201d is:', options:['A discount for members','A partial advance payment to secure a booking','A tip for the therapist','The final bill'], correct:1,
    hit:'Correct — it secures the booking in advance.', miss:'A deposit is a partial advance payment that secures a booking.' },
  { q:'On the phone, what should you say before checking the diary?', options:['Hold on.','I\u2019ll just place you on hold for a moment while I check.','Wait, I\u2019m busy.','Call back later.'], correct:1,
    hit:'Right — you explained the pause politely.', miss:'Explain the pause politely before placing a caller on hold.' },
  { q:'What does \u201cdraping\u201d mean in a treatment room?', options:['Hanging decorations','Covering a guest so only the working area is exposed','Folding towels for storage','Closing the curtains'], correct:1,
    hit:'Correct — draping protects a guest\u2019s privacy throughout.', miss:'Draping means covering a guest so only the area being worked on is exposed.' },
  { q:'A guest asks something you don\u2019t know. Best reply?', options:['I don\u2019t know.','That\u2019s a good question — let me find out for you right away.','Ask someone else.','It\u2019s not my job.'], correct:1,
    hit:'Right — it keeps your credibility and promises action.', miss:'Offer to find out rather than closing the conversation with \u201cI don\u2019t know.\u201d' },
  { q:'\u201cDehydrated skin\u201d means skin that lacks:', options:['Oil','Water','Colour','Elasticity only'], correct:1,
    hit:'Correct — dehydrated skin lacks water, even when oily.', miss:'Dehydrated skin lacks water. Dry skin is what lacks oil.' },
  { q:'What is a \u201cno-show\u201d?', options:['A guest who cancels in advance','A guest who books but never arrives','A treatment with no products','An empty treatment room'], correct:1,
    hit:'Right — a no-show books but never arrives or cancels.', miss:'A no-show is a guest who books but neither arrives nor cancels.' },
  { q:'A guest speaks limited English. What works best?', options:['You don\u2019t understand?','Let me explain that again more slowly — stop me any time.','Speak louder to them.','Ask them to bring a translator.'], correct:1,
    hit:'Exactly — it puts the work on your explanation, not their ability.', miss:'Offer to explain again slowly. Never imply the fault is the guest\u2019s.' },
  { q:'\u201cTurnaround\u201d in spa work refers to:', options:['Turning a guest over on the table','The time to clean and reset a room between guests','Reversing a booking','A refund'], correct:1,
    hit:'Correct — it\u2019s the reset time between guests.', miss:'Turnaround is the time needed to clean and reset a room between guests.' },
  { q:'A guest falls asleep during the massage. You should:', options:['Wake them immediately and loudly','Let them wake gently and say there\u2019s no rush','Leave the room without a word','Tell them off for wasting time'], correct:1,
    hit:'Right — a gentle wake-up protects the calm you created.', miss:'Wake the guest gently and reassure them there is no rush.' },
  { q:'Which phrase best offers an add-on without pressure?', options:['You need a foot massage too.','Would you like to add a foot massage? No problem at all either way.','Everyone adds a foot massage.','You should spend more.'], correct:1,
    hit:'Perfect — a clear offer plus an easy way out.', miss:'Offer the extra clearly and always give the guest an easy way to decline.' },
  { q:'\u201cHypoallergenic\u201d describes a product that is:', options:['Very strongly scented','Formulated to reduce the chance of a reaction','Only for professional use','Made without water'], correct:1,
    hit:'Correct — it\u2019s formulated to reduce allergic reactions.', miss:'Hypoallergenic means formulated to reduce the chance of a reaction.' },
  { q:'You spot oil spilled on the floor. What is it?', options:['A slip hazard to clean immediately','Someone else\u2019s problem','Normal and safe','A sign to close the room'], correct:0,
    hit:'Right — clean a slip hazard straight away.', miss:'Spilled oil is a slip hazard and should be cleaned immediately.' },
  { q:'A colleague caused the problem. What do you say to the guest?', options:['That wasn\u2019t me, it was the other therapist.','I\u2019m sorry that happened — let me put it right for you now.','You should complain to them.','Nothing, just continue.'], correct:1,
    hit:'Exactly — guests see the spa as one team.', miss:'Take shared responsibility. Blaming a colleague damages the guest\u2019s trust.' },
];

/* =========================================================================
   TRUE OR FALSE BANK — 20 statements, 12 sampled per attempt
   ========================================================================= */
const SPA_TRUE_FALSE_BANK = [
  { statement:'You should always check for contraindications before a treatment begins.', answer:true,  why:'Checking contraindications is a core safety step before every treatment.' },
  { statement:'\u201cExfoliation\u201d means adding moisture back into the skin.', answer:false, why:'Exfoliation removes dead skin cells. Hydrating adds moisture.' },
  { statement:'It is professional to tell a late guest that they have less time now.', answer:false, why:'Reassure the guest instead: \u201cwe\u2019ll make the best use of the time we have.\u201d' },
  { statement:'A guest should be asked to undress only to their own comfort level.', answer:true,  why:'Guests must always keep control over their own privacy and comfort.' },
  { statement:'Tools only need sanitising at the end of the working day.', answer:false, why:'Tools are sanitised between every guest to prevent cross-contamination.' },
  { statement:'\u201cComplimentary\u201d means the service is offered free of charge.', answer:true,  why:'Complimentary means free of charge, often as an included extra.' },
  { statement:'Deep tissue massage uses lighter pressure than effleurage.', answer:false, why:'Effleurage is the light stroke; deep tissue works firmly into inner layers.' },
  { statement:'Guests should drink plenty of water after a massage.', answer:true,  why:'Hydration is standard aftercare advice following most treatments.' },
  { statement:'If a guest complains, you should explain why they are mistaken.', answer:false, why:'Start with empathy and offer to put things right, not with a defence.' },
  { statement:'A patch test checks for a reaction before a product is fully applied.', answer:true,  why:'That is exactly its purpose — a small trial application first.' },
  { statement:'It is fine to blame a colleague if the spa is running late.', answer:false, why:'Stay professional: thank the guest for waiting without blaming anyone.' },
  { statement:'A \u201cwalk-in\u201d is a guest who arrives without a booking.', answer:true,  why:'Correct — walk-ins have made no prior appointment.' },
  { statement:'Sun exposure is recommended immediately after a facial.', answer:false, why:'Skin is more sun-sensitive after a facial, so direct sun should be avoided.' },
  { statement:'You should ask guests whether they prefer conversation or quiet.', answer:true,  why:'Asking respects the guest\u2019s preferred experience during treatment.' },
  { statement:'\u201cSterilise\u201d and \u201csanitise\u201d mean exactly the same thing.', answer:false, why:'Sterilising destroys all bacteria; sanitising reduces them to a safe level.' },
  { statement:'A cuticle is the thin layer of skin at the base of the nail.', answer:true,  why:'Correct — that is precisely what a cuticle is.' },
  { statement:'It is acceptable to say \u201cyour skin looks bad\u201d when recommending a product.', answer:false, why:'Never judge a guest\u2019s appearance. Frame products as an optional complement.' },
  { statement:'Reflexology focuses on pressure points in the feet, hands or ears.', answer:true,  why:'Correct — reflexology works on these specific pressure-point areas.' },
  { statement:'A deposit is money refunded to the guest after treatment.', answer:false, why:'A deposit is paid in advance to secure the booking.' },
  { statement:'\u201cAmbience\u201d describes the atmosphere created by lighting, music and scent.', answer:true,  why:'Correct — it is the overall mood of the space.' },
  { statement:'Draping exists mainly to keep the treatment room tidy.', answer:false, why:'Draping protects the guest\u2019s privacy and warmth, not tidiness.' },
  { statement:'You should tell a guest when their therapist made a mistake, naming the colleague.', answer:false, why:'Apologise and fix it. Guests experience the spa as one team.' },
  { statement:'Dehydrated skin lacks water, while dry skin lacks oil.', answer:true,  why:'Correct — they are different conditions with different treatments.' },
  { statement:'Prenatal massage uses the same positions and pressure as a standard massage.', answer:false, why:'It is adapted with safe positions and lighter pressure for pregnancy.' },
  { statement:'A spilled bottle of oil on the floor is a slip hazard.', answer:true,  why:'Correct — it should be cleaned immediately to prevent a fall.' },
  { statement:'It is good practice to keep offering an add-on after a guest has declined.', answer:false, why:'Once a guest declines, accept it gracefully and move on.' },
  { statement:'A shift handover should include guests\u2019 pressure preferences.', answer:true,  why:'Correct — that detail helps the next therapist look after them well.' },
  { statement:'\u201cEscalate\u201d means to make a guest more upset.', answer:false, why:'To escalate is to pass a problem to a manager or someone more senior.' },
];

/* =========================================================================
   ERROR CORRECTION BANK — 12 items, 8 sampled per attempt
   The learner reads a blunt line and picks the professional rewrite.
   ========================================================================= */
const SPA_ERROR_BANK = [
  { wrong:'Wait here.', options:['Please have a seat while we prepare your room.','Stand there please.','You wait now.'], correct:0,
    why:'A warm invitation with a reason, rather than a bare command.' },
  { wrong:'You don\u2019t have allergies, right?', options:['Could you tell me about any allergies or sensitivities?','No allergies then?','You are fine, correct?'], correct:0,
    why:'An open question doesn\u2019t assume the answer, so guests disclose more.' },
  { wrong:'Time\u2019s up, you need to leave.', options:['That brings us to the end of your session — take your time getting up.','We are finished now.','Please leave the room.'], correct:0,
    why:'Closes the session gently instead of rushing the guest.' },
  { wrong:'No, we\u2019re full.', options:['I\u2019m afraid today is fully booked, but may I find you a time this week?','We have nothing.','Try another spa.'], correct:0,
    why:'A refusal paired with a genuinely helpful alternative.' },
  { wrong:'It\u2019s not hot.', options:['The temperature is gentle and completely safe for your skin.','Don\u2019t worry about it.','It is normal temperature.'], correct:0,
    why:'Reassures with positive description rather than denying the concern.' },
  { wrong:'That\u2019s normal pressure, everyone gets the same.', options:['Thank you for telling me — I\u2019ll adjust that right away.','It is standard pressure.','You will get used to it.'], correct:0,
    why:'Validates the feedback and acts on it immediately.' },
  { wrong:'You should buy this, your skin looks bad.', options:['This would complement today\u2019s treatment, if you\u2019d like a closer look.','Your skin needs this product.','You must buy this one.'], correct:0,
    why:'Removes judgement and makes the suggestion optional.' },
  { wrong:'You have to fill this in, it\u2019s the rule.', options:['This form helps us keep you safe — it only takes a moment.','It is required by the spa.','No form, no treatment.'], correct:0,
    why:'Explains the reason behind the rule rather than only citing it.' },
  { wrong:'The therapist before you took too long.', options:['Thank you for your patience — we\u2019re running a few minutes behind today.','It is not my fault.','The last guest was slow.'], correct:0,
    why:'Stays professional without blaming a colleague in front of a guest.' },
  { wrong:'Take your clothes off and lie down.', options:['Please undress to your comfort level and lie face-down under the towel.','Remove clothing now.','Undress and wait.'], correct:0,
    why:'Respects privacy and gives the guest control.' },
  { wrong:'We don\u2019t do discounts.', options:['I can\u2019t reduce today\u2019s price, but may I tell you about our loyalty programme?','No discounts here.','That is the price.'], correct:0,
    why:'Redirects to a real, positive alternative instead of a flat no.' },
  { wrong:'There\u2019s nothing wrong with it.', options:['Let\u2019s talk through what you were hoping for, so we can make it right.','It looks fine to me.','That is the normal result.'], correct:0,
    why:'Opens a real conversation instead of dismissing the guest.' },
  { wrong:'I don\u2019t know.', options:['That\u2019s a good question — let me find out for you right away.','Nobody knows that.','Ask someone else.'], correct:0,
    why:'Promises action and keeps your credibility intact.' },
  { wrong:'You don\u2019t understand?', options:['Let me explain that again more slowly — please stop me any time.','I already told you.','Listen carefully this time.'], correct:0,
    why:'Puts the responsibility on your explanation, never on the guest.' },
  { wrong:'Wake up, we\u2019re finished!', options:['Take your time waking up — there\u2019s no rush at all.','Time to get up now.','You fell asleep again.'], correct:0,
    why:'A gentle wake-up protects the calm the treatment created.' },
  { wrong:'Put your phone away.', options:['Would you like me to pause while you finish your call?','No phones in here.','You are disturbing the treatment.'], correct:0,
    why:'A courtesy works faster than an instruction, and keeps the mood calm.' },
  { wrong:'That wasn\u2019t me, it was the other therapist.', options:['I\u2019m sorry that happened — let me put it right for you now.','You should talk to her about it.','It was not my shift.'], correct:0,
    why:'Guests see the spa as one team; deflecting blame breaks their trust.' },
  { wrong:'No, we can\u2019t do that.', options:['For your safety I\u2019d recommend against that today — may I suggest an alternative?','That is not allowed.','It is against the rules.'], correct:0,
    why:'Grounds a refusal in the guest\u2019s wellbeing and offers a way forward.' },
];

/* =========================================================================
   LISTEN & CHOOSE BANK — 18 rounds, 10 sampled per attempt
   ========================================================================= */
const SPA_LISTEN_BANK = [
  { target:'Acupressure',       distractors:['Aromatherapy','Reflexology','Sanitise'] },
  { target:'Exfoliation',       distractors:['Extraction','Hydrotherapy','Rejuvenating'] },
  { target:'Contraindication',  distractors:['Consultation form','Cross-contamination','Cancellation policy'] },
  { target:'Aromatherapy',      distractors:['Acupressure','Thermotherapy','Cryotherapy'] },
  { target:'Rejuvenating',      distractors:['Detoxifying','Hydrating','Anti-ageing'] },
  { target:'Lymphatic drainage',distractors:['Deep tissue','Trigger point','Sports massage'] },
  { target:'Therapeutic',       distractors:['Complimentary','Thermotherapy','Wellbeing'] },
  { target:'Microdermabrasion', distractors:['Exfoliation','Extraction','Chemical peel'] },
  { target:'Reflexology',       distractors:['Acupressure','Petrissage','Effleurage'] },
  { target:'Complimentary',     distractors:['Consultation form','Cancellation policy','Membership'] },
  { target:'Petrissage',        distractors:['Effleurage','Tapotement','Compression'] },
  { target:'Tapotement',        distractors:['Petrissage','Friction','Kneading'] },
  { target:'Hydrotherapy',      distractors:['Thermotherapy','Cryotherapy','Aromatherapy'] },
  { target:'Cuticle',           distractors:['Callus','Blemish','Pore'] },
  { target:'Sterilise',         distractors:['Sanitise','Disposable','Detox'] },
  { target:'Reschedule',        distractors:['Referral','Reception','Rejuvenating'] },
  { target:'Collagen',          distractors:['Serum','Moisturiser','Toning'] },
  { target:'Metabolism',        distractors:['Mindfulness','Circulation','Posture'] },
  { target:'Hypoallergenic',   distractors:['Fragrance-free','Disposable','Contraindication'] },
  { target:'Draping',          distractors:['Bolster','Kneading','Toning'] },
  { target:'Turnaround',       distractors:['Stocktake','Restock','Rota'] },
  { target:'Dehydrated skin',  distractors:['Congested skin','Combination skin','Blemish'] },
  { target:'Itinerary',        distractors:['Testimonial','Membership','Referral'] },
  { target:'Escalate',         distractors:['Reschedule','Restock','Sanitise'] },
];

/* =========================================================================
   PHRASE BUILDER BANK — 18 sentences, 8 sampled per attempt
   ========================================================================= */
const SPA_BUILDER_BANK = [
  { th:'วันนี้มีอะไรให้ช่วยไหมคะ',                        sentence:'How may I assist you today?' },
  { th:'เชิญนั่งพักผ่อนตามสบายค่ะ',                       sentence:'Please have a seat and relax.' },
  { th:'แรงกดแน่นเกินไปไหมคะ',                            sentence:'Is the pressure too firm?' },
  { th:'เราแนะนำให้ดื่มน้ำมากๆ ค่ะ',                       sentence:'We recommend drinking plenty of water.' },
  { th:'ขอบคุณที่เลือกใช้บริการเราวันนี้ค่ะ',                 sentence:'Thank you for choosing us today.' },
  { th:'ดิฉันจะปรับให้ทันทีค่ะ',                            sentence:'I will adjust that right away.' },
  { th:'การนัดหมายของคุณยืนยันแล้วสำหรับวันเสาร์',            sentence:'Your appointment is confirmed for Saturday.' },
  { th:'เป็นเกียรติที่ได้ดูแลคุณค่ะ',                        sentence:'It was a pleasure to help you.' },
  { th:'อุณหภูมิห้องสบายไหมคะ',                            sentence:'Is the room temperature comfortable?' },
  { th:'นักบำบัดของคุณจะมาถึงในอีกสักครู่',                   sentence:'Your therapist will be with you shortly.' },
  { th:'คุณมีอาการแพ้อะไรบ้างไหมคะ',                        sentence:'Do you have any allergies?' },
  { th:'กรุณาหลีกเลี่ยงแสงแดดโดยตรง',                      sentence:'Please avoid direct sun exposure.' },
  { th:'ขอรับชื่อและเบอร์ติดต่อได้ไหมคะ',                    sentence:'May I take your name and number?' },
  { th:'ขอบคุณที่แจ้งเรื่องนี้ให้เราทราบ',                    sentence:'Thank you for bringing this to our attention.' },
  { th:'ทรีตเมนต์นี้ใช้เวลาหกสิบนาที',                       sentence:'This treatment takes sixty minutes.' },
  { th:'อยากจองคิวครั้งต่อไปไหมคะ',                         sentence:'Would you like to book your next appointment?' },
  { th:'บอกได้เลยถ้าอยากพัก',                              sentence:'Let me know if you would like a break.' },
  { th:'หวังว่าจะได้พบคุณอีกเร็วๆ นี้',                       sentence:'We hope to see you again soon.' },
  { th:'ขอไปหาคำตอบให้ทันทีนะคะ',                          sentence:'Let me find out for you right away.' },
  { th:'ขออธิบายอีกครั้งแบบช้าๆ นะคะ',                       sentence:'Let me explain that again more slowly.' },
  { th:'ค่อยๆ ตื่นนะคะ ไม่ต้องรีบ',                           sentence:'Take your time. There is no rush.' },
  { th:'สนใจเพิ่มนวดเท้าไหมคะ',                             sentence:'Would you like to add a foot massage?' },
  { th:'ห้องสองต้องจัดใหม่ก่อนแขกคนต่อไป',                    sentence:'Room two needs a turnaround before the next guest.' },
  { th:'ผลิตภัณฑ์ของเราไม่ก่อให้เกิดอาการแพ้',                  sentence:'Our products are hypoallergenic.' },
  { th:'กรุณาถอดเสื้อผ้าเท่าที่คุณสบายใจ',                     sentence:'Please undress to your comfort level.' },
  { th:'ขออภัยที่เกิดเรื่องนี้ขึ้นค่ะ',                          sentence:'I am sorry that happened.' },
];

/* =========================================================================
   FILL-IN-THE-BLANK DIALOGUES — 3 complete scripts
   ========================================================================= */
const SPA_FILL_DIALOGUES = [
  { id:'arrival', title:'Front desk & treatment room', th:'หน้าเคาน์เตอร์และห้องทรีตเมนต์', lines:[
    { speaker:'Front desk', before:'Good afternoon, and welcome to Willow & Stone. How may I ', after:' you today?', options:['assist','ignore','delay','question'], correct:'assist' },
    { speaker:'Guest', before:'Hi, I have a two o\u2019clock booking for a deep tissue massage.', after:'', fixed:true },
    { speaker:'Front desk', before:'Let me check\u2026 yes, I have that ', after:' under your name. Could you fill out this short consultation form for us first?', options:['booking','complaint','bill','mistake'], correct:'booking' },
    { speaker:'Guest', before:'Of course. I should mention I have some lower back pain.', after:'', fixed:true },
    { speaker:'Front desk', before:'Thank you for letting us know \u2014 we\u2019ll pass that on so your therapist can ', after:' the pressure accordingly.', options:['adjust','ignore','rush','increase'], correct:'adjust' },
    { speaker:'Therapist', before:'Hello, I\u2019m Maya, I\u2019ll be your therapist today. Is the room temperature ', after:' for you?', options:['comfortable','expensive','loud','early'], correct:'comfortable' },
    { speaker:'Therapist', before:'Wonderful. Please let me know at any point if you\u2019d like the pressure ', after:' or lighter.', options:['firmer','colder','shorter','cheaper'], correct:'firmer' },
    { speaker:'Therapist', before:'That brings us to the end of your session. We\u2019d recommend drinking plenty of water to stay ', after:' for the rest of the day.', options:['hydrated','hungry','dressed','late'], correct:'hydrated' },
    { speaker:'Guest', before:'I will, thank you \u2014 that was wonderful.', after:'', fixed:true },
    { speaker:'Front desk', before:'It was a pleasure. We hope to ', after:' you again soon \u2014 enjoy the rest of your day.', options:['see','bill','rush','avoid'], correct:'see' },
  ]},
  { id:'phone', title:'Booking by phone', th:'การจองทางโทรศัพท์', lines:[
    { speaker:'Front desk', before:'Good morning, Willow & Stone Spa, this is Praew speaking. How can I ', after:' you?', options:['help','avoid','ignore','rush'], correct:'help' },
    { speaker:'Guest', before:'Hi, I\u2019d like to book a facial for this Friday, please.', after:'', fixed:true },
    { speaker:'Front desk', before:'Of course \u2014 would you like me to ', after:' our availability for Friday afternoon?', options:['check','cancel','forget','lose'], correct:'check' },
    { speaker:'Guest', before:'Yes please, around two o\u2019clock if possible.', after:'', fixed:true },
    { speaker:'Front desk', before:'You\u2019re in luck, two o\u2019clock is ', after:'. Can I take your name and phone number?', options:['free','expensive','closed','late'], correct:'free' },
    { speaker:'Guest', before:'It\u2019s Somchai, and my number is 08X-XXX-XXXX.', after:'', fixed:true },
    { speaker:'Front desk', before:'Thank you. I\u2019ve sent a ', after:' to your email \u2014 please check that everything looks correct.', options:['confirmation','complaint','invoice','warning'], correct:'confirmation' },
    { speaker:'Front desk', before:'We ask for a small deposit to ', after:' the booking \u2014 is that alright with you?', options:['secure','delete','refuse','postpone'], correct:'secure' },
    { speaker:'Guest', before:'That\u2019s fine, no problem.', after:'', fixed:true },
    { speaker:'Front desk', before:'Wonderful. Thank you for ', after:', and we look forward to seeing you on Friday.', options:['calling','shouting','complaining','leaving'], correct:'calling' },
  ]},
  { id:'concern', title:'Handling a guest concern', th:'การจัดการข้อร้องเรียนของแขก', lines:[
    { speaker:'Guest', before:'Excuse me — the massage was much lighter than I expected.', after:'', fixed:true },
    { speaker:'Therapist', before:'I\u2019m so ', after:' to hear that. Thank you for telling me.', options:['sorry','busy','pleased','tired'], correct:'sorry' },
    { speaker:'Therapist', before:'Would you like me to ', after:' the pressure for the remaining time?', options:['increase','cancel','ignore','shorten'], correct:'increase' },
    { speaker:'Guest', before:'Yes, that would be better. I did ask for deep tissue.', after:'', fixed:true },
    { speaker:'Therapist', before:'You did, and I should have ', after:' with you sooner. Let\u2019s adjust it now.', options:['checked','argued','finished','delayed'], correct:'checked' },
    { speaker:'Front desk', before:'I understand your ', after:' completely, and I\u2019ll speak with my manager right away.', options:['frustration','excitement','booking','payment'], correct:'frustration' },
    { speaker:'Front desk', before:'As an ', after:', we\u2019d like to offer you a complimentary treatment on your next visit.', options:['apology','invoice','upgrade fee','extra charge'], correct:'apology' },
    { speaker:'Guest', before:'That\u2019s very kind, thank you.', after:'', fixed:true },
    { speaker:'Front desk', before:'Your ', after:' means a lot to us — it helps us look after everyone better.', options:['feedback','payment','silence','patience'], correct:'feedback' },
  ]},
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
