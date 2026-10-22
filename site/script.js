// Conteúdo do site — editar aqui para atualizar sem mexer no HTML.
// Site content — edit here to update without touching the HTML.
//
// Convenções / Conventions:
// - Chaves de i18n usadas em elementos com [data-i18n] (texto) ou [data-i18n][data-i18n-html] (HTML permitido,
//   apenas para destaques <em class="hl">). / i18n keys used by [data-i18n] (text) or [data-i18n-html] (HTML allowed).
// - As demais estruturas (skills, timeline, projects, metrics, stack) são renderizadas por função.

const i18n = {
  pt: {
    "brand.role": "Técnica em Banco de Dados",
    "nav.sobre": "Sobre",
    "nav.competencias": "Competências",
    "nav.experiencias": "Experiências",
    "nav.trajetoria": "Trajetória",
    "hero.eyebrow": "Portfólio Técnico",
    "hero.title": "Banco de dados, automação e integração de pipelines",
    "hero.stack1": "SQL Server",
    "hero.stack2": "Azure Data Factory",
    "hero.stack3": "Automação",
    "hero.stack4": "Migração de Dados",
    "hero.personal": "Gosto de pegar um processo manual, cheio de gargalos, e transformá-lo em algo simples, seguro e replicável por qualquer pessoa do time.",
    "hero.ctaExperiencias": "Ver experiências",
    "hero.badge": "Estágio em Dados · Thomson Reuters",
    "hero.fact1": "clientes atendidos",
    "hero.fact2": "migrações banco a banco",
    "hero.fact3": "commits em ~5 meses",
    "hero.fact4": "scripts Python próprios",
    "hero.scroll": "Rolar",
    "sobre.titulo": "Sobre mim",
    "sobre.aside": "Perfil · Stack · O que resolvo",
    "sobre.p1": "Sou <em class=\"hl\">estagiária de dados na Thomson Reuters</em> e atuo com <em class=\"hl\">migração e mapeamento de bases de dados para o Legal One</em>, a partir de plataformas concorrentes como Astrea, Projuris, CPJ e CP-PRO. No dia a dia, desenvolvo scripts em SQL Server, apoio execuções em pipelines e acompanho processos no Azure Data Factory, analisando logs e corrigindo erros até a entrega final com dados consistentes.",
    "sobre.p2": "Em <em class=\"hl\">mais de 30 clientes atendidos</em>, <em class=\"hl\">25+ foram migrações de banco a banco</em> e cerca de 23 seguiram em consultoria recorrente. Mantenho um padrão de segurança em cada correção em produção (script declarativo, de execução e de rollback) e contribuí com <em class=\"hl\">92 commits em ~5 meses</em> em um repositório de migração mantido por um time de 18 pessoas, com mais de 40 scripts SQL de extração organizados por módulo.",
    "sobre.p3": "Também crio ferramentas para ganhar produtividade: <em class=\"hl\">8 scripts Python próprios</em>, 7 macros VBA de validação de planilhas e o <em class=\"hl\">Unificador de Contatos (Python + Selenium)</em>, que idealizei e desenvolvi e hoje é usado por outros consultores em campo. Meu interesse agora é aprofundar automação e integração de sistemas, construindo processos mais escaláveis e confiáveis.",
    "sobre.resolvoTitulo": "Problemas que sei resolver",
    "sobre.resolvo1t": "Migrar dados entre sistemas",
    "sobre.resolvo1d": "De Astrea, Projuris, CPJ e CP-PRO para o Legal One, com pipeline por módulos e validação até a carga final.",
    "sobre.resolvo2t": "Corrigir produção com segurança",
    "sobre.resolvo2d": "Cada ajuste com script declarativo, de execução e de rollback, aprovado formalmente antes de rodar.",
    "sobre.resolvo3t": "Automatizar o que é manual",
    "sobre.resolvo3d": "Python, Selenium e VBA para eliminar gargalos repetitivos e distribuir a solução para o time.",
    "sobre.stackTitulo": "Stack principal",
    "experiencias.titulo": "Experiências",
    "experiencias.intro": "Da migração de plataformas concorrentes à automação que elimina gargalos operacionais — cada experiência tem sua própria página, com projetos, métricas e evidências.",
    "experiencias.legalOne.org": "Thomson Reuters · desde mar/2025",
    "experiencias.legalOne.titulo": "Experiência com Legal One",
    "experiencias.legalOne.desc": "Migrações de plataformas concorrentes, consultoria recorrente em produção e uma ferramenta de automação criada do zero — tudo construído ao longo da atuação com o Legal One.",
    "experiencias.legalOne.projetosTitulo": "Projetos documentados",
    "experiencias.statProjetos": "projetos",
    "experiencias.statMetricas": "métricas",
    "experiencias.statFeedbacks": "feedbacks",
    "experiencias.legalOne.tag1": "Migração de dados",
    "experiencias.legalOne.tag2": "Consultoria recorrente",
    "experiencias.legalOne.tag3": "Automação",
    "experiencias.ver": "Ver projetos e métricas",
    "experiencias.futura.titulo": "Próxima experiência",
    "experiencias.futura.desc": "Novas páginas de experiência serão adicionadas aqui conforme novos projetos forem documentados.",
    "trajetoria.titulo": "Trajetória",
    "trajetoria.aside": "2017 — 2027",
    "trajetoria.intro": "Principais marcos de formação e carreira, da engenharia mecânica à área de dados.",
    "trajetoria.tipo.edu": "Formação",
    "trajetoria.tipo.work": "Carreira",
    "competencias.titulo": "Skills",
    "competencias.aside": "18 competências avaliadas",
    "competencias.intro": "Cada estrela reflete evidência real encontrada em arquivos de projeto — não uma autoavaliação genérica. Detalhamento completo, com evidências e justificativa de cada nota, no repositório (matriz_de_competencias.md).",
    "competencias.legenda": "escala de 1 a 5, por evidência de projeto",
    "competencias.tabTecnicas": "Competências Técnicas",
    "competencias.tabSoft": "Soft Skills",
    "exp.voltar": "Voltar ao início",
    "exp.legalOne.eyebrow": "Experiência",
    "exp.legalOne.title": "Legal One",
    "exp.legalOne.subtitle": "Migração de plataformas concorrentes · Consultoria recorrente · Saneamento de dados · Automação",
    "exp.projetos.titulo": "Projetos",
    "destaque.eyebrow": "Projeto em destaque · Ideia e autoria própria",
    "destaque.titulo": "Projeto em destaque: Unificador de Contatos",
    "destaque.p1": "Ferramenta Python + Selenium, com interface gráfica própria, empacotada em executável e distribuída para consultores em campo. Identifica contatos duplicados por CPF/CNPJ e aciona a função nativa de unificação do Legal One.",
    "destaque.p2": "Elimina, para esse cenário, a necessidade de extrair a base de produção, levar para homologação, tratar os dados e aguardar SLA de liberação — o consultor passa a resolver diretamente, em produção, com total autonomia.",
    "destaque.nota": "Projeto de ideia e autoria própria. Código-fonte completo não publicado neste portfólio; descrição de arquitetura disponível no repositório.",
    "destaque.ver": "Ver projeto completo",
    "metricas.titulo": "Métricas e impacto",
    "metricas.nota": "Métricas marcadas como \"estimativa\" ainda não têm confirmação numérica definitiva por arquivo, mas refletem o melhor conhecimento disponível. Ver metricas/dados_a_validar.md no repositório.",
    "footer.texto": "Documentação completa, com evidências e metodologia, disponível no repositório Markdown.",
    "proj.eyebrow.migracao": "Projeto · Migração",
    "proj.eyebrow.consultoria": "Projeto · Consultoria",
    "proj.eyebrow.saneamento": "Projeto · Saneamento de Dados",
    "proj.eyebrow.automacao": "Projeto · Automação",
    "proj.voltar": "Voltar para Legal One",
    "toc.titulo": "Nesta página",
    "proj.verDetalhes": "Ver detalhes"
  },
  en: {
    "brand.role": "Database Analyst",
    "nav.sobre": "About",
    "nav.competencias": "Skills",
    "nav.experiencias": "Experience",
    "nav.trajetoria": "Timeline",
    "hero.eyebrow": "Technical Portfolio",
    "hero.title": "Databases, automation, and data-pipeline integration",
    "hero.stack1": "SQL Server",
    "hero.stack2": "Azure Data Factory",
    "hero.stack3": "Automation",
    "hero.stack4": "Data Migration",
    "hero.personal": "I like taking a manual, bottlenecked process and turning it into something simple, safe, and repeatable by anyone on the team.",
    "hero.ctaExperiencias": "See experience",
    "hero.badge": "Data Intern · Thomson Reuters",
    "hero.fact1": "clients served",
    "hero.fact2": "database-to-database migrations",
    "hero.fact3": "commits in ~5 months",
    "hero.fact4": "Python scripts of my own",
    "hero.scroll": "Scroll",
    "sobre.titulo": "About me",
    "sobre.aside": "Profile · Stack · What I solve",
    "sobre.p1": "I'm a <em class=\"hl\">data intern at Thomson Reuters</em>, working on <em class=\"hl\">data migration and database mapping into Legal One</em> from competing platforms such as Astrea, Projuris, CPJ, and CP-PRO. Day to day, I build SQL Server scripts, support pipeline executions, and follow processes in Azure Data Factory — analyzing logs and fixing errors until the final delivery is consistent.",
    "sobre.p2": "Of <em class=\"hl\">30+ clients served</em>, <em class=\"hl\">25+ were database-to-database migrations</em> and about 23 continued in recurring consulting. I follow a safety standard on every production fix (declarative, execution, and rollback scripts) and made <em class=\"hl\">92 commits in ~5 months</em> to a migration repository maintained by a team of 18, with 40+ SQL extraction scripts organized by module.",
    "sobre.p3": "I also build tools to boost productivity: <em class=\"hl\">8 Python scripts of my own</em>, 7 VBA spreadsheet-validation macros, and the <em class=\"hl\">Contact Deduplication Tool (Python + Selenium)</em>, which I conceived and built and which is now used by other consultants in the field. My focus now is going deeper into automation and systems integration, building more scalable, reliable processes.",
    "sobre.resolvoTitulo": "Problems I solve",
    "sobre.resolvo1t": "Migrate data between systems",
    "sobre.resolvo1d": "From Astrea, Projuris, CPJ, and CP-PRO into Legal One, with a per-module pipeline and validation through final load.",
    "sobre.resolvo2t": "Fix production safely",
    "sobre.resolvo2d": "Every change ships with declarative, execution, and rollback scripts, formally approved before it runs.",
    "sobre.resolvo3t": "Automate what is manual",
    "sobre.resolvo3d": "Python, Selenium, and VBA to remove repetitive bottlenecks and hand the solution to the whole team.",
    "sobre.stackTitulo": "Core stack",
    "experiencias.titulo": "Experience",
    "experiencias.intro": "From migrating competing platforms to automation that removes operational bottlenecks — each experience has its own page, with projects, metrics, and evidence.",
    "experiencias.legalOne.org": "Thomson Reuters · since Mar 2025",
    "experiencias.legalOne.titulo": "Legal One Experience",
    "experiencias.legalOne.desc": "Competing-platform migrations, recurring production consulting, and an automation tool built from scratch — all developed throughout the work with Legal One.",
    "experiencias.legalOne.projetosTitulo": "Documented projects",
    "experiencias.statProjetos": "projects",
    "experiencias.statMetricas": "metrics",
    "experiencias.statFeedbacks": "feedbacks",
    "experiencias.legalOne.tag1": "Data migration",
    "experiencias.legalOne.tag2": "Recurring consulting",
    "experiencias.legalOne.tag3": "Automation",
    "experiencias.ver": "View projects and metrics",
    "experiencias.futura.titulo": "Next experience",
    "experiencias.futura.desc": "New experience pages will be added here as new projects are documented.",
    "trajetoria.titulo": "Timeline",
    "trajetoria.aside": "2017 — 2027",
    "trajetoria.intro": "Key education and career milestones, from mechanical engineering to the data field.",
    "trajetoria.tipo.edu": "Education",
    "trajetoria.tipo.work": "Career",
    "competencias.titulo": "Skills",
    "competencias.aside": "18 competencies assessed",
    "competencias.intro": "Each star reflects real evidence found in project files — not a generic self-rating. Full breakdown, with evidence and justification for each score, in the repository (matriz_de_competencias.en.md).",
    "competencias.legenda": "1-to-5 scale, based on project evidence",
    "competencias.tabTecnicas": "Technical Skills",
    "competencias.tabSoft": "Soft Skills",
    "exp.voltar": "Back to home",
    "exp.legalOne.eyebrow": "Experience",
    "exp.legalOne.title": "Legal One",
    "exp.legalOne.subtitle": "Competing-platform migration · Recurring consulting · Data sanitization · Automation",
    "exp.projetos.titulo": "Projects",
    "destaque.eyebrow": "Featured project · Original idea and solution",
    "destaque.titulo": "Featured project: Contact Deduplication Tool",
    "destaque.p1": "Python + Selenium tool, with its own graphical interface, packaged as an executable and distributed to field consultants. Identifies duplicate contacts by tax ID and triggers Legal One's native merge function.",
    "destaque.p2": "Eliminates, for this scenario, the need to extract the production database, move it to staging, treat the data, and wait for SLA release — the consultant now resolves it directly, in production, with full autonomy.",
    "destaque.nota": "Original idea and solution. Full source code is not published in this portfolio; architecture description is available in the repository.",
    "destaque.ver": "View full project",
    "metricas.titulo": "Metrics and impact",
    "metricas.nota": "Metrics marked \"estimate\" don't yet have definitive file-based numeric confirmation, but reflect the best information available. See metricas/dados_a_validar.md in the repository.",
    "footer.texto": "Full documentation, with evidence and methodology, is available in the Markdown repository.",
    "proj.eyebrow.migracao": "Project · Migration",
    "proj.eyebrow.consultoria": "Project · Consulting",
    "proj.eyebrow.saneamento": "Project · Data Sanitization",
    "proj.eyebrow.automacao": "Project · Automation",
    "proj.voltar": "Back to Legal One",
    "toc.titulo": "On this page",
    "proj.verDetalhes": "View details"
  }
};

