---
section_id: O.D.13
section_name: Reciprocal Accounts
pillar: outflows
category: O.D
category_name: 'Outflows: Deposits'
definition_summary: Refers to any deposit held at the reporting entity that is obtained,
  directly or indirectly, from or
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

Refers to any deposit held at the reporting entity that is obtained, directly or indirectly, from or
through the mediation or assistance of a deposit broker as that term is defined in section 29 of
the Federal Deposit Insurance Act (12 U.S.C. 1831f(g)), where the deposits are received through
a deposit placement network on a reciprocal basis, such that: (1) for any deposit received, the
reporting entity (as agent for depositors) places the same amount with other insured
depository institutions through the network; and (2) each member of the network sets the
interest rate to be paid on the entire amount of funds it places with other network members.
