export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: 'CM Learning',
    meta: [
      { charset: 'UTF-8' },
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
        href: '/favicon.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/apple-touch.png',
      },
    ],
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    FIRE_ENV: process.env.FIRE_ENV,
  },
  privateRuntimeConfig: {
    CODECOV_TOKEN: process.env.CODECOV_TOKEN,
    SITEKEY: process.env.SITEKEY,
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    '@nuxtjs/sentry',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
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
    dsn: process.env.DSN,
  },
  oneSignal: {
    init: {
      appId: process.env.ONESIGNAL_API,
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true,
      },
    },
  },
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    vue18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          login: 'Sign in',
          register: 'Sign up',
        },
        id: {
          login: 'Masuk',
          register: 'Daftar',
        },
      },
    },
  },
  pwa: {
    icon: 'false',
    meta: {
      title: 'CM Learning App',
      author: 'CM Media Team',
    },
    manifest: {
      name: 'CM Online Learning',
      lang: 'en',
      short_name: 'CM-Learn',
      description: 'CM Online Learning PWA App',
      display: 'fullscreen',
    },
  },
  firebase: {
    config: {
      prod: {
        apiKey: process.env.FIREBASE_API_PROD,
        authDomain: process.env.FIREBASE_AUTH_PROD,
        databaseURL: process.env.FIREBASE_DATABASE_PROD,
        projectId: process.env.FIREBASE_PROJECT_PROD,
        storageBucket: process.env.FIREBASE_BUCKET_PROD,
        messagingSenderId: process.env.FIREBASE_MSG_SENDER_PROD,
        appId: process.env.FIREBASE_APPID_PROD,
        measurementId: process.env.FIREBASE_ANALYTICS_PROD,
      },
      dev: {
        apiKey: process.env.FIREBASE_API_DEV,
        authDomain: process.env.FIREBASE_AUTH_DEV,
        databaseURL: process.env.FIREBASE_DATABASE_DEV,
        projectId: process.env.FIREBASE_PROJECT_DEV,
        storageBucket: process.env.FIREBASE_BUCKET_DEV,
        messagingSenderId: process.env.FIREBASE_MSG_SENDER_DEV,
        appId: process.env.FIREBASE_APPID_DEV,
        measurementId: process.env.FIREBASE_ANALYTICS_DEV,
      },
    },
    services: {
      auth: {
        ssr: true,
      },
      realtimeDb: true,
      firestore: true,
      performance: true,
      analytics: true,
    },
  },
}
