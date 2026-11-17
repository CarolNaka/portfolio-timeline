# Automações Python de Produtividade e Apoio Operacional

## Visão geral

Conjunto de scripts Python voltados a tarefas pontuais de produtividade no contexto de migração e manutenção de dados: importação de arquivos CSV/Excel para banco, comparação de volumetria entre bases, extração de dados de origens MySQL e gestão de acesso de usuários.

## Problema resolvido

Diversas etapas do processo de migração e suporte (conferir se duas bases têm a mesma quantidade de registros, subir uma planilha inteira para o banco, extrair dados de uma base MySQL de origem, resetar o acesso de um usuário) eram candidatas a automação simples que elimina passos manuais repetitivos.

## Contexto

Os scripts foram desenvolvidos como ferramentas de apoio paralelas ao trabalho principal de migração e consultoria, cada um resolvendo uma necessidade pontual identificada na rotina.

## Minha atuação

- Desenvolvimento de um importador genérico e parametrizável de Excel para banco de dados, capaz de subir todas as abas de uma planilha (ou uma aba específica), tratando automaticamente nomes de coluna para torná-los compatíveis com o banco de destino.
- Desenvolvimento de scripts de extração a partir de bases **MySQL** de origem (andamentos e compromissos/tarefas), usados como insumo de migração.
- Desenvolvimento de scripts de comparação de volumetria entre bases (origem x destino, ou produção x ambiente de tratamento), gerando relatório Excel com os resultados.
- Desenvolvimento de um script de apoio à gestão de acesso de usuários do Legal One.
- Desenvolvimento de um script de extração de erros e avisos, conectando a um banco via `pyodbc`, executando múltiplos scripts SQL de verificação e consolidando o resultado em um Excel formatado (abas de Totais, Erros e Avisos).

## Tecnologias utilizadas

- **Python** (bibliotecas: `pandas`, `openpyxl`, `pyodbc`, `sqlalchemy`, `pymysql`, conforme o script).
- **SQL Server** e **MySQL** — bancos de origem e destino, conforme o cenário.
- **Excel** — formato de entrada (planilhas de carga) e de saída (relatórios).

## Solução implementada

### Importador genérico de Excel para banco

O importador lê uma planilha Excel inteira (todas as abas, ou uma específica informada por parâmetro), sanitiza os nomes das colunas para o padrão aceito pelo banco e insere os dados na tabela de destino via `sqlalchemy` — eliminando a necessidade de escrever um script de importação específico para cada nova planilha.

### Extração MySQL

Os scripts de extração MySQL conectam a uma base MySQL de origem e extraem, respectivamente, dados de andamentos e de compromissos/tarefas, preparando-os para a etapa seguinte do processo de migração.

### Comparação de volumetria

Os scripts de comparação de volumetria comparam a contagem de registros entre duas bases (ex.: origem e destino, ou antes e depois de um tratamento), apoiando a validação de que nenhum dado foi perdido durante o processo.

### Extração de erros e avisos

O script de extração de erros e avisos conecta a um banco, executa scripts SQL de verificação e organiza o resultado em um relatório Excel com abas de Totais, Erros e Avisos — usado para avaliar a qualidade de uma carga recém-realizada.

### Gestão de acessos

Um script automatiza tarefas de acesso de usuários do Legal One.

## Processo técnico (resumo)

```
Fonte de dados (Excel, MySQL, SQL Server)
   └─> Script Python específico (importação, extração, comparação ou verificação)
        └─> Banco de destino atualizado OU relatório Excel consolidado
```

## Desafios e decisões

- **Scripts pontuais vs. ferramenta única**: a decisão de manter scripts independentes, cada um focado em uma tarefa, privilegiou agilidade de entrega para necessidades específicas, em vez de investir tempo em uma ferramenta unificada mais complexa.
- **Evolução de abordagem**: o protótipo anterior (baseado em `pyautogui`, automação por coordenadas de tela) evoluiu posteriormente para a abordagem baseada em Selenium usada no projeto "Unificador de Contatos", documentado separadamente — mostrando progressão técnica ao longo do tempo.

## Impacto e métricas

| Métrica | Valor | Classificação |
|---|---|---|
| Número de scripts Python de produtividade identificados | 8 scripts distintos (importação, extração MySQL ×2, comparação de volumetria ×2, erros/avisos, gestão de acessos, importador genérico) | **Comprovado por evidência** |
| Bancos de dados de origem suportados pelos scripts de extração | SQL Server e MySQL | **Comprovado por evidência** |
| Tempo economizado por execução automatizada vs. processo manual equivalente | Não quantificado nos arquivos analisados | **Pendente de validação** |
| Redução de dependência de conhecimento técnico para subir uma planilha ao banco | Alta — o importador genérico elimina a necessidade de escrever SQL de inserção manualmente a cada nova planilha | **Estimativa qualitativa**, não numérica |

## Competências demonstradas

- Programação Python aplicada a integração de dados (Excel, SQL Server, MySQL).
- Uso de bibliotecas de acesso a banco de dados (`pyodbc`, `sqlalchemy`, `pymysql`) e de manipulação de planilhas (`pandas`, `openpyxl`).
- Capacidade de identificar tarefas manuais repetitivas e generalizá-las em scripts reutilizáveis.

## Soft skills demonstradas

- **Produtividade e melhoria contínua**: criação de ferramentas de apoio para acelerar tarefas recorrentes do próprio fluxo de trabalho.
- **Visão de reuso**: construção de um importador genérico (em vez de um script fixo por planilha), reduzindo esforço nas próximas demandas semelhantes.

## Pontos de melhoria e aprendizados

- Os scripts não possuem tratamento de erro padronizado nem testes automatizados — adicionar isso aumentaria a confiabilidade em execuções não supervisionadas.
- Não há documentação formal de uso para cada script (parâmetros esperados, pré-requisitos) — útil para que outras pessoas do time também possam utilizá-los.

## Confidencialidade e anonimização

- Nenhum nome de cliente é citado.
- Nenhum dado real de produção é reproduzido.

## Evidências disponíveis

- Código-fonte dos scripts, analisado internamente para elaboração deste documento (não publicado integralmente).

## Status de publicação

**Publicável após anonimização**
