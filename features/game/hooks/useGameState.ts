"use client";

import { useReducer, useCallback } from "react";
import { gameReducer } from "../reducers/gameReducer";
import { INITIAL_STATE } from "@/lib/game/constants";
import type { Choice } from "@/types/game";

export function useGameState() {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  const choose = useCallback((choice: Choice, index: number) => {
    dispatch({ type: "CHOOSE", payload: { choice, index } });
  }, []);

  const nextRound = useCallback(() => {
    dispatch({ type: "NEXT_ROUND" });
  }, []);

  const restart = useCallback(() => {
    dispatch({ type: "RESTART" });
  }, []);

  return { state, choose, nextRound, restart };
}
