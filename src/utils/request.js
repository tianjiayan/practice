import axios from 'axios'
import loading from './loading'
// import { useStore } from 'vuex'
// const store = useStore()
const service = axios.create({
  baseURL: 'https://www.markerhub.com/vueadmin-java/',
  timeout: 3000
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 打开loading加载
    loading.open()

    const token = localStorage.getItem('token')
    if (token) config.headers.authorization = token
    // const token = store.getters.token

    console.log(config, '132')
    console.log(token,'222');
    return config
  },
  function (error) {
    // 对请求错误做些什么
    // 关闭loading加载
    loading.close()
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 关闭loading加载
    loading.close()

    console.log(response, 'token')
    return response
  },
  function (error) {
    // 对响应错误做点什么

    // 关闭loading加载
    loading.close()

    return Promise.reject(error)
  }
)

// 处理get传参
function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  return service(options)
}

export default request
