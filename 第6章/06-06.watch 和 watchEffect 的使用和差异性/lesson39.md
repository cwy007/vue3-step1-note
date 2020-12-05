# lesson 39

watch 监听器

侦听器

```js

{
  setup() {
    const { ref, reactive,  toRefs } = Vue;
    const nameObj = reactive({name: 'dell'});

    // watch 函数监听数据变化
    // 在setup函数中
    // 两个参数具备一定的惰性
    // 可以拿到原始值和当前值
    // 惰性：首次页面展示时不会执行，只有数据变化时执行
    //
    // 使用箭头函数，监听响应对象中的属性
    // 第一个参数可以是一个数组
    //
    // watch(() => nameObj.name, (currentValue, prevValue) => {
    //   console.log(currentValue, prevValue);
    // })
    // 可以监听多个数据的变化，用一个监听器承载
    watch([() => nameObj.name, () => nameObj.name2], ([currentValue, currentValue2], [prevValue, prevValue2]) => {
      console.log(currentValue, prevValue);
    })

    const { name } = toRefs(nameObj);

    return {
      name
    }
  }
}

```
