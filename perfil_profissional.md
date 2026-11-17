# Perfil Profissional

> Este resumo foi construído exclusivamente a partir de evidências encontradas em arquivos reais de projetos (código, scripts, planilhas, histórico de Git) e das informações fornecidas diretamente por você. Nenhuma afirmação aqui é genérica ou de "modelo de currículo" — cada frase está amarrada a um projeto específico documentado na pasta `projetos/`.

## Especialidade

**Técnica em Banco de Dados**, atualmente estagiária de dados na Thomson Reuters, atuando em projetos de migração e mapeamento de bases de dados. Utiliza SQL Server no desenvolvimento de scripts e no apoio a execuções de pipelines, além de acompanhar processos no Azure Data Factory — analisando logs e ajustando erros até a entrega final com dados consistentes. Tem experiência consolidada em migração de dados entre sistemas concorrentes (Astrea, Projuris, CPJ, CP-PRO) e o Legal One, incluindo consultoria recorrente em banco de dados e desenvolvimento de ferramentas próprias de automação.

## Tipos de problema que resolve

- **Migração de dados entre sistemas com modelos incompatíveis**, incluindo extração direta em banco de dados de origem, tratamento, mapeamento e carga em um pipeline documentado e versionado (ver [migração de banco a banco](projetos/migracoes/migracao-banco-a-banco-concorrentes.md)).
- **Ajustes seguros em banco de dados de produção**, com um padrão próprio de diagnóstico → aprovação → execução → rollback, aplicado de forma consistente em pelo menos 23 casos de clientes documentados (ver [consultoria recorrente](projetos/consultoria_recorrente/consultoria-recorrente-legal-one.md)).
- **Eliminação de gargalos operacionais por meio de automação própria**, como no caso do Unificador de Contatos — uma ferramenta de ideia e autoria própria que elimina a dependência de outro time para resolver duplicidade de contatos (ver [Unificador de Contatos](projetos/saneamento_contatos/unificador-de-contatos.md)).
- **Qualidade e validação de dados antes e depois da carga**, com scripts de deduplicação, comparação de volumetria e validação estrutural de planilhas (ver [automações SQL/VBA](projetos/automacoes_sql_vba/automacoes-sql-vba.md) e [automações Python](projetos/automacoes_python/automacoes-produtividade-python.md)).

## Principais tecnologias

| Tecnologia | Onde é usada |
|---|---|
| SQL Server (T-SQL) | Extração, transformação, carga, consultoria recorrente, deduplicação |
| Azure Data Factory | Acompanhamento de pipelines, análise de logs e ajuste de erros até a entrega final (atuação atual na Thomson Reuters) |
| Python | Automação de interface (Selenium), importação de dados, extração MySQL, comparação de volumetria |
| Selenium | Ferramenta de saneamento de contatos duplicados |
| Tkinter | Interface gráfica da ferramenta de saneamento de contatos |
| VBA | Validação estrutural de planilhas de migração |
| Git/GitHub | Versionamento colaborativo do pipeline de migração por planilha padrão (X-One), com histórico de 92 commits próprios ao longo de ~5 meses, em um repositório mantido por 18 pessoas |
| Excel | Planilhas de mapeamento "De/Para", relatórios de validação e logs de execução |
| PowerShell | Fracionamento de scripts SQL de grande volume |

## Diferenciais

- **Iniciativa de produto**: identificação autônoma de um problema operacional real (duplicidade de contatos) e construção de uma solução completa — da ideia ao treinamento de outros usuários — sem que isso fosse uma demanda formal.
- **Disciplina de segurança operacional**: aplicação sistemática de um padrão de "script de diagnóstico + aprovação formal + execução + rollback" em toda intervenção direta em banco de produção, reduzindo risco em um contexto de dados sensíveis.
- **Trabalho colaborativo sustentado**: contribuição consistente (92 commits em ~5 meses) em um repositório de equipe com 18 colaboradores, mantendo os mesmos padrões já estabelecidos pelo grupo.
- **Evolução técnica visível**: progressão documentada de uma automação frágil por coordenadas de tela (`pyautogui`) para uma automação robusta baseada em seleção real de elementos (Selenium) — evidência de aprendizado e maturação técnica ao longo do tempo.
- **Pragmatismo honesto**: escolha consciente de soluções que resolvem o problema real dentro das restrições existentes, mesmo quando não são a arquitetura tecnicamente mais sofisticada.

## Impacto operacional

- **Mais de 30 clientes atendidos no total**, somando migração de concorrentes, consultoria recorrente e saneamento de dados.
- Participação ativa em migrações a partir de pelo menos 4 plataformas concorrentes distintas, com mais de 25 clientes atendidos via parceiros de revenda nesse subconjunto específico.
- Atendimento de consultoria recorrente a pelo menos 23 clientes já migrados, sempre com plano de reversão documentado.
- Eliminação, para o cenário de duplicidade de contatos, de um ciclo de extração/homologação/tratamento/SLA que antes dependia de outro time — substituído por uma ação direta do próprio consultor.

## Competências técnicas e comportamentais

Ver detalhamento completo, com evidências e notas por competência, em [matriz_de_competencias.md](matriz_de_competencias.md).

**Resumo:**
- Técnicas: SQL Server, modelagem/transformação de dados, Python, Selenium, VBA, Git, documentação técnica.
- Comportamentais: autonomia, iniciativa, gestão de risco, comunicação técnica, colaboração em equipe, foco em produtividade.
