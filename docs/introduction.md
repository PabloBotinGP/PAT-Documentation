# Introduction

This documentation defines the **annual data update process** for the PAT (Procurement Analysis Tool) Master DataBook. It provides a clear roadmap for maintaining the accuracy, consistency, and usability of the data that powers PAT.

## What is PAT?
The **Procurement Analysis Tool (PAT)** is an NREL platform designed to simplify utility-scale energy procurement for organizations of all sizes. Whether you're a commercial buyer, local government, university, utility provider, or regulator, PAT helps you navigate the complex landscape of off-site energy procurement with data-driven insights and scenario planning capabilities.

PAT empowers users to:

- **Explore energy opportunities** across the United States, including land-based wind, solar, and battery storage technologies.
- **Compare procurement pathways** such as Power Purchase Agreements (PPAs), Competitive Suppliers, Green Tariffs and Green Pricing.
- **Run scenario simulations** across multiple sites to evaluate the best energy solutions for your organization.
- **Access personalized results** tailored to your specific goals, experience level, and risk tolerance.

## Where to Start
**Before diving into the data update process**, we strongly encourage you to explore PAT at [https://pat.nrel.gov/](https://pat.nrel.gov/) and create your own energy procurement scenario. Understanding how the tool works and what data ultimately powers these analyses is crucial for maintaining intentionality throughout the data collection and integration process. By interacting with PAT's features—from technology insights to downloadable resources—you'll better understand the quality and precision required for the underlying Master DataBook.

## What is the Master DataBook and How Does It Support This Tool? 
The Master DataBook is a comprehensive Excel file that serves as the backbone of the PAT tool. It consolidates years of collected data and provides the essential information required for PAT to identify procurement options for its users. This Excel file is organized into multiple interrelated tabs, ensuring that updates in one area are reflected across the entire dataset. For a detailed explanation of the structure and how to update these tabs, refer to the [Data Architecture](data_architecture.md) section.

## Steps 

The process can be summarized into three key stages, each critical to ensuring the accuracy, consistency, and usability of the data:

- **Data Collection** — This involves identifying and gathering new procurement options from both recurring and spontaneous sources. Recurring sources include regularly published reports such as LevelTen quarterly updates or annual EIA releases. Spontaneous sources may arise in various forms (e.g., news, articles) and should be included as they are found. The goal is to ensure that all relevant data is captured and stored in the "Current Data Collection" folder for future processing.

- **Data Cleaning** — This step focuses on evaluating, pre-processing, and standardizing the collected information. It involves extracting the relevant data and adapting it into the Master DataBook structure. This ensures that the data is accurate, reliable, and ready for integration.

- **Data Integration** — The final step involves updating the Master DataBook with the cleaned and standardized data. This includes organizing the data into the appropriate tabs, ensuring inter-tab consistency, and injecting the new data into a new version of the Master DataBook.



