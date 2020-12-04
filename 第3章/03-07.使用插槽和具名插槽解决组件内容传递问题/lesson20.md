# lesson20

解决组件内容传递问题

slot

插槽

具名插槽

onClick 原生事件

```js
<slot></slot>
<slot name="bottom"></slot>
```

`slot` 标签无法绑定事件

```js
<span @click="handleClick">
  <slot></slot>
</span>

```

父模版里调用的数据属性，使用的都是父模版里的数据
子模版里调用的数据属性，使用的都是子模版里的数据

slot中使用的数据作用域问题

```js

默认值

<slot>这是插槽默认值</slot>


// 具名插槽
<template v-slot:header>
  <div>header</div>
</template>
<template v-slot:footer>
  <div>footer</div>
</template>

<slot name="header"></slot>
<slot></slot>
<slot name="footer"></slot>

```
