---
section_id: O.W.7
section_name: Other Asset-Backed Financing
pillar: outflows
category: O.W
category_name: 'Outflows: Wholesale'
definition_summary: Refers to (i) all other asset-backed financing arrangements that
  make use of conduits; and (ii) all
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
- section: O.O.19
  relationship: 'ty Amount] field, and not under product O.O.19: Interest & Dividends
    Payable. For all'
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Do not record book/fair value. To the extent that the interest payable
  on structured instruments is realized through increases or decreases in the principal
  balance, this interest/return should be aggregated with the principal maturity amount
  of the associated product. For debt instruments issued at a discount, report the
  final maturity obligation under the [Maturity Amount] field, and not under product
  O.O.
---

Refers to (i) all other asset-backed financing arrangements that make use of conduits; and (ii) all
other issuances backed by a lien on an underlying asset or pool of collateral where rights of
rehypothecation over the collateral are not conferred to the investor or counterparty.
Unsecured Funding
General Guidance: For products that generate unsecured funding, report the contractual
liabilities based on the remaining maturity of the issuance. Do not record book/fair value. To
the extent that the interest payable on structured instruments is realized through increases or
decreases in the principal balance, this interest/return should be aggregated with the principal
maturity amount of the associated product. For debt instruments issued at a discount, report
the final maturity obligation under the [Maturity Amount] field, and not under product O.O.19:
Interest & Dividends Payable. For all other periodic interest payments report those under
product O.O.19 Interest & Dividends Payable.
The following list outlines the unsecured products to be reported in the Outflows-Wholesale
table:
