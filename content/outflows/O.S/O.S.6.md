---
section_id: O.S.6
section_name: Exceptional Central Bank Operations
pillar: outflows
category: O.S
category_name: 'Outflows: Secured'
definition_summary: 'Refers to outstanding secured funding from central banks for
  exceptional central bank

  operations.'
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
- section: O.S.1
  relationship: 'ed based on the transaction type (e.g., O.S.1: Repo) with the [Counterparty]
    field se'
- section: I.A.2
  relationship: 'ng should not be included under product I.A.2: Capacity. Use the
    [Sub-Product] field'
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Do not include transactions related to normal open market operations,
  which should be reported based on the transaction type (e.g., O.S.
---

Refers to outstanding secured funding from central banks for exceptional central bank
operations. Do not include transactions related to normal open market operations, which
should be reported based on the transaction type (e.g., O.S.1: Repo) with the [Counterparty]
field set to “Central Bank”. The amount borrowed and the fair value of collateral pledged to
secure the borrowing should not be included under product I.A.2: Capacity.
Use the [Sub-Product] field to further identify the specific source of secured funding provided
according to the following groupings:
• FRB (Federal Reserve Bank)
• SNB (Swiss National Bank)
• BOE (Bank of England)
• ECB (European Central Bank)
• BOJ (Bank of Japan)
• RBA (Reserve Bank of Australia)
• BOC (Bank of Canada)
• OCB (Other Central Bank)
• FRFF (Covered Federal Reserve Facility Funding)
