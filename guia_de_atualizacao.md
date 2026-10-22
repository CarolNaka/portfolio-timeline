# Guia de Atualização do Portfólio

## Como adicionar um novo projeto

1. Escolha a subpasta correta dentro de `projetos/` (ou crie uma nova categoria, se nenhuma existente se aplicar).
2. Copie o conteúdo de `templates/template_projeto.md` para um novo arquivo `nome-do-projeto.md`.
3. Preencha todas as seções — não deixe nenhuma em branco; use "Evidência insuficiente" ou "A validar" quando aplicável.
4. Crie a versão em inglês `nome-do-projeto.en.md` (tradução fiel, não resumida).
5. Rode a checklist de confidencialidade no final do template antes de salvar.
6. Adicione uma linha para o novo projeto na tabela de `projetos/README.md`.
7. Se o projeto trouxer métricas novas, adicione-as em `metricas/metricas_e_indicadores.md`, classificando corretamente.
8. Se o projeto trouxer evidência de competências novas ou reforçar competências existentes, siga o passo abaixo.

## Como atualizar competências

1. Abra `matriz_de_competencias.md` (e a versão `.en.md`).
2. Localize a competência afetada pela nova evidência.
3. Adicione a evidência ao campo correspondente.
4. Reavalie a nota **somente se a evidência justificar**, explicando a mudança na justificativa.
5. Se for uma competência nova, use `templates/template_nova_experiencia.md` como guia de formato.
6. No site, atualize também os arrays `skillsTecnicas`/`skillsSoft` em `site/script.js` — cada item tem `score` (1 a 5 estrelas) e uma nota curta (`notePt`/`noteEn`) que deve ser uma evidência concreta, não uma frase genérica (ex.: "92 commits em repositório de migração", não "boa experiência com Git").

## Como atualizar a linha do tempo (trajetória)

1. Abra `site/script.js` e localize o array `timeline`.
2. Cada marco é um objeto com `date` (ex.: `"Mar 2025"`), `type` (`"edu"` para formação ou `"work"` para carreira — define a etiqueta colorida do marco), `pt` (descrição em português) e `en` (descrição em inglês).
3. Mantenha a lista em ordem cronológica — a renderização não reordena automaticamente.
4. Não é necessário mexer no HTML: a lista é renderizada dinamicamente em `#timeline-list` na home.
5. A linha do tempo é **vertical e alternada** (cartões à esquerda e à direita de um trilho central, que se preenche conforme a rolagem; em telas estreitas vira coluna única). Basta adicionar itens ao array — o último item recebe automaticamente o marcador tracejado de "previsto/em andamento".
6. Os textos da seção Sobre (`sobre.p1`, `sobre.p2`, `sobre.p3` em `i18n`) aceitam HTML limitado para destaques: envolva números e termos-chave em `<em class="hl">…</em>`. Esses elementos têm o atributo `data-i18n-html` no `index.html`; as demais chaves são texto puro.
7. A lista "Stack principal" (seção Sobre) vem do array `stack` em `site/script.js` — grupos com nome em `pt`/`en` e uma lista `items` de tecnologias. Cite apenas tecnologias já documentadas nos projetos.

## Como incluir novas métricas

1. Toda métrica precisa de uma classificação: **comprovada** (por arquivo ou confirmação direta sua), **estimada** ou **pendente de validação**.
2. Adicione a métrica na tabela de `metricas/metricas_e_indicadores.md`.
3. Se a métrica ainda não tem número confiável, adicione-a em `metricas/dados_a_validar.md` em vez de inventar um valor.
4. Nunca promova uma métrica de "estimada" para "comprovada" sem uma fonte real e verificável.

## Como manter informações confidenciais protegidas

- Antes de adicionar qualquer conteúdo novo, pergunte: "isso identifica um cliente, uma pessoa, ou expõe uma credencial?" Se sim, anonimize ou remova.
- Nunca copie e cole trechos de e-mail, planilha com dados reais, ou código com credenciais hardcoded diretamente para este repositório.
- Ao citar um exemplo de código, sempre use dados fictícios ou genéricos (ex.: "Cliente A", "usuario_exemplo", "senha_exemplo").
- Revise o arquivo `.gitignore` (ver `guia_de_publicacao_github.md`) sempre que adicionar um novo tipo de arquivo ao repositório.

