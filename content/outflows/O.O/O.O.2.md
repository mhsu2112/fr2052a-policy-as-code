---
section_id: O.O.2
section_name: Collateral Called for Delivery
pillar: outflows
category: O.O
category_name: 'Outflows: Other'
definition_summary: 'Refers to the fair value of collateral due to the reporting entity’s
  counterparties that has been

  called as of date T (i.e., the collateral flow).'
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

Refers to the fair value of collateral due to the reporting entity’s counterparties that has been
called as of date T (i.e., the collateral flow). This product does not represent the entire stock of
collateral posted. Collateral called for delivery should be related to the outstanding
collateralized contracts which include, but are not limited to, derivative transactions with
bilateral counterparties, central counterparties, or exchanges. Use the Maturity Bucket field to
identify the expected settlement date. For collateral calls with same-day settlement (i.e., the
collateral is both called and received on the as-of date T), report using the “Open” value in the
Maturity Bucket field.
