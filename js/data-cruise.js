/* =========================================================================
   COURSE: NIMMAN Harbour & Horizon English
   English for cruise ship crew — guest services, cabin, dining, bar, deck,
   safety drills, shore excursions and crew handovers.

   Same shape as the spa course, so every activity works unchanged:
   each vocabulary entry has word / th / phon / cat / def / short / level,
   each phrase has level / text / th / note.
   ========================================================================= */

const CRUISE_VOCAB_CATEGORIES = [
  {
    "id": "ship",
    "en": "Ship & areas",
    "th": "เรือและพื้นที่ต่างๆ"
  },
  {
    "id": "cabin",
    "en": "Cabin & housekeeping",
    "th": "ห้องพักและแม่บ้าน"
  },
  {
    "id": "dining",
    "en": "Dining & bar service",
    "th": "ห้องอาหารและบาร์"
  },
  {
    "id": "guest",
    "en": "Guest services desk",
    "th": "เคาน์เตอร์บริการผู้โดยสาร"
  },
  {
    "id": "safety",
    "en": "Safety & emergency",
    "th": "ความปลอดภัยและเหตุฉุกเฉิน"
  },
  {
    "id": "port",
    "en": "Ports & shore excursions",
    "th": "ท่าเรือและทัวร์ชายฝั่ง"
  },
  {
    "id": "crew",
    "en": "Crew life & departments",
    "th": "ชีวิตลูกเรือและแผนกงาน"
  },
  {
    "id": "care",
    "en": "Guest care & wellbeing",
    "th": "การดูแลผู้โดยสาร"
  },
  {
    "id": "communication",
    "en": "Useful service actions",
    "th": "คำกริยาสำหรับงานบริการ"
  }
];

