import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://pisshammy.github.io/ANT-104-Coevolution-Final",
  base: "/ANT-104-Coevolution-Final",
  integrations: [tailwind()],
});
