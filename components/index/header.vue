<template>
    <div class="w-full h-svh overflow-hidden bg-black sticky top-0 -z-10 xl:z-0">
        <div
            v-for="(image, index) in images"
            :key="index"
            class="absolute bg-cover"
            :class="{
                'opacity-0 duration-[3s]': index !== currentImageIndex,
                'opacity-100 duration-[3s]': index === currentImageIndex,
            }"
        >
            <img :src="image" alt="" class="object-cover h-svh w-svw" />
        </div>

        <!-- Teks tengah gambar -->
        <div
            class="absolute flex flex-col h-full w-full items-center justify-center text-white top-0 space-y-20"
        >
            <img
                src="~/assets/img/cinze.png"
                class="max-w-[100px] md:max-w-[260px] invert brightness-0"
                alt=""
            />
            <div
                class="flex flex-col items-center justify-center text-center font-geller md:text-[35px] text-[20px] max-w-[300px]"
            >
                <p>Rise with the Sun, Explore the Peaks, Relax in Warm Serenity</p>
            </div>
        </div>

        <!-- Button -->
        <div class="hidden xl:block">
            <!-- Tombol Previous -->
            <button
                @click="prevImage"
                class="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 p-2 transition-transform duration-200 scale-50 md:scale-100 md:hover:scale-125"
            >
                <svg
                    fill="#ffffff"
                    width="30px"
                    height="30px"
                    viewBox="-7.04 -7.04 46.08 46.08"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    stroke-width="3.2"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke="#CCCCCC"
                        stroke-width="0.256"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <title>circle</title>
                        <path
                            d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048z"
                        ></path>
                    </g>
                </svg>
            </button>
            <!-- Tombol Next -->
            <button
                @click="nextImage"
                class="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 p-2 transition-transform duration-200 scale-50 md:scale-100 md:hover:scale-125"
            >
                <svg
                    fill="#ffffff"
                    width="30px"
                    height="30px"
                    viewBox="-7.04 -7.04 46.08 46.08"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    stroke-width="3.2"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke="#CCCCCC"
                        stroke-width="0.256"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <title>circle</title>
                        <path
                            d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048z"
                        ></path>
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = ["/img/index/header4.webp", "/img/index/header6.webp", "/img/index/header5.webp", "/img/index/header1.webp","/img/index/header2.webp"];

const currentImageIndex = ref(0);
let intervalId = null; // Menyimpan ID interval

// Fungsi untuk memulai interval yang mengubah gambar setiap 3 detik
const startImageInterval = () => {
    if (intervalId) {
        clearInterval(intervalId); // Hentikan interval sebelumnya
    }

    intervalId = setInterval(() => {
        currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
    }, 3000); // Ganti gambar setiap 3 detik
};

// Fungsi untuk mengganti gambar ke sebelumnya
const prevImage = () => {
    currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length;
    startImageInterval(); // Mulai ulang interval setelah tombol ditekan
};

// Fungsi untuk mengganti gambar ke berikutnya
const nextImage = () => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
    startImageInterval(); // Mulai ulang interval setelah tombol ditekan
};

// Fungsi untuk mereset animasi zoom dan opacity

onMounted(() => {
    startImageInterval(); // Mulai interval pertama kali saat komponen dimuat
});

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId); // Bersihkan interval saat komponen di-unmount
    }
});
</script>

<style scoped></style>
