export default defineNuxtConfig({
    modules: [ "nuxt-particles", "@vueuse/nuxt", "nuxt-swiper" ],
    css: [ "~/assets/css/main.css" ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
