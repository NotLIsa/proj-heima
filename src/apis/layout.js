/*
 * @Author: zhaoshali
 * @Date: 2023-07-19 18:55:11
 * @LastEditTime: 2023-07-21 15:05:03
 * @Description: 
 */
import httpInstance from '@/utils/http'
export const getCategoryAPI = () => {
  return httpInstance({
    url:'/home/category/head'
  })
}

export const getChildCategoryAPI = (id) => {
  return httpInstance({
    url: '/category',
    params:{
      id
    }
  })
}