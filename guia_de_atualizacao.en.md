# Portfolio Update Guide

## How to add a new project

1. Choose the correct subfolder inside `projetos/` (or create a new category if none of the existing ones fit).
2. Copy the content of `templates/template_projeto.md` into a new file `project-name.md`.
3. Fill in every section — don't leave any blank; use "Insufficient evidence" or "To be validated" where applicable.
4. Create the English version `project-name.en.md` (a faithful translation, not a summary).
5. Run the confidentiality checklist at the end of the template before saving.
6. Add a row for the new project to the table in `projetos/README.md`.
7. If the project brings new metrics, add them to `metricas/metricas_e_indicadores.md` (and the `.en.md` version), classifying them correctly.
8. If the project brings evidence of new or reinforced competencies, follow the step below.

## How to update competencies

1. Open `matriz_de_competencias.md` (and the `.en.md` version).
2. Find the competency affected by the new evidence.
3. Add the evidence to the corresponding field.
4. Re-score **only if the evidence justifies it**, explaining the change in the justification.
5. If it's a brand-new competency, use `templates/template_nova_experiencia.md` as a formatting guide.

6. On the site, also update the `skillsTecnicas`/`skillsSoft` arrays in `site/script.js` — each item has a `score` (1 to 5) and a short note (`notePt`/`noteEn`) that must be concrete evidence, not a generic phrase.

## How to update the timeline

1. Open `site/script.js` and find the `timeline` array.
2. Each milestone is an object with `date` (e.g. `"Mar 2025"`), `type` (`"edu"` for education or `"work"` for career — sets the colored label), `pt`, and `en`.
3. Keep the list in chronological order — rendering does not sort automatically.
4. No HTML changes are needed: the list is rendered into `#timeline-list` on the home page as a vertical, alternating timeline (single column on narrow screens). The last item automatically gets the dashed "expected/in progress" marker.
5. The About texts (`sobre.p1`–`sobre.p3` in `i18n`) accept limited HTML for highlights: wrap key numbers and terms in `<em class="hl">…</em>`. Those elements carry `data-i18n-html` in `index.html`; every other key is plain text.
6. The "Core stack" list (About section) comes from the `stack` array in `site/script.js` — groups with `pt`/`en` names and an `items` list. Only list technologies already documented in the projects.

## How to add new metrics

1. Every metric needs a classification: **confirmed** (by file or your direct confirmation), **estimated**, or **pending validation**.
2. Add the metric to the table in `metricas/metricas_e_indicadores.md` (and the `.en.md` version).
3. If the metric doesn't yet have a reliable number, add it to `metricas/dados_a_validar.md` instead of making up a value.
4. Never promote a metric from "estimated" to "evidence-backed" without a real, verifiable source.

## How to keep confidential information protected

- Before adding any new content, ask: "does this identify a client, a person, or expose a credential?" If so, anonymize or remove it.
- Never copy and paste email excerpts, spreadsheets with real data, or code with hardcoded credentials directly into this repository.
- When citing a code example, always use fictitious or generic data (e.g., "Client A", "sample_user", "sample_password").
- Review the `.gitignore` file (see `guia_de_publicacao_github.md`) whenever you add a new file type to the repository.

## How to add a new experience page

When a new relevant professional experience (beyond Legal One) needs its own page on the site:

1. Copy `site/experiencias/legal-one.html` to a new file, e.g., `site/experiencias/experience-name.html`.
2. Adjust the tab title (`<title>`), the hero eyebrow/title, and the experience-specific text.
3. Add the new translation keys used by that page to `site/script.js`, inside the `i18n` object (both `pt` and `en`).
4. If the experience has its own projects, add them to the `projects` array in `script.js` (or create a separate array if you want to keep each experience's projects isolated).
5. Add a new card to `site/index.html`, in the `#experiencias` section, pointing to the new page (replace the "Next experience" placeholder card or add a new one).
6. Create the corresponding Markdown documentation in `projetos/` (or a new top-level folder, if the experience isn't related to technical projects), following `templates/template_projeto.md`.

## How to test the site locally

1. Open `site/index.html` directly in your browser (double-click it or drag it into the browser window).
2. No installation is needed — the site doesn't depend on a server, build step, or external libraries.
3. To test content changes, edit `site/index.html`, `site/experiencias/*.html`, `site/style.css`, or `site/script.js` directly and reload the page in your browser.
4. Test the language toggle (PT/EN) and, on the home page, confirm the two skill lists (Technical and Soft Skills) display correctly side by side/stacked, after any content change.
5. Test navigation between the home page and each experience page (links and the "Back to home" button).

## How to update the repository on GitHub

See the full step-by-step guide in [guia_de_publicacao_github.md](guia_de_publicacao_github.md). In short, after editing files locally:

```powershell
git add <specific files you changed>
git commit -m "Short description of the update"
git push
```

Never use `git add .` without first reviewing with `git status` what will be included, to avoid accidentally uploading a sensitive file.
