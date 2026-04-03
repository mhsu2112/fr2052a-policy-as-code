/**
 * TypeScript types ported from FINOS Morphir LCR sample (Elm).
 * Source: https://github.com/finos/morphir-examples/tree/main/src/Morphir/Sample/LCR
 *
 * ruleCode: Elm uses List String (e.g. ["O","D","1"]); here we use dot-joined strings ("O.D.1").
 * Flow amounts are pre-stressed (weight already applied by caller for outflow/inflow).
 * HQLA amounts are raw market values (haircuts applied internally in hqlaAmount).
 */

// ── Asset category codes (Elm: Basics.AssetCategoryCodes) ─────────────────────

export type AssetCategoryCode =
  | 'Level1Assets'
  | 'Level2aAssets'
  | 'Level2bAssets';

// ── Insurance type (Elm: Basics.InsuranceType) ────────────────────────────────

export type InsuranceType = 'FDIC' | 'Uninsured';

// ── Counterparty types (Elm: Flows.CounterpartyType) ─────────────────────────

export type CounterpartyType =
  | 'Retail'
  | 'SmallBusiness'
  | 'NonFinancialCorporate'
  | 'BankOrDepositoryInstitution'
  | 'CentralBank'
  | 'GovernmentSponsoredEntity'
  | 'PublicSectorEntity'
  | 'MultilateralDevelopmentBank'
  | 'OtherSupranational'
  | 'PensionFund'
  | 'Fiduciary'
  | 'CreditUnion'
  | 'InvestmentCompany'
  | 'FinancialMarketUtility'
  | 'OtherFinancial'
  | 'Sovereign'
  | 'CentralGovernment'
  | 'RegulatedFinancialInstitution';

// ── Counterparty (Elm: Flows.Counterparty) ────────────────────────────────────

export interface Counterparty {
  counterpartyType: CounterpartyType;
  insuranceType?: InsuranceType;
  isOperational?: boolean;
  isInstitutionAffiliate?: boolean;
  isCollateralizedByLevel1?: boolean;
  isCollateralizedByLevel2a?: boolean;
}

// ── Product / Flow (Elm: Flows.Product, flows are products with amounts) ──────

export interface Flow {
  /** FR 2052a section ID in dot notation, e.g. "O.D.1" */
  ruleCode: string;
  amount: number;
  maturityDate?: string; // ISO date string "YYYY-MM-DD"; undefined = open/demand
  businessDate?: string; // ISO date string for t0 HQLA
  counterparty?: Counterparty;
  assetCategory?: AssetCategoryCode;
  isUnencumbered?: boolean;
  isOperationalDeposit?: boolean;
}

// ── Rule (Elm: Rules.Rule a) ──────────────────────────────────────────────────

export interface Rule<T> {
  name: string;
  weight: number;
  applies: (item: T) => boolean;
}

// ── LCR result ────────────────────────────────────────────────────────────────

export interface LCRResult {
  hqla: number;
  netCashOutflow: number;
  ratio: number;
  /** Raw outflow total before inflow cap */
  grossOutflow: number;
  /** Capped inflow amount (75% of gross outflow) */
  cappedInflow: number;
  /** Maturity mismatch add-on */
  mismatchAddOn: number;
}
