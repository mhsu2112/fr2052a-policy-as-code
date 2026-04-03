---
section_id: I.A.2
section_name: Capacity. Exclude transactions involving the purchase of securities
  that have been
pillar: inflows
category: I.A
category_name: 'Inflows: Assets'
definition_summary: 'executed, but not yet settled as those transactions should be
  reported in lines I.A.5: Unsettled

  Asset Purchases or I.A.6: Forward Asset Purchases, depending on the timing of settlement.'
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
- section: I.A.5
  relationship: 'ransactions should be reported in lines I.A.5: Unsettled Asset Purchases
    or I.A.6: Fo'
- section: I.A.6
  relationship: 'nes I.A.5: Unsettled Asset Purchases or I.A.6: Forward Asset Purchases,
    depending on'
- regulation: LRM Standards
  description: id asset categories under the LRM Standards). Include unencumbered
    loans, even though these loans must
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Include unencumbered loans and leases even though these loans and
  leases must also be reported under the appropriate Inflows- Unsecured and Inflows-Secured
  products. Do not exclude assets that are owned outright at a subsidiary of the reporting
  entity, but have been pledged to secure a transaction with another subsidiary of
  the reporting entity; to the extent these assets remain unencumbered. I.A.
---

executed, but not yet settled as those transactions should be reported in lines I.A.5: Unsettled
Asset Purchases or I.A.6: Forward Asset Purchases, depending on the timing of settlement. Any
amounts due to the reporting institution with respect to any associated hedges should not be
added or subtracted from the fair value of the asset. Include unencumbered loans and leases
even though these loans and leases must also be reported under the appropriate Inflows-
Unsecured and Inflows-Secured products. Do not exclude assets that are owned outright at a
subsidiary of the reporting entity, but have been pledged to secure a transaction with another
subsidiary of the reporting entity; to the extent these assets remain unencumbered.
I.A.2: Capacity
Refers to the available credit extended by central banks or GSEs that is secured by acceptable
collateral, where (i) potential credit secured by the assets is not currently extended to the
reporting entity or its consolidated subsidiaries; and (ii) the pledged assets are not required to
support access to the payment services of a central bank. The amount of available capacity
should be reported net of any advances that have already been drawn upon or other forms of
encumbrance (e.g., FHLB LOCs). The [Market Value] field should indicate the market value of
collateral pledged, while the [Lendable Value] field should indicate the residual capacity
available to draw against this collateral. For the purpose of reporting available capacity and
encumbrance, under circumstances where draws are not assessed against specific individual
assets, but rather the entire pool of collateral generally, assume that the lowest quality assets
are encumbered first followed by higher quality assets (quality in terms of high-quality liquid
asset categories under the LRM Standards). Include unencumbered loans, even though these
loans must also be reported under the appropriate Inflows-Unsecured and Inflows-Secured
products.
Use the [Sub-Product] field to identify the specific source of the capacity according to the
following choices:
• FRB (Federal Reserve Bank)
• SNB (Swiss National Bank)
• BOE (Bank of England)
• ECB (European Central Bank)
• BOJ (Bank of Japan)
• RBA (Reserve Bank of Australia)
• BOC (Bank of Canada)
• OCB (Other Central Bank)
• FHLB (FHLB System)
• Other GSE
