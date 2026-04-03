---
section_id: I.A.6
section_name: Forward Asset Purchases
pillar: inflows
category: I.A
category_name: 'Inflows: Assets'
definition_summary: Refers to transactions involving the purchase of securities that
  have been executed, but not yet
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
cross_references:
- section: I.O.7
  relationship: 'included in the calculation of products I.O.7: Net 30-day Derivative
    Receivables and'
- section: O.O.20
  relationship: ': Net 30-day Derivative Receivables and O.O.20: Net 30-day Derivative
    Payables. Report'
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Report U.S. and foreign currency and coin owned and held in all offices
  of the consolidated holding company; currency and coin in transit to a Federal Reserve
  Bank or to any other depository institution for which the reporting holding company’s
  subsidiaries have not yet received credit; and currency and coin in transit from
  a Federal Reserve Bank or from any other depository institution for which the accounts
  of the subsidiaries of the reporting holding company have already been charged.
  [Forwar...
---

Refers to transactions involving the purchase of securities that have been executed, but not yet
settled; and for which the settlement contractually occurs outside the period of time (after the
trade date) generally established by regulations or conventions in the marketplace or exchange
in which the transaction is being executed (i.e., not a regular-way security trade). Use the
10 Report U.S. and foreign currency and coin owned and held in all offices of the consolidated holding company;
currency and coin in transit to a Federal Reserve Bank or to any other depository institution for which the
reporting holding company’s subsidiaries have not yet received credit; and currency and coin in transit from a
Federal Reserve Bank or from any other depository institution for which the accounts of the subsidiaries of the
reporting holding company have already been charged.
[Forward Start Amount] and [Forward Start Bucket] fields to indicate the settlement amount
and settlement date of the securities purchased. These transactions must also be included in
the calculation of products I.O.7: Net 30-day Derivative Receivables and O.O.20: Net 30-day
Derivative Payables. Report failed settlements with a [Forward Start Bucket] value of “Open”.
