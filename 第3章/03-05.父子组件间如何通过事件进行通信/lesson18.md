# lesson 18

父子组件间如何通过事件进行通信

```js
// 父组件
// 模版中使用连字符形式
@add-one="handleAddOne"

// 子组件
// 脚本中使用驼峰
props: ['count'], // 这里使用驼峰
// emits: ['addOne'], // 声明组件会触发的事件
emits: {
  addOne: (count) => { // 参数为触发事件时传递的值
    if (count > 0) {
      return true;
    }
    return false;
  }
},
methods: {
  handClick() {
    this.$emit('addOne', 2); // 子组件使用驼峰
  }
}
```

自定义事件

子组件通过事件传递信息

父组件接收事件

## v-model

```js


<input v-model="text">

:modelValue="count"

this.$emit('update:modelValue')

父子组件双向绑定关系，使用 v-model, modelValue

v-model:app="message"
app代替 modelValue 这个默认的 prop 名称
```