// Stack principal (home, seção Sobre). Tecnologias já documentadas no README e nos projetos.
const stack = [
  { pt: "Dados", en: "Data", items: ["SQL Server (T-SQL)", "Azure Data Factory"] },
  { pt: "Automação", en: "Automation", items: ["Python", "Selenium", "Tkinter", "VBA", "PowerShell"] },
  { pt: "Ferramentas", en: "Tools", items: ["Git / GitHub", "Excel"] }
];

const skillsTecnicas = [
  { pt: "SQL e SQL Server", en: "SQL & SQL Server", score: 4, notePt: "Pipelines de extração, deduplicação e scripts de rollback em produção.", noteEn: "Extraction pipelines, deduplication, and production rollback scripts." },
  { pt: "Migração e transformação de dados", en: "Migration & data transformation", score: 5, notePt: "92 commits em repositório de migração; 25+ clientes migrados.", noteEn: "92 commits in a migration repository; 25+ clients migrated." },
  { pt: "Modelagem e manipulação de dados", en: "Data modeling & manipulation", score: 4, notePt: "Mapeamento de equivalência entre Astrea, Projuris, CPJ e Legal One.", noteEn: "Mapping equivalence between Astrea, Projuris, CPJ, and Legal One." },
  { pt: "Qualidade e saneamento de dados", en: "Data quality & sanitization", score: 4, notePt: "Criei o Unificador de Contatos (Python + Selenium).", noteEn: "I built the Contact Deduplication Tool (Python + Selenium)." },
  { pt: "Python", en: "Python", score: 4, notePt: "Automação de interface, scripts de integração de dados e GUI (Tkinter).", noteEn: "Interface automation, data-integration scripts, and GUI (Tkinter)." },
  { pt: "Automação com Selenium", en: "Selenium automation", score: 4, notePt: "Troquei coordenadas de tela por seleção real de elementos — bem mais estável.", noteEn: "Replaced screen coordinates with real element selection — much more stable." },
  { pt: "VBA e automação de Excel", en: "VBA & Excel automation", score: 3, notePt: "7 macros de validação estrutural de planilhas de migração.", noteEn: "7 macros for structural validation of migration spreadsheets." },
  { pt: "Manutenção e suporte de scripts", en: "Script maintenance & support", score: 4, notePt: "Consultoria recorrente para 23+ clientes já migrados.", noteEn: "Recurring consulting for 23+ already-migrated clients." },
  { pt: "Organização e reutilização de código", en: "Code organization & reuse", score: 3, notePt: "Criei um importador genérico de Excel, reutilizado em múltiplos projetos.", noteEn: "I built a generic Excel importer, reused across multiple projects." },
  { pt: "Documentação técnica", en: "Technical documentation", score: 2, notePt: "Minha maior lacuna até aqui — este portfólio é o primeiro passo.", noteEn: "My biggest gap so far — this portfolio is the first step." }
];

