// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
    ],
    css: ['vuetify/lib/styles/main.sass', '@/assets/styles/main.scss'],
    ssr: false,
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/variables.scss";',
                },
            },
        },
    },
})