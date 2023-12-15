import tourScreen from "~/assets/projects/tour-screen.png";
import quizScreen from "~/assets/projects/quiz-screen.png";
import weatherScreen from "~/assets/projects/weather-screen.png";
import editorScreen from "~/assets/projects/editor-screen.png";

const projects = [
    {
        id: 1,
        title: "Quiz Game",
        description: "A quiz game to test your knowledge in various fields",
        technologies: "Javascript, Vue, Vuex, Vue-Router Tailwind CSS",
        src: quizScreen,
        demo: "https://quiz-81t079x8n-mariakhachatryann.vercel.app/#/main",
        code: "https://github.com/mariakhachatryann/quiz",
    },
    {
        id: 2,
        title: "Tour Agency",
        description: "Tour Agency website created with Nuxt 3",
        technologies: "Javascript, Vue, Nuxt, Tailwind CSS",
        src: tourScreen,
        demo: "https://tour-page-lovat.vercel.app/",
        code: "https://github.com/mariakhachatryann/tour-page",
    },
    {
        id: 3,
        title: "Weather Forecast",
        description: "Weather forecasr website created with Vue",
        technologies: "Javascript, Vue, Vuex",
        src: weatherScreen,
        demo: "https://weather-forecast-sigma-ashen.vercel.app/",
        code: "https://github.com/mariakhachatryann/weather-forecast/",
    },
    {
        id: 4,
        title: "Image Editor",
        description: "Image editor to edit size, colors and other",
        technologies: "Pure Javascript",
        src: editorScreen,
        demo: "https://editor-lemon-rho.vercel.app/",
        code: "https://github.com/mariakhachatryann/editor/",
    },
];

export default projects