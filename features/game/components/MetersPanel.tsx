"use client";

import { MeterBar } from "./MeterBar";
import type { MeterKey } from "@/types/game";

const METER_KEYS: MeterKey[] = [
  "approval",
  "budget",
  "youthAnger",
  "economy",
  "partyLoyalty",
];

export function MetersPanel() {
  return (
    <div className="bg-paper border border-border rounded-lg p-4">
      {METER_KEYS.map((key) => (
        <MeterBar key={key} meterKey={key} />
      ))}
    </div>
  );
}
