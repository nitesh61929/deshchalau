import type { GameState, MeterConfig } from "@/types/game";
import { SCENARIOS } from "@/data/scenarios";

export const GAME_SCENARIO_COUNT = 5;

function pickRandomQueue(count: number): number[] {
  const indices = SCENARIOS.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, count);
}

export function createInitialState(): GameState {
  const queue = pickRandomQueue(GAME_SCENARIO_COUNT);
  return {
    approval: 60,
    budget: 60,
    youthAnger: 40,
    economy: 55,
    partyLoyalty: 65,
    year: 2081,
    phase: "event",
    scenarioIndex: 0,
    scenarioQueue: queue,
    headline: null,
    selectedChoice: null,
    selectedChoiceIndex: null,
    gameOver: false,
    gameOverReason: "",
    won: false,
    history: [],
    animating: false,
  };
}

export const METER_CONFIG: Record<string, MeterConfig> = {
  approval: {
    label: "Public Approval",
    emoji: "📊",
    color: "bg-green-500",
    dangerThreshold: 20,
  },
  budget: {
    label: "National Budget",
    emoji: "💰",
    color: "bg-yellow-500",
    unit: "%",
    dangerThreshold: 15,
  },
  youthAnger: {
    label: "Youth Anger",
    emoji: "✊",
    color: "bg-red-500",
    inverted: true,
    dangerThreshold: 85,
  },
  economy: {
    label: "Economy",
    emoji: "📈",
    color: "bg-blue-400",
    dangerThreshold: 20,
  },
  partyLoyalty: {
    label: "Party Loyalty",
    emoji: "🏛️",
    color: "bg-purple-500",
    dangerThreshold: 15,
  },
};
