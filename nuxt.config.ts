// https://v3.nuxtjs.org/api/configuration/nuxt.config
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
  runtimeConfig: {

    apiSecret: process.env.NOTION_TOKEN,
  },
});