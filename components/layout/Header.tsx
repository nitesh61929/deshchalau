"use client";

import { useAudio } from "@/features/game/hooks/useAudio";
import { useLanguage } from "@/features/game/hooks/useLanguage";
import { siteConfig } from "@/config/site";

export function Header() {
  const { muted, toggleMute } = useAudio();
  const { lang } = useLanguage();

  return (
    <header className="w-full border-b border-border bg-paper px-4 py-3 flex items-center justify-between">
      <div>
        <span className="font-headline text-xl text-accent font-bold tracking-tight">
          {siteConfig.name}
        </span>
        <span className="text-muted text-xs ml-2 hidden sm:inline font-mono">
          {lang === "np" ? siteConfig.nameNp : siteConfig.tagline}
        </span>
      </div>
      <div className="flex items-center gap-3">
        {/* <button
          onClick={toggleLang}
          className="text-xs border border-border px-3 py-1 rounded hover:border-gold hover:text-gold transition-colors font-mono"
        >
          {t("nav.language")}
        </button> */}
        <button
          onClick={toggleMute}
          className="text-xs border border-border px-3 py-1 rounded hover:border-accent hover:text-accent transition-colors font-mono"
        >
          {muted ? "🔇" : "🔊"}
        </button>
      </div>
    </header>
  );
}
