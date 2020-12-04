# lesson 23

## 过度

transition
red -> green
一个状态 -> 另一个状态

```css
/* 背景色发生变化时，3s内缓慢发生 */
.transition {
  transition: 3s background-color ease;
}

.blue {
  background-color: blue;
}

.green {
  background-color: blue;
}

```

## 动画

animation
left -> right 加速移动
移动

```css
/* 关键帧 */
@keyframes leftToRight {
  0% {
    transform: translateX(-100x);
  }
  50% {
    transform: translateX(-50x);
  }
  0% {
    transform: translateX(0x);
  }
}
.animation {
  animation: leftToRight 3s;
}

```

添加 class 类名实现动画效果

```js

data() {
  return {
    animate: {
      transition: true,
      blue: true,
      green: false
    },
    styleObj: {
      background: 'blue'
    }
  }
},
methods: {
  handleClick() {

  }
},
template: `
  <div>
    <div class="transition" :style="styleObj"></div>
    <button @click="handleClick">切换</button>
  </div>
`

```

通过style实现

通过数据来控制样式

不是通过dom来控制样式
