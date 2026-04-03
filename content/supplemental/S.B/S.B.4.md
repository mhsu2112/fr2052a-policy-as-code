---
section_id: S.B.4
section_name: Other Assets
pillar: supplemental
category: S.B
category_name: 'Supplemental: Balance Sheet'
definition_summary: Refers to all other assets not otherwise captured under other
  FR 2052a balance sheet products,
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

Refers to all other assets not otherwise captured under other FR 2052a balance sheet products,
including intangible, life insurance and deferred tax assets.
