/*
 * @Author: zhaoshali
 * @Date: 2023-07-20 14:53:38
 * @LastEditTime: 2023-07-21 11:31:31
 * @Description: 
 */
import httpInstance from '@/utils/http'
/* 首页轮播图 */
export const getBannerAPI = (params={}) => {
  //默认为1 商品为2
  const { distributionSite = '1' } = params
  return httpInstance({
    url:'/home/banner',
    params:{
      distributionSite
    }
  })
};
/* 获取首页人气推荐API */
export const getReCommentAPI = () => {
  return httpInstance({
    url: '/home/hot',
  })
};
/* 获取首页热门品牌 */
export const getHotPriceAPI = () => {
  return httpInstance({
    url: '/home/brand',
  })
};
/* 获取首页新鲜好物APIA */
export const getFreshGoodsAPI = () => {
  return httpInstance({
    url: '/home/new',
  })
};
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods',
  })
};