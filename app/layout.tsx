import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ModeToggle from '@/components/ModeToggle';
import CommandPalette from '@/components/CommandPalette';
import Providers from '@/components/Providers';
import AuthHeaderControls from '@/components/AuthHeaderControls';
import { getFormMetadata } from '@/lib/content';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'FR 2052a Reference — Policy-as-Code',
  description: 'Dual-mode regulatory reference for the FR 2052a Complex Institution Liquidity Monitoring Report.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let formVersion = '2025-02-26';
  try {
    const meta = getFormMetadata();
    formVersion = meta.current_version;
  } catch {}

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Providers>
          {/* Top bar */}
          <header className="fixed top-0 left-0 right-0 z-40 h-12 bg-white border-b border-slate-200 flex items-center px-4 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold leading-none">P</span>
              </div>
              <span className="text-sm font-semibold text-slate-800">Policy-as-Code</span>
            </div>
            <span className="text-slate-300">/</span>
            <span className="text-sm text-slate-600">FR 2052a Reference</span>
            <span className="text-xs font-mono text-slate-400 bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 ml-1">
              v{formVersion}
            </span>
            <div className="flex-1" />
            <a
              href="/calculator"
              className="text-xs text-primary-600 hover:text-primary-700 hover:underline hidden sm:block"
            >
              LCR Calculator
            </a>
            <a
              href="https://www.federalreserve.gov/apps/reportingforms/Report/Index/FR_2052a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-600 hover:text-primary-700 hover:underline hidden sm:block"
            >
              PDF on FederalReserve.gov ↗
            </a>
            {/* Auth controls — client component */}
            <AuthHeaderControls />
          </header>

          {/* Main content */}
          <main className="pt-12 pb-14">
            {children}
          </main>

          {/* Bottom bar — centered mode toggle + conditional CmdK */}
          <footer className="fixed bottom-0 left-0 right-0 z-40 h-12 bg-slate-900 border-t border-slate-700 flex items-center justify-center px-4">
            <ModeToggle />
            <CommandPalette />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
