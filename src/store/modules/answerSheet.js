const state = {
  GroupDataArr: []
}

const mutations = {
  GET_ATTRSLIST: (state, list) => {
    state.GroupDataArr = list
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
