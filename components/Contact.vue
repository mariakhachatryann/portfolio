<template>
    <section name="Contact" class="relative w-full md:h-screen p-4 text-white h-unset">
        <div class="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div class="pb-8">
                <h2 class="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl">Contact</h2>
                <p class="py-6">Submit the form below to get in touch with me</p>
            </div>

            <div class="flex justify-center items-center">
                <form class="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Enter your name"
                        class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
                        required />

                    <input type="email" name="email" placeholder="Enter your email"
                        class="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
                        required />

                    <textarea name="message" rows="10" placeholder="Enter your message"
                        class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
                        required></textarea>

                    <button
                        class="text-black font-semibold bg-gradient-to-t from-green-400 to-primary-color px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Contact me
                        </button>
                </form>
            </div>
        </div>
    </section>
</template>