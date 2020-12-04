# lesson15

组件间传值和传值间的校验

String, Number, Boolean, Array, Object, Function, Symbol

```js
// 子组件接收传递过来的属性
props: [
  content: String
]

props: [
  content: {
    type: String,
    // required: true
    // default: '123'
    default: () => {
      return '123'
    },
    // validator: function() {}
  }
]
```

动态属性

v-bind

静态属性

type

required

default

validator

```js
// return true/false
validator: function(value) {
  return value < 1000;
}

```
