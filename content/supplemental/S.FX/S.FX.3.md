---
section_id: S.FX.3
section_name: Swaps
pillar: supplemental
category: S.FX
category_name: 'Supplemental: Foreign Exchange'
definition_summary: Refers to transactions involving the exchange of two currencies
  on a specific date at a rate
data_fields:
- name: product
  type: string
  description: FR 2052a product code
  required: true
- name: currency_pair
  type: string
  description: Currency pair (e.g., USD/EUR)
  required: true
- name: maturity_bucket
  type: date_bucket
  description: Settlement or maturity date
  required: true
- name: notional_value
  type: decimal
  description: Notional value in USD equivalent
  required: true
- name: market_value
  type: decimal
  description: Mark-to-market value
  required: true
- name: reporting_entity
  type: enum
  values:
  - Consolidated
  - Parent Only
  - Material Entity
  required: true
cross_references:
- section: I.A.1
  relationship: in the “Assets” table is referred to as I.A.1. Table 3 - Product Reference
    Syntax Pre
- section: I.A.2
  relationship: “Capacity” product in the Assets table (I.A.2) requires a [Sub- o
    Product] designatio
- section: S.B.6
  relationship: 'though not displayed below, the product S.B.6: Carrying Value Adjustment
    would requir'
- section: I.A.3
  relationship: Unencumbered Assets  I.A.2 Capacity  I.A.3 Unrestricted Reserve
    Balances  I.A.4 R
- section: I.A.4
  relationship:  I.A.3 Unrestricted Reserve Balances  I.A.4 Restricted Reserve Balances
     I.A.5 Uns
- section: I.A.5
  relationship: s  I.A.4 Restricted Reserve Balances  I.A.5 Unsettled Asset Purchases
     I.A.6 Forwa
- section: I.A.6
  relationship: ces  I.A.5 Unsettled Asset Purchases  I.A.6 Forward Asset Purchases
     I.A.7 Encumbe
- section: I.A.7
  relationship: hases  I.A.6 Forward Asset Purchases  I.A.7 Encumbered Assets 
    Inflows - Unsecured
- section: I.U.1
  relationship: Encumbered Assets  Inflows - Unsecured I.U.1 Onshore Placements 
    I.U.2 Offshore Pla
- section: I.U.2
  relationship: '- Unsecured I.U.1 Onshore Placements  I.U.2 Offshore Placements
     I.U.3 Required Op'
- section: I.U.3
  relationship: lacements  I.U.2 Offshore Placements  I.U.3 Required Operational
    Balances  I.U.4 E
- section: I.U.4
  relationship:  I.U.3 Required Operational Balances  I.U.4 Excess Operational Balances
     I.U.5 Out
- section: I.U.5
  relationship: s  I.U.4 Excess Operational Balances  I.U.5 Outstanding Draws on
    Unsecured Revolvin
- section: I.U.6
  relationship: aws on Unsecured Revolving Facilities  I.U.6 Other Loans  I.U.7
    Cash Items in the P
- section: I.U.7
  relationship: olving Facilities  I.U.6 Other Loans  I.U.7 Cash Items in the Process
    of Collection
- section: I.U.8
  relationship: sh Items in the Process of Collection  I.U.8 Short-Term Investments
     Inflows - Secu
- section: I.S.1
  relationship: rt-Term Investments  Inflows - Secured I.S.1 Reverse Repo  I.S.2
    Securities Borrowi
- section: I.S.2
  relationship: Inflows - Secured I.S.1 Reverse Repo  I.S.2 Securities Borrowing
     I.S.3 Dollar Rol
- section: I.S.3
  relationship: rse Repo  I.S.2 Securities Borrowing  I.S.3 Dollar Rolls  I.S.4
    Collateral Swaps 
- section: I.S.4
  relationship: rities Borrowing  I.S.3 Dollar Rolls  I.S.4 Collateral Swaps  I.S.5
    Margin Loans 
- section: I.S.5
  relationship: Dollar Rolls  I.S.4 Collateral Swaps  I.S.5 Margin Loans  I.S.6
    Other Secured Loan
- section: I.S.6
  relationship: Collateral Swaps  I.S.5 Margin Loans  I.S.6 Other Secured Loans
    - Rehypothecatable
- section: I.S.7
  relationship: ther Secured Loans - Rehypothecatable  I.S.7 Outstanding Draws on
    Secured Revolving
- section: I.S.8
  relationship: Draws on Secured Revolving Facilities  I.S.8 Other Secured Loans
    - Non-Rehypothecata
- section: I.S.9
  relationship: Secured Loans - Non-Rehypothecatable  I.S.9 Synthetic Customer Longs
     I.S.10 Synth
- section: I.S.10
  relationship: able  I.S.9 Synthetic Customer Longs  I.S.10 Synthetic Firm Sourcing
     Inflows - Oth
- section: I.O.1
  relationship: nthetic Firm Sourcing  Inflows - Other I.O.1 Derivative Receivables
     I.O.2 Collater
- section: I.O.2
  relationship: '- Other I.O.1 Derivative Receivables  I.O.2 Collateral Called for
    Receipt  I.O.3 T'
- section: I.O.3
  relationship:  I.O.2 Collateral Called for Receipt  I.O.3 TBA Sales  I.O.4 Undrawn
    Committed Fac
- section: I.O.4
  relationship: Called for Receipt  I.O.3 TBA Sales  I.O.4 Undrawn Committed Facilities
    Purchased
- section: I.O.5
  relationship: ndrawn Committed Facilities Purchased  I.O.5 Lock-up Balance  I.O.6
    Interest and Di
- section: I.O.6
  relationship: ies Purchased  I.O.5 Lock-up Balance  I.O.6 Interest and Dividends
    Receivable  I.O
- section: I.O.7
  relationship: O.6 Interest and Dividends Receivable  I.O.7 Net 30-Day Derivative
    Receivables  I.O
- section: I.O.8
  relationship: O.7 Net 30-Day Derivative Receivables  I.O.8 Principal Payments Receivable
    on Unencu
- section: I.O.9
  relationship: on Unencumbered Investment Securities  I.O.9 Other Cash Inflows 
    PID Product Requir
- section: O.W.1
  relationship: 'ent Not Applicable Outflows - Wholesale O.W.1 Asset-Backed Commercial
    Paper: Single-S'
- section: O.W.2
  relationship: 'acked Commercial Paper: Single-Seller  O.W.2 Asset-Backed Commercial
    Paper: Multi-Se'
- section: O.W.3
  relationship: 'Backed Commercial Paper: Multi-Seller  O.W.3 Collateralized Commercial
    Paper  O.W.4'
- section: O.W.4
  relationship: O.W.3 Collateralized Commercial Paper  O.W.4 Asset-Backed Securities
     O.W.5 Covered
- section: O.W.5
  relationship: Paper  O.W.4 Asset-Backed Securities  O.W.5 Covered Bonds  O.W.6
    Tender Option Bon
- section: O.W.6
  relationship: cked Securities  O.W.5 Covered Bonds  O.W.6 Tender Option Bonds
     O.W.7 Other Asset
- section: O.W.7
  relationship: red Bonds  O.W.6 Tender Option Bonds  O.W.7 Other Asset-Backed Financing
     O.W.8 Co
- section: O.W.8
  relationship:  O.W.7 Other Asset-Backed Financing  O.W.8 Commercial Paper  O.W.9
    Onshore Borrow
- section: O.W.9
  relationship: ed Financing  O.W.8 Commercial Paper  O.W.9 Onshore Borrowing 
    O.W.10 Offshore Bor
- section: O.W.10
  relationship: rcial Paper  O.W.9 Onshore Borrowing  O.W.10 Offshore Borrowing
     O.W.11 Unstructure
- section: O.W.11
  relationship: Borrowing  O.W.10 Offshore Borrowing  O.W.11 Unstructured Long Term
    Debt  O.W.12 St
- section: O.W.12
  relationship:  O.W.11 Unstructured Long Term Debt  O.W.12 Structured Long Term
    Debt  O.W.13 Gove
- section: O.W.13
  relationship: bt  O.W.12 Structured Long Term Debt  O.W.13 Government Supported
    Debt  O.W.14 Unse
- section: O.W.14
  relationship: bt  O.W.13 Government Supported Debt  O.W.14 Unsecured Notes  O.W.15
    Structured Not
- section: O.W.15
  relationship: pported Debt  O.W.14 Unsecured Notes  O.W.15 Structured Notes 
    O.W.16 Wholesale CDs
- section: O.W.16
  relationship: cured Notes  O.W.15 Structured Notes  O.W.16 Wholesale CDs  O.W.17
    Draws on Committ
- section: O.W.17
  relationship: ructured Notes  O.W.16 Wholesale CDs  O.W.17 Draws on Committed
    Lines  O.W.18 Free
- section: O.W.18
  relationship: CDs  O.W.17 Draws on Committed Lines  O.W.18 Free Credits  O.W.19
    Other Unsecured F
- section: O.W.19
  relationship: Committed Lines  O.W.18 Free Credits  O.W.19 Other Unsecured Financing
     Outflows -
- section: O.S.1
  relationship: nsecured Financing  Outflows - Secured O.S.1 Repo  O.S.2 Securities
    Lending  O.S.3
- section: O.S.2
  relationship: ncing  Outflows - Secured O.S.1 Repo  O.S.2 Securities Lending 
    O.S.3 Dollar Rolls
- section: O.S.3
  relationship: O.S.1 Repo  O.S.2 Securities Lending  O.S.3 Dollar Rolls  O.S.4
    Collateral Swaps 
- section: O.S.4
  relationship: curities Lending  O.S.3 Dollar Rolls  O.S.4 Collateral Swaps  O.S.5
    FHLB Advances
- section: O.S.5
  relationship: Dollar Rolls  O.S.4 Collateral Swaps  O.S.5 FHLB Advances  O.S.6
    Exceptional Centr
- section: O.S.6
  relationship: ollateral Swaps  O.S.5 FHLB Advances  O.S.6 Exceptional Central
    Bank Operations  O
- section: O.S.7
  relationship: 6 Exceptional Central Bank Operations  O.S.7 Customer Shorts  O.S.8
    Firm Shorts  O
- section: O.S.8
  relationship: nk Operations  O.S.7 Customer Shorts  O.S.8 Firm Shorts  O.S.9
    Synthetic Customer
- section: O.S.9
  relationship: 7 Customer Shorts  O.S.8 Firm Shorts  O.S.9 Synthetic Customer Shorts
     O.S.10 Synt
- section: O.S.10
  relationship: rts  O.S.9 Synthetic Customer Shorts  O.S.10 Synthetic Firm Financing
     O.S.11 Other
- section: O.S.11
  relationship: rts  O.S.10 Synthetic Firm Financing  O.S.11 Other Secured Financing
    Transactions 
- section: O.D.1
  relationship: cing Transactions  Outflows - Deposits O.D.1 Transactional Accounts
     O.D.2 Non-Tran
- section: O.D.2
  relationship: Deposits O.D.1 Transactional Accounts  O.D.2 Non-Transactional Relationship
    Accounts
- section: O.D.3
  relationship: n-Transactional Relationship Accounts  O.D.3 Non-Transactional Non-Relationship
    Acco
- section: O.D.4
  relationship: ansactional Non-Relationship Accounts  O.D.4 Operational Account
    Balances  O.D.5 Ex
- section: O.D.5
  relationship:  O.D.4 Operational Account Balances  O.D.5 Excess Balances in Operational
    Accounts
- section: O.D.6
  relationship: cess Balances in Operational Accounts  O.D.6 Non-Operational Account
    Balances  O.D.
- section: O.D.7
  relationship: .D.6 Non-Operational Account Balances  O.D.7 Operational Escrow Accounts
     O.D.8 Non
- section: O.D.8
  relationship: s  O.D.7 Operational Escrow Accounts  O.D.8 Non-Reciprocal Brokered
    Deposits  O.D.
- section: O.D.9
  relationship: .D.8 Non-Reciprocal Brokered Deposits  O.D.9 Stable Affiliated Sweep
    Account Balance
- section: O.D.10
  relationship: ble Affiliated Sweep Account Balances  O.D.10 Less Stable Affiliated
    Sweep Account Ba
- section: O.D.11
  relationship: ble Affiliated Sweep Account Balances  O.D.11 Non-Affiliated Sweep
    Accounts  O.D.12
- section: O.D.12
  relationship: O.D.11 Non-Affiliated Sweep Accounts  O.D.12 Other Product Sweep
    Accounts  O.D.13 R
- section: O.D.13
  relationship:  O.D.12 Other Product Sweep Accounts  O.D.13 Reciprocal Accounts
     O.D.14 Other Thir
- section: O.D.14
  relationship: Accounts  O.D.13 Reciprocal Accounts  O.D.14 Other Third-Party Deposits
     O.D.15 Oth
- section: O.D.15
  relationship: s  O.D.14 Other Third-Party Deposits  O.D.15 Other Accounts  PID
    Product Required D
- section: O.O.1
  relationship: pendent Not Applicable Outflows - Other O.O.1 Derivative Payables
     O.O.2 Collateral
- section: O.O.2
  relationship: ows - Other O.O.1 Derivative Payables  O.O.2 Collateral Called for
    Delivery  O.O.3
- section: O.O.3
  relationship: O.O.2 Collateral Called for Delivery  O.O.3 TBA Purchases  O.O.4
    Credit Facilities
- section: O.O.4
  relationship: ed for Delivery  O.O.3 TBA Purchases  O.O.4 Credit Facilities 
    O.O.5 Liquidity Fac
- section: O.O.5
  relationship: A Purchases  O.O.4 Credit Facilities  O.O.5 Liquidity Facilities
     O.O.6 Retail Mor
- section: O.O.6
  relationship: cilities  O.O.5 Liquidity Facilities  O.O.6 Retail Mortgage Commitments
     O.O.7 Tra
- section: O.O.7
  relationship: s  O.O.6 Retail Mortgage Commitments  O.O.7 Trade Finance Instruments
     O.O.8 MTM I
- section: O.O.8
  relationship: nts  O.O.7 Trade Finance Instruments  O.O.8 MTM Impact on Derivative
    Positions  O.
- section: O.O.9
  relationship: .8 MTM Impact on Derivative Positions  O.O.9 Loss of Rehypothecation
    Rights Due to a
- section: O.O.10
  relationship: ion Rights Due to a 1 Notch Downgrade  O.O.10 Loss of Rehypothecation
    Rights Due to a
- section: O.O.11
  relationship: ion Rights Due to a 2 Notch Downgrade  O.O.11 Loss of Rehypothecation
    Rights Due to a
- section: O.O.12
  relationship: ion Rights Due to a 3 Notch Downgrade  O.O.12 Loss of Rehypothecation
    Rights Due to a
- section: O.O.13
  relationship: ue to a Change in Financial Condition  O.O.13 Total Collateral Required
    Due to a 1 No
- section: O.O.14
  relationship: l Required Due to a 1 Notch Downgrade  O.O.14 Total Collateral Required
    Due to a 2 No
- section: O.O.15
  relationship: l Required Due to a 2 Notch Downgrade  O.O.15 Total Collateral Required
    Due to a 3 No
- section: O.O.16
  relationship: l Required Due to a 3 Notch Downgrade  O.O.16 Total Collateral Required
    Due to a Chan
- section: O.O.17
  relationship: ue to a Change in Financial Condition  O.O.17 Excess Margin  O.O.18
    Unfunded Term Ma
- section: O.O.18
  relationship: cial Condition  O.O.17 Excess Margin  O.O.18 Unfunded Term Margin
     O.O.19 Interest
- section: O.O.19
  relationship: Margin  O.O.18 Unfunded Term Margin  O.O.19 Interest and Dividends
    Payable  O.O.20
- section: O.O.20
  relationship: O.O.19 Interest and Dividends Payable  O.O.20 Net 30-Day Derivative
    Payables  O.O.21
- section: O.O.21
  relationship: O.O.20 Net 30-Day Derivative Payables  O.O.21 Other Outflows Related
    to Structured Tr
- section: O.O.22
  relationship: ws Related to Structured Transactions  O.O.22 Other Cash Outflows
     Supplemental - De
- section: S.DC.1
  relationship: Supplemental - Derivatives & Collateral S.DC.1 Gross Derivative Asset
    Values  S.DC.2
- section: S.DC.2
  relationship: S.DC.1 Gross Derivative Asset Values  S.DC.2 Gross Derivative Liability
    Values  S.D
- section: S.DC.3
  relationship: C.2 Gross Derivative Liability Values  S.DC.3 Derivative Settlement
    Payments Delivere
- section: S.DC.4
  relationship: ivative Settlement Payments Delivered  S.DC.4 Derivative Settlement
    Payments Received
- section: S.DC.5
  relationship: rivative Settlement Payments Received  S.DC.5 Initial Margin Posted
    - House  S.DC.6
- section: S.DC.6
  relationship: S.DC.5 Initial Margin Posted - House  S.DC.6 Initial Margin Posted
    - Customer  S.DC
- section: S.DC.7
  relationship: DC.6 Initial Margin Posted - Customer  S.DC.7 Initial Margin Received
     S.DC.8 Variat
- section: S.DC.8
  relationship: omer  S.DC.7 Initial Margin Received  S.DC.8 Variation Margin Posted
    - House  S.DC.
- section: S.DC.9
  relationship: .DC.8 Variation Margin Posted - House  S.DC.9 Variation Margin Posted
    - Customer  S.
- section: S.DC.10
  relationship: .9 Variation Margin Posted - Customer  S.DC.10 Variation Margin Received
     S.DC.11 Der
- section: S.DC.11
  relationship: r  S.DC.10 Variation Margin Received  S.DC.11 Derivative CCP Default
    Fund Contributio
- section: S.DC.12
  relationship: ivative CCP Default Fund Contribution  S.DC.12 Other CCP Pledges
    and Contributions  S
- section: S.DC.13
  relationship: 2 Other CCP Pledges and Contributions  S.DC.13 Collateral Disputes
    Deliverables  S.DC
- section: S.DC.14
  relationship: C.13 Collateral Disputes Deliverables  S.DC.14 Collateral Disputes
    Receivables  S.DC.
- section: S.DC.15
  relationship: DC.14 Collateral Disputes Receivables  S.DC.15 Sleeper Collateral
    Deliverables  S.DC.
- section: S.DC.16
  relationship: DC.15 Sleeper Collateral Deliverables  S.DC.16 Required Collateral
    Deliverables  S.DC
- section: S.DC.17
  relationship: C.16 Required Collateral Deliverables  S.DC.17 Sleeper Collateral
    Receivables  S.DC.1
- section: S.DC.18
  relationship: .DC.17 Sleeper Collateral Receivables  S.DC.18 Derivative Collateral
    Substitution Risk
- section: S.DC.19
  relationship: rivative Collateral Substitution Risk  S.DC.19 Derivative Collateral
    Substitution Capa
- section: S.DC.20
  relationship: tive Collateral Substitution Capacity  S.DC.20 Other Collateral Substitution
    Risk  S.
- section: S.DC.21
  relationship: 20 Other Collateral Substitution Risk  S.DC.21 Other Collateral Substitution
    Capacity
- section: S.L.1
  relationship: pplemental - Liquidity Risk Measurement S.L.1 Subsidiary Liquidity
    That Cannot be Tra
- section: S.L.2
  relationship: Liquidity That Cannot be Transferred  S.L.2 Subsidiary Liquidity
    Available for Tran
- section: S.L.3
  relationship: iary Liquidity Available for Transfer  S.L.3 Unencumbered Asset Hedges
    - Early Termi
- section: S.L.4
  relationship: t Hedges - Early Termination Outflows  S.L.4 Non-Structured Debt
    Maturing in Greater
- section: S.L.5
  relationship: r than 30-days - Primary Market Maker  S.L.5 Structured Debt Maturing
    in Greater tha
- section: S.L.6
  relationship: r than 30-days - Primary Market Maker  S.L.6 Liquidity Coverage Ratio
     S.L.7 Subsid
- section: S.L.7
  relationship: aker  S.L.6 Liquidity Coverage Ratio  S.L.7 Subsidiary Funding That
    Cannot be Trans
- section: S.L.8
  relationship: ry Funding That Cannot be Transferred  S.L.8 Subsidiary Funding Available
    for Transf
- section: S.L.9
  relationship: idiary Funding Available for Transfer  S.L.9 Additional Funding Requirement
    for Off-
- section: S.L.10
  relationship: f-Balance Sheet Rehypothecated Assets  S.L.10 Net Stable Funding
    Ratio  Supplemental
- section: S.B.1
  relationship: ng Ratio  Supplemental - Balance Sheet S.B.1 Regulatory Capital Element
     S.B.2 Othe
- section: S.B.2
  relationship: heet S.B.1 Regulatory Capital Element  S.B.2 Other Liabilities 
    S.B.3 Non-Performin
- section: S.B.3
  relationship: tal Element  S.B.2 Other Liabilities  S.B.3 Non-Performing Assets
     S.B.4 Other Ass
- section: S.B.4
  relationship: ilities  S.B.3 Non-Performing Assets  S.B.4 Other Assets  S.B.5
    Counterparty Netti
- section: S.B.5
  relationship: erforming Assets  S.B.4 Other Assets  S.B.5 Counterparty Netting
     S.B.6 Carrying V
- section: S.I.1
  relationship: justment  Supplemental - Informational S.I.1 Long Market Value Client
    Assets  S.I.2
- section: S.I.2
  relationship: S.I.1 Long Market Value Client Assets  S.I.2 Short Market Value Client
    Assets  S.I.
- section: S.I.3
  relationship: .I.2 Short Market Value Client Assets  S.I.3 Gross Client Wires Received
     S.I.4 Gro
- section: S.I.4
  relationship: s  S.I.3 Gross Client Wires Received  S.I.4 Gross Client Wires Paid
     S.I.5 FRB 23A
- section: S.I.5
  relationship: eived  S.I.4 Gross Client Wires Paid  S.I.5 FRB 23A Capacity  S.I.6
    Subsidiary Liq
- section: S.I.6
  relationship: t Wires Paid  S.I.5 FRB 23A Capacity  S.I.6 Subsidiary Liquidity
    Not Transferrable
- section: S.FX.1
  relationship: errable  Supplemental-Foreign Exchange S.FX.1 Spot  S.FX.2 Forwards
    and Futures  S.
- section: S.FX.2
  relationship: lemental-Foreign Exchange S.FX.1 Spot  S.FX.2 Forwards and Futures
     S.FX.3 Swaps  A
- regulation: LCR Rule
  description: iquidity coverage ratio rule (LCR Rule1) in mapping the provisions
    of the LCR Rule to the unique d
- regulation: NSFR
  description: 'nclosure] Appendix VIII: LRM: NSFR to FR 2052a Mapping [Enclosure]
    APPENDIX VI: LCR to FR 2052'
- regulation: Regulation WW
  description: sts detailed in section 20 of Regulation WW (e.g., risk profile and
    market-based characteristics) Asset
- regulation: LRM Standards
  description: document is not a part of the LRM Standards nor a component of the
    FR 2052a report. Firms may use this
version_history:
- version: '2025-02-26'
  change: Current version
reporting_notes: Reporting Entity text Reporting Entity text Reporting Entity text
  Reporting Entity text Product text Product text Product text Product text Sub-Product
  text Counterparty text Sub-Product text Maturity Amount numeric Market Value numeric
  G-SIB text Maturity Amount numeric Maturity Bucket text Lendable Value numeric Maturity
  Amount numeric Maturity Bucket text Forward Start Amount numeric Maturity Bucket
  text Maturity Bucket text Maturity Optionality text Forward Start Bucket text Forward
  Start Am...
---

Refers to transactions involving the exchange of two currencies on a specific date at a rate
agreed at the time of the conclusion of the contract (e.g., the “near” leg), and a reverse
exchange of the same two currencies at a date further in the future at a rate (generally
different from the rate applied to the near leg) agreed at the time of the contract (e.g., the
“far” leg). This product includes but is not limited to both FX forward swaps that involve only
the exchange of notional currency values at the near leg and far leg settlement dates, and
cross-currency swaps that involve both the exchange of notional currency values and periodic
payments of interest over the life of the swap transaction.
Use the “Near” fields (i.e., [Forward Start Amount Currency 1], [Forward Start Amount Currency
2] and [Forward Start Maturity Bucket]) to report the near leg of the transaction, and the
“Maturity Amount” fields (i.e., [Maturity Amount Currency 1], [Maturity Amount Currency 2]
and [Maturity Bucket]) to report the far leg of the transaction.
When reporting transactions for which the near leg has already settled, do not report a value in
the [Forward Start Maturity Bucket] field, but continue to report the original currency
settlement values for the short leg in the “Near Amount” fields.
For swaptions where the final maturity date is dependent on the exercise date (e.g., American-
style or Bermuda-style), indicate the earliest possible exercise date in the [Forward Start
Maturity Bucket] field, and report the final maturity in the [Maturity Bucket] field assuming the
option is exercised at the earliest possible date.
Appendix I: FR 2052a Data Format, Tables, and Fields
Layout of the Data Collection
The technical architecture for the data collection of the FR 2052a report subdivides the three
general categories of inflows, outflows, and supplemental items into 13 distinct data tables and
includes a mechanism for tracking comments, as displayed in the diagram below. These tables
are designed to stratify the assets, liabilities, and supplemental components of a firm’s liquidity
risk profile based on common data structures, while still maintaining a coherent framework for
liquidity risk reporting.
Diagram 1 – FR 2052a Tables and Information Hierarchy
Inflows Outflows Supplemental
Derivatives & Collateral
Assets Deposits
Liquidity Risk Measurement
Unsecured Wholesale
Balance Sheet
Informational
Secured Secured
Foreign exchange
Other inflows Other outflows
Comments
The FR 2052a Data Element
Each table is comprised of a set of fields (i.e., columns) that define the requisite level of
aggregation or granularity for each data element (i.e., row, or record)15. The FR 2052a
framework is a “flat” or tabular structure with predefined columns and an unconstrained
number of rows. The volume of data elements reported should therefore change dynamically
as the size and complexity of the reporting firm’s funding profile changes.
15 Appendix I details the structure of each table.
This instruction document uses the term data element to describe a unique combination of
non-numeric field values in a FR 2052a table, or in other words, a unique record in one of the
FR 2052a tables. Numeric values (e.g., contractual cash flow amounts, market values, lendable
values, etc.) are expected to be aggregated across the unique combinations of all other fields in
each FR 2052a table.
• All notional currency-denominated values should be reported in millions of that
currency (e.g., U.S. dollar-denominated transactions in USD millions, sterling-
denominated transactions in GBP millions, etc.)
• Example: The holding company has four outstanding issuances of plain vanilla long-term
debt:
500mm USD-denominated bond maturing in 4 years and 6 months,
o
1,000mm USD-denominated bond maturing in 5 years,
o
2,000mm GBP-denominated bond maturing in 10 years, and
o
250mm GBP-denominated bond maturing in 1 year and 6 months.
o
• Assume the USD-denominated liabilities are issued in New York, while the GBP-
denominated liabilities are issued in London, and all three issuances qualify as TLAC. In
this case, the two USD-denominated bonds should be summed up and reported as a
single FR 2052a data element, as they exhibit the same values in all non-numeric fields
(note that although the maturities are different, they both fall within the “>4 years <=5
years” maturity bucket). The two GBP issuances, however should not be aggregated, as
they fall in separate and distinct maturity buckets (“>1 year <= 2 years” versus “> 5
years”). Table 2 below illustrates how these three data elements should be reported in
the FR 2052a O.W (Outflows-Wholesale) table.
Table 2 – Example: data element aggregation
• Note: additional examples are included in the field and product definition sections of
this document to illustrate the standard for aggregating and reporting FR 2052a data.
Naming conventions and field types
This document uses a standard syntax to refer to specific tables, fields and products in the FR
2052a data hierarchy.
• Prefixes are the first component of the FR 2052a data reference syntax. There are three
distinct prefixes: I, O and S, which correspond to the first letter of each specific section
in the FR 2052a data hierarchy: Inflows, Outflows and Supplemental.
• Tables are referenced using the appropriate prefix, followed by the first letter of the
table as described in Table 3 below (with the exceptions of derivatives & collateral and
foreign exchange, which are referenced as “DC” and “FX”, respectively).
Example: the “Assets” table, which relates to inflows, is referenced as I.A, while
o
the “Deposits” table, which relates to outflows, is referenced as O.D.
• Products are referenced using the table syntax and the corresponding product number.
Note: The [Product] field designation is omitted to simplify the reference syntax.
o
A number following the table designation always refers to the product number
for that table.
 Table 3 below depicts the table combinations for the product syntax
