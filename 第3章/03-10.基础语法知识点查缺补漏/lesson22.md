# lesson 22

v-once 标签只渲染一次

ref 引用，获取dom节点

ref 获取组件的引用，调用组件的方法

Proxy 语法

provide/inject 这两个都是组件选项
provide/inject 多级组件传值
parent
  child
    child-child

一个属性经过很多次传递
parent
组件选项
provide: {
  count: 1
}

provide() {
  return {
    count: this.count // 使用data中的数据
  }
}

child-child
inject: ['count']

provide 提供数据给孙子组件不是响应式的
