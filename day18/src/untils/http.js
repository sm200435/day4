import axios from "axios"
import { getToken } from "./auth"
import { MessageBox } from "element-ui"

const http = axios.create({
  baseURL: "",
  // 请求地址
  timeout: 10000,
  //超时时间变成了毫秒
  // withCredentials: true,
  // 表示跨域请求时是否使用凭证默认为false
  headers: {
    "Content-Type": "application/json; charset=uft-8"
  }
  // 设置请求头
})

// 首先发送请求之前做哪些事情呢
// 1、确定当前用户是否登录，超时和过期
// 2、token---添加到每个用户请求中

http.interceptors.request.use(
  (config) => {
    console.log(config, "request")
    config.headers["Authorization"] = getToken()
    // 用getToken获取token,把token配置到请求接口上
    return config
    // 在发送请求之前做的操作
  },
  (error) => {
    console.log(error, 1)
    return Promise.reject(error)
    // 对请求错误做操作
  }
)
// 请求拦截，接口还没发送请求时候

http.interceptors.response.use(
  (response) => {
    // console.log(response, "response")
    return response
    // 根据响应成功返回的数据去做操作
    // 请求成功对响应数据做处理
  },
  (error) => {
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
// 响应拦截

http.apis = (rouVal) => {
  console.log(rouVal)
  return process.env.VUE_APP_BASE_API + rouVal
}
// 封装环境api跨域接口

// @params url 地址
// @params method 请求方法
// contentType默认值是json,如果穿form
// form: "Content-Type": "multipart/form-data; boundary=something"
// json:"Content-Type": "application/json; charset=uft-8"
// http.send = (url, data = {}, method = "get", contentType = "json") => {
//   return http({
//     url: http.apis(url),
//     method: method,
//     data: data,
//     headers: {
//       "Content-type":
//         contentType === "json" ? "application/json; charset=uft-8" : "multipart/form-data; boundary=something"
//     }
//   })
// }
// 封装axios的get和post请求

export default http
//导出
