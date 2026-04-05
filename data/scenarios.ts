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
];
