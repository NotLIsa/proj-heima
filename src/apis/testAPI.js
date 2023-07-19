/*
 * @Author: zhaoshali
 * @Date: 2023-07-19 11:30:24
 * @LastEditTime: 2023-07-19 12:24:04
 * @Description: 
 */
import httpInstance from "@/utils/http";
export const getCategory = () => {
  return httpInstance({
    url: 'home/category/head'
  })
}