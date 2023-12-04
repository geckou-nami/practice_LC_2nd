// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      title  : 'practice_LC_2nd',
      meta   : [
        { name: 'theme-color', content: '#DF237E' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { property: 'og:image', content: '/ogp.png' },
        { property: 'og:type', content: 'article' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.webp', sizes: '180x180' },
        {
          rel : "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons+Round",
        },
      ],
    },
  },
  components: {
    global: true,
    dirs  : ['~/components'],
  },
  css: [
    '@acab/reset.css',
    '~/assets/scss/base.scss',
  ],
})
