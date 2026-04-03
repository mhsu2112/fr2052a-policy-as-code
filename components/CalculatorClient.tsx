'use client';

import { useState, useCallback } from 'react';
import type { Flow, LCRResult, CounterpartyType, InsuranceType } from '@/lib/morphir/types';
import { lcr } from '@/lib/morphir/calculations';

// ── Default scenario ──────────────────────────────────────────────────────────

const DEFAULT_REF_DATE = new Date().toISOString().split('T')[0];

const DEFAULT_HQLA: Flow[] = [
  { ruleCode: 'I.A.1', amount: 500_000_000, assetCategory: 'Level1Assets' },
  { ruleCode: 'I.A.2', amount: 200_000_000, assetCategory: 'Level2aAssets' },
];

const DEFAULT_OUTFLOWS: Flow[] = [
  {
    ruleCode: 'O.D.1',
    amount: 1_000_000_000,
    counterparty: { counterpartyType: 'Retail', insuranceType: 'FDIC' },
  },
  {
    ruleCode: 'O.W.1',
    amount: 500_000_000,
    counterparty: { counterpartyType: 'BankOrDepositoryInstitution' },
  },
];

const DEFAULT_INFLOWS: Flow[] = [
  {
    ruleCode: 'I.U.1',
    amount: 300_000_000,
    counterparty: { counterpartyType: 'NonFinancialCorporate' },
  },
];

// ── Types ─────────────────────────────────────────────────────────────────────

type FlowRow = {
  id: string;
  ruleCode: string;
  amount: string;
  counterpartyType: string;
  insuranceType: string;
  isOperational: boolean;
  isAffiliate: boolean;
  isCollateralLevel1: boolean;
  isCollateralLevel2a: boolean;
  assetCategory: string;
};

type Tab = 'hqla' | 'outflows' | 'inflows';

// ── Helpers ───────────────────────────────────────────────────────────────────

let idCounter = 100;
function newId(): string {
  return String(++idCounter);
}

function rowToFlow(row: FlowRow, tab: Tab): Flow {
  const amount = parseFloat(row.amount.replace(/,/g, '')) || 0;
  const flow: Flow = { ruleCode: row.ruleCode, amount };

  if (tab === 'hqla') {
    if (row.assetCategory) {
      flow.assetCategory = row.assetCategory as Flow['assetCategory'];
    }
  } else {
    if (row.counterpartyType) {
      flow.counterparty = {
        counterpartyType: row.counterpartyType as CounterpartyType,
        insuranceType: row.insuranceType ? (row.insuranceType as InsuranceType) : undefined,
        isOperational: row.isOperational || undefined,
        isInstitutionAffiliate: row.isAffiliate || undefined,
        isCollateralizedByLevel1: row.isCollateralLevel1 || undefined,
        isCollateralizedByLevel2a: row.isCollateralLevel2a || undefined,
      };
    }
  }
  return flow;
}

function flowToRow(flow: Flow, tab: Tab): FlowRow {
  return {
    id: newId(),
    ruleCode: flow.ruleCode,
    amount: String(flow.amount),
    counterpartyType: tab !== 'hqla' ? (flow.counterparty?.counterpartyType ?? '') : '',
    insuranceType: tab !== 'hqla' ? (flow.counterparty?.insuranceType ?? '') : '',
    isOperational: flow.counterparty?.isOperational ?? false,
    isAffiliate: flow.counterparty?.isInstitutionAffiliate ?? false,
    isCollateralLevel1: flow.counterparty?.isCollateralizedByLevel1 ?? false,
    isCollateralLevel2a: flow.counterparty?.isCollateralizedByLevel2a ?? false,
    assetCategory: tab === 'hqla' ? (flow.assetCategory ?? '') : '',
  };
}

function fmt(n: number, decimals = 0): string {
  if (!isFinite(n)) return '∞';
  return n.toLocaleString('en-US', { maximumFractionDigits: decimals });
}

function fmtPct(n: number): string {
  if (!isFinite(n)) return '∞';
  return (n * 100).toFixed(1) + '%';
}

// ── Row editor ────────────────────────────────────────────────────────────────

const COUNTERPARTY_TYPES = [
  'Retail', 'SmallBusiness', 'NonFinancialCorporate',
  'BankOrDepositoryInstitution', 'CentralBank', 'GovernmentSponsoredEntity',
  'PublicSectorEntity', 'MultilateralDevelopmentBank', 'OtherSupranational',
  'PensionFund', 'Fiduciary', 'CreditUnion', 'InvestmentCompany',
  'FinancialMarketUtility', 'OtherFinancial', 'Sovereign',
  'CentralGovernment', 'RegulatedFinancialInstitution',
];

const ASSET_CATEGORIES = ['Level1Assets', 'Level2aAssets', 'Level2bAssets'];

