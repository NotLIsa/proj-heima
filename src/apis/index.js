/*
 * @Author: zhaoshali
 * @Date: 2023-07-20 14:53:38
 * @LastEditTime: 2023-07-20 14:53:39
 * @Description: 
 */
import httpInstance from '@/utils/http'
export const getBannerAPI = () => {
  return httpInstance({
    url:'/home/banner',
  })
}