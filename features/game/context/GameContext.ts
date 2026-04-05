'use client'

import { createContext, useContext, type ReactNode } from 'react'
import { useGameState } from '../hooks/useGameState'
import { useLanguage } from '../hooks/useLanguage'
import type { GameState, Choice, Lang } from '@/types/game'

interface GameContextValue {
  state: GameState
  lang: Lang
  choose: (choice: Choice, index: number) => void
  nextRound: () => void
  restart: () => void
  toggleLang: () => void
  t: (key: string) => string
}

const GameContext = createContext<GameContextValue | null>(null)

export function GameProvider({ children }: { children: ReactNode }) {
  const { state, choose, nextRound, restart } = useGameState()
  const { lang, toggleLang, t } = useLanguage()

  return (
    <GameContext.Provider value={{ state, lang, choose, nextRound, restart, toggleLang, t }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error('useGame must be used within GameProvider')
  return ctx
}