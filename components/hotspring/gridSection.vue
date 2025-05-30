<template>
    <div class="flex flex-col items-center space-y-10 my-10 lg:mx-[100px] xl:mx-[300px] mx-4">
        <p class="font-cinzel font-medium text-[20px] sm:text-[24px] md:text-[28px] leading-[28px] sm:leading-[32px] md:leading-[36px] tracking-wide text-left md:text-center">Discover Our Natural Hot Springs</p>
        <p class="text-justify sm:text-center max-w-6xl text-sm sm:text-lg">
         Step into a world of pure relaxation at our natural hot springs, where crystal-clear, mineral-rich waters flow through artistically designed pools surrounded by lush landscapes and mountain views. Whether you're soaking in the warm serenity of our infinity pools or enjoying the gentle jets of our jacuzzis, each moment offers the perfect balance of wellness, beauty, and calm.
        </p>

        <!-- Villa Grid Container -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            <div v-for="(villa, index) in villas" :key="index" class="flex flex-col">
                <!-- Image -->
                <img
                :src="villa.image"
                :alt="villa.name"
                class="w-full w-[500px] h-[500px] aspect-square md:aspect-auto object-cover object-center transform transition duration-300 hover:scale-105"
                />

                <!-- Text -->
               <div class="flex flex-col mt-4">
                    <p class="font-semibold text-lg pt-2">{{ villa.name }}</p>
                    <p class="mt-1">{{ villa.location }}</p>
                    <p class="text-sm text-justify mt-2 line-clamp-3">{{ villa.description }}</p>
                </div>
                <!-- Discover More -->
                <a href="https://booking.cinze.co.id/en/offers?hotel=AZSH&checkin=2025-05-30&checkout=2025-05-31&adults=2&children=0&promo=&promocode=">
                <p class="mt-4 cursor-pointer underline hover:text-gray-600 hover:scale-105 transition duration-200">
                    Discover More
                </p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const villas = [
    {
        name: "Scenic Infinity Hot Spring",
        location: "",
        description:
            "Enjoy breathtaking views while soaking in our infinity hot spring pools, where nature and luxury come together for an unforgettable experience.",
        image: "/hotsprings/gridvhs1.webp",
    },
    {
        name: "Inviting Jacuzzi Retreat",
        location: "",
        description:
            "Sink into the warm, bubbling embrace of our jacuzzi where soothing jets melt away stress and every moment feels like pure indulgence.",
        image: "/hotsprings/gridvhs2.webp",
    },
    {
        name: "Natural Hot Spring Sanctuary",
        location: "",
        description:
            "Immerse yourself in soothing hot spring pools thoughtfully designed to harmonize with the natural surroundings, offering a peaceful retreat for body and mind.",
        image: "/hotsprings/gridvhs3.webp",
    }, 
];
</script>

<style scoped></style>
