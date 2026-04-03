---
section_id: O.D.4
section_name: Operational Account Balances
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
cross_references:
- section: O.D.7
  relationship: 'escrow deposits reported under product O.D.7: Operational Escrow
    Accounts.'
- regulation: LRM Standards
  description: al deposits as defined in the LRM Standards, except operational escrow
    deposits reported under product
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to deposits from counterparties that are not Retail or Small Business customers that are
operational deposits as defined in the LRM Standards, except operational escrow deposits
reported under product O.D.7: Operational Escrow Accounts.
