# lesson13

v-model="message"

数据双向绑定

vm.$data.message = 'new value'

input

textarea

```html
<textarea>hello world</textarea>

<textarea v-model="value" />
```

checkbox

```html
单个checkbox
message="bollean"

多个checkbox
message=[]
<input type="checkbox" value="tom" v-model="message">

```

radio

## checkbox

```html
message="hello"
<input type="checkbox" v-model="message" true-value="hello" false-value="world">
```

## 修饰符

v-model 指令的修饰符

form 表单对应标签的修饰符

v-model.lazy="message"

input失去焦点的时候才发生变化

v-model.number="message"

v-model.trim 去除输入字符前后的空格

