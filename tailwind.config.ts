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
        background: "#0d0d0d",
        paper: "#181818",
        ink: "#f0ece4",
        accent: "#C8102E",
        gold: "#d4a843",
        muted: "#9a9a9a",
        border: "#2e2e2e",
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
