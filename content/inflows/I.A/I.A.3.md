---
section_id: I.A.3
section_name: Unrestricted Reserve Balances
pillar: inflows
category: I.A
category_name: 'Inflows: Assets'
definition_summary: Refers to reserve bank balances maintained at a Federal Reserve
  Bank, less the reserve balance
data_fields:
- name: product
  type: string
  description: FR 2052a product code
  required: true
- name: sub_product
  type: string
  description: Sub-product identifier (where applicable)
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
- name: lendable_value
  type: decimal
  description: Lendable value or residual capacity
  required: false
- name: reporting_entity
  type: enum
  values:
  - Consolidated
  - Parent Only
  - Material Entity
  required: true
cross_references:
- regulation: LRM Standards
  description: the meaning set forth in the LRM Standards. For those accounts that
    explicitly and contractually permi
- regulation: Regulation D
  description: ned in section 204.5(a)(1) of Regulation D (12 CFR 204.5(a)(1)), foreign
    withdrawable reserves maintai
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to reserve bank balances maintained at a Federal Reserve Bank, less the reserve balance
requirement as defined in section 204.5(a)(1) of Regulation D (12 CFR 204.5(a)(1)), foreign
withdrawable reserves maintained at other central banks, and Federal Reserve term deposits
that are not held to satisfy reserve requirements.
Reserve Bank balances has the meaning set forth in the LRM Standards. For those accounts
that explicitly and contractually permit withdrawal upon demand prior to the expiration of the
term or that may be pledged as collateral for term or automatically renewing overnight
advances from the Federal Reserve Bank, report the [Maturity Bucket] value as “Open”. For
other accounts, report the [Maturity Bucket] value that corresponds with the contractual
maturity.
Foreign withdrawable reserves have the meaning set forth in the LRM Standards.
Use the [Sub-Product] field to further identify the specific central bank account according to the
following choices, or “Currency and Coin” for currency and banknotes:
• FRB (Federal Reserve Bank)
• SNB (Swiss National Bank)
• BOE (Bank of England)
• ECB (European Central Bank)
• BOJ (Bank of Japan)
• RBA (Reserve Bank of Australia)
• BOC (Bank of Canada)
• OCB (Other Central Bank)
• Currency and Coin10
