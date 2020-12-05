# lesson 41

provide 给子组件提供数据

inject

ref

```js

// provide/inject
// dom ref
setup(props, context) {
  const { provide, ref, readonly } = Vue;
  const name = ref('dell')
  // @method provide(key, value)
  // @param key
  // @param value
  // readonly(name) 子组件修改name数据时，会有警告，保证单向数据流
  //
  provide('name', readonly(name));

  provide('changeName', (value) => {
    name.value = value;
  })

  return {

  }
}

app.conponent('child', {
  setup() {
    const { inject } = Vue;
    // @method inject(key, defaultValue)
    // @param key
    // @param defaultValue
    //
    const name = inject('name', 'hello');
    const changeName = inject('changeName');
    const handleClick = () => {
      changeName('lee');
    }

    return {
      name, handleClick
    }
  }
})

```

子组件如何修改父组件传递的数据

单向数据流

子组件告诉父组件修改数据

调用父组件传递过来的方法进行修改

自动转换

## dom ref

```js
// CompositionAPI 的语法下，获取真实的 dom 元素节点
//
setup() {
  const { onMounted } = Vue;
  // hello 名称要与模版中 ref="hello" ref处的名称一致
  // ref(null) 这是获取dom节点的固定写法
  //
  const hello = ref(null); // 1. 定一个ref，获取一个dom 节点的引用
  onMounted(() => {
    console.log(hello.value)
  })
  return {
    hello  // 2. 导出
  }
},
// 添加 ref
template: `
  <div>
    <div ref='hello'>hello world</div>
  </div>
`

```
