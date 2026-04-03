---
section_id: O.O.8
section_name: MTM Impact on Derivative Positions
pillar: outflows
category: O.O
category_name: 'Outflows: Other'
definition_summary: Refers to the absolute value of the largest 30-consecutive calendar
  day cumulative net mark-to-
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
- regulation: LRM Standards
  description: changes, as set forth in the LRM Standards. The cumulative collateral
    outflow or inflow should be meas
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to the absolute value of the largest 30-consecutive calendar day cumulative net mark-to-
market collateral outflow or inflow realized during the preceding 24 months resulting from
derivative transaction valuation changes, as set forth in the LRM Standards. The cumulative
collateral outflow or inflow should be measured on a portfolio basis, which should include both
3rd party and affiliated transactions (for subsidiary reporting entities) that are external to the
reporting entity’s scope of consolidation. However, as this product should be measured on a
portfolio basis, the [Internal] and [Internal Counterparty] flags should not be used. The absolute
amount should be determined across all currencies and reported in USD.
