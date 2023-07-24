import httpInstance from '@/utils/http'
export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url: '/category/sub/filter',
    params:{
      id
    }
  })
}