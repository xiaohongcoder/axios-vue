import axios from "axios";
import service from './contactApi'
import { Toast } from 'vant'

// service 循环遍历输出不同的请求方法
let instance = axios.create({
  baseURL: 'http://localhost:9000/api',
  timeout: 3000,
})

// 包裹请求方法的容器
const Http = {}

// 请求格式 / 参数的统一
for (let key in service) {
  console.log(key);

  let api = service[key] // url method
  Http[key] = async function (

    // 请求参数 get: url, put, post, patch(data), delete: url
    params,

    // 标识 是否为 form-data 请求
    isFormData = false,

    // 配置参数
    config = {}
  ) {

    let newParams = {}

    // content-type 是否是 form-data 的判断
    if (params && isFormData) {
      newParams = new FormData()
      for (let i in params) {
        newParams.append(i, params[i])
      }
    } else {
      newParams = params
    }

    // 开始进行请求
    // 不同请求的判断
    let response = null

    if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {

      try {
        response = await instance[api.method](api.url, newParams, config)
      } catch (err) {
        response = err
      }
      console.log(response);

    } else if (api.method === 'delete' || api.method === 'get') {

      config.params = newParams

      try {
        response = await instance[api.method](api.url, config)
      } catch (err) {
        response = err
      }

    }

    console.log(response);

    return response

    // let res = null
    // try {
    //   res = await axios.get('url')
    // } catch (err) {
    //   res = err
    // }

  }
}

// 请求拦截器 的添加
instance.interceptors.request.use(config => {
  Toast.loading({
    mask: false, // 阴影
    duration: 0, // keep
    forbidClick: true, // 禁止点击
    message: '请求中...'
  })
  console.log('->', config.url, config.data);
  return config;
}, err => {
  console.log('err', err);
  Toast.clear()
  Toast('请求失败，请稍后重试')
  return Promise.reject(err);
})

// 响应拦截器 的添加
instance.interceptors.response.use(res => {
  Toast.clear()
  // Toast('请求成功')

  console.log('=>', res.config.url, res.data);
  return res.data;
}, err => {
  console.log('err', err);
  Toast.clear()
  Toast('响应失败，请稍后重试')
  return Promise.reject(err);
})

export default Http