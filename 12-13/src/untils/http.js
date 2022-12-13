import axios from "axios"
import { getToken } from "./auth"
import { MessageBox } from "element-ui"

const http = axios.create({
  baseURL: "",
  timeout: 1000,
  headers: { "Content-Type": "application/json;charset=uft-8" }
})

// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.headers["Authorization"] = getToken()
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    let title = ""
    let message = ""
    if (error && error.response) {
      switch (
        error.response.status //跨域存在获取不到状态码得情况
      ) {
        case 400:
          title = "错误请求"
          break
        case 401:
          title = "资源未授权"
          break
        case 403:
          title = "禁止访问"
          break
        case 404:
          title = "未找到所请求得资源"
          break
        default:
          title = error.response.status
      }
      return MessageBox.alert(message, title, {
        type: "warning"
      })
    } else {
      return MessageBox.alert("请联系系统管理员", "未知错误", {
        type: "error"
      })
    }
    // return Promise.reject(error)
  }
)

http.apis = (rouVal) => {
  return process.env.VUE_APP_BASE_API + rouVal
}

export default http
