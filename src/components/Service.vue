<script setup>
    import featureList from '../data/features'
    console.log(featureList);
</script>


<template>
   <main class="w-screen ">
    <!-- <section class="w-11/12 md:w-10/12 mx-auto py-7">
        <p class="my-4 text-2xl text-indigo-600  font-bold">Our Services</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            <div class=" lowercase " v-motion-slide-visible-top>
               
                <div class=" py-3 lowercase first-letter:capitalize before:content-[''] before:block before:w-12 before:h-1 before:bg-indigo-600 ">
                    <span class="text-indigo-600 font-bold text-lg capitalize" >Shipment</span><i class="fa-solid fa-ship text-indigo-600"></i>
                    <p>DIRECT SHIPMENT TO THE BUYERS, BOTH IN BULK AND BAGGED CARGO</p>
                </div>
               <p class=" py-3 first-letter:uppercase before:content-[''] before:block before:w-12 before:h-1 before:bg-indigo-600 ">HANDLING OF EXPORT OFFERS EFFICIENTLY, RANGING FORM CONTAINER LOAD TO CHARTER VESSELS</p>
               <p class=" py-3 first-letter:uppercase before:content-[''] before:block before:w-12 before:h-1 before:bg-indigo-600 ">ARRANGING CREDIT FACILITIES, RANGING FORM 60 TO 180 DAYS ON INTERNATIONAL CREDIT NORMS</p>
               <p class=" py-3 first-letter:uppercase before:content-[''] before:block before:w-12 before:h-1 before:bg-indigo-600 ">
                HIGHLY COMPETITIVE PRICES TO DIRECT USERS, TRADERS AND SALE BY TENDERS
               </p>
            </div>
            <div class="lowercase " v-motion-slide-visible-top>
                <p class=" py-3 first-letter:uppercase before:content-[''] before:block before:w-12 before:h-1 before:bg-indigo-600 "> MAINTAINING INTERNATIONAL QUALITY STANDARDS</p>
                <p class=" py-3 first-letter:uppercase before:content-[''] before:block before:w-12 before:h-1 before:bg-indigo-600 ">
                    LARGE WAREHOUSING FACILITY AT PLANTS AND PORTS 
                </p>
                <p class=" py-3 first-letter:uppercase before:content-[''] before:block before:w-12 before:h-1 before:bg-indigo-600 ">
                    OFFERING SUPPLIERS THROUGH OUT THE YEAR 
                </p>
                <p class=" py-3 first-letter:uppercase before:content-[''] before:block before:w-12 before:h-1 before:bg-indigo-600 ">
                    JOINT VENTURE INCLUDE TAILOR MADE FACILITIES FOR LARGE BUYERS NATIONAL AS WELL INTERNATIONAL
                </p>
            </div>
            <div class="lowercase" v-motion-slide-visible-top>
                <p class=" py-3  before:content-[''] before:block before:w-12 before:h-1 before:bg-indigo-600 ">ARRANGING QUOTATION & SAMPLE SWIFTLY AND REGULAR INTERACTION WITH CUSTOMER THROUGH A WELL DESIGNED MARKETING NETWORK</p>
                <p class=" py-3 first-letter:uppercase before:content-[''] before:block before:w-12 before:h-1 before:bg-indigo-600 ">
                    TRANINED EXECUTIVE`S TO HANDLE EXPORT ASSIGNMENT EFFICENTLY AND TO SERVICE EXPORT ORDERS TO THE ENTIRE SATISFACTION OF OVERSEAS BUYERS 
                </p>
                <p class=" py-3 first-letter:uppercase before:content-[''] before:block before:w-12 before:h-1 before:bg-indigo-600 ">
                    SENIOR MANAGEMENT KEEP ABREAST OF LATEST TRENDS AND DEVELOPMENT IN INTERNATIONAL MARKETS 
                </p>
            </div>
            
        </div>
    </section> -->





    <!-- Alternative testing -->
<!-- Features -->
<div class="bg-white text-black py-32 ">
    <div class="w-11/12 md:w-10/12 mx-auto">
        <div class="text-start text-gray-600 dark:text-gray-100 mb-12">
            <p class="text-4xl text-black font-bold mb-2">Our Valuable Features</p>
            <p class="text-black">Explore what features we provide</p>
        </div>

        <div class="flex justify-center ">
            <div class="flex justify-center  flex-wrap">
                <!-- List of service or unique feature -->
                <div v-for="feature in featureList" v-bind:key="feature.title" class="border border-transparent hover:shadow-lg p-4 rounded-md transition-all  w-[50%] md:w-[25%]">
                    <button v-html="feature.icon" class="text-black bg-slate-100 p-2 rounded-md"></button>
                    <p class="text-lg font-bold mt-3 mb-2 text-black text-start">{{feature.title}}</p>
                    <p class="text-gray-700 text-start">{{feature.description}}</p>
                </div>
            </div>
        </div>
    </div>
</div>



   </main>

   <div class="md:w-10/12 w-11/12 mx-auto my-4">
    <p class="text-3xl font-bold text-indigo-600">Where are we?</p>
</div>
   <section class="w-screen bg-black">
   
    <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=14.765625000000002%2C-16.46769474828897%2C149.41406250000003%2C66.08936427047088&amp;layer=mapnik" style=" pointer-events: none;"></iframe>

        <div class="w-11/12 md:w-10/12 mx-auto flex justify-between py-10">
            <p class="font-bold text-lg md:text-2xl uppercase text-white">Africa</p>
            <p class="font-bold text-lg md:text-2xl uppercase text-white">Asia</p>
            <p class="font-bold  text-lg md:text-2xl uppercase text-white">Europe</p>

        </div>
   </section>
</template>