// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@vueuse/nuxt"],
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    apiBaseUrl: process.env.NUXT_API_BASE_URL,
    public: {
      imageUrl: process.env.NUXT_PUBLIC_IMAGE_BASE_URL,
      backdropUrl: process.env.NUXT_PUBLIC_BACKDROP_IMAGE_BASE_URL,
    },
  },
});
