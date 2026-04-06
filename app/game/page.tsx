"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { GameProvider, useGame } from "@/features/game/context/GameContext";
import { MetersPanel } from "@/features/game/components/MetersPanel";
import { ScenarioCard } from "@/features/game/components/ScenarioCard";
import { HeadlineCard } from "@/features/game/components/HeadlineCard";
import { Header } from "@/components/layout/Header";
import { audioEngine } from "@/lib/audio";

function GameScreen() {
  const { state, t, lang } = useGame();
  const router = useRouter();

  useEffect(() => {
    audioEngine.init();
  }, []);

  useEffect(() => {
    if (state.gameOver || state.won) {
      const score = Math.round(
        (state.approval +
          state.budget +
          (100 - state.youthAnger) +
          state.economy +
          state.partyLoyalty) /
          5,
      );
      const timeout = setTimeout(() => {
        router.push(
          `/result?score=${score}&won=${state.won}&reason=${encodeURIComponent(state.gameOverReason)}&lang=${lang}&year=${state.year}`,
        );
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [
    state.gameOver,
    state.won,
    state.approval,
    state.budget,
    state.youthAnger,
    state.economy,
    state.partyLoyalty,
    state.gameOverReason,
    state.year,
    router,
    lang,
  ]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
        {/* Mobile: stacked. Large screens: side by side */}
        <div className="flex flex-col lg:flex-row lg:gap-6 lg:items-start">
          {/* Left: scenario + headline */}
          <div className="flex-1 space-y-4">
            <ScenarioCard />
            {state.phase === "headline" && <HeadlineCard />}
          </div>

          {/* Right: meters panel (sticky on large screens) */}
          <div className="mt-4 lg:mt-0 lg:w-72 lg:sticky lg:top-6">
            <MetersPanel />
          </div>
        </div>

        {/* Game over message */}
        {state.gameOver && (
          <div className="bg-paper border border-danger rounded-lg p-5 text-center mt-4">
            <p className="font-headline text-xl text-danger font-bold mb-1">
              💀 {t("gameOver.title")}
            </p>
            <p className={`text-sm text-ink ${lang === "np" ? "font-nepali" : "font-mono"}`}>
              {t(`gameOver.reasons.${state.gameOverReason}`)}
            </p>
            <p className="text-xs text-muted mt-2 font-mono">
              {t("gameOver.redirecting")}
            </p>
          </div>
        )}

        {state.won && (
          <div className="bg-paper border border-gold rounded-lg p-5 text-center mt-4">
            <p className="font-headline text-xl text-gold font-bold mb-1">
              🎉 {t("won.title")}
            </p>
            <p className={`text-sm text-ink ${lang === "np" ? "font-nepali" : "font-mono"}`}>
              {t("won.message")}
            </p>
            <p className="text-xs text-muted mt-2 font-mono">
              {t("won.calculating")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GamePage() {
  return (
    <GameProvider>
      <GameScreen />
    </GameProvider>
  );
}
