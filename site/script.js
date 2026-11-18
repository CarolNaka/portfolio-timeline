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
    "hero.stack4": "IA aplicada",
    "hero.personal": "“Aprendemos fazendo, não há outro jeito.” <cite>John Holt</cite>",
    "hero.ctaExperiencias": "Ver experiências",
    "hero.tag1": "SQL Server · T-SQL",
    "hero.tag2": "Azure Data Factory",
    "hero.tag3": "Python · Selenium · VBA",
    "hero.tag4": "ETL · Pipelines de dados",
    "hero.fact1": "clientes atendidos",
    "hero.fact2": "migrações banco a banco",
    "hero.fact3": "commits em ~5 meses",
    "hero.fact4": "scripts Python próprios",
    "sobre.titulo": "Sobre mim",
    "sobre.aside": "Perfil · Stack · Como eu trabalho",
    "sobre.p1": "Gosto de entender como as coisas funcionam, principalmente quando existe um problema para resolver. E, se no caminho encontro uma forma de fazer algo <em class=\"hl\">melhor, mais simples ou mais automático</em>, dificilmente deixo passar.",
    "sobre.p2": "Hoje trabalho na Thomson Reuters com <em class=\"hl\">dados, automação e soluções para migração de bases</em>, usando <em class=\"hl\">SQL, ETL e Azure Data Factory</em>. No dia a dia, isso significa investigar problemas, entender o que está acontecendo com os dados, pensar na melhor abordagem e colocar a solução em prática.",
    "sobre.p3": "Sou uma pessoa responsável com aquilo que assumo e gosto de ter autonomia para levar uma tarefa do problema até a entrega. Foi também dessa forma que comecei a transformar algumas tarefas repetitivas em <em class=\"hl\">automações e soluções que facilitam o trabalho</em>, porque, para mim, tecnologia faz mais sentido quando resolve um problema de verdade.",
    "sobre.p4": "Minha trajetória até aqui também não foi linear: tenho formação em <em class=\"hl\">Mecânica (Processos de Produção)</em> e estou concluindo <em class=\"hl\">Análise e Desenvolvimento de Sistemas</em>, ambas pela Fatec. Hoje, estou construindo meu caminho em tecnologia e quero continuar aprendendo, experimentando e fazendo um trabalho cada vez melhor, especialmente em automação, dados, desenvolvimento e IA.",
    "sobre.comoTitulo": "Como eu trabalho",
    "sobre.como1t": "Entendo antes de resolver",
    "sobre.como1d": "Gosto de entender o problema de verdade antes de sair procurando uma solução. Isso me ajuda a escolher uma abordagem que faça sentido, e não apenas a mais rápida.",
    "sobre.como2t": "Se é repetitivo, eu penso em automatizar",
    "sobre.como2d": "Quando percebo que alguém está gastando tempo demais fazendo a mesma coisa, começo a pensar em como simplificar. Foi assim que surgiram várias das minhas automações.",
    "sobre.como3t": "Não gosto de corrigir só o sintoma",
    "sobre.como3d": "Quando alguma coisa dá errado, minha primeira pergunta é: por quê? Prefiro investigar a causa e entender o que aconteceu antes de simplesmente aplicar uma correção.",
    "sobre.como4t": "Dados precisam fazer sentido",
    "sobre.como4d": "Não basta o processo terminar sem erro. Gosto de conferir os dados, validar o resultado e entender se aquilo que foi produzido realmente está correto.",
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
    "trajetoria.aside": "2026 — 2017",
    "trajetoria.intro": "Principais marcos de formação e carreira, do mais recente ao mais antigo.",
    "trajetoria.tipo.edu": "Formação",
    "trajetoria.tipo.work": "Carreira",
    "trajetoria.destaques": "Destaques",
    "trajetoria.verPublicacao": "Ver publicação no LinkedIn",
    "competencias.titulo": "Skills",
    "competencias.aside": "Técnicas · Comportamentais",
    "competencias.intro": "Habilidades que utilizo no dia a dia ou que já apliquei nos projetos apresentados neste portfólio. Cada uma indica onde foi aplicada.",
    "skills.daily": "Uso diário",
    "skills.apps": "Aplicada em",
    "competencias.tabTecnicas": "Competências técnicas",
    "competencias.tabSoft": "Soft skills",
    "exp.voltar": "Voltar para Experiências",
    "exp.legalOne.eyebrow": "Experiência · Técnica em Banco de Dados",
    "exp.legalOne.title": "Thomson Reuters Brasil",
    "exp.legalOne.subtitle": "Atuação no segmento do Legal One · Migração de plataformas concorrentes · Consultoria recorrente · Saneamento de dados · Automação",
    "exp.atuacao.titulo": "Atuação",
    "exp.atuacao.b1": "Migração e mapeamento de bases de dados de clientes e concorrentes, com ETL, transformação, validação e garantia da integridade das informações.",
    "exp.atuacao.b2": "Scripts em Microsoft SQL Server para executar e automatizar processos de migração, adaptados às necessidades de cada projeto.",
    "exp.atuacao.b3": "Azure Data Factory: acompanhamento e execução de pipelines, análise de logs e diagnóstico de falhas.",
    "exp.atuacao.b4": "Análise e tratamento de dados para encontrar inconsistências, validar resultados e garantir a qualidade das entregas.",
    "exp.atuacao.b5": "Condução independente de atividades e projetos, da análise à entrega: avalio alternativas, defino a abordagem e proponho melhorias que reduzem retrabalho.",
    "exp.resolvoTitulo": "Problemas que resolvo",
    "exp.resolvo1t": "Migrar dados entre sistemas",
    "exp.resolvo1d": "De Astrea, Projuris, CPJ e CP-PRO para o Legal One, com pipeline por módulos e validação até a carga final.",
    "exp.resolvo2t": "Corrigir produção com segurança",
    "exp.resolvo2d": "Cada ajuste com script declarativo, de execução e de rollback, aprovado formalmente antes de rodar.",
    "exp.resolvo3t": "Automatizar o que é manual",
    "exp.resolvo3d": "Python, Selenium e VBA para eliminar gargalos repetitivos e distribuir a solução para o time.",
    "exp.projetos.titulo": "Projetos",
    "destaque.eyebrow": "Projeto em destaque · Ideia e autoria própria",
    "destaque.titulo": "Projeto em destaque: Unificador de Contatos",
    "destaque.p1": "Ferramenta Python + Selenium com interface gráfica própria, distribuída como executável para consultores em campo. Identifica contatos duplicados por CPF/CNPJ e aciona a unificação nativa do Legal One.",
    "destaque.p2": "Elimina a necessidade de extrair a base, tratar em homologação e aguardar SLA: o consultor resolve direto em produção, com autonomia.",
    "destaque.nota": "Ideia e autoria próprias. O código-fonte não é público; a arquitetura está descrita na página do projeto.",
    "destaque.ver": "Ver projeto completo",
    "metricas.titulo": "Métricas e impacto",
    "metricas.nota": "Métricas classificadas como estimativa refletem o melhor conhecimento disponível, ainda sem confirmação numérica definitiva.",
    "footer.texto": "Documentação técnica completa disponível no GitHub.",
    "proj.eyebrow.migracao": "Projeto · Migração",
    "proj.eyebrow.consultoria": "Projeto · Consultoria",
    "proj.eyebrow.saneamento": "Projeto · Saneamento de Dados",
    "proj.eyebrow.automacao": "Projeto · Automação",
    "proj.voltar": "Projetos na Thomson Reuters Brasil",
    "proj.voltarExperiencias": "Voltar para Experiências",
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
    "hero.stack4": "Applied AI",
    "hero.personal": "“We learn by doing, there is no other way.” <cite>John Holt</cite>",
    "hero.ctaExperiencias": "See experience",
    "hero.tag1": "SQL Server · T-SQL",
    "hero.tag2": "Azure Data Factory",
    "hero.tag3": "Python · Selenium · VBA",
    "hero.tag4": "ETL · Data pipelines",
    "hero.fact1": "clients served",
    "hero.fact2": "database-to-database migrations",
    "hero.fact3": "commits in ~5 months",
    "hero.fact4": "Python scripts of my own",
    "sobre.titulo": "About me",
    "sobre.aside": "Profile · Stack · How I work",
    "sobre.p1": "I like understanding how things work, especially when there is a problem to solve. And if along the way I find a way to do something <em class=\"hl\">better, simpler, or more automated</em>, I rarely let it pass.",
    "sobre.p2": "Today I work at Thomson Reuters on <em class=\"hl\">data, automation, and database migration solutions</em>, using <em class=\"hl\">SQL, ETL, and Azure Data Factory</em>. Day to day, that means investigating problems, understanding what is happening with the data, working out the best approach, and putting the solution into practice.",
    "sobre.p3": "I take responsibility for what I commit to, and I like having the autonomy to carry a task from the problem all the way to delivery. That is also how I started turning some repetitive tasks into <em class=\"hl\">automations and solutions that make work easier</em>, because, to me, technology makes the most sense when it solves a real problem.",
    "sobre.p4": "My path so far has not been linear either: I have a degree in <em class=\"hl\">Mechanical Engineering (Production Processes)</em> and I am finishing <em class=\"hl\">Systems Analysis and Development</em>, both at Fatec. Today I am building my path in technology and I want to keep learning, experimenting, and doing better work, especially in automation, data, development, and AI.",
    "sobre.comoTitulo": "How I work",
    "sobre.como1t": "I understand before I solve",
    "sobre.como1d": "I like to truly understand the problem before going out to look for a solution. That helps me choose an approach that makes sense, not just the fastest one.",
    "sobre.como2t": "If it is repetitive, I think about automating it",
    "sobre.como2d": "When I notice someone spending too much time doing the same thing, I start thinking about how to simplify it. That is how several of my automations came about.",
    "sobre.como3t": "I don't like fixing only the symptom",
    "sobre.como3d": "When something goes wrong, my first question is: why? I prefer to investigate the cause and understand what happened before simply applying a fix.",
    "sobre.como4t": "Data has to make sense",
    "sobre.como4d": "It is not enough for the process to finish without errors. I like to check the data, validate the result, and understand whether what was produced is actually correct.",
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
    "trajetoria.aside": "2026 — 2017",
    "trajetoria.intro": "Key education and career milestones, from most recent to oldest.",
    "trajetoria.tipo.edu": "Education",
    "trajetoria.tipo.work": "Career",
    "trajetoria.destaques": "Highlights",
    "trajetoria.verPublicacao": "View LinkedIn post",
    "competencias.titulo": "Skills",
    "competencias.aside": "Technical · Behavioral",
    "competencias.intro": "Skills I use day to day or have already applied in the projects presented in this portfolio. Each one shows where it was applied.",
    "skills.daily": "Daily use",
    "skills.apps": "Applied in",
    "competencias.tabTecnicas": "Technical skills",
    "competencias.tabSoft": "Soft skills",
    "exp.voltar": "Back to Experience",
    "exp.legalOne.eyebrow": "Experience · Database Analyst",
    "exp.legalOne.title": "Thomson Reuters Brasil",
    "exp.legalOne.subtitle": "Working in the Legal One segment · Competing-platform migration · Recurring consulting · Data sanitization · Automation",
    "exp.atuacao.titulo": "What I do",
    "exp.atuacao.b1": "Migration and mapping of client and competitor databases, with ETL, transformation, validation, and data-integrity assurance.",
    "exp.atuacao.b2": "Microsoft SQL Server scripts to run and automate migration processes, adapted to each project's needs.",
    "exp.atuacao.b3": "Azure Data Factory: running and monitoring pipelines, log analysis, and failure diagnosis.",
    "exp.atuacao.b4": "Data analysis and treatment to find inconsistencies, validate results, and ensure the quality of deliverables.",
    "exp.atuacao.b5": "Independent leadership of activities and projects, from analysis to delivery: I weigh alternatives, define the approach, and propose improvements that reduce rework.",
    "exp.resolvoTitulo": "Problems I solve",
    "exp.resolvo1t": "Migrate data between systems",
    "exp.resolvo1d": "From Astrea, Projuris, CPJ, and CP-PRO into Legal One, with a per-module pipeline and validation through final load.",
    "exp.resolvo2t": "Fix production safely",
    "exp.resolvo2d": "Every change ships with declarative, execution, and rollback scripts, formally approved before it runs.",
    "exp.resolvo3t": "Automate what is manual",
    "exp.resolvo3d": "Python, Selenium, and VBA to remove repetitive bottlenecks and hand the solution to the whole team.",
    "exp.projetos.titulo": "Projects",
    "destaque.eyebrow": "Featured project · Original idea and solution",
    "destaque.titulo": "Featured project: Contact Deduplication Tool",
    "destaque.p1": "Python + Selenium tool with its own graphical interface, distributed as an executable to field consultants. Identifies duplicate contacts by tax ID and triggers Legal One's native merge.",
    "destaque.p2": "Removes the need to extract the database, treat it in staging, and wait for an SLA: the consultant resolves it directly in production, with autonomy.",
    "destaque.nota": "Original idea and authorship. The source code is not public; the architecture is described on the project page.",
    "destaque.ver": "View full project",
    "metricas.titulo": "Metrics and impact",
    "metricas.nota": "Metrics classified as estimates reflect the best information available, without definitive numeric confirmation yet.",
    "footer.texto": "Full technical documentation available on GitHub.",
    "proj.eyebrow.migracao": "Project · Migration",
    "proj.eyebrow.consultoria": "Project · Consulting",
    "proj.eyebrow.saneamento": "Project · Data Sanitization",
    "proj.eyebrow.automacao": "Project · Automation",
    "proj.voltar": "Projects at Thomson Reuters Brasil",
    "proj.voltarExperiencias": "Back to Experience",
    "toc.titulo": "On this page",
    "proj.verDetalhes": "View details"
  }
};

