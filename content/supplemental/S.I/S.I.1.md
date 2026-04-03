---
section_id: S.I.1
section_name: Long Market Value Client Assets
pillar: supplemental
category: S.I
category_name: 'Supplemental: Informational'
definition_summary: Refers to the fair value of clients’ long positions in margin
  accounts held at the reporting entity.
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

Refers to the fair value of clients’ long positions in margin accounts held at the reporting entity.
This product must only be reported when a firm has a broker-dealer that is a material entity
(i.e., is a reporting entity).
