# Inventário Inicial — Etapa 1 (consolidado)

> **Status:** documento de trabalho interno. Não publicar.
> **Local correto do portfólio:** `C:\Repos\portifolio_carol` (a versão anterior criada em `C:\Users\6134132\source\repos\portifolio_carol` foi um local incorreto, já que o `C:\Repos` é o "Repos" real da sua máquina, com seus próprios projetos). Você pode apagar a pasta antiga manualmente quando quiser — eu não excluo arquivos/pastas sem autorização.
> **Este documento substitui e amplia a primeira versão do inventário**, após localizar `C:\Repos`, que não havia sido mapeado na primeira varredura.

---

## 1. Correção importante de local

Na Etapa 1 original eu havia procurado por uma pasta chamada `Repos` e encontrado apenas `C:\Users\6134132\source\repos` (vazia). Na sua resposta você confirmou a existência de uma pasta `automacao_ajuda` — e localizando-a, descobri que o verdadeiro repositório de trabalho é:

```
C:\Repos\
├── CAROL\                         ← sua pasta pessoal de scripts e automações
├── BANCO_CLAUDE\                  ← documentação de banco gerada com apoio de IA (Claude Code)
├── Codigos para banco\            ← cópia de scripts Python de banco
├── GitHub\l1dmbr_x-one_extraction\← repositório Git real do modelo de migração por planilha (X-One)
├── Migrador_DB_Compartilhar\      ← ferramenta Python de migração de banco a banco
└── TR APPS\                       ← aplicações compiladas (uma em C#/.NET, outras em Python/PyInstaller)
```

Isso muda significativamente o panorama: agora há **código-fonte real** (Python, VBA, SQL, histórico de Git) comprovando pontos que antes eu havia marcado como "não localizados".

---

## 2. `C:\Repos\CAROL` — sua pasta pessoal

### 2.1 `AUTOMACOES_TR\AUTOMACAO_AJUDA` — projeto de saneamento de contatos duplicados ✅ localizado

