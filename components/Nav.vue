<template>
    <header class="fixed top-0 flex bg-neutral-900/60 justify-between h-20 items-center py-4 px-4 md:px-6 text-white mx-auto lg:px-24 md:py-0 w-full z-30 transition-colors duration-700">
        <div class="flex flex-row gap-4 items-center">
            <NuxtLink to="/">
                <h1
                    @click="linkScroll('Home')"
                    class="flex items-center cursor-pointer text-[1.1rem] lg:text-[1.3rem] hover:text-primary-color hover:scale-125 duration-500">
                    <FaCode size="27" class="mr-2 text-base" />
                    Maria Khachatryan
                </h1>
            </NuxtLink>
        </div>

        <ul v-if="checkRoute" class="hidden desktop:flex gap-5">
            <li  v-for="linkItem in links" @click="scrollFunc(linkItem.link)" :key="linkItem.id"
                class="cursor-pointer hover:scale-105 rounded-lg hover:bg-primary-color p-2 duration-200 hover:text-black text-[1.1rem] lg:text-[1.3rem]">
                {{ linkItem.link }}
            </li>
        </ul>
        <div v-else class="flex flex-row gap-4 items-center">
            <NuxtLink to="/">
                <h1
                    class="flex items-center cursor-pointer hover:scale-105 rounded-lg hover:bg-primary-color p-2 duration-200 hover:text-black text-[1.1rem] lg:text-[1.3rem]">
                    <AiOutlineHome size="27" class="mr-2 text-base" />
                    Home
                </h1>
            </NuxtLink>
        </div>


        <div v-if="checkRoute" @click="isShowNav = !isShowNav" class="cursor-pointer pr-4 z-10 text-gray-100 desktop:hidden">
            <template v-if="isShowNav" >
                <FaTimes size="30" class="hover:text-primary-color" />
            </template>
            <template v-else>
                <FaBars size="30" class="hover:text-primary-color" />
            </template>
        </div>

        <ul v-if="isShowNav && checkRoute" class="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-green-950 opacity-90">
            <li v-for="linkItem in links" @click="scrollFunc(linkItem.link)" :key="linkItem.id" class="px-4 cursor-pointer py-6 text-4xl opacity-100">
                {{ linkItem.link }}
            </li>
        </ul>
    </header>
</template>

<script setup>
import { FaBars, FaTimes, FaCode } from "vue3-icons/fa";
import { AiOutlineHome } from "vue3-icons/ai";
const { linkScroll } = useUtils();
const router = useRouter();

const links = [
    {
        id: 1,
        link: "Home"
    },
    {
        id: 2,
        link: "About"
    },
    {
        id: 3,
        link: "Projects"
    },
    {
        id: 4,
        link: "Technologies"
    },
    {
        id: 5,
        link: "Education"
    },
    {
        id: 6,
        link: "Contact"
    }
]

const isShowNav = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
    if (process.client) {
        const scrollTop = window.pageYOffset
        isScrolled.value = scrollTop > 0
    }
}

const checkRoute = computed(() => {
    if (router.currentRoute.value.fullPath !== "/") {
        return false
    } 
    return true
})

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
});

const scrollFunc = (link) => {
    linkScroll(link);
    isShowNav.value = false
}
</script>