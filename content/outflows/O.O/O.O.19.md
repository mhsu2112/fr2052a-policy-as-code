---
section_id: O.O.19
section_name: Interest & Dividends Payable
pillar: outflows
category: O.O
category_name: 'Outflows: Other'
definition_summary: 'Refers to interest and dividends contractually payable on the
  reporting entity’s liabilities and

  equity.'
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
- section: O.O.1
  relationship: 'which should be reported under product O.O.1: Derivatives Payables
    and which should'
- section: O.O.20
  relationship: 'hould be included in the calculation of O.O.20: Net 30-day Derivative
    Payables. Under'
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: 'Do not include payables related to unsecured derivative transactions,
  which should be reported under product O.O.1: Derivatives Payables and which should
  be included in the calculation of O.O.'
---

Refers to interest and dividends contractually payable on the reporting entity’s liabilities and
equity. For equity dividends, report a [Collateral Class] of “Y-4”. Do not include payables related
to unsecured derivative transactions, which should be reported under product O.O.1:
Derivatives Payables and which should be included in the calculation of O.O.20: Net 30-day
Derivative Payables. Under circumstances where the interest and dividend payments receivable
are uncertain (e.g., floating rate payment has not yet been set), forecast payables for a
minimum of 30 calendar days beyond the as-of date (T). Exclude interest payable on Covered
Federal Reserve Facility Funding.
