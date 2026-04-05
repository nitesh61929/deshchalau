import type { Scenario } from "@/types/game";

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    year: 2081,
    emoji: "🚫",
    en: {
      title: "Bandh Crisis",
      description:
        "A major opposition party has called a nationwide bandh, shutting down roads, schools, and businesses for 3 days. Hospitals are struggling. The economy is bleeding. All eyes are on Singha Durbar.",
      choices: [
        {
          label: "Negotiate with opposition",
          desc: "Open emergency talks, agree to some demands to end the bandh early.",
          effects: { approval: +8, budget: -5, partyLoyalty: -10, economy: +5 },
          headline:
            "PM holds midnight talks — bandh called off after partial concessions. Party hardliners furious.",
        },
        {
          label: "Deploy security forces",
          desc: "Order police and army to clear roads and ensure movement.",
          effects: {
            approval: -12,
            youthAnger: +15,
            partyLoyalty: +8,
            economy: +3,
          },
          headline:
            "Crackdown on bandh enforcers sparks clashes in Kathmandu. Human rights groups condemn.",
        },
        {
          label: "Wait it out",
          desc: "Let the bandh expire naturally. Do nothing publicly.",
          effects: { approval: -5, budget: -8, economy: -10, partyLoyalty: +3 },
          headline:
            "PM missing as Nepal bleeds — 3 days of silence from Singha Durbar raises questions.",
        },
      ],
    },
    np: {
      title: "बन्द संकट",
      description:
        "एउटा प्रमुख विपक्षी दलले देशव्यापी बन्द घोषणा गरेको छ। सडक, विद्यालय र व्यापार ३ दिनका लागि ठप्प। अस्पतालहरू संघर्ष गर्दैछन्। अर्थतन्त्र घाइते छ। सिंहदरबारतर्फ सबैका आँखा छन्।",
      choices: [
        {
          label: "विपक्षसँग वार्ता गर्नुहोस्",
          desc: "आपतकालीन वार्ता सुरु गर्नुहोस्, केही माग मान्दै बन्द छिटो हटाउनुहोस्।",
          effects: { approval: +8, budget: -5, partyLoyalty: -10, economy: +5 },
          headline:
            "प्रधानमन्त्रीले मध्यरातमा वार्ता गरे — आंशिक सहमतिपछि बन्द फिर्ता। पार्टी कट्टरपन्थी रिसाए।",
        },
        {
          label: "सुरक्षा बल परिचालन गर्नुहोस्",
          desc: "सडक खाली गराउन पुलिस र सेना खटाउनुहोस्।",
          effects: {
            approval: -12,
            youthAnger: +15,
            partyLoyalty: +8,
            economy: +3,
          },
          headline: "काठमाडौंमा झडप — मानवअधिकार समूहले कारबाहीको निन्दा गरे।",
        },
        {
          label: "प्रतीक्षा गर्नुहोस्",
          desc: "बन्द आफैं सकिन दिनुहोस्। सार्वजनिक रूपमा केही नगर्नुहोस्।",
          effects: { approval: -5, budget: -8, economy: -10, partyLoyalty: +3 },
          headline:
            "नेपाल घाइते हुँदा प्रधानमन्त्री हराए — ३ दिनको मौनताले प्रश्न उठायो।",
        },
      ],
    },
  },
  {
    id: 2,
    year: 2082,
    emoji: "💰",
    en: {
      title: "Corruption Scandal",
      description:
        "An investigative journalist has leaked documents showing Rs. 2 billion diverted from a rural infrastructure fund into shell companies linked to your party. The story is trending on social media. Parliament is demanding answers.",
      choices: [
        {
          label: "Launch independent inquiry",
          desc: "Appoint an independent commission to investigate. Suspend the accused officials.",
          effects: {
            approval: +10,
            partyLoyalty: -15,
            budget: -3,
            economy: +3,
          },
          headline:
            "PM orders probe into own party's corruption. Rare show of accountability — or political theater?",
        },
        {
          label: "Blame previous government",
          desc: "Deflect all accusations. Claim the documents are fabricated by the opposition.",
          effects: {
            approval: -8,
            youthAnger: +12,
            partyLoyalty: +10,
            economy: -3,
          },
          headline:
            'PM calls corruption expose "political conspiracy." Public unconvinced. Protests planned.',
        },
        {
          label: "Offer resignations of accused",
          desc: "Ask the implicated ministers to step down. Promise audit reforms.",
          effects: {
            approval: +5,
            partyLoyalty: -8,
            budget: -2,
            youthAnger: -5,
          },
          headline:
            "Three ministers resign amid scandal. PM promises reform — critics say it's not enough.",
        },
      ],
    },
    np: {
      title: "भ्रष्टाचार काण्ड",
      description:
        "एक अनुसन्धानात्मक पत्रकारले ग्रामीण पूर्वाधार कोषबाट २ अर्ब रुपैयाँ तपाईंको पार्टीसँग जोडिएका शेल कम्पनीमा सारिएको कागजात लिक गरे। सामाजिक सञ्जालमा यो चर्चामा छ। संसद जवाफ माग्दैछ।",
      choices: [
        {
          label: "स्वतन्त्र छानबिन सुरु गर्नुहोस्",
          desc: "स्वतन्त्र आयोग गठन गर्नुहोस्। आरोपित अधिकारीलाई निलम्बन गर्नुहोस्।",
          effects: {
            approval: +10,
            partyLoyalty: -15,
            budget: -3,
            economy: +3,
          },
          headline:
            "प्रधानमन्त्रीले आफ्नै पार्टीको भ्रष्टाचार छानबिनको आदेश दिए। जवाफदेहिता कि राजनीतिक नाटक?",
        },
        {
          label: "पूर्व सरकारलाई दोष दिनुहोस्",
          desc: "सबै आरोप अस्वीकार गर्नुहोस्। कागजात विपक्षले बनाएको दाबी गर्नुहोस्।",
          effects: {
            approval: -8,
            youthAnger: +12,
            partyLoyalty: +10,
            economy: -3,
          },
          headline:
            'प्रधानमन्त्रीले भ्रष्टाचार खुलासालाई "राजनीतिक षड्यन्त्र" भने। जनता असन्तुष्ट।',
        },
        {
          label: "आरोपितको राजीनामा माग्नुहोस्",
          desc: "आरोपित मन्त्रीहरूलाई हट्न भन्नुहोस्। लेखापरीक्षण सुधारको वाचा गर्नुहोस्।",
          effects: {
            approval: +5,
            partyLoyalty: -8,
            budget: -2,
            youthAnger: -5,
          },
          headline:
            "काण्डमा तीन मन्त्रीको राजीनामा। प्रधानमन्त्रीले सुधारको वाचा — आलोचकहरू असन्तुष्ट।",
        },
      ],
    },
  },
  {
    id: 3,
    year: 2083,
    emoji: "✊",
    en: {
      title: "Gen Z Protests",
      description:
        "Tens of thousands of young Nepalis are flooding Ratna Park and New Road, demanding electoral reform, anti-corruption laws, and opportunities to stay in Nepal instead of migrating abroad. The movement is leaderless, viral, and angry.",
      choices: [
        {
          label: "Meet protest leaders publicly",
          desc: "Invite representatives to Singha Durbar for live-streamed dialogue.",
          effects: {
            approval: +15,
            youthAnger: -20,
            partyLoyalty: -5,
            budget: -2,
          },
          headline:
            'PM meets Gen Z live on YouTube. Nation watches. "Historic" or "political stunt" — you decide.',
        },
        {
          label: "Announce youth employment package",
          desc: "Unveil a Rs. 5 billion fund for youth startups and skills training.",
          effects: { approval: +8, youthAnger: -10, budget: -15, economy: +5 },
          headline:
            "Rs. 5B youth fund announced. Protesters cautiously optimistic. Economists ask: where's the money?",
        },
        {
          label: "Dismiss as politically motivated",
          desc: "Call the protests foreign-funded disruptions and refuse engagement.",
          effects: {
            approval: -15,
            youthAnger: +25,
            partyLoyalty: +5,
            economy: -5,
          },
          headline:
            'PM brands Gen Z movement "anti-national." Protests triple in size overnight. Diaspora outraged.',
        },
      ],
    },
    np: {
      title: "जेन जेड आन्दोलन",
      description:
        "हजारौं युवा नेपाली रत्नपार्क र न्युरोडमा भेला भएका छन् — निर्वाचन सुधार, भ्रष्टाचारविरोधी कानुन र विदेश पलायन रोक्ने अवसरको माग गर्दैछन्। यो आन्दोलन नेताविहीन, भाइरल र रिसाएको छ।",
      choices: [
        {
          label: "आन्दोलनका नेताहरूसँग सार्वजनिक भेट गर्नुहोस्",
          desc: "प्रतिनिधिहरूलाई सिंहदरबारमा लाइभ स्ट्रिम संवादका लागि बोलाउनुहोस्।",
          effects: {
            approval: +15,
            youthAnger: -20,
            partyLoyalty: -5,
            budget: -2,
          },
          headline:
            'प्रधानमन्त्रीले युट्युबमा जेन जेडसँग लाइभ भेटे। राष्ट्र हेर्यो — "ऐतिहासिक" कि "राजनीतिक नाटक"?',
        },
        {
          label: "युवा रोजगार प्याकेज घोषणा गर्नुहोस्",
          desc: "युवा स्टार्टअप र सीप तालिमका लागि ५ अर्बको कोष घोषणा गर्नुहोस्।",
          effects: { approval: +8, youthAnger: -10, budget: -15, economy: +5 },
          headline:
            "५ अर्बको युवा कोष घोषणा। आन्दोलनकारी सावधानीपूर्वक आशावादी। अर्थशास्त्रीहरूले सोधे: पैसा कहाँबाट?",
        },
        {
          label: "राजनीतिक रूपमा प्रेरित भनेर खारेज गर्नुहोस्",
          desc: "आन्दोलनलाई विदेशी वित्तपोषित गडबडी भन्नुहोस् र संलग्न हुन अस्वीकार गर्नुहोस्।",
          effects: {
            approval: -15,
            youthAnger: +25,
            partyLoyalty: +5,
            economy: -5,
          },
          headline:
            'प्रधानमन्त्रीले जेन जेड आन्दोलनलाई "राष्ट्रविरोधी" भने। आन्दोलन रातारात तेब्बर भयो।',
        },
      ],
    },
  },
  {
    id: 4,
    year: 2081,
    emoji: "🏔️",
    en: {
      title: "Earthquake Emergency",
      description:
        "A 7.2 magnitude earthquake has struck Jajarkot and Rukum. Over 150 are dead, thousands displaced, and villages are cut off by landslides. International aid is pouring in. Your response in the next 72 hours will define your government.",
      choices: [
        {
          label: "Fly to the disaster zone",
          desc: "Lead relief efforts personally. Coordinate army, police, and NGOs from the ground.",
          effects: {
            approval: +18,
            youthAnger: -10,
            budget: -12,
            economy: -3,
          },
          headline:
            "PM on the ground in Jajarkot. Rare show of leadership. Critics question if it disrupts relief logistics.",
        },
        {
          label: "Declare national emergency",
          desc: "Activate the National Disaster Risk Reduction Authority. Release emergency funds immediately.",
          effects: {
            approval: +10,
            budget: -18,
            economy: -5,
            partyLoyalty: +5,
          },
          headline:
            "Government unlocks Rs. 3B emergency fund. Relief reaches victims within 48 hours. International praise.",
        },
        {
          label: "Wait for damage assessment",
          desc: "Order a full assessment before committing funds. Avoid wasting resources.",
          effects: {
            approval: -18,
            youthAnger: +20,
            budget: -3,
            economy: -8,
          },
          headline:
            "Survivors wait for help as government 'assesses.' Social media erupts. #NepalDeservesBetter trends.",
        },
      ],
    },
    np: {
      title: "भूकम्प आपतकाल",
      description:
        "जाजरकोट र रुकुममा ७.२ म्याग्निच्युडको भूकम्प गयो। १५० भन्दा बढी मृत, हजारौं विस्थापित र भूस्खलनले गाउँहरू सम्पर्कविहीन। अन्तर्राष्ट्रिय सहायता आउँदैछ। अर्को ७२ घण्टाको प्रतिक्रियाले तपाईंको सरकारको परिभाषा गर्नेछ।",
      choices: [
        {
          label: "प्रभावित क्षेत्रमा उडान भर्नुहोस्",
          desc: "व्यक्तिगत रूपमा राहत कार्य नेतृत्व गर्नुहोस्। जमिनबाट सेना, पुलिस र एनजिओ समन्वय गर्नुहोस्।",
          effects: {
            approval: +18,
            youthAnger: -10,
            budget: -12,
            economy: -3,
          },
          headline:
            "प्रधानमन्त्री जाजरकोटमा। नेतृत्वको दुर्लभ दृश्य। आलोचकहरूले राहत व्यवस्थापनमा बाधा पर्ने प्रश्न उठाए।",
        },
        {
          label: "राष्ट्रिय आपतकाल घोषणा गर्नुहोस्",
          desc: "राष्ट्रिय विपद् जोखिम न्यूनीकरण प्राधिकरण सक्रिय गर्नुहोस्। आपतकालीन कोष तुरुन्त जारी गर्नुहोस्।",
          effects: {
            approval: +10,
            budget: -18,
            economy: -5,
            partyLoyalty: +5,
          },
          headline:
            "सरकारले ३ अर्बको आपतकालीन कोष खुलायो। ४८ घण्टाभित्र राहत पुग्यो। अन्तर्राष्ट्रिय प्रशंसा।",
        },
        {
          label: "क्षति मूल्यांकनको प्रतीक्षा गर्नुहोस्",
          desc: "कोष प्रतिबद्ध गर्नु अघि पूर्ण मूल्यांकनको आदेश दिनुहोस्।",
          effects: {
            approval: -18,
            youthAnger: +20,
            budget: -3,
            economy: -8,
          },
          headline:
            "सरकार 'मूल्यांकन' गर्दा पीडितहरू प्रतीक्षामा। सामाजिक सञ्जाल आक्रोशित। #NepalDeservesBetter ट्रेन्ड।",
        },
      ],
    },
  },
  {
    id: 5,
    year: 2082,
    emoji: "🗺️",
    en: {
      title: "Border Dispute with India",
      description:
        "India has quietly constructed a road through the Kalapani-Lipulekh-Limpiyadhura triangle, which Nepal's constitution recognizes as its own territory. The public is furious. Nationalist voices are calling for a forceful response. India has not responded to diplomatic notes.",
      choices: [
        {
          label: "Issue formal diplomatic protest",
          desc: "Send a strongly worded note to New Delhi. Raise the issue at the UN.",
          effects: {
            approval: +10,
            youthAnger: -8,
            economy: -5,
            partyLoyalty: +5,
          },
          headline:
            "Nepal files formal protest over Kalapani encroachment. India silent. International community watching.",
        },
        {
          label: "Deploy armed forces to the border",
          desc: "Station additional Nepal Army units at the disputed zone as a show of sovereignty.",
          effects: {
            approval: +5,
            youthAnger: -15,
            economy: -15,
            partyLoyalty: +8,
          },
          headline:
            "Nepal deploys troops to Kalapani. India raises alarm. Trade and aid flows under threat.",
        },
        {
          label: "Pursue quiet bilateral talks",
          desc: "Keep the dispute off public record. Negotiate discreetly with Delhi to preserve relations.",
          effects: {
            approval: -12,
            youthAnger: +18,
            economy: +5,
            partyLoyalty: -8,
          },
          headline:
            "PM chooses secret talks over public stand on Kalapani. Nationalist backlash erupts. 'Sellout' trends.",
        },
      ],
    },
    np: {
      title: "भारतसँग सिमा विवाद",
      description:
        "भारतले नेपालको संविधानले आफ्नै भूमि मान्ने कालापानी-लिपुलेख-लिम्पियाधुरा त्रिकोणमा चुपचाप सडक बनाएको छ। जनता रिसाएका छन्। राष्ट्रवादी स्वरहरूले कडा प्रतिक्रियाको माग गर्दैछन्। भारतले कूटनीतिक नोटको जवाफ दिएको छैन।",
      choices: [
        {
          label: "औपचारिक कूटनीतिक विरोध दर्ता गर्नुहोस्",
          desc: "नयाँ दिल्लीमा कडा नोट पठाउनुहोस्। संयुक्त राष्ट्रसंघमा विषय उठाउनुहोस्।",
          effects: {
            approval: +10,
            youthAnger: -8,
            economy: -5,
            partyLoyalty: +5,
          },
          headline:
            "नेपालले कालापानी अतिक्रमणमा औपचारिक विरोध दर्ता गर्यो। भारत मौन। अन्तर्राष्ट्रिय समुदाय हेर्दैछ।",
        },
        {
          label: "सिमामा सशस्त्र बल तैनाथ गर्नुहोस्",
          desc: "सार्वभौमसत्ताको प्रदर्शनस्वरूप विवादित क्षेत्रमा नेपाली सेनाका थप टोली राख्नुहोस्।",
          effects: {
            approval: +5,
            youthAnger: -15,
            economy: -15,
            partyLoyalty: +8,
          },
          headline:
            "नेपालले कालापानीमा सेना खटायो। भारतले चिन्ता जनायो। व्यापार र सहायता प्रवाहमा खतरा।",
        },
        {
          label: "शान्त द्विपक्षीय वार्ता अगाडि बढाउनुहोस्",
          desc: "विवाद सार्वजनिक अभिलेखबाहिर राख्नुहोस्। सम्बन्ध जोगाउन दिल्लीसँग गोप्य वार्ता गर्नुहोस्।",
          effects: {
            approval: -12,
            youthAnger: +18,
            economy: +5,
            partyLoyalty: -8,
          },
          headline:
            "प्रधानमन्त्रीले कालापानीमा सार्वजनिक अडान सट्टा गोप्य वार्ता रोजे। राष्ट्रवादी आक्रोश। 'बिक्री' ट्रेन्ड।",
        },
      ],
    },
  },
  {
    id: 6,
    year: 2083,
    emoji: "🇨🇳",
    en: {
      title: "China BRI Mega Deal",
      description:
        "Beijing is offering a Rs. 80 billion Belt and Road Initiative package — a trans-Himalayan railway, two new highways, and a dry port at Kerung. The terms include a 30-year lease on the Kerung port and Chinese-managed security zones. India is alarmed. Civil society has concerns.",
      choices: [
        {
          label: "Accept the full package",
          desc: "Sign all agreements. Fast-track the railway project for national development.",
          effects: {
            approval: +8,
            budget: +20,
            economy: +10,
            partyLoyalty: +5,
          },
          headline:
            "Nepal signs Rs. 80B BRI deal. Railway dreams alive. India recalls ambassador. Debt-trap fears grow.",
        },
        {
          label: "Accept partially, renegotiate terms",
          desc: "Take the highways but reject the 30-year port lease and security zones.",
          effects: {
            approval: +12,
            budget: +8,
            economy: +5,
            partyLoyalty: -5,
          },
          headline:
            "Nepal accepts BRI roads, rejects port lease. China calls it 'constructive.' India cautiously relieved.",
        },
        {
          label: "Decline and reaffirm neutrality",
          desc: "Reject the deal. Issue a statement reaffirming Nepal's non-aligned foreign policy.",
          effects: {
            approval: +5,
            budget: -5,
            economy: -8,
            youthAnger: +10,
          },
          headline:
            "Nepal walks away from BRI. China disappointed. Western donors applaud. Youth ask: so when does development happen?",
        },
      ],
    },
    np: {
      title: "चीनको बीआरआई महासम्झौता",
      description:
        "बेइजिङले ८० अर्बको बेल्ट एन्ड रोड इनिशिएटिभ प्याकेज प्रस्ताव गरेको छ — ट्रान्स-हिमालयन रेलवे, दुई नयाँ राजमार्ग र केरुङमा ड्राई पोर्ट। सर्तमा केरुङ बन्दरगाहको ३० वर्षे भाडा र चिनियाँ-व्यवस्थित सुरक्षा क्षेत्र समावेश छ। भारत चिन्तित छ। नागरिक समाजलाई आपत्ति छ।",
      choices: [
        {
          label: "पूर्ण प्याकेज स्वीकार गर्नुहोस्",
          desc: "सबै सम्झौतामा हस्ताक्षर गर्नुहोस्। राष्ट्रिय विकासका लागि रेलवे परियोजना द्रुत गर्नुहोस्।",
          effects: {
            approval: +8,
            budget: +20,
            economy: +10,
            partyLoyalty: +5,
          },
          headline:
            "नेपालले ८० अर्बको बीआरआई सम्झौतामा हस्ताक्षर गर्यो। रेलको सपना जीवित। भारतले राजदूत फिर्ता बोलायो। ऋण पासोको डर बढ्यो।",
        },
        {
          label: "आंशिक स्वीकार, सर्त पुनःवार्ता गर्नुहोस्",
          desc: "राजमार्ग लिनुहोस् तर ३० वर्षे बन्दरगाह भाडा र सुरक्षा क्षेत्र अस्वीकार गर्नुहोस्।",
          effects: {
            approval: +12,
            budget: +8,
            economy: +5,
            partyLoyalty: -5,
          },
          headline:
            "नेपालले बीआरआई सडक स्वीकार्यो, बन्दरगाह भाडा अस्वीकार गर्यो। चीनले 'रचनात्मक' भन्यो। भारत सावधानीपूर्वक राहतमा।",
        },
        {
          label: "अस्वीकार गरी तटस्थता पुष्टि गर्नुहोस्",
          desc: "सम्झौता अस्वीकार गर्नुहोस्। नेपालको असंलग्न विदेश नीति पुनः पुष्टि गर्ने वक्तव्य जारी गर्नुहोस्।",
          effects: {
            approval: +5,
            budget: -5,
            economy: -8,
            youthAnger: +10,
          },
          headline:
            "नेपालले बीआरआईबाट पछि हट्यो। चीन निराश। पश्चिमी दाताहरू प्रशंसामा। युवाले सोधे: विकास कहिले हुन्छ?",
        },
      ],
    },
  },
  {
    id: 7,
    year: 2081,
    emoji: "⛽",
    en: {
      title: "Fuel Supply Crisis",
      description:
        "An unofficial Indian trade disruption has cut Nepal's petroleum imports by 60% for two weeks. Long queues snake outside petrol stations. Cooking gas is almost gone. Hospitals are rationing generator fuel. The black market is thriving.",
      choices: [
        {
          label: "Emergency fuel from China",
          desc: "Urgently import diesel and petrol via Rasuwagadhi crossing from China.",
          effects: {
            approval: +10,
            economy: -8,
            budget: -12,
            partyLoyalty: +5,
          },
          headline:
            "Nepal airlifts fuel from China amid India disruption. Queues shorten. Relations with Delhi strained further.",
        },
        {
          label: "Impose fuel rationing by odd-even plates",
          desc: "Introduce vehicle rationing system. Prioritize hospitals, essential services.",
          effects: {
            approval: -5,
            youthAnger: +10,
            economy: -5,
            budget: -3,
          },
          headline:
            "Odd-even fuel rationing begins. Commuters frustrated but hospitals report steady supply.",
        },
        {
          label: "Open diplomatic back-channel with India",
          desc: "Send a secret envoy to resolve the dispute. Agree to trade concessions.",
          effects: {
            approval: -8,
            economy: +10,
            budget: -5,
            partyLoyalty: -10,
          },
          headline:
            "Fuel flows resume after secret Nepal-India deal. Terms undisclosed. Opposition calls it 'surrender.'",
        },
      ],
    },
    np: {
      title: "इन्धन आपूर्ति संकट",
      description:
        "अनौपचारिक भारतीय व्यापार अवरोधले नेपालको पेट्रोलियम आयात दुई हप्तासम्म ६०% कटौती गरेको छ। पेट्रोल स्टेसनबाहिर लामा लाइन। खाना पकाउने ग्यास लगभग सकियो। अस्पतालहरूले जेनेरेटर इन्धन राशनिङ गर्दैछन्। कालोबजार फस्टाउँदैछ।",
      choices: [
        {
          label: "चीनबाट आपतकालीन इन्धन",
          desc: "चीनको रसुवागढी नाकाबाट डिजेल र पेट्रोल तुरुन्त आयात गर्नुहोस्।",
          effects: {
            approval: +10,
            economy: -8,
            budget: -12,
            partyLoyalty: +5,
          },
          headline:
            "नेपालले भारतीय अवरोधका बीच चीनबाट इन्धन ल्यायो। लाइन छोटियो। दिल्लीसँग सम्बन्ध थप तनावपूर्ण।",
        },
        {
          label: "बिजोर्‍-सम्बर प्लेटद्वारा इन्धन राशनिङ",
          desc: "सवारी राशनिङ प्रणाली लागू गर्नुहोस्। अस्पताल र आवश्यक सेवालाई प्राथमिकता दिनुहोस्।",
          effects: {
            approval: -5,
            youthAnger: +10,
            economy: -5,
            budget: -3,
          },
          headline:
            "बिजोर्‍-सम्बर इन्धन राशनिङ सुरु। यात्रुहरू निराश तर अस्पतालहरूले नियमित आपूर्ति रिपोर्ट गरे।",
        },
        {
          label: "भारतसँग गोप्य कूटनीतिक वार्ता गर्नुहोस्",
          desc: "विवाद समाधानका लागि गोप्य दूत पठाउनुहोस्। व्यापार रियायतमा सहमत हुनुहोस्।",
          effects: {
            approval: -8,
            economy: +10,
            budget: -5,
            partyLoyalty: -10,
          },
          headline:
            "गोप्य नेपाल-भारत सम्झौतापछि इन्धन आपूर्ति पुनः सुरु। सर्तहरू अज्ञात। विपक्षले 'आत्मसमर्पण' भन्यो।",
        },
      ],
    },
  },
  {
    id: 8,
    year: 2082,
    emoji: "🏛️",
    en: {
      title: "Coalition Collapse",
      description:
        "Your junior coalition partner has pulled all its ministers from cabinet over a disputed ministerial post, leaving your government in a minority. A no-confidence motion has been tabled. You have 72 hours to patch the coalition or face collapse.",
      choices: [
        {
          label: "Give in to their demands",
          desc: "Hand over the disputed Home Ministry to the coalition partner. Keep the government intact.",
          effects: {
            approval: -5,
            partyLoyalty: -15,
            economy: +5,
            youthAnger: +8,
          },
          headline:
            "PM surrenders Home Ministry to save coalition. Party furious. Analysts call it 'necessary pragmatism.'",
        },
        {
          label: "Court a new coalition partner",
          desc: "Invite a rival faction from another party to join the government with new incentives.",
          effects: {
            approval: +5,
            partyLoyalty: -8,
            budget: -10,
            economy: -3,
          },
          headline:
            "PM cobbles new coalition in record 48 hours. Critics call the deal shady. Government survives — for now.",
        },
        {
          label: "Call snap mid-term elections",
          desc: "Dissolve parliament and go to the people. A bold gamble on public mandate.",
          effects: {
            approval: +12,
            youthAnger: -8,
            budget: -20,
            economy: -10,
          },
          headline:
            "PM dissolves parliament, calls election. Supreme Court scrutiny begins. Political crisis deepens.",
        },
      ],
    },
    np: {
      title: "गठबन्धन पतन",
      description:
        "तपाईंको जुनियर गठबन्धन साझेदारले विवादित मन्त्रालय पदको कारण सबै मन्त्री क्याबिनेटबाट फिर्ता लियो। सरकार अल्पमतमा। अविश्वासको प्रस्ताव दर्ता भयो। गठबन्धन जोगाउन वा पतन सामना गर्न ७२ घण्टा छ।",
      choices: [
        {
          label: "उनीहरूको माग मान्नुहोस्",
          desc: "विवादित गृह मन्त्रालय गठबन्धन साझेदारलाई दिनुहोस्। सरकार बचाउनुहोस्।",
          effects: {
            approval: -5,
            partyLoyalty: -15,
            economy: +5,
            youthAnger: +8,
          },
          headline:
            "प्रधानमन्त्रीले गठबन्धन बचाउन गृह मन्त्रालय छाडे। पार्टी रिसाइ। विश्लेषकले 'आवश्यक व्यावहारिकता' भने।",
        },
        {
          label: "नयाँ गठबन्धन साझेदार खोज्नुहोस्",
          desc: "नयाँ प्रोत्साहनसहित अर्को पार्टीका प्रतिद्वन्द्वी गुटलाई सरकारमा आमन्त्रण दिनुहोस्।",
          effects: {
            approval: +5,
            partyLoyalty: -8,
            budget: -10,
            economy: -3,
          },
          headline:
            "प्रधानमन्त्रीले ४८ घण्टामा नयाँ गठबन्धन बनाए। आलोचकले सम्झौतालाई अपारदर्शी भने। सरकार बच्यो — अहिलेलाई।",
        },
        {
          label: "मध्यावधि चुनाव घोषणा गर्नुहोस्",
          desc: "संसद विघटन गरी जनतामा जानुहोस्। जनादेशमा साहसी जुवा।",
          effects: {
            approval: +12,
            youthAnger: -8,
            budget: -20,
            economy: -10,
          },
          headline:
            "प्रधानमन्त्रीले संसद विघटन गरे, चुनाव घोषणा गरे। सर्वोच्च अदालतको जाँच सुरु। राजनीतिक संकट गहिरियो।",
        },
      ],
    },
  },
  {
    id: 9,
    year: 2083,
    emoji: "✈️",
    en: {
      title: "Remittance Economy Shock",
      description:
        "Gulf countries have announced a 40% quota cut on Nepali migrant workers following a diplomatic incident. Remittances fund 25% of Nepal's GDP. Families in the hills are already feeling the squeeze. The labor ministry is overwhelmed.",
      choices: [
        {
          label: "High-level diplomatic mission to Gulf",
          desc: "Send the Foreign Minister to Riyadh, Dubai, and Doha to renegotiate worker quotas.",
          effects: {
            approval: +12,
            economy: +8,
            budget: -5,
            partyLoyalty: +3,
          },
          headline:
            "Nepal FM's Gulf tour secures 60% quota restoration. Migrant families relieved. Full restoration still pending.",
        },
        {
          label: "Open new labor markets in Europe and Japan",
          desc: "Fast-track bilateral labor agreements with South Korea, Japan, and Germany.",
          effects: {
            approval: +8,
            economy: +5,
            budget: -8,
            youthAnger: -12,
          },
          headline:
            "Nepal signs labor pacts with Japan and Germany. New pathways open. Gulf dependency begins to ease.",
        },
        {
          label: "Domestic job creation emergency plan",
          desc: "Launch an emergency Rs. 10B domestic employment program to reduce migration dependency.",
          effects: {
            approval: +5,
            budget: -20,
            economy: +3,
            youthAnger: -8,
          },
          headline:
            "Government unveils Rs. 10B domestic jobs plan. Economists skeptical. Execution is everything.",
        },
      ],
    },
    np: {
      title: "रेमिट्यान्स अर्थतन्त्र धक्का",
      description:
        "कूटनीतिक घटनाको कारण खाडी मुलुकहरूले नेपाली आप्रवासी कामदारको कोटा ४०% कटौती गरेको घोषणा गरे। रेमिट्यान्सले नेपालको जिडिपीको २५% धान्छ। पहाडका परिवारहरू पहिल्यै चाप महसुस गर्दैछन्। श्रम मन्त्रालय अभिभूत छ।",
      choices: [
        {
          label: "खाडीमा उच्चस्तरीय कूटनीतिक मिसन",
          desc: "कामदार कोटा पुनःवार्ताका लागि परराष्ट्र मन्त्रीलाई रियाद, दुबई र दोहा पठाउनुहोस्।",
          effects: {
            approval: +12,
            economy: +8,
            budget: -5,
            partyLoyalty: +3,
          },
          headline:
            "नेपाल परराष्ट्र मन्त्रीको खाडी भ्रमणले ६०% कोटा पुनर्स्थापना सुनिश्चित गर्यो। पूर्ण पुनर्स्थापना बाँकी।",
        },
        {
          label: "युरोप र जापानमा नयाँ श्रम बजार खोल्नुहोस्",
          desc: "दक्षिण कोरिया, जापान र जर्मनीसँग द्विपक्षीय श्रम सम्झौता द्रुत गर्नुहोस्।",
          effects: {
            approval: +8,
            economy: +5,
            budget: -8,
            youthAnger: -12,
          },
          headline:
            "नेपालले जापान र जर्मनीसँग श्रम सम्झौता गर्यो। नयाँ मार्ग खुले। खाडी निर्भरता घट्न थाल्यो।",
        },
        {
          label: "स्वदेशी रोजगार सृजना आपतकालीन योजना",
          desc: "आप्रवासन निर्भरता घटाउन १० अर्बको स्वदेशी रोजगार कार्यक्रम सुरु गर्नुहोस्।",
          effects: {
            approval: +5,
            budget: -20,
            economy: +3,
            youthAnger: -8,
          },
          headline:
            "सरकारले १० अर्बको स्वदेशी रोजगार योजना ल्यायो। अर्थशास्त्री शङ्कित। कार्यान्वयन नै सबथोक हो।",
        },
      ],
    },
  },
  {
    id: 10,
    year: 2081,
    emoji: "💡",
    en: {
      title: "Load Shedding Returns",
      description:
        "A severe drought has cut Nepal's hydropower output by 45%. Load shedding of up to 14 hours a day is back for the first time in a decade. Industries are shutting down. Hospitals are running on generators. The NEA chief has resigned.",
      choices: [
        {
          label: "Emergency power import from India",
          desc: "Purchase emergency power from India at peak-hour rates to keep cities lit.",
          effects: {
            approval: +8,
            budget: -15,
            economy: +5,
            partyLoyalty: -3,
          },
          headline:
            "Nepal imports record power from India. Load shedding cut to 4 hours. Price tag draws criticism.",
        },
        {
          label: "Ration power by industry vs residential",
          desc: "Prioritize hospitals and homes. Reduce power to industries during peak drought.",
          effects: {
            approval: +5,
            economy: -12,
            youthAnger: +8,
            budget: -3,
          },
          headline:
            "Industry rationing begins. Factories idle. Human cost lower — economic cost higher.",
        },
        {
          label: "Fast-track new hydro projects",
          desc: "Announce emergency clearance for 5 stalled hydropower projects. Invite private investment.",
          effects: {
            approval: +10,
            budget: -8,
            economy: +8,
            youthAnger: -5,
          },
          headline:
            "PM fast-tracks 5 hydro projects. Investors respond. Light at the end of the tunnel — literally.",
        },
      ],
    },
    np: {
      title: "लोडसेडिङ फर्कियो",
      description:
        "गम्भीर खडेरीले नेपालको जलविद्युत उत्पादन ४५% घटायो। एक दशकपछि पहिलोपटक दैनिक १४ घण्टासम्म लोडसेडिङ फर्कियो। उद्योगहरू बन्द हुँदैछन्। अस्पतालहरू जेनेरेटरमा चल्दैछन्। नेपाल विद्युत प्राधिकरणका प्रमुखले राजीनामा दिए।",
      choices: [
        {
          label: "भारतबाट आपतकालीन बिजुली आयात",
          desc: "सहर उज्यालो राख्न भारतबाट पिक-आवर दरमा आपतकालीन बिजुली खरिद गर्नुहोस्।",
          effects: {
            approval: +8,
            budget: -15,
            economy: +5,
            partyLoyalty: -3,
          },
          headline:
            "नेपालले भारतबाट रेकर्ड बिजुली आयात गर्यो। लोडसेडिङ ४ घण्टामा झर्यो। मूल्यमा आलोचना।",
        },
        {
          label: "उद्योग बनाम आवासीयमा बिजुली राशनिङ",
          desc: "अस्पताल र घरलाई प्राथमिकता दिनुहोस्। चरम खडेरीमा उद्योगको बिजुली घटाउनुहोस्।",
          effects: {
            approval: +5,
            economy: -12,
            youthAnger: +8,
            budget: -3,
          },
          headline:
            "उद्योग राशनिङ सुरु। कारखाना ठप्प। मानवीय लागत कम — आर्थिक लागत बढी।",
        },
        {
          label: "नयाँ जलविद्युत परियोजना द्रुत गर्नुहोस्",
          desc: "रोकिएका ५ जलविद्युत परियोजनालाई आपतकालीन स्वीकृति घोषणा गर्नुहोस्। निजी लगानी आमन्त्रण गर्नुहोस्।",
          effects: {
            approval: +10,
            budget: -8,
            economy: +8,
            youthAnger: -5,
          },
          headline:
            "प्रधानमन्त्रीले ५ जलविद्युत परियोजना द्रुत गरे। लगानीकर्ता आकर्षित। सुरुङको अन्त्यमा उज्यालो — शाब्दिक रूपमा।",
        },
      ],
    },
  },
];
