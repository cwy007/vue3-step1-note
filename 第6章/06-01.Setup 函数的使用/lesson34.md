# lesson 34

composition api

setup function

```js
const app = Vue.createApp({
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
  directives: {

  },
  mixin: [],
  template: `
  `
})

```

组件变大时，维护性问题

```js
// created 实例被完全初始化之前执行
// 实例在创建之前执行的实例
// 实例被初始化之前 methods 中的内容还没有挂载到 vue 实例上
// console.log(this.$options) 查看实例上挂载的内容
mounted() {
  console.log(this.$options.setup());
},
setup(props, content) {
  // 使用 composition api
  // 不能使用this，因为组件还没有实例化
  // 不能调用实例上的方法，实例上的方法可以调用 setup
  return { // 在模版中可以使用
    name: 'dell'
  }
}

```
