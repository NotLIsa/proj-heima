/*
 * @Author: zhaoshali
 * @Date: 2023-07-24 17:30:22
 * @LastEditTime: 2023-07-24 17:35:53
 * @Description: 
 */
import httpInstance from '@/utils/http'
export const getGooddetailAPI = (id) => {
  return httpInstance({
    url:'/goods',
    params:{
      id
    }
  })
}
