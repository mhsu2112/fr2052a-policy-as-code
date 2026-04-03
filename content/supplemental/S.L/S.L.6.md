---
section_id: S.L.6
section_name: Liquidity Coverage Ratio
pillar: supplemental
category: S.L
category_name: 'Supplemental: Liquidity Risk Measurement'
definition_summary: 'Refers to the reporting entity’s LCR calculation, as specified
  in section 10(c) of the LRM

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
  description: 5). Net Stable Funding Ratio (NSFR) Supplemental Products The following
    products in the Supple
- regulation: LRM Standards
  description: ne basis per section 1 of the LRM Standards are required to report
    this product. Report this product as
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Report this product as a decimal value, with four points of precision
  (e.g., an LCR of 105.25% must be reported as 1.
---

Refers to the reporting entity’s LCR calculation, as specified in section 10(c) of the LRM
Standards. Only reporting entities that are subject to the LCR on a standalone basis per section
1 of the LRM Standards are required to report this product. Report this product as a decimal
value, with four points of precision (e.g., an LCR of 105.25% must be reported as 1.0525).
Net Stable Funding Ratio (NSFR) Supplemental Products
The following products in the Supplemental-Liquidity Risk Measurement table may be reported
at a lesser frequency and with a longer delay as compared to the general frequency and timing
of the report. U.S. firms and FBO IHCs are to report these products as-of the last business day of
each calendar month, T+15 calendar days after the as-of date.
