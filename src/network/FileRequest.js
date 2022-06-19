import Service from '@/network/request.js'

//图片资源获取
export function SelectImage(Page) {
    const config = {
        method: 'get',
        url: '/upLoad/img/' + Page
    }
    return Service(config)
}