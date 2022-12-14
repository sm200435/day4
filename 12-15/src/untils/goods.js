import http from "./http"

function goods(params) {
  return http({
    url: http.apis("/goods"),
    method: "get",
    params: {
      query: params.query,
      pagenum: params.pagenum,
      pagesize: params.pagesize
    }
  })
}

function addGoods(data) {
  return http({
    url: http.apis("/goods"),
    method: "post",
    data: {
      goods_name: data.goods_name,
      goods_cat: data.goods_cat,
      goods_price: data.goods_price,
      goods_number: data.goods_number,
      goods_weight: data.goods_weight,
      goods_introduce: data.goods_introduce,
      pics: data.pics,
      attrs: data.attrs
    }
  })
}

function editGoods(data) {
  return http({
    url: http.apis(`/goods/${data.id}`),
    method: "put",
    data: {
      goods_name: data.goods_name,
      goods_cat: data.goods_cat,
      goods_price: data.goods_price,
      goods_number: data.goods_number,
      goods_weight: data.goods_weight,
      goods_introduce: data.goods_introduce,
      pics: data.pics,
      attrs: data.attrs
    }
  })
}

function deleteGoods(data) {
  return http({
    url: http.apis(`/goods/${data.id}`),
    method: "delete"
  })
}

export { goods, addGoods, editGoods, deleteGoods }
