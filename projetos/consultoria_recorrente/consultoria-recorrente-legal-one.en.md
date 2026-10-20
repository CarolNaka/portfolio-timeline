# Recurring Database Consulting — Post-Migration Adjustments in Legal One

## Overview

Ongoing technical support for clients already migrated to Legal One, performing targeted corrections and adjustments directly in the production database, always following an operational safety standard with a documented rollback plan for every intervention.

## Problem solved

Once a law firm is up and running on Legal One, specific needs come up that the system's interface can't resolve on its own: fixing data that loaded incorrectly, adjusting client-specific business rules (e.g., case type, cost center, control flags), bulk case closures, reorganizing registered objects, and so on. These requests require direct changes to the production database — a risky operation that demands technical rigor and a rollback path in case something goes wrong.

## Context

These requests arrived on a recurring basis, one per client, always with formal email approval before execution. Each case had its own specifics, but the execution process always followed the same safety standard, regardless of the client or the complexity of the adjustment.

## My role

- Receiving and interpreting adjustment requests from clients already migrated.
- Writing custom SQL scripts for each need (data correction, case closure, cost-center adjustment, case-type adjustment, object reorganization, among others).
- Creating a "declarative" (discovery/diagnostic) script before any change, to confirm the exact scope of what would be altered.
- Executing the update script in production only after formal approval of the request.
- Creating a rollback script for every adjustment made, allowing the change to be reverted if necessary.
- Technical communication with internal teams and, when needed, formal email approval records before executing in production.

## Technologies used

- **SQL Server** (T-SQL) — all diagnostic, update, and rollback logic.
- **Email (Outlook)** — request, approval, and execution-record workflow (used only as an approval channel; content not analyzed).
- **Excel** — supporting spreadsheets for data review before/after each adjustment.

## Solution implemented

Each consulting request follows a **3-file pattern**, applied consistently across the cases analyzed:

1. **Declarative / generation script** (`gera_declarativo_*.sql` or `declarativo_*.sql`) — identifies and lists exactly which records will be affected, without changing anything, serving as the basis for review and approval.
2. **Execution script** (`update_*.sql` or equivalent) — applies the validated, approved change to production.
3. **Rollback script** (`rollback_*.sql`) — reverts exactly the change made, prepared before executing the adjustment, not after.

This pattern turns a risky operation (a direct production change) into an auditable, reversible process: it's possible to prove, before execution, exactly what will change, and to undo the change if something doesn't go as expected.

## Technical process (summary)

```
Client request (email)
   └─> Declarative script (diagnosis / scope of impact)
        └─> Formal email approval
             └─> Execution script (production update)
                  └─> Rollback script already prepared (reversal plan)
```

## Challenges and decisions

- **Production change risk**: every adjustment had the potential to directly affect the client's operation — always preparing a rollback script before executing was a way to systematically mitigate that risk.
- **Request diversity**: each client brought a different business rule (case type, cost center, case closure, object reorganization), requiring careful reading and interpretation of each request before translating it into SQL logic.
- **Need for traceability**: formal email approval before each execution ensures a record of who authorized what, reducing ambiguity if questions arise later.

## Impact and metrics

| Metric | Value | Classification |
|---|---|---|
| Number of clients served under this consulting pattern (main script folder only) | 20 distinct law firms | **Evidence-backed** (project folder count) |
| Additional cases via partner/indirect channel | At least 3 more documented cases following the same declarative/rollback pattern | **Evidence-backed** |
| Coverage rate of the declarative → execution → rollback pattern in cases reviewed | 100% of reviewed cases followed all 3 steps | **Evidence-backed** |
| Average turnaround time per request | Not recorded in the files analyzed | **Pending validation** |
| Total correction scripts produced over the last 2 years | Estimated 60–80 scripts (counting declarative + execution + rollback for each of the ~23 identified cases) | **Estimate**, to be validated |

## Skills demonstrated

- Writing diagnostic, update, and rollback SQL for live production scenarios.
- Risk assessment before direct interventions on an active database.
- Interpreting legal-business rules (case type, cost center, case status) and translating them into database logic.
- Minimal-viable technical documentation discipline (3 files per case), sufficient for audit and rollback.

## Soft skills demonstrated

- **Risk management in sensitive environments**: systematically building a rollback plan before any production change, even under deadline pressure.
- **Technical communication with clients and internal teams**: translating business requests into clear technical scope, validated by email before execution.
- **Reliability and consistency**: applying the same safety standard regardless of client size or complexity.
- **Autonomy**: end-to-end ownership of each request, from interpreting it to delivery and recording the rollback plan.

## Improvement points and lessons learned

- The process is manual (each script written from scratch) — it could evolve into a set of parameterized templates for the most recurring adjustment types (e.g., case closure, cost-center adjustment), reducing development time.
- There is no single centralized repository for all recurring consulting cases (they're scattered across client folders) — centralizing this would make reuse and cross-client pattern analysis easier.
- Turnaround time and affected-record-volume metrics aren't systematically recorded — adding this would provide productivity visibility.

## Confidentiality and anonymization

- No law firm (client) names are disclosed in this document.
- Approval email content is not reproduced — only the existence of the approval workflow is mentioned.
- No real production data (names, cases, amounts) is reproduced.

## Available evidence

- Folder structure by client, each containing the 3 files of the declarative/execution/rollback pattern.
- Request and approval emails (existence metadata only, content not analyzed or reproduced).

## Publication status

**Publishable after anonymization** — the process and safety pattern can be published in full; only client names are removed.
