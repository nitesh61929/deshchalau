import type { Choice, Scenario } from "@/types/game";

export type GameAction =
  | { type: "CHOOSE"; payload: { choice: Choice; index: number } }
  | { type: "NEXT_ROUND" }
  | { type: "RESTART" }
  | { type: "SET_ANIMATING"; payload: boolean }
  | { type: "SET_DAILY_SCENARIO"; payload: Scenario };
