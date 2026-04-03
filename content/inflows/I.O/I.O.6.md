---
section_id: I.O.6
section_name: Interest and Dividends Receivable
pillar: inflows
category: I.O
category_name: 'Inflows: Other'
definition_summary: 'Refers to contractual interest and dividend payments receivable
  on securities and loans and

  leases owned by the reporting entity.'
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
- section: I.O.1
  relationship: 'which should be reported under product I.O.1: Derivatives Receivables
    and included i'
- section: I.O.7
  relationship: 'bles and included in the calculation of I.O.7: Net 30-day Derivative
    Receivables. Use'
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: 'Do not include receivables related to unsecured derivative transactions,
  which should be reported under product I.O.1: Derivatives Receivables and included
  in the calculation of I.O.'
---

Refers to contractual interest and dividend payments receivable on securities and loans and
leases owned by the reporting entity. Do not include receivables related to unsecured
derivative transactions, which should be reported under product I.O.1: Derivatives Receivables
and included in the calculation of I.O.7: Net 30-day Derivative Receivables. Use the [Treasury
Control] field to identify payments receivable related to securities that are similarly flagged in
the Inflows-Assets table. For all interest and dividend payments reported, indicate the
corresponding collateral class in the [Collateral Class] field. For interest on loans and leases, use
the [Counterparty] field to designate the payer of the interest. Under circumstances where the
interest and dividend payments receivable are uncertain (e.g., a floating rate payment has not
yet been set), forecast receivables for a minimum of 30 calendar days beyond the as-of date (T).
Exclude interest and dividends receivable on assets securing Covered Federal Reserve Facility
Funding.
