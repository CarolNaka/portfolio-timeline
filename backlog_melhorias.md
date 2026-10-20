# Backlog de Melhorias do Portfólio

Lista de itens identificados durante a análise que podem ser incorporados em versões futuras deste portfólio.

## Conteúdo

- [x] ~~Obter, mediante sua autorização explícita, a lista de clientes atendidos nos últimos 2 anos a partir do OneNote~~ — resolvido: você forneceu o valor aproximado (mais de 30 clientes no total), consulta ao OneNote dispensada.
- [ ] Registrar o volume total de registros migrados ao longo da carreira (se reconstituível a partir de relatórios antigos).
- [ ] Medir e documentar o tempo economizado pelo Unificador de Contatos em relação ao processo tradicional.
- [ ] Adicionar telemetria simples (log local) ao Unificador de Contatos, para quantificar uso real.
- [x] ~~Traduzir `metricas/metricas_e_indicadores.md` e `guia_de_atualizacao.md` para inglês~~ — concluído (`metricas_e_indicadores.en.md` e `guia_de_atualizacao.en.md` criados).
- [ ] Avaliar se algum dos "cases importantes" merece citação nominal de cliente (mediante sua autorização específica, conforme combinado).

## Estrutura e manutenção

- [ ] Consolidar os 8 scripts Python de produtividade em um repositório próprio e documentado (hoje estão espalhados em pastas de cliente).
- [ ] Adicionar diagrama simplificado do fluxo de dados do pipeline de migração (Contatos/Processos/Serviços) à documentação do projeto de migração.
- [ ] Revisar periodicamente se novos projetos/scripts foram criados desde a última atualização do portfólio.

## Segurança (prioridade alta, independente do portfólio)

- [ ] Rotacionar as credenciais de banco de dados identificadas em texto puro em pelo menos 3 scripts Python de produtividade.
- [ ] Migrar credenciais para variáveis de ambiente ou um cofre de segredos corporativo.
- [ ] Revisar se outros scripts não analisados nesta varredura também contêm credenciais hardcoded.

## Site

- [x] ~~Redesenhar com visual mais profissional (paleta navy/dourado, tipografia serifada para títulos)~~ — concluído.
- [x] ~~Separar competências técnicas de soft skills, com abas no site~~ — ajustado: exibidas lado a lado/empilhadas, sem abas, conforme preferência da autora.
- [x] ~~Mover projetos e métricas para uma página dedicada por experiência~~ — concluído (`site/experiencias/legal-one.html`); nova experiência = nova página, seguindo `guia_de_atualizacao.md`.
- [x] ~~Adicionar nome completo e espaço para foto no cabeçalho~~ — concluído (placeholder com iniciais "CN"; substituir por `<img>` quando houver foto).
- [x] ~~Criar páginas HTML individuais para cada projeto, com visual consistente ao resto do site~~ — concluído (`site/projetos/*.html`, bilíngues via blocos `data-lang-block`).
- [ ] Substituir o placeholder de iniciais por uma foto real, quando disponível.
- [ ] Avaliar inclusão de uma seção "Linha do tempo" caso datas mais precisas de projetos sejam reconstituídas.
- [ ] Avaliar inclusão de diagramas visuais (não apenas texto) para os principais pipelines, uma vez que estejam sanitizados.
- [ ] Ao criar a segunda página de experiência, avaliar se vale a pena extrair os dados de projetos/métricas de `script.js` para arquivos JSON separados por experiência (mais fácil de manter conforme o número de páginas cresce).
