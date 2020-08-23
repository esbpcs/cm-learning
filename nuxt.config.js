export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'CM Learning',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    [
      '@nuxtjs/tailwindcss',
      {
        future: {
          removeDeprecatedGapUtilities: true,
        },
      },
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: 'G-KBNSC52J5G',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    '@nuxtjs/gtm',
    'nuxt-i18n',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
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
  sentry: {
    dsn:
      'https://0a4d49b8d1644ec78a00d21544e031f9@o292739.ingest.sentry.io/5393079', // Project DSN
    config: {}, // Additional config
  },
  gtm: {
    id: 'G-KBNSC52J5G.',
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
