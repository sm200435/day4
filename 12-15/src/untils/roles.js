import http from "./http"

function roles() {
  return http({
    url: http.apis("/roles"),
    method: "get"
  })
}

function addRoles(data) {
  return http({
    url: http.apis("/roles"),
    method: "post",
    data: { roleName: data.roleName, roleDesc: data.roleDesc }
  })
}

function editRoles(data) {
  return http({
    url: http.apis(`/roles/${data.id}`),
    method: "put",
    data: { roleName: data.roleName, roleDesc: data.roleDesc }
  })
}

function deleteRoles(data) {
  return http({
    url: http.apis(`/roles/${data.id}`),
    method: "delete"
  })
}

function rightRoles(data) {
  return http({
    url: http.apis(`/roles/${data.roleid}/rights`),
    method: "post",
    data: { rids: data.rids }
  })
}

function treeRoles(data) {
  return http({
    url: http.apis(`/rights/${data.type}`),
    method: "get"
  })
}

function deleteRight(data) {
  return http({
    url: http.apis(`/roles/${data.roleid}/rights/${data.rightid}`),
    method: "delete"
  })
}

export {
  roles,
  addRoles,
  editRoles,
  deleteRoles,
  rightRoles,
  treeRoles,
  deleteRight
}
