---
section_id: I.S.9
section_name: Synthetic Customer Longs
pillar: inflows
category: I.S
category_name: 'Inflows: Secured'
definition_summary: 'Refers to total return swaps booked in client accounts, where
  the reporting entity is

  economically short the underlying reference asset and the client is economically
  long.'
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
- section: O.S.9
  relationship: ’s synthetic short position reported in O.S.9. • Synthetic Firm Financing
     Refers to
- section: O.S.10
  relationship: ssociated hedge meets the definition of O.S.10. • Futures  Refers
    to transactions hed
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to total return swaps booked in client accounts, where the reporting entity is
economically short the underlying reference asset and the client is economically long. Use the
[Maturity Bucket] to designate the latest date a transaction could be unwound or terminated
after taking into account clients’ contractual rights to delay termination. Use the [Collateral
Class] field to designate the reference asset of the transaction. Use the following [Sub-Product]
values to designate how the position is “funded” (i.e., hedged):
• Physical Long Position
 Refers to transactions hedged with physical long positions. In the event the
long position that has been encumbered to another transaction, use the
[Effective Maturity Bucket] to indicate the period of the encumbrance. For
long positions held unencumbered, set the [Unencumbered] flag to “Y”.
• Synthetic Customer Short
 Refers to transactions where the customer synthetic long is hedged with
another customer’s synthetic short position reported in O.S.9.
• Synthetic Firm Financing
 Refers to transactions where the associated hedge meets the definition of
O.S.10.
• Futures
 Refers to transactions hedged with futures contracts.
• Other
 Refers to all other methods of hedging.
• Unhedged
 Refers to positions that are not economically hedged with another
instrument or transaction.
