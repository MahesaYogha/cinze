<template>

    <!-- Desktop -->
   
    <div
        class="bg-black hidden md:flex flex-col justify-center items-center py-20 space-y-24 relative"
    >
        <div>
            <img src="~/assets/img/cinze.png" class="w-[160px] invert brightness-0" alt="" />
        </div>
        <div class="flex flex-col items-center space-y-8">
            <div class="flex space-x-8 text-xl text-white">
                
                <NuxtLink to="https://wa.me/6285735368258">Reservation</NuxtLink>
                <NuxtLink to="http://wa.me/6281236157554">Support</NuxtLink>
                <NuxtLink to="http://wa.me/6281236157554">Careers</NuxtLink>
 
            </div>

            <div class="flex space-x-6 text-white">
                <a href="https://www.instagram.com/cinze_naturalhotspring_villas/">
                <div class="flex space-x-2 items-center justify-center">
                    <p class="text-lg">Instagram</p>

                    <img src="~/assets/icons/instagram.svg" alt="instagram logo" class="w-4 h-4" />
                </div>
                </a>
                <div class="flex space-x-2 items-center justify-center">
                    <p class="text-lg">Facebook</p>

                    <img src="~/assets/icons/facebook.svg" alt="facebook logo" class="w-4 h-4" />
                </div>
                <div class="flex space-x-2 items-center justify-center">
                    <p class="text-lg">Youtube</p>

                    <img src="~/assets/icons/youtube.svg" alt="youtube logo" class="w-5 h-5" />
                </div>
                <a href="https://www.tiktok.com/@cinze_">
                <div class="flex space-x-2 items-center justify-center">
                    <p class="text-lg">Titok</p>

                    <img src="~/assets/icons/tiktok.svg" alt="tiktok logo" class="w-4 h-4" />
                </div>
                </a>
                <a href="https://www.instagram.com/">
                <div class="flex space-x-2 items-center justify-center">
                    <p class="text-lg">tripadvisor</p>

                    <img
                        src="~/assets/icons/tripadvisor.svg"
                        alt="tripadvisor logo"
                        class="w-5 h-5"
                    />
                </div>
                </a>
            </div>
        </div>
        <div class="text-white">
           <a href="#" @click.prevent="scrollToTop">CINZE</a>
        </div>
    </div>

    <!-- Mobile -->
    <div
        class="bg-black md:hidden flex flex-col justify-center items-center py-20 space-y-10 relative"
    >
        <div>
            <img src="~/assets/img/cinze.png" class="w-[100px] invert brightness-0" alt="" />
        </div>
        <div class="flex flex-col items-center space-y-8">
            <div class="flex flex-col items-center space-y-2">
                <div class="flex space-x-2 text-sm text-white">
                    <NuxtLink to="https://wa.me/6285735368258">Reservation</NuxtLink>
                    <NuxtLink to="http://wa.me/6281236157554">Support</NuxtLink>
                    <NuxtLink to="http://wa.me/6281236157554">Careers</NuxtLink>
                </div>
                <!-- <div class="flex space-x-2 text-sm text-white">
                    <p>Rewards</p>
                    <p>My Reservation</p>
                    <p>Support</p>
                </div> -->
            </div>
            <div class="flex space-x-6 text-white">
                <a href="https://www.instagram.com/cinze_naturalhotspring_villas/">
                <div class="flex space-x-2 items-center justify-center">
                    <img src="~/assets/icons/instagram.svg" alt="instagram logo" class="w-4 h-4" />
                </div>
                </a>
                <div class="flex space-x-2 items-center justify-center">
                    <img src="~/assets/icons/facebook.svg" alt="facebook logo" class="w-4 h-4" />
                </div>
                <div class="flex space-x-2 items-center justify-center">
                    <img src="~/assets/icons/youtube.svg" alt="youtube logo" class="w-5 h-5" />
                </div>
                <a href="https://www.tiktok.com/@cinze_">
                <div class="flex space-x-2 items-center justify-center">
                    <img src="~/assets/icons/tiktok.svg" alt="tiktok logo" class="w-4 h-4" />
                </div>
                </a>
                <div class="flex space-x-2 items-center justify-center">
                    <img
                        src="~/assets/icons/tripadvisor.svg"
                        alt="tripadvisor logo"
                        class="w-5 h-5"
                    />
                </div>
            </div>
        </div>
        <div class="text-white">
           <a href="#" @click.prevent="scrollToTop">CINZE</a>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>
<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>