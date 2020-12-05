# lesson 35

ref

reactive

响应式引用的用法和原理

vue3 composition api 新语法

```js

// name 在这里为非响应式的引用
// {{name}}
setup(props, context) {
  let name = 'dell';
  setTimeout(() => {
    name = 'lee'
  }, 2000);
  return { name };
}

// 响应式引用：通过proxy对数据进行封装，当数据变化时，触发模版等内容的更新
// ref 处理基础类型的数据
// vue 在作模版处理时，会做一个转换
// {{name}}
setup(props, context) {
  const { ref } = Vue;
  // proxy 处理，'dell' 变成 proxy({value: 'dell'}) 这样的一个响应式引用
  // 改变值时，页面跟着变化
  // proxy 无法代理基础型数据
  //
  let name = ref('dell'); // 通过 ref 包装变成响应式引用
  setTimeout(() => {
    name.value = 'lee'
  }, 2000);
  return { name };
}

// reactive 处理非基础类型数据
// {{nameObj.name}}
setup(props, context) {
  const {reactive } = Vue;
  // proxy 处理，{ name: 'dell' } 变成 proxy({ name: 'dell' }) 这样一个响应式应用
  const nameObj = reactive({ name: 'dell' });
  setTimeout(() => {
    nameObj.name = 'dell'
  }, 2000)
  return { nameObj }
}

使用 composition api 替换 data 的写法

setup(props, context) {
  // readonly 只读
  //
  const { reactive， readonly } = Vue;
  const nameObj = reactive({ name: 'dell' });
  copyNameObj = readonly(nameObj);
  setTimeout(() => {
    nameObj.name = 'dell'
    copyNameObj.name = 'dell'
  }, 2000)
  return { nameObj, copyNameObj }
}

// {{name}}
setup(props, context) {
  const { reactive, readonly, toRefs } = Vue;
  const nameObj = reactive({ name: 'dell' });
  setTimeout(() => {
    nameObj.name = 'dell'
  }, 2000)
  // const {name} = nameObj; // 对象 nameObj 具有响应式， name 不具有响应式
  // toRefs proxy({name: 'dell'}) -> {name: proxy({value: 'dell'})}
  const {name} = toRefs(nameObj);
  return { name }
}
```

proxy 语法

原生js关于 proxy 的内容
