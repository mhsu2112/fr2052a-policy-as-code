---
section_id: O.O.3
section_name: TBA Purchases
pillar: outflows
category: O.O
category_name: 'Outflows: Other'
definition_summary: Refers to all purchases of TBA contracts for market making or
  liquidity providing.
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
- section: I.S.3
  relationship: Dollar Roll, as defined under products I.S.3 or O.S.3.
- section: O.S.3
  relationship: oll, as defined under products I.S.3 or O.S.3.
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Do not include TBA purchases which are part of a Dollar Roll, as
  defined under products I.S.3 or O.S.
---

Refers to all purchases of TBA contracts for market making or liquidity providing. Do not include
TBA purchases which are part of a Dollar Roll, as defined under products I.S.3 or O.S.3.
