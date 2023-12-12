<template>
    <NuxtParticles
        id="tsparticles"
        :options="particlesConfig"
    ></NuxtParticles>
</template>

<script setup lang="ts">
import particlesConfig from "../config/particlesConfig";
</script>