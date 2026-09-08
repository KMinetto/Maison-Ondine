// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      // URL de base de l'API backend (Symfony).
      // Surchargeable via la variable d'environnement NUXT_PUBLIC_API_BASE.
      apiBase: 'https://localhost'
    }
  }
})
