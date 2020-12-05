# lesson 40

在 composition api 写生命周期函数

```js

{
  mounted() {

  },
  // 等价关系
  // beforeMount => onBeforeMount
  // mounted => onMounted
  setup(props, context) {
    // onRenderTriggered 每次重新渲染被触发的时候
    // onRenderTracked 渲染后收集响应式依赖
    // 依赖收集机制
    // 依赖分发机制
    // vue 底层
    //
    const {
      ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered
    } = Vue;

    const name = ref('dell');

    onBeforeMount(() => {
      console.log('onBeforeMount');
    })
    onMounted(() => {
      console.log('onMounted');
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    })
    onUpdated(() => {
      console.log('onUpdated');
    })

    return {
      name
    }
  },
  template: `
  `
}

```

模版中使用`连字符`形式

script 中使用`驼峰`形式

beforeCreate
setup
created
