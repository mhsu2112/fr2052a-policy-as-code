'use client';
import { useModeStore } from '@/lib/store';

export default function CmdKButton() {
  const { setCommandPaletteOpen } = useModeStore();
  return (
    <button
      onClick={() => setCommandPaletteOpen(true)}
      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 border border-slate-700 rounded px-2.5 py-1 transition-colors font-mono"
    >
      <span>/</span>
      <span className="text-slate-500 mx-0.5">|</span>
      <span>⌘K</span>
    </button>
  );
}
