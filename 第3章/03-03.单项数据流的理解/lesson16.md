# lesson 16

快速传递多个属性

```js
params = {
  a: 1,
  b: 2,
  c: 3
}

<hello-world v-bind="params"/>


{
  a: 1,
  b: 2,
  c: 3
}
<hello-world :a="a" :b="b" :c="c"/>

多个单词属性传递的情况
<hello-world :content-abc="a"/>
props: ["contentAbc"]


单向数据流
父组件可以向子组件传递数据，但是，子组件不能修改父组件的数据
子组件可以使用，但是不能修改父组件传递过来的数据

data 中定义属性的初始值

避免组件之间的数据的耦合
```
