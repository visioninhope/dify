import { create } from 'zustand'

type State = {
  mode: string
  showRunHistory: boolean
  showFeaturesPanel: boolean
  runStaus: string
}

type Action = {
  setShowRunHistory: (showRunHistory: boolean) => void
  setShowFeaturesPanel: (showFeaturesPanel: boolean) => void
  setRunStaus: (runStaus: string) => void
}

export const useStore = create<State & Action>(set => ({
  mode: 'workflow',
  showRunHistory: false,
  setShowRunHistory: showRunHistory => set(() => ({ showRunHistory })),
  showFeaturesPanel: false,
  setShowFeaturesPanel: showFeaturesPanel => set(() => ({ showFeaturesPanel })),
  runStaus: '',
  setRunStaus: runStaus => set(() => ({ runStaus })),
}))