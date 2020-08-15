const state = {
  id: '',
  timeId: '',
  tagId: '',
  token: '',
}

const mutations = {
  upDetail (state, id) {
    state.id = id
  },
  timeDateil (state, timeId) {
    state.timeId = timeId
  },
  tagDetail (state, tagId) {
    state.tagId = tagId
  },
  settoken (state, token) {
    state.token = token
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