const CRUISE_VOCAB = [
  {
    "word": "Gangway",
    "level": 1,
    "th": "สะพานขึ้นลงเรือ",
    "phon": "/ˈgæŋ.weɪ/",
    "cat": "ship",
    "def": "The walkway passengers use to board or leave the ship.",
    "short": "Walkway on and off the ship",
    "example": "Please use the handrail on the gangway.",
    "exampleTh": "กรุณาจับราวบนสะพานขึ้นลงเรือค่ะ",
    "collocation": "the gangway handrail",
    "id": "cruise-v-gangway",
    "progressKey": "Gangway",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-excursion-003"
    ]
  },
  {
    "word": "Muster station",
    "level": 2,
    "th": "จุดรวมพลฉุกเฉิน",
    "phon": "/ˈmʌs.tə ˈsteɪ.ʃən/",
    "cat": "ship",
    "def": "The place a passenger must go in an emergency, shown on their cruise card.",
    "short": "Emergency assembly point",
    "example": "Let me help you check your assigned muster station.",
    "exampleTh": "ให้ช่วยตรวจสอบจุดรวมพลที่กำหนดให้นะคะ",
    "collocation": "assigned muster station",
    "id": "cruise-v-muster-station",
    "progressKey": "Muster station",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-embark-005",
      "cruise-p-safety-001",
      "cruise-p-safety-011"
    ]
  },
  {
    "word": "Promenade deck",
    "level": 2,
    "th": "ดาดฟ้าเดินเล่น",
    "phon": "/ˌprɒm.əˈnɑːd dek/",
    "cat": "ship",
    "def": "The open deck that runs around the ship for walking.",
    "short": "Open walking deck",
    "example": "Let me show you the promenade deck on the plan.",
    "exampleTh": "ให้ชี้ดาดฟ้าสำหรับเดินเล่นบนแผนผังนะคะ",
    "collocation": "the promenade deck",
    "id": "cruise-v-promenade-deck",
    "progressKey": "Promenade deck",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Lido deck",
    "level": 2,
    "th": "ดาดฟ้าสระว่ายน้ำ",
    "phon": "/ˈliː.dəʊ dek/",
    "cat": "ship",
    "def": "The deck with the pools, sun loungers and casual buffet.",
    "short": "Pool and buffet deck",
    "example": "Please check today's facilities on the Lido deck.",
    "exampleTh": "กรุณาตรวจสอบสิ่งอำนวยความสะดวกบนดาดฟ้าลิโดที่เปิดวันนี้ค่ะ",
    "collocation": "the Lido deck",
    "id": "cruise-v-lido-deck",
    "progressKey": "Lido deck",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-embark-006",
      "cruise-p-shipinfo-003"
    ]
  },
  {
    "word": "Atrium",
    "level": 3,
    "th": "โถงกลางเรือ",
    "phon": "/ˈeɪ.tri.əm/",
    "cat": "ship",
    "def": "The tall open central lobby of the ship, usually over several decks.",
    "short": "Central multi-deck lobby",
    "example": "We can meet in the atrium after lunch.",
    "exampleTh": "พบกันที่โถงกลางเรือหลังอาหารกลางวันได้ค่ะ",
    "collocation": "the main atrium",
    "id": "cruise-v-atrium",
    "progressKey": "Atrium",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Bridge",
    "level": 2,
    "th": "สะพานเดินเรือ",
    "phon": "/brɪdʒ/",
    "cat": "ship",
    "def": "The control room from which the captain navigates the ship.",
    "short": "Where the ship is navigated",
    "example": "The bridge is a restricted working area.",
    "exampleTh": "สะพานเดินเรือเป็นพื้นที่ปฏิบัติงานที่จำกัดการเข้าถึง",
    "collocation": "the ship's bridge",
    "id": "cruise-v-bridge",
    "progressKey": "Bridge",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Galley",
    "level": 2,
    "th": "ห้องครัวบนเรือ",
    "phon": "/ˈgæl.i/",
    "cat": "ship",
    "def": "The ship’s kitchen.",
    "short": "The ship’s kitchen",
    "example": "I will pass your allergy information to the galley team.",
    "exampleTh": "จะส่งต่อข้อมูลอาการแพ้ให้ทีมครัวเรือค่ะ",
    "collocation": "the galley team",
    "id": "cruise-v-galley",
    "progressKey": "Galley",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-dining-003"
    ]
  },
  {
    "word": "Starboard",
    "level": 3,
    "th": "กราบขวาของเรือ",
    "phon": "/ˈstɑː.bəd/",
    "cat": "ship",
    "def": "The right-hand side of the ship when facing forward.",
    "short": "Right side of the ship",
    "example": "Starboard is the right side when facing the bow.",
    "exampleTh": "กราบขวาคือด้านขวาเมื่อหันหน้าไปทางหัวเรือ",
    "collocation": "the starboard side",
    "id": "cruise-v-starboard",
    "progressKey": "Starboard",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Port side",
    "level": 3,
    "th": "กราบซ้ายของเรือ",
    "phon": "/pɔːt saɪd/",
    "cat": "ship",
    "def": "The left-hand side of the ship when facing forward.",
    "short": "Left side of the ship",
    "example": "The port side is on your left when facing the bow.",
    "exampleTh": "กราบซ้ายอยู่ทางซ้ายเมื่อหันหน้าไปทางหัวเรือ",
    "collocation": "the port side",
    "id": "cruise-v-port-side",
    "progressKey": "Port side",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Bow",
    "level": 2,
    "th": "หัวเรือ",
    "phon": "/baʊ/",
    "cat": "ship",
    "def": "The front of the ship.",
    "short": "The front of the ship",
    "example": "The bow is the front of the ship.",
    "exampleTh": "หัวเรือคือส่วนหน้าของเรือ",
    "collocation": "the ship's bow",
    "id": "cruise-v-bow",
    "progressKey": "Bow",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Stern",
    "level": 2,
    "th": "ท้ายเรือ",
    "phon": "/stɜːn/",
    "cat": "ship",
    "def": "The back of the ship.",
    "short": "The back of the ship",
    "example": "The stern is the back of the ship.",
    "exampleTh": "ท้ายเรือคือส่วนหลังของเรือ",
    "collocation": "the ship's stern",
    "id": "cruise-v-stern",
    "progressKey": "Stern",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Deck plan",
    "level": 1,
    "th": "แผนผังชั้นเรือ",
    "phon": "/dek plæn/",
    "cat": "ship",
    "def": "A map showing what is on each deck of the ship.",
    "short": "Map of each deck",
    "example": "May I show you the route on the deck plan?",
    "exampleTh": "ขอแสดงเส้นทางบนแผนผังดาดฟ้าได้ไหมคะ",
    "collocation": "read a deck plan",
    "id": "cruise-v-deck-plan",
    "progressKey": "Deck plan",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-shipinfo-002",
      "cruise-p-shipinfo-007"
    ]
  },
  {
    "word": "Stateroom",
    "level": 2,
    "th": "ห้องพักผู้โดยสาร",
    "phon": "/ˈsteɪt.ruːm/",
    "cat": "cabin",
    "def": "A passenger cabin on a cruise ship.",
    "short": "A passenger cabin",
    "example": "May I confirm your stateroom number?",
    "exampleTh": "ขอยืนยันหมายเลขห้องพักได้ไหมคะ",
    "collocation": "stateroom number",
    "id": "cruise-v-stateroom",
    "progressKey": "Stateroom",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-embark-002",
      "cruise-p-cabin-001"
    ]
  },
  {
    "word": "Cabin steward",
    "level": 2,
    "th": "พนักงานดูแลห้องพัก",
    "phon": "/ˈkæb.ɪn ˈstjuː.əd/",
    "cat": "cabin",
    "def": "The crew member who services and cleans a guest’s cabin.",
    "short": "Crew who services cabins",
    "example": "I will contact your cabin steward.",
    "exampleTh": "จะติดต่อพนักงานดูแลห้องพักให้ค่ะ",
    "collocation": "contact a cabin steward",
    "id": "cruise-v-cabin-steward",
    "progressKey": "Cabin steward",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Turndown service",
    "level": 3,
    "th": "บริการจัดเตียงตอนเย็น",
    "phon": "/ˈtɜːn.daʊn ˈsɜː.vɪs/",
    "cat": "cabin",
    "def": "The evening visit to prepare the bed and tidy the cabin for the night.",
    "short": "Evening bed preparation",
    "example": "Would you like turndown service this evening?",
    "exampleTh": "ต้องการบริการเตรียมห้องพักก่อนเข้านอนเย็นนี้ไหมคะ",
    "collocation": "evening turndown service",
    "id": "cruise-v-turndown-service",
    "progressKey": "Turndown service",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-005"
    ]
  },
  {
    "word": "Linen change",
    "level": 2,
    "th": "การเปลี่ยนผ้าปูเตียง",
    "phon": "/ˈlɪn.ɪn tʃeɪndʒ/",
    "cat": "cabin",
    "def": "Replacing the sheets and towels in a cabin.",
    "short": "Replacing sheets and towels",
    "example": "Would you like to request a linen change?",
    "exampleTh": "ต้องการขอเปลี่ยนผ้าปูที่นอนไหมคะ",
    "collocation": "request a linen change",
    "id": "cruise-v-linen-change",
    "progressKey": "Linen change",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Amenities",
    "level": 3,
    "th": "ของใช้ในห้องพัก",
    "phon": "/əˈmen.ɪ.tiz/",
    "cat": "cabin",
    "def": "The soap, shampoo and small extras provided in a cabin.",
    "short": "Cabin toiletries and extras",
    "example": "Which bathroom amenities do you need?",
    "exampleTh": "ต้องการของใช้ในห้องน้ำอะไรบ้างคะ",
    "collocation": "bathroom amenities",
    "id": "cruise-v-amenities",
    "progressKey": "Amenities",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-004"
    ]
  },
  {
    "word": "Balcony cabin",
    "level": 1,
    "th": "ห้องพักมีระเบียง",
    "phon": "/ˈbæl.kə.ni ˈkæb.ɪn/",
    "cat": "cabin",
    "def": "A cabin with its own private outdoor balcony.",
    "short": "Cabin with a private balcony",
    "example": "Let me check the availability of a balcony cabin.",
    "exampleTh": "ขอตรวจสอบห้องพักพร้อมระเบียงที่ว่างค่ะ",
    "collocation": "book a balcony cabin",
    "id": "cruise-v-balcony-cabin",
    "progressKey": "Balcony cabin",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Interior cabin",
    "level": 2,
    "th": "ห้องพักไม่มีหน้าต่าง",
    "phon": "/ɪnˈtɪə.ri.ə ˈkæb.ɪn/",
    "cat": "cabin",
    "def": "A cabin with no window, in the middle of the ship.",
    "short": "Cabin with no window",
    "example": "An interior cabin does not have an outside window.",
    "exampleTh": "ห้องพักด้านในไม่มีหน้าต่างออกสู่ภายนอก",
    "collocation": "an interior cabin",
    "id": "cruise-v-interior-cabin",
    "progressKey": "Interior cabin",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Do not disturb sign",
    "level": 1,
    "th": "ป้ายห้ามรบกวน",
    "phon": "/duː nɒt dɪˈstɜːb saɪn/",
    "cat": "cabin",
    "def": "The card a guest hangs on the door when they do not want service.",
    "short": "Card asking for no service",
    "example": "Please respect the do not disturb sign and follow procedure.",
    "exampleTh": "กรุณาเคารพป้ายห้ามรบกวนและปฏิบัติตามขั้นตอน",
    "collocation": "a do not disturb sign",
    "id": "cruise-v-do-not-disturb-sign",
    "progressKey": "Do not disturb sign",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Minibar",
    "level": 1,
    "th": "มินิบาร์ในห้อง",
    "phon": "/ˈmɪn.i.bɑː/",
    "cat": "cabin",
    "def": "The small fridge of drinks and snacks in a cabin.",
    "short": "Small in-cabin drinks fridge",
    "example": "Let me check which minibar items have an extra charge.",
    "exampleTh": "ขอตรวจสอบว่าของในมินิบาร์รายการใดมีค่าใช้จ่ายเพิ่มค่ะ",
    "collocation": "minibar charges",
    "id": "cruise-v-minibar",
    "progressKey": "Minibar",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Safe",
    "level": 1,
    "th": "ตู้เซฟในห้อง",
    "phon": "/seɪf/",
    "cat": "cabin",
    "def": "The locked box in a cabin for a guest’s valuables.",
    "short": "Locked box for valuables",
    "example": "Would you like help understanding the safe instructions?",
    "exampleTh": "ต้องการความช่วยเหลือในการอ่านคำแนะนำตู้เซฟไหมคะ",
    "collocation": "the cabin safe",
    "id": "cruise-v-safe",
    "progressKey": "Safe",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-farewell-005",
      "cruise-p-farewell-010"
    ]
  },
  {
    "word": "Housekeeping trolley",
    "level": 2,
    "th": "รถเข็นแม่บ้าน",
    "phon": "/ˈhaʊs.kiː.pɪŋ ˈtrɒl.i/",
    "cat": "cabin",
    "def": "The cart carrying linen and cleaning supplies along the corridor.",
    "short": "Cart with linen and supplies",
    "example": "Please keep the housekeeping trolley out of the exit route.",
    "exampleTh": "กรุณาอย่าจอดรถเข็นแม่บ้านกีดขวางทางออก",
    "collocation": "a housekeeping trolley",
    "id": "cruise-v-housekeeping-trolley",
    "progressKey": "Housekeeping trolley",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Cabin key card",
    "level": 1,
    "th": "คีย์การ์ดห้องพัก",
    "phon": "/ˈkæb.ɪn kiː kɑːd/",
    "cat": "cabin",
    "def": "The card that unlocks a guest’s cabin door.",
    "short": "Card that opens the cabin",
    "example": "Please contact guest services about your lost cabin key card.",
    "exampleTh": "กรุณาติดต่อแผนกบริการผู้โดยสารเรื่องคีย์การ์ดห้องพักที่หายค่ะ",
    "collocation": "replace a cabin key card",
    "id": "cruise-v-cabin-key-card",
    "progressKey": "Cabin key card",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Maître d’",
    "level": 3,
    "th": "หัวหน้าพนักงานต้อนรับห้องอาหาร",
    "phon": "/ˌmeɪ.trəˈdiː/",
    "cat": "dining",
    "def": "The head of the restaurant, who manages seating and service.",
    "short": "Head of the restaurant",
    "example": "I will ask the maître d’ about your table request.",
    "exampleTh": "จะสอบถามหัวหน้าพนักงานห้องอาหารเกี่ยวกับคำขอเรื่องโต๊ะค่ะ",
    "collocation": "speak to the maître d’",
    "id": "cruise-v-ma-tre-d",
    "progressKey": "Maître d’",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Buffet",
    "level": 1,
    "th": "บุฟเฟ่ต์",
    "phon": "/ˈbʊf.eɪ/",
    "cat": "dining",
    "def": "A self-service meal where guests help themselves.",
    "short": "Self-service meal",
    "example": "May I show you where the buffet starts?",
    "exampleTh": "ให้ชี้จุดเริ่มต้นไลน์บุฟเฟต์ได้ไหมคะ",
    "collocation": "the buffet area",
    "id": "cruise-v-buffet",
    "progressKey": "Buffet",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-embark-006"
    ]
  },
  {
    "word": "À la carte",
    "level": 3,
    "th": "สั่งอาหารตามรายการ",
    "phon": "/ˌɑː lɑː ˈkɑːt/",
    "cat": "dining",
    "def": "Ordering individual dishes from a menu rather than a set meal.",
    "short": "Ordering dish by dish",
    "example": "This restaurant offers an à la carte menu.",
    "exampleTh": "ห้องอาหารนี้มีเมนูสั่งเป็นจาน",
    "collocation": "an à la carte menu",
    "id": "cruise-v-la-carte",
    "progressKey": "À la carte",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Seating time",
    "level": 2,
    "th": "รอบเวลารับประทานอาหาร",
    "phon": "/ˈsiː.tɪŋ taɪm/",
    "cat": "dining",
    "def": "The allocated dinner sitting a guest is booked for.",
    "short": "The guest’s dinner sitting",
    "example": "May I check your dining seating time?",
    "exampleTh": "ขอตรวจสอบรอบเวลารับประทานอาหารได้ไหมคะ",
    "collocation": "dining seating time",
    "id": "cruise-v-seating-time",
    "progressKey": "Seating time",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Wine list",
    "level": 1,
    "th": "รายการไวน์",
    "phon": "/waɪn lɪst/",
    "cat": "dining",
    "def": "The menu of wines available.",
    "short": "Menu of wines",
    "example": "Would you like to see the wine list?",
    "exampleTh": "ต้องการดูรายการไวน์ไหมคะ",
    "collocation": "the wine list",
    "id": "cruise-v-wine-list",
    "progressKey": "Wine list",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Mocktail",
    "level": 2,
    "th": "ค็อกเทลไม่มีแอลกอฮอล์",
    "phon": "/ˈmɒk.teɪl/",
    "cat": "dining",
    "def": "A mixed drink with no alcohol.",
    "short": "Alcohol-free cocktail",
    "example": "Would you like a non-alcoholic mocktail?",
    "exampleTh": "ต้องการม็อกเทลไม่มีแอลกอฮอล์ไหมคะ",
    "collocation": "a fruit mocktail",
    "id": "cruise-v-mocktail",
    "progressKey": "Mocktail",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Beverage package",
    "level": 2,
    "th": "แพ็กเกจเครื่องดื่ม",
    "phon": "/ˈbev.ər.ɪdʒ ˈpæk.ɪdʒ/",
    "cat": "dining",
    "def": "A pre-paid plan covering a guest’s drinks during the cruise.",
    "short": "Pre-paid drinks plan",
    "example": "Let me check the terms of your beverage package.",
    "exampleTh": "ขอตรวจสอบเงื่อนไขแพ็กเกจเครื่องดื่มของคุณค่ะ",
    "collocation": "beverage package terms",
    "id": "cruise-v-beverage-package",
    "progressKey": "Beverage package",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-bar-004",
      "cruise-p-selling-001"
    ]
  },
  {
    "word": "Dietary requirement",
    "level": 3,
    "th": "ข้อจำกัดด้านอาหาร",
    "phon": "/ˈdaɪ.ə.tər.i rɪˈkwaɪə.mənt/",
    "cat": "dining",
    "def": "A guest’s need to avoid certain foods, for health or belief.",
    "short": "Food a guest must avoid",
    "example": "Do you have a dietary requirement the kitchen should know about?",
    "exampleTh": "มีข้อกำหนดด้านอาหารที่ครัวควรทราบไหมคะ",
    "collocation": "a dietary requirement",
    "id": "cruise-v-dietary-requirement",
    "progressKey": "Dietary requirement",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-dining-003"
    ]
  },
  {
    "word": "Allergy card",
    "level": 2,
    "th": "บัตรแจ้งอาการแพ้อาหาร",
    "phon": "/ˈæl.ə.dʒi kɑːd/",
    "cat": "dining",
    "def": "A card recording a guest’s food allergies for the galley.",
    "short": "Card listing food allergies",
    "example": "May I show your allergy card to the chef?",
    "exampleTh": "ขอนำบัตรข้อมูลอาการแพ้ให้เชฟดูได้ไหมคะ",
    "collocation": "an allergy card",
    "id": "cruise-v-allergy-card",
    "progressKey": "Allergy card",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Clearing the table",
    "level": 1,
    "th": "เก็บโต๊ะอาหาร",
    "phon": "/ˈklɪə.rɪŋ ðə ˈteɪ.bəl/",
    "cat": "dining",
    "def": "Removing used plates and glasses from a table.",
    "short": "Removing used plates",
    "example": "May I begin clearing the table?",
    "exampleTh": "ขอเริ่มเก็บจานบนโต๊ะได้ไหมคะ",
    "collocation": "clearing the table",
    "id": "cruise-v-clearing-the-table",
    "progressKey": "Clearing the table",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Service charge",
    "level": 2,
    "th": "ค่าบริการ",
    "phon": "/ˈsɜː.vɪs tʃɑːdʒ/",
    "cat": "dining",
    "def": "An amount added to a bill for service.",
    "short": "Amount added for service",
    "example": "Let me check whether the service charge is included.",
    "exampleTh": "ขอตรวจสอบว่ารวมค่าบริการแล้วหรือไม่ค่ะ",
    "collocation": "an included service charge",
    "id": "cruise-v-service-charge",
    "progressKey": "Service charge",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Last call",
    "level": 2,
    "th": "สั่งครั้งสุดท้าย",
    "phon": "/lɑːst kɔːl/",
    "cat": "dining",
    "def": "The final chance to order before the bar closes.",
    "short": "Final orders before closing",
    "example": "I will confirm the last call time at the bar.",
    "exampleTh": "จะยืนยันเวลาสั่งเครื่องดื่มรอบสุดท้ายที่บาร์ค่ะ",
    "collocation": "last call time",
    "id": "cruise-v-last-call",
    "progressKey": "Last call",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-bar-006"
    ]
  },
  {
    "word": "Corkage fee",
    "level": 3,
    "th": "ค่าเปิดขวด",
    "phon": "/ˈkɔː.kɪdʒ fiː/",
    "cat": "dining",
    "def": "A charge for drinking wine a guest brought aboard themselves.",
    "short": "Charge for your own wine",
    "example": "Let me check whether a corkage fee applies.",
    "exampleTh": "ขอตรวจสอบว่ามีค่าเปิดขวดหรือไม่ค่ะ",
    "collocation": "a corkage fee",
    "id": "cruise-v-corkage-fee",
    "progressKey": "Corkage fee",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Speciality restaurant",
    "level": 2,
    "th": "ห้องอาหารพิเศษ",
    "phon": "/ˌspeʃ.iˈæl.ə.ti ˈres.trɒnt/",
    "cat": "dining",
    "def": "A restaurant charging extra for a higher-end menu.",
    "short": "Extra-charge restaurant",
    "example": "Would you like details of our speciality restaurant?",
    "exampleTh": "ต้องการรายละเอียดห้องอาหารพิเศษไหมคะ",
    "collocation": "a speciality restaurant booking",
    "id": "cruise-v-speciality-restaurant",
    "progressKey": "Speciality restaurant",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-dining-006",
      "cruise-p-selling-004"
    ]
  },
  {
    "word": "Guest services desk",
    "level": 1,
    "th": "เคาน์เตอร์บริการผู้โดยสาร",
    "phon": "/gest ˈsɜː.vɪs.ɪz desk/",
    "cat": "guest",
    "def": "The reception counter where guests bring questions and problems.",
    "short": "Reception counter for guests",
    "example": "The guest services desk can help check your account.",
    "exampleTh": "แผนกบริการผู้โดยสารช่วยตรวจสอบบัญชีของคุณได้ค่ะ",
    "collocation": "the guest services desk",
    "id": "cruise-v-guest-services-desk",
    "progressKey": "Guest services desk",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Cruise card",
    "level": 1,
    "th": "บัตรประจำตัวผู้โดยสาร",
    "phon": "/kruːz kɑːd/",
    "cat": "guest",
    "def": "A guest’s ID card on board, used as a key and to pay.",
    "short": "Onboard ID, key and payment",
    "example": "Please keep your cruise card with you.",
    "exampleTh": "กรุณาเก็บบัตรประจำตัวผู้โดยสารเรือไว้กับตัวค่ะ",
    "collocation": "your cruise card",
    "id": "cruise-v-cruise-card",
    "progressKey": "Cruise card",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-embark-001",
      "cruise-p-bar-003",
      "cruise-p-excursion-004"
    ]
  },
  {
    "word": "Onboard account",
    "level": 2,
    "th": "บัญชีค่าใช้จ่ายบนเรือ",
    "phon": "/ˈɒn.bɔːd əˈkaʊnt/",
    "cat": "guest",
    "def": "The running bill of everything a guest charges during the cruise.",
    "short": "A guest’s running bill",
    "example": "Would you like to review your onboard account?",
    "exampleTh": "ต้องการตรวจสอบบัญชีค่าใช้จ่ายบนเรือไหมคะ",
    "collocation": "review an onboard account",
    "id": "cruise-v-onboard-account",
    "progressKey": "Onboard account",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-selling-006"
    ]
  },
  {
    "word": "Folio",
    "level": 3,
    "th": "ใบสรุปค่าใช้จ่าย",
    "phon": "/ˈfəʊ.li.əʊ/",
    "cat": "guest",
    "def": "The printed statement of a guest’s onboard charges.",
    "short": "Statement of charges",
    "example": "Your folio lists the charges on your account.",
    "exampleTh": "ใบสรุปบัญชีแสดงรายการค่าใช้จ่ายในบัญชีของคุณ",
    "collocation": "a guest folio",
    "id": "cruise-v-folio",
    "progressKey": "Folio",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Gratuity",
    "level": 3,
    "th": "ค่าทิปบริการ",
    "phon": "/grəˈtʃuː.ə.ti/",
    "cat": "guest",
    "def": "A service tip, often added automatically to the onboard account.",
    "short": "Service tip",
    "example": "Let me explain the gratuity information for this service.",
    "exampleTh": "ขออธิบายข้อมูลค่าทิปสำหรับบริการนี้ค่ะ",
    "collocation": "gratuity information",
    "id": "cruise-v-gratuity",
    "progressKey": "Gratuity",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Lost property",
    "level": 2,
    "th": "ของหาย",
    "phon": "/lɒst ˈprɒp.ə.ti/",
    "cat": "guest",
    "def": "Items guests have left behind, held until claimed.",
    "short": "Items left behind",
    "example": "I will check with lost property about your bag.",
    "exampleTh": "จะตรวจสอบกับหน่วยรับของหายเกี่ยวกับกระเป๋าของคุณค่ะ",
    "collocation": "the lost property desk",
    "id": "cruise-v-lost-property",
    "progressKey": "Lost property",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Boarding pass",
    "level": 1,
    "th": "บัตรขึ้นเรือ",
    "phon": "/ˈbɔː.dɪŋ pɑːs/",
    "cat": "guest",
    "def": "The document allowing a guest to board the ship.",
    "short": "Document to board",
    "example": "Please have your boarding pass ready.",
    "exampleTh": "กรุณาเตรียมบัตรขึ้นเรือให้พร้อมค่ะ",
    "collocation": "show a boarding pass",
    "id": "cruise-v-boarding-pass",
    "progressKey": "Boarding pass",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-embark-001",
      "cruise-p-embark-009"
    ]
  },
  {
    "word": "Upgrade",
    "level": 2,
    "th": "อัปเกรดห้องพัก",
    "phon": "/ˈʌp.greɪd/",
    "cat": "guest",
    "def": "Moving a guest to a better cabin or service level.",
    "short": "Move to a better cabin",
    "example": "Let me check the availability and cost of an upgrade.",
    "exampleTh": "ขอตรวจสอบห้องที่ว่างและค่าใช้จ่ายในการอัปเกรดค่ะ",
    "collocation": "a cabin upgrade",
    "id": "cruise-v-upgrade",
    "progressKey": "Upgrade",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Loyalty tier",
    "level": 3,
    "th": "ระดับสมาชิกสะสมแต้ม",
    "phon": "/ˈlɔɪ.əl.ti tɪə/",
    "cat": "guest",
    "def": "A returning guest’s membership level, which brings extra benefits.",
    "short": "Returning-guest level",
    "example": "Your benefits depend on your loyalty tier and current conditions.",
    "exampleTh": "สิทธิประโยชน์ขึ้นอยู่กับระดับสมาชิกและเงื่อนไขปัจจุบัน",
    "collocation": "a loyalty tier",
    "id": "cruise-v-loyalty-tier",
    "progressKey": "Loyalty tier",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-selling-003"
    ]
  },
  {
    "word": "Complimentary",
    "level": 3,
    "th": "บริการฟรี",
    "phon": "/ˌkɒm.plɪˈmen.tər.i/",
    "cat": "guest",
    "def": "Provided free of charge.",
    "short": "Free of charge",
    "example": "Let me confirm whether this service is complimentary.",
    "exampleTh": "ขอยืนยันว่าบริการนี้ไม่คิดค่าใช้จ่ายหรือไม่ค่ะ",
    "collocation": "a complimentary service",
    "id": "cruise-v-complimentary",
    "progressKey": "Complimentary",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Onboard credit",
    "level": 2,
    "th": "เครดิตใช้จ่ายบนเรือ",
    "phon": "/ˈɒn.bɔːd ˈkred.ɪt/",
    "cat": "guest",
    "def": "Money given to a guest to spend on board.",
    "short": "Money to spend on board",
    "example": "I will check how your onboard credit can be used.",
    "exampleTh": "จะตรวจสอบวิธีใช้เครดิตบนเรือของคุณค่ะ",
    "collocation": "use onboard credit",
    "id": "cruise-v-onboard-credit",
    "progressKey": "Onboard credit",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Shore excursion desk",
    "level": 2,
    "th": "เคาน์เตอร์ทัวร์ชายฝั่ง",
    "phon": "/ʃɔː ɪkˈskɜː.ʃən desk/",
    "cat": "guest",
    "def": "The counter where guests book trips ashore.",
    "short": "Counter for booking trips ashore",
    "example": "The shore excursion desk can confirm your tour details.",
    "exampleTh": "เคาน์เตอร์ทัศนศึกษาบนฝั่งช่วยยืนยันรายละเอียดทัวร์ได้ค่ะ",
    "collocation": "the shore excursion desk",
    "id": "cruise-v-shore-excursion-desk",
    "progressKey": "Shore excursion desk",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Muster drill",
    "level": 2,
    "th": "การซ้อมรวมพลฉุกเฉิน",
    "phon": "/ˈmʌs.tə drɪl/",
    "cat": "safety",
    "def": "The compulsory safety practice all guests attend at the start of a cruise.",
    "short": "Compulsory safety practice",
    "example": "Please follow the ship's instructions for the muster drill.",
    "exampleTh": "กรุณาปฏิบัติตามคำแนะนำของเรือสำหรับการฝึกรวมพลค่ะ",
    "collocation": "attend a muster drill",
    "id": "cruise-v-muster-drill",
    "progressKey": "Muster drill",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-safety-001"
    ]
  },
  {
    "word": "Life jacket",
    "level": 1,
    "th": "เสื้อชูชีพ",
    "phon": "/ˈlaɪf ˌdʒæk.ɪt/",
    "cat": "safety",
    "def": "The vest that keeps a person afloat in water.",
    "short": "Vest that keeps you afloat",
    "example": "The crew will explain the life jacket instructions for this ship.",
    "exampleTh": "ลูกเรือจะอธิบายคำแนะนำเรื่องเสื้อชูชีพสำหรับเรือลำนี้",
    "collocation": "life jacket instructions",
    "id": "cruise-v-life-jacket",
    "progressKey": "Life jacket",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-safety-003",
      "cruise-p-safety-012"
    ]
  },
  {
    "word": "Lifeboat",
    "level": 1,
    "th": "เรือชูชีพ",
    "phon": "/ˈlaɪf.bəʊt/",
    "cat": "safety",
    "def": "The small boat used to evacuate people from a ship.",
    "short": "Boat used to evacuate",
    "example": "Follow the trained crew's instructions about the lifeboat.",
    "exampleTh": "ปฏิบัติตามคำแนะนำของลูกเรือที่ผ่านการฝึกเกี่ยวกับเรือชูชีพ",
    "collocation": "lifeboat instructions",
    "id": "cruise-v-lifeboat",
    "progressKey": "Lifeboat",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Emergency exit",
    "level": 1,
    "th": "ทางออกฉุกเฉิน",
    "phon": "/ɪˈmɜː.dʒən.si ˈek.sɪt/",
    "cat": "safety",
    "def": "The marked route out in an emergency.",
    "short": "Marked emergency route",
    "example": "Please keep the emergency exit clear.",
    "exampleTh": "กรุณาอย่าวางสิ่งของกีดขวางทางออกฉุกเฉินค่ะ",
    "collocation": "a clear emergency exit",
    "id": "cruise-v-emergency-exit",
    "progressKey": "Emergency exit",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Safety briefing",
    "level": 2,
    "th": "การชี้แจงความปลอดภัย",
    "phon": "/ˈseɪf.ti ˈbriː.fɪŋ/",
    "cat": "safety",
    "def": "The talk explaining what to do in an emergency.",
    "short": "Emergency instructions talk",
    "example": "Please listen carefully to the safety briefing.",
    "exampleTh": "กรุณาฟังการชี้แจงความปลอดภัยอย่างตั้งใจค่ะ",
    "collocation": "attend a safety briefing",
    "id": "cruise-v-safety-briefing",
    "progressKey": "Safety briefing",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-embark-004"
    ]
  },
  {
    "word": "General emergency alarm",
    "level": 3,
    "th": "สัญญาณฉุกเฉินทั่วไป",
    "phon": "/ˈdʒen.ər.əl ɪˈmɜː.dʒən.si əˈlɑːm/",
    "cat": "safety",
    "def": "The general emergency signal is seven or more short blasts followed by one long blast; follow ship-specific instructions.",
    "short": "Seven or more short blasts, then one long blast.",
    "example": "The safety briefing explains the general emergency alarm.",
    "exampleTh": "การชี้แจงความปลอดภัยอธิบายสัญญาณเตือนเหตุฉุกเฉินทั่วไป",
    "collocation": "the general emergency alarm",
    "id": "cruise-v-general-emergency-alarm",
    "progressKey": "General emergency alarm",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-safety-004"
    ]
  },
  {
    "word": "Man overboard",
    "level": 3,
    "th": "คนตกน้ำ",
    "phon": "/mæn ˈəʊ.və.bɔːd/",
    "cat": "safety",
    "def": "The call raised when a person has fallen into the sea.",
    "short": "Someone has fallen in the sea",
    "example": "A man overboard report must be passed on immediately.",
    "exampleTh": "ต้องรายงานเหตุคนตกน้ำทันที",
    "collocation": "a man overboard report",
    "id": "cruise-v-man-overboard",
    "progressKey": "Man overboard",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Fire door",
    "level": 2,
    "th": "ประตูกันไฟ",
    "phon": "/ˈfaɪə dɔː/",
    "cat": "safety",
    "def": "A heavy door that must stay closed to hold back fire.",
    "short": "Door that holds back fire",
    "example": "Please do not wedge the fire door open.",
    "exampleTh": "กรุณาอย่าใช้สิ่งของค้ำประตูกันไฟให้เปิดค้างค่ะ",
    "collocation": "a fire door",
    "id": "cruise-v-fire-door",
    "progressKey": "Fire door",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-safety-005"
    ]
  },
  {
    "word": "Sanitiser station",
    "level": 2,
    "th": "จุดเจลล้างมือ",
    "phon": "/ˈsæn.ɪ.taɪ.zə ˈsteɪ.ʃən/",
    "cat": "safety",
    "def": "A place providing hand sanitiser; it does not replace soap-and-water handwashing against norovirus.",
    "short": "A hand-sanitiser point; handwashing is still needed.",
    "example": "This sanitiser station does not replace washing with soap and water.",
    "exampleTh": "จุดบริการเจลล้างมือนี้ไม่ทดแทนการล้างมือด้วยสบู่และน้ำ",
    "collocation": "a hand sanitiser station",
    "id": "cruise-v-sanitiser-station",
    "progressKey": "Sanitiser station",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Medical centre",
    "level": 2,
    "th": "ศูนย์การแพทย์บนเรือ",
    "phon": "/ˈmed.ɪ.kəl ˈsen.tə/",
    "cat": "safety",
    "def": "The ship’s clinic, staffed by a doctor and nurses.",
    "short": "The ship’s clinic",
    "example": "I will contact the medical centre for assistance.",
    "exampleTh": "จะติดต่อศูนย์การแพทย์เพื่อขอความช่วยเหลือค่ะ",
    "collocation": "contact the medical centre",
    "id": "cruise-v-medical-centre",
    "progressKey": "Medical centre",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Crew drill",
    "level": 2,
    "th": "การซ้อมของลูกเรือ",
    "phon": "/kruː drɪl/",
    "cat": "safety",
    "def": "A safety exercise for crew only, held regularly.",
    "short": "Crew-only safety exercise",
    "example": "Please check the instructions for today's crew drill.",
    "exampleTh": "กรุณาตรวจสอบคำแนะนำสำหรับการฝึกของลูกเรือวันนี้",
    "collocation": "a crew drill",
    "id": "cruise-v-crew-drill",
    "progressKey": "Crew drill",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Restricted area",
    "level": 2,
    "th": "พื้นที่หวงห้าม",
    "phon": "/rɪˈstrɪk.tɪd ˈeə.ri.ə/",
    "cat": "safety",
    "def": "A part of the ship guests are not allowed to enter.",
    "short": "Area guests may not enter",
    "example": "This is a restricted area for authorised personnel.",
    "exampleTh": "พื้นที่นี้จำกัดเฉพาะผู้ได้รับอนุญาตค่ะ",
    "collocation": "enter a restricted area",
    "id": "cruise-v-restricted-area",
    "progressKey": "Restricted area",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Port of call",
    "level": 2,
    "th": "ท่าเรือที่แวะจอด",
    "phon": "/pɔːt əv kɔːl/",
    "cat": "port",
    "def": "A place the ship stops so guests can go ashore.",
    "short": "A stop where guests go ashore",
    "example": "Please check the arrival information for our next port of call.",
    "exampleTh": "กรุณาตรวจสอบข้อมูลการมาถึงท่าเรือแวะแห่งถัดไปค่ะ",
    "collocation": "the next port of call",
    "id": "cruise-v-port-of-call",
    "progressKey": "Port of call",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Shore excursion",
    "level": 2,
    "th": "ทัวร์ชายฝั่ง",
    "phon": "/ʃɔː ɪkˈskɜː.ʃən/",
    "cat": "port",
    "def": "An organised trip ashore, booked through the ship.",
    "short": "Organised trip ashore",
    "example": "Would you like details of a shore excursion?",
    "exampleTh": "ต้องการรายละเอียดทัศนศึกษาบนฝั่งไหมคะ",
    "collocation": "book a shore excursion",
    "id": "cruise-v-shore-excursion",
    "progressKey": "Shore excursion",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-excursion-005"
    ]
  },
  {
    "word": "Tender boat",
    "level": 3,
    "th": "เรือเล็กรับส่งขึ้นฝั่ง",
    "phon": "/ˈten.də bəʊt/",
    "cat": "port",
    "def": "A small boat carrying guests ashore where the ship cannot dock.",
    "short": "Small boat to shore",
    "example": "Follow the crew's instructions when boarding the tender boat.",
    "exampleTh": "ปฏิบัติตามคำแนะนำลูกเรือขณะขึ้นเรือรับส่งค่ะ",
    "collocation": "board a tender boat",
    "id": "cruise-v-tender-boat",
    "progressKey": "Tender boat",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-excursion-002"
    ]
  },
  {
    "word": "All aboard time",
    "level": 2,
    "th": "เวลากลับขึ้นเรือ",
    "phon": "/ɔːl əˈbɔːd taɪm/",
    "cat": "port",
    "def": "The time by which every guest must be back on the ship.",
    "short": "Deadline to be back on board",
    "example": "Please confirm the all aboard time before going ashore.",
    "exampleTh": "กรุณายืนยันเวลาที่ทุกคนต้องกลับขึ้นเรือก่อนขึ้นฝั่งค่ะ",
    "collocation": "confirm the all aboard time",
    "id": "cruise-v-all-aboard-time",
    "progressKey": "All aboard time",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-excursion-001",
      "cruise-p-excursion-009"
    ]
  },
  {
    "word": "Embarkation",
    "level": 3,
    "th": "การขึ้นเรือ",
    "phon": "/ˌem.bɑːˈkeɪ.ʃən/",
    "cat": "port",
    "def": "The process of guests boarding the ship at the start of a cruise.",
    "short": "Boarding the ship",
    "example": "Please check your embarkation instructions.",
    "exampleTh": "กรุณาตรวจสอบคำแนะนำการขึ้นเรือค่ะ",
    "collocation": "embarkation instructions",
    "id": "cruise-v-embarkation",
    "progressKey": "Embarkation",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Disembarkation",
    "level": 3,
    "th": "การลงจากเรือ",
    "phon": "/ˌdɪs.em.bɑːˈkeɪ.ʃən/",
    "cat": "port",
    "def": "The process of guests leaving the ship at the end of a cruise.",
    "short": "Leaving the ship",
    "example": "Your disembarkation instructions explain when to leave.",
    "exampleTh": "คำแนะนำการลงจากเรือระบุว่าคุณควรออกเมื่อใดค่ะ",
    "collocation": "disembarkation instructions",
    "id": "cruise-v-disembarkation",
    "progressKey": "Disembarkation",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-farewell-001",
      "cruise-p-farewell-008"
    ]
  },
  {
    "word": "Itinerary",
    "level": 3,
    "th": "กำหนดการเดินเรือ",
    "phon": "/aɪˈtɪn.ər.ər.i/",
    "cat": "port",
    "def": "The planned route and schedule of ports for the cruise.",
    "short": "Planned route and schedule",
    "example": "The itinerary may change, so please check the latest announcement.",
    "exampleTh": "กำหนดการเดินทางอาจเปลี่ยน กรุณาตรวจสอบประกาศล่าสุดค่ะ",
    "collocation": "the current itinerary",
    "id": "cruise-v-itinerary",
    "progressKey": "Itinerary",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Sea day",
    "level": 1,
    "th": "วันแล่นเรือกลางทะเล",
    "phon": "/siː deɪ/",
    "cat": "port",
    "def": "A full day at sea with no port stop.",
    "short": "A full day at sea",
    "example": "The programme lists activities for our sea day.",
    "exampleTh": "กำหนดการแสดงกิจกรรมสำหรับวันที่เรือเดินทางอยู่ในทะเล",
    "collocation": "a sea day",
    "id": "cruise-v-sea-day",
    "progressKey": "Sea day",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Meeting point",
    "level": 1,
    "th": "จุดนัดพบ",
    "phon": "/ˈmiː.tɪŋ pɔɪnt/",
    "cat": "port",
    "def": "Where a tour group gathers before setting off.",
    "short": "Where a tour group gathers",
    "example": "Please check the meeting point on your tour ticket.",
    "exampleTh": "กรุณาตรวจสอบจุดนัดพบบนตั๋วทัวร์ค่ะ",
    "collocation": "the tour meeting point",
    "id": "cruise-v-meeting-point",
    "progressKey": "Meeting point",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-excursion-011"
    ]
  },
  {
    "word": "Guided tour",
    "level": 1,
    "th": "ทัวร์พร้อมไกด์",
    "phon": "/ˈgaɪ.dɪd tʊə/",
    "cat": "port",
    "def": "A trip led by a guide who explains what you see.",
    "short": "Trip led by a guide",
    "example": "Would you like information about the guided tour?",
    "exampleTh": "ต้องการข้อมูลเกี่ยวกับทัวร์พร้อมมัคคุเทศก์ไหมคะ",
    "collocation": "a guided tour",
    "id": "cruise-v-guided-tour",
    "progressKey": "Guided tour",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Local currency",
    "level": 2,
    "th": "สกุลเงินท้องถิ่น",
    "phon": "/ˈləʊ.kəl ˈkʌr.ən.si/",
    "cat": "port",
    "def": "The money used in the country the ship is visiting.",
    "short": "Money used in that country",
    "example": "Let me check the information about local currency.",
    "exampleTh": "ขอตรวจสอบข้อมูลเกี่ยวกับสกุลเงินท้องถิ่นค่ะ",
    "collocation": "use local currency",
    "id": "cruise-v-local-currency",
    "progressKey": "Local currency",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-excursion-004"
    ]
  },
  {
    "word": "Customs and immigration",
    "level": 3,
    "th": "ด่านศุลกากรและตรวจคนเข้าเมือง",
    "phon": "/ˈkʌs.təmz ənd ˌɪm.ɪˈgreɪ.ʃən/",
    "cat": "port",
    "def": "The official checks on people and goods entering a country.",
    "short": "Official border checks",
    "example": "Please follow the official customs and immigration instructions.",
    "exampleTh": "กรุณาปฏิบัติตามคำแนะนำทางการของศุลกากรและตรวจคนเข้าเมืองค่ะ",
    "collocation": "customs and immigration checks",
    "id": "cruise-v-customs-and-immigration",
    "progressKey": "Customs and immigration",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Crew mess",
    "level": 2,
    "th": "โรงอาหารลูกเรือ",
    "phon": "/kruː mes/",
    "cat": "crew",
    "def": "The crew dining room.",
    "short": "Crew dining room",
    "example": "Please check the meal times for the crew mess.",
    "exampleTh": "กรุณาตรวจสอบเวลาอาหารของห้องอาหารลูกเรือ",
    "collocation": "the crew mess",
    "id": "cruise-v-crew-mess",
    "progressKey": "Crew mess",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Cabin mate",
    "level": 1,
    "th": "เพื่อนร่วมห้องพัก",
    "phon": "/ˈkæb.ɪn meɪt/",
    "cat": "crew",
    "def": "The crew member who shares your cabin.",
    "short": "Person sharing your cabin",
    "example": "Please agree on quiet hours with your cabin mate.",
    "exampleTh": "กรุณาตกลงช่วงเวลางดเสียงดังกับเพื่อนร่วมห้อง",
    "collocation": "your cabin mate",
    "id": "cruise-v-cabin-mate",
    "progressKey": "Cabin mate",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Duty roster",
    "level": 2,
    "th": "ตารางเวรปฏิบัติงาน",
    "phon": "/ˈdʒuː.ti ˈrɒs.tə/",
    "cat": "crew",
    "def": "The schedule showing who works which shift.",
    "short": "Shift schedule",
    "example": "Your shift is shown on the duty roster.",
    "exampleTh": "กะทำงานของคุณแสดงอยู่ในตารางเวร",
    "collocation": "check the duty roster",
    "id": "cruise-v-duty-roster",
    "progressKey": "Duty roster",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Watch",
    "level": 2,
    "th": "ช่วงเวลาเข้าเวร",
    "phon": "/wɒtʃ/",
    "cat": "crew",
    "def": "A set period of duty on board.",
    "short": "A set period of duty",
    "example": "Please pass this information to the next watch.",
    "exampleTh": "กรุณาส่งต่อข้อมูลนี้ให้เวรถัดไป",
    "collocation": "the next watch",
    "id": "cruise-v-watch",
    "progressKey": "Watch",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-safety-010",
      "cruise-p-crewtalk-003"
    ]
  },
  {
    "word": "Handover log",
    "level": 2,
    "th": "สมุดบันทึกส่งงาน",
    "phon": "/ˈhænd.əʊ.və lɒg/",
    "cat": "crew",
    "def": "The written record passed to the next shift.",
    "short": "Written record for next shift",
    "example": "Please record the request in the handover log.",
    "exampleTh": "กรุณาบันทึกคำขอในสมุดส่งมอบงาน",
    "collocation": "update the handover log",
    "id": "cruise-v-handover-log",
    "progressKey": "Handover log",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Department head",
    "level": 2,
    "th": "หัวหน้าแผนก",
    "phon": "/dɪˈpɑːt.mənt hed/",
    "cat": "crew",
    "def": "The manager in charge of a department on board.",
    "short": "Manager of a department",
    "example": "I will raise this with the department head.",
    "exampleTh": "จะส่งเรื่องนี้ให้หัวหน้าแผนกค่ะ",
    "collocation": "contact the department head",
    "id": "cruise-v-department-head",
    "progressKey": "Department head",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-complaints-003",
      "cruise-p-crewtalk-004"
    ]
  },
  {
    "word": "Sign-on",
    "level": 2,
    "th": "เริ่มสัญญาจ้าง",
    "phon": "/ˈsaɪn.ɒn/",
    "cat": "crew",
    "def": "Joining the ship at the start of a contract.",
    "short": "Joining at contract start",
    "example": "Please check your sign-on documents.",
    "exampleTh": "กรุณาตรวจสอบเอกสารเข้าประจำเรือ",
    "collocation": "sign-on documents",
    "id": "cruise-v-sign-on",
    "progressKey": "Sign-on",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Sign-off",
    "level": 2,
    "th": "สิ้นสุดสัญญาจ้าง",
    "phon": "/ˈsaɪn.ɒf/",
    "cat": "crew",
    "def": "Leaving the ship at the end of a contract.",
    "short": "Leaving at contract end",
    "example": "The office will confirm your sign-off arrangements.",
    "exampleTh": "สำนักงานจะยืนยันการจัดเตรียมเรื่องออกจากประจำเรือ",
    "collocation": "sign-off arrangements",
    "id": "cruise-v-sign-off",
    "progressKey": "Sign-off",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Shore leave",
    "level": 2,
    "th": "วันลาขึ้นฝั่ง",
    "phon": "/ʃɔː liːv/",
    "cat": "crew",
    "def": "Permitted time off the ship while in port.",
    "short": "Time off the ship in port",
    "example": "Please confirm your shore leave approval before leaving.",
    "exampleTh": "กรุณายืนยันการอนุมัติขึ้นฝั่งก่อนออกไป",
    "collocation": "shore leave approval",
    "id": "cruise-v-shore-leave",
    "progressKey": "Shore leave",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Overtime",
    "level": 1,
    "th": "ทำงานล่วงเวลา",
    "phon": "/ˈəʊ.və.taɪm/",
    "cat": "crew",
    "def": "Hours worked beyond your normal shift.",
    "short": "Hours beyond your shift",
    "example": "Please record overtime according to the company procedure.",
    "exampleTh": "กรุณาบันทึกการทำงานล่วงเวลาตามขั้นตอนบริษัท",
    "collocation": "record overtime",
    "id": "cruise-v-overtime",
    "progressKey": "Overtime",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Crew training",
    "level": 1,
    "th": "การอบรมลูกเรือ",
    "phon": "/kruː ˈtreɪ.nɪŋ/",
    "cat": "crew",
    "def": "Sessions teaching crew safety and service standards.",
    "short": "Safety and service sessions",
    "example": "Please attend the assigned crew training.",
    "exampleTh": "กรุณาเข้าร่วมการฝึกลูกเรือตามที่ได้รับมอบหมาย",
    "collocation": "crew training session",
    "id": "cruise-v-crew-training",
    "progressKey": "Crew training",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Contract",
    "level": 1,
    "th": "สัญญาจ้างงาน",
    "phon": "/ˈkɒn.trækt/",
    "cat": "crew",
    "def": "The agreement setting out the length and terms of your work on board.",
    "short": "Your work agreement",
    "example": "Please ask the office about anything unclear in your contract.",
    "exampleTh": "กรุณาสอบถามสำนักงานหากมีข้อใดในสัญญาที่ไม่ชัดเจน",
    "collocation": "read your contract",
    "id": "cruise-v-contract",
    "progressKey": "Contract",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Seasickness",
    "level": 2,
    "th": "อาการเมาเรือ",
    "phon": "/ˈsiː.sɪk.nəs/",
    "cat": "care",
    "def": "Nausea caused by the movement of the ship.",
    "short": "Nausea from ship movement",
    "example": "The medical team can advise you about seasickness.",
    "exampleTh": "ทีมแพทย์ให้คำแนะนำเรื่องอาการเมาเรือได้ค่ะ",
    "collocation": "seasickness advice",
    "id": "cruise-v-seasickness",
    "progressKey": "Seasickness",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-care-002"
    ]
  },
  {
    "word": "Motion sickness tablet",
    "level": 2,
    "th": "ยาแก้เมาเรือ",
    "phon": "/ˈməʊ.ʃən ˈsɪk.nəs ˈtæb.lət/",
    "cat": "care",
    "def": "Medicine used for motion sickness. Refer questions about its suitability or use to the medical team.",
    "short": "Motion-sickness medicine: ask the medical team.",
    "example": "Please ask the medical team before taking a motion sickness tablet.",
    "exampleTh": "กรุณาสอบถามทีมแพทย์ก่อนใช้ยาแก้เมารถเมาเรือค่ะ",
    "collocation": "a motion sickness tablet",
    "id": "cruise-v-motion-sickness-tablet",
    "progressKey": "Motion sickness tablet",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Mobility assistance",
    "level": 3,
    "th": "ความช่วยเหลือด้านการเคลื่อนไหว",
    "phon": "/məʊˈbɪl.ə.ti əˈsɪs.təns/",
    "cat": "care",
    "def": "Help for guests who find walking or standing difficult.",
    "short": "Help for guests who struggle to walk",
    "example": "Would you like mobility assistance?",
    "exampleTh": "ต้องการความช่วยเหลือในการเคลื่อนที่ไหมคะ",
    "collocation": "request mobility assistance",
    "id": "cruise-v-mobility-assistance",
    "progressKey": "Mobility assistance",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Wheelchair access",
    "level": 2,
    "th": "ทางเข้าสำหรับรถเข็น",
    "phon": "/ˈwiːl.tʃeə ˈæk.ses/",
    "cat": "care",
    "def": "A route or facility a wheelchair user can use.",
    "short": "Route usable by a wheelchair",
    "example": "Let me check wheelchair access for this route.",
    "exampleTh": "ขอตรวจสอบเส้นทางที่รถเข็นเข้าถึงได้ค่ะ",
    "collocation": "check wheelchair access",
    "id": "cruise-v-wheelchair-access",
    "progressKey": "Wheelchair access",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Priority boarding",
    "level": 2,
    "th": "สิทธิ์ขึ้นเรือก่อน",
    "phon": "/praɪˈɒr.ə.ti ˈbɔː.dɪŋ/",
    "cat": "care",
    "def": "Letting certain guests board before the rest.",
    "short": "Boarding before others",
    "example": "Let me check the arrangements for priority boarding.",
    "exampleTh": "ขอตรวจสอบการจัดเตรียมบริการขึ้นเรือก่อนค่ะ",
    "collocation": "priority boarding arrangements",
    "id": "cruise-v-priority-boarding",
    "progressKey": "Priority boarding",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Special assistance",
    "level": 2,
    "th": "ความช่วยเหลือเป็นพิเศษ",
    "phon": "/ˈspeʃ.əl əˈsɪs.təns/",
    "cat": "care",
    "def": "Extra help arranged in advance for a guest’s needs.",
    "short": "Pre-arranged extra help",
    "example": "What special assistance would be helpful for you?",
    "exampleTh": "ความช่วยเหลือพิเศษแบบใดจะเป็นประโยชน์ต่อคุณคะ",
    "collocation": "request special assistance",
    "id": "cruise-v-special-assistance",
    "progressKey": "Special assistance",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Quiet zone",
    "level": 1,
    "th": "โซนเงียบ",
    "phon": "/ˈkwaɪ.ət zəʊn/",
    "cat": "care",
    "def": "An area of the ship kept free of music and children.",
    "short": "Area kept quiet",
    "example": "Please keep your voice low in the quiet zone.",
    "exampleTh": "กรุณาใช้เสียงเบาในเขตเงียบค่ะ",
    "collocation": "a quiet zone",
    "id": "cruise-v-quiet-zone",
    "progressKey": "Quiet zone",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Elderly guest",
    "level": 1,
    "th": "ผู้โดยสารสูงอายุ",
    "phon": "/ˈel.dəl.i gest/",
    "cat": "care",
    "def": "An older passenger, who may need more time and care.",
    "short": "An older passenger",
    "example": "Ask an elderly guest what help they would prefer.",
    "exampleTh": "สอบถามแขกสูงอายุว่าต้องการความช่วยเหลือแบบใด",
    "collocation": "an elderly guest",
    "id": "cruise-v-elderly-guest",
    "progressKey": "Elderly guest",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Unaccompanied minor",
    "level": 3,
    "th": "ผู้เยาว์เดินทางลำพัง",
    "phon": "/ˌʌn.əˈkʌm.pə.nid ˈmaɪ.nə/",
    "cat": "care",
    "def": "A child travelling without a parent or guardian.",
    "short": "Child travelling alone",
    "example": "Please follow the safeguarding procedure for an unaccompanied minor.",
    "exampleTh": "กรุณาปฏิบัติตามขั้นตอนคุ้มครองเด็กสำหรับผู้เยาว์ที่ไม่มีผู้ดูแลมาด้วย",
    "collocation": "an unaccompanied minor",
    "id": "cruise-v-unaccompanied-minor",
    "progressKey": "Unaccompanied minor",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Accessibility",
    "level": 3,
    "th": "การเข้าถึงสำหรับทุกคน",
    "phon": "/əkˌses.əˈbɪl.ə.ti/",
    "cat": "care",
    "def": "How easily a place can be used by people with disabilities.",
    "short": "Ease of use for disabled guests",
    "example": "Let me check the accessibility information for the venue.",
    "exampleTh": "ขอตรวจสอบข้อมูลการเข้าถึงสถานที่สำหรับผู้มีข้อจำกัดในการใช้งานค่ะ",
    "collocation": "accessibility information",
    "id": "cruise-v-accessibility",
    "progressKey": "Accessibility",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Curfew",
    "level": 2,
    "th": "เวลาห้ามออกนอกห้อง",
    "phon": "/ˈkɜː.fjuː/",
    "cat": "care",
    "def": "A time after which young guests must be back in their cabin.",
    "short": "Time young guests must return",
    "example": "Please check the applicable curfew in the current policy.",
    "exampleTh": "กรุณาตรวจสอบข้อกำหนดเรื่องเวลาในนโยบายปัจจุบัน",
    "collocation": "curfew rules",
    "id": "cruise-v-curfew",
    "progressKey": "Curfew",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Guest comment card",
    "level": 1,
    "th": "บัตรแสดงความคิดเห็น",
    "phon": "/gest ˈkɒm.ent kɑːd/",
    "cat": "care",
    "def": "A short form guests use to give feedback.",
    "short": "Form for guest feedback",
    "example": "Would you like to complete a guest comment card?",
    "exampleTh": "ต้องการกรอกบัตรแสดงความคิดเห็นไหมคะ",
    "collocation": "a guest comment card",
    "id": "cruise-v-guest-comment-card",
    "progressKey": "Guest comment card",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Towel",
    "th": "ผ้าขนหนู",
    "phon": "/taʊəl/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A piece of cloth used for drying or covering.",
    "example": "Here is a clean towel.",
    "exampleTh": "นี่คือผ้าขนหนูสะอาดค่ะ",
    "collocation": "a clean towel",
    "added": true,
    "def": "A piece of cloth used for drying or covering.",
    "id": "cruise-v-towel",
    "progressKey": "Towel",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-004",
      "cruise-p-cabin-008",
      "cruise-p-crewtalk-005",
      "cruise-p-crewtalk-008"
    ]
  },
  {
    "word": "Blanket",
    "th": "ผ้าห่ม",
    "phon": "/ˈblæŋ.kɪt/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A cover used to keep someone warm.",
    "example": "Would you like another blanket?",
    "exampleTh": "ต้องการผ้าห่มเพิ่มไหมคะ",
    "collocation": "an extra blanket",
    "added": true,
    "def": "A cover used to keep someone warm.",
    "id": "cruise-v-blanket",
    "progressKey": "Blanket",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-006",
      "cruise-p-cabin-010"
    ]
  },
  {
    "word": "Pillow",
    "th": "หมอน",
    "phon": "/ˈpɪl.əʊ/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A soft support for the head or body.",
    "example": "Would you like a smaller pillow?",
    "exampleTh": "ต้องการหมอนใบเล็กลงไหมคะ",
    "collocation": "a soft pillow",
    "added": true,
    "def": "A soft support for the head or body.",
    "id": "cruise-v-pillow",
    "progressKey": "Pillow",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-006",
      "cruise-p-cabin-009",
      "cruise-p-crewtalk-001"
    ]
  },
  {
    "word": "Cushion",
    "th": "หมอนอิง / เบาะรอง",
    "phon": "/ˈkʊʃ.ən/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A soft pad used for support or comfort.",
    "example": "Would you like a cushion for your chair?",
    "exampleTh": "ต้องการหมอนรองเก้าอี้ไหมคะ",
    "collocation": "a chair cushion",
    "added": true,
    "def": "A soft pad used for support or comfort.",
    "id": "cruise-v-cushion",
    "progressKey": "Cushion",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Sheet",
    "th": "ผ้าปู",
    "phon": "/ʃiːt/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A large piece of cloth covering a bed or table.",
    "example": "Would you like a fresh sheet?",
    "exampleTh": "ต้องการผ้าปูที่นอนผืนใหม่ไหมคะ",
    "collocation": "a fresh sheet",
    "added": true,
    "def": "A large piece of cloth covering a bed or table.",
    "id": "cruise-v-sheet",
    "progressKey": "Sheet",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Tissue",
    "th": "กระดาษเช็ดหน้า",
    "phon": "/ˈtɪʃ.uː/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "Soft paper used for wiping the face or hands.",
    "example": "Would you like a tissue?",
    "exampleTh": "ต้องการกระดาษเช็ดหน้าไหมคะ",
    "collocation": "a box of tissues",
    "added": true,
    "def": "Soft paper used for wiping the face or hands.",
    "id": "cruise-v-tissue",
    "progressKey": "Tissue",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Soap",
    "th": "สบู่",
    "phon": "/səʊp/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A product used with water for washing.",
    "example": "Soap is beside the washbasin.",
    "exampleTh": "สบู่อยู่ข้างอ่างล้างมือค่ะ",
    "collocation": "soap and water",
    "added": true,
    "def": "A product used with water for washing.",
    "id": "cruise-v-soap",
    "progressKey": "Soap",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-safety-006",
      "cruise-p-hygiene-001",
      "cruise-p-hygiene-004"
    ]
  },
  {
    "word": "Shampoo",
    "th": "แชมพู",
    "phon": "/ʃæmˈpuː/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A product used for washing hair.",
    "example": "Shampoo is available in the shower.",
    "exampleTh": "มีแชมพูในห้องอาบน้ำค่ะ",
    "collocation": "a bottle of shampoo",
    "added": true,
    "def": "A product used for washing hair.",
    "id": "cruise-v-shampoo",
    "progressKey": "Shampoo",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Basket",
    "th": "ตะกร้า",
    "phon": "/ˈbɑː.skɪt/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A container used for holding small items.",
    "example": "The towels are in this basket.",
    "exampleTh": "ผ้าขนหนูอยู่ในตะกร้านี้ค่ะ",
    "collocation": "a towel basket",
    "added": true,
    "def": "A container used for holding small items.",
    "id": "cruise-v-basket",
    "progressKey": "Basket",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Mirror",
    "th": "กระจก",
    "phon": "/ˈmɪr.ər/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A surface in which you can see yourself.",
    "example": "I will report the broken mirror.",
    "exampleTh": "จะรายงานเรื่องกระจกที่แตกค่ะ",
    "collocation": "a cabin mirror",
    "added": true,
    "def": "A surface in which you can see yourself.",
    "id": "cruise-v-mirror",
    "progressKey": "Mirror",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Cup",
    "th": "ถ้วย",
    "phon": "/kʌp/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "A small container for a drink.",
    "example": "Would you like a cup of water?",
    "exampleTh": "ต้องการน้ำสักถ้วยไหมคะ",
    "collocation": "a cup of water",
    "added": true,
    "def": "A small container for a drink.",
    "id": "cruise-v-cup",
    "progressKey": "Cup",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Water",
    "th": "น้ำ",
    "phon": "/ˈwɔː.tər/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "The clear liquid people drink and use for washing.",
    "example": "Would you like some water?",
    "exampleTh": "ต้องการน้ำไหมคะ",
    "collocation": "drinking water",
    "added": true,
    "def": "The clear liquid people drink and use for washing.",
    "id": "cruise-v-water",
    "progressKey": "Water",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-bar-007",
      "cruise-p-safety-006",
      "cruise-p-hygiene-001"
    ]
  },
  {
    "word": "Allergy",
    "th": "อาการแพ้ / ภาวะแพ้",
    "phon": "/ˈæl.ə.dʒi/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "A reaction of the body to a particular substance.",
    "example": "Do you have an allergy we should know about?",
    "exampleTh": "มีอาการแพ้ที่เราควรทราบไหมคะ",
    "collocation": "a known allergy",
    "added": true,
    "def": "A reaction of the body to a particular substance.",
    "id": "cruise-v-allergy",
    "progressKey": "Allergy",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Ingredient",
    "th": "ส่วนผสม",
    "phon": "/ɪnˈɡriː.di.ənt/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "One of the substances used to make a product.",
    "example": "Let me check the ingredient list.",
    "exampleTh": "ขอตรวจสอบรายการส่วนผสมค่ะ",
    "collocation": "ingredient list",
    "added": true,
    "def": "One of the substances used to make a product.",
    "id": "cruise-v-ingredient",
    "progressKey": "Ingredient",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-dining-012"
    ]
  },
  {
    "word": "Comfortable",
    "th": "สบาย",
    "phon": "/ˈkʌm.fə.tə.bəl/",
    "pos": "adjective",
    "cat": "care",
    "level": 1,
    "short": "Feeling relaxed and without discomfort.",
    "example": "Are you comfortable?",
    "exampleTh": "คุณรู้สึกสบายดีไหมคะ",
    "collocation": "feel comfortable",
    "added": true,
    "def": "Feeling relaxed and without discomfort.",
    "id": "cruise-v-comfortable",
    "progressKey": "Comfortable",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Uncomfortable",
    "th": "ไม่สบายตัว",
    "phon": "/ʌnˈkʌm.fə.tə.bəl/",
    "pos": "adjective",
    "cat": "care",
    "level": 1,
    "short": "Not feeling physically comfortable.",
    "example": "Please tell me if you feel uncomfortable.",
    "exampleTh": "กรุณาบอกหากรู้สึกไม่สบายตัวค่ะ",
    "collocation": "feel uncomfortable",
    "added": true,
    "def": "Not feeling physically comfortable.",
    "id": "cruise-v-uncomfortable",
    "progressKey": "Uncomfortable",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Warm",
    "th": "อุ่น",
    "phon": "/wɔːm/",
    "pos": "adjective",
    "cat": "care",
    "level": 1,
    "short": "A little hot, but not very hot.",
    "example": "Is this towel warm enough?",
    "exampleTh": "ผ้าขนหนูผืนนี้อุ่นพอไหมคะ",
    "collocation": "a warm towel",
    "added": true,
    "def": "A little hot, but not very hot.",
    "id": "cruise-v-warm",
    "progressKey": "Warm",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Cool",
    "th": "เย็น",
    "phon": "/kuːl/",
    "pos": "adjective",
    "cat": "care",
    "level": 1,
    "short": "A little cold rather than warm.",
    "example": "Would you prefer a cool towel?",
    "exampleTh": "ต้องการผ้าขนหนูเย็นไหมคะ",
    "collocation": "a cool towel",
    "added": true,
    "def": "A little cold rather than warm.",
    "id": "cruise-v-cool",
    "progressKey": "Cool",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Hot",
    "th": "ร้อน",
    "phon": "/hɒt/",
    "pos": "adjective",
    "cat": "care",
    "level": 1,
    "short": "Having a high temperature.",
    "example": "Please tell me if the towel feels too hot.",
    "exampleTh": "กรุณาบอกหากผ้าขนหนูร้อนเกินไปค่ะ",
    "collocation": "too hot",
    "added": true,
    "def": "Having a high temperature.",
    "id": "cruise-v-hot",
    "progressKey": "Hot",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Cold",
    "th": "หนาว / เย็น",
    "phon": "/kəʊld/",
    "pos": "adjective",
    "cat": "care",
    "level": 1,
    "short": "Having a low temperature or feeling a lack of warmth.",
    "example": "Are you feeling cold?",
    "exampleTh": "คุณรู้สึกหนาวไหมคะ",
    "collocation": "feel cold",
    "added": true,
    "def": "Having a low temperature or feeling a lack of warmth.",
    "id": "cruise-v-cold",
    "progressKey": "Cold",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Pain",
    "th": "ความเจ็บปวด",
    "phon": "/peɪn/",
    "pos": "noun",
    "cat": "care",
    "level": 1,
    "short": "An unpleasant feeling that something hurts.",
    "example": "Please tell me immediately if you feel pain.",
    "exampleTh": "กรุณาบอกทันทีหากรู้สึกเจ็บค่ะ",
    "collocation": "feel pain",
    "added": true,
    "def": "An unpleasant feeling that something hurts.",
    "id": "cruise-v-pain",
    "progressKey": "Pain",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Dizzy",
    "th": "เวียนศีรษะ",
    "phon": "/ˈdɪz.i/",
    "pos": "adjective",
    "cat": "care",
    "level": 1,
    "short": "Feeling unsteady or as if things are moving.",
    "example": "Please tell me if you feel dizzy.",
    "exampleTh": "กรุณาบอกหากรู้สึกเวียนศีรษะค่ะ",
    "collocation": "feel dizzy",
    "added": true,
    "def": "Feeling unsteady or as if things are moving.",
    "id": "cruise-v-dizzy",
    "progressKey": "Dizzy",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Sensitive",
    "th": "ไวต่อการสัมผัสหรือการระคายเคือง",
    "phon": "/ˈsen.sɪ.tɪv/",
    "pos": "adjective",
    "cat": "care",
    "level": 1,
    "short": "Easily affected by touch or by a product.",
    "example": "Are you sensitive to strong fragrances?",
    "exampleTh": "คุณไวต่อกลิ่นหอมฉุน ๆ ไหมคะ",
    "collocation": "sensitive to fragrance",
    "added": true,
    "def": "Easily affected by touch or by a product.",
    "id": "cruise-v-sensitive",
    "progressKey": "Sensitive",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Temperature",
    "th": "อุณหภูมิ",
    "phon": "/ˈtem.prə.tʃər/",
    "pos": "noun",
    "cat": "care",
    "level": 1,
    "short": "How hot or cold something is.",
    "example": "Would you like me to check the cabin temperature?",
    "exampleTh": "ต้องการให้ตรวจสอบอุณหภูมิในห้องพักไหมคะ",
    "collocation": "cabin temperature",
    "added": true,
    "def": "How hot or cold something is.",
    "id": "cruise-v-temperature",
    "progressKey": "Temperature",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Quiet",
    "th": "เงียบ",
    "phon": "/ˈkwaɪ.ət/",
    "pos": "adjective",
    "cat": "care",
    "level": 1,
    "short": "Making very little noise.",
    "example": "Would you like a quiet table?",
    "exampleTh": "ต้องการโต๊ะที่เงียบไหมคะ",
    "collocation": "a quiet table",
    "added": true,
    "def": "Making very little noise.",
    "id": "cruise-v-quiet",
    "progressKey": "Quiet",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Unwell",
    "th": "รู้สึกไม่สบาย",
    "phon": "/ʌnˈwel/",
    "pos": "adjective",
    "cat": "care",
    "level": 1,
    "short": "Not feeling well.",
    "example": "Please tell me if you feel unwell.",
    "exampleTh": "กรุณาบอกหากรู้สึกไม่สบายค่ะ",
    "collocation": "feel unwell",
    "added": true,
    "def": "Not feeling well.",
    "id": "cruise-v-unwell",
    "progressKey": "Unwell",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-care-001",
      "cruise-p-hygiene-002"
    ]
  },
  {
    "word": "Payment",
    "th": "การชำระเงิน",
    "phon": "/ˈpeɪ.mənt/",
    "pos": "noun",
    "cat": "guest",
    "level": 1,
    "short": "Money given for a product or service.",
    "example": "Which payment method would you prefer?",
    "exampleTh": "สะดวกชำระเงินด้วยวิธีใดคะ",
    "collocation": "payment method",
    "added": true,
    "def": "Money given for a product or service.",
    "id": "cruise-v-payment",
    "progressKey": "Payment",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-account-002",
      "cruise-p-account-004"
    ]
  },
  {
    "word": "Cash",
    "th": "เงินสด",
    "phon": "/kæʃ/",
    "pos": "noun",
    "cat": "guest",
    "level": 1,
    "short": "Money in notes and coins.",
    "example": "Would you like to pay in cash?",
    "exampleTh": "ต้องการชำระด้วยเงินสดไหมคะ",
    "collocation": "pay in cash",
    "added": true,
    "def": "Money in notes and coins.",
    "id": "cruise-v-cash",
    "progressKey": "Cash",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Receipt",
    "th": "ใบเสร็จรับเงิน",
    "phon": "/rɪˈsiːt/",
    "pos": "noun",
    "cat": "guest",
    "level": 1,
    "short": "A record showing that payment has been made.",
    "example": "Would you like a receipt?",
    "exampleTh": "ต้องการใบเสร็จรับเงินไหมคะ",
    "collocation": "issue a receipt",
    "added": true,
    "def": "A record showing that payment has been made.",
    "id": "cruise-v-receipt",
    "progressKey": "Receipt",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Refund",
    "th": "การคืนเงิน",
    "phon": "/ˈriː.fʌnd/",
    "pos": "noun",
    "cat": "guest",
    "level": 1,
    "short": "Money paid back after a payment.",
    "example": "Let me check our refund policy.",
    "exampleTh": "ขอตรวจสอบนโยบายการคืนเงินก่อนนะคะ",
    "collocation": "refund policy",
    "added": true,
    "def": "Money paid back after a payment.",
    "id": "cruise-v-refund",
    "progressKey": "Refund",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Discount",
    "th": "ส่วนลด",
    "phon": "/ˈdɪs.kaʊnt/",
    "pos": "noun",
    "cat": "guest",
    "level": 1,
    "short": "A reduction in the usual price.",
    "example": "I will check whether this discount applies.",
    "exampleTh": "จะตรวจสอบว่าสามารถใช้ส่วนลดนี้ได้หรือไม่ค่ะ",
    "collocation": "apply a discount",
    "added": true,
    "def": "A reduction in the usual price.",
    "id": "cruise-v-discount",
    "progressKey": "Discount",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Total",
    "th": "ยอดรวม",
    "phon": "/ˈtəʊ.təl/",
    "pos": "noun",
    "cat": "guest",
    "level": 1,
    "short": "The full amount after all charges are added.",
    "example": "Please check the total before you pay.",
    "exampleTh": "กรุณาตรวจสอบยอดรวมก่อนชำระค่ะ",
    "collocation": "the total amount",
    "added": true,
    "def": "The full amount after all charges are added.",
    "id": "cruise-v-total",
    "progressKey": "Total",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Confirmation",
    "th": "การยืนยัน",
    "phon": "/ˌkɒn.fəˈmeɪ.ʃən/",
    "pos": "noun",
    "cat": "guest",
    "level": 1,
    "short": "A message showing that an arrangement is agreed.",
    "example": "Please show your excursion confirmation.",
    "exampleTh": "กรุณาแสดงหลักฐานยืนยันการจองทัศนศึกษาค่ะ",
    "collocation": "excursion confirmation",
    "added": true,
    "def": "A message showing that an arrangement is agreed.",
    "id": "cruise-v-confirmation",
    "progressKey": "Confirmation",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Email address",
    "th": "ที่อยู่อีเมล",
    "phon": "/ˈiː.meɪl əˌdres/",
    "pos": "noun",
    "cat": "guest",
    "level": 1,
    "short": "The address used to send someone an email.",
    "example": "Could you confirm your email address for the receipt?",
    "exampleTh": "ช่วยยืนยันอีเมลสำหรับส่งใบเสร็จได้ไหมคะ",
    "collocation": "confirm an email address",
    "added": true,
    "def": "The address used to send someone an email.",
    "id": "cruise-v-email-address",
    "progressKey": "Email address",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Phone number",
    "th": "หมายเลขโทรศัพท์",
    "phon": "/ˈfəʊn ˌnʌm.bər/",
    "pos": "noun",
    "cat": "guest",
    "level": 1,
    "short": "The number used to contact someone by phone.",
    "example": "May I have your phone number?",
    "exampleTh": "ขอหมายเลขโทรศัพท์ได้ไหมคะ",
    "collocation": "contact phone number",
    "added": true,
    "def": "The number used to contact someone by phone.",
    "id": "cruise-v-phone-number",
    "progressKey": "Phone number",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Surname",
    "th": "นามสกุล",
    "phon": "/ˈsɜː.neɪm/",
    "pos": "noun",
    "cat": "guest",
    "level": 1,
    "short": "A person's family name.",
    "example": "Could you spell your surname, please?",
    "exampleTh": "ช่วยสะกดนามสกุลได้ไหมคะ",
    "collocation": "spell your surname",
    "added": true,
    "def": "A person's family name.",
    "id": "cruise-v-surname",
    "progressKey": "Surname",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Signature",
    "th": "ลายมือชื่อ",
    "phon": "/ˈsɪɡ.nə.tʃər/",
    "pos": "noun",
    "cat": "guest",
    "level": 1,
    "short": "A person's name written to confirm something.",
    "example": "Please check the details before adding your signature.",
    "exampleTh": "กรุณาตรวจสอบรายละเอียดก่อนลงลายมือชื่อค่ะ",
    "collocation": "your signature",
    "added": true,
    "def": "A person's name written to confirm something.",
    "id": "cruise-v-signature",
    "progressKey": "Signature",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Waiting time",
    "th": "ระยะเวลารอ",
    "phon": "/ˈweɪ.tɪŋ taɪm/",
    "pos": "noun",
    "cat": "guest",
    "level": 1,
    "short": "How long someone needs to wait.",
    "example": "I will check the current waiting time.",
    "exampleTh": "จะตรวจสอบระยะเวลารอขณะนี้ค่ะ",
    "collocation": "estimated waiting time",
    "added": true,
    "def": "How long someone needs to wait.",
    "id": "cruise-v-waiting-time",
    "progressKey": "Waiting time",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Adjust",
    "th": "ปรับ",
    "phon": "/əˈdʒʌst/",
    "pos": "verb",
    "cat": "communication",
    "level": 1,
    "short": "Change something slightly to make it more suitable.",
    "example": "May I adjust the air conditioning?",
    "exampleTh": "ขอปรับเครื่องปรับอากาศได้ไหมคะ",
    "collocation": "adjust the air conditioning",
    "added": true,
    "def": "Change something slightly to make it more suitable.",
    "id": "cruise-v-adjust",
    "progressKey": "Adjust",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Stop",
    "th": "หยุด",
    "phon": "/stɒp/",
    "pos": "verb",
    "cat": "communication",
    "level": 1,
    "short": "End an action immediately.",
    "example": "Please stop here while I check the route.",
    "exampleTh": "กรุณาหยุดตรงนี้ระหว่างที่ตรวจสอบเส้นทางค่ะ",
    "collocation": "stop here",
    "added": true,
    "def": "End an action immediately.",
    "id": "cruise-v-stop",
    "progressKey": "Stop",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Check",
    "th": "ตรวจสอบ",
    "phon": "/tʃek/",
    "pos": "verb",
    "cat": "communication",
    "level": 1,
    "short": "Look at something carefully to confirm it.",
    "example": "Let me check the details.",
    "exampleTh": "ขอตรวจสอบรายละเอียดก่อนนะคะ",
    "collocation": "check the details",
    "added": true,
    "def": "Look at something carefully to confirm it.",
    "id": "cruise-v-check",
    "progressKey": "Check",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-everyday-010",
      "cruise-p-embark-003",
      "cruise-p-embark-007",
      "cruise-p-embark-011"
    ]
  },
  {
    "word": "Confirm",
    "th": "ยืนยัน",
    "phon": "/kənˈfɜːm/",
    "pos": "verb",
    "cat": "communication",
    "level": 1,
    "short": "Say or show that information is correct.",
    "example": "Could you confirm the time?",
    "exampleTh": "ช่วยยืนยันเวลาได้ไหมคะ",
    "collocation": "confirm the time",
    "added": true,
    "def": "Say or show that information is correct.",
    "id": "cruise-v-confirm",
    "progressKey": "Confirm",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-dining-013",
      "cruise-p-bar-011",
      "cruise-p-excursion-009",
      "cruise-p-complaints-011"
    ]
  },
  {
    "word": "Repeat",
    "th": "พูดซ้ำ",
    "phon": "/rɪˈpiːt/",
    "pos": "verb",
    "cat": "communication",
    "level": 1,
    "short": "Say something again.",
    "example": "Could you repeat that, please?",
    "exampleTh": "ช่วยพูดซ้ำอีกครั้งได้ไหมคะ",
    "collocation": "repeat a request",
    "added": true,
    "def": "Say something again.",
    "id": "cruise-v-repeat",
    "progressKey": "Repeat",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-dining-015",
      "cruise-p-clarifying-001",
      "cruise-p-clarifying-005"
    ]
  },
  {
    "word": "Spell",
    "th": "สะกด",
    "phon": "/spel/",
    "pos": "verb",
    "cat": "communication",
    "level": 1,
    "short": "Say or write the letters in a word.",
    "example": "Could you spell your name?",
    "exampleTh": "ช่วยสะกดชื่อได้ไหมคะ",
    "collocation": "spell a name",
    "added": true,
    "def": "Say or write the letters in a word.",
    "id": "cruise-v-spell",
    "progressKey": "Spell",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Explain",
    "th": "อธิบาย",
    "phon": "/ɪkˈspleɪn/",
    "pos": "verb",
    "cat": "communication",
    "level": 1,
    "short": "Make something clear with words.",
    "example": "Let me explain the next step.",
    "exampleTh": "ขออธิบายขั้นตอนถัดไปค่ะ",
    "collocation": "explain a step",
    "added": true,
    "def": "Make something clear with words.",
    "id": "cruise-v-explain",
    "progressKey": "Explain",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-embark-013",
      "cruise-p-dining-006",
      "cruise-p-excursion-013",
      "cruise-p-selling-007"
    ]
  },
  {
    "word": "Prefer",
    "th": "ชอบมากกว่า",
    "phon": "/prɪˈfɜːr/",
    "pos": "verb",
    "cat": "communication",
    "level": 1,
    "short": "Like one choice more than another.",
    "example": "Which time would you prefer?",
    "exampleTh": "สะดวกเวลาไหนมากกว่าคะ",
    "collocation": "prefer a time",
    "added": true,
    "def": "Like one choice more than another.",
    "id": "cruise-v-prefer",
    "progressKey": "Prefer",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-bar-009",
      "cruise-p-shipinfo-011",
      "cruise-p-complaints-005",
      "cruise-p-care-009"
    ]
  },
  {
    "word": "Wait",
    "th": "รอ",
    "phon": "/weɪt/",
    "pos": "verb",
    "cat": "communication",
    "level": 1,
    "short": "Stay until something happens or someone is ready.",
    "example": "Please wait here for a moment.",
    "exampleTh": "กรุณารอตรงนี้สักครู่ค่ะ",
    "collocation": "wait a moment",
    "added": true,
    "def": "Stay until something happens or someone is ready.",
    "id": "cruise-v-wait",
    "progressKey": "Wait",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-complaints-005"
    ]
  },
  {
    "word": "Follow",
    "th": "เดินตาม",
    "phon": "/ˈfɒl.əʊ/",
    "pos": "verb",
    "cat": "communication",
    "level": 1,
    "short": "Go behind someone to the same place.",
    "example": "Please follow me.",
    "exampleTh": "กรุณาตามมาค่ะ",
    "collocation": "follow me",
    "added": true,
    "def": "Go behind someone to the same place.",
    "id": "cruise-v-follow",
    "progressKey": "Follow",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-everyday-009",
      "cruise-p-embark-004",
      "cruise-p-safety-002",
      "cruise-p-safety-003"
    ]
  },
  {
    "word": "Permission",
    "th": "การอนุญาต",
    "phon": "/pəˈmɪʃ.ən/",
    "pos": "noun",
    "cat": "safety",
    "level": 1,
    "short": "Agreement that someone may do something.",
    "example": "May I have your permission to enter?",
    "exampleTh": "ขออนุญาตเข้าไปได้ไหมคะ",
    "collocation": "ask permission",
    "added": true,
    "def": "Agreement that someone may do something.",
    "id": "cruise-v-permission",
    "progressKey": "Permission",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Privacy",
    "th": "ความเป็นส่วนตัว",
    "phon": "/ˈprɪv.ə.si/",
    "pos": "noun",
    "cat": "safety",
    "level": 1,
    "short": "Being free from unwanted attention or observation.",
    "example": "I will close the door to protect your privacy.",
    "exampleTh": "จะปิดประตูเพื่อรักษาความเป็นส่วนตัวของคุณค่ะ",
    "collocation": "protect your privacy",
    "added": true,
    "def": "Being free from unwanted attention or observation.",
    "id": "cruise-v-privacy",
    "progressKey": "Privacy",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Clean",
    "th": "สะอาด",
    "phon": "/kliːn/",
    "pos": "adjective",
    "cat": "safety",
    "level": 1,
    "short": "Free from visible dirt.",
    "example": "I will bring you a clean glass.",
    "exampleTh": "จะนำแก้วสะอาดมาให้ค่ะ",
    "collocation": "a clean glass",
    "added": true,
    "def": "Free from visible dirt.",
    "id": "cruise-v-clean",
    "progressKey": "Clean",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-dining-016",
      "cruise-p-crewtalk-008"
    ]
  },
  {
    "word": "Supervisor",
    "th": "หัวหน้างาน",
    "phon": "/ˈsuː.pə.vaɪ.zər/",
    "pos": "noun",
    "cat": "safety",
    "level": 1,
    "short": "A person responsible for overseeing staff and work.",
    "example": "Let me contact my supervisor.",
    "exampleTh": "ขอติดต่อหัวหน้างานก่อนนะคะ",
    "collocation": "contact a supervisor",
    "added": true,
    "def": "A person responsible for overseeing staff and work.",
    "id": "cruise-v-supervisor",
    "progressKey": "Supervisor",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-complaints-004",
      "cruise-p-complaints-012"
    ]
  },
  {
    "word": "Air conditioning",
    "th": "เครื่องปรับอากาศ",
    "phon": "/ˈeə kənˌdɪʃ.ən.ɪŋ/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A system that controls the temperature of indoor air.",
    "example": "Is the air conditioning working?",
    "exampleTh": "เครื่องปรับอากาศทำงานไหมคะ",
    "collocation": "check the air conditioning",
    "added": true,
    "def": "A system that controls the temperature of indoor air.",
    "id": "cruise-v-air-conditioning",
    "progressKey": "Air conditioning",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Remote control",
    "th": "รีโมตคอนโทรล",
    "phon": "/rɪˌməʊt kənˈtrəʊl/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A device used to operate equipment from a distance.",
    "example": "I will check the remote control.",
    "exampleTh": "จะตรวจสอบรีโมตคอนโทรลค่ะ",
    "collocation": "a remote control",
    "added": true,
    "def": "A device used to operate equipment from a distance.",
    "id": "cruise-v-remote-control",
    "progressKey": "Remote control",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Hairdryer",
    "th": "เครื่องเป่าผม",
    "phon": "/ˈheəˌdraɪ.ər/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "An electrical device that dries hair.",
    "example": "Let me check whether a hairdryer is provided.",
    "exampleTh": "ขอตรวจสอบว่ามีเครื่องเป่าผมให้หรือไม่ค่ะ",
    "collocation": "a cabin hairdryer",
    "added": true,
    "def": "An electrical device that dries hair.",
    "id": "cruise-v-hairdryer",
    "progressKey": "Hairdryer",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Hanger",
    "th": "ไม้แขวนเสื้อ",
    "phon": "/ˈhæŋ.ər/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "An object used to hang clothes.",
    "example": "Would you like more hangers?",
    "exampleTh": "ต้องการไม้แขวนเสื้อเพิ่มไหมคะ",
    "collocation": "extra hangers",
    "added": true,
    "def": "An object used to hang clothes.",
    "id": "cruise-v-hanger",
    "progressKey": "Hanger",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Laundry",
    "th": "เสื้อผ้าที่ต้องซัก / งานซักรีด",
    "phon": "/ˈlɔːn.dri/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "Clothes and linen that need washing or have been washed.",
    "example": "May I collect your laundry?",
    "exampleTh": "ขอรับเสื้อผ้าที่ต้องการส่งซักได้ไหมคะ",
    "collocation": "collect the laundry",
    "added": true,
    "def": "Clothes and linen that need washing or have been washed.",
    "id": "cruise-v-laundry",
    "progressKey": "Laundry",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-016"
    ]
  },
  {
    "word": "Laundry bag",
    "th": "ถุงใส่เสื้อผ้าส่งซัก",
    "phon": "/ˈlɔːn.dri bæɡ/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A bag used to hold clothes for washing.",
    "example": "Please place the clothes in the laundry bag.",
    "exampleTh": "กรุณาใส่เสื้อผ้าในถุงส่งซักค่ะ",
    "collocation": "a laundry bag",
    "added": true,
    "def": "A bag used to hold clothes for washing.",
    "id": "cruise-v-laundry-bag",
    "progressKey": "Laundry bag",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-016"
    ]
  },
  {
    "word": "Laundry list",
    "th": "รายการเสื้อผ้าส่งซัก",
    "phon": "/ˈlɔːn.dri lɪst/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A form recording clothes sent for washing.",
    "example": "Please check the laundry list before signing.",
    "exampleTh": "กรุณาตรวจสอบรายการเสื้อผ้าส่งซักก่อนลงชื่อค่ะ",
    "collocation": "complete a laundry list",
    "added": true,
    "def": "A form recording clothes sent for washing.",
    "id": "cruise-v-laundry-list",
    "progressKey": "Laundry list",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Bin",
    "th": "ถังขยะ",
    "phon": "/bɪn/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A container for rubbish.",
    "example": "May I empty the bin?",
    "exampleTh": "ขอเทขยะในถังได้ไหมคะ",
    "collocation": "empty the bin",
    "added": true,
    "def": "A container for rubbish.",
    "id": "cruise-v-bin",
    "progressKey": "Bin",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Rubbish",
    "th": "ขยะ",
    "phon": "/ˈrʌb.ɪʃ/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "Things that are no longer wanted and are thrown away.",
    "example": "Is this rubbish, or would you like to keep it?",
    "exampleTh": "สิ่งนี้เป็นขยะหรือต้องการเก็บไว้คะ",
    "collocation": "remove rubbish",
    "added": true,
    "def": "Things that are no longer wanted and are thrown away.",
    "id": "cruise-v-rubbish",
    "progressKey": "Rubbish",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Shower",
    "th": "ฝักบัว / ที่อาบน้ำฝักบัว",
    "phon": "/ˈʃaʊ.ər/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "Equipment that sprays water for washing the body.",
    "example": "Is the shower working properly?",
    "exampleTh": "ฝักบัวทำงานตามปกติไหมคะ",
    "collocation": "check the shower",
    "added": true,
    "def": "Equipment that sprays water for washing the body.",
    "id": "cruise-v-shower",
    "progressKey": "Shower",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Tap",
    "th": "ก๊อกน้ำ",
    "phon": "/tæp/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A device that controls water from a pipe.",
    "example": "I will report the leaking tap.",
    "exampleTh": "จะรายงานเรื่องก๊อกน้ำที่รั่วค่ะ",
    "collocation": "a leaking tap",
    "added": true,
    "def": "A device that controls water from a pipe.",
    "id": "cruise-v-tap",
    "progressKey": "Tap",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Toilet",
    "th": "สุขา",
    "phon": "/ˈtɔɪ.lət/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "A bathroom fixture used to dispose of body waste.",
    "example": "I will report the problem with your toilet.",
    "exampleTh": "จะรายงานปัญหาสุขาของคุณค่ะ",
    "collocation": "a blocked toilet",
    "added": true,
    "def": "A bathroom fixture used to dispose of body waste.",
    "id": "cruise-v-toilet",
    "progressKey": "Toilet",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Leak",
    "th": "การรั่ว",
    "phon": "/liːk/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "Liquid escaping from a place where it should stay.",
    "example": "Where did you notice the leak?",
    "exampleTh": "พบรอยรั่วบริเวณไหนคะ",
    "collocation": "report a leak",
    "added": true,
    "def": "Liquid escaping from a place where it should stay.",
    "id": "cruise-v-leak",
    "progressKey": "Leak",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-014"
    ]
  },
  {
    "word": "Blocked",
    "th": "อุดตัน",
    "phon": "/blɒkt/",
    "pos": "adjective",
    "cat": "cabin",
    "level": 1,
    "short": "Not allowing water or objects to pass through.",
    "example": "Is the washbasin blocked?",
    "exampleTh": "อ่างล้างมืออุดตันไหมคะ",
    "collocation": "a blocked drain",
    "added": true,
    "def": "Not allowing water or objects to pass through.",
    "id": "cruise-v-blocked",
    "progressKey": "Blocked",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Broken",
    "th": "ชำรุด / แตก",
    "phon": "/ˈbrəʊ.kən/",
    "pos": "adjective",
    "cat": "cabin",
    "level": 1,
    "short": "Damaged and no longer working properly.",
    "example": "Please do not use the broken chair.",
    "exampleTh": "กรุณาอย่าใช้เก้าอี้ที่ชำรุดค่ะ",
    "collocation": "broken equipment",
    "added": true,
    "def": "Damaged and no longer working properly.",
    "id": "cruise-v-broken",
    "progressKey": "Broken",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-015"
    ]
  },
  {
    "word": "Missing",
    "th": "หายไป / ไม่อยู่",
    "phon": "/ˈmɪs.ɪŋ/",
    "pos": "adjective",
    "cat": "cabin",
    "level": 1,
    "short": "Not present where something should be.",
    "example": "Which item is missing?",
    "exampleTh": "ของชิ้นไหนหายไปคะ",
    "collocation": "a missing item",
    "added": true,
    "def": "Not present where something should be.",
    "id": "cruise-v-missing",
    "progressKey": "Missing",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-012"
    ]
  },
  {
    "word": "Extra",
    "th": "เพิ่ม / เพิ่มเติม",
    "phon": "/ˈek.strə/",
    "pos": "adjective",
    "cat": "cabin",
    "level": 1,
    "short": "More than the usual amount.",
    "example": "Would you like an extra pillow?",
    "exampleTh": "ต้องการหมอนเพิ่มไหมคะ",
    "collocation": "an extra pillow",
    "added": true,
    "def": "More than the usual amount.",
    "id": "cruise-v-extra",
    "progressKey": "Extra",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-006",
      "cruise-p-cabin-009",
      "cruise-p-bar-005",
      "cruise-p-bar-011"
    ]
  },
  {
    "word": "Replace",
    "th": "เปลี่ยนแทน",
    "phon": "/rɪˈpleɪs/",
    "pos": "verb",
    "cat": "cabin",
    "level": 1,
    "short": "Put another item in place of the original.",
    "example": "I will replace the towel.",
    "exampleTh": "จะเปลี่ยนผ้าขนหนูให้ค่ะ",
    "collocation": "replace a towel",
    "added": true,
    "def": "Put another item in place of the original.",
    "id": "cruise-v-replace",
    "progressKey": "Replace",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Deliver",
    "th": "นำส่ง",
    "phon": "/dɪˈlɪv.ər/",
    "pos": "verb",
    "cat": "cabin",
    "level": 1,
    "short": "Take an item to the person who needs it.",
    "example": "I will check when we can deliver your luggage.",
    "exampleTh": "จะตรวจสอบว่าสามารถนำส่งสัมภาระได้เมื่อใดค่ะ",
    "collocation": "deliver luggage",
    "added": true,
    "def": "Take an item to the person who needs it.",
    "id": "cruise-v-deliver",
    "progressKey": "Deliver",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Maintenance",
    "th": "งานซ่อมบำรุง",
    "phon": "/ˈmeɪn.tən.əns/",
    "pos": "noun",
    "cat": "cabin",
    "level": 1,
    "short": "Work that keeps equipment in good working condition.",
    "example": "I will contact the maintenance team.",
    "exampleTh": "จะติดต่อทีมซ่อมบำรุงค่ะ",
    "collocation": "the maintenance team",
    "added": true,
    "def": "Work that keeps equipment in good working condition.",
    "id": "cruise-v-maintenance",
    "progressKey": "Maintenance",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-013",
      "cruise-p-crewtalk-009"
    ]
  },
  {
    "word": "Menu",
    "th": "เมนูอาหาร",
    "phon": "/ˈmen.juː/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "A list of food and drinks available.",
    "example": "Here is the menu.",
    "exampleTh": "นี่คือเมนูค่ะ",
    "collocation": "read the menu",
    "added": true,
    "def": "A list of food and drinks available.",
    "id": "cruise-v-menu",
    "progressKey": "Menu",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Order",
    "th": "รายการอาหารที่สั่ง",
    "phon": "/ˈɔː.dər/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "A request for food or drinks.",
    "example": "May I repeat your order?",
    "exampleTh": "ขอทวนรายการอาหารที่สั่งได้ไหมคะ",
    "collocation": "take an order",
    "added": true,
    "def": "A request for food or drinks.",
    "id": "cruise-v-order",
    "progressKey": "Order",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-dining-004",
      "cruise-p-dining-015",
      "cruise-p-bar-011"
    ]
  },
  {
    "word": "Starter",
    "th": "อาหารเรียกน้ำย่อย",
    "phon": "/ˈstɑː.tər/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "A small dish served before the main course.",
    "example": "Would you like a starter?",
    "exampleTh": "ต้องการอาหารเรียกน้ำย่อยไหมคะ",
    "collocation": "order a starter",
    "added": true,
    "def": "A small dish served before the main course.",
    "id": "cruise-v-starter",
    "progressKey": "Starter",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Main course",
    "th": "อาหารจานหลัก",
    "phon": "/ˌmeɪn ˈkɔːs/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "The main dish in a meal.",
    "example": "Which main course would you like?",
    "exampleTh": "ต้องการอาหารจานหลักอะไรคะ",
    "collocation": "choose a main course",
    "added": true,
    "def": "The main dish in a meal.",
    "id": "cruise-v-main-course",
    "progressKey": "Main course",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Dessert",
    "th": "ของหวาน",
    "phon": "/dɪˈzɜːt/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "A sweet dish eaten after the main meal.",
    "example": "Would you like to see the dessert menu?",
    "exampleTh": "ต้องการดูเมนูของหวานไหมคะ",
    "collocation": "dessert menu",
    "added": true,
    "def": "A sweet dish eaten after the main meal.",
    "id": "cruise-v-dessert",
    "progressKey": "Dessert",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Cutlery",
    "th": "ช้อนส้อมและมีดสำหรับรับประทานอาหาร",
    "phon": "/ˈkʌt.lər.i/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "Knives, forks and spoons used for eating.",
    "example": "I will bring you clean cutlery.",
    "exampleTh": "จะนำช้อนส้อมและมีดสะอาดมาให้ค่ะ",
    "collocation": "clean cutlery",
    "added": true,
    "def": "Knives, forks and spoons used for eating.",
    "id": "cruise-v-cutlery",
    "progressKey": "Cutlery",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Fork",
    "th": "ส้อม",
    "phon": "/fɔːk/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "An eating tool with several pointed ends.",
    "example": "May I bring you another fork?",
    "exampleTh": "ให้เอาส้อมอีกคันมาให้ไหมคะ",
    "collocation": "a clean fork",
    "added": true,
    "def": "An eating tool with several pointed ends.",
    "id": "cruise-v-fork",
    "progressKey": "Fork",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-dining-016"
    ]
  },
  {
    "word": "Spoon",
    "th": "ช้อน",
    "phon": "/spuːn/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "An eating tool with a small rounded bowl.",
    "example": "Here is a spoon for your soup.",
    "exampleTh": "นี่คือช้อนสำหรับซุปค่ะ",
    "collocation": "a soup spoon",
    "added": true,
    "def": "An eating tool with a small rounded bowl.",
    "id": "cruise-v-spoon",
    "progressKey": "Spoon",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Plate",
    "th": "จาน",
    "phon": "/pleɪt/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "A flat dish used for serving food.",
    "example": "May I take this empty plate?",
    "exampleTh": "ขอเก็บจานเปล่าใบนี้ได้ไหมคะ",
    "collocation": "an empty plate",
    "added": true,
    "def": "A flat dish used for serving food.",
    "id": "cruise-v-plate",
    "progressKey": "Plate",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-dining-005",
      "cruise-p-dining-017"
    ]
  },
  {
    "word": "Glass",
    "th": "แก้วน้ำ",
    "phon": "/ɡlɑːs/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "A drinking container made from glass.",
    "example": "Would you like a clean glass?",
    "exampleTh": "ต้องการแก้วสะอาดไหมคะ",
    "collocation": "a glass of water",
    "added": true,
    "def": "A drinking container made from glass.",
    "id": "cruise-v-glass",
    "progressKey": "Glass",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Napkin",
    "th": "ผ้าเช็ดปาก / กระดาษเช็ดปาก",
    "phon": "/ˈnæp.kɪn/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "Cloth or paper used while eating.",
    "example": "Here is an extra napkin.",
    "exampleTh": "นี่คือผ้าเช็ดปากเพิ่มค่ะ",
    "collocation": "an extra napkin",
    "added": true,
    "def": "Cloth or paper used while eating.",
    "id": "cruise-v-napkin",
    "progressKey": "Napkin",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Sauce",
    "th": "ซอส",
    "phon": "/sɔːs/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "A liquid served with food to add flavour.",
    "example": "Would you like the sauce on the side?",
    "exampleTh": "ต้องการแยกซอสไหมคะ",
    "collocation": "sauce on the side",
    "added": true,
    "def": "A liquid served with food to add flavour.",
    "id": "cruise-v-sauce",
    "progressKey": "Sauce",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-dining-014"
    ]
  },
  {
    "word": "Spicy",
    "th": "เผ็ด",
    "phon": "/ˈspaɪ.si/",
    "pos": "adjective",
    "cat": "dining",
    "level": 1,
    "short": "Having a hot taste from spices or chillies.",
    "example": "Do you like spicy food?",
    "exampleTh": "ชอบอาหารเผ็ดไหมคะ",
    "collocation": "spicy food",
    "added": true,
    "def": "Having a hot taste from spices or chillies.",
    "id": "cruise-v-spicy",
    "progressKey": "Spicy",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Mild",
    "th": "รสอ่อน / เผ็ดน้อย",
    "phon": "/maɪld/",
    "pos": "adjective",
    "cat": "dining",
    "level": 1,
    "short": "Not strong or hot in flavour.",
    "example": "Would you prefer a mild dish?",
    "exampleTh": "ต้องการอาหารรสอ่อนกว่าไหมคะ",
    "collocation": "a mild dish",
    "added": true,
    "def": "Not strong or hot in flavour.",
    "id": "cruise-v-mild",
    "progressKey": "Mild",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Vegetarian",
    "th": "มังสวิรัติ",
    "phon": "/ˌvedʒ.ɪˈteə.ri.ən/",
    "pos": "adjective",
    "cat": "dining",
    "level": 1,
    "short": "Without meat or fish; other ingredients need checking.",
    "example": "Let me check the vegetarian options.",
    "exampleTh": "ขอตรวจสอบรายการอาหารมังสวิรัติค่ะ",
    "collocation": "vegetarian options",
    "added": true,
    "def": "Without meat or fish; other ingredients need checking.",
    "id": "cruise-v-vegetarian",
    "progressKey": "Vegetarian",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Vegan",
    "th": "วีแกน / ไม่ใช้ผลิตภัณฑ์จากสัตว์",
    "phon": "/ˈviː.ɡən/",
    "pos": "adjective",
    "cat": "dining",
    "level": 1,
    "short": "Made without animal products, including dairy and eggs.",
    "example": "I will ask the kitchen about vegan options.",
    "exampleTh": "จะสอบถามครัวเรื่องอาหารวีแกนค่ะ",
    "collocation": "vegan options",
    "added": true,
    "def": "Made without animal products, including dairy and eggs.",
    "id": "cruise-v-vegan",
    "progressKey": "Vegan",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Dairy",
    "th": "นมและผลิตภัณฑ์จากนม",
    "phon": "/ˈdeə.ri/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "Milk and foods made from milk.",
    "example": "Let me check whether this dish contains dairy.",
    "exampleTh": "ขอตรวจสอบว่าอาหารจานนี้มีผลิตภัณฑ์จากนมหรือไม่ค่ะ",
    "collocation": "contains dairy",
    "added": true,
    "def": "Milk and foods made from milk.",
    "id": "cruise-v-dairy",
    "progressKey": "Dairy",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Gluten",
    "th": "กลูเตน",
    "phon": "/ˈɡluː.tən/",
    "pos": "noun",
    "cat": "dining",
    "level": 1,
    "short": "A group of proteins in wheat, barley and rye.",
    "example": "I will ask the chef about gluten in this dish.",
    "exampleTh": "จะสอบถามเชฟเรื่องกลูเตนในอาหารจานนี้ค่ะ",
    "collocation": "contains gluten",
    "added": true,
    "def": "A group of proteins in wheat, barley and rye.",
    "id": "cruise-v-gluten",
    "progressKey": "Gluten",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "On the side",
    "th": "แยกใส่ภาชนะ",
    "phon": "/ˌɒn ðə ˈsaɪd/",
    "pos": "adverb phrase",
    "cat": "dining",
    "level": 1,
    "short": "Served separately rather than put on the main food.",
    "example": "We can check whether the dressing can come on the side.",
    "exampleTh": "จะตรวจสอบว่าสามารถแยกน้ำสลัดได้หรือไม่ค่ะ",
    "collocation": "dressing on the side",
    "added": true,
    "def": "Served separately rather than put on the main food.",
    "id": "cruise-v-on-the-side",
    "progressKey": "On the side",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-dining-014"
    ]
  },
  {
    "word": "Refill",
    "th": "เติมให้ใหม่",
    "phon": "/ˌriːˈfɪl/",
    "pos": "verb",
    "cat": "dining",
    "level": 1,
    "short": "Fill a container again.",
    "example": "May I refill your water glass?",
    "exampleTh": "ขอเติมน้ำให้ได้ไหมคะ",
    "collocation": "refill a glass",
    "added": true,
    "def": "Fill a container again.",
    "id": "cruise-v-refill",
    "progressKey": "Refill",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Charge",
    "th": "รายการเรียกเก็บเงิน",
    "phon": "/tʃɑːdʒ/",
    "pos": "noun",
    "cat": "guest",
    "level": 2,
    "short": "An amount added to a bill or account.",
    "example": "Which charge would you like me to check?",
    "exampleTh": "ต้องการให้ตรวจสอบรายการเรียกเก็บใดคะ",
    "collocation": "check a charge",
    "added": true,
    "def": "An amount added to a bill or account.",
    "id": "cruise-v-charge",
    "progressKey": "Charge",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-dining-006",
      "cruise-p-bar-005",
      "cruise-p-bar-011",
      "cruise-p-account-001"
    ]
  },
  {
    "word": "Balance",
    "th": "ยอดคงเหลือ / ยอดที่ต้องชำระ",
    "phon": "/ˈbæl.əns/",
    "pos": "noun",
    "cat": "guest",
    "level": 2,
    "short": "The amount remaining in or owed on an account.",
    "example": "Let me check your account balance.",
    "exampleTh": "ขอตรวจสอบยอดบัญชีของคุณค่ะ",
    "collocation": "account balance",
    "added": true,
    "def": "The amount remaining in or owed on an account.",
    "id": "cruise-v-balance",
    "progressKey": "Balance",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Currency",
    "th": "สกุลเงิน",
    "phon": "/ˈkʌr.ən.si/",
    "pos": "noun",
    "cat": "guest",
    "level": 2,
    "short": "The type of money used for a payment.",
    "example": "I will confirm the payment currency.",
    "exampleTh": "จะยืนยันสกุลเงินที่ใช้ชำระค่ะ",
    "collocation": "payment currency",
    "added": true,
    "def": "The type of money used for a payment.",
    "id": "cruise-v-currency",
    "progressKey": "Currency",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-excursion-004",
      "cruise-p-account-004"
    ]
  },
  {
    "word": "Exchange rate",
    "th": "อัตราแลกเปลี่ยน",
    "phon": "/ɪksˈtʃeɪndʒ reɪt/",
    "pos": "noun",
    "cat": "guest",
    "level": 2,
    "short": "The value of one currency compared with another.",
    "example": "Please check the exchange rate before you agree.",
    "exampleTh": "กรุณาตรวจสอบอัตราแลกเปลี่ยนก่อนตกลงค่ะ",
    "collocation": "check the exchange rate",
    "added": true,
    "def": "The value of one currency compared with another.",
    "id": "cruise-v-exchange-rate",
    "progressKey": "Exchange rate",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Duplicate charge",
    "th": "การเรียกเก็บเงินซ้ำ",
    "phon": "/ˈdjuː.plɪ.kət tʃɑːdʒ/",
    "pos": "noun",
    "cat": "guest",
    "level": 2,
    "short": "The same payment appearing more than once by mistake.",
    "example": "I will ask our team to review the duplicate charge.",
    "exampleTh": "จะขอให้ทีมตรวจสอบการเรียกเก็บเงินซ้ำค่ะ",
    "collocation": "report a duplicate charge",
    "added": true,
    "def": "The same payment appearing more than once by mistake.",
    "id": "cruise-v-duplicate-charge",
    "progressKey": "Duplicate charge",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-account-005"
    ]
  },
  {
    "word": "Statement",
    "th": "รายการเดินบัญชี",
    "phon": "/ˈsteɪt.mənt/",
    "pos": "noun",
    "cat": "guest",
    "level": 2,
    "short": "A written list of transactions on an account.",
    "example": "Would you like to review your account statement?",
    "exampleTh": "ต้องการตรวจสอบรายการเดินบัญชีไหมคะ",
    "collocation": "account statement",
    "added": true,
    "def": "A written list of transactions on an account.",
    "id": "cruise-v-statement",
    "progressKey": "Statement",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-farewell-003",
      "cruise-p-account-003"
    ]
  },
  {
    "word": "Included",
    "th": "รวมอยู่แล้ว",
    "phon": "/ɪnˈkluː.dɪd/",
    "pos": "adjective",
    "cat": "guest",
    "level": 2,
    "short": "Already part of a price or package.",
    "example": "Let me check what is included.",
    "exampleTh": "ขอตรวจสอบว่ารวมอะไรบ้างค่ะ",
    "collocation": "included in the price",
    "added": true,
    "def": "Already part of a price or package.",
    "id": "cruise-v-included",
    "progressKey": "Included",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-bar-004",
      "cruise-p-bar-010"
    ]
  },
  {
    "word": "Additional fee",
    "th": "ค่าธรรมเนียมเพิ่มเติม",
    "phon": "/əˌdɪʃ.ən.əl ˈfiː/",
    "pos": "noun",
    "cat": "guest",
    "level": 2,
    "short": "An amount charged in addition to the main price.",
    "example": "There may be an additional fee; I will check.",
    "exampleTh": "อาจมีค่าธรรมเนียมเพิ่มเติม ขอไปตรวจสอบก่อนค่ะ",
    "collocation": "an additional fee",
    "added": true,
    "def": "An amount charged in addition to the main price.",
    "id": "cruise-v-additional-fee",
    "progressKey": "Additional fee",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Authorisation",
    "th": "การอนุมัติ",
    "phon": "/ˌɔː.θər.aɪˈzeɪ.ʃən/",
    "pos": "noun",
    "cat": "guest",
    "level": 2,
    "short": "Official permission for an action.",
    "example": "This refund needs authorisation from my supervisor.",
    "exampleTh": "การคืนเงินนี้ต้องได้รับอนุมัติจากหัวหน้างานค่ะ",
    "collocation": "request authorisation",
    "added": true,
    "def": "Official permission for an action.",
    "id": "cruise-v-authorisation",
    "progressKey": "Authorisation",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Complaint",
    "th": "ข้อร้องเรียน",
    "phon": "/kəmˈpleɪnt/",
    "pos": "noun",
    "cat": "guest",
    "level": 2,
    "short": "A statement that something is wrong or unsatisfactory.",
    "example": "I will record your complaint accurately.",
    "exampleTh": "จะบันทึกข้อร้องเรียนของคุณให้ถูกต้องค่ะ",
    "collocation": "record a complaint",
    "added": true,
    "def": "A statement that something is wrong or unsatisfactory.",
    "id": "cruise-v-complaint",
    "progressKey": "Complaint",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Resolve",
    "th": "แก้ไขให้เรียบร้อย",
    "phon": "/rɪˈzɒlv/",
    "pos": "verb",
    "cat": "guest",
    "level": 2,
    "short": "Find a solution to a problem.",
    "example": "I will ask the right team to help resolve this.",
    "exampleTh": "จะขอให้ทีมที่รับผิดชอบช่วยแก้ไขค่ะ",
    "collocation": "resolve a problem",
    "added": true,
    "def": "Find a solution to a problem.",
    "id": "cruise-v-resolve",
    "progressKey": "Resolve",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Update",
    "th": "แจ้งความคืบหน้า",
    "phon": "/ʌpˈdeɪt/",
    "pos": "verb",
    "cat": "guest",
    "level": 2,
    "short": "Give the latest available information.",
    "example": "I will update you when I have confirmed information.",
    "exampleTh": "จะแจ้งความคืบหน้าเมื่อได้รับข้อมูลยืนยันค่ะ",
    "collocation": "update a guest",
    "added": true,
    "def": "Give the latest available information.",
    "id": "cruise-v-update",
    "progressKey": "Update",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Reference number",
    "th": "หมายเลขอ้างอิง",
    "phon": "/ˈref.ər.əns ˌnʌm.bər/",
    "pos": "noun",
    "cat": "guest",
    "level": 2,
    "short": "A number used to identify a request or booking.",
    "example": "Please keep your reference number.",
    "exampleTh": "กรุณาเก็บหมายเลขอ้างอิงไว้ค่ะ",
    "collocation": "booking reference number",
    "added": true,
    "def": "A number used to identify a request or booking.",
    "id": "cruise-v-reference-number",
    "progressKey": "Reference number",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-account-007"
    ]
  },
  {
    "word": "Description",
    "th": "รายละเอียดลักษณะ",
    "phon": "/dɪˈskrɪp.ʃən/",
    "pos": "noun",
    "cat": "guest",
    "level": 2,
    "short": "Words that explain what something looks like.",
    "example": "Could you give a description of the missing bag?",
    "exampleTh": "ช่วยบอกลักษณะของกระเป๋าที่หายได้ไหมคะ",
    "collocation": "a description of an item",
    "added": true,
    "def": "Words that explain what something looks like.",
    "id": "cruise-v-description",
    "progressKey": "Description",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Valuables",
    "th": "ของมีค่า",
    "phon": "/ˈvæl.ju.ə.bəlz/",
    "pos": "plural noun",
    "cat": "guest",
    "level": 2,
    "short": "Items worth a lot of money or important to their owner.",
    "example": "Please follow the ship's guidance for storing valuables.",
    "exampleTh": "กรุณาปฏิบัติตามคำแนะนำของเรือในการเก็บของมีค่าค่ะ",
    "collocation": "store valuables",
    "added": true,
    "def": "Items worth a lot of money or important to their owner.",
    "id": "cruise-v-valuables",
    "progressKey": "Valuables",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Lift",
    "th": "ลิฟต์",
    "phon": "/lɪft/",
    "pos": "noun",
    "cat": "ship",
    "level": 1,
    "short": "A machine that moves people between floors or decks.",
    "example": "Let me show you the nearest lift.",
    "exampleTh": "ให้พาไปลิฟต์ที่ใกล้ที่สุดนะคะ",
    "collocation": "take the lift",
    "added": true,
    "def": "A machine that moves people between floors or decks.",
    "id": "cruise-v-lift",
    "progressKey": "Lift",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-shipinfo-001",
      "cruise-p-shipinfo-002",
      "cruise-p-shipinfo-010"
    ]
  },
  {
    "word": "Stairs",
    "th": "บันได",
    "phon": "/steəz/",
    "pos": "plural noun",
    "cat": "ship",
    "level": 1,
    "short": "Steps used to move between floors or decks.",
    "example": "The stairs are beside the lift.",
    "exampleTh": "บันไดอยู่ข้างลิฟต์ค่ะ",
    "collocation": "use the stairs",
    "added": true,
    "def": "Steps used to move between floors or decks.",
    "id": "cruise-v-stairs",
    "progressKey": "Stairs",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-shipinfo-011"
    ]
  },
  {
    "word": "Corridor",
    "th": "ทางเดิน",
    "phon": "/ˈkɒr.ɪ.dɔːr/",
    "pos": "noun",
    "cat": "ship",
    "level": 1,
    "short": "A passage with rooms along its sides.",
    "example": "Please keep the corridor clear.",
    "exampleTh": "กรุณาอย่าวางสิ่งของกีดขวางทางเดินค่ะ",
    "collocation": "a clear corridor",
    "added": true,
    "def": "A passage with rooms along its sides.",
    "id": "cruise-v-corridor",
    "progressKey": "Corridor",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-shipinfo-008"
    ]
  },
  {
    "word": "Entrance",
    "th": "ทางเข้า",
    "phon": "/ˈen.trəns/",
    "pos": "noun",
    "cat": "ship",
    "level": 1,
    "short": "The place where people enter.",
    "example": "This is the restaurant entrance.",
    "exampleTh": "นี่คือทางเข้าห้องอาหารค่ะ",
    "collocation": "the main entrance",
    "added": true,
    "def": "The place where people enter.",
    "id": "cruise-v-entrance",
    "progressKey": "Entrance",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Exit",
    "th": "ทางออก",
    "phon": "/ˈek.sɪt/",
    "pos": "noun",
    "cat": "ship",
    "level": 1,
    "short": "The place where people leave.",
    "example": "Please keep this exit clear.",
    "exampleTh": "กรุณาอย่าวางสิ่งของกีดขวางทางออกนี้ค่ะ",
    "collocation": "a clear exit",
    "added": true,
    "def": "The place where people leave.",
    "id": "cruise-v-exit",
    "progressKey": "Exit",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-safety-008"
    ]
  },
  {
    "word": "Left",
    "th": "ทางซ้าย",
    "phon": "/left/",
    "pos": "adverb",
    "cat": "ship",
    "level": 1,
    "short": "Towards the side opposite the right.",
    "example": "Turn left at the end of the corridor.",
    "exampleTh": "เลี้ยวซ้ายสุดทางเดินค่ะ",
    "collocation": "turn left",
    "added": true,
    "def": "Towards the side opposite the right.",
    "id": "cruise-v-left",
    "progressKey": "Left",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-004",
      "cruise-p-shipinfo-001",
      "cruise-p-shipinfo-008"
    ]
  },
  {
    "word": "Right",
    "th": "ทางขวา",
    "phon": "/raɪt/",
    "pos": "adverb",
    "cat": "ship",
    "level": 1,
    "short": "Towards the side opposite the left.",
    "example": "Turn right after the lift.",
    "exampleTh": "ผ่านลิฟต์แล้วเลี้ยวขวาค่ะ",
    "collocation": "turn right",
    "added": true,
    "def": "Towards the side opposite the left.",
    "id": "cruise-v-right",
    "progressKey": "Right",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-shipinfo-009",
      "cruise-p-complaints-001"
    ]
  },
  {
    "word": "Straight ahead",
    "th": "ตรงไปข้างหน้า",
    "phon": "/ˌstreɪt əˈhed/",
    "pos": "adverb phrase",
    "cat": "ship",
    "level": 1,
    "short": "Forward without turning left or right.",
    "example": "Please continue straight ahead.",
    "exampleTh": "กรุณาตรงไปข้างหน้าค่ะ",
    "collocation": "go straight ahead",
    "added": true,
    "def": "Forward without turning left or right.",
    "id": "cruise-v-straight-ahead",
    "progressKey": "Straight ahead",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-shipinfo-009"
    ]
  },
  {
    "word": "Opposite",
    "th": "ตรงข้าม",
    "phon": "/ˈɒp.ə.zɪt/",
    "pos": "preposition",
    "cat": "ship",
    "level": 1,
    "short": "On the other side, facing something.",
    "example": "The café is opposite the lift.",
    "exampleTh": "คาเฟ่อยู่ตรงข้ามลิฟต์ค่ะ",
    "collocation": "opposite the lift",
    "added": true,
    "def": "On the other side, facing something.",
    "id": "cruise-v-opposite",
    "progressKey": "Opposite",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Next to",
    "th": "ถัดจาก / ข้าง ๆ",
    "phon": "/ˈnekst tə/",
    "pos": "preposition",
    "cat": "ship",
    "level": 1,
    "short": "Immediately beside something.",
    "example": "The desk is next to the entrance.",
    "exampleTh": "เคาน์เตอร์อยู่ข้างทางเข้าค่ะ",
    "collocation": "next to the entrance",
    "added": true,
    "def": "Immediately beside something.",
    "id": "cruise-v-next-to",
    "progressKey": "Next to",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-shipinfo-010"
    ]
  },
  {
    "word": "Forward",
    "th": "ไปทางหัวเรือ",
    "phon": "/ˈfɔː.wəd/",
    "pos": "adverb",
    "cat": "ship",
    "level": 1,
    "short": "Towards the front of the ship.",
    "example": "The lounge is further forward.",
    "exampleTh": "ห้องพักผ่อนอยู่ค่อนไปทางหัวเรือค่ะ",
    "collocation": "further forward",
    "added": true,
    "def": "Towards the front of the ship.",
    "id": "cruise-v-forward",
    "progressKey": "Forward",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-shipinfo-001"
    ]
  },
  {
    "word": "Aft",
    "th": "ไปทางท้ายเรือ",
    "phon": "/ɑːft/",
    "pos": "adverb",
    "cat": "ship",
    "level": 1,
    "short": "Towards the rear of the ship.",
    "example": "The restaurant is further aft.",
    "exampleTh": "ห้องอาหารอยู่ค่อนไปทางท้ายเรือค่ะ",
    "collocation": "further aft",
    "added": true,
    "def": "Towards the rear of the ship.",
    "id": "cruise-v-aft",
    "progressKey": "Aft",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Midship",
    "th": "บริเวณกลางลำเรือ",
    "phon": "/ˈmɪd.ʃɪp/",
    "pos": "adverb",
    "cat": "ship",
    "level": 1,
    "short": "In the middle area along the length of the ship.",
    "example": "Your cabin is midship.",
    "exampleTh": "ห้องพักของคุณอยู่บริเวณกลางลำเรือค่ะ",
    "collocation": "located midship",
    "added": true,
    "def": "In the middle area along the length of the ship.",
    "id": "cruise-v-midship",
    "progressKey": "Midship",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-embark-002"
    ]
  },
  {
    "word": "Handrail",
    "th": "ราวจับ",
    "phon": "/ˈhænd.reɪl/",
    "pos": "noun",
    "cat": "ship",
    "level": 1,
    "short": "A rail used for support while walking.",
    "example": "Please hold the handrail.",
    "exampleTh": "กรุณาจับราวค่ะ",
    "collocation": "hold the handrail",
    "added": true,
    "def": "A rail used for support while walking.",
    "id": "cruise-v-handrail",
    "progressKey": "Handrail",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-safety-009"
    ]
  },
  {
    "word": "Step",
    "th": "ขั้นบันได",
    "phon": "/step/",
    "pos": "noun",
    "cat": "ship",
    "level": 1,
    "short": "A raised surface used when moving up or down.",
    "example": "Please watch the step.",
    "exampleTh": "กรุณาระวังขั้นบันไดค่ะ",
    "collocation": "watch the step",
    "added": true,
    "def": "A raised surface used when moving up or down.",
    "id": "cruise-v-step",
    "progressKey": "Step",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-safety-010",
      "cruise-p-care-004",
      "cruise-p-care-011"
    ]
  },
  {
    "word": "Departure",
    "th": "การออกเดินทาง",
    "phon": "/dɪˈpɑː.tʃər/",
    "pos": "noun",
    "cat": "port",
    "level": 1,
    "short": "The act or time of leaving a place.",
    "example": "Let me confirm the departure time.",
    "exampleTh": "ขอยืนยันเวลาออกเดินทางค่ะ",
    "collocation": "departure time",
    "added": true,
    "def": "The act or time of leaving a place.",
    "id": "cruise-v-departure",
    "progressKey": "Departure",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Arrival",
    "th": "การมาถึง",
    "phon": "/əˈraɪ.vəl/",
    "pos": "noun",
    "cat": "port",
    "level": 1,
    "short": "The act or time of reaching a place.",
    "example": "The arrival time has changed.",
    "exampleTh": "เวลามาถึงเปลี่ยนแล้วค่ะ",
    "collocation": "arrival time",
    "added": true,
    "def": "The act or time of reaching a place.",
    "id": "cruise-v-arrival",
    "progressKey": "Arrival",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Delay",
    "th": "ความล่าช้า",
    "phon": "/dɪˈleɪ/",
    "pos": "noun",
    "cat": "port",
    "level": 1,
    "short": "A situation in which something happens later than expected.",
    "example": "I will check the reason for the delay.",
    "exampleTh": "จะตรวจสอบสาเหตุของความล่าช้าค่ะ",
    "collocation": "a departure delay",
    "added": true,
    "def": "A situation in which something happens later than expected.",
    "id": "cruise-v-delay",
    "progressKey": "Delay",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-excursion-012",
      "cruise-p-crewtalk-010"
    ]
  },
  {
    "word": "Cancelled",
    "th": "ถูกยกเลิก",
    "phon": "/ˈkæn.səld/",
    "pos": "adjective",
    "cat": "port",
    "level": 1,
    "short": "No longer going to happen as planned.",
    "example": "Your tour has been cancelled; let me explain the options.",
    "exampleTh": "ทัวร์ของคุณถูกยกเลิก ขออธิบายทางเลือกค่ะ",
    "collocation": "a cancelled tour",
    "added": true,
    "def": "No longer going to happen as planned.",
    "id": "cruise-v-cancelled",
    "progressKey": "Cancelled",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-excursion-013"
    ]
  },
  {
    "word": "Rescheduled",
    "th": "เปลี่ยนกำหนดเวลาแล้ว",
    "phon": "/ˌriːˈʃed.juːld/",
    "pos": "adjective",
    "cat": "port",
    "level": 1,
    "short": "Moved to a different time or date.",
    "example": "The tour has been rescheduled.",
    "exampleTh": "ทัวร์เปลี่ยนกำหนดเวลาแล้วค่ะ",
    "collocation": "a rescheduled tour",
    "added": true,
    "def": "Moved to a different time or date.",
    "id": "cruise-v-rescheduled",
    "progressKey": "Rescheduled",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Ticket",
    "th": "ตั๋ว",
    "phon": "/ˈtɪk.ɪt/",
    "pos": "noun",
    "cat": "port",
    "level": 1,
    "short": "A document or code giving permission to travel or enter.",
    "example": "Please have your ticket ready.",
    "exampleTh": "กรุณาเตรียมตั๋วให้พร้อมค่ะ",
    "collocation": "a tour ticket",
    "added": true,
    "def": "A document or code giving permission to travel or enter.",
    "id": "cruise-v-ticket",
    "progressKey": "Ticket",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-excursion-008",
      "cruise-p-excursion-011"
    ]
  },
  {
    "word": "Luggage",
    "th": "สัมภาระ",
    "phon": "/ˈlʌɡ.ɪdʒ/",
    "pos": "noun",
    "cat": "port",
    "level": 1,
    "short": "Bags and cases taken when travelling.",
    "example": "How many pieces of luggage do you have?",
    "exampleTh": "มีสัมภาระกี่ชิ้นคะ",
    "collocation": "pieces of luggage",
    "added": true,
    "def": "Bags and cases taken when travelling.",
    "id": "cruise-v-luggage",
    "progressKey": "Luggage",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-embark-003",
      "cruise-p-embark-011",
      "cruise-p-embark-012",
      "cruise-p-farewell-001"
    ]
  },
  {
    "word": "Luggage tag",
    "th": "ป้ายติดสัมภาระ",
    "phon": "/ˈlʌɡ.ɪdʒ tæɡ/",
    "pos": "noun",
    "cat": "port",
    "level": 1,
    "short": "A label used to identify a bag or suitcase.",
    "example": "Please check the luggage tag.",
    "exampleTh": "กรุณาตรวจสอบป้ายติดสัมภาระค่ะ",
    "collocation": "attach a luggage tag",
    "added": true,
    "def": "A label used to identify a bag or suitcase.",
    "id": "cruise-v-luggage-tag",
    "progressKey": "Luggage tag",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-embark-012",
      "cruise-p-farewell-001"
    ]
  },
  {
    "word": "Passport",
    "th": "หนังสือเดินทาง",
    "phon": "/ˈpɑːs.pɔːt/",
    "pos": "noun",
    "cat": "port",
    "level": 1,
    "short": "An official document used for international travel.",
    "example": "Please check which travel documents are required today.",
    "exampleTh": "กรุณาตรวจสอบเอกสารเดินทางที่ต้องใช้วันนี้ค่ะ",
    "collocation": "check your passport",
    "added": true,
    "def": "An official document used for international travel.",
    "id": "cruise-v-passport",
    "progressKey": "Passport",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Queue",
    "th": "แถวรอ",
    "phon": "/kjuː/",
    "pos": "noun",
    "cat": "port",
    "level": 1,
    "short": "A line of people waiting for a service.",
    "example": "Please join the queue here.",
    "exampleTh": "กรุณาต่อแถวตรงนี้ค่ะ",
    "collocation": "join the queue",
    "added": true,
    "def": "A line of people waiting for a service.",
    "id": "cruise-v-queue",
    "progressKey": "Queue",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Transfer",
    "th": "บริการรับส่ง",
    "phon": "/ˈtræns.fɜːr/",
    "pos": "noun",
    "cat": "port",
    "level": 1,
    "short": "Transport between two places during a journey.",
    "example": "Let me confirm your airport transfer.",
    "exampleTh": "ขอยืนยันบริการรับส่งสนามบินค่ะ",
    "collocation": "airport transfer",
    "added": true,
    "def": "Transport between two places during a journey.",
    "id": "cruise-v-transfer",
    "progressKey": "Transfer",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-farewell-009"
    ]
  },
  {
    "word": "Shuttle bus",
    "th": "รถรับส่ง",
    "phon": "/ˈʃʌt.əl bʌs/",
    "pos": "noun",
    "cat": "port",
    "level": 1,
    "short": "A bus making repeated trips between places.",
    "example": "I will check the shuttle bus schedule.",
    "exampleTh": "จะตรวจสอบตารางรถรับส่งค่ะ",
    "collocation": "shuttle bus schedule",
    "added": true,
    "def": "A bus making repeated trips between places.",
    "id": "cruise-v-shuttle-bus",
    "progressKey": "Shuttle bus",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Ship time",
    "th": "เวลาที่ใช้บนเรือ",
    "phon": "/ˈʃɪp taɪm/",
    "pos": "noun",
    "cat": "port",
    "level": 1,
    "short": "The time officially used on board the ship.",
    "example": "Please check whether the return time uses ship time.",
    "exampleTh": "กรุณาตรวจสอบว่าเวลากลับใช้เวลาบนเรือหรือไม่ค่ะ",
    "collocation": "check ship time",
    "added": true,
    "def": "The time officially used on board the ship.",
    "id": "cruise-v-ship-time",
    "progressKey": "Ship time",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-excursion-006",
      "cruise-p-excursion-010"
    ]
  },
  {
    "word": "Local time",
    "th": "เวลาท้องถิ่น",
    "phon": "/ˈləʊ.kəl taɪm/",
    "pos": "noun",
    "cat": "port",
    "level": 1,
    "short": "The time used at the place being visited.",
    "example": "Local time may differ from ship time.",
    "exampleTh": "เวลาท้องถิ่นอาจต่างจากเวลาบนเรือค่ะ",
    "collocation": "check local time",
    "added": true,
    "def": "The time used at the place being visited.",
    "id": "cruise-v-local-time",
    "progressKey": "Local time",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-excursion-006",
      "cruise-p-excursion-010"
    ]
  },
  {
    "word": "Return time",
    "th": "เวลาที่ต้องกลับ",
    "phon": "/rɪˈtɜːn taɪm/",
    "pos": "noun",
    "cat": "port",
    "level": 1,
    "short": "The agreed time for coming back.",
    "example": "Please confirm the return time before leaving.",
    "exampleTh": "กรุณายืนยันเวลาที่ต้องกลับก่อนออกไปค่ะ",
    "collocation": "confirm the return time",
    "added": true,
    "def": "The agreed time for coming back.",
    "id": "cruise-v-return-time",
    "progressKey": "Return time",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Shift",
    "th": "กะทำงาน",
    "phon": "/ʃɪft/",
    "pos": "noun",
    "cat": "crew",
    "level": 1,
    "short": "A scheduled period of work.",
    "example": "What time does your shift start?",
    "exampleTh": "กะของคุณเริ่มกี่โมงคะ",
    "collocation": "start a shift",
    "added": true,
    "def": "A scheduled period of work.",
    "id": "cruise-v-shift",
    "progressKey": "Shift",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-crewtalk-009"
    ]
  },
  {
    "word": "Task",
    "th": "งานที่ได้รับมอบหมาย",
    "phon": "/tɑːsk/",
    "pos": "noun",
    "cat": "crew",
    "level": 1,
    "short": "A piece of work that needs to be done.",
    "example": "Which task should I do first?",
    "exampleTh": "ควรทำงานไหนก่อนคะ",
    "collocation": "complete a task",
    "added": true,
    "def": "A piece of work that needs to be done.",
    "id": "cruise-v-task",
    "progressKey": "Task",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Report",
    "th": "รายงาน",
    "phon": "/rɪˈpɔːt/",
    "pos": "verb",
    "cat": "crew",
    "level": 1,
    "short": "Tell the responsible person about a situation.",
    "example": "Please report the fault to your supervisor.",
    "exampleTh": "กรุณารายงานข้อขัดข้องต่อหัวหน้างานค่ะ",
    "collocation": "report a fault",
    "added": true,
    "def": "Tell the responsible person about a situation.",
    "id": "cruise-v-report",
    "progressKey": "Report",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-cabin-013",
      "cruise-p-hygiene-003",
      "cruise-p-hygiene-004"
    ]
  },
  {
    "word": "Equipment",
    "th": "อุปกรณ์",
    "phon": "/ɪˈkwɪp.mənt/",
    "pos": "noun",
    "cat": "crew",
    "level": 1,
    "short": "Tools or items needed for a particular job.",
    "example": "Please check the equipment before use.",
    "exampleTh": "กรุณาตรวจสอบอุปกรณ์ก่อนใช้ค่ะ",
    "collocation": "check equipment",
    "added": true,
    "def": "Tools or items needed for a particular job.",
    "id": "cruise-v-equipment",
    "progressKey": "Equipment",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Checklist",
    "th": "รายการตรวจสอบ",
    "phon": "/ˈtʃek.lɪst/",
    "pos": "noun",
    "cat": "crew",
    "level": 1,
    "short": "A list used to check that tasks are complete.",
    "example": "Please follow the cabin checklist.",
    "exampleTh": "กรุณาปฏิบัติตามรายการตรวจสอบห้องพักค่ะ",
    "collocation": "complete a checklist",
    "added": true,
    "def": "A list used to check that tasks are complete.",
    "id": "cruise-v-checklist",
    "progressKey": "Checklist",
    "audience": "staff",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Assistance",
    "th": "ความช่วยเหลือ",
    "phon": "/əˈsɪs.təns/",
    "pos": "noun",
    "cat": "care",
    "level": 1,
    "short": "Help given to someone.",
    "example": "Would you like assistance?",
    "exampleTh": "ต้องการความช่วยเหลือไหมคะ",
    "collocation": "offer assistance",
    "added": true,
    "def": "Help given to someone.",
    "id": "cruise-v-assistance",
    "progressKey": "Assistance",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-care-004",
      "cruise-p-care-005",
      "cruise-p-care-007"
    ]
  },
  {
    "word": "Wheelchair",
    "th": "รถเข็นสำหรับผู้มีข้อจำกัดในการเดิน",
    "phon": "/ˈwiːl.tʃeər/",
    "pos": "noun",
    "cat": "care",
    "level": 1,
    "short": "A chair with wheels for someone who needs mobility support.",
    "example": "May I help with your wheelchair?",
    "exampleTh": "ให้ช่วยเกี่ยวกับรถเข็นไหมคะ",
    "collocation": "wheelchair assistance",
    "added": true,
    "def": "A chair with wheels for someone who needs mobility support.",
    "id": "cruise-v-wheelchair",
    "progressKey": "Wheelchair",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Ramp",
    "th": "ทางลาด",
    "phon": "/ræmp/",
    "pos": "noun",
    "cat": "care",
    "level": 1,
    "short": "A sloping surface used instead of steps.",
    "example": "Let me check the route with a ramp.",
    "exampleTh": "ขอตรวจสอบเส้นทางที่มีทางลาดค่ะ",
    "collocation": "an access ramp",
    "added": true,
    "def": "A sloping surface used instead of steps.",
    "id": "cruise-v-ramp",
    "progressKey": "Ramp",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Hearing aid",
    "th": "เครื่องช่วยฟัง",
    "phon": "/ˈhɪə.rɪŋ eɪd/",
    "pos": "noun",
    "cat": "care",
    "level": 1,
    "short": "A device that helps a person hear.",
    "example": "Would you prefer written information while adjusting your hearing aid?",
    "exampleTh": "ระหว่างปรับเครื่องช่วยฟัง ต้องการข้อมูลเป็นลายลักษณ์อักษรไหมคะ",
    "collocation": "a hearing aid",
    "added": true,
    "def": "A device that helps a person hear.",
    "id": "cruise-v-hearing-aid",
    "progressKey": "Hearing aid",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Interpreter",
    "th": "ล่าม",
    "phon": "/ɪnˈtɜː.prɪ.tər/",
    "pos": "noun",
    "cat": "care",
    "level": 1,
    "short": "A person who helps people communicate across languages.",
    "example": "I will check whether an interpreter is available.",
    "exampleTh": "จะตรวจสอบว่ามีล่ามพร้อมช่วยหรือไม่ค่ะ",
    "collocation": "request an interpreter",
    "added": true,
    "def": "A person who helps people communicate across languages.",
    "id": "cruise-v-interpreter",
    "progressKey": "Interpreter",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Soap and water",
    "th": "สบู่และน้ำ",
    "phon": "/ˌsəʊp ənd ˈwɔː.tər/",
    "pos": "noun phrase",
    "cat": "safety",
    "level": 1,
    "short": "The materials used for washing hands.",
    "example": "Please wash your hands with soap and water.",
    "exampleTh": "กรุณาล้างมือด้วยสบู่และน้ำค่ะ",
    "collocation": "wash with soap and water",
    "added": true,
    "def": "The materials used for washing hands.",
    "id": "cruise-v-soap-and-water",
    "progressKey": "Soap and water",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-safety-006",
      "cruise-p-hygiene-001"
    ]
  },
  {
    "word": "Wet floor",
    "th": "พื้นเปียก",
    "phon": "/ˌwet ˈflɔːr/",
    "pos": "noun phrase",
    "cat": "safety",
    "level": 1,
    "short": "A floor with water or another liquid on it.",
    "example": "Please be careful of the wet floor.",
    "exampleTh": "กรุณาระวังพื้นเปียกค่ะ",
    "collocation": "a wet floor sign",
    "added": true,
    "def": "A floor with water or another liquid on it.",
    "id": "cruise-v-wet-floor",
    "progressKey": "Wet floor",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Smoke",
    "th": "ควัน",
    "phon": "/sməʊk/",
    "pos": "noun",
    "cat": "safety",
    "level": 1,
    "short": "The visible gases and particles produced by burning.",
    "example": "Report smoke immediately using the ship's emergency procedure.",
    "exampleTh": "เมื่อพบควัน ให้รายงานทันทีตามขั้นตอนฉุกเฉินของเรือค่ะ",
    "collocation": "report smoke",
    "added": true,
    "def": "The visible gases and particles produced by burning.",
    "id": "cruise-v-smoke",
    "progressKey": "Smoke",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  },
  {
    "word": "Alarm",
    "th": "สัญญาณเตือน",
    "phon": "/əˈlɑːm/",
    "pos": "noun",
    "cat": "safety",
    "level": 1,
    "short": "A signal warning people about danger or an important event.",
    "example": "Please follow the crew's instructions when the alarm sounds.",
    "exampleTh": "เมื่อสัญญาณเตือนดัง กรุณาปฏิบัติตามคำแนะนำของลูกเรือค่ะ",
    "collocation": "an alarm sounds",
    "added": true,
    "def": "A signal warning people about danger or an important event.",
    "id": "cruise-v-alarm",
    "progressKey": "Alarm",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": [
      "cruise-p-safety-004"
    ]
  },
  {
    "word": "Emergency contact",
    "th": "ช่องทางติดต่อฉุกเฉิน",
    "phon": "/ɪˈmɜː.dʒən.si ˌkɒn.tækt/",
    "pos": "noun",
    "cat": "safety",
    "level": 1,
    "short": "A person or number to contact for urgent help.",
    "example": "Please check the emergency contact details in your cabin.",
    "exampleTh": "กรุณาตรวจสอบข้อมูลติดต่อฉุกเฉินในห้องพักค่ะ",
    "collocation": "emergency contact details",
    "added": true,
    "def": "A person or number to contact for urgent help.",
    "id": "cruise-v-emergency-contact",
    "progressKey": "Emergency contact",
    "audience": "both",
    "levelNote": "Editorial learning level, not CEFR certification.",
    "relatedPhraseIds": []
  }
];

