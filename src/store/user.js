/*
 * @Author: zhaoshali
 * @Date: 2023-07-19 09:47:27
 * @LastEditTime: 2023-07-31 11:27:51
 * @Description: 
 */
import {defineStore} from 'pinia'
import {ref} from 'vue'
import { loginAPI} from '@/apis/user'
// import { useCategoryStore } from './category'
export const useUserStore = defineStore('user',()=>{
  // const cartStore = useCategoryStore();
  const userInfo = ref({});
  const getUserInfo = async( account, password ) => {
    const res = await loginAPI( account, password );
    userInfo.value = res.result;
  };
  const loginOut = () => {
    userInfo.value = ({})
  }
  return {getUserInfo, userInfo, loginOut}
})