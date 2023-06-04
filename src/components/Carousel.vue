<script setup>


    import { onMounted } from 'vue';
    import { ref } from 'vue';


    import image1 from '../assets/1.jpg'
    import image2 from '../assets/2.jpg'
    import image3 from '../assets/3.jpg'
    import image4 from '../assets/4.jpg'
    import image5 from '../assets/5.jpg'
    import image6 from '../assets/cars6.jpg'

    const props = defineProps({
        showNav : Boolean
    })


    let index = ref(0);
   

    const emit = defineEmits('toggle')

    const images= [
        `url(${image3})`, 
        `url(${image1})`, 
        `url(${image2})`, 
        `url(${image4})`, 
        `url(${image5})`, 
        `url(${image6})`, 
    ]



     let startCarousel= ()=>{
        setInterval(()=>{
            if(index.value == images.length-1){
                index.value =0
            }
            index.value++
            
        }, 3000);
     }

  
    onMounted(() => {
        startCarousel()
    })

</script>


<template>
    <main id="home" class="bkg hidden sm:block text-white relative inset-0  right-0 w-screen overflow-x-hidden h-screen" :style="{'background-image': images[index]}" >
        <div class="bg-black opacity-80 h-screen w-screen">
            <div class=" right-0 top-0 flex items-center  h-screen w-screen">
                
               

                <div class="w-11/12 md:w-10/12  flex  justify-between items-center  mx-auto h-full">
                    
                    <div class=" md:w-7/12  flex-col justify-center items-start">
                        <p class="hero text-7xl  font-bold text-indigo-600">ROBLAS supply chain management</p>
                        <p class="mt-4 hero  text-lg">
                            Discover Roblas Supply Chain Management Pty Ltd, your trusted partner for a diverse range of exceptional products. From tiles to cars, agriculture tools to security systems, we deliver quality and value. With expertise in agro food commodities, we ensure constant supply and competitive prices. Plant the seeds of success with us today.
                            <!-- <strong id="hero-text"  class="hero-text text-2xl font-bold text-blue-600 uppercase">
                                {{ keyWords[word] }}
                            </strong> -->
                        </p>
                        <div class="w-44 bg-indigo-600 text-lg font-semibold rounded-md mt-3 flex justify-center items-center py-3 space-x-4">
                            <p><a href="#contact">Let's talk</a></p>
                            <i class="fa-solid fa-arrow-right text-lg"></i>
                        </div>
                    </div>
                </div>
              
        </div>            
        </div>
            
    </main> 


    <main class=" sm:hidden  h-screen text-white relative inset-0  right-0 w-screen overflow-x-hidden">
        <video class="object-cover md:hidden h-screen" autoplay muted loop id="myVideo">
            <source src="../assets/phoneHero.mp4" type="video/mp4">
          </video>

          <div v-if="showNav"  class="sm:hidden z-10 w-[50vw] h-screen absolute top-0 right-0 bg-black/80 px-4 overflow-hidden ">
            <div class="flex flex-col items-start h-full justify-start py-4">
                <div  @click="emit('toggle')"  class="block md:hidden self-end cursor-pointer my-10">
                    <i class="fa-regular fa-x"></i>
                </div>
                <div>
                    <img src="../assets/wlogo.png" alt="">
                </div>
                <div>
                    <ul class="flex flex-col space-y-5 mt-5">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#feature">Feature</a></li>
                        <li><a href="#about">About us</a></li>
                        <li> <a href="#contact">Contact us</a> </li>
                    </ul>
                </div>
            </div>
        </div>

          <section class="bg-black/80 absolute w-screen h-full flex flex-col items-center justify-center top-0 right-0">
            <div class="w-11/12 mx-auto">
                <p class="hero text-4xl font-bold text-indigo-600 ">ROBLAS supply chain management</p>
            <p class="mt-4 hero text-justify ">
               Discover Roblas Supply Chain Management Pty Ltd, your trusted partner for a diverse range of exceptional products. From tiles to cars, agriculture tools to security systems, we deliver quality and value. With expertise in agro food commodities, we ensure constant supply and competitive prices. Plant the seeds of success with us today.
                <!-- <strong id="hero-text"  class="hero-text text-2xl font-bold text-blue-600 uppercase">
                    {{ keyWords[word] }}
                </strong> -->
            </p>

            <div class="w-44 bg-indigo-600 text-lg font-semibold rounded-md mt-3 flex justify-center items-center py-3 space-x-4">
                <p><a href="#contact">Let's talk</a></p>
                <i class="fa-solid fa-arrow-right text-lg"></i>
            </div>
            </div>
          </section>
         
    </main>
</template>


<style scoped>
    .bkg{
       
        background-repeat: no-repeat;
        background-size: cover;
    }



    h1 {
        opacity: 0;
        transform: translateY(10px);
    }


    @media screen and (max-width: 600px) {
        .bkg {
          background-color:white !important;
          background-size: cover;
        }
      }
</style>