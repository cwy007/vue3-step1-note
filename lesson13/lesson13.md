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
