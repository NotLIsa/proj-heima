import httpInstance from '@/utils/http'
export const getGooddetailAPI = (params={}) => {
  const { distributionSite = '3995885' } = params
  return httpInstance({
    url:'/goods',
    params: {
      distributionSite
    }
  })
}
