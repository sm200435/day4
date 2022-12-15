import http from "./http"

function rights(params) {
  return http({
    url: http.apis(`/rights/${params.type}`),
    method: "get"
  })
}

export { rights }
