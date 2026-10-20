# Matriz de Competências

## Como funciona a escala

Cada competência avaliada recebe uma nota de 1 a 5, baseada exclusivamente em evidência encontrada em arquivos reais (código, scripts, planilhas, histórico de Git) — nunca em autoavaliação genérica. Nenhuma nota foi atribuída sem evidência correspondente; onde a evidência é insuficiente, isso é dito explicitamente como **"Evidência insuficiente para avaliação conclusiva"**.

| Nota | Nível | O que significa na prática |
|---|---|---|
| **1** | Conhecimento inicial | Contato pontual ou teórico com o tema; sem evidência de aplicação prática recorrente. |
| **2** | Conhecimento básico aplicado | Já aplicou a competência em situações simples ou pontuais, com supervisão ou escopo limitado. |
| **3** | Conhecimento intermediário aplicado | Aplica a competência de forma independente em cenários reais, com resultados consistentes, mas ainda dentro de um escopo definido. |
| **4** | Conhecimento avançado aplicado | Domina a competência em cenários complexos e variados, com autonomia, qualidade e capacidade de adaptação a diferentes contextos. |
| **5** | Referência / autonomia elevada comprovada | Nível de maturidade em que a pessoa não apenas aplica a competência com excelência, mas também a leva adiante de forma proativa (cria processo, ensina outros, sustenta resultado ao longo do tempo). |

A matriz está dividida em duas partes: **Competências Técnicas** (ferramentas, linguagens e práticas de engenharia de dados) e **Soft Skills** (comportamentos e capacidades transversais observáveis nos projetos).

---

## Competências Técnicas

### SQL e SQL Server

- **Nota: 4**
- **Evidências:** pipeline de extração com 40+ scripts organizados por módulo (Contatos/Processos/Serviços); 14 scripts de pré/pós-tratamento; padrão declarativo/execução/rollback aplicado em 23+ casos de clientes; scripts de deduplicação (`elimina_duplicidade_contatos.sql`, `tira_duplicidade_cpf.sql`); pipeline estruturado em etapas numeradas (projeto Scarpato).
- **Projetos relacionados:** Migração de Banco a Banco, Consultoria Recorrente, Automações SQL/VBA.
- **Justificativa:** volume, consistência e sofisticação dos scripts (tratamento de integridade referencial, rollback, diagnóstico pré-execução) indicam domínio avançado aplicado a cenários reais de produção. Não atribuído nível 5 por ausência de evidência de modelagem de banco do zero (criação de schema) ou de otimização de performance documentada.
- **Lacunas:** não há evidência de trabalho com stored procedures, triggers ou otimização de índices/planos de execução.
- **Sugestão de evolução:** documentar (mesmo que resumidamente) um caso de otimização de query lenta ou de diagnóstico de performance, se houver.

### Modelagem, consulta e manipulação de dados

- **Nota: 4**
- **Evidências:** mapeamento de equivalência entre modelos de dados heterogêneos (Astrea/Projuris/CPJ/CP-PRO → Legal One); documentação de banco em `BANCO_CLAUDE` (tabelas, triggers, procedures, vínculos do Legal One).
- **Projetos relacionados:** Migração de Banco a Banco.
- **Justificativa:** mapear e traduzir modelos de dados distintos exige compreensão sólida de modelagem relacional, não apenas escrita de consultas.
- **Lacunas:** não há evidência de diagramas formais (ex.: DER) produzidos pela autora.
- **Sugestão de evolução:** incluir um diagrama simplificado (sem dados sensíveis) do fluxo de dados entre os módulos Contatos/Processos/Serviços no portfólio.

### Migração e transformação de dados

- **Nota: 5**
- **Evidências:** este é o núcleo mais comprovado do trabalho — 92 commits em repositório de pipeline de migração ao longo de ~5 meses; 23+ casos de clientes migrados de múltiplas plataformas; pipeline de 4 fases documentado (pré-extração, extração por módulo, pré-migração, pós-migração).
- **Projetos relacionados:** Migração de Banco a Banco.
- **Justificativa:** volume, recorrência, diversidade de plataformas de origem e maturidade do processo (versionado, documentado, com tratamento de integridade) demonstram autonomia elevada e nível de referência nesta competência específica.
- **Lacunas:** nenhuma relevante identificada.
- **Sugestão de evolução:** quantificar o volume total de registros migrados ao longo da carreira, se possível reconstruir a partir de relatórios antigos.

