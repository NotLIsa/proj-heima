/*
 * @Author: zhaoshali
 * @Date: 2023-07-19 11:16:48
 * @LastEditTime: 2023-07-24 17:00:23
 * @Description: 
 */
//creaRouter: 创建router实例对象
//createWebHistory: 创建historyy模式的路由
import { createRouter,createWebHistory } from "vue-router"
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Catrgory/index.vue'
import showCategory from '@/views/showCategory/index.vue'
import detail from '@/views/detail/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path 和 createWebHistory
  routes:[
    {
      path:"/",
      component: Layout,
      children:[
        {
          path:"",
          component: Home
        },
        {
          path:"category/:id",
          component: Category
        },
        {
          path:"category/showCategory/:id",
          component: showCategory
        },
        {
          path:"detail/:id",
          component: detail
        },
      ]
    },
    {
      path:"/login",
      component: Login
    }
  ],
  //todo路由滚动行为定制    (在不同路由切换时，可以自动滚动到页面的顶部，而不是停留在原来的位置)
  scrollBehavior(){
      return {
        top: 0
      }
  }
})
export default router