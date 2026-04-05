"use client";

import { motion } from "framer-motion";
import { useGame } from "../context/GameContext";

export function HeadlineCard() {
  const { state, nextRound, t, lang } = useGame();

  if (!state.headline) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-paper border border-accent/40 rounded-lg p-5 mt-4"
    >
      <div className="text-xs text-accent font-mono mb-2 tracking-widest uppercase">
        {t("game.breakingNews")}
      </div>
      <hr className="newspaper-rule" />
      <p
        className={`font-headline text-lg text-ink leading-snug mt-3 mb-5 italic ${lang === "np" ? "font-nepali" : ""}`}
      >
        "{state.headline}"
      </p>

      {!state.gameOver && !state.won && (
        <button
          onClick={nextRound}
          className="w-full py-3 bg-accent/10 border border-accent text-accent text-sm font-mono rounded-lg hover:bg-accent hover:text-white transition-all"
        >
          {t("game.continueBtn")}
        </button>
      )}
    </motion.div>
  );
}
