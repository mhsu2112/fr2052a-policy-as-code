import CalculatorClient from '@/components/CalculatorClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LCR Calculator — FR 2052a Reference',
  description: 'Interactive Liquidity Coverage Ratio calculator powered by the FINOS Morphir LCR rule engine (12 CFR 249).',
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
