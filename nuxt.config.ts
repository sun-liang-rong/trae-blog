// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  imports: {
    autoImport: true
  },
  css: ['~/assets/css/global.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01'
})
