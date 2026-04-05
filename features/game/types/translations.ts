import type { Lang } from "./game";

export type TranslationValue = string | Record<string, unknown>;
export type TranslationMap = Record<string, TranslationValue>;
export type Translations = Record<Lang, TranslationMap>;
