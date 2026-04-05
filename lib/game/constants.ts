import type { GameState, MeterConfig } from "@/types/game";
import { SCENARIOS } from "@/data/scenarios";

export const INITIAL_STATE: GameState = {
  approval: 60,
  budget: 60,
  youthAnger: 40,
  economy: 55,
  partyLoyalty: 65,
  year: SCENARIOS[0].year,
  phase: "event",
  scenarioIndex: 0,
  headline: null,
  selectedChoice: null,
  selectedChoiceIndex: null,
  gameOver: false,
  gameOverReason: "",
  won: false,
  history: [],
  animating: false,
};

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
