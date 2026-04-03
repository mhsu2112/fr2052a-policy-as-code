---
section_id: I.O.8
section_name: Principal Payments Receivable on Unencumbered Investment Securities
pillar: inflows
category: I.O
category_name: 'Inflows: Other'
definition_summary: 'Refers to contractual principal payments receivable on reporting
  entity-owned investment

  securities.'
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
- section: I.O.6
  relationship: 's, and do not report the interest under I.O.6: Interest and Dividends
    Receivable. For'
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Do not include principal payments receivable on loans and leases,
  which should be reported separately under the appropriate product in the Inflows-Unsecured
  or Inflows-Secured tables. Do not include principal payments receivable on securities
  that are currently encumbered. Use the [Treasury Control] field to identify payments
  receivable related to securities that are similarly flagged in the Inflows-Assets
  table. For all principal payments reported, indicate the corresponding collateral
  class in...
---

Refers to contractual principal payments receivable on reporting entity-owned investment
securities. For amortizing products for which the principal and interest amounts cannot be
readily separated, report aggregated principal and interest cash inflows, and do not report the
interest under I.O.6: Interest and Dividends Receivable. For other products, report the
contractual principal cash payment to be received, excluding interest payments, which should
be reported under product I.O.6: Interest and Dividends Receivable. Do not include principal
payments receivable on loans and leases, which should be reported separately under the
appropriate product in the Inflows-Unsecured or Inflows-Secured tables. Do not include
principal payments receivable on securities that are currently encumbered. Use the [Treasury
Control] field to identify payments receivable related to securities that are similarly flagged in
the Inflows-Assets table. For all principal payments reported, indicate the corresponding
collateral class in the [Collateral Class] field. Under circumstances where the principal payments
receivable are uncertain (e.g., an index-linked structured note, where the payout has not yet
been determined), forecast receivables for 30 calendar days beyond the as-of date (T).
