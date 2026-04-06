"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { LanguagePicker } from "@/components/LanguagePicker";
import { usePlayerStore } from "@/lib/stores/playerStore";
import { UsernameModal } from "@/components/ui/UsernameModal";

export default function LandingPage() {
  const router = useRouter();
  const { setGuest, username } = usePlayerStore();
  const [showUsernameModal, setShowUsernameModal] = useState(false);

  const isNepali = false; // replace with your real language state

  function handleGuestPlay() {
    setGuest();
    router.push("/game");
  }

  function handleUsernameConfirm() {
    setShowUsernameModal(false);
    router.push("/game");
  }

  function handleContinue() {
    router.push("/game");
  }

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-10 max-w-xl">
        <div className="text-muted font-mono text-xs tracking-widest uppercase mb-2">
          Nepal Political Simulation
        </div>

        <h1 className="font-headline text-5xl sm:text-6xl font-black text-accent leading-none mb-1">
          {siteConfig.name}
        </h1>

        <h2 className="font-nepali text-3xl text-ink mb-4">
          {siteConfig.nameNp}
        </h2>

        <hr className="newspaper-rule" />

        <p className="font-mono text-sm text-ink mt-4">{siteConfig.tagline}</p>
        <p className="font-nepali text-sm text-muted mt-1">
          {siteConfig.taglineNp}
        </p>
      </div>

      <LanguagePicker />

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xl">
        <button
          onClick={handleGuestPlay}
          className="px-8 py-4 rounded-2xl bg-zinc-800 border border-zinc-700 text-white text-lg font-semibold hover:bg-zinc-700 transition-all"
        >
          👻 {isNepali ? "Guest रूपमा खेल्नुस्" : "Play as Guest"}
        </button>

        <button
          onClick={() => setShowUsernameModal(true)}
          className="px-8 py-4 rounded-2xl bg-green-600 text-white text-lg font-bold hover:bg-green-500 transition-all shadow-lg shadow-green-900/40"
        >
          👤 {isNepali ? "Username सहित खेल्नुस्" : "Play with Username"}
        </button>
      </div>

      {username && (
        <button
          onClick={handleContinue}
          className="mt-4 px-6 py-3 rounded-xl border border-border bg-paper text-ink hover:bg-muted/20 transition"
        >
          {isNepali
            ? `जारी राख्नुहोस्: ${username}`
            : `Continue as ${username}`}
        </button>
      )}

      <div className="max-w-sm w-full bg-paper border border-border rounded-lg p-5 mt-10">
        <h3 className="font-headline text-lg text-gold mb-1">How to Play</h3>
        <p className="font-nepali text-xs text-muted mb-3">कसरी खेल्ने</p>

        <ol className="space-y-2 text-sm font-mono text-ink list-none">
          {[
            {
              en: "You are the Prime Minister of Nepal.",
              np: "तपाईं नेपालका प्रधानमन्त्री हुनुहुन्छ।",
            },
            {
              en: "Face 5 real-inspired crises across 5 years.",
              np: "५ वर्षमा ५ वास्तविक संकटहरू सामना गर्नुहोस्।",
            },
            {
              en: "Every decision shifts 5 national meters.",
              np: "हरेक निर्णयले ५ राष्ट्रिय सूचकहरू परिवर्तन गर्छ।",
            },
            {
              en: "Survive — and discover your legacy.",
              np: "बाँच्नुहोस् — र आफ्नो विरासत हेर्नुहोस्।",
            },
          ].map((step, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-accent font-bold shrink-0">{i + 1}.</span>
              <span>
                {step.en}{" "}
                <span className="font-nepali text-muted text-xs">
                  {step.np}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-8 text-xs text-muted font-mono text-center">
        No login required · Mobile friendly · Bilingual EN/नेपाली
      </p>

      <UsernameModal
        isOpen={showUsernameModal}
        onClose={() => setShowUsernameModal(false)}
        onConfirm={handleUsernameConfirm}
      />
    </main>
  );
}
