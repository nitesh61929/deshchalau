"use client";

import { MeterBar } from "./MeterBar";
import { useGame } from "../context/GameContext";
import { METER_CONFIG } from "@/lib/game/constants";
import type { MeterKey } from "@/types/game";

const METER_KEYS: MeterKey[] = [
  "approval",
  "budget",
  "youthAnger",
  "economy",
  "partyLoyalty",
];

function CompactMeter({ meterKey }: { meterKey: MeterKey }) {
  const { state } = useGame();
  const config = METER_CONFIG[meterKey];
  const value = state[meterKey];
  const isDanger = config.inverted
    ? value >= config.dangerThreshold
    : value <= config.dangerThreshold;

  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-base leading-none">{config.emoji}</span>
      <span
        className={`text-[10px] font-mono tabular-nums font-bold ${isDanger ? "text-danger" : "text-ink"}`}
      >
        {value}%
      </span>
      <div className="w-8 h-1 bg-background rounded-full overflow-hidden border border-border">
        <div
          className={`h-full rounded-full transition-all duration-500 ${isDanger ? "bg-danger" : config.color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function MetersPanel() {
  return (
    <>
      {/* Mobile: compact horizontal strip */}
      <div className="sm:hidden bg-paper border border-border rounded-lg px-3 py-2">
        <div className="flex justify-between items-center">
          {METER_KEYS.map((key) => (
            <CompactMeter key={key} meterKey={key} />
          ))}
        </div>
      </div>

      {/* Desktop: full vertical bars */}
      <div className="hidden sm:block bg-paper border border-border rounded-lg p-4">
        {METER_KEYS.map((key) => (
          <MeterBar key={key} meterKey={key} />
        ))}
      </div>
    </>
  );
}