/* ---------- PRONUNCIATION ---------- */
const CRUISE_PRON = [
  {
    "word": "Embarkation",
    "th": "การขึ้นเรือ",
    "phon": "/ˌem.bɑːˈkeɪ.ʃən/",
    "syll": [
      "em",
      "bar",
      "ka",
      "tion"
    ],
    "stress": 2,
    "example": "Please check your embarkation instructions.",
    "exampleTh": "กรุณาตรวจสอบคำแนะนำการขึ้นเรือค่ะ",
    "vocabularyId": "cruise-v-embarkation",
    "id": "cruise-pron-embarkation",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Disembarkation",
    "th": "การลงจากเรือ",
    "phon": "/ˌdɪs.em.bɑːˈkeɪ.ʃən/",
    "syll": [
      "dis",
      "em",
      "bar",
      "ka",
      "tion"
    ],
    "stress": 3,
    "example": "Your disembarkation instructions explain when to leave.",
    "exampleTh": "คำแนะนำการลงจากเรือระบุว่าคุณควรออกเมื่อใดค่ะ",
    "vocabularyId": "cruise-v-disembarkation",
    "id": "cruise-pron-disembarkation",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Muster station",
    "th": "จุดรวมพลฉุกเฉิน",
    "phon": "/ˈmʌs.tə ˈsteɪ.ʃən/",
    "syll": [
      "mus",
      "ter",
      "sta",
      "tion"
    ],
    "stress": 0,
    "example": "Let me help you check your assigned muster station.",
    "exampleTh": "ให้ช่วยตรวจสอบจุดรวมพลที่กำหนดให้นะคะ",
    "vocabularyId": "cruise-v-muster-station",
    "id": "cruise-pron-muster-station",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Itinerary",
    "th": "กำหนดการเดินเรือ",
    "phon": "/aɪˈtɪn.ər.ər.i/",
    "syll": [
      "i",
      "tin",
      "e",
      "ra",
      "ry"
    ],
    "stress": 1,
    "example": "The itinerary may change, so please check the latest announcement.",
    "exampleTh": "กำหนดการเดินทางอาจเปลี่ยน กรุณาตรวจสอบประกาศล่าสุดค่ะ",
    "vocabularyId": "cruise-v-itinerary",
    "id": "cruise-pron-itinerary",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Starboard",
    "th": "กราบขวาของเรือ",
    "phon": "/ˈstɑː.bəd/",
    "syll": [
      "star",
      "board"
    ],
    "stress": 0,
    "example": "Starboard is the right side when facing the bow.",
    "exampleTh": "กราบขวาคือด้านขวาเมื่อหันหน้าไปทางหัวเรือ",
    "vocabularyId": "cruise-v-starboard",
    "id": "cruise-pron-starboard",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Gangway",
    "th": "สะพานขึ้นลงเรือ",
    "phon": "/ˈgæŋ.weɪ/",
    "syll": [
      "gang",
      "way"
    ],
    "stress": 0,
    "example": "Please use the handrail on the gangway.",
    "exampleTh": "กรุณาจับราวบนสะพานขึ้นลงเรือค่ะ",
    "vocabularyId": "cruise-v-gangway",
    "id": "cruise-pron-gangway",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Gratuity",
    "th": "ค่าทิปบริการ",
    "phon": "/grəˈtʃuː.ə.ti/",
    "syll": [
      "gra",
      "tu",
      "i",
      "ty"
    ],
    "stress": 1,
    "example": "Let me explain the gratuity information for this service.",
    "exampleTh": "ขออธิบายข้อมูลค่าทิปสำหรับบริการนี้ค่ะ",
    "vocabularyId": "cruise-v-gratuity",
    "id": "cruise-pron-gratuity",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Buffet",
    "th": "บุฟเฟ่ต์",
    "phon": "/ˈbʊf.eɪ/",
    "syll": [
      "buf",
      "fet"
    ],
    "stress": 0,
    "example": "May I show you where the buffet starts?",
    "exampleTh": "ให้ชี้จุดเริ่มต้นไลน์บุฟเฟต์ได้ไหมคะ",
    "vocabularyId": "cruise-v-buffet",
    "id": "cruise-pron-buffet",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Maître d’",
    "th": "หัวหน้าพนักงานต้อนรับห้องอาหาร",
    "phon": "/ˌmeɪ.trəˈdiː/",
    "syll": [
      "mai",
      "tre",
      "d"
    ],
    "stress": 2,
    "example": "I will ask the maître d’ about your table request.",
    "exampleTh": "จะสอบถามหัวหน้าพนักงานห้องอาหารเกี่ยวกับคำขอเรื่องโต๊ะค่ะ",
    "vocabularyId": "cruise-v-ma-tre-d",
    "id": "cruise-pron-ma-tre-d",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Tender boat",
    "th": "เรือเล็กรับส่งขึ้นฝั่ง",
    "phon": "/ˈten.də bəʊt/",
    "syll": [
      "ten",
      "der",
      "boat"
    ],
    "stress": 0,
    "example": "Follow the crew's instructions when boarding the tender boat.",
    "exampleTh": "ปฏิบัติตามคำแนะนำลูกเรือขณะขึ้นเรือรับส่งค่ะ",
    "vocabularyId": "cruise-v-tender-boat",
    "id": "cruise-pron-tender-boat",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Amenities",
    "th": "ของใช้ในห้องพัก",
    "phon": "/əˈmen.ɪ.tiz/",
    "syll": [
      "a",
      "men",
      "i",
      "ties"
    ],
    "stress": 1,
    "example": "Which bathroom amenities do you need?",
    "exampleTh": "ต้องการของใช้ในห้องน้ำอะไรบ้างคะ",
    "vocabularyId": "cruise-v-amenities",
    "id": "cruise-pron-amenities",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Accessibility",
    "th": "การเข้าถึงสำหรับทุกคน",
    "phon": "/əkˌses.əˈbɪl.ə.ti/",
    "syll": [
      "ac",
      "ces",
      "si",
      "bil",
      "i",
      "ty"
    ],
    "stress": 3,
    "example": "Let me check the accessibility information for the venue.",
    "exampleTh": "ขอตรวจสอบข้อมูลการเข้าถึงสถานที่สำหรับผู้มีข้อจำกัดในการใช้งานค่ะ",
    "vocabularyId": "cruise-v-accessibility",
    "id": "cruise-pron-accessibility",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Pillow",
    "th": "หมอน",
    "phon": "/ˈpɪl.əʊ/",
    "syll": [
      "pil",
      "low"
    ],
    "stress": 0,
    "example": "Would you like a smaller pillow?",
    "exampleTh": "ต้องการหมอนใบเล็กลงไหมคะ",
    "added": true,
    "vocabularyId": "cruise-v-pillow",
    "id": "cruise-pron-pillow",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Blanket",
    "th": "ผ้าห่ม",
    "phon": "/ˈblæŋ.kɪt/",
    "syll": [
      "blan",
      "ket"
    ],
    "stress": 0,
    "example": "Would you like another blanket?",
    "exampleTh": "ต้องการผ้าห่มเพิ่มไหมคะ",
    "added": true,
    "vocabularyId": "cruise-v-blanket",
    "id": "cruise-pron-blanket",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Towel",
    "th": "ผ้าขนหนู",
    "phon": "/taʊəl/",
    "syll": [
      "tow",
      "el"
    ],
    "stress": 0,
    "example": "Here is a clean towel.",
    "exampleTh": "นี่คือผ้าขนหนูสะอาดค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-towel",
    "id": "cruise-pron-towel",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Receipt",
    "th": "ใบเสร็จรับเงิน",
    "phon": "/rɪˈsiːt/",
    "syll": [
      "re",
      "ceipt"
    ],
    "stress": 1,
    "example": "Would you like a receipt?",
    "exampleTh": "ต้องการใบเสร็จรับเงินไหมคะ",
    "added": true,
    "vocabularyId": "cruise-v-receipt",
    "id": "cruise-pron-receipt",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Refund",
    "th": "การคืนเงิน",
    "phon": "/ˈriː.fʌnd/",
    "syll": [
      "re",
      "fund"
    ],
    "stress": 0,
    "example": "Let me check our refund policy.",
    "exampleTh": "ขอตรวจสอบนโยบายการคืนเงินก่อนนะคะ",
    "added": true,
    "vocabularyId": "cruise-v-refund",
    "id": "cruise-pron-refund",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Allergy",
    "th": "อาการแพ้ / ภาวะแพ้",
    "phon": "/ˈæl.ə.dʒi/",
    "syll": [
      "al",
      "ler",
      "gy"
    ],
    "stress": 0,
    "example": "Do you have an allergy we should know about?",
    "exampleTh": "มีอาการแพ้ที่เราควรทราบไหมคะ",
    "added": true,
    "vocabularyId": "cruise-v-allergy",
    "id": "cruise-pron-allergy",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Ingredient",
    "th": "ส่วนผสม",
    "phon": "/ɪnˈɡriː.di.ənt/",
    "syll": [
      "in",
      "gre",
      "di",
      "ent"
    ],
    "stress": 1,
    "example": "Let me check the ingredient list.",
    "exampleTh": "ขอตรวจสอบรายการส่วนผสมค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-ingredient",
    "id": "cruise-pron-ingredient",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Order",
    "th": "รายการอาหารที่สั่ง",
    "phon": "/ˈɔː.dər/",
    "syll": [
      "or",
      "der"
    ],
    "stress": 0,
    "example": "May I repeat your order?",
    "exampleTh": "ขอทวนรายการอาหารที่สั่งได้ไหมคะ",
    "added": true,
    "vocabularyId": "cruise-v-order",
    "id": "cruise-pron-order",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Vegetarian",
    "th": "มังสวิรัติ",
    "phon": "/ˌvedʒ.ɪˈteə.ri.ən/",
    "syll": [
      "veg",
      "e",
      "tar",
      "i",
      "an"
    ],
    "stress": 2,
    "example": "Let me check the vegetarian options.",
    "exampleTh": "ขอตรวจสอบรายการอาหารมังสวิรัติค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-vegetarian",
    "id": "cruise-pron-vegetarian",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Maintenance",
    "th": "งานซ่อมบำรุง",
    "phon": "/ˈmeɪn.tən.əns/",
    "syll": [
      "main",
      "te",
      "nance"
    ],
    "stress": 0,
    "example": "I will contact the maintenance team.",
    "exampleTh": "จะติดต่อทีมซ่อมบำรุงค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-maintenance",
    "id": "cruise-pron-maintenance",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Laundry",
    "th": "เสื้อผ้าที่ต้องซัก / งานซักรีด",
    "phon": "/ˈlɔːn.dri/",
    "syll": [
      "laun",
      "dry"
    ],
    "stress": 0,
    "example": "May I collect your laundry?",
    "exampleTh": "ขอรับเสื้อผ้าที่ต้องการส่งซักได้ไหมคะ",
    "added": true,
    "vocabularyId": "cruise-v-laundry",
    "id": "cruise-pron-laundry",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Corridor",
    "th": "ทางเดิน",
    "phon": "/ˈkɒr.ɪ.dɔːr/",
    "syll": [
      "cor",
      "ri",
      "dor"
    ],
    "stress": 0,
    "example": "Please keep the corridor clear.",
    "exampleTh": "กรุณาอย่าวางสิ่งของกีดขวางทางเดินค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-corridor",
    "id": "cruise-pron-corridor",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Interpreter",
    "th": "ล่าม",
    "phon": "/ɪnˈtɜː.prɪ.tər/",
    "syll": [
      "in",
      "ter",
      "pret",
      "er"
    ],
    "stress": 1,
    "example": "I will check whether an interpreter is available.",
    "exampleTh": "จะตรวจสอบว่ามีล่ามพร้อมช่วยหรือไม่ค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-interpreter",
    "id": "cruise-pron-interpreter",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Departure",
    "th": "การออกเดินทาง",
    "phon": "/dɪˈpɑː.tʃər/",
    "syll": [
      "de",
      "par",
      "ture"
    ],
    "stress": 1,
    "example": "Let me confirm the departure time.",
    "exampleTh": "ขอยืนยันเวลาออกเดินทางค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-departure",
    "id": "cruise-pron-departure",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Arrival",
    "th": "การมาถึง",
    "phon": "/əˈraɪ.vəl/",
    "syll": [
      "ar",
      "ri",
      "val"
    ],
    "stress": 1,
    "example": "The arrival time has changed.",
    "exampleTh": "เวลามาถึงเปลี่ยนแล้วค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-arrival",
    "id": "cruise-pron-arrival",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Delay",
    "th": "ความล่าช้า",
    "phon": "/dɪˈleɪ/",
    "syll": [
      "de",
      "lay"
    ],
    "stress": 1,
    "example": "I will check the reason for the delay.",
    "exampleTh": "จะตรวจสอบสาเหตุของความล่าช้าค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-delay",
    "id": "cruise-pron-delay",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Currency",
    "th": "สกุลเงิน",
    "phon": "/ˈkʌr.ən.si/",
    "syll": [
      "cur",
      "ren",
      "cy"
    ],
    "stress": 0,
    "example": "I will confirm the payment currency.",
    "exampleTh": "จะยืนยันสกุลเงินที่ใช้ชำระค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-currency",
    "id": "cruise-pron-currency",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Statement",
    "th": "รายการเดินบัญชี",
    "phon": "/ˈsteɪt.mənt/",
    "syll": [
      "state",
      "ment"
    ],
    "stress": 0,
    "example": "Would you like to review your account statement?",
    "exampleTh": "ต้องการตรวจสอบรายการเดินบัญชีไหมคะ",
    "added": true,
    "vocabularyId": "cruise-v-statement",
    "id": "cruise-pron-statement",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Duplicate charge",
    "th": "การเรียกเก็บเงินซ้ำ",
    "phon": "/ˈdjuː.plɪ.kət tʃɑːdʒ/",
    "syll": [
      "du",
      "pli",
      "cate",
      "charge"
    ],
    "stress": 0,
    "example": "I will ask our team to review the duplicate charge.",
    "exampleTh": "จะขอให้ทีมตรวจสอบการเรียกเก็บเงินซ้ำค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-duplicate-charge",
    "id": "cruise-pron-duplicate-charge",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Supervisor",
    "th": "หัวหน้างาน",
    "phon": "/ˈsuː.pə.vaɪ.zər/",
    "syll": [
      "su",
      "per",
      "vi",
      "sor"
    ],
    "stress": 0,
    "example": "Let me contact my supervisor.",
    "exampleTh": "ขอติดต่อหัวหน้างานก่อนนะคะ",
    "added": true,
    "vocabularyId": "cruise-v-supervisor",
    "id": "cruise-pron-supervisor",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Confirm",
    "th": "ยืนยัน",
    "phon": "/kənˈfɜːm/",
    "syll": [
      "con",
      "firm"
    ],
    "stress": 1,
    "example": "Could you confirm the time?",
    "exampleTh": "ช่วยยืนยันเวลาได้ไหมคะ",
    "added": true,
    "vocabularyId": "cruise-v-confirm",
    "id": "cruise-pron-confirm",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Repeat",
    "th": "พูดซ้ำ",
    "phon": "/rɪˈpiːt/",
    "syll": [
      "re",
      "peat"
    ],
    "stress": 1,
    "example": "Could you repeat that, please?",
    "exampleTh": "ช่วยพูดซ้ำอีกครั้งได้ไหมคะ",
    "added": true,
    "vocabularyId": "cruise-v-repeat",
    "id": "cruise-pron-repeat",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Luggage",
    "th": "สัมภาระ",
    "phon": "/ˈlʌɡ.ɪdʒ/",
    "syll": [
      "lug",
      "gage"
    ],
    "stress": 0,
    "example": "How many pieces of luggage do you have?",
    "exampleTh": "มีสัมภาระกี่ชิ้นคะ",
    "added": true,
    "vocabularyId": "cruise-v-luggage",
    "id": "cruise-pron-luggage",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Equipment",
    "th": "อุปกรณ์",
    "phon": "/ɪˈkwɪp.mənt/",
    "syll": [
      "e",
      "quip",
      "ment"
    ],
    "stress": 1,
    "example": "Please check the equipment before use.",
    "exampleTh": "กรุณาตรวจสอบอุปกรณ์ก่อนใช้ค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-equipment",
    "id": "cruise-pron-equipment",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Assistance",
    "th": "ความช่วยเหลือ",
    "phon": "/əˈsɪs.təns/",
    "syll": [
      "as",
      "sis",
      "tance"
    ],
    "stress": 1,
    "example": "Would you like assistance?",
    "exampleTh": "ต้องการความช่วยเหลือไหมคะ",
    "added": true,
    "vocabularyId": "cruise-v-assistance",
    "id": "cruise-pron-assistance",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Authorisation",
    "th": "การอนุมัติ",
    "phon": "/ˌɔː.θər.aɪˈzeɪ.ʃən/",
    "syll": [
      "au",
      "thor",
      "i",
      "sa",
      "tion"
    ],
    "stress": 3,
    "example": "This refund needs authorisation from my supervisor.",
    "exampleTh": "การคืนเงินนี้ต้องได้รับอนุมัติจากหัวหน้างานค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-authorisation",
    "id": "cruise-pron-authorisation",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Complaint",
    "th": "ข้อร้องเรียน",
    "phon": "/kəmˈpleɪnt/",
    "syll": [
      "com",
      "plaint"
    ],
    "stress": 1,
    "example": "I will record your complaint accurately.",
    "exampleTh": "จะบันทึกข้อร้องเรียนของคุณให้ถูกต้องค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-complaint",
    "id": "cruise-pron-complaint",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  },
  {
    "word": "Shampoo",
    "th": "แชมพู",
    "phon": "/ʃæmˈpuː/",
    "syll": [
      "sham",
      "poo"
    ],
    "stress": 1,
    "example": "Shampoo is available in the shower.",
    "exampleTh": "มีแชมพูในห้องอาบน้ำค่ะ",
    "added": true,
    "vocabularyId": "cruise-v-shampoo",
    "id": "cruise-pron-shampoo",
    "note": "Syllable spelling is a reading aid; listen to the audio. Regional pronunciation and word stress may vary."
  }
];

