# Update Process

The update process ensures the PAT Master DataBook remains accurate, consistent, and up-to-date. It involves the following steps:

## Sections
Quick links to the Update Process sections:

- [Overview](#update-process)
- [Data Collection](#data-collection)
- [Data Cleaning](#data-cleaning)
- [Data Integration](#data-integration)
- [Utilities Update](#options-with-utilities)
- [Competitive Suppliers](#competitive-suppliers-tab-update)
- [Utilities & States](#other-tab-updates)


## Data Collection
- Identify and gather new procurement options from recurring sources (e.g., LevelTen quarterly updates, annual EIA releases) and spontaneous sources (e.g., news, articles). Refer to the [Sources to Watch](sources_to_watch.md) section for a detailed list of sources.
- Store all collected data in the "Current Data Collection" folder for processing.

## Data Cleaning
- Evaluate, pre-process, and standardize the collected data.
- Adapt the data into the Master DataBook structure to ensure accuracy and reliability.

## Data Integration
- Update the Master DataBook with cleaned and standardized data.
- Organize the data into appropriate tabs, ensuring inter-tab consistency.
- Once updates have been applied and reviewed, create a copy of the new version of the Master DataBook that includes the latest updates on the Update Tracker tab. Save to a copy in Archive (include date on name). 
- Integration requires careful attention to formatting, delimiters, and consistency with existing records, so it is really important to create a copy in order to be able to revert future changes. 

## Tab-Specific Updates
- [**Options with Utilities**](#options-with-utilities): Document the process for updating utility-related data.
- [**Competitive Suppliers Tab Update**](#competitive-suppliers-tab-update): Outline the steps for updating competitive supplier data.
- [**Other Tab Updates**](#other-tab-updates): Include instructions for updating other relevant tabs.

### **Options with Utilities**
This tab is the primary dataset for procurement options and is the most important sheet in the Master DataBook. It contains the majority of procurement options and is the main dataset that must be delivered to the Web App development team (currently Jill).

The `Information` tab within the Master DataBook describes each column in detail. As a quick overview:

 - Columns A through (e.g., F) contain city / state / utility information — these fields are the primary keys used by the PAT tool.
 - The remaining columns are grouped by procurement option type (visually highlighted in blue in the Master DataBook). Each procurement type has several information columns to its right that capture program-specific details.

When integrating new procurement options, follow this two-step approach:

1. **Pre-clean:** Transform external procurement info (which comes in various forms) into the same column layout and formatting as the Master DataBook. This often requires filtering the original info but also performing additional research to populate all fields.

2. **Integrate:** Paste the pre-cleaned record(s) into the `Options with Utilities` tab following these rules: 

    - The procurement type column is a binary indicator (0/1). If an option of that type exists for a given utility, the cell should be set to `1`.

    - To the right of the binary column is a "program count" column that stores the number of programs for that procurement type. When adding a new program, ensure this count is accurate.

    - Some information columns for a procurement type are concatenated lists (separated by a ',,,' delimiter) when multiple programs exist for the same utility and type.

Integration scenarios (how to handle different cases):

- **City / Utility does not exist in the sheet**
	- Add a new row with the city and all related state/utility metadata. This will usually require extra research to identfy to which state and utility the city corresponds.
	- Copy the procurement option details from the pre-cleaned file into the corresponding procurement-type columns for the new row. Set the procurement-type binary to `1` and the program count to the appropriate number (usually `1` for a single new option).
    - Make sure to mantain formula cells. 

- **City / Utility already exists in the sheet**
	- Procurement type already has at least one option for this utility
		- Increment the program count by `1`.
		- Append the new program's values into the existing information cells for that procurement type using the agreed delimiter (e.g., ",,,"). Ensure the appended values are in the same column order and format as existing entries.

	- No options exist yet for this procurement type
		- Set the procurement-type binary to `1`.
		- Set the program count to `1` and directly paste the pre-cleaned program information into the procurement-type columns.

### **Competitive Suppliers Tab Update**

**What are Competitive Suppliers?**

Competitive suppliers (also called retail energy suppliers, third-party suppliers, or ESCOs in some states) are companies that sell electricity or energy services directly to end customers in certain states. They are distinct from standard regulated utilities in that:

- Standard utilities typically own or operate the distribution system and have obligation-to-serve responsibilities for customers within their service territory.
- Competitive suppliers do not generally own the local wires; instead they offer retail supply contracts, pricing, and services to customers in restructured markets where customers can choose their supplier.

Because competitive suppliers operate only in markets with retail choice, their coverage and identifiers (such as names and IDs) are typically reported at the market or state level rather than by local distribution territory. In the PAT Master DataBook, the Competitive Suppliers tab contains the list of these suppliers.

**Update Approach**

Updating Competitive Suppliers is generally more straightforward than some other tabs because the primary source — the EIA's EIA-861 data (Schedule 4B) — is published in a consistent format each release. That means the file layout rarely changes and updates can be handled by replacing the existing tab with the latest schedule export.

Note: historically Competitive Suppliers did not always include an `EIAID` value, but recent EIA-861 releases include EIA identifiers for suppliers. This is helpful because we can use `EIAID` as the key for matching and de-duplicating records.

**Steps**

1. **Primary source: EIA-861 Schedule 4B**

  - Download the Competitive Suppliers / Retail Power Market sales schedule (Schedule 4B) from the EIA EIA-861 page:
    https://www.eia.gov/electricity/data/eia861/

  - The Schedule 4B file is consistently formatted each release. Open the published CSV/Excel and inspect columns such as Supplier Name, State, and EIAID.

2. **Replace the Competitive Suppliers tab**

  - Save a dated copy of the source in `Update_Materials/`.

  - In the Master DataBook, create a new worksheet/tab named `Competitive Suppliers (YYYY-MM-DD)` or similar, paste the fresh Schedule 4B data into that tab, and verify column alignment.

  - Once verified, remove the previous `Competitive Suppliers` tab in the Master DataBook. 

4. **Record the update and deliver**

  - Add an Update Tracker entry: date, updater initials, source file name/version, and any normalization notes.

  - Export a values-only CSV (if required by the ingestion process) and notify Jill about the update. 

### **Utility & State Tabs**

The **Utility** tab contains metadata about utilities (service territory name, utility name, state, EIAID, and other identifying fields). Because many rows in the Master DataBook reference the same utility, keeping this information centralized reduces duplication: update the utility record once here and those changes propagate conceptually to any options that reference that utility. Use this tab to add newly discovered utilities, correct names or IDs, and maintain contact/territory information.

The **State** tab serves a similar purpose for state-level attributes: electricity choice status, average price references, official links, and customer-eligibility notes. Update state-level facts here so downstream inference (for example, which utilities operate in restructured markets or which fields should be populated automatically) remains consistent.