---
section_id: O.W.11
section_name: Unstructured Long Term Debt
pillar: outflows
category: O.W
category_name: 'Outflows: Wholesale'
definition_summary: 'Refers to debt issuances with original maturity greater than
  one year, including plain vanilla

  floating rate notes linked to standard interest rate indexes and plain vanilla benchmark

  issuances with standard embedded options (i.e., call/put).'
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
reporting_notes: Include instruments classified as long-term debt under GAAP. Include
  subordinated debt issued to affiliates that fall outside the reporting entity’s
  scope of consolidation. Do not include perpetual preferred stock.
---

Refers to debt issuances with original maturity greater than one year, including plain vanilla
floating rate notes linked to standard interest rate indexes and plain vanilla benchmark
issuances with standard embedded options (i.e., call/put). Include instruments classified as
long-term debt under GAAP. Include subordinated debt issued to affiliates that fall outside the
reporting entity’s scope of consolidation. Do not include perpetual preferred stock.
