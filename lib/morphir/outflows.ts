/**
 * Outflow rules ported from FINOS Morphir LCR sample (24 rules).
 * Source: morphir-examples/src/Morphir/Sample/LCR/Outflows.elm
 *
 * Rule weights represent run-off rates per 12 CFR 249.
 * Flow amounts passed to the rule engine are pre-stressed values.
 */

import type { Rule, Flow } from './types';

// ── Helpers ───────────────────────────────────────────────────────────────────

function isRetail(f: Flow): boolean {
  return f.counterparty?.counterpartyType === 'Retail';
}

function isSmallBusiness(f: Flow): boolean {
  return f.counterparty?.counterpartyType === 'SmallBusiness';
}

function isFDIC(f: Flow): boolean {
  return f.counterparty?.insuranceType === 'FDIC';
}

function isOperational(f: Flow): boolean {
  return f.counterparty?.isOperational === true;
}

function isAffiliate(f: Flow): boolean {
  return f.counterparty?.isInstitutionAffiliate === true;
}

function isCollateralLevel1(f: Flow): boolean {
  return f.counterparty?.isCollateralizedByLevel1 === true;
}

function isCollateralLevel2a(f: Flow): boolean {
  return f.counterparty?.isCollateralizedByLevel2a === true;
}

// Counterparty type helpers
function isNonFinancialCorporate(f: Flow): boolean {
  return f.counterparty?.counterpartyType === 'NonFinancialCorporate';
}
function isBankOrDepository(f: Flow): boolean {
  return f.counterparty?.counterpartyType === 'BankOrDepositoryInstitution';
}
function isGovernmentSponsoredEntity(f: Flow): boolean {
  return f.counterparty?.counterpartyType === 'GovernmentSponsoredEntity';
}
function isPublicSectorEntity(f: Flow): boolean {
  return f.counterparty?.counterpartyType === 'PublicSectorEntity';
}
function isMultilateralDevelopmentBank(f: Flow): boolean {
  return f.counterparty?.counterpartyType === 'MultilateralDevelopmentBank';
}
function isCentralBank(f: Flow): boolean {
  return f.counterparty?.counterpartyType === 'CentralBank';
}
function isSovereign(f: Flow): boolean {
  return f.counterparty?.counterpartyType === 'Sovereign';
}
function isOtherFinancial(f: Flow): boolean {
  const ct = f.counterparty?.counterpartyType;
  return ct === 'OtherFinancial'
    || ct === 'PensionFund'
    || ct === 'Fiduciary'
    || ct === 'CreditUnion'
    || ct === 'InvestmentCompany'
    || ct === 'FinancialMarketUtility';
}

// ── 24 Outflow rules per Elm source ──────────────────────────────────────────