/* ---------- PHRASES ---------- */
const CRUISE_PHRASES = [
  {
    "id": "everyday",
    "en": "Everyday courtesies",
    "th": "คำสุภาพที่ใช้ทุกวัน",
    "items": [
      {
        "level": 1,
        "text": "Good morning, and welcome aboard.",
        "th": "สวัสดีตอนเช้าค่ะ ยินดีต้อนรับขึ้นเรือ",
        "note": "The greeting you will use most.",
        "id": "cruise-p-everyday-001",
        "audience": "guest",
        "context": "Everyday courtesies",
        "contextTh": "คำสุภาพที่ใช้ทุกวัน",
        "noteTh": "ใช้ในสถานการณ์คำสุภาพที่ใช้ทุกวัน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Certainly — one moment, please.",
        "th": "ได้ค่ะ ขอเวลาสักครู่นะคะ",
        "note": "Buys a moment politely.",
        "id": "cruise-p-everyday-002",
        "audience": "guest",
        "context": "Everyday courtesies",
        "contextTh": "คำสุภาพที่ใช้ทุกวัน",
        "noteTh": "ใช้ในสถานการณ์คำสุภาพที่ใช้ทุกวัน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Thank you for waiting.",
        "th": "ขอบคุณที่รอนะคะ",
        "note": "Say it even after a short wait.",
        "id": "cruise-p-everyday-003",
        "audience": "guest",
        "context": "Everyday courtesies",
        "contextTh": "คำสุภาพที่ใช้ทุกวัน",
        "noteTh": "ใช้ในสถานการณ์คำสุภาพที่ใช้ทุกวัน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "It’s my pleasure.",
        "th": "เป็นความยินดีของดิฉันค่ะ",
        "note": "A gracious reply to thanks.",
        "id": "cruise-p-everyday-004",
        "audience": "guest",
        "context": "Everyday courtesies",
        "contextTh": "คำสุภาพที่ใช้ทุกวัน",
        "noteTh": "ใช้ในสถานการณ์คำสุภาพที่ใช้ทุกวัน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Excuse me, may I just pass? Thank you.",
        "th": "ขออนุญาตเดินผ่านนะคะ ขอบคุณค่ะ",
        "note": "Corridors on a ship are narrow.",
        "id": "cruise-p-everyday-005",
        "audience": "guest",
        "context": "Everyday courtesies",
        "contextTh": "คำสุภาพที่ใช้ทุกวัน",
        "noteTh": "ใช้ในสถานการณ์คำสุภาพที่ใช้ทุกวัน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Is there anything else I can help you with?",
        "th": "มีอะไรให้ดิฉันช่วยอีกไหมคะ",
        "note": "Closes any interaction well.",
        "id": "cruise-p-everyday-006",
        "audience": "guest",
        "context": "Everyday courtesies",
        "contextTh": "คำสุภาพที่ใช้ทุกวัน",
        "noteTh": "ใช้ในสถานการณ์คำสุภาพที่ใช้ทุกวัน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Enjoy the rest of your day.",
        "th": "ขอให้สนุกกับช่วงเวลาที่เหลือของวันนะคะ",
        "note": "A warm everyday farewell.",
        "id": "cruise-p-everyday-007",
        "audience": "guest",
        "context": "Everyday courtesies",
        "contextTh": "คำสุภาพที่ใช้ทุกวัน",
        "noteTh": "ใช้ในสถานการณ์คำสุภาพที่ใช้ทุกวัน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Hello. How can I help you?",
        "th": "สวัสดีค่ะ มีอะไรให้ช่วยไหมคะ",
        "prompt": "Hello, I have a question.",
        "promptTh": "สวัสดีค่ะ มีคำถามค่ะ",
        "note": "A short opening for a service conversation.",
        "noteTh": "ประโยคเริ่มการสนทนาบริการแบบสั้น",
        "added": true,
        "id": "cruise-p-everyday-008",
        "audience": "guest",
        "context": "Everyday courtesies",
        "contextTh": "คำสุภาพที่ใช้ทุกวัน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Please follow me.",
        "th": "กรุณาตามมาค่ะ",
        "prompt": "Can you show me the way?",
        "promptTh": "ช่วยพาไปได้ไหมคะ",
        "note": "Lead the guest only along a confirmed route.",
        "noteTh": "นำลูกค้าไปตามเส้นทางที่ตรวจสอบแล้ว",
        "added": true,
        "id": "cruise-p-everyday-009",
        "audience": "guest",
        "context": "Everyday courtesies",
        "contextTh": "คำสุภาพที่ใช้ทุกวัน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-follow"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Let me check that for you.",
        "th": "ขอตรวจสอบให้ค่ะ",
        "prompt": "Is the restaurant open?",
        "promptTh": "ห้องอาหารเปิดหรือยังคะ",
        "note": "Check current information before answering.",
        "noteTh": "ตรวจสอบข้อมูลปัจจุบันก่อนตอบ",
        "added": true,
        "id": "cruise-p-everyday-010",
        "audience": "guest",
        "context": "Everyday courtesies",
        "contextTh": "คำสุภาพที่ใช้ทุกวัน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Please take your time.",
        "th": "ไม่ต้องรีบนะคะ",
        "prompt": "I need a moment to decide.",
        "promptTh": "ขอเวลาตัดสินใจสักครู่ค่ะ",
        "note": "Allow time without pressure.",
        "noteTh": "ให้เวลาโดยไม่กดดัน",
        "added": true,
        "id": "cruise-p-everyday-011",
        "audience": "guest",
        "context": "Everyday courtesies",
        "contextTh": "คำสุภาพที่ใช้ทุกวัน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Thank you for letting me know.",
        "th": "ขอบคุณที่แจ้งให้ทราบค่ะ",
        "prompt": "There is a problem in my cabin.",
        "promptTh": "มีปัญหาในห้องพักค่ะ",
        "note": "Acknowledge the report before asking for details.",
        "noteTh": "รับทราบก่อนสอบถามรายละเอียด",
        "added": true,
        "id": "cruise-p-everyday-012",
        "audience": "guest",
        "context": "Everyday courtesies",
        "contextTh": "คำสุภาพที่ใช้ทุกวัน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      }
    ]
  },
  {
    "id": "embark",
    "en": "Welcoming guests aboard",
    "th": "การต้อนรับขึ้นเรือ",
    "items": [
      {
        "level": 2,
        "text": "Welcome aboard. May I see your boarding pass and cruise card?",
        "th": "ยินดีต้อนรับขึ้นเรือค่ะ ขอดูบัตรขึ้นเรือและบัตรประจำตัวหน่อยนะคะ",
        "note": "The standard embarkation greeting.",
        "id": "cruise-p-embark-001",
        "audience": "guest",
        "context": "Welcoming guests aboard",
        "contextTh": "การต้อนรับขึ้นเรือ",
        "noteTh": "ใช้ในสถานการณ์การต้อนรับขึ้นเรือ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-cruise-card",
          "cruise-v-boarding-pass"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Your stateroom is on deck nine, midship. Shall I show you the way?",
        "th": "ห้องพักของคุณอยู่ชั้นเก้า กลางลำเรือค่ะ ให้ดิฉันพาไปไหมคะ",
        "note": "Give the deck and location together.",
        "id": "cruise-p-embark-002",
        "audience": "guest",
        "context": "Welcoming guests aboard",
        "contextTh": "การต้อนรับขึ้นเรือ",
        "noteTh": "ใช้ในสถานการณ์การต้อนรับขึ้นเรือ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-stateroom",
          "cruise-v-midship"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Let me check when your luggage is expected to reach your cabin.",
        "th": "ขอตรวจสอบว่าสัมภาระจะถึงห้องพักเมื่อใดค่ะ",
        "note": "Give a verified estimate, not an automatic promise.",
        "noteTh": "แจ้งเวลาประมาณที่ตรวจสอบแล้ว ไม่รับปากโดยอัตโนมัติ",
        "id": "cruise-p-embark-003",
        "audience": "guest",
        "context": "Welcoming guests aboard",
        "contextTh": "การต้อนรับขึ้นเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-luggage"
        ],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "Please follow the instructions for the required passenger safety briefing and muster arrangements.",
        "th": "กรุณาปฏิบัติตามคำแนะนำการชี้แจงความปลอดภัยและการรวมพลสำหรับผู้โดยสารค่ะ",
        "note": "Use the arrangements for this ship and sailing.",
        "noteTh": "ใช้ข้อกำหนดของเรือและเที่ยวเรือนี้",
        "id": "cruise-p-embark-004",
        "audience": "guest",
        "context": "Welcoming guests aboard",
        "contextTh": "การต้อนรับขึ้นเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-safety-briefing",
          "cruise-v-follow"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Let me help you find your assigned muster station in the ship information provided.",
        "th": "ให้ช่วยหาจุดรวมพลที่กำหนดจากข้อมูลที่เรือให้ไว้นะคะ",
        "note": "The source of muster information can differ between ships.",
        "noteTh": "แหล่งข้อมูลจุดรวมพลอาจต่างกันระหว่างเรือ",
        "id": "cruise-p-embark-005",
        "audience": "guest",
        "context": "Welcoming guests aboard",
        "contextTh": "การต้อนรับขึ้นเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-muster-station"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "The buffet on the Lido deck is open now, if you’d like lunch.",
        "th": "บุฟเฟ่ต์ที่ดาดฟ้าสระว่ายน้ำเปิดแล้วค่ะ หากต้องการรับประทานอาหารกลางวัน",
        "note": "Useful while cabins are still being prepared.",
        "id": "cruise-p-embark-006",
        "audience": "guest",
        "context": "Welcoming guests aboard",
        "contextTh": "การต้อนรับขึ้นเรือ",
        "noteTh": "ใช้ในสถานการณ์การต้อนรับขึ้นเรือ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-lido-deck",
          "cruise-v-buffet"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "May I check your cabin number?",
        "th": "ขอตรวจสอบหมายเลขห้องพักได้ไหมคะ",
        "prompt": "I need help finding my room.",
        "promptTh": "ต้องการความช่วยเหลือในการหาห้องค่ะ",
        "note": "Confirm the number before giving directions.",
        "noteTh": "ยืนยันหมายเลขก่อนบอกทาง",
        "added": true,
        "id": "cruise-p-embark-007",
        "audience": "guest",
        "context": "Welcoming guests aboard",
        "contextTh": "การต้อนรับขึ้นเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check"
        ],
        "dialogueIds": [
          "arrival-help"
        ]
      },
      {
        "level": 1,
        "text": "Is this your first cruise?",
        "th": "ล่องเรือครั้งแรกใช่ไหมคะ",
        "prompt": "I am not sure where to begin.",
        "promptTh": "ไม่แน่ใจว่าควรเริ่มที่ไหนค่ะ",
        "note": "Find out whether a simple introduction would help.",
        "noteTh": "ตรวจสอบว่าคำอธิบายเบื้องต้นจะช่วยหรือไม่",
        "added": true,
        "id": "cruise-p-embark-008",
        "audience": "guest",
        "context": "Welcoming guests aboard",
        "contextTh": "การต้อนรับขึ้นเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Please have your boarding pass ready.",
        "th": "กรุณาเตรียมบัตรขึ้นเรือให้พร้อมค่ะ",
        "prompt": "What should I show at check-in?",
        "promptTh": "ต้องแสดงอะไรตอนเช็กอินคะ",
        "note": "Follow the actual check-in requirements.",
        "noteTh": "ทำตามข้อกำหนดเช็กอินจริง",
        "added": true,
        "id": "cruise-p-embark-009",
        "audience": "guest",
        "context": "Welcoming guests aboard",
        "contextTh": "การต้อนรับขึ้นเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-boarding-pass"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Would you like help with the directions?",
        "th": "ต้องการความช่วยเหลือเรื่องเส้นทางไหมคะ",
        "prompt": "I cannot find my cabin.",
        "promptTh": "หาห้องพักไม่พบค่ะ",
        "note": "Offer help without assuming the guest cannot navigate.",
        "noteTh": "เสนอความช่วยเหลือโดยไม่สรุปความสามารถของลูกค้า",
        "added": true,
        "id": "cruise-p-embark-010",
        "audience": "guest",
        "context": "Welcoming guests aboard",
        "contextTh": "การต้อนรับขึ้นเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Let me check the delivery status of your luggage.",
        "th": "ขอตรวจสอบสถานะการนำส่งสัมภาระค่ะ",
        "prompt": "My suitcase has not arrived.",
        "promptTh": "กระเป๋าเดินทางยังมาไม่ถึงค่ะ",
        "note": "Check the luggage record instead of promising a time.",
        "noteTh": "ตรวจสอบข้อมูลสัมภาระแทนการรับรองเวลา",
        "added": true,
        "id": "cruise-p-embark-011",
        "audience": "guest",
        "context": "Welcoming guests aboard",
        "contextTh": "การต้อนรับขึ้นเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-luggage"
        ],
        "dialogueIds": [
          "arrival-help"
        ]
      },
      {
        "level": 1,
        "text": "Please check the name on your luggage tag.",
        "th": "กรุณาตรวจสอบชื่อบนป้ายสัมภาระค่ะ",
        "prompt": "Is this the correct bag?",
        "promptTh": "กระเป๋าใบนี้ถูกต้องไหมคะ",
        "note": "Verify the label before handing over luggage.",
        "noteTh": "ตรวจสอบป้ายก่อนส่งมอบสัมภาระ",
        "added": true,
        "id": "cruise-p-embark-012",
        "audience": "guest",
        "context": "Welcoming guests aboard",
        "contextTh": "การต้อนรับขึ้นเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-luggage",
          "cruise-v-luggage-tag"
        ],
        "dialogueIds": [
          "arrival-help"
        ]
      },
      {
        "level": 2,
        "text": "The crew will explain today's safety arrangements.",
        "th": "ลูกเรือจะอธิบายการจัดเตรียมด้านความปลอดภัยของวันนี้ค่ะ",
        "prompt": "When is the safety briefing?",
        "promptTh": "การชี้แจงความปลอดภัยเมื่อไรคะ",
        "note": "Use the actual briefing arrangements for the sailing.",
        "noteTh": "ใช้กำหนดการชี้แจงจริงของเที่ยวเรือ",
        "added": true,
        "id": "cruise-p-embark-013",
        "audience": "guest",
        "context": "Welcoming guests aboard",
        "contextTh": "การต้อนรับขึ้นเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-explain"
        ],
        "dialogueIds": []
      }
    ]
  },
  {
    "id": "cabin",
    "en": "Cabin & housekeeping",
    "th": "ห้องพักและงานแม่บ้าน",
    "items": [
      {
        "level": 1,
        "text": "Good morning, housekeeping. May I service your stateroom?",
        "th": "สวัสดีตอนเช้าค่ะ แผนกแม่บ้าน ขออนุญาตทำความสะอาดห้องได้ไหมคะ",
        "note": "Always knock and announce yourself.",
        "id": "cruise-p-cabin-001",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "noteTh": "ใช้ในสถานการณ์ห้องพักและงานแม่บ้าน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-stateroom"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "I’ll come back later if now isn’t convenient.",
        "th": "หากตอนนี้ไม่สะดวก ดิฉันจะกลับมาอีกครั้งนะคะ",
        "note": "Never push past a guest’s timing.",
        "id": "cruise-p-cabin-002",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "noteTh": "ใช้ในสถานการณ์ห้องพักและงานแม่บ้าน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Would you like your bed made up as one large bed or two singles?",
        "th": "ต้องการจัดเตียงเป็นเตียงใหญ่หนึ่งเตียง หรือเตียงเดี่ยวสองเตียงคะ",
        "note": "Ask on the first day.",
        "id": "cruise-p-cabin-003",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "noteTh": "ใช้ในสถานการณ์ห้องพักและงานแม่บ้าน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "I’ve left fresh towels and amenities in the bathroom.",
        "th": "ดิฉันเปลี่ยนผ้าเช็ดตัวและของใช้ในห้องน้ำใหม่ให้แล้วค่ะ",
        "note": "Tell the guest what you did.",
        "id": "cruise-p-cabin-004",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "noteTh": "ใช้ในสถานการณ์ห้องพักและงานแม่บ้าน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-amenities",
          "cruise-v-towel",
          "cruise-v-left"
        ],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "I’ll return this evening for turndown service, at around eight.",
        "th": "ดิฉันจะกลับมาจัดเตียงตอนเย็นประมาณแปดโมงนะคะ",
        "note": "Sets a clear expectation.",
        "id": "cruise-p-cabin-005",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "noteTh": "ใช้ในสถานการณ์ห้องพักและงานแม่บ้าน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-turndown-service"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "If you need extra pillows or blankets, just let me know.",
        "th": "หากต้องการหมอนหรือผ้าห่มเพิ่ม บอกดิฉันได้เลยนะคะ",
        "note": "Offer before the guest has to ask.",
        "id": "cruise-p-cabin-006",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "noteTh": "ใช้ในสถานการณ์ห้องพักและงานแม่บ้าน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-blanket",
          "cruise-v-pillow",
          "cruise-v-extra"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "May I come in?",
        "th": "ขอเข้าไปได้ไหมคะ",
        "prompt": "Who is at the door?",
        "promptTh": "ใครอยู่หน้าประตูคะ",
        "note": "Identify yourself first and wait for permission.",
        "noteTh": "แจ้งตัวก่อนและรออนุญาต",
        "added": true,
        "id": "cruise-p-cabin-007",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "housekeeping-visit"
        ]
      },
      {
        "level": 1,
        "text": "Would you like fresh towels?",
        "th": "ต้องการผ้าขนหนูสะอาดไหมคะ",
        "prompt": "We have used all the towels.",
        "promptTh": "ใช้ผ้าขนหนูหมดแล้วค่ะ",
        "note": "Check the quantity needed.",
        "noteTh": "ถามจำนวนที่ต้องการ",
        "added": true,
        "id": "cruise-p-cabin-008",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-towel"
        ],
        "dialogueIds": [
          "cabin-supplies"
        ]
      },
      {
        "level": 1,
        "text": "How many extra pillows do you need?",
        "th": "ต้องการหมอนเพิ่มกี่ใบคะ",
        "prompt": "Could we have more pillows?",
        "promptTh": "ขอหมอนเพิ่มได้ไหมคะ",
        "note": "Confirm quantity rather than guessing.",
        "noteTh": "ยืนยันจำนวนแทนการคาดเดา",
        "added": true,
        "id": "cruise-p-cabin-009",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-pillow",
          "cruise-v-extra"
        ],
        "dialogueIds": [
          "cabin-supplies"
        ]
      },
      {
        "level": 1,
        "text": "Would you like another blanket?",
        "th": "ต้องการผ้าห่มเพิ่มไหมคะ",
        "prompt": "The cabin feels cold.",
        "promptTh": "รู้สึกว่าห้องพักเย็นค่ะ",
        "note": "Offer an immediate comfort option.",
        "noteTh": "เสนอวิธีเพิ่มความสบายที่ทำได้ทันที",
        "added": true,
        "id": "cruise-p-cabin-010",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-blanket"
        ],
        "dialogueIds": [
          "cabin-supplies"
        ]
      },
      {
        "level": 1,
        "text": "What time would be convenient for cleaning?",
        "th": "สะดวกให้ทำความสะอาดกี่โมงคะ",
        "prompt": "Please come back later.",
        "promptTh": "กรุณากลับมาภายหลังค่ะ",
        "note": "Check the requested time against the work schedule.",
        "noteTh": "ตรวจสอบเวลาที่ขอกับตารางงาน",
        "added": true,
        "id": "cruise-p-cabin-011",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "housekeeping-visit"
        ]
      },
      {
        "level": 1,
        "text": "Which item is missing?",
        "th": "ของชิ้นไหนหายไปคะ",
        "prompt": "Something is missing from the bathroom.",
        "promptTh": "มีของบางอย่างหายไปจากห้องน้ำค่ะ",
        "note": "Identify the item before taking action.",
        "noteTh": "ระบุสิ่งของก่อนดำเนินการ",
        "added": true,
        "id": "cruise-p-cabin-012",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-missing"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "I will report the air-conditioning problem to maintenance.",
        "th": "จะรายงานปัญหาเครื่องปรับอากาศให้ฝ่ายซ่อมบำรุงค่ะ",
        "prompt": "The air conditioning is not working.",
        "promptTh": "เครื่องปรับอากาศไม่ทำงานค่ะ",
        "note": "Report the fault without promising an unconfirmed repair time.",
        "noteTh": "รายงานข้อขัดข้องโดยไม่รับรองเวลาซ่อมที่ยังไม่ยืนยัน",
        "added": true,
        "id": "cruise-p-cabin-013",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-maintenance",
          "cruise-v-report"
        ],
        "dialogueIds": [
          "maintenance-report"
        ]
      },
      {
        "level": 1,
        "text": "Where did you notice the leak?",
        "th": "พบการรั่วบริเวณไหนคะ",
        "prompt": "There is water on the bathroom floor.",
        "promptTh": "มีน้ำอยู่บนพื้นห้องน้ำค่ะ",
        "note": "Identify the location and follow the safety procedure.",
        "noteTh": "ระบุตำแหน่งและทำตามขั้นตอนความปลอดภัย",
        "added": true,
        "id": "cruise-p-cabin-014",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-leak"
        ],
        "dialogueIds": [
          "maintenance-report"
        ]
      },
      {
        "level": 1,
        "text": "Please do not use the broken item.",
        "th": "กรุณาอย่าใช้สิ่งของที่ชำรุดค่ะ",
        "prompt": "This chair is broken.",
        "promptTh": "เก้าอี้ตัวนี้ชำรุดค่ะ",
        "note": "Keep the guest away from the identified hazard and report it.",
        "noteTh": "ให้ลูกค้าหลีกเลี่ยงอันตรายที่พบและรายงาน",
        "added": true,
        "id": "cruise-p-cabin-015",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-broken"
        ],
        "dialogueIds": [
          "maintenance-report"
        ]
      },
      {
        "level": 2,
        "text": "May I collect your laundry bag?",
        "th": "ขอรับถุงเสื้อผ้าส่งซักได้ไหมคะ",
        "prompt": "My laundry is ready.",
        "promptTh": "เตรียมเสื้อผ้าส่งซักแล้วค่ะ",
        "note": "Confirm the laundry form and applicable charges.",
        "noteTh": "ยืนยันแบบฟอร์มส่งซักและค่าใช้จ่าย",
        "added": true,
        "id": "cruise-p-cabin-016",
        "audience": "guest",
        "context": "Cabin & housekeeping",
        "contextTh": "ห้องพักและงานแม่บ้าน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-laundry",
          "cruise-v-laundry-bag"
        ],
        "dialogueIds": [
          "housekeeping-visit"
        ]
      }
    ]
  },
  {
    "id": "dining",
    "en": "Restaurant service",
    "th": "บริการห้องอาหาร",
    "items": [
      {
        "level": 2,
        "text": "Good evening. Do you have a reservation, or is it a table for two?",
        "th": "สวัสดีตอนเย็นค่ะ ท่านจองโต๊ะไว้หรือไม่ หรือรับโต๊ะสำหรับสองท่านคะ",
        "note": "Covers both cases in one question.",
        "id": "cruise-p-dining-001",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "noteTh": "ใช้ในสถานการณ์บริการห้องอาหาร โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "May I seat you by the window this evening?",
        "th": "ขอเชิญนั่งโต๊ะริมหน้าต่างเย็นนี้ไหมคะ",
        "note": "Offering, not assigning.",
        "id": "cruise-p-dining-002",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "noteTh": "ใช้ในสถานการณ์บริการห้องอาหาร โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "Do you have any allergies or dietary requirements I should tell the galley?",
        "th": "ท่านมีอาการแพ้อาหารหรือข้อจำกัดด้านอาหารที่ควรแจ้งครัวไหมคะ",
        "note": "An essential safety question.",
        "id": "cruise-p-dining-003",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "noteTh": "ใช้ในสถานการณ์บริการห้องอาหาร โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-galley",
          "cruise-v-dietary-requirement"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Are you ready to order, or would you like a few more minutes?",
        "th": "พร้อมสั่งอาหารหรือยังคะ หรือขอเวลาอีกสักครู่",
        "note": "Never rush a table.",
        "id": "cruise-p-dining-004",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "noteTh": "ใช้ในสถานการณ์บริการห้องอาหาร โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-order"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "May I clear these plates for you?",
        "th": "ขออนุญาตเก็บจานได้ไหมคะ",
        "note": "Ask before removing anything.",
        "id": "cruise-p-dining-005",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "noteTh": "ใช้ในสถานการณ์บริการห้องอาหาร โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-plate"
        ],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "The speciality restaurant carries an additional charge — shall I explain?",
        "th": "ห้องอาหารพิเศษมีค่าบริการเพิ่มค่ะ ให้ดิฉันอธิบายไหมคะ",
        "note": "Be clear about extra charges early.",
        "id": "cruise-p-dining-006",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "noteTh": "ใช้ในสถานการณ์บริการห้องอาหาร โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-speciality-restaurant",
          "cruise-v-explain",
          "cruise-v-charge"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Enjoy your meal.",
        "th": "ขอให้อร่อยนะคะ",
        "note": "Say it as you step away.",
        "id": "cruise-p-dining-007",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "noteTh": "ใช้ในสถานการณ์บริการห้องอาหาร โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Do you have a reservation?",
        "th": "จองโต๊ะไว้ไหมคะ",
        "prompt": "We would like dinner.",
        "promptTh": "ต้องการรับประทานอาหารเย็นค่ะ",
        "note": "Check the reservation before seating.",
        "noteTh": "ตรวจสอบการจองก่อนจัดที่นั่ง",
        "added": true,
        "id": "cruise-p-dining-008",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "dinner-order"
        ]
      },
      {
        "level": 1,
        "text": "How many people are in your party?",
        "th": "มากี่ท่านคะ",
        "prompt": "We would like a table.",
        "promptTh": "ต้องการโต๊ะค่ะ",
        "note": "Party means the group, not a celebration.",
        "noteTh": "คำว่า party ในที่นี้หมายถึงกลุ่มผู้รับประทานอาหาร",
        "added": true,
        "id": "cruise-p-dining-009",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Would you like a few more minutes?",
        "th": "ต้องการเวลาอีกสักครู่ไหมคะ",
        "prompt": "We are still choosing.",
        "promptTh": "ยังเลือกอาหารอยู่ค่ะ",
        "note": "Offer time before taking the order.",
        "noteTh": "ให้เวลาก่อนรับรายการอาหาร",
        "added": true,
        "id": "cruise-p-dining-010",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "dinner-order"
        ]
      },
      {
        "level": 1,
        "text": "Do you have any food allergies?",
        "th": "มีอาการแพ้อาหารอะไรไหมคะ",
        "prompt": "I need to check the ingredients.",
        "promptTh": "ต้องตรวจสอบส่วนผสมค่ะ",
        "note": "Pass allergy information to the responsible food-service team.",
        "noteTh": "ส่งข้อมูลอาการแพ้ให้ทีมอาหารที่รับผิดชอบ",
        "added": true,
        "id": "cruise-p-dining-011",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "food-allergy"
        ]
      },
      {
        "level": 2,
        "text": "I will check the ingredients with the chef.",
        "th": "จะตรวจสอบส่วนผสมกับเชฟค่ะ",
        "prompt": "Does this contain peanuts?",
        "promptTh": "อาหารนี้มีถั่วลิสงไหมคะ",
        "note": "Never guess about allergens.",
        "noteTh": "ห้ามคาดเดาเรื่องสารก่อภูมิแพ้",
        "added": true,
        "id": "cruise-p-dining-012",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-ingredient",
          "cruise-v-check"
        ],
        "dialogueIds": [
          "food-allergy"
        ]
      },
      {
        "level": 2,
        "text": "I cannot confirm that yet; let me check with the kitchen.",
        "th": "ยังยืนยันไม่ได้ค่ะ ขอสอบถามครัวก่อน",
        "prompt": "Is this safe for my allergy?",
        "promptTh": "อาหารนี้ปลอดภัยสำหรับอาการแพ้ของฉันไหมคะ",
        "note": "Do not promise allergen safety without confirmation.",
        "noteTh": "ไม่รับรองความปลอดภัยด้านอาการแพ้โดยยังไม่ยืนยัน",
        "added": true,
        "id": "cruise-p-dining-013",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-confirm"
        ],
        "dialogueIds": [
          "food-allergy"
        ]
      },
      {
        "level": 1,
        "text": "Would you like the sauce on the side?",
        "th": "ต้องการแยกซอสไหมคะ",
        "prompt": "I do not want much sauce.",
        "promptTh": "ไม่ต้องการซอสมากค่ะ",
        "note": "Confirm whether the kitchen can accommodate the request.",
        "noteTh": "ยืนยันว่าครัวทำตามคำขอได้หรือไม่",
        "added": true,
        "id": "cruise-p-dining-014",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-sauce",
          "cruise-v-on-the-side"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "May I repeat your order?",
        "th": "ขอทวนรายการอาหารได้ไหมคะ",
        "prompt": "That is everything we would like.",
        "promptTh": "สั่งครบแล้วค่ะ",
        "note": "Read back dishes and important special requests.",
        "noteTh": "ทวนอาหารและคำขอพิเศษที่สำคัญ",
        "added": true,
        "id": "cruise-p-dining-015",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-repeat",
          "cruise-v-order"
        ],
        "dialogueIds": [
          "dinner-order"
        ]
      },
      {
        "level": 1,
        "text": "Would you like a clean fork?",
        "th": "ต้องการส้อมสะอาดไหมคะ",
        "prompt": "I dropped my fork.",
        "promptTh": "ทำส้อมตกค่ะ",
        "note": "Replace the item rather than returning the dropped one.",
        "noteTh": "เปลี่ยนอันใหม่แทนนำอันที่ตกกลับมา",
        "added": true,
        "id": "cruise-p-dining-016",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-clean",
          "cruise-v-fork"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Have you finished with this plate?",
        "th": "รับประทานในจานนี้เสร็จแล้วไหมคะ",
        "prompt": "Could you clear some space?",
        "promptTh": "ช่วยเก็บให้มีที่ว่างหน่อยได้ไหมคะ",
        "note": "Ask before removing a plate.",
        "noteTh": "ถามก่อนเก็บจาน",
        "added": true,
        "id": "cruise-p-dining-017",
        "audience": "guest",
        "context": "Restaurant service",
        "contextTh": "บริการห้องอาหาร",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-plate"
        ],
        "dialogueIds": []
      }
    ]
  },
  {
    "id": "bar",
    "en": "Bar & drinks service",
    "th": "บริการบาร์และเครื่องดื่ม",
    "items": [
      {
        "level": 1,
        "text": "What can I get you this evening?",
        "th": "เย็นนี้รับเครื่องดื่มอะไรดีคะ",
        "note": "A friendly, open opener.",
        "id": "cruise-p-bar-001",
        "audience": "guest",
        "context": "Bar & drinks service",
        "contextTh": "บริการบาร์และเครื่องดื่ม",
        "noteTh": "ใช้ในสถานการณ์บริการบาร์และเครื่องดื่ม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Would you like that with or without alcohol?",
        "th": "รับแบบมีแอลกอฮอล์หรือไม่มีคะ",
        "note": "Ask rather than assume.",
        "id": "cruise-p-bar-002",
        "audience": "guest",
        "context": "Bar & drinks service",
        "contextTh": "บริการบาร์และเครื่องดื่ม",
        "noteTh": "ใช้ในสถานการณ์บริการบาร์และเครื่องดื่ม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "May I see your cruise card, please?",
        "th": "ขอดูบัตรประจำตัวผู้โดยสารหน่อยนะคะ",
        "note": "Needed for every charge.",
        "id": "cruise-p-bar-003",
        "audience": "guest",
        "context": "Bar & drinks service",
        "contextTh": "บริการบาร์และเครื่องดื่ม",
        "noteTh": "ใช้ในสถานการณ์บริการบาร์และเครื่องดื่ม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-cruise-card"
        ],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "That drink is included in your beverage package.",
        "th": "เครื่องดื่มนี้รวมอยู่ในแพ็กเกจของคุณแล้วค่ะ",
        "note": "Good news, so say it clearly.",
        "id": "cruise-p-bar-004",
        "audience": "guest",
        "context": "Bar & drinks service",
        "contextTh": "บริการบาร์และเครื่องดื่ม",
        "noteTh": "ใช้ในสถานการณ์บริการบาร์และเครื่องดื่ม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-beverage-package",
          "cruise-v-included"
        ],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "I’m afraid that one falls outside your package — there’s a small extra charge.",
        "th": "ขออภัยค่ะ รายการนี้ไม่รวมในแพ็กเกจ มีค่าใช้จ่ายเพิ่มเล็กน้อย",
        "note": "Say it before serving, never after.",
        "id": "cruise-p-bar-005",
        "audience": "guest",
        "context": "Bar & drinks service",
        "contextTh": "บริการบาร์และเครื่องดื่ม",
        "noteTh": "ใช้ในสถานการณ์บริการบาร์และเครื่องดื่ม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-extra",
          "cruise-v-charge"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Last call is in ten minutes, if you’d like another.",
        "th": "อีกสิบนาทีจะปิดรับออร์เดอร์ค่ะ หากต้องการสั่งเพิ่ม",
        "note": "A courtesy warning before closing.",
        "id": "cruise-p-bar-006",
        "audience": "guest",
        "context": "Bar & drinks service",
        "contextTh": "บริการบาร์และเครื่องดื่ม",
        "noteTh": "ใช้ในสถานการณ์บริการบาร์และเครื่องดื่ม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-last-call"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Would you like still or sparkling water?",
        "th": "ต้องการน้ำเปล่าหรือน้ำอัดก๊าซคะ",
        "prompt": "May I have some water?",
        "promptTh": "ขอน้ำได้ไหมคะ",
        "note": "Confirm the drink and any applicable charge.",
        "noteTh": "ยืนยันเครื่องดื่มและค่าใช้จ่ายที่อาจมี",
        "added": true,
        "id": "cruise-p-bar-007",
        "audience": "guest",
        "context": "Bar & drinks service",
        "contextTh": "บริการบาร์และเครื่องดื่ม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-water"
        ],
        "dialogueIds": [
          "drink-order"
        ]
      },
      {
        "level": 1,
        "text": "Would you like ice?",
        "th": "ต้องการน้ำแข็งไหมคะ",
        "prompt": "I would like an orange juice.",
        "promptTh": "ต้องการน้ำส้มค่ะ",
        "note": "Check the guest's preference.",
        "noteTh": "ถามความต้องการของลูกค้า",
        "added": true,
        "id": "cruise-p-bar-008",
        "audience": "guest",
        "context": "Bar & drinks service",
        "contextTh": "บริการบาร์และเครื่องดื่ม",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "drink-order"
        ]
      },
      {
        "level": 1,
        "text": "Would you prefer a non-alcoholic drink?",
        "th": "ต้องการเครื่องดื่มไม่มีแอลกอฮอล์ไหมคะ",
        "prompt": "I do not drink alcohol.",
        "promptTh": "ไม่ดื่มแอลกอฮอล์ค่ะ",
        "note": "Offer suitable alternatives without pressure.",
        "noteTh": "เสนอทางเลือกที่เหมาะสมโดยไม่กดดัน",
        "added": true,
        "id": "cruise-p-bar-009",
        "audience": "guest",
        "context": "Bar & drinks service",
        "contextTh": "บริการบาร์และเครื่องดื่ม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-prefer"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Let me check whether this is included in your package.",
        "th": "ขอตรวจสอบว่ารวมในแพ็กเกจของคุณหรือไม่ค่ะ",
        "prompt": "Is this drink included?",
        "promptTh": "เครื่องดื่มนี้รวมในแพ็กเกจไหมคะ",
        "note": "Check the current package conditions.",
        "noteTh": "ตรวจสอบเงื่อนไขแพ็กเกจปัจจุบัน",
        "added": true,
        "id": "cruise-p-bar-010",
        "audience": "guest",
        "context": "Bar & drinks service",
        "contextTh": "บริการบาร์และเครื่องดื่ม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-included"
        ],
        "dialogueIds": [
          "drink-order"
        ]
      },
      {
        "level": 2,
        "text": "I will confirm the extra charge before you order.",
        "th": "จะยืนยันค่าใช้จ่ายเพิ่มก่อนสั่งค่ะ",
        "prompt": "How much extra is it?",
        "promptTh": "ต้องจ่ายเพิ่มเท่าไรคะ",
        "note": "State the confirmed amount and currency.",
        "noteTh": "แจ้งยอดและสกุลเงินที่ยืนยันแล้ว",
        "added": true,
        "id": "cruise-p-bar-011",
        "audience": "guest",
        "context": "Bar & drinks service",
        "contextTh": "บริการบาร์และเครื่องดื่ม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-confirm",
          "cruise-v-extra",
          "cruise-v-order",
          "cruise-v-charge"
        ],
        "dialogueIds": []
      }
    ]
  },
  {
    "id": "shipinfo",
    "en": "Questions about the ship",
    "th": "คำถามเกี่ยวกับเรือ",
    "items": [
      {
        "level": 1,
        "text": "The theatre is on deck five, forward. Take the lift and turn left.",
        "th": "โรงละครอยู่ชั้นห้า ด้านหัวเรือค่ะ ขึ้นลิฟต์แล้วเลี้ยวซ้าย",
        "note": "Give deck, direction, then the turn.",
        "id": "cruise-p-shipinfo-001",
        "audience": "guest",
        "context": "Questions about the ship",
        "contextTh": "คำถามเกี่ยวกับเรือ",
        "noteTh": "ใช้ในสถานการณ์คำถามเกี่ยวกับเรือ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-lift",
          "cruise-v-left",
          "cruise-v-forward"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "There’s a deck plan by every lift — shall I mark it for you?",
        "th": "มีแผนผังชั้นเรืออยู่ข้างลิฟต์ทุกตัวค่ะ ให้ดิฉันทำเครื่องหมายให้ไหมคะ",
        "note": "Better than a long verbal direction.",
        "id": "cruise-p-shipinfo-002",
        "audience": "guest",
        "context": "Questions about the ship",
        "contextTh": "คำถามเกี่ยวกับเรือ",
        "noteTh": "ใช้ในสถานการณ์คำถามเกี่ยวกับเรือ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-deck-plan",
          "cruise-v-lift"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "The pool is on the Lido deck, one floor above us.",
        "th": "สระว่ายน้ำอยู่ที่ดาดฟ้าไลโด ชั้นเหนือขึ้นไปหนึ่งชั้นค่ะ",
        "note": "Relative directions are easier to follow.",
        "id": "cruise-p-shipinfo-003",
        "audience": "guest",
        "context": "Questions about the ship",
        "contextTh": "คำถามเกี่ยวกับเรือ",
        "noteTh": "ใช้ในสถานการณ์คำถามเกี่ยวกับเรือ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-lido-deck"
        ],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "That area is restricted to crew, but I can take your request there myself.",
        "th": "บริเวณนั้นสงวนสำหรับลูกเรือค่ะ แต่ดิฉันช่วยนำเรื่องไปแจ้งให้ได้",
        "note": "Refuse the access, not the request.",
        "id": "cruise-p-shipinfo-004",
        "audience": "guest",
        "context": "Questions about the ship",
        "contextTh": "คำถามเกี่ยวกับเรือ",
        "noteTh": "ใช้ในสถานการณ์คำถามเกี่ยวกับเรือ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Today’s programme is delivered to your cabin each evening.",
        "th": "กำหนดการของแต่ละวันจะส่งไปที่ห้องพักทุกเย็นค่ะ",
        "note": "Points guests to the answer next time.",
        "id": "cruise-p-shipinfo-005",
        "audience": "guest",
        "context": "Questions about the ship",
        "contextTh": "คำถามเกี่ยวกับเรือ",
        "noteTh": "ใช้ในสถานการณ์คำถามเกี่ยวกับเรือ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "We’ll be at sea all day tomorrow, and reach port on Thursday morning.",
        "th": "พรุ่งนี้เราจะแล่นอยู่กลางทะเลทั้งวัน และถึงท่าเรือเช้าวันพฤหัสบดีค่ะ",
        "note": "Answers the most-asked question aboard.",
        "id": "cruise-p-shipinfo-006",
        "audience": "guest",
        "context": "Questions about the ship",
        "contextTh": "คำถามเกี่ยวกับเรือ",
        "noteTh": "ใช้ในสถานการณ์คำถามเกี่ยวกับเรือ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Let me show you on the deck plan.",
        "th": "ให้ชี้บนแผนผังดาดฟ้านะคะ",
        "prompt": "Where is the theatre?",
        "promptTh": "โรงละครอยู่ที่ไหนคะ",
        "note": "Use the actual ship plan.",
        "noteTh": "ใช้แผนผังเรือลำจริง",
        "added": true,
        "id": "cruise-p-shipinfo-007",
        "audience": "guest",
        "context": "Questions about the ship",
        "contextTh": "คำถามเกี่ยวกับเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-deck-plan"
        ],
        "dialogueIds": [
          "ship-directions"
        ]
      },
      {
        "level": 1,
        "text": "Turn left at the end of the corridor.",
        "th": "เลี้ยวซ้ายสุดทางเดินค่ะ",
        "prompt": "Which way should I turn?",
        "promptTh": "ควรเลี้ยวทางไหนคะ",
        "note": "Training route only; verify the real route before using.",
        "noteTh": "เส้นทางตัวอย่าง ต้องตรวจสอบเส้นทางจริงก่อนใช้",
        "added": true,
        "id": "cruise-p-shipinfo-008",
        "audience": "guest",
        "context": "Questions about the ship",
        "contextTh": "คำถามเกี่ยวกับเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-corridor",
          "cruise-v-left"
        ],
        "dialogueIds": [
          "ship-directions"
        ]
      },
      {
        "level": 1,
        "text": "Go straight ahead, then turn right.",
        "th": "ตรงไปแล้วเลี้ยวขวาค่ะ",
        "prompt": "How do I get there?",
        "promptTh": "ไปที่นั่นอย่างไรคะ",
        "note": "Give directions in short steps after confirming the route.",
        "noteTh": "บอกทางเป็นขั้นสั้น ๆ หลังยืนยันเส้นทาง",
        "added": true,
        "id": "cruise-p-shipinfo-009",
        "audience": "guest",
        "context": "Questions about the ship",
        "contextTh": "คำถามเกี่ยวกับเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-right",
          "cruise-v-straight-ahead"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "It is next to the lift.",
        "th": "อยู่ข้างลิฟต์ค่ะ",
        "prompt": "Where is the information board?",
        "promptTh": "ป้ายข้อมูลอยู่ที่ไหนคะ",
        "note": "Use only when this matches the actual location.",
        "noteTh": "ใช้เมื่อตรงกับตำแหน่งจริงเท่านั้น",
        "added": true,
        "id": "cruise-p-shipinfo-010",
        "audience": "guest",
        "context": "Questions about the ship",
        "contextTh": "คำถามเกี่ยวกับเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-lift",
          "cruise-v-next-to"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Would you prefer a route without stairs?",
        "th": "ต้องการเส้นทางที่ไม่ใช้บันไดไหมคะ",
        "prompt": "I find stairs difficult.",
        "promptTh": "ใช้บันไดลำบากค่ะ",
        "note": "Check availability of a suitable route.",
        "noteTh": "ตรวจสอบว่ามีเส้นทางที่เหมาะสมหรือไม่",
        "added": true,
        "id": "cruise-p-shipinfo-011",
        "audience": "guest",
        "context": "Questions about the ship",
        "contextTh": "คำถามเกี่ยวกับเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-prefer",
          "cruise-v-stairs"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Let me check the latest programme for you.",
        "th": "ขอตรวจสอบกำหนดการล่าสุดให้ค่ะ",
        "prompt": "What is happening this afternoon?",
        "promptTh": "บ่ายนี้มีกิจกรรมอะไรคะ",
        "note": "Use current onboard information.",
        "noteTh": "ใช้ข้อมูลปัจจุบันบนเรือ",
        "added": true,
        "id": "cruise-p-shipinfo-012",
        "audience": "guest",
        "context": "Questions about the ship",
        "contextTh": "คำถามเกี่ยวกับเรือ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check"
        ],
        "dialogueIds": [
          "ship-directions"
        ]
      }
    ]
  },
  {
    "id": "safety",
    "en": "Safety & drills",
    "th": "ความปลอดภัยและการซ้อม",
    "items": [
      {
        "level": 3,
        "text": "This is the muster drill. Please make your way to your muster station now.",
        "th": "นี่คือการซ้อมรวมพลฉุกเฉินค่ะ กรุณาไปยังจุดรวมพลของท่านตอนนี้",
        "note": "Clear, calm and directive.",
        "id": "cruise-p-safety-001",
        "audience": "guest",
        "context": "Safety & drills",
        "contextTh": "ความปลอดภัยและการซ้อม",
        "noteTh": "ใช้ในสถานการณ์ความปลอดภัยและการซ้อม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-muster-station",
          "cruise-v-muster-drill"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Please follow the crew instructions about which route to use during the drill.",
        "th": "กรุณาปฏิบัติตามคำแนะนำลูกเรือเรื่องเส้นทางระหว่างการฝึกค่ะ",
        "note": "Routes and assistance arrangements are ship-specific.",
        "noteTh": "เส้นทางและการช่วยเหลือขึ้นอยู่กับเรือแต่ละลำ",
        "id": "cruise-p-safety-002",
        "audience": "guest",
        "context": "Safety & drills",
        "contextTh": "ความปลอดภัยและการซ้อม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-follow"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Please follow this ship's instructions about where to find and when to collect your life jacket.",
        "th": "กรุณาทำตามคำแนะนำของเรือลำนี้เรื่องจุดเก็บและเวลาไปรับเสื้อชูชีพค่ะ",
        "note": "Do not assume all life jackets are stored in cabin wardrobes.",
        "noteTh": "อย่าสรุปว่าเสื้อชูชีพทุกชุดเก็บในตู้เสื้อผ้าห้องพัก",
        "id": "cruise-p-safety-003",
        "audience": "guest",
        "context": "Safety & drills",
        "contextTh": "ความปลอดภัยและการซ้อม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-life-jacket",
          "cruise-v-follow"
        ],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "Seven or more short blasts followed by one long blast is the general emergency alarm. Follow the crew's instructions.",
        "th": "เสียงสั้นตั้งแต่เจ็ดครั้งขึ้นไปตามด้วยเสียงยาวหนึ่งครั้งคือสัญญาณฉุกเฉินทั่วไป ให้ทำตามคำแนะนำลูกเรือค่ะ",
        "note": "Know the signal and follow the actual ship emergency procedure.",
        "noteTh": "รู้จักสัญญาณและทำตามขั้นตอนฉุกเฉินจริงของเรือ",
        "id": "cruise-p-safety-004",
        "audience": "guest",
        "context": "Safety & drills",
        "contextTh": "ความปลอดภัยและการซ้อม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-general-emergency-alarm",
          "cruise-v-follow",
          "cruise-v-alarm"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Please keep this door closed — it’s a fire door.",
        "th": "กรุณาปิดประตูนี้ไว้นะคะ เป็นประตูกันไฟค่ะ",
        "note": "Give the reason, so it is not just a rule.",
        "id": "cruise-p-safety-005",
        "audience": "guest",
        "context": "Safety & drills",
        "contextTh": "ความปลอดภัยและการซ้อม",
        "noteTh": "ใช้ในสถานการณ์ความปลอดภัยและการซ้อม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-fire-door"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Please wash your hands with soap and water before eating.",
        "th": "กรุณาล้างมือด้วยสบู่และน้ำก่อนรับประทานอาหารค่ะ",
        "note": "Sanitiser alone is not a substitute against norovirus.",
        "noteTh": "เจลล้างมือเพียงอย่างเดียวไม่ทดแทนการล้างมือในการป้องกันโนโรไวรัส",
        "id": "cruise-p-safety-006",
        "audience": "guest",
        "context": "Safety & drills",
        "contextTh": "ความปลอดภัยและการซ้อม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-soap",
          "cruise-v-water",
          "cruise-v-soap-and-water"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Please stay calm and listen to the crew.",
        "th": "กรุณาตั้งสติและฟังลูกเรือค่ะ",
        "prompt": "What should we do?",
        "promptTh": "ควรทำอย่างไรคะ",
        "note": "Support the ship's actual emergency instructions.",
        "noteTh": "ใช้สนับสนุนคำสั่งฉุกเฉินจริงของเรือ",
        "added": true,
        "id": "cruise-p-safety-007",
        "audience": "guest",
        "context": "Safety & drills",
        "contextTh": "ความปลอดภัยและการซ้อม",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Please keep this exit clear.",
        "th": "กรุณาอย่าวางสิ่งของกีดขวางทางออกนี้ค่ะ",
        "prompt": "Can I leave my suitcase here?",
        "promptTh": "วางกระเป๋าไว้ตรงนี้ได้ไหมคะ",
        "note": "Do not allow objects to block an exit.",
        "noteTh": "ไม่ให้สิ่งของกีดขวางทางออก",
        "added": true,
        "id": "cruise-p-safety-008",
        "audience": "guest",
        "context": "Safety & drills",
        "contextTh": "ความปลอดภัยและการซ้อม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-exit"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Please hold the handrail.",
        "th": "กรุณาจับราวค่ะ",
        "prompt": "The ship is moving a lot.",
        "promptTh": "เรือโคลงมากค่ะ",
        "note": "Offer support through the approved procedure.",
        "noteTh": "ช่วยเหลือตามขั้นตอนที่กำหนด",
        "added": true,
        "id": "cruise-p-safety-009",
        "audience": "guest",
        "context": "Safety & drills",
        "contextTh": "ความปลอดภัยและการซ้อม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-handrail"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Please watch your step.",
        "th": "กรุณาระวังขั้นบันไดค่ะ",
        "prompt": "Is this the gangway?",
        "promptTh": "นี่คือสะพานขึ้นลงเรือใช่ไหมคะ",
        "note": "Warn about a visible change in level.",
        "noteTh": "เตือนเมื่อมีระดับพื้นต่างกัน",
        "added": true,
        "id": "cruise-p-safety-010",
        "audience": "guest",
        "context": "Safety & drills",
        "contextTh": "ความปลอดภัยและการซ้อม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-watch",
          "cruise-v-step"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Let me help you check your assigned muster station.",
        "th": "ให้ช่วยตรวจสอบจุดรวมพลที่กำหนดให้นะคะ",
        "prompt": "Where is my muster station?",
        "promptTh": "จุดรวมพลของฉันอยู่ที่ไหนคะ",
        "note": "Check the actual assignment; do not guess.",
        "noteTh": "ตรวจสอบจุดที่กำหนดจริง ห้ามคาดเดา",
        "added": true,
        "id": "cruise-p-safety-011",
        "audience": "guest",
        "context": "Safety & drills",
        "contextTh": "ความปลอดภัยและการซ้อม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-muster-station",
          "cruise-v-check"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Follow the crew's instructions about your life jacket.",
        "th": "กรุณาปฏิบัติตามคำแนะนำของลูกเรือเรื่องเสื้อชูชีพค่ะ",
        "prompt": "Should I collect a life jacket now?",
        "promptTh": "ควรไปเอาเสื้อชูชีพตอนนี้ไหมคะ",
        "note": "Requirements and storage locations are ship-specific.",
        "noteTh": "ข้อกำหนดและจุดเก็บขึ้นอยู่กับเรือแต่ละลำ",
        "added": true,
        "id": "cruise-p-safety-012",
        "audience": "guest",
        "context": "Safety & drills",
        "contextTh": "ความปลอดภัยและการซ้อม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-life-jacket",
          "cruise-v-follow"
        ],
        "dialogueIds": []
      }
    ]
  },
  {
    "id": "excursion",
    "en": "Ports & excursions",
    "th": "ท่าเรือและทัวร์ชายฝั่ง",
    "items": [
      {
        "level": 2,
        "text": "All aboard time is four thirty this afternoon, please don’t be late.",
        "th": "เวลากลับขึ้นเรือคือสี่โมงครึ่งบ่ายนี้ กรุณาอย่ามาสายนะคะ",
        "note": "Repeat the time twice; it matters most.",
        "id": "cruise-p-excursion-001",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "noteTh": "ใช้ในสถานการณ์ท่าเรือและทัวร์ชายฝั่ง โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-all-aboard-time"
        ],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "The ship cannot dock here, so a tender boat will take you ashore.",
        "th": "เรือไม่สามารถเทียบท่าที่นี่ได้ จะมีเรือเล็กรับส่งขึ้นฝั่งค่ะ",
        "note": "Explains an unfamiliar arrangement.",
        "id": "cruise-p-excursion-002",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "noteTh": "ใช้ในสถานการณ์ท่าเรือและทัวร์ชายฝั่ง โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-tender-boat"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Your tour meets at the gangway fifteen minutes beforehand.",
        "th": "ทัวร์ของท่านนัดพบที่สะพานขึ้นลงเรือก่อนเวลาสิบห้านาทีค่ะ",
        "note": "Give place and time together.",
        "id": "cruise-p-excursion-003",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "noteTh": "ใช้ในสถานการณ์ท่าเรือและทัวร์ชายฝั่ง โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-gangway"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Please take your cruise card and some local currency ashore.",
        "th": "กรุณานำบัตรประจำตัวและเงินสกุลท้องถิ่นติดตัวไปด้วยนะคะ",
        "note": "Prevents the two most common problems.",
        "id": "cruise-p-excursion-004",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "noteTh": "ใช้ในสถานการณ์ท่าเรือและทัวร์ชายฝั่ง โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-cruise-card",
          "cruise-v-local-currency",
          "cruise-v-currency"
        ],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "Shore excursions can be booked at the desk or on the cabin television.",
        "th": "ทัวร์ชายฝั่งจองได้ที่เคาน์เตอร์ หรือผ่านโทรทัศน์ในห้องพักค่ะ",
        "note": "Offers two easy routes.",
        "id": "cruise-p-excursion-005",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "noteTh": "ใช้ในสถานการณ์ท่าเรือและทัวร์ชายฝั่ง โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-shore-excursion"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Please check whether today's ship time differs from local time.",
        "th": "กรุณาตรวจสอบว่าวันนี้เวลาบนเรือต่างจากเวลาท้องถิ่นหรือไม่ค่ะ",
        "note": "Ship time and local time may match or differ.",
        "noteTh": "เวลาบนเรือและเวลาท้องถิ่นอาจตรงกันหรือต่างกัน",
        "id": "cruise-p-excursion-006",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-ship-time",
          "cruise-v-local-time"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "What is your tour name?",
        "th": "ทัวร์ชื่ออะไรคะ",
        "prompt": "I am looking for my tour.",
        "promptTh": "กำลังหาทัวร์ที่จองไว้ค่ะ",
        "note": "Identify the tour before giving instructions.",
        "noteTh": "ระบุทัวร์ก่อนให้คำแนะนำ",
        "added": true,
        "id": "cruise-p-excursion-007",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "tour-meeting"
        ]
      },
      {
        "level": 1,
        "text": "May I check your tour ticket?",
        "th": "ขอตรวจตั๋วทัวร์ได้ไหมคะ",
        "prompt": "Where should I meet my group?",
        "promptTh": "ควรพบกลุ่มที่ไหนคะ",
        "note": "Use the current ticket and meeting instructions.",
        "noteTh": "ใช้ตั๋วและคำแนะนำนัดพบปัจจุบัน",
        "added": true,
        "id": "cruise-p-excursion-008",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-ticket"
        ],
        "dialogueIds": [
          "tour-meeting"
        ]
      },
      {
        "level": 2,
        "text": "Please confirm the all aboard time before going ashore.",
        "th": "กรุณายืนยันเวลาที่ทุกคนต้องกลับขึ้นเรือก่อนขึ้นฝั่งค่ะ",
        "prompt": "What time must we come back?",
        "promptTh": "ต้องกลับกี่โมงคะ",
        "note": "Distinguish the required return time from departure time.",
        "noteTh": "แยกเวลาที่ต้องกลับขึ้นเรือจากเวลาเรือออก",
        "added": true,
        "id": "cruise-p-excursion-009",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-all-aboard-time",
          "cruise-v-confirm"
        ],
        "dialogueIds": [
          "return-time"
        ]
      },
      {
        "level": 2,
        "text": "Let me check whether that time is ship time or local time.",
        "th": "ขอตรวจสอบว่าเวลานั้นเป็นเวลาบนเรือหรือเวลาท้องถิ่นค่ะ",
        "prompt": "My phone shows a different time.",
        "promptTh": "โทรศัพท์แสดงเวลาไม่ตรงกันค่ะ",
        "note": "Never assume the two clocks match.",
        "noteTh": "อย่าสรุปว่าเวลาทั้งสองตรงกัน",
        "added": true,
        "id": "cruise-p-excursion-010",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-ship-time",
          "cruise-v-local-time"
        ],
        "dialogueIds": [
          "return-time"
        ]
      },
      {
        "level": 1,
        "text": "Please check the meeting point on your ticket.",
        "th": "กรุณาตรวจสอบจุดนัดพบบนตั๋วค่ะ",
        "prompt": "Do we meet at the gangway?",
        "promptTh": "พบกันที่สะพานขึ้นลงเรือใช่ไหมคะ",
        "note": "Do not assume every tour uses the same location.",
        "noteTh": "อย่าสรุปว่าทุกทัวร์นัดพบที่เดียวกัน",
        "added": true,
        "id": "cruise-p-excursion-011",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-meeting-point",
          "cruise-v-check",
          "cruise-v-ticket"
        ],
        "dialogueIds": [
          "tour-meeting"
        ]
      },
      {
        "level": 2,
        "text": "I will check the latest information about the delay.",
        "th": "จะตรวจสอบข้อมูลล่าสุดเกี่ยวกับความล่าช้าค่ะ",
        "prompt": "Why has our tour not started?",
        "promptTh": "ทำไมทัวร์ยังไม่เริ่มคะ",
        "note": "Give verified information without inventing a reason.",
        "noteTh": "ให้ข้อมูลที่ยืนยันแล้วโดยไม่แต่งสาเหตุ",
        "added": true,
        "id": "cruise-p-excursion-012",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-delay"
        ],
        "dialogueIds": [
          "return-time"
        ]
      },
      {
        "level": 2,
        "text": "Let me explain the options for the cancelled tour.",
        "th": "ขออธิบายทางเลือกสำหรับทัวร์ที่ถูกยกเลิกค่ะ",
        "prompt": "Our tour was cancelled.",
        "promptTh": "ทัวร์ของเราถูกยกเลิกค่ะ",
        "note": "Use approved rebooking and refund options.",
        "noteTh": "ใช้ทางเลือกเปลี่ยนการจองและคืนเงินที่อนุมัติแล้ว",
        "added": true,
        "id": "cruise-p-excursion-013",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-explain",
          "cruise-v-cancelled"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Please check which travel documents are required today.",
        "th": "กรุณาตรวจสอบเอกสารเดินทางที่ต้องใช้วันนี้ค่ะ",
        "prompt": "Should I take my passport ashore?",
        "promptTh": "ควรนำหนังสือเดินทางขึ้นฝั่งไหมคะ",
        "note": "Refer to the ship's current official instructions.",
        "noteTh": "อ้างอิงคำแนะนำทางการปัจจุบันของเรือ",
        "added": true,
        "id": "cruise-p-excursion-014",
        "audience": "guest",
        "context": "Ports & excursions",
        "contextTh": "ท่าเรือและทัวร์ชายฝั่ง",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check"
        ],
        "dialogueIds": []
      }
    ]
  },
  {
    "id": "complaints",
    "en": "Handling complaints",
    "th": "การจัดการข้อร้องเรียน",
    "items": [
      {
        "level": 2,
        "text": "I’m very sorry — let me see what I can do to put this right.",
        "th": "ดิฉันขออภัยอย่างยิ่งค่ะ ขอดูว่าจะแก้ไขให้ได้อย่างไร",
        "note": "Empathy first, always.",
        "id": "cruise-p-complaints-001",
        "audience": "guest",
        "context": "Handling complaints",
        "contextTh": "การจัดการข้อร้องเรียน",
        "noteTh": "ใช้ในสถานการณ์การจัดการข้อร้องเรียน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-right"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Thank you for telling me. May I take your cabin number?",
        "th": "ขอบคุณที่แจ้งนะคะ ขอทราบหมายเลขห้องพักได้ไหมคะ",
        "note": "Lets you follow up properly.",
        "id": "cruise-p-complaints-002",
        "audience": "guest",
        "context": "Handling complaints",
        "contextTh": "การจัดการข้อร้องเรียน",
        "noteTh": "ใช้ในสถานการณ์การจัดการข้อร้องเรียน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "I completely understand, and I’ll raise this with my department head now.",
        "th": "ดิฉันเข้าใจอย่างยิ่งค่ะ และจะแจ้งหัวหน้าแผนกทันที",
        "note": "Shows the guest it will move.",
        "id": "cruise-p-complaints-003",
        "audience": "guest",
        "context": "Handling complaints",
        "contextTh": "การจัดการข้อร้องเรียน",
        "noteTh": "ใช้ในสถานการณ์การจัดการข้อร้องเรียน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-department-head"
        ],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "May I check with my supervisor what options are available to address this?",
        "th": "ขอสอบถามหัวหน้างานว่ามีทางเลือกใดในการแก้ไขเรื่องนี้ได้ไหมคะ",
        "note": "Any compensation must be within approved authority.",
        "noteTh": "การชดเชยต้องอยู่ในอำนาจที่อนุมัติแล้ว",
        "id": "cruise-p-complaints-004",
        "audience": "guest",
        "context": "Handling complaints",
        "contextTh": "การจัดการข้อร้องเรียน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-supervisor"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Would you prefer to wait here, or shall I come to your cabin?",
        "th": "ท่านสะดวกรอที่นี่ หรือให้ดิฉันไปที่ห้องพักคะ",
        "note": "Gives the guest control.",
        "id": "cruise-p-complaints-005",
        "audience": "guest",
        "context": "Handling complaints",
        "contextTh": "การจัดการข้อร้องเรียน",
        "noteTh": "ใช้ในสถานการณ์การจัดการข้อร้องเรียน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-prefer",
          "cruise-v-wait"
        ],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "I’ll follow this up personally and let you know by this evening.",
        "th": "ดิฉันจะติดตามเรื่องนี้ด้วยตัวเอง และแจ้งให้ทราบภายในเย็นนี้ค่ะ",
        "note": "Promise a time, then keep it.",
        "id": "cruise-p-complaints-006",
        "audience": "guest",
        "context": "Handling complaints",
        "contextTh": "การจัดการข้อร้องเรียน",
        "noteTh": "ใช้ในสถานการณ์การจัดการข้อร้องเรียน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-follow"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Please tell me what happened.",
        "th": "กรุณาเล่าให้ฟังว่าเกิดอะไรขึ้นค่ะ",
        "prompt": "I want to make a complaint.",
        "promptTh": "ต้องการร้องเรียนค่ะ",
        "note": "Listen first and do not argue.",
        "noteTh": "รับฟังก่อนและไม่โต้แย้ง",
        "added": true,
        "id": "cruise-p-complaints-007",
        "audience": "guest",
        "context": "Handling complaints",
        "contextTh": "การจัดการข้อร้องเรียน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "service-concern"
        ]
      },
      {
        "level": 1,
        "text": "Which part of the service was affected?",
        "th": "บริการส่วนไหนที่มีปัญหาคะ",
        "prompt": "Something went wrong yesterday.",
        "promptTh": "เมื่อวานมีปัญหาบางอย่างค่ะ",
        "note": "Identify the issue without making assumptions.",
        "noteTh": "ระบุปัญหาโดยไม่คาดเดา",
        "added": true,
        "id": "cruise-p-complaints-008",
        "audience": "guest",
        "context": "Handling complaints",
        "contextTh": "การจัดการข้อร้องเรียน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Let me make sure I have recorded this correctly.",
        "th": "ขอตรวจสอบว่าบันทึกเรื่องนี้ถูกต้องค่ะ",
        "prompt": "Those are all the details.",
        "promptTh": "รายละเอียดมีเท่านี้ค่ะ",
        "note": "Read back the essential facts.",
        "noteTh": "ทวนข้อเท็จจริงสำคัญ",
        "added": true,
        "id": "cruise-p-complaints-009",
        "audience": "guest",
        "context": "Handling complaints",
        "contextTh": "การจัดการข้อร้องเรียน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "service-concern"
        ]
      },
      {
        "level": 2,
        "text": "I will contact the team responsible for this.",
        "th": "จะติดต่อทีมที่รับผิดชอบเรื่องนี้ค่ะ",
        "prompt": "Who will deal with the problem?",
        "promptTh": "ใครจะจัดการปัญหานี้คะ",
        "note": "Refer the concern to the appropriate team.",
        "noteTh": "ส่งข้อกังวลให้ทีมที่เหมาะสม",
        "added": true,
        "id": "cruise-p-complaints-010",
        "audience": "guest",
        "context": "Handling complaints",
        "contextTh": "การจัดการข้อร้องเรียน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "May I confirm how you would like us to contact you?",
        "th": "ขอยืนยันช่องทางที่สะดวกให้ติดต่อได้ไหมคะ",
        "prompt": "Please let me know what happens.",
        "promptTh": "ช่วยแจ้งผลให้ทราบด้วยค่ะ",
        "note": "Agree on a suitable, private contact method.",
        "noteTh": "ตกลงช่องทางที่เหมาะสมและเป็นส่วนตัว",
        "added": true,
        "id": "cruise-p-complaints-011",
        "audience": "guest",
        "context": "Handling complaints",
        "contextTh": "การจัดการข้อร้องเรียน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-confirm"
        ],
        "dialogueIds": [
          "service-concern"
        ]
      },
      {
        "level": 2,
        "text": "I will ask my supervisor which options are authorised.",
        "th": "จะสอบถามหัวหน้างานว่าทางเลือกใดได้รับอนุมัติค่ะ",
        "prompt": "Can you offer compensation?",
        "promptTh": "ชดเชยให้ได้ไหมคะ",
        "note": "Do not promise compensation without authority.",
        "noteTh": "อย่ารับรองการชดเชยโดยไม่มีอำนาจอนุมัติ",
        "added": true,
        "id": "cruise-p-complaints-012",
        "audience": "guest",
        "context": "Handling complaints",
        "contextTh": "การจัดการข้อร้องเรียน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-supervisor"
        ],
        "dialogueIds": []
      }
    ]
  },
  {
    "id": "care",
    "en": "Special care & assistance",
    "th": "การดูแลกรณีพิเศษ",
    "items": [
      {
        "level": 2,
        "text": "Are you feeling unwell? I will contact the medical team and confirm how they can assist.",
        "th": "รู้สึกไม่สบายหรือคะ จะติดต่อทีมแพทย์และยืนยันวิธีช่วยเหลือค่ะ",
        "note": "Do not invent a medical-centre location or delay urgent help.",
        "noteTh": "อย่าคาดเดาที่ตั้งศูนย์การแพทย์หรือทำให้ความช่วยเหลือเร่งด่วนล่าช้า",
        "id": "cruise-p-care-001",
        "audience": "guest",
        "context": "Special care & assistance",
        "contextTh": "การดูแลกรณีพิเศษ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-unwell",
          "cruise-v-confirm"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "The medical team can advise you about seasickness; may I contact them?",
        "th": "ทีมแพทย์ให้คำแนะนำเรื่องเมาเรือได้ ให้ติดต่อให้ไหมคะ",
        "note": "Refer health concerns instead of prescribing food or medicine.",
        "noteTh": "ส่งต่อข้อกังวลสุขภาพแทนแนะนำอาหารหรือยาเพื่อรักษาเอง",
        "id": "cruise-p-care-002",
        "audience": "guest",
        "context": "Special care & assistance",
        "contextTh": "การดูแลกรณีพิเศษ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-seasickness"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Let me walk with you — the deck can move a little in this weather.",
        "th": "ให้ดิฉันเดินไปด้วยนะคะ ดาดฟ้าอาจโยกเล็กน้อยในสภาพอากาศนี้",
        "note": "Offer, do not wait to be asked.",
        "id": "cruise-p-care-003",
        "audience": "guest",
        "context": "Special care & assistance",
        "contextTh": "การดูแลกรณีพิเศษ",
        "noteTh": "ใช้ในสถานการณ์การดูแลกรณีพิเศษ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "Let me check the step-free route and assistance arrangements for the theatre.",
        "th": "ขอตรวจสอบเส้นทางไปโรงละครที่ไม่มีขั้นบันไดและการช่วยเหลือค่ะ",
        "note": "Confirm accessibility on this ship.",
        "noteTh": "ยืนยันการเข้าถึงบนเรือลำนี้",
        "id": "cruise-p-care-004",
        "audience": "guest",
        "context": "Special care & assistance",
        "contextTh": "การดูแลกรณีพิเศษ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-step",
          "cruise-v-assistance"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Let me check what boarding assistance can be arranged at the next port.",
        "th": "ขอตรวจสอบว่าท่าเรือถัดไปจัดความช่วยเหลือในการขึ้นเรือแบบใดได้ค่ะ",
        "note": "Do not promise priority boarding without confirmation.",
        "noteTh": "อย่ารับรองบริการขึ้นเรือก่อนโดยยังไม่ยืนยัน",
        "id": "cruise-p-care-005",
        "audience": "guest",
        "context": "Special care & assistance",
        "contextTh": "การดูแลกรณีพิเศษ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-assistance"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "If you feel unsteady at any point, please tell a crew member.",
        "th": "หากรู้สึกทรงตัวไม่มั่นคงตอนไหน กรุณาแจ้งลูกเรือนะคะ",
        "note": "Safety phrasing that does not alarm.",
        "id": "cruise-p-care-006",
        "audience": "guest",
        "context": "Special care & assistance",
        "contextTh": "การดูแลกรณีพิเศษ",
        "noteTh": "ใช้ในสถานการณ์การดูแลกรณีพิเศษ โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Would you like assistance?",
        "th": "ต้องการความช่วยเหลือไหมคะ",
        "prompt": "I am having difficulty here.",
        "promptTh": "ตรงนี้ทำได้ลำบากค่ะ",
        "note": "Ask before helping or touching mobility equipment.",
        "noteTh": "ถามก่อนช่วยหรือจับอุปกรณ์ช่วยเคลื่อนที่",
        "added": true,
        "id": "cruise-p-care-007",
        "audience": "guest",
        "context": "Special care & assistance",
        "contextTh": "การดูแลกรณีพิเศษ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-assistance"
        ],
        "dialogueIds": [
          "accessible-route"
        ]
      },
      {
        "level": 1,
        "text": "How can I help you most comfortably?",
        "th": "ให้ช่วยอย่างไรจึงจะสบายที่สุดคะ",
        "prompt": "I need a little support.",
        "promptTh": "ต้องการความช่วยเหลือเล็กน้อยค่ะ",
        "note": "Let the person explain their preference.",
        "noteTh": "ให้เจ้าตัวอธิบายความต้องการ",
        "added": true,
        "id": "cruise-p-care-008",
        "audience": "guest",
        "context": "Special care & assistance",
        "contextTh": "การดูแลกรณีพิเศษ",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "accessible-route"
        ]
      },
      {
        "level": 1,
        "text": "Would you prefer written information?",
        "th": "ต้องการข้อมูลเป็นลายลักษณ์อักษรไหมคะ",
        "prompt": "I cannot hear you clearly.",
        "promptTh": "ได้ยินไม่ชัดค่ะ",
        "note": "Offer an alternative communication method.",
        "noteTh": "เสนอวิธีสื่อสารอื่น",
        "added": true,
        "id": "cruise-p-care-009",
        "audience": "guest",
        "context": "Special care & assistance",
        "contextTh": "การดูแลกรณีพิเศษ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-prefer"
        ],
        "dialogueIds": [
          "medical-help"
        ]
      },
      {
        "level": 1,
        "text": "I will contact the medical team for you.",
        "th": "จะติดต่อทีมแพทย์ให้ค่ะ",
        "prompt": "I feel unwell.",
        "promptTh": "รู้สึกไม่สบายค่ะ",
        "note": "Seek appropriate help rather than diagnosing or prescribing.",
        "noteTh": "ขอความช่วยเหลือที่เหมาะสม แทนวินิจฉัยหรือแนะนำยาเอง",
        "added": true,
        "id": "cruise-p-care-010",
        "audience": "guest",
        "context": "Special care & assistance",
        "contextTh": "การดูแลกรณีพิเศษ",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "medical-help"
        ]
      },
      {
        "level": 2,
        "text": "May I check the step-free route to the restaurant?",
        "th": "ขอตรวจสอบเส้นทางไปห้องอาหารที่ไม่มีขั้นบันไดได้ไหมคะ",
        "prompt": "Can my wheelchair get to the restaurant?",
        "promptTh": "ใช้รถเข็นไปห้องอาหารได้ไหมคะ",
        "note": "Verify the actual route and any current restrictions.",
        "noteTh": "ตรวจสอบเส้นทางจริงและข้อจำกัดปัจจุบัน",
        "added": true,
        "id": "cruise-p-care-011",
        "audience": "guest",
        "context": "Special care & assistance",
        "contextTh": "การดูแลกรณีพิเศษ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-step"
        ],
        "dialogueIds": [
          "accessible-route"
        ]
      },
      {
        "level": 1,
        "text": "Please tell me if you feel unsteady.",
        "th": "กรุณาบอกหากรู้สึกทรงตัวไม่มั่นคงค่ะ",
        "prompt": "I feel a little dizzy.",
        "promptTh": "รู้สึกเวียนศีรษะเล็กน้อยค่ะ",
        "note": "Contact the appropriate team and avoid unsupported reassurance.",
        "noteTh": "ติดต่อทีมที่เหมาะสมและไม่รับรองว่าไม่เป็นอะไร",
        "added": true,
        "id": "cruise-p-care-012",
        "audience": "guest",
        "context": "Special care & assistance",
        "contextTh": "การดูแลกรณีพิเศษ",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "medical-help"
        ]
      }
    ]
  },
  {
    "id": "selling",
    "en": "Offering extras politely",
    "th": "การแนะนำบริการเสริม",
    "items": [
      {
        "level": 2,
        "text": "Would you like to add a beverage package? Many guests find it good value.",
        "th": "สนใจเพิ่มแพ็กเกจเครื่องดื่มไหมคะ ผู้โดยสารหลายท่านว่าคุ้มค่า",
        "note": "Social proof, not pressure.",
        "id": "cruise-p-selling-001",
        "audience": "guest",
        "context": "Offering extras politely",
        "contextTh": "การแนะนำบริการเสริม",
        "noteTh": "ใช้ในสถานการณ์การแนะนำบริการเสริม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-beverage-package"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "No problem at all if you’d rather not.",
        "th": "ไม่เป็นไรเลยค่ะ หากท่านไม่สะดวก",
        "note": "Always give an easy way out.",
        "id": "cruise-p-selling-002",
        "audience": "guest",
        "context": "Offering extras politely",
        "contextTh": "การแนะนำบริการเสริม",
        "noteTh": "ใช้ในสถานการณ์การแนะนำบริการเสริม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "If you’re sailing with us again, our loyalty tier brings extra benefits.",
        "th": "หากท่านเดินทางกับเราอีกครั้ง ระดับสมาชิกของเรามีสิทธิประโยชน์เพิ่มค่ะ",
        "note": "Frames the offer as a reward.",
        "id": "cruise-p-selling-003",
        "audience": "guest",
        "context": "Offering extras politely",
        "contextTh": "การแนะนำบริการเสริม",
        "noteTh": "ใช้ในสถานการณ์การแนะนำบริการเสริม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-loyalty-tier",
          "cruise-v-extra"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Tonight’s speciality restaurant still has a table at eight.",
        "th": "ห้องอาหารพิเศษคืนนี้ยังมีโต๊ะว่างเวลาแปดโมงค่ะ",
        "note": "A gentle reason to decide now.",
        "id": "cruise-p-selling-004",
        "audience": "guest",
        "context": "Offering extras politely",
        "contextTh": "การแนะนำบริการเสริม",
        "noteTh": "ใช้ในสถานการณ์การแนะนำบริการเสริม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-speciality-restaurant"
        ],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "This excursion sells out quickly — shall I hold two places for you?",
        "th": "ทัวร์นี้เต็มเร็วค่ะ ให้ดิฉันจองไว้สองที่ไหมคะ",
        "note": "Urgency that is actually true.",
        "id": "cruise-p-selling-005",
        "audience": "guest",
        "context": "Offering extras politely",
        "contextTh": "การแนะนำบริการเสริม",
        "noteTh": "ใช้ในสถานการณ์การแนะนำบริการเสริม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "You can add it to your onboard account, if that’s easier.",
        "th": "สามารถเพิ่มเข้าบัญชีบนเรือได้ค่ะ หากสะดวกกว่า",
        "note": "Removes friction from the decision.",
        "id": "cruise-p-selling-006",
        "audience": "guest",
        "context": "Offering extras politely",
        "contextTh": "การแนะนำบริการเสริม",
        "noteTh": "ใช้ในสถานการณ์การแนะนำบริการเสริม โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-onboard-account"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Would you like me to explain the options?",
        "th": "ต้องการให้อธิบายทางเลือกไหมคะ",
        "prompt": "What packages are available?",
        "promptTh": "มีแพ็กเกจอะไรบ้างคะ",
        "note": "Ask permission before describing optional purchases.",
        "noteTh": "ขออนุญาตก่อนอธิบายการซื้อเพิ่มเติม",
        "added": true,
        "id": "cruise-p-selling-007",
        "audience": "guest",
        "context": "Offering extras politely",
        "contextTh": "การแนะนำบริการเสริม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-explain"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "I will explain the full price and conditions first.",
        "th": "จะอธิบายราคาเต็มและเงื่อนไขก่อนค่ะ",
        "prompt": "Is this package good for us?",
        "promptTh": "แพ็กเกจนี้เหมาะกับเราไหมคะ",
        "note": "Provide facts without pressure or hidden charges.",
        "noteTh": "ให้ข้อเท็จจริงโดยไม่กดดันหรือปกปิดค่าใช้จ่าย",
        "added": true,
        "id": "cruise-p-selling-008",
        "audience": "guest",
        "context": "Offering extras politely",
        "contextTh": "การแนะนำบริการเสริม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-explain"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "You can keep your current booking.",
        "th": "คงการจองปัจจุบันไว้ได้ค่ะ",
        "prompt": "We do not want to upgrade.",
        "promptTh": "ไม่ต้องการอัปเกรดค่ะ",
        "note": "Accept a refusal politely.",
        "noteTh": "ยอมรับการปฏิเสธอย่างสุภาพ",
        "added": true,
        "id": "cruise-p-selling-009",
        "audience": "guest",
        "context": "Offering extras politely",
        "contextTh": "การแนะนำบริการเสริม",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Let me check availability before you decide.",
        "th": "ขอตรวจสอบที่ว่างก่อนตัดสินใจค่ะ",
        "prompt": "Can we book that excursion?",
        "promptTh": "จองทัศนศึกษานั้นได้ไหมคะ",
        "note": "Do not create artificial urgency.",
        "noteTh": "อย่าสร้างความเร่งด่วนที่ไม่เป็นจริง",
        "added": true,
        "id": "cruise-p-selling-010",
        "audience": "guest",
        "context": "Offering extras politely",
        "contextTh": "การแนะนำบริการเสริม",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check"
        ],
        "dialogueIds": []
      }
    ]
  },
  {
    "id": "crewtalk",
    "en": "Talking with your team",
    "th": "การสื่อสารกับทีมงาน",
    "items": [
      {
        "level": 2,
        "text": "Just to hand over: cabin 9042 has asked for extra pillows.",
        "th": "ขอส่งต่อข้อมูลนะ ห้อง 9042 ขอหมอนเพิ่ม",
        "note": "Clean, specific handover.",
        "id": "cruise-p-crewtalk-001",
        "audience": "staff",
        "context": "Talking with your team",
        "contextTh": "การสื่อสารกับทีมงาน",
        "noteTh": "ใช้ในสถานการณ์การสื่อสารกับทีมงาน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-pillow",
          "cruise-v-extra"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Could you cover my section? I’m running a few minutes behind.",
        "th": "ช่วยดูแลโซนของฉันแทนได้ไหม ฉันช้าไปสองสามนาที",
        "note": "Ask clearly and early.",
        "id": "cruise-p-crewtalk-002",
        "audience": "staff",
        "context": "Talking with your team",
        "contextTh": "การสื่อสารกับทีมงาน",
        "noteTh": "ใช้ในสถานการณ์การสื่อสารกับทีมงาน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "I’ve logged it in the handover book for the next watch.",
        "th": "ฉันบันทึกไว้ในสมุดส่งงานให้เวรถัดไปแล้ว",
        "note": "Written records prevent repeats.",
        "id": "cruise-p-crewtalk-003",
        "audience": "staff",
        "context": "Talking with your team",
        "contextTh": "การสื่อสารกับทีมงาน",
        "noteTh": "ใช้ในสถานการณ์การสื่อสารกับทีมงาน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-watch"
        ],
        "dialogueIds": []
      },
      {
        "level": 3,
        "text": "Would you mind if I escalated this to the department head?",
        "th": "ขอส่งเรื่องนี้ให้หัวหน้าแผนกได้ไหม",
        "note": "Knowing when to escalate.",
        "id": "cruise-p-crewtalk-004",
        "audience": "staff",
        "context": "Talking with your team",
        "contextTh": "การสื่อสารกับทีมงาน",
        "noteTh": "ใช้ในสถานการณ์การสื่อสารกับทีมงาน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-department-head"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "We’re low on towels — could someone restock the trolley?",
        "th": "ผ้าเช็ดตัวเหลือน้อยแล้ว ใครช่วยเติมในรถเข็นได้ไหม",
        "note": "Flag supply problems early.",
        "id": "cruise-p-crewtalk-005",
        "audience": "staff",
        "context": "Talking with your team",
        "contextTh": "การสื่อสารกับทีมงาน",
        "noteTh": "ใช้ในสถานการณ์การสื่อสารกับทีมงาน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-towel"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Thanks for stepping in earlier — that really helped.",
        "th": "ขอบคุณที่มาช่วยเมื่อกี้นะ ช่วยได้มากเลย",
        "note": "Recognise support from colleagues.",
        "id": "cruise-p-crewtalk-006",
        "audience": "staff",
        "context": "Talking with your team",
        "contextTh": "การสื่อสารกับทีมงาน",
        "noteTh": "ใช้ในสถานการณ์การสื่อสารกับทีมงาน โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Please record the cabin number and the request.",
        "th": "กรุณาบันทึกหมายเลขห้องและคำขอ",
        "prompt": "The guest needs more blankets.",
        "promptTh": "ลูกค้าต้องการผ้าห่มเพิ่ม",
        "note": "Staff handover language, not guest-facing language.",
        "noteTh": "ภาษาส่งมอบงานระหว่างเจ้าหน้าที่ ไม่ใช่พูดกับลูกค้า",
        "added": true,
        "id": "cruise-p-crewtalk-007",
        "audience": "staff",
        "context": "Talking with your team",
        "contextTh": "การสื่อสารกับทีมงาน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "crew-handover"
        ]
      },
      {
        "level": 1,
        "text": "Could you bring two clean towels, please?",
        "th": "ช่วยนำผ้าขนหนูสะอาดสองผืนมาให้ได้ไหม",
        "prompt": "What should I take to the cabin?",
        "promptTh": "ควรนำอะไรไปที่ห้องพัก",
        "note": "Confirm both the item and the quantity.",
        "noteTh": "ยืนยันทั้งสิ่งของและจำนวน",
        "added": true,
        "id": "cruise-p-crewtalk-008",
        "audience": "staff",
        "context": "Talking with your team",
        "contextTh": "การสื่อสารกับทีมงาน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-towel",
          "cruise-v-clean"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Please tell the next shift about the maintenance request.",
        "th": "กรุณาแจ้งกะถัดไปเรื่องคำขอซ่อมบำรุง",
        "prompt": "The repair is not finished yet.",
        "promptTh": "ยังซ่อมไม่เสร็จ",
        "note": "Include the current status without claiming completion.",
        "noteTh": "แจ้งสถานะปัจจุบันโดยไม่บอกว่าเสร็จแล้ว",
        "added": true,
        "id": "cruise-p-crewtalk-009",
        "audience": "staff",
        "context": "Talking with your team",
        "contextTh": "การสื่อสารกับทีมงาน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-maintenance",
          "cruise-v-shift"
        ],
        "dialogueIds": [
          "crew-handover"
        ]
      },
      {
        "level": 2,
        "text": "Has the guest been updated about the delay?",
        "th": "แจ้งลูกค้าเรื่องความล่าช้าแล้วหรือยัง",
        "prompt": "We are still waiting for a reply.",
        "promptTh": "ยังรอคำตอบอยู่",
        "note": "Check communication as well as task completion.",
        "noteTh": "ตรวจสอบการสื่อสารควบคู่กับความคืบหน้างาน",
        "added": true,
        "id": "cruise-p-crewtalk-010",
        "audience": "staff",
        "context": "Talking with your team",
        "contextTh": "การสื่อสารกับทีมงาน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-delay"
        ],
        "dialogueIds": [
          "crew-handover"
        ]
      },
      {
        "level": 2,
        "text": "Please keep the guest's information confidential.",
        "th": "กรุณารักษาความลับข้อมูลลูกค้า",
        "prompt": "Where should I discuss this request?",
        "promptTh": "ควรพูดคุยคำขอนี้ที่ไหน",
        "note": "Share information only through appropriate work channels.",
        "noteTh": "ส่งข้อมูลผ่านช่องทางงานที่เหมาะสมเท่านั้น",
        "added": true,
        "id": "cruise-p-crewtalk-011",
        "audience": "staff",
        "context": "Talking with your team",
        "contextTh": "การสื่อสารกับทีมงาน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      }
    ]
  },
  {
    "id": "farewell",
    "en": "Disembarkation & farewell",
    "th": "การลงจากเรือและกล่าวลา",
    "items": [
      {
        "level": 3,
        "text": "Disembarkation begins at seven. Your luggage tags show your group colour.",
        "th": "การลงจากเรือเริ่มเจ็ดโมงค่ะ ป้ายกระเป๋าจะระบุสีกลุ่มของท่าน",
        "note": "Two facts guests need together.",
        "id": "cruise-p-farewell-001",
        "audience": "guest",
        "context": "Disembarkation & farewell",
        "contextTh": "การลงจากเรือและกล่าวลา",
        "noteTh": "ใช้ในสถานการณ์การลงจากเรือและกล่าวลา โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-disembarkation",
          "cruise-v-luggage",
          "cruise-v-luggage-tag"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Please leave your suitcases outside your cabin before ten tonight.",
        "th": "กรุณาวางกระเป๋าเดินทางไว้หน้าห้องพักก่อนสี่ทุ่มคืนนี้นะคะ",
        "note": "Say the deadline plainly.",
        "id": "cruise-p-farewell-002",
        "audience": "guest",
        "context": "Disembarkation & farewell",
        "contextTh": "การลงจากเรือและกล่าวลา",
        "noteTh": "ใช้ในสถานการณ์การลงจากเรือและกล่าวลา โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Your final statement will be delivered to your cabin overnight.",
        "th": "ใบสรุปค่าใช้จ่ายจะส่งไปที่ห้องพักในคืนนี้ค่ะ",
        "note": "Heads off billing questions.",
        "id": "cruise-p-farewell-003",
        "audience": "guest",
        "context": "Disembarkation & farewell",
        "contextTh": "การลงจากเรือและกล่าวลา",
        "noteTh": "ใช้ในสถานการณ์การลงจากเรือและกล่าวลา โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-statement"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "We’d love to hear how your cruise was — there’s a comment card in your folder.",
        "th": "เราอยากทราบความคิดเห็นเกี่ยวกับการเดินทางของท่านค่ะ มีบัตรแสดงความคิดเห็นในแฟ้ม",
        "note": "Invites feedback without pressure.",
        "id": "cruise-p-farewell-004",
        "audience": "guest",
        "context": "Disembarkation & farewell",
        "contextTh": "การลงจากเรือและกล่าวลา",
        "noteTh": "ใช้ในสถานการณ์การลงจากเรือและกล่าวลา โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Thank you for sailing with us. Safe travels home.",
        "th": "ขอบคุณที่ร่วมเดินทางกับเรานะคะ เดินทางกลับปลอดภัยค่ะ",
        "note": "The last thing a guest hears.",
        "id": "cruise-p-farewell-005",
        "audience": "guest",
        "context": "Disembarkation & farewell",
        "contextTh": "การลงจากเรือและกล่าวลา",
        "noteTh": "ใช้ในสถานการณ์การลงจากเรือและกล่าวลา โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-safe"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "It’s been a pleasure looking after you this week.",
        "th": "เป็นเกียรติที่ได้ดูแลท่านในสัปดาห์นี้ค่ะ",
        "note": "Personal and sincere.",
        "id": "cruise-p-farewell-006",
        "audience": "guest",
        "context": "Disembarkation & farewell",
        "contextTh": "การลงจากเรือและกล่าวลา",
        "noteTh": "ใช้ในสถานการณ์การลงจากเรือและกล่าวลา โดยตรวจสอบข้อเท็จจริงและความต้องการของผู้รับบริการก่อน",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Have you checked your cabin for belongings?",
        "th": "ตรวจสอบของส่วนตัวในห้องพักแล้วไหมคะ",
        "prompt": "We are ready to leave.",
        "promptTh": "พร้อมออกแล้วค่ะ",
        "note": "Give a helpful reminder without delaying official instructions.",
        "noteTh": "เตือนอย่างเหมาะสมโดยไม่ขัดกำหนดการทางการ",
        "added": true,
        "id": "cruise-p-farewell-007",
        "audience": "guest",
        "context": "Disembarkation & farewell",
        "contextTh": "การลงจากเรือและกล่าวลา",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "departure-day"
        ]
      },
      {
        "level": 2,
        "text": "Please follow the current disembarkation instructions.",
        "th": "กรุณาปฏิบัติตามคำแนะนำการลงจากเรือปัจจุบันค่ะ",
        "prompt": "Can we leave now?",
        "promptTh": "ลงจากเรือตอนนี้ได้ไหมคะ",
        "note": "Check the assigned group and instructions.",
        "noteTh": "ตรวจสอบกลุ่มและคำแนะนำที่กำหนด",
        "added": true,
        "id": "cruise-p-farewell-008",
        "audience": "guest",
        "context": "Disembarkation & farewell",
        "contextTh": "การลงจากเรือและกล่าวลา",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-disembarkation",
          "cruise-v-follow"
        ],
        "dialogueIds": [
          "departure-day"
        ]
      },
      {
        "level": 2,
        "text": "Let me check where your transfer meets.",
        "th": "ขอตรวจสอบจุดนัดพบบริการรับส่งค่ะ",
        "prompt": "Where is our airport bus?",
        "promptTh": "รถไปสนามบินอยู่ที่ไหนคะ",
        "note": "Confirm the actual transport booking.",
        "noteTh": "ยืนยันการจองรับส่งจริง",
        "added": true,
        "id": "cruise-p-farewell-009",
        "audience": "guest",
        "context": "Disembarkation & farewell",
        "contextTh": "การลงจากเรือและกล่าวลา",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-transfer"
        ],
        "dialogueIds": [
          "departure-day"
        ]
      },
      {
        "level": 1,
        "text": "Thank you. Have a safe journey home.",
        "th": "ขอบคุณค่ะ ขอให้เดินทางกลับโดยสวัสดิภาพ",
        "prompt": "Thank you for looking after us.",
        "promptTh": "ขอบคุณที่ดูแลเราค่ะ",
        "note": "A warm, professional farewell.",
        "noteTh": "คำอำลาที่อบอุ่นและสุภาพ",
        "added": true,
        "id": "cruise-p-farewell-010",
        "audience": "guest",
        "context": "Disembarkation & farewell",
        "contextTh": "การลงจากเรือและกล่าวลา",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-safe"
        ],
        "dialogueIds": []
      }
    ]
  },
  {
    "id": "clarifying",
    "en": "Checking understanding",
    "th": "ตรวจสอบความเข้าใจ",
    "items": [
      {
        "level": 1,
        "text": "Could you repeat that, please?",
        "th": "ช่วยพูดซ้ำอีกครั้งได้ไหมคะ",
        "prompt": "I need something for my cabin.",
        "promptTh": "ต้องการของบางอย่างในห้องพักค่ะ",
        "note": "Ask again rather than guessing.",
        "noteTh": "ถามซ้ำแทนการคาดเดา",
        "added": true,
        "id": "cruise-p-clarifying-001",
        "audience": "guest",
        "context": "Checking understanding",
        "contextTh": "ตรวจสอบความเข้าใจ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-repeat"
        ],
        "dialogueIds": [
          "clarify-request"
        ]
      },
      {
        "level": 1,
        "text": "Could you speak a little more slowly?",
        "th": "ช่วยพูดช้าลงเล็กน้อยได้ไหมคะ",
        "prompt": "Let me explain what happened.",
        "promptTh": "จะอธิบายว่าเกิดอะไรขึ้นค่ะ",
        "note": "Request a manageable speaking pace politely.",
        "noteTh": "ขอให้พูดด้วยความเร็วที่ฟังทันอย่างสุภาพ",
        "added": true,
        "id": "cruise-p-clarifying-002",
        "audience": "guest",
        "context": "Checking understanding",
        "contextTh": "ตรวจสอบความเข้าใจ",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Did you say deck four or deck fourteen?",
        "th": "พูดว่าดาดฟ้าสี่หรือสิบสี่คะ",
        "prompt": "We are on deck fourteen.",
        "promptTh": "อยู่ดาดฟ้าสิบสี่ค่ะ",
        "note": "Check similar-sounding numbers.",
        "noteTh": "ตรวจสอบตัวเลขที่ฟังคล้ายกัน",
        "added": true,
        "id": "cruise-p-clarifying-003",
        "audience": "guest",
        "context": "Checking understanding",
        "contextTh": "ตรวจสอบความเข้าใจ",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "clarify-request"
        ]
      },
      {
        "level": 1,
        "text": "Could you show me on the map?",
        "th": "ช่วยชี้บนแผนที่ได้ไหมคะ",
        "prompt": "I am looking for this place.",
        "promptTh": "กำลังหาสถานที่นี้ค่ะ",
        "note": "Use a visual aid to clarify the request.",
        "noteTh": "ใช้ภาพช่วยทำให้คำขอชัดเจน",
        "added": true,
        "id": "cruise-p-clarifying-004",
        "audience": "guest",
        "context": "Checking understanding",
        "contextTh": "ตรวจสอบความเข้าใจ",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "Let me repeat that to make sure I understood.",
        "th": "ขอทวนเพื่อให้แน่ใจว่าเข้าใจถูกต้องค่ะ",
        "prompt": "We need two towels and one blanket.",
        "promptTh": "ต้องการผ้าขนหนูสองผืนและผ้าห่มหนึ่งผืนค่ะ",
        "note": "Read back item names and quantities.",
        "noteTh": "ทวนชื่อสิ่งของและจำนวน",
        "added": true,
        "id": "cruise-p-clarifying-005",
        "audience": "guest",
        "context": "Checking understanding",
        "contextTh": "ตรวจสอบความเข้าใจ",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-repeat"
        ],
        "dialogueIds": [
          "clarify-request"
        ]
      },
      {
        "level": 2,
        "text": "I will ask a colleague for language support.",
        "th": "จะขอให้เพื่อนร่วมงานช่วยด้านภาษาค่ะ",
        "prompt": "I do not understand these instructions.",
        "promptTh": "ไม่เข้าใจคำแนะนำนี้ค่ะ",
        "note": "Use suitable language support for important information.",
        "noteTh": "ใช้ความช่วยเหลือทางภาษาที่เหมาะสมกับข้อมูลสำคัญ",
        "added": true,
        "id": "cruise-p-clarifying-006",
        "audience": "guest",
        "context": "Checking understanding",
        "contextTh": "ตรวจสอบความเข้าใจ",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": []
      }
    ]
  },
  {
    "id": "account",
    "en": "Bills and payments",
    "th": "บัญชีและการชำระเงิน",
    "items": [
      {
        "level": 1,
        "text": "Which charge would you like me to check?",
        "th": "ต้องการให้ตรวจสอบค่าใช้จ่ายรายการไหนคะ",
        "prompt": "I do not recognise this charge.",
        "promptTh": "ไม่รู้จักค่าใช้จ่ายรายการนี้ค่ะ",
        "note": "Refer to the actual account statement.",
        "noteTh": "อ้างอิงรายการบัญชีจริง",
        "added": true,
        "id": "cruise-p-account-001",
        "audience": "guest",
        "context": "Bills and payments",
        "contextTh": "บัญชีและการชำระเงิน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-check",
          "cruise-v-charge"
        ],
        "dialogueIds": [
          "account-review"
        ]
      },
      {
        "level": 2,
        "text": "Let me check whether the payment has already gone through.",
        "th": "ขอตรวจสอบว่าชำระเงินสำเร็จแล้วหรือไม่ค่ะ",
        "prompt": "Should I pay again?",
        "promptTh": "ควรชำระอีกครั้งไหมคะ",
        "note": "Check the transaction before repeating a payment.",
        "noteTh": "ตรวจสอบรายการก่อนชำระซ้ำ",
        "added": true,
        "id": "cruise-p-account-002",
        "audience": "guest",
        "context": "Bills and payments",
        "contextTh": "บัญชีและการชำระเงิน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-payment",
          "cruise-v-check"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Would you like a copy of your statement?",
        "th": "ต้องการสำเนารายการบัญชีไหมคะ",
        "prompt": "Can I review my charges?",
        "promptTh": "ตรวจสอบค่าใช้จ่ายได้ไหมคะ",
        "note": "Provide access through the authorised process.",
        "noteTh": "ให้ข้อมูลผ่านขั้นตอนที่ได้รับอนุญาต",
        "added": true,
        "id": "cruise-p-account-003",
        "audience": "guest",
        "context": "Bills and payments",
        "contextTh": "บัญชีและการชำระเงิน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-statement"
        ],
        "dialogueIds": [
          "account-review"
        ]
      },
      {
        "level": 2,
        "text": "I will confirm the amount and currency before payment.",
        "th": "จะยืนยันยอดและสกุลเงินก่อนชำระค่ะ",
        "prompt": "Is that amount in dollars?",
        "promptTh": "ยอดนี้เป็นดอลลาร์ใช่ไหมคะ",
        "note": "Do not assume the guest knows the currency.",
        "noteTh": "อย่าสรุปว่าลูกค้าทราบสกุลเงินแล้ว",
        "added": true,
        "id": "cruise-p-account-004",
        "audience": "guest",
        "context": "Bills and payments",
        "contextTh": "บัญชีและการชำระเงิน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-payment",
          "cruise-v-confirm",
          "cruise-v-currency"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "I will ask the accounts team to review the duplicate charge.",
        "th": "จะขอให้ฝ่ายบัญชีตรวจสอบการเรียกเก็บเงินซ้ำค่ะ",
        "prompt": "This payment appears twice.",
        "promptTh": "รายการชำระนี้ปรากฏสองครั้งค่ะ",
        "note": "Verify the transactions before promising a correction.",
        "noteTh": "ตรวจสอบรายการก่อนรับรองว่าจะแก้ไข",
        "added": true,
        "id": "cruise-p-account-005",
        "audience": "guest",
        "context": "Bills and payments",
        "contextTh": "บัญชีและการชำระเงิน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-charge",
          "cruise-v-duplicate-charge"
        ],
        "dialogueIds": [
          "account-review"
        ]
      },
      {
        "level": 2,
        "text": "Could you confirm the date of that transaction?",
        "th": "ช่วยยืนยันวันที่ทำรายการนั้นได้ไหมคะ",
        "prompt": "I paid for it earlier.",
        "promptTh": "จ่ายไปก่อนหน้านี้แล้วค่ะ",
        "note": "Use the date to help locate the correct record.",
        "noteTh": "ใช้วันที่เพื่อค้นหารายการที่ถูกต้อง",
        "added": true,
        "id": "cruise-p-account-006",
        "audience": "guest",
        "context": "Bills and payments",
        "contextTh": "บัญชีและการชำระเงิน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-confirm"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "Please keep this reference number.",
        "th": "กรุณาเก็บหมายเลขอ้างอิงนี้ไว้ค่ะ",
        "prompt": "How can I follow up on my request?",
        "promptTh": "ติดตามคำขอได้อย่างไรคะ",
        "note": "Provide a real reference number through the approved system.",
        "noteTh": "แจ้งหมายเลขอ้างอิงจริงจากระบบที่อนุมัติ",
        "added": true,
        "id": "cruise-p-account-007",
        "audience": "guest",
        "context": "Bills and payments",
        "contextTh": "บัญชีและการชำระเงิน",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-reference-number"
        ],
        "dialogueIds": []
      }
    ]
  },
  {
    "id": "hygiene",
    "en": "Hygiene and reporting concerns",
    "th": "สุขอนามัยและการรายงานข้อกังวล",
    "items": [
      {
        "level": 1,
        "text": "Please wash your hands with soap and water.",
        "th": "กรุณาล้างมือด้วยสบู่และน้ำค่ะ",
        "prompt": "Is there somewhere to wash my hands?",
        "promptTh": "มีที่ล้างมือไหมคะ",
        "note": "Hand sanitiser is not a substitute for handwashing against norovirus.",
        "noteTh": "เจลล้างมือไม่ทดแทนการล้างมือในการป้องกันโนโรไวรัส",
        "added": true,
        "id": "cruise-p-hygiene-001",
        "audience": "guest",
        "context": "Hygiene and reporting concerns",
        "contextTh": "สุขอนามัยและการรายงานข้อกังวล",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-soap",
          "cruise-v-water",
          "cruise-v-soap-and-water"
        ],
        "dialogueIds": [
          "handwashing"
        ]
      },
      {
        "level": 1,
        "text": "Please tell us immediately if you feel unwell.",
        "th": "กรุณาแจ้งทันทีหากรู้สึกไม่สบายค่ะ",
        "prompt": "What should I do if I feel sick?",
        "promptTh": "หากรู้สึกป่วยควรทำอย่างไรคะ",
        "note": "Follow onboard reporting and medical procedures.",
        "noteTh": "ปฏิบัติตามขั้นตอนรายงานและการแพทย์บนเรือ",
        "added": true,
        "id": "cruise-p-hygiene-002",
        "audience": "guest",
        "context": "Hygiene and reporting concerns",
        "contextTh": "สุขอนามัยและการรายงานข้อกังวล",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-unwell"
        ],
        "dialogueIds": []
      },
      {
        "level": 2,
        "text": "I will report the spill and keep this area clear.",
        "th": "จะรายงานของเหลวที่หกและกันพื้นที่นี้ไว้ค่ะ",
        "prompt": "There is a spill by the entrance.",
        "promptTh": "มีของเหลวหกใกล้ทางเข้าค่ะ",
        "note": "Follow the trained cleaning and hazard-control procedure.",
        "noteTh": "ทำตามขั้นตอนทำความสะอาดและควบคุมอันตรายที่ได้รับการฝึก",
        "added": true,
        "id": "cruise-p-hygiene-003",
        "audience": "guest",
        "context": "Hygiene and reporting concerns",
        "contextTh": "สุขอนามัยและการรายงานข้อกังวล",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-report"
        ],
        "dialogueIds": []
      },
      {
        "level": 1,
        "text": "I will report that the soap dispenser is empty.",
        "th": "จะรายงานว่าที่จ่ายสบู่หมดค่ะ",
        "prompt": "There is no soap at the washbasin.",
        "promptTh": "ไม่มีสบู่ที่อ่างล้างมือค่ะ",
        "note": "Arrange replenishment through the appropriate team.",
        "noteTh": "ประสานทีมที่เหมาะสมให้เติมสบู่",
        "added": true,
        "id": "cruise-p-hygiene-004",
        "audience": "guest",
        "context": "Hygiene and reporting concerns",
        "contextTh": "สุขอนามัยและการรายงานข้อกังวล",
        "trainingExample": true,
        "relatedVocabularyIds": [
          "cruise-v-soap",
          "cruise-v-report"
        ],
        "dialogueIds": [
          "handwashing"
        ]
      },
      {
        "level": 2,
        "text": "Please use the washbasin indicated by the crew.",
        "th": "กรุณาใช้อ่างล้างมือที่ลูกเรือแนะนำค่ะ",
        "prompt": "Where can I wash my hands?",
        "promptTh": "ล้างมือได้ที่ไหนคะ",
        "note": "Direct the guest to an available handwashing facility.",
        "noteTh": "แนะนำจุดล้างมือที่พร้อมใช้งาน",
        "added": true,
        "id": "cruise-p-hygiene-005",
        "audience": "guest",
        "context": "Hygiene and reporting concerns",
        "contextTh": "สุขอนามัยและการรายงานข้อกังวล",
        "trainingExample": true,
        "relatedVocabularyIds": [],
        "dialogueIds": [
          "handwashing"
        ]
      }
    ]
  }
];

