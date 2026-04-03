---
section_id: I.A.4
section_name: Restricted Reserve Balances
pillar: inflows
category: I.A
category_name: 'Inflows: Assets'
definition_summary: 'Refers to balances held at central banks that are not immediately
  withdrawable and currency

  and banknotes, including the reserve balances and term deposits that are held to
  satisfy

  reserve requirements.'
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
---

Refers to balances held at central banks that are not immediately withdrawable and currency
and banknotes, including the reserve balances and term deposits that are held to satisfy
reserve requirements.
Use the [Sub-Product] field to further identify the specific central bank account according to the
following choices, or “Currency and Coin” for currency and banknotes:
• FRB (Federal Reserve Bank)
• SNB (Swiss National Bank)
• BOE (Bank of England)
• ECB (European Central Bank)
• BOJ (Bank of Japan)
• RBA (Reserve Bank of Australia)
• BOC (Bank of Canada)
• OCB (Other Central Bank)
• Currency and Coin8
