# Database-to-Database Migration Between Competing Legal Platforms

## Overview

Technical consulting work on data migration projects between competing legal case-management systems (source platforms) and Legal One (target platform), covering everything from direct database extraction to final load, using a structured, documented pipeline version-controlled in a Git repository shared with the migration team.

## Problem solved

Law firms switching case-management systems need to bring their entire history — contacts, cases, services, activity logs, appointments, tasks, financial positions — into the new platform without losing data or breaking relationships between entities (e.g., a case must stay linked to its contacts, activity log entries, and responsible parties). Doing this manually is unworkable beyond a few hundred records; without a standardized process, every migration reinvents the logic from scratch, increasing error risk and delivery time.

## Context

Migrations originated from several different competing platforms (internally identified as Astrea, Projuris, CPJ, and CP-PRO, among others), each with its own data model, all different from Legal One's. Work was executed via SQL scripts run directly against the source database (a "database-to-database" approach), complemented by a standardized spreadsheet template (X-One) for cases where direct extraction wasn't possible or didn't cover 100% of the fields.

## My role

- Development and maintenance of SQL extraction scripts, organized by data module (Contacts, Cases, Services).
- Building pre-processing routines on the source database (auxiliary columns/tables, helper functions) and pre-load processing on the target database (duplicate CPF/tax-ID handling, address handling, duplicate email handling, position registration).
- Running post-load integrity checks and corrections (integrity validation, linking activity-log comments to tasks, fixing time inconsistencies introduced during load).
- Ongoing collaboration in a Git repository shared with the migration team, versioning SQL scripts and client-specific "mapping" spreadsheets.
- Practical application of this process across real migration projects from multiple competing platforms.

## Technologies used

- **SQL Server** (T-SQL) — data extraction, transformation, and loading.
- **Git/GitHub** — collaborative version control of the migration pipeline (internal company repository).
- **Excel** — standard mapping spreadsheets and a complementary load template (X-One standard: Contacts, Client Contracts, Fee Agreements, Cases, Services).
- **PowerShell** — splitting large SQL scripts to make execution feasible (used on a high-volume project).

## Solution implemented

The process is structured as a **4-phase pipeline**, version-controlled in a Git repository shared with the rest of the migration team:

1. **Pre-extraction (source database)** — creating helper functions and temporary auxiliary tables on the competitor database before extracting data: formatting/validation functions (e.g., masking case numbers to the CNJ standard), flags indicating whether a contact is a client or a party to a case, temporary tables for tags and people involved in hearings/events/deadlines/tasks.
2. **Extraction by module** — SQL queries organized into three core modules mirroring Legal One's data structure:
   - **Contacts**: registration data, addresses, phone numbers, emails, groups, sub-contacts, users and their areas, linked activity logs, appointments/tasks (including custom fields and by responsible party).
   - **Cases**: core data, related cases, subject matter, financial classifications, judicial escrow accounts, tags, guarantees/deposits (including custom fields), objects, other parties involved, requests (with classifications, reasons, and objects), positions, timesheets, activity logs, appointments/tasks.
   - **Services**: core data, activity logs, financial classifications, appointments/tasks (with reminders, custom fields, responsible parties), other parties involved, timesheets, links.
3. **Pre-migration (target database)** — treatments applied before the final Legal One load: duplicate tax-ID handling, address handling, third-party position correction, position registration (including for the Services module), duplicate email correction, and handling of "other parties involved" and notes inherited from the source platform.
4. **Post-migration** — integrity checks on loaded data, tag insertion, linking activity-log comments to their respective tasks, and correction of time inconsistencies generated during load.

Every "mapping" spreadsheet used in the process follows a documented operational safety rule recorded in the repository itself: always remove Excel password protection before processing the file, to avoid silent read failures.

## Technical process (summary)

```
Source database (competitor platform)
   └─> Pre-extraction: helper functions + temporary tables
        └─> Extraction by module (Contacts / Cases / Services) via SQL
             └─> "Mapping" spreadsheet (client-specific treatment)
                  └─> Pre-migration on target: tax ID, address, email, positions
                       └─> Load into Legal One
                            └─> Post-migration: integrity, tags, links, corrections
```

