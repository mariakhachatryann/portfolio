<template>
    <div class="fixed inset-0 flex items-center justify-center z-50 bg-black/60 duration-300"
        :class="props.selectedImage.img ? 'opacity-100' : 'opacity-0 pointer-events-none'">
        <div ref="modal" class=" bg-white/20 p-2 rounded-lg max-w-[800px] relative shadow-md shadow-gray-600 miniModal">
            <NuxtImg 
                class="rounded-md w-full object-contain miniModal"
                :class="props.selectedImage.otherSize ? 'h-[700px]' : 'h-full'"
                :src="props.selectedImage.img"
                alt="Selected Certificate"> </NuxtImg>
        </div>
    </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'

const props = defineProps(["selectedImage"]);
const emit = defineEmits(["handleCloseButton"]);

const handleCloseButton = () => {
    emit("handleCloseButton");
}
let modal = ref(null);

onClickOutside(modal, handleCloseButton);
</script>