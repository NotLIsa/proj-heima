/*
 * @Author: zhaoshali
 * @Date: 2023-07-19 18:55:11
 * @LastEditTime: 2023-07-19 18:57:09
 * @Description: 
 */
import httpInstance from '@/utils/http'
export const getCategoryAPI = () => {
  return httpInstance({
    url:'/home/category/head'
  })
}