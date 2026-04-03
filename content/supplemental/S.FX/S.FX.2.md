---
section_id: S.FX.2
section_name: Forwards and Futures
pillar: supplemental
category: S.FX
category_name: 'Supplemental: Foreign Exchange'
definition_summary: 'Refers to transactions involving the physical exchange of two
  currencies at a rate agreed upon

  on the date of the contract for delivery at least two business days in the future
  or later.'
data_fields:
- name: product
  type: string
  description: FR 2052a product code
  required: true
- name: currency_pair
  type: string
  description: Currency pair (e.g., USD/EUR)
  required: true
- name: maturity_bucket
  type: date_bucket
  description: Settlement or maturity date
  required: true
- name: notional_value
  type: decimal
  description: Notional value in USD equivalent
  required: true
- name: market_value
  type: decimal
  description: Mark-to-market value
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

Refers to transactions involving the physical exchange of two currencies at a rate agreed upon
on the date of the contract for delivery at least two business days in the future or later. Refers
to both forward outright transactions (e.g., bespoke bilateral contracts) and standardized
futures contracts (i.e., exchange traded).
