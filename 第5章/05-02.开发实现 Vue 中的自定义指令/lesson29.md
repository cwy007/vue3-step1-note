# lesson 29

自定义指令

directive

```js
const directives = {
  focus: {
    mounted(el) {
      el.focus();
    }
  }
}
const app = Vue.createApp({
  directives, // 这是局部定义指令
  mounted() {

  },
  template: `
    <div>
      <input v-focus />
    </div>
  `
})

// 自定义指令 v-focus
//  这是全局的
// app.directive('focus', {
//   // 当指令被添加到dom 元素，dom元素被挂载到页面上后，生命周期函数mounted会执行
//   mounted(el) {
//     el.focus();
//   }
// })

const vm = app.mount('#root');
```

dom 逻辑的复用

```js
// 指令中的生命周期函数

beforeMount(el) {

}

mounted(el) {

}

beforeUpdate() {

}

updated() {

}

beforeUnmount() {
  // 在销毁前执行，即将被销毁
}

unmounted() {
  // dom元素被销毁
}
```

## v-pos

v-pos="200"

```css

.header {
  position: absolute;
}

```

```js
// 没有参数的情况
// v-pos
app.directive('pos', {
  mounted(el) {
    el.style.top = '200px';
  }
})

// 参数放在 binding
// v-pos="100"
app.directive('pos', {
  mounted(el, binding) {
    el.style.top = binding.value + 'px';
  }
})

// data 中的数据 top
v-pos="top"

// 数据变化需要重新渲染，使用 updated 函数
app.directive('pos', {
  mounted(el, binding) {
    el.style.top = binding.value + 'px';
  },
  updated(el, binding) { // 响应数据变化
    el.style.top = binding.value + 'px';
  }
})

// 简写形式
// mounted, updated
// 和上面等价
app.directive('pos', (el, binding) => {
  el.style.top = binding.value + 'px';
})

// v-pos:abc="100"
// binding 对象
// binding.arg   // abc
// binding.value // 100

v-pos:left="distance"
el.style[binding.arg] = binding.value + 'px';


```

如何定义一个指令

全局

局部指令

指令的生命周期函数

一个指令的参数和参数的值
binding.arg
binding.value

一个指令中只包含 mounted, updated 生命周期函数
可以使用指令定义的简写形式
app.directive('pos', (el, binding) => {
  el.style[binding.arg] = binding.value + 'px';
})
