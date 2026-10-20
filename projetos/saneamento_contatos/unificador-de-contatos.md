# Unificador de Contatos — Ferramenta Autoral de Saneamento de Duplicidade

## Visão geral

Ferramenta desenvolvida em Python, com automação de navegador via Selenium e interface gráfica em Tkinter, distribuída como executável para consultores que atuam em contato direto com clientes. O objetivo é identificar e unificar contatos duplicados diretamente na base do Legal One, usando a própria função nativa de unificação do sistema, com muito mais autonomia do que o processo tradicional.

Este é um projeto **de ideia e autoria própria**: concepção, desenho da solução e implementação a partir de uma necessidade operacional identificada no dia a dia.

## Problema resolvido

Bases de clientes migradas (ou em uso há tempo) acumulam contatos duplicados — a mesma pessoa ou empresa cadastrada mais de uma vez, geralmente por variações de nome, múltiplas importações ou cadastros manuais divergentes. Corrigir isso pelo processo tradicional exigia: extrair a base de produção, levá-la para homologação, tratar os dados fora do ambiente do cliente, aguardar SLA de liberação, e só então aplicar a correção de volta em produção — um ciclo longo, que depende do time de migração e trava o consultor que está na ponta, em contato com o cliente.

## Contexto

A ferramenta nasceu para resolver exatamente esse gargalo: permitir que o próprio consultor, sem depender do time de migração, identifique e unifique contatos duplicados agindo diretamente (em tempo real, em segundo plano) sobre a base do cliente, usando os recursos nativos do Legal One, com total respeito aos processos e permissões já existentes no sistema.

## Minha atuação

- Identificação da necessidade e concepção da solução (ideia autoral, não uma demanda formal de terceiros).
- Protótipo inicial usando automação por coordenadas de tela (`pyautogui`), que validou a ideia, mas se mostrou frágil por depender da posição exata dos elementos na tela.
- Evolução para uma versão mais robusta, baseada em **Selenium**, que localiza elementos reais da interface do Legal One (em vez de coordenadas fixas), tornando a automação resiliente a pequenas mudanças de layout.
- Construção de uma interface gráfica própria (Tkinter) para que qualquer consultor, mesmo sem conhecimento técnico de programação, consiga operar a ferramenta.
- Empacotamento da aplicação em um executável único (via PyInstaller), eliminando a necessidade de instalar Python ou bibliotecas na máquina de quem for usar.
- Geração de um log de execução em Excel, colorido por status (sucesso/erro), para que o consultor acompanhe o resultado de cada unificação.
- Produção de material de treinamento (vídeo) para disseminar o uso da ferramenta entre outros consultores.

## Tecnologias utilizadas

- **Python** — linguagem principal da aplicação.
- **Selenium WebDriver** — automação do navegador para interagir com a tela nativa de unificação de contatos do Legal One.
- **Tkinter** — interface gráfica desktop.
- **openpyxl / pandas** (manipulação de planilha) — leitura da base de contatos e geração do relatório de log.
- **PyInstaller** — empacotamento da aplicação Python em um executável `.exe` distribuível.
- **pyautogui** (versão de protótipo anterior) — primeira abordagem de automação, substituída pela versão em Selenium.

## Solução implementada

A ferramenta funciona em três etapas, do ponto de vista do consultor que a utiliza:

1. **Login manual e carregamento da base**: o consultor abre a ferramenta, realiza o login manual no navegador controlado pela aplicação (nenhuma credencial é armazenada no código) e informa a planilha de contatos a ser analisada.
2. **Identificação de duplicidade**: a ferramenta agrupa os contatos por CPF/CNPJ para encontrar registros duplicados na base.
3. **Unificação automatizada**: para cada grupo de duplicados identificado, a ferramenta aciona a função nativa "Unificar Contatos" do próprio Legal One via Selenium — ou seja, não é uma lógica própria de mesclagem de dados, é a automação do fluxo que o próprio sistema já oferece, mas de forma mais rápida e em lote. Ao final, gera um relatório Excel colorido indicando o resultado de cada unificação (sucesso ou erro).

Por rodar como automação de navegador controlada pela própria aplicação (headless/em segundo plano), o processo libera o consultor para continuar outras atividades enquanto a unificação ocorre.

## Processo técnico (resumo)

```
Planilha de contatos do cliente
   └─> Login manual no navegador controlado pela ferramenta
        └─> Agrupamento de contatos duplicados por CPF/CNPJ
             └─> Para cada grupo: aciona função nativa "Unificar Contatos" (Legal One) via Selenium
                  └─> Log de execução em Excel (colorido por status)
```

## Desafios e decisões

- **Fragilidade da primeira versão**: a automação inicial por coordenadas de tela (`pyautogui`) quebrava com qualquer mudança de resolução ou posição de janela — a decisão de reescrever usando Selenium, com seleção de elementos reais da página, resolveu esse problema de raiz.
- **Segurança de credenciais**: optou-se por exigir login manual do próprio consultor no navegador controlado pela ferramenta, em vez de armazenar usuário e senha no código — reduzindo risco de exposição de credenciais.
- **Usabilidade para público não técnico**: a interface em Tkinter e o empacotamento em executável único foram escolhas deliberadas para que consultores sem conhecimento de programação pudessem operar a ferramenta sem suporte técnico constante.
- **Honestidade técnica**: esta ferramenta não representa a solução mais sofisticada do ponto de vista de arquitetura de software (é um script de automação de interface, não uma integração via API, por exemplo) — mas foi a solução certa para o problema real: dar autonomia ao consultor dentro das limitações e dos recursos disponíveis no sistema.

