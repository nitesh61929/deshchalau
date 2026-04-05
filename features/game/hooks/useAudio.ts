"use client";

import { useState, useCallback, useEffect } from "react";
import { audioEngine } from "@/lib/audio";

export function useAudio() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    audioEngine.init();
    setMuted(audioEngine.isMuted());
  }, []);

  const toggleMute = useCallback(() => {
    const next = audioEngine.toggleMute();
    setMuted(next);
  }, []);

  return { muted, toggleMute, audioEngine };
}
