---
section_id: S.I.5
section_name: FRB 23A Capacity
pillar: supplemental
category: S.I
category_name: 'Supplemental: Informational'
definition_summary: Report the entity’s FRB 23A eligible unused capacity available.
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
reporting_notes: 'Report the entity’s FRB 23A eligible unused capacity available.
  Section 23A of the Federal Reserve Act limits the aggregate amount of covered transactions
  between an insured depository institution and any single affiliate to no more than
  10 percent of the insured depository institution’s capital stock and surplus, and
  the aggregate amount of covered transactions with all affiliates to no more than
  20 percent of the insured depository institution’s capital stock and surplus. Bank
  Entities: For re...'
---

Report the entity’s FRB 23A eligible unused capacity available. Section 23A of the Federal
Reserve Act limits the aggregate amount of covered transactions between an insured
depository institution and any single affiliate to no more than 10 percent of the insured
depository institution’s capital stock and surplus, and the aggregate amount of covered
transactions with all affiliates to no more than 20 percent of the insured depository institution’s
capital stock and surplus.
Bank Entities: For reporting entities that are banks, FRB 23A capacity should reflect the bank’s
unused capacity to engage in covered transactions with Section 23A affiliates.
Non-bank Entities: For non-bank reporting entities, FRB 23A capacity should reflect the ability
to engage in covered transactions with each affiliated depository institution. Use the
S.I.[Internal Counterparty] field to indicate the relevant affiliated depository institution entity.
