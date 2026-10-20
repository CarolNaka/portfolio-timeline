// Conteúdo do site — editar aqui para atualizar sem mexer no HTML.
// Site content — edit here to update without touching the HTML.

const i18n = {
  pt: {
    "brand.role": "Técnica em Banco de Dados",
    "nav.sobre": "Sobre",
    "nav.competencias": "Competências",
    "nav.experiencias": "Experiências",
    "nav.trajetoria": "Trajetória",
    "hero.eyebrow": "Portfólio Técnico",
    "hero.title": "Banco de dados, automação e integração de pipelines",
    "hero.subtitle": "SQL Server · Azure Data Factory · Automação · Migração de Dados",
    "hero.personal": "Gosto de pegar um processo manual, cheio de gargalos, e transformá-lo em algo simples, seguro e replicável por qualquer pessoa do time.",
    "sobre.titulo": "Sobre mim",
    "sobre.p1": "Atuo como estagiária de dados na Thomson Reuters, trabalhando com projetos de migração e mapeamento de bases de dados. No dia a dia, utilizo SQL Server para desenvolver scripts e apoiar execuções em pipelines, além de acompanhar processos no Azure Data Factory, analisando logs e ajustando erros até a entrega final com dados consistentes.",
    "sobre.p2": "Tenho interesse em me aprofundar em automação, integração de sistemas e ambientes orientados à eficiência, buscando entender como estruturar e manter processos mais escaláveis e confiáveis. Trago também minha experiência com processos que exigem organização, atenção aos detalhes e foco em soluções práticas, que aplico no dia a dia enquanto sigo evoluindo de forma consistente na área de tecnologia.",
    "sobre.p3": "Essa forma de trabalhar já me levou a atender mais de 30 clientes em projetos de migração e consultoria, e a criar por conta própria uma ferramenta de automação — o Unificador de Contatos — hoje usada por outros consultores em campo.",
    "competencias.titulo": "Skills",
    "competencias.intro": "Cada estrela reflete evidência real encontrada em arquivos de projeto — não uma autoavaliação genérica. Detalhamento completo, com evidências e justificativa de cada nota, no repositório (matriz_de_competencias.md).",
    "competencias.tabTecnicas": "Competências Técnicas",
    "competencias.tabSoft": "Soft Skills",
    "trajetoria.titulo": "Trajetória",
    "trajetoria.intro": "Principais marcos de formação e carreira. Arraste para o lado para ver mais →",
    "experiencias.titulo": "Experiências",
    "experiencias.intro": "Da migração de plataformas concorrentes à automação que elimina gargalos operacionais — cada experiência tem sua própria página, com projetos, métricas e evidências.",
    "experiencias.legalOne.titulo": "Experiência com Legal One",
    "experiencias.legalOne.desc": "Migrações de plataformas concorrentes, consultoria recorrente em produção e uma ferramenta de automação criada do zero — tudo construído ao longo da atuação com o Legal One.",
    "experiencias.ver": "Ver projetos e métricas →",
    "experiencias.futura.titulo": "Próxima experiência",
    "experiencias.futura.desc": "Novas páginas de experiência serão adicionadas aqui conforme novos projetos forem documentados.",
    "exp.voltar": "Voltar ao início",
    "exp.legalOne.eyebrow": "Experiência",
    "exp.legalOne.title": "Legal One",
    "exp.legalOne.subtitle": "Migração de plataformas concorrentes · Consultoria recorrente · Saneamento de dados · Automação",
    "exp.projetos.titulo": "Projetos",
    "destaque.titulo": "Projeto em destaque: Unificador de Contatos",
    "destaque.p1": "Ferramenta Python + Selenium, com interface gráfica própria, empacotada em executável e distribuída para consultores em campo. Identifica contatos duplicados por CPF/CNPJ e aciona a função nativa de unificação do Legal One.",
    "destaque.p2": "Elimina, para esse cenário, a necessidade de extrair a base de produção, levar para homologação, tratar os dados e aguardar SLA de liberação — o consultor passa a resolver diretamente, em produção, com total autonomia.",
    "destaque.nota": "Projeto de ideia e autoria própria. Código-fonte completo não publicado neste portfólio; descrição de arquitetura disponível no repositório.",
    "destaque.ver": "Ver projeto completo →",
    "metricas.titulo": "Métricas e impacto",
    "metricas.nota": "Métricas marcadas como \"estimativa\" ainda não têm confirmação numérica definitiva por arquivo, mas refletem o melhor conhecimento disponível. Ver metricas/dados_a_validar.md no repositório.",
    "footer.texto": "Documentação completa, com evidências e metodologia, disponível no repositório Markdown.",
    "proj.eyebrow.migracao": "Projeto · Migração",
    "proj.eyebrow.consultoria": "Projeto · Consultoria",
    "proj.eyebrow.saneamento": "Projeto · Saneamento de Dados",
    "proj.eyebrow.automacao": "Projeto · Automação",
    "proj.voltar": "Voltar para Legal One"
  },
  en: {
    "brand.role": "Database Analyst",
    "nav.sobre": "About",
    "nav.competencias": "Skills",
    "nav.experiencias": "Experience",
    "nav.trajetoria": "Timeline",
    "hero.eyebrow": "Technical Portfolio",
    "hero.title": "Databases, automation, and data-pipeline integration",
    "hero.subtitle": "SQL Server · Azure Data Factory · Automation · Data Migration",
    "hero.personal": "I like taking a manual, bottlenecked process and turning it into something simple, safe, and repeatable by anyone on the team.",
    "sobre.titulo": "About me",
    "sobre.p1": "I work as a data intern at Thomson Reuters, on data migration and database mapping projects. Day to day, I use SQL Server to build scripts and support pipeline executions, and I also follow processes in Azure Data Factory — analyzing logs and fixing errors until the final delivery is consistent.",
    "sobre.p2": "I'm interested in going deeper into automation, systems integration, and efficiency-driven environments, understanding how to structure and maintain more scalable, reliable processes. I also bring experience with work that demands organization, attention to detail, and a focus on practical solutions — which I apply daily as I keep growing steadily in tech.",
    "sobre.p3": "That approach has already led me to serve 30+ clients across migration and consulting projects, and to build my own automation tool — the Contact Deduplication Tool — now used by other consultants in the field.",
    "competencias.titulo": "Skills",
    "competencias.intro": "Each star reflects real evidence found in project files — not a generic self-rating. Full breakdown, with evidence and justification for each score, in the repository (matriz_de_competencias.en.md).",
    "competencias.tabTecnicas": "Technical Skills",
    "competencias.tabSoft": "Soft Skills",
    "trajetoria.titulo": "Timeline",
    "trajetoria.intro": "Key education and career milestones. Drag sideways to see more →",
    "experiencias.titulo": "Experience",
    "experiencias.intro": "From migrating competing platforms to automation that removes operational bottlenecks — each experience has its own page, with projects, metrics, and evidence.",
    "experiencias.legalOne.titulo": "Legal One Experience",
    "experiencias.legalOne.desc": "Competing-platform migrations, recurring production consulting, and an automation tool built from scratch — all developed throughout the work with Legal One.",
    "experiencias.ver": "View projects and metrics →",
    "experiencias.futura.titulo": "Next experience",
    "experiencias.futura.desc": "New experience pages will be added here as new projects are documented.",
    "exp.voltar": "Back to home",
    "exp.legalOne.eyebrow": "Experience",
    "exp.legalOne.title": "Legal One",
    "exp.legalOne.subtitle": "Competing-platform migration · Recurring consulting · Data sanitization · Automation",
    "exp.projetos.titulo": "Projects",
    "destaque.titulo": "Featured project: Contact Deduplication Tool",
    "destaque.p1": "Python + Selenium tool, with its own graphical interface, packaged as an executable and distributed to field consultants. Identifies duplicate contacts by tax ID and triggers Legal One's native merge function.",
    "destaque.p2": "Eliminates, for this scenario, the need to extract the production database, move it to staging, treat the data, and wait for SLA release — the consultant now resolves it directly, in production, with full autonomy.",
    "destaque.nota": "Original idea and solution. Full source code is not published in this portfolio; architecture description is available in the repository.",
    "destaque.ver": "View full project →",
    "metricas.titulo": "Metrics and impact",
    "metricas.nota": "Metrics marked \"estimate\" don't yet have definitive file-based numeric confirmation, but reflect the best information available. See metricas/dados_a_validar.md in the repository.",
    "footer.texto": "Full documentation, with evidence and methodology, is available in the Markdown repository.",
    "proj.eyebrow.migracao": "Project · Migration",
    "proj.eyebrow.consultoria": "Project · Consulting",
    "proj.eyebrow.saneamento": "Project · Data Sanitization",
    "proj.eyebrow.automacao": "Project · Automation",
    "proj.voltar": "Back to Legal One"
  }
};

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

