//axios基础封装
import router from "@/router";
import { useUserStore } from "@/store/user";
import axios from "axios";
import { ElMessage } from "element-plus";
const httpInstance =  axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
})
//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(config => {
    //1.从pinia获取token配置
    const userStore = useUserStore();
    const token = userStore.userInfo.token;
    if(token){
      config.headers.Authorization = `Bear ${token}`
    }
    //2.按照后端的要求拼接token的数据
    return config
  }, e => Promise.reject(e)
)
//axios响应式请求拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  //统一错误提示
  ElMessage({
    type:'warning',
    message: e.response.data.message
  })
  //401token失效处理
  //1.清楚本地用户数据
  //2.跳转到登录页面
  if(e.response.status===401){
    const userStore = useUserStore();
    userStore.loginOut();
    router.push('/login')
  }
  return Promise.reject(e)
})
export default httpInstance