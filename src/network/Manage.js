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