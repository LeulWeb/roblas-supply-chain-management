<script setup>

    import {onUpdated, ref} from 'vue';
    import { onMounted } from 'vue';
    import {gsap} from 'gsap';

    const props = defineProps({
        showNav : Boolean
    })


    let index = ref(0);
    let word = ref(0);
    let keyProduct = ref('Cars')

    const emit = defineEmits('toggle')

    const images= [
        "url('./../assets/2.jpg')",
  "url('./../assets/1.jpg')",
  "url('./../assets/3.jpg')",
  "url('./../assets/4.jpg')",
  "url('./../assets/5.jpg')",
  "url('./../assets/cars6.jpg')",
    ]

    const keyWords = [
        "Cars",
        "3 wheel cars",
        "Security System",
        "Raw Material for Industry",
    ]

    // const textElement = ref(null);

    //Working with GSAP






//     const animateTyping = () => {
//   const text = "Hello, World!"; // Text to be typed
//   const duration = 0.05; // Duration for each character to appear

//   gsap.set(textElement.value, { opacity: 1 }); // Set initial opacity to 1

//   gsap.to(text.split(''), {
//     duration,
//     delay: 0.5, // Delay before animation starts
//     opacity: 1,
//     y: 0,
//     stagger: duration,
//     ease: 'power1.in',
//     overwrite: 'auto',
//     onUpdate: function () {
//       textElement.value.innerText = this.targets()[0].textContent; // Update the displayed text
//     },
//     onComplete: function () {
//       console.log('Typing animation completed!');
//     },
//   });
// };

    let animateWord=()=>{
        setInterval(()=>{
            if(word.value == keyWords.length-1){
                word.value= 0;
            }
            word.value++
            console.log(word.value);
        },5000)

    }
    
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
        // animateWord()
        // animateTyping()
        
    gsap.from(".hero", {opacity: 0, duration: 1});
    gsap.fromTo(".hero-text",{
        x : '-100vw',
        opacity: 0,
        delay:1,
        duration:1,
    },{
        opacity: 1,
        x: '100vw',
        delay: 2,
        duration: 1,
        ease: "bounce"
    })

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