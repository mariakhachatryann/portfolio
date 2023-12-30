<template>
    <NuxtLayout>
        <div v-if="isLoading" class="w-full h-screen flex justify-center items-center">
            <Loader />
        </div>
        <div v-if="!isLoading">
            <Nav />
            <NuxtPage />
            <Footer />
            <SocialLinks />
        </div>
    </NuxtLayout>
</template>

<script setup>
useSeoMeta({
    title: "Maria Khachatryan | Front End Developer",
    description: "I'm Maria Khachatryan, Front End Developer (Vue/Nuxt). Welcome to my portfolio, I'm excited to share my work with you and dive into the world of user-friendly web applications! "
})

let isLoading = ref(true);
onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 3000)
})
</script>