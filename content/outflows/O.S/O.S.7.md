---
section_id: O.S.7
section_name: Customer Shorts
pillar: outflows
category: O.S
category_name: 'Outflows: Secured'
definition_summary: 'Refers to a transaction where the reporting entity’s customer
  sells a physical security it does

  not own, and the entity subsequently obtains the same security from an internal
  or external

  source to make delivery into the sale.'
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
cross_references: []
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Report failed settlements with a [Forward Start Bucket] value of
  “Open”. • Unsettled - Forward Refers to sales that do not meet the definition of
  regular-way securities trades, that have been executed, but not yet settled and
  therefore have not been covered. Use the [Forward Start Amount] and [Forward Start
  Bucket] fields to indicate the settlement amount and settlement date of the securities
  sold. Report failed settlements with a [Forward Start Bucket] value of “Open”.
---

Refers to a transaction where the reporting entity’s customer sells a physical security it does
not own, and the entity subsequently obtains the same security from an internal or external
source to make delivery into the sale. External refers to a transaction with a counterparty that
falls outside the scope of consolidation for the reporting entity. Internal refers to securities
sourced from within the scope of consolidation of the reporting entity.
Use the [Sub-Product] field to further identify the appropriate source for delivery into the sale
according to the following categories:
• External Cash Transactions
 Refers to securities sourced through a securities borrowing, reverse repo, or
like transaction in exchange for cash collateral.
• External Non-Cash Transactions
 Refers to securities sourced through a collateral swap or like transaction in
exchange for non-cash collateral.
• Firm Longs
 Refers to securities sourced internally from the reporting entity’s own
inventory of collateral where the sale does not coincide with an offsetting
performance-based swap derivative.
• Customer Longs
 Refers to securities sourced internally from collateral held in customer
accounts at the reporting entity.
• Unsettled - Regular Way
 Refers to sales that meet the definition of regular-way securities trades
under GAAP, that have been executed, but not yet settled and therefore
have not been covered. Use the [Forward Start Amount] and [Forward Start
Bucket] fields to indicate the settlement amount and settlement date of the
securities sold. Report failed settlements with a [Forward Start Bucket] value
of “Open”.
• Unsettled - Forward
Refers to sales that do not meet the definition of regular-way securities
trades, that have been executed, but not yet settled and therefore have not
been covered. Use the [Forward Start Amount] and [Forward Start Bucket]
fields to indicate the settlement amount and settlement date of the
securities sold. Report failed settlements with a [Forward Start Bucket] value
of “Open”.
Note that the [Sub-Product] designation may differ between the Consolidated Firm reporting
entity and a subsidiary reporting entity if the collateral delivered into the short is sourced from,
for example, an affiliate’s long inventory. For the subsidiary reporting entity, collateral sourced
from an affiliate should be represented as sourced from an external transaction; however for
the consolidated firm, this would be represented as sourced from a “Firm Long” position.
