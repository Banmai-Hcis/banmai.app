import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
// import Vue3Signature from "vue3-signature"
import router from './router'
import App from './App.vue'

import './style.css'

createApp(App)
  .use(VueCookies)
  // .use(Vue3Signature)
  .use(router)
  .mount('#app')
