import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// provide/inject
// props

// vuex 数据管理框架
// 组件级别的数据传递
// 页面件数据传递
createApp(App).use(store).use(router).mount('#app')
