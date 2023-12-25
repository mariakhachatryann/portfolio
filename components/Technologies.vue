<template>
    <section name="Technologies" class="relative w-full md:h-screen h-unset">
        <div class="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <h2 class="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl">
                    Technologies
                </h2>
                <p class="py-6">These are the technologies I'm working with</p>
            </div>

            <div class="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 sm:px-0">
                <div v-for="tech in technologies.slice(0, sliceNum)" :key="tech.id" class="flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2
                    rounded-lg" :class="tech.style">
                    <img class="w-20 h-[112px] mx-auto py-2 md:py-4" :src="tech.src" alt="" />
                    <p class="mt-4 md:mt-2">{{ tech.title }}</p>
                </div>

            </div>
            <button @click="showAll" class="text-black font-semibold w-fit px-6 py-2 mx-auto rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer hover:scale-110 duration-300">
                {{ isShowed ? 'Show less' : 'Show more' }}
            </button>
        </div>
    </section>
</template>

<script setup>
import html from "~/assets/logo/html.png";
import css from "~/assets/logo/css.png";
import javascript from "~/assets/logo/javascript.png";
import typescript from "~/assets/logo/ts.png";
import vue from "~/assets/logo/vue.png";
import nuxt from "~/assets/logo/nuxt.svg";
import tailwind from "~/assets/logo/tailwind.png";
import git from "~/assets/logo/git.png";
import github from "~/assets/logo/github.png";
import npm from "~/assets/logo/npm.png";
import pinia from "~/assets/logo/pinia.svg";
import webpack from "~/assets/logo/webpack.png";
import json from "~/assets/logo/json-logo.png";
import gulp from "~/assets/logo/gulp.jpg";;
import axios from "~/assets/logo/axios.svg";
import sass from "~/assets/logo/sass.svg";
import vite from "~/assets/logo/vite.png";

let sliceNum = ref(12);
let isShowed = ref(false);

const technologies = ref([
    {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
    },
    {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
    },
    {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-400",
    },
    {
        id: 4,
        src: typescript,
        title: "TypeScript",
        style: "shadow-blue-400",
    },
    {
        id: 5,
        src: vue,
        title: "Vue",
        style: "shadow-emerald-500",
    },
    {
        id: 6,
        src: nuxt,
        title: "Nuxt",
        style: "shadow-emerald-700",
    },
    {
        id: 7,
        src: tailwind,
        title: "Tailwind CSS",
        style: "shadow-cyan-700",
    },
    {
        id: 8,
        src: git,
        title: "Git",
        style: "shadow-orange-600",
    },
    {
        id: 9,
        src: github,
        title: "GitHub",
        style: "shadow-white",
    },
    {
        id: 10,
        src: npm,
        title: "NPM",
        style: "shadow-red-600"
    },
    {
        id: 11,
        src: pinia,
        title: "Pinia",
        style: "shadow-yellow-600"
    },
    {
        id: 12,
        src: vite,
        title: "Vite",
        style: "shadow-purple-500"
    },
    {
        id: 13,
        src: json,
        title: "JSON",
        style: "shadow-white"
    },
    {
        id: 14,
        src: sass,
        title: "Sass",
        style: "shadow-pink-500"
    },
    {
        id: 15,
        src: vue,
        title: "VUEX",
        style: "shadow-emerald-500"
    },
    {
        id: 16,
        src: webpack,
        title: "Webpack",
        style: "shadow-blue-500"
    },
    {
        id: 17,
        src: gulp,
        title: "Gulp",
        style: "shadow-red-500"
    },
    {
        id: 18,
        src: axios,
        title: "Axios",
        style: "shadow-blue-800"
    }
]);

function showAll() {
    isShowed.value = !isShowed.value;
    sliceNum.value = isShowed.value ? technologies.value.length : 12
}

</script>