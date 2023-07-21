//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
  install(app){
    //懒加载指令逻辑
    app.directive('img-lazy',{
      mounted(el, binding){
        //el: 指令绑定的那个元素 img
        //binding: binding.value 指令等于号后面的表达式的值 图片rul
        // console.log(el, binding.value);
        /**
         * useIntersectionObserver对于元素的监听是一直存在的，除非手动停止监听，存在内存浪费
         * 解决办法：在监听的图片第一次加载完成之后就停止监听
         */
        //useIntersectionObserver()
        const { stop } = useIntersectionObserver(
        el,
        ([{ isIntersecting }]) => {
          console.log( isIntersecting, '图片懒加载');
          if(isIntersecting){
            //进入视口区域
            el.src = binding.value;
            stop();
          }
        }
        )
      }
    })
  }
}