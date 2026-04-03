---
section_id: O.W.10
section_name: Offshore Borrowing
pillar: outflows
category: O.W
category_name: 'Outflows: Wholesale'
definition_summary: Refers to unsecured borrowing of the domestic currency outside
  of the onshore market, but
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

Refers to unsecured borrowing of the domestic currency outside of the onshore market, but
still placed through the inter-bank or inter-dealer broker market (e.g., Eurodollars, EuroSterling,
EuroYen, EuroEuro).
