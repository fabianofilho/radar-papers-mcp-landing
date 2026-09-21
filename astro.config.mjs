import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Destino: https://mcp.iamed.cc/radar-papers
export default defineConfig({
  site: "https://mcp.iamed.cc",
  base: "/radar-papers",
  output: "static",
  integrations: [tailwind()],
});
