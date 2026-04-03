---
section_id: S.DC.10
section_name: Variation Margin Received
pillar: supplemental
category: S.DC
category_name: 'Supplemental: Derivatives & Collateral'
definition_summary: 'Refers to the fair value of collateral that the reporting entity
  has received (total stock by

  applicable [Collateral Class]) from its counterparties as variation margin against
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
cross_references:
- section: S.DC.4
  relationship: payments, which must be reported under S.DC.4. Use the [Netting Eligible]
    field to id
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Exclude variation margin received on outstanding contracts in the
  form of settlement payments, which must be reported under S.DC.4. Use the [Netting
  Eligible] field to identify the value of collateral that meets the criteria referenced
  in section 107(f)(1) of the LRM Standards.
---

Refers to the fair value of collateral that the reporting entity has received (total stock by
applicable [Collateral Class]) from its counterparties as variation margin against both house and
customer positions. Exclude variation margin received on outstanding contracts in the form of
settlement payments, which must be reported under S.DC.4. Use the [Netting Eligible] field to
identify the value of collateral that meets the criteria referenced in section 107(f)(1) of the LRM
Standards.
