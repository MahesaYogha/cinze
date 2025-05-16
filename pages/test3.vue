<template>
    <section ref="section1" class="h-svh transition-all duration-700 bg-slate-400"></section>
    <section
        ref="section2"
        class="h-[200vh] transition-all duration-700 bg-red-500 sticky z-0 flex flex-col justify-center items-center"
    >
        <img
            src="~/assets/img/test.webp"
            alt=""
            class="fade-animation absolute bottom-[900px] right-[100px] w-[200px] h-[100px] md:w-[800px] md:h-[400px] object-cover"
            style="animation-delay: 6s"
        />

        <!-- Batas atas diperpanjang (hitam) -->
        <div class="bg-blacka w-full h-[80vh] z-0"></div>

        <!-- Gambar sticky di tengah viewport -->
        <div class="sticky top-[50%] -translate-y-[80%] z-10">
            <img src="~/assets/img/test.webp" alt="" class="max-h-[60vh] w-auto object-contain" />
        </div>

        <!-- Batas bawah diperpanjang (putih) -->
        <div class="bg-whitea w-full h-[80vh] z-0"></div>
    </section>

    <section ref="section3" class="h-svh transition-all duration-700 bg-fuchsia-300 relative">
        <!-- Konten section 3 -->
        :class="{ '-translate-y-1/2 ': activeSection === 3, }"
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const section1 = ref(null);
const section2 = ref(null);
const section3 = ref(null);
const activeSection = ref(null);
const stickyActive = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    switch (entry.target) {
                        case section1.value:
                            activeSection.value = 1;
                            console.log("Section 1 terlihat");
                            break;
                        case section2.value:
                            activeSection.value = 2;

                            stickyActive.value = false;
                            console.log("Section 2 terlihat");
                            break;
                        case section3.value:
                            activeSection.value = 3;
                            stickyActive.value = true;
                            console.log("Section 3 terlihat");

                            break;
                    }
                }
            });
        },
        { threshold: 0.5 }
    );

    if (section1.value) observer.observe(section1.value);
    if (section2.value) observer.observe(section2.value);
    if (section3.value) observer.observe(section3.value);
});
</script>

<style scoped>
@keyframes fade {
    0%,
    20% {
        opacity: 0; /* Awal menghilang */
    }
    25%,
    75% {
        opacity: 1; /* Muncul selama 5 detik */
    }
    80%,
    100% {
        opacity: 0; /* Kembali menghilang */
    }
}

@keyframes translate {
    0% {
        transform: translateY(0); /* Mulai di posisi normal */
    }
    100% {
        transform: translateY(-200px); /* Bergerak ke atas terus */
    }
}

.fade-animation {
    animation: fade 12s linear infinite, translate 12s linear infinite;
    animation-fill-mode: both;
}
</style>
