"use client";

import { motion } from "framer-motion";
import { useGame } from "../context/GameContext";
import { audioEngine } from "@/lib/audio";
import type { Choice } from "@/types/game";

interface ChoiceButtonProps {
  choice: Choice;
  index: number;
  disabled: boolean;
}

export function ChoiceButton({ choice, index, disabled }: ChoiceButtonProps) {
  const { choose, selectedChoiceIndex, lang } = useGame();
  const isSelected = selectedChoiceIndex === index;

  function handleClick() {
    if (disabled) return;
    const isGood = Object.values(choice.effects).some((v) => (v ?? 0) > 0);
    isGood ? audioEngine.playGoodDecision() : audioEngine.playBadDecision();
    choose(choice, index);
  }

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.01 } : {}}
      whileTap={!disabled ? { scale: 0.99 } : {}}
      className={`w-full text-left p-4 rounded-lg border transition-all mb-3 font-mono
        ${
          isSelected
            ? "border-gold bg-gold/10 text-gold"
            : disabled
              ? "border-border text-muted cursor-not-allowed opacity-50"
              : "border-border hover:border-ink hover:bg-paper cursor-pointer text-ink"
        }`}
    >
      <div
        className={`font-bold text-sm mb-1 ${lang === "np" ? "font-nepali" : "font-headline"}`}
      >
        {choice.label}
      </div>
      <div
        className={`text-xs text-muted leading-relaxed ${lang === "np" ? "font-nepali" : ""}`}
      >
        {choice.desc}
      </div>
    </motion.button>
  );
}
