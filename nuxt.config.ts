// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || 'http://127.0.0.1:8000/api/',
    }
  }
})
