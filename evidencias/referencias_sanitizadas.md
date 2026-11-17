# Referências Sanitizadas

Lista de evidências que sustentam as afirmações feitas nos documentos de projeto, sem reprodução de dados sensíveis ou nomes de clientes.

## Migração de Banco a Banco

- Repositório Git interno de pipeline de migração por planilha padrão (nome do repositório disponível para verificação interna; 1.291 commits totais, 18 colaboradores, 92 commits da autora entre mai/2026 e out/2026).
- Estrutura de pastas do repositório acima, organizada por módulo (Contatos, Processos, Serviços) e por etapas de pré/pós-tratamento (sem conteúdo de dados).
- 20+ pastas de projeto de cliente (plataformas de origem diversas), com planilhas de validação, backups de base concorrente e logs de erro (metadados apenas).

## Consultoria Recorrente

- 20 pastas de cliente contendo o padrão `gera_declarativo_*.sql` / `update_*.sql` / `rollback_*.sql`.
- 3+ casos adicionais com o mesmo padrão em contexto de parceria/canal indireto.
- E-mails `.msg`/`.eml` de solicitação e aprovação (existência verificada, conteúdo não analisado).

## Unificador de Contatos

- Código-fonte da última versão, lido internamente para elaboração da documentação.
- Versão de protótipo anterior baseada em `pyautogui`.
- Vídeo de treinamento (~36 MB).
- Log de execução real e planilhas de resultado encontrados em pasta de projeto de cliente.

## Automações Python e SQL/VBA

- 8 scripts Python de produtividade (importação, extração, comparação de volumetria, extração de erros e avisos, gestão de acessos).
- 7 macros VBA de validação estrutural de planilha.
- 3 scripts SQL de deduplicação/extração direcionada.
