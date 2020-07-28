const state = {
  GroupDataArr: [],
  page_size: 1160
}

const mutations = {
  SET_GROUPDATA: (state, list) => {
    state.GroupDataArr.push(list)
  },
  SET_GROUPPAGE: (state, rects = []) => {
    // 结果
    const results = []
    // currentPage.height 总高度
    var currentPage = {
      height: 0,
      rects: []
    }
    // 重置高度
    function resetCurrentPage() {
      currentPage.height = 0
      currentPage.rects = []
    }
    rects.forEach(rect => {
      const avalibleHeight = state.page_size - currentPage.height
      if (rect.height > avalibleHeight) {
        // 分页-剩余高度新建rect
        currentPage.rects.push({
          ...rect,
          castHeight: avalibleHeight
        })
        results.push(currentPage.rects) // 增加一页
        resetCurrentPage()
        // 判断当前rect高度能分几页
        let height = rect.height - avalibleHeight
        while (height > state.page_size) {
          results.push([{
            ...rect,
            castHeight: state.page_size
          }])
          height -= state.page_size
        }
        currentPage.height = height
        currentPage.rects.push({
          ...rect,
          castHeight: height
        })
      } else {
        currentPage.height += rect.height
        currentPage.rects.push({
          ...rect,
          castHeight: rect.height
        })
      }
    })
    if (currentPage.height) {
      results.push(currentPage.rects)
    }
    state.GroupDataArr = results
    window.console.log(results)
    // return results
  },
  REMOVERECT: (state, rectId) => {
    const index = state.GroupDataArr.findIndex(rect => rect.id === rectId)
    if (index > -1) {
      state.GroupDataArr.splice(index, 1)
    }
  }
}

const actions = {
  AddRect: (context, rect) => { // 新增
    context.commit('SET_GROUPDATA', rect)
  },
  groupPage: (context, rects) => { // 编辑
    context.commit('SET_GROUPPAGE', rects)
  },
  delRectt: (context, rectId) => {
    context.commit('REMOVERECT', rectId)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
