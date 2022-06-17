import axios from 'axios'

//token
let req='1011011011011'
let man='10101101111000'

export {req,man}

//配置api/生产接口
const service = axios.create({
  timeout: 5000,
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_URL + "" : "/api"
})

//拦截器
service.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json',
    //token
    'Req': req,
    'Man': man
  }

  return config
}, err => {
  Promise.reject(err)
})

service.interceptors.response.use(response => {

  return response.data
}, err => {
  return Promise.resolve(err)
})

export default service