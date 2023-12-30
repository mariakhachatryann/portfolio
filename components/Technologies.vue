<template>
    <section name="Technologies" class="relative w-full">
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
                    <NuxtImg class="w-20 h-[112px] mx-auto py-2 md:py-4" :src="tech.src" alt="" />
                    <p class="mt-4 md:mt-2">{{ tech.title }}</p>
                </div>
            </div>
            <div v-if="isLoading" class="w-full my-5 flex justify-center items-center">
                <Loader  />
            </div>
            <button v-if="!isLoading" @click="showAll" class="text-black font-semibold w-fit px-6 py-2 mx-auto rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer hover:scale-110 duration-300">
                {{ isShowed ? 'Show less' : 'Show more' }}
            </button>
        </div>
    </section>
</template>

<script setup>
const { technologies } = usePortfolioStore();

let sliceNum = ref(12);
let isShowed = ref(false);
let isLoading = ref(false);


const showAll = () => {
    isLoading.value = true;
    setTimeout(() => {
        isShowed.value = !isShowed.value;
        sliceNum.value = isShowed.value ? technologies.length : 12;
        isLoading.value = false;
    }, isShowed.value ? 0 : 500);
}
</script>