## Impacto e métricas

| Métrica | Valor | Classificação |
|---|---|---|
| Redução de etapas do processo tradicional de saneamento de duplicidade | De um ciclo de extração → homologação → tratamento → espera de SLA → liberação, para uma ação direta do consultor em produção | **Fato comprovado pela arquitetura da solução** (eliminação das etapas intermediárias é inerente ao desenho da ferramenta) |
| Dependência do time de migração para esse tipo de ajuste | Eliminada para o cenário de duplicidade de contatos coberto pela ferramenta | **Fato comprovado pela arquitetura da solução** |
| Autonomia do consultor | Aumentada — o próprio consultor realiza a ação, sem abrir chamado para outro time | **Fato comprovado pela arquitetura da solução** |
| Evidência de uso real em base de cliente | Logs de unificação e planilhas de contatos duplicados encontrados em pasta de projeto real, com nome de arquivo e timestamp de execução | **Comprovado por evidência** (arquivo `log_unificacao_20260714_190548.txt` e planilhas correlatas) |
| Existência de material de treinamento formal | Vídeo de treinamento de ~36 MB documentado | **Comprovado por evidência** |
| Número de clientes/consultores que já usaram a ferramenta | Não quantificado nos arquivos analisados | **Pendente de validação** |
| Tempo médio economizado por unificação em relação ao processo tradicional | Não quantificado nos arquivos analisados | **Pendente de validação** — você pode estimar comparando o tempo do ciclo tradicional (dias, por depender de SLA) com o tempo de uso direto da ferramenta (minutos/horas) |

## Competências demonstradas

- Identificação autônoma de problemas operacionais e proposição de solução técnica, sem demanda formal de terceiros.
- Programação em Python aplicada a automação de processos reais (não apenas scripts isolados).
- Automação de interface web com Selenium, incluindo seleção robusta de elementos.
- Construção de interface gráfica para usuários não técnicos.
- Empacotamento e distribuição de aplicações Python para uso por terceiros sem ambiente de desenvolvimento.
- Iteração de produto: evolução de um protótipo frágil (pyautogui) para uma versão robusta e distribuível (Selenium + executável).

## Soft skills demonstradas

- **Iniciativa e pensamento de produto**: identificar um gargalo operacional e construir, por conta própria, uma solução ponta a ponta — da ideia ao treinamento de outros usuários.
- **Foco no usuário final**: priorizar usabilidade (interface simples, executável único) em vez de apenas resolver o problema tecnicamente, pensando em quem de fato usaria a ferramenta no dia a dia.
- **Pragmatismo**: escolher a solução que resolve o problema real dentro das restrições existentes, em vez de buscar a arquitetura "ideal" mas inviável no contexto.
- **Disseminação de conhecimento**: produção de material de treinamento para que a ferramenta beneficiasse outros consultores, não apenas a autora.
- **Consciência de segurança**: decisão deliberada de não embutir credenciais no código, mesmo sendo uma ferramenta de uso interno.

## Pontos de melhoria e aprendizados

- A automação depende da estrutura visual da tela do Legal One — mudanças na interface do sistema podem exigir ajustes no código (risco inerente a automações baseadas em interface, não em API).
- Não há registro sistemático de quantas vezes a ferramenta foi usada nem por quantos consultores — adicionar telemetria básica (mesmo que local, em log) ajudaria a quantificar o impacto real.
- A ferramenta resolve duplicidade por CPF/CNPJ; poderia evoluir para identificar duplicidades por similaridade de nome, cobrindo mais casos.
- Honestamente, a arquitetura (automação de interface via Selenium) é uma solução pragmática, não a mais sofisticada tecnicamente — uma evolução futura poderia buscar integração via API do Legal One, caso disponível, reduzindo a dependência da interface visual.

## Confidencialidade e anonimização

- Nenhum nome de cliente é citado neste documento.
- O código-fonte completo não é publicado neste portfólio — apenas a descrição da arquitetura e do fluxo, conforme a abordagem conservadora adotada.
- Nenhuma credencial foi encontrada no código e nenhuma seria reproduzida de qualquer forma.

## Evidências disponíveis

- Código-fonte da última versão (`unificador_contatos.py` e arquivo de build `.spec`), analisado internamente para elaboração deste documento.
- Versão de protótipo anterior (baseada em `pyautogui`), evidenciando a evolução técnica da solução.
- Vídeo de treinamento da ferramenta.
- Logs de execução real e planilhas de resultado encontrados em pasta de projeto de cliente (metadados, sem dados reais reproduzidos).

## Status de publicação

**Publicável após anonimização** — a descrição da arquitetura, do processo e do impacto pode ser publicada integralmente; o código-fonte completo não será incluído no repositório público, apenas trechos genéricos ilustrativos, se desejado futuramente.
