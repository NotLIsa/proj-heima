/*
 * @Author: zhaoshali
 * @Date: 2023-07-19 11:16:48
 * @LastEditTime: 2023-07-19 14:34:21
 * @Description: 
 */
//creaRouter: 创建router实例对象
//createWebHistory: 创建historyy模式的路由
import { createRouter,createWebHistory } from "vue-router"
import Login from '@/views/Login/index.vue'
import LoginOut from '@/views/LoginOut/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Catrgory/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path 和 createWebHistory
  routes:[
    {
      path:"/",
      component: LoginOut,
      children:[
        {
          path:"",
          component: Home
        },
        {
          path:"/category",
          component: Category
        }
      ]
    },
    {
      path:"/login",
      component: Login
    }
  ]
})
export default router