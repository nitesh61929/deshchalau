"use client";

import { motion } from "framer-motion";
import { useGame } from "../context/GameContext";
import { METER_CONFIG } from "@/lib/game/constants";
import type { MeterKey } from "@/types/game";

interface MeterBarProps {
  meterKey: MeterKey;
}

export function MeterBar({ meterKey }: MeterBarProps) {
  const { state, t, lang } = useGame();
  const config = METER_CONFIG[meterKey];
  const value = state[meterKey];
  const isDanger = config.inverted
    ? value >= config.dangerThreshold
    : value <= config.dangerThreshold;

  const labelKey = `meters.${meterKey}`;
  const label = t(labelKey);

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span
          className={`text-xs font-mono ${lang === "np" ? "font-nepali" : ""} ${isDanger ? "text-danger" : "text-ink"}`}
        >
          {config.emoji} {label}
        </span>
        <span
          className={`text-xs font-mono tabular-nums ${isDanger ? "text-danger" : "text-muted"}`}
        >
          {value}%
        </span>
      </div>
      <div className="w-full h-2 bg-background rounded-full overflow-hidden border border-border">
        <motion.div
          className={`h-full rounded-full ${isDanger ? "bg-danger" : config.color}`}
          initial={false}
          animate={{ width: `${value}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>
    </div>
  );
}
