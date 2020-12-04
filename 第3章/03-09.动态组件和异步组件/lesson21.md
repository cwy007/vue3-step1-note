# lesson 21

vue 3 中的新内容

## 动态组件

dynamic component

v-show

```js

is 指定组件名称
直接通过数据改变组件内容

<keep-alive>
  <component :is="currentItem">
</keep-alive>


keep-alive 有缓存的特性

根据数据的变化，结合component标签，动态切换组件的实现

```

## 异步组件

异步执行某些组件的逻辑

async component

```js

Vue.defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    setTimeOut(() => {
      resolve({
        template: `<div>this is an async component</div>`
      })
    }, 4000)
  })
})

```

异步的方式，动态加载其他组件

将大型项目，拆分成js文件，需要时加载文件

异步组件进行代码的加载
