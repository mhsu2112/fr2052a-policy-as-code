---
section_id: S.I.4
section_name: Gross Client Wires Paid
pillar: supplemental
category: S.I
category_name: 'Supplemental: Informational'
definition_summary: 'Refers to all wires paid from Prime Brokerage client accounts
  occurring on day T. This product

  must only be reported when a firm has a broker-dealer that is a material entity
  (i.e., is a

  reporting entity).'
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
reporting_notes: Include transfers of both cash and securities. Use the [Collateral
  Class] field to differentiate between asset categories.
---

Refers to all wires paid from Prime Brokerage client accounts occurring on day T. This product
must only be reported when a firm has a broker-dealer that is a material entity (i.e., is a
reporting entity). Include transfers of both cash and securities. Use the [Collateral Class] field to
differentiate between asset categories.