export const outflowRules: Rule<Flow>[] = [
  // §249.32(a)(1) — stable retail, FDIC-insured, 3%
  {
    name: '32(a)(1)',
    weight: 0.03,
    applies: (f) => isRetail(f) && isFDIC(f) && !isOperational(f) && !isAffiliate(f),
  },

  // §249.32(a)(2) — less stable retail, uninsured, 10%
  {
    name: '32(a)(2)',
    weight: 0.10,
    applies: (f) => isRetail(f) && !isFDIC(f) && !isOperational(f) && !isAffiliate(f),
  },

  // §249.32(b)(1) — stable small business, FDIC-insured, 3%
  {
    name: '32(b)(1)',
    weight: 0.03,
    applies: (f) => isSmallBusiness(f) && isFDIC(f) && !isOperational(f) && !isAffiliate(f),
  },

  // §249.32(b)(2) — less stable small business, 10%
  {
    name: '32(b)(2)',
    weight: 0.10,
    applies: (f) => isSmallBusiness(f) && !isFDIC(f) && !isOperational(f) && !isAffiliate(f),
  },

  // §249.32(c) — operational deposits from non-financial corporates, 25%
  {
    name: '32(c)',
    weight: 0.25,
    applies: (f) => isNonFinancialCorporate(f) && isOperational(f),
  },

  // §249.32(d) — non-operational non-financial corporates, 40%
  {
    name: '32(d)',
    weight: 0.40,
    applies: (f) =>
      isNonFinancialCorporate(f) && !isOperational(f) && !isAffiliate(f),
  },

  // §249.32(e)(1)(i) — bank operational deposits, collateralized by Level1, 25%
  {
    name: '32(e)(1)(i)',
    weight: 0.25,
    applies: (f) =>
      isBankOrDepository(f) && isOperational(f) && isCollateralLevel1(f),
  },

  // §249.32(e)(1)(ii) — bank operational deposits, collateralized by Level2a, 25%
  {
    name: '32(e)(1)(ii)',
    weight: 0.25,
    applies: (f) =>
      isBankOrDepository(f) && isOperational(f) && isCollateralLevel2a(f),
  },

  // §249.32(e)(1)(iii) — bank operational deposits, other collateral, 25%
  {
    name: '32(e)(1)(iii)',
    weight: 0.25,
    applies: (f) =>
      isBankOrDepository(f) &&
      isOperational(f) &&
      !isCollateralLevel1(f) &&
      !isCollateralLevel2a(f),
  },

  // §249.32(e)(2) — bank non-operational deposits, 100%
  {
    name: '32(e)(2)',
    weight: 1.00,
    applies: (f) => isBankOrDepository(f) && !isOperational(f) && !isAffiliate(f),
  },

  // §249.32(f) — GSE operational deposits, 25%
  {
    name: '32(f)',
    weight: 0.25,
    applies: (f) => isGovernmentSponsoredEntity(f) && isOperational(f),
  },

  // §249.32(g) — GSE non-operational deposits, 40%
  {
    name: '32(g)',
    weight: 0.40,
    applies: (f) =>
      isGovernmentSponsoredEntity(f) && !isOperational(f) && !isAffiliate(f),
  },

  // §249.32(h) — PSE / MDB / supranational operational deposits, 25%
  {
    name: '32(h)',
    weight: 0.25,
    applies: (f) =>
      (isPublicSectorEntity(f) || isMultilateralDevelopmentBank(f)) &&
      isOperational(f),
  },

  // §249.32(i) — PSE / MDB non-operational deposits, 40%
  {
    name: '32(i)',
    weight: 0.40,
    applies: (f) =>
      (isPublicSectorEntity(f) || isMultilateralDevelopmentBank(f)) &&
      !isOperational(f) &&
      !isAffiliate(f),
  },

  // §249.32(j) — central bank / sovereign / central government operational, 25%
  {
    name: '32(j)',
    weight: 0.25,
    applies: (f) =>
      (isCentralBank(f) || isSovereign(f)) && isOperational(f),
  },

  // §249.32(k) — central bank / sovereign non-operational, 40%
  {
    name: '32(k)',
    weight: 0.40,
    applies: (f) =>
      (isCentralBank(f) || isSovereign(f)) && !isOperational(f) && !isAffiliate(f),
  },

  // §249.32(l) — other financial entity deposits, 100%
  {
    name: '32(l)',
    weight: 1.00,
    applies: (f) => isOtherFinancial(f) && !isAffiliate(f),
  },

  // §249.32(m) — affiliate deposits, 100%
  {
    name: '32(m)',
    weight: 1.00,
    applies: (f) => isAffiliate(f),
  },

  // §249.33(a) — secured lending backed by Level1, 0%
  {
    name: '33(a)',
    weight: 0.00,
    applies: (f) =>
      f.ruleCode.startsWith('O.S') && isCollateralLevel1(f) && !isAffiliate(f),
  },

  // §249.33(b) — secured lending backed by Level2a, 15%
  {
    name: '33(b)',
    weight: 0.15,
    applies: (f) =>
      f.ruleCode.startsWith('O.S') && isCollateralLevel2a(f) && !isAffiliate(f),
  },

  // §249.33(c) — secured lending backed by non-HQLA, 100%
  {
    name: '33(c)',
    weight: 1.00,
    applies: (f) =>
      f.ruleCode.startsWith('O.S') &&
      !isCollateralLevel1(f) &&
      !isCollateralLevel2a(f) &&
      !isAffiliate(f),
  },

  // §249.33(d) — affiliate secured lending, 100%
  {
    name: '33(d)',
    weight: 1.00,
    applies: (f) => f.ruleCode.startsWith('O.S') && isAffiliate(f),
  },

  // §249.34 — asset exchange outflow (HQLA level downgrade), 100%
  {
    name: '34',
    weight: 1.00,
    applies: (f) => f.ruleCode === 'O.O.4',
  },

  // §249.35 — credit / liquidity facility outflow, 100%
  {
    name: '35',
    weight: 1.00,
    applies: (f) => f.ruleCode === 'O.O.5' || f.ruleCode === 'O.O.6',
  },
];
