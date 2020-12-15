import { createStore } from 'vuex'

// flatten shape
// store 有一个数据修改流程，规范数据管理
// store 会感知到全局中的 dispatch 和 commit
// 执行对应的 actions 和 mutations 中的方法
// 同步代码修改数据，可以直接使用 commit，不用经过 dispatch action
// 涉及到异步操作时，要先dispatch action，然后在action 中commit mutation修改state中的数据
//
//
// VueX 数据管理框架
// VueX 创建了一个`全局唯一`的仓库，用来存放全局的数据
//
export default createStore({
  state: { name: 'dell' },
  // mutation 里面只允许写同步代码，不允许写异步代码
  // commit 和 mutation 做关联
  //
  mutations: {
    // store 感知到一个叫作 change 的mutation被commit，执行对应的change方法
    // 修改store中的数据
    change(state, str) {
      state.name = str;
    }
  },
  // dispatch 和 actions 做关联
  //
  actions: {
    // store 感知到你触发了一个叫作 change 的action，执行change方法
    // 提交一个 commit 触发一个 mutation
    //
    // change(store, str) {
    //   setTimeout(() => {
    //     store.commit('change', str)
    //   }, 2000)
    // }
  },
  modules: {}
})
