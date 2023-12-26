export default defineNuxtConfig({
    modules: [ "nuxt-particles", "@vueuse/nuxt", "@nuxt/image" ],
    css: [ "~/assets/css/main.css" ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    image: {
        dir: 'assets'
    }
})
