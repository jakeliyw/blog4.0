const state = {
  id: '',
}

const mutations = {
  upDetail (state, id) {
    state.id = id
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
