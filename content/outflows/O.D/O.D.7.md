---
section_id: O.D.7
section_name: Operational Escrow Accounts
pillar: outflows
category: O.D
category_name: 'Outflows: Deposits'
definition_summary: 'Refers to deposits from counterparties that are operational deposits
  as defined in the LRM

  Standards in the form of operational escrow deposits.'
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

Refers to deposits from counterparties that are operational deposits as defined in the LRM
Standards in the form of operational escrow deposits. Operational escrow deposits refers to an
account that a designated third party (e.g., a servicer) establishes or controls on behalf of
another party to process transactions such as the payment of taxes, insurance premiums
(including flood insurance), or other charges with respect to a loan or transaction, including
charges that the borrower and servicer have voluntarily agreed that the servicer should collect
and pay. The definition encompasses any account established for this purpose, including a
"trust account", "reserve account", "impound account", or other term in different localities.
With respect to, e.g., mortgage escrow accounts, an "escrow account" includes any
arrangement where the servicer adds a portion of the borrower's payments to principal and
subsequently deducts from principal the disbursements for escrow account items. For purposes
of this section, the term "escrow account" excludes any account that is under the servicer's
total control (e.g., payments collected by depository institution secured by real estate and
other loans serviced for others that have not yet been remitted to owners of the loans)
