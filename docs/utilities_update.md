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

---

## Competitive Suppliers Tab Update

What to include here:

- A brief explanation of what Competitive Suppliers are and how they differ from standard utilities (retail suppliers in restructured markets, do not own distribution wires, offer retail contracts).
- The canonical source for the competitive suppliers list is the EIA's EIA-861 Schedule 4B (Retail Power Market sales / Competitive Suppliers), which is consistently formatted.

Why this is straightforward

- Schedule 4B is published in a consistent layout each release, so updating the Competitive Suppliers tab is usually a replace-the-tab operation rather than a piecemeal merge.
- Recent EIA releases include `EIAID` for suppliers; when present, use `EIAID` as the stable key for matching and de-duplication.

Step-by-step

1. Download Schedule 4B from the EIA-861 page: https://www.eia.gov/electricity/data/eia861/
2. Save a dated copy of the source in `Update_Materials/`.
3. In the Master DataBook, create a new worksheet named `Competitive Suppliers (YYYY-MM-DD)`, paste the Schedule 4B contents, and verify the columns (Supplier Name, State, EIAID, etc.).
4. Prefer matching on `EIAID` when present; otherwise use normalized supplier name + state.
5. Replace the canonical `Competitive Suppliers` tab with the values-only contents of the new sheet (copy values only).
6. Add a change log entry (date, initials, source file/version, any normalization notes).
7. Export a values-only CSV if required and deliver to Jill for ingestion. Address any ingestion errors and re-export if needed.

Quick checks

- Ensure `EIAID` uniqueness (if present).
- Run simple normalization (trim whitespace, consistent casing, remove obvious suffix noise like `, Inc.`).
- Verify required fields (Supplier Name, State, EIAID if expected) are present before delivery.

---
