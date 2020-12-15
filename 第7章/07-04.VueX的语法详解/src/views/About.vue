<template>
  <div class="about">
    <h1 @click="handleClick">This is an about page</h1>
    <h1>{{myName}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    myName() {
      // 非 Composition API 方式获取 store 中的内容
      // 通过组件实例 this
      return this.$store.state.name;
    }
  },
  methods: {
    handleClick() {
      // 一个公共资源的管理
      // 修改数据的流程 action mutation state
      //
      // 1. dispatch 方法，`派发`一个 action，名字叫做change
      // 2. `感知到` change 这个action，执行store 中 actions 下面的 change 方法
      // 3. commit 提交一个叫做 change 的数据改变
      // 4. mutation 感知到提交的change改变，执行 change 方法改变数据
      //
      this.$store.commit('change', 'hello world');
    }
  }
}
</script>