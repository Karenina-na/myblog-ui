//暴露分发接口

export const saveTitle = ({ commit }, title) => {
  commit('saveTitle', title)
}

export const saveType = ({ commit }, type) => {
  commit('saveType', type)
}

export const savePage = ({ commit }, page) => {
  commit('savePage', page)
}

export const saveFlag = ({ commit }, flag) => {
  commit('saveFlag', flag);
}

export const saveIntroduce = ({ commit }, introduce) => {
  commit('saveIntroduce', introduce)
}

export const saveNotice = ({ commit }, notice) => {
  commit('saveNotice', notice)
}

export const saveAuthor = ({ commit }, author) => {
  commit('saveAuthor', author)
}
