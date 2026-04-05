import type { GameState, Legacy } from "@/types/game";

export function calculateScore(state: GameState): number {
  const { approval, budget, youthAnger, economy, partyLoyalty } = state;
  const angerPenalty = 100 - youthAnger;
  return Math.round(
    (approval + budget + angerPenalty + economy + partyLoyalty) / 5,
  );
}

export const LEGACIES: Legacy[] = [
  {
    title: "Visionary Leader",
    desc: "Nepal flourished under your wise and courageous leadership.",
    color: "text-gold",
  },
  {
    title: "Steady Hand",
    desc: "You kept Nepal stable through turbulent times.",
    color: "text-green-400",
  },
  {
    title: "Mediocre PM",
    desc: "You survived. Nepal survived. Barely.",
    color: "text-yellow-400",
  },
  {
    title: "Forgettable Figure",
    desc: "History will not remember your name fondly.",
    color: "text-orange-400",
  },
  {
    title: "National Disaster",
    desc: "Your tenure will be studied as a cautionary tale.",
    color: "text-red-400",
  },
];

export function getLegacy(score: number): Legacy {
  if (score >= 80) return LEGACIES[0];
  if (score >= 65) return LEGACIES[1];
  if (score >= 50) return LEGACIES[2];
  if (score >= 35) return LEGACIES[3];
  return LEGACIES[4];
}
