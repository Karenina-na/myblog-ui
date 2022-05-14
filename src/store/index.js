import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import state from './state';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

export default createStore({
  state,
  mutations,
  actions,
  getters,
  plugins: [
    createPersistedState({
      key: 'token',
      storage: window.sessionStorage
    })
  ]
})
