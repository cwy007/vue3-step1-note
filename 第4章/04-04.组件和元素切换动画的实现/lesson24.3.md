# lesson 24.3

transition tag

动画效果

动画效果

既有过渡又有动画，持续时间以最短的时间为准

但元素

```js
// 以过渡效果的时间为准
<transition type="transition">
  <hello-world></hello-world>
</transition>

// 以动画效果的时间为准
<transition type="animation">
  <div></div>
</transition>

// 时间控制
// 忽略样式中指定的时间
<transition :duration="1000">
</transition>

// 在标签上指定时间
// 忽略css中指定的时间
<transition :duration="{enter: 1000, leave: 3000}">
</transition>
```

vue中的动画

使用 css 做动画

```js
// :css="false"
// 不会执行css动画
// 使用js 实现动画
// js动画提供了一些钩子函数（在某一时刻会自动调用的函数）

methods: {
  handleBeforeEnter(el) {
    el.style.color = "red"
  },
  handleEnterActive(el, done) {

  // done函数被执行，表示动画结束，执行钩子 @after-enter
  // done
  }
}

// transition 但元素和单组件的动画效果
<transition
  :css="false"
  @before-enter="handleBeforeEnter"
  @enter="handleEnterActive" // 执行动画的
  @after-enter="" // 动画结束时触发
>
  <div></div>
</transition>

```

js 动画的性能

```js

// 空标签
// slot v-for v-if
<template v-slot:header></template>

// 动态组件
<component :is="hello-world"></component>

// 动画
<transition></transition>

```
