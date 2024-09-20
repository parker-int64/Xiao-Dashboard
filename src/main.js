import { createApp } from 'vue'
import App from './App.vue'

// General format
import 'vfonts/Lato.css'

// Mono format
import 'vfonts/FiraCode.css'

import router from "./router/router";

const app = createApp(App)

// use vue-router
app.use(router)

// mount the app
app.mount('#app')