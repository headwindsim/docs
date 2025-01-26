import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Headwind Simulations Documentation",
      description: "A docs demo for vuepress-theme-hope",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
