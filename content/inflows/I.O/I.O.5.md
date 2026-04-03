---
section_id: I.O.5
section_name: Lock-up Balance
pillar: inflows
category: I.O
category_name: 'Inflows: Other'
definition_summary: 'Refers to inflows related to broker-dealer segregated accounts,
  as set forth in the LRM

  Standards.'
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

Refers to inflows related to broker-dealer segregated accounts, as set forth in the LRM
Standards. The I.O.[Maturity Bucket] value must reflect the date of the next scheduled
calculation of the amount required under applicable legal requirements for the protection of
customer assets with respect to each broker-dealer segregated account, in accordance with the
reporting entity’s normal frequency of recalculating such requirements.
