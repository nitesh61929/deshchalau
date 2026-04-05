import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0e0c",
        paper: "#1a1814",
        ink: "#e8e0d0",
        accent: "#c41e1e",
        gold: "#d4a843",
        muted: "#6b6459",
        border: "#2d2920",
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
