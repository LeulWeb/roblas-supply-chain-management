<script setup>
import blogo from '../assets/blogo.png'
import wlogo from '../assets/wlogo.png'

</script>

<template>
    <section class="sticky top-0 z-10 text-white">    
        <nav class="flex justify-between items-center w-10/12 mx-auto ">

            <div class="w-[20vh]">
                <img class="w-full" :src="wlogo" alt="">
            </div>
            <ul class="flex space-x-3">
                <li>News</li>
                <li>Products</li>
                <li>Feature</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </nav>
    </section>
</template>

