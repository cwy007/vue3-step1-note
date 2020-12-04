# lesson 28

代码复用

mixin

混入

将内容混入到某个地方

```js
const myMixin = {
  // 数据可以混入
  data() {
    return {number: 2, count: 23}
  },
  // 生命周期函数也可以混入
  //
  created() {
    console.log('created')
  },
  methods() {
    // 组件里的优先级高于mixin里的优先级
  }
}

// mixins 选项
mixins: [myMixin]

// 组件中没用数据时使用混入的数据
// 组件中的数据优先级更高

data() {
  return {
    number: 1
  }
},
mixins: [myMixin],
// 先执行 mixin 里面的生命周期函数，再执行组件中的生命周期函数
created() {
  console.log('component created lifeCycle func');
},
methods() {

}

```

将对象混入应用里

数据可以混入

## 局部的 mixin

在组件中使用 mixins 选项混入

## 全局的 mixin

```js
app.mixin({
  data() {
    return {

    }
  },
  created() {

  },
  methods() {

  }
})

```

全局 mixin ，整个应用中每一个组件都会自动的混入

全局的 mixin 不推荐使用，代码的维护性不高

自定义属性

```js
const myMinxin = {
  number: 1
}

const app = Vue.createApp({
  // this.$options.number
  //
  number: 2 //自定义属性: 组件中的优先级高于mixins中的优先级
})

// 对自定义属性 number 的合并策略进行修改
app.config.optionMergeStrategies.number = (mixinValue, appValue) => {
  return mixinValue || appValue;
}

```

vue3 中推荐使用 composition api

插件
