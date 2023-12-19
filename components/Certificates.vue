<script setup>
import jsSam from "~/assets/cerificates/js-cert-sam.png";
import html from "~/assets/cerificates/html-cert.png";
import css from "~/assets/cerificates/css-cert.png";
import git from "~/assets/cerificates/git-cert-resize.jpg";

const certificates = ref([
    { id: 1, img: jsSam },
    { id: 2, img: html },
    { id: 3, img: css },
    { id: 4, img: git },
])
</script>

<template>
    <section name='Education' class='relative w-full my-10 text-white overflow-hidden'>
        <div class='max-w-screen-lg p-4 md:mx-auto mx-4 flex flex-col justify-center w-full h-full'>

            <div class='mb-2'>
                <h2 class='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1'>Education</h2>
                <p class='py-6'>Check out some of my certificates</p>
            </div>
            <Swiper class="swiper-cards max-w-[700px] w-full mx-20" :modules="[SwiperAutoplay, SwiperEffectCards]" :slides-per-view="1"
                :loop="true" :effect="'cards'"
    :grabCursor="true" >
                <SwiperSlide class="cursor-pointer" v-for="cert in certificates" :key="cert.id">
                    <img class="max-w-[700px] w-full h-[500px]" :src="cert.img" />
                </SwiperSlide>
                <!-- <SwiperSlide>
                    <img class="max-w-[700px] w-full" src="../assets/cerificates/js-cert-sam.png" alt="">
                </SwiperSlide>
                <SwiperSlide>
                    <img class="max-w-[700px] w-full" src="../assets/cerificates/js-cert.png" alt="">
                </SwiperSlide>
                <SwiperSlide>
                    <img class="max-w-[700px] w-full" src="../assets/cerificates/css-cert.png" alt="">
                </SwiperSlide> -->
            </Swiper>
        </div>
    </section>
</template>

<style>
.swiper-slide {
    position: relative;
    font-weight: bold;
    margin: 20px;
}

.swiper-cards .swiper-slide {
    border-radius: 6px;
    border: 1px solid black;
}
</style>
