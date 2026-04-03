---
section_id: S.B.3
section_name: Non-Performing Assets
pillar: supplemental
category: S.B
category_name: 'Supplemental: Balance Sheet'
definition_summary: Refers to assets that are past due by more than 90 days or non-accrual.
data_fields:
- name: product
  type: string
  description: FR 2052a product code
  required: true
- name: sub_product
  type: string
  description: Sub-category or further detail
  required: false
- name: currency
  type: string
  description: ISO 4217 currency code
  required: true
- name: market_value
  type: decimal
  description: Value in reporting currency
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

Refers to assets that are past due by more than 90 days or non-accrual.
