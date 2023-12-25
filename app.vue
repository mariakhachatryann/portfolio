<template>
    <NuxtLayout>
        <Loader v-if="isLoading" />
        <Particles v-if="!isLoading" />
        <NuxtPage v-if="!isLoading" />
        <SocialLinks v-if="!isLoading" />
    </NuxtLayout>
</template>

<script setup>
useHead({
    title: "Maria Khachatryan | Front End Developer"
})

let isLoading = ref(true);

onMounted(() => {
    isLoading.value = false
})
</script>