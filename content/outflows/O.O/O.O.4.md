---
section_id: O.O.4
section_name: Credit Facilities
pillar: outflows
category: O.O
category_name: 'Outflows: Other'
definition_summary: Refers to committed credit facilities, as defined in the LRM Standards.
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
- section: O.O.5
  relationship: 'which should be reported using product O.O.5: Liquidity Facility
    or O.O.18: Unfunded'
- section: O.O.18
  relationship: 'ng product O.O.5: Liquidity Facility or O.O.18: Unfunded Term Margin.
    Do not include e'
- section: O.O.17
  relationship: 'which should be reported using product O.O.17: Excess Margin, or
    retail mortgage comm'
- section: O.O.6
  relationship: 'which should be reported using product O.O.6: Retail Mortgage Commitments.
    Use the O'
- regulation: LRM Standards
  description: facilities, as defined in the LRM Standards. Do not include committed
    liquidity facilities, as defined
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: 'Do not include committed liquidity facilities, as defined in the
  LRM Standards, which should be reported using product O.O.5: Liquidity Facility
  or O.O.'
---

Refers to committed credit facilities, as defined in the LRM Standards. Do not include
committed liquidity facilities, as defined in the LRM Standards, which should be reported using
product O.O.5: Liquidity Facility or O.O.18: Unfunded Term Margin. Do not include excess
margin, which should be reported using product O.O.17: Excess Margin, or retail mortgage
commitments, which should be reported using product O.O.6: Retail Mortgage Commitments.
Use the O.O.[Maturity Bucket] field to indicate the earliest date the commitment could be
drawn.
Use the O.O.[Counterparty] field to distinguish between facilities to different counterparties:
• Retail
• Small Business
• Non-Financial Corporate
• Sovereign
• Central Bank
• GSE
• PSE
• MDB
• Other Supranational
• Pension Fund
• Bank
• Broker-Dealer
• Investment Company or Advisor
• Financial Market Utility
• Other Supervised Non-Bank Financial Entity
• Debt Issuing SPE
• Non-Regulated Fund
• Other
