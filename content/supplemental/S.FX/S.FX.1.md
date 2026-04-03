---
section_id: S.FX.1
section_name: Spot
pillar: supplemental
category: S.FX
category_name: 'Supplemental: Foreign Exchange'
definition_summary: 'Refers to single outright transaction involving the exchange
  of one currency for another at an

  agreed upon rate with immediate delivery according to local market convention (usually
  two

  business days).'
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
reporting_notes: Report both the receivable and payable sides of the transaction.
---

Refers to single outright transaction involving the exchange of one currency for another at an
agreed upon rate with immediate delivery according to local market convention (usually two
business days). Report both the receivable and payable sides of the transaction.
