// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  imports: {
    autoImport: true
  },
  css: ['~/assets/css/global.css', '~/assets/css/code.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        prependPath: true
      }
    }
  }
})