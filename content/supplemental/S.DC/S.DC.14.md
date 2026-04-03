---
section_id: S.DC.14
section_name: Collateral Disputes Receivables
pillar: supplemental
category: S.DC
category_name: 'Supplemental: Derivatives & Collateral'
definition_summary: 'Refers to the fair value of collateral that the reporting entity
  has called from its counterparties,

  but has not yet received due to a dispute.'
data_fields:
- name: product
  type: string
  description: FR 2052a product code
  required: true
- name: sub_product
  type: string
  description: Derivative type or sub-product
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
  - CCP
  required: false
- name: maturity_bucket
  type: date_bucket
  description: Contractual or next reset date
  required: true
- name: currency
  type: string
  description: ISO 4217 currency code
  required: true
- name: market_value
  type: decimal
  description: Current mark-to-market value
  required: true
- name: notional_value
  type: decimal
  description: Gross notional value
  required: false
- name: reporting_entity
  type: enum
  values:
  - Consolidated
  - Parent Only
  - Material Entity
  required: true
cross_references:
- section: S.DC.13
  relationship: tes over the previous year for products S.DC.13 and S.DC.14 is less
    than $500 million,
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to the fair value of collateral that the reporting entity has called from its counterparties,
but has not yet received due to a dispute. Disputes include, but are not limited to, valuation of
derivative contracts. If the total amount that would have been reported related to distinct
disputes over the previous year for products S.DC.13 and S.DC.14 is less than $500 million, the
reporting firm need not report this product.
