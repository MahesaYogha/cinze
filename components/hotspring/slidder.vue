<template>
    <p
        class="font-geller text-[28px] md:text-[32px] leading-[36px] tracking-wider text-center my-20"
    >
        Discover the Packages
    </p>

    <!-- Home Slidder -->
    <div class="mx-auto overflow-x-auto snap-x flex space-x-14 mb-10 pb-10 md:w-[70%] w-[90%]">
        <div
            v-for="(home, index) in homes"
            :key="index"
            class="snap-center space-y-4 flex flex-col flex-shrink-0 md:w-[650px] w-[350px] items-center justify-center"
        >
            <img :src="home.image" :alt="home.name" class="aspect-square w-full" />
            <p class="font-geller text-2xl text-center">{{ home.name }}</p>
            <p class="text-center">{{ home.description }}</p>
        </div>
    </div>
</template>

<script setup>
const homes = [
    {
        name: "Homes at Amangani",
        description:
            "Crafted from wood and stone with breathtaking Grand Teton Mountain views, Amangani’s homes are spacious sanctuaries set into the hillside of East Gros Ventre Butte.",
        image: "/img/test2.webp",
    },
    {
        name: "Homes at Amangani",
        description:
            "Crafted from wood and stone with breathtaking Grand Teton Mountain views, Amangani’s homes are spacious sanctuaries set into the hillside of East Gros Ventre Butte.",
        image: "/img/test2.webp",
    },
    {
        name: "Homes at Amangani",
        description:
            "Crafted from wood and stone with breathtaking Grand Teton Mountain views, Amangani’s homes are spacious sanctuaries set into the hillside of East Gros Ventre Butte.",
        image: "/img/test2.webp",
    },
];
</script>

<style scoped></style>
