---
section_id: I.O.1
section_name: Derivative Receivables
pillar: inflows
category: I.O
category_name: 'Inflows: Other'
definition_summary: 'Refers to the maturing incoming cash flows related to uncollateralized
  derivatives (e.g.,

  interest rate, equity, commodity, and option premiums).'
data_fields:
- name: product
  type: string
  description: FR 2052a product code
  required: true
- name: sub_product
  type: string
  description: Sub-product identifier (where applicable)
  required: false
- name: counterparty
  type: enum
  values:
  - Retail
  - Small Business
  - Non-Financial Corporate
  - Sovereign
  - Central Bank
  - GSE
  - PSE
  - MDB
  - Other Supranational
  - Pension Fund
  - Bank
  - Broker-Dealer
  - Investment Company or Advisor
  - Financial Market Utility
  - Other Supervised Non-Bank Financial Entity
  - Non-Regulated Fund
  - Internal
  required: false
- name: maturity_bucket
  type: date_bucket
  description: Contractual maturity or next repricing date
  required: true
- name: currency
  type: string
  description: ISO 4217 currency code
  required: true
- name: market_value
  type: decimal
  description: Fair market value in reporting currency
  required: true
- name: reporting_entity
  type: enum
  values:
  - Consolidated
  - Parent Only
  - Material Entity
  required: true
cross_references:
- section: S.FX.1
  relationship: l-Foreign Exchange table under products S.FX.1 through S.FX.3.
- section: S.FX.3
  relationship: nge table under products S.FX.1 through S.FX.3.
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Report contractually known receivables for fixed and floating rate
  payables. If a floating rate has not been set, report the undiscounted anticipated
  cash flow by maturity. Do not include brokerage commission fees, exchange fees,
  or cash flows from unexercised in-the-money options. Netting receivables and payables
  by counterparty and maturity date is allowed if a valid netting agreement is in
  place, allowing for the net settlement of contractual flows.
---

Refers to the maturing incoming cash flows related to uncollateralized derivatives (e.g.,
interest rate, equity, commodity, and option premiums). Report contractually known
receivables for fixed and floating rate payables. If a floating rate has not been set, report the
undiscounted anticipated cash flow by maturity. Do not include brokerage commission fees,
exchange fees, or cash flows from unexercised in-the-money options. Netting receivables and
payables by counterparty and maturity date is allowed if a valid netting agreement is in place,
allowing for the net settlement of contractual flows. Do not include receivables related to the
exchange of principal amounts for foreign exchange transactions, as these should be reported
in the Supplemental-Foreign Exchange table under products S.FX.1 through S.FX.3.
