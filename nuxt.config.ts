import { resolve } from 'path'
import { defineNuxtConfig } from 'nuxt'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
// import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  target: 'static',
  alias: {
    'element-plus/dist/index.css': resolve(
      __dirname,
      './node_modules/element-plus/dist/index.css'
    ),
    'element-plus': resolve(
      __dirname,
      './node_modules/element-plus/dist/index.full.js'
    ),
  },

  // app
  app: {
    head: {
      title: 'Nuxt 3 Awesome Starter',
      titleTemplate: '%s - Nuxt 3 Awesome Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Awesome Starter',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // css
  css: [
    // 'virtual:windi-base.css',
    // 'virtual:windi-components.css',
    // 'virtual:windi-utilities.css',
    // '~/assets/sass/vendor.scss',
    '~/assets/sass/app.scss',
  ],

  // plugins
  plugins: ['~/plugins/navbar.ts', '~/plugins/ui.ts'],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },
  //  

  // modules
  modules: [
    'unplugin-icons/nuxt',
    '@intlify/nuxt3',
    // '@pinia/nuxt',
    // '@nuxt/content',
    // '@vueuse/nuxt',
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
    // ["@nuxtjs/axios", { proxyHeaders: false }],
    // '@nuxtjs/auth-next'
  ],
  // axios: {
  //   proxy: true
  // },
  // proxy: {
  //   '/api': 'http://localhost:8888/api/v1',
  // },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.access_token',
          global: true,
          // required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/profile', method: 'get' }
        }
      }
    }
  },

  // experimental features
  experimental: {
    reactivityTransform: false,
  },

  // auto import components
  components: true,

  // vite plugins
  // vite: {
  //   optimizeDeps: {
  //     include: ['element-plus'],
  //   },
  //   plugins: [
  //     UnpluginComponentsVite({
  //       dts: true,
  //       resolvers: [
  //         IconsResolver({
  //           prefix: 'Icon',
  //         }),
  //       ],
  //     }),
  //   ],
  // },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'id', 'ja', 'ko'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // windicss
  // windicss: {
  //   analyze: {
  //     analysis: {
  //       interpretUtilities: false,
  //     },
  //     server: {
  //       port: 4000,
  //       open: false,
  //     },
  //   },
  //   scan: true,
  // },

  // content
  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: 'github-dark',
    },
  },
})
