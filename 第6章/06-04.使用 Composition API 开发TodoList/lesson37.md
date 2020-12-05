# lesson 37

vue3 提供的 composition api 开发 TodoList

```js
// 关于list 操作的内容进行封装
const listRelativeEffect = () => {
  const { reactive } = Vue;
  const list = reactive([]);
  const addItemToList = (item) => {
    list.push(item);
  }
  return {
    list,
    addItemToList
  }
}

const inputRelativeEffect = () => {
  const { ref } = Vue;
  const inputValue = ref('');
  const handleInputValueChange = (e) => {
    inputValue.value = e.target.value;
  }
  return {
    inputValue,
    handleInputValueChange
  }
}

setup() {
  // 流程的调度中转
  const { list, addItemToLIst } = listRelativeEffect();
  const { inputValue, handleInputValueChange } = inputRelativeEffect();

  return {
    list, addItemToLIst,
    inputValue, handleInputValueChange
  }
}

// // data
// // methods
// //
// setup(props, context) {
//   const { ref, reactive } = Vue;
//   const inputValue = ref('');
//   const list = reactive([]);
//   const handleInputValueChange = (e) => {
//     inputValue.value = e.target.value;
//   }
//   const handleSubmit = () => {
//     list.push(inputValue.value);
//   }
//   return {
//     inputValue,
//     list,
//     handleInputValueChange,
//     handleSubmit
//   }
// }


<input :value="inputValue" @input="handleInputValueChange">
<div>{{inputValue}}</div>
<button @click="() => addItemToLIst(inputValue)">提交</button>

<li v-for="(item,index) in list" :key="index">{{item}}</li>
```