/* ---------- SAY THIS, NOT THAT ---------- */
const CRUISE_SAYTHIS = [
  {
    "scenario": "Guest asks where something is",
    "dont": "It’s upstairs.",
    "dontTh": "อยู่ชั้นบน",
    "doo": "It’s on deck nine, just above us — shall I show you on the deck plan?",
    "dooTh": "อยู่ชั้นเก้า เหนือขึ้นไปหนึ่งชั้นค่ะ ให้ดิฉันชี้ในแผนผังให้ไหมคะ",
    "why": "On a ship \"upstairs\" is meaningless. Always give the deck number and a direction.",
    "id": "cruise-say-001"
  },
  {
    "scenario": "Guest wants to skip the muster drill",
    "dont": "You have to go, it’s the rule.",
    "dontTh": "คุณต้องไป มันเป็นกฎ",
    "doo": "It’s required by maritime law and takes only fifteen minutes — it keeps everyone safe.",
    "dooTh": "เป็นข้อบังคับตามกฎหมายทางทะเล ใช้เวลาเพียงสิบห้านาที เพื่อความปลอดภัยของทุกคนค่ะ",
    "why": "Explaining the reason gets cooperation; citing \"the rule\" invites an argument.",
    "id": "cruise-say-002"
  },
  {
    "scenario": "Guest is late back from shore",
    "dont": "You’re late. The ship almost left.",
    "dontTh": "คุณมาสาย เรือเกือบออกแล้ว",
    "doo": "I’m glad you made it back safely. Do check the all aboard time for tomorrow.",
    "dooTh": "ดีใจที่ท่านกลับมาถึงอย่างปลอดภัยค่ะ พรุ่งนี้อย่าลืมตรวจเวลากลับขึ้นเรือนะคะ",
    "why": "Relief plus a forward-looking reminder works better than blame.",
    "id": "cruise-say-003"
  },
  {
    "scenario": "Guest asks for a restricted area",
    "dont": "You can’t go there.",
    "dontTh": "คุณไปที่นั่นไม่ได้",
    "doo": "That area is crew only, but I’d be glad to take your request there myself.",
    "dooTh": "บริเวณนั้นสงวนสำหรับลูกเรือค่ะ แต่ดิฉันยินดีนำเรื่องไปแจ้งให้",
    "why": "Refuse the access without refusing the person.",
    "id": "cruise-say-004"
  },
  {
    "scenario": "Drink is outside the package",
    "dont": "That’s not included. It costs extra.",
    "dontTh": "อันนั้นไม่รวม ต้องจ่ายเพิ่ม",
    "doo": "That one falls just outside your package — there’s a small extra charge. Would you still like it?",
    "dooTh": "รายการนี้ไม่รวมในแพ็กเกจค่ะ มีค่าใช้จ่ายเพิ่มเล็กน้อย ยังต้องการรับไหมคะ",
    "why": "Tell the guest before you pour, and let them choose. Never surprise them on the bill.",
    "id": "cruise-say-005"
  },
  {
    "scenario": "Guest feels seasick",
    "dont": "Everyone gets seasick, it’s normal.",
    "dontTh": "ทุกคนก็เมาเรือ เป็นเรื่องปกติ",
    "doo": "I’m sorry you feel unwell. I will contact the medical team.",
    "dooTh": "เสียใจด้วยที่คุณรู้สึกไม่สบาย ดิฉันจะติดต่อทีมแพทย์ค่ะ",
    "why": "Acknowledge the concern and seek appropriate medical help instead of guessing a treatment or location.",
    "id": "cruise-say-006"
  },
  {
    "scenario": "Cabin is not ready yet",
    "dont": "Your cabin is not ready. Wait.",
    "dontTh": "ห้องยังไม่พร้อม รอไปก่อน",
    "doo": "Your stateroom will be ready by two. Until then, the buffet on deck eleven is open.",
    "dooTh": "ห้องพักของท่านจะพร้อมภายในบ่ายสองค่ะ ระหว่างนี้บุฟเฟ่ต์ชั้นสิบเอ็ดเปิดให้บริการ",
    "why": "Give a time and something to do in the meantime.",
    "id": "cruise-say-007"
  },
  {
    "scenario": "Guest complains about noise",
    "dont": "There’s nothing I can do about it.",
    "dontTh": "ฉันทำอะไรไม่ได้",
    "doo": "I’m sorry — let me take your cabin number and speak with my supervisor about moving you.",
    "dooTh": "ขออภัยค่ะ ขอทราบหมายเลขห้องพัก แล้วดิฉันจะปรึกษาหัวหน้าเรื่องการย้ายห้องให้",
    "why": "Never close the conversation. Offer the next step, even if you cannot fix it yourself.",
    "id": "cruise-say-008"
  },
  {
    "scenario": "Guest asks a question you can’t answer",
    "dont": "I don’t know.",
    "dontTh": "ไม่รู้",
    "doo": "That’s a good question — let me find out and come back to you within the hour.",
    "dooTh": "เป็นคำถามที่ดีค่ะ ขอไปหาคำตอบแล้วกลับมาแจ้งภายในหนึ่งชั่วโมง",
    "why": "Promising a time turns \"I don’t know\" into good service.",
    "id": "cruise-say-009"
  },
  {
    "scenario": "Guest is at the wrong seating time",
    "dont": "You’re at the wrong sitting.",
    "dontTh": "คุณมาผิดรอบ",
    "doo": "Your table is booked for the later sitting — but let me see what I can do for you now.",
    "dooTh": "โต๊ะของท่านจองไว้รอบหลังค่ะ แต่ขอดูว่าจะจัดให้ตอนนี้ได้ไหมนะคะ",
    "why": "Correct the fact, then look for a solution rather than leaving them stranded.",
    "id": "cruise-say-010"
  },
  {
    "scenario": "A colleague made the mistake",
    "dont": "That wasn’t me, it was the night steward.",
    "dontTh": "ไม่ใช่ฉัน เป็นพนักงานกะกลางคืน",
    "doo": "I’m sorry that happened — let me put it right for you now.",
    "dooTh": "ขออภัยที่เกิดเรื่องนี้ขึ้นค่ะ ขอแก้ไขให้เลยนะคะ",
    "why": "Guests experience one ship, not separate shifts. Deflecting blame damages that trust.",
    "id": "cruise-say-011"
  },
  {
    "scenario": "Guest asks about gratuities",
    "dont": "You have to pay it, it’s automatic.",
    "dontTh": "คุณต้องจ่าย มันอัตโนมัติ",
    "doo": "A daily service gratuity is added to your onboard account — I can show you the details.",
    "dooTh": "มีค่าบริการรายวันเพิ่มเข้าบัญชีบนเรือค่ะ ดิฉันแสดงรายละเอียดให้ดูได้",
    "why": "Explain calmly and offer the documentation. Money questions need clarity, not defensiveness.",
    "id": "cruise-say-012"
  },
  {
    "scenario": "Guest blocks a fire door",
    "dont": "Don’t leave that open.",
    "dontTh": "อย่าเปิดทิ้งไว้",
    "doo": "May I close this for you? It’s a fire door, so it needs to stay shut.",
    "dooTh": "ขออนุญาตปิดประตูนี้นะคะ เป็นประตูกันไฟ จึงต้องปิดไว้ค่ะ",
    "why": "Do it yourself and give the reason, rather than issuing an instruction.",
    "id": "cruise-say-013"
  },
  {
    "scenario": "Guest wants a photo in a crew area",
    "dont": "No photos here.",
    "dontTh": "ห้ามถ่ายรูปที่นี่",
    "doo": "I’m afraid we can’t take photographs in this area — but the promenade deck has a wonderful view.",
    "dooTh": "บริเวณนี้ไม่อนุญาตให้ถ่ายภาพค่ะ แต่ดาดฟ้าเดินเล่นมีวิวสวยมากนะคะ",
    "why": "Pair the refusal with a better alternative.",
    "id": "cruise-say-014"
  }
];