## Como adicionar uma nova página de projeto no site

Cada projeto tem uma página própria em `site/projetos/`, com conteúdo bilíngue dentro do mesmo arquivo HTML (sem precisar de arquivos separados por idioma):

1. Copie um arquivo existente em `site/projetos/` (ex.: `unificador-de-contatos.html`) como ponto de partida.
2. Mantenha o cabeçalho (`<header class="topbar">`) e o rodapé (`<footer class="footer">`) idênticos aos outros — eles usam as mesmas chaves `data-i18n` já traduzidas em `script.js`.
3. O conteúdo principal fica dentro de dois blocos: `<div data-lang-block="pt">...</div>` e `<div data-lang-block="en">...</div>`. O script alterna automaticamente qual bloco aparece conforme o idioma selecionado — edite o texto diretamente dentro de cada bloco, sem precisar mexer em `script.js` para isso.
4. Use as classes já definidas para manter o visual consistente: `.chip-list`/`.chip` para listas de tecnologias, `.impact-table` para a tabela de métricas, `pre.flow` para o diagrama do processo técnico, e `.status-badge` para o status de publicação.
5. Adicione o link da nova página ao array `projects` em `site/script.js` (ou ao array específico da experiência à qual o projeto pertence).
6. Crie também a documentação Markdown correspondente em `projetos/` (pasta na raiz do repositório), seguindo `templates/template_projeto.md`, para manter a versão "fonte" do conteúdo fora do site.

## Como adicionar uma nova página de experiência

Quando uma nova experiência profissional relevante (além de Legal One) precisar de sua própria página no site:

1. Copie `site/experiencias/legal-one.html` para um novo arquivo, ex.: `site/experiencias/nome-da-experiencia.html`.
2. Ajuste o título da aba (`<title>`), o `eyebrow`/título da seção hero e os textos específicos da experiência.
3. Adicione as novas chaves de tradução usadas por essa página em `site/script.js`, dentro do objeto `i18n` (nos dois idiomas, `pt` e `en`).
4. Se a experiência tiver projetos próprios, crie as páginas correspondentes em `site/projetos/` (ver seção acima) e aponte para elas no array `projects` em `script.js`.
5. Adicione um novo card em `site/index.html`, na seção `#experiencias`, apontando para a nova página (substitua o card "Próxima experiência" ou adicione um novo).
6. Crie a documentação Markdown correspondente em `projetos/` (ou em uma nova pasta de nível superior, se a experiência não for relacionada a projetos técnicos), seguindo `templates/template_projeto.md`.

## Como testar o site localmente

1. Abra o arquivo `site/index.html` diretamente no navegador (duplo clique ou arrastar para a janela do navegador).
2. Não é necessário instalar nada — o site não depende de servidor, build ou bibliotecas externas.
3. Para testar mudanças de conteúdo, edite os arquivos `site/index.html`, `site/experiencias/*.html`, `site/projetos/*.html`, `site/style.css` ou `site/script.js` diretamente e recarregue a página no navegador.
4. Teste o alternador de idioma (PT/EN) em todas as páginas — na home, confira as duas listas de skills (Técnicas e Soft Skills); nas páginas de projeto, confira se o conteúdo completo troca de idioma corretamente.
5. Teste a navegação entre a página inicial, a página de experiência e cada página de projeto (links e botões "Voltar").

## Como atualizar o repositório no GitHub

Veja o passo a passo completo em [guia_de_publicacao_github.md](guia_de_publicacao_github.md). Resumidamente, após editar os arquivos localmente:

```powershell
git add <arquivos específicos que você alterou>
git commit -m "Descrição curta da atualização"
git push
```

Nunca use `git add .` sem antes revisar com `git status` o que será incluído, para evitar subir arquivo sensível por engano.