const skillsSoft = [
  { pt: "Autonomia", en: "Autonomy", score: 5, notePt: "Criei e distribuí uma ferramenta própria, sem que ninguém pedisse.", noteEn: "I built and distributed my own tool, without anyone asking for it." },
  { pt: "Resolução de problemas", en: "Problem solving", score: 4, notePt: "Evoluí de um protótipo frágil para uma solução robusta e distribuível.", noteEn: "I evolved a fragile prototype into a robust, distributable solution." },
  { pt: "Entendimento de processos de negócio", en: "Business-process understanding", score: 4, notePt: "Traduzo regras jurídicas (tipo de ação, centro de custo) em SQL.", noteEn: "I translate legal business rules (case type, cost center) into SQL." },
  { pt: "Colaboração em equipe", en: "Team collaboration", score: 4, notePt: "Contribuição sustentada em repositório com 18 pessoas.", noteEn: "Sustained contribution to a repository with 18 people." },
  { pt: "Foco em produtividade e melhoria contínua", en: "Productivity & continuous improvement", score: 4, notePt: "8 scripts Python e 7 macros VBA desenvolvidos para ganhar tempo no dia a dia.", noteEn: "8 Python scripts and 7 VBA macros built to save time day to day." },
  { pt: "Análise de requisitos", en: "Requirements analysis", score: 3, notePt: "Interpreto pedidos de clientes e traduzo em escopo técnico.", noteEn: "I interpret client requests and translate them into technical scope." },
  { pt: "Comunicação técnica", en: "Technical communication", score: 3, notePt: "Aprovação formal por e-mail antes de cada execução em produção.", noteEn: "Formal email approval before every production execution." },
  { pt: "Gestão de riscos com dados sensíveis", en: "Risk management with sensitive data", score: 3, notePt: "Login manual, sem credenciais no código — um cuidado que ainda preciso levar para outros scripts.", noteEn: "Manual login, no stored credentials — a practice I still need to carry over to other scripts." }
];

