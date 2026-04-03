---
section_id: I.U.7
section_name: Cash Items in the Process of Collection
pillar: inflows
category: I.U
category_name: 'Inflows: Unsecured'
definition_summary: Refers to (1) checks or drafts in process of collection that are
  drawn on another depository
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

Refers to (1) checks or drafts in process of collection that are drawn on another depository
institution (or a Federal Reserve Bank) and that are payable immediately upon presentation in
the country where the covered company’s office that is clearing or collecting the check or draft
is located, including checks or drafts drawn on other institutions that have already been
forwarded for collection but for which the reporting entity has not yet been given credit
(known as cash letters), and checks or drafts on hand that will be presented for payment or
forwarded for collection on the following business day; (2) government checks drawn on the
Treasury of the United States or any other government agency that are payable immediately
upon presentation and that are in process of collection; and (3) such other items in process of
collection that are payable immediately upon presentation and that are customarily cleared or
collected as cash items by depository institutions in the country where the covered company’s
office which is clearing or collecting the item is located.
