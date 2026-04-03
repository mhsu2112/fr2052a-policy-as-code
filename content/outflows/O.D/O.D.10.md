---
section_id: O.D.10
section_name: Less Stable Affiliated Sweep Account Balances
pillar: outflows
category: O.D
category_name: 'Outflows: Deposits'
definition_summary: 'Refers to all other deposit balances, excluding those reported
  under O.D.9: Stable Affiliated'
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
- section: O.D.9
  relationship: 'alances, excluding those reported under O.D.9: Stable Affiliated
    Sweep Account Balanc'
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Report purposes.
---

Refers to all other deposit balances, excluding those reported under O.D.9: Stable Affiliated
Sweep Account Balances, that are held at the reporting entity by a customer or counterparty as
a result of a contractual feature that automatically transfers to the reporting entity from an
affiliated financial company at the close of each business day amounts identified under the
agreement governing the account from which the amount is being transferred. Note: This
includes sweep balances that fall under a primary purpose exemption and are not reported as
brokered for Call Report purposes.
