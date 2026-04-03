/**
 * Inflow rules ported from FINOS Morphir LCR sample (14 rules).
 * Source: morphir-examples/src/Morphir/Sample/LCR/Inflows.elm
 *
 * NOTE: Rule "22(b)(3)L1" intentionally uses the Level2a predicate — this matches
 * a bug in the upstream Elm source, ported faithfully.
 */

import type { Rule, Flow } from './types';

// ── Helpers ───────────────────────────────────────────────────────────────────

function isCollateralLevel1(f: Flow): boolean {
  return f.counterparty?.isCollateralizedByLevel1 === true;
}

function isCollateralLevel2a(f: Flow): boolean {
  return f.counterparty?.isCollateralizedByLevel2a === true;
}

function isHQLA(f: Flow): boolean {
  const cat = f.assetCategory;
  return cat === 'Level1Assets' || cat === 'Level2aAssets' || cat === 'Level2bAssets';
}

function isAffiliate(f: Flow): boolean {
  return f.counterparty?.isInstitutionAffiliate === true;
}

// ── 14 Inflow rules per Elm source ───────────────────────────────────────────

export const inflowRules: Rule<Flow>[] = [
  // §249.22(b)(1) — secured lending backed by Level1, 0% inflow (no credit)
  {
    name: '22(b)(1)',
    weight: 0.00,
    applies: (f) => f.ruleCode.startsWith('I.S') && isCollateralLevel1(f),
  },

  // §249.22(b)(2) — secured lending backed by Level2a, 15%
  {
    name: '22(b)(2)',
    weight: 0.15,
    applies: (f) => f.ruleCode.startsWith('I.S') && isCollateralLevel2a(f),
  },

  // §249.22(b)(3)L1 — secured lending backed by Level2b (NOTE: uses L2a predicate — upstream bug)
  {
    name: '22(b)(3)L1',
    weight: -1.00,
    applies: (f) => f.ruleCode.startsWith('I.S') && isCollateralLevel2a(f), // bug: should be Level2b
  },

  // §249.22(b)(3)L2a — secured lending, non-HQLA collateral from financial entity, 50%
  {
    name: '22(b)(3)L2a',
    weight: 0.50,
    applies: (f) =>
      f.ruleCode.startsWith('I.S') &&
      !isCollateralLevel1(f) &&
      !isCollateralLevel2a(f) &&
      !isHQLA(f),
  },

  // §249.22(b)(3)L2b — secured lending, non-HQLA collateral from non-financial, 100%
  {
    name: '22(b)(3)L2b',
    weight: 1.00,
    applies: (f) =>
      f.ruleCode.startsWith('I.S') &&
      !isCollateralLevel1(f) &&
      !isCollateralLevel2a(f) &&
      isHQLA(f),
  },

  // §249.22(c) — unencumbered assets, 100%
  {
    name: '22(c)',
    weight: 1.00,
    applies: (f) => f.isUnencumbered === true,
  },

  // §249.22(d) — asset exchange inflow (HQLA upgrade), 100%
  {
    name: '22(d)',
    weight: 1.00,
    applies: (f) => f.ruleCode === 'I.O.3',
  },

  // §249.23(a)(1) — retail inflow (demand), 50%
  {
    name: '23(a)(1)',
    weight: 0.50,
    applies: (f) =>
      f.ruleCode.startsWith('I.U') &&
      f.counterparty?.counterpartyType === 'Retail' &&
      !isAffiliate(f),
  },

  // §249.23(a)(2) — small business inflow, 50%
  {
    name: '23(a)(2)',
    weight: 0.50,
    applies: (f) =>
      f.ruleCode.startsWith('I.U') &&
      f.counterparty?.counterpartyType === 'SmallBusiness' &&
      !isAffiliate(f),
  },

  // §249.23(b) — non-financial corporate inflow, 50%
  {
    name: '23(b)',
    weight: 0.50,
    applies: (f) =>
      f.ruleCode.startsWith('I.U') &&
      f.counterparty?.counterpartyType === 'NonFinancialCorporate' &&
      !isAffiliate(f),
  },

  // §249.23(c) — financial entity inflow, 100%
  {
    name: '23(c)',
    weight: 1.00,
    applies: (f) => {
      const ct = f.counterparty?.counterpartyType;
      return (
        f.ruleCode.startsWith('I.U') &&
        !isAffiliate(f) &&
        (ct === 'BankOrDepositoryInstitution' ||
          ct === 'OtherFinancial' ||
          ct === 'PensionFund' ||
          ct === 'Fiduciary' ||
          ct === 'CreditUnion' ||
          ct === 'InvestmentCompany' ||
          ct === 'FinancialMarketUtility')
      );
    },
  },

  // §249.23(d) — GSE / PSE / MDB inflow, 50%
  {
    name: '23(d)',
    weight: 0.50,
    applies: (f) => {
      const ct = f.counterparty?.counterpartyType;
      return (
        f.ruleCode.startsWith('I.U') &&
        !isAffiliate(f) &&
        (ct === 'GovernmentSponsoredEntity' ||
          ct === 'PublicSectorEntity' ||
          ct === 'MultilateralDevelopmentBank')
      );
    },
  },

  // §249.23(e) — central bank / sovereign inflow, 100%
  {
    name: '23(e)',
    weight: 1.00,
    applies: (f) => {
      const ct = f.counterparty?.counterpartyType;
      return (
        f.ruleCode.startsWith('I.U') &&
        !isAffiliate(f) &&
        (ct === 'CentralBank' || ct === 'Sovereign' || ct === 'CentralGovernment')
      );
    },
  },

  // §249.23(f) — affiliate inflow, 0%
  {
    name: '23(f)',
    weight: 0.00,
    applies: (f) => f.ruleCode.startsWith('I.U') && isAffiliate(f),
  },
];
