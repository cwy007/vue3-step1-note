<template>
  <li class="button">{{ msg }}</li>
</template>

<script>
// es6 module
export default {
  name: 'ListItem',
  // 接收的参数/属性
  // 使用 props 实现组件的间数据传递
  props: {
    msg: String
  }
}
</script>

<style>
</style>