### Qualidade, validação e saneamento de dados

- **Nota: 4**
- **Evidências:** Unificador de Contatos (ferramenta de saneamento autoral); scripts de deduplicação por CPF; validador de planilha em VBA; scripts de comparação de volumetria e extração de erros/avisos.
- **Projetos relacionados:** Unificador de Contatos, Automações SQL/VBA, Automações Python.
- **Justificativa:** construção de uma ferramenta própria de saneamento de dados em produção (não apenas scripts pontuais) é evidência forte de domínio aplicado desta competência.
- **Lacunas:** deduplicação por similaridade de nome (além de CPF/CNPJ exato) ainda não implementada.
- **Sugestão de evolução:** medir e registrar a taxa de duplicidade encontrada/corrigida por execução da ferramenta, para ter uma métrica de impacto concreta.

### Python

- **Nota: 4**
- **Evidências:** Unificador de Contatos (Selenium + Tkinter + PyInstaller); 8 scripts de produtividade (importação genérica, extração MySQL, comparação de volumetria, reset de acesso); evolução documentada de protótipo `pyautogui` para solução robusta em Selenium.
- **Projetos relacionados:** Unificador de Contatos, Automações Python.
- **Justificativa:** construção de uma aplicação completa (interface gráfica + automação + empacotamento em executável) distribuída para terceiros é evidência de nível avançado aplicado. Não atribuído nível 5 por não haver evidência de testes automatizados, arquitetura modular madura ou uso de frameworks mais robustos (ex.: PyQt, FastAPI, pytest).
- **Lacunas:** ausência de testes automatizados; presença de credenciais hardcoded em alguns scripts (ponto de melhoria de segurança, não de conhecimento).
- **Sugestão de evolução:** adicionar testes unitários básicos e migrar credenciais para variáveis de ambiente — isso também eleva a nota desta competência no futuro.

### Automação com Selenium

- **Nota: 4**
- **Evidências:** Unificador de Contatos usa Selenium para localizar elementos reais da interface do Legal One e acionar a função nativa de unificação de contatos, substituindo uma versão anterior frágil baseada em coordenadas de tela.
- **Projetos relacionados:** Unificador de Contatos.
- **Justificativa:** uso correto do princípio central do Selenium (seleção de elementos robusta, não posição de tela), aplicado a um fluxo real de produção, com login seguro (manual, sem credenciais no código).
- **Lacunas:** não há evidência de uso de esperas explícitas avançadas, testes cross-browser ou execução headless documentada.
- **Sugestão de evolução:** documentar decisões técnicas específicas de Selenium (ex.: estratégias de espera, tratamento de elementos dinâmicos) para fortalecer a evidência de profundidade técnica.

### VBA e automação de Excel

- **Nota: 3**
- **Evidências:** 7 macros de validação estrutural de planilha (`CONFERE_CONTATOS.VBA` e correlatos), cobrindo múltiplas abas do padrão de migração.
- **Projetos relacionados:** Automações SQL/VBA.
- **Justificativa:** as macros resolvem um problema real e específico (validação estrutural) de forma eficaz, mas o escopo encontrado é mais restrito que o de Python/SQL — não há evidência de VBA para manipulação de dados mais complexa, geração de relatórios dinâmicos ou integração com outras aplicações.
- **Lacunas:** escopo de uso limitado ao que foi encontrado (validação); não há evidência de uso mais amplo de VBA.
- **Sugestão de evolução:** se houver mais macros desenvolvidas ao longo da carreira que não foram encontradas nesta varredura, documentá-las aumentaria a evidência e possivelmente a nota.

### Documentação técnica