// type: "edu" (formação) | "work" (carreira)
const timeline = [
  { date: "Jan 2017", type: "edu", pt: "Ingresso na FATEC — Mecânica, Processos de Produção", en: "Started FATEC — Mechanical Engineering, Production Processes" },
  { date: "Jun 2021", type: "edu", pt: "Formação em Mecânica — Processos de Produção", en: "Graduated — Mechanical Engineering, Production Processes" },
  { date: "Jan 2023", type: "edu", pt: "Ingresso na FATEC — Análise e Desenvolvimento de Sistemas", en: "Started FATEC — Systems Analysis and Development" },
  { date: "Mar 2025", type: "work", pt: "Início do estágio na Thomson Reuters", en: "Started internship at Thomson Reuters" },
  { date: "Jan 2027", type: "edu", pt: "Formação em Análise e Desenvolvimento de Sistemas (prevista)", en: "Graduation — Systems Analysis and Development (expected)" }
];

const projects = [
  {
    pt: { title: "Migração de Banco a Banco (Concorrentes)", desc: "Pipeline de extração/transformação/carga entre plataformas concorrentes e o Legal One, por módulos (Contatos/Processos/Serviços).", link: "../projetos/migracao-banco-a-banco.html" },
    en: { title: "Database-to-Database Migration (Competitors)", desc: "Extraction/transformation/load pipeline between competing platforms and Legal One, by module (Contacts/Cases/Services).", link: "../projetos/migracao-banco-a-banco.html" }
  },
  {
    pt: { title: "Consultoria Recorrente em Banco de Dados", desc: "Ajustes em produção com padrão de diagnóstico, aprovação, execução e rollback, aplicado a 23+ clientes.", link: "../projetos/consultoria-recorrente.html" },
    en: { title: "Recurring Database Consulting", desc: "Production adjustments with a diagnose, approve, execute, rollback pattern, applied to 23+ clients.", link: "../projetos/consultoria-recorrente.html" }
  },
  {
    pt: { title: "Unificador de Contatos", desc: "Ferramenta autoral (Python + Selenium) de saneamento de duplicidade, distribuída como executável.", link: "../projetos/unificador-de-contatos.html" },
    en: { title: "Contact Deduplication Tool", desc: "Original tool (Python + Selenium) for deduplication, distributed as an executable.", link: "../projetos/unificador-de-contatos.html" }
  },
  {
    pt: { title: "Automações Python de Produtividade", desc: "8 scripts para importação, extração MySQL, comparação de volumetria e gestão de acessos.", link: "../projetos/automacoes-python.html" },
    en: { title: "Python Productivity Automations", desc: "8 scripts for import, MySQL extraction, volume comparison, and access management.", link: "../projetos/automacoes-python.html" }
  },
  {
    pt: { title: "Automações SQL e VBA", desc: "Scripts de deduplicação e macros de validação estrutural de planilha de migração.", link: "../projetos/automacoes-sql-vba.html" },
    en: { title: "SQL & VBA Automations", desc: "Deduplication scripts and structural-validation macros for migration spreadsheets.", link: "../projetos/automacoes-sql-vba.html" }
  }
];

