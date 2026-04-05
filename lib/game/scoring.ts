import type { GameState } from "@/types/game";

export type LegacyKey =
  | "visionary"
  | "steady"
  | "mediocre"
  | "forgettable"
  | "disaster";

export const LEGACY_COLORS: Record<LegacyKey, string> = {
  visionary: "text-gold",
  steady: "text-green-400",
  mediocre: "text-yellow-400",
  forgettable: "text-orange-400",
  disaster: "text-red-400",
};

export function calculateScore(state: GameState): number {
  const { approval, budget, youthAnger, economy, partyLoyalty } = state;
  const angerPenalty = 100 - youthAnger;
  return Math.round(
    (approval + budget + angerPenalty + economy + partyLoyalty) / 5,
  );
}

export function getLegacyKey(score: number): LegacyKey {
  if (score >= 80) return "visionary";
  if (score >= 65) return "steady";
  if (score >= 50) return "mediocre";
  if (score >= 35) return "forgettable";
  return "disaster";
}
