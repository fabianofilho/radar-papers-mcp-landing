# radar-papers-mcp-landing

Landing page do
[`radar-papers-mcp`](https://github.com/fabianofilho/radar-papers-mcp), um
servidor MCP que monitora PubMed e medRxiv por tópicos e resume os papers com um
LLM local, numa base local deduplicada por DOI. Um projeto
[IA.med](https://iamed.cc), da mesma família do `anvisa-mcp`, `radar-cfm-mcp`,
`protocolos-pcdt-mcp`, `ans-mcp`, `raciocinio-br-mcp` e `revisor-notas-mcp`.
Cinco dos sete servidores da família são de código aberto; o `ans-mcp` e o
`raciocinio-br-mcp` são privados.

Página estática, sem backend e sem coleta de dados de visitante.

## Stack

- [Astro](https://astro.build) (saída estática)
- [Tailwind CSS](https://tailwindcss.com) via `@astrojs/tailwind`
- Realce de código com Shiki (build-time); JavaScript mínimo (só o botão de copiar)

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321/mcps/radar-papers` (o `base` é `/mcps/radar-papers`).

## Build

```bash
npm run build
npm run preview
```

## Publicação

A página vive em `https://iamed.cc/mcps/radar-papers`. Este repo não tem deploy
próprio (sem workflow nem `vercel.json`): o `dist/` do `npm run build` é copiado para
`mcps/radar-papers/` no repo do site (`Medicina-IA/medicina-ia.github.io`), e o push
na `main` de lá publica na Vercel. Mudança aqui só vai ao ar depois dessa cópia.

## Notas

- O repositório do projeto `radar-papers-mcp` é público, então os links de GitHub funcionam.
- O exemplo de `resumir_paper` é um retorno real do README do projeto (a `chave` é
  ilustrativa). O de `buscar_papers_novos` é a saída real da v0.1.0 com `limite=1`,
  rodada numa cópia da base local.
- O MCP é só local (stdio) e usa modelo local. A página não aponta para nenhum
  serviço hospedado nem anuncia conector: o modo conector HTTP está no PR #2 do
  servidor, esperando merge (estado de 12/10/2026).
- Números do bloco "Estado conferido em 12/10/2026" (ComoRodar.astro): 280 papers,
  1 resumo, 6 MB e 100 testes, lidos em 12/10/2026 na base do autor. Número novo
  entra sempre com a data em que foi lido.
- Licença MIT, a única da família; os outros servidores são Apache-2.0.
- O resumo sai do abstract e não é conferido contra ele; serve para triagem, não
  substitui a leitura. O link original vem em toda resposta.

## Licença

MIT (mesma do projeto).
