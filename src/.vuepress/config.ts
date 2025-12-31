import { defineUserConfig } from "vuepress";
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

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

  plugins: [
    docsearchPlugin({
      // options
    }),
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
