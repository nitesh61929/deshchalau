export type Lang = "en" | "np";

export type MeterKey =
  | "approval"
  | "budget"
  | "youthAnger"
  | "economy"
  | "partyLoyalty";

export type GamePhase = "event" | "headline";

export type Effects = Partial<Record<MeterKey, number>>;

export interface Choice {
  label: string;
  desc: string;
  effects: Effects;
  headline: string;
}

export interface LocalizedContent {
  title: string;
  description: string;
  choices: Choice[];
}

export interface Scenario {
  id: number;
  year: number;
  emoji: string;
  isDaily?: boolean;
  en: LocalizedContent;
  np: LocalizedContent;
}

export interface HistoryEntry {
  scenarioTitle: string;
  choiceLabel: string;
  effects: Effects;
}

export interface Meters {
  approval: number;
  budget: number;
  youthAnger: number;
  economy: number;
  partyLoyalty: number;
}

export interface GameState extends Meters {
  year: number;
  phase: GamePhase;
  scenarioIndex: number;
  scenarioQueue: number[];
  headline: string | null;
  selectedChoice: Choice | null;
  selectedChoiceIndex: number | null;
  gameOver: boolean;
  gameOverReason: string;
  won: boolean;
  history: HistoryEntry[];
  animating: boolean;
}

export interface Legacy {
  title: string;
  desc: string;
  color: string;
}

export interface MeterConfig {
  label: string;
  emoji: string;
  color: string;
  unit?: string;
  inverted?: boolean;
  dangerThreshold: number;
}
