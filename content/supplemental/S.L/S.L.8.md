---
section_id: S.L.8
section_name: Subsidiary Funding Available for Transfer
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
  description: t subsidiary, pursuant to the LRM Standards, that is determined as
    transferrable as per section 108(a)(
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Do not include stable funding that is determined transferrable based
  on the subsidiary’s own requirement (i.e., as per section 108(a)(1) of the LRM Standards).
  Only reporting entities that are subject to the NSFR on a standalone basis per section
  1 of the LRM Standards are required to report this product.
---

Refers to the amount of stable funding at a reporting entity’s subsidiary that is in excess of the
required stable funding amount of that subsidiary, pursuant to the LRM Standards, that is
determined as transferrable as per section 108(a)(2) of the LRM Standards. Do not include
stable funding that is determined transferrable based on the subsidiary’s own requirement (i.e.,
as per section 108(a)(1) of the LRM Standards). Only reporting entities that are subject to the
NSFR on a standalone basis per section 1 of the LRM Standards are required to report this
product.
Use the [Internal Counterparty] field to indicate the subsidiary entity in which the stable
funding is located; however do not flag this product as [Internal] = “Y”.
