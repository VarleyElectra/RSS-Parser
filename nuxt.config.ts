// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
    ],
    css: ['vuetify/lib/styles/main.sass'],
    ssr: false,
    build: {
        transpile: ['vuetify'],
    },
    app: {
        baseURL: process.env.NODE_ENV === 'production'
            ? '/RSS-Parser/'
            : '/',
        buildAssetsDir: '/RSS-Parser/',
    },
})