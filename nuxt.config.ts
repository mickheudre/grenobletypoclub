// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { useGetFonts } from "./composables/states";
export default defineNuxtConfig({
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
  css: [
    '@/assets/css/tailwind.css',
  ],
  // hooks: {
  //   async 'nitro:config' (nitroConfig) {
  //     if (nitroConfig.dev) { return }

  //     // fonts.value.forEach(element => {
  //       nitroConfig.prerender.routes.push("/typos/digitale")
  //     // });
  //   }
  // }
  nitro: {
    prerender: {
      routes: [
        '/',
        '/typos',
      '/typos/digitale',
      '/typos/ariale',
      '/typos/lustucrust'
      ]
    }
  }
  // generate: {
  //   routes: [
  //     '/',
  //     '/typos',
  //   '/typos/digitale',
  //   '/typos/ariale',
  //   '/typos/lustucrust'
  //   ]
  // }
});