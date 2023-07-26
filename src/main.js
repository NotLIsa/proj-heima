/*
 * @Author: zhaoshali
 * @Date: 2023-07-19 16:46:56
 * @LastEditTime: 2023-07-26 16:30:01
 * @Description: 
 */
import './assets/main.css';
import 'uno.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

//引入初始化样式
import './assets/main.css';

//定义懒加载插件
// import { useIntersectionObserver } from '@vueuse/core';

//测试接口函数
import { getCategory } from '@/apis/testAPI';

//引入懒加载指令插件并且注册
import { lazyPlugin } from '@/directives';

//引入全局组件插件
import { componentPlugin } from '@/components/index'
getCategory().then(res => {
  console.log(res);
});
const app = createApp(App) ;
app.use(createPinia()).use(router).use(lazyPlugin).use(componentPlugin).mount('#app');
//定义全局指令

/**
 * ========图片懒加载指令========
 * 直接写到插件中，然后引入插件即可
 * app.directive('img-lazy',{
  mounted(el, binding){
    //el: 指令绑定的那个元素 img
    //binding: binding.value 指令等于号后面的表达式的值 图片rul
    console.log(el, binding.value);
    useIntersectionObserver(
    el,
    ([{ isIntersecting }]) => {
      console.log(isIntersecting);
      if(isIntersecting){
        //进入视口区域
        el.src = binding.src;
      }
    }
    )
  }
})
 */
