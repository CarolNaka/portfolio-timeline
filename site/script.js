// Conteúdo do site — editar aqui para atualizar sem mexer no HTML.
// Site content — edit here to update without touching the HTML.
//
// Convenções / Conventions:
// - Chaves de i18n usadas em elementos com [data-i18n] (texto) ou [data-i18n][data-i18n-html] (HTML permitido,
//   apenas para destaques <em class="hl">). / i18n keys used by [data-i18n] (text) or [data-i18n-html] (HTML allowed).
// - As demais estruturas (skills, timeline, projects, metrics, stack) são renderizadas por função.

const i18n = {
  pt: {
    "brand.role": "Data | Automation | AI Builder",
    "aria.inicio": "Carolina Nakasuka — início",
    "aria.secoes": "Seções",
    "aria.especialidades": "Especialidades",
    "aria.submenu": "Abrir submenu",
    "nav.menu.profissionais": "Projetos profissionais",
    "nav.menu.github": "No GitHub",
    "nav.sobre": "Sobre",
    "nav.home": "Home",
    "nav.competencias": "Competências",
    "nav.experiencias": "Experiências",
    "nav.projetos": "Projetos",
    "nav.trajetoria": "Trajetória",
    "hero.eyebrow": "Portfólio Técnico",
    "hero.title": "Dados, automação e construção de soluções com IA",
    "hero.stack1": "SQL Server",
    "hero.stack2": "Azure Data Factory",
    "hero.stack3": "Automação",
    "hero.stack4": "Migração de Dados",
    "hero.personal": "Gosto de pegar um processo manual, cheio de gargalos, e transformá-lo em algo simples, seguro e replicável por qualquer pessoa do time.",
    "hero.ctaExperiencias": "Ver experiências",
    "hero.tag1": "SQL Server · T-SQL",
    "hero.tag2": "Azure Data Factory",
    "hero.tag3": "Python · Selenium · VBA",
    "hero.tag4": "ETL · Pipelines de dados",
    "hero.fact1": "clientes atendidos",
    "hero.fact2": "migrações banco a banco",
    "hero.fact3": "commits em ~5 meses",
    "hero.fact4": "scripts Python próprios",
    "hero.scroll": "Rolar",
    "sobre.titulo": "Sobre mim",
    "sobre.aside": "Perfil · Stack · O que resolvo",
    "sobre.p1": "Estudante de <em class=\"hl\">Análise e Desenvolvimento de Sistemas</em> (formação prevista para dezembro de 2026), com experiência profissional em <em class=\"hl\">dados, automação e desenvolvimento de soluções na Thomson Reuters</em>. Trabalho diretamente com SQL, ETL e pipelines no Azure Data Factory, atuando com autonomia desde a análise do problema até a definição e a execução da solução: tomo decisões, investigo falhas e busco soluções efetivas para o que surge nos projetos. Atuo no segmento do Legal One, em migração e mapeamento de bases de dados a partir de plataformas concorrentes como Astrea, Projuris, CPJ e CP-PRO.",
    "sobre.p2": "Em <em class=\"hl\">mais de 30 clientes atendidos</em>, <em class=\"hl\">25+ foram migrações de banco a banco</em> e cerca de 23 seguiram em consultoria recorrente. Além da execução técnica, conduzo projetos de forma independente, organizo demandas, identifico melhorias e transformo necessidades em soluções práticas. Mantenho um padrão de segurança em cada correção em produção (script declarativo, de execução e de rollback) e contribuí com <em class=\"hl\">92 commits em ~5 meses</em> em um repositório de migração mantido por um time de 18 pessoas, com mais de 40 scripts SQL de extração organizados por módulo.",
    "sobre.p3": "Também crio ferramentas para ganhar produtividade: <em class=\"hl\">8 scripts Python próprios</em>, 7 macros VBA de validação de planilhas e o <em class=\"hl\">Unificador de Contatos (Python + Selenium)</em>, que idealizei e desenvolvi e hoje é usado por outros consultores em campo. Agora busco ampliar minha atuação em tecnologia, aprofundando o uso de <em class=\"hl\">Inteligência Artificial</em>, automação e desenvolvimento de soluções.",
    "sobre.resolvoTitulo": "Problemas que sei resolver",
    "sobre.resolvo1t": "Migrar dados entre sistemas",
    "sobre.resolvo1d": "De Astrea, Projuris, CPJ e CP-PRO para o Legal One, com pipeline por módulos e validação até a carga final.",
    "sobre.resolvo2t": "Corrigir produção com segurança",
    "sobre.resolvo2d": "Cada ajuste com script declarativo, de execução e de rollback, aprovado formalmente antes de rodar.",
    "sobre.resolvo3t": "Automatizar o que é manual",
    "sobre.resolvo3d": "Python, Selenium e VBA para eliminar gargalos repetitivos e distribuir a solução para o time.",
    "sobre.stackTitulo": "Stack principal",
    "experiencias.titulo": "Experiências",
    "experiencias.intro": "Atuação profissional em migração de dados, consultoria em produção e automação, com projetos e métricas documentados.",
    "experiencias.legalOne.org": "Técnica em Banco de Dados · Mar/2025 – Atual",
    "experiencias.legalOne.titulo": "Thomson Reuters Brasil",
    "experiencias.legalOne.desc": "Atuação no segmento do Legal One: migrações de plataformas concorrentes, consultoria recorrente em produção e uma ferramenta de automação criada do zero.",
    "experiencias.legalOne.projetosTitulo": "Projetos documentados",
    "gh.titulo": "Projetos no GitHub",
    "gh.aside": "Projetos pessoais",
    "gh.intro": "Projetos pessoais publicados no GitHub, desenvolvidos fora do contexto corporativo.",
    "gh.ver": "Ver no GitHub",
    "experiencias.statProjetos": "projetos",
    "experiencias.statMetricas": "métricas",
    "experiencias.statFeedbacks": "feedbacks",
    "experiencias.legalOne.tag1": "Migração de dados",
    "experiencias.legalOne.tag2": "Consultoria recorrente",
    "experiencias.legalOne.tag3": "Automação",
    "experiencias.ver": "Ver projetos e métricas",
    "trajetoria.titulo": "Trajetória",
    "trajetoria.aside": "2017 — 2026",
    "trajetoria.intro": "Principais marcos de formação e carreira, da engenharia mecânica à área de dados.",
    "trajetoria.tipo.edu": "Formação",
    "trajetoria.tipo.work": "Carreira",
    "competencias.titulo": "Skills",
    "competencias.aside": "Técnicas · Comportamentais",
    "competencias.intro": "Habilidades que utilizo no dia a dia ou que já apliquei nos projetos apresentados neste portfólio. Cada uma indica onde foi aplicada.",
    "skills.daily": "Uso diário",
    "skills.apps": "Aplicada em",
    "competencias.tabTecnicas": "Competências técnicas",
    "competencias.tabSoft": "Soft skills",
    "exp.voltar": "Voltar ao início",
    "exp.legalOne.eyebrow": "Experiência · Técnica em Banco de Dados",
    "exp.legalOne.title": "Thomson Reuters Brasil",
    "exp.legalOne.subtitle": "Atuação no segmento do Legal One · Migração de plataformas concorrentes · Consultoria recorrente · Saneamento de dados · Automação",
    "exp.atuacao.titulo": "Atuação",
    "exp.atuacao.b1": "Atuação em projetos de migração e mapeamento de bases de dados de clientes e concorrentes, envolvendo processos de ETL, transformação, validação e garantia da integridade das informações.",
    "exp.atuacao.b2": "Condução independente de atividades e projetos, assumindo responsabilidade pelas etapas de análise, execução, investigação de problemas e entrega das soluções.",
    "exp.atuacao.b3": "Desenvolvimento de scripts em Microsoft SQL Server para execução e automação de processos de migração, considerando as particularidades e necessidades de cada projeto.",
    "exp.atuacao.b4": "Atuação com Azure Data Factory no acompanhamento e execução de pipelines, realizando análise de logs, identificação de falhas e tomada de decisões para diagnóstico e resolução de problemas.",
    "exp.atuacao.b5": "Análise e tratamento de dados para identificação de inconsistências, validação de resultados e garantia da qualidade das entregas.",
    "exp.atuacao.b6": "Desenvolvimento e implementação de soluções e melhorias para necessidades identificadas durante os projetos, buscando reduzir retrabalho e tornar os processos mais eficientes.",
    "exp.atuacao.b7": "Atuação com elevado grau de autonomia, sendo responsável por conduzir demandas, avaliar alternativas e definir abordagens para solucionar problemas técnicos encontrados durante a execução.",
    "exp.projetos.titulo": "Projetos",
    "destaque.eyebrow": "Projeto em destaque · Ideia e autoria própria",
    "destaque.titulo": "Projeto em destaque: Unificador de Contatos",
    "destaque.p1": "Ferramenta Python + Selenium, com interface gráfica própria, empacotada em executável e distribuída para consultores em campo. Identifica contatos duplicados por CPF/CNPJ e aciona a função nativa de unificação do Legal One.",
    "destaque.p2": "Elimina, para esse cenário, a necessidade de extrair a base de produção, levar para homologação, tratar os dados e aguardar SLA de liberação — o consultor passa a resolver diretamente, em produção, com total autonomia.",
    "destaque.nota": "Ideia e autoria próprias. O código-fonte não é público; a arquitetura está descrita na página do projeto.",
    "destaque.ver": "Ver projeto completo",
    "metricas.titulo": "Métricas e impacto",
    "metricas.nota": "Métricas classificadas como estimativa refletem o melhor conhecimento disponível, ainda sem confirmação numérica definitiva.",
    "footer.texto": "Documentação técnica completa disponível no GitHub.",
    "proj.eyebrow.migracao": "Projeto · Migração",
    "proj.eyebrow.consultoria": "Projeto · Consultoria",
    "proj.eyebrow.saneamento": "Projeto · Saneamento de Dados",
    "proj.eyebrow.automacao": "Projeto · Automação",
    "proj.voltar": "Voltar para Thomson Reuters Brasil",
    "toc.titulo": "Nesta página",
    "proj.verDetalhes": "Ver detalhes"
  },
  en: {
    "brand.role": "Data | Automation | AI Builder",
    "aria.inicio": "Carolina Nakasuka — home",
    "aria.secoes": "Sections",
    "aria.especialidades": "Specialties",
    "aria.submenu": "Open submenu",
    "nav.menu.profissionais": "Professional projects",
    "nav.menu.github": "On GitHub",
    "nav.sobre": "About",
    "nav.home": "Home",
    "nav.competencias": "Skills",
    "nav.experiencias": "Experience",
    "nav.projetos": "Projects",
    "nav.trajetoria": "Timeline",
    "hero.eyebrow": "Technical Portfolio",
    "hero.title": "Data, automation, and building solutions with AI",
    "hero.stack1": "SQL Server",
    "hero.stack2": "Azure Data Factory",
    "hero.stack3": "Automation",
    "hero.stack4": "Data Migration",
    "hero.personal": "I like taking a manual, bottlenecked process and turning it into something simple, safe, and repeatable by anyone on the team.",
    "hero.ctaExperiencias": "See experience",
    "hero.tag1": "SQL Server · T-SQL",
    "hero.tag2": "Azure Data Factory",
    "hero.tag3": "Python · Selenium · VBA",
    "hero.tag4": "ETL · Data pipelines",
    "hero.fact1": "clients served",
    "hero.fact2": "database-to-database migrations",
    "hero.fact3": "commits in ~5 months",
    "hero.fact4": "Python scripts of my own",
    "hero.scroll": "Scroll",
    "sobre.titulo": "About me",
    "sobre.aside": "Profile · Stack · What I solve",
    "sobre.p1": "Systems Analysis and Development student (expected graduation in December 2026), with professional experience in <em class=\"hl\">data, automation, and solution development at Thomson Reuters</em>. I work directly with SQL, ETL, and Azure Data Factory pipelines, acting autonomously from analyzing the problem to defining and executing the solution: I make decisions, investigate failures, and look for effective answers to what comes up in projects. I work in the Legal One segment, migrating and mapping databases from competing platforms such as Astrea, Projuris, CPJ, and CP-PRO.",
    "sobre.p2": "Of <em class=\"hl\">30+ clients served</em>, <em class=\"hl\">25+ were database-to-database migrations</em> and about 23 continued in recurring consulting. Beyond technical execution, I lead projects independently, organize demands, spot improvements, and turn needs into practical solutions. I follow a safety standard on every production fix (declarative, execution, and rollback scripts) and contributed <em class=\"hl\">92 commits in ~5 months</em> to a migration repository maintained by a team of 18, with 40+ SQL extraction scripts organized by module.",
    "sobre.p3": "I also build tools to boost productivity: <em class=\"hl\">8 Python scripts of my own</em>, 7 VBA spreadsheet-validation macros, and the <em class=\"hl\">Contact Deduplication Tool (Python + Selenium)</em>, which I conceived and built and which is now used by other consultants in the field. I'm now looking to broaden my work in technology, going deeper into <em class=\"hl\">Artificial Intelligence</em>, automation, and solution development.",
    "sobre.resolvoTitulo": "Problems I solve",
    "sobre.resolvo1t": "Migrate data between systems",
    "sobre.resolvo1d": "From Astrea, Projuris, CPJ, and CP-PRO into Legal One, with a per-module pipeline and validation through final load.",
    "sobre.resolvo2t": "Fix production safely",
    "sobre.resolvo2d": "Every change ships with declarative, execution, and rollback scripts, formally approved before it runs.",
    "sobre.resolvo3t": "Automate what is manual",
    "sobre.resolvo3d": "Python, Selenium, and VBA to remove repetitive bottlenecks and hand the solution to the whole team.",
    "sobre.stackTitulo": "Core stack",
    "experiencias.titulo": "Experience",
    "experiencias.intro": "Professional work in data migration, production consulting, and automation, with documented projects and metrics.",
    "experiencias.legalOne.org": "Database Analyst · Mar 2025 – Present",
    "experiencias.legalOne.titulo": "Thomson Reuters Brasil",
    "experiencias.legalOne.desc": "Working in the Legal One segment: competing-platform migrations, recurring production consulting, and an automation tool built from scratch.",
    "experiencias.legalOne.projetosTitulo": "Documented projects",
    "gh.titulo": "Projects on GitHub",
    "gh.aside": "Personal projects",
    "gh.intro": "Personal projects published on GitHub, built outside the corporate context.",
    "gh.ver": "View on GitHub",
    "experiencias.statProjetos": "projects",
    "experiencias.statMetricas": "metrics",
    "experiencias.statFeedbacks": "feedbacks",
    "experiencias.legalOne.tag1": "Data migration",
    "experiencias.legalOne.tag2": "Recurring consulting",
    "experiencias.legalOne.tag3": "Automation",
    "experiencias.ver": "View projects and metrics",
    "trajetoria.titulo": "Timeline",
    "trajetoria.aside": "2017 — 2026",
    "trajetoria.intro": "Key education and career milestones, from mechanical engineering to the data field.",
    "trajetoria.tipo.edu": "Education",
    "trajetoria.tipo.work": "Career",
    "competencias.titulo": "Skills",
    "competencias.aside": "Technical · Behavioral",
    "competencias.intro": "Skills I use day to day or have already applied in the projects presented in this portfolio. Each one shows where it was applied.",
    "skills.daily": "Daily use",
    "skills.apps": "Applied in",
    "competencias.tabTecnicas": "Technical skills",
    "competencias.tabSoft": "Soft skills",
    "exp.voltar": "Back to home",
    "exp.legalOne.eyebrow": "Experience · Database Analyst",
    "exp.legalOne.title": "Thomson Reuters Brasil",
    "exp.legalOne.subtitle": "Working in the Legal One segment · Competing-platform migration · Recurring consulting · Data sanitization · Automation",
    "exp.atuacao.titulo": "What I do",
    "exp.atuacao.b1": "Working on migration and mapping projects for client and competitor databases, covering ETL, transformation, validation, and data-integrity assurance.",
    "exp.atuacao.b2": "Leading activities and projects independently, owning the analysis, execution, problem-investigation, and solution-delivery stages.",
    "exp.atuacao.b3": "Developing Microsoft SQL Server scripts to run and automate migration processes, taking each project's particularities and needs into account.",
    "exp.atuacao.b4": "Working with Azure Data Factory to monitor and run pipelines, analyzing logs, identifying failures, and making decisions to diagnose and resolve problems.",
    "exp.atuacao.b5": "Analyzing and treating data to find inconsistencies, validate results, and ensure the quality of deliverables.",
    "exp.atuacao.b6": "Building solutions and improvements for needs identified during projects, aiming to reduce rework and make processes more efficient.",
    "exp.atuacao.b7": "Working with a high degree of autonomy: driving demands, evaluating alternatives, and defining approaches to solve technical problems found during execution.",
    "exp.projetos.titulo": "Projects",
    "destaque.eyebrow": "Featured project · Original idea and solution",
    "destaque.titulo": "Featured project: Contact Deduplication Tool",
    "destaque.p1": "Python + Selenium tool, with its own graphical interface, packaged as an executable and distributed to field consultants. Identifies duplicate contacts by tax ID and triggers Legal One's native merge function.",
    "destaque.p2": "Eliminates, for this scenario, the need to extract the production database, move it to staging, treat the data, and wait for SLA release — the consultant now resolves it directly, in production, with full autonomy.",
    "destaque.nota": "Original idea and authorship. The source code is not public; the architecture is described on the project page.",
    "destaque.ver": "View full project",
    "metricas.titulo": "Metrics and impact",
    "metricas.nota": "Metrics classified as estimates reflect the best information available, without definitive numeric confirmation yet.",
    "footer.texto": "Full technical documentation available on GitHub.",
    "proj.eyebrow.migracao": "Project · Migration",
    "proj.eyebrow.consultoria": "Project · Consulting",
    "proj.eyebrow.saneamento": "Project · Data Sanitization",
    "proj.eyebrow.automacao": "Project · Automation",
    "proj.voltar": "Back to Thomson Reuters Brasil",
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

const skillApps = {
  migracao: { pt: "Migração de Banco a Banco", en: "Database-to-Database Migration", href: "projetos/migracao-banco-a-banco.html" },
  consultoria: { pt: "Consultoria Recorrente", en: "Recurring Consulting", href: "projetos/consultoria-recorrente.html" },
  unificador: { pt: "Unificador de Contatos", en: "Contact Deduplication Tool", href: "projetos/unificador-de-contatos.html" },
  python: { pt: "Automações Python", en: "Python Automations", href: "projetos/automacoes-python.html" },
  sqlvba: { pt: "Automações SQL e VBA", en: "SQL & VBA Automations", href: "projetos/automacoes-sql-vba.html" },
  thomson: { pt: "Thomson Reuters Brasil", en: "Thomson Reuters Brasil", href: "experiencias/thomson-reuters.html" }
};

// daily: true = habilidade usada no dia a dia da função atual; apps = onde foi aplicada nos projetos apresentados
const skillsTecnicas = [
  { pt: "SQL Server (T-SQL)", en: "SQL Server (T-SQL)", descPt: "Scripts de extração, transformação, deduplicação e correção de dados, incluindo scripts de rollback preparados antes de cada alteração em produção.", descEn: "Scripts for data extraction, transformation, deduplication, and correction, including rollback scripts prepared before every production change.", daily: true, apps: ["migracao", "consultoria", "sqlvba"] },
  { pt: "ETL e migração de dados", en: "ETL & data migration", descPt: "Extração, transformação, validação e carga de dados entre plataformas diferentes, com foco em manter a integridade das informações.", descEn: "Extraction, transformation, validation, and loading of data between different platforms, focused on preserving data integrity.", daily: true, apps: ["migracao", "thomson"] },
  { pt: "Azure Data Factory", en: "Azure Data Factory", descPt: "Execução e acompanhamento de pipelines de dados, com análise de logs, identificação de falhas e diagnóstico de problemas.", descEn: "Running and monitoring data pipelines, with log analysis, failure identification, and problem diagnosis.", daily: true, apps: ["thomson"] },
  { pt: "Qualidade e saneamento de dados", en: "Data quality & sanitization", descPt: "Identificação de inconsistências e duplicidades, comparação de volumes entre bases e validação de resultados para garantir entregas confiáveis.", descEn: "Detecting inconsistencies and duplicates, comparing volumes between databases, and validating results to ensure reliable deliverables.", daily: true, apps: ["unificador", "sqlvba", "python"] },
  { pt: "Mapeamento e modelagem de dados", en: "Data mapping & modeling", descPt: "Mapeamento de equivalência entre os modelos de dados de plataformas distintas (Astrea, Projuris, CPJ e CP-PRO para o Legal One).", descEn: "Mapping equivalence between the data models of different platforms (Astrea, Projuris, CPJ, and CP-PRO into Legal One).", daily: true, apps: ["migracao"] },
  { pt: "Python", en: "Python", descPt: "Scripts e aplicações para integração de dados (Excel, SQL Server, MySQL), automação de tarefas e interfaces desktop com Tkinter.", descEn: "Scripts and applications for data integration (Excel, SQL Server, MySQL), task automation, and desktop interfaces with Tkinter.", daily: false, apps: ["python", "unificador"] },
  { pt: "Automação com Selenium", en: "Selenium automation", descPt: "Automação de navegador para executar fluxos repetitivos em sistemas web, com seleção direta dos elementos da tela.", descEn: "Browser automation to run repetitive workflows on web systems, selecting on-screen elements directly.", daily: false, apps: ["unificador"] },
  { pt: "VBA e automação de Excel", en: "VBA & Excel automation", descPt: "Macros que validam a estrutura das planilhas de migração e apontam divergências antes do envio para carga.", descEn: "Macros that validate the structure of migration spreadsheets and flag discrepancies before they are submitted for loading.", daily: false, apps: ["sqlvba"] },
  { pt: "Git e GitHub", en: "Git & GitHub", descPt: "Versionamento colaborativo de scripts em um repositório de equipe, com 92 commits em cerca de 5 meses.", descEn: "Collaborative version control of scripts in a team repository, with 92 commits over about 5 months.", daily: true, apps: ["migracao"] },
  { pt: "Consultoria e suporte em produção", en: "Production consulting & support", descPt: "Ajustes em ambiente de produção com script declarativo, de execução e de rollback, sempre com aprovação formal antes de executar.", descEn: "Production changes using declarative, execution, and rollback scripts, always with formal approval before running.", daily: false, apps: ["consultoria"] }
];

const skillsSoft = [
  { pt: "Autonomia", en: "Autonomy", descPt: "Condução de demandas de ponta a ponta, da análise do problema à definição e execução da solução, incluindo ferramentas criadas por iniciativa própria.", descEn: "Driving demands end to end, from analyzing the problem to defining and executing the solution, including tools built on my own initiative.", daily: true, apps: ["unificador", "thomson"] },
  { pt: "Resolução de problemas", en: "Problem solving", descPt: "Investigação de falhas e escolha da abordagem mais efetiva para resolver problemas técnicos durante a execução dos projetos.", descEn: "Investigating failures and choosing the most effective approach to technical problems during project execution.", daily: true, apps: ["unificador", "thomson"] },
  { pt: "Entendimento de processos de negócio", en: "Business-process understanding", descPt: "Tradução de regras de negócio jurídicas, como tipo de ação e centro de custo, em lógica de dados.", descEn: "Translating legal business rules, such as case type and cost center, into data logic.", daily: false, apps: ["consultoria"] },
  { pt: "Análise de requisitos", en: "Requirements analysis", descPt: "Interpretação de demandas e definição do escopo técnico antes de construir a solução.", descEn: "Interpreting demands and defining the technical scope before building the solution.", daily: false, apps: ["consultoria", "unificador"] },
  { pt: "Colaboração em equipe", en: "Team collaboration", descPt: "Trabalho em repositório e processos compartilhados com um time de 18 pessoas, mantendo os padrões definidos pelo grupo.", descEn: "Working in a shared repository and processes with a team of 18, following the standards set by the group.", daily: false, apps: ["migracao"] },
  { pt: "Produtividade e melhoria contínua", en: "Productivity & continuous improvement", descPt: "Identificação de tarefas manuais repetitivas e criação de scripts e ferramentas que as reduzem para a equipe.", descEn: "Identifying repetitive manual tasks and building scripts and tools that reduce them for the team.", daily: false, apps: ["python", "sqlvba", "unificador"] },
  { pt: "Comunicação técnica", en: "Technical communication", descPt: "Aprovação formal por e-mail antes de cada execução em produção e material de treinamento em vídeo para outros consultores.", descEn: "Formal email approval before every production execution, and training video material for other consultants.", daily: false, apps: ["consultoria", "unificador"] },
  { pt: "Responsabilidade com dados sensíveis", en: "Responsibility with sensitive data", descPt: "Rollback e aprovação formal em cada alteração de produção, preservando a integridade e a confidencialidade dos dados de clientes.", descEn: "Rollback and formal approval on every production change, preserving the integrity and confidentiality of client data.", daily: false, apps: ["consultoria"] }
];

// type: "edu" (formação) | "work" (carreira)
const timeline = [
  { date: "Jan 2017", type: "edu", pt: "Ingresso na FATEC — Mecânica, Processos de Produção", en: "Started FATEC — Mechanical Engineering, Production Processes" },
  { date: "Jun 2021", type: "edu", pt: "Formação em Mecânica — Processos de Produção", en: "Graduated — Mechanical Engineering, Production Processes" },
  { date: "Jan 2023", type: "edu", pt: "Ingresso na FATEC — Análise e Desenvolvimento de Sistemas", en: "Started FATEC — Systems Analysis and Development" },
  { date: "Mar 2025", type: "work", pt: "Início do estágio na Thomson Reuters Brasil", en: "Started internship at Thomson Reuters Brasil" },
  { date: "Dez 2026", dateEn: "Dec 2026", type: "edu", pt: "Formação em Análise e Desenvolvimento de Sistemas (prevista)", en: "Graduation — Systems Analysis and Development (expected)" }
];

// Projetos pessoais publicados no GitHub. Para adicionar um novo, inclua um item aqui.
// desc (opcional): { pt, en }. tags (opcional): lista de tecnologias.
const githubProjects = [
  { name: "focus-clock", url: "https://github.com/CarolNaka/focus-clock", desc: null, tags: [] }
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

function renderSkillGroup(gridId, list, lang) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = "";
  const t = i18n[lang];
  list.forEach(s => {
    const card = document.createElement("article");
    card.className = "card skill-card";
    const badge = s.daily ? `<span class="skill-badge">${t["skills.daily"]}</span>` : "";
    const apps = s.apps.map(k => `<a class="skill-app" href="${skillApps[k].href}">${skillApps[k][lang]}</a>`).join("");
    card.innerHTML = `<div class="skill-head"><h3>${s[lang]}</h3>${badge}</div><p>${lang === "pt" ? s.descPt : s.descEn}</p><div class="skill-apps"><span class="skill-apps-label">${t["skills.apps"]}</span>${apps}</div>`;
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
  list.querySelectorAll(".timeline-item").forEach(el => el.remove());
  timeline.forEach((t, i) => {
    const item = document.createElement("div");
    item.className = "timeline-item" + (i === timeline.length - 1 ? " timeline-item--last" : "");
    const typeLabel = i18n[lang][`trajetoria.tipo.${t.type}`] || "";
    item.innerHTML = `
      <span class="timeline-node" aria-hidden="true"></span>
      <div class="timeline-card">
        <div class="timeline-meta">
          <span class="timeline-date">${(lang === "en" && t.dateEn) || t.date}</span>
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

function renderGithubProjects(lang) {
  const grid = document.getElementById("gh-grid");
  if (!grid) return;
  grid.innerHTML = "";
  githubProjects.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "card card--hover project-card spot";
    const desc = p.desc && p.desc[lang] ? `<p>${p.desc[lang]}</p>` : "";
    const tags = p.tags && p.tags.length
      ? `<div class="chip-list chip-list--card">${p.tags.map(t => `<span class="chip">${t}</span>`).join("")}</div>` : "";
    card.innerHTML = `<span class="project-idx">${pad2(i + 1)}</span><h3>${p.name}</h3>${desc}${tags}<a class="btn" href="${p.url}" target="_blank" rel="noopener"><span>${i18n[lang]["gh.ver"]}</span>${ARROW_SVG}</a>`;
    grid.appendChild(card);
  });
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
  ".section-head", ".section > .muted", ".card", ".highlight", ".timeline-item",
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

// Submenus do cabeçalho (Experiências e Projetos): montados a partir dos mesmos dados das seções
function renderNavMenus(lang) {
  const nav = document.querySelector("nav.nav[data-base]");
  if (!nav) return;
  const base = nav.getAttribute("data-base") || "";
  const t = i18n[lang];

  const exp = document.getElementById("menu-experiencias");
  if (exp) {
    exp.innerHTML = `<li><a href="${base}experiencias/thomson-reuters.html"><span>${t["experiencias.legalOne.titulo"]}</span><small>${t["experiencias.legalOne.org"]}</small></a></li>`;
  }

  const prj = document.getElementById("menu-projetos");
  if (prj) {
    const prof = projects.map(p => {
      const d = p[lang];
      return `<li><a href="${base}${d.link.replace(/^(\.\.\/)?/, "")}"><span>${d.title}</span></a></li>`;
    }).join("");
    const gh = githubProjects.map(p =>
      `<li><a href="${p.url}" target="_blank" rel="noopener"><span>${p.name}</span><span class="nav-ext" aria-hidden="true">↗</span></a></li>`
    ).join("");
    prj.innerHTML = `<li class="nav-menu-label">${t["nav.menu.profissionais"]}</li>${prof}<li class="nav-menu-label">${t["nav.menu.github"]}</li>${gh}`;
  }

  // Página atual: marca o item do submenu e o item pai no cabeçalho
  const here = location.pathname.split("/").slice(-2).join("/");
  nav.querySelectorAll(".nav-menu a").forEach(a => {
    const href = a.getAttribute("href") || "";
    if (!/^https?:/.test(href) && href.endsWith(here) && here.indexOf("/") > -1) {
      a.setAttribute("aria-current", "page");
      const parent = a.closest(".nav-item");
      const label = parent && parent.querySelector(":scope > a");
      if (label) label.classList.add("is-active");
    }
  });
}

function initNavMenus() {
  const items = Array.from(document.querySelectorAll(".nav-item.has-menu"));
  if (!items.length) return;
  const closeAll = (except) => items.forEach(it => {
    if (it === except) return;
    it.classList.remove("is-open");
    const b = it.querySelector(".nav-caret");
    if (b) b.setAttribute("aria-expanded", "false");
  });
  items.forEach(item => {
    const btn = item.querySelector(".nav-caret");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const open = !item.classList.contains("is-open");
      closeAll(item);
      item.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    item.addEventListener("click", (e) => { if (e.target.closest("a")) closeAll(); });
  });
  document.addEventListener("click", (e) => { if (!e.target.closest(".nav-item.has-menu")) closeAll(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });
}

// Etiquetas flutuantes do retrato: desviam do ponteiro e saem da frente do rosto quando o mouse passa pela foto
function initPortraitTags() {
  const portrait = document.querySelector(".hero-portrait");
  if (!portrait) return;
  if (window.matchMedia("(hover: none)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const tags = Array.from(portrait.querySelectorAll(".float-tag")).map(el => ({ el, x: 0, y: 0, tx: 0, ty: 0 }));
  if (!tags.length) return;

  const RADIUS = 230;     // distância em que o ponteiro começa a empurrar a etiqueta
  const MAX_PUSH = 70;    // deslocamento máximo por repulsão (px)
  const OUTWARD = 48;     // empurrão extra para fora quando o ponteiro está sobre a foto (px)
  let pointer = null;
  let raf = 0;

  function target() {
    const pr = portrait.getBoundingClientRect();
    const pc = { x: pr.left + pr.width / 2, y: pr.top + pr.height / 2 };
    const overPortrait = pointer && pointer.x >= pr.left && pointer.x <= pr.right && pointer.y >= pr.top && pointer.y <= pr.bottom;
    tags.forEach(t => {
      const r = t.el.getBoundingClientRect();
      // centro "de repouso": remove o deslocamento atual
      const cx = r.left + r.width / 2 - t.x;
      const cy = r.top + r.height / 2 - t.y;
      let tx = 0, ty = 0;
      if (pointer) {
        let dx = cx - pointer.x, dy = cy - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < RADIUS) {
          const k = Math.pow(1 - dist / RADIUS, 1.5) * MAX_PUSH;
          const n = dist || 1;
          tx += (dx / n) * k;
          ty += (dy / n) * k;
        }
      }
      if (overPortrait) {
        const ox = cx - pc.x, oy = cy - pc.y;
        const n = Math.hypot(ox, oy) || 1;
        tx += (ox / n) * OUTWARD;
        ty += (oy / n) * OUTWARD;
      }
      // mantém a etiqueta dentro da janela (evita rolagem horizontal)
      const restLeft = r.left - t.x, restRight = r.right - t.x;
      tx = Math.min(tx, window.innerWidth - 8 - restRight);
      tx = Math.max(tx, 8 - restLeft);
      t.tx = tx;
      t.ty = ty;
    });
  }

  function frame() {
    target();
    let moving = false;
    tags.forEach(t => {
      t.x += (t.tx - t.x) * 0.14;
      t.y += (t.ty - t.y) * 0.14;
      if (Math.abs(t.tx - t.x) > 0.15 || Math.abs(t.ty - t.y) > 0.15) moving = true;
      t.el.style.setProperty("--tx", t.x.toFixed(2) + "px");
      t.el.style.setProperty("--ty", t.y.toFixed(2) + "px");
    });
    raf = moving || pointer ? requestAnimationFrame(frame) : 0;
  }

  function kick() { if (!raf) raf = requestAnimationFrame(frame); }

  window.addEventListener("pointermove", (e) => { pointer = { x: e.clientX, y: e.clientY }; kick(); }, { passive: true });
  document.addEventListener("pointerleave", () => { pointer = null; kick(); });
  window.addEventListener("blur", () => { pointer = null; kick(); });
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
  // Título da aba, meta description e rótulos de acessibilidade acompanham o idioma
  const titleEl = document.querySelector("title[data-en]");
  if (titleEl) {
    if (!titleEl.dataset.pt) titleEl.dataset.pt = titleEl.textContent;
    document.title = lang === "en" ? titleEl.dataset.en : titleEl.dataset.pt;
  }
  const metaDesc = document.querySelector('meta[name="description"][data-en]');
  if (metaDesc) {
    if (!metaDesc.dataset.pt) metaDesc.dataset.pt = metaDesc.getAttribute("content");
    metaDesc.setAttribute("content", lang === "en" ? metaDesc.dataset.en : metaDesc.dataset.pt);
  }
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const v = i18n[lang][el.getAttribute("data-i18n-aria")];
    if (v) el.setAttribute("aria-label", v);
  });
  renderStack(lang);
  renderSkills(lang);
  renderExperienceProjects(lang);
  renderNavMenus(lang);
  renderProjects(lang);
  renderGithubProjects(lang);
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
initPortraitTags();
initNavMenus();
initTimelineProgress();
