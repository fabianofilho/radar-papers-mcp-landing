// Constantes de link e marca, centralizadas.
// NOTA: o repo radar-papers-mcp existe, mas e PRIVADO. Enquanto estiver privado,
// este link vai 404 para visitantes sem acesso.
export const PROJECT = "radar-papers-mcp";
export const GITHUB_URL = "https://github.com/fabianofilho/radar-papers-mcp";
export const IAMED_URL = "https://iamed.cc";
export const LICENSE = "MIT";

// Familia de MCPs open source da IA.med. SELF_SLUG marca o atual (some do rodape).
export const SELF_SLUG = "radar-papers";
export const FAMILY = [
  { slug: "anvisa", nome: "anvisa-mcp", url: "https://mcp.iamed.cc/anvisa", desc: "Registro sanitário da Anvisa" },
  { slug: "radar-cfm", nome: "radar-cfm-mcp", url: "https://mcp.iamed.cc/radar-cfm", desc: "Resoluções do CFM" },
  { slug: "pcdt", nome: "protocolos-pcdt-mcp", url: "https://mcp.iamed.cc/pcdt", desc: "PCDTs do Ministério da Saúde" },
  { slug: "raciocinio-br", nome: "raciocinio-br-mcp", url: "https://mcp.iamed.cc/raciocinio-br", desc: "Raciocínio clínico avaliado (experimento)" },
  { slug: "revisor-notas", nome: "revisor-notas-mcp", url: "https://mcp.iamed.cc/revisor-notas", desc: "Revisão de notas SOAP" },
  { slug: "radar-papers", nome: "radar-papers-mcp", url: "https://mcp.iamed.cc/radar-papers", desc: "Monitor de PubMed e medRxiv" },
];
