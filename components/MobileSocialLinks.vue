<template>
    <div class="flex mt-4 desktop:hidden">
        <ul class="flex gap-2 flex-wrap justify-center">
            <li v-for="link in links" :key="link.id" class="flex items-center gap-2 w-28 h-9 px-4 bg-gradient-to-t from-green-400/50 to-primary-color/50 rounded-md" >
                <a :href="link.href" class="flex gap-3 items-center w-full text-white text-sm" :download="link.download" target="_blank" rel="noreferrer">
                    <FaLinkedin size="20" v-if="link.label === 'LinkedIn'" />
                    <FaGithub size="20" v-if="link.label === 'GitHub'" />
                    <HiMail size="20" v-if="link.label === 'Mail'" />
                    <BsFillPersonLinesFill size="20" v-if="link.label === 'Resume'" />
                    {{ link.label }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { FaLinkedin, FaGithub } from "vue3-icons/fa";
import { HiMail } from "vue3-icons/hi";
import { BsFillPersonLinesFill } from "vue3-icons/bs";

const links = [
    {
        id: 1,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/maria-khachatryan1606/",
    },
    {
        id: 2,
        label: "GitHub",
        href: "https://github.com/mariakhachatryann"
    },
    {
        id: 3,
        label: "Mail",
        href: "mailto:mariakhachatryan23@gmail.com"
    },
    {
        id: 4,
        label: "Resume",
        href: '/MariaCv.pdf',
        download: 'MariaKhachatryancv'
    }
]
</script>