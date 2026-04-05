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
      setTimeout(() => {
        router.push(
          `/result?score=${score}&won=${state.won}&reason=${encodeURIComponent(state.gameOverReason)}&lang=${lang}`,
        );
      }, 2000);
    }
  }, [state.gameOver, state.won, state.approval, state.budget, state.youthAnger, state.economy, state.partyLoyalty, state.gameOverReason, router]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 space-y-4">
        <MetersPanel />
        <ScenarioCard />
        {state.phase === "headline" && <HeadlineCard />}

        {/* Game over message */}
        {state.gameOver && (
          <div className="bg-paper border border-danger rounded-lg p-5 text-center">
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
          <div className="bg-paper border border-gold rounded-lg p-5 text-center">
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
