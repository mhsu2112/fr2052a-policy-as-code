'use client';

import { useModeStore } from '@/lib/store';

export default function ModeToggle() {
  const { mode, setMode, setCommandPaletteOpen } = useModeStore();

  return (
    <div className="flex items-center gap-3">
      {/* Pill toggle */}
      <div className="flex items-center bg-slate-800 rounded-full p-0.5 border border-slate-700">
        <button
          onClick={() => setMode('human')}
          className={`px-4 py-1.5 text-[11px] font-semibold tracking-widest rounded-full transition-all ${
            mode === 'human'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          HUMAN
        </button>
        <button
          onClick={() => setMode('machine')}
          className={`px-4 py-1.5 text-[11px] font-semibold tracking-widest rounded-full transition-all ${
            mode === 'machine'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          MACHINE
        </button>
      </div>

      {/* CmdK button — only visible in machine mode */}
      {mode === 'machine' && (
        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 border border-slate-700 rounded px-2.5 py-1.5 transition-colors font-mono"
        >
          <span>/</span>
          <span className="text-slate-600 mx-0.5">|</span>
          <span>⌘K</span>
        </button>
      )}
    </div>
  );
}
