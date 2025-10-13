# Data Architecture

This section explains how the project folders are organized, how the **Master DataBook** is structured, and how it integrates into the tool.

---

## Folder Organization

The PAT Master DataBook project is organized into three main parts:

- **Collected_Data/**
  - **Archive/** — stores all data from previous collection rounds.  
  - **New Data Collection (YYYY-MM-DD)/** — holds current-cycle datasets.  
    - Move contents to *Archive* once integration is complete.  

- **DataBook/**
  - **Archive/** — contains old versions of the Master DataBook.  
  - **Master DataBook_<date>.xlsx** — the current Master DataBook (filename must include last modification date).  
    - **Tab: *PPA-National&BA*** — includes PPA prices from Level10 (inputs for other tabs).  
    - **Tab: *Options with Unique Utilities*** — candidate for rename to *Main*; consolidates program data; **one of two tabs Jill uses directly**.  
    - **Tab: *Competitive Suppliers*** — the other tab required by Jill.  
    - *(continue listing tabs as needed)*  

- **Update_Materials/**
  - **EIA_Lists/** — yearly releases by EIA with data about states, utilities, etc.  
  - **Paste_Update reports/** — dated reports from prior update processes.  
  - **Must_Use/** — canonical reference files that must be used every cycle (may duplicate elsewhere).  

---

## Key Principles

- The **Master DataBook** is the central integration point:
  - Always include the modification date in the filename.  
  - Only *Options with Unique Utilities* and *Competitive Suppliers* are exported and delivered to Jill.  

- **Collected_Data** is the staging ground:
  - Gather datasets here during the year.  
  - After integration, move them to **Archive** for traceability.  

- **Update_Materials** provides references:
  - Quick-access folder to support the update process.  
  - **Must_Use/** acts as the canonical set of references.
