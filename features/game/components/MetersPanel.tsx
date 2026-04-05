"use client";

import { useState, useEffect } from "react";
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

function CompactMeter({
  meterKey,
  activeKey,
  onTap,
}: {
  meterKey: MeterKey;
  activeKey: MeterKey | null;
  onTap: (key: MeterKey) => void;
}) {
  const { state, t, lang } = useGame();
  const config = METER_CONFIG[meterKey];
  const value = state[meterKey];
  const isDanger = config.inverted
    ? value >= config.dangerThreshold
    : value <= config.dangerThreshold;
  const isActive = activeKey === meterKey;

  return (
    <div className="relative flex flex-col items-center gap-0.5 w-14">
      {/* Tooltip label */}
      {isActive && (
        <div
          className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-border text-ink text-[10px] px-2 py-1 rounded z-10 ${lang === "np" ? "font-nepali" : "font-mono"}`}
        >
          {t(`meters.${meterKey}`)}
        </div>
      )}

      <button
        onClick={() => onTap(meterKey)}
        className="text-base leading-none cursor-pointer select-none active:scale-110 transition-transform"
      >
        {config.emoji}
      </button>
      <span
        className={`text-[10px] font-mono tabular-nums font-bold ${isDanger ? "text-danger" : "text-ink"}`}
      >
        {value}%
      </span>
      <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${isDanger ? "bg-danger" : config.color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function MetersPanel() {
  const [activeKey, setActiveKey] = useState<MeterKey | null>(null);

  useEffect(() => {
    if (!activeKey) return;
    const timer = setTimeout(() => setActiveKey(null), 1500);
    return () => clearTimeout(timer);
  }, [activeKey]);

  const handleTap = (key: MeterKey) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* Mobile: compact horizontal strip */}
      <div className="sm:hidden bg-paper border border-border rounded-lg px-3 py-3">
        <div className="flex justify-between items-center">
          {METER_KEYS.map((key) => (
            <CompactMeter
              key={key}
              meterKey={key}
              activeKey={activeKey}
              onTap={handleTap}
            />
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
