import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      {/* Masthead */}
      <div className="text-center mb-8 max-w-xl">
        <div className="text-muted font-mono text-xs tracking-widest uppercase mb-2">
          Nepal Political Simulation
        </div>
        <h1 className="font-headline text-5xl sm:text-6xl font-black text-accent leading-none mb-1">
          DeshChalau
        </h1>
        <h2 className="font-nepali text-3xl text-ink mb-4">देश चलाउ</h2>
        <hr className="newspaper-rule" />
        <p className="font-mono text-sm text-ink mt-4">{siteConfig.tagline}</p>
        <p className="font-nepali text-sm text-muted mt-1">
          {siteConfig.taglineNp}
        </p>
      </div>

      {/* Play Button */}
      <Link
        href="/game"
        className="inline-block px-8 py-4 bg-accent text-white font-headline text-lg font-bold rounded-lg hover:bg-accent/80 transition-all mb-10 shadow-lg"
      >
        🇳🇵 Play Now — देश चलाउ
      </Link>

      {/* How to play */}
      <div className="max-w-sm w-full bg-paper border border-border rounded-lg p-5">
        <h3 className="font-headline text-lg text-gold mb-3">How to Play</h3>
        <ol className="space-y-2 text-sm font-mono text-ink list-none">
          {[
            "You are the Prime Minister of Nepal.",
            "Face 3 real-inspired crises across 5 years.",
            "Every decision shifts 5 national meters.",
            "Survive — and discover your legacy.",
          ].map((step, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-accent font-bold">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-8 text-xs text-muted font-mono text-center">
        No login required · Mobile friendly · Bilingual EN/नेपाली
      </p>
    </main>
  );
}
