<template>
    <div class="flex flex-row w-[90px] top-[35%] left-0 fixed z-30">
        <ul class="hidden desktop:block">
            <li v-for="link in links" :key="link.id" class="flex justify-between items-center w-40 h-14 px-4 bg-primary-color/90 ml-[-100px] duration-500 hover:rounded-md hover:ml-[-10px]" :class="{'rounded-tr-md': link.id === 1, 'rounded-br-md': link.id === links.length}">
                <a :href="link.href" class="flex justify-between items-center w-full text-black font-semibold ml-4" :download="link.download" target="_blank" rel="noreferrer">
                    {{ link.label }}
                    <FaLinkedin size="30" v-if="link.label === 'LinkedIn'" />
                    <FaGithub size="30" v-if="link.label === 'GitHub'" />
                    <HiMail size="30" v-if="link.label === 'Mail'" />
                    <BsFillPersonLinesFill size="30" v-if="link.label === 'Resume'" />
                </a>
            </li>
        </ul>
    </div>
    <div :class="{'block': enableBtn, 'hidden': !enableBtn}" @click="linkScroll('Home')" class="rounded-full cursor-pointer bg-gradient-to-t from-green-400 to-primary-color p-4 right-10 bottom-[12%] fixed z-30">
        <BsArrowUp size="30" />
    </div>
</template>

<script setup>
import { FaLinkedin, FaGithub } from "vue3-icons/fa";
import { HiMail } from "vue3-icons/hi";
import { BsFillPersonLinesFill, BsArrowUp } from "vue3-icons/bs";

const { linkScroll } = useUtils(); 

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

let enableBtn = ref(false);

const checkScrollPosition = () => {
  enableBtn.value = window.scrollY > 100;
};

onMounted(() => {
    checkScrollPosition(); 
    window.addEventListener('scroll', checkScrollPosition);
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkScrollPosition);
});
</script>