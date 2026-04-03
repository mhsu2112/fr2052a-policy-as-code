---
section_id: S.B.6
section_name: Carrying Value Adjustment
pillar: supplemental
category: S.B
category_name: 'Supplemental: Balance Sheet'
definition_summary: 'Refers to all other adjustments to the value of FR 2052a balance
  sheet products necessary to

  arrive at the carrying value consistent with section 102 of the LRM Standards.'
data_fields:
- name: product
  type: string
  description: FR 2052a product code
  required: true
- name: sub_product
  type: string
  description: Sub-category or further detail
  required: false
- name: currency
  type: string
  description: ISO 4217 currency code
  required: true
- name: market_value
  type: decimal
  description: Value in reporting currency
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
  description: stent with section 102 of the LRM Standards. These adjustments may
    be represented as positive or negati
version_history:
- version: '2025-02-26'
  change: Current version
---

Refers to all other adjustments to the value of FR 2052a balance sheet products necessary to
arrive at the carrying value consistent with section 102 of the LRM Standards. These
adjustments may be represented as positive or negative numbers depending on whether they
correspond to increases (positive) or decreases (negative) to the asset or liability balance sheet
product values represented elsewhere in the Inflows, Outflows or Supplemental sections of the
FR 2052a report. Carrying value adjustments may include cases:
• where the amount reported under an FR 2052a balance sheet product represents
the undiscounted cash value, but the carrying value should reflect the fair value of
the exposure;
• where the amount reported under an FR 2052a balance sheet product represents
the fair or market value, but the carrying value should reflect the historical book or
amortized cost value;
• where the scope of exposures reportable for an FR 2052a balance sheet product
exceeds the scope of exposures applicable under section 102 of the LRM Standards.
