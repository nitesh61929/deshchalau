import type { GameState, Effects, MeterKey } from "@/types/game";

const METER_KEYS: MeterKey[] = [
  "approval",
  "budget",
  "youthAnger",
  "economy",
  "partyLoyalty",
];

export function clamp(value: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, value));
}

export function applyEffects(state: GameState, effects: Effects): GameState {
  const next = { ...state };
  for (const key of METER_KEYS) {
    if (effects[key] !== undefined) {
      next[key] = clamp(state[key] + (effects[key] ?? 0));
    }
  }
  return next;
}

export function checkGameOver(state: GameState): string | null {
  if (state.approval <= 10)
    return "Public trust has collapsed. You have been removed from office.";
  if (state.budget <= 5)
    return "The national treasury is empty. Nepal cannot function.";
  if (state.youthAnger >= 95)
    return "Youth rage has boiled over. Revolution has begun.";
  if (state.economy <= 5) return "Economic collapse. Nepal is bankrupt.";
  if (state.partyLoyalty <= 5) return "Your own party has voted to oust you.";
  return null;
}
