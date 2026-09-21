import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Destino: https://iamed.cc/mcps/radar-papers
export default defineConfig({
  site: "https://iamed.cc",
  base: "/mcps/radar-papers",
  output: "static",
  integrations: [tailwind()],
});
