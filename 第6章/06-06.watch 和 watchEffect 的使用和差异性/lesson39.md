# lesson 39

watch 监听器

侦听器

```js

{
  setup() {
    // warchEffect 也是监听器，偏向于 effect
    const { ref, reactive,  toRefs, watchEffect } = Vue;
    const nameObj = reactive({name: 'dell', name2: 'lee'});

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
    const stop1 = watch([() => nameObj.name, () => nameObj.name2], ([currentValue, currentValue2], [prevValue, prevValue2]) => {
      console.log(currentValue, prevValue);

      setTimeout(() => {
        stop1(); // 监听器失效
      }, 5000);
    }, { immediate: true })

    // 立即执行，没有惰性 immediate
    // 自动检查内部的代码
    // 不需要传递你要侦听的内容，自动会感知代码依赖
    // 不需要传递很多参数，只需要传递一个函数
    // 无法获取之前的数据，只能获取当前的数据值
    //
    // 使用情景
    // ajax
    // effect
    // 一般期望 setup 为纯函数
    //
    const stop = watchEffect(() => {
      console.log('abc')
      // 函数里面对 nameObj.name 有依赖
      console.log(nameObj.name) // 自动检查内部的代码，数据变化则会执行
      setTimeout(() => {
        stop(); // 监听器失效
      }, 5000);
    })

    const { name } = toRefs(nameObj);

    return {
      name
    }
  }
}

```

可以将 watch 变成非惰性，通过第三个参数传入配置信息

{ immediate: true }

现阶段理解的成本

投入产出比
