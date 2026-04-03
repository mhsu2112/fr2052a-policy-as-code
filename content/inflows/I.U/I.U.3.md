---
section_id: I.U.3
section_name: Required Operational Balances
pillar: inflows
category: I.U
category_name: 'Inflows: Unsecured'
definition_summary: 'Refers to the minimum balances held at other financial counterparties
  necessary to maintain

  ongoing operational activities, such as clearing and settlement.'
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

Refers to the minimum balances held at other financial counterparties necessary to maintain
ongoing operational activities, such as clearing and settlement. These balances may not be
mandated by the counterparty, but could include, for example, a minimum balance maintained
by the reporting entity to avoid intraday or end-of-day overdraft fees.
