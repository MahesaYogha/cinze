<template>
    <div class="relative h-svh w-svw overflow-hidden">
        <div
            v-for="(image, index) in images"
            :key="index"
            class="absolute h-svh w-svw inset-0"
            :class="{
                'opacity-0 duration-[3s]': index !== currentImageIndex,
                'opacity-100 duration-[3s]': index === currentImageIndex,
            }"
        >
            <img :src="image" alt="" class="object-cover w-full h-full" />
        </div>
        <!-- Tombol Previous -->
        <button
            @click="prevImage"
            class="absolute left-5 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
        >
            Prev
        </button>
        <!-- Tombol Next -->
        <button
            @click="nextImage"
            class="absolute right-5 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
        >
            Next
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = ["/img/test/satu.jpg", "/img/test/dua.jpg", "/img/test/tiga.jpg"];

const currentImageIndex = ref(0);
let intervalId = null; // Menyimpan ID interval

// Fungsi untuk memulai interval yang mengubah gambar setiap 3 detik
const startImageInterval = () => {
    if (intervalId) {
        clearInterval(intervalId); // Hentikan interval sebelumnya
    }

    intervalId = setInterval(() => {
        currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
        setTimeout(() => (zoomInActive.value = false), 3000); // Matikan zoom setelah 3 detik (durasi animasi)
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
const resetZoom = () => {
    zoomInActive.value = false; // Nonaktifkan animasi zoom terlebih dahulu
    setTimeout(() => {
        zoomInActive.value = true; // Aktifkan animasi zoom lagi setelah sedikit delay untuk memastikan animasi dimulai kembali
    }, 50);
};

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
