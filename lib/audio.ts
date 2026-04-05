"use client";

import { siteConfig } from "@/config/site";
import { getItem, setItem } from "@/lib/utils/storage";

class AudioEngine {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;

  init() {
    if (this.ctx) return;
    this.ctx = new AudioContext();
    this.muted = getItem(siteConfig.audio.storageKey, false);
  }

  isMuted() {
    return this.muted;
  }

  toggleMute() {
    this.muted = !this.muted;
    setItem(siteConfig.audio.storageKey, this.muted);
    return this.muted;
  }

  playTone(
    frequency: number,
    duration: number,
    type: OscillatorType = "sine",
    volume = 0.15,
  ) {
    if (this.muted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      this.ctx.currentTime + duration,
    );
    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + duration);
  }

  playGoodDecision() {
    this.playTone(523, 0.15, "sine", 0.12);
    setTimeout(() => this.playTone(659, 0.15, "sine", 0.12), 150);
    setTimeout(() => this.playTone(784, 0.25, "sine", 0.12), 300);
  }

  playBadDecision() {
    this.playTone(220, 0.3, "sawtooth", 0.1);
    setTimeout(() => this.playTone(180, 0.4, "sawtooth", 0.08), 200);
  }

  playClick() {
    this.playTone(800, 0.05, "square", 0.05);
  }
}

export const audioEngine = new AudioEngine();
