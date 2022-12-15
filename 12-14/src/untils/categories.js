import http from "./http"

function categories(params = {}) {
  return http({
    url: http.apis("/categories"),
    method: "get",
    params: {
      type: params.type,
      pagenum: params.pagenum,
      pagesize: params.pagesize
    }
  })
}

function addCategories(data) {
  return http({
    url: http.apis("/categories"),
    method: "post",
    data: {
      cat_level: data.cat_level,
      cat_name: data.cat_name,
      cat_pid: data.cat_pid
    }
  })
}

function editCategories(data) {
  return http({
    url: http.apis(`/categories/${data.id}`),
    method: "put",
    data: { cat_name: data.cat_name }
  })
}

function deleteCategories(data) {
  return http({
    url: http.apis(`/categories/${data.id}`),
    method: "delete"
  })
}

export { categories, addCategories, editCategories, deleteCategories }
