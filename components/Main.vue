<template>
    <section name="Home" class="relative md:h-screen h-unset">
        <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-0 md:flex-row md:gap-8">
            <div class="flex flex-col justify-center items-center h-[85%] md:h-full order-2 md:order-1 md:items-start">
                <h1 class="text-4xl md:text-[50px] font-bold text-white mb-2 mt-3 md:mt-0 md:mb-4 mini:text-[24px]">I'm Maria Khachatryan</h1>
                <h2 class="rounded-md mx-none bg-primary-color/20 max-w-max px-6 inline text-xl md:text-3xl lg:text-4xl font-semibold text-white">Front End Developer</h2>
                <p class="text-gray-300 py-4 max-x-md text-justify">
                    specialized with Vue.js / Nuxt, I am focused on creating visually appealing and user-friendly
                    websites. I love creating websites that not only catch the eye but also make navigating a
                    breeze. Welcome to my portfolio, I'm excited to share my work with you and dive into the world of
                    user-friendly web applications!
                </p>
                <div class="hidden desktop:flex">
                    <div @click="linkScroll('About')"
                        class="group  text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0">
                        About me
                        <span class="group-hover:rotate-90 duration-300 ">
                            <AiOutlineArrowRight size="20" class="ml-2" />
                        </span>
                    </div>
                </div>
                <MobileSocialLinks />
            </div>
            <div class="flex order-1 md:order-2 mt-8 md:mt-0">
                <img src="/mariaKh1.jpg" alt="My profile" class="mb-2 rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20" style="filter: drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { AiOutlineArrowRight } from "vue3-icons/ai";
const { linkScroll } = useUtils();
</script>