| Item | Detalhe |
|---|---|
| Caminho | `C:\Repos\CAROL\AUTOMACOES_TR\AUTOMACAO_AJUDA\NOVO_UNIFICADOR\unificador_contatos.py` |
| Versões existentes | `ANTIGO\` (versão anterior) e `NOVO_UNIFICADOR\` (última versão, conforme sua instrução — é esta que vou documentar) |
| Tecnologia confirmada | Python, **Selenium** (automação de navegador), **Tkinter** (interface gráfica desktop), `openpyxl`/`pandas` (leitura de planilha Excel), empacotado em executável via **PyInstaller** (arquivo `.spec` presente, pasta `dist\` com build final) |
| O que o código faz (lido e confirmado) | 1) Consultor abre a ferramenta e faz login manual no navegador controlado pela aplicação (sem credenciais salvas no código — ponto positivo de segurança); 2) a planilha de contatos é carregada; 3) os contatos são agrupados por CPF/CNPJ para identificar duplicidades; 4) a ferramenta aciona a função nativa "Unificar Contatos" do Legal One via Selenium, navegando pela tela da aplicação; 5) gera um log em Excel colorido (sucesso/erro) ao final do processo |
| Evidência de uso real | Log `log_unificacao_20260714_190548.txt` e planilhas `contatos_duplicados.xlsx` / `martinslemos_contatos_duplicados_2506.xlsx` encontradas na pasta de um cliente (OneDrive), batendo com a saída que o script gera |
| Vídeo de treinamento | `Unificador de Contatos\Treinamento_Unificador_Contatos.mp4` (OneDrive) — material usado para ensinar outros consultores a operar a ferramenta |
| Relevância | **Muito alta — projeto-âncora do portfólio**, conforme sua indicação |
| Dados sensíveis no código | Nenhuma credencial hardcoded encontrada neste arquivo específico (login é manual/interativo) |

### 2.2 `AUTOMACOES_TR\Python` — protótipos anteriores

| Arquivo | O que é |
|---|---|
| `Duplicidade_auto.py` | Protótipo **anterior** ao Unificador atual: usa `pyautogui` (cliques em coordenadas de tela fixas) para automatizar a tela de duplicidade de contatos do Legal One. Tecnicamente mais frágil (depende de posição de tela), mas mostra a **evolução do seu processo**: da automação por coordenadas de tela até a versão atual com Selenium (seleção de elementos reais, mais robusta) |
| `selenium_class.py` | Trecho de estudo/tutorial do Selenium (navega até a documentação oficial) — não é um projeto de cliente, é material de aprendizado |
| `erros_avisos.py` | Script que conecta via `pyodbc` a um banco Azure SQL, executa 3 scripts `.sql` e gera um Excel com 3 abas (Totais, Erros, Avisos) formatadas — ferramenta de apoio à qualidade de dados |

### 2.3 `AUTOMACOES_TR` (raiz) — scripts de produtividade

| Arquivo | Tecnologia | Finalidade provável |
|---|---|---|
| `CSV_IMPORTA_ASTREA.py` | Python + banco | Importação de dados extraídos do Astrea (concorrente) a partir de CSV |
| `Compara_volumetria.py` | Python + banco | Compara contagem de registros entre bases/ambientes (ex.: produção vs. migrado), gera relatório Excel — útil para validação pós-migração |
| `Divergencia_volumetria.py` | Python + banco | Provavelmente identifica diferenças de volume de dados, complementar ao anterior |
| `extrai_erros_avisos.py` | Python + banco | Extração de erros e avisos para análise (há uma 2ª cópia em `Codigos para banco`) |
| `extrai_mysql_andam.py` / `extrai_mysql_comptarf.py` | Python + MySQL | Extração de dados de "andamentos" e "compromissos/tarefas" de uma base de origem MySQL |
| `importar_csv.PY` | Python | Importação de CSV (nome genérico, a confirmar finalidade exata) |
| `reset_acessos.py` | Python + SQL Server | **Reset de senha/acesso de usuários do Legal One via script** — contém atualização direta em banco e exportação de credenciais para Excel |
| `EXCEL_IMPORT\importa_excel.py` | Python + `sqlalchemy` | Importador genérico e parametrizável: sobe qualquer planilha Excel (todas as abas ou uma específica) para o banco de migração, sanitizando nomes de coluna |
| `SCRIPT PLANILHA\CONFERE_CONTATOS.VBA` (e arquivos irmãos, ~7 macros) | **VBA/Excel** | Valida se as colunas de uma planilha de migração batem exatamente com o padrão esperado pelo Legal One (por aba: Contato, Personalizados, Grupo, Telefone, E-mail etc.), sinalizando erros antes do envio — **evidência direta de VBA de produtividade**, que não havia sido localizada na varredura anterior |

**⚠️ Achado de segurança (fora do escopo do portfólio, mas relevante para você):**
Pelo menos 3 destes scripts (`CSV_IMPORTA_ASTREA.py`, `reset_acessos.py`, `importa_excel.py`) contêm **usuário e senha de banco de dados em texto puro, direto no código-fonte** (não vou reproduzir os valores aqui). Isso é uma prática de risco — qualquer pessoa com acesso ao arquivo tem acesso ao banco. Recomendo, independentemente do portfólio, avaliar com sua equipe/segurança a rotação dessas credenciais e o uso de variáveis de ambiente ou cofre de segredos no lugar de senha fixa no código. Nenhuma dessas credenciais será citada ou usada no portfólio.

---

## 3. `C:\Repos\GitHub\l1dmbr_x-one_extraction` — modelo formal de migração por planilha ✅ localizado

Esta é a pasta exata mencionada no seu pedido original — só que vive em `C:\Repos\GitHub`, não em `C:\Repos` diretamente, e é um **repositório Git real e ativo**, hospedado em `https://github.com/tr/l1dmbr_x-one_extraction` (repositório interno da TR).

