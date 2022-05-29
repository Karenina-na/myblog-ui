import Service from '@/network/request.js'

//登录验证
export function LoginService(username, password) {
    const config = {
        method: 'post',
        url: '/rootManager',
        data: { 'username': username, 'password': password }
    }
    return Service(config)
}

//增
export function AddArticle(article) {
    const config = {
        method: 'post',
        url: '/rootManager/Article',
        data: article
    }
    return Service(config)
}

//改
export function UpdateArticle(article) {
    const config = {
        method: 'put',
        url: '/rootManager/Article',
        data: article
    }
    return Service(config)
}

//删
export function DeleteArticle(id) {
    const config = {
        method: 'delete',
        url: '/rootManager/Article',
        data: { 'id': id }
    }
    return Service(config)
}