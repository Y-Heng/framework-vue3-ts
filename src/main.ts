/*
 * @Descripttion:
 * @version:
 * @Author: kurumi
 * @Date: 2020-10-20 10:37:54
 * @LastEditors: kurumi
 * @LastEditTime: 2020-10-27 16:29:33
 */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
