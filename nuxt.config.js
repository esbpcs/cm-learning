export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: 'CM Learning',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      {
        author: ' CM Media Team',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/assets/placeholders/icons/favicon.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/assets/placeholders/icons/apple-touch.png',
      },
    ],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'G-KBNSC52J5G',
      },
    ],
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    '@nuxtjs/gtm',
    'nuxt-i18n',
  ],
  axios: {},
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          test: /\.pug$/,
          oneOf: [
            // this applies to `<template lang="pug">` in Vue components
            {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader'],
            },
            // this applies to pug imports inside JavaScript
            {
              use: ['raw-loader', 'pug-plain-loader'],
            },
          ],
        })
      }
    },
  },
  server: {
    // Set server port
    port: 8080,
  },
  tailwindcss: {
    future: {
      removeDeprecatedGapUtilities: true,
    },
  },
  browserslist: [
    'defaults',
    'maintained node versions',
    'not IE 11',
    'not IE_Mob 11',
    'last 2 versions',
  ],
  sentry: {
    dsn:
      'https://0a4d49b8d1644ec78a00d21544e031f9@o292739.ingest.sentry.io/5393079', // Project DSN
    config: {}, // Additional config
  },
  gtm: {
    id: 'GTM-KP79PZW',
  },
  oneSignal: {
    init: {
      appId: '83dc5344-5310-4861-89b6-feb11cff9617',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true,
      },
    },
    i18n: {
      locales: ['en', 'id'],
      defaultLocale: 'en',
      vue18n: {
        fallbackLocale: 'en',
        messages: {
          en: {
            login: 'Login',
            register: 'Register',
          },
          id: {
            login: 'Masuk',
            register: 'Daftar',
          },
        },
      },
    },
  },
}
