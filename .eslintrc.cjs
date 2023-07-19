/*
 * @Author: zhaoshali
 * @Date: 2023-07-19 11:14:48
 * @LastEditTime: 2023-07-19 11:14:48
 * @Description: 
 */
/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules:{
    'vue/multi-word-component-names':0,//不再强制要求组件命名
  }
}
