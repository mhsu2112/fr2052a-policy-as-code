'use client';

import { create } from 'zustand';
import type { Mode } from './types';

interface ModeStore {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
}

export const useModeStore = create<ModeStore>((set) => ({
  mode: 'human',
  setMode: (mode) => set({ mode }),
  toggleMode: () => set((state) => ({ mode: state.mode === 'human' ? 'machine' : 'human' })),
  commandPaletteOpen: false,
  setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
}));
