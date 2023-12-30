<template>
    <section name="Projects" class="relative w-full text-white md:h-screen h-unset">
        <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div class="mb-4">
                <h2 class="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1">
                    Projects
                </h2>
                <p class="py-6">Check out some of my work here</p>
            </div>

            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
                <ProjectCard v-for="project in projects" :key="project.id" :project="project" @handleModalInfo="handleModalInfo" />
            </div>
        </div>
        <ModalInfo v-if="modalIsOpen" :SelectedProject="SelectedProject" @handle-click-close-button="closeModal" />
    </section>
</template>

<script setup>
const { projects } = usePortfolioStore();

const modalIsOpen = ref(false);
const SelectedProject = ref({})

const handleModalInfo = (project) => {
    modalIsOpen.value = true;
    SelectedProject.value = project;
};

const closeModal = () => {
    modalIsOpen.value = false;
};
</script>