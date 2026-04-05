"use client";

import { useState, useCallback } from "react";
import type { Lang } from "@/types/game";
import { siteConfig } from "@/config/site";
import { getItem, setItem } from "@/lib/utils/storage";
import { T } from "@/data/translations";

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  return path.split(".").reduce((acc: unknown, key) => {
    if (acc && typeof acc === "object")
      return (acc as Record<string, unknown>)[key];
    return "";
  }, obj) as string;
}

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(() =>
    getItem<Lang>(siteConfig.lang.storageKey, siteConfig.lang.default),
  );

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "en" ? "np" : "en";
      setItem(siteConfig.lang.storageKey, next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string): string =>
      getNestedValue(T[lang] as Record<string, unknown>, key),
    [lang],
  );

  return { lang, toggleLang, t };
}
