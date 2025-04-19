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
      // 全局内联脚本
      // 注意：这是全局的，会在页面加载时执行
      // 如果你想在页面加载时执行一些自定义的 JavaScript 代码，你可以使用这个选项
      script: [
        {
          type: 'text/javascript',
          innerHTML: `
            (function() {
              console.log('全局内联脚本已加载！');
              // 这里写你的自定义代码
              let theme = localStorage.getItem('theme');
              if (!theme) {
                theme = '';
              } else {
                theme = theme === 'dark' ? 'dark' : 'light';
              }
                console.log('theme', theme)
              // 切换主题
              document.documentElement.setAttribute('data-theme', theme)
              localStorage.setItem('theme', theme)
            })();
          `,
          hid: 'custom-inline-script' // 唯一标识，防止重复
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
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
  },
  ssr: true
})