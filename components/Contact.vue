<template>
    <section name="Contact" class="relative w-full p-4 text-white">
        <div class="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div class="pb-8">
                <h2 class="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl">Contact</h2>
                <p class="py-6">Submit the form below to get in touch with me</p>
            </div>

            <div class="flex justify-center items-center">
                <form @submit.prevent="handleSubmit($event)" class="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Enter your name"
                        class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color" required />

                    <input type="email" name="email" placeholder="Enter your email"
                        class="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color" required />

                    <textarea name="message" rows="10" placeholder="Enter your message"
                        class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color" required></textarea>

                    <button class="text-black font-semibold bg-gradient-to-t from-green-400 to-primary-color px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Contact me</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import Swal from "sweetalert2";

const handleSubmit = (event) => {
    const formData = Object.fromEntries(new FormData(event.target));
    console.log(formData);

    $fetch("https://getform.io/f/0bf8bb06-e08e-4831-b551-aec6e2820300", {
        method: "POST",
        body: {
            formData
        }
    }).then(() =>{
        Swal.fire({
            icon: 'success',
            iconColor: '#0DFC4B',
            title: 'Thank you for contacting me. I will be in touch soon!',
            showConfirmButton: true,
            background: '#191a19',
            color: '#fff',
            confirmButtonColor: 'rgba(13, 252, 75, 0.9)',
            backdrop: `
                rgba(54, 55, 54,0.4)
            `
        })
    }).catch(() => {
        console.log("error");
    })
    
    event.target.reset();
}
</script>