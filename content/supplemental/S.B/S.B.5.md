---
section_id: S.B.5
section_name: Counterparty Netting
pillar: supplemental
category: S.B
category_name: 'Supplemental: Balance Sheet'
definition_summary: 'Refers to the value of offsetting of payables and receivables
  with a single counterparty

  permissible under section 102 of the LRM Standards that are otherwise reported on
  a gross

  basis for the purpose of the FR 2052a.'
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
  description: ible under section 102 of the LRM Standards that are otherwise reported
    on a gross basis for the purpos
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to the value of offsetting of payables and receivables with a single counterparty
permissible under section 102 of the LRM Standards that are otherwise reported on a gross
basis for the purpose of the FR 2052a. This offsetting value must be represented as a negative
number and reported twice to reflect the adjustments to both asset and liability values. For
Category I firms, this product must be reported for each as-of date according to the Frequency
and Timing of Data Submission section of the General Instructions.
