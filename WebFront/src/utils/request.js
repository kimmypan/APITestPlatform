import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  })

// response interceptor
// http响应拦截器
axios.interceptors.response.use(data => {
　　const code = data.code
　　if(code === 501) { //未登录
　　}
　　return data
}, error => {
   loadinginstace.close()
　　const code = error.data.code
　　// 此处判断拦截需要处理的错误状态码并处理
　　if(code === 502) {
　　
　　}
　　return Promise.reject(error)
})

export default service

