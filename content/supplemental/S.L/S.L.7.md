---
section_id: S.L.7
section_name: Subsidiary Funding That Cannot Be Transferred
pillar: supplemental
category: S.L
category_name: 'Supplemental: Liquidity Risk Measurement'
definition_summary: Refers to the amount of stable funding at a reporting entity’s
  subsidiary that is in excess of the
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
  description: ities that are subject to the NSFR on a standalone basis per section
    1 of the LRM Standards ar
- regulation: LRM Standards
  description: t subsidiary, pursuant to the LRM Standards, but cannot be transferred
    to the reporting entity due to s
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to the amount of stable funding at a reporting entity’s subsidiary that is in excess of the
required stable funding amount of that subsidiary, pursuant to the LRM Standards, but cannot
be transferred to the reporting entity due to statutory, regulatory, contractual or supervisory
restrictions. Only reporting entities that are subject to the NSFR on a standalone basis per
section 1 of the LRM Standards are required to report this product.
Use the [Internal Counterparty] field to indicate the subsidiary entity from which the stable
funding cannot be transferred; however do not flag this product as [Internal] = “Y”.
