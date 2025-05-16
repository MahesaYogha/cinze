<template>
    <div class="md:grid md:grid-cols-2 md:gap-0 flex flex-col overflow-y-hidden">
        <!-- Villa Link -->
        <NuxtLink to="/villa">
            <div class="relative w-full group overflow-hidden aspect-square md:aspect-[9/6]">
                <img
                    src="~assets/img/ayana1.webp"
                    alt=""
                    class="w-full h-full object-cover group-hover:scale-110 duration-[1500ms] ease-out"
                />
                <div class="absolute inset-0 flex flex-col text-white p-10 xl:px-40 xl:py-24">
                    <div class="flex justify-between">
                        <div class="flex flex-col justify-center">
                            <p class="text-sm xl:text-2xl uppercase">Azure </p>
                            <p class="text-4xl xl:text-6xl font-semibold italic">Sky Villa</p>
                        </div>
                        <div class="flex flex-col justify-center">
                            <p class="text-md xl:text-xl text-right">Enchanted experience</p>
                            <p class="text-md xl:text-xl text-right">by natural view</p>
                        </div>
                    </div>
                    <div class="mt-auto flex justify-between items-end w-full">
                        <p
                            class="text-sm xl:text-lg leading-relaxed max-w-[250px] md:max-w-[300px] xl:max-w-[400px]"
                        >Azure Sky Villa by CINZE is a peaceful mountain retreat that blends comfort,
                         nature, and subtle views of Mount and Lake Batur — perfect for quiet escapes and soulful stays.
                            <!-- Discover four unique hotels, each with its own charm, nestled within a
                            90-hectare <span class="underline">sanctuary</span>. Here, travelers
                            find freedom in
                            <span class="italic">nature's embrace</span>
                            and immerse themselves in the vibrant culture of Bali. -->
                        </p>

                        <button
                            class="w-8 h-8 md:w-12 md:h-12 transition-colors duration-300 text-black group-hover:text-white bg-white group-hover:bg-transparent rounded-full flex items-center justify-center border-4 border-white"
                        >
                            <svg
                                class="w-6 h-6 text-black hover:text-blue-500 transition-colors duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="4"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </NuxtLink>

        <!-- Unkwown Link -->
        <div class="relative w-full group overflow-hidden aspect-square md:aspect-[9/6]">
            <img
                src="~assets/img/ayana2.webp"
                alt=""
                class="w-full h-full object-cover group-hover:scale-110 duration-[1500ms] ease-out"
            />
            <div class="absolute inset-0 flex flex-col text-white p-10 xl:px-40 xl:py-24">
                <div class="flex justify-between">
                    <div class="flex flex-col justify-center">
                        <p class="text-sm xl:text-lg uppercase font-semibold">Cinze</p>
                        <p class="text-4xl xl:text-5xl font-semibold italic">Naural Hot Spring</p>
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="text-md xl:text-xl text-right">When Water</p>
                        <p class="text-md xl:text-xl text-right">Brings Inner Peace</p>
                    </div>
                </div>
                <div class="mt-auto flex justify-between items-end w-full">
                    <p
                        class="text-sm xl:text-lg leading-relaxed max-w-[250px] md:max-w-[300px] xl:max-w-[500px]"
                    >
                    Terraced like a hillside amphitheater for the soul, Cinze Natural Hot Spring flows gracefully down the slope in sculpted,
                    mineral-white tiers — a contemporary homage to ancient thermal rituals. Each pool offers a secluded sanctuary, 
                    infused with the geothermal warmth of Mount Batur and framed by sweeping views of Lake Batur and the sacred peak of Gunung Abang.

                        <!-- Discover four unique hotels, each with its own charm, nestled within a
                        90-hectare <span class="underline">sanctuary</span>. Here, travelers find
                        freedom in
                        <span class="italic">nature's embrace</span>
                        and immerse themselves in the vibrant culture of Bali. -->
                    </p>

                    <button
                        class="w-8 h-8 md:w-12 md:h-12 transition-colors duration-300 text-black group-hover:text-white bg-white group-hover:bg-transparent rounded-full flex items-center justify-center border-4 border-white"
                    >
                        <svg
                            class="w-6 h-6 text-black hover:text-blue-500 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="4"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Unkowwn Link -->
        <div
            class="relative w-full h-[50vh] group overflow-hidden col-span-2 aspect-square md:aspect-[9/6]"
        >
            <img
                src="~assets/img/ayana3.webp"
                alt=""
                class="w-full h-full object-cover group-hover:scale-110 duration-[1500ms] ease-out"
            />
            <div class="absolute inset-0 flex flex-col text-white p-10 md:px-40 md:py-24">
                <div class="flex justify-between">
                    <div class="flex flex-col justify-center">
                        <p class="text-sm md:text-lg uppercase">Cinze</p>
                        <p class="text-4xl md:text-6xl font-semibold">Tour and Travel</p>
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="text-md md:text-xl text-right">Enchanted Land</p>
                        <p class="text-md md:text-xl text-right">of Blue and Green</p>
                    </div>
                </div>
                <div class="mt-auto flex justify-between items-end w-full">
                    <p class="text-sm md:text-lg leading-relaxed max-w-[250px] md:max-w-[400px]">
                        Discover four unique hotels, each with its own charm, nestled within a
                        90-hectare <span class="underline">sanctuary</span>. Here, travelers find
                        freedom in
                        <span class="italic">nature's embrace</span>
                        and immerse themselves in the vibrant culture of Bali.
                    </p>
                    <button
                        class="w-8 h-8 md:w-12 md:h-12 transition-colors duration-300 text-black group-hover:text-white bg-white group-hover:bg-transparent rounded-full flex items-center justify-center border-4 border-white"
                    >
                        <svg
                            class="w-6 h-6 text-black hover:text-blue-500 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="4"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>
