<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{name}}</h1>
  </div>
</template>

<script>
// toRefs 将响应式对象中的数据也变成响应式的
// toRefs 与 store.state 结合使用
// toRefs 与 reactive({a: 1, b: 2}) 结合使用
//
import { toRefs } from 'vue'; // tree shaking
import { useStore } from 'vuex'; // tree shaking
export default {
  name: 'Home',
  // vue3 Composition API
  // 在 setup 中使用 store 的方式
  //
  setup() {
    const store = useStore();
    // 解构赋值
    //
    const { name } = toRefs(store.state);
    return { name } // 返回数据，在模版中使用
  }
}
</script>
