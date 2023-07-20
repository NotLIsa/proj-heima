/*
 * @Author: zhaoshali
 * @Date: 2023-07-20 14:53:38
 * @LastEditTime: 2023-07-20 17:52:13
 * @Description: 
 */
import httpInstance from '@/utils/http'
export const getBannerAPI = () => {
  return httpInstance({
    url:'/home/banner',
  })
};
export const getReCommentAPI = () => {
  return httpInstance({
    url: '/home/hot',
  })
};
export const getHotPriceAPI = () => {
  return httpInstance({
    url: '/home/brand',
  })
};
export const getFreshGoodsAPI = () => {
  return httpInstance({
    url: '/home/new',
  })
};