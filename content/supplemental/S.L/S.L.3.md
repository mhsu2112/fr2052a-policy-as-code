---
section_id: S.L.3
section_name: Unencumbered Asset Hedges – Early Termination Outflows
pillar: supplemental
category: S.L
category_name: 'Supplemental: Liquidity Risk Measurement'
definition_summary: 'Refers to all cash outflows that would arise from the early termination
  of a hedge associated

  with eligible HQLA, as defined in the LRM Standards, reported in the Inflows-Assets
  table.'
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
cross_references:
- regulation: LRM Standards
  description: gible HQLA, as defined in the LRM Standards, reported in the Inflows-Assets
    table. Use the Collateral C
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to all cash outflows that would arise from the early termination of a hedge associated
with eligible HQLA, as defined in the LRM Standards, reported in the Inflows-Assets table. Use
the Collateral Class field to indicate the type of unencumbered asset associated with the hedge.