const timeline = [
  { date: "Jan 2017", pt: "Ingresso na FATEC — Mecânica, Processos de Produção", en: "Started FATEC — Mechanical Engineering, Production Processes" },
  { date: "Jan 2021", pt: "Formação em Mecânica — Processos de Produção", en: "Graduated — Mechanical Engineering, Production Processes" },
  { date: "Jan 2023", pt: "Ingresso na FATEC — Análise e Desenvolvimento de Sistemas", en: "Started FATEC — Systems Analysis and Development" },
  { date: "Mar 2025", pt: "Início do estágio na Thomson Reuters", en: "Started internship at Thomson Reuters" },
  { date: "Jan 2027", pt: "Formação em Análise e Desenvolvimento de Sistemas (prevista)", en: "Graduation — Systems Analysis and Development (expected)" }
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

let currentLang = "pt";

function renderStaticText(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
}

function renderSkillGroup(gridId, list, lang) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = "";
  list.forEach(s => {
    const card = document.createElement("div");
    card.className = "card skill-card";
    const stars = Array.from({ length: 5 }, (_, i) =>
      `<span class="star ${i < s.score ? "filled" : ""}">★</span>`
    ).join("");
    const note = lang === "pt" ? s.notePt : s.noteEn;
    card.innerHTML = `<h3>${s[lang]}</h3><div class="star-rating">${stars}</div><p>${note}</p>`;
    grid.appendChild(card);
  });
}

