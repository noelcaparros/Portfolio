import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "ca"],
    routing: {
      prefixDefaultLocale: false, // en: /, es: /es, ca: /ca
    },
  },
  site: "https://noelcaparros.github.io",
  base: "/portfolio",
});
