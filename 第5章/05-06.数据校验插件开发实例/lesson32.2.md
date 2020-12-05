# lesson 32.2

对数据做校验的插件 plugin

```js
const app = Vue.createApp({
  data() {
    return {
      name: 'dell', age: 28
    }
  },
  rules: { // 封装一个插件，让 vue 识别这种方法
    age: {
      validate: (age) => {
        return age > 25
      },
      message: '太年轻了'
    },
    name: {
      validate: (name) => {
        return name.length >= 4
      },
      message: 'name too short'
    }
  }
  template: `
    <div>name: {{name}}, age: {{age}}</div>
  `
})

// 混入的方式实现数据校验
// app.mixin({
//   created() {
//     for (let key in this.$options.rules) {
//       const item = this.$options.rules[key];
//       // console.log(key, item);
//       // this 为 Vue 对象的实例
//       // 监听 age 改变，回调函数会接收到新的 age 的值
//       this.$watch(key, (value) => {
//         // console.log(key + 'changed');
//         const result = item.validate(value);
//         if (!result) {
//           console.log(item.message);
//         }
//       })
//     }
//   }
// })

// 以函数的形式定义插件
// 插件的方式实现数据校验
// plugin 对mixin也做了封装
// 可读性和可扩展性
// 推荐使用插件的方式实现数据校验
//
const validatorPlugin = (app, options) => {
  app.mixin({
    created() {
      for (let key in this.$options.rules) {
        const item = this.$options.rules[key];
        this.$watch(key, (value) => {
          const result = item.validate(value);
          if (!result) {
            console.log(item.message);
          }
        })
      }
    }
  })
}

// 以对象的方式定义插件
// const validatorPlugin = {
//   install(app, options) {
//     app.mixin({
//       created() {
//         for (let key in this.$options.rules) {
//           const item = this.$options.rules[key];
//           this.$watch(key, (value) => {
//             const result = item.validate(value);
//             if (!result) {
//               console.log(item.message);
//             }
//           })
//         }
//       }
//     });
//   }
// }

app.use(validatorPlugin);

const vm = app.mount('#root');

```
