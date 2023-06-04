<script setup>
import Nav from '../components/Nav.vue'
import Carousel from '../components/Carousel.vue'
import Products from '../pages/Poducts.vue'
import {ref} from 'vue'

let showNav = ref(false);


const toggleNav = ()=>{

    showNav.value = !showNav.value
    console.log(showNav.value)

}



</script>

<template>
    <main class="overflow-x-hidden">
        <Nav  @toggle="toggleNav" :showNav="showNav" />
        <Carousel @toggle="toggleNav" :showNav ="showNav" />
    </main>


</template>


<style scoped>
</style>