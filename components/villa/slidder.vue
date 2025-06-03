<template>
   <br>
   <br>
    <!-- Home Slidder -->
    <div class="mx-auto overflow-x-auto snap-x flex space-x-14 mb-10  pb-10 md:w-[75%] w-[90%] ">
        <div
            v-for="(home, index) in homes"
            :key="index"
            class="snap-center space-y-4 flex flex-col flex-shrink-0 md:w-[650px] w-svw "
        >
            <img :src="home.image" :alt="home.name" class="w-full  h-[550px]  object-cover" />
            <p class="font-geller  text-2xl text-center">{{ home.name }}</p>
            <p class="text-center  ">{{ home.description }}</p>
        </div>
    </div>
</template>

<script setup>
const homes = [
     {
        name: "Exclusive Villa Stay Package",
        description:
            "Experience a peaceful stay in our cozy private villas, each featuring a personal outdoor soaking tub and relaxing garden views — perfect for a romantic escape or a quiet retreat. Rates start from IDR 850K to 1.200K per night. Discover more and contact us by whatsapp icon on right side.",
        image: "/villa/GroundRoom3.webp",
    },
    {
        name: "A Taste of Comfort: Stay, Dine, and Relax",
        description:
            "Enjoy a relaxing stay in our private villas, complete with restaurant where you can savor a variety of delicious local and international dishes. Each stay includes a complimentary breakfast, allowing you to start your day with comfort and ease in a serene setting surrounded by nature",
        image: "/villa/Restaurant5.webp",
    },
    {
        name: "Serenity with a View: Your Private Pool Escape in Nature",
        description:
            "Each villa features a private outdoor pool where you can unwind while taking in the stunning panoramic views of lush greenery and majestic mountains. It's the perfect spot for a peaceful dip at sunrise or a romantic evening soak — offering privacy, comfort, and nature at its finest.",
        image: "/villa/AreaBalcony1.webp",
    },
];
</script>

<style scoped></style>
