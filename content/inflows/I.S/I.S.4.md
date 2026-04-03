---
section_id: I.S.4
section_name: Collateral Swaps
pillar: inflows
category: I.S
category_name: 'Inflows: Secured'
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
  description: 'set categories defined in the LRM Standards: • Level 1 Pledged • Level
    2a Pledged • Level 2b Pledged •'
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: 'Report the [Collateral Class] according to the assets received.
  Report the fair value under GAAP of the assets received in the [Collateral Value]
  field. Report the fair value under GAAP of the assets pledged in the [Maturity Amount]
  field. Use the [Sub-Product] field to identify the type of collateral pledged based
  on the asset categories defined in the LRM Standards: • Level 1 Pledged • Level
  2a Pledged • Level 2b Pledged • Non-HQLA Pledged • No Collateral Pledged For collateral
  swaps where a n...'
---

Refers to transactions where non-cash assets are exchanged (e.g., collateral
upgrade/downgrade trades) at the inception12 of the transaction, or a non-cash asset is
12 Collateral swap transactions that are remargined with cash payments should continue to be reported under this
product.
borrowed and no collateral is posted (i.e., an unsecured borrowing of collateral), and the assets
will be returned at a future date.
For collateral swaps where there is an exchange of non-cash assets, split the collateral swap
into two separate borrowing and lending transactions and report in both the Inflows-Secured
and Outflows-Secured tables. I.S.4 should reflect the borrowing leg of the transaction. Report
the [Collateral Class] according to the assets received. Report the fair value under GAAP of the
assets received in the [Collateral Value] field. Report the fair value under GAAP of the assets
pledged in the [Maturity Amount] field. Use the [Sub-Product] field to identify the type of
collateral pledged based on the asset categories defined in the LRM Standards:
• Level 1 Pledged
• Level 2a Pledged
• Level 2b Pledged
• Non-HQLA Pledged
• No Collateral Pledged
For collateral swaps where a non-cash asset is borrowed, report the [Collateral Class] according
to the assets received and report the fair value under GAAP of the assets received in the
[Collateral Value] field.