- **Nota: 2**
- **Evidências:** a pasta `Documentação de Scripts` estava vazia; não havia READMEs nos projetos pessoais analisados (diferente do repositório de equipe `l1dmbr_x-one_extraction`, que já tinha estrutura própria de documentação antes desta autora contribuir).
- **Projetos relacionados:** todos, de forma indireta (ausência de documentação prévia).
- **Justificativa:** evidência insuficiente de documentação técnica própria produzida antes deste projeto de portfólio — a prática existe de forma implícita (nomes de arquivo organizados, padrão de 3 arquivos na consultoria recorrente), mas não há documentação textual explícita.
- **Lacunas:** esta é a maior lacuna identificada em toda a análise.
- **Sugestão de evolução:** a criação deste próprio portfólio já é o primeiro passo. Recomenda-se manter o hábito de escrever um pequeno `README.md` para cada novo script ou ferramenta daqui para frente.

### Manutenção e suporte de scripts

- **Nota: 4**
- **Evidências:** consultoria recorrente para 23+ clientes já migrados, cada caso exigindo diagnóstico, ajuste e plano de reversão; evolução de versões da ferramenta Unificador de Contatos (pasta `ANTIGO` vs. `NOVO_UNIFICADOR`).
- **Projetos relacionados:** Consultoria Recorrente, Unificador de Contatos.
- **Justificativa:** manutenção recorrente e de longo prazo de soluções em produção, com histórico de versionamento e evolução.
- **Lacunas:** nenhuma relevante identificada.
- **Sugestão de evolução:** nenhuma crítica relevante.

### Organização e reutilização de código

- **Nota: 3**
- **Evidências:** importador genérico de Excel (`importa_excel.py`) parametrizável, reutilizável entre diferentes planilhas; padrão consistente de 3 arquivos (declarativo/execução/rollback) repetido em 23+ casos.
- **Projetos relacionados:** Automações Python, Consultoria Recorrente.
- **Justificativa:** há exemplos concretos de generalização e reuso, mas a maioria dos scripts analisados é específica por caso/cliente, sem uma biblioteca central compartilhada.
- **Lacunas:** ausência de um repositório único organizando as automações pessoais (estão espalhadas em pastas de cliente).
- **Sugestão de evolução:** consolidar os scripts de produtividade em um único repositório pessoal com documentação mínima — isso também facilita manutenção futura.

---

## Soft Skills

### Análise de requisitos

- **Nota: 3**
- **Evidências:** interpretação de pedidos de ajuste de clientes e tradução em scripts SQL (consultoria recorrente); identificação autônoma do problema de duplicidade de contatos e desenho da solução (Unificador de Contatos).
- **Projetos relacionados:** Consultoria Recorrente, Unificador de Contatos.
- **Justificativa:** há evidência clara de tradução de necessidade de negócio em solução técnica, mas não há documentação formal de requisitos (ex.: especificações escritas, user stories) nos arquivos analisados.
- **Lacunas:** ausência de artefatos formais de levantamento de requisitos.
- **Sugestão de evolução:** ao criar uma nova ferramenta, registrar brevemente o problema e os requisitos antes da implementação — isso também facilita a documentação futura do portfólio.

### Resolução de problemas

- **Nota: 4**
- **Evidências:** evolução de abordagem técnica (pyautogui → Selenium) diante de limitações da primeira solução; construção de pipeline de rollback para mitigar risco de alterações em produção; identificação e solução de gargalo operacional (duplicidade de contatos) sem demanda formal de terceiros.
- **Projetos relacionados:** Unificador de Contatos, Consultoria Recorrente.
- **Justificativa:** múltiplos exemplos concretos de identificação de problema, avaliação de causa raiz e implementação de solução eficaz, incluindo reconhecimento e correção de uma abordagem técnica inicial inadequada.
- **Lacunas:** nenhuma relevante identificada.
- **Sugestão de evolução:** nenhuma crítica; manter o hábito de documentar o "antes e depois" de cada solução, como já ocorre no caso do Unificador de Contatos.

### Entendimento de processos de negócio

- **Nota: 4**
- **Evidências:** interpretação correta de regras de negócio jurídicas (tipo de ação, centro de custo, status processual) para tradução em SQL; entendimento do ciclo tradicional de extração/homologação/SLA que motivou a criação do Unificador de Contatos.
- **Projetos relacionados:** Consultoria Recorrente, Unificador de Contatos.
- **Justificativa:** a capacidade de identificar o gargalo de processo (não apenas o problema técnico) e desenhar uma solução que o elimina é evidência forte desta competência.
- **Lacunas:** nenhuma relevante identificada.
- **Sugestão de evolução:** nenhuma crítica relevante.

