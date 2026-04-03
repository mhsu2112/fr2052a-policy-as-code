/**
 * Unit tests for lib/morphir/calculations.ts
 * Uses Node.js built-in test runner (node:test).
 * Run: node --require tsx/cjs lib/morphir/__tests__/calculations.test.ts
 *   or: npx tsx --test lib/morphir/__tests__/calculations.test.ts
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import {
  accumulate,
  hqlaAmount,
  totalOutflow,
  totalInflow,
  totalNetCashOutflowAmount,
  lcr,
  flowsInWindow,
} from '../calculations';
import type { Flow } from '../types';

// ── accumulate ────────────────────────────────────────────────────────────────

describe('accumulate', () => {
  test('empty list returns empty', () => {
    assert.deepEqual(accumulate(0, []), []);
  });

  test('running cumulative sum from starter 0', () => {
    assert.deepEqual(accumulate(0, [10, 20, 30]), [10, 30, 60]);
  });

  test('running cumulative sum from non-zero starter', () => {
    assert.deepEqual(accumulate(5, [1, 2, 3]), [6, 8, 11]);
  });
});

// ── hqlaAmount ────────────────────────────────────────────────────────────────

describe('hqlaAmount', () => {
  test('Level1 assets: no haircut applied', () => {
    const flows: Flow[] = [
      { ruleCode: 'I.A.1', amount: 100, assetCategory: 'Level1Assets' },
    ];
    assert.equal(hqlaAmount(flows), 100);
  });

  test('Level2a assets: 85% haircut + 40% Level2 cap applied', () => {
    // level2a = 100 * 0.85 = 85 (after haircut)
    // unadjusted = 85; level2bExcess = 0
    // level2Excess = max(0, 85 - 0.40 * 85) = max(0, 51) = 51
    // adjusted = 85 - 51 = 34
    // With no Level1 assets, Level2 is capped at 40% of unadjusted HQLA.
    const flows: Flow[] = [
      { ruleCode: 'I.A.2', amount: 100, assetCategory: 'Level2aAssets' },
    ];
    assert.equal(hqlaAmount(flows), 34);
  });

  test('Level2b assets: 50% haircut applied', () => {
    const flows: Flow[] = [
      { ruleCode: 'I.A.3', amount: 100, assetCategory: 'Level2bAssets' },
    ];
    // unadjusted = 50; level2bCap = 15% * 50 = 7.5; level2bAdj = 7.5
    // level2Total = 0 + 7.5 = 7.5; level2Cap = 40% * (0 + 7.5) = 3
    // level2Adj = min(7.5, 3) = 3
    assert.equal(hqlaAmount(flows), 3);
  });

  test('pure Level1 portfolio', () => {
    const flows: Flow[] = [
      { ruleCode: 'I.A.1', amount: 200, assetCategory: 'Level1Assets' },
      { ruleCode: 'I.A.1', amount: 300, assetCategory: 'Level1Assets' },
    ];
    assert.equal(hqlaAmount(flows), 500);
  });

  test('mixed Level1 + Level2a within caps', () => {
    // level1=100, level2a=100*0.85=85
    // unadjusted=185
    // level2bExcess = max(0, 0 - 0.15*185) = 0
    // level2Excess = max(0, 85 - 0.40*185) = max(0, 85-74) = 11
    // adjusted = 185 - 0 - 11 = 174
    const flows: Flow[] = [
      { ruleCode: 'I.A.1', amount: 100, assetCategory: 'Level1Assets' },
      { ruleCode: 'I.A.2', amount: 100, assetCategory: 'Level2aAssets' },
    ];
    assert.equal(hqlaAmount(flows), 174);
  });

  test('empty flows returns 0', () => {
    assert.equal(hqlaAmount([]), 0);
  });
});

// ── totalOutflow ──────────────────────────────────────────────────────────────

describe('totalOutflow', () => {
  test('stable retail FDIC deposit: 3% weight', () => {
    const flows: Flow[] = [
      {
        ruleCode: 'O.D.1',
        amount: 1000,
        counterparty: { counterpartyType: 'Retail', insuranceType: 'FDIC' },
      },
    ];
    assert.equal(totalOutflow(flows), 30); // 1000 * 0.03
  });

  test('less stable retail deposit: 10% weight', () => {
    const flows: Flow[] = [
      {
        ruleCode: 'O.D.1',
        amount: 1000,
        counterparty: { counterpartyType: 'Retail', insuranceType: 'Uninsured' },
      },
    ];
    assert.equal(totalOutflow(flows), 100); // 1000 * 0.10
  });

  test('financial entity deposit: 100% weight', () => {
    const flows: Flow[] = [
      {
        ruleCode: 'O.W.1',
        amount: 500,
        counterparty: { counterpartyType: 'BankOrDepositoryInstitution' },
      },
    ];
    assert.equal(totalOutflow(flows), 500); // 1.0 weight
  });

  test('multiple flows sum correctly', () => {
    const flows: Flow[] = [
      {
        ruleCode: 'O.D.1',
        amount: 1000,
        counterparty: { counterpartyType: 'Retail', insuranceType: 'FDIC' },
      },
      {
        ruleCode: 'O.D.1',
        amount: 500,
        counterparty: { counterpartyType: 'Retail', insuranceType: 'Uninsured' },
      },
    ];
    assert.equal(totalOutflow(flows), 1000 * 0.03 + 500 * 0.10); // 30 + 50 = 80
  });
});

// ── totalInflow ───────────────────────────────────────────────────────────────

describe('totalInflow', () => {
  test('retail inflow: 50% weight', () => {
    const flows: Flow[] = [
      {
        ruleCode: 'I.U.1',
        amount: 200,
        counterparty: { counterpartyType: 'Retail' },
      },
    ];
    assert.equal(totalInflow(flows), 100); // 200 * 0.5
  });

  test('central bank inflow: 100% weight', () => {
    const flows: Flow[] = [
      {
        ruleCode: 'I.U.5',
        amount: 300,
        counterparty: { counterpartyType: 'CentralBank' },
      },
    ];
    assert.equal(totalInflow(flows), 300);
  });

  test('affiliate inflow: 0% weight', () => {
    const flows: Flow[] = [
      {
        ruleCode: 'I.U.6',
        amount: 1000,
        counterparty: {
          counterpartyType: 'NonFinancialCorporate',
          isInstitutionAffiliate: true,
        },
      },
    ];
    assert.equal(totalInflow(flows), 0);
  });
});

// ── flowsInWindow ─────────────────────────────────────────────────────────────

describe('flowsInWindow', () => {
  const ref = '2025-01-01';

  test('flow maturing within 30 days is included', () => {
    const flows: Flow[] = [
      { ruleCode: 'O.D.1', amount: 100, maturityDate: '2025-01-31' },
    ];
    assert.equal(flowsInWindow(flows, ref).length, 1);
  });

  test('flow maturing after 30 days is excluded', () => {
    const flows: Flow[] = [
      { ruleCode: 'O.D.1', amount: 100, maturityDate: '2025-02-02' },
    ];
    assert.equal(flowsInWindow(flows, ref).length, 0);
  });

  test('open/demand flow (no maturityDate) is always included', () => {
    const flows: Flow[] = [{ ruleCode: 'O.D.1', amount: 100 }];
    assert.equal(flowsInWindow(flows, ref).length, 1);
  });
});

// ── totalNetCashOutflowAmount ─────────────────────────────────────────────────

describe('totalNetCashOutflowAmount', () => {
  const ref = '2025-01-01';

  test('inflow cap applies when inflows exceed 75% of gross outflows', () => {
    const outflows: Flow[] = [
      {
        ruleCode: 'O.D.1',
        amount: 10000, // weight 1.0 unmatched → 10000 gross
        counterparty: { counterpartyType: 'BankOrDepositoryInstitution' },
      },
    ];
    const inflows: Flow[] = [
      {
        ruleCode: 'I.U.1',
        amount: 20000, // weight 0.5 → 10000 inflow
        counterparty: { counterpartyType: 'Retail' },
      },
    ];

    const { grossOutflow, cappedInflow, netCashOutflow } =
      totalNetCashOutflowAmount(outflows, inflows, ref);

    assert.equal(grossOutflow, 10000);
    // cappedInflow = min(10000, 0.75 * 10000) = min(10000, 7500) = 7500
    assert.equal(cappedInflow, 7500);
    // netCashOutflow = max(10000 - 7500, 0) + mismatch = 2500 + 0
    assert.equal(netCashOutflow, 2500);
  });
});

// ── lcr ───────────────────────────────────────────────────────────────────────

describe('lcr', () => {
  const ref = '2025-01-01';

  test('basic LCR calculation', () => {
    const hqlaFlows: Flow[] = [
      { ruleCode: 'I.A.1', amount: 1000, assetCategory: 'Level1Assets' },
    ];
    const outflows: Flow[] = [
      {
        ruleCode: 'O.D.1',
        amount: 10000,
        counterparty: { counterpartyType: 'Retail', insuranceType: 'FDIC' },
      },
    ];
    const result = lcr(hqlaFlows, outflows, [], ref);

    // grossOutflow = 10000 * 0.03 = 300; inflows = 0; net = 300
    assert.equal(result.hqla, 1000);
    assert.equal(result.grossOutflow, 300);
    assert.ok(result.ratio > 3); // 1000 / 300 ≈ 3.33
  });

  test('returns Infinity when net cash outflow is zero', () => {
    const hqlaFlows: Flow[] = [
      { ruleCode: 'I.A.1', amount: 1000, assetCategory: 'Level1Assets' },
    ];
    const result = lcr(hqlaFlows, [], [], ref);
    assert.equal(result.ratio, Infinity);
    assert.equal(result.netCashOutflow, 0);
  });

  test('LCR below 100% when HQLA insufficient', () => {
    const hqlaFlows: Flow[] = [
      { ruleCode: 'I.A.1', amount: 100, assetCategory: 'Level1Assets' },
    ];
    const outflows: Flow[] = [
      {
        ruleCode: 'O.D.1',
        amount: 100000,
        counterparty: { counterpartyType: 'BankOrDepositoryInstitution' },
      },
    ];
    const result = lcr(hqlaFlows, outflows, [], ref);
    assert.ok(result.ratio < 1.0);
  });
});
