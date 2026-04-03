---
section_id: I.O.4
section_name: Undrawn Committed Facilities Purchased
pillar: inflows
category: I.O
category_name: 'Inflows: Other'
definition_summary: 'Refers to legally binding agreements that provide the reporting
  entity with the ability to draw

  funds at a future date.'
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
reporting_notes: Report only facilities that are committed, as defined in the LRM
  Standards.
---

Refers to legally binding agreements that provide the reporting entity with the ability to draw
funds at a future date. Report only facilities that are committed, as defined in the LRM
Standards.
