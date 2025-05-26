<template>
    <div class="relative h-[100vh] md:h-[150vh] flex flex-col justify-center items-center bg-black">
        <!-- <img class="object-fill absolute scale-[200"   src="~assets/index/menu/hotspringmenu.png" alt=""> -->
        <img
            src="~/assets/index/stiky/Stiky1.webp"
            alt=""
            class="fade-animation absolute bottom-[300px] right-[50px] w-[150px] h-[150px] md:w-[400px] md:h-[400px] object-cover"
            style="animation-delay: 0s"
        />
        <img
            src="~/assets/index/stiky/Stiky2.webp"
            alt=""
            class="fade-animation absolute bottom-[200px] md:bottom-[850px] right-[150px] w-[200px] h-[100px] md:w-[800px] md:h-[400px] object-cover"
            style="animation-delay: 6s"
        />
        <img
            src="~/assets/index/stiky/Stiky5.webp"
            alt=""
            class="fade-animation absolute bottom-[10px] left-[100px] w-[200px] h-[100px] md:w-[700px] md:h-[400px]  object-cover"
            style="animation-delay: 2s"
        />
        <img
            src="~/assets/index/stiky/Stiky3.webp"
            alt=""
            class="fade-animation absolute top-[250px] left-[10px] md-left-[100px] w-[100px] h-[100px] md:w-[600px] md:h-[600px] object-cover"
            style="animation-delay: 5s"
        />
        <img
            src="~/assets/index/stiky/Stiky4.webp"
            alt=""
            class="fade-animation absolute bottom-[100px] left-1/2 transform -translate-x-1/2 w-[150px] h-[150px] md:w-[600px] md:h-[600px] object-cover"
            style="animation-delay: 8s"
        />

        <!-- Wrapper Sticky -->
        <!-- Gambar sticky di tengah viewport -->
        <div class="sticky top-[50%] -translate-y-[50%] z-10">
            <p
                class="w-full md:max-w-[700px] max-w-[300px] text-center text-sm md:text-2xl lg:text-3xl text-white font-tight"
    style="line-height: 1.5;"
            >
                Lifestyle experiences inspired by the harmony of nature and adventure. Rooted in the spirit of the mountains and the warmth of the rising sun.<br />
                <br />
                CINZE invites you to embrace every journey, from exhilarating peak explorations to moments of peaceful serenity.<br />
                <br />

                CINZE offers an ideal harmony between excitement and peacefulness.

            </p>
        </div>
    </div>
</template>

<script setup></script>

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
