# Competency Matrix

## How the scale works

Every assessed competency receives a score from 1 to 5, based exclusively on evidence found in real files (code, scripts, spreadsheets, Git history) — never on generic self-assessment. No score was assigned without corresponding evidence; where evidence is insufficient, this is stated explicitly as **"Insufficient evidence for a conclusive assessment"**.

| Score | Level | What it means in practice |
|---|---|---|
| **1** | Initial knowledge | Occasional or theoretical contact with the topic; no evidence of recurring practical application. |
| **2** | Applied basic knowledge | Has applied the competency in simple or isolated situations, with supervision or limited scope. |
| **3** | Applied intermediate knowledge | Applies the competency independently in real scenarios, with consistent results, but still within a defined scope. |
| **4** | Applied advanced knowledge | Masters the competency across complex, varied scenarios, with autonomy, quality, and adaptability to different contexts. |
| **5** | Proven reference-level autonomy | A maturity level where the person not only applies the competency with excellence, but also drives it forward proactively (creates process, teaches others, sustains the result over time). |

The matrix is split into two parts: **Technical Competencies** (tools, languages, and data-engineering practices) and **Soft Skills** (behaviors and cross-cutting capabilities observable across the projects).

---

## Technical Competencies

| Competency | Score | Key evidence | Related projects | Gaps | Suggested next step |
|---|---|---|---|---|---|
| SQL & SQL Server | 4 | 40+ modular extraction scripts, 14 pre/post-treatment scripts, declarative/execution/rollback pattern in 23+ client cases | Migration, Recurring Consulting, SQL/VBA Automations | No evidence of stored procedures, triggers, or index/query-plan optimization | Document a query-optimization or performance-diagnosis case, if one exists |
| Data modeling, querying & manipulation | 4 | Mapping equivalence across heterogeneous data models (Astrea/Projuris/CPJ/CP-PRO → Legal One); database documentation in `BANCO_CLAUDE` | Database-to-Database Migration | No formal ER diagrams found | Add a simplified (no sensitive data) data-flow diagram for Contacts/Cases/Services |
| Migration & data transformation | **5** | Core of the body of work: 92 commits in a migration pipeline repo over ~5 months; 23+ migrated clients across multiple platforms; documented 4-phase pipeline | Database-to-Database Migration | None relevant | Quantify total records migrated across career, if reconstructable |
| Data quality, validation & sanitization | 4 | Contact Deduplication Tool (original authorship); tax-ID deduplication scripts; VBA spreadsheet validator; volume-comparison and error/warning extraction scripts | Contact Deduplication Tool, SQL/VBA & Python Automations | Name-similarity deduplication not implemented (only exact tax-ID match) | Track duplicate-rate found/fixed per tool run for a concrete impact metric |
| Python | 4 | Contact Deduplication Tool (Selenium + Tkinter + PyInstaller); 8 productivity scripts; documented evolution from `pyautogui` prototype to robust Selenium solution | Contact Deduplication Tool, Python Automations | No automated tests; hardcoded credentials in some scripts | Add basic unit tests; move credentials to environment variables |
| Selenium automation | 4 | Real element selection against the Legal One UI, replacing a fragile coordinate-based prototype; secure manual login (no stored credentials) | Contact Deduplication Tool | No documented explicit waits, cross-browser testing, or headless execution | Document specific Selenium design decisions (wait strategies, dynamic elements) |
| VBA & Excel automation | 3 | 7 structural-validation macros covering multiple migration-spreadsheet tabs | SQL/VBA Automations | Scope limited to what was found (validation only) | Document any additional macros built over the career, if they exist |
| Technical documentation | 2 | `Documentação de Scripts` folder was empty; no READMEs found in personal projects (unlike the team repo, which already had its own documentation structure) | All (indirectly, via absence) | Largest gap identified in the whole analysis | This portfolio is the first step; write a short README for every new script/tool going forward |
| Script maintenance & support | 4 | Recurring consulting for 23+ already-migrated clients, each requiring diagnosis, adjustment, and rollback plan; versioned tool evolution (`ANTIGO` vs. `NOVO_UNIFICADOR`) | Recurring Consulting, Contact Deduplication Tool | None relevant | None relevant |
| Code organization & reuse | 3 | Generic, parameterized Excel importer; consistent 3-file pattern repeated across 23+ cases | Python Automations, Recurring Consulting | No central shared library; scripts scattered across client folders | Consolidate productivity scripts into one personal repository with minimal docs |

---

## Soft Skills

| Competency | Score | Key evidence | Related projects | Gaps | Suggested next step |
|---|---|---|---|---|---|
| Requirements analysis | 3 | Translating client adjustment requests into SQL; autonomously identifying the duplicate-contact problem and designing a solution | Recurring Consulting, Contact Deduplication Tool | No formal requirements artifacts (specs, user stories) found | Briefly record problem/requirements before building new tools going forward |
| Problem solving | 4 | Technical approach evolution (pyautogui → Selenium); rollback pipeline to mitigate production-change risk; self-initiated fix for an operational bottleneck | Contact Deduplication Tool, Recurring Consulting | None relevant | Keep documenting "before and after" for each solution |
| Business-process understanding | 4 | Correct interpretation of legal business rules (case type, cost center, case status); understanding of the traditional extraction/staging/SLA cycle that motivated the Contact Deduplication Tool | Recurring Consulting, Contact Deduplication Tool | None relevant | None relevant |
| Autonomy | **5** | Unsolicited creation of the Contact Deduplication Tool, from idea to distribution and training; end-to-end ownership of recurring consulting cases | Contact Deduplication Tool, Recurring Consulting | None relevant | None relevant |
| Technical communication | 3 | Formal email-approval workflow before every recurring-consulting execution; training video produced for the Contact Deduplication Tool | Recurring Consulting, Contact Deduplication Tool | Content of emails/video not analyzed (confidentiality) | No action needed — scope limitation, not an evidence gap |
| Collaboration with consultants & cross-functional teams | 4 | 92 personal commits in a team repo with 18 active contributors, respecting established conventions; deduplication tool distributed to and used by other consultants | Database-to-Database Migration (Git repo), Contact Deduplication Tool | None relevant | None relevant |
| Productivity focus & continuous improvement | 4 | 8 Python scripts and 7 VBA macros built specifically to eliminate repetitive manual tasks; visible iteration from fragile to robust automation | Python Automations, SQL/VBA Automations, Contact Deduplication Tool | No quantitative time-saved metrics | Time at least one manual vs. automated case for a concrete productivity metric |
| Risk management with sensitive data | 3 | Rollback pattern on every production change (strength); no embedded credentials in the Contact Deduplication Tool (strength); **however**, plain-text database credentials found in at least 3 Python productivity scripts (real, not theoretical, risk) | Recurring Consulting, Contact Deduplication Tool, Python Automations | Credential management needs immediate improvement, independent of the portfolio | Rotate exposed credentials and migrate to environment variables or a secrets vault — top priority across this whole matrix |
