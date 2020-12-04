# lesson 8

## data

vm.$data.message

根数据时
vm.message

## computed

语义化

数据发生变化时，会重新计算

当计算属性依赖的内容发生变化时，才会重新计算

内部带有缓存的特性

## methods

this 指向vue实例

需要使用this指向vue实例时，不能使用箭头函数

箭头函数中的this指向函数外层的对象

页面重新渲染后，方法才会重新执行

## watcher

侦听器

watch

监听器 vs 计算属性
