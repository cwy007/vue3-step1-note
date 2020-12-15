import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

// 更具url的不同，展示不同的内容
// 路由与组件之间的对应关系
// /#/ Home
// /#/login Login
// /#/about About
//
const routes = [
  {
    path: '/',
    name: 'Home',   // 路由名称
    component: Home // 访问的组件
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // 异步加载路由
    // tree shaking
    // 懒加载
    // () => import()
    // /* webpackChunkName: "about" */ '../views/About.vue'
    // 只有进到about页面才会加载 about.js 代码
    // 页面跳转时，可能会出现卡顿
    //
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