function renderSkills(lang) {
  renderSkillGroup("skills-grid-tecnicas", skillsTecnicas, lang);
  renderSkillGroup("skills-grid-soft", skillsSoft, lang);
}

function renderTimeline(lang) {
  const list = document.getElementById("timeline-list");
  if (!list) return;
  list.innerHTML = "";
  timeline.forEach(t => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `<div class="timeline-date">${t.date}</div><p class="timeline-title">${t[lang]}</p>`;
    list.appendChild(item);
  });
}

function renderProjects(lang) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = "";
  projects.forEach(p => {
    const data = p[lang];
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${data.title}</h3><p>${data.desc}</p><a class="btn" href="${data.link}">${lang === "pt" ? "Ver detalhes" : "View details"} →</a>`;
    grid.appendChild(card);
  });
}

function renderMetrics(lang) {
  const grid = document.getElementById("metrics-grid");
  if (!grid) return;
  grid.innerHTML = "";
  metrics.forEach(m => {
    const card = document.createElement("div");
    card.className = "card";
    const tagLabel = m.tag === "confirmed"
      ? (lang === "pt" ? "comprovada" : "confirmed")
      : (lang === "pt" ? "estimativa" : "estimate");
    card.innerHTML = `<div class="metric-value">${m.value}</div><p>${m[lang]}</p><span class="tag ${m.tag}">${tagLabel}</span>`;
    grid.appendChild(card);
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll(".card, .section h2, .highlight, .timeline-item");
  targets.forEach(el => el.classList.add("reveal"));
  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  targets.forEach(el => observer.observe(el));
}

function toggleLangBlocks(lang) {
  document.querySelectorAll("[data-lang-block]").forEach(el => {
    el.style.display = el.getAttribute("data-lang-block") === lang ? "" : "none";
  });
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.getElementById("btn-pt").classList.toggle("active", lang === "pt");
  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  renderStaticText(lang);
  renderSkills(lang);
  renderProjects(lang);
  renderMetrics(lang);
  renderTimeline(lang);
  toggleLangBlocks(lang);
  initScrollReveal();
}

document.getElementById("btn-pt").addEventListener("click", () => setLanguage("pt"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));
setLanguage(currentLang);
