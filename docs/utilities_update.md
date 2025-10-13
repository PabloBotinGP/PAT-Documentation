# Utilities Tab Update

This section describes the yearly workflow to update the **Options with Unique Utilities** tab in the Master DataBook—from gathering sources to integration and post-ingestion QA.

---

## 1) Data Collection

- Review the **recurring sources list** and collect all new reports.
  - **TODO:** Create and maintain a list of regular sources (e.g., LevelTen quarterly report, EIA releases, ACCES/REAL updates).
- Dedicate focused time each cycle to **browse publisher sites** for newly published material.
  - **TODO:** Add a checklist of websites and pages to scan.
- Between formal updates, store everything in:
  - `Collected_Data/New Data Collection (YYYY-MM-DD)/`

> Tip: Keep filenames dated and descriptive (e.g., `2025-03_LevelTen_Q1_PPA.pdf`).

---

## 2) Data Pre-Cleaning

- Evaluate each collected file and **identify usable fields**.
- For each program found:
  - Determine **program type** (taxonomy used in the DataBook).
  - Fill in the **program template** with normalized values (consistent units, naming, formats).
- Output: a set of **ready-to-paste rows** that match the Master DataBook schema.

> Tip: Track assumptions or edge cases in a temporary notes column; remove before final paste.

---

## 3) Data Review

- Review the pre-cleaned rows with **Sushmita**.
  - Confirm program classification, units, eligibility logic, and any special notes.
- Resolve discrepancies before integrating into the Master DataBook.

---

## 4) Integration into the Master DataBook

- Open the current file: `DataBook/Master DataBook_<YYYY-MM-DD>.xlsx`.

**If the Utility already exists:**
- Update **program fields** in place.
- If multiple programs apply, **respect the multi-value convention** (e.g., `,,,` separator).

**If the Utility does not exist:**
- Add a **new full row** including Utility identifiers and all program fields.

> Tip: After pasting, re-run any internal validation formulas or checks present in the workbook.

---

## 5) Integration into the Tool

- Export the updated tab as a **values-only CSV** (no formulas, no formatting).
  - Name suggestion: `options_with_utilities_<YYYY-MM-DD>.csv`
- Send the CSV to **Jill** for ingestion.

> As understood, only **“Options with Unique Utilities”** and **“Competitive Suppliers”** need to be delivered to Jill.

---

## 6) Post-Integration

- Request the **ingestion error report** from Jill (if any).
- Fix issues directly in the Master DataBook and **re-export values-only CSV**.
- Resubmit the corrected file(s).

---

## Checklists (Optional)

**Pre-Cleaning:**
- [ ] Source captured and dated  
- [ ] Program type assigned  
- [ ] Fields normalized to schema  
- [ ] Assumptions noted  

**Before Export:**
- [ ] Utility duplicates checked  
- [ ] Multi-value cells follow convention  
- [ ] Validation formulas pass  
- [ ] Values-only CSV produced  

**Post-Integration:**
- [ ] Errors reviewed with Jill  
- [ ] Corrections applied  
- [ ] CSV re-exported and sent
