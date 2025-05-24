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
        name: "NScenic Infinity Hot Spring",
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
