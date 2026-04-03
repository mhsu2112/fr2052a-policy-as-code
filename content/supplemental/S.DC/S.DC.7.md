---
section_id: S.DC.7
section_name: Initial Margin Received
pillar: supplemental
category: S.DC
category_name: 'Supplemental: Derivatives & Collateral'
definition_summary: 'Refers to the fair value of collateral that the reporting entity
  has received (total stock by

  applicable [Collateral Class]) from its counterparties as initial margin against
  both house and

  customer positions.'
data_fields:
- name: product
  type: string
  description: FR 2052a product code
  required: true
- name: sub_product
  type: string
  description: Derivative type or sub-product
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
  - CCP
  required: false
- name: maturity_bucket
  type: date_bucket
  description: Contractual or next reset date
  required: true
- name: currency
  type: string
  description: ISO 4217 currency code
  required: true
- name: market_value
  type: decimal
  description: Current mark-to-market value
  required: true
- name: notional_value
  type: decimal
  description: Gross notional value
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
reporting_notes: Include any independent amount received that must be maintained by
  contract, where the independent amount received does not also serve as variation
  margin by offsetting a derivative asset as-of the reporting date. Use the [Sub-Product
  2] field to distinguish initial margin received from customers where the reporting
  entity is acting as agent and does not guarantee the performance of the counterparty
  to its customer from all other initial margin received from customers.
---

Refers to the fair value of collateral that the reporting entity has received (total stock by
applicable [Collateral Class]) from its counterparties as initial margin against both house and
customer positions. Include any independent amount received that must be maintained by
contract, where the independent amount received does not also serve as variation margin by
offsetting a derivative asset as-of the reporting date. Use the [Sub-Product 2] field to
distinguish initial margin received from customers where the reporting entity is acting as agent
and does not guarantee the performance of the counterparty to its customer from all other
initial margin received from customers.
