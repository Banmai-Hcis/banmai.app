import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
import VueSweetalert2 from 'vue-sweetalert2';

// import Vue3Signature from "vue3-signature"
import router from './router'
import App from './App.vue'

import './style.css'
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
  .use(VueCookies)
  .use(VueSweetalert2)
  .use(router)
  .mount('#app')
