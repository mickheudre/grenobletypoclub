module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "app.vue"
  ],
  theme: {
    fontFamily: {
      lustucrust : ['lustucrust'],
      digitale: ['Digitale'],
      sans: ['Arial']
   },
   colors: {
    green: '#39B615',
    white: "#FFFFFF"
   },
   extend: {
    width: {
      '112': '28rem',
      '128': '32rem',
    },
    height: {
      '152': '38rem',
    }
   }
  },
  plugins: [],
};