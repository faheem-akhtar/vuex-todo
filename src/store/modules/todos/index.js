import { mutations } from './mutations'
import * as actions from './actions'

// initial state
const state = {
  items: []
}

export const getters = {
  getFilter (state, getters, rootState) {
    return rootState.route.params.filter || 'all'
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
