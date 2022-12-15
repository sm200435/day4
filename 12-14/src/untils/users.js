import http from "./http"

function users(params) {
  return http({ url: http.apis("/users"), method: "get", params })
}

function addUsers(data) {
  return http({ url: http.apis("/users"), method: "post", data })
}

function editUser(data) {
  return http({
    url: http.apis(`/users/${data.id}`),
    method: "put",
    data: { email: data.email, mobile: data.mobile }
  })
}

function deleteUser(id) {
  return http({
    url: http.apis(`/users/${id}`),
    method: "delete"
  })
}

function typeUser(data) {
  return http({
    url: http.apis(`/users/${data.uid}/state/${data.type}`),
    method: "put"
  })
}

function roleList() {
  return http({
    url: http.apis("/roles"),
    method: "get"
  })
}

function role(data) {
  return http({
    url: http.apis(`/users/${data.id}/role`),
    method: "put",
    data: { rid: data.rid }
  })
}

export { users, addUsers, editUser, deleteUser, typeUser, roleList, role }