// Stack principal (home, seção Sobre). Tecnologias já documentadas no README e nos projetos.
const stack = [
  { pt: "Dados", en: "Data", items: ["SQL Server (T-SQL)", "Azure Data Factory"] },
  { pt: "Automação", en: "Automation", items: ["Python", "Selenium", "Tkinter", "VBA", "PowerShell"] },
  { pt: "Ferramentas", en: "Tools", items: ["Git", "GitHub", "Excel"] },
  { pt: "Explorando", en: "Exploring", items: ["IA aplicada", "Automação com IA"], itemsEn: ["Applied AI", "AI automation"] }
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
  { pt: "SQL Server (T-SQL)", en: "SQL Server (T-SQL)", descPt: "Extração, transformação, deduplicação e correção de dados, com rollback preparado antes de qualquer alteração em produção.", descEn: "Data extraction, transformation, deduplication, and correction, with rollback prepared before any production change.", daily: true, apps: ["migracao", "consultoria", "sqlvba"] },
  { pt: "ETL e migração de dados", en: "ETL & data migration", descPt: "Extração, transformação, validação e carga de dados entre plataformas, preservando a integridade das informações.", descEn: "Extraction, transformation, validation, and loading of data between platforms, preserving data integrity.", daily: true, apps: ["migracao", "thomson"] },
  { pt: "Azure Data Factory", en: "Azure Data Factory", descPt: "Execução e acompanhamento de pipelines, com análise de logs e diagnóstico de falhas.", descEn: "Running and monitoring pipelines, with log analysis and failure diagnosis.", daily: true, apps: ["thomson"] },
  { pt: "Qualidade e saneamento de dados", en: "Data quality & sanitization", descPt: "Detecção de inconsistências e duplicidades, comparação de volumes entre bases e validação de resultados.", descEn: "Detecting inconsistencies and duplicates, comparing volumes between databases, and validating results.", daily: true, apps: ["unificador", "sqlvba", "python"] },
  { pt: "Mapeamento e modelagem de dados", en: "Data mapping & modeling", descPt: "Equivalência entre modelos de dados de plataformas distintas (Astrea, Projuris, CPJ e CP-PRO para o Legal One).", descEn: "Equivalence between the data models of different platforms (Astrea, Projuris, CPJ, and CP-PRO into Legal One).", daily: true, apps: ["migracao"] },
  { pt: "Python", en: "Python", descPt: "Integração de dados (Excel, SQL Server, MySQL), automação de tarefas e interfaces desktop com Tkinter.", descEn: "Data integration (Excel, SQL Server, MySQL), task automation, and desktop interfaces with Tkinter.", daily: false, apps: ["python", "unificador"] },
  { pt: "Automação com Selenium", en: "Selenium automation", descPt: "Automação de navegador para fluxos repetitivos, com seleção direta dos elementos da tela.", descEn: "Browser automation for repetitive workflows, selecting on-screen elements directly.", daily: false, apps: ["unificador"] },
  { pt: "VBA e automação de Excel", en: "VBA & Excel automation", descPt: "Macros que validam a estrutura das planilhas de migração antes do envio para carga.", descEn: "Macros that validate the structure of migration spreadsheets before they are submitted for loading.", daily: false, apps: ["sqlvba"] },
  { pt: "Git e GitHub", en: "Git & GitHub", descPt: "Versionamento colaborativo de scripts em repositório de equipe: 92 commits em cerca de 5 meses.", descEn: "Collaborative version control of scripts in a team repository: 92 commits over about 5 months.", daily: true, apps: ["migracao"] },
  { pt: "Consultoria e suporte em produção", en: "Production consulting & support", descPt: "Ajustes em produção com scripts declarativo, de execução e de rollback, sempre após aprovação formal.", descEn: "Production changes with declarative, execution, and rollback scripts, always after formal approval.", daily: false, apps: ["consultoria"] }
];