const metrics = [
  { value: "30+", pt: "Clientes atendidos ao longo da carreira, em todos os tipos de serviço", en: "Clients served across the career, across all service types", tag: "confirmed" },
  { value: "92", pt: "Commits pessoais em repositório de migração colaborativo (~5 meses)", en: "Personal commits in a collaborative migration repository (~5 months)", tag: "confirmed" },
  { value: "18", pt: "Pessoas no time que mantém o pipeline de migração", en: "People maintaining the migration pipeline", tag: "confirmed" },
  { value: "23+", pt: "Clientes com consultoria recorrente e plano de rollback documentado", en: "Clients with recurring consulting and a documented rollback plan", tag: "confirmed" },
  { value: "25+", pt: "Clientes migrados de plataformas concorrentes via parceiros de revenda (subconjunto do total)", en: "Clients migrated from competing platforms via reseller partners (subset of total)", tag: "confirmed" },
  { value: "40+", pt: "Scripts SQL de extração organizados por módulo de dados", en: "SQL extraction scripts organized by data module", tag: "confirmed" },
  { value: "8", pt: "Scripts Python próprios de produtividade e integração de dados", en: "Proprietary Python scripts for productivity and data integration", tag: "confirmed" }
];

/* ---------------------------------------------------------
   Estado e utilitários
   --------------------------------------------------------- */

