---
section_id: O.S.3
section_name: Dollar Rolls
pillar: outflows
category: O.S
category_name: 'Outflows: Secured'
definition_summary: 'Refers to transactions using TBA contracts with the intent of
  financing a security or pool of

  collateral.'
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
reporting_notes: Report transactions where the reporting entity has agreed to sell
  the TBA contract and buy it back at a later date.
---

Refers to transactions using TBA contracts with the intent of financing a security or pool of
collateral. Report transactions where the reporting entity has agreed to sell the TBA contract
and buy it back at a later date.
