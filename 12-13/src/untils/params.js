import http from "./http"

function attributes(params) {
  return http({
    url: http.apis(`/categories/${params.id}/attributes`),
    method: "get",
    params: {
      sel: params.sel
    }
  })
}

function addAttributes(data) {
  return http({
    url: http.apis(`/categories/${data.id}/attributes`),
    method: "post",
    data: {
      arrt_name: data.arrr_name,
      arrt_sel: data.arrt_sel,
      arrt_vals: data.arrt_vals
    }
  })
}

function editAttributes(data) {
  return http({
    url: http.apis(`/categories/${data.id}/attributes/${data.attrid}`),
    method: "put",
    data: {
      arrt_name: data.arrr_name,
      arrt_sel: data.arrt_sel,
      arrt_vals: data.arrt_vals
    }
  })
}

function deleteAttributes(data) {
  return http({
    url: http.apis(`/categories/${data.id}/attributes/${data.attrid}`),
    method: "delete"
  })
}

export { attributes, addAttributes, editAttributes, deleteAttributes }
