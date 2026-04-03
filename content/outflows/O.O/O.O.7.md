---
section_id: O.O.7
section_name: Trade Finance Instruments
pillar: outflows
category: O.O
category_name: 'Outflows: Other'
definition_summary: 'Refers to documentary trade letters of credit, documentary and
  clean collection, import bills

  and export bills, and guarantees directly related to trade finance obligations,
  such as shipping

  guarantees.'
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
- section: O.O.4
  relationship: '-financial firms, should be included in O.O.4: Credit Facilities
    and O.O.5: Liquidity'
- section: O.O.5
  relationship: 'ncluded in O.O.4: Credit Facilities and O.O.5: Liquidity Facilities,
    as appropriate.'
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to documentary trade letters of credit, documentary and clean collection, import bills
and export bills, and guarantees directly related to trade finance obligations, such as shipping
guarantees.
Lending commitments, such as direct import or export financing for non-financial firms, should
be included in O.O.4: Credit Facilities and O.O.5: Liquidity Facilities, as appropriate.
