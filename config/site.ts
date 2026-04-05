import type { Lang } from "@/types/game";

export const siteConfig = {
  name: "DeshChalau",
  nameNp: "देश चलाउ",
  tagline: "Can you govern Nepal for 5 years?",
  taglineNp: "नेपाल चलाउन सक्नुहुन्छ?",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://deshchalau.vercel.app",
  ogImage: "/og-image.png",
  scenarioCount: {
    phase1A: 3,
    phase1B: 9,
  },
  leaderboard: {
    topN: 50,
    weeklyResetDay: "Monday",
    weeklyResetTimeUTC: "00:00",
  },
  audio: {
    storageKey: "deshchalau-muted",
  },
  lang: {
    storageKey: "deshchalau-lang",
    default: "np" as Lang,
  },
};
