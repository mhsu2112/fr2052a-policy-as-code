---
section_id: O.O.5
section_name: Liquidity Facilities
pillar: outflows
category: O.O
category_name: 'Outflows: Other'
definition_summary: 'Refers to committed liquidity facilities, as defined in the LRM
  Standards; however, exclude

  unfunded term margin, which should be reported under O.O.18: Unfunded Term Margin.'
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
- section: O.O.18
  relationship: 'margin, which should be reported under O.O.18: Unfunded Term Margin.
    If facilities ha'
- regulation: LRM Standards
  description: facilities, as defined in the LRM Standards; however, exclude unfunded
    term margin, which should be rep
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Includes standby purchase agreements that backstop remarketing o
  obligations, as well as direct-pay LOCs that provide credit enhancement. If a VRDN
  is not supported by an SBPA or LOC, then the remarketing obligation should also
  be considered as a liquidity facility under this product.
---

Refers to committed liquidity facilities, as defined in the LRM Standards; however, exclude
unfunded term margin, which should be reported under O.O.18: Unfunded Term Margin.
If facilities have aspects of both credit and liquidity facilities, the facility must be classified as a
liquidity facility.
Use the O.O.[Maturity Bucket] field to indicate the earliest date the commitment could be
drawn.
Use the O.O.[Counterparty] field to distinguish between facilities to different counterparties:
• Retail
• Small Business
• Non-Financial Corporate
• Sovereign
• Central Bank
• GSE
• PSE, except Municipalities for VRDN structures
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
• Municipalities for VRDN structures
Includes standby purchase agreements that backstop remarketing
o
obligations, as well as direct-pay LOCs that provide credit enhancement. If a
VRDN is not supported by an SBPA or LOC, then the remarketing obligation
should also be considered as a liquidity facility under this product.
• Other
