# Python Productivity and Operational Support Automations

## Overview

A set of Python scripts aimed at specific productivity tasks in the context of data migration and maintenance: importing CSV/Excel files into a database, comparing record volumes between databases, extracting data from MySQL sources, and managing user access.

## Problem solved

Several steps in the migration and support process (checking whether two databases have the same record count, uploading an entire spreadsheet to a database, extracting data from a source MySQL database, resetting a user's access) were good candidates for simple automation that removes repetitive manual steps.

## Context

The scripts were developed as support tools running alongside the main migration and consulting work, each solving a specific need identified in day-to-day routine.

## My role

- Developing a generic, parameterized Excel-to-database importer (`importa_excel.py`), able to upload every sheet of a spreadsheet (or a specific one) while automatically sanitizing column names to make them compatible with the target database.
- Developing extraction scripts from source **MySQL** databases (activity logs and appointments/tasks), used as migration input.
- Developing database volume-comparison scripts (source vs. target, or production vs. staging environment), generating an Excel report with the results.
- Developing a Legal One user-access reset script via direct database update.
- Developing an error/warning extraction script, connecting to a database via `pyodbc`, running multiple verification SQL scripts, and consolidating the result into a formatted Excel file (Totals, Errors, and Warnings sheets).

## Technologies used

- **Python** (libraries: `pandas`, `openpyxl`, `pyodbc`, `sqlalchemy`, `pymysql`, depending on the script).
- **SQL Server** and **MySQL** — source and target databases, depending on the scenario.
- **Excel** — input format (load spreadsheets) and output format (reports).

## Solution implemented

### Generic Excel-to-database importer

`importa_excel.py` reads an entire Excel spreadsheet (every sheet, or one specified via parameter), sanitizes column names to the format accepted by the database, and inserts the data into the target table via `sqlalchemy` — eliminating the need to write a dedicated import script for every new spreadsheet.

### MySQL extraction

`extrai_mysql_andam.py` and `extrai_mysql_comptarf.py` connect to a source MySQL database and extract, respectively, activity-log data and appointment/task data, preparing them for the next step of the migration process.

### Volume comparison

`Compara_volumetria.py` and `Divergencia_volumetria.py` compare record counts between two databases (e.g., source and target, or before and after a treatment), supporting validation that no data was lost during the process.

### Error and warning extraction

`erros_avisos.py` (and its variant `extrai_erros_avisos.py`) connects to a database, runs verification SQL scripts, and organizes the result into an Excel report with Totals, Errors, and Warnings sheets — used to assess the quality of a recently completed load.

### Access reset

`reset_acessos.py` automates resetting user access directly in the Legal One database.

## Technical process (summary)

```
Data source (Excel, MySQL, SQL Server)
   └─> Dedicated Python script (import, extraction, comparison, or verification)
        └─> Updated target database OR consolidated Excel report
```

## Challenges and decisions

- **Point scripts vs. a single tool**: the decision to keep independent, single-purpose scripts prioritized delivery speed for specific needs, rather than investing time in a more complex unified tool.
- **Approach evolution**: the `Duplicidade_auto.py` prototype (based on `pyautogui`, screen-coordinate automation) later evolved into the Selenium-based approach used in the "Contact Deduplication Tool" project, documented separately — showing technical progression over time.

## Impact and metrics

| Metric | Value | Classification |
|---|---|---|
| Number of Python productivity scripts identified | 8 distinct scripts (import, MySQL extraction ×2, volume comparison ×2, errors/warnings, access reset, generic importer) | **Evidence-backed** |
| Source databases supported by the extraction scripts | SQL Server and MySQL | **Evidence-backed** |
| Time saved per automated run vs. the equivalent manual process | Not quantified in the files analyzed | **Pending validation** |
| Reduction in technical-knowledge dependency to upload a spreadsheet to the database | High — the generic importer eliminates the need to manually write insert SQL for every new spreadsheet | **Qualitative estimate**, not numeric |

## Skills demonstrated

- Python programming applied to data integration (Excel, SQL Server, MySQL).
- Use of database access libraries (`pyodbc`, `sqlalchemy`, `pymysql`) and spreadsheet manipulation libraries (`pandas`, `openpyxl`).
- Ability to identify repetitive manual tasks and generalize them into reusable scripts.

## Soft skills demonstrated

- **Productivity and continuous improvement**: building support tools to speed up recurring tasks within one's own workflow.
- **Reuse mindset**: building a generic importer (instead of a fixed script per spreadsheet), reducing effort on future similar requests.

## Improvement points and lessons learned

- ⚠️ At least 3 of these scripts contain database credentials in plain text in the source code — a clear improvement opportunity is migrating to environment variables or a secrets vault, reducing exposure risk.
- The scripts lack standardized error handling and automated tests — adding this would increase reliability in unsupervised runs.
- There's no formal usage documentation for each script (expected parameters, prerequisites) — useful so other team members could also use them.

## Confidentiality and anonymization

- No database credentials are disclosed or reproduced in this document, under any circumstance.
- No client names are disclosed.
- No real production data is reproduced.

## Available evidence

- Source code of the scripts, analyzed internally to prepare this document (not published in full).

## Publication status

**Publishable after anonymization and credential removal** — any code snippet to be published must first have hardcoded credentials removed and replaced with generic placeholders.
