/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            screens: {
                md: "790px",
                desktop: "1130px",
                mini: { "max": "420px" }
            },
            colors: {
                "primary-color": "#0DFC4B",
                "light-green": "rgba(142, 255, 139, 0.5)",
                "dark-green": "#8EFF8B",
                "light-gray": "#AEAEAE",
            },
        },
    },
    plugins: [],
}

