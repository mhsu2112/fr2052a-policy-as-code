---
section_id: S.L.1
section_name: Subsidiary Liquidity That Cannot Be Transferred
pillar: supplemental
category: S.L
category_name: 'Supplemental: Liquidity Risk Measurement'
definition_summary: Refers to the amount of assets of each reporting entity’s consolidated
  subsidiaries that is in
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
  description: s, calculated pursuant to the LRM Standards, of that consolidated subsidiary
    that is not freely transfe
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to the amount of assets of each reporting entity’s consolidated subsidiaries that is in
excess of the net outflows, calculated pursuant to the LRM Standards, of that consolidated
subsidiary that is not freely transferrable to affiliates due to statutory, regulatory, contractual,
or supervisory restrictions (including sections 23A and 23B of the Federal Reserve Act and
Regulation W).
Use the “Internal Counterparty” (S.I.[Internal Counterparty]) field to indicate the lowest-level
subsidiary entity from which the assets cannot be transferred; however do not flag this product
as [Internal] = “Y”. The [Currency] and [Collateral Class] fields must also accurately reflect the
characteristics of the assets that are trapped in the subsidiary reporting entity.
