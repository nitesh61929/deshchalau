"use client";

import { useRouter } from "next/navigation";
import { setItem } from "@/lib/utils/storage";
import { siteConfig } from "@/config/site";
import type { Lang } from "@/types/game";

export function LanguagePicker() {
  const router = useRouter();

  function pick(lang: Lang) {
    setItem(siteConfig.lang.storageKey, lang);
    router.push("/game");
  }

  return (
    <div className="w-full max-w-sm">
      <p className="text-center text-xs text-muted font-mono mb-4 tracking-widest uppercase">
        Choose Language · भाषा छान्नुहोस्
      </p>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => pick("en")}
          className="flex flex-col items-center gap-1 px-6 py-5 border border-border rounded-lg bg-paper hover:border-gold hover:bg-gold/5 transition-all group"
        >
          <span className="text-2xl">🇬🇧</span>
          <span className="font-headline text-lg font-bold text-ink group-hover:text-gold transition-colors">
            English
          </span>
          <span className="text-xs text-muted font-mono">Play in English</span>
        </button>
        <button
          onClick={() => pick("np")}
          className="flex flex-col items-center gap-1 px-6 py-5 border border-border rounded-lg bg-paper hover:border-accent hover:bg-accent/5 transition-all group"
        >
          <span className="text-2xl">🇳🇵</span>
          <span className="font-nepali text-lg font-bold text-ink group-hover:text-accent transition-colors">
            नेपाली
          </span>
          <span className="font-nepali text-xs text-muted">नेपालीमा खेल्नुहोस्</span>
        </button>
      </div>
    </div>
  );
}
