# Referências Sanitizadas

Lista de evidências que sustentam as afirmações feitas nos documentos de projeto, sem reprodução de dados sensíveis, nomes de clientes ou credenciais.

## Migração de Banco a Banco

- Repositório Git interno de pipeline de migração por planilha padrão (nome do repositório disponível para verificação interna; 1.291 commits totais, 18 colaboradores, 92 commits da autora entre mai/2026 e out/2026).
- Estrutura de pastas `sql/{Contatos,Processos,Servicos}`, `pre-post-sql/{origem,legalOne}` e `excel-files/` do repositório acima (nomes de arquivo, sem conteúdo de dados).
- 20+ pastas de projeto de cliente (plataformas de origem diversas), com planilhas de validação, backups de base concorrente e logs de erro (metadados apenas).

## Consultoria Recorrente

- 20 pastas de cliente contendo o padrão `gera_declarativo_*.sql` / `update_*.sql` / `rollback_*.sql`.
- 3+ casos adicionais com o mesmo padrão em contexto de parceria/canal indireto.
- E-mails `.msg`/`.eml` de solicitação e aprovação (existência verificada, conteúdo não analisado).

## Unificador de Contatos

- Código-fonte da última versão (`unificador_contatos.py`), lido internamente para elaboração da documentação.
- Versão de protótipo anterior baseada em `pyautogui` (`Duplicidade_auto.py`).
- Vídeo de treinamento (~36 MB).
- Log de execução real (`log_unificacao_20260714_190548.txt`) e planilhas de resultado (`contatos_duplicados.xlsx`, `martinslemos_contatos_duplicados_2506.xlsx`) encontrados em pasta de projeto de cliente.

## Automações Python e SQL/VBA

- 8 scripts Python (`importa_excel.py`, `extrai_mysql_andam.py`, `extrai_mysql_comptarf.py`, `Compara_volumetria.py`, `Divergencia_volumetria.py`, `erros_avisos.py`/`extrai_erros_avisos.py`, `reset_acessos.py`, `CSV_IMPORTA_ASTREA.py`).
- 7 macros VBA de validação estrutural de planilha (`CONFERE_CONTATOS.VBA` e correlatos).
- 3 scripts SQL de deduplicação/extração direcionada (`elimina_duplicidade_contatos.sql`, `tira_duplicidade_cpf.sql`, `extrai_responsaveis.sql`).

## Achados de segurança (não publicados, apenas registrados para ação interna)

- Credenciais de banco de dados em texto puro identificadas em pelo menos 3 scripts Python (`CSV_IMPORTA_ASTREA.py`, `reset_acessos.py`, `importa_excel.py`). Valores não reproduzidos em nenhum documento deste portfólio. Recomenda-se rotação das credenciais.
