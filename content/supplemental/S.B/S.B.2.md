---
section_id: S.B.2
section_name: Other Liabilities
pillar: supplemental
category: S.B
category_name: 'Supplemental: Balance Sheet'
definition_summary: Refers to all other liabilities not otherwise captured under other
  FR 2052a balance sheet
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

Refers to all other liabilities not otherwise captured under other FR 2052a balance sheet
products, including intangible liabilities.
