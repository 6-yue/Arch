## vue3的组件库引入使用
```ts
// 使用方法-全部引入-可能会导致打包后项目较大
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

createApp(App).use(ElementPlus).mount('#app')
```
## el-table
### 表格设置滚动条
el-table超出一定高度设置滚动条两种方法，设置height和max-height都可出现滚动条。
1. 给table设置height属性为250，表格固定有300px这么高。
```vue
<el-table
    :data="tableData"
    height="250"
    border
    style=" 100%">
```
2. 给他变了设置max-height为300，表格数据超出250。如果表格只有一条数据，且高度没有超过300.表格就根据实际高度取值。
```vue
<el-table
    :data="tableData"
   max-height="250"
    border
    style=" 100%">
```
### 表格居中问题
```js
// 添加header-cell-style这个属性，设置头部居中；  
// 添加cell-style这个属性，设置单元格内容居中；
```
### el-table中row的使用
```js
<el-table :data="tableData" style="width: 100%">
	<el-table-column fixed prop="num" label="序号" min-width="5%" />
	<el-table-column label="操作" width="180" prop="status">
		<template #default="{ row }">
			<el-button link type="primary" size="small" @click="handleAddEdit" :disabled="row.status == '处理中' || row.status == '处理完成'">
				编辑
			</el-button>
			<el-button link type="primary" size="small" @click="handleHandleView">处理</el-button>
			<el-button link type="primary" size="small" @click="handleHandleView">查看</el-button>
		</template>
	</el-table-column>
</el-table>
```
### 给每一列都设置 `min-width=百分比` 
```js
<el-table :data="tableData" style="width: 100%">
	<el-table-column fixed prop="num" label="序号" min-width="5%" />
	<el-table-column prop="type" label="事件类型" min-width="11%" />
	<el-table-column prop="source" label="事件来源" min-width="11%" />
	<el-table-column prop="content" label="报警内容" min-width="11%" />
	<el-table-column prop="date" label="发生时间" min-width="12%" />
	<el-table-column prop="address" label="所在地点" min-width="11%" />
	<el-table-column prop="person" label="创建人" min-width="11%" />
	<el-table-column prop="status" label="事件状态" min-width="11%" />
</el-table>
```
## form表单添加必填 红星
效果：
![](https://img2022.cnblogs.com/blog/1381790/202211/1381790-20221111173942759-836382414.png)

 代码：添加 `:required="true" style="text-align:left"` 即可 
## 父子组件调用弹窗
### 父组件
在父组件身上引入弹窗组件，
```js
import DataDictionaryEdit from "./components/DataDictionaryEdit.vue";
```
绑定一个自定义属性，和自定义事件
```js
<DataDictionaryEdit
	:showEditDialog="showEditDialog"    @closeEditDialog="handelEditDialog($event)"
/>
```
自定义属性绑定一个初始值
```js
import { ref } from "vue";
const showEditDialog = ref(false);
```
绑定事件的事件对象
```js
const handelEditDialog = (e) => {
    showEditDialog.value = e;
};
```
触发的方法，存放在一个按钮里面
```js
<el-button
	link
	type="primary"
	size="small"
	@click="handleEdit"
>
编辑
</el-button
>
```
触发的方法
```js
function handleEdit() {
    showEditDialog.value = true;
}
```
### 子组件
在el-dialog身上动态绑定model-value，绑定一个关闭事件，以前关闭前事件
```js
<el-dialog
	:model-value="showEditDialog"
	@close="closeDialog()"
	title="新建"
	width="20%"
	:before-close="handleClose"
>
```
接收的父组件的值，以及方法的搭建
```js
// 接收的父组件的值
defineProps({
    showEditDialog: {
        type: Boolean,
        default: true,
    },
});
// 要触发父组件的关闭方法
const emit = defineEmits(["closeDialog"]);
const closeDialog = () => {
    emit("closeEditDialog", false);
};
// 关闭弹窗前的具体方法
const handleClose = (done) => {
	ElMessageBox.confirm("是否确认退出")
		.then(() => {
			done();
		})
		.catch(() => {
			// catch error
		});
};
```
## input的几种禁用方法
1.  disabled 属性规定应该禁用 input 元素，被禁用的 input 元素，不可编辑，不可复制，不可选择，不能接收焦点,后台也不会接收到传值。设置后文字的颜色会变成灰色。disabled 属性无法与 <input type="hidden"> 一起使用。  
2.  readonly 属性规定输入字段为只读可复制，但是，用户可以使用Tab键切换到该字段，可选择,可以接收焦点，还可以选中或拷贝其文本。后台会接收到传值. readonly 属性可以防止用户对值进行修改。
3.  readonly unselectable="on" 该属性跟disable类似，input 元素，不可编辑，不可复制，不可选择，不能接收焦点，设置后文字的颜色也会变成灰色，但是后台可以接收到传值。
## el-input颜色更改
```js
<el-button color="#626aef" :dark="isDark">Default</el-button>
```
