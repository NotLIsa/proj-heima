import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//引入初始化样式
import './assets/main.css'

//测试接口函数
import { getCategory } from '@/apis/testAPI'
getCategory().then(res => {
  console.log(res)
})
createApp(App).use(createPinia()).use(router).mount('#app')
