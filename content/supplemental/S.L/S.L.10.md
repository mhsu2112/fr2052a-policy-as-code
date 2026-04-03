---
section_id: S.L.10
section_name: Net Stable Funding Ratio
pillar: supplemental
category: S.L
category_name: 'Supplemental: Liquidity Risk Measurement'
definition_summary: 'Refers to the reporting entity’s NSFR calculation, as specified
  in section 100(b) of the LRM

  Standards.'
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
- regulation: NSFR
  description: ers to the reporting entity’s NSFR calculation, as specified in section
    100(b) of the LRM Stan
- regulation: LRM Standards
  description: ne basis per section 1 of the LRM Standards are required to report
    this product. Report this product as
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Report this product as a decimal value, with four points of precision
  (e.g., an NSFR of 105.25% must be reported as 1.
---

Refers to the reporting entity’s NSFR calculation, as specified in section 100(b) of the LRM
Standards. Only reporting entities that are subject to the NSFR on a standalone basis per
section 1 of the LRM Standards are required to report this product. Report this product as a
decimal value, with four points of precision (e.g., an NSFR of 105.25% must be reported as
1.0525).
