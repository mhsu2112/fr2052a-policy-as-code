---
section_id: I.A.5
section_name: Unsettled Asset Purchases
pillar: inflows
category: I.A
category_name: 'Inflows: Assets'
definition_summary: Refers to transactions involving the purchase of securities that
  have been executed, but have
data_fields:
- name: product
  type: string
  description: FR 2052a product code
  required: true
- name: sub_product
  type: string
  description: Sub-product identifier (where applicable)
  required: false
- name: maturity_bucket
  type: date_bucket
  description: Contractual maturity or next repricing date
  required: true
- name: currency
  type: string
  description: ISO 4217 currency code
  required: true
- name: market_value
  type: decimal
  description: Fair market value in reporting currency
  required: true
- name: lendable_value
  type: decimal
  description: Lendable value or residual capacity
  required: false
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
reporting_notes: Report failed settlements with a [Forward Start Bucket] value of
  “Open”.
---

Refers to transactions involving the purchase of securities that have been executed, but have
not yet settled; and for which the settlement contractually occurs within the period of time
(after the trade date) generally established by regulations or conventions in the marketplace or
exchange in which the transaction is being executed (i.e., regular-way security trades). Use the
[Forward Start Amount] and [Forward Start Bucket] fields to indicate the settlement amount
and settlement date of the securities purchased. Report failed settlements with a [Forward
Start Bucket] value of “Open”.
