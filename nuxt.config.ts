// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Grenoble Typo Club',
      meta: [
        { name: 'description', content: "Bienvenue sur le site du Grenoble Typo Club. Nos fontes sont distribuées sous licence libre, bancales mais pleines d’amour, créées pour que chacun.e puisse s’en emparer." }
      ],
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'fr'
      }

    }},
  modules: [
    [
      '~/modules/imageExtract.js',
      {
        baseUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/',
      }
    ],
    '@nuxtjs/robots',
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