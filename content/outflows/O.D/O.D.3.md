---
section_id: O.D.3
section_name: Non-Transactional Non-Relationship Accounts
pillar: outflows
category: O.D
category_name: 'Outflows: Deposits'
definition_summary: Refers to Retail and Small Business deposits in accounts that
  are not transactional accounts
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
- section: O.D.1
  relationship: at are not transactional accounts under O.D.1 where the underlying
    depositors do not
- section: O.D.8
  relationship: they should be reported using products O.D.8 through O.D.13.
- section: O.D.13
  relationship: e reported using products O.D.8 through O.D.13.
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Do not report brokered, sweep or reciprocal deposits using this product,
  as they should be reported using products O.D.8 through O.D.
---

Refers to Retail and Small Business deposits in accounts that are not transactional accounts
under O.D.1 where the underlying depositors do not have other established relationships with
the reporting entity that would otherwise make deposit withdrawal highly unlikely. Do not
report brokered, sweep or reciprocal deposits using this product, as they should be reported
using products O.D.8 through O.D.13.