/* ---------- ACTIVITY BANKS ---------- */
const CRUISE_MC_BANK = [
  {
    "q": "What is a “muster station”?",
    "options": [
      "A crew dining room",
      "The place a guest goes in an emergency",
      "A cabin with a balcony",
      "The ship’s kitchen"
    ],
    "correct": 1,
    "hit": "Check the guest’s assigned muster station using this ship’s current safety information.",
    "miss": "A muster station is the assigned emergency assembly point. Confirm its location using this ship’s instructions.",
    "id": "cruise-mc-001"
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
    "id": "cruise-mc-002"
  },
  {
    "q": "A guest asks where the theatre is. Best answer?",
    "options": [
      "It’s upstairs.",
      "It’s on deck five, forward — take the lift and turn left.",
      "Somewhere on five.",
      "Ask someone else."
    ],
    "correct": 1,
    "hit": "Exactly — deck number, direction, then the turn.",
    "miss": "On a ship, always give the deck number and a direction. “Upstairs” means nothing.",
    "id": "cruise-mc-003"
  },
  {
    "q": "“All aboard time” is:",
    "options": [
      "When the buffet opens",
      "The time every guest must be back on the ship",
      "The start of the muster drill",
      "When the bar closes"
    ],
    "correct": 1,
    "hit": "Correct — and it is worth repeating twice to guests.",
    "miss": "All aboard time is the deadline for guests to be back on the ship.",
    "id": "cruise-mc-004"
  },
  {
    "q": "What does a “tender boat” do?",
    "options": [
      "Delivers luggage",
      "Carries guests ashore where the ship cannot dock",
      "Tows the ship",
      "Collects rubbish"
    ],
    "correct": 1,
    "hit": "Right — used when there is no berth for the ship.",
    "miss": "A tender boat carries guests ashore where the ship cannot dock.",
    "id": "cruise-mc-005"
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
    "id": "cruise-mc-006"
  },
  {
    "q": "A guest’s drink is not in their package. What do you say?",
    "options": [
      "That’s not included.",
      "That one falls outside your package — there’s a small extra charge. Would you still like it?",
      "You have to pay.",
      "I’ll charge you anyway."
    ],
    "correct": 1,
    "hit": "Right — tell them before you pour, and let them choose.",
    "miss": "Explain the extra charge before serving, and let the guest decide.",
    "id": "cruise-mc-007"
  },
  {
    "q": "“Turndown service” means:",
    "options": [
      "Refusing a guest request",
      "Preparing the bed and cabin in the evening",
      "Turning off the air conditioning",
      "Lowering the price"
    ],
    "correct": 1,
    "hit": "Correct — the evening cabin visit.",
    "miss": "Turndown service is the evening visit to prepare the bed and tidy the cabin.",
    "id": "cruise-mc-008"
  },
  {
    "q": "A guest feels seasick. Best response?",
    "options": [
      "You will be fine; do not worry.",
      "I’m sorry you feel unwell. I will contact the medical team.",
      "Take this tablet without asking anyone.",
      "Ignore it and continue your tour."
    ],
    "correct": 1,
    "hit": "Acknowledge the concern and seek appropriate medical assistance.",
    "miss": "Do not diagnose, prescribe or promise recovery. Contact the medical team according to ship procedure.",
    "id": "cruise-mc-009"
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
    "id": "cruise-mc-010"
  },
  {
    "q": "A guest asks to enter a crew-only area. Best reply?",
    "options": [
      "You can’t go there.",
      "That area is crew only, but I’d be glad to take your request there myself.",
      "It’s forbidden.",
      "Nobody is allowed."
    ],
    "correct": 1,
    "hit": "Right — refuse the access, not the person.",
    "miss": "Refuse the access but offer to help with what they actually needed.",
    "id": "cruise-mc-011"
  },
  {
    "q": "“Disembarkation” is:",
    "options": [
      "Boarding the ship",
      "Leaving the ship at the end of a cruise",
      "A safety drill",
      "A shore excursion"
    ],
    "correct": 1,
    "hit": "Correct — the opposite of embarkation.",
    "miss": "Disembarkation is the process of leaving the ship at the end of a cruise.",
    "id": "cruise-mc-012"
  },
  {
    "q": "Why must a fire door stay closed?",
    "options": [
      "To keep the corridor quiet",
      "To hold back fire and smoke",
      "To save electricity",
      "To stop guests entering"
    ],
    "correct": 1,
    "hit": "Right — and always explain that reason to guests.",
    "miss": "A fire door holds back fire and smoke, so it must stay shut.",
    "id": "cruise-mc-013"
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
    "id": "cruise-mc-014"
  },
  {
    "q": "“Ship’s time” matters because:",
    "options": [
      "It is always GMT",
      "It may differ from local time ashore",
      "It changes every hour",
      "Only the crew use it"
    ],
    "correct": 1,
    "hit": "Correct — this is how guests miss the ship.",
    "miss": "Ship’s time can differ from local time, so all aboard time follows the ship.",
    "id": "cruise-mc-015"
  },
  {
    "q": "A “dietary requirement” is:",
    "options": [
      "A guest’s favourite dish",
      "A food a guest must avoid, for health or belief",
      "A menu price",
      "A table booking"
    ],
    "correct": 1,
    "hit": "Right — and the galley must be told.",
    "miss": "A dietary requirement is food a guest must avoid, for health or belief.",
    "id": "cruise-mc-016"
  },
  {
    "q": "Guest’s cabin is not ready. Best answer?",
    "options": [
      "Your cabin is not ready. Wait.",
      "Your stateroom will be ready by two — until then the buffet on deck eleven is open.",
      "Come back later.",
      "I don’t know when."
    ],
    "correct": 1,
    "hit": "Perfect — a time plus something to do meanwhile.",
    "miss": "Give a specific time and suggest something to do in the meantime.",
    "id": "cruise-mc-017"
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
    "id": "cruise-mc-018"
  },
  {
    "q": "How should you confirm where a guest’s life jacket is kept?",
    "options": [
      "Assume every ship uses the wardrobe",
      "Check this ship’s current safety instructions",
      "Guess from another ship",
      "Ask the guest to search every deck"
    ],
    "correct": 1,
    "hit": "Use the current instructions for the actual ship.",
    "miss": "Locations and arrangements vary. Check this ship’s safety instructions.",
    "id": "cruise-mc-019"
  },
  {
    "q": "During the muster drill, guests should:",
    "options": [
      "Use the lifts",
      "Use the stairs",
      "Stay in their cabins",
      "Wait at the bar"
    ],
    "correct": 1,
    "hit": "Correct — stairs only during a drill.",
    "miss": "Guests must use the stairs, not the lifts, during a drill.",
    "id": "cruise-mc-020"
  },
  {
    "q": "A guest returns late from shore. Best response?",
    "options": [
      "You’re late, the ship almost left.",
      "I’m glad you made it back safely — do check tomorrow’s all aboard time.",
      "You should be more careful.",
      "Next time we’ll leave you."
    ],
    "correct": 1,
    "hit": "Right — relief plus a forward-looking reminder.",
    "miss": "Express relief, then remind them about the next all aboard time.",
    "id": "cruise-mc-021"
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
    "id": "cruise-mc-022"
  },
  {
    "q": "What should a guest take ashore?",
    "options": [
      "Their passport only",
      "Their cruise card and some local currency",
      "Nothing at all",
      "Their life jacket"
    ],
    "correct": 1,
    "hit": "Right — those two prevent most problems.",
    "miss": "Guests need their cruise card to reboard, plus some local currency.",
    "id": "cruise-mc-023"
  },
  {
    "q": "A “folio” is:",
    "options": [
      "A shore excursion ticket",
      "The printed statement of a guest’s onboard charges",
      "A cabin key",
      "The dinner menu"
    ],
    "correct": 1,
    "hit": "Correct — delivered before disembarkation.",
    "miss": "A folio is the printed statement of a guest’s onboard charges.",
    "id": "cruise-mc-024"
  },
  {
    "q": "Complete the workplace sentence: Here is a clean _____ .",
    "options": [
      "towel",
      "cup",
      "water",
      "allergy"
    ],
    "correct": 0,
    "hit": "Here is a clean towel. — นี่คือผ้าขนหนูสะอาดค่ะ",
    "miss": "Use “towel”. นี่คือผ้าขนหนูสะอาดค่ะ",
    "vocabularyId": "cruise-v-towel",
    "word": "Towel",
    "added": true,
    "id": "cruise-mc-025"
  },
  {
    "q": "Complete the workplace sentence: Would you like another _____ ?",
    "options": [
      "blanket",
      "cup",
      "water",
      "allergy"
    ],
    "correct": 0,
    "hit": "Would you like another blanket? — ต้องการผ้าห่มเพิ่มไหมคะ",
    "miss": "Use “blanket”. ต้องการผ้าห่มเพิ่มไหมคะ",
    "vocabularyId": "cruise-v-blanket",
    "word": "Blanket",
    "added": true,
    "id": "cruise-mc-026"
  },
  {
    "q": "Complete the workplace sentence: Would you like a smaller _____ ?",
    "options": [
      "pillow",
      "cup",
      "water",
      "allergy"
    ],
    "correct": 0,
    "hit": "Would you like a smaller pillow? — ต้องการหมอนใบเล็กลงไหมคะ",
    "miss": "Use “pillow”. ต้องการหมอนใบเล็กลงไหมคะ",
    "vocabularyId": "cruise-v-pillow",
    "word": "Pillow",
    "added": true,
    "id": "cruise-mc-027"
  },
  {
    "q": "Complete the workplace sentence: Would you like a _____ for your chair?",
    "options": [
      "cushion",
      "cup",
      "water",
      "allergy"
    ],
    "correct": 0,
    "hit": "Would you like a cushion for your chair? — ต้องการหมอนรองเก้าอี้ไหมคะ",
    "miss": "Use “cushion”. ต้องการหมอนรองเก้าอี้ไหมคะ",
    "vocabularyId": "cruise-v-cushion",
    "word": "Cushion",
    "added": true,
    "id": "cruise-mc-028"
  },
  {
    "q": "Complete the workplace sentence: Would you like a fresh _____ ?",
    "options": [
      "sheet",
      "cup",
      "water",
      "allergy"
    ],
    "correct": 0,
    "hit": "Would you like a fresh sheet? — ต้องการผ้าปูที่นอนผืนใหม่ไหมคะ",
    "miss": "Use “sheet”. ต้องการผ้าปูที่นอนผืนใหม่ไหมคะ",
    "vocabularyId": "cruise-v-sheet",
    "word": "Sheet",
    "added": true,
    "id": "cruise-mc-029"
  },
  {
    "q": "Complete the workplace sentence: Would you like a _____ ?",
    "options": [
      "tissue",
      "cup",
      "water",
      "allergy"
    ],
    "correct": 0,
    "hit": "Would you like a tissue? — ต้องการกระดาษเช็ดหน้าไหมคะ",
    "miss": "Use “tissue”. ต้องการกระดาษเช็ดหน้าไหมคะ",
    "vocabularyId": "cruise-v-tissue",
    "word": "Tissue",
    "added": true,
    "id": "cruise-mc-030"
  },
  {
    "q": "Complete the workplace sentence: _____ is beside the washbasin.",
    "options": [
      "Soap",
      "cup",
      "water",
      "allergy"
    ],
    "correct": 0,
    "hit": "Soap is beside the washbasin. — สบู่อยู่ข้างอ่างล้างมือค่ะ",
    "miss": "Use “Soap”. สบู่อยู่ข้างอ่างล้างมือค่ะ",
    "vocabularyId": "cruise-v-soap",
    "word": "Soap",
    "added": true,
    "id": "cruise-mc-031"
  },
  {
    "q": "Complete the workplace sentence: _____ is available in the shower.",
    "options": [
      "Shampoo",
      "cup",
      "water",
      "allergy"
    ],
    "correct": 0,
    "hit": "Shampoo is available in the shower. — มีแชมพูในห้องอาบน้ำค่ะ",
    "miss": "Use “Shampoo”. มีแชมพูในห้องอาบน้ำค่ะ",
    "vocabularyId": "cruise-v-shampoo",
    "word": "Shampoo",
    "added": true,
    "id": "cruise-mc-032"
  },
  {
    "q": "Complete the workplace sentence: The towels are in this _____ .",
    "options": [
      "basket",
      "cup",
      "water",
      "allergy"
    ],
    "correct": 0,
    "hit": "The towels are in this basket. — ผ้าขนหนูอยู่ในตะกร้านี้ค่ะ",
    "miss": "Use “basket”. ผ้าขนหนูอยู่ในตะกร้านี้ค่ะ",
    "vocabularyId": "cruise-v-basket",
    "word": "Basket",
    "added": true,
    "id": "cruise-mc-033"
  },
  {
    "q": "Complete the workplace sentence: I will report the broken _____ .",
    "options": [
      "mirror",
      "cup",
      "water",
      "allergy"
    ],
    "correct": 0,
    "hit": "I will report the broken mirror. — จะรายงานเรื่องกระจกที่แตกค่ะ",
    "miss": "Use “mirror”. จะรายงานเรื่องกระจกที่แตกค่ะ",
    "vocabularyId": "cruise-v-mirror",
    "word": "Mirror",
    "added": true,
    "id": "cruise-mc-034"
  },
  {
    "q": "Complete the workplace sentence: Would you like a _____ of water?",
    "options": [
      "cup",
      "towel",
      "blanket",
      "pillow"
    ],
    "correct": 0,
    "hit": "Would you like a cup of water? — ต้องการน้ำสักถ้วยไหมคะ",
    "miss": "Use “cup”. ต้องการน้ำสักถ้วยไหมคะ",
    "vocabularyId": "cruise-v-cup",
    "word": "Cup",
    "added": true,
    "id": "cruise-mc-035"
  },
  {
    "q": "Complete the workplace sentence: Would you like some _____ ?",
    "options": [
      "water",
      "towel",
      "blanket",
      "pillow"
    ],
    "correct": 0,
    "hit": "Would you like some water? — ต้องการน้ำไหมคะ",
    "miss": "Use “water”. ต้องการน้ำไหมคะ",
    "vocabularyId": "cruise-v-water",
    "word": "Water",
    "added": true,
    "id": "cruise-mc-036"
  },
  {
    "q": "Complete the workplace sentence: Do you have an _____ we should know about?",
    "options": [
      "allergy",
      "towel",
      "blanket",
      "pillow"
    ],
    "correct": 0,
    "hit": "Do you have an allergy we should know about? — มีอาการแพ้ที่เราควรทราบไหมคะ",
    "miss": "Use “allergy”. มีอาการแพ้ที่เราควรทราบไหมคะ",
    "vocabularyId": "cruise-v-allergy",
    "word": "Allergy",
    "added": true,
    "id": "cruise-mc-037"
  },
  {
    "q": "Complete the workplace sentence: Let me check the _____ list.",
    "options": [
      "ingredient",
      "towel",
      "blanket",
      "pillow"
    ],
    "correct": 0,
    "hit": "Let me check the ingredient list. — ขอตรวจสอบรายการส่วนผสมค่ะ",
    "miss": "Use “ingredient”. ขอตรวจสอบรายการส่วนผสมค่ะ",
    "vocabularyId": "cruise-v-ingredient",
    "word": "Ingredient",
    "added": true,
    "id": "cruise-mc-038"
  },
  {
    "q": "Complete the workplace sentence: Are you _____ ?",
    "options": [
      "comfortable",
      "towel",
      "blanket",
      "pillow"
    ],
    "correct": 0,
    "hit": "Are you comfortable? — คุณรู้สึกสบายดีไหมคะ",
    "miss": "Use “comfortable”. คุณรู้สึกสบายดีไหมคะ",
    "vocabularyId": "cruise-v-comfortable",
    "word": "Comfortable",
    "added": true,
    "id": "cruise-mc-039"
  },
  {
    "q": "Complete the workplace sentence: Please tell me if you feel _____ .",
    "options": [
      "uncomfortable",
      "towel",
      "blanket",
      "pillow"
    ],
    "correct": 0,
    "hit": "Please tell me if you feel uncomfortable. — กรุณาบอกหากรู้สึกไม่สบายตัวค่ะ",
    "miss": "Use “uncomfortable”. กรุณาบอกหากรู้สึกไม่สบายตัวค่ะ",
    "vocabularyId": "cruise-v-uncomfortable",
    "word": "Uncomfortable",
    "added": true,
    "id": "cruise-mc-040"
  },
  {
    "q": "Complete the workplace sentence: Is this towel _____ enough?",
    "options": [
      "warm",
      "towel",
      "blanket",
      "pillow"
    ],
    "correct": 0,
    "hit": "Is this towel warm enough? — ผ้าขนหนูผืนนี้อุ่นพอไหมคะ",
    "miss": "Use “warm”. ผ้าขนหนูผืนนี้อุ่นพอไหมคะ",
    "vocabularyId": "cruise-v-warm",
    "word": "Warm",
    "added": true,
    "id": "cruise-mc-041"
  },
  {
    "q": "Complete the workplace sentence: Would you prefer a _____ towel?",
    "options": [
      "cool",
      "towel",
      "blanket",
      "pillow"
    ],
    "correct": 0,
    "hit": "Would you prefer a cool towel? — ต้องการผ้าขนหนูเย็นไหมคะ",
    "miss": "Use “cool”. ต้องการผ้าขนหนูเย็นไหมคะ",
    "vocabularyId": "cruise-v-cool",
    "word": "Cool",
    "added": true,
    "id": "cruise-mc-042"
  },
  {
    "q": "Complete the workplace sentence: Please tell me if the towel feels too _____ .",
    "options": [
      "hot",
      "towel",
      "blanket",
      "pillow"
    ],
    "correct": 0,
    "hit": "Please tell me if the towel feels too hot. — กรุณาบอกหากผ้าขนหนูร้อนเกินไปค่ะ",
    "miss": "Use “hot”. กรุณาบอกหากผ้าขนหนูร้อนเกินไปค่ะ",
    "vocabularyId": "cruise-v-hot",
    "word": "Hot",
    "added": true,
    "id": "cruise-mc-043"
  },
  {
    "q": "Complete the workplace sentence: Are you feeling _____ ?",
    "options": [
      "cold",
      "towel",
      "blanket",
      "pillow"
    ],
    "correct": 0,
    "hit": "Are you feeling cold? — คุณรู้สึกหนาวไหมคะ",
    "miss": "Use “cold”. คุณรู้สึกหนาวไหมคะ",
    "vocabularyId": "cruise-v-cold",
    "word": "Cold",
    "added": true,
    "id": "cruise-mc-044"
  }
];

