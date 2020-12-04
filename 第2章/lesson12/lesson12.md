# lesson 12

## 事件修饰符

stop

prevent

capture

self 自身触发的事件才会执行

once

passive

@scroll.passive 提高滚动的性能

## 按键修饰符

@keydown

keycode

@keydown.enter

tab

delete

esc

up

down

left

right

## 鼠标事件修饰符

left

right

middle

## 精准修饰符

@click.ctrl.exact

## 事件绑定

```js
handleBtnClick(event) {
  // 默认第一个参数为事件对象
}
@click="handleBtnClick";

handleBtnClick(num, event) {}

@click="handleBtnClick(1, $event);

// 绑定多个事件
@click="handleBtnClick1(), handleBtnClick2();
```
