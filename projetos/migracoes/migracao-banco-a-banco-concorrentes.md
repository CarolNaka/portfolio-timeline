# Migração de Banco a Banco entre Plataformas Jurídicas Concorrentes

## Visão geral

Atuação como consultora técnica em projetos de migração de dados entre sistemas de gestão jurídica concorrentes (plataformas de origem) e o Legal One (plataforma de destino), cobrindo desde a extração direta em banco de dados até a carga final, com pipeline estruturado, documentado e versionado em repositório Git compartilhado com o time de migração.

## Problema resolvido

Escritórios de advocacia que trocam de sistema de gestão precisam levar todo o seu histórico — contatos, processos, serviços, andamentos, compromissos, tarefas, posições financeiras — para a nova plataforma, sem perda de dados e sem quebrar relacionamentos entre as entidades (ex.: um processo precisa continuar vinculado aos seus contatos, andamentos e responsáveis). Migrar isso manualmente é inviável acima de poucas centenas de registros; sem um processo padronizado, cada migração reinventa a lógica do zero, aumentando risco de erro e tempo de entrega.

## Contexto

As migrações partiam de diferentes plataformas concorrentes (identificadas internamente como Astrea, Projuris, CPJ e CP-PRO, entre outras) com modelos de dados distintos entre si e diferentes do Legal One. O trabalho era executado via scripts SQL diretamente contra o banco de origem (abordagem "banco a banco"), complementado por um modelo de planilha padronizado (X-One) para os casos em que a extração direta não era possível ou não cobria 100% dos campos.

## Minha atuação

- Desenvolvimento e manutenção de scripts SQL de extração, organizados por módulo de dados (Contatos, Processos, Serviços).
- Construção de rotinas de pré-tratamento no banco de origem (criação de colunas e tabelas auxiliares, funções de apoio) e de pré-tratamento no banco de destino antes da carga (tratamento de CPF duplicado, endereço, e-mail duplicado, cadastro de posições).
- Execução de verificações de integridade e correções pós-carga (checagem de integridade, vínculo de comentários de andamento a tarefas, correção de horário perdido na carga).
- Colaboração contínua em repositório Git de uso compartilhado pelo time de migração, versionando scripts SQL e planilhas de tratamento "De/Para" por cliente.
- Aplicação prática desse processo em projetos reais de migração a partir de múltiplas plataformas concorrentes.

## Tecnologias utilizadas

- **SQL Server** (T-SQL) — extração, transformação e carga de dados.
- **Git/GitHub** — versionamento colaborativo do pipeline de migração (repositório interno da empresa).
- **Excel** — planilhas-padrão de mapeamento ("De/Para") e modelo de carga complementar (padrão X-One: Contatos, Contratos de Cliente, Contratos de Honorários, Processos, Serviços).
- **PowerShell** — fracionamento de scripts SQL de grande porte para viabilizar execução (usado em projeto de grande volume).

## Solução implementada

O processo é estruturado como um **pipeline de 4 fases**, versionado em repositório Git compartilhado com o restante do time de migração:

1. **Pré-extração (banco de origem)** — criação de funções e tabelas temporárias auxiliares no banco concorrente antes de extrair os dados: funções de formatação/validação (ex.: máscara de número de processo no padrão CNJ), flags indicando se um contato é cliente ou parte do processo, geração de temporárias para etiquetas, envolvidos em audiências/eventos/prazos/tarefas.
2. **Extração por módulo** — consultas SQL organizadas em três módulos centrais, espelhando a estrutura de dados do Legal One:
   - **Contatos**: dados cadastrais, endereços, telefones, e-mails, grupos, subcontatos, usuários e suas áreas, andamentos vinculados, compromissos/tarefas (inclusive personalizados e por responsável).
   - **Processos**: dados principais, apensos, assunto, classificações financeiras, contas correntes judiciais, etiquetas, garantias/depósitos (inclusive personalizados), objetos, outros envolvidos, pedidos (com classificações, motivos e objetos), posições, timesheet, andamentos, compromissos/tarefas.
   - **Serviços**: dados principais, andamentos, classificações financeiras, compromissos/tarefas (com lembretes, personalizados, responsáveis), outros envolvidos, timesheet, vínculos.
3. **Pré-migração (banco de destino)** — tratamentos aplicados antes da carga final no Legal One: tratamento de CPF duplicado, tratamento de endereço, correção de posições de terceiros, cadastro de posições (inclusive para o módulo de Serviços), correção de e-mail duplicado, tratamento de "outros envolvidos" e de observações herdadas da plataforma de origem.
4. **Pós-migração** — checagem de integridade dos dados carregados, inserção de etiquetas, vínculo de comentários de andamento às respectivas tarefas, e correção de inconsistências de horário geradas durante a carga.

Toda planilha de tratamento "De/Para" usada no processo segue uma regra documentada de segurança operacional registrada no próprio repositório: remover sempre a proteção por senha do Excel antes de processar o arquivo, evitando falhas silenciosas de leitura.

## Processo técnico (resumo)

```
Banco de origem (concorrente)
   └─> Pré-extração: funções auxiliares + tabelas temporárias
        └─> Extração por módulo (Contatos / Processos / Serviços) via SQL
             └─> Planilha "De/Para" (tratamento específico por cliente)
                  └─> Pré-migração no destino: CPF, endereço, e-mail, posições
                       └─> Carga no Legal One
                            └─> Pós-migração: integridade, etiquetas, vínculos, correções
```

## Desafios e decisões

