---
section_id: O.S.9
section_name: Synthetic Customer Shorts
pillar: outflows
category: O.S
category_name: 'Outflows: Secured'
definition_summary: 'Refers to total return swaps booked in client accounts, where
  the reporting entity is

  economically long the underlying reference asset and the client is economically
  short.'
data_fields:
- name: product
  type: string
  description: FR 2052a product code
  required: true
- name: sub_product
  type: string
  description: Sub-product identifier (where applicable)
  required: false
- name: counterparty
  type: enum
  values:
  - Retail
  - Small Business
  - Non-Financial Corporate
  - Sovereign
  - Central Bank
  - GSE
  - PSE
  - MDB
  - Other Supranational
  - Pension Fund
  - Bank
  - Broker-Dealer
  - Investment Company or Advisor
  - Financial Market Utility
  - Other Supervised Non-Bank Financial Entity
  - Non-Regulated Fund
  - Internal
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
- name: reporting_entity
  type: enum
  values:
  - Consolidated
  - Parent Only
  - Material Entity
  required: true
cross_references:
- section: O.S.8
  relationship: ty (i.e., transactions reportable under O.S.8, excluding those with
    a [Sub-Product] o
- section: I.S.9
  relationship: r’s synthetic long position reported in I.S.9. • Synthetic Firm Sourcing
     Refers to
- section: I.S.10
  relationship: ssociated hedge meets the definition of I.S.10. • Futures  Refers
    to transactions hed
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to total return swaps booked in client accounts, where the reporting entity is
economically long the underlying reference asset and the client is economically short. Use the
[Maturity Bucket] to designate the earliest date a transaction could be unwound or terminated.
Use the [Collateral Class] field to designate the reference asset of the transaction. Use the
following [Sub-Product] values to designate how the position is “covered” (i.e., hedged):
• Firm Short
 Refers to transactions where the associated hedge is a short sale by the
reporting entity of the physical security (i.e., transactions reportable under
O.S.8, excluding those with a [Sub-Product] of “Firm Longs”.
• Synthetic Customer Long
 Refers to transactions where the customer synthetic short is hedged with
another customer’s synthetic long position reported in I.S.9.
• Synthetic Firm Sourcing
 Refers to transactions where the associated hedge meets the definition of
I.S.10.
• Futures
 Refers to transactions hedged with futures contracts.
• Other
 Refers to all other methods of hedging.
• Unhedged
 Refers to positions that are not economically hedged with another
instrument or transaction.
