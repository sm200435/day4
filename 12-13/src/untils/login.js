import http from "./http"

export function login(params) {
  return http({
    url: http.apis("/login"),
    method: "post",
    params: params
  })
}
