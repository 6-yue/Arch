## 路由传参
### 声明式传参
#### params传参(显示参数)
在url中会显示出传参的值，刷新页面不会失去拿到的参数，使用该参数传值的时候，需要子路由提前配置好参数：
```js
// 路由参数配置
const router = new VueRouter({
	routes: [{
		path: '/about/:id',
		component: User
	}]
})

// 声明式导航使用
<router-link to="/about/12">跳转</router-link>
```
```js
// 路由参数配置
const router = new VueRouter({
	routes: [{
		name: 'user1',
		path: '/about/:id',
		component: User
	}]
})

// 声明式导航使用
<router-link :to="{ name: 'user1', params: {id: 123 }}">跳转</router-link>

```
#### params传参(不显示参数)
在url中不会显示出传参的值，但刷新页面会失去拿到的参数，使用该方式传值的时候，需要子路由提前配置好name参数：
```js
// 路由参数配置
const router = new VueRouter({
	routes: [{
		name: 'user1',
		path: '/about',
		component: User
	}]
})

// 声明式导航使用
<router-link :to="{ name: 'user1', params: { id: 123 }}">跳转</router-link>
```
#### query传参
query传过去的参数会拼接在地址栏中(?name=xx)，刷新页面数据不会丢失，使用path和name都可以：
```js
// 路由参数配置
const router = new VueRouter({
	routes: [{
		name: 'user1',
		path: '/about',
		component: User
	}]
})

// 使用name
<router-link :to="{ name: 'user', query: { id:123 }}"></router-link>
// 使用path
<router-link :to="{ path: '/about', query: { id: 123 }}"></router-link>
```
### 编程式传参
#### params传参(显示参数)
```js
// 路由配置
{
	path: '/child/:id',
	component: Child
}
// 编程式使用
this.$router.push({
	path:'/child/${id}',
})
```
```js
// 路由配置
{
	path: '/child:id',
	component: Child,
	name:Child
}
// 编程式使用
this.$router.push({
	name:'Child',
	params:{
		id:123
	}
})
```
#### params传参(不显示参数)
```js
{
	path: '/child',
	component: Child,
	name: Child
}
// 编程式使用
this.$router.push({
	name: 'Child',
	params:{
		id:123
	}
})
```
#### query传参
```js
// 路由配置
{
	path: '/child',
	component: Child,
	name:Child
}
// 编程式使用
// name方式
this.$router.push({
	name:'Child',
	query:{
	id:1
	}
})
// path方式
this.$rouer.push({
	path:'/child',
	query:{
		id:1
	}
})
```
### params获取参数
```js
this.$route.params.xxx
```
### query获取参数
```js
this.$route.query.xxx
```
### 需要注意的点
- 如果使用params传参，且参数是以对象的形式，跳转路径只能使用name而不能使用path
- 如果想要params参数想传参也可不传参需要在占位符后面加?。
```js
// 路由参数配置
const router = new VueRouter({
	routes: [{
		path:'/search/:keyword?',
		name:'search',
		component: () => import(@/pages/Search'),
		meta: { show: true }
	}]
})
// 编程式传参
this.$router.push({
	name: 'search',
	params: {},
	query: { keyword: this.keyword },
})
```
- 解决params传值为空字符串路径会出现问题：
```js
this.$router.push({
	name:'search',
	params:{ keyword: "" || undefined },
	query: { keyword: this.keyword },
})
```
## vue2-router
### Vue路由导航报错
#### 一、描述问题
在使用`this.$router.push`跳转页面时候，重复点击菜单引起路由重复报错
比如当前页面显示区是路由组件‘/cats’，重复点击按钮进行this.$router.push跳转，要跳转的组件仍然是‘/cats’，那么控制就会报如下错误：
#### 二、报错原因
由于 vue-router3.0 及以上版本回调形式改成Promise API的形式了，返回的是一个Promise 。也是说 push和replace都是Promise类型了。
而Promise的回调函数resolve和reject，必须传其中一个，否则会报错。如果路由地址跳转相同，且没有捕获到错误，控制台始终会出现上图所出现的问题。
## 重定向
```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home', // 重定向
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/HomeView.vue'),
    children: [
      {
        path: '/childHome',
        name: 'childHome',
        component: () => import('../views/home/components/ChildHome.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

```