const skillsSoft = [
  { pt: "Autonomia", en: "Autonomy", descPt: "Condução de demandas de ponta a ponta, da análise à execução, inclusive com ferramentas criadas por iniciativa própria.", descEn: "Driving demands end to end, from analysis to execution, including tools built on my own initiative.", daily: true, apps: ["unificador", "thomson"] },
  { pt: "Resolução de problemas", en: "Problem solving", descPt: "Investigação de falhas e escolha da abordagem mais efetiva durante a execução dos projetos.", descEn: "Investigating failures and choosing the most effective approach during project execution.", daily: true, apps: ["unificador", "thomson"] },
  { pt: "Entendimento de processos de negócio", en: "Business-process understanding", descPt: "Tradução de regras de negócio jurídicas, como tipo de ação e centro de custo, em lógica de dados.", descEn: "Translating legal business rules, such as case type and cost center, into data logic.", daily: false, apps: ["consultoria"] },
  { pt: "Análise de requisitos", en: "Requirements analysis", descPt: "Interpretação de demandas e definição do escopo técnico antes de construir a solução.", descEn: "Interpreting demands and defining the technical scope before building the solution.", daily: false, apps: ["consultoria", "unificador"] },
  { pt: "Colaboração em equipe", en: "Team collaboration", descPt: "Trabalho em repositório e processos compartilhados com um time de 18 pessoas, seguindo os padrões do grupo.", descEn: "Working in a shared repository and processes with a team of 18, following the group's standards.", daily: false, apps: ["migracao"] },
  { pt: "Produtividade e melhoria contínua", en: "Productivity & continuous improvement", descPt: "Identificação de tarefas manuais repetitivas e criação de scripts e ferramentas que as reduzem.", descEn: "Identifying repetitive manual tasks and building scripts and tools that reduce them.", daily: false, apps: ["python", "sqlvba", "unificador"] },
  { pt: "Comunicação técnica", en: "Technical communication", descPt: "Aprovação formal por e-mail antes de cada execução em produção e vídeo de treinamento para outros consultores.", descEn: "Formal email approval before every production execution, and a training video for other consultants.", daily: false, apps: ["consultoria", "unificador"] },
  { pt: "Responsabilidade com dados sensíveis", en: "Responsibility with sensitive data", descPt: "Rollback e aprovação formal em cada alteração de produção, protegendo a integridade e a confidencialidade dos dados.", descEn: "Rollback and formal approval on every production change, protecting data integrity and confidentiality.", daily: false, apps: ["consultoria"] }
];

