//暴露分发接口

export const saveTitle = ({ commit }, title) => {
  commit('saveTitle', title)
  commit('saveType', '')
}

export const saveType = ({ commit }, type) => {
  commit('saveType', type)
  commit('saveTitle', '')
}

export const saveArticleId = ({ commit }, id) => {
  commit('saveArticleId', id)
}

