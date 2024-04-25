## 逻辑的书写规范
```vue
<script setup lang="ts">
// 逻辑代码
</script>
```
## 样式
### 书写规范
```vue
<style scoped lang="scss">
// 样式代码
</style>
```
### 动态绑定class
我们可以给`:class`(`v-bind:class`的缩写)传递一个对象来动态切换class：
```vue
<div :class="{ active: isActive }"></div>
```
### 动态改变行内样式
```vue
<script setup lang="ts">
  import {ref,computed} from 'vue'
  let msg = ref<number>(0)
  function changeParent() {
    msg.value++
  }
  const comValue = computed(() => {
    return msg.value % 2 === 0 ? 'green' : 'red'
  })
</script>

<template>
  <h3 :style="{color:comValue}">App--{{comValue}}</h3>
  <h4 v-if="comValue">Vue is awesome!</h4>
  <button @click="changeParent">change</button>
</template>
```
## 生命周期
```vue
<script setup>
import { onMounted } from 'vue'
onMounted(() => {
	console.log(`the Component is now mounted.`)
})
```
## ref定义响应式数据，指定类型
```vue
<script setup lang="ts">
	import {ref} from 'vue'
	let count = ref<number>(0)
	function changeParent() {
		msg.value++
		// ref定义的响应式数据，不要忘记加.value
	}
</script>
<template>
  <HelloWorld :msg="msg" @changeParent="changeParent"/>
</template>
```

