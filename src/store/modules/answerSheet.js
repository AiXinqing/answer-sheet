const state = {
  GroupDataArr: []
}

const mutations = {
  GET_ATTRSLIST: (state, list) => {
    state.GroupDataArr.push(list)
  }
}

const actions = {
  editGroupData: (context, list) => {
    context.commit('GET_ATTRSLIST', list)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
