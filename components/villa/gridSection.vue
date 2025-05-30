<template>
    <div class="flex flex-col items-center space-y-10 my-10 lg:mx-[100px] xl:mx-[300px] mx-4">
         <p class="font-cinzel font-medium text-[20px] sm:text-[24px] md:text-[28px] leading-[28px] sm:leading-[32px] md:leading-[36px] tracking-wide text-center md:text-center">Experience Thoughtful Comfort at Cinze Villa’s</p>

         <p class="text-justify sm:text-center max-w-6xl text-sm sm:text-lg">
            At Cinze Villa’s, every detail is designed to elevate your stay. From tranquil private balconies and scenic terrace views to our inviting open-air restaurant, our facilities blend natural beauty with refined comfort. Whether you’re unwinding by your private pool or savoring a warm meal in the sunshine, each space is crafted to help you reconnect with nature — and yourself.
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
        name: "Relaxation Balcony",
        location: "",
        description:
            "Enjoy a private balcony with natural wooden accents, perfect for relaxing and taking in peaceful garden and privat pool with views.",
        image: "/villa/gridvilla1.webp",
    },
    {
        name: "Breathtaking Villa View",
        location: "",
        description:
            "Step out onto your private terrace and immerse yourself in stunning panoramic views of lush hills and skies. A perfect spot to relax and connect with nature in complete comfort.",
        image: "/villa/gridvilla2.webp",
    },
    {
        name: "Charming Villa Restaurant",
        location: "",
        description:
            "Relax and savor delightful meals in our cozy outdoor restaurant, where rustic wooden furniture meets warm natural light—perfect for enjoying fresh flavors in a serene setting.",
        image: "/villa/gridvilla6.webp",
    },
    {
        name: "Elegant Bathroom Touches",
        location: "",
        description:
            "Enjoy the blend of natural stone and sophisticated design, creating a luxurious and calming bathroom experience just for you.",
        image: "/villa/gridvilla4.webp",
    },
    {
        name: "Tranquil Bedroom Comfort",
        location: "",
        description:
            "Unwind in a beautifully designed bedroom that offers peaceful ambiance and restful sleep for your perfect getaway.",
        image: "/villa/gridvilla3.webp",
    },
    {
        name: "Refreshing Shower",
        location: "",
        description:
            "Enjoy a refreshing shower in a fully enclosed space that ensures your privacy while bathing in natural sunlight.",
        image: "/villa/gridvilla5.webp",
    },
    // {
    //     name: "Amanyara",
    //     location: "Providenciales, Turks and Caicos",
    //     description:
    //         "Amanyara’s Villas offer consummate privacy and space in natural surroundings, with generously proportioned living areas and two to six bedrooms set around a black infinity pool.",
    //     image: "/img/test.webp",
    // },
    // {
    //     name: "Amanyara",
    //     location: "Providenciales, Turks and Caicos",
    //     description:
    //         "Amanyara’s Villas offer consummate privacy and space in natural surroundings, with generously proportioned living areas and two to six bedrooms set around a black infinity pool.",
    //     image: "/img/test.webp",
    // },
    // {
    //     name: "Amanyara",
    //     location: "Providenciales, Turks and Caicos",
    //     description:
    //         "Amanyara’s Villas offer consummate privacy and space in natural surroundings, with generously proportioned living areas and two to six bedrooms set around a black infinity pool.",
    //     image: "/img/test.webp",
    // },
    // {
    //     name: "Amanyara",
    //     location: "Providenciales, Turks and Caicos",
    //     description:
    //         "Amanyara’s Villas offer consummate privacy and space in natural surroundings, with generously proportioned living areas and two to six bedrooms set around a black infinity pool.",
    //     image: "/img/test.webp",
    // },
    // {
    //     name: "Amanyara",
    //     location: "Providenciales, Turks and Caicos",
    //     description:
    //         "Amanyara’s Villas offer consummate privacy and space in natural surroundings, with generously proportioned living areas and two to six bedrooms set around a black infinity pool.",
    //     image: "/img/test.webp",
    // },
    // {
    //     name: "Amanyara",
    //     location: "Providenciales, Turks and Caicos",
    //     description:
    //         "Amanyara’s Villas offer consummate privacy and space in natural surroundings, with generously proportioned living areas and two to six bedrooms set around a black infinity pool.",
    //     image: "/img/test.webp",
    // },
];
</script>

<style scoped></style>