let currentLang = "pt";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersReducedMotion = () => reducedMotion.matches;

const ARROW_SVG = '<svg class="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';

function pad2(n) { return String(n).padStart(2, "0"); }

function starsMarkup(score) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="star ${i < score ? "filled" : ""}">★</span>`
  ).join("");
}

/* ---------------------------------------------------------
   Renderização de conteúdo
   --------------------------------------------------------- */

function renderStaticText(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = i18n[lang][key];
    if (value === undefined) return;
    if (el.hasAttribute("data-i18n-html")) el.innerHTML = value;
    else el.textContent = value;
  });
}

function renderStack(lang) {
  const host = document.getElementById("stack-list");
  if (!host) return;
  host.innerHTML = stack.map(group => `
    <div class="stack-group">
      <span class="stack-group-name">${group[lang]}</span>
      <div class="stack-items">${group.items.map(item => `<span class="chip">${item}</span>`).join("")}</div>
    </div>`).join("");
}

function renderSkillGroup(gridId, list, lang, variant) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = "";
  list.forEach(s => {
    const card = document.createElement("div");
    card.className = `card ${variant}`;
    const note = lang === "pt" ? s.notePt : s.noteEn;
    card.innerHTML = `<h3>${s[lang]}</h3><span class="skill-score" aria-label="${s.score} / 5">${s.score}/5</span><div class="star-rating" aria-hidden="true">${starsMarkup(s.score)}</div><p>${note}</p>`;
    grid.appendChild(card);
  });
}

function renderSkills(lang) {
  renderSkillGroup("skills-grid-tecnicas", skillsTecnicas, lang, "skill-card");
  renderSkillGroup("skills-grid-soft", skillsSoft, lang, "skill-row");
}

function renderTimeline(lang) {
  const list = document.getElementById("timeline-list");
  if (!list) return;
  list.querySelectorAll(".timeline-item").forEach(el => el.remove());
  timeline.forEach((t, i) => {
    const item = document.createElement("div");
    item.className = "timeline-item" + (i === timeline.length - 1 ? " timeline-item--last" : "");
    const typeLabel = i18n[lang][`trajetoria.tipo.${t.type}`] || "";
    item.innerHTML = `
      <span class="timeline-node" aria-hidden="true"></span>
      <div class="timeline-card">
        <div class="timeline-meta">
          <span class="timeline-date">${t.date}</span>
          <span class="timeline-type timeline-type--${t.type}">${typeLabel}</span>
        </div>
        <p class="timeline-title">${t[lang]}</p>
      </div>`;
    list.appendChild(item);
  });
}

// Lista compacta de projetos dentro do cartão de experiência (home)
function renderExperienceProjects(lang) {
  const list = document.getElementById("exp-projects");
  if (!list) return;
  const base = list.getAttribute("data-base") || "";
  list.innerHTML = projects.map((p, i) => {
    const data = p[lang];
    const href = base + data.link.replace(/^(\.\.\/)?projetos\//, "");
    return `<li><a href="${href}"><span class="idx">${pad2(i + 1)}</span><span>${data.title}</span><span class="arrow" aria-hidden="true">→</span></a></li>`;
  }).join("");
}

function renderProjects(lang) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = "";
  projects.forEach((p, i) => {
    const data = p[lang];
    const card = document.createElement("div");
    card.className = "card card--hover project-card spot";
    card.innerHTML = `<span class="project-idx">${pad2(i + 1)}</span><h3>${data.title}</h3><p>${data.desc}</p><a class="btn" href="${data.link}"><span>${i18n[lang]["proj.verDetalhes"]}</span>${ARROW_SVG}</a>`;
    grid.appendChild(card);
  });
}

function renderMetrics(lang) {
  const grid = document.getElementById("metrics-grid");
  if (!grid) return;
  grid.innerHTML = "";
  metrics.forEach(m => {
    const card = document.createElement("div");
    card.className = "card metric-card spot";
    const tagLabel = m.tag === "confirmed"
      ? (lang === "pt" ? "comprovada" : "confirmed")
      : (lang === "pt" ? "estimativa" : "estimate");
    card.innerHTML = `<div class="metric-value" data-count="${m.value}">${m.value}</div><p>${m[lang]}</p><span class="tag ${m.tag}">${tagLabel}</span>`;
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------
   Movimento e interação
   --------------------------------------------------------- */

const REVEAL_SELECTOR = [
  ".section-head", ".section > .muted", ".skills-legend", ".card", ".highlight", ".timeline-item",
  ".solve-card", ".stack-card", ".experience-feature", ".experience-card--future",
  ".testimonial-card", ".prose h2", ".impact-table", ".prose pre.flow", ".section > .subsection-title"
].join(", ");

let revealObserver = null;

function initScrollReveal() {
  const targets = Array.from(document.querySelectorAll(REVEAL_SELECTOR))
    .filter(el => !el.classList.contains("reveal"));
  if (!targets.length) return;

  // Escalonamento: irmãos dentro do mesmo contêiner entram em sequência.
  const seen = new Map();
  targets.forEach(el => {
    const parent = el.parentElement;
    const n = seen.get(parent) || 0;
    seen.set(parent, n + 1);
    if (n > 0) el.style.setProperty("--d", `${Math.min(n, 7) * 0.07}s`);
    el.classList.add("reveal");
  });

  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("is-visible"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  }
  targets.forEach(el => revealObserver.observe(el));
}

// Contagem animada para números com [data-count] (ex.: "30+", "92")
function animateCount(el) {
  const raw = el.getAttribute("data-count") || "";
  const m = raw.match(/^(\D*)(\d+)(\D*)$/);
  if (!m) return;
  const target = parseInt(m[2], 10);
  if (prefersReducedMotion() || target === 0) { el.textContent = raw; return; }
  const prefix = m[1], suffix = m[3];
  const duration = 1100 + Math.min(target, 100) * 4;
  const start = performance.now();
  const frame = (now) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(frame);
    else el.textContent = raw;
  };
  requestAnimationFrame(frame);
}

let countObserver = null;

function initCountUp() {
  const els = Array.from(document.querySelectorAll("[data-count]")).filter(el => !el.dataset.counted);
  if (!els.length) return;
  const run = (el) => {
    el.dataset.counted = "1";
    // No hero, espera a animação de entrada terminar antes de contar.
    const delay = el.closest(".hero") ? 750 : 120;
    setTimeout(() => animateCount(el), delay);
  };
  if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
  if (!countObserver) {
    countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          run(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
  }
  els.forEach(el => countObserver.observe(el));
}

// Barra de progresso de leitura + estado "rolado" da topbar
function initTopbar() {
  const bar = document.getElementById("scroll-progress");
  const topbar = document.getElementById("topbar") || document.querySelector(".topbar");
  if (!topbar) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0) + "%";
    topbar.classList.toggle("is-scrolled", scrollTop > 12);
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
}

// Destaque do link de navegação da seção visível (home)
function initScrollSpy() {
  const links = Array.from(document.querySelectorAll("#nav a[href^='#']"));
  if (!links.length || !("IntersectionObserver" in window)) return;
  const sections = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if (!sections.length) return;
  const byId = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = byId.get(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove("is-active"));
        link.classList.add("is-active");
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
  sections.forEach(s => observer.observe(s));
}

// Preenchimento do trilho da linha do tempo conforme a rolagem
function initTimelineProgress() {
  const list = document.getElementById("timeline-list");
  if (!list) return;
  if (prefersReducedMotion()) { list.style.setProperty("--tl", "100%"); return; }
  let ticking = false;
  const update = () => {
    ticking = false;
    const rect = list.getBoundingClientRect();
    const trigger = window.innerHeight * 0.72;
    const progress = Math.max(0, Math.min(1, (trigger - rect.top) / rect.height));
    list.style.setProperty("--tl", (progress * 100).toFixed(1) + "%");
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
}

// Brilho que acompanha o ponteiro em cartões com .spot
function initSpotlight() {
  if (window.matchMedia("(hover: none)").matches) return;
  document.querySelectorAll(".spot").forEach(el => {
    if (el.querySelector(":scope > .spot-glow")) return;
    const glow = document.createElement("span");
    glow.className = "spot-glow";
    glow.setAttribute("aria-hidden", "true");
    el.prepend(glow);
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", (e.clientX - r.left) + "px");
      el.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });
}

// Sumário lateral nas páginas de projeto (gerado a partir dos h2 do idioma ativo)
function initToc(lang) {
  const article = document.querySelector("article.prose");
  if (!article) return;
  let layout = article.closest(".prose-layout");
  let toc;
  if (!layout) {
    layout = document.createElement("div");
    layout.className = "prose-layout";
    article.parentNode.insertBefore(layout, article);
    toc = document.createElement("nav");
    toc.className = "toc";
    toc.setAttribute("aria-label", "Sumário");
    layout.appendChild(toc);
    layout.appendChild(article);
  } else {
    toc = layout.querySelector(".toc");
  }
  const block = article.querySelector(`[data-lang-block="${lang}"]`);
  if (!block) { toc.innerHTML = ""; return; }
  const headings = Array.from(block.querySelectorAll("h2"));
  headings.forEach((h, i) => { if (!h.id) h.id = `${lang}-sec-${i + 1}`; });
  toc.innerHTML = `<p class="toc-title">${i18n[lang]["toc.titulo"]}</p><ol>${headings.map(h =>
    `<li><a href="#${h.id}">${h.textContent}</a></li>`).join("")}</ol>`;

  if (!("IntersectionObserver" in window)) return;
  const links = Array.from(toc.querySelectorAll("a"));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
  headings.forEach(h => observer.observe(h));
}

/* ---------------------------------------------------------
   Idioma
   --------------------------------------------------------- */

function toggleLangBlocks(lang) {
  document.querySelectorAll("[data-lang-block]").forEach(el => {
    el.style.display = el.getAttribute("data-lang-block") === lang ? "block" : "none";
  });
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  ["pt", "en"].forEach(code => {
    const btn = document.getElementById(`btn-${code}`);
    if (!btn) return;
    btn.classList.toggle("active", lang === code);
    btn.setAttribute("aria-pressed", lang === code ? "true" : "false");
  });
  renderStaticText(lang);
  renderStack(lang);
  renderSkills(lang);
  renderExperienceProjects(lang);
  renderProjects(lang);
  renderMetrics(lang);
  renderTimeline(lang);
  toggleLangBlocks(lang);
  initToc(lang);
  initScrollReveal();
  initCountUp();
  initSpotlight();
}

document.getElementById("btn-pt").addEventListener("click", () => setLanguage("pt"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));

setLanguage(currentLang);
initTopbar();
initScrollSpy();
initTimelineProgress();
