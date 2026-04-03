---
section_id: O.O.15
section_name: Total Collateral Required Due to a 3 Notch Downgrade
pillar: outflows
category: O.O
category_name: 'Outflows: Other'
definition_summary: 'Refers to the total cumulative fair value of additional collateral
  the reporting entity’s

  counterparties will require the reporting entity to post as a result of a 3- notch
  credit rating

  downgrade.'
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
- section: O.O.11
  relationship: o not double count balances reported in O.O.11.
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Report figures based on contractual commitments. Collateral required
  includes, but is not limited to, collateral called from OTC derivative transactions
  and exchanges. Include outflows due to additional termination events, but do not
  include inflows from netting sets that are in a net receivable position. Do not
  double count balances reported in O.
---

Refers to the total cumulative fair value of additional collateral the reporting entity’s
counterparties will require the reporting entity to post as a result of a 3- notch credit rating
downgrade. Report figures based on contractual commitments. Collateral required includes,
but is not limited to, collateral called from OTC derivative transactions and exchanges. Include
outflows due to additional termination events, but do not include inflows from netting sets that
are in a net receivable position. Do not double count balances reported in O.O.11.
