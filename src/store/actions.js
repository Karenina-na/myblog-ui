//暴露分发接口

export const saveTitle = ({ commit }, title) => {
  commit('saveTitle', title)
}

export const saveType = ({ commit }, type) => {
  commit('saveType', type)
}

export const saveArticleId = ({ commit }, id) => {
  commit('saveArticleId', id)
}

export const savePage = ({ commit }, page) => {
  commit('savePage', page)
}

