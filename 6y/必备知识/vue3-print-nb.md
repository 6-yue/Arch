## 这是vue3的打印插件
下载
```ts
npm install vue3-print-nb --save-dev
```
注册
```ts
import { createApp } from 'vue'
import App from './App.vue'
import print from 'vue3-print-nb'
const app = createApp(App)
Vue.use(print)
app.use(print)
app.mount('#app')
```
页面使用
```vue
<div id="printMe">
	<!-- 我要被打印 -->
</div>
<button v-print="'#printMe'">打印</button>
```
