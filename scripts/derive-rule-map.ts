/**
 * Derives content/morphir/rule-map.yaml from content/morphir/regulatory-bridge.yaml.
 * Filters to confirmed/provisional entries only and strips prose notes.
 *
 * Run: tsx scripts/derive-rule-map.ts
 */

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

interface BridgeEntry {
  morphir_rule: string;
  cfr_section: string;
  cfr_topic: string;
  weight: number;
  category: 'outflow' | 'inflow' | 'hqla';
  morphir_module: string;
  fr2052a_sections: string[];
  status: string;
  notes: string;
}

interface Bridge {
  bridge: BridgeEntry[];
}

function makeDescription(entry: BridgeEntry): string {
  const pct = (entry.weight * 100).toFixed(0);
  const suffix = entry.category === 'hqla'
    ? `${pct}% credit`
    : entry.category === 'outflow'
      ? `${pct}% outflow`
      : `${pct}% inflow`;
  return `${entry.cfr_topic} — ${suffix}`;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'morphir');
const BRIDGE_PATH = path.join(CONTENT_DIR, 'regulatory-bridge.yaml');
const OUTPUT_PATH = path.join(CONTENT_DIR, 'rule-map.yaml');

const raw = fs.readFileSync(BRIDGE_PATH, 'utf-8');
const { bridge } = yaml.load(raw) as Bridge;

const rules = bridge
  .filter(e => (e.status === 'confirmed' || e.status === 'provisional') && e.fr2052a_sections?.length > 0)
  .map(e => ({
    rule: e.morphir_rule,
    cfr: e.cfr_section,
    weight: e.weight,
    fr2052a: e.fr2052a_sections,
    category: e.category,
    module: e.morphir_module,
    description: makeDescription(e),
    status: e.status as 'confirmed' | 'provisional',
  }));

const header = [
  '# Derived from regulatory-bridge.yaml — do not edit manually.',
  '# Regenerate with: npm run derive-rule-map',
  '# Includes only confirmed/provisional rules with non-empty fr2052a_sections.',
  '',
].join('\n');

const out = header + yaml.dump({ rules }, { lineWidth: 120, quotingType: '"' });
fs.writeFileSync(OUTPUT_PATH, out, 'utf-8');

console.log(`Wrote ${rules.length} rules to ${OUTPUT_PATH}`);
