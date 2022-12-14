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
  console.log(data)
  return http({
    url: http.apis(`/categories/${data.id}/attributes`),
    method: "post",
    data: {
      attr_name: data.attr_name,
      attr_sel: data.attr_sel,
      attr_vals: data.attr_vals
    }
  })
}

function editAttributes(data) {
  return http({
    url: http.apis(`/categories/${data.id}/attributes/${data.attrid}`),
    method: "put",
    data: {
      attr_name: data.attr_name,
      attr_sel: data.attr_sel,
      attr_vals: data.attr_vals
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
