<script setup>
import Service from '../components/Service.vue'
</script>


<template>
    <main id="feature" class="py-9 bg-black text-white min-h-screen  w-screen">
        <div class="w-11/12  md:w-10/12 mx-auto">
            <!-- <p class="text-4xl text-indigo-600   font-bold">Features</p> -->
            <!-- <p class="my-7">
                we offer customized solutions, reliable supply chain, competitive pricing, and exceptional customer service. Experience excellence in every aspect of your partnership with us.
            </p> -->



            <!-- Our Strength -->
            <div class="w-full grid grid-cols-1 md:grid-cols-2 place-items-center my-5 order-1 md:order-2 md:gap-x-5">
                <!-- Card to indicate numbers -->
                <div class="grid grid-cols-1 md:grid-cols-2 place-content-start gap-y-3 md:gap-5 order-2 md:order-1 mt-5">
                    <!--Customers  -->
                    <div class="card bg-white shadow-md  grid grid-cols-2 place-content-center  rounded-md md:row-span-2 p-5  md:px-2 " v-motion-slide-visible-right>


                        <div class="grid place-content-center">
                            <i class="fa-solid fa-users  text-4xl text-indigo-600 md:text-6xl"></i>   
                        </div>
                        <div class="flex item-center flex-col">
                        <p class="font-bold text-3xl text-indigo-600">1000+</p>
                        <p class="text-md font-normal text-black">Valued Customer</p>
                        
                        </div>
                    </div>

                    <!-- Trading  -->
                    <div class="card bg-white shadow-md   place-content-center  rounded-md p-5" v-motion-slide-visible-left>
                        <div class="grid grid-cols-2">
                            <div class="grid place-content-center">
                                <i class="fa-solid fa-chart-simple text-indigo-600 text-4xl"></i>   
                            </div>
                            <div class="flex item-center flex-col">
                            <div class="flex items-center justify-between space-x-2">
                                <p class="font-bold text-indigo-600 text-xl">10,000+</p>
                                <p class="font-light font-sm text-black">Tons</p>
                            </div>
                            <p class="text-md font-normal text-black">Annual Trading</p>
                            </div>
                        </div>

                        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sed facilis maiores </p> -->
                    </div>

                    <!-- Stock -->
                    <div class="card bg-white shadow-md   place-content-center  rounded-md p-5">
                        <div class="grid grid-cols-2" v-motion-slide-visible-right>
                            <div class="grid place-content-center">
                                <i class="ri-store-fill text-4xl text-indigo-600"></i>
                            </div>
                            <div class="flex item-center flex-col">
                                <div class="flex items-center justify-between space-x-2">
                                    <p class="font-bold text-xl text-indigo-600">10,000+</p>
                                    <p class="font-light font-sm text-black">Tons</p>
                                </div>
                            <p class="text-md font-normal text-black">Ready Stock</p>
                            </div>
                        </div>

                        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sed facilis maiores </p> -->
                    </div>
                    <!-- Banks -->
                    <div class="card bg-white shadow-md   place-content-center  rounded-md p-5" v-motion-slide-visible-left>
                        <div class="grid grid-cols-2">
                            <div class="grid place-content-center">
                                <i class="ri-bank-fill text-indigo-600 text-4xl"></i>   
                            </div>
                            <div class="flex item-center flex-col">
                                <div class="flex items-center  space-x-2">
                                    <p class="font-bold text-indigo-600 text-3xl">16</p>
                                    <p class="font-light font-sm text-black">Banks</p>
                                </div>
                            <p class="text-md font-normal text-black">World Class</p>
                            </div>
                        </div>

                        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sed facilis maiores </p> -->
                    </div>
                    <!-- Offices -->
                    <div class="card bg-white shadow-md   place-content-center  rounded-md p-5" v-motion-slide-visible-right> 
                        <div class="grid grid-cols-2">
                            <div class="grid place-content-center">
                                <!-- <i class="fa-solid fa-users  text-4xl"></i>   -->
                                <i class="ri-building-fill text-4xl text-indigo-600"></i> 
                            </div>
                            <div class="flex item-center flex-col">
                                <div class="flex items-center  space-x-2">
                                    <p class="font-bold text-indigo-600 text-3xl">5</p>
                                    <p class="font-light font-sm text-black">Offices</p>
                                </div>
                            <p class="text-md font-normal text-black">Active Office</p>
                            </div>
                        </div>
<!-- 
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sed facilis maiores </p> -->
                    </div>
                    <!-- personnels -->
                   <div class="card bg-white shadow-md   place-content-center  rounded-md p-5" v-motion-slide-visible-left>
                        <div class="grid grid-cols-2">
                            <div class="grid place-content-center">
                                <i class="fa-solid fa-briefcase text-indigo-600 text-4xl"></i>
                            </div>
                            <div class="flex item-center flex-col">
                                <div class="flex items-center justify-between space-x-2">
                                    <p class="font-bold text-3xl text-indigo-600">30</p>
                                    <p class="font-light font-sm text-black">Personnel</p>
                                </div>
                            <p class="text-md font-normal text-black">Qualified</p>
                            </div>
                        </div>

                        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sed facilis maiores </p> -->
                    </div>

                    <!-- countires -->
                    <div class="card bg-white shadow-md   place-content-center  rounded-md p-5" v-motion-slide-visible-right>
                        <div class="grid grid-cols-2">
                            <div class="grid place-content-center">
                                <i class="ri-flag-fill text-indigo-600 text-4xl"></i>
                            </div>
                            <div class="flex item-center flex-col">
                                <div class="flex items-center justify-between space-x-2">
                                    <p class="font-bold text-3xl text-indigo-600">10+</p>
                                    <p class="font-light font-sm text-black">Countries</p>
                                </div>
                            <p class="text-md font-normal text-black">3 Continents</p>
                            </div>
                        </div>
<!-- 
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sed facilis maiores </p> -->
                    </div>
                </div>

                <div>
                    <p class="text-4xl text-indigo-600  my-5   font-bold">Our Strength</p>
                    <p>
                        we ensure reliable and consistent supply. Backed by world-class warehousing facilities, state-of-the-art processing units, and a dedicated team, we deliver excellence with unwavering commitment. Trust in our expertise to meet your needs and exceed your expectations.
                    </p>
                </div>
            </div>
        </div>
    </main>
    <Service/>
</template>




<style scoped>

</style>