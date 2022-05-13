import axios from 'axios'

//配置api/生产接口
const service = axios.create({
  timeout: 5000,
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_URL + "" : "/api"
})

//拦截器
service.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json'
  }
  console.log('request拦截器执行')
  return config
}, err => {
  Promise.reject(err)
})

service.interceptors.response.use(response => {
  console.log('response拦截器执行')
  return response
}, err => {
  return Promise.resolve(err)
})

export default service