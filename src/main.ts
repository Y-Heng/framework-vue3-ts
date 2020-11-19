/*
 * @Descripttion:
 * @version:
 * @Author: kurumi
 * @Date: 2020-10-20 10:37:54
 * @LastEditors: kurumi
 * @LastEditTime: 2020-11-19 11:47:15
 */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vant from 'vant'
import VueParticles from 'vue-particles'

createApp(App)
  .use(Vant)
  .use(VueParticles)
  .use(store)
  .use(router)
  .mount('#app')
