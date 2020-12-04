# lesson 14

根组件

子组件

```js
const app = Vue.createApp({
  template: `<div></div>`
})

app.component('hello', {
  template: `<div>hello</div>`
})

const vm = app.mount('#root');


```

组件的定义

组件的复用性

app.component 定义全局组件，性能不高，使用起来简单

局部组件，性能高

```js
components: {HelloWorld}

<hello-world />

```

简写格式

全写格式
