# lesson 24

vue 中动画的封装

transition 标签

单元素组件的过渡和动画效果

```css
/* 入场效果，没开始动画时 */
.v-enter-from {
  opacity: 0;
}

/* 整个入场动画执行过程中，动画和过渡的效果是什么样的 */
.v-enter-active, .v-leave-active {
  transition: opacity 3s ease-out;
}

.v-enter-to {
  opacity: 1;
}

/* 出场 */
/* .v-leave-from {
  opacity: 1;
} */

/* .v-leave-active {
  transition: opacity 3s ease-in;
} */

.v-leave-to {
  opacity: 0;
}

@keyframes shake {
  0% {
    transform: translateX(-100px);
  }
  50% {
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(50px);
  }
}
```

```js
data() {
  return {
    show: false
  }
}

// v-enter-from
// v-enter-active
// v-enter-to
// v-leave-from
// v-leave-active
// v-leave-to
<tansition>
</tansition>

// 添加name属性后，对应的类名称
// hello-enter-from
// hello-enter-active
// hello-enter-to
// hello-leave-from
// hello-leave-active
// hello-leave-to
<transition name="hello">
</transition>
```

入场

出场
展示态 -> 隐藏态

transition 实现的底层的原理
