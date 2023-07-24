/*
 * @Author: zhaoshali
 * @Date: 2023-07-19 09:47:27
 * @LastEditTime: 2023-07-24 11:50:35
 * @Description: 
 */
import {defineStore} from 'pinia'
import {ref} from 'vue'
import { getCategory } from '@/apis/testAPI';
export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([]);
  const curCategoryId = ref(0)
  const getcategory = async() => {
    const res = await getCategory();
    // console.log(res.result,'caidan');
    categoryList.value = res.result;
  }
  return {
    categoryList,
    getcategory,
    curCategoryId
  }
})