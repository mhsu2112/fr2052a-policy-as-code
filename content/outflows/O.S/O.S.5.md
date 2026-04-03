---
section_id: O.S.5
section_name: FHLB Advances
pillar: outflows
category: O.S
category_name: 'Outflows: Secured'
definition_summary: Refers to outstanding secured funding sourced from the FHLBs.
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
- section: I.A.2
  relationship: 'ng should not be included under product I.A.2: Capacity with [Counterparty]
    field set'
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to outstanding secured funding sourced from the FHLBs. The amount borrowed and the
fair value of collateral pledged to secure the borrowing should not be included under product
I.A.2: Capacity with [Counterparty] field set to “GSE”.
