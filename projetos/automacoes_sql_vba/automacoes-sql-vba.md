# Automações SQL e VBA de Produtividade e Qualidade de Dados

## Visão geral

Conjunto de scripts SQL e macros VBA desenvolvidos para resolver necessidades pontuais de produtividade no dia a dia de migração e consultoria: deduplicação de dados, extração direcionada e validação estrutural de planilhas antes do envio para carga.

## Problema resolvido

Tarefas repetitivas de verificação e limpeza de dados (checar se uma planilha está no formato certo, remover duplicidade de CPF, extrair responsáveis de uma base) consomem tempo manual e são propensas a erro humano quando feitas "na mão", especialmente sob volume e prazo.

## Contexto

Esses scripts foram criados ao longo de diferentes projetos de migração e consultoria, como ferramentas de apoio pontuais — não como um produto único, mas como uma caixa de ferramentas reutilizável para acelerar etapas específicas do processo.

## Minha atuação

- Escrita de scripts SQL para eliminação de duplicidade de contatos e de CPF em bases migradas.
- Escrita de scripts SQL de extração direcionada (ex.: extração de responsáveis a partir de uma base de origem).
- Desenvolvimento de macros VBA para validar, aba a aba, se uma planilha de migração segue exatamente a estrutura de colunas esperada pelo Legal One antes de ser enviada para carga.

## Tecnologias utilizadas

- **SQL Server** (T-SQL).
- **VBA (Visual Basic for Applications)**, integrado ao Excel.

## Solução implementada

### Scripts SQL de deduplicação e extração

- `elimina_duplicidade_contatos.sql` e `tira_duplicidade_cpf.sql` — identificam e tratam registros de contato duplicados por CPF em bases migradas de concorrentes, antes da carga final.
- `extrai_responsaveis.sql` — consulta direcionada para extrair a relação de responsáveis de uma base de origem, usada como insumo em um projeto de migração específico.

### Validador de planilha em VBA

Um conjunto de ~7 macros (`CONFERE_CONTATOS.VBA` e arquivos correlatos) percorre cada aba de uma planilha de migração padrão (Contato, Personalizados, Grupo, Telefone, E-mail, entre outras) e compara a estrutura de colunas encontrada com o padrão esperado pelo Legal One, sinalizando divergências antes que a planilha seja enviada para carga — evitando que erros estruturais só sejam descobertos depois, já na etapa de importação.

## Processo técnico (resumo)

```
Planilha de migração preenchida
   └─> Macro VBA percorre cada aba
        └─> Compara colunas encontradas x estrutura esperada
             └─> Sinaliza divergências antes do envio para carga
```

```
Base de origem (concorrente) ou já migrada
   └─> Script SQL de deduplicação / extração direcionada
        └─> Base tratada, pronta para a próxima etapa do processo
```

## Desafios e decisões

- **Padronização sem um sistema central**: cada script resolve uma necessidade pontual; a decisão de mantê-los como scripts simples e diretos (em vez de um sistema mais complexo) privilegiou velocidade de entrega para demandas pequenas e recorrentes.
- **Validação antecipada**: o validador em VBA foi pensado para pegar erros de estrutura **antes** da carga, evitando retrabalho na etapa seguinte do processo.

## Impacto e métricas

| Métrica | Valor | Classificação |
|---|---|---|
| Número de macros VBA de validação de planilha identificadas | 7 macros cobrindo diferentes abas do padrão de migração | **Comprovado por evidência** |
| Número de scripts SQL de deduplicação/extração direcionada identificados | 3 scripts distintos (deduplicação de contatos, deduplicação de CPF, extração de responsáveis) | **Comprovado por evidência** |
| Redução de retrabalho na etapa de carga | Esperada pela antecipação de erros estruturais, mas não medida numericamente | **Estimativa**, a validar |
| Tempo economizado por execução automatizada vs. checagem manual | Não quantificado | **Pendente de validação** |

## Competências demonstradas

- Escrita de SQL de tratamento e deduplicação de dados.
- Programação VBA para automação de validação em Excel.
- Pensamento preventivo: validar estrutura antes da etapa crítica (carga), não depois.

## Soft skills demonstradas

- **Foco em produtividade e melhoria contínua**: construção de pequenas ferramentas para eliminar tarefas manuais repetitivas.
- **Proatividade**: antecipação de problemas (erros de estrutura de planilha) antes que afetem etapas posteriores do processo.

## Pontos de melhoria e aprendizados

- Os scripts estão distribuídos em pastas de projeto distintas, sem um catálogo central — organizá-los em uma biblioteca reutilizável facilitaria reuso por outros membros do time.
- Não há testes automatizados para os scripts SQL — para scripts que mexem em dados de produção, mesmo testes simples de verificação pré/pós trariam mais segurança.

## Confidencialidade e anonimização

- Nenhum nome de cliente é citado neste documento.
- Nenhum dado real de planilha ou de banco é reproduzido.

## Evidências disponíveis

- Scripts SQL e macros VBA identificados em pastas de projeto (nomes de arquivo e estrutura, sem conteúdo de dados).

## Status de publicação

**Publicável após anonimização** — pode ser publicado com trechos de código genéricos (sem dados reais de cliente).
