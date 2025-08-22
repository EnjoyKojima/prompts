// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nitro-cloudflare-dev', '@nuxt/content', '@nuxt/eslint', '@nuxt/ui'],
  devtools: { enabled: true },

  content: {
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
  },
  compatibilityDate: '2025-07-15',

  nitro: {
    preset: 'cloudflare_module',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
