<template>
    <footer class="relative mt-auto flex flex-col items-center text-gray-300 pb-6 gap-2 md:flex-row md:justify-evenly">
        <div class="flex gap-x-4 md:order-last">
            <a class="text-4xl hover:text-primary-color hover:animate-bounce" target="_blank"
                href="https://github.com/mariakhachatryann">
                <FaGithub />
            </a>

            <a class="text-4xl hover:text-primary-color hover:animate-bounce" target="_blank"
                href="https://www.linkedin.com/in/maria-khachatryan1606/">
                <FaLinkedin />
            </a>

            <a class="text-4xl hover:text-primary-color hover:animate-bounce" target="_blank"
                href="https://users-crud-bydt.netlify.app/">
                <FaQuestion />
            </a>
        </div>

        <p class="md:order-2">• Copyright ©2023 | All rights reserved • </p>
        <p>@mariakhachatryann</p>
    </footer>
</template>

<script setup>
import { FaLinkedin, FaGithub, FaQuestion } from "vue3-icons/fa";
</script>