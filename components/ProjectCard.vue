<template>
    <div class="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 max-w-md mx-auto">
      <img
        @click="handleModalInfo(props.project)"
        :src="props.project.src"
        alt="project card"
        class="rounded-md   cursor-pointer"
      />
      <div class="flex items-center justify-center">
        <button
          @click="handleClickDemo(props.project.demo)"
          class="text-gray-400 hover:text-white w-1/2 px-6 py-2 m-4 cursor-pointer"
        >
          Demo
        </button>
        <button
          @click="handleClickCode(props.project.code)"
          class="text-gray-400 hover:text-white w-1/2 px-6 py-2 m-4 cursor-pointer"
        >
          Code
        </button>
      </div>
    </div>
</template>

<script setup>
const props = defineProps(["project"]);
const emit = defineEmits(["handleModalInfo"])

  const handleClickDemo = (demoUrl) => {
    const newWindow = window.open(demoUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  const handleClickCode = (codeUrl) => {
    const newWindow = window.open(codeUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  function handleModalInfo(project) {
    emit("handleModalInfo", project)
  }
</script>