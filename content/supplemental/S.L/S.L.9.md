---
section_id: S.L.9
section_name: Additional Funding Requirement for Off-Balance Sheet Rehypothecated
  Assets
pillar: supplemental
category: S.L
category_name: 'Supplemental: Liquidity Risk Measurement'
definition_summary: 'Refers to a reporting entity’s required stable funding amount
  under section 106(d)(3) of the

  LRM Standards.'
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
  description: nder section 106(d)(3) of the LRM Standards. Use the [Collateral Class]
    field to indicate the type of a
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to a reporting entity’s required stable funding amount under section 106(d)(3) of the
LRM Standards. Use the [Collateral Class] field to indicate the type of asset that has been
rehypothecated. Only reporting entities that are subject to the NSFR on a standalone basis per
section 1 of the LRM Standards are required to report this product.
