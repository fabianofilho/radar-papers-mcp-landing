# radar-papers-mcp-landing

Landing page do
[`radar-papers-mcp`](https://github.com/fabianofilho/radar-papers-mcp), um
servidor MCP que monitora PubMed e medRxiv por tópicos e resume os papers com um
LLM local, numa base local deduplicada por DOI. Um projeto
[IA.med](https://iamed.cc), da mesma família do `anvisa-mcp`, `radar-cfm-mcp`,
`protocolos-pcdt-mcp`, `raciocinio-br-mcp` e `revisor-notas-mcp`.

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

Abre em `http://localhost:4321/radar-papers` (o `base` é `/radar-papers`).

## Build

```bash
npm run build
npm run preview
```

## Deploy

Destino pretendido: `https://mcp.iamed.cc/radar-papers`. O deploy na Vercel e o
domínio são configurados manualmente.

## Notas

- O repositório do projeto `radar-papers-mcp` existe, mas é privado. Os links de
  GitHub vão falhar para visitantes sem acesso até ele ser tornado público.
- O exemplo de `resumir_paper` é um retorno real do README do projeto.
- O resumo sai do abstract e não é conferido contra ele; serve para triagem, não
  substitui a leitura. O link original vem em toda resposta.

## Licença

MIT (mesma do projeto).
