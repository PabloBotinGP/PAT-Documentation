# Other

This page contains instructions for smaller or miscellaneous tabs that don't have their own dedicated pages. Sections below cover updates for:

- Utilities
- States
- Information
- Update Tracker
- Documentation

---

## Utilities

This section is for updates that affect the utility-level metadata or small utility-specific lookup tables (not the main `Options with Utilities` sheet). Typical tasks:

- Refresh a utilities lookup table imported from an external source.
- Correct or normalize utility names, service territory labels, or classification codes.
- Validate utility metadata used for mapping, geolocation, or marketplace matching.

Checklist
- [ ] Confirm source file and date saved to `Update_Materials/`
- [ ] Normalize names (trim, consistent casing, remove common suffixes)
- [ ] Verify any IDs (EIAID, utility codes) are matched or recorded
- [ ] Update change log with notes and source

---

## States

This section covers periodic updates to the **State** tab and related items (for example, PPA_National&BA values).

### State — Electricity Choice Type

- Open: [Retail Energy Choice — Energy choice in your state](https://www.retailenergychoice.org/energy-choice-in-your-state/#info)
- The page contains **two interactive maps**. Use **“Electric Choice in your State”** to verify each state’s status.
- For each state, confirm that the status in the **State** tab matches the map. Update if necessary.

Allowed values
- `Restructured`
- `Partially Restructured`
- `Not Restructured`

Checklist
- [ ] Visited the map and verified all states
- [ ] Updated **Electricity Choice Type** where discrepancies were found
- [ ] Saved changes and updated the change log (date, initials, scope)

> Tip: If your process also maintains **Electric Choice Links** or **Customer Segment Eligibility** in the State tab, review them while you’re there to avoid multiple passes.

---

## Information

The **Information** tab documents column definitions and field-level guidance used across the Master DataBook. Maintain this tab as the single source of truth for column meanings and any special formatting rules.

Tasks
- Add or edit column definitions when the data model changes.
- Document delimiter conventions for concatenated fields.
- Note which columns are binary indicators, which are program counts, and which are free-text.

Checklist
- [ ] Keep each column definition concise and include examples
- [ ] Add a version or updated date when making edits
- [ ] If formatting rules change (new delimiter, data type), update downstream tabs guidance

---

## Update Tracker

The Update Tracker is a lightweight sheet that records current work-in-progress, files consumed, and status. It helps team members see which updates are in-flight and who is responsible.

Tasks
- Record each update task with: owner, date started, sources used, expected completion.
- Flag any blocking issues (missing fields, unclear source values, ingest errors).

Checklist
- [ ] Each active update has a row with owner and status
- [ ] Completed updates are archived with a link to the change log entry

---

## Documentation

Track documentation-specific work here: this repository (the docs), the Master DataBook's `Information` tab, and any readme notes in the workbook.

Tasks
- Add clarifying notes for fields that cause repeated confusion.
- Keep short how-to steps for recurring processes in this repo under `docs/`.
- When substantial structural changes occur, add a short changelog note and update the README.

Checklist
- [ ] Documentation edits saved to the repo with a small changelog entry
- [ ] README updated for major workflows or file locations
- [ ] Examples (screenshots or sample CSVs) added when helpful