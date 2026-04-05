import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080d1c",
        paper: "#0e1530",
        ink: "#e2e8f5",
        accent: "#C8102E",
        gold: "#d4a843",
        muted: "#5c6f9e",
        border: "#1e2d50",
        danger: "#ef4444",
      },
      fontFamily: {
        headline: ["Playfair Display", "serif"],
        mono: ["IBM Plex Mono", "monospace"],
        nepali: ["Tiro Devanagari Nepali", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
