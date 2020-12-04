# lesson 26

列表动画

```css
.list-item {
  display: "inline-block";
}

.v-enter-from {

}
.v-enter-active {
/* 过渡效果 */
transition: all .5s ease-in;
}
.v-enter-to {

}
/* v-move 其他的列表项如何移动的描述 */
/* 列表中已有的元素移动效果 */
.v-move {
  transition: all .5s ease-in;
}

```

```js

//
<transition-group>
  <span class="list-item" v-for=""></span>
</transition-group>

```
