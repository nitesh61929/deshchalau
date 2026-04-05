import type { GameState } from "@/types/game";
import type { GameAction } from "./gameActions";
import { applyEffects, checkGameOver } from "@/lib/game/logic";
import { createInitialState, GAME_SCENARIO_COUNT } from "@/lib/game/constants";
import { SCENARIOS } from "@/data/scenarios";

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "CHOOSE": {
      const next = applyEffects(state, action.payload.choice.effects);
      const reason = checkGameOver(next);
      const currentScenario = SCENARIOS[state.scenarioQueue[state.scenarioIndex]];
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
                scenarioTitle: currentScenario.en.title,
                choiceLabel: action.payload.choice.label,
                effects: action.payload.choice.effects,
              },
            ],
      };
    }
    case "NEXT_ROUND": {
      const isLast = state.scenarioIndex >= GAME_SCENARIO_COUNT - 1;
      if (isLast) return { ...state, won: true };
      const nextIndex = state.scenarioIndex + 1;
      return {
        ...state,
        scenarioIndex: nextIndex,
        year: state.year + 1,
        phase: "event",
        headline: null,
        selectedChoice: null,
        selectedChoiceIndex: null,
        animating: false,
      };
    }
    case "RESTART":
      return createInitialState();
    case "SET_ANIMATING":
      return { ...state, animating: action.payload };
    default:
      return state;
  }
}