function FlowRowEditor({
  row,
  tab,
  onChange,
  onRemove,
}: {
  row: FlowRow;
  tab: Tab;
  onChange: (id: string, field: keyof FlowRow, value: string | boolean) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <tr className="border-b border-slate-700 hover:bg-slate-800/50">
      <td className="px-3 py-2">
        <input
          className="w-20 bg-slate-900 border border-slate-600 rounded px-2 py-1 text-xs font-mono text-slate-200 focus:outline-none focus:border-primary-500"
          value={row.ruleCode}
          onChange={e => onChange(row.id, 'ruleCode', e.target.value)}
          placeholder="O.D.1"
        />
      </td>
      <td className="px-3 py-2">
        <input
          className="w-32 bg-slate-900 border border-slate-600 rounded px-2 py-1 text-xs font-mono text-slate-200 focus:outline-none focus:border-primary-500 text-right"
          value={row.amount}
          onChange={e => onChange(row.id, 'amount', e.target.value)}
          placeholder="0"
        />
      </td>
      {tab === 'hqla' ? (
        <td className="px-3 py-2">
          <select
            className="bg-slate-900 border border-slate-600 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-primary-500"
            value={row.assetCategory}
            onChange={e => onChange(row.id, 'assetCategory', e.target.value)}
          >
            <option value="">— select —</option>
            {ASSET_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </td>
      ) : (
        <>
          <td className="px-3 py-2">
            <select
              className="bg-slate-900 border border-slate-600 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-primary-500"
              value={row.counterpartyType}
              onChange={e => onChange(row.id, 'counterpartyType', e.target.value)}
            >
              <option value="">— select —</option>
              {COUNTERPARTY_TYPES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </td>
          <td className="px-3 py-2">
            <select
              className="bg-slate-900 border border-slate-600 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-primary-500"
              value={row.insuranceType}
              onChange={e => onChange(row.id, 'insuranceType', e.target.value)}
            >
              <option value="">none</option>
              <option value="FDIC">FDIC</option>
              <option value="Uninsured">Uninsured</option>
            </select>
          </td>
          <td className="px-3 py-2 text-center">
            <input type="checkbox" checked={row.isOperational}
              onChange={e => onChange(row.id, 'isOperational', e.target.checked)} />
          </td>
          <td className="px-3 py-2 text-center">
            <input type="checkbox" checked={row.isAffiliate}
              onChange={e => onChange(row.id, 'isAffiliate', e.target.checked)} />
          </td>
          <td className="px-3 py-2 text-center">
            <input type="checkbox" checked={row.isCollateralLevel1}
              onChange={e => onChange(row.id, 'isCollateralLevel1', e.target.checked)} />
          </td>
          <td className="px-3 py-2 text-center">
            <input type="checkbox" checked={row.isCollateralLevel2a}
              onChange={e => onChange(row.id, 'isCollateralLevel2a', e.target.checked)} />
          </td>
        </>
      )}
      <td className="px-3 py-2">
        <button
          onClick={() => onRemove(row.id)}
          className="text-slate-500 hover:text-red-400 text-xs px-1"
        >
          ✕
        </button>
      </td>
    </tr>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function CalculatorClient() {
  const [refDate, setRefDate] = useState(DEFAULT_REF_DATE);
  const [tab, setTab] = useState<Tab>('hqla');
  const [hqlaRows, setHqlaRows] = useState<FlowRow[]>(
    () => DEFAULT_HQLA.map(f => flowToRow(f, 'hqla'))
  );
  const [outflowRows, setOutflowRows] = useState<FlowRow[]>(
    () => DEFAULT_OUTFLOWS.map(f => flowToRow(f, 'outflows'))
  );
  const [inflowRows, setInflowRows] = useState<FlowRow[]>(
    () => DEFAULT_INFLOWS.map(f => flowToRow(f, 'inflows'))
  );

  const getRows = (t: Tab) =>
    t === 'hqla' ? hqlaRows : t === 'outflows' ? outflowRows : inflowRows;
  const setRows = (t: Tab, rows: FlowRow[]) => {
    if (t === 'hqla') setHqlaRows(rows);
    else if (t === 'outflows') setOutflowRows(rows);
    else setInflowRows(rows);
  };

  const handleChange = useCallback(
    (t: Tab) =>
      (id: string, field: keyof FlowRow, value: string | boolean) => {
        setRows(t, getRows(t).map(r => r.id === id ? { ...r, [field]: value } : r));
      },
    [hqlaRows, outflowRows, inflowRows]
  );

  const handleRemove = useCallback(
    (t: Tab) => (id: string) => {
      setRows(t, getRows(t).filter(r => r.id !== id));
    },
    [hqlaRows, outflowRows, inflowRows]
  );

  const handleAdd = (t: Tab) => {
    const empty: FlowRow = {
      id: newId(),
      ruleCode: '',
      amount: '0',
      counterpartyType: '',
      insuranceType: '',
      isOperational: false,
      isAffiliate: false,
      isCollateralLevel1: false,
      isCollateralLevel2a: false,
      assetCategory: '',
    };
    setRows(t, [...getRows(t), empty]);
  };

  // Compute LCR on each render (fast, in-memory)
  const hqlaFlows = hqlaRows.map(r => rowToFlow(r, 'hqla'));
  const outflows = outflowRows.map(r => rowToFlow(r, 'outflows'));
  const inflows = inflowRows.map(r => rowToFlow(r, 'inflows'));

  let result: LCRResult | null = null;
  let calcError: string | null = null;
  try {
    result = lcr(hqlaFlows, outflows, inflows, refDate);
  } catch (e) {
    calcError = e instanceof Error ? e.message : String(e);
  }

  const pct = result ? result.ratio * 100 : 0;
  const passing = isFinite(pct) ? pct >= 100 : true;

  // ── Render ────────────────────────────────────────────────────────────────

  const tabs: { key: Tab; label: string }[] = [
    { key: 'hqla', label: 'HQLA' },
    { key: 'outflows', label: 'Outflows' },
    { key: 'inflows', label: 'Inflows' },
  ];

  const currentRows = getRows(tab);

  return (
    <div className="machine-mode min-h-full font-mono text-sm">
      {/* Page header */}
      <div className="border-b border-slate-700 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div>
            <h1 className="text-base font-semibold text-slate-100">LCR Calculator</h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Interactive LCR (12 CFR 249) — powered by FINOS Morphir rule engine
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <label htmlFor="refDate">Reference date</label>
            <input
              id="refDate"
              type="date"
              value={refDate}
              onChange={e => setRefDate(e.target.value)}
              className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-slate-200 focus:outline-none focus:border-primary-500"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-6 space-y-6">

        {/* LCR result card */}
        <div className={`rounded-xl border p-5 ${passing ? 'border-green-600 bg-green-950/30' : 'border-red-600 bg-red-950/30'}`}>
          {calcError ? (
            <p className="text-red-400 text-xs">{calcError}</p>
          ) : result ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">LCR Ratio</p>
                <p className={`text-3xl font-bold ${passing ? 'text-green-400' : 'text-red-400'}`}>
                  {isFinite(result.ratio) ? (result.ratio * 100).toFixed(1) + '%' : '∞'}
                </p>
                <p className={`text-[10px] mt-1 ${passing ? 'text-green-500' : 'text-red-500'}`}>
                  {passing ? 'Passes (≥100%)' : 'Fails (<100%)'}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">HQLA</p>
                <p className="text-lg font-semibold text-slate-200">${fmt(result.hqla)}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Net Cash Outflow</p>
                <p className="text-lg font-semibold text-slate-200">${fmt(result.netCashOutflow)}</p>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Gross Outflow</p>
                  <p className="text-sm text-slate-300">${fmt(result.grossOutflow)}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Capped Inflow</p>
                  <p className="text-sm text-slate-300">${fmt(result.cappedInflow)}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Mismatch Add-on</p>
                  <p className="text-sm text-slate-300">${fmt(result.mismatchAddOn)}</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Tab nav */}
        <div>
          <div className="flex gap-1 border-b border-slate-700 mb-0">
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-4 py-2 text-xs font-medium rounded-t transition-colors ${
                  tab === t.key
                    ? 'bg-slate-800 text-slate-100 border-t border-l border-r border-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {t.label} ({getRows(t.key).length})
              </button>
            ))}
          </div>

          {/* Flow table */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-b-lg rounded-tr-lg overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="border-b border-slate-700">
                <tr className="text-slate-500 text-[10px] uppercase tracking-wider">
                  <th className="px-3 py-2 text-left">Rule Code</th>
                  <th className="px-3 py-2 text-right">Amount ($)</th>
                  {tab === 'hqla' ? (
                    <th className="px-3 py-2 text-left">Asset Category</th>
                  ) : (
                    <>
                      <th className="px-3 py-2 text-left">Counterparty Type</th>
                      <th className="px-3 py-2 text-left">Insurance</th>
                      <th className="px-3 py-2 text-center">Operational</th>
                      <th className="px-3 py-2 text-center">Affiliate</th>
                      <th className="px-3 py-2 text-center">L1 Collat.</th>
                      <th className="px-3 py-2 text-center">L2a Collat.</th>
                    </>
                  )}
                  <th className="px-3 py-2" />
                </tr>
              </thead>
              <tbody>
                {currentRows.map(row => (
                  <FlowRowEditor
                    key={row.id}
                    row={row}
                    tab={tab}
                    onChange={handleChange(tab)}
                    onRemove={handleRemove(tab)}
                  />
                ))}
              </tbody>
            </table>
            <div className="px-3 py-2 border-t border-slate-700">
              <button
                onClick={() => handleAdd(tab)}
                className="text-[11px] text-primary-400 hover:text-primary-300 hover:underline"
              >
                + Add row
              </button>
            </div>
          </div>
        </div>

        {/* Attribution */}
        <p className="text-[10px] text-slate-500 leading-relaxed">
          Rule engine based on{' '}
          <a
            href="https://github.com/finos/morphir-examples/tree/main/src/Morphir/Sample/LCR"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-400"
          >
            FINOS Morphir LCR sample
          </a>{' '}
          (Elm). Implements 12 CFR 249 (2014 LCR final rule). 30-day maturity window, 75% inflow cap, maturity mismatch add-on. Not for regulatory submission.
        </p>
      </div>
    </div>
  );
}
