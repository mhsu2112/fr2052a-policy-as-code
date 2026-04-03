---
section_id: I.A.1
section_name: Unencumbered Assets
pillar: inflows
category: I.A
category_name: 'Inflows: Assets'
definition_summary: Refers to assets that are owned outright that are (i) free of
  legal, regulatory, contractual, or
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
reporting_notes: Exclude all unencumbered assets that are pledged to a central bank
  or a U.S.
---

Refers to assets that are owned outright that are (i) free of legal, regulatory, contractual, or
other restrictions on the ability of the reporting entity to monetize the assets; and (ii) not
pledged, explicitly or implicitly, to secure or to provide credit enhancement to any transaction.
Exclude all unencumbered assets that are pledged to a central bank or a U.S. government-
sponsored enterprise that meet the specifications of, and should be reported under, product
