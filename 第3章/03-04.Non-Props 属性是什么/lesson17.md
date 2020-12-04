# lesson 17

Non-Props 属性

```js
props: [

]
```

父组件给子组件传递内容的时候，子组件不通过 props 接收

父组件传值，但是，子组件不接受

变成子组件最外层dom标签的属性

inheritAttrs: false

子组件不接受 Non-Props 属性

子组件有多个根结点时，Non-Props 属性就不生效了

```js
// 这是子组件

template: `
  <div v-bind:msg="$attrs.msg">1</div>
  <div v-bind="$attrs>2</div>
  <div>3</div>
`
```

$attrs

```js

// 不被子组件接收的父组件传递过来的属性
mounted: {
  this.$attrs // 获取 Non-Props 属性
}

```

在创建高级别的组件时非常有用

创建高层次组件时使用