const CRUISE_TRUE_FALSE_BANK = [
  {
    "statement": "The muster drill is optional if a guest has cruised before.",
    "answer": false,
    "why": "It is required by maritime law for every guest, on every cruise.",
    "id": "cruise-tf-001"
  },
  {
    "statement": "“Starboard” is the right-hand side of the ship when facing forward.",
    "answer": true,
    "why": "Correct — and port side is the left.",
    "id": "cruise-tf-002"
  },
  {
    "statement": "On a ship it is helpful to tell guests something is “upstairs”.",
    "answer": false,
    "why": "Always give the deck number and a direction instead.",
    "id": "cruise-tf-003"
  },
  {
    "statement": "All aboard time follows ship’s time, not local time ashore.",
    "answer": true,
    "why": "Correct — this is exactly how guests miss the ship.",
    "id": "cruise-tf-004"
  },
  {
    "statement": "A tender boat is used when the ship cannot dock at a port.",
    "answer": true,
    "why": "Correct — it carries guests between ship and shore.",
    "id": "cruise-tf-005"
  },
  {
    "statement": "You should tell a guest about an extra charge after serving the drink.",
    "answer": false,
    "why": "Always explain the charge before serving, and let them choose.",
    "id": "cruise-tf-006"
  },
  {
    "statement": "Guests should use the lifts during a muster drill.",
    "answer": false,
    "why": "Stairs only. Lifts may be needed or unsafe in a real emergency.",
    "id": "cruise-tf-007"
  },
  {
    "statement": "A fire door may be propped open if the corridor is busy.",
    "answer": false,
    "why": "Fire doors must stay closed to hold back fire and smoke.",
    "id": "cruise-tf-008"
  },
  {
    "statement": "Turndown service happens in the evening.",
    "answer": true,
    "why": "Correct — the bed is prepared and the cabin tidied for the night.",
    "id": "cruise-tf-009"
  },
  {
    "statement": "“Embarkation” means leaving the ship at the end of a cruise.",
    "answer": false,
    "why": "That is disembarkation. Embarkation is boarding.",
    "id": "cruise-tf-010"
  },
  {
    "statement": "You should confirm your assigned muster station using this ship’s safety information.",
    "answer": true,
    "why": "Do not assume the location is always printed on a particular card.",
    "id": "cruise-tf-011"
  },
  {
    "statement": "It is professional to tell a guest which colleague caused a problem.",
    "answer": false,
    "why": "Apologise and fix it. Guests experience one ship, not separate shifts.",
    "id": "cruise-tf-012"
  },
  {
    "statement": "The general emergency alarm is seven or more short blasts followed by one long blast.",
    "answer": true,
    "why": "Follow the crew’s instructions and the ship’s procedures when the alarm sounds.",
    "id": "cruise-tf-013"
  },
  {
    "statement": "A dietary requirement only means vegetarian food.",
    "answer": false,
    "why": "It covers any food a guest must avoid, for health or belief.",
    "id": "cruise-tf-014"
  },
  {
    "statement": "Crew should refer questions about medication for seasickness to the medical team.",
    "answer": true,
    "why": "Do not prescribe or promise that a drink or medicine will solve the problem.",
    "id": "cruise-tf-015"
  },
  {
    "statement": "Guests need their cruise card to get back on board.",
    "answer": true,
    "why": "Correct — remind them before they go ashore.",
    "id": "cruise-tf-016"
  },
  {
    "statement": "“Port of call” and “port side” mean the same thing.",
    "answer": false,
    "why": "A port of call is a stop; port side is the left of the ship.",
    "id": "cruise-tf-017"
  },
  {
    "statement": "If you cannot answer a guest’s question, it is best to say only “I don’t know”.",
    "answer": false,
    "why": "Offer to find out and give them a time you will return.",
    "id": "cruise-tf-018"
  }
];