## Challenges and decisions

- **Incompatible data models across platforms**: each source system organizes contacts, cases, and services differently — every field and every relationship between entities had to be manually mapped for equivalence.
- **Referential integrity**: derived fields (e.g., whether a contact is a client or a party to a case) weren't readily available from the source and had to be computed via dedicated queries before extraction.
- **Data volume**: on at least one project, the load script exceeded 170 MB and had to be split via PowerShell to make batch execution feasible.
- **Standardization vs. case-by-case needs**: the pipeline is generic and reusable, but each client requires specific adjustments (e.g., handling notes inherited from the source platform) — the repository structure allows recording these exceptions without compromising the standard process.

## Impact and metrics

| Metric | Value | Classification |
|---|---|---|
| Data modules covered by the extraction pipeline | 3 core modules (Contacts, Cases, Services), totaling 40+ SQL extraction scripts per entity/sub-entity | **Evidence-backed** (file count in the repository) |
| Pre/post-processing scripts (pre-extraction, pre-migration, post-migration) | 14 dedicated data-treatment and integrity scripts | **Evidence-backed** |
| Personal contribution to the shared pipeline repository | 92 commits between May and October 2026, ~5 months of continuous activity, touching 209 `.sql`, 34 `.xlsx`, and 20 `.json` files | **Evidence-backed** (Git history) |
| Size of the team maintaining this repository | 18 active contributors in the history (1,291 total commits) | **Evidence-backed** |
| Source platforms handled | 4+ distinct competing platforms, with at least 20 documented migration cases in the local files analyzed | **Evidence-backed** (project folder count) |
| Largest data volume handled in a single project | ~170 MB load script, split into 44 files for execution | **Evidence-backed** (file size) |
| Total records migrated for this type of project | Not quantified in the files analyzed | **Pending validation** — you could pull this figure from load reports, if they exist |
| Total clients served in database-to-database (competitor) migration over the last 2 years, via reseller partners | More than 25 (a subset of the 30+ total clients served across all service types, confirmed by the author) | **Confirmed** |

## Skills demonstrated

- Modeling, extraction, and transformation of complex relational data (SQL Server).
- Mapping equivalence between heterogeneous data models.
- Building documented, reproducible, version-controlled ETL pipelines.
- Collaborative work in a Git repository shared by a technical team of at least 18 people, with a sustained multi-month contribution history.
- Handling large data volumes and partitioning execution when needed.
- Post-load integrity verification and proactive inconsistency correction.

## Soft skills demonstrated

- **Team technical collaboration**: regular, sustained contribution to a shared-use repository, respecting conventions already established by the team.
- **Attention to operational detail**: documenting simple but critical rules (e.g., removing Excel passwords before processing) that prevent silent failures for the whole team.
- **Structured thinking**: organizing the pipeline into clear, numbered phases, making it easier for other team members to execute.
- **Adaptability**: ability to work across multiple source platforms with different data models while maintaining the same process standard.

## Improvement points and lessons learned

- The repository still lacks written documentation explaining the pipeline to new team members (which this portfolio document itself helps address, in generalized form).
- Metrics on records migrated per project weren't systematically recorded — a future improvement would be standardizing a load report with record counts per module.
- Some client-specific treatment scripts could be generalized into reusable parameters, reducing the need to create one-off variations for each new case.

## Confidentiality and anonymization

- Names of law firms (clients) are **not disclosed** in this document.
- Names of competing platforms (Astrea, Projuris, CPJ, CP-PRO) and the target platform (Legal One) are disclosed with the author's explicit authorization, as they are market products, not confidential third-party data.
- Names of teammates who also contribute to the repository are not disclosed.
- No real spreadsheet row data, tax IDs, addresses, or contact details were reproduced.

## Available evidence

- Commit history of the shared Git repository (repository name available for internal verification, not publicly reproduced in this document).
- Folder structure and SQL script names organized by module (Contacts/Cases/Services).
- Project folders by source platform, with validation spreadsheets, treatment files, and error logs (metadata only, no data content).

## Publication status

**Publishable after anonymization** — the technical and process content can be published as-is (without client names); names of competing platforms and Legal One are already authorized.
