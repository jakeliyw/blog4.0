const state = {
  id: '',
  timeId: '',
  tagId: '',
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
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