| Métrica (extraída do histórico Git, portanto **comprovada por evidência**) | Valor |
|---|---|
| Total de commits no repositório (todos os autores) | 1.291 |
| Número de pessoas que já commitaram no repositório | 18 |
| **Seus commits** (autora: carolina.sanches@thomsonreuters.com, usuário "Nakasuka") | **92 commits** |
| Período da sua atividade neste repositório | **04/05/2026 a 03/10/2026** (~5 meses, até o momento da varredura) |
| Arquivos que você alterou, por tipo | 209 arquivos `.sql`, 34 `.xlsx`, 20 `.json` |
| Estrutura do repositório | `sql\`, `pre-post-sql\`, `excel-files\`, `utilities\`, `.github\` (CI/automação), `.vscode\` |
| Exemplos de tarefas (mensagens de commit reais, sem dados sensíveis) | "ajustes_validacao", "Update Contatos_CompromissosTarefas.sql", "Create 17 - limpa_responsavel_astrea_observacoes.sql", "Ajuste de envolvidos", "Update DePara_Tratamentos_JLF.xlsx" |

**Importante para honestidade do portfólio:** você é **uma de 18 colaboradores** deste repositório (92 de 1.291 commits totais = ~7% do volume de commits). Isso deve ser representado como **contribuição consistente em um projeto de equipe de longa duração**, não como autoria individual do repositório inteiro. Os nomes de commit mostram que você trabalhou especificamente em scripts de contatos, andamentos, compromissos/tarefas e tratamentos "De/Para" — inclusive para o escritório já visto antes nas pastas do OneDrive (ex.: "JLF", do grupo Astrea), o que **cruza e confirma** os achados da Etapa 1 original.

**Dados sensíveis:** nomes de colegas de equipe (não serão citados); nomes de clientes aparecem em alguns nomes de arquivo (ex.: `DePara_Tratamentos_JLF.xlsx`, `DePara_Tratamentos_SauraCapovilla.xlsx`) — mesma régua de anonimização das demais seções.

---

## 4. `C:\Repos\Migrador_DB_Compartilhar` — ferramenta de migração banco a banco

| Item | Detalhe |
|---|---|
| Tecnologia | Python 3, `PyMySQL`, `PyODBC`, `Tkinter` (interface gráfica) |
| O que faz | Migra um banco **MariaDB/MySQL inteiro para SQL Server**: schema (estrutura), dados, índices, chaves primárias/estrangeiras, constraints e conversão automática de tipos. Possui interface gráfica (`gui_migration.py`) e modo linha de comando. Módulos separados para análise de dependências entre tabelas (`dependency_analyzer.py`), geração de schema (`schema_generator.py`) e validação (`validator.py`) |
| **Métrica real encontrada no próprio README (comprovada por evidência, marcada pela própria autora como "Caso de Uso Real")** | **165 tabelas, ~14 GB de dados, 24+ milhões de registros migrados, tempo de execução 2,5 horas, taxa de sucesso de 100%** |
| Observação de autoria/ferramental | O README indica que o projeto foi "Desenvolvido com... Claude Code" — ou seja, parte da construção contou com apoio de IA generativa. Isso pode ser mencionado honestamente no portfólio como uso competente de ferramentas de IA para acelerar desenvolvimento, não como terceirização do trabalho |
| **Precisa da sua confirmação** | Esta pasta está em `C:\Repos` (nível raiz, fora de `CAROL\`) — confirme se este projeto é de sua autoria individual ou se foi construído em conjunto com outra pessoa |
| Dados sensíveis | O arquivo `config.py` de exemplo usa placeholders (`seu_servidor`, `sua_senha`) — não há credencial real neste arquivo de exemplo, mas **não abri `config.py` real** (apenas `config_EXEMPLO.py`) para evitar risco |

---

## 5. `C:\Repos\TR APPS` — aplicações compiladas (autoria a confirmar)

| Pasta | Tecnologia | Observação |
|---|---|---|
| `Ferramenta Migração v3` | C# / .NET WinForms (usa biblioteca EPPlus para Excel) | Aplicação compilada (.exe), não há código-fonte .cs, apenas o executável publicado |
| `lercsv_v2` | Python (PyInstaller) | Leitor/processador de CSV, também compilado em executável |
| `Validador Planilha` | `Migration-Sheet-Validator.exe` | Apenas o executável, sem código-fonte disponível |

**Precisa da sua confirmação:** você é autora dessas três ferramentas, colaborou nelas, ou apenas as utiliza (ferramentas de equipe/terceiros)? Isso muda completamente como (ou se) elas entram no portfólio.

---

## 6. `C:\Repos\BANCO_CLAUDE` e `C:\Repos\Codigos para banco`

- `BANCO_CLAUDE`: conjunto de arquivos Markdown (`tabelas_l1.md`, `triggers_l1.md`, `procedures_l1.md`, `vinculos_l1.md` etc.) documentando a estrutura do banco de dados do Legal One, aparentemente organizados com apoio do Claude Code (pasta `.claude` presente). É documentação técnica de apoio, não um "projeto" per se — mas evidencia disciplina de documentação de banco.
- `Codigos para banco`: parece ser uma **cópia secundária** de scripts já vistos em `CAROL\AUTOMACOES_TR` (`extrai_erros_avisos.py`, `reset_acessos.py` etc.) — não traz tecnologia nova, apenas reforça os achados da seção 2.

---

## 7. Local ainda não confirmado: unidade de rede `J:`

Durante a varredura, identifiquei que existe uma unidade `J:` mapeada na máquina, que contém uma estrutura muito maior (pastas como "04 - Scripts Úteis", "05 - Ferramentas de Migração", pastas de clientes por ID, e uma pasta pessoal `J:\CAROL`). **Não explorei o conteúdo dessa unidade em profundidade.**

Diferente do OneDrive e de `C:\Repos`, uma unidade `J:` normalmente é uma **unidade de rede compartilhada** (não é "sua máquina local" nem "OneDrive sincronizado" no sentido estrito do seu pedido original) e pode conter pastas e dados de outras pessoas da equipe. Por isso, **preciso da sua autorização explícita** antes de vasculhar essa unidade — ver pergunta na seção 9.

---

## 8. Atualização da tabela de mapeamento com suas áreas de experiência

| Área descrita por você | Status após esta segunda varredura |
|---|---|
| 1. Migração de concorrentes (Astrea, CPJ, Projuris) | **Comprovado** — OneDrive (planilhas/backups) + Git (`l1dmbr_x-one_extraction`, commits citando Astrea/JLF) |
| 2. Migração por planilha padrão (`l1dmbr_x-one_extraction`) | **Comprovado e localizado precisamente** — repositório Git real, 92 commits seus, 5 meses de atividade contínua |
| 3. Consultoria recorrente | **Comprovado**, com forte evidência em `Clientes\Interno\SCRIPT` (20 escritórios) e `Clientes\Parceiro` |
| 4. Automação SQL/VBA/Python de produtividade | **Comprovado** — 8+ scripts Python de produtividade e extração, 7 macros VBA de validação de planilha, scripts SQL de deduplicação |
| 5. Saneamento de contatos duplicados (Python + Selenium + executável) | **Comprovado e localizado** — código-fonte lido e confirmado, bate com sua descrição |

Todos os 5 pontos descritos por você agora têm evidência direta em arquivo.

---

## 9. Perguntas que ainda preciso que você responda antes de escrever a documentação final

1. **`Migrador_DB_Compartilhar`** (ferramenta de migração MariaDB/MySQL → SQL Server, com métrica real de 165 tabelas / 14 GB / 24+ milhões de registros): é um projeto seu? Solo ou em dupla/equipe?
2. **`TR APPS`** (Ferramenta Migração v3 em C#, `lercsv_v2`, Validador de Planilha): você é autora, colaboradora, ou apenas usuária dessas ferramentas?
3. **Unidade de rede `J:`**: posso explorar essa unidade (especialmente a pasta `J:\CAROL`) para enriquecer o portfólio, mesmo sendo uma unidade de rede compartilhada com potencial de conter pastas de colegas?
4. No repositório Git `l1dmbr_x-one_extraction`, você é 1 de 18 colaboradores (92 de 1.291 commits). Tudo bem apresentar isso como "contribuição em projeto de equipe de longa duração" (honesto) em vez de projeto individual?
5. Acusei a presença de **senhas de banco em texto puro** em 3 scripts Python seus. Não vou usar nenhuma delas no portfólio, mas quer que eu sinalize isso formalmente em algum lugar do material (ex.: como "ponto de melhoria" na autoavaliação) ou prefere que eu apenas trate como informação interna, fora do portfólio?

---

## 10. Classificação de sensibilidade (atualizada)

- **Alto risco:** nomes de ~38 escritórios de advocacia; credenciais de banco em texto puro no código (nunca serão reproduzidas); nomes de colegas de equipe no histórico Git.
- **Médio risco:** nomes de produtos concorrentes e Legal One/X-One (já autorizados por você para uso no portfólio).
- **Baixo risco:** estrutura de pastas, nomes de scripts, padrões de processo, métricas agregadas (contagens, datas, volumes).

Nenhum dado de linha de planilha, corpo de e-mail ou valor de credencial foi reproduzido neste documento.

---

## 11. Arquivos criados até o momento

- [C:\Repos\portifolio_carol\inventario_inicial.md](C:/Repos/portifolio_carol/inventario_inicial.md) — este arquivo (local definitivo).
- ~~C:\Users\6134132\source\repos\portifolio_carol\inventario_inicial.md~~ — versão anterior, local incorreto; pode ser apagada manualmente por você.

Nenhum arquivo original foi alterado, copiado ou movido.
