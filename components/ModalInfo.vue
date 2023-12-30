<template>
    <section class="fixed inset-0 flex items-center justify-center bg-opacity-70 bg-black z-40 over">
        <div ref="modal" class="relative bg-white/20 p-2 rounded-lg w-[70%] sm:w-[60%] max-w-[800px] modalCard max-h-[80vh] flex flex-col overflow-y-auto lg:text-lg lg:w-[90%]">
            <div>
                <NuxtImg class="w-full rounded-tl-lg rounded-tr-lg md:object-cover" :src="props.SelectedProject.src" alt="Resident image" />
            </div>

            <div class="w-full text-white p-8 flex flex-col bg-black/80 border-opacity-70 border-primary-color rounded-bl-lg rounded-br-lg">
                <h3 class="text-2xl font-semibold self-center pb-1 inline border-b-4 border-primary-color/60 mb-6">
                    {{ props.SelectedProject.title }}
                </h3>

                <ul>
                    <li>
                        <span class="text-primary-color">Description: </span>
                        <span>{{ props.SelectedProject.description }}</span>
                    </li>

                    <li>
                        <span class="text-primary-color">Technologies: </span>
                        <span>{{ props.SelectedProject.technologies }} </span>
                    </li>

                    <li>
                        <span class="text-primary-color">Demo: </span>
                        <a target="_blank"
                            class="hover:underline hover:underline-offset-4 hover:text-dark-green transition-all duration-500"
                            :href="props.SelectedProject.demo">
                            Click here to see the project
                        </a>
                    </li>

                    <li>
                        <span class="text-primary-color">Code: </span>
                        <a target="_blank"
                            class="hover:underline hover:underline-offset-4 hover:text-dark-green transition-all duration-500"
                            :href="props.SelectedProject.code">
                            Click here to see the repository
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core"

const props = defineProps(["SelectedProject"]);
const emit = defineEmits(["handleClickCloseButton"]);

const handleClickCloseButton = () => {
    emit("handleClickCloseButton");
}

let modal = ref();

onClickOutside(modal, handleClickCloseButton)
</script>