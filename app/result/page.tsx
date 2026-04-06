"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import { getLegacyKey, LEGACY_COLORS } from "@/lib/game/scoring";
import { siteConfig } from "@/config/site";
import { T } from "@/data/translations";
import type { Lang } from "@/types/game";
import { usePlayerStore } from "@/lib/stores/playstore";

function ResultContent() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get("score") ?? "50", 10);
  const won = searchParams.get("won") === "true";
  const reason = searchParams.get("reason") ?? "";
  const lang = (searchParams.get("lang") ?? siteConfig.lang.default) as Lang;
  const year = parseInt(searchParams.get("year") ?? "0", 10);

  const { playerId, username, isGuest } = usePlayerStore();
  const savedRef = useRef(false);

  const t = T[lang];
  const legacyKey = getLegacyKey(score);
  const legacyColor = LEGACY_COLORS[legacyKey];
  const legacy = t.legacies[legacyKey];
  const isNp = lang === "np";

  useEffect(() => {
    if (isGuest || !playerId || !username || savedRef.current) return;
    savedRef.current = true;

    fetch("/api/scores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        player_id: playerId,
        username,
        score,
        legacy_title: legacy.title,
        lang,
        year_reached: year,
        game_over_reason: reason,
      }),
    }).catch(console.error);
  }, [isGuest, playerId, username, score, legacy.title, lang, year, reason]);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-paper border border-border rounded-lg p-6 text-center">
        {/* Header */}
        <div className="text-xs text-muted font-mono tracking-widest uppercase mb-2">
          {siteConfig.name} · {t.result.finalReport}
        </div>
        <hr className="newspaper-rule" />

        {/* Legacy title */}
        <div className="my-6">
          <p className={`text-sm text-muted mb-1 ${isNp ? "font-nepali" : "font-mono"}`}>
            {t.result.legacyTitle}
          </p>
          <h1 className={`font-headline text-3xl font-black ${legacyColor} leading-tight`}>
            {legacy.title}
          </h1>
          <p className={`text-sm text-ink mt-2 italic ${isNp ? "font-nepali" : "font-mono"}`}>
            {legacy.desc}
          </p>
        </div>

        {/* Score */}
        <div className="bg-background border border-border rounded-lg py-4 mb-4">
          <p className={`text-xs text-muted mb-1 ${isNp ? "font-nepali" : "font-mono"}`}>
            {t.result.finalScore}
          </p>
          <p className="font-headline text-5xl font-black text-gold">{score}</p>
          <p className="text-xs text-muted font-mono">/100</p>
        </div>

        {/* Game over reason */}
        {!won && reason && (
          <div className="bg-danger/10 border border-danger/30 rounded-lg p-3 mb-4">
            <p className={`text-xs text-danger ${isNp ? "font-nepali" : "font-mono"}`}>
              {(t.gameOver.reasons as Record<string, string>)[reason] ?? reason}
            </p>
          </div>
        )}

        {won && (
          <div className="bg-gold/10 border border-gold/30 rounded-lg p-3 mb-4">
            <p className={`text-xs text-gold ${isNp ? "font-nepali" : "font-mono"}`}>
              {t.result.completedTerm}
            </p>
          </div>
        )}

        <hr className="newspaper-rule" />

        {/* Actions */}
        <div className="mt-4 space-y-3">
          <Link
            href="/game"
            className="block w-full py-3 bg-accent text-white font-mono text-sm rounded-lg hover:bg-accent/80 transition-all"
          >
            🔄 {t.result.playAgain}
          </Link>
          <Link
            href="/"
            className={`block w-full py-3 border border-border text-muted text-sm rounded-lg hover:border-ink hover:text-ink transition-all ${isNp ? "font-nepali" : "font-mono"}`}
          >
            {t.result.backHome}
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense>
      <ResultContent />
    </Suspense>
  );
}
