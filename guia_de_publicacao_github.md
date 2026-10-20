# Guia de Publicação no GitHub

## 1. Como iniciar um repositório Git

Dentro da pasta `portifolio_carol`:

```powershell
cd C:\Repos\portifolio_carol
git init
git branch -M main
```

## 2. Como revisar arquivos antes do commit

Sempre revise o que será enviado antes de confirmar:

```powershell
git status
git diff
```

Leia cada arquivo listado como "novo" ou "modificado" e pergunte: isso contém nome de cliente, credencial, ou dado real de produção? Se sim, remova ou anonimize antes de prosseguir.

## 3. Como evitar publicar arquivos confidenciais

- Nunca adicione arquivos de dados reais (`.xlsx`, `.csv`, `.sql` com dados de produção) a este repositório — o portfólio deve conter apenas documentação e exemplos genéricos.
- Nunca inclua arquivos `.env`, arquivos de configuração com senha, ou cópias de scripts de produção com credenciais.
- Use `git status` antes de cada commit para conferir a lista completa de arquivos a serem enviados.
- Em caso de dúvida sobre um arquivo específico, não o inclua — é sempre mais seguro perguntar depois do que remover um dado sensível já publicado.

## 4. Como criar um `.gitignore`

Crie um arquivo `.gitignore` na raiz de `portifolio_carol` com, no mínimo:

```
# Dados sensíveis
*.env
*.xlsx
*.xls
*.csv
*.mdb
*.accdb

# Backups e exports de banco
*.bak
*.sql.bak

# Arquivos de ambiente/credenciais
config.py
secrets.*
credentials.*

# Arquivos temporários de sistema
Thumbs.db
.DS_Store
```

Ajuste a lista conforme novos tipos de arquivo forem usados no repositório. Se algum dia for necessário incluir uma planilha de exemplo (sem dados reais), adicione uma exceção explícita apenas para aquele arquivo específico.

## 5. Como publicar no GitHub Pages

1. Crie um repositório no GitHub (público, se a intenção é publicar o portfólio; privado, se for only para versionamento pessoal).
2. Conecte o repositório local ao remoto:
   ```powershell
   git remote add origin https://github.com/SEU_USUARIO/portifolio_carol.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**.
4. Em "Source", selecione a branch `main` e a pasta `/site` (ou mova o conteúdo de `site/` para a raiz de um branch `gh-pages`, dependendo de como você preferir organizar).
5. Salve. O GitHub Pages publicará o conteúdo de `site/index.html` em um endereço do tipo `https://SEU_USUARIO.github.io/portifolio_carol/`.

## 6. Como validar o site depois da publicação

- Acesse a URL gerada pelo GitHub Pages e confira se a página carrega corretamente.
- Teste o alternador de idioma (PT/EN).
- Verifique se todos os links para os documentos Markdown funcionam (o GitHub Pages não renderiza automaticamente `.md` como páginas HTML dentro do site estático — se quiser linkar os Markdown diretamente, aponte para a visualização do arquivo no próprio repositório do GitHub, não para o site).
- Confirme visualmente que nenhuma informação sensível aparece na página publicada.
- Peça para outra pessoa de confiança revisar o conteúdo publicado antes de divulgar amplamente o link.

## Checklist final antes de tornar o repositório público

- [ ] `.gitignore` criado e revisado.
- [ ] Nenhum arquivo de dado real (planilha, CSV, backup de banco) commitado.
- [ ] Nenhuma credencial em nenhum arquivo, em nenhum commit do histórico (se uma credencial foi commitada por engano, ela precisa ser removida do histórico do Git, não apenas do arquivo atual — nesse caso, procure orientação específica antes de tornar o repositório público).
- [ ] Nenhum nome de cliente em nenhum arquivo.
- [ ] Site testado localmente e no link publicado.
