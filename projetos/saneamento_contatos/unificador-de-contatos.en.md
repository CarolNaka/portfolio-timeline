# Contact Deduplication Tool — Original Idea and Solution

## Overview

A tool built in Python, with browser automation via Selenium and a Tkinter graphical interface, distributed as an executable to consultants who work directly with clients. Its purpose is to identify and merge duplicate contacts directly in the Legal One database, using the system's own native merge function, with far more autonomy than the traditional process.

This is a project of **original idea and authorship**: conception, solution design, and implementation driven by an operational need identified in day-to-day work.

## Problem solved

Migrated (or long-running) client databases accumulate duplicate contacts — the same person or company registered more than once, usually due to name variations, multiple imports, or inconsistent manual entries. Fixing this through the traditional process required: extracting the production database, moving it to a staging/QA environment, treating the data outside the client's live environment, waiting for SLA release, and only then applying the fix back to production — a long cycle, dependent on the migration team, that blocks the consultant on the ground, working directly with the client.

## Context

The tool was built specifically to solve this bottleneck: letting the consultant themselves, without depending on the migration team, identify and merge duplicate contacts by acting directly (in real time, in the background) on the client's database, using Legal One's native features, fully respecting the system's existing processes and permissions.

## My role

- Identifying the need and conceiving the solution (an original idea, not a formal request from a third party).
- Initial prototype using screen-coordinate automation (`pyautogui`), which validated the idea but proved fragile, since it depended on the exact on-screen position of elements.
- Evolving to a more robust version based on **Selenium**, which locates real interface elements in Legal One (instead of fixed coordinates), making the automation resilient to small layout changes.
- Building a dedicated graphical interface (Tkinter) so any consultant, even without programming knowledge, could operate the tool.
- Packaging the application into a single executable (via PyInstaller), removing the need to install Python or libraries on the end user's machine.
- Generating an Excel execution log, color-coded by status (success/error), so the consultant can track the outcome of each merge.
- Producing training material (video) to roll the tool out to other consultants.

## Technologies used

- **Python** — the application's main language.
- **Selenium WebDriver** — browser automation to interact with Legal One's native contact-merge screen.
- **Tkinter** — desktop graphical interface.
- **openpyxl / pandas** (spreadsheet handling) — reading the contact database and generating the log report.
- **PyInstaller** — packaging the Python application into a distributable `.exe`.
- **pyautogui** (earlier prototype version) — first automation approach, later replaced by the Selenium-based version.

## Solution implemented

From the consultant's perspective, the tool works in three steps:

1. **Manual login and data load**: the consultant opens the tool, manually logs in via the browser controlled by the application (no credentials are stored in the code), and points it to the contacts spreadsheet to analyze.
2. **Duplicate identification**: the tool groups contacts by tax ID (CPF/CNPJ) to find duplicate records in the database.
3. **Automated merging**: for each group of duplicates found, the tool triggers Legal One's own native "Merge Contacts" function via Selenium — in other words, it doesn't implement its own merge logic; it automates the flow the system already provides, just faster and in batch. At the end, it generates a color-coded Excel report indicating the outcome of each merge (success or error).

Because it runs as browser automation controlled by the application itself (headless/in the background), the process frees the consultant to continue other activities while the merge runs.

## Technical process (summary)

```
Client contacts spreadsheet
   └─> Manual login in the browser controlled by the tool
        └─> Grouping duplicate contacts by tax ID (CPF/CNPJ)
             └─> For each group: trigger Legal One's native "Merge Contacts" function via Selenium
                  └─> Excel execution log (color-coded by status)
```

## Challenges and decisions