structure
 Example: “Unencumbered Assets” (product #1) in the “Assets” table is
referred to as I.A.1.
Table 3 - Product Reference Syntax
Prefix . Table . Product #
A (Assets)
I U (Unsecured)
. . #
(Inflows) S (Secured)
O (Other)
D (Deposits)
O W (Wholesale)
. . #
(Outflows) S (Secured)
O (Other)
DC (Derivatives & Collateral)
L (Liquidity Risk Measurement)
S
. B (Balance Sheet) . #
(Supplemental)
I (Informational Items)
FX (Foreign Exchange)
Field Types
The data fields in each FR 2052a table fall into two categories:
1. Mandatory fields (May vary for each product, colored red in Table 4 below)
2. Dependent fields (colored blue in Table 4)
• Required for certain transaction types.
Example: the [Forward Start Bucket] field is generally only required for
o
forward starting transactions.
Example: the [Internal Counterparty] field is only required for intercompany
o
transactions.
• [Sub-Product] required for certain products.
Example: The “Capacity” product in the Assets table (I.A.2) requires a [Sub-
o
Product] designation.
 Table 4 below depicts a sample data element reporting FHLB capacity
of $100mm against category L-3 collateral, with market value of
$150mm and a residual maturity of > 5 years.
Refer to Appendix II for a full listing of product/sub-product combinations.
o
Table 4 – Example: required versus dependent fields
Data Tables16
Inflows
Assets Unsecured Secured Other
Reporting Entity text Reporting Entity text Reporting Entity text Reporting Entity text
Product text Product text Product text Product text
Sub-Product text Counterparty text Sub-Product text Maturity Amount numeric
Market Value numeric G-SIB text Maturity Amount numeric Maturity Bucket text
Lendable Value numeric Maturity Amount numeric Maturity Bucket text Forward Start Amount numeric
Maturity Bucket text Maturity Bucket text Maturity Optionality text Forward Start Bucket text
Forward Start Amount numeric Maturity Optionality text Effective Maturity Bucket text Collateral Class text
Forward Start Bucket text Effective Maturity Bucket text Encumbrance Type text Collateral Value numeric
Collateral Class text Encumbrance Type text Forward Start Amount numeric Treasury Control text
Treasury Control text Forward Start Amount numeric Forward Start Bucket text Counterparty text
Accounting Designation text Forward Start Bucket text Collateral Class text G-SIB text
Effective Maturity Bucket text Internal text Collateral Value numeric Internal text
Encumbrance Type text Internal Counterparty text Unencumbered text Internal Counterparty text
Internal Counterparty text Risk Weight percent Treasury Control text Business Line text
Business Line text Business Line text Internal text
Internal Counterparty text
Risk Weight percent
Business Line text
Settlement text
Counterparty text
G-SIB text
Outflows
Deposits Wholesale Secured Other
Reporting Entity text Reporting Entity text Reporting Entity text Reporting Entity text
Product text Product text Product text Product text
Counterparty text Counterparty text Sub-Product text Counterparty text
G-SIB text G-SIB text Maturity Amount numeric G-SIB text
Maturity Amount numeric Maturity Amount numeric Maturity Bucket text Maturity Amount numeric
Maturity Bucket text Maturity Bucket text Maturity Optionality text Maturity Bucket text
Maturity Optionality text Maturity Optionality text Forward Start Amount numeric Forward Start Amount numeric
Collateral Class text Collateral Class text Forward Start Bucket text Forward Start Bucket text
Collateral Value numeric Collateral Value numeric Collateral Class text Collateral Class text
Insured text Forward Start Amount numeric Collateral Value numeric Collateral Value numeric
Trigger text Forward Start Bucket text Treasury Control text Internal text
Rehypothecated text Internal text Internal text Internal Counterparty text
Business Line text Internal Counterparty text Internal Counterparty text Business Line text
Internal text Loss Absorbency text Business Line text
Internal Counterparty text Business Line text Settlement text
Rehypothecated text
Counterparty text
G-SIB text
16 Note that the Currency and Converted attributes are required for each value field in accordance with the Field
Definitions. These fields have been omitted from this figure to simplify the illustration of the FR 2052a data
structure.
Supplemental
Informational Derivatives & Collateral Liquidity Risk Measurement
Reporting Entity text Reporting Entity text Reporting Entity text
Product text Product text Product text
Market Value numeric Sub-Product text Market Value numeric
Collateral Class text Sub-Product2 text Collateral Class text
Internal text Market Value numeric Internal text
Internal Counterparty text Collateral Class text Internal Counterparty text
Business Line text Collateral Level text
Counterparty text
G-SIB text
Effective Maturity Bucket text
Encumbrance Type text
Netting Eligible text
Treasury Control text
Internal text
Internal Counterparty text
Business Line text
Balance Sheet Foreign Exchange Comments
Reporting Entity text Reporting Entity text Reporting Entity text
Collection Reference text Product text Collection text
Product text Maturity Amount Currency 1 numeric Product text
Product Reference text Maturity Amount Currency 2 numeric Sub-Product text
Sub-Product Reference text Maturity Bucket text Comments text
Collateral Class text Foreign Exchange Option Direction text
Maturity Bucket text Forward Start Amount Currency 1 numeric
Effective Maturity Bucket text Forward Start Amount Currency 2 numeric
Encumbrance Type text Forward Start Bucket text
Market Value numeric Counterparty text
Maturity Amount numeric G-SIB text
Collateral Value numeric Settlement text
Counterparty text Business Line text
G-SIB text Internal text
Risk Weight percent Internal Counterparty text
Internal text
Internal Counterparty text
Appendix II-a: FR 2052a Product/Sub-Product Requirements
The following table displays which products require the reporting of a Sub-Product or Sub-Product 2, along with the corresponding set of acceptable values.
Table PID Product Sub-Product Sub-Product 2
Inflows - Assets 2 Capacity Federal Reserve Bank
Swiss National Bank
Bank of England
European Central Bank
Bank of Japan
Reserve Bank of Australia
Bank of Canada
Other Central Bank
Federal Home Loan Bank
Other Government Sponsored Entity
Inflows - Assets 3 Unrestricted Reserve Balances Federal Reserve Bank
4 Restricted Reserve Balances Swiss National Bank
Bank of England
European Central Bank
Bank of Japan
Reserve Bank of Australia
Bank of Canada
Other Central Bank
Currency and Coin
Inflows - Secured 4 Collateral Swaps Level 1 Pledged
Level 2a Pledged
Level 2b Pledged
Non-HQLA Pledged
No Collateral Pledged
Outflows - Secured 4 Collateral Swaps Level 1 Received
Level 2a Received
Level 2b Received
Non-HQLA Received
No Collateral Received
Outflows - Secured 6 Exceptional Central Bank Operations Federal Reserve Bank
Swiss National Bank
Bank of England
European Central Bank
Bank of Japan
Reserve Bank of Australia
Bank of Canada
Other Central Bank
Covered Federal Reserve Facility Funding
Table PID Product Sub-Product Sub-Product 2
Outflows - Secured 7 Customer Shorts External Cash Transactions
8 Firm Shorts External Non-Cash Transactions
Firm Longs
Customer Longs
Unsettled - Regular Way
Unsettled - Forward
Outflows - Secured 9 Synthetic Customer Shorts Firm Short
10 Synthetic Firm Financing Synthetic Customer Long
Synthetic Firm Sourcing
Futures
Other
Unhedged
Inflows - Secured 9 Synthetic Customer Longs Physical Long Position
10 Synthetic Firm Sourcing Synthetic Customer Short
Synthetic Firm Financing
Futures
Other
Unhedged
Supplemental - 1 Gross Derivative Asset Values Rehypothecateable Collateral Unencumbered OTC - Bilateral
Derivatives & Collateral 2 Gross Derivative Liability Values Rehypothecateable Collateral Encumbered OTC - Centralized (Principal)
3 Derivative Settlement Payments Delivered Non-Rehypothecateable Collateral OTC - Centralized (Agent)
4 Derivative Settlement Payments Received Segregated Cash Exchange-traded (Principal)
5 Initial Margin Posted - House Non-Segregated Cash Exchange-traded (Agent)
6 Initial Margin Posted - Customer
7 Initial Margin Received
8 Variation Margin Posted - House
9 Variation Margin Posted - Customer
10 Variation Margin Received
Appendix II-b: FR 2052a Counterparty Requirements
The following table displays which products require the reporting of the Counterparty field. Although not displayed below, the product S.B.6: Carrying Value Adjustment would
require the reporting of a Counterparty to the extent the adjustment is applied to a product that also requires a counterparty designation.
In addition, the table provides guidance on which specific counterparty field selections are generally applicable/not applicable.
Table PID Product Applicable Counterparty Values Not Applicable Counterparty Values
Outflows - Other 5 Liquidity Facilities Retail
Small Business
Non-Financial Corporate
Sovereign
Central Bank
Government Sponsored Entity
Public Sector Entity
Multilateral Development Bank
Other Supranational
Pension Fund
Bank
Broker-Dealer
Investment Company or Advisor
Financial Market Utility
Other Supervised Non-Bank Financial Entity
Debt Issuing Special Purpose Entity
Non-Regulated Fund
Municipalities for VRDN Structures
Other
Inflows - Unsecured 5 Outstanding Draws on Unsecured Revolving Facilities Retail Municipalities for VRDN Structures
6 Other Loans Small Business
Non-Financial Corporate
Inflows - Secured 5 Margin Loans Sovereign
6 Other Secured Loans - Rehypothecatable Central Bank
7 Outstanding Draws on Secured Revolving Facilities Government Sponsored Entity
8 Other Secured Loans - Non-Rehypothecatable Public Sector Entity
Multilateral Development Bank
Outflows - Deposits 7 Operational Escrow Accounts Other Supranational
8 Non-Reciprocal Brokered Deposits Pension Fund
9 Stable Affiliated Sweep Account Balances Bank
10 Less Stable Affiliated Sweep Account Balances Broker-Dealer
11 Non-Affiliated Sweep Accounts Investment Company or Advisor
12 Other Product Sweep Accounts Financial Market Utility
13 Reciprocal Accounts Other Supervised Non-Bank Financial Entity
14 Other Third-Party Deposits Debt Issuing Special Purpose Entity
15 Other Accounts Non-Regulated Fund
Other
Outflows - Secured 7 Customer Shorts
Outflows - Wholesale 18 Free Credits
Outflows - Other 4 Credit Facilities
Supplemental - D&C 1 Gross Derivative Asset Values
2 Gross Derivative Liability Values
5 Initial Margin Posted - House
6 Initial Margin Posted - Customer
7 Initial Margin Received
8 Variation Margin Posted - House
9 Variation Margin Posted - Customer
10 Variation Margin Received
Supplemental - Balance Sheet 5 Counterparty Netting
Table PID Product Applicable Counterparty Values Not Applicable Counterparty Values
Inflows - Secured 1 Reverse Repo Non-Financial Corporate Retail
2 Securities Borrowing Sovereign Small Business
3 Dollar Rolls Central Bank Municipalities for VRDN Structures
4 Collateral Swaps Government Sponsored Entity
9 Synthetic Customer Longs Public Sector Entity
10 Synthetic Firm Sourcing Multilateral Development Bank
Other Supranational
Inflows - Unsecured 1 Onshore Placements Pension Fund
2 Offshore Placements Bank
3 Required Operational Balances Broker-Dealer
4 Excess Operational Balances Investment Company or Advisor
7 Cash Items in the Process of Collection Financial Market Utility
8 Short-Term Investments Other Supervised Non-Bank Financial Entity
Debt Issuing Special Purpose Entity
Outflows - Deposits 4 Operational Account Balances Non-Regulated Fund
5 Excess Balances in Operational Accounts Other
6 Non-Operational Account Balances
Outflows - Secured 1 Repo
2 Securities Lending
3 Dollar Rolls
4 Collateral Swaps
9 Synthetic Customer Shorts
10 Synthetic Firm Financing
11 Other Secured Financing Transactions
Outflows - Wholesale 9 Onshore Borrowing
10 Offshore Borrowing
Supplemental-FX 1 Spot
2 Forwards and Futures
3 Swaps
Outflows - Deposits 1 Transactional Accounts Retail Debt Issuing Special Purpose Entity
2 Non-Transactional Relationship Accounts Small Business Municipalities for VRDN Structures
3 Non-Transactional Non-Relationship Accounts Non-Financial Corporate
Sovereign
Central Bank
Government Sponsored Entity
Public Sector Entity
Multilateral Development Bank
Other Supranational
Pension Fund
Bank
Broker-Dealer
Investment Company or Advisor
Financial Market Utility
Other Supervised Non-Bank Financial Entity
Non-Regulated Fund
Other
Outflows - Secured 5 FHLB Advances Government Sponsored Entity Retail
Small Business
Non-Financial Corporate
Sovereign
Central Bank
Public Sector Entity
Multilateral Development Bank
Other Supranational
Pension Fund
Bank
Broker-Dealer
Investment Company or Advisor
Financial Market Utility
Other Supervised Non-Bank Financial Entity
Debt Issuing Special Purpose Entity
Non-Regulated Fund
Municipalities for VRDN Structures
Other
Table PID Product Applicable Counterparty Values Not Applicable Counterparty Values
Outflows - Secured 6 Exceptional Central Bank Operations Central Bank Retail
Small Business
Non-Financial Corporate
Sovereign
Government Sponsored Entity
Public Sector Entity
Multilateral Development Bank
Other Supranational
Pension Fund
Bank
Broker-Dealer
Investment Company or Advisor
Financial Market Utility
Other Supervised Non-Bank Financial Entity
Debt Issuing Special Purpose Entity
Non-Regulated Fund
Municipalities for VRDN Structures
Other
Appendix II-c: FR 2052a Collateral Class Requirements
The following table displays the applicable reporting requirements for the Collateral Class field by Product:
(1) Required: the product by definition requires a collateral class designation
(2) Dependent: the product requires a collateral class designation to the extent collateral has been, or would need to be posted or received
(3) Not applicable: the product should not be assigned a collateral class
PID Product Required Dependent Not Applicable
Inflows - Assets
I.A.1 Unencumbered Assets 
I.A.2 Capacity 
I.A.3 Unrestricted Reserve Balances 
I.A.4 Restricted Reserve Balances 
I.A.5 Unsettled Asset Purchases 
I.A.6 Forward Asset Purchases 
I.A.7 Encumbered Assets 
Inflows - Unsecured
I.U.1 Onshore Placements 
I.U.2 Offshore Placements 
I.U.3 Required Operational Balances 
I.U.4 Excess Operational Balances 
I.U.5 Outstanding Draws on Unsecured Revolving Facilities 
I.U.6 Other Loans 
I.U.7 Cash Items in the Process of Collection 
I.U.8 Short-Term Investments 
Inflows - Secured
I.S.1 Reverse Repo 
I.S.2 Securities Borrowing 
I.S.3 Dollar Rolls 
I.S.4 Collateral Swaps 
I.S.5 Margin Loans 
I.S.6 Other Secured Loans - Rehypothecatable 
I.S.7 Outstanding Draws on Secured Revolving Facilities 
I.S.8 Other Secured Loans - Non-Rehypothecatable 
I.S.9 Synthetic Customer Longs 
I.S.10 Synthetic Firm Sourcing 
Inflows - Other
I.O.1 Derivative Receivables 
I.O.2 Collateral Called for Receipt 
I.O.3 TBA Sales 
I.O.4 Undrawn Committed Facilities Purchased 
I.O.5 Lock-up Balance 
I.O.6 Interest and Dividends Receivable 
I.O.7 Net 30-Day Derivative Receivables 
I.O.8 Principal Payments Receivable on Unencumbered Investment Securities 
I.O.9 Other Cash Inflows 
PID Product Required Dependent Not Applicable
Outflows - Wholesale
O.W.1 Asset-Backed Commercial Paper: Single-Seller 
O.W.2 Asset-Backed Commercial Paper: Multi-Seller 
O.W.3 Collateralized Commercial Paper 
O.W.4 Asset-Backed Securities 
O.W.5 Covered Bonds 
O.W.6 Tender Option Bonds 
O.W.7 Other Asset-Backed Financing 
O.W.8 Commercial Paper 
O.W.9 Onshore Borrowing 
O.W.10 Offshore Borrowing 
O.W.11 Unstructured Long Term Debt 
O.W.12 Structured Long Term Debt 
O.W.13 Government Supported Debt 
O.W.14 Unsecured Notes 
O.W.15 Structured Notes 
O.W.16 Wholesale CDs 
O.W.17 Draws on Committed Lines 
O.W.18 Free Credits 
O.W.19 Other Unsecured Financing 
Outflows - Secured
O.S.1 Repo 
O.S.2 Securities Lending 
O.S.3 Dollar Rolls 
O.S.4 Collateral Swaps 
O.S.5 FHLB Advances 
O.S.6 Exceptional Central Bank Operations 
O.S.7 Customer Shorts 
O.S.8 Firm Shorts 
O.S.9 Synthetic Customer Shorts 
O.S.10 Synthetic Firm Financing 
O.S.11 Other Secured Financing Transactions 
Outflows - Deposits
O.D.1 Transactional Accounts 
O.D.2 Non-Transactional Relationship Accounts 
O.D.3 Non-Transactional Non-Relationship Accounts 
O.D.4 Operational Account Balances 
O.D.5 Excess Balances in Operational Accounts 
O.D.6 Non-Operational Account Balances 
O.D.7 Operational Escrow Accounts 
O.D.8 Non-Reciprocal Brokered Deposits 
O.D.9 Stable Affiliated Sweep Account Balances 
O.D.10 Less Stable Affiliated Sweep Account Balances 
O.D.11 Non-Affiliated Sweep Accounts 
O.D.12 Other Product Sweep Accounts 
O.D.13 Reciprocal Accounts 
O.D.14 Other Third-Party Deposits 
O.D.15 Other Accounts 
PID Product Required Dependent Not Applicable
Outflows - Other
O.O.1 Derivative Payables 
O.O.2 Collateral Called for Delivery 
O.O.3 TBA Purchases 
O.O.4 Credit Facilities 
O.O.5 Liquidity Facilities 
O.O.6 Retail Mortgage Commitments 
O.O.7 Trade Finance Instruments 
O.O.8 MTM Impact on Derivative Positions 
O.O.9 Loss of Rehypothecation Rights Due to a 1 Notch Downgrade 
O.O.10 Loss of Rehypothecation Rights Due to a 2 Notch Downgrade 
O.O.11 Loss of Rehypothecation Rights Due to a 3 Notch Downgrade 
O.O.12 Loss of Rehypothecation Rights Due to a Change in Financial Condition 
O.O.13 Total Collateral Required Due to a 1 Notch Downgrade 
O.O.14 Total Collateral Required Due to a 2 Notch Downgrade 
O.O.15 Total Collateral Required Due to a 3 Notch Downgrade 
O.O.16 Total Collateral Required Due to a Change in Financial Condition 
O.O.17 Excess Margin 
O.O.18 Unfunded Term Margin 
O.O.19 Interest and Dividends Payable 
O.O.20 Net 30-Day Derivative Payables 
O.O.21 Other Outflows Related to Structured Transactions 
O.O.22 Other Cash Outflows 
Supplemental - Derivatives & Collateral
S.DC.1 Gross Derivative Asset Values 
S.DC.2 Gross Derivative Liability Values 
S.DC.3 Derivative Settlement Payments Delivered 
S.DC.4 Derivative Settlement Payments Received 
S.DC.5 Initial Margin Posted - House 
S.DC.6 Initial Margin Posted - Customer 
S.DC.7 Initial Margin Received 
S.DC.8 Variation Margin Posted - House 
S.DC.9 Variation Margin Posted - Customer 
S.DC.10 Variation Margin Received 
S.DC.11 Derivative CCP Default Fund Contribution 
S.DC.12 Other CCP Pledges and Contributions 
S.DC.13 Collateral Disputes Deliverables 
S.DC.14 Collateral Disputes Receivables 
S.DC.15 Sleeper Collateral Deliverables 
S.DC.16 Required Collateral Deliverables 
S.DC.17 Sleeper Collateral Receivables 
S.DC.18 Derivative Collateral Substitution Risk 
S.DC.19 Derivative Collateral Substitution Capacity 
S.DC.20 Other Collateral Substitution Risk 
S.DC.21 Other Collateral Substitution Capacity 
PID Product Required Dependent Not Applicable
Supplemental - Liquidity Risk Measurement
S.L.1 Subsidiary Liquidity That Cannot be Transferred 
S.L.2 Subsidiary Liquidity Available for Transfer 
S.L.3 Unencumbered Asset Hedges - Early Termination Outflows 
S.L.4 Non-Structured Debt Maturing in Greater than 30-days - Primary Market Maker 
S.L.5 Structured Debt Maturing in Greater than 30-days - Primary Market Maker 
S.L.6 Liquidity Coverage Ratio 
S.L.7 Subsidiary Funding That Cannot be Transferred 
S.L.8 Subsidiary Funding Available for Transfer 
S.L.9 Additional Funding Requirement for Off-Balance Sheet Rehypothecated Assets 
S.L.10 Net Stable Funding Ratio 
Supplemental - Balance Sheet
S.B.1 Regulatory Capital Element 
S.B.2 Other Liabilities 
S.B.3 Non-Performing Assets 
S.B.4 Other Assets 
S.B.5 Counterparty Netting 
S.B.6 Carrying Value Adjustment 
Supplemental - Informational
S.I.1 Long Market Value Client Assets 
S.I.2 Short Market Value Client Assets 
S.I.3 Gross Client Wires Received 
S.I.4 Gross Client Wires Paid 
S.I.5 FRB 23A Capacity 
S.I.6 Subsidiary Liquidity Not Transferrable 
Supplemental-Foreign Exchange
S.FX.1 Spot 
S.FX.2 Forwards and Futures 
S.FX.3 Swaps 
Appendix II-d: FR 2052a Forward Start Exclusions
The following products should not be assigned a [Forward Start Bucket] or [Forward Start Amount] value.
PID Product
Inflows - Assets
I.A.1 Unencumbered Assets
I.A.2 Capacity
I.A.3 Unrestricted Reserve Balances
I.A.4 Restricted Reserve Balances
I.A.7 Encumbered Assets
Inflows - Unsecured
I.U.3 Required Operational Balances
I.U.4 Excess Operational Balances
I.U.7 Cash Items in the Process of Collection
I.U.8 Short-Term Investments
Inflows - Other
I.O.1 Derivative Receivables
I.O.2 Collateral Called for Receipt
I.O.3 TBA Sales
I.O.4 Undrawn Committed Facilities Purchased
I.O.5 Lock-up Balance
I.O.6 Interest and Dividends Receivable
I.O.7 Net 30-Day Derivative Receivables
I.O.8 Principal Payments Receivable on Unencumbered Investment Securities
I.O.9 Other Cash Inflows
Outflows - Wholesale
O.W.18 Free Credits
Outflows - Deposits (forward start fields not provided)
O.D.1 Transactional Accounts
O.D.2 Non-Transactional Relationship Accounts
O.D.3 Non-Transactional Non-Relationship Accounts
O.D.4 Operational Account Balances
O.D.5 Excess Balances in Operational Accounts
O.D.6 Non-Operational Account Balances
O.D.7 Operational Escrow Accounts
O.D.8 Non-Reciprocal Brokered Deposits
O.D.9 Stable Affiliated Sweep Account Balances
O.D.10 Less Stable Affiliated Sweep Account Balances
O.D.11 Non-Affiliated Sweep Accounts
O.D.12 Other Product Sweep Accounts
O.D.13 Reciprocal Accounts
O.D.14 Other Third-Party Deposits
O.D.15 Other Accounts
PID Product
Outflows - Other
O.O.1 Derivative Payables
O.O.2 Collateral Called for Delivery
O.O.3 TBA Purchases
O.O.4 Credit Facilities
O.O.5 Liquidity Facilities
O.O.6 Retail Mortgage Commitments
O.O.7 Trade Finance Instruments
O.O.8 MTM Impact on Derivative Positions
O.O.9 Loss of Rehypothecation Rights Due to a 1 Notch Downgrade
O.O.10 Loss of Rehypothecation Rights Due to a 2 Notch Downgrade
O.O.11 Loss of Rehypothecation Rights Due to a 3 Notch Downgrade
O.O.12 Loss of Rehypothecation Rights Due to a Change in Financial Condition
O.O.13 Total Collateral Required Due to a 1 Notch Downgrade
O.O.14 Total Collateral Required Due to a 2 Notch Downgrade
O.O.15 Total Collateral Required Due to a 3 Notch Downgrade
O.O.16 Total Collateral Required Due to a Change in Financial Condition
O.O.17 Excess Margin
O.O.18 Unfunded Term Margin
O.O.19 Interest and Dividends Payable
O.O.20 Net 30-Day Derivative Payables
O.O.21 Other Outflows Related to Structured Transactions
O.O.22 Other Cash Outflows
Supplemental - Derivatives & Collateral
S.DC.1 Gross Derivative Asset Values
S.DC.2 Gross Derivative Liability Values
S.DC.3 Derivative Settlement Payments Delivered
S.DC.4 Derivative Settlement Payments Received
S.DC.5 Initial Margin Posted - House
S.DC.6 Initial Margin Posted - Customer
S.DC.7 Initial Margin Received
S.DC.8 Variation Margin Posted - House
S.DC.9 Variation Margin Posted - Customer
S.DC.10 Variation Margin Received
S.DC.11 Derivative CCP Default Fund Contribution
S.DC.12 Other CCP Pledges and Contributions
S.DC.13 Collateral Disputes Deliverables
S.DC.14 Collateral Disputes Receivables
S.DC.15 Sleeper Collateral Deliverables
S.DC.16 Required Collateral Deliverables
S.DC.17 Sleeper Collateral Receivables
S.DC.18 Derivative Collateral Substitution Risk
S.DC.19 Derivative Collateral Substitution Capacity
S.DC.20 Other Collateral Substitution Risk
S.DC.21 Other Collateral Substitution Capacity
PID Product
Supplemental - Liquidity Risk Measurement
S.L.1 Subsidiary Liquidity That Cannot be Transferred
S.L.2 Subsidiary Liquidity Available for Transfer
S.L.3 Unencumbered Asset Hedges - Early Termination Outflows
S.L.4 Non-Structured Debt Maturing in Greater than 30-days - Primary Market Maker
S.L.5 Structured Debt Maturing in Greater than 30-days - Primary Market Maker
S.L.6 Liquidity Coverage Ratio
S.L.7 Subsidiary Funding That Cannot be Transferred
S.L.8 Subsidiary Funding Available for Transfer
S.L.9 Additional Funding Requirement for Off-Balance Sheet Rehypothecated Assets
S.L.10 Net Stable Funding Ratio
Supplemental - Informational
S.B.1 Regulatory Capital Element
S.B.2 Other Liabilities
S.B.3 Non-Performing Assets
S.B.4 Other Assets
S.B.5 Counterparty Netting
S.B.6 Carrying Value Adjustment
Supplemental - Informational
S.I.1 Long Market Value Client Assets
S.I.2 Short Market Value Client Assets
S.I.3 Gross Client Wires Received
S.I.4 Gross Client Wires Paid
S.I.5 FRB 23A Capacity
S.I.6 Subsidiary Liquidity Not Transferrable
Appendix III: FR 2052a Asset Category Table
Note: the "-Q" suffix indicates that assets meet all the asset-specific tests detailed in section 20 of Regulation WW (e.g., risk profile
and market-based characteristics)
Asset Category Asset Category Description
HQLA Level 1
A-0-Q Cash
A-1-Q Debt issued by the U.S. Treasury
A-2-Q U.S. Government Agency-issued debt (excluding the US Treasury) with a US Government guarantee
A-3-Q Vanilla debt (including pass-through MBS) guaranteed by a U.S. Government Agency, where the U.S. Government
Agency has a full U.S. Government guarantee
A-4-Q Structured debt (excluding pass-through MBS) guaranteed by a U.S. Government Agency, where the U.S.
Government Agency has a full U.S. Government guarantee
A-5-Q Other debt with a U.S. Government guarantee
S-1-Q Debt issued by non-U.S. Sovereigns (excluding central banks) with a 0% RW
S-2-Q Debt issued by multilateral development banks or other supranationals with a 0% RW
S-3-Q Debt with a non-U.S. sovereign (excluding central banks) or multilateral development bank or other
supranational guarantee, where guaranteeing entity has a 0% RW
S-4-Q Debt issued or guaranteed by a non-U.S. Sovereign (excluding central banks) that does not have a 0% RW, but
supports outflows that are in the same jurisdiction of the sovereign and are denominated in the home currency
of the sovereign
CB-1-Q Securities issued or guaranteed by a central bank with a 0% RW
CB-2-Q Securities issued or guaranteed by a non-U.S. central bank that does not have a 0% RW, but supports outflows
that are in the same jurisdiction of the central bank and are denominated in the home currrency of the central
bank
HQLA Level 2a
G-1-Q Senior to preferred debt issued by a U.S. Government Sponsored Entity (GSE)
G-2-Q Vanilla debt (including pass-through MBS) guaranteed by a U.S. GSE
G-3-Q Structured debt (excluding pass-through MBS) guaranteed by a U.S. GSE
S-5-Q Debt issued by non-U.S. Sovereigns (excluding central banks) with a 20% RW, not otherwise included
S-6-Q Debt issued by multilateral development banks or other supranationals with a 20% RW, not otherwise included
S-7-Q Debt with a non-U.S. sovereign (excluding central banks) or multilateral development bank or other
supranational guarantee, where guaranteeing entity has a 20% RW, not otherwise included
CB-3-Q Securities issued or guaranteed by a non-U.S. central bank with a 20% RW, not otherwise included
HQLA Level 2b
E-1-Q U.S. equities - Russell 1000
E-2-Q Non-U.S. Equities listed on a foreign index designated to by the local supervisor as qualifying for the LCR, and
denominated in USD or the currency of outflows that the foreign entity is supporting
IG-1-Q Investment grade corporate debt
IG-2-Q Investment grade municipal obligations
Asset Category Asset Category Description
Non-HQLA Assets that do not meet the asset-specific tests detailed in section 20 of Regulation WW
A-2 U.S. Government Agency-issued debt (excluding the US Treasury) with a US Government guarantee
A-3 Vanilla debt (including pass-through MBS) guaranteed by a U.S. Government Agency, where the U.S. Government
Agency has a full U.S. Government guarantee
A-4 Structured debt (excluding pass-through MBS) guaranteed by a U.S. Government Agency, where the U.S.
Government Agency has a full U.S. Government guarantee
A-5 Other debt with a U.S. Government guarantee
S-1 Debt issued by non-U.S. Sovereigns (excluding central banks) with a 0% RW
S-2 Debt issued by multilateral development banks or other supranationals with a 0% RW
S-3 Debt with a non-U.S. sovereign (excluding central banks) or multilateral development bank or other
supranational guarantee, where guaranteeing entity has a 0% RW
S-4 Debt issued or guaranteed by a non-U.S. Sovereign (excluding central banks) that does not have a 0% RW, but
supports outflows that are in the same jurisdiction of the sovereign and are denominated in the home currency
of the sovereign
CB-1 Securities issued or guaranteed by a central bank with a 0% RW
CB-2 Securities issued or guaranteed by a non-U.S. central bank that does not have a 0% RW, but supports outflows
that are in the same jurisdiction of the central bank and are denominated in the home currrency of the central
bank
G-1 Senior to preferred debt issued by a U.S. Government Sponsored Entity (GSE)
G-2 Vanilla debt (including pass-through MBS) guaranteed by a U.S. GSE
G-3 Structured debt (excluding pass-through MBS) guaranteed by a U.S. GSE
S-5 Debt issued by Non-U.S. Sovereigns with a 20% RW, not otherwise included
S-6 Debt issued by multilateral development banks or other supranationals with a 20% RW, not otherwise included
S-7 Debt with a non-U.S. sovereign or multilateral development bank or other supranational guarantee, where
guaranteeing entity has a 20% RW, not otherwise included
CB-3 Securities issued or guaranteed by a non-U.S. central bank with a 20% RW, not otherwise included
E-1 U.S. equities - Russell 1000
E-2 Non-U.S. Equities listed on a foreign index designated to by the local supervisor as qualifying for the LCR, and
denominated in USD or the currency of outflows that the foreign entity is supporting
IG-1 Investment grade corporate debt
IG-2 Investment grade U.S. municipal general obligations
Asset Category Asset Category Description
Non-HQLA Assets other
S-8 All other debt issued by sovereigns (excluding central banks) and supranational entities, not otherwise included
CB-4 All other securities issued by central banks, not otherwise included
G-4 Debt, other than senior or preferred, issued by a U.S. GSE
E-3 All other U.S.-listed common equity securities
E-4 All other non-US-listed common equity securities
E-5 ETFs listed on US exchanges
E-6 ETFs listed on non-US exchanges
E-7 US mutual fund shares
E-8 Non-US mutual fund shares
E-9 All other US equity investments (including preferred shares, warrants and options)
E-10 All other non-US equity investments (including preferred shares, warrants and options)
IG-3 Investment grade Vanilla ABS
IG-4 Investment grade Structured ABS
IG-5 Investment grade Private label Pass-thru CMBS/RMBS
IG-6 Investment grade Private label Structured CMBS/RMBS
IG-7 Investment grade covered bonds
IG-8 Investment grade obligations of municipals/PSEs (excluding U.S. general obligations)
N-1 Non-investment grade general obligations issued by U.S. municipals/PSEs
N-2 Non-investment grade corporate debt
N-3 Non-investment grade Vanilla ABS
N-4 Non-investment grade structured ABS
N-5 Non-investment grade Private label Pass-thru CMBS/RMBS
N-6 Non-investment grade Private label Structured CMBS/RMBS
N-7 Non-investment grade covered bonds
N-8 Non-investment grade obligations of municipals/PSEs (excluding U.S. general obligations)
L-1 GSE-eligible conforming residential mortgages
L-2 Other GSE-eligible loans
L-3 Other 1-4 family residential mortgages
L-4 Other multi family residential mortgages
L-5 Home equity loans
L-6 Credit card loans
L-7 Auto loans and leases
L-8 Other consumer loans and leases
L-9 Commercial real estate loans
L-10 Commercial and industrial loans
L-11 All other loans, except loans guaranteed by U.S. government agencies
L-12 Loans guaranteed by U.S. government agencies
Y-1 Debt issued by reporting firm - parent
Y-2 Debt issued by reporting firm - bank
Y-3 Debt issued by reporting firm - all other (incl. conduits)
Y-4 Equity investment in affiliates
C-1 Commodities
P-1 Residential property
P-2 All other physical property
LC-1 Letters of credit issued by a GSE
LC-2 All other letters of credit, including bankers' acceptances
Z-1 All other assets
Appendix IV-a: FR 2052a Maturity Bucket Value List
Open Day 42
Day 1 Day 43
Day 2 Day 44
Day 3 Day 45
Day 4 Day 46
Day 5 Day 47
Day 6 Day 48
Day 7 Day 49
Day 8 Day 50
Day 9 Day 51
Day 10 Day 52
Day 11 Day 53
Day 12 Day 54
Day 13 Day 55
Day 14 Day 56
Day 15 Day 57
Day 16 Day 58
Day 17 Day 59
Day 18 Day 60
Day 19 61 - 67 Days
Day 20 68 - 74 Days
Day 21 75 - 82 Days
Day 22 83 - 90 Days
Day 23 91 - 120 Days
Day 24 121 - 150 Days
Day 25 151 - 179 Days
Day 26 180 - 270 Days
Day 27 271 - 364 Days
Day 28 >= 1 Yr <= 2 Yr
Day 29 >2 Yr <= 3 Yr
Day 30 >3 Yr <= 4 Yr
Day 31 >4 Yr <= 5 Yr
Day 32 >5 Yr
Day 33 Perpetual
Day 34
Day 35
Day 36
Day 37
Day 38
Day 39
Day 40
Day 41
Appendix IV-b: FR 2052a Maturity Bucket Tailoring
(1) U.S. firms that are identified as Category I or Category II banking organizations; FBOs identified as Category II foreign banking organizations.
(a) All products should be reported using the following 76 maturity buckets:
Daily Weekly* Buckets 30-Day Buckets 90-Day Buckets Yearly Buckets
Open > 5 Years Perpetual
Day 1 Day 60 Day 61 Day 90 Day 91 Day 179 Day 180 Day 364 Day 365 Year 5
60 buckets 4 buckets 3 buckets 2 buckets 4 buckets
(2) U.S. firms that are identified as Category III or Category IV banking organizations with wSTWF>$50B; FBOs that are identified as Category III or Category IV
foreign banking organizations with wSTWF>$50B.
(a) All outflow and supplemental products with maturities within 1 year should be reported using the 70 applicable maturity buckets,
while these products with non-perpetual contractual maturities 1 year and beyond may be reported in aggregate in the ≥ 1 Year and ≤ 2 Year bucket.
Daily Weekly* Buckets 30-Day Buckets 90-Day Buckets All cash flows maturing in ≥ 1 year
Open Perpetual
Day 1 Day 60 Day 61 Day 90 Day 91 Day 179 Day 180 Day 364 > 1 Year and ≤ 2 Years
60 buckets 4 buckets 3 buckets 2 buckets 1 bucket
(b) All inflow products with maturities within 1 year should be reported using the 70 applicable maturity buckets,
while these products with non-perpetual contractual maturities 1 year and beyond may be reported in aggregate in the > 5 Year bucket.
Daily Weekly* Buckets 30-Day Buckets 90-Day Buckets All cash flows maturing in ≥ 1 year
Open Perpetual
Day 1 Day 60 Day 61 Day 90 Day 91 Day 179 Day 180 Day 364 > 5 Years
60 buckets 4 buckets 3 buckets 2 buckets 1 bucket
(3) U.S. firms that are identified as Category IV banking organizations with wSTWF <$50B; FBOs that are identified as Category IV foreign banking
organizations with wSTWF <$50B.
(a) Balances for products I.A.1, I.A.2 and I.A.7 may be reported under the maturity bucket "Open" if the residual maturity of the instrument is < 6 months,
under the "271 - 364 Days" maturity bucket if the residual maturity of the instrument is ≥ 6 months but < 1 year, and under the "> 5 Years" maturity
bucket if the residual maturity of the intrument is ≥ 1 Year. Perpetual instruments must be reported under the "Perpetual" maturity bucket.
Residual maturity < 6 months Residual maturity ≥ 6 months < 1 Year Residual maturity ≥ 1 Year
Perpetual
Open 271 - 364 Days > 5 Years
1 bucket 1 bucket 1 bucket
(b) Loan cash flows reported under products I.U.6 and I.S.7 may be split into the following 2 maturity buckets:
All cash flows due in ≤ 30 days All cash flows due in > 30 days
Day 30 > 5 Years
1 bucket 1 bucket
(c) All other inflow products with maturities within 1 year should be reported using the 70 applicable maturity buckets, while these products with
non-perpetual contractual maturities beyond 1 year may be reported in aggregate in the > 5 Year bucket.
Daily Weekly* Buckets 30-Day Buckets 90-Day Buckets All cash flows maturing in ≥ 1 year
Open Perpetual
Day 1 Day 60 Day 61 Day 90 Day 91 Day 179 Day 180 Day 364 > 5 Years
60 buckets 4 buckets 3 buckets 2 buckets 1 bucket
(d) All outflow and supplemental products with maturities within 1 year should be reported using the 70 applicable maturity buckets, while these products
with non-perpetual contractual maturities beyond 1 year may be reported in aggregate in the ≥ 1 Year and ≤ 2 Year bucket.
Daily Weekly* Buckets 30-Day Buckets 90-Day Buckets All cash flows maturing in ≥ 1 year
Open Perpetual
Day 1 Day 60 Day 61 Day 90 Day 91 Day 179 Day 180 Day 364 ≥ 1 Year and ≤ 2 Years
60 buckets 4 buckets 3 buckets 2 buckets 1 bucket
*The first two "weekly" buckets contain 7 days, while the last two contain 8 days (i.e., days 61-67, 68-74, 75-82, 83-90)
Appendix V: FR 2052a Double Counting of Certain Exposures
The FR 2052a instructions state that, as a general rule, transactions should not be reported twice in a
single submission. However, there are certain exceptions to this rule and this document outlines the
instances when it is acceptable. This appendix provides indicative guidance on cases where double-
counting is generally appropriate and expected. The items listed below may not be exhaustive, and may
have exceptions. Consult with the applicable supervisory and regulatory reporting teams for additional
guidance on potential exceptions.
1. All third-party exposures at subsidiaries that are designated reporting entities, as
these will be, at a minimum, reported for both the consolidated reporting entity and all
applicable reporting entities that comprise the consolidated firm.
2. Collateral swaps, as each transaction will be reported in both the Inflows-Secured and
Outflows-Secured tables (albeit from different perspectives).
3. Collateral that has been received via a secured lending transaction and pre-positioned
at a central bank or GSE, as these assets should appear in the I.S table (note that the
[Unencumbered] flag must be set to false) and under product I.A.2: Capacity.
4. Loans and leases, as these must be reported in the Inflows-Unsecured or Inflows-
Secured tables by counterparty as well as in the appropriate product in the I.A table
according to their market value.
5. Assets that are encumbered to financing transactions and derivatives, as these must
be reported under I.A.7: Encumbered Assets and the value of these positions must also
be reported under the product to which they are encumbered in the O.W, O.S or S.DC
tables (i.e., using the [Collateral Value] or [Market Value] fields).
6. Unsecured derivatives cash flows occurring over the next 30 days, as these must be
reported under products I.O.1: Derivatives Receivables or O.O.1: Derivatives Payables
and must be included in the calculation of products I.O.7: Net 30-day Derivative
Receivables or O.O.20: Net 30-day Derivative Payables.
7. Derivative collateral cash flows occurring over the next 30 days, as these must be
reported under products I.O.2: Collateral Called for Receipt or O.O.2: Collateral Called
for Delivery and must be included in the calculation of products I.O.7: Net 30-day
Derivative Receivables or O.O.20: Net 30-day Derivative Payables.
8. Foreign exchange transactions maturing over the next 30 days, as these must be
reported under products S.FX.1: Spot, S.FX.2: Forwards and Futures, and S.FX.3: Swaps
and must be included in the calculation of products I.O.7: Net 30-day Derivative
Receivables or O.O.20: Net 30-day Derivative Payables.
9. Forward purchases and sales of securities maturing over the next 30 days, as these
purchases must be reported under I.A.6: Forward Asset Purchases and sales must be
reported under O.S.8: Firm Shorts, with a [Sub-Product] of “Unsettled (Forward)”, and
both must be included in the calculation of products I.O.7: Net 30-day Derivative
Receivables or O.O.20: Net 30-day Derivative Payables.
10. Structured and non-structured debt maturing beyond 30 days where the reporting
firm is the primary market maker, as these balances will be reported in one of the
Outflows-Wholesale products and in S.L.4: Non-Structured Debt Maturing in Greater
than 30-days – Primary Market Maker or S.L.5: Structured Debt Maturing in Greater
than 30-days – Primary Market Maker.
11. O.O.13-O.O.16: Total Collateral Required Due to a Downgrade/Change in Financial
Condition, as the various downgrade levels are meant to reflect a cumulative impact.
This concept is illustrated by the inequalities below:
Total Collateral Required Due to a:
1 Notch Downgrade 2 Notch Downgrade 3 Notch Downgrade Change in Financial Condition
≤ ≤ ≤
12. O.O.9-O.O.12: Loss of Re-hypothecation Rights Due to a Downgrade/Change in
Financial Condition, as the various downgrade levels are meant to reflect the
cumulative impact. This concept is illustrated by the inequalities below:
Loss of Re-hypothecation Rights Due to a:
1 Notch Downgrade 2 Notch Downgrade 3 Notch Downgrade Change in Financial Condition
≤ ≤ ≤
13. I.O.2: Collateral called for Receipt with a [Maturity Bucket] = “Open”, as collateral that
is both called for and received on the reporting date T should be also reported in the
stock of S.DC.7: Initial Margin Received or S.DC.10: Variation Margin Received.
14. O.O.2: Collateral called for Delivery with a [Maturity Bucket] = “Open”, as collateral
that is both called for and posted on the reporting date T should be also be reported in
the stock of S.DC.5: Initial Margin Posted- House or S.DC.6: Initial Margin Posted –
Customer or S.DC.8: Variation Margin Posted – House or S.DC.9: Variation Margin
Posted - Customer.
15. S.DC.14: Collateral Disputes Receivables and I.O.2: Collateral Called for Receipt, since
an amount in dispute should be reflected in both products.
16. S.DC.13: Collateral Disputes Deliverables and O.O.2: Collateral Called for Delivery,
since an amount in dispute should be reflected in both products.
17. S.DC.17: Sleeper Collateral Receivables, as the amount due to a reporting entity but not
yet called for will also be included in the total amount of S.DC.5: Initial Margin Posted –
House, S.DC.6: Initial Margin Posted – Customer, S.DC.8: Variation Margin Posted –
House or S.DC.9: Variation Margin Posted - Customer.
18. S.DC.15: Sleeper Collateral Deliverables, as the amount due to a reporting firm’s
counterparties that has not yet been called for should also be included in the total
amount of S.DC.7: Initial Margin Received or S.DC.10: Variation Margin Received.
19. S.L.1: Subsidiary Liquidity That Cannot Be Transferred, S.L.2: Subsidiary Liquidity
Available for Transfer, S.L.7: Subsidiary Funding That Cannot Be Transferred, S.L.8:
Subsidiary Funding Available for Transfer and S.I.6: Subsidiary Liquidity Not
Transferrable should correspond to asset and liability amounts reported elsewhere on
the FR 2052A submission.
20. O.D.12: Other Product Sweep Accounts includes balances that are swept from deposit
accounts into other products or other types of deposits accounts. These balances should
be reported in both the product that corresponds with the contractual liability into
which the funds are swept as of close of business on the reporting date, as well as
O.D.12.
21. I.O.8: Principal Payments on Unencumbered Investment Securities, as the market
value of these securities must also be reported in the I.A.1: Unencumbered Assets or
I.A.2: Capacity products.
Appendix VI: LRM: LCR to FR 2052a Mapping
[Enclosure]
Appendix VII: wSTWF to FR 2052a Mapping
[Enclosure]
Appendix VIII: LRM: NSFR to FR 2052a Mapping
[Enclosure]
APPENDIX VI: LCR to FR 2052a Mapping
Staff of the Board of Governors of the Federal Reserve System (Board) has developed this document to assist
reporting firms subject to the liquidity coverage ratio rule (LCR Rule1) in mapping the provisions of the LCR
Rule to the unique data identifiers reported on FR 2052a. This mapping document is not a part of the LCR
Rule nor a component of the FR 2052a report. Firms may use this mapping document solely at their
discretion. From time to time, to ensure accuracy, an updated mapping document may be published and
reporting firms will be notified of these changes.
Key
* Values relevant to the LCR
# Values not relevant to the LCR
NULL Should not have an associated value
LCR Calculation2
𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎
𝐿𝐿𝐿𝐿𝐿𝐿 =
𝑇𝑇𝑎𝑎𝑎𝑎𝑎𝑎𝑇𝑇 𝑁𝑁𝑁𝑁𝑎𝑎 𝐿𝐿𝑎𝑎𝐶𝐶ℎ 𝑂𝑂𝑎𝑎𝑎𝑎𝑂𝑂𝑇𝑇𝑎𝑎𝑂𝑂𝐶𝐶
𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 = (𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 1 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶 - 𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 1 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶)
+ .85(𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐻𝐻 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶 - 𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐻𝐻 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶)
+ .5(𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐵𝐵 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶 - 𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐵𝐵 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶)
- 𝑀𝑀𝐻𝐻𝑀𝑀[ 𝑈𝑈𝑎𝑎𝑎𝑎𝑎𝑎𝑑𝑑𝑎𝑎𝐶𝐶𝑎𝑎𝑁𝑁𝑎𝑎 𝑁𝑁𝑒𝑒𝑠𝑠𝑁𝑁𝐶𝐶𝐶𝐶 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻, 𝐻𝐻𝑎𝑎𝑑𝑑𝑎𝑎𝐶𝐶𝑎𝑎𝑁𝑁𝑎𝑎 𝑁𝑁𝑒𝑒𝑠𝑠𝑁𝑁𝐶𝐶𝐶𝐶 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 ]
𝑈𝑈𝑎𝑎𝑎𝑎𝑎𝑎𝑑𝑑𝑎𝑎𝐶𝐶𝑎𝑎𝑁𝑁𝑎𝑎 𝑁𝑁𝑒𝑒𝑠𝑠𝑁𝑁𝐶𝐶𝐶𝐶 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 = 𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁X𝑇𝑇 2 𝑠𝑠𝑎𝑎𝑐𝑐 𝑁𝑁𝑒𝑒𝑠𝑠𝑁𝑁𝐶𝐶𝐶𝐶 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 + 𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐵𝐵 𝑠𝑠𝑎𝑎𝑐𝑐 𝑁𝑁𝑒𝑒𝑠𝑠𝑁𝑁𝐶𝐶𝐶𝐶 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎
𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2 𝑠𝑠𝑎𝑎𝑐𝑐 𝑁𝑁𝑒𝑒𝑠𝑠𝑁𝑁𝐶𝐶𝐶𝐶 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 = 𝑀𝑀𝐻𝐻 [ 0,
.85(𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐻𝐻 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶 - 𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐻𝐻 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶)
+ .5(𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐵𝐵 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶 - 𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐵𝐵 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶)
-.6667(𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 1 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎X𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶 - 𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 1 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶) ]
𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐵𝐵 𝑠𝑠𝑎𝑎𝑐𝑐 𝑁𝑁𝑒𝑒𝑠𝑠𝑁𝑁𝐶𝐶𝐶𝐶 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 = 𝑀𝑀𝐻𝐻 [ 0,
.5(𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐵𝐵 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶 - 𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐵𝐵 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶)
-𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2 𝑠𝑠𝑎𝑎𝑐𝑐 𝑁𝑁𝑒𝑒𝑠𝑠𝑁𝑁𝐶𝐶𝐶𝐶 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎
-.1765( (𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 1 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶 - 𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 1 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶)
+ . 85(𝐿𝐿𝑁𝑁 1𝐿𝐿 𝑁𝑁𝑇𝑇 2𝐻𝐻 𝐻𝐻 𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎 𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎 𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶 - 𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐻𝐻 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶) ) ]
= 1 +
𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 𝐻𝐻𝐻𝐻𝐻𝐻𝐴𝐴𝑎𝑎𝐴𝐴𝐴𝐴𝑎𝑎𝐴𝐴𝑎𝑎𝑙𝑙𝐴𝐴𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴
1
𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 𝐻𝐻𝐻𝐻𝐻𝐻𝐴𝐴𝑎𝑎𝐴𝐴𝐴𝐴𝑎𝑎𝐴𝐴𝑎𝑎𝑙𝑙𝐴𝐴𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴 𝑆𝑆𝐴𝐴𝑐𝑐𝐴𝐴𝑐𝑐𝐴𝐴𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙𝐴𝐴𝑎𝑎𝑙𝑙𝑙𝑙𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴𝑚𝑚𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝐴𝐴𝑚𝑚𝑎𝑎𝑚𝑚𝑎𝑎𝐴𝐴𝑙𝑙𝐴𝐴𝐴𝐴
-𝑆𝑆𝐴𝐴𝑐𝑐𝐴𝐴𝑐𝑐𝐴𝐴𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙𝐴𝐴𝑎𝑎𝑙𝑙𝑙𝑙𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴𝑢𝑢𝑎𝑎𝐴𝐴ℎ𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙𝑐𝑐𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴
-𝑆𝑆𝐴𝐴𝑐𝑐𝐴𝐴𝑐𝑐𝐴𝐴𝐴𝐴𝑓𝑓𝐴𝐴𝑙𝑙𝐴𝐴𝑎𝑎𝑙𝑙𝑙𝑙𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴𝑚𝑚𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝐴𝐴𝑚𝑚𝑎𝑎𝑚𝑚𝑎𝑎𝐴𝐴𝑙𝑙𝐴𝐴𝐴𝐴
1 Refer to LCR Rule as defined as specified in section 10 (c) of the LRM standards.
2 For the maturity mismatch add‐on, please note that Open maturity should still be reported in FR 2052a, and the LCR
calculation will convert Open to day 1 pursuant to section 31(a)(4) of the LCR Rule.
1
+ 1
+ 1
𝑆𝑆𝐴𝐴𝑐𝑐𝐴𝐴𝑐𝑐𝐴𝐴𝐴𝐴𝑓𝑓𝐴𝐴𝑙𝑙𝐴𝐴𝑎𝑎𝑙𝑙𝑙𝑙𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴𝑢𝑢𝑎𝑎𝐴𝐴ℎ𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙𝑐𝑐𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴
1
𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝑒𝑒𝑐𝑐ℎ𝑎𝑎𝑙𝑙𝑙𝑙𝐴𝐴𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴𝑚𝑚𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝐴𝐴𝑚𝑚𝑎𝑎𝑚𝑚𝑎𝑎𝐴𝐴𝑙𝑙𝐴𝐴𝐴𝐴𝑢𝑢𝑎𝑎𝐴𝐴ℎ𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 𝐴𝐴𝐴𝐴𝑠𝑠𝑠𝑠𝑐𝑐𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝐴𝐴
-𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝑒𝑒𝑐𝑐ℎ𝑎𝑎𝑙𝑙𝑙𝑙𝐴𝐴𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴𝑢𝑢𝑎𝑎𝐴𝐴ℎ𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙𝑐𝑐𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴
𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴 𝑙𝑙𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 2𝐴𝐴 𝐻𝐻𝐻𝐻𝐻𝐻𝐴𝐴 𝑎𝑎𝐴𝐴𝐴𝐴𝑎𝑎𝐴𝐴𝑎𝑎𝑙𝑙𝐴𝐴 𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴
= 𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 2𝐴𝐴 𝐻𝐻𝐻𝐻𝐻𝐻𝐴𝐴 𝑎𝑎𝐴𝐴𝐴𝐴𝑎𝑎𝐴𝐴𝑎𝑎𝑙𝑙𝐴𝐴 𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴
-𝑆𝑆𝐴𝐴𝑐𝑐𝐴𝐴𝑐𝑐𝐴𝐴𝐴𝐴 𝑙𝑙𝐴𝐴𝑙𝑙𝐴𝐴𝑎𝑎𝑙𝑙𝑙𝑙 𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙 𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴 𝑢𝑢𝑎𝑎𝐴𝐴ℎ 𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 2𝐴𝐴 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙 𝑐𝑐𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴
+ 𝑆𝑆𝐴𝐴𝑐𝑐𝐴𝐴𝑐𝑐𝐴𝐴𝐴𝐴 𝑓𝑓𝐴𝐴𝑙𝑙𝐴𝐴𝑎𝑎𝑙𝑙𝑙𝑙 𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙 𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴 𝑢𝑢𝑎𝑎𝐴𝐴ℎ 𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 2𝐴𝐴 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙 𝑐𝑐𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴
+ 𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴 𝐴𝐴𝑒𝑒𝑐𝑐ℎ𝑎𝑎𝑙𝑙𝑙𝑙𝐴𝐴 𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴 𝑚𝑚𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝐴𝐴𝑚𝑚 𝑎𝑎𝑚𝑚𝑎𝑎𝐴𝐴𝑙𝑙𝐴𝐴𝐴𝐴 𝑢𝑢𝑎𝑎𝐴𝐴ℎ 𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 2𝐴𝐴 𝐴𝐴𝐴𝐴𝑠𝑠𝑠𝑠𝑐𝑐𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝐴𝐴
-𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴 𝐴𝐴𝑒𝑒𝑐𝑐ℎ𝑎𝑎𝑙𝑙𝑙𝑙𝐴𝐴 𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙 𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴 𝑢𝑢𝑎𝑎𝐴𝐴ℎ 𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 2𝐴𝐴 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙 𝑐𝑐𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴
𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴 𝑙𝑙𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 2𝐵𝐵 𝐻𝐻𝐻𝐻𝐻𝐻𝐴𝐴 𝑎𝑎𝐴𝐴𝐴𝐴𝑎𝑎𝐴𝐴𝑎𝑎𝑙𝑙𝐴𝐴 𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴
= 𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 2𝐵𝐵 𝐻𝐻𝐻𝐻𝐻𝐻𝐴𝐴 𝑎𝑎𝐴𝐴𝐴𝐴𝑎𝑎𝐴𝐴𝑎𝑎𝑙𝑙𝐴𝐴 𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴
-𝑆𝑆𝐴𝐴𝑐𝑐𝐴𝐴𝑐𝑐𝐴𝐴𝐴𝐴 𝑙𝑙𝐴𝐴𝑙𝑙𝐴𝐴𝑎𝑎𝑙𝑙𝑙𝑙 𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙 𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴 𝑢𝑢𝑎𝑎𝐴𝐴ℎ 𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 2𝐵𝐵 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙 𝑐𝑐𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴
+ 𝑆𝑆𝐴𝐴𝑐𝑐𝐴𝐴𝑐𝑐𝐴𝐴𝐴𝐴 𝑓𝑓𝐴𝐴𝑙𝑙𝐴𝐴𝑎𝑎𝑙𝑙𝑙𝑙 𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙 𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴 𝑢𝑢𝑎𝑎𝐴𝐴ℎ 𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 2𝐵𝐵 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙 𝑐𝑐𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴
+ 𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴 𝐴𝐴𝑒𝑒𝑐𝑐ℎ𝑎𝑎𝑙𝑙𝑙𝑙𝐴𝐴 𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴 𝑚𝑚𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝐴𝐴𝑚𝑚 𝑎𝑎𝑚𝑚𝑎𝑎𝐴𝐴𝑙𝑙𝐴𝐴𝐴𝐴 𝑢𝑢𝑎𝑎𝐴𝐴ℎ 𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 2𝐵𝐵 𝐴𝐴𝐴𝐴𝑠𝑠𝑠𝑠𝑐𝑐𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝐴𝐴
-𝐴𝐴 𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴 𝐴𝐴𝑒𝑒 𝑐𝑐ℎ𝑎𝑎𝑙𝑙𝑙𝑙 =𝐴𝐴 𝐴𝐴𝑙𝑙𝑢𝑢𝑎𝑎𝑙𝑙𝐴𝐴 𝑐𝑐 𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴 2𝑐𝑐 𝑎𝑎𝑙𝑙 𝑙𝑙𝑎𝑎 𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴 𝑢𝑢 𝑎𝑎𝐴𝐴ℎ 𝐻𝐻𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 + 2 𝐵𝐵 𝑐𝑐𝑎𝑎𝑙𝑙𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝑙𝑙 𝑐𝑐𝑙𝑙𝑎𝑎𝐴𝐴𝐴𝐴
2
𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝑒𝑒𝑐𝑐𝐴𝐴𝐴𝐴𝐴𝐴𝐻𝐻𝐻𝐻𝐻𝐻𝐴𝐴 𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 𝑐𝑐𝑎𝑎𝑠𝑠𝐴𝐴𝑒𝑒𝑐𝑐𝐴𝐴𝐴𝐴𝐴𝐴𝑎𝑎𝑚𝑚𝑎𝑎𝐴𝐴𝑙𝑙𝐴𝐴
𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙𝐴𝐴𝑙𝑙 𝐵𝐵𝑐𝑐𝑎𝑎𝑠𝑠𝐴𝐴𝑒𝑒𝑐𝑐𝐴𝐴𝐴𝐴𝐴𝐴𝑎𝑎𝑚𝑚𝑎𝑎𝐴𝐴𝑙𝑙𝐴𝐴 X
𝐻𝐻𝑎𝑎𝑑𝑑𝑎𝑎𝐶𝐶𝑎𝑎𝑁𝑁𝑎𝑎 𝑇𝑇𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2 𝑠𝑠𝑎𝑎𝑐𝑐 𝑁𝑁𝑒𝑒𝑠𝑠𝑁𝑁𝐶𝐶𝐶𝐶 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 = 𝑀𝑀𝐻𝐻 [ 0,
.85(𝐻𝐻𝑎𝑎𝑑𝑑𝑎𝑎𝐶𝐶𝑎𝑎𝑁𝑁𝑎𝑎 𝑇𝑇𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐻𝐻 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶
-𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐻𝐻 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶)
+ .5(𝐻𝐻𝑎𝑎𝑑𝑑𝑎𝑎𝐶𝐶𝑎𝑎𝑁𝑁𝑎𝑎 𝑇𝑇𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐵𝐵 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶
-𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐵𝐵 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶)
-.6667(𝐻𝐻𝑎𝑎𝑑𝑑𝑎𝑎𝐶𝐶𝑎𝑎𝑁𝑁𝑎𝑎 𝑇𝑇𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 1 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶
-𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 1 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶) X]
𝐻𝐻𝑎𝑎𝑑𝑑𝑎𝑎𝐶𝐶𝑎𝑎𝑁𝑁𝑎𝑎 𝑇𝑇𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐵𝐵 𝑠𝑠𝑎𝑎𝑐𝑐 𝑁𝑁𝑒𝑒𝑠𝑠𝑁𝑁𝐶𝐶𝐶𝐶 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 = 𝑀𝑀𝐻𝐻 [ 0,
.5(𝐻𝐻𝑎𝑎𝑑𝑑𝑎𝑎𝐶𝐶𝑎𝑎𝑁𝑁𝑎𝑎 𝑇𝑇𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐵𝐵 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶 - 𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐵𝐵 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶)
-𝐻𝐻𝑎𝑎𝑑𝑑𝑎𝑎𝐶𝐶𝑎𝑎𝑁𝑁𝑎𝑎 𝑇𝑇𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2 𝑠𝑠𝑎𝑎𝑐𝑐 𝑁𝑁𝑒𝑒𝑠𝑠𝑁𝑁𝐶𝐶𝐶𝐶 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎
-.1765( (𝐻𝐻𝑎𝑎𝑑𝑑𝑎𝑎𝐶𝐶𝑎𝑎𝑁𝑁𝑎𝑎 𝑇𝑇𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 1 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶
-𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 1 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶)
+ .85(𝐻𝐻𝑎𝑎𝑑𝑑𝑎𝑎𝐶𝐶𝑎𝑎𝑁𝑁𝑎𝑎 𝑇𝑇𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐻𝐻 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶
-𝐿𝐿𝑁𝑁𝐿𝐿𝑁𝑁𝑇𝑇 2𝐻𝐻 𝐻𝐻𝐻𝐻𝐿𝐿𝐻𝐻 𝐶𝐶 𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑠𝑠𝑎𝑎𝑎𝑎𝐿𝐿𝑁𝑁 𝐿𝐿𝑎𝑎𝑇𝑇𝑎𝑎𝑁𝑁𝐶𝐶) ) ]
= [
𝑇𝑇𝑎𝑎𝐴𝐴𝑎𝑎𝑙𝑙 𝑁𝑁𝐴𝐴 𝐴𝐴 𝐶𝐶𝑎𝑎𝐴𝐴ℎ 𝑂𝑂𝐴𝐴𝐴𝐴𝑓𝑓 𝑙𝑙𝑎𝑎𝑢𝑢𝐴𝐴
𝑂𝑂𝐴𝐴𝐴𝐴𝑓𝑓 [𝑙𝑙 𝑎𝑎𝑢𝑢𝐴𝐴𝐴𝐴𝐴𝐴𝐴𝐴 𝐴𝐴𝐴𝐴𝑚𝑚𝐴𝐴𝑙𝑙 𝐴𝐴𝑃𝑃𝐴𝐴𝑐𝑐𝑐𝑐𝐴𝐴𝑙𝑙𝐴𝐴𝑎𝑎𝑙𝑙𝐴𝐴∗ 𝑂𝑂𝐴𝐴𝐴𝐴𝑓𝑓𝑙𝑙𝑎𝑎𝑢𝑢𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴
∗ 𝑅𝑅𝐴𝐴𝐴𝐴𝑠𝑠𝐴𝐴𝑐𝑐𝐴𝐴𝑎𝑎𝑙𝑙𝐴𝐴 𝑎𝑎𝐴𝐴𝐴𝐴𝑓𝑓𝑙𝑙𝑎𝑎𝑢𝑢 𝑐𝑐𝑎𝑎𝐴𝐴𝐴𝐴,𝐴𝐴 .75( ) ]
-𝑀𝑀𝑀𝑀𝑁𝑁 𝑀𝑀𝑙𝑙𝑓𝑓𝑙𝑙𝑎𝑎𝑢𝑢𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴
+ ]
∗𝑅𝑅𝐴𝐴𝐴𝐴𝑠𝑠𝐴𝐴𝑐𝑐𝐴𝐴𝑎𝑎𝑙𝑙𝐴𝐴𝑎𝑎𝑙𝑙𝑓𝑓𝑙𝑙𝑎𝑎𝑢𝑢𝑐𝑐𝑎𝑎𝐴𝐴𝐴𝐴𝐴𝐴 𝑂𝑂𝐴𝐴𝐴𝐴𝑓𝑓𝑙𝑙𝑎𝑎𝑢𝑢𝑙𝑙𝑎𝑎𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴∗𝑅𝑅𝐴𝐴𝐴𝐴𝑠𝑠𝐴𝐴𝑐𝑐𝐴𝐴𝑎𝑎𝑙𝑙𝐴𝐴𝑎𝑎𝐴𝐴𝐴𝐴𝑓𝑓𝑙𝑙𝑎𝑎𝑢𝑢𝑐𝑐𝑎𝑎𝐴𝐴𝐴𝐴𝐴𝐴
𝑀𝑀𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝐴𝐴𝑚𝑚𝑚𝑚𝑎𝑎𝐴𝐴𝑚𝑚𝑎𝑎𝐴𝐴𝑐𝑐ℎ𝑎𝑎𝐴𝐴𝐴𝐴𝑎𝑎𝑙𝑙
= [ 0, ]
𝑀𝑀𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝐴𝐴𝑚𝑚 𝑚𝑚𝑎𝑎𝐴𝐴𝑚𝑚 [ 𝑎𝑎0,𝐴𝐴 𝑐𝑐ℎ 𝑎𝑎 𝐴𝐴𝐴𝐴 𝑎𝑎 𝑙𝑙30 ]
𝑀𝑀𝐴𝐴𝑀𝑀 𝐻𝐻𝑎𝑎𝑐𝑐𝑙𝑙𝐴𝐴𝐴𝐴𝐴𝐴𝑙𝑙𝐴𝐴𝐴𝐴𝑐𝑐𝐴𝐴𝑚𝑚𝐴𝐴𝑙𝑙𝑎𝑎𝐴𝐴𝑎𝑎𝑙𝑙𝐴𝐴𝑚𝑚𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝐴𝐴𝑚𝑚𝑎𝑎𝐴𝐴𝐴𝐴𝑓𝑓𝑙𝑙𝑎𝑎𝑢𝑢𝑎𝑎𝑚𝑚𝑎𝑎𝐴𝐴𝑙𝑙𝐴𝐴
-𝑀𝑀𝐴𝐴𝑀𝑀 𝑁𝑁𝐴𝐴𝐴𝐴𝐴𝐴𝑎𝑎𝑚𝑚 𝑐𝑐𝐴𝐴𝑚𝑚𝐴𝐴𝑙𝑙𝑎𝑎𝐴𝐴𝑎𝑎𝑙𝑙𝐴𝐴𝑚𝑚𝑎𝑎𝐴𝐴𝐴𝐴𝑐𝑐𝑎𝑎𝐴𝐴𝑚𝑚𝑎𝑎𝐴𝐴𝐴𝐴𝑓𝑓𝑙𝑙𝑎𝑎𝑢𝑢𝑎𝑎𝑚𝑚𝑎𝑎𝐴𝐴𝑙𝑙𝐴𝐴
2
3
Outflow Adjustment Percentage Example
Banking organizations subject to LCR requirements should determine their category of standards under the
LCR rule and apply the appropriate outflow adjustment percentage.
Outflow adjustment percentage
Global systemically important BHC or GSIB depository institution 100
percent
Category II Board‐regulated institution 100
percent
Category III Board‐regulated institution with $75 billion or more in average weighted short‐ 100
term wholesale funding and any Category III Board‐regulated institution that is a percent
consolidated subsidiary of such a Category III Board‐regulated institution
Category III Board‐regulated institution with less than $75 billion in average weighted short‐ 85
term wholesale funding and any Category III Board‐regulated institution that is a percent
consolidated subsidiary of such a Category III Board‐regulated institution
Category IV Board‐regulated institution with $50 billion or more in average weighted short‐ 70
term wholesale funding percent
Throughout the mapping tables on the following pages, “HQLA”, “Non‐HQLA”, and “Other” collateral
classes are defined as follows:
HQLA refers to all asset classes listed in Appendix III with a “‐Q” suffix.
Non-HQLA refers to all asset classes listed in Appendix III that are not included in “Other” or HQLA. This
category includes “Z‐1”.
Other includes the following collateral classes only: C‐1, P‐1, P‐2, LC‐1, and LC‐2.
4
HQLA Amount Values
HQLA Additive Values
(1) High-Quality Liquid Assets (Subpart C, §.20-.22)
Field Value
Reporting Entity LCR Firm
PID I.A.1, 2, and 3
Product Matches PID
Sub‐Product Not Currency and Coin
Market Value *
Lendable Value #
Maturity Bucket Open for I.A.3, # otherwise
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class HQLA (except A‐0‐Q for I.A.2)
Treasury Control Y
Accounting Designation #
Encumbrance Type NULL
Internal Counterparty #
(2) Rehypothecatable Collateral (Subpart C, §.20-.22)
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 4, 5, and 6
Product Matches PID
Sub‐Product #
Maturity Amount #
Maturity Bucket #
Maturity Optionality #
Effective Maturity Bucket NULL
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class HQLA (except A‐0‐Q)
Collateral Value *
Unencumbered Y
Treasury Control Y
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty #
G‐SIB #
5
(3) Rehypothecatable Collateral (Subpart C, §.20-.22)
Field Value
Reporting Entity LCR Firm
PID S.DC. 7 and 10
Product Matches PID
Sub‐Product Rehypothecatable ‐ Unencumbered
Treasury Control Y
Sub‐Product2 #
Market Value *
Collateral Class HQLA
Collateral Level #
Counterparty #
G‐SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible #
Internal #
Internal Counterparty #
Business Line #
HQLA Subtractive Values
(4) Excluded Sub HQLA (§.22(b)(3)and(4))
Field Value
Reporting Entity LCR Firm
PID S.L.1
Product Matches PID
Market Value *
Collateral Class HQLA
Internal #
Internal Counterparty #
(5) Early Hedge Termination Outflows (§.22(a)(3))
Field Value
Reporting Entity LCR Firm
PID S.L.3
Product Matches PID
Market Value *
Collateral Class HQLA
Internal #
Internal Counterparty #
(6) Excess Collateral (§.22(b)(5))
Field Value
Reporting Entity LCR Firm
PID S.DC.15
Product Matches PID
6
Sub‐Product #
Treasury Control Y
SID2 #
Sub‐Product2 #
Market Value *
Collateral Class HQLA
Collateral Level #
Counterparty #
G‐SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible #
Internal #
Internal Counterparty #
Business Line #
Unwind Transactions
(7) Secured Lending Unwind (Subpart C, §.21)
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 5, and 6
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL or <= 30 calendar days, but not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class HQLA
Collateral Value *
Unencumbered Y if Effective Maturity Bucket is NULL, otherwise
#
Treasury Control Y
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty #
G‐SIB #
7
(8) Secured Funding Unwind (Subpart C, §.21)
Field Value
Reporting Entity LCR Firm
PID O.S.1, 2, 3, 5, 6, 7 and 11
Product Matches PID
SID Matches Sub‐Product
Sub‐Product For O.S.7, cannot be Unsettled (Regular Way) or
Unsettled (Forward), # otherwise
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class HQLA
Collateral Value *
Treasury Control Y
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated #
Counterparty #
G‐SIB #
(9) Asset Exchange Unwind (Subpart C, §.21)
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product #
Sub‐Product Level 1 HQLA, Level 2A HQLA, and Level 2B HQLA
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL or <= 30 calendar days, not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class HQLA
Collateral Value *
Unencumbered Y if Effective Maturity Bucket is NULL, otherwise
#
Treasury Control Y
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
8
Counterparty #
G‐SIB #
OUTFLOW VALUES
(10) Stable Retail Deposits (§.32(a)(1))
Field Value
Reporting Entity LCR Firm
PID O.D.1 and 2
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured FDIC
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(11) Other Retail Deposits (§.32(a)(2))
Field Value
Reporting Entity LCR Firm
PID O.D.1, 2, and 3
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured Not FDIC for PID = 1 and 2, and # for PID = 3
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
9
(12) Insured Placed Retail Deposits (§.32(a)(3))
Field Value
Reporting Entity LCR Firm
PID O.D.14
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured FDIC
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(13) Non-Insured Placed Retail Deposits (§.32(a)(4))
Field Value
Reporting Entity LCR Firm
PID O.D.14
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured Not FDIC
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(14) Other Retail Funding (§.32(a)(5))
Field Value
Reporting Entity LCR Firm
PID O.D.15
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket #
10
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured #
Trigger #
Rehypothecated NULL
Business Line #
Internal #
Internal Counterparty #
(15) Other Retail Funding (§.32(a)(5))
Field Value
Reporting Entity LCR Firm
PID O.O.22
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Internal #
Internal Counterparty #
Business Line #
(16) Other Retail Funding (§.32(a)(5))
Field Value
Reporting Entity LCR Firm
PID O.S.1, 2, 7 and 11
Product Matches PID
Sub‐Product For O.S.7, cannot be Unsettled (Regular Way) or
Unsettled (Forward), # otherwise
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated #
11
Counterparty Retail or Small Business
G‐SIB #
(17) Other Retail Funding (§.32(a)(5))
Field Value
Reporting Entity LCR Firm
PID O.W.18
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
(18) Structured Transaction Outflow Amount (§.32(b))
(The total amount for 32(b) is the relevant commitment amounts plus the incremental increase
from O.O.21)
Field Value
Reporting Entity LCR Firm
PID O.O.21 (adds the incremental amount)
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Forward Start Amount #
Forward Start Bucket #
Collateral Class #
Collateral Value #
Internal #
Internal Counterparty #
Business Line #
(19) Net Derivatives Cash Outflow Amount (§.32(c))
Field Value
Reporting Entity LCR Firm
PID O.O.20
Product Matches PID
Counterparty #
12
G‐SIB #
Maturity Amount *
Maturity Bucket #
Forward Start Amount #
Forward Start Bucket #
Collateral Class #
Collateral Value #
Internal #
Internal Counterparty #
Business Line #
(20) Mortgage Commitment Outflow Amount (§.32(d))
Field Value
Reporting Entity LCR Firm
PID O.O.6
Product Matches PID
Counterparty Retail
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Forward Start Amount #
Forward Start Bucket #
Collateral Class #
Collateral Value #
Internal #
Internal Counterparty #
Business Line #
(21) Affiliated DI Commitments (§.32(e)(1)(i))
Field Value
Reporting Entity LCR Firm that is a depository institution
PID O.O.4 and 5
Product Matches PID
Counterparty Bank
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Forward Start Amount #
Forward Start Bucket #
Collateral Class *3
Collateral Value *4
3 For the purpose of all tables mapped to commitment outflow amounts in section .32(e), the Collateral Class field
should be used to identify commitment exposures that are secured by Level 1 or Level 2A HQLA, in accordance with
sections .32(e)(2) and (3).
4 For the purpose of all tables mapped to commitment outflow amounts in section .32(e), the Collateral Value field
should be used to identify the amount of Level 1 or Level 2A HQLA securing the commitment exposure in accordance
with sections .32(e)(2) and (3).
13
Internal Y
Internal Counterparty Bank from the U.S. subject to the LCR
Business Line #
(22) Retail Commitments (§.32(e)(1)(ii))
Field Value
Reporting Entity LCR Firm
PID O.O.4, 5 and 18
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days for O.O.4, O.O.5; # for
O.O.18
Forward Start Amount #
Forward Start Bucket #
Collateral Class *
Collateral Value *
Internal #
Internal Counterparty #
Business Line #
(23) Non-Financial Corporate Credit Facilities (§.32(e)(1)(iii))
Field Value
Reporting Entity LCR Firm
PID O.O.4
Product Matches PID
Counterparty Non‐Financial Corporate, Sovereign, Central
Bank, GSE, PSE, MDB, Other Supranational
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Forward Start Amount #
Forward Start Bucket #
Collateral Class *
Collateral Value *
Internal #
Internal Counterparty #
Business Line #
(24) Non-Financial Corporate Liquidity Facilities (§.32(e)(1)(iv))
Field Value
Reporting Entity LCR Firm
PID O.O.5 and 18
Product Matches PID
14
Counterparty Non‐Financial Corporate, Sovereign, Central
Bank, GSE, PSE, MDB, Other Supranational,
Municipalities for VRDN Structures
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days for O.O.5; # for O.O.18
Forward Start Amount #
Forward Start Bucket #
Collateral Class *
Collateral Value *
Internal #
Internal Counterparty #
Business Line #
(25) Bank Commitments (§.32(e)(1)(v))
Field Value
Reporting Entity LCR Firm
PID O.O.4, 5 and 18
Product Matches PID
Counterparty Bank
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days for O.O.4, O.O.5; # for O.O.18
Forward Start Amount #
Forward Start Bucket #
Collateral Class *
Collateral Value *
Internal Y
Internal Counterparty Bank not from the U.S. or Bank from the U.S. not
subject to the LCR
Business Line #
(26) Bank Commitments (§.32(e)(1)(v))
Field Value
Reporting Entity LCR Firm
PID O.O.4, 5 and 18
Product Matches PID
Counterparty Bank
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days for O.O.4, O.O.5; # for
O.O.18
Forward Start Amount #
Forward Start Bucket #
Collateral Class *
Collateral Value *
Internal N
15
Internal Counterparty NULL
Business Line #
(27) Non-Bank and Non-SPE Financial Sector Entity Credit Facilities (§.32(e)(1)(vi))
Field Value
Reporting Entity LCR Firm
PID O.O.4
Product Matches PID
Counterparty Pension Fund, Broker‐Dealer, Investment
Company or Advisor, Financial Market Utility,
Other Supervised Non‐Bank Financial Entity,
Non‐Regulated Fund
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Forward Start Amount #
Forward Start Bucket #
Collateral Class *
Collateral Value *
Internal #
Internal Counterparty #
Business Line #
(28) Non-Bank and Non-SPE Financial Sector Entity Liquidity Facilities (§.32(e)(1)(vii))
Field Value
Reporting Entity LCR Firm
PID O.O.5 and 18
Product Matches PID
Counterparty Pension Fund, Broker‐Dealer, Investment
Company or Advisor, Financial Market Utility,
Other Supervised Non‐Bank Financial Entity, Non‐
Regulated Fund
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days for O.O.5; # for O.O.18
Forward Start Amount #
Forward Start Bucket #
Collateral Class *
Collateral Value *
Internal #
Internal Counterparty #
Business Line #
16
(29) Debt Issuing SPE Commitments (§.32(e)(1)(viii))
Field Value
Reporting Entity LCR Firm
PID O.O.4, 5 and 18
Product Matches PID
Counterparty Debt Issuing SPE
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days for O.O.4, O.O.5; # for
O.O.18
Forward Start Amount #
Forward Start Bucket #
Collateral Class *
Collateral Value *
Internal #
Internal Counterparty #
Business Line #
(30) Other Commitments (§.32(e)(1)(ix))
Field Value
Reporting Entity LCR Firm
PID O.O.4, 5 and 18
Product Matches PID
Counterparty Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days for O.O.4, O.O.5; # for
O.O.18
Forward Start Amount #
Forward Start Bucket #
Collateral Class *
Collateral Value *
Internal #
Internal Counterparty #
Business Line #
(31) Changes in Financial Condition (§.32(f)(1))
Field Value
Reporting Entity LCR Firm
PID O.O.16
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
Maturity Bucket #
Forward Start Amount #
Forward Start Bucket #
Collateral Class #
17
Collateral Value #
Internal #
Internal Counterparty #
Business Line #
(32) Changes in Financial Condition (§.32(f)(1))
Field Value
Reporting Entity LCR Firm
PID O.O.12
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
Maturity Bucket #
Forward Start Amount #
Forward Start Bucket #
Collateral Class #
Collateral Value #
Internal #
Internal Counterparty #
Business Line #
(33) Derivative Collateral Potential Valuation Changes (§.32(f)(2))
Field Value
Reporting Entity LCR Firm
PID S.DC.5, 6, 8, and 9
Product Matches PID
Sub‐Product #
Sub‐Product2 Not OTC – Centralized (Agent) or Exchange‐
traded (Agent)
Market Value *
Collateral Class Not level 1 HQLA
Collateral Level #
Counterparty #
G‐SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
18
(34) Potential Derivative Valuation Changes (§.32(f)(3))
Field Value
Reporting Entity LCR Firm
PID O.O.8
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
Maturity Bucket #
Forward Start Amount #
Forward Start Bucket #
Collateral Class #
Collateral Value #
Internal #
Internal Counterparty #
Business Line #
(35) Collateral Deliverables (§.32(f)(4))
Field Value
Reporting Entity LCR Firm
PID S.DC.15
Product Matches PID
Sub‐Product #
Sub‐Product2 #
Market Value *
Collateral Class Non‐HQLA or Other
Collateral Level #
Counterparty #
G‐SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
(36) Collateral Deliverables (§.32(f)(4))
Field Value
Reporting Entity LCR Firm
PID S.DC.15
Product Matches PID
Sub‐Product #
Sub‐Product2 #
Market Value *
Collateral Class HQLA
Collateral Level #
19
Counterparty #
G‐SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible #
Treasury Control N
Internal #
Internal Counterparty #
Business Line #
(37) Collateral Deliverables (§.32(f)(5))
Field Value
Reporting Entity LCR Firm
PID S.DC.16
Product Matches PID
Sub‐Product #
Sub‐Product2 #
Market Value *
Collateral Class #
Collateral Level #
Counterparty #
G‐SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
(38) Collateral Substitution (§.32(f)(6))
Field Value
Reporting Entity LCR Firm
PID S.DC.18 and 20
Product Matches PID
Sub‐Product #
Sub‐Product2 #
Market Value *
Collateral Class #
Collateral Level #
Counterparty #
G‐SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible #
Treasury Control #
Internal #
20
Internal Counterparty #
Business Line #
(39) Other Brokered Retail Deposits Maturing within 30 days (§.32(g)(1))
Field Value
Reporting Entity LCR Firm
PID O.D.8
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days (but not open)
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(40) Other Brokered Retail Deposits Maturing later than 30 days (§.32(g)(2))
Field Value
Reporting Entity LCR Firm
PID O.D.8
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket > 30 calendar days
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(41) Insured Other Brokered Retail Deposits with No Maturity(§.32(g)(3))
Field Value
Reporting Entity LCR Firm
PID O.D.8
Product Matches PID
Counterparty Retail or Small Business
21
G‐SIB #
Maturity Amount *
Maturity Bucket Open
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured FDIC
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(42) Not Fully Insured Other Brokered Retail Deposits with No Maturity (§.32(g)(4))
Field Value
Reporting Entity LCR Firm
PID O.D.8
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket Open
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured Not FDIC
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(43) Insured Reciprocal (§.32(g)(5))
Field Value
Reporting Entity LCR Firm
PID O.D.13
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured FDIC
Trigger #
Rehypothecated #
22
Business Line #
Internal #
Internal Counterparty #
(44) Not Fully Insured Reciprocal (§.32(g)(6))
Field Value
Reporting Entity LCR Firm
PID O.D.13
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured Not FDIC
Trigger #
Rehypothecated #
Business Line
Internal #
Internal Counterparty #
(45) Insured Affiliated Sweeps (§.32(g)(7))
Field Value
Reporting Entity LCR Firm
PID O.D.9 and 10
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured FDIC
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(46) Insured Non-Affiliated Sweeps (§.32(g)(8))
Field Value
Reporting Entity LCR Firm
PID O.D.11
Product Matches PID
23
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured FDIC
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(47) Sweeps that are not Fully Insured (§.32(g)(9))
Field Value
Reporting Entity LCR Firm
PID O.D.9, 10 and 11
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured Not FDIC
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(48) Insured Unsecured Wholesale Non-Operational Non-Financial (§.32(h)(1)(i))
Field Value
Reporting Entity LCR Firm
PID O.D.5 and 6
Product Matches PID
Counterparty Non‐Financial Corporate, Sovereign, Central
Bank,
GSE, PSE, MDB, Other Supranational, Debt
Issuing SPE, Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class NULL or Other
24
Collateral Value NULL
Insured FDIC
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(49) Not Fully Insured Unsecured Wholesale Non-Operational Non-Financial (§.32(h)(1)(ii)(A))
Field Value
Reporting Entity LCR Firm
PID O.D.5 and 6
Product Matches PID
Counterparty Non‐Financial Corporate, Sovereign, Central
Bank, GSE, PSE, MDB, Other Supranational, Debt
Issuing SPE, Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class NULL or Other
Collateral Value NULL
Insured Not FDIC
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(50) Not Fully Insured Unsecured Wholesale Non-Operational Non-Financial (§.32(h)(1)(ii)(A))
Field Value
Reporting Entity LCR Firm
PID O.W.9, 10, 17, 18
Product Matches PID
Counterparty Non‐Financial Corporate, Sovereign, Central
Bank, GSE, PSE, MDB, Other Supranational, Debt
Issuing SPE, Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
25
Loss Absorbency #
Business Line #
(51) Not Fully Insured Unsecured Wholesale Non-Operational Non-Financial (§.32(h)(1)(ii)(A))
Field Value
Reporting Entity LCR Firm
PID O.S.1, 2, 3, 5, 6, 7, 11
Product Matches PID
Counterparty Non‐Financial Corporate, Sovereign, Central
Bank, GSE, PSE, MDB, Other Supranational, Debt
Issuing SPE, Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Other
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
(52) Unsecured Wholesale Brokered Deposit Non-Operational Non-Financial (§.32(h)(1)(ii)(B))
Field Value
Reporting Entity LCR Firm
PID O.D.8 – 11, 13
Product Matches PID
Counterparty Non‐Financial Corporate, Sovereign, Central
Bank, GSE, PSE, MDB, Other Supranational, Debt
Issuing SPE, Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class NULL or Other
Collateral Value NULL
Insured #
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
26
(53) Financial Non-Operational (§.32(h)(2))
Field Value
Reporting Entity LCR Firm
PID O.D.5, 6, 8‐11 and 13
Product Matches PID
Counterparty Pension Fund, Bank, Broker‐Dealer, Investment
Company or Advisor, Financial Market Utility,
Other Supervised Non‐Bank Financial Entity, Non‐
Regulated Fund
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class NULL or Other
Collateral Value NULL
Insured #
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(54) Financial Non-Operational (§.32(h)(2))
Field Value
Reporting Entity LCR Firm
PID O.W.9, 10, 17, and 18
Product Matches PID
Counterparty Pension Fund, Bank, Broker‐Dealer, Investment
Company or Advisor, Financial Market Utility,
Other Supervised Non‐Bank Financial Entity, Non‐
Regulated Fund
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Business Line #
27
(55) Financial Non-Operational (§.32(h)(2))
Field Value
Reporting Entity LCR Firm
PID O.S.1, 2, 3, 7, 11
Product Matches PID
Counterparty Pension Fund, Bank, Broker‐Dealer, Investment
Company or Advisor, Financial Market Utility,
Other Supervised Non‐Bank Financial Entity, Non‐
Regulated Fund
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Other
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Business Line #
(56) Issued Debt Securities Maturing within 30 Days (§.32(h)(2))
Field Value
Reporting Entity LCR Firm
PID O.W.8, 11‐16
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class *
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
(57) Insured Operational Deposits (§.32(h)(3))
Field Value
Reporting Entity LCR Firm
PID O.D.4
Product Matches PID
Counterparty Not Retail or Small Business
G‐SIB #
28
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class NULL or Other
Collateral Value #
Insured FDIC
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(58) Not Fully Insured Operational Deposits (§.32(h)(4))
Field Value
Reporting Entity LCR Firm
PID O.D.4
Product Matches PID
Counterparty All except Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class NULL or Other
Collateral Value #
Insured Not FDIC
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(59) Not Fully Insured Operational Deposits (§.32(h)(4))
Field Value
Reporting Entity LCR Firm
PID O.D.7
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class NULL or Other
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Business Line #
29
Internal #
Internal Counterparty #
(60) Other Unsecured Wholesale (§.32(h)(5))
Field Value
Reporting Entity LCR Firm
PID O.D.14 and 15
Product Matches PID
Counterparty Not Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class NULL or Other
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(61) Other Unsecured Wholesale (§.32(h)(5))
Field Value
Reporting Entity LCR Firm
PID O.W.19
Product Matches PID
Counterparty Not Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
(62) Issued Not Structured Debt Securities Maturing Outside 30 Days when Primary Market Maker
(§.32(i)(1))
Field Value
Reporting Entity LCR Firm
PID S.L.4
Product Matches PID
Market Value *
30
Collateral Class #
Internal #
Internal Counterparty #
(63) Issued Structured Debt Securities Maturing Outside 30 Days when Primary Market Maker
(§.32(i)(2))
Field Value
Reporting Entity LCR Firm
PID S.L.5
Product Matches PID
Market Value *
Collateral Class #
Internal #
Internal Counterparty #
*Footnotes appearing in the Secured Funding L1 tables regarding central bank secured funding apply to
all other secured funding tables.
(64) Secured Funding L1 (§.32(j)(1)(i))
Field Value
Reporting Entity LCR Firm
PID O.D.4, 5, 6 and 7
Product Matches PID
Counterparty Non‐Financial Corporate, Sovereign, Central Bank
(FRB and other central banks where the sovereign
has not established its own outflow rate)5, GSE,
PSE, MDB, Other Supranational, Pension Fund,
Bank, Broker‐Dealer, Investment Company or
Advisor, Financial Market Utility, Other Supervised
Non‐Bank Financial Entity, Non‐Regulated Fund,
Debt Issuing SPE, Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality
Collateral Class Level 1 HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Insured #
Trigger #
Rehypothecated #
Business Line #
Internal #
5 Central bank is determined by currency. For central banks whose currencies are not included in the major currencies
reported, the outflow rate will be assumed to be 0% because the jurisdiction cannot be determined.
31
Internal Counterparty #
(65) Secured Funding L1 (§.32(j)(1)(i))
Field Value
Reporting Entity LCR Firm
PID O.S.1, 2, 3, 5, 6 (FRB and other central banks
where the sovereign has not established an LCR
outflow rate)6, 7 and 11
Product Matches PID
Sub‐Product For O.S.7, cannot be Unsettled (Regular Way) or
Unsettled (Forward), # otherwise
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 1 HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated #
Counterparty Non‐Financial Corporate, Sovereign, Central Bank
(FRB and other central banks where the sovereign
has not established its own outflow rate), GSE,
PSE, MDB, Other Supranational, Pension Fund,
Bank, Broker‐Dealer, Investment Company or
Advisor, Financial Market Utility, Other Supervised
Non‐Bank Financial Entity, Non‐Regulated Fund,
Debt Issuing SPE, Other
G‐SIB #
(66) Secured Funding L1 (§.32(j)(1)(i))
Field Value
Reporting Entity LCR Firm
PID O.W.1‐7
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
6 For O.S.6, if the counterparty is OCB, the outflow rate will be assumed to be 0% because the jurisdiction cannot be
determined.
32
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Level 1 HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
(67) Secured Funding L2A (§.32(j)(1)(ii))
Field Value
Reporting Entity LCR Firm
PID O.D.4 (not FDIC insured), 5, 6 and 7
Product Matches PID
Counterparty Non‐Financial Corporate, Sovereign, Central Bank
(FRB and other central banks where the sovereign
has not established its own outflow rate), GSE,
PSE, MDB, Other Supranational, Pension Fund,
Bank, Broker‐Dealer, Investment Company or
Advisor, Financial Market Utility, Other Supervised
Non‐Bank Financial Entity, Non‐Regulated Fund,
Debt Issuing SPE, Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Level 2A HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Insured If O.D.4 then not FDIC, otherwise #
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
33
(68) Secured Funding L2A (§.32(j)(1)(ii))
Field Value
Reporting Entity LCR Firm
PID O.S.1, 2, 3, 5, 6 (FRB and other central banks
where the sovereign has not established an LCR
outflow rate), 7 and 11
Product Matches PID
Sub‐Product For O.S.7, cannot be Unsettled (Regular Way) or
Unsettled (Forward), # otherwise
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2A HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated #
Counterparty Non‐Financial Corporate, Sovereign, Central Bank
(FRB and other central banks where the sovereign
has not established its own outflow rate), GSE,
PSE, MDB, Other Supranational, Pension Fund,
Bank, Broker‐Dealer, Investment Company or
Advisor, Financial Market Utility, Other Supervised
Non‐Bank Financial Entity, Non‐Regulated Fund,
Debt Issuing SPE, Other
G‐SIB #
(69) Secured Funding L2A (§.32(j)(1)(ii))
Field Value
Reporting Entity LCR Firm
PID O.W.1‐7
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Level 2A HQLA
34
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
(70) Secured Funding from Governmental Entities not L1 or L2A (§.32(j)(1)(iii))
Field Value
Reporting Entity LCR Firm
PID O.D.4, 5 and 6 (if not FDIC insured) and 7
Product Matches PID
Counterparty Sovereign, Central Bank (FRB and other central
banks where the sovereign has not established its
own outflow rate), GSE, or MDB
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Level 2B HQLA or Non‐HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Insured Not FDIC for O.D.4‐6, # for O.D.7
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(71) Secured Funding from Governmental Entities not L1 or L2A (§.32(j)(1)(iii))
Field Value
Reporting Entity LCR Firm
PID O.S.1, 2, 3, 5, 6 (FRB and other central banks
where the sovereign has not established an LCR
outflow rate), 7 and 11
Product Matches PID
Sub‐Product For O.S.7, cannot be Unsettled (Regular Way) or
Unsettled (Forward), # otherwise
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
35
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2B HQLA or Non‐HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated #
Counterparty Sovereign, Central Bank (FRB and other central
banks where the sovereign has not established
its own outflow rate), GSE, or MDB
G‐SIB #
(72) Secured Funding L2B (§.32(j)(1)(iv))
Field Value
Reporting Entity LCR Firm
PID O.D.4 and 7 (only collateralized deposits)77
Product Matches PID
Counterparty Non‐Financial Corporate, PSE, Other
Supranational, Pension Fund, Bank, Broker‐Dealer,
Investment Company or Advisor, Financial Market
Utility, Other Supervised Non‐Bank Financial
Entity, Non‐Regulated Fund, Debt Issuing SPE,
Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Level 2B HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Insured #
Trigger #
Rehypothecated Y
Business Line #
Internal #
7 Secured deposits must meet the definition of a “collateralized deposit” under .32 of the LCR rule to be eligible for
reporting under O.D.4 or O.D.7 (subject to the additional definitional requirements of these products). Secured deposits
that do not meet the definition of a “collateralized deposit” should be reported under O.D.5 or O.D.6.
36
Internal Counterparty #
(73) Secured Funding L2B (§.32(j)(1)(iv))
Field Value
Reporting Entity LCR Firm
PID O.D.5 and 6
Product Matches PID
Counterparty Non‐Financial Corporate, PSE, Other
Supranational, Pension Fund, Bank, Broker‐
Dealer, Investment Company or Advisor,
Financial Market Utility, Other Supervised Non‐
Bank Financial Entity, Non‐Regulated Fund, Debt
Issuing SPE, Other,
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Level 2B HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Insured #
Trigger #
Rehypothecated Y for Non‐Financial Corporate, PSE, Other
Supranational, Debt Issuing SPE, Other; # for
Pension Fund, Bank, Broker‐Dealer, Investment
Company or Advisor, Financial Market Utility,
Other Supervised Non‐Bank Financial Entity, Non‐
Regulated Fund
Business Line #
Internal #
Internal Counterparty #
(74) Secured Funding L2B (§.32(j)(1)(iv))
Field Value
Reporting Entity LCR Firm
PID O.S.1, 2, 3, 7 and 11
Product Matches PID
Sub‐Product For O.S.7, cannot be Unsettled (Regular Way) or
Unsettled (Forward), # otherwise
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2B HQLA
37
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated Y for Non‐Financial Corporate, PSE, Other
Supranational, Debt Issuing SPE, Other; # for
Pension Fund, Bank, Broker‐Dealer, Investment
Company or Advisor, Financial Market Utility,
Other Supervised Non‐Bank Financial Entity, Non‐
Regulated Fund
CID Matches Counterparty
Counterparty Non‐Financial Corporate, PSE, Other
Supranational, Pension Fund, Bank, Broker‐
Dealer, Investment Company or Advisor,
Financial Market Utility, Other Supervised Non‐
Bank Financial Entity, Non‐Regulated Fund, Debt
Issuing SPE, Other
G‐SIB #
(75) Secured Funding L2B (§.32(j)(1)(iv))
Field Value
Reporting Entity LCR Firm
PID O.W.1‐7
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Level 2B HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
38
(76) Customer Shorts Funded by Non-HQLA Customer Longs (§.32(j)(1)(v))
Field Value
Reporting Entity LCR Firm
PID O.S.7
Product Matches PID
Sub‐Product Customer Long
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Non‐HQLA
Collateral Value #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated #
Counterparty Non‐Financial Corporate, PSE, Other
Supranational, Pension Fund, Bank, Broker‐
Dealer, Investment Company or Advisor,
Financial Market Utility, Other Supervised Non‐
Bank Financial Entity, Non‐Regulated Fund, Debt
Issuing SPE, Other
G‐SIB #
(77) Secured Funding Non-HQLA (§.32(j)(1)(vi))
Field Value
Reporting Entity LCR Firm
PID O.D.4 and 7 (only collateralized deposits)
Product Matches PID
Counterparty Non‐Financial Corporate, PSE, Other
Supranational, Pension Fund, Bank, Broker‐
Dealer, Investment Company or Advisor, Financial
Market Utility, Other Supervised Non‐Bank
Financial Entity, Non‐Regulated Fund, Debt
Issuing SPE, Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Non‐HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Insured #
39
Trigger #
Rehypothecated Y
Business Line #
Internal #
Internal Counterparty #
(78) Secured Funding Non-HQLA (§.32(j)(1)(vi))
Field Value
Reporting Entity LCR Firm
PID O.D.5 and 6
Product Matches PID
Counterparty Non‐Financial Corporate, PSE, Other
Supranational, Pension Fund, Bank, Broker‐
Dealer, Investment Company or Advisor,
Financial Market Utility, Other Supervised Non‐
Bank Financial Entity, Non‐Regulated Fund, Debt
Issuing SPE, Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Non‐HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Insured #
Trigger #
Rehypothecated Y for Non‐Financial Corporate, PSE, Other
Supranational, Debt Issuing SPE, Other; # for
Pension Fund, Bank, Broker‐Dealer,
Investment Company or Advisor, Financial
Market Utility, Other Supervised Non‐Bank
Financial Entity, Non‐Regulated Fund
Business Line #
Internal #
Internal Counterparty #
(79) Secured Funding Non-HQLA (§.32(j)(1)(vi))
Field Value
Reporting Entity LCR Firm
PID O.S.1, 2, 3, 7 and 11
Product Matches PID
Sub‐Product For O.S.7, cannot be Customer Long, Unsettled
(Regular Way) or Unsettled (Forward); #otherwise
Maturity Amount *
Maturity Bucket <= 30 calendar days
40
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Non‐HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated Y for Non‐Financial Corporate, PSE, Other
Supranational, Debt Issuing SPE, Other; # for
Pension Fund, Bank, Broker‐Dealer, Investment
Company or Advisor, Financial Market Utility,
Other Supervised Non‐Bank Financial Entity, Non‐
Regulated Fund
Counterparty Non‐Financial Corporate, PSE, Other
Supranational, Pension Fund, Bank, Broker‐
Dealer, Investment Company or Advisor,
Financial Market Utility, Other Supervised Non‐
Bank Financial Entity, Non‐Regulated Fund, Debt
Issuing SPE, Other
G‐SIB #
(80) Secured Funding Non-HQLA (§.32(j)(1)(vi))
Field Value
Reporting Entity LCR Firm
PID O.W.1‐7
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Non‐HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale funding under .32(h)
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
41
(81) Secured but Lower Unsecured Rate (§.32(j)(2))
Field Value
Reporting Entity LCR Firm
PID O.D.5 and 6
Product Matches PID
Counterparty Non‐Financial Corporate, PSE, Other
Supranational, Debt Issuing SPE, Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Level 2B HQLA or Non‐HQLA
Collateral Value #
Insured *
Trigger #
Rehypothecated N
Business Line #
Internal #
Internal Counterparty #
(82) Secured but Lower Unsecured Rate (§.32(j)(2))
Field Value
Reporting Entity LCR Firm
PID O.S.1, 2, 3, 5, 7 and 11
Product Matches PID
Sub‐Product For O.S.7 must be firm long, otherwise #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2B HQLA or Non‐HQLA
Collateral Value #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated N
Counterparty Non‐Financial Corporate, PSE, Other
Supranational, Debt Issuing SPE, Other
G‐SIB #
42
(83) Secured but Lower Unsecured Rate (§.32(j)(2))
Field Value
Reporting Entity LCR Firm
PID O.D.4 (only collateralized deposits)
Product Matches PID
Counterparty Non‐Financial Corporate, PSE, Other
Supranational, Pension Fund, Bank, Broker‐
Dealer, Investment Company or Advisor, Financial
Market Utility, Other Supervised Non‐Bank
Financial Entity, Non‐Regulated Fund, Debt
Issuing SPE, Other; if FDIC insured: Sovereigns,
GSEs, MDBs, Central Bank (FRB and other central
banks where the sovereign has not established its
own outflow
rate)
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class If FDIC insured: Not Level 1; if not FDIC insured:
Level 2B or Non‐HQLA
Collateral Value #
Insured *
Trigger #
Rehypothecated N
Business Line #
Internal #
Internal Counterparty #
(84) Secured but Lower Unsecured Rate (§.32(j)(2))
Field Value
Reporting Entity LCR Firm
PID O.D.7 (only collateralized deposits)
Product Matches PID
Counterparty Non‐Financial Corporate, PSE, Other
Supranational, Pension Fund, Bank, Broker‐Dealer,
Investment Company or Advisor, Financial Market
Utility, Other Supervised Non‐Bank Financial
Entity, Non‐Regulated Fund, Debt Issuing SPE,
Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class Level 2B or Non‐HQLA
Collateral Value #
Insured #
Trigger #
43
Rehypothecated N
Business Line #
Internal #
Internal Counterparty #
(85) Asset Exchange Post L1 Receive L1 (§.32(j)(3)(i))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 1 HQLA
Maturity Amount #
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL or <= 30 calendar days but not open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 1 HQLA
Collateral Value *
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
CID #
Counterparty #
G‐SIB #
(86) Asset Exchange Post L1 Receive L2A (§.32(j)(3)(ii))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 2A HQLA
Maturity Amount #
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL or <= 30 calendar days but not open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 1 HQLA
Collateral Value *
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
44
Business Line #
Settlement #
CID #
Counterparty #
G‐SIB #
(87) Asset Exchange Post L1 Receive L2B (§.32(j)(3)(iii))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 2B HQLA
Maturity Amount #
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL or <= 30 calendar days but not open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 1 HQLA
Collateral Value *
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Counterparty #
G‐SIB #
(88) Asset Exchange Post L1 Receive Non-HQLA (§.32(j)(3)(iv))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Non‐HQLA or No Collateral Pledged
Maturity Amount #
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL or <= 30 calendar days but not open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 1 HQLA
Collateral Value *
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
45
Business Line #
Settlement #
Counterparty #
G‐SIB #
(89) Asset Exchange Post L2A Receive L1 or L2A (§.32(j)(3)(v))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 1 HQLA or level 2A HQLA
Maturity Amount #
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL or <= 30 calendar days but not open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2A HQLA
Collateral Value *
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Counterparty #
G‐SIB #
(90) Asset Exchange Post L2A Receive L2B (§.32(j)(3)(vi))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 2B HQLA
Maturity Amount #
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL or <= 30 calendar days but not open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2A HQLA
Collateral Value *
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
46
Settlement #
Counterparty #
G‐SIB #
(91) Asset Exchange Post L2A Receive Non-HQLA (§.32(j)(3)(vii))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Non‐HQLA or No Collateral Pledged
Maturity Amount #
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL or <= 30 calendar days but not open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2A HQLA
Collateral Value *
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Counterparty #
G‐SIB
(92) Asset Exchange Post L2B Receive L1, L2A or L2B (§.32(j)(3)(viii))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product HQLA
Maturity Amount #
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL or <= 30 calendar days but not open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2B HQLA
Collateral Value *
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
47
Counterparty #
G‐SIB #
(93) Asset Exchange Post L2B Receive Non-HQLA (§.32(j)(3)(ix))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Non‐HQLA or No Collateral Pledged
Maturity Amount #
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL or <= 30 calendar days but not open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2B HQLA
Collateral Value *
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Counterparty #
G‐SIB #
(94) Asset Exchange Post Rehypothecated Assets >30 days Receive L1 (§.32(j)(3)(x))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 1 HQLA
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket > 30 calendar days or Open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Counterparty #
48
G‐SIB
(95) Asset Exchange Post Rehypothecated Assets >30 days Receive L2A (§.32(j)(3)(xi))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 2A HQLA
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket > 30 calendar days or Open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Counterparty #
G‐SIB
(96) Asset Exchange Post Rehypothecated Assets >30 days Receive L2B (§.32(j)(3)(xii))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 2B HQLA
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket > 30 calendar days or Open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Counterparty #
G‐SIB #
49
(97) Asset Exchange Post Rehypothecated Assets >30 days Receive Non-HQLA (§.32(j)(3)(xiii))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Non‐HQLA or No Collateral Pledged
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket > 30 calendar days or Open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Counterparty #
G‐SIB #
(98) Foreign Central Banking Borrowing (§.32(k))
Field Value
Reporting Entity LCR Firm
PID O.D.4, 5, 6, 7 (only collateralized deposits)
(foreign central banks where the sovereign has
established an LCR outflow rate; if the foreign
central bank has not established an outflow rate,
then the outflow should be calculated through
the secured funding tables above, see relevant
footnotes above)
Product Matches PID
Counterparty Central Bank
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Collateral Class *
Collateral Value *
Insured #
Trigger #
Rehypothecated #
Business Line #
Internal #
50
Internal Counterparty #
(99) Foreign Central Banking Borrowing (§.32(k))
Field Value
Reporting Entity LCR Firm
PID O.S.1, 2, 3 (foreign central banks where the
sovereign has established an LCR outflow rate; if
the foreign central bank has not established an
outflow rate, then the outflow should be
calculated through the secured funding tables
above, see relevant footnotes above)
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class *
Collateral Value *
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated #
Counterparty Central Bank
G‐SIB #
(100) Foreign Central Banking Borrowing (§.32(k))
Field Value
Reporting Entity LCR Firm
PID O.S.6 (foreign central banks where the sovereign
has established an LCR outflow rate; if the
foreign central bank has not established an
outflow rate, then the outflow should be
calculated through the secured funding tables
above)
Product Matches PID
Sub‐Product Specific central bank
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class *
Collateral Value *
51
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated #
Counterparty Central Bank
G‐SIB
(101) Other Contractual Outflows (§.32(l))
Field Value
Reporting Entity LCR Firm
PID O.O.19
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Forward Start Amount #
Forward Start Bucket #
Collateral Class #
Collateral Value #
Internal #
Internal Counterparty #
Business Line #
(102) Other Contractual Outflows (§.32(l))
Field Value
Reporting Entity LCR Firm
PID O.O.22
Product Matches PID
Counterparty Not Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Internal #
Internal Counterparty #
Business Line #
52
INFLOW VALUES
(103) Net Derivatives Cash Inflow Amount (§.33(b))
Field Value
Reporting Entity LCR Firm
PID I.O.7
Product Matches PID
Maturity Amount *
Maturity Bucket #
Forward Start Amount #
Forward Start Bucket #
Collateral Class #
Collateral Value #
Treasury Control #
Counterparty #
G‐SIB #
Internal #
Internal Counterparty #
Business Line #
(104) Retail Cash Inflow Amount (§.33(c))
Field Value
Reporting Entity LCR Firm
PID I.U.5 and 6
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days but not Open
Maturity Optionality #
Effective Maturity Bucket #
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
53
(105) Retail Cash Inflow Amount (§.33(c))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 5, 6, 7 and 8
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days but not Open
Maturity Optionality #
Effective Maturity Bucket #
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty Retail or Small Business
G‐SIB #
(106) Financial and Central Bank Cash Inflow Amount (§.33(d)(1))
Field Value
Reporting Entity LCR Firm
PID I.U.1, 2, 4, 5, 6 and 8
Product Matches PID
Counterparty Pension Fund, Bank, Broker‐Dealer, Investment
Company or Advisor, Financial Market Utility,
Other Supervised Non‐Bank Financial Entity, Non‐
Regulated Fund, Central Bank
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket #
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
54
(107) Financial and Central Bank Cash Inflow Amount (§.33(d)(1))
Field Value
Reporting Entity LCR Firm
PID I.A.3
Product Matches PID
Sub‐Product #
Market Value *
Lendable Value #
Maturity Bucket <= 30 calendar days but not Open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class A‐0‐Q
Treasury Control #
Accounting Designation #
Effective Maturity Bucket #
Encumbrance Type #
Internal Counterparty #
(108) Financial and Central Bank Cash Inflow Amount (§.33(d)(1))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 5, 6, 7 and 8
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket #
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Other
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty Pension Fund, Bank, Broker‐Dealer, Investment
Company or Advisor, Financial Market Utility,
Other Supervised Non‐Bank Financial Entity, Non‐
Regulated Fund, Central Bank
G‐SIB #
55
(109) Non-Financial Wholesale Cash Inflow Amount (§.33(d)(2))
Field Value
Reporting Entity LCR Firm
PID I.U.1, 2, and 6
Product Matches PID
Counterparty Non‐Financial Corporate, Sovereign, GSE, PSE,
MDB, Other Supranational, Debt Issuing SPE,
Other
G‐SIB #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket #
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
(110) Non-Financial Wholesale Cash Inflow Amount (§.33(d)(2))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 5, 6, 7 and 8
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket #
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Other
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty Non‐Financial Corporate, Sovereign, GSE, PSE,
MDB, Other Supranational, Debt Issuing SPE,
Other
G‐SIB #
56
(111) Securities Cash Inflow Amount (§.33(e))
Field Value
Reporting Entity LCR Firm
PID I.O.6 and I.O.8
Product Matches PID
Maturity Amount *
Maturity Bucket <= 30 calendar days but not Open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Non‐HQLA securities
Collateral Value #
Treasury Control #
Counterparty #
G‐SIB #
Internal #
Internal Counterparty #
Business Line #
(112) Securities Cash Inflow Amount (§.33(e))
Field Value
Reporting Entity LCR Firm
PID I.O.6 and I.O.8
Product Matches PID
Maturity Amount *
Maturity Bucket <= 30 calendar days but not Open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class HQLA
Collateral Value #
Treasury Control N
Counterparty #
G‐SIB #
Internal #
Internal Counterparty #
Business Line #
(113) Secured Lending when Asset Rehypothecated not returned within 30 days (§.33(f)(1)(i))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 5, and 6
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket > 30 calendar days or Open
Encumbrance Type #
57
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered N
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Counterparty Not Retail or Small Business
G‐SIB #
(114) Secured Lending when Asset Available for Return (§.33(f)(1)(ii))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 6, 7 and 8
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Non‐HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale lending under .33(d)
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty Not Retail or Small Business
G‐SIB #
(115) Secured Lending when Asset Available for Return (§.33(f)(1)(ii))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 6, 7 and 8
Product Matches PID
Sub‐Product #
58
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale lending under .33(d)
Unencumbered N
Treasury Control Y
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty Not Retail or Small Business
G‐SIB #
(116) Secured Lending when Asset Available for Return (§.33(f)(1)(ii))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 5, 6, 7 and 8
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale lending under .33(d)
Unencumbered #
Treasury Control N
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
59
Counterparty Not Retail or Small Business
G‐SIB #
(117) Secured Lending with L1 HQLA (§.33(f)(1)(iii))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 5, 6, 7 and 8
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days but not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 1 HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale lending under .33(d)
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty Not Retail or Small Business
G‐SIB #
(118) Secured Lending with L1 HQLA (§.33(f)(1)(iii))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 5, 6, 7 and 8
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 1 HQLA
60
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale lending under .33(d)
Unencumbered Y
Treasury Control Y
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty Not Retail or Small Business
G‐SIB #
(119) Secured Lending with L2A HQLA (§.33(f)(1)(iv))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 5, 6, 7 and 8
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days but not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2A HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale lending under .33(d)
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty Not Retail or Small Business
G‐SIB #
61
(120) Secured Lending with L2A HQLA (§.33(f)(1)(iv))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 5, 6, 7 and 8
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2A HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale lending under .33(d)
Unencumbered Y
Treasury Control Y
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty Not Retail or Small Business
G‐SIB #
(121) Secured Lending with L2B HQLA (§.33(f)(1)(v))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 5, 6, 7 and 8
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days but not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2B HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale lending under .33(d)
Unencumbered #
62
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty Not Retail or Small Business
G‐SIB #
(122) Secured Lending with L2B HQLA (§.33(f)(1)(v))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 5, 6, 7 and 8
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket NULL
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2B HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale lending under .33(d)
Unencumbered Y
Treasury Control Y
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty Not Retail or Small Business
G‐SIB #
(123) Secured Lending with Non-HQLA (§.33(f)(1)(vi))
Field Value
Reporting Entity LCR Firm
PID I.S.1, 2, 3, 6, 7 and 8
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days but not Open
63
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Non‐HQLA
Collateral Value To the extent the Collateral Value is less than the
Maturity Amount, treat the Maturity Amount less
the Collateral Value amount as unsecured
wholesale lending under .33(d)
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty Not Retail or Small Business
G‐SIB #
(124) Margin Loans for Non-HQLA (§.33(f)(1)(vii))
Field Value
Reporting Entity LCR Firm
PID I.S.5
Product Matches PID
Sub‐Product #
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days or NULL but not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Non‐HQLA
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty Not Retail or Small Business
G‐SIB #
64
(125) Asset Exchange Collateral Rehypothecated and Not Returning within 30 days (§.33(f)(2)(i))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product *
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket > 30 calendar days or Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty #
G‐SIB #
(126) Asset Exchange Post L1 Receive L1 (§.33(f)(2)(ii))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 1 HQLA
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days or NULL but not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 1 HQLA
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
65
Counterparty #
G‐SIB #
(127) Asset Exchange Post L2A Receive L1 (§.33(f)(2)(iii))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 1 HQLA
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days or NULL but not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2A HQLA
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty #
G‐SIB #
(128) Asset Exchange Post L2B Receive L1 (§.33(f)(2)(iv))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 1 HQLA
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days or NULL but not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2B HQLA
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
66
Risk Weight #
Business Line #
Settlement #
Counterparty #
G‐SIB #
(129) Asset Exchange Post Non-HQLA Receive L1 (§.33(f)(2)(v))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 1 HQLA
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days or NULL but not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Non‐HQLA or Other
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty #
G‐SIB #
(130) Asset Exchange Post L2A Receive L2A (§.33(f)(2)(vi))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 2A HQLA
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days or NULL but not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2A HQLA
Collateral Value #
Unencumbered #
67
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty #
G‐SIB #
(131) Asset Exchange Post L2B Receive L2A (§.33(f)(2)(vii))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 2A HQLA
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days or NULL but not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2B HQLA
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty #
G‐SIB #
(132) Asset Exchange Post Non-HQLA Receive L2A (§.33(f)(2)(viii))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 2A HQLA
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days or NULL but not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
68
Collateral Class Non‐HQLA or Other
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty #
G‐SIB #
(133) Asset Exchange Post L2B Receive L2B (§.33(f)(2)(ix))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 2B HQLA
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days or NULL but not Open
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2B HQLA
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty #
G‐SIB #
(134) Asset Exchange Post Non-HQLA Receive L2B (§.33(f)(2)(x))
Field Value
Reporting Entity LCR Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 2B HQLA
Maturity Amount *
Maturity Bucket <= 30 calendar days
Maturity Optionality #
Effective Maturity Bucket <= 30 calendar days or NULL but not Open
69
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Non‐HQLA or Other
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty #
G‐SIB #
(135) Broker-Dealer Segregated Account Inflow Amount (§.33(g))
Field Value
Reporting Entity LCR Firm
PID I.O.5
Product Matches PID
Maturity Amount *
Maturity Bucket <= 30 calendar days
Forward Start Amount #
Forward Start Bucket #
Collateral Class #
Collateral Value #
Treasury Control #
Counterparty #
G‐SIB #
Internal #
Internal Counterparty #
Business Line #
(136) Other Cash Inflow Amount (§.33(h))
Field Value
Reporting Entity LCR Firm
PID I.O.9
Product Matches PID
Maturity Amount *
Maturity Bucket <= 30 calendar days but not Open
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Treasury Control #
Counterparty #
G‐SIB #
70
Internal #
Internal Counterparty #
Business Line #
71
APPENDIX VII: Short-Term Wholesale Funding (STWF) to FR 2052a Mapping
Staff of the Board of Governors of the Federal Reserve System (Board) has developed this document to
assist reporting firms that must file Schedule G or N (STWF Indicator) of the FR Y‐15 (Banking
Organization Systemic Risk Report) in mapping the specific line items on Schedule G or N to the unique
data identifiers reported on the FR 2052a. This mapping document is not a part of any regulation nor a
component of official guidance related to the FR 2052a or FR Y‐15 reports. Firms may use this mapping
document solely at their discretion. From time to time, to ensure accuracy, an updated mapping
document may be published and reporting firms will be notified of these changes.
Key
* Values relevant to Schedule G or N of the FR Y‐15
# Values not relevant to Schedule G or N of the FR Y‐15
NULL Should not have an associated value
FR 2052a to FR Y-15, Schedule G Map
Item 1.a: Funding secured by level 1 liquid assets (sum of tables 1‐3)
(1) O.D. PIDs for item 1.a
Field Value
Reporting Entity FR Y‐15 Firm
PID O.D.5, 6, 8, 9, 10, 11, 13, 14 ,15
Product Matches PID
Counterparty Not Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Collateral Class Level 1 HQLA
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
1
(2) O.S. PIDs for item 1.a
Field Value
Reporting Entity FR Y‐15 Firm
PID O.S.1, 2, 3, 5, 6, 7 and 11
Product Matches PID
Sub‐product For O.S.7, cannot be Unsettled (Regular Way) or
Unsettled (Forward), # otherwise
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 1 HQLA
Collateral Value #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Rehypothecated #
Counterparty Not Retail or Small Business
G‐SIB #
(3) O.W. PIDs for item 1.a
Field Value
Reporting Entity FR Y‐15 Firm
Currency *
Converted #
PID O.W.1‐7, 9‐19
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Collateral Class Level 1 HQLA
Collateral Value #
2
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
Item 1.b: Retail brokered deposits and sweeps (table 4)
(4) O.D. PIDs for item 1.b
Field Value
Reporting Entity FR Y‐15 Firm
PID O.D.8, 9, 10, 11 and 13
Product Matches PID
Counterparty Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
Item 1.c: Unsecured wholesale funding obtained outside of the financial sector (sum of
tables 5 and 6)
(5) O.D. PIDs for item 1.c
Field Value
Reporting Entity FR Y‐15 Firm
PID O.D.5, 6, 8, 9, 10, 11, 13, 14, 15
Product Matches PID
CID Matches Counterparty
Counterparty Non‐Financial Corporate, Sovereign, Central
Bank, GSE, PSE, MDB, Other Supranational, Debt
Issuing SPE, Other
Maturity Amount *
3
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Collateral Class NULL or Other
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Loss Absorbency #
Business Line #
Internal #
Internal Counterparty #
(6) O.W. PIDs for item 1.c
Field Value
Reporting Entity FR Y‐15 Firm
PID O.W.9, 10, 17, 18, 19
Product Matches PID
Counterparty Non‐Financial Corporate, Sovereign, Central
Bank, GSE, PSE, MDB, Other Supranational, Debt
Issuing SPE, Other
G‐SIB #
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Collateral Class NULL or Other
Collateral Value NULL
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
(7) O.S. PIDs for item 1.c
Field Value
Reporting Entity FR Y‐15 Firm
PID O.S.1, 2, 3, 5, 6, 7 and 11
Product Matches PID
Sub‐product For O.S.7, cannot be Unsettled (Regular Way) or
Unsettled (Forward), # otherwise
Maturity Amount *
4
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Other
Collateral Value #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Rehypothecated #
Counterparty Non‐Financial Corporate, Sovereign, Central
Bank, GSE, PSE, MDB, Other Supranational, Debt
Issuing SPE, Other
G‐SIB #
Item 1.d: Firm short positions involving level 2B liquid assets or non‐HQLA (table 7)
(8) O.S. PIDs for item 1.d
Field Value
Reporting Entity FR Y‐15 Firm
Currency *
Converted #
PID O.S.8
Product Matches PID
Sub‐Product External Cash Transaction, External Non‐Cash
Transaction, Customer Longs
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Forward Start Amount #
Forward Start Bucket #
Collateral Class Level 2B HQLA or Non‐HQLA
Collateral Value #
Collateral Currency #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
5
Settlement #
Rehypothecated #
Counterparty #
G‐SIB #
Item 2.a: Funding secured by level 2A liquid assets (sum of tables 8‐10)
(9) O.D. PIDs for item 2.a
Field Value
Reporting Entity FR Y‐15 Firm
PID O.D.5, 6, 8, 9, 10, 11, 13, 14, 15
Product Matches PID
Counterparty Not Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Collateral Class Level 2A HQLA
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(10) O.S. PIDs for item 2.a
Field Value
Reporting Entity FR Y‐15 Firm
PID O.S.1, 2, 3, 5, 6, 7 and 11
Product Matches PID
Sub‐Product For O.S.7, cannot be Unsettled (Regular Way) or
Unsettled (Forward), # otherwise
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2A HQLA
6
Collateral Value #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated #
Counterparty Not Retail or Small Business
G‐SIB #
(11) O.W. PIDs for item 2.a
Field Value
Reporting Entity FR Y‐15 Firm
PID O.W.1‐7, 9‐19
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Collateral Class Level 2A HQLA
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
Item 2.b: Covered asset exchanges (level 1 to level 2A) (table 11)
(12) O.S. PIDs for item 2.b
Field Value
Reporting Entity FR Y‐15 Firm
PID O.S.4
Product Matches PID
Sub‐Product Level 1 Received
Maturity Amount *
7
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2A HQLA
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated #
Counterparty #
G‐SIB #
Item 3.a: Funding secured by level 2B liquid assets (sum of tables 12‐14)
(13) O.D. PIDs for item 3.a
Field Value
Reporting Entity FR Y‐15 Firm
PID O.D.5, 6, 8, 9, 10, 11, 13, 14 and 15
Product Matches PID
Counterparty Not Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Collateral Class Level 2B HQLA
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
8
(14) O.S. PIDs for item 3.a
Field Value
Reporting Entity FR Y‐15 Firm
PID O.S.1, 2, 3, 5, 6, 7 and 11
Product Matches PID
Sub‐Product For O.S.7, cannot be Unsettled (Regular Way) or
Unsettled (Forward), # otherwise
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2B HQLA
Collateral Value #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated #
Counterparty Not Retail or Small Business
G‐SIB #
(15) O.W. PIDs for item 3.a
Field Value
Reporting Entity FR Y‐15 Firm
PID O.W.1‐7, 9‐19
Product Matches PID
Counterparty #
G‐SIB #
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Collateral Class Level 2B HQLA
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
9
Internal Counterparty #
Loss Absorbency #
Business Line #
Item 3.b: Other covered asset exchanges (table 15)
(16) O.S. PIDs for item 3.b
Field Value
Reporting Entity FR Y‐15 Firm
PID I.S.4
Product Matches PID
Sub‐Product Level 2b Pledged, Non‐HQLA Pledged, No
Collateral Pledged
Maturity Amount #
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Effective Maturity Bucket #
Encumbrance Type #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class For Sub‐Product value of Level 2b Pledged: Level 1
or Level 2A HQLA; For Sub‐Product values of Non‐
HQLA Pledged and No Collateral Pledged: all HQLA
Collateral Value *
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
Counterparty #
G‐SIB #
Item 3.c: Unsecured wholesale funding obtained within the financial sector (sum of tables
16 and 17)
(17) O.D. PIDs for item 3.c
Field Value
Reporting Entity FR Y‐15 Firm
PID O.D.5, 6, 8, 9, 10, 11, 13, 14, 15
Product Matches PID
Counterparty Pension Fund, Bank, Broker‐Dealer, Investment
Company or Advisor, Financial Market Utility,
Other Supervised Non‐Bank Financial Entity, Non‐
10
Regulated Fund
G‐SIB #
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Collateral Class NULL or Other
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(18) O.W. PIDs for item 3.c
Field Value
Reporting Entity FR Y‐15 Firm
PID O.W.8‐19
Product Matches PID
Counterparty For O.W.8, 11‐16: #; For O.W.9, 10, 17, 18, 19:
Pension Fund, Bank, Broker‐Dealer, Investment
Company or Advisor, Financial Market Utility,
Other Supervised Non‐Bank Financial Entity,
Non‐Regulated Fund, or NULL
G‐SIB #
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Collateral Class NULL
Collateral Value NULL
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
(19) O.S. PIDs for item 3.c
Field Value
Reporting Entity FR Y‐15 Firm
PID O.S.1, 2, 3, 7 and 11
11
Product Matches PID
Sub‐Product For O.S.7, cannot be Unsettled (Regular Way) or
Unsettled (Forward), # otherwise
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Other
Collateral Value #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated #
Counterparty Pension Fund, Bank, Broker‐Dealer, Investment
Company or Advisor, Financial Market Utility,
Other Supervised Non‐Bank Financial Entity, Non‐
Regulated Fund
G‐SIB #
Item 4: All other components of short‐term wholesale funding (sum of tables 18‐20)
(20) O.D. PIDs for item 4
Field Value
Reporting Entity FR Y‐15 Firm
PID O.D.5, 6, 8, 9, 10, 11, 13, 14, 15
Product Matches PID
Counterparty Not Retail or Small Business
G‐SIB #
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Collateral Class Non‐HQLA
Collateral Value
Insured #
Trigger #
12
Rehypothecated #
Business Line #
Internal #
Internal Counterparty #
(21) O.S. PIDs for item 4
Field Value
Reporting Entity FR Y‐15 Firm
PID O.S.1, 2, 5, 6, 7 and 11
Product Matches PID
Sub‐Product For O.S.7, cannot be Unsettled (Regular Way) or
Unsettled (Forward), # otherwise
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Non‐HQLA
Collateral Value #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Settlement #
Rehypothecated #
Counterparty Not Retail or Small Business
G‐SIB #
(22) O.W. PIDs for item 4
Field Value
Reporting Entity FR Y‐15 Firm
PID O.W.1‐7
Product Matches PID
Counterparty #
Maturity Amount *
Maturity Bucket Column A: <=30 days
Column B: 31 to 90 days
Column C: 91 to 180 days
Column D: 181 days to 1 yr
Maturity Optionality #
Collateral Class Non‐HQLA
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
13
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
14
APPENDIX VIII: NSFR to FR 2052a Mapping
Staff of the Board of Governors of the Federal Reserve System (Board) has developed this document
to assist reporting firms subject to the Liquidity Risk Measurement Standards (LRM standards)1 in
mapping the provisions applicable to the Net Stable Funding Ratio (NSFR) to the unique data
identifiers reported on FR 2052a. This mapping document is not a part of the LRM Standards nor a
component of the FR 2052a report. Firms may use this mapping document solely at their discretion.
From time to time, to ensure accuracy, an updated mapping document may be published and
reporting firms will be notified of these changes.
Reference Key
Reference Meaning
* Values relevant to the NSFR (e.g., value field aggregated to determine ASF
or RSF amount)
# Values not relevant to the NSFR
NULL Should not have an associated value
Level 1 HQLA [Collateral Class] values of: A-0-Q, A-1-Q, A-2-Q, A-3-Q, A-4-Q, A-5-Q, S-1-Q,
S-2-Q, S-3-Q, S-4-Q, CB-1-Q, CB-2-Q
Level 2A HQLA [Collateral Class] values of: G-1-Q, G-2-Q, G-3-Q, S-5-Q, S-6-Q, S-7-Q, CB-3-Q
Level 2B HQLA [Collateral Class] values of: E-1-Q, E-2-Q, IG-1-Q, IG-2-Q
HQLA [Collateral Class] values listed in Level 1, Level 2A and Level 2B HQLA above
Financial Sector Entity [Counterparty] values of: Pension Fund, Bank, Broker-Dealer, Investment
Company or Advisor, Financial Market Utility, Other Supervised Non-Bank
Financial Entity, Non-Regulated Fund
Non-Financial [Counterparty] values of: Non-Financial Corporate, Sovereign, Government
Wholesale Entity Sponsored Entity, Public Sector Entity, Multilateral Development Bank,
Other Supranational, Debt Issuing SPE, Other
NSFR Calculation
𝐴𝐴𝑁𝑁𝑁𝑁 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎
𝑁𝑁𝑁𝑁𝑁𝑁𝑁𝑁 =
𝑁𝑁𝑁𝑁𝑁𝑁 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎
𝐴𝐴𝑁𝑁𝑁𝑁 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 = �𝐴𝐴𝑁𝑁𝑁𝑁 𝐴𝐴𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 𝑉𝑉𝑎𝑎𝑉𝑉𝑎𝑎𝑉𝑉𝑉𝑉𝑎𝑎 ∗𝐴𝐴𝑁𝑁𝑁𝑁 𝑓𝑓𝑎𝑎𝑓𝑓𝑎𝑎𝑎𝑎𝑓𝑓𝑎𝑎
Where “a” corre−spo 𝐷𝐷n𝑉𝑉d𝐷𝐷s 𝑎𝑎to𝑓𝑓 𝑎𝑎e𝐷𝐷a𝑎𝑎c𝑎𝑎h 𝑎𝑎 m𝑓𝑓a 𝑎𝑎p𝑎𝑎p𝑎𝑎in 𝑎𝑎g𝑓𝑓 t𝑎𝑎a𝑎𝑎b𝑉𝑉le𝑓𝑓 𝑉𝑉ID𝑓𝑓𝑓𝑓 i𝑎𝑎n 𝑡𝑡th𝑉𝑉𝑉𝑉e 𝑉𝑉A𝑒𝑒S𝑓𝑓F𝑉𝑉 A𝑉𝑉𝑉𝑉m 𝑉𝑉o𝑎𝑎u𝑡𝑡n𝑉𝑉t 𝐷𝐷V𝐷𝐷a𝐷𝐷𝑎𝑎lu𝑓𝑓e𝑠𝑠s 𝑉𝑉b𝑎𝑎e𝑎𝑎lo𝑡𝑡w𝑉𝑉𝑉𝑉 𝑓𝑓𝑎𝑎𝑎𝑎𝐷𝐷𝐷𝐷𝑎𝑎𝑓𝑓 (§.109)
𝑁𝑁𝑁𝑁𝑁𝑁 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 = 𝑁𝑁𝑎𝑎𝑎𝑎 𝐷𝐷𝑉𝑉𝑓𝑓𝐷𝐷𝑑𝑑𝑎𝑎𝑎𝑎𝐷𝐷𝑑𝑑𝑉𝑉 𝑁𝑁𝑁𝑁𝑁𝑁 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 + 𝐷𝐷𝑉𝑉𝑓𝑓𝐷𝐷𝑑𝑑𝑎𝑎𝑎𝑎𝐷𝐷𝑑𝑑𝑉𝑉 𝑁𝑁𝑁𝑁𝑁𝑁 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎
1 Refer to LRM Standards as defined in the FR 2052a instructions.
1
𝑁𝑁𝑎𝑎𝑎𝑎 𝐷𝐷𝑉𝑉𝑓𝑓𝐷𝐷𝑑𝑑𝑎𝑎𝑎𝑎𝐷𝐷𝑑𝑑𝑉𝑉 𝑁𝑁𝑁𝑁𝑁𝑁 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 = �𝑁𝑁𝑁𝑁𝑁𝑁 𝐴𝐴𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 𝑉𝑉𝑎𝑎𝑉𝑉𝑎𝑎𝑉𝑉𝑉𝑉𝑟𝑟 ∗ 𝑁𝑁𝑁𝑁𝑁𝑁 𝑓𝑓𝑎𝑎𝑓𝑓𝑎𝑎𝑎𝑎𝑓𝑓𝑟𝑟
Where “r” corresponds to each mapping table ID in the RSF Amount Values section below, excluding the
subsection “Calculation of NSFR derivatives amounts (§.107)”.
𝐷𝐷𝑉𝑉𝑓𝑓𝐷𝐷𝑑𝑑𝑎𝑎𝑎𝑎𝐷𝐷𝑑𝑑𝑉𝑉 𝑁𝑁𝑁𝑁𝑁𝑁 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎
= 𝐶𝐶𝑎𝑎𝑓𝑓𝑓𝑓𝑉𝑉𝑎𝑎𝑎𝑎 𝑎𝑎𝑓𝑓𝑎𝑎𝑎𝑎𝑉𝑉𝑎𝑎𝑓𝑓𝑎𝑎𝐷𝐷𝑎𝑎𝑎𝑎 𝑁𝑁𝑁𝑁𝑁𝑁 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 ∗ 1 + 𝑃𝑃𝑎𝑎𝑎𝑎𝑉𝑉𝑎𝑎𝑎𝑎𝐷𝐷𝑎𝑎𝑉𝑉 𝑑𝑑𝑎𝑎𝑉𝑉𝑎𝑎𝑎𝑎𝑎𝑎𝐷𝐷𝑎𝑎𝑎𝑎 𝑓𝑓ℎ𝑎𝑎𝑎𝑎𝑓𝑓𝑉𝑉𝑉𝑉 ∗ 0.05
+ (𝐶𝐶𝑎𝑎𝑎𝑎𝑎𝑎𝑓𝑓𝐷𝐷𝑡𝑡𝑎𝑎𝑎𝑎𝐷𝐷𝑎𝑎𝑎𝑎𝑉𝑉 𝑎𝑎𝑎𝑎 𝐶𝐶𝐶𝐶𝑃𝑃 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑉𝑉𝐷𝐷𝑚𝑚𝑉𝑉𝐷𝐷 𝑉𝑉𝑎𝑎𝑉𝑉𝑉𝑉 𝑉𝑉ℎ𝑎𝑎𝑓𝑓𝐷𝐷𝑎𝑎𝑓𝑓 𝑎𝑎𝑓𝑓𝑓𝑓𝑎𝑎𝑎𝑎𝑓𝑓𝑉𝑉𝑎𝑎𝑉𝑉𝑎𝑎𝑎𝑎𝑉𝑉
+ 𝐼𝐼𝑎𝑎𝐷𝐷𝑎𝑎𝐷𝐷𝑎𝑎𝑉𝑉 𝑎𝑎𝑎𝑎𝑓𝑓𝑓𝑓𝐷𝐷𝑎𝑎 𝑝𝑝𝑓𝑓𝑎𝑎𝑑𝑑𝐷𝐷𝐷𝐷𝑉𝑉𝐷𝐷) ∗ 0.85
+ 𝐴𝐴𝐷𝐷𝐷𝐷𝐷𝐷𝑎𝑎𝐷𝐷𝑎𝑎𝑎𝑎𝑎𝑎𝑉𝑉 𝑁𝑁𝑁𝑁𝑁𝑁 𝑓𝑓𝑎𝑎𝑓𝑓 100% 𝑁𝑁𝑁𝑁𝑁𝑁 𝑎𝑎𝑉𝑉𝑉𝑉𝑉𝑉𝑎𝑎𝑉𝑉 𝑝𝑝𝑉𝑉𝑉𝑉𝐷𝐷𝑓𝑓𝑉𝑉𝐷𝐷 𝑓𝑓𝑎𝑎𝑓𝑓 𝐼𝐼𝐼𝐼 𝑎𝑎𝑎𝑎 𝐷𝐷 𝐷𝐷𝑁𝑁𝐶𝐶 ∗ 0.15
𝐶𝐶𝑎𝑎𝑓𝑓𝑓𝑓𝑉𝑉𝑎𝑎𝑎𝑎 𝑎𝑎𝑓𝑓𝑎𝑎𝑎𝑎𝑉𝑉𝑎𝑎𝑓𝑓𝑎𝑎𝐷𝐷𝑎𝑎𝑎𝑎 𝑁𝑁𝑁𝑁𝑁𝑁 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎 = 𝐼𝐼𝐴𝐴𝑀𝑀[ 0,(𝐷𝐷110− 𝐷𝐷111)−(𝐷𝐷112− 𝐷𝐷113)]
𝑃𝑃𝑎𝑎𝑎𝑎𝑉𝑉𝑎𝑎𝑎𝑎𝐷𝐷𝑎𝑎𝑉𝑉 𝑑𝑑𝑎𝑎𝑉𝑉𝑎𝑎𝑎𝑎𝑎𝑎𝐷𝐷𝑎𝑎𝑎𝑎 𝑓𝑓ℎ𝑎𝑎𝑎𝑎𝑓𝑓𝑉𝑉𝑉𝑉 = 𝐷𝐷102+𝐷𝐷103
𝐶𝐶 𝑎𝑎𝑎𝑎𝑎𝑎𝑓𝑓𝐷𝐷𝑡𝑡𝑎𝑎𝑎𝑎𝐷𝐷𝑎𝑎𝑎𝑎𝑉𝑉 𝑎𝑎𝑎𝑎 𝐶𝐶𝐶𝐶𝑃𝑃 𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑎𝑉𝑉𝐷𝐷𝑚𝑚𝑉𝑉𝐷𝐷 𝑉𝑉𝑎𝑎𝑉𝑉𝑉𝑉 𝑉𝑉ℎ𝑎𝑎𝑓𝑓𝐷𝐷𝑎𝑎𝑓𝑓 𝑎𝑎𝑓𝑓𝑓𝑓𝑎𝑎𝑎𝑎𝑓𝑓𝑉𝑉𝑎𝑎𝑉𝑉𝑎𝑎𝑎𝑎𝑉𝑉 + 𝐼𝐼𝑎𝑎𝐷𝐷𝑎𝑎𝐷𝐷𝑎𝑎𝑉𝑉 𝑎𝑎𝑎𝑎𝑓𝑓𝑓𝑓𝐷𝐷𝑎𝑎 𝑝𝑝𝑓𝑓𝑎𝑎𝑑𝑑𝐷𝐷𝐷𝐷𝑉𝑉𝐷𝐷
= 𝐷𝐷104+𝐷𝐷105
109
𝐴𝐴𝐷𝐷𝐷𝐷𝐷𝐷𝑎𝑎𝐷𝐷𝑎𝑎𝑎𝑎𝑎𝑎𝑉𝑉 𝑁𝑁𝑁𝑁𝑁𝑁 𝑓𝑓𝑎𝑎𝑓𝑓 100% 𝑁𝑁𝑁𝑁𝑁𝑁 𝑎𝑎𝑉𝑉𝑉𝑉𝑉𝑉𝑎𝑎𝑉𝑉 𝑝𝑝𝑉𝑉𝑉𝑉𝐷𝐷𝑓𝑓𝑉𝑉𝐷𝐷 𝑓𝑓𝑎𝑎𝑓𝑓 𝐼𝐼𝐼𝐼 𝑎𝑎𝑎𝑎𝐷𝐷 𝐷𝐷𝑁𝑁𝐶𝐶 = � 𝐷𝐷𝑑𝑑
𝑑𝑑=106
Where “i” refers to a mapping table ID below corresponding to the specific subscript
Rules of construction (§.102)
To conform to the accounting balance sheet and accommodate the netting of certain transactions
permissible under §.102(b), the FR 2052a includes two products that should be used to adjust the gross
balances mapped to the ASF and RSF tables in this document.
• For securities financing transactions, negative [Maturity Amount] values should be reported
using product S.B.5: Counterparty Netting to reduce the ASF and RSF tables below
corresponding to secured funding and lending transactions where the criteria referenced in
§.102(b) are met.
• For all other components of the balance sheet, positive or negative [Market Value] or [Maturity
Amount] values should be reported using product S.B.6: Carrying Value Adjustment to increase
or decrease the cumulative values otherwise reported under FR 2052a products such that the
cumulative total including these adjustments aligns with the balance sheet carrying value.
Examples could include: adjustments to the [Market Value] of securities to align with the book
value (e.g., for positions booked as held-to-maturity); adjustments to reduce the [Maturity
Amount] of interest and dividend payable and receivable amounts to align with accrued interest
accounts represented on the balance sheet; and adjustments to the [Maturity Amount] of loans
that are accounted for at fair value.
In both cases, the additional fields in the S.B table structure should be used to appropriately map these
adjustments to each respective ASF and RSF element identified in the mapping tables below.
2
ASF Amount Values
NSFR regulatory capital elements and NSFR liabilities assigned a 100 percent ASF factor
(§.104(a))
(1) NSFR regulatory capital element (§.104(a)(1))
Field Value
Reporting Entity NSFR Entity
Collection Reference #
PID S.B.1
Product Matches PID
Sub-Product #
Product Reference #
Sub-Product Reference #
Collateral Class #
Maturity Bucket #
Effective Maturity Bucket #
Encumbrance Type #
Market Value #
Maturity Amount *
Collateral Value #
Counterparty #
G-SIB #
Risk Weight #
Internal #
Internal Counterparty #
(2) Subordinated debt qualifying as an NSFR regulatory capital element (§.104(a)(1))
Field Value
Reporting Entity NSFR Entity
PID O.W.11, 12
Product Matches PID
Counterparty #
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency Capital
Business Line #
3
(3) Wholesale debt instruments maturing in ≥ 1 year, excluding deposits and securities financing
transactions (§.104(a)(2))
Field Value
Reporting Entity NSFR Entity
PID O.W.1 – 13, 16, 17, 19
Product Matches PID
Counterparty Not Retail or Small Business
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency Not Capital
Business Line #
(4) Wholesale deposits maturing in ≥ 1 year (§.104(a)(2))
Field Value
Reporting Entity NSFR Entity
PID O.D.5, 6, 8, 10, 11, 13, 14, 15
Product Matches PID
Counterparty Not Retail or Small Business
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
4
(5) Wholesale securities financing transactions maturing in ≥ 1 year (§.104(a)(2))
Field Value
Reporting Entity NSFR Entity
PID O.S.1, 2, 3, 5, 6, 11
Product Matches PID
Sub-Product Not FRFF
Counterparty Not Retail or Small Business
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Treasury Control #
Internal #
Internal Counterparty #
Settlement #
Rehypothecated #
Business Line #
(6) Wholesale interest payable in ≥ 1 year (§.104(a)(2))
Field Value
Reporting Entity NSFR Entity
PID O.O.19
Product Matches PID
Counterparty Not Retail or Small Business
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Business Line #
(7) Other liabilities maturing in ≥ 1 year (§.104(a)(2))
Field Value
Reporting Entity NSFR Entity
Collection Reference #
PID S.B.2
5
Product Matches PID
Sub-Product #
Product Reference #
Sub-Product Reference #
Collateral Class #
Maturity Bucket ≥ 1 Year
Effective Maturity Bucket #
Encumbrance Type #
Market Value #
Maturity Amount *
Collateral Value #
Counterparty Not Retail or Small Business
G-SIB #
Risk Weight #
Internal #
Internal Counterparty #
NSFR liabilities assigned a 95 percent ASF factor (§.104(b))
(8) Stable retail deposits, excluding sweeps (§.104(b)(1))
Field Value
Reporting Entity NSFR Entity
PID O.D.1, 2
Product Matches PID
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured FDIC
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
(9) Insured stable affiliated retail sweep deposits (§.104(b)(2))
Field Value
Reporting Entity NSFR Entity
PID O.D.9
Product Matches PID
Counterparty Retail, Small Business
6
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured FDIC
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
NSFR liabilities assigned a 90 percent ASF factor (§.104(c))
(10) Not FDIC insured transactional and non-relationship retail deposits, excluding sweeps and
brokered deposits (§.104(c)(1))
Field Value
Reporting Entity NSFR Entity
PID O.D.1, 2
Product Matches PID
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured Not FDIC
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
(11) Non-relationship retail deposits, excluding sweeps and brokered deposits (§.104(c)(1))
Field Value
Reporting Entity NSFR Entity
PID O.D.3, O.D.14
Product Matches PID
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket #
7
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
(12) Insured reciprocal brokered deposits (§.104(c)(2))
Field Value
Reporting Entity NSFR Entity
PID O.D.13
Product Matches PID
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured FDIC
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
(13) Not FDIC insured affiliated relationship sweep deposits (§.104(c)(3))
Field Value
Reporting Entity NSFR Entity
PID O.D.9
Product Matches PID
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured Not FDIC
Trigger #
Rehypothecated #
8
Internal #
Internal Counterparty #
Business Line #
(14) Less stable affiliated retail sweep deposits (§.104(c)(3))
Field Value
Reporting Entity NSFR Entity
PID O.D.10
Product Matches PID
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
(15) Non-reciprocal brokered deposits maturing in ≥ 1 year (§.104(c)(4))
Field Value
Reporting Entity NSFR Entity
PID O.D.8
Product Matches PID
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
9
NSFR liabilities assigned a 50 percent ASF factor (§.104(d))
(16) Unsecured wholesale non-deposit funding from non-financials maturing in < 1 year
(§.104(d)(1))
Field Value
Reporting Entity NSFR Entity
PID O.W.9, 10, 17, 18, 19
Product Matches PID
Counterparty Non-Financial Wholesale Entity
G-SIB #
Maturity Amount *
Maturity Bucket < 1 Year2
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
(17) Unsecured wholesale deposit funding from non-financials maturing in < 1 year
(§.104(d)(1))
Field Value
Reporting Entity NSFR Entity
PID O.D.5, 6, 8, 10, 11, 13, 14, 15
Product Matches PID
Counterparty Non-Financial Wholesale Entity
G-SIB #
Maturity Amount *
Maturity Bucket < 1 Year
Maturity Optionality #
Collateral Class NULL
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
2 In general, a Maturity Bucket condition of “less than” a certain time horizon without an explicit lower bound
includes the “Open” maturity bucket unless stated otherwise (i.e., with the exclusion “but not Open”).
10
(18) Securities financing transactions with non-financials maturing in < 1 year (§.104(d)(2))
Field Value
Reporting Entity NSFR Entity
PID O.S.1, 2, 3, 5, 7, 11
Product Matches PID
Sub-Product #
Counterparty Non-Financial Wholesale Entity
G-SIB #
Maturity Amount *
Maturity Bucket < 1 Year
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Treasury Control #
Internal #
Internal Counterparty #
Settlement #
Rehypothecated #
Business Line #
(19) Collateralized deposits from non-financials maturing in < 1 year (§.104(d)(2))
Field Value
Reporting Entity NSFR Entity
PID O.D.5, 6, 8, 10, 11, 13, 14, 15
Product Matches PID
Counterparty Non-Financial Wholesale Entity
G-SIB #
Maturity Amount *
Maturity Bucket < 1 Year
Maturity Optionality #
Collateral Class Not NULL
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
11
(20) Unsecured wholesale non-deposit funding from financials and central banks maturing in ≥ 6
months, but < 1 year (§.104(d)(3))
Field Value
Reporting Entity NSFR Entity
PID O.W.9, 10, 17, 18, 19
Product Matches PID
Counterparty Financial Sector Entity, Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 6 Months, < 1 Year
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
(21) Unsecured wholesale deposit funding from financials and central banks maturing in ≥ 6 months,
but < 1 year (§.104(d)(3))
Field Value
Reporting Entity NSFR Entity
PID O.D.5, 6, 8, 10, 11, 13, 14, 15
Product Matches PID
Counterparty Financial Sector Entity, Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 6 Months, < 1 Year
Maturity Optionality #
Collateral Class NULL
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
12
(22) Securities financing transactions with financials and central banks maturing in ≥ 6 months,
but < 1 year (§.104(d)(4))
Field Value
Reporting Entity NSFR Entity
PID O.S.1, 2, 3, 6, 11
Product Matches PID
Sub-Product Not FRFF
Counterparty Financial Sector Entity, Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 6 Months, < 1 Year
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Treasury Control #
Internal #
Internal Counterparty #
Settlement #
Rehypothecated #
Business Line #
(23) Secured wholesale deposit funding from financials and central banks maturing in ≥ 6 months, but
< 1 year (§.104(d)(4))
Field Value
Reporting Entity NSFR Entity
PID O.D.5, 6, 8, 10, 11, 13, 14, 15
Product Matches PID
Counterparty Financial Sector Entity, Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 6 Months, < 1 Year
Maturity Optionality #
Collateral Class Not NULL
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
13
(24) Securities issued maturing in ≥ 6 months, but < 1 year (§.104(d)(5))
Field Value
Reporting Entity NSFR Entity
PID O.W.1 – 8, 11 – 16
Product Matches PID
Counterparty #
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 6 Months, < 1 Year
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
(25) Operational deposits (§.104(d)(6))
Field Value
Reporting Entity NSFR Entity
PID O.D.4, 7
Product Matches PID
Counterparty #
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
(26) Non-reciprocal brokered retail deposits in transactional accounts (§.104(d)(7))
Field Value
Reporting Entity NSFR Entity
PID O.D.8
Product Matches PID
Counterparty Retail, Small Business
14
G-SIB #
Maturity Amount *
Maturity Bucket Open
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
(27) Non-affiliated retail sweep deposits (§.104(d)(8))
Field Value
Reporting Entity NSFR Entity
PID O.D.11
Product Matches PID
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
(28) Other unsecured funding from retail customers (§.104(d)(9))
Field Value
Reporting Entity NSFR Entity
PID O.W.18, 19
Product Matches PID
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
15
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
(29) Other secured funding from retail customers (§.104(d)(9))
Field Value
Reporting Entity NSFR Entity
PID O.S.1, 2, 3, 7, 11
Product Matches PID
Sub-Product #
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Treasury Control #
Internal #
Internal Counterparty #
Settlement #
Rehypothecated #
Business Line #
(30) Interest payable to retail customers (§.104(d)(9))
Field Value
Reporting Entity NSFR Entity
PID O.O.19
Product Matches PID
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
16
Business Line #
(31) Other liabilities to retail customers (§.104(d)(9))
Field Value
Reporting Entity NSFR Entity
Collection Reference #
PID S.B.2
Product Matches PID
Sub-Product #
Product Reference #
Sub-Product Reference #
Collateral Class #
Maturity Bucket #
Effective Maturity Bucket #
Encumbrance Type #
Market Value #
Maturity Amount *
Collateral Value #
Counterparty Retail, Small Business
G-SIB #
Risk Weight #
Internal #
Internal Counterparty #
(32) Interest payable to wholesale entities in ≥ 6 months, but < 1 year (§.104(d)(10))
Field Value
Reporting Entity NSFR Entity
PID O.O.19
Product Matches PID
Counterparty Not Retail or Small Business
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 6 Months, < 1 Year
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Business Line #
17
(33) Other liabilities to wholesale entities maturing in ≥ 6 months, but < 1 year (§.104(d)(10))
Field Value
Reporting Entity NSFR Entity
Collection Reference #
PID S.B.2
Product Matches PID
Sub-Product #
Product Reference #
Sub-Product Reference #
Collateral Class #
Maturity Bucket ≥ 6 Months, < 1 Year
Effective Maturity Bucket #
Encumbrance Type #
Market Value #
Maturity Amount *
Collateral Value #
Counterparty Not Retail or Small Business
G-SIB #
Risk Weight #
Internal #
Internal Counterparty #
NSFR liabilities assigned a zero percent ASF factor (§.104(e))
(34) Trade date payables (§.104(e)(1))
Field Value
Reporting Entity NSFR Entity
PID I.A.5
Product Matches PID
Sub-Product #
Market Value #
Lendable Value #
Maturity Bucket #
Forward Start Amount *
Forward Start Bucket #
Collateral Class #
Treasury Control #
Accounting Designation #
Effective Maturity Bucket #
Encumbrance Type #
Internal Counterparty #
18
(35) Non-reciprocal brokered retail deposits maturing in < 6 months (§.104(e)(2))
Field Value
Reporting Entity NSFR Entity
PID O.D.8
Product Matches PID
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months, but not Open
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
(36) Securities issued maturing in < 6 months (§.104(e)(3))
Field Value
Reporting Entity NSFR Entity
PID O.W.1 – 8, 11 – 16
Product Matches PID
Counterparty #
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
(37) Unsecured wholesale non-deposit funding from financials and central banks maturing in
< 6 months (§.104(e)(4))
Field Value
Reporting Entity NSFR Entity
PID O.W.9, 10, 17, 18, 19
Product Matches PID
19
Counterparty Financial Sector Entity, Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Loss Absorbency #
Business Line #
(38) Unsecured wholesale deposit funding from financials and central banks maturing in
< 6 months (§.104(e)(4))
Field Value
Reporting Entity NSFR Entity
PID O.D.5, 6, 8, 10, 11, 13, 14, 15
Product Matches PID
Counterparty Financial Sector Entity, Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months
Maturity Optionality #
Collateral Class #
Collateral Value #
Insured #
Trigger #
Rehypothecated #
Internal #
Internal Counterparty #
Business Line #
(39) Securities financing transactions with financials and central banks maturing in
< 6 months (§.104(e)(4))
Field Value
Reporting Entity NSFR Entity
PID O.S.1, 2, 3, 6, 7, 11
Product Matches PID
Sub-Product Not FRFF
Counterparty Financial Sector Entity, Central Bank
G-SIB #
Maturity Amount *
20
Maturity Bucket < 6 Months
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Treasury Control #
Internal #
Internal Counterparty #
Settlement #
Rehypothecated #
Business Line #
(40) Interest payable to financials and central banks in < 6 months (§.104(e)(4))
Field Value
Reporting Entity NSFR Entity
PID O.O.19
Product Matches PID
Counterparty Financial Sector Entity, Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Business Line #
(41) Other liabilities to financials and central banks maturing in < 6 months (§.104(e)(4))
Field Value
Reporting Entity NSFR Entity
Collection Reference #
PID S.B.2
Product Matches PID
Sub-Product #
Product Reference #
Sub-Product Reference #
Collateral Class #
Maturity Bucket < 6 Months
Effective Maturity Bucket #
Encumbrance Type #
Market Value #
21
Maturity Amount *
Collateral Value #
Counterparty Financial Sector Entity, Central Bank
G-SIB #
Risk Weight #
Internal #
Internal Counterparty #
(42) Firm short positions (§.104(e)(5))
Field Value
Reporting Entity NSFR Entity
PID O.S.8
Product Matches PID
Sub-Product Not Unsettled (Forward)
Counterparty #
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Treasury Control #
Internal #
Internal Counterparty #
Settlement #
Rehypothecated #
Business Line #
(43) Interest payable to non-financial wholesale entities in < 6 months (§.104(e)(5))
Field Value
Reporting Entity NSFR Entity
PID O.O.19
Product Matches PID
Counterparty Non-Financial Wholesale Entity or NULL
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
22
Internal Counterparty #
Business Line #
(44) Other liabilities maturing in < 6 months (§.104(e)(5))
Field Value
Reporting Entity NSFR Entity
Collection Reference #
PID S.B.2
Product Matches PID
Sub-Product #
Product Reference #
Sub-Product Reference #
Collateral Class #
Maturity Bucket < 6 Months
Effective Maturity Bucket #
Encumbrance Type #
Market Value #
Maturity Amount *
Collateral Value #
Counterparty Non-Financial Wholesale Entity or NULL
G-SIB #
Risk Weight #
Internal #
Internal Counterparty #
RSF Amount Values
Unencumbered assets assigned a zero percent RSF factor (§.106(a)(1))
(45) Currency and coin (§.106(a)(1)(i))
Field Value
Reporting Entity NSFR Entity
PID I.A.3, 4
Product Matches PID
Sub-Product Currency and Coin
Market Value *
Lendable Value #
Maturity Bucket #
Forward Start Amount #
Forward Start Bucket #
Collateral Class A-0-Q
Treasury Control #
Accounting Designation #
Effective Maturity Bucket #
23
Encumbrance Type #
Internal Counterparty #
(46) Cash items in process (§.106(a)(1)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.U.7
Product Matches PID
Counterparty #
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
(47) Central bank reserve balances (§.106(a)(1)(iii) & (iv))
Field Value
Reporting Entity NSFR Entity
PID I.A.3, 4
Product Matches PID
Sub-Product Not Currency and Coin
Market Value *
Lendable Value #
Maturity Bucket < 6 Months
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class A-0-Q
Treasury Control #
Accounting Designation #
Effective Maturity Bucket #
Encumbrance Type #
Internal Counterparty #
24
(48) Central bank debt securities maturing in < 6 months (§.106(a)(1)(iii) & (iv))
Field Value
Reporting Entity NSFR Entity
PID I.A.1, 2, 3, 4, 5, 7
Product Matches PID
Sub-Product For I.A.3 and 4, Not Currency and Coin
Market Value *
Lendable Value #
Maturity Bucket < 6 Months
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class CB-1-Q, CB-2-Q, CB-3-Q, CB-1, CB-2, CB-3, CB-4
Treasury Control #
Accounting Designation #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
(49) Unsecured lending to central banks maturing in < 6 months (§.106(a)(1)(iii) & (iv))
Field Value
Reporting Entity NSFR Entity
PID I.U.1 – 6, 8
Product Matches PID
Counterparty Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months
Maturity Optionality #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
25
(50) Secured lending to central banks maturing in < 6 months
(§.106(a)(1)(iii) & (iv))
Field Value
Reporting Entity NSFR Entity
PID I.S.1, 2, 3, 5 – 8
Product Matches PID
Sub-Product #
Counterparty Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months
Maturity Optionality #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
(51) Interest receivable from central banks in < 6 months (§.106(a)(1)(iii) & (iv))
Field Value
Reporting Entity NSFR Entity
PID I.O.6
Product Matches PID
Counterparty Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months
Collateral Class #
Co llateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
26
(52) Level 1 HQLA central bank securities (§.106(a)(1)(iii) & (iv))
Field Value
Reporting Entity NSFR Entity
PID I.A.1, 2, 3, 4, 5, 7
Product Matches PID
Sub-Product For I.A.3 and 4, Not Currency and Coin
Market Value *
Lendable Value #
Maturity Bucket ≥ 6 Months
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class CB-1-Q, CB-2-Q
Treasury Control #
Accounting Designation #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
(53) Trade date receivables that are expected to settle (§.106(a)(1)(v))
Field Value
Reporting Entity NSFR Entity
PID O.S.8
Product Matches PID
Sub-Product Unsettled (Regular Way)
Counterparty #
G-SIB #
Maturity Amount #
Maturity Bucket #
Maturity Optionality #
Collateral Class #
Collateral Value #
Forward Start Amount *
Forward Start Bucket #
Treasury Control #
Internal #
Internal Counterparty #
Settlement #
Rehypothecated #
Business Line #
27
(54) Other level 1 HQLA securities (§.106(a)(1)(vi))
Field Value
Reporting Entity NSFR Entity
PID I.A.1, 2, 5, 7
Product Matches PID
Sub-Product #
Market Value *
Lendable Value #
Maturity Bucket #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class A-1-Q, A-2-Q, A-3-Q, A-4-Q, A-5-Q, S-1-Q, S-2-Q, S-
3-Q, S-4-Q
Treasury Control #
Accounting Designation #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
(55) Lending to financials secured by rehypothecatable level 1 HQLA
(§.106(a)(1)(vii))
Field Value
Reporting Entity NSFR Entity
PID I.S.1, 2, 3, 5, 6
Product Matches PID
Sub-Product #
Counterparty Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months
Maturity Optionality #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 1 HQLA
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
28
Business Line #
Settlement #
Unencumbered assets and commitments assigned a 5 percent RSF factor (§.106(a)(2))
(56) Undrawn commitments (§.106(a)(2))
Field Value
Reporting Entity NSFR Entity
PID O.O.4, 5, 6
Product Matches PID
Counterparty #
G-SIB #
Maturity Amount *
Maturity Bucket < 1 Year
Collateral Class #
Collateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Business Line #
Unencumbered assets assigned a 15 percent RSF factor (§.106(a)(3))
(57) Level 2A HQLA central bank securities (§.106(a)(3)(i))
Field Value
Reporting Entity NSFR Entity
PID I.A.1, 2, 3, 4, 5, 7
Product Matches PID
Sub-Product For I.A.3 and 4, Not Currency and Coin
Market Value *
Lendable Value #
Maturity Bucket ≥ 6 Months
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class CB-3-Q
Treasury Control #
Accounting Designation #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
29
(58) Other level 2A HQLA securities (§.106(a)(3)(i))
Field Value
Reporting Entity NSFR Entity
PID I.A.1, 2, 5, 7
Product Matches PID
Sub-Product #
Market Value *
Lendable Value #
Maturity Bucket #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2A HQLA, but Not CB-3-Q
Treasury Control #
Accounting Designation #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
(59) Lending to financials secured by rehypothecatable non-level 1 HQLA collateral
maturing in < 6 months (§.106(a)(3)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.S.1, 2, 3, 5, 6
Product Matches PID
Sub-Product #
Counterparty Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months
Maturity Optionality #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Not Level 1 HQLA
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
30
Business Line #
Settlement #
(60) Other secured lending to financials maturing in < 6 months (§.106(a)(3)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.S.7, 8
Product Matches PID
Sub-Product #
Counterparty Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months
Maturity Optionality #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
(61) Unsecured lending to financials maturing in < 6 months (§.106(a)(3)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.U.1, 2, 4, 5, 6, 8
Product Matches PID
Counterparty Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket < 6 Months
Maturity Optionality #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
31
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Unencumbered assets assigned a 50 percent RSF factor (§.106(a)(4))
(62) Level 2B HQLA securities (§.106(a)(4)(i))
Field Value
Reporting Entity NSFR Entity
PID I.A.1, 2, 5, 7
Product Matches PID
Sub-Product #
Market Value *
Lendable Value #
Maturity Bucket #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Level 2B HQLA
Treasury Control #
Accounting Designation #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
(63) Secured lending to financials and central banks, maturing in
≥ 6 months, but < 1 year (§.106(a)(4)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.S.1, 2, 3, 5, 6, 7, 8
Product Matches PID
Sub-Product #
Counterparty Financial Sector Entity, Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 6 Months, < 1 Year
Maturity Optionality #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
32
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
(64) Unsecured lending to financials and central banks, maturing in
≥ 6 months, but < 1 year (§.106(a)(4)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.U.1, 2, 4, 5, 6, 8
Product Matches PID
Counterparty Financial Sector Entity, Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 6 Months, < 1 Year
Maturity Optionality #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
(65) Operational deposits placed (§.106(a)(4)(iii))
Field Value
Reporting Entity NSFR Entity
PID I.U.3
Product Matches PID
Counterparty Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Effective Maturity Bucket < 6 Months or NULL
33
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
(66) Secured lending to non-financials maturing in < 1 year (§.106(a)(4)(iv))
Field Value
Reporting Entity NSFR Entity
PID I.S.1, 2, 3, 5, 6, 7, 8
Product Matches PID
Sub-Product #
Counterparty Retail, Small Business, Non-Financial Wholesale
Entity
G-SIB #
Maturity Amount *
Maturity Bucket < 1 Year
Maturity Optionality #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
(67) Unsecured lending to non-financials maturing in < 1 year (§.106(a)(4)(iv))
Field Value
Reporting Entity NSFR Entity
PID I.U.1, 2, 5, 6
Product Matches PID
Counterparty Retail, Small Business, Non-Financial Wholesale
Entity
34
G-SIB #
Maturity Amount *
Maturity Bucket < 1 Year
Maturity Optionality #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
(68) Interest receivable from central banks in ≥ 6 months, but < 1 year (§.106(a)(4)(iv))
Field Value
Reporting Entity NSFR Entity
PID I.O.6
Product Matches PID
Counterparty Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 6 Months, < 1 Year
Collateral Class #
Co llateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
(69) Non-HQLA central bank debt securities maturing in ≥ 6 months, but < 1 year
(§.106(a)(4)(iv))
Field Value
Reporting Entity NSFR Entity
PID I.A.1, 2, 3, 4, 5, 7
Product Matches PID
Sub-Product For I.A.3 and 4, Not Currency and Coin
Market Value *
Lendable Value #
Maturity Bucket ≥ 6 Months, < 1 Year
Forward Start Amount NULL
Forward Start Bucket NULL
35
Collateral Class CB-1, CB-2, CB-3, CB-4
Treasury Control #
Accounting Designation #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
(70) Other unencumbered non-HQLA securities maturing in < 1 year (§.106(a)(4)(iv))
Field Value
Reporting Entity NSFR Entity
PID I.A.1, 2, 5, 7
Product Matches PID
Sub-Product #
Market Value *
Lendable Value #
Maturity Bucket < 1 Year
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class A-2, A-3, A-4, A-5, S-1, S-2, S-3, S-4, G-1, G-2, G-3,
S-5, S-6, S-7, IG-1, IG-2, S-8, G-4, E-5, E-6, E-7, E-8,
E-9, E-10, IG-3, IG-4, IG-5, IG-6, IG-7, IG-8, N-1,
N-2, N-3, N-4, N-5, N-6, N-7, N-8, Y-1, Y-2, Y-3
Treasury Control #
Accounting Designation #
Effective Maturity Bucket < 6 Months or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
(71) Other interest receivable in < 1 year (§.106(a)(4)(iv))
Field Value
Reporting Entity NSFR Entity
PID I.O.6
Product Matches PID
Counterparty Not Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket < 1 Year
Collateral Class #
Co llateral Value #
Forward Start Amount NULL
Forward Start Bucket NULL
Treasury Control #
36
Internal #
Internal Counterparty #
Business Line #
Unencumbered assets assigned a 65 percent RSF factor (§.106(a)(5))
(72) Retail mortgages with ≤ 50% risk weight maturing in ≥ 1 year (§.106(a)(5)(i))
Field Value
Reporting Entity NSFR Entity
PID I.S.8
Product Matches PID
Sub-Product #
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class P-1
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight ≤ 0.5
Business Line #
Settlement #
(73) Other secured retail loans with ≤ 20% risk weight maturing in ≥ 1 year (§.106(a)(5)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.S.8
Product Matches PID
Sub-Product #
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket < 1 Year or NULL
37
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Not P-1
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight ≤ 0.2
Business Line #
Settlement #
(74) Secured non-financial wholesale and central bank loans with ≤ 20% risk weight maturing in
≥ 1 year (§.106(a)(5)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.S.8
Product Matches PID
Sub-Product #
Counterparty Non-Financial Wholesale Entity, Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight ≤ 0.2
Business Line #
Settlement #
38
(75) Securities financing transactions assigned ≤ 20% risk weight provided to non-financial customers
and maturing in ≥ 1 year (§.106(a)(5)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.S.1, 2, 3, 5, 6, 7
Product Matches PID
Sub-Product #
Counterparty Not Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight ≤ 0.2
Business Line #
Settlement #
(76) Unsecured loans assigned ≤ 20% risk weight provided to non-financial customers and
maturing in ≥ 1 year (§.106(a)(5)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.U.1, 2, 5, 6
Product Matches PID
Counterparty Not Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
39
Internal Counterparty #
Risk Weight ≤ 0.2
Business Line #
Unencumbered assets assigned an 85 percent RSF factor (§.106(a)(6))
(77) Retail mortgages with > 50% risk weight maturing in ≥ 1 year (§.106(a)(6)(i))
Field Value
Reporting Entity NSFR Entity
PID I.S.8
Product Matches PID
Sub-Product #
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class P-1
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight > 0.5
Business Line #
Settlement #
(78) Other secured retail loans with > 20% risk weight maturing in ≥ 1 year (§.106(a)(6)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.S.8
Product Matches PID
Sub-Product #
Counterparty Retail, Small Business
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket < 1 Year or NULL
40
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class Not P-1
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight > 0.2
Business Line #
Settlement #
(79) Secured non-financial wholesale and central bank loans with > 20% risk weight maturing in
≥ 1 year (§.106(a)(6)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.S.8
Product Matches PID
Sub-Product #
Counterparty Non-Financial Wholesale Entity, Central Bank
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight > 0.2
Business Line #
Settlement #
41
(80) Securities financing transactions assigned > 20% risk weight provided to non-financial wholesale
customers and maturing in ≥ 1 year (§.106(a)(6)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.S.1, 2, 3, 5, 6, 7
Product Matches PID
Sub-Product #
Counterparty Not Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight > 0.2
Business Line #
Settlement #
(81) Unsecured loans assigned > 20% risk weight provided to non-financial customers and
maturing in ≥ 1 year (§.106(a)(6)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.U.1, 2, 5, 6
Product Matches PID
Counterparty Not Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
42
Internal Counterparty #
Risk Weight > 0.2
Business Line #
(82) Non-HQLA common equity shares (§.106(a)(6)(iii))
Field Value
Reporting Entity NSFR Entity
PID I.A.1, 2, 5, 7
Product Matches PID
Sub-Product #
Market Value *
Lendable Value #
Maturity Bucket #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class E-1, E-2, E-3, E-4
Treasury Control #
Accounting Designation #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
(83) Other non-HQLA securities maturing in ≥ 1 year (§.106(a)(6)(iv))
Field Value
Reporting Entity NSFR Entity
PID I.A.1, 2, 3, 4, 5, 7
Product Matches PID
Sub-Product For I.A.3 and 4, Not Currency and Coin
Market Value *
Lendable Value #
Maturity Bucket ≥ 1 Year
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class A-2, A-3, A-4, A-5, S-1, S-2, S-3, S-4, CB-1, CB-2,
G-1, G-2, G-3, S-5, S-6, S-7, CB-3, IG-1, IG-2, S-8,
CB-4, G-4, E-5, E-6, E-7, E-8, E-9, E-10, IG-3, IG-4,
IG-5, IG-6, IG-7, IG-8, N-1, N-2, N-3, N-4, N-5, N-6,
N-7, N-8, Y-1, Y-2, Y-3
Treasury Control #
Accounting Designation #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
43
Internal Counterparty #
(84) Commodities (§.106(a)(6)(v))
Field Value
Reporting Entity NSFR Entity
PID I.A.1, 2, 5, 7
Product Matches PID
Sub-Product #
Market Value *
Lendable Value #
Maturity Bucket #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class C-1
Treasury Control #
Accounting Designation #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
Unencumbered assets assigned a 100 percent RSF factor (§.106(a)(7))
(85) Secured lending to financial sector entities maturing in ≥ 1 year (§.106(a)(7))
Field Value
Reporting Entity NSFR Entity
PID I.S.1, 2, 3, 5, 6, 7, 8
Product Matches PID
Sub-Product #
Counterparty Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
44
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
(86) Unsecured lending to financial sector entities maturing in ≥ 1 year (§.106(a)(7))
Field Value
Reporting Entity NSFR Entity
PID I.U.1, 2, 4, 5, 6, 8
Product Matches PID
Counterparty Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
(87) Physical property and other assets (§.106(a)(7))
Field Value
Reporting Entity NSFR Entity
PID I.A.1, 2, 5, 7
Product Matches PID
Sub-Product #
Market Value *
Lendable Value #
Maturity Bucket #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class P-1, P-2, Z-1
Treasury Control #
Accounting Designation #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
45
(88) Other assets (§.106(a)(7))
Field Value
Reporting Entity NSFR Entity
Collection Reference #
PID S.B.4
Product Matches PID
Sub-Product #
Product Reference #
Sub-Product Reference #
Collateral Class #
Maturity Bucket #
Effective Maturity Bucket < 1 Year or NULL
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Market Value #
Maturity Amount *
Collateral Value #
Counterparty #
G-SIB #
Risk Weight #
Internal #
Internal Counterparty #
Nonperforming assets (§.106(b))
(89) Nonperforming assets (§.106(b))
Field Value
Reporting Entity NSFR Entity
Collection Reference #
PID S.B.3
Product Matches PID
Sub-Product #
Product Reference #
Sub-Product Reference #
Collateral Class #
Maturity Bucket #
Effective Maturity Bucket #
Encumbrance Type #
Market Value #
Maturity Amount *
Collateral Value #
Counterparty #
G-SIB #
Risk Weight #
46
Internal #
Internal Counterparty #
Encumbered assets with six months or more, but less than one year, remaining in the
encumbrance period (§.106(c)(1)(ii))3
(90) HQLA encumbered for ≥ 6 Months, but < 1 Year (§.106(c)(1)(ii) & §.106(d)(2))
Field Value
Reporting Entity NSFR Entity
PID I.A.7
Product Matches PID
Sub-Product #
Market Value *
Lendable Value #
Maturity Bucket #
Forward Start Amount #
Forward Start Bucket #
Collateral Class HQLA
Treasury Control #
Accounting Designation #
Effective Maturity Bucket ≥ 6 Months, < 1 Year
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
(91) Non-HQLA central bank securities maturing in < 1 Year, encumbered for ≥ 6 Months, but < 1 Year
(§.106(c)(1)(ii) & §.106(d)(2))
Field Value
Reporting Entity NSFR Entity
PID I.A.7
Product Matches PID
Sub-Product #
Market Value *
Lendable Value #
Maturity Bucket < 1 Year
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class CB-1, CB-2, CB-3, CB-4
Treasury Control #
Accounting Designation #
3 The tables in this section include only assets with an RSF of 50 percent or less, and thus are assigned an
equivalent or higher RSF based on the remaining encumbrance period (see: §.106(c)(1)(ii)(A)). Assets with an RSF
higher than 50 percent are included in the tables for unencumbered assets (see: §.106(c)(1)(ii)(B))
47
Effective Maturity Bucket ≥ 6 Months, < 1 Year
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
(92) Cash items in process encumbered for ≥ 6 months, but < 1 year (§.106(c)(1)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.U.7
Product Matches PID
Counterparty #
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Effective Maturity Bucket ≥ 6 Months, < 1 Year
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
(93) Unsecured lending maturing in < 1 year, encumbered for ≥ 6 months, but < 1 year
(§.106(c)(1)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.U.1, 2, 4, 5, 6, 8
Product Matches PID
Counterparty #
G-SIB #
Maturity Amount *
Maturity Bucket < 1 Year
Maturity Optionality #
Effective Maturity Bucket ≥ 6 Months, < 1 Year
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
48
Risk Weight #
Business Line #
(94) Operational deposits placed, encumbered for ≥ 6 months, but < 1 year (§.106(c)(1)(ii))
Field Value
Reporting Entity NSFR Entity
PID I.U.3
Product Matches PID
Counterparty Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Effective Maturity Bucket ≥ 6 Months, < 1 Year
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
(95) Secured lending maturing in < 1 year, encumbered for ≥ 6 months, but < 1 year
(§.106(c)(1)(ii) & §.106(d)(1))
Field Value
Reporting Entity NSFR Entity
PID I.S.1, 2, 3, 5 – 8
Product Matches PID
Sub-Product #
Counterparty #
G-SIB #
Maturity Amount *
Maturity Bucket < 1 Year
Maturity Optionality #
Effective Maturity Bucket ≥ 6 Months, < 1 Year
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
49
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
(96) Non-HQLA securities maturing in < 1 year, encumbered for ≥ 6 months, but < 1 year
(§.106(c)(1)(ii) & §.106(d)(2))
Field Value
Reporting Entity NSFR Entity
PID I.A.7
Product Matches PID
Sub-Product #
Market Value *
Lendable Value #
Maturity Bucket < 1 Year
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class A-2, A-3, A-4, A-5, S-1, S-2, S-3, S-4, G-1, G-2, G-3,
S-5, S-6, S-7, IG-1, IG-2, S-8, G-4, E-5, E-6, E-7, E-8,
E-9, E-10, IG-3, IG-4, IG-5, IG-6, IG-7, IG-8, N-1,
N-2, N-3, N-4, N-5, N-6, N-7, N-8, Y-1, Y-2, Y-3
Treasury Control #
Accounting Designation #
Effective Maturity Bucket ≥ 6 Months, < 1 Year
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
Encumbered assets with one year or more remaining in the encumbrance period
(§.106(c)(1)(iii))
(97) HQLA, non-HQLA and other assets, excluding loans, encumbered for ≥ 1 year
(§.106(c)(1)(iii), §.106(d)(2))
Field Value
Reporting Entity NSFR Entity
PID I.A.7
Product Matches PID
Sub-Product #
Market Value *
Lendable Value #
Maturity Bucket #
50
Forward Start Amount #
Forward Start Bucket #
Collateral Class HQLA, A-2, A-3, A-4, A-5, S-1, S-2, S-3, S-4, CB-1,
CB-2, G-1, G-2, G-3, S-5, S-6, S-7, CB-3, E-1, E-2,
IG-1, IG-2, S-8, CB-4, E-3, E-4, E-5, E-6, E-7, E-8, E-9,
E-10, IG-3, IG-4, IG-5, IG-6, IG-7, IG-8, N-1, N-2,
N-3, N-4, N-5, N-6, N-7, N-8, Y-1, Y-2, Y-3, C-1, P-1,
P-2, Z-1
Treasury Control #
Accounting Designation #
Effective Maturity Bucket ≥ 1 Year
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Internal Counterparty #
(98) Unsecured loans and other cash items encumbered for ≥ 1 year (§.106(c)(1)(iii))
Field Value
Reporting Entity NSFR Entity
PID I.U.1 – 8
Product Matches PID
Counterparty #
G-SIB #
Maturity Amount *
Maturity Bucket #
Maturity Optionality #
Effective Maturity Bucket ≥ 1 Year
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
(99) Secured lending transactions encumbered for ≥ 1 year (§.106(c)(1)(iii) & §.106(d)(1))
Field Value
Reporting Entity NSFR Entity
PID I.S.1, 2, 3, 5 – 8
Product Matches PID
Sub-Product #
Counterparty #
G-SIB #
Maturity Amount *
51
Maturity Bucket #
Maturity Optionality #
Effective Maturity Bucket ≥ 1 Year
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
(100) Other assets encumbered for ≥ 1 year (§.106(c)(1)(iii))
Field Value
Reporting Entity NSFR Entity
Collection Reference #
PID S.B.4
Product Matches PID
Sub-Product #
Product Reference #
Sub-Product Reference #
Collateral Class #
Maturity Bucket #
Effective Maturity Bucket ≥ 1 Year
Encumbrance Type Not Derivative VM, Derivative IM and DFC or
Covered Federal Reserve Facility Funding
Market Value #
Maturity Amount *
Collateral Value #
Counterparty #
G-SIB #
Risk Weight #
Internal #
Internal Counterparty #
(101) Additional RSF associated with off-balance sheet rehypothecated assets (§.106(d)(3))
Field Value
Reporting Entity NSFR Entity
PID S.L.9
52
Product Matches PID
Collateral Class #
Market Value *
Internal #
Internal Counterparty #
Calculation of NSFR derivatives amounts (§.107)
(102) Gross NSFR derivative liability amount (§.107(b)(5))
Field Value
Reporting Entity NSFR Entity
PID S.DC.2
Product Matches PID
Sub-Product #
Sub-Product2 Not OTC – Centralized (Agent) or Exchange-traded
(Agent)
Market Value *
Collateral Class #
Collateral Level #
Counterparty #
G-SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
(103) Gross settlement payments delivered (§.107(b)(5))
Field Value
Reporting Entity NSFR Entity
PID S.DC.3
Product Matches PID
Sub-Product #
Sub-Product2 Not OTC – Centralized (Agent) or Exchange-traded
(Agent)
Market Value *
Collateral Class #
Collateral Level #
Counterparty #
G-SIB #
Effective Maturity Bucket #
53
Encumbrance Type #
Netting Eligible #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
(104) Central counterparty mutualized loss sharing arrangements (§.107(b)(6))
Field Value
Reporting Entity NSFR Entity
PID S.DC.11
Product Matches PID
Sub-Product #
Sub-Product2 #
Market Value *
Collateral Class #
Collateral Level #
Counterparty #
G-SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
(105) Initial margin provided (§.107(b)(7))
Field Value
Reporting Entity NSFR Entity
PID S.DC.5, 6
Product Matches PID
Sub-Product #
Sub-Product2 Not OTC – Centralized (Agent) or Exchange-traded
(Agent)
Market Value *
Collateral Class #
Collateral Level #
Counterparty #
G-SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible #
Treasury Control #
54
Internal #
Internal Counterparty #
Business Line #
(106) Additional RSF for IM and DFC pledged – secured lending (§.107(b)(6) & (7))
Field Value
Reporting Entity NSFR Entity
PID I.S.1, 2, 3, 5, 6, 7, 8
Product Matches PID
Sub-Product #
Counterparty Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket #
Encumbrance Type Derivative IM and DFC
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class #
Collateral Value #
Unencumbered #
Treasury Control #
Internal #
Internal Counterparty #
Risk Weight #
Business Line #
Settlement #
(107) Additional RSF for IM and DFC pledged – unsecured lending (§.107(b)(6) & (7))
Field Value
Reporting Entity NSFR Entity
PID I.U.1, 2, 4, 5, 6, 8
Product Matches PID
Counterparty Financial Sector Entity
G-SIB #
Maturity Amount *
Maturity Bucket ≥ 1 Year
Maturity Optionality #
Effective Maturity Bucket #
Encumbrance Type Derivative IM and DFC
Forward Start Amount NULL
Forward Start Bucket NULL
Internal #
55
Internal Counterparty #
Risk Weight #
Business Line #
(108) Additional RSF for IM and DFC pledged – physical and other (§.107(b)(6) & (7))
Field Value
Reporting Entity NSFR Entity
PID I.A.1, 2, 5, 7
Product Matches PID
Sub-Product #
Market Value *
Lendable Value #
Maturity Bucket #
Forward Start Amount NULL
Forward Start Bucket NULL
Collateral Class P-1, P-2, Z-1
Treasury Control #
Accounting Designation #
Effective Maturity Bucket #
Encumbrance Type Derivative IM and DFC
Internal Counterparty #
(109) Additional RSF for IM and DFC pledged – other assets (§.107(b)(6) & (7))
Field Value
Reporting Entity NSFR Entity
Collection Reference #
PID S.B.4
Product Matches PID
Sub-Product #
Product Reference #
Sub-Product Reference #
Collateral Class #
Maturity Bucket #
Effective Maturity Bucket #
Encumbrance Type Derivative IM and DFC
Market Value #
Maturity Amount *
Collateral Value #
Counterparty #
G-SIB #
Risk Weight #
Internal #
Internal Counterparty #
56
(110) Gross NSFR derivative asset amount (§.107(f)(1))
Field Value
Reporting Entity NSFR Entity
PID S.DC.1
Product Matches PID
Sub-Product #
Sub-Product2 Not OTC – Centralized (Agent) or Exchange-traded
(Agent)
Market Value *
Collateral Class #
Collateral Level #
Counterparty #
G-SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
(111) Variation margin received eligible for netting (§.107(f)(1)(i))
Field Value
Reporting Entity NSFR Entity
PID S.DC.10
Product Matches PID
Sub-Product Rehypothecatable – Unencumbered,
Rehypothecatable – Encumbered,
Non-Segregated Cash
Sub-Product2 Not OTC – Centralized (Agent) or Exchange-traded
(Agent)
Market Value *
Collateral Class Level 1 HQLA
Collateral Level Not Overcollateralized4
Counterparty #
G-SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible Y
Treasury Control #
4 “Overcollateralized” should designate only the portion of variation margin received that exceeds the current
asset value of a netting set.
57
Internal #
Internal Counterparty #
Business Line #
(112) NSFR derivative liability amount (§.107(f)(2))
Field Value
Reporting Entity NSFR Entity
PID S.DC.2
Product Matches PID
Sub-Product #
Sub-Product2 Not OTC – Centralized (Agent) or Exchange-traded
(Agent)
Market Value *
Collateral Class #
Collateral Level #
Counterparty #
G-SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible #
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
(113) Variation margin provided, excluding overcollateralized portion (§.107(f)(2))
Field Value
Reporting Entity NSFR Entity
PID S.DC.8 and 9
Product Matches PID
Sub-Product #
Sub-Product2 Not OTC – Centralized (Agent) or Exchange-traded
(Agent)
Market Value *
Collateral Class #
Collateral Level Not Overcollateralized5
Counterparty #
G-SIB #
Effective Maturity Bucket #
Encumbrance Type #
Netting Eligible #
5 Overcollateralized should designate only the portion of variation margin pledged that exceeds the current liability
value of a netting set.
58
Treasury Control #
Internal #
Internal Counterparty #
Business Line #
Rules for consolidation (§.109)
(114) Deduction of non-transferrable excess subsidiary stable funding (§.109)
Field Value
Reporting Entity NSFR Entity
PID S.L.7
Product Matches PID
Collateral Class #
Market Value *
Internal #
Internal Counterparty #
59
