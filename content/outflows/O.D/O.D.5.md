---
section_id: O.D.5
section_name: Excess Balances in Operational Accounts
pillar: outflows
category: O.D
category_name: 'Outflows: Deposits'
definition_summary: Refers to deposits from counterparties that are not Retail or
  Small Business customers that are
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
cross_references: []
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to deposits from counterparties that are not Retail or Small Business customers that are
excluded from the reporting entity’s operational deposit amount based on the reporting
entity’s methodology for identifying excess balances pursuant to section 249.4(b)(5). These
balances must be in accounts that meet all other provisions of section 249.4(b).
