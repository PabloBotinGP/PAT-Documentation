# Competitive Suppliers Tab Update

This section defines how to update the **Competitive Suppliers** tab and how its data flows into related columns in **Options with Unique Utilities**.

---

## Sources (add links)

- **ACCES** — Energy choice map and state details. *(Add link)*
- **Retail Energy Advancement League (REAL)** — Market structure & eligibility. *(Add link)*
- **EIA Retail Power Market Sales Tables (2023)** — **Table 16**. *(Add link)*

> Tip: Keep a dated copy of each source in `Update_Materials/` and reference it in the change log.

---

## Steps

1. **Update Competitive Suppliers using EIA Table 16**
   - Pull the latest values from **EIA Table 16** into the **Competitive Suppliers** tab.
   - Normalize naming and units to match existing schema.

2. **Record the update in the Change Log**
   - Log date, author, scope (Competitive Suppliers), and sources used.

3. **Deliver for ingestion**
   - Send the updated tab (or its **values-only CSV**) to **Jill** for tool updates.

---

## How This Drives Fields in *Options with Unique Utilities*

The following fields are **automatically inferred** from the **State** tab but require that upstream data (ACCES/REAL/EIA) be current and consistent.

### Competitive Supplier (PO#8)
- **Source/Flow:** Inferred from **State** tab.
- **Upstream maintenance:**
  - Update **Electric Choice Type** in **State** using **REAL** (use the **Electric Choice map** only).
  - Allowed values: `"Restructured"`, `"Partially Restructured"`, `"Not Restructured"`.

### Links to website (AT#68)
- **Source/Flow:** Inferred from **State** tab.
- **Upstream maintenance:**
  - Update **Electric Choice Links** in **State** using **ACCES**.
  - Action: open the ACCES map, click each state, capture official link(s).

### Customer Segment Eligibility (AT#69)
- **Source/Flow:** Inferred from **State** tab.
- **Upstream maintenance:**
  - Verify **customer eligibility** on **ACCES** and **REAL**.
  - Update free-text in **State → Customer Segment Eligibility** as needed.
  - Use **“Any customer”** to indicate both residential and industrial eligibility.

### Availability (AT#70)
- **Goal:** Automate population based on market structure & data presence.
- **Rules to implement:**
  - If **no competitive supplier** ⇒ `No electricity choice available.`
  - If **unable to find price** ⇒ leave **blank**.
  - Add a note when markets are unavailable:
    - `No competitive energy supplier choice available` ⇒ neither electricity nor NG choice exists.
    - `No electricity choice available` ⇒ electricity choice is unavailable, NG choice exists.

### Pricing (c/kWh) (AT#94)
- **Source/Flow:** Inferred from **State → Average Price**.
- **Notes:**
  - Not all utilities have pricing even in (partially) restructured markets.
  - Some states may have mixed coverage (some utilities with pricing, others without).

### Notes (AT#95)
- **Source/Flow:** Free-text from **ACCES** and **REAL**.
- **Usage:**
  - Capture market restrictions, special cases, or clarifications.
  - Keep concise; reference the source and date when helpful.

---

## Quick Reference Table

| Column (Options with Utilities) | Primary Source/Tab | Population Logic | Notes |
|---|---|---|---|
| Competitive Supplier (PO#8) | State | Derived from **Electric Choice Type** | Values: *Restructured*, *Partially Restructured*, *Not Restructured* |
| Links to website (AT#68) | State | From **Electric Choice Links** | Curate via **ACCES** state pages |
| Customer Segment Eligibility (AT#69) | State | Free-text eligibility from **ACCES/REAL** | “Any customer” = residential + industrial |
| Availability (AT#70) | State + Logic | Apply automation rules listed above | Leave blank if price not found |
| Pricing (c/kWh) (AT#94) | State | From **Average Price** | Not guaranteed for all utilities |
| Notes (AT#95) | State + Sources | Short remarks from **ACCES/REAL** | Include source/date when useful |

---

## Minimal Checklist

- **Before update**
  - [ ] Latest **EIA Table 16** downloaded and filed
  - [ ] ACCES and REAL pages reviewed for each state
  - [ ] State tab fields (Choice Type, Links, Eligibility, Avg Price) current

- **During update**
  - [ ] Competitive Suppliers refreshed from EIA Table 16
  - [ ] Normalization rules applied (naming, units)
  - [ ] Change Log entry added

- **After update**
  - [ ] Values-only CSV exported (if required)
  - [ ] Files delivered to **Jill** for ingestion
  - [ ] Any ingestion feedback/errors tracked and resolved
