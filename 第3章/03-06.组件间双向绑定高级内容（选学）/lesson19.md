# lesson 19

```js

// 父子组件之间的双向绑定
// v-model
// modelValue 为默认值

// 父组件
v-model:count="count"
v-model:count1="count1"

// 子组件
props: ['count', 'count1'],

this.$emit('update:count', this.count + 3);
this.$emit('update:count1', this.count1 + 2);
```

v-model 修饰符

```js
v-model.uppercase="message"

props: {
  modelValue: String,
  modelModifiers: {
    default: () => {{}}
  }
},
mounted() {
  console.log(this.modelModifiers.uppercase) // true
}

```

自定义修饰符如何来写

vue 底层原理
