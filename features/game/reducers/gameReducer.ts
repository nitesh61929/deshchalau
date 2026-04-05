import type { GameState } from "@/types/game";
import type { GameAction } from "./gameActions";
import { applyEffects, checkGameOver } from "@/lib/game/logic";
import { INITIAL_STATE } from "@/lib/game/constants";
import { SCENARIOS } from "@/data/scenarios";

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "CHOOSE": {
      const next = applyEffects(state, action.payload.choice.effects);
      const reason = checkGameOver(next);
      return {
        ...next,
        selectedChoice: action.payload.choice,
        selectedChoiceIndex: action.payload.index,
        headline: action.payload.choice.headline,
        gameOver: !!reason,
        gameOverReason: reason ?? "",
        phase: "headline",
        history: reason
          ? state.history
          : [
              ...state.history,
              {
                scenarioTitle: SCENARIOS[state.scenarioIndex].en.title,
                choiceLabel: action.payload.choice.label,
                effects: action.payload.choice.effects,
              },
            ],
      };
    }
    case "NEXT_ROUND": {
      const isLast = state.scenarioIndex >= SCENARIOS.length - 1;
      if (isLast) return { ...state, won: true };
      const next = SCENARIOS[state.scenarioIndex + 1];
      return {
        ...state,
        scenarioIndex: state.scenarioIndex + 1,
        year: next.year,
        phase: "event",
        headline: null,
        selectedChoice: null,
        selectedChoiceIndex: null,
        animating: false,
      };
    }
    case "RESTART":
      return INITIAL_STATE;
    case "SET_ANIMATING":
      return { ...state, animating: action.payload };
    default:
      return state;
  }
}