const CRUISE_ERROR_BANK = [
  {
    "wrong": "It’s upstairs.",
    "options": [
      "It’s on deck nine, just above us — shall I show you the deck plan?",
      "Somewhere up there.",
      "Go up and look."
    ],
    "correct": 0,
    "why": "On a ship you must give the deck number and a direction.",
    "id": "cruise-error-001"
  },
  {
    "wrong": "You have to go to the drill, it’s the rule.",
    "options": [
      "It’s required by maritime law and takes only fifteen minutes — it keeps everyone safe.",
      "It is compulsory.",
      "No exceptions."
    ],
    "correct": 0,
    "why": "Explaining the reason wins cooperation; citing the rule invites argument.",
    "id": "cruise-error-002"
  },
  {
    "wrong": "You’re late. The ship almost left.",
    "options": [
      "I’m glad you made it back safely — do check tomorrow’s all aboard time.",
      "You should have been earlier.",
      "Next time we leave without you."
    ],
    "correct": 0,
    "why": "Relief plus a forward-looking reminder, not blame.",
    "id": "cruise-error-003"
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
    "id": "cruise-error-004"
  },
  {
    "wrong": "That’s not included. It costs extra.",
    "options": [
      "That one falls just outside your package — there’s a small extra charge. Would you still like it?",
      "You must pay more.",
      "Not in your package."
    ],
    "correct": 0,
    "why": "Tell the guest before you pour, and let them choose.",
    "id": "cruise-error-005"
  },
  {
    "wrong": "Everyone gets seasick, it’s normal.",
    "options": [
      "I’m sorry you feel unwell. I will contact the medical team.",
      "It happens to everybody.",
      "You’ll get used to it."
    ],
    "correct": 0,
    "why": "Acknowledge the guest’s concern and contact the medical team; do not diagnose or give unapproved treatment advice.",
    "id": "cruise-error-006"
  },
  {
    "wrong": "Your cabin is not ready. Wait.",
    "options": [
      "Your stateroom will be ready by two — until then the buffet on deck eleven is open.",
      "Come back later.",
      "Not ready yet."
    ],
    "correct": 0,
    "why": "Give a time, and something to do in the meantime.",
    "id": "cruise-error-007"
  },
  {
    "wrong": "There’s nothing I can do about it.",
    "options": [
      "I’m sorry — let me take your cabin number and speak with my supervisor.",
      "That’s not my department.",
      "You’ll have to accept it."
    ],
    "correct": 0,
    "why": "Never close the conversation. Offer the next step.",
    "id": "cruise-error-008"
  },
  {
    "wrong": "I don’t know.",
    "options": [
      "That’s a good question — let me find out and come back to you within the hour.",
      "Nobody knows.",
      "Ask guest services."
    ],
    "correct": 0,
    "why": "Promising a time turns a dead end into good service.",
    "id": "cruise-error-009"
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
    "id": "cruise-error-010"
  },
  {
    "wrong": "No photos here.",
    "options": [
      "I’m afraid we can’t take photographs in this area — but the promenade deck has a wonderful view.",
      "Photography is banned.",
      "Put your camera away."
    ],
    "correct": 0,
    "why": "Pair the refusal with a better alternative.",
    "id": "cruise-error-011"
  },
  {
    "wrong": "That wasn’t me, it was the night steward.",
    "options": [
      "I’m sorry that happened — let me put it right for you now.",
      "You should speak to him.",
      "It wasn’t my shift."
    ],
    "correct": 0,
    "why": "Guests experience one ship. Deflecting blame breaks their trust.",
    "id": "cruise-error-012"
  }
];

const CRUISE_LISTEN_BANK = [
  {
    "target": "Embarkation",
    "distractors": [
      "Disembarkation",
      "Accessibility",
      "Itinerary"
    ],
    "id": "cruise-listen-001"
  },
  {
    "target": "Disembarkation",
    "distractors": [
      "Embarkation",
      "Gratuity",
      "Amenities"
    ],
    "id": "cruise-listen-002"
  },
  {
    "target": "Muster station",
    "distractors": [
      "Medical centre",
      "Meeting point",
      "Crew mess"
    ],
    "id": "cruise-listen-003"
  },
  {
    "target": "Starboard",
    "distractors": [
      "Port side",
      "Stern",
      "Bow"
    ],
    "id": "cruise-listen-004"
  },
  {
    "target": "Gangway",
    "distractors": [
      "Galley",
      "Atrium",
      "Gratuity"
    ],
    "id": "cruise-listen-005"
  },
  {
    "target": "Gratuity",
    "distractors": [
      "Folio",
      "Upgrade",
      "Itinerary"
    ],
    "id": "cruise-listen-006"
  },
  {
    "target": "Tender boat",
    "distractors": [
      "Lifeboat",
      "Life jacket",
      "Deck plan"
    ],
    "id": "cruise-listen-007"
  },
  {
    "target": "Itinerary",
    "distractors": [
      "Amenities",
      "Accessibility",
      "Curfew"
    ],
    "id": "cruise-listen-008"
  },
  {
    "target": "Amenities",
    "distractors": [
      "Accessibility",
      "Gratuity",
      "Minibar"
    ],
    "id": "cruise-listen-009"
  },
  {
    "target": "Stateroom",
    "distractors": [
      "Interior cabin",
      "Balcony cabin",
      "Crew mess"
    ],
    "id": "cruise-listen-010"
  },
  {
    "target": "Buffet",
    "distractors": [
      "Galley",
      "Wine list",
      "Last call"
    ],
    "id": "cruise-listen-011"
  },
  {
    "target": "Seasickness",
    "distractors": [
      "Special assistance",
      "Mobility assistance",
      "Quiet zone"
    ],
    "id": "cruise-listen-012"
  },
  {
    "target": "Turndown service",
    "distractors": [
      "Linen change",
      "Housekeeping trolley",
      "Do not disturb sign"
    ],
    "id": "cruise-listen-013"
  },
  {
    "target": "Port of call",
    "distractors": [
      "Port side",
      "Sea day",
      "Shore leave"
    ],
    "id": "cruise-listen-014"
  },
  {
    "target": "Accessibility",
    "distractors": [
      "Amenities",
      "Priority boarding",
      "Special assistance"
    ],
    "id": "cruise-listen-015"
  },
  {
    "target": "Cruise card",
    "distractors": [
      "Cabin key card",
      "Boarding pass",
      "Allergy card"
    ],
    "id": "cruise-listen-016"
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
    "id": "cruise-listen-017"
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
    "id": "cruise-listen-018"
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
    "id": "cruise-listen-019"
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
    "id": "cruise-listen-020"
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
    "id": "cruise-listen-021"
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
    "id": "cruise-listen-022"
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
    "id": "cruise-listen-023"
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
    "id": "cruise-listen-024"
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
    "id": "cruise-listen-025"
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
    "id": "cruise-listen-026"
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
    "id": "cruise-listen-027"
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
    "id": "cruise-listen-028"
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
    "id": "cruise-listen-029"
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
    "id": "cruise-listen-030"
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
    "id": "cruise-listen-031"
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
    "id": "cruise-listen-032"
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
    "id": "cruise-listen-033"
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
    "id": "cruise-listen-034"
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
    "id": "cruise-listen-035"
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
    "id": "cruise-listen-036"
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
    "id": "cruise-listen-037"
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
    "id": "cruise-listen-038"
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
    "id": "cruise-listen-039"
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
    "id": "cruise-listen-040"
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
    "id": "cruise-listen-041"
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
    "id": "cruise-listen-042"
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
    "id": "cruise-listen-043"
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
    "id": "cruise-listen-044"
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
    "id": "cruise-listen-045"
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
    "id": "cruise-listen-046"
  }
];

const CRUISE_BUILDER_BANK = [
  {
    "th": "ยินดีต้อนรับขึ้นเรือค่ะ",
    "sentence": "Welcome aboard.",
    "id": "cruise-builder-001"
  },
  {
    "th": "ขอดูบัตรประจำตัวผู้โดยสารหน่อยนะคะ",
    "sentence": "May I see your cruise card?",
    "id": "cruise-builder-002"
  },
  {
    "th": "ห้องพักของคุณอยู่ชั้นเก้าค่ะ",
    "sentence": "Your stateroom is on deck nine.",
    "id": "cruise-builder-003"
  },
  {
    "th": "กรุณาตรวจสอบจุดรวมพลที่กำหนดให้คุณค่ะ",
    "sentence": "Please check your assigned muster station.",
    "id": "cruise-builder-004"
  },
  {
    "th": "เวลากลับขึ้นเรือคือสี่โมงครึ่ง",
    "sentence": "All aboard time is four thirty.",
    "id": "cruise-builder-005"
  },
  {
    "th": "กรุณาปฏิบัติตามคำแนะนำด้านความปลอดภัยของลูกเรือค่ะ",
    "sentence": "Please follow the crew’s safety instructions.",
    "id": "cruise-builder-006"
  },
  {
    "th": "กรุณาปฏิบัติตามคำแนะนำของลูกเรือเกี่ยวกับเสื้อชูชีพค่ะ",
    "sentence": "Please follow the crew’s life jacket instructions.",
    "id": "cruise-builder-007"
  },
  {
    "th": "ท่านมีอาการแพ้อาหารไหมคะ",
    "sentence": "Do you have any food allergies?",
    "id": "cruise-builder-008"
  },
  {
    "th": "ขออนุญาตเก็บจานได้ไหมคะ",
    "sentence": "May I clear these plates?",
    "id": "cruise-builder-009"
  },
  {
    "th": "ขอให้อร่อยนะคะ",
    "sentence": "Enjoy your meal.",
    "id": "cruise-builder-010"
  },
  {
    "th": "เครื่องดื่มนี้รวมในแพ็กเกจของท่านแล้ว",
    "sentence": "That drink is included in your package.",
    "id": "cruise-builder-011"
  },
  {
    "th": "ดิฉันจะติดต่อทีมแพทย์ค่ะ",
    "sentence": "I will contact the medical team.",
    "id": "cruise-builder-012"
  },
  {
    "th": "ดิฉันจะกลับมาจัดเตียงตอนเย็น",
    "sentence": "I will return this evening for turndown service.",
    "id": "cruise-builder-013"
  },
  {
    "th": "กรุณาวางกระเป๋าไว้หน้าห้องพัก",
    "sentence": "Please leave your suitcases outside your cabin.",
    "id": "cruise-builder-014"
  },
  {
    "th": "ขอบคุณที่ร่วมเดินทางกับเรานะคะ",
    "sentence": "Thank you for sailing with us.",
    "id": "cruise-builder-015"
  },
  {
    "th": "ขอไปหาคำตอบให้ทันทีนะคะ",
    "sentence": "Let me find out for you right away.",
    "id": "cruise-builder-016"
  },
  {
    "th": "สวัสดีค่ะ มีอะไรให้ช่วยไหมคะ",
    "sentence": "Hello. How can I help you?",
    "phraseId": "cruise-p-everyday-008",
    "added": true,
    "id": "cruise-builder-017"
  },
  {
    "th": "กรุณาตามมาค่ะ",
    "sentence": "Please follow me.",
    "phraseId": "cruise-p-everyday-009",
    "added": true,
    "id": "cruise-builder-018"
  },
  {
    "th": "ขอตรวจสอบให้ค่ะ",
    "sentence": "Let me check that for you.",
    "phraseId": "cruise-p-everyday-010",
    "added": true,
    "id": "cruise-builder-019"
  },
  {
    "th": "ไม่ต้องรีบนะคะ",
    "sentence": "Please take your time.",
    "phraseId": "cruise-p-everyday-011",
    "added": true,
    "id": "cruise-builder-020"
  },
  {
    "th": "ขอบคุณที่แจ้งให้ทราบค่ะ",
    "sentence": "Thank you for letting me know.",
    "phraseId": "cruise-p-everyday-012",
    "added": true,
    "id": "cruise-builder-021"
  },
  {
    "th": "ขอตรวจสอบหมายเลขห้องพักได้ไหมคะ",
    "sentence": "May I check your cabin number?",
    "phraseId": "cruise-p-embark-007",
    "added": true,
    "id": "cruise-builder-022"
  },
  {
    "th": "ล่องเรือครั้งแรกใช่ไหมคะ",
    "sentence": "Is this your first cruise?",
    "phraseId": "cruise-p-embark-008",
    "added": true,
    "id": "cruise-builder-023"
  },
  {
    "th": "กรุณาเตรียมบัตรขึ้นเรือให้พร้อมค่ะ",
    "sentence": "Please have your boarding pass ready.",
    "phraseId": "cruise-p-embark-009",
    "added": true,
    "id": "cruise-builder-024"
  },
  {
    "th": "ต้องการความช่วยเหลือเรื่องเส้นทางไหมคะ",
    "sentence": "Would you like help with the directions?",
    "phraseId": "cruise-p-embark-010",
    "added": true,
    "id": "cruise-builder-025"
  },
  {
    "th": "ขอตรวจสอบสถานะการนำส่งสัมภาระค่ะ",
    "sentence": "Let me check the delivery status of your luggage.",
    "phraseId": "cruise-p-embark-011",
    "added": true,
    "id": "cruise-builder-026"
  },
  {
    "th": "กรุณาตรวจสอบชื่อบนป้ายสัมภาระค่ะ",
    "sentence": "Please check the name on your luggage tag.",
    "phraseId": "cruise-p-embark-012",
    "added": true,
    "id": "cruise-builder-027"
  },
  {
    "th": "ลูกเรือจะอธิบายการจัดเตรียมด้านความปลอดภัยของวันนี้ค่ะ",
    "sentence": "The crew will explain today's safety arrangements.",
    "phraseId": "cruise-p-embark-013",
    "added": true,
    "id": "cruise-builder-028"
  },
  {
    "th": "ขอเข้าไปได้ไหมคะ",
    "sentence": "May I come in?",
    "phraseId": "cruise-p-cabin-007",
    "added": true,
    "id": "cruise-builder-029"
  },
  {
    "th": "ต้องการผ้าขนหนูสะอาดไหมคะ",
    "sentence": "Would you like fresh towels?",
    "phraseId": "cruise-p-cabin-008",
    "added": true,
    "id": "cruise-builder-030"
  },
  {
    "th": "ต้องการหมอนเพิ่มกี่ใบคะ",
    "sentence": "How many extra pillows do you need?",
    "phraseId": "cruise-p-cabin-009",
    "added": true,
    "id": "cruise-builder-031"
  },
  {
    "th": "ต้องการผ้าห่มเพิ่มไหมคะ",
    "sentence": "Would you like another blanket?",
    "phraseId": "cruise-p-cabin-010",
    "added": true,
    "id": "cruise-builder-032"
  },
  {
    "th": "สะดวกให้ทำความสะอาดกี่โมงคะ",
    "sentence": "What time would be convenient for cleaning?",
    "phraseId": "cruise-p-cabin-011",
    "added": true,
    "id": "cruise-builder-033"
  },
  {
    "th": "ของชิ้นไหนหายไปคะ",
    "sentence": "Which item is missing?",
    "phraseId": "cruise-p-cabin-012",
    "added": true,
    "id": "cruise-builder-034"
  },
  {
    "th": "จะรายงานปัญหาเครื่องปรับอากาศให้ฝ่ายซ่อมบำรุงค่ะ",
    "sentence": "I will report the air-conditioning problem to maintenance.",
    "phraseId": "cruise-p-cabin-013",
    "added": true,
    "id": "cruise-builder-035"
  },
  {
    "th": "พบการรั่วบริเวณไหนคะ",
    "sentence": "Where did you notice the leak?",
    "phraseId": "cruise-p-cabin-014",
    "added": true,
    "id": "cruise-builder-036"
  }
];

const CRUISE_FILL_DIALOGUES = [
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
        "correct": "aboard"
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
        "correct": "stateroom"
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
        "correct": "delivered"
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
        "correct": "muster"
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
        "correct": "instructions"
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
        "correct": "route"
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
        "correct": "enjoy"
      }
    ],
    "trainingExample": true
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
        "correct": "aboard"
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
        "correct": "local"
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
        "correct": "tender"
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
        "correct": "gangway"
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
        "correct": "currency"
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
        "correct": "excursion"
      },
      {
        "speaker": "Guest",
        "before": "Perfect, thank you very much.",
        "after": "",
        "fixed": true
      }
    ],
    "trainingExample": true
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
        "feedback": "Confirm the number before giving directions."
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
        "feedback": "Check the luggage record instead of promising a time."
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
        "feedback": "Verify the label before handing over luggage."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-embark-007",
      "cruise-p-embark-011",
      "cruise-p-embark-012"
    ],
    "trainingExample": true
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
        "feedback": "Check the quantity needed."
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
        "feedback": "Confirm quantity rather than guessing."
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
        "feedback": "Offer an immediate comfort option."
      }
    ],
    "level": 1,
    "phraseIds": [
      "cruise-p-cabin-008",
      "cruise-p-cabin-009",
      "cruise-p-cabin-010"
    ],
    "trainingExample": true
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
        "feedback": "Report the fault without promising an unconfirmed repair time."
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
        "feedback": "Identify the location and follow the safety procedure."
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
        "feedback": "Keep the guest away from the identified hazard and report it."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-cabin-013",
      "cruise-p-cabin-014",
      "cruise-p-cabin-015"
    ],
    "trainingExample": true
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
        "feedback": "Identify yourself first and wait for permission."
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
        "feedback": "Check the requested time against the work schedule."
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
        "feedback": "Confirm the laundry form and applicable charges."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-cabin-007",
      "cruise-p-cabin-011",
      "cruise-p-cabin-016"
    ],
    "trainingExample": true
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
        "feedback": "Check the reservation before seating."
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
        "feedback": "Offer time before taking the order."
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
        "feedback": "Read back dishes and important special requests."
      }
    ],
    "level": 1,
    "phraseIds": [
      "cruise-p-dining-008",
      "cruise-p-dining-010",
      "cruise-p-dining-015"
    ],
    "trainingExample": true
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
        "feedback": "Pass allergy information to the responsible food-service team."
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
        "feedback": "Never guess about allergens."
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
        "feedback": "Do not promise allergen safety without confirmation."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-dining-011",
      "cruise-p-dining-012",
      "cruise-p-dining-013"
    ],
    "trainingExample": true
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
        "feedback": "Confirm the drink and any applicable charge."
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
        "feedback": "Check the guest's preference."
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
        "feedback": "Check the current package conditions."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-bar-007",
      "cruise-p-bar-008",
      "cruise-p-bar-010"
    ],
    "trainingExample": true
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
        "feedback": "Use the actual ship plan."
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
        "feedback": "Training route only; verify the real route before using."
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
        "feedback": "Use current onboard information."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-shipinfo-007",
      "cruise-p-shipinfo-008",
      "cruise-p-shipinfo-012"
    ],
    "trainingExample": true
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
        "feedback": "Ask before helping or touching mobility equipment."
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
        "feedback": "Let the person explain their preference."
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
        "feedback": "Verify the actual route and any current restrictions."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-care-007",
      "cruise-p-care-008",
      "cruise-p-care-011"
    ],
    "trainingExample": true
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
        "feedback": "Identify the tour before giving instructions."
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
        "feedback": "Use the current ticket and meeting instructions."
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
        "feedback": "Do not assume every tour uses the same location."
      }
    ],
    "level": 1,
    "phraseIds": [
      "cruise-p-excursion-007",
      "cruise-p-excursion-008",
      "cruise-p-excursion-011"
    ],
    "trainingExample": true
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
        "feedback": "Distinguish the required return time from departure time."
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
        "feedback": "Never assume the two clocks match."
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
        "feedback": "Give verified information without inventing a reason."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-excursion-009",
      "cruise-p-excursion-010",
      "cruise-p-excursion-012"
    ],
    "trainingExample": true
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
        "feedback": "Refer to the actual account statement."
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
        "feedback": "Verify the transactions before promising a correction."
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
        "feedback": "Provide access through the authorised process."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-account-001",
      "cruise-p-account-005",
      "cruise-p-account-003"
    ],
    "trainingExample": true
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
        "feedback": "Listen first and do not argue."
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
        "feedback": "Read back the essential facts."
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
        "feedback": "Agree on a suitable, private contact method."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-complaints-007",
      "cruise-p-complaints-009",
      "cruise-p-complaints-011"
    ],
    "trainingExample": true
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
        "feedback": "Seek appropriate help rather than diagnosing or prescribing."
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
        "feedback": "Contact the appropriate team and avoid unsupported reassurance."
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
        "feedback": "Offer an alternative communication method."
      }
    ],
    "level": 1,
    "phraseIds": [
      "cruise-p-care-010",
      "cruise-p-care-012",
      "cruise-p-care-009"
    ],
    "trainingExample": true
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
        "feedback": "Hand sanitiser is not a substitute for handwashing against norovirus."
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
        "feedback": "Arrange replenishment through the appropriate team."
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
        "feedback": "Direct the guest to an available handwashing facility."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-hygiene-001",
      "cruise-p-hygiene-004",
      "cruise-p-hygiene-005"
    ],
    "trainingExample": true
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
        "feedback": "Staff handover language, not guest-facing language."
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
        "feedback": "Include the current status without claiming completion."
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
        "feedback": "Check communication as well as task completion."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-crewtalk-007",
      "cruise-p-crewtalk-009",
      "cruise-p-crewtalk-010"
    ],
    "trainingExample": true
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
        "feedback": "Give a helpful reminder without delaying official instructions."
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
        "feedback": "Check the assigned group and instructions."
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
        "feedback": "Confirm the actual transport booking."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-farewell-007",
      "cruise-p-farewell-008",
      "cruise-p-farewell-009"
    ],
    "trainingExample": true
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
        "feedback": "Ask again rather than guessing."
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
        "feedback": "Check similar-sounding numbers."
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
        "feedback": "Read back item names and quantities."
      }
    ],
    "level": 2,
    "phraseIds": [
      "cruise-p-clarifying-001",
      "cruise-p-clarifying-003",
      "cruise-p-clarifying-005"
    ],
    "trainingExample": true
  }
];