// Ordem: do mais recente ao mais antigo.
// type: "edu" (formação) | "work" (carreira); future: marco ainda por concluir.
// details (opcional): destaques exibidos ao passar o mouse/focar no marco.
//   Cada item: { pt: [título, descrição], en: [título, descrição], href? }.
const timeline = [
  {
    date: "Dez 2026", dateEn: "Dec 2026", type: "edu", future: true,
    pt: "Formação em Análise e Desenvolvimento de Sistemas (prevista)", en: "Graduation — Systems Analysis and Development (expected)",
    details: [
      { pt: ["TCC sobre IA no desenvolvimento de software", "“Produtividade no desenvolvimento de software assistido por IA: alcance e limites das evidências sobre tempo, compreensão, qualidade e manutenção”."], en: ["Thesis on AI in software development", "“Productivity in AI-assisted software development: scope and limits of the evidence on time, comprehension, quality, and maintenance”."] },
      { pt: ["Batalha Naval: gestora de projeto líder", "Projeto de desenvolvimento de jogo no 4º semestre, liderando um grupo de 13 pessoas."], en: ["Battleship: lead project manager", "Game development project in the 4th semester, leading a team of 13 people."], href: null /* link da publicação no LinkedIn: preencher quando disponível */ }
    ]
  },
  {
    date: "Mar 2025", type: "work",
    pt: "Início do estágio na Thomson Reuters Brasil", en: "Started internship at Thomson Reuters Brasil",
    details: [
      { pt: ["Primeira migração totalmente independente", "Conduzi um processo de migração de ponta a ponta, sem apoio direto."], en: ["First fully independent migration", "I carried a migration process end to end, without direct support."] },
      { pt: ["Unificador de Contatos", "Ferramenta que idealizei e desenvolvi em Python, hoje usada por outros consultores em campo."], en: ["Contact Deduplication Tool", "A Python tool I conceived and built, now used by other consultants in the field."] },
      { pt: ["Produção com rede de segurança", "Consultoria recorrente em 23+ clientes, sempre com script de rollback e aprovação formal."], en: ["Production with a safety net", "Recurring consulting for 23+ clients, always with a rollback script and formal approval."] },
      { pt: ["92 commits em ~5 meses", "Contribuição ao repositório de migração mantido por um time de 18 pessoas."], en: ["92 commits in ~5 months", "Contribution to the migration repository maintained by a team of 18."] }
    ]
  },
  { date: "Jan 2023", type: "edu", pt: "Ingresso na FATEC — Análise e Desenvolvimento de Sistemas", en: "Started FATEC — Systems Analysis and Development" },
  {
    date: "2022 – 2023", type: "work",
    pt: "Consultora e Processista na Beyond HR", en: "Consultant and Process Specialist at Beyond HR",
    details: [
      { pt: ["Pesquisa de mercado e mapeamento de talentos", "Atuação com pesquisa de mercado, mapeamento de talentos e ferramentas de recrutamento."], en: ["Market research and talent mapping", "Worked with market research, talent mapping, and recruitment tools."] },
      { pt: ["Reestruturação do processo seletivo", "Redesenhei todo o processo de seleção e recrutamento, da definição de perfis à condução de entrevistas."], en: ["Selection process redesign", "Redesigned the entire selection and recruitment process, from defining profiles to conducting interviews."] },
      { pt: ["Novas metodologias e ferramentas", "Implementei metodologias e ferramentas que otimizaram a triagem de currículos e a identificação de talentos, minimizando erros e retrabalho."], en: ["New methodologies and tools", "Implemented methodologies and tools that optimized resume screening and talent identification, minimizing errors and rework."] }
    ]
  },
  {
    date: "Jun 2021", type: "edu",
    pt: "Formação em Mecânica — Processos de Produção", en: "Graduated — Mechanical Engineering, Production Processes",
    details: [
      { pt: ["Protótipo de macaco hidráulico", "Trabalho de encerramento: do projeto de desenho técnico à usinagem das peças, em grupo de 7 pessoas. O protótipo foi testado levantando 2 toneladas."], en: ["Hydraulic jack prototype", "Final course project: from the technical-drawing design to machining the parts, by a team of 7. The prototype was tested lifting 2 tons."] }
    ]
  },
  { date: "Jan 2017", type: "edu", pt: "Ingresso na FATEC — Mecânica, Processos de Produção", en: "Started FATEC — Mechanical Engineering, Production Processes" }
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
  { value: "30+", pt: "Clientes atendidos, em todos os tipos de serviço", en: "Clients served, across all service types", tag: "confirmed" },
  { value: "92", pt: "Commits pessoais em repositório de migração colaborativo (~5 meses)", en: "Personal commits in a collaborative migration repository (~5 months)", tag: "confirmed" },
  { value: "18", pt: "Pessoas no time que mantém o pipeline de migração", en: "People maintaining the migration pipeline", tag: "confirmed" },
  { value: "23+", pt: "Clientes em consultoria recorrente, com plano de rollback documentado", en: "Clients in recurring consulting, with a documented rollback plan", tag: "confirmed" },
  { value: "25+", pt: "Migrações de plataformas concorrentes via parceiros de revenda (parte dos 30+)", en: "Migrations from competing platforms via reseller partners (part of the 30+)", tag: "confirmed" },
  { value: "40+", pt: "Scripts SQL de extração, organizados por módulo", en: "SQL extraction scripts, organized by module", tag: "confirmed" },
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
      <div class="stack-items">${((lang === "en" && group.itemsEn) || group.items).map(item => `<span class="chip">${item}</span>`).join("")}</div>
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
  const t18 = i18n[lang];
  list.querySelectorAll(".timeline-item").forEach(el => el.remove());
  timeline.forEach(t => {
    const item = document.createElement("div");
    item.className = "timeline-item" + (t.future ? " timeline-item--future" : "");
    const typeLabel = t18[`trajetoria.tipo.${t.type}`] || "";
    const hasPop = Array.isArray(t.details) && t.details.length > 0;
    const pop = hasPop
      ? `<div class="timeline-pop" role="tooltip"><p class="timeline-pop-title">${t18["trajetoria.destaques"]}</p><ul>${t.details.map(d =>
          `<li><strong>${d[lang][0]}</strong><span>${d[lang][1]}</span>${d.href ? `<a href="${d.href}" target="_blank" rel="noopener">${t18["trajetoria.verPublicacao"]} ↗</a>` : ""}</li>`).join("")}</ul></div>`
      : "";
    const hint = hasPop ? `<span class="timeline-hint">${t18["trajetoria.destaques"]}${t.details.length > 1 ? " · " + t.details.length : ""}</span>` : "";
    item.innerHTML = `
      <span class="timeline-node" aria-hidden="true"></span>
      <div class="timeline-card${hasPop ? " has-pop" : ""}"${hasPop ? ' tabindex="0"' : ""}>
        <div class="timeline-meta">
          <span class="timeline-date">${(lang === "en" && t.dateEn) || t.date}</span>
          <span class="timeline-type timeline-type--${t.type}">${typeLabel}</span>
        </div>
        <p class="timeline-title">${t[lang]}</p>
        ${hint}${pop}
      </div>`;
    const card = item.querySelector(".timeline-card.has-pop");
    if (card) {
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        const open = !item.classList.contains("is-open");
        list.querySelectorAll(".timeline-item.is-open").forEach(el => el.classList.remove("is-open"));
        item.classList.toggle("is-open", open);
      });
    }
    list.appendChild(item);
  });
  if (!list.dataset.outsideClose) {
    list.dataset.outsideClose = "1";
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".timeline-card.has-pop")) list.querySelectorAll(".timeline-item.is-open").forEach(el => el.classList.remove("is-open"));
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") list.querySelectorAll(".timeline-item.is-open").forEach(el => el.classList.remove("is-open"));
    });
  }
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
