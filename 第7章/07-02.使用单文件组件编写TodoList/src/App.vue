<template>
  <div>
    <!-- v-model 数据双向绑定 -->
    <input v-model="inputValue" />
    <!-- click事件监听，处理函数 -->
    <button class="button" @click="handleAddItem">提交</button>
  </div>
  <ul>
    <list-item
      v-for="(item, index) in list"
      :key="index"
      :msg="item"
    />
  </ul>
</template>

<script>
import { reactive, ref } from 'vue';
// 查分出来的子组件
import ListItem from './components/ListItem';

export default {
  name: 'App', // 组件名称
  components: { ListItem }, // 注册组件
  setup() {
    // vue 面向数据编程
    // ref，reactive 响应式数据
    const inputValue = ref('');
    const list = reactive([]);

    // 向列表中添加数据
    // 清空输入框
    const handleAddItem = () => {
      list.push(inputValue.value);
      inputValue.value = '';
    };
    // TodoList
    // 一个方法两个数据
    //
    return { handleAddItem, inputValue, list }
  }
}
</script>
<style>
/* 没有 scoped，样式会作用在全局 */
  .button {
    margin-left: 20px;
    color: rgb(252, 232, 232);
  }
</style>
