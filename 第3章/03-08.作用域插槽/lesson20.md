# lesson20

作用域插槽

```js
// 简写形式
#header
v-slot:header

```

scoped slot

slotProps 可以使用结构赋值的方式

```js

// 父组件
<list v-slot="slotProps">
  <div>{{slotProps.item}}</div>
</list>


// 子组件
<slot v-for="item in list" :item="item">

```

子组件渲染的内容要有父组件决定时，要使用作用域插槽来实现

父组件可以调用子组件中的数据

普通

具名

作用域插槽

简写形式

属性传递的逻辑
