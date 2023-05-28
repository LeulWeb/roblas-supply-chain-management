
<script setup>
import productsList from '../data/products'

</script>



<template>
    <main id="products" class=" w-screen bg-gray-200 overflow-x-hidden py-8">
      <div class="w-10/12 mx-auto ">
            <p class="text-3xl text-indigo-600  font-bold">Products</p>
            <p class="my-7">
                Discover a world of possibilities with Roblas Supply Chain Management Pty Ltd. From tiles and building materials to home accessories, cars, agriculture tools, and security systems, we offer a wide range of exceptional products. With our expertise in agro food commodities, we also provide quality grains, oils, and more. Experience convenience and quality with us.
            </p>

            <!-- Gallery of products -->
            <div class=" gallery grid grid-cols-1 md:grid-cols-2 place-content-start  gap-6  min-h-screen my-4 mx-auto">
            <section  v-for="product in productsList" v-bind:key="product.title" class="w-full md:h-[40vh]  md:w-[40vw]  grid  grid-cols-1 md:grid-cols-2  target place-items-center gap-x-3  overflow-hidden bg-white rounded-lg shadow-md" v-motion-slide-visible-left>
                <div>
                    <img class="w-full " :src="product.img" alt="">
                </div>
                <div class=" p-3">
                    <p class="font-bold text-xl text-indigo-600 capitalize p-2 ">{{ product.title }}</p>
                    <p class="font-light text-sm p-2">{{product.description}}</p>
                </div>
                
            </section>
            <!-- <section class="h-[40vh] w-[40vw] mt-20 target rounded-lg shadow-md bg-white" v-motion-slide-visible-right></section>
            <section class="h-[40vh]  w-[40vw]   target rounded-lg shadow-md bg-white" v-motion-slide-visible-left></section>
            <section class="h-[40vh] w-[40vw] mt-20 target rounded-lg shadow-md bg-white" v-motion-slide-visible-right></section>
            <section class="h-[40vh]    w-[40vw]   target rounded-lg shadow-md bg-white" v-motion-slide-visible-left></section>
            <section class="h-[40vh] mt-10 w-[40vw] target rounded-lg shadow-md bg-white" v-motion-slide-visible-right></section>
            <section class="h-[40vh]  w-[40vw]   target rounded-lg shadow-md bg-white" v-motion-slide-visible-left></section>
            <section class="h-[40vh] mt-20 w-[40vw]  target rounded-lg shadow-md bg-white" v-motion-slide-visible-right></section>
            <section class="h-[40vh]  w-[40vw]  target rounded-lg shadow-md bg-white" v-motion-slide-visible-left></section>
            <section class="h-[40vh] mt-20 w-[40vw]  target rounded-lg shadow-md bg-white" v-motion-slide-visible-right></section>
            <section class="h-[40vh]  w-[40vw] target rounded-lg shadow-md bg-white" v-motion-slide-visible-left></section>
            <section class="h-[40vh] mt-20 w-[40vw]  target rounded-lg shadow-md bg-white" v-motion-slide-visible-right></section> -->
            </div>
      </div>
    </main>
</template>


<style scoped>


</style>