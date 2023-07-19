/*
 * @Author: zhaoshali
 * @Date: 2023-07-19 09:47:27
 * @LastEditTime: 2023-07-19 09:50:06
 * @Description: 
 */
import {defineStore} from 'pinia'
import {ref} from 'vue'
export const useCountStore = defineStore('counter',()=>{
  const count = ref(0)
  const increment = () => {
    count.value++
  }
  return {count,increment}
})