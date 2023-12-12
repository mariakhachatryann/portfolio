export default defineNuxtConfig({
    modules: [ "nuxt-particles" ],
    css: [ "~/assets/css/main.css" ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
