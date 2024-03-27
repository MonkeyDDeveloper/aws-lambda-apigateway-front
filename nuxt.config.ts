// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light'
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxt/ui'],
  i18n: {
    locales: ["en", "es"],
    strategy: "prefix",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
      redirectOn: "all",
      alwaysRedirect: true,
    },
    vueI18n: "./i18n.config.ts",
  },
  runtimeConfig: {
    public: {
      AWS_API_GATEWAY_URL: process.env.AWS_API_GATEWAY_URL,
    },
  },
})
