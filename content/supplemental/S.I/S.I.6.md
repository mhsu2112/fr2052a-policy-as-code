---
section_id: S.I.6
section_name: Subsidiary Liquidity Not Transferrable
pillar: supplemental
category: S.I
category_name: 'Supplemental: Informational'
definition_summary: For U.S. firms that are identified as Category IV banking organizations
  and FBOs that are
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
cross_references: []
version_history:
- version: '2025-02-26'
  change: Current version
---

For U.S. firms that are identified as Category IV banking organizations and FBOs that are
identified as Category IV foreign banking organizations, report the amount of highly liquid
assets of each reporting entity’s consolidated subsidiaries that are in excess of the subsidiary’s
modeled net outflows over a 30-day planning horizon and would not be freely transferrable to
the parent company due to statutory, regulatory, contractual, or supervisory restrictions
(including sections 23A and 23B of the Federal Reserve Act and Regulation W).
Use the “Internal Counterparty” (S.I.[Internal Counterparty]) field to indicate the lowest-level
subsidiary entity from which the assets cannot be transferred; however do not flag this product
as [Internal] = “Y”. The [Currency] and [Collateral Class] fields must also accurately reflect the
characteristics of the assets that are trapped in the subsidiary reporting entity.
