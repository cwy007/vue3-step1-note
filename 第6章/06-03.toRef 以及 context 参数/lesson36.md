# lesson 36

toRef
content

```js
setup(props, context) {
  const { reactive, toRefs, toRef } = Vue;
  const data = reactive({name: 'dell'})
  // 空的响应式数据
  const { age } = toRef(data, 'age');
  setTimeout(() => {
    age.value = 'lee'
  }, 2000);
  return { age }
}


app.component('test', {
  template: `
    <div @click="handleClick">child</div>
  `,
  // mounted(){
  //   this.$slots;
  //   this.$emit('change');
  // },
  setup(props, context) {
    const { h } = Vue;
    const { attrs, slots, emit } = context;
    // attrs 父组件传递过来的 Non-Props 属性
    // slots 父组件传递过来的插槽内容 slots.default
    // emit 触发事件用
    // composition api 中实现的对应传统 api 的功能
    //
    // setup 返回虚拟dom时，返回的虚拟dom作为组件的template
    // return () => h('div', {}, ['123132']);
    // return () => h('div', {}, slots.default());
    function handleClick() {
      emit('change');
    }
    return {
      handleClick
    }
  }
})

```
