<template>
    <div
        :class="[
            'fixed z-10 top-0 left-0 w-full transition-all duration-300 bg-[#f3eee7] xl:px-56 px-4 lg:px-[100px] ',
            isScrolled ? 'h-14' : 'h-20',
        ]"
    >
        <div class="flex items-center justify-between h-full">
            <!-- Logo -->
            <NuxtLink to="/">
                <img
                    src="~/assets/img/cinze.png"
                    alt="logo"
                    class="max-w-10 transition-all duration-300"
                    :class="isScrolled ? 'scale-90' : 'scale-100'"
                />
            </NuxtLink>
            <p class="text-xl md:text-3xl font-normal " style="letter-spacing: 0.2em;">Cinze Villa's</p>
            <!-- Icon -->
             <a href="https://wa.me/6285735368258">
            <svg
                fill="#000000"
                height="40px"
                width="40px"
                viewBox="0 0 308 308"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
                c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
                c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
                c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
                c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
                c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
                c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
                c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
                c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
                C233.168,179.508,230.845,178.393,227.904,176.981z"
                    ></path>
                </g>
            </svg>
            </a>
        </div>
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
    // slider.value.addEventListener("wheel", (event) => {
    //     event.preventDefault();
    //     slider.value.scrollBy({ left: event.deltaY > 0 ? 200 : -200, behavior: "smooth" });
    // });
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScrollY);
});

const slider = ref(null);
const activeIndex = ref(0);

const handleScroll = () => {
    const scrollLeft = slider.value.scrollLeft;
    const itemWidth = slider.value.firstElementChild.offsetWidth + 16; // Width + gap
    activeIndex.value = Math.round(scrollLeft / itemWidth);
};
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