- **Fragility of the first version**: the initial screen-coordinate automation (`pyautogui`) broke with any change in resolution or window position — rewriting it with Selenium, using real page-element selection, fixed this at the root.
- **Credential security**: the decision was made to require the consultant's own manual login in the browser controlled by the tool, instead of storing username and password in the code — reducing credential exposure risk.
- **Usability for a non-technical audience**: the Tkinter interface and single-executable packaging were deliberate choices so consultants without programming knowledge could operate the tool without constant technical support.
- **Technical honesty**: this tool is not the most sophisticated solution from a software-architecture standpoint (it's an interface-automation script, not an API integration, for example) — but it was the right solution for the real problem: giving the consultant autonomy within the system's existing constraints and resources.

## Impact and metrics

| Metric | Value | Classification |
|---|---|---|
| Reduction in the traditional deduplication process steps | From a cycle of extraction → staging → treatment → SLA wait → release, to a direct action by the consultant in production | **Fact confirmed by the solution's architecture** (eliminating intermediate steps is inherent to the tool's design) |
| Migration-team dependency for this type of adjustment | Eliminated for the duplicate-contact scenario covered by the tool | **Fact confirmed by the solution's architecture** |
| Consultant autonomy | Increased — the consultant performs the action directly, without filing a ticket to another team | **Fact confirmed by the solution's architecture** |
| Evidence of real use on client data | Merge logs and duplicate-contact spreadsheets found in a real project folder, with filename and execution timestamp | **Evidence-backed** (`log_unificacao_20260714_190548.txt` file and related spreadsheets) |
| Existence of formal training material | ~36 MB training video documented | **Evidence-backed** |
| Number of clients/consultants who have used the tool | Not quantified in the files analyzed | **Pending validation** |
| Average time saved per merge vs. the traditional process | Not quantified in the files analyzed | **Pending validation** — you could estimate by comparing the traditional cycle time (days, due to SLA dependency) against direct tool usage time (minutes/hours) |

## Skills demonstrated

- Autonomous identification of operational problems and proposal of a technical solution, without a formal third-party request.
- Python programming applied to real process automation (not just isolated scripts).
- Web interface automation with Selenium, including robust element selection.
- Building a graphical interface for non-technical users.
- Packaging and distributing Python applications for use by others without a development environment.
- Product iteration: evolving from a fragile prototype (pyautogui) to a robust, distributable version (Selenium + executable).

## Soft skills demonstrated

- **Initiative and product thinking**: identifying an operational bottleneck and independently building an end-to-end solution — from idea to training other users.
- **End-user focus**: prioritizing usability (simple interface, single executable) over merely solving the problem technically, keeping in mind who would actually use the tool day to day.
- **Pragmatism**: choosing the solution that solves the real problem within existing constraints, rather than chasing an "ideal" but unworkable architecture.
- **Knowledge sharing**: producing training material so the tool would benefit other consultants, not just the author.
- **Security awareness**: a deliberate decision not to embed credentials in the code, even for an internal-use tool.

## Improvement points and lessons learned

- The automation depends on Legal One's visual screen structure — changes to the system's interface may require code adjustments (a risk inherent to interface-based, rather than API-based, automation).
- There's no systematic record of how many times the tool was used or by how many consultants — adding basic telemetry (even local logging) would help quantify real impact.
- The tool resolves duplicates by tax ID (CPF/CNPJ); it could evolve to also detect duplicates by name similarity, covering more cases.
- Honestly, the architecture (Selenium-based interface automation) is a pragmatic solution, not the most technically sophisticated one — a future evolution could pursue a Legal One API integration, if available, reducing dependency on the visual interface.

## Confidentiality and anonymization

- No client names are disclosed in this document.
- The full source code is not published in this portfolio — only the architecture and workflow description, per the conservative approach adopted.
- No credentials were found in the code, and none would be reproduced under any circumstances.

## Available evidence

- Source code of the latest version (`unificador_contatos.py` and the `.spec` build file), analyzed internally to prepare this document.
- A previous prototype version (based on `pyautogui`), evidencing the solution's technical evolution.
- The tool's training video.
- Real execution logs and result spreadsheets found in a client project folder (metadata only, no real data reproduced).

## Publication status

**Publishable after anonymization** — the architecture, process, and impact description can be published in full; the complete source code will not be included in the public repository, only generic illustrative snippets, if desired in the future.
