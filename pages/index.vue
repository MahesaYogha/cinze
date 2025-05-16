<template>
    <!-- Header -->
    <IndexHeader />

    <IndexStickySection />

    <IndexMenuSection />

    <!-- Footer -->
    <IndexFooter />
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

<style scoped>
.rido {
    position: sticky;
    top: 0;
}
</style>
