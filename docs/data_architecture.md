# Data Architecture

This section explains how the project **folders** are organized and how the **Master DataBook** is structured.

---

## Folder Organization

The PAT [**Master DataBook**](https://nrel.sharepoint.com/:f:/r/sites/ProcurementAnalysisTool/Shared%20Documents/General/Master%20Databook?csf=1&web=1&e=6Vmbwo) folder is organized into three main parts:

- [**Collected_Data**](https://nrel.sharepoint.com/:f:/r/sites/ProcurementAnalysisTool/Shared%20Documents/General/Master%20Databook/Collected_Data?csf=1&web=1&e=4gwqQe)
    - [**Archive**](https://nrel.sharepoint.com/:f:/r/sites/ProcurementAnalysisTool/Shared%20Documents/General/Master%20Databook/Collected_Data/Archive?csf=1&web=1&e=6aSM8T): Stores all data from previous collection rounds. This ensures traceability and provides a historical repository for past datasets.
    - [**New Data Collection (YYYY-MM-DD)**](https://nrel.sharepoint.com/:f:/r/sites/ProcurementAnalysisTool/Shared%20Documents/General/Master%20Databook/Collected_Data/New%20Data%20Collection?csf=1&web=1&e=WJZagI): Temporary storage for current-cycle datasets. Once integration is complete, move the contents to the *Archive* and create a new empty folder for the next cycle.

- [**DataBook**](https://nrel.sharepoint.com/:f:/r/sites/ProcurementAnalysisTool/Shared%20Documents/General/Master%20Databook/DataBook?csf=1&web=1&e=BpWwzl)
    - [**Archive**](https://nrel.sharepoint.com/:f:/r/sites/ProcurementAnalysisTool/Shared%20Documents/General/Master%20Databook/DataBook/Archive%20(Old%20DataBooks)?csf=1&web=1&e=GecjW9): Contains old versions of the Master DataBook. Ensure each version is appropriately dated for reference.
    - **Master DataBook_YYYY-MM-DD.xlsx**: The current Master DataBook. Always include the last modification date in the filename. Ideally, maintain only one version per year.

- [**Update_Materials**](https://nrel.sharepoint.com/:f:/r/sites/ProcurementAnalysisTool/Shared%20Documents/General/Master%20Databook/Update_Materials?csf=1&web=1&e=ik8NGS)
    - [**EIA_Lists**](https://nrel.sharepoint.com/:f:/r/sites/ProcurementAnalysisTool/Shared%20Documents/General/Master%20Databook/Update_Materials/EIA_Lists?csf=1&web=1&e=A4mxoX): Yearly releases by EIA with data about states, utilities, and other relevant information.
    - [**Paste_Update reports**](https://nrel.sharepoint.com/:f:/r/sites/ProcurementAnalysisTool/Shared%20Documents/General/Master%20Databook/Update_Materials/Must_Use?csf=1&web=1&e=gqjD3h): Dated reports from prior update processes.
    - [**Must_Use**](https://nrel.sharepoint.com/:f:/r/sites/ProcurementAnalysisTool/Shared%20Documents/General/Master%20Databook/Update_Materials/Past_Updates_Reports?csf=1&web=1&e=NXb9TY): Canonical reference files that must be used every cycle.

---

## Key Principles

- The **Master DataBook** is the core of the project, consolidating all data from previous updates. While only *Options with Unique Utilities* and *Competitive Suppliers* are exported for Jill/Web Development, other tabs contain critical metadata and interconnected data.

- **Collected_Data** serves as the staging ground for all collected data. Throughout the year and during the update process, datasets are stored here temporarily. After integration, move the data to **Archive** and reset the folder for the next cycle.

- **Update_Materials** provides essential references and frequently used information. The **Must_Use** folder acts as the canonical set of references to ensure consistency across update cycles.
