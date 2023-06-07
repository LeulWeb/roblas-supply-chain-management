<template>
    <main id="contact" class="h-[100vh] overflow-y-hidden text-white relative inset-0  right-0 w-screen grid place-content-center overflow-x-hidden py-12">
        <video class="h-screen w-screen object-cover " autoplay muted loop id="myVideo">
            <source src="../assets/contact.mp4" type="video/mp4">
          </video>

          <section class="bg-black/80 absolute w-screen h-full  items-center justify-center top-0 right-0">

            <div class="w-11/12 md:w-10/12  mx-auto flex flex-col md:flex-row h-full  md:justify-between  md:items-center justify-center ">
                <div class="order-1 md:order-2 w-[100%]  md:w-[50%]">
                    <p class="font-bold text-3xl text-white mt-1 md:mt-6 text-justify">Contact Us</p>
                    <p class="py-2 md:py-4 text-justify ">
                        At Roblas Supply Chain Management Pty Ltd, we value your aspirations and strive to exceed your expectations. Let's collaborate and bring your vision to life. Contact us today to discuss your needs, explore our exceptional products and services, and embark on a journey of success together. Your satisfaction is our utmost priority, and we look forward to serving you with excellence.
                    </p>

                    <div class="flex w-full justify-between items-center my-2" >
                        
                            <div class="flex items-center space-x-2">
                                <i class="fa-brands text-xl  md:text-4xl fa-twitter"></i>
                                <span>Twitter</span>
                            </div>
                           <div class="flex items-center space-x-2">
                            <i class="fa-brands text-xl  md:text-4xl fa-linkedin"></i>
                            <span>Linked In</span>
                           </div>
                           <div class="flex items-center space-x-2">
                            <i class="fa-brands text-xl  md:text-4xl fa-square-facebook"></i>
                            <span>Facebook</span>
                           </div>

                    </div>
                </div>
                

                <div class="p-2 sm:p-4 rounded-md bg-transparent border-2 shadow-md mt-2 md:mt-6 order-2 md:order-1 w-[100%]  md:w-[40%]">
                    <form action="https://formsubmit.co/contact@roblassupplychain.com" class="text-black w-full " method="POST">
                        <label>
                            
                            <input class="border-b-2 bg-transparent border-white p-2 enabled:outline-none text-white w-full" type="text" placeholder="Full Name" required name="name">
                        </label>
                        <br>
                        <label>
                            <input class="border-b-2 bg-transparent border-white p-2 enabled:outline-none text-white w-full" type="text" placeholder="your email" required name="email">
                        </label>
                        <br>
                        <label >
                            <textarea class=" bg-transparent  enabled:outline-none rounded-md my-2 p-2 w-full text-white" name="message" id="" cols="25" rows="1" required>What should we discuss ?....</textarea >
                        </label>
                        <button class="bg-indigo-600 rounded-md py-4 text-lg w-full text-white" type="submit">Send</button>
                    </form>
                </div>

               
            </div>
          </section>
         
    </main>
</template>