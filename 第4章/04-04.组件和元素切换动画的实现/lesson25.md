# lesson 25

组件切换动画的实现

元素切换动画的实现

```css
/* 入场动画 */

/* 出场动画 */

```

```js
// out-in 先隐藏再展示
// in-out
// 不写 mode，一起执行
// appear 初次对默认元素展示时，也有动画效果
<transiton mode="out-in" appear>
  <div v-if="show">1</div>
  <div v-else>2</div>
</transiton>
<button>切换</button>

<transiton mode="out-in" appear>
  <component :is="component"/>
</transiton>
<button>切换</button>
```

做切换的时候
