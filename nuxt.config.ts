// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss"],
    css: ["@/assets/css/fonts.css"],
     app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon/webp', href: '/img/test.webp' }
        // atau jika favicon kamu PNG:
        // { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
});
