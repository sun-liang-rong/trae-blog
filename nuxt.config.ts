// import { visualizer } from 'rollup-plugin-visualizer';
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      // 全局页面标题
      title: '孙孙博客-神奇程序猿历险记',
      // 全局内联元数据
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '孙孙博客-孙孙博客是一个面向知识分享社区。自创建以来，孙孙博客一直致力并专注于打造一个纯净的技术交流社区，推动互联网分享知识，从而让更多开发者从   中受益。孙孙博客的使命是用代码改变世界。' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      // 全局内联样式
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      // 全局内联脚本 (已移除自定义主题切换脚本，改用 @nuxtjs/color-mode)
      script: []
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/color-mode', '@nuxtjs/sitemap'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: '__nuxt_color_mode_script', // avoid flash of light theme
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode', // key used for localStorage
    dataValue: 'theme' // activate data-theme in <html> tag
  },
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
        target: 'http://sunsunblog.top:3001',
        changeOrigin: true,
        prependPath: true
      }
    }
  },
  ssr: true,
  vite: {
    build: {
      rollupOptions: {
        plugins: [
          // visualizer({
          //   open: true, // Automatically open the report in the browser
          //   filename: '.nuxt/stats.html', // Output file path
          //   gzipSize: true,
          //   brotliSize: true,
          // }),
          // ViteImageOptimizer({
          //   png: {
          //     // https://sharp.pixelplumbing.com/api-output#png
          //     quality: 100,
          //   },
          //   jpeg: {
          //     // https://sharp.pixelplumbing.com/api-output#jpeg
          //     quality: 100,
          //   },
          //   jpg: {
          //     // https://sharp.pixelplumbing.com/api-output#jpeg
          //     quality: 100,
          //   },
          //   tiff: {
          //     // https://sharp.pixelplumbing.com/api-output#tiff
          //     quality: 100,
          //   },
          //   // gif does not support lossless compression
          //   // https://sharp.pixelplumbing.com/api-output#gif
          //   gif: {},
          //   webp: {
          //     // https://sharp.pixelplumbing.com/api-output#webp
          //     lossless: true,
          //   },
          //   avif: {
          //     // https://sharp.pixelplumbing.com/api-output#avif
          //     lossless: true,
          //   },
          //   cache: false,
          //   cacheLocation: undefined,
          // })
        ]
      }
    }
  }
})