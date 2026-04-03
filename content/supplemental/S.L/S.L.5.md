---
section_id: S.L.5
section_name: Structured Debt Maturing in Greater than 30-days – Primary Market Maker
pillar: supplemental
category: S.L
category_name: 'Supplemental: Liquidity Risk Measurement'
definition_summary: Refers to the debt security buyback outflow amount set forth in
  the LRM Standards for the
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
  description: tflow amount set forth in the LRM Standards for the reporting entity’s
    structured debt issuances.
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to the debt security buyback outflow amount set forth in the LRM Standards for the
reporting entity’s structured debt issuances.
