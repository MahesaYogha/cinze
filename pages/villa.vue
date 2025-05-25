<template>
    <div class="bg-[#f3eee7] relative">
        <!-- Sticky Whatsapp Icon -->
        <a 
            href="https://wa.me/6281226971561?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Anda" 
            target="_blank" 
            rel="noopener noreferrer"
            class="md:bottom-10 md:right-10 bottom-8 right-4 fixed z-10"
        >
            <img
                src="~/assets/icons/whatsapp.svg"
                alt="Chat WhatsApp"
                class="w-[65px] md:w-20"
            />
        </a>

        <!-- Navigator -->
        <VillaNavigator :isScrolled="isScrolled" />

        <!-- Main -->
        <div class="flex flex-col pt-32">
            <!-- Video Section -->
            <VillaVideoSection />

            <!-- Grid Items -->
            <VillaGridSection />

            <!-- Slider Section -->
            <VillaSlidder />
        </div>

        <!-- Footer -->
        <VillaFooter />
    </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScrollY = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener("scroll", handleScrollY);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScrollY);
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
