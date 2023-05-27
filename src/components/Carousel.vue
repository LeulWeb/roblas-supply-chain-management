<script setup>

    import {onUpdated, ref} from 'vue';
    import { onMounted } from 'vue';
    import {gsap} from 'gsap';

    let index = ref(0);
    let word = ref(0);
    let keyProduct = ref('Cars')

    const images= [
        "url('./src/assets/2.jpg')",
        "url('./src/assets/1.jpg')",
        "url('./src/assets/3.jpg')",
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
    <main class="bkg text-white absolute inset-0  right-0 w-screen overflow-x-hidden h-screen" :style="{'background-image': images[index]}" >
        <div class="absolute top-0 right-0 bg-black opacity-70 h-screen w-screen">
            <!-- Content of the carousel -->
        </div>
            <div class="absolute  right-0 top-0  flex items-center  h-screen w-screen">
               
                <div class="w-10/12 relative flex  justify-between items-center  mx-auto h-full">
                    
                    <div class="w-5/12 flex-col justify-center items-start">
                        <h1 class="hero text-3xl border-l-black">ROBLAS supply chain management</h1>
                        <p class="mt-4 hero">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi doloribus dignissimos delectus laborum vero minus aperiam maiores non facilis dolores, ut, perspiciatis rerum ullam culpa iure. Cumque fugiat commodi molestias!
                            <strong id="hero-text"  class="hero-text text-2xl font-bold text-blue-600 uppercase">
                                {{ keyWords[word] }}
                            </strong>
                        </p>
                    </div>
                </div>
              
        </div>
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
</style>