// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: [
    [
      '~/modules/imageExtract.js',
      {
        baseUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/',
      }
    ]
  ],
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