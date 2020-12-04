# lesson6

生命周期函数：在某一时刻自动执行的函数；

mounted

init events & lifeCycle
beforeCreate() 实例生产之前
init injections & reactivity 数据和模版绑定，依赖注入，数据双向绑定
created 实例生成之后
template ？
yes: compile template into render function
no: compile el's innerHTML as template
beforeMount 在模版被编译成函数后执行
create app.$el and replace 'el' with it
mounted 在组件内容被渲染到页面之后
beforeUpdate 数据发生变化立即执行
updated 数据发生变化并且页面重新渲染后执行
beforeUnmount
unmounted
