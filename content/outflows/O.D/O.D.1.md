---
section_id: O.D.1
section_name: Transactional Accounts
pillar: outflows
category: O.D
category_name: 'Outflows: Deposits'
definition_summary: For purposes of this report, the term "Transactional Accounts"
  includes demand deposits as
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
- regulation: Regulation D
  description: and deposits as defined under Regulation D 12 CFR section 204 (Reserve
    Requirements of Depository Inst
version_history:
- version: '2025-02-26'
  change: Current version
---

For purposes of this report, the term "Transactional Accounts" includes demand deposits as
defined under Regulation D 12 CFR section 204 (Reserve Requirements of Depository
Institutions); however this product only includes demand deposits placed by Retail and Small
Business customers.
