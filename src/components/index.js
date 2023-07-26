/*
 * @Author: zhaoshali
 * @Date: 2023-07-26 16:25:42
 * @LastEditTime: 2023-07-26 16:29:21
 * @Description: 
 */
//把通用组件进行全局化注册
//通过插件的方式  
//在main.js中引入插件
import XxtImageView from "./XxtImageView.vue";
import XxtSku from "./XxtSku.vue";
export const componentPlugin = {
  install(app){
    //app.component('组件名字',组件配置对象)
    app.component('XxtImageView',XxtImageView)
    app.component('XxtSku',XxtSku)
  }
}