---
section_id: O.S.11
section_name: Other Secured Financing Transactions
pillar: outflows
category: O.S
category_name: 'Outflows: Secured'
definition_summary: Refers to all other secured financing transactions that do not
  otherwise meet the definitions of
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

Refers to all other secured financing transactions that do not otherwise meet the definitions of
Outflows-Secured products listed above, and for which rehypothecation rights over the
collateral pledged are conferred to the reporting entity’s counterparty. Use the comments
table to provide a general description of other secured financing transactions included in
this product on at least a monthly basis and in the event of a material change in reported values.
