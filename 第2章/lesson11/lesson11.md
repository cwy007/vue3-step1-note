# lesson 11

v-for

列表展示

v-for="item in listArray"

v-for="(item, index) in listArray"

v-for="(value, key, index) in listObject"

dom元素复用

:key="index"

key值要唯一，vue对dom元素作区分，是否复用dom元素

```js
arr.push()
arr.pop()

arr.unshift()
arr.shift()
splice
sort
reverse

直接替换数组
```

数据更新，重新渲染

vue3 支持直接修改对象中的内容

直接循环一个数字

v-for="item in 10"

循环的优先级比if高

```js
template v-for
  div v-if
```

占位符，不会真正的渲染

`<template></template>`
