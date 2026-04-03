---
section_id: I.O.2
section_name: Collateral Called for Receipt
pillar: inflows
category: I.O
category_name: 'Inflows: Other'
definition_summary: 'Refers to the fair value under GAAP of collateral due to the
  reporting entity as of date T (the

  collateral flow).'
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
cross_references: []
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to the fair value under GAAP of collateral due to the reporting entity as of date T (the
collateral flow). This product does not represent the entire stock of collateral held. Collateral
calls should be related to outstanding collateralized contracts which include but are not limited
to derivative transactions with bilateral counterparties, central counterparties, or exchanges.
Use the Maturity Bucket field to identify the expected settlement date. For collateral calls with
same-day settlement (i.e., the collateral is both called and received on date T), report using the
“Open” value in the Maturity Bucket field. If the settlement date or [Maturity Bucket] is
unknown, then exclude the transaction from the data collection. If the [Currency] or [Collateral
Class] is unknown then default to [Currency] =”USD” and [Collateral Class] = “Z-1” (i.e., the
asset category for “all other assets”).
