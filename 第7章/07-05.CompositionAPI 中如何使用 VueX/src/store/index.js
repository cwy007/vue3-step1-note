import { createStore } from 'vuex'
// 应用中公用的数据放在 store中
// 获取数据和修改数据
// 约定流程
//
export default createStore({
  state: { name: 'dell' },
  // 约定
  // mutations 只允许写同步代码，不允许写同步代码
  mutations: {
    // mutation 第一个参数为 state
    changeName(state, str) {
      // this 指 store
      state.name = str;
    }
  },
  // action 中允许写异步代码
  // axios
  // setTimeout
  // 对数据的修改，可以到store中查看，不会遍布到组件中
  // 数据维护
  //
  actions: {
    // action 第一个参数为 store
    getData(store) {
      setTimeout(() => {
        store.commit('changeName', 'hello')
      }, 2000)
    }
  }
})
