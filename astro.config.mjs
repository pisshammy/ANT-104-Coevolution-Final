import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
export default defineConfig({
  site: "https://pisshammy.github.io",
  base: "main",
  integrations: [tailwind()],
});
