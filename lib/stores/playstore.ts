import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PlayerState {
  playerId: string | null;
  username: string | null;
  lang: string;
  isGuest: boolean;
  setPlayer: (id: string, username: string) => void;
  setGuest: () => void;
  setLang: (lang: string) => void;
  clearPlayer: () => void;
}

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set) => ({
      playerId: null,
      username: null,
      lang: "np",
      isGuest: false,
      setPlayer: (id, username) =>
        set({ playerId: id, username, isGuest: false }),
      setGuest: () => set({ playerId: null, username: null, isGuest: true }),
      setLang: (lang) => set({ lang }),
      clearPlayer: () =>
        set({ playerId: null, username: null, isGuest: false }),
    }),
    { name: "deshchalau-player" },
  ),
);
