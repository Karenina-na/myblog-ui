import Service from '@/network/request.js'

//图片资源获取
export function SelectImage(Page) {
    const config = {
        method: 'get',
        url: '/upLoad/img/' + Page
    }
    return Service(config)
}

//删除图片
export function DeleteImage(name){
    const config = {
        method:'delete',
        url:'/upLoad/img/'+name
    }
    return Service(config)
}