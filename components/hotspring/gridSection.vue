<template>
    <div class="flex flex-col items-center space-y-10 my-10 lg:mx-[100px] xl:mx-[300px] mx-4">
        <p class="font-geller text-[28px] leading-[36px] tracking-wider">Our Hot Springs</p>
        <!-- Villa Grid Container -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            <div v-for="(villa, index) in villas" :key="index" class="flex flex-col">
                <!-- Image -->
                <img
                    :src="villa.image"
                    :alt="villa.name"
                    class="w-full w-[500px] h-[500px] aspect-square md:aspect-auto object-cover object-center"
                />
                <!-- Text -->
                <div class="flex flex-col mt-4 space-y-3">
                    <p class="font-semibold text-lg">{{ villa.name }}</p>
                    <p class="">{{ villa.location }}</p>
                    <p class="text-sm line-clamp-3 text-justify">{{ villa.description }}</p>
                </div>
                <!-- Discover More -->
                <p class="mt-4 cursor-pointer hover:underline">Discover More</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const villas = [
    {
        name: "Amanyara",
        location: "Providenciales, Turks and Caicos",
        description:
            "Amanyara’s Villas offer consummate privacy and space in natural surroundings, with generously proportioned living areas and two to six bedrooms set around a black infinity pool.",
        image: "/img/test.webp",
    },
    {
        name: "Amanyara",
        location: "Providenciales, Turks and Caicos",
        description:
            "Amanyara’s Villas offer consummate privacy and space in natural surroundings, with generously proportioned living areas and two to six bedrooms set around a black infinity pool.",
        image: "/img/test.webp",
    },
    {
        name: "Amanyara",
        location: "Providenciales, Turks and Caicos",
        description:
            "Amanyara’s Villas offer consummate privacy and space in natural surroundings, with generously proportioned living areas and two to six bedrooms set around a black infinity pool.",
        image: "/img/index/Pool View Sunrise 2.png",
    },
    {
        name: "Amanyara",
        location: "Providenciales, Turks and Caicos",
        description:
            "Amanyara’s Villas offer consummate privacy and space in natural surroundings, with generously proportioned living areas and two to six bedrooms set around a black infinity pool.",
        image: "/img/index/Pool View Sunrise 2.png",
    },
    {
        name: "Amanyara",
        location: "Providenciales, Turks and Caicos",
        description:
            "Amanyara’s Villas offer consummate privacy and space in natural surroundings, with generously proportioned living areas and two to six bedrooms set around a black infinity pool.",
        image: "/img/index/Pool View Sunrise 2.png",
    },
    {
        name: "Amanyara",
        location: "Providenciales, Turks and Caicos",
        description:
            "Amanyara’s Villas offer consummate privacy and space in natural surroundings, with generously proportioned living areas and two to six bedrooms set around a black infinity pool.",
        image: "/img/index/Pool View Sunrise 2.png",
    },
    
];
</script>

<style scoped></style>
