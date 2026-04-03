---
section_id: O.O.22
section_name: Other Cash Outflows
pillar: outflows
category: O.O
category_name: 'Outflows: Other'
definition_summary: 'Refers to any other material cash outflows not reported in any
  other line that can impact the

  liquidity of the reporting entity.'
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
reporting_notes: Do not report ‘business as usual’ expenses such as rents, salaries,
  utilities and other similar payments. Include cash needs that arise out of an extra-
  ordinary situation (e.g., a significant cash flow needed to address a legal suit
  settlement or pending transaction).
---

Refers to any other material cash outflows not reported in any other line that can impact the
liquidity of the reporting entity. Do not report ‘business as usual’ expenses such as rents,
salaries, utilities and other similar payments. Include cash needs that arise out of an extra-
ordinary situation (e.g., a significant cash flow needed to address a legal suit settlement or
pending transaction). Use the comments table to provide a general description of other
cash outflows included in this product on at least a monthly basis and in the event of a material
change in reported values.