### Autonomia

- **Nota: 5**
- **Evidências:** criação não solicitada do Unificador de Contatos, da ideia à distribuição e treinamento de outros usuários; condução ponta a ponta de casos de consultoria recorrente, do diagnóstico à entrega.
- **Projetos relacionados:** Unificador de Contatos, Consultoria Recorrente.
- **Justificativa:** a construção de uma solução completa sem demanda formal de terceiros, incluindo disseminação para outros usuários, é a evidência mais forte de autonomia encontrada na análise.
- **Lacunas:** nenhuma relevante identificada.
- **Sugestão de evolução:** nenhuma crítica relevante.

### Comunicação técnica

- **Nota: 3**
- **Evidências:** fluxo de aprovação formal por e-mail antes de cada execução de consultoria recorrente; produção de vídeo de treinamento para o Unificador de Contatos.
- **Projetos relacionados:** Consultoria Recorrente, Unificador de Contatos.
- **Justificativa:** há evidência de comunicação técnica eficaz com clientes (aprovação) e com colegas (treinamento), mas o conteúdo dessas comunicações não foi analisado (por restrição de confidencialidade), limitando a profundidade da avaliação.
- **Lacunas:** conteúdo de e-mails e do vídeo de treinamento não foi avaliado.
- **Sugestão de evolução:** nenhuma ação necessária — a limitação é de escopo de análise, não de evidência de competência.

### Colaboração com consultores e times multidisciplinares

- **Nota: 4**
- **Evidências:** 92 commits próprios em um repositório de equipe com 18 colaboradores ativos, mantendo os padrões já estabelecidos pelo grupo; ferramenta de saneamento de contatos distribuída e usada por outros consultores.
- **Projetos relacionados:** Migração de Banco a Banco (repositório Git), Unificador de Contatos.
- **Justificativa:** contribuição sustentada e consistente em um projeto de equipe, aliado à construção de uma ferramenta que beneficia diretamente outros profissionais, demonstra colaboração efetiva.
- **Lacunas:** nenhuma relevante identificada.
- **Sugestão de evolução:** nenhuma crítica relevante.

### Foco em produtividade e melhoria contínua

- **Nota: 4**
- **Evidências:** 8 scripts Python e 7 macros VBA criados especificamente para eliminar tarefas manuais repetitivas; evolução de uma automação frágil para uma robusta.
- **Projetos relacionados:** Automações Python, Automações SQL/VBA, Unificador de Contatos.
- **Justificativa:** volume e consistência de ferramentas paralelas criadas para ganho de produtividade, além da iteração visível sobre soluções já existentes.
- **Lacunas:** ausência de métricas quantitativas de tempo economizado.
- **Sugestão de evolução:** cronometrar e registrar, mesmo que de forma simples, o tempo de execução manual vs. automatizado em pelo menos um caso, para ter uma métrica concreta de ganho de produtividade.

### Gestão de riscos em ambientes com dados sensíveis

- **Nota: 3**
- **Evidências:** padrão de rollback em toda alteração de produção (ponto forte); decisão de não embutir credenciais no Unificador de Contatos (ponto forte); **porém**, identificação de credenciais de banco de dados em texto puro em pelo menos 3 scripts Python de produtividade (ponto de risco real, não teórico).
- **Projetos relacionados:** Consultoria Recorrente, Unificador de Contatos, Automações Python.
- **Justificativa:** há evidência tanto de boas práticas conscientes (rollback, login manual) quanto de uma prática de risco real e documentada (credenciais em texto puro). A nota reflete esse contraste — não é possível dar nota alta nesta competência havendo uma vulnerabilidade real identificada nos próprios arquivos.
- **Lacunas:** gestão de credenciais precisa de melhoria imediata, independente do portfólio.
- **Sugestão de evolução:** rotacionar as credenciais expostas e migrar para variáveis de ambiente ou cofre de segredos. Esta é a recomendação de maior prioridade entre todas as sugestões desta matriz.
