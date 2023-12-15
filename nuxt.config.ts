export default defineNuxtConfig({
    modules: [ "nuxt-particles", "@vueuse/nuxt" ],
    css: [ "~/assets/css/main.css" ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
