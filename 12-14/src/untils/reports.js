import http from "./http"

function reports() {
  return http({ url: http.apis("/reports/type/1") })
}

export { reports }
