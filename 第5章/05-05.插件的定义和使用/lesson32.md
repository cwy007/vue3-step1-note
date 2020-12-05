# lesson 32

plugin

插件

定义

使用

轮播的效果，通过插件来实现

```js

// 插件定义就是一个对象
const myPlugin = {
  // app = Vue.createApp()
  // @param app vue 根实例
  // @param options app.use(myPlugin, options) 使用组件时传递的而外参数
  install(app, options) {
    console.log(app, options);
    app.provide('name', 'Dell Lee');
    app.directive('focus', {
      mounted(el) {
        el.focus();
      }
    })；
    app.mixin({
      mounted() {

      }
    })
    // vue 全局属性配置的地方 app.config
    // $sayHello 加一个 $ 开头，表示vue底层私有的内容
    app.config.globalProperties.$sayHello = 'hello world';

  }
}

// 最外层根组件
const app = Vue.createApp({
  template: `<my-title/>`;
})

app.component('my-title', {
  inject: ['name'],
  mounted() {
    // $sayHello 表示底层做的扩展
    console.log(this.$sayHello);
  },
  template: `<div>hello world</div>`;
})

// plugin 插件的使用方式
// install(app, options)
// options -> {name: 'dell'}
app.use(myPlugin, {name: 'dell'});

const vm = app.mount('#root');

```

plugin: 把通用的功能封装起来