- **Modelos de dados incompatíveis entre plataformas**: cada sistema de origem organiza contatos, processos e serviços de forma diferente — foi necessário mapear manualmente a equivalência de cada campo e de cada relacionamento entre entidades.
- **Integridade referencial**: campos derivados (ex.: se um contato é cliente ou parte do processo) não vinham prontos da origem e precisaram ser calculados via consultas específicas antes da extração.
- **Volume de dados**: em pelo menos um projeto, o script de carga ultrapassou 170 MB e precisou ser fracionado via PowerShell para viabilizar a execução em lotes.
- **Padronização vs. caso a caso**: o pipeline é genérico e reutilizável, mas cada cliente exige ajustes pontuais (ex.: tratamento de observações específicas herdadas da base de origem) — a estrutura do repositório permite registrar essas exceções sem comprometer o processo padrão.

## Impacto e métricas

| Métrica | Valor | Classificação |
|---|---|---|
| Módulos de dados cobertos pelo pipeline de extração | 3 módulos centrais (Contatos, Processos, Serviços), somando mais de 40 scripts SQL de extração por entidade/sub-entidade | **Comprovado por evidência** (contagem de arquivos no repositório) |
| Scripts de pré/pós-tratamento (pré-extração, pré-migração, pós-migração) | 14 scripts dedicados de tratamento de dados e integridade | **Comprovado por evidência** |
| Contribuição pessoal no repositório compartilhado do pipeline | 92 commits, entre maio e outubro de 2026, totalizando ~5 meses de atividade contínua, alterando 209 arquivos `.sql`, 34 `.xlsx` e 20 `.json` | **Comprovado por evidência** (histórico Git) |
| Tamanho do time que mantém este repositório | 18 colaboradores ativos no histórico (1.291 commits no total) | **Comprovado por evidência** |
| Plataformas de origem atendidas | 4 ou mais plataformas concorrentes distintas, com pelo menos 20 casos de migração documentados nos arquivos locais analisados | **Comprovado por evidência de pastas de projeto** (contagem de pastas de cliente) |
| Maior volume de dados tratado em um único projeto | Script de carga de ~170 MB, fracionado em 44 arquivos para execução | **Comprovado por evidência** (tamanho de arquivo) |
| Volume total de registros migrados nesse tipo de projeto | Não quantificado nos arquivos analisados | **Pendente de validação** — você pode levantar esse número a partir de relatórios de carga, se existirem |
| Número total de clientes atendidos em migração de banco a banco (concorrentes) nos últimos 2 anos, via parceiros de revenda | Mais de 25 (subconjunto do total de 30+ clientes atendidos em todos os tipos de serviço, confirmado pela autora) | **Comprovada** |

## Competências demonstradas

- Modelagem, extração e transformação de dados relacionais complexos (SQL Server).
- Mapeamento de equivalência entre modelos de dados heterogêneos.
- Construção de pipelines de ETL documentados, reprodutíveis e versionados.
- Trabalho colaborativo em repositório Git compartilhado por um time técnico de ao menos 18 pessoas, com histórico de contribuição consistente ao longo de meses.
- Tratamento de grandes volumes de dados e particionamento de execução quando necessário.
- Verificação de integridade pós-carga e correção proativa de inconsistências.

## Soft skills demonstradas

- **Colaboração técnica em equipe**: contribuição regular e sustentada em um repositório de uso compartilhado, respeitando convenções já estabelecidas pelo time.
- **Atenção a detalhes operacionais**: documentação de regras simples, porém críticas (ex.: remover senha do Excel antes de processar), que evitam falhas silenciosas para toda a equipe.
- **Pensamento estruturado**: organização do pipeline em fases claras e numeradas, facilitando a execução por outras pessoas do time.
- **Adaptação a contextos distintos**: capacidade de atuar sobre múltiplas plataformas de origem com modelos de dados diferentes, mantendo o mesmo padrão de processo.

## Pontos de melhoria e aprendizados

- O repositório ainda não possui documentação textual explicando o pipeline para novos integrantes do time (o que este próprio documento de portfólio ajuda a suprir, de forma generalizada).
- Métricas de volume de registros migrados por projeto não eram sistematicamente registradas — uma melhoria futura seria padronizar um relatório de carga com contagem de registros por módulo.
- Alguns scripts de tratamento específico por cliente poderiam ser generalizados em parâmetros reutilizáveis, reduzindo a necessidade de criar variações pontuais a cada novo caso.

## Confidencialidade e anonimização

- Nomes de escritórios de advocacia (clientes) **não são citados** neste documento.
- Nomes de plataformas concorrentes (Astrea, Projuris, CPJ, CP-PRO) e do destino (Legal One) são citados por autorização explícita da autora, por se tratarem de produtos de mercado, não de dados confidenciais de terceiros.
- Nomes de colegas de equipe que também contribuem para o repositório não são citados.
- Nenhum dado real de linha de planilha, CPF, endereço ou contato foi reproduzido.

## Evidências disponíveis

- Histórico de commits do repositório Git compartilhado (nome do repositório disponível para verificação interna, não reproduzido publicamente neste documento).
- Estrutura de pastas e nomes de scripts SQL organizados por módulo (Contatos/Processos/Serviços).
- Pastas de projeto por plataforma de origem, com planilhas de validação, tratamento e logs de erro (metadados apenas, sem conteúdo de dados).

## Status de publicação

**Publicável após anonimização** — o conteúdo técnico e de processo pode ser publicado como está (sem nomes de clientes); nomes de plataformas concorrentes e Legal One já autorizados.
