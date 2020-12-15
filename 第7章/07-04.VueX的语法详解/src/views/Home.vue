<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{myName}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    myName() {
      // setup() 之外可以使用this
      // this.$store vuex 创建的全局仓库
      return this.$store.state.name;
    }
  }
}
</script>
