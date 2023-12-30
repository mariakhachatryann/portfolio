<template>
    <section name="Education" class="relative w-full my-10 text-white overflow-hidden">
        <div class="max-w-screen-lg p-4 md:mx-auto mx-4 flex flex-col justify-center w-full h-full">
            <div class="mb-2">
                <h2 class="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1">Education</h2>
                <p class="py-6">Check out some of my certificates</p>
            </div>
            <section class="splide w-full h-[300px] text-black" aria-label="Basic Structure Example">
                <div class="splide__track">
                    <ul class="splide__list cursor-zoom-in">
                        <li class="splide__slide" @click="setSelectedImage(cert)" v-for="cert in certificates"
                            :key="cert.id">
                            <NuxtImg class="w-full h-[300px] rounded-md" :src="cert.img" />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <CertificateModal v-if="modalIsOpen" :selectedImage="selectedImage" @handleCloseButton="closeModal" />
    </section>
</template>

<script setup>
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const { certificates } = usePortfolioStore();

const splideOptions = {
    type: "loop",
    drag: "free",
    perPage: 3,
    gap: "20px",
    trimSpace: true,
    pagination: false,
    breakpoints: {
        900: {
            perPage: 2,
        },
        500: {
            perPage: 1
        }
    }, 
    autoScroll: {
        speed: 1,
    },
};

let splide;

const initSplide = () => {
    splide = new Splide(".splide", splideOptions);
    splide.mount({ AutoScroll });
}

const destroySplide = () => {
    if (splide) {
        splide.destroy();
        splide = null;
    }
}


let selectedImage = ref(null);
let modalIsOpen = ref(false);

const setSelectedImage = (img) => {
    modalIsOpen.value = true;
    selectedImage.value = img
}

const closeModal = () => {
    modalIsOpen.value = false;
};


onMounted(initSplide);
onUnmounted(destroySplide);
</script>
