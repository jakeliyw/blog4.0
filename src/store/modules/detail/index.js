const state = {
  id: '',
}

const mutations = {
  upDetail (state, { id }) {
    state.id = id
    console.log(id)
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
