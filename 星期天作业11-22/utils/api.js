import http from './request.js'

async function getList(params){
    let {data}= await http.get('v1/users/list')
    return data
}

export {getList}