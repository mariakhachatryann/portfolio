<template>
    <NuxtLayout>
        <div v-if="isLoading" class="w-full h-screen flex justify-center items-center">
            <Loader />
        </div>
        <Particles />
        <Nav v-if="!isLoading" />
        <NuxtPage v-if="!isLoading" />
        <Footer v-if="!isLoading" />
        <SocialLinks v-if="!isLoading" />
    </NuxtLayout>
</template>

<script setup>
useHead({
    title: "Maria Khachatryan | Front End Developer"
})

let isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 3000)
})
</script>