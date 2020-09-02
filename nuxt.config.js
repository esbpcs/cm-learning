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
  },
  privateRuntimeConfig: {},
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
    dsn:
      'https://0a4d49b8d1644ec78a00d21544e031f9@o292739.ingest.sentry.io/5393079',
  },
  oneSignal: {
    init: {
      appId: '83dc5344-5310-4861-89b6-feb11cff9617',
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
    meta: 'false',
    manifest: {
      name: 'CM Online Learning',
      lang: 'en',
      short_name: 'CM-Learn',
      description: 'CM Online Learning PWA App',
      display: 'fullscreen',
    },
    workbox: {
      importScripts: ['firebase-auth-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: true,
    },
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyCpzxozeU3RqgPrR62xadKPbWmVSrOSOro',
      authDomain: 'cm-learning-next.firebaseapp.com',
      databaseURL: 'https://cm-learning-next.firebaseio.com',
      projectId: 'cm-learning-next',
      storageBucket: 'cm-learning-next.appspot.com',
      messagingSenderId: '982447278041',
      appId: '1:982447278041:web:528c83480bd073955bfbc8',
      measurementId: 'G-6XB3HG8F84',
    },
    services: {
      auth: {
        ssr: true,
      },
      realtimeDb: true,
      performance: true,
      analytics: true,
    },
  },
}
