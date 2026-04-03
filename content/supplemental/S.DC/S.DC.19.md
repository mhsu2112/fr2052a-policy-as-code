---
section_id: S.DC.19
section_name: Derivative Collateral Substitution Capacity
pillar: supplemental
category: S.DC
category_name: 'Supplemental: Derivatives & Collateral'
definition_summary: 'Refers to the potential funding capacity arising from the reporting
  entity’s contractual ability to

  substitute collateral with higher liquidity value currently posted to a derivatives
  counterparty

  with collateral of lower liquidity value.'
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
cross_references: []
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Report only a single value in USD per reporting entity, representing
  the difference between the fair value of the collateral held and the fair value
  of the collateral that could be posted, after applying the haircut factors prescribed
  in the LRM Standards. U.S. firms that are identified as Category III banking organizations
  with average weighted short-term wholesale funding of less than $75 billion; U.
---

Refers to the potential funding capacity arising from the reporting entity’s contractual ability to
substitute collateral with higher liquidity value currently posted to a derivatives counterparty
with collateral of lower liquidity value. Report only a single value in USD per reporting entity,
representing the difference between the fair value of the collateral held and the fair value of
the collateral that could be posted, after applying the haircut factors prescribed in the LRM
Standards. U.S. firms that are identified as Category III banking organizations with average
weighted short-term wholesale funding of less than $75 billion; U.S. firms that are identified as
Category IV banking organizations; FBOs that are identified as Category III foreign banking
organizations with average weighted short-term wholesale funding of less than $75 billion; and
FBOs that are identified as Category IV foreign banking organizations have the option of not
reporting this product.
