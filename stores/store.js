import { defineStore } from "pinia";

export const usePortfolioStore = defineStore("portfolio", () => {
    const projects = ref([
        {
            id: 1,
            title: "Quiz Game",
            description: "A quiz game to test your knowledge in various fields",
            technologies: "Javascript, Vue, Vuex, Vue-Router Tailwind CSS",
            src: "/projects/quiz-screen.png",
            demo: "https://quiz-81t079x8n-mariakhachatryann.vercel.app/#/main",
            code: "https://github.com/mariakhachatryann/quiz",
        },
        {
            id: 2,
            title: "Tour Agency",
            description: "Tour Agency website created with Nuxt 3",
            technologies: "Javascript, Vue, Nuxt, Tailwind CSS",
            src: "/projects/tour-screen.png",
            demo: "https://tour-page-lovat.vercel.app/",
            code: "https://github.com/mariakhachatryann/tour-page",
        },
        {
            id: 3,
            title: "Weather Forecast",
            description: "Weather forecasr website created with Vue",
            technologies: "Javascript, Vue, Vuex",
            src: "/projects/weather-screen.png",
            demo: "https://weather-forecast-sigma-ashen.vercel.app/",
            code: "https://github.com/mariakhachatryann/weather-forecast/",
        },
        {
            id: 4,
            title: "Image Editor",
            description: "Image editor to edit size, colors and other",
            technologies: "Pure Javascript",
            src: "/projects/editor-screen.png",
            demo: "https://editor-lemon-rho.vercel.app/",
            code: "https://github.com/mariakhachatryann/editor/",
        }
    ]);

    const technologies = ref([
        {
            id: 1,
            src: "logo/html.png",
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: "logo/css.png",
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: "logo/javascript.png",
            title: "JavaScript",
            style: "shadow-yellow-400",
        },
        {
            id: 4,
            src: "logo/ts.png",
            title: "TypeScript",
            style: "shadow-blue-400",
        },
        {
            id: 5,
            src: "logo/vue.png",
            title: "Vue",
            style: "shadow-emerald-500",
        },
        {
            id: 6,
            src: "logo/nuxt.svg",
            title: "Nuxt",
            style: "shadow-emerald-700",
        },
        {
            id: 7,
            src: "logo/tailwind.png",
            title: "Tailwind CSS",
            style: "shadow-cyan-700",
        },
        {
            id: 8,
            src: "logo/git.png",
            title: "Git",
            style: "shadow-orange-600",
        },
        {
            id: 9,
            src: "logo/github.png",
            title: "GitHub",
            style: "shadow-white",
        },
        {
            id: 10,
            src: "logo/npm.png",
            title: "NPM",
            style: "shadow-red-600"
        },
        {
            id: 11,
            src: "logo/pinia.svg",
            title: "Pinia",
            style: "shadow-yellow-600"
        },
        {
            id: 12,
            src: "logo/vite.png",
            title: "Vite",
            style: "shadow-purple-500"
        },
        {
            id: 13,
            src: "logo/json-logo.png",
            title: "JSON",
            style: "shadow-white"
        },
        {
            id: 14,
            src: "logo/sass.svg",
            title: "Sass",
            style: "shadow-pink-500"
        },
        {
            id: 15,
            src: "logo/vue.png",
            title: "VUEX",
            style: "shadow-emerald-500"
        },
        {
            id: 16,
            src: "logo/webpack.png",
            title: "Webpack",
            style: "shadow-blue-500"
        },
        {
            id: 17,
            src: "logo/gulp.jpg",
            title: "Gulp",
            style: "shadow-red-500"
        },
        {
            id: 18,
            src: "logo/axios.svg",
            title: "Axios",
            style: "shadow-blue-800"
        }
    ]);

    const certificates = ref([
        { id: 1, img: "certificates/html-cert.png" },
        { id: 2, img: "certificates/js-cert-sam.png" },
        { id: 3, img: "certificates/css-cert.png" },
        { id: 4, img: "certificates/git-cert.jpg", otherSize: true },
        { id: 5, img: "certificates/js-cert.png" },
        { id: 6, img: "certificates/responsive-cert.png" },
        { id: 7, img: "certificates/jsInter-cert.png" },
        { id: 8, img: "certificates/web-dev-cert.png" }
    ]);

    return { projects, technologies, certificates }
})