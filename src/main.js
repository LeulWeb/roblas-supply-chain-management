import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'


import { MotionPlugin } from '@vueuse/motion'
const app = createApp(App);

app.use(MotionPlugin)
app.mount('#app')

// createApp(App).mount('#app')
