# lesson 31

vue底层的render函数

```js

const app = Vue.createApp({
  template: `
    <mi-title :level="1" />
  `
})

app.component('my-title', {
  //   template: `
  //   <div>Hello World</div>
  // `
  props: ['level'],
  render() {
    const { h } = Vue;
    // @params 标签名，属性，标签内容
    // return h('h' + this.level, {}, "hello world");
    // this.$slots.default 默认插槽
    // return h('h' + this.level, {}, this.$slots.default);

    return h('h' + this.level, {}, [
      this.$slots.default,
      h('h4', {}, ['dell'])
    ]);
  }
})

const vm = app.mount('#root');

```

template 被编译后会生成 render 函数

在 render 中调用 Vue 的 h 函数

h 函数返回虚拟dom，虚拟dom是一个对象，是对真实dom的一个映射

{
  tagName: 'div',
  text: 'hello',
  attributes: {}
}

weex 移动端代码

template -> render -> h -> 虚拟dom(js对象) -> 真实dom -> 展示到页面上

一般做项目开发很少用到render函数

h createElement
