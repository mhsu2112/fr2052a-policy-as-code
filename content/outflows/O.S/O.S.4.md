---
section_id: O.S.4
section_name: Collateral Swaps
pillar: outflows
category: O.S
category_name: 'Outflows: Secured'
definition_summary: Refers to transactions where non-cash assets are exchanged (e.g.,
  collateral
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
- regulation: LRM Standards
  description: 'set categories defined in the LRM Standards: • Level 1 Received •
    Level 2a Received • Level 2b Received'
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: 'Report the [Collateral Class] according to the assets pledged. Report
  the fair value of these assets pledged in the [Collateral Value] field. Report the
  fair value of assets received in the [Maturity Amount] field. Use the [Sub-Product]
  field to identify the type of collateral received based on the asset categories
  defined in the LRM Standards: • Level 1 Received • Level 2a Received • Level 2b
  Received • Non-HQLA Received • No Collateral Received For collateral swaps where
  a non-cash asset is le...'
---

Refers to transactions where non-cash assets are exchanged (e.g., collateral
upgrade/downgrade trades) at the inception14 of the transaction, or a non-cash asset is lent
and no collateral is received (i.e., an unsecured loan of collateral), and the assets will be
returned at a future date.
For collateral swaps where non-cash assets are exchanged, split the collateral swap into two
separate lending and borrowing transactions and report in both the Outflows-Secured and
14 Collateral swap transactions that are remargined with cash payments should continue to be reported under this
product.
Inflows-Secured tables. O.S.4 should be reported based on the collateral pledged. Report the
[Collateral Class] according to the assets pledged. Report the fair value of these assets pledged
in the [Collateral Value] field. Report the fair value of assets received in the [Maturity Amount]
field. Use the [Sub-Product] field to identify the type of collateral received based on the asset
categories defined in the LRM Standards:
• Level 1 Received
• Level 2a Received
• Level 2b Received
• Non-HQLA Received
• No Collateral Received
For collateral swaps where a non-cash asset is lent, report the [Collateral Class] according to the
assets pledged and report the fair value of these assets pledged in the [Collateral Value] field.
