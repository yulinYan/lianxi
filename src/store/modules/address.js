
import { INITADD } from '../types/actionTypes'

export default {
  state: {
    add: null
  },
  mutations: {
    'INIT': (state, data) => {
        state.add = data
    }
  },
  actions: {
    [INITADD]: async ({ commit },data) => {
      commit('INIT', data)
    }
  },
  getters: {
    'GETADD': ({ add }) => {
      return add
    }
  }
}
