# Consultoria Recorrente em Banco de Dados — Ajustes Pós-Migração no Legal One

## Visão geral

Atendimento técnico recorrente a clientes já migrados para o Legal One, realizando correções e ajustes pontuais diretamente no banco de dados de produção, sempre seguindo um padrão de segurança operacional com plano de reversão (rollback) documentado para cada intervenção.

## Problema resolvido

Depois que um escritório já está operando no Legal One, surgem necessidades pontuais que não são resolvidas pela interface do sistema: correção de dados que vieram errados em alguma carga, ajustes de regra de negócio específicos de um cliente (ex.: tipo de ação, centro de custo, flags de controle), baixa em massa de processos, reorganização de objetos cadastrados etc. Essas demandas exigem alteração direta em banco de produção — uma operação de risco, que precisa de rigor técnico e de um caminho de reversão caso algo saia errado.

## Contexto

Essas demandas chegavam de forma recorrente, uma por cliente, sempre com aprovação formal por e-mail antes da execução. Cada caso tinha sua própria particularidade, mas o processo de execução seguia sempre o mesmo padrão de segurança, independentemente do cliente ou da complexidade do ajuste.

## Minha atuação

- Recebimento e interpretação de solicitações de ajuste vindas de clientes já migrados.
- Escrita de scripts SQL personalizados para cada necessidade (correção de dados, baixa de processos, ajuste de centro de custo, ajuste de tipo de ação, reorganização de objetos, entre outros).
- Criação de um script "declarativo" (de levantamento/diagnóstico) antes de qualquer alteração, para confirmar o escopo exato do que seria alterado.
- Execução do script de atualização em produção somente após aprovação formal do pedido.
- Criação de um script de rollback para cada ajuste realizado, permitindo reverter a alteração caso necessário.
- Comunicação técnica com áreas internas e, quando necessário, registro formal de aprovação por e-mail antes da execução em produção.

## Tecnologias utilizadas

- **SQL Server** (T-SQL) — toda a lógica de diagnóstico, atualização e rollback.
- **E-mail (Outlook)** — fluxo de solicitação, aprovação e registro de execução (apenas como canal de aprovação, não analisado em conteúdo).
- **Excel** — planilhas de apoio para levantamento e conferência de dados antes/depois do ajuste.

## Solução implementada

Cada demanda de consultoria segue um **padrão de 3 arquivos**, repetido de forma consistente nos casos analisados:

1. **Script declarativo / de geração** (`gera_declarativo_*.sql` ou `declarativo_*.sql`) — levanta e lista exatamente quais registros serão afetados, sem alterar nada, servindo de base para conferência e aprovação.
2. **Script de execução** (`update_*.sql` ou equivalente) — aplica a alteração em produção, já validada e aprovada.
3. **Script de rollback** (`rollback_*.sql`) — reverte exatamente a alteração feita, preparado antes da execução do ajuste, não depois.

Esse padrão transforma uma operação arriscada (alteração direta em produção) em um processo auditável e reversível: é possível provar, antes de executar, exatamente o que vai mudar, e é possível desfazer a mudança caso algo não saia como esperado.

## Processo técnico (resumo)

```
Solicitação do cliente (e-mail)
   └─> Script declarativo (diagnóstico / escopo do impacto)
        └─> Aprovação formal por e-mail
             └─> Script de execução (update em produção)
                  └─> Script de rollback já preparado (plano de reversão)
```

## Desafios e decisões

- **Risco de alteração em produção**: cada ajuste tinha potencial de impactar diretamente a operação do cliente — a decisão de sempre preparar um script de rollback antes de executar foi uma forma de mitigar esse risco de forma sistemática.
- **Diversidade de demandas**: cada cliente trazia uma regra de negócio diferente (tipo de ação, centro de custo, baixa de processos, reorganização de objetos) — exigindo leitura e interpretação cuidadosa de cada pedido antes de traduzi-lo em lógica SQL.
- **Necessidade de rastreabilidade**: a aprovação formal por e-mail antes de cada execução garante um histórico de quem autorizou o quê, reduzindo ambiguidade em caso de dúvida posterior.

## Impacto e métricas

| Métrica | Valor | Classificação |
|---|---|---|
| Número de clientes atendidos com este padrão de consultoria (apenas na pasta principal de scripts) | 20 escritórios distintos | **Comprovado por evidência** (contagem de pastas de cliente) |
| Número de casos adicionais em contexto de parceria/canal indireto | Pelo menos mais 3 casos documentados com o mesmo padrão declarativo/rollback | **Comprovado por evidência** |
| Taxa de cobertura do padrão declarativo → execução → rollback nos casos analisados | 100% dos casos revisados seguiam as 3 etapas | **Comprovado por evidência** |
| Tempo médio de atendimento por solicitação | Não registrado nos arquivos analisados | **Pendente de validação** |
| Número total de scripts de correção produzidos nos últimos 2 anos | Estimativa de 60 a 80 scripts (contando declarativo + execução + rollback para cada um dos ~23 casos identificados) | **Estimativa**, a validar |

## Competências demonstradas

- Escrita de SQL de diagnóstico, atualização e reversão para cenários de produção.
- Avaliação de risco antes de intervenções diretas em banco de dados ativo.
- Interpretação de regras de negócio jurídicas (tipo de ação, centro de custo, status processual) e tradução para lógica de banco de dados.
- Disciplina de documentação técnica mínima viável (3 arquivos por caso), suficiente para auditoria e reversão.

## Soft skills demonstradas

- **Gestão de risco em ambiente sensível**: construção sistemática de plano de reversão antes de qualquer alteração em produção, mesmo sob pressão de prazo.
- **Comunicação técnica com clientes e áreas internas**: tradução de pedidos de negócio em escopo técnico claro, validado por e-mail antes da execução.
- **Confiabilidade e consistência**: aplicação do mesmo padrão de segurança independentemente do tamanho ou complexidade do cliente.
- **Autonomia**: condução ponta a ponta de cada demanda, da interpretação do pedido até a entrega e o registro de reversão.

## Pontos de melhoria e aprendizados

- O processo é manual (cada script é escrito do zero) — poderia evoluir para um conjunto de templates parametrizáveis para os tipos de ajuste mais recorrentes (ex.: baixa de processos, ajuste de centro de custo), reduzindo tempo de desenvolvimento.
- Não há um repositório centralizado único com todos os casos de consultoria recorrente (estão espalhados em pastas de cliente) — centralizar isso facilitaria reuso e análise de padrões entre clientes.
- Métricas de tempo de atendimento e volume de registros afetados por ajuste não são registradas sistematicamente — adicionar isso traria visibilidade de produtividade.

## Confidencialidade e anonimização

- Nenhum nome de escritório de advocacia (cliente) é citado neste documento.
- Conteúdo de e-mails de aprovação não é reproduzido — apenas a existência do fluxo de aprovação é mencionada.
- Nenhum dado real de produção (nomes, processos, valores) é reproduzido.

## Evidências disponíveis

- Estrutura de pastas por cliente, cada uma contendo os 3 arquivos do padrão declarativo/execução/rollback.
- E-mails de solicitação e aprovação (metadados de existência apenas, conteúdo não analisado nem reproduzido).

## Status de publicação

**Publicável após anonimização** — o processo e o padrão de segurança podem ser publicados integralmente; apenas nomes de clientes são removidos.
