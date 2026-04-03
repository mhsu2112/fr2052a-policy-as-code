---
section_id: S.DC.21
section_name: Other Collateral Substitution Capacity
pillar: supplemental
category: S.DC
category_name: 'Supplemental: Derivatives & Collateral'
definition_summary: Refers to the potential funding capacity arising from the reporting
  entity’s contractual ability to
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
- section: I.A.1
  relationship: (i.e., the assets would be reported in I.A.1 or I.A.2). Additionally,
    a reporting en
- section: I.A.2
  relationship: he assets would be reported in I.A.1 or I.A.2). Additionally, a reporting
    entity must
- regulation: LRM Standards
  description: cut factors prescribed in the LRM Standards. U.S. firms that are identified
    as Category III banking org
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Report only values in USD, representing the difference between the
  fair value of the collateral held and the fair value of the collateral that could
  be posted, after applying the haircut factors prescribed in the LRM Standards. U.S.
  firms that are identified as Category III banking organizations with average weighted
  short-term wholesale funding of less than $75 billion; U.
---

Refers to the potential funding capacity arising from the reporting entity’s contractual ability to
substitute collateral with higher liquidity value currently posted to a counterparty of a non-
derivative transaction with collateral of lower liquidity value. In calculating substitution
capacity, include in scope only settled funding transactions (i.e., excluding forward-starting
transactions) that have a residual maturity of greater than 30 days where the reporting entity
has the contractual right to substitute assets pledged. The value reported should also be limited
based upon the value of collateral a reporting entity currently holds and could substitute into
the transaction on the reporting date. Specifically, a reporting entity must use the “Open” (day
0) maturity bucket to designate the value of substitution capacity limited by assets eligible for
substitution that are currently owned outright and held unencumbered (i.e., the assets would
be reported in I.A.1 or I.A.2). Additionally, a reporting entity must disclose capacity based upon
assets eligible for substitution that are owned outright and currently encumbered, but will
become unencumbered on the first good business day following the current reporting date.
This additional capacity should be reported using the maturity bucket that corresponds to the
calendar day when the assets eligible for substitution would become unencumbered. Report
only values in USD, representing the difference between the fair value of the collateral held and
the fair value of the collateral that could be posted, after applying the haircut factors prescribed
in the LRM Standards. U.S. firms that are identified as Category III banking organizations with
average weighted short-term wholesale funding of less than $75 billion; U.S. firms that are
identified as Category IV banking organizations; FBOs that are identified as Category III foreign
banking organizations with average weighted short-term wholesale funding of less than $75
billion; and FBOs that are identified as Category IV foreign banking organizations have the
option of not reporting this product.
