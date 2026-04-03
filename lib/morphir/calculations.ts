/**
 * LCR calculation engine ported from FINOS Morphir LCR sample.
 * Source: morphir-examples/src/Morphir/Sample/LCR/Calculations.elm
 *
 * Formula: LCR = HQLA / Total Net Cash Outflow ≥ 1.00 (100%)
 *
 * Total Net Cash Outflow = max(grossOutflow − min(inflowTotal, 0.75 × grossOutflow), 0)
 *                        + mismatchAddOn
 *
 * HQLA haircuts: Level1 → 100%, Level2a → 85%, Level2b → 50%
 * 75% inflow cap: inflows credited up to 75% of gross outflows
 * 30-day maturity window: only flows maturing within 30 calendar days count
 */

import type { Flow, LCRResult } from './types';
import { outflowRules } from './outflows';
import { inflowRules } from './inflows';
import { findApplicable } from './rules';

// ── Constants ─────────────────────────────────────────────────────────────────

const LEVEL1_HAIRCUT = 1.00;   // no haircut
const LEVEL2A_HAIRCUT = 0.85;
const LEVEL2B_HAIRCUT = 0.50;
const INFLOW_CAP = 0.75;       // 75% of gross outflow
const MATURITY_WINDOW_DAYS = 30;

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Returns flows that mature within the 30-day window (or are open/demand). */
export function flowsInWindow(flows: Flow[], referenceDate: string): Flow[] {
  const ref = new Date(referenceDate);
  const cutoff = new Date(ref);
  cutoff.setDate(ref.getDate() + MATURITY_WINDOW_DAYS);

  return flows.filter(f => {
    if (!f.maturityDate) return true; // open / demand — always in window
    const mat = new Date(f.maturityDate);
    return mat <= cutoff;
  });
}

/** Returns flows whose businessDate equals the reference date (for t0 HQLA). */
export function flowsForDate(flows: Flow[], date: string): Flow[] {
  return flows.filter(f => f.businessDate === date || f.maturityDate === date);
}

/**
 * Accumulate: Elm `accumulate starter list` produces a running cumulative sum.
 * e.g. accumulate(0, [10, 20, 30]) → [10, 30, 60]
 */
export function accumulate(starter: number, list: number[]): number[] {
  const result: number[] = [];
  let running = starter;
  for (const x of list) {
    running += x;
    result.push(running);
  }
  return result;
}

/** Returns true if the flow's assetCategory qualifies it as HQLA. */
export function isHQLA(f: Flow): boolean {
  return (
    f.assetCategory === 'Level1Assets' ||
    f.assetCategory === 'Level2aAssets' ||
    f.assetCategory === 'Level2bAssets'
  );
}

// ── HQLA ─────────────────────────────────────────────────────────────────────

/**
 * Applies HQLA haircuts to a set of HQLA flows and returns adjusted total.
 * Matches Elm Calculations.hqlaAmount.
 *
 * Level2b excess cap: Level2b assets may not exceed 15% of HQLA.
 * Level2 excess cap: Level2a + Level2b may not exceed 40% of HQLA.
 * These are applied via the unadjusted/adjusted logic in the Elm source.
 */
export function hqlaAmount(flows: Flow[]): number {
  const hqlaFlows = flows.filter(isHQLA);

  const level1 = hqlaFlows
    .filter(f => f.assetCategory === 'Level1Assets')
    .reduce((s, f) => s + f.amount * LEVEL1_HAIRCUT, 0);

  const level2a = hqlaFlows
    .filter(f => f.assetCategory === 'Level2aAssets')
    .reduce((s, f) => s + f.amount * LEVEL2A_HAIRCUT, 0);

  const level2b = hqlaFlows
    .filter(f => f.assetCategory === 'Level2bAssets')
    .reduce((s, f) => s + f.amount * LEVEL2B_HAIRCUT, 0);

  // Unadjusted HQLA (before caps)
  const unadjusted = level1 + level2a + level2b;

  // Level2b cap: Level2b ≤ 15% of unadjusted HQLA
  const level2bCap = 0.15 * unadjusted;
  const level2bAdj = Math.min(level2b, level2bCap);

  // Level2 cap: (level2a + level2bAdj) ≤ 40% of (level1 + level2a + level2bAdj)
  const level2Total = level2a + level2bAdj;
  const level2Cap = 0.40 * (level1 + level2Total);
  const level2Adj = Math.min(level2Total, level2Cap);

  return level1 + level2Adj;
}

// ── Outflows ──────────────────────────────────────────────────────────────────

/** Applies outflow rules to each flow and sums weighted amounts. */
export function totalOutflow(flows: Flow[]): number {
  return flows.reduce((sum, f) => {
    const applicable = findApplicable(outflowRules, f);
    if (applicable.length === 0) return sum + f.amount; // unmatched: include as-is
    const weight = applicable[0].weight; // first matching rule wins
    return sum + f.amount * weight;
  }, 0);
}

// ── Inflows ───────────────────────────────────────────────────────────────────

/** Applies inflow rules to each flow and sums weighted amounts. */
export function totalInflow(flows: Flow[]): number {
  return flows.reduce((sum, f) => {
    const applicable = findApplicable(inflowRules, f);
    if (applicable.length === 0) return sum;
    const weight = applicable[0].weight;
    return sum + f.amount * weight;
  }, 0);
}

// ── Maturity mismatch add-on ──────────────────────────────────────────────────

/**
 * Computes the maturity mismatch add-on per 12 CFR 249 Appendix A.
 * This is the largest cumulative net outflow over days 1–30.
 * Matches the logic implied by Elm Calculations.totalNetCashOutflowAmount.
 */
export function mismatchAddOn(outflows: Flow[], inflows: Flow[], referenceDate: string): number {
  const ref = new Date(referenceDate);
  const dailyNet: number[] = [];

  for (let d = 1; d <= MATURITY_WINDOW_DAYS; d++) {
    const date = new Date(ref);
    date.setDate(ref.getDate() + d);
    const dateStr = date.toISOString().split('T')[0];

    const dayOut = outflows
      .filter(f => f.maturityDate === dateStr)
      .reduce((s, f) => {
        const rules = findApplicable(outflowRules, f);
        const w = rules.length > 0 ? rules[0].weight : 1;
        return s + f.amount * w;
      }, 0);

    const dayIn = inflows
      .filter(f => f.maturityDate === dateStr)
      .reduce((s, f) => {
        const rules = findApplicable(inflowRules, f);
        const w = rules.length > 0 ? rules[0].weight : 0;
        return s + f.amount * w;
      }, 0);

    dailyNet.push(dayOut - dayIn);
  }

  const cumulative = accumulate(0, dailyNet);
  return Math.max(0, ...cumulative);
}

// ── Net cash outflow ──────────────────────────────────────────────────────────

/**
 * Total Net Cash Outflow per 12 CFR 249.30.
 * = max(grossOutflow − min(inflowTotal, 0.75 × grossOutflow), 0) + mismatchAddOn
 */
export function totalNetCashOutflowAmount(
  outflows: Flow[],
  inflows: Flow[],
  referenceDate: string
): { netCashOutflow: number; grossOutflow: number; cappedInflow: number; mismatchAddOn: number } {
  const windowOut = flowsInWindow(outflows, referenceDate);
  const windowIn = flowsInWindow(inflows, referenceDate);

  const grossOutflow = totalOutflow(windowOut);
  const inflowTotal = totalInflow(windowIn);
  const cappedInflow = Math.min(inflowTotal, INFLOW_CAP * grossOutflow);
  const addOn = mismatchAddOn(outflows, inflows, referenceDate);

  const netCashOutflow = Math.max(grossOutflow - cappedInflow, 0) + addOn;

  return { netCashOutflow, grossOutflow, cappedInflow, mismatchAddOn: addOn };
}

// ── LCR ───────────────────────────────────────────────────────────────────────

/**
 * Computes the LCR ratio.
 * Returns Infinity if net cash outflow is zero (fully liquid).
 */
export function lcr(
  hqlaFlows: Flow[],
  outflows: Flow[],
  inflows: Flow[],
  referenceDate: string
): LCRResult {
  const hqla = hqlaAmount(hqlaFlows);
  const { netCashOutflow, grossOutflow, cappedInflow, mismatchAddOn: addOn } =
    totalNetCashOutflowAmount(outflows, inflows, referenceDate);

  const ratio = netCashOutflow === 0 ? Infinity : hqla / netCashOutflow;

  return {
    hqla,
    netCashOutflow,
    ratio,
    grossOutflow,
    cappedInflow,
    mismatchAddOn: addOn,
  };
}
