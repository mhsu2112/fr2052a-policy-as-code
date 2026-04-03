---
section_id: I.A.7
section_name: Encumbered Assets
pillar: inflows
category: I.A
category_name: 'Inflows: Assets'
definition_summary: Refers to encumbered assets, of which the reporting entity is
  the beneficial owner (i.e., the
data_fields:
- name: product
  type: string
  description: FR 2052a product code
  required: true
- name: sub_product
  type: string
  description: Sub-product identifier (where applicable)
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
- name: lendable_value
  type: decimal
  description: Lendable value or residual capacity
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
---

Refers to encumbered assets, of which the reporting entity is the beneficial owner (i.e., the
assets are represented on the accounting balance sheet), that are not otherwise captured
under other FR 2052a balance sheet products in the I.A, I.U or I.S tables.
