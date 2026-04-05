import Link from "next/link";
import { getLegacy } from "@/lib/game/scoring";
import { siteConfig } from "@/config/site";

interface Props {
  searchParams: { score?: string; won?: string; reason?: string };
}

export default function ResultPage({ searchParams }: Props) {
  const score = parseInt(searchParams.score ?? "50", 10);
  const won = searchParams.won === "true";
  const reason = searchParams.reason
    ? decodeURIComponent(searchParams.reason)
    : null;
  const legacy = getLegacy(score);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-paper border border-border rounded-lg p-6 text-center">
        {/* Header */}
        <div className="text-xs text-muted font-mono tracking-widest uppercase mb-2">
          {siteConfig.name} · Final Report
        </div>
        <hr className="newspaper-rule" />

        {/* Legacy title */}
        <div className="my-6">
          <p className="text-sm text-muted font-mono mb-1">Your Legacy</p>
          <h1
            className={`font-headline text-3xl font-black ${legacy.color} leading-tight`}
          >
            {legacy.title}
          </h1>
          <p className="text-sm text-ink font-mono mt-2 italic">
            {legacy.desc}
          </p>
        </div>

        {/* Score */}
        <div className="bg-background border border-border rounded-lg py-4 mb-4">
          <p className="text-xs text-muted font-mono mb-1">Final Score</p>
          <p className="font-headline text-5xl font-black text-gold">{score}</p>
          <p className="text-xs text-muted font-mono">/100</p>
        </div>

        {/* Game over reason */}
        {!won && reason && (
          <div className="bg-danger/10 border border-danger/30 rounded-lg p-3 mb-4">
            <p className="text-xs text-danger font-mono">{reason}</p>
          </div>
        )}

        {won && (
          <div className="bg-gold/10 border border-gold/30 rounded-lg p-3 mb-4">
            <p className="text-xs text-gold font-mono">
              You completed your full 5-year term! 🇳🇵
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
            🔄 Play Again
          </Link>
          <Link
            href="/"
            className="block w-full py-3 border border-border text-muted font-mono text-sm rounded-lg hover:border-ink hover:text-ink transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
