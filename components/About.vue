<template>
    <section name="About" class="relative w-full text-white">
        <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg">

            <div class="pb-8">
                <h2 class="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">About me</h2>
            </div>
            <p class="mb-4 py-6">
                👋 Hi there! I'm a motivated and hardworking front-end developer with a focus on Vue.js and Nuxt.js.
                I quickly perceive new information, have a desire to
                learn, ability to solve problems and creative thinking․ I am confident that I can quickly adapt to new technologies, trends and team.
                I enjoy turning cool ideas into awesome digital stuff using neat code.
                <br />
                <br />
                🚀 Proficient in HTML, CSS, JavaScript, and Vue.js/Nuxt.js, I'm adept at translating design concepts into
                functional interfaces. I believe in writing clean, maintainable code that prioritizes
                readability and scalability.
                <br />
                <br />
                💡 I thrive on learning and adapting, constantly seeking new challenges to expand my skill set. Whether it's
                mastering responsive design principles or diving into the latest frameworks, I'm always eager to grow and
                evolve in this dynamic field.
                <br />
                <br />
                🌟 I'm deeply committed to my work, ensuring every task is approached with responsibility and dedication. My
                ability to quickly grasp new concepts allows me to adapt and learn on the go, consistently enhancing my
                skills to deliver high-quality results.
            </p>

            <p>
                📫 Let's connect and create something amazing ! Feel free to reach out—I'm excited to collaborate and
                contribute to innovative web experiences.
            </p>

            <br />
            <br />
            <NuxtLink to="/about">

                <div class="flex justify-end mr-4">
                    <div
                        class="hover:underline hover:underline-offset-4 hover:text-primary-color/60 cursor-pointer text-gray-300 flex items-center">
                        See more about me
                        <AiOutlineArrowRight class="ml-2" />
                    </div>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
import { AiOutlineArrowRight } from "vue3-icons/ai";
</script>