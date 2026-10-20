# SQL and VBA Productivity & Data Quality Automations

## Overview

A set of SQL scripts and VBA macros built to solve day-to-day productivity needs in migration and consulting work: data deduplication, targeted extraction, and structural validation of spreadsheets before they're submitted for loading.

## Problem solved

Repetitive data-checking and cleanup tasks (checking whether a spreadsheet is in the right format, removing duplicate tax IDs, extracting responsible parties from a database) consume manual time and are prone to human error when done by hand, especially under volume and deadline pressure.

## Context

These scripts were created across different migration and consulting projects as targeted support tools — not as a single product, but as a reusable toolbox to speed up specific steps of the process.

## My role

- Writing SQL scripts to eliminate duplicate contacts and duplicate tax IDs in migrated databases.
- Writing targeted SQL extraction scripts (e.g., extracting responsible parties from a source database).
- Developing VBA macros to validate, sheet by sheet, whether a migration spreadsheet exactly follows the column structure expected by Legal One before it's submitted for loading.

## Technologies used

- **SQL Server** (T-SQL).
- **VBA (Visual Basic for Applications)**, integrated with Excel.

## Solution implemented

### Deduplication and extraction SQL scripts

- `elimina_duplicidade_contatos.sql` and `tira_duplicidade_cpf.sql` — identify and treat duplicate contact records by tax ID in databases migrated from competitors, before the final load.
- `extrai_responsaveis.sql` — targeted query to extract the list of responsible parties from a source database, used as input for a specific migration project.

### VBA spreadsheet validator

A set of ~7 macros (`CONFERE_CONTATOS.VBA` and related files) walks through each sheet of a standard migration spreadsheet (Contact, Custom Fields, Group, Phone, Email, among others) and compares the column structure found against the structure expected by Legal One, flagging discrepancies before the spreadsheet is submitted for loading — preventing structural errors from only being discovered later, during import.

## Technical process (summary)

```
Completed migration spreadsheet
   └─> VBA macro walks through each sheet
        └─> Compares found columns against expected structure
             └─> Flags discrepancies before submission for loading
```

```
Source database (competitor) or already-migrated database
   └─> SQL deduplication / targeted extraction script
        └─> Treated database, ready for the next process step
```

## Challenges and decisions

- **Standardization without a central system**: each script solves a specific need; keeping them as simple, direct scripts (rather than a more complex system) prioritized delivery speed for small, recurring requests.
- **Early validation**: the VBA validator was designed to catch structural errors **before** loading, avoiding rework in the next process step.

## Impact and metrics

| Metric | Value | Classification |
|---|---|---|
| Number of spreadsheet-validation VBA macros identified | 7 macros covering different sheets of the migration standard | **Evidence-backed** |
| Number of targeted deduplication/extraction SQL scripts identified | 3 distinct scripts (contact deduplication, tax-ID deduplication, responsible-party extraction) | **Evidence-backed** |
| Rework reduction at the loading stage | Expected from catching structural errors early, but not numerically measured | **Estimate**, to be validated |
| Time saved per automated run vs. manual checking | Not quantified | **Pending validation** |

## Skills demonstrated

- Writing SQL for data treatment and deduplication.
- VBA programming for Excel validation automation.
- Preventive thinking: validating structure before the critical step (loading), not after.

## Soft skills demonstrated

- **Focus on productivity and continuous improvement**: building small tools to eliminate repetitive manual tasks.
- **Proactivity**: anticipating problems (spreadsheet structure errors) before they affect later process steps.

## Improvement points and lessons learned

- The scripts are scattered across different project folders with no central catalog — organizing them into a reusable library would make reuse easier for other team members.
- There are no automated tests for the SQL scripts — for scripts that touch production data, even simple pre/post verification tests would add more safety.

## Confidentiality and anonymization

- No client names are disclosed in this document.
- No real spreadsheet or database data is reproduced.

## Available evidence

- SQL scripts and VBA macros identified in project folders (file names and structure, no data content).

## Publication status

**Publishable after anonymization** — can be published with generic code snippets (no real client data).
