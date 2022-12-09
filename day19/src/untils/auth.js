import Cookies from "js-cookie"
const TokenKey = "Authorization"

export function getToken() {
  return Cookies.get(TokenKey)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function getCookie(name) {
  var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"))
  // return arr
  if (arr != null) {
    return unescape(arr[2][1])
  } else {
    return null
  }
}
// 判断cook里有没有存name
