---
section_id: O.W.12
section_name: Structured Long Term Debt
pillar: outflows
category: O.W
category_name: 'Outflows: Wholesale'
definition_summary: 'Refers to debt instruments with original maturity greater than
  one year whose principal or

  interest payments are linked to an underlying asset (e.g., commodity linked notes,
  equity linked

  notes, reverse convertible notes, currency linked notes).'
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
reporting_notes: Include instruments classified as long term debt under GAAP accounting
  rules that also meet the structured description set forth in this product. Do not
  include perpetual preferred stock.
---

Refers to debt instruments with original maturity greater than one year whose principal or
interest payments are linked to an underlying asset (e.g., commodity linked notes, equity linked
notes, reverse convertible notes, currency linked notes). Include instruments classified as long
term debt under GAAP accounting rules that also meet the structured description set forth in
this product. Do not include perpetual preferred stock.
