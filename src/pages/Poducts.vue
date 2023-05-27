
<script setup>
import productsList from '../data/products'

</script>



<template>
    <main class="absolute top-[100vh]  w-screen bg-gray-200 overflow-x-hidden py-8">
      <div class="w-10/12 mx-auto ">
            <p class="text-3xl  font-bold">Products</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam beatae, deserunt ullam delectus repellat dicta cupiditate architecto iure nostrum. Pariatur dolorum aspernatur iure odio, totam exercitationem dolores neque magnam.
            </p>

            <!-- Gallery of products -->
            <div class=" gallery grid grid-cols-1 md:grid-cols-2 place-content-start  gap-6  min-h-screen my-4 mx-auto">
            <section  v-for="product in productsList" v-bind:key="product.title" class="w-full md:h-[40vh]  md:w-[40vw]  grid  grid-cols-1 md:grid-cols-2  target rounded-lg shadow-md place-items-center gap-x-3 bg-white overflow-hidden" v-motion-slide-visible-left>
                <div>
                    <img class="w-full h-full" :src="product.img" alt="">
                </div>
                <div>
                    <p class="font-bold text-xl capitalize p-2 ">{{ product.title }}</p>
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