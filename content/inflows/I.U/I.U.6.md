---
section_id: I.U.6
section_name: Other Loans
pillar: inflows
category: I.U
category_name: 'Inflows: Unsecured'
definition_summary: Refers to all other unsecured loans not otherwise included in
  I.U products.
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
reporting_notes: 'Include any subordinated lending to affiliates that do not fall
  within the reporting entity’s scope of consolidation. Use the comments table to
  provide a general description of other loans included in this product on at least
  a monthly basis and in the event of a material change in reported values. 11 See:
  http://www.newyorkfed.'
---

Refers to all other unsecured loans not otherwise included in I.U products. Include any
subordinated lending to affiliates that do not fall within the reporting entity’s scope of
consolidation. Use the comments table to provide a general description of other loans
included in this product on at least a monthly basis and in the event of a material change in
reported values.
11 See: http://www.newyorkfed.org/aboutthefed/fedpoint/fed15.html for definition.
