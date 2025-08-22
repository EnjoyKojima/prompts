// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/ui'],
  eslint: {
    config: {
      stylistic: true
    }
  },
  content: {
    highlight: {
      theme: 'github-light'
    }
  }
})