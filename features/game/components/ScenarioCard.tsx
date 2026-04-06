"use client";

import { useGame } from "../context/GameContext";
import { ChoiceButton } from "./ChoiceButton";
import { SCENARIOS } from "@/data/scenarios";
import { GAME_SCENARIO_COUNT } from "@/lib/game/constants";
import { Typewriter } from "@/components/ui/TypeWriter";

export function ScenarioCard() {
  const { state, lang, t } = useGame();
  const scenario = SCENARIOS[state.scenarioQueue[state.scenarioIndex]];
  const content = scenario[lang];
  const isHeadline = state.phase === "headline";

  return (
    <div className="bg-paper border border-border rounded-lg p-5">
      {/* Year */}
      <div className="mb-3">
        <span className="text-xs text-muted font-mono">
          {t("game.year")} {state.year}
        </span>
      </div>

      {/* Scenario progress bar */}
      <div className="w-full h-1.5 bg-background rounded-full overflow-hidden border border-border mb-3">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{
            width: `${((state.scenarioIndex + 1) / GAME_SCENARIO_COUNT) * 100}%`,
          }}
        />
      </div>

      {/* Scenario title */}
      <h2
        className={`font-headline text-2xl font-bold text-accent mb-3 leading-tight ${lang === "np" ? "font-nepali" : ""}`}
      >
        {scenario.emoji} {content.title}
      </h2>

      {/* Scenario description */}
      <Typewriter
        text={content.description}
        speed={22}
        className={`text-sm text-ink leading-relaxed mb-5 ${lang === "np" ? "font-nepali" : "font-mono"}`}
      />

      <hr className="newspaper-rule" />

      {/* Choices */}
      {!isHeadline && (
        <div className="mt-4">
          <p
            className={`text-xs text-muted mb-3 ${lang === "np" ? "font-nepali" : "font-mono"}`}
          >
            {t("game.chooseAction")}
          </p>
          {content.choices.map((choice, i) => (
            <ChoiceButton
              key={i}
              choice={choice}
              index={i}
              disabled={isHeadline}
            />
          ))}
        </div>
      )}
    </div>
  );
}
