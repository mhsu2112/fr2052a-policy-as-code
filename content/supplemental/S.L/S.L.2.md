---
section_id: S.L.2
section_name: Subsidiary Liquidity Available for Transfer
pillar: supplemental
category: S.L
category_name: 'Supplemental: Liquidity Risk Measurement'
definition_summary: 'Refers to the amount of excess eligible HQLA that is held at
  a subsidiary of the consolidated

  reporting entity that is determined as transferrable as per sections 22(b)(3)(i)(B),
  22(b)(3)(ii)(B)

  or 22(b)(4)(ii) of the LRM Standards.'
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
  description: ii)(B) or 22(b)(4)(ii) of the LRM Standards. Do not include eligible
    HQLA that is determined as transfe
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Do not include eligible HQLA that is determined as transferrable
  based on the subsidiary’s own net cash outflows (i.e., as per 22(b)(3)(i)(A), 22(b)(3)(ii)(B)
  or 22(b)(4)(i)). Use the [Internal Counterparty] field to indicate the subsidiary
  entity that holds the assets; however do not flag this product as [Internal] = “Y”.
---

Refers to the amount of excess eligible HQLA that is held at a subsidiary of the consolidated
reporting entity that is determined as transferrable as per sections 22(b)(3)(i)(B), 22(b)(3)(ii)(B)
or 22(b)(4)(ii) of the LRM Standards. Do not include eligible HQLA that is determined as
transferrable based on the subsidiary’s own net cash outflows (i.e., as per 22(b)(3)(i)(A),
22(b)(3)(ii)(B) or 22(b)(4)(i)).
Use the [Internal Counterparty] field to indicate the subsidiary entity that holds the assets;
however do not flag this product as [Internal] = “Y”.
