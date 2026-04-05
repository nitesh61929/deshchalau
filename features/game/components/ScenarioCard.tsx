"use client";

import { useGame } from "../context/GameContext";
import { ChoiceButton } from "./ChoiceButton";
import { SCENARIOS } from "@/data/scenarios";

export function ScenarioCard() {
  const { state, lang, t } = useGame();
  const scenario = SCENARIOS[state.scenarioIndex];
  const content = scenario[lang];
  const isHeadline = state.phase === "headline";

  return (
    <div className="bg-paper border border-border rounded-lg p-5">
      {/* Year + scenario count */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs text-muted font-mono">
          {t("game.year")} {state.year}
        </span>
        <span className="text-xs text-muted font-mono">
          {t("game.scenario")} {state.scenarioIndex + 1} {t("game.of")}{" "}
          {SCENARIOS.length}
        </span>
      </div>

      {/* Newspaper rule */}
      <hr className="newspaper-rule" />

      {/* Scenario title */}
      <h2
        className={`font-headline text-2xl font-bold text-accent mb-3 leading-tight ${lang === "np" ? "font-nepali" : ""}`}
      >
        {scenario.emoji} {content.title}
      </h2>

      {/* Scenario description */}
      <p
        className={`text-sm text-ink leading-relaxed mb-5 ${lang === "np" ? "font-nepali" : "font-mono"}`}
      >
        {content.description}
      </p>

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
