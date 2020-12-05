# lesson 38

computed 计算属性

```js
{
  computed: {

  },
  // 在setup中写计算属性
  //
  setup(props, context) {
    const { ref, computed, reactive } = Vue;
    const count = ref(0);
    const countObj = reactive({count: 0});
    const handleClick = () => {
      countObj.count.value += 1;
    }
    // 将之前vue实例中的计算属性放到setup中
    //
    // const countAddFive = computed(() => {
    //   return count.value + 5;
    // })

    // 不实用回调函数，使用对象的形式
    // 计算属性更复杂编码的形式
    //
    let countAddFive = computed({
      get: () => {
        return countObj.count + 5;
      },
      set: (param) => {
        countObj.count = param - 5;
      }
    })

    // 测试修改 countAddFive 的情况
    setTimeout(() => {
      countAddFive.value = 100;
    }, 3000)


    return { count, countAddFive, handleClick };
  },
  template: `
    <div>
      <span @click="handleClick">{{count}} -- {{countAddFive}}</span>
    </div>
  `
}

```
