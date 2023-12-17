<template>
  <section class="splide w-full">
    <div class="splide__track w-full">
      <ul class="splide__list w-full">
        <li class="splide__slide w-[500px] h-[700px] bg-red-400">Slide 01</li>
        <li class="splide__slide w-[500px] h-[700px] bg-red-600">Slide 02</li>
        <li class="splide__slide w-[500px] h-[700px] bg-red-800">Slide 03</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import Splide from "@splidejs/vue-splide";
let splide;

const initSplide = () => {
  splide = new Splide('.splide', {
    type: 'loop',
    padding: '5rem',
  });
  splide.mount();
}

onMounted(initSplide);
</script>