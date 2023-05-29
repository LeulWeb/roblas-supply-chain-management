<script setup>
import { ref } from 'vue'
import blogo from '../assets/blogo.png'
import wlogo from '../assets/wlogo.png'

let emit = defineEmits(['toggle'])


const props = defineProps({
        showNav : Boolean
    })



</script>

<template>
    <section class="fixed w-screen backdrop-blur-2xl bg-black/50 top-0 z-10 p-5 md:p-7 text-white">    
        <nav class="flex justify-between items-center w-11/12 md:w-10/12 mx-auto ">

            <div class="w-[10vh] md:w-[20vh]">
                <a href="#home"><img class="w-full" :src="wlogo" alt=""></a>
            </div>
            <ul class="hidden  md:flex space-x-5">
                <li>News</li>
                <li><a href="#products">Products</a></li>
                <li><a href="#feature">Feature</a></li>
                <li>About us</li>
                <li><a href="#contact">Contact us</a></li>
            </ul>

            <div v-if="!showNav" @click="emit('toggle')"  class="block md:hidden  cursor-pointer">
                <i  class="fa-solid fa-bars"></i>
            </div>

          


        </nav>
        
    </section>


   
</template>

