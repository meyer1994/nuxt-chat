// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  // Gets rid of warning message
  // https://stackoverflow.com/a/75435365
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["vue-advanced-chat"].includes(tag),
    },
  },
});
