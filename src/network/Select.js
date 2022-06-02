import Service from '@/network/request.js'

//页码查找
export function SelectArticles(Page) {
  const config = {
    method: 'get',
    url: '/articles/' + Page
  }
  return Service(config)
}

//页码类型查找
export function SelectArticlesByType(Page, Type) {
  const config = {
    method: 'post',
    url: '/articles/',
    data: { "type": Type, "page": Page }
  }
  return Service(config)
}

//页码标题查找
export function SelectArticleByTitle(Page, Title) {
  const config = {
    method: 'get',
    url: '/articles/' + Title + "/" + Page
  }
  return Service(config)
}

//id查找
export function SelectArticleById(id) {
  const config = {
    method: 'get',
    url: '/article/' + id
  }
  return Service(config)
}

//必要数据查找
export function SelectAboutMe() {
  const config = {
    method: 'get',
    url: '/about'
  }
  return Service(config)
}