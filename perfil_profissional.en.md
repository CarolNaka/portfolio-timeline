# Professional Profile

> This summary was built exclusively from evidence found in real project files (code, scripts, spreadsheets, Git history) and from information provided directly by the author. No statement here is generic or "resume-template" language — every sentence is tied to a specific project documented in the `projetos/` folder.

## Specialty

**Database Analyst**, currently a data intern at Thomson Reuters, working on data migration and database mapping projects. Uses SQL Server to build scripts and support pipeline executions, and also follows processes in Azure Data Factory — analyzing logs and fixing errors until the final delivery is consistent. Has solid experience migrating data between competing systems (Astrea, Projuris, CPJ, CP-PRO) and Legal One, including recurring database consulting and building proprietary automation tools.

## Types of problems solved

- **Data migration between systems with incompatible models**, including direct extraction from the source database, treatment, mapping, and loading via a documented, version-controlled pipeline (see [database-to-database migration](projetos/migracoes/migracao-banco-a-banco-concorrentes.en.md)).
- **Safe production database adjustments**, with a proprietary diagnose → approve → execute → rollback pattern, applied consistently across at least 23 documented client cases (see [recurring consulting](projetos/consultoria_recorrente/consultoria-recorrente-legal-one.en.md)).
- **Eliminating operational bottlenecks through self-built automation**, as in the Contact Deduplication Tool — an original idea and solution that removes dependency on another team to resolve duplicate contacts (see [Contact Deduplication Tool](projetos/saneamento_contatos/unificador-de-contatos.en.md)).
- **Data quality and validation before and after loading**, with deduplication scripts, volume comparison, and structural spreadsheet validation (see [SQL/VBA automations](projetos/automacoes_sql_vba/automacoes-sql-vba.en.md) and [Python automations](projetos/automacoes_python/automacoes-produtividade-python.en.md)).

## Core technologies

| Technology | Where it's used |
|---|---|
| SQL Server (T-SQL) | Extraction, transformation, loading, recurring consulting, deduplication |
| Azure Data Factory | Pipeline monitoring, log analysis, and error fixing through final delivery (current role at Thomson Reuters) |
| Python | Interface automation (Selenium), data import, MySQL extraction, volume comparison |
| Selenium | Contact deduplication tool |
| Tkinter | Graphical interface for the contact deduplication tool |
| VBA | Structural validation of migration spreadsheets |
| Git/GitHub | Collaborative version control of the standard-spreadsheet (X-One) migration pipeline, with a history of 92 personal commits over ~5 months, in a repository maintained by 18 people |
| Excel | "Mapping" spreadsheets, validation reports, execution logs |
| PowerShell | Splitting high-volume SQL scripts |

## Differentiators

- **Product initiative**: autonomously identifying a real operational problem (duplicate contacts) and building a complete solution — from idea to training other users — without it being a formal request.
- **Operational safety discipline**: systematically applying a "diagnostic script + formal approval + execution + rollback" pattern to every direct production database intervention, reducing risk in a sensitive-data context.
- **Sustained collaborative work**: consistent contribution (92 commits over ~5 months) to a team repository with 18 contributors, maintaining the standards already established by the group.
- **Visible technical evolution**: documented progression from a fragile screen-coordinate automation (`pyautogui`) to a robust automation based on real element selection (Selenium) — evidence of learning and technical growth over time.
- **Honest pragmatism**: consciously choosing solutions that solve the real problem within existing constraints, even when they're not the most technically sophisticated architecture.

## Operational impact

- **More than 30 clients served overall**, combining competitor migration, recurring consulting, and data sanitization.
- Active participation in migrations from at least 4 distinct competing platforms, with more than 25 clients served via reseller partners in this specific subset.
- Recurring consulting support for at least 23 already-migrated clients, always with a documented rollback plan.
- Elimination, for the duplicate-contact scenario, of an extraction/staging/treatment/SLA cycle that previously depended on another team — replaced by a direct action from the consultant themselves.

## Technical and behavioral skills

See the full breakdown, with evidence and notes per skill, in [matriz_de_competencias.en.md](matriz_de_competencias.en.md).

**Summary:**
- Technical: SQL Server, data modeling/transformation, Python, Selenium, VBA, Git, technical documentation.
- Behavioral: autonomy, initiative, risk management, technical communication, teamwork, productivity focus.
