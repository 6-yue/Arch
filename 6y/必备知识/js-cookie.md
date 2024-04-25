## js-cookie是什么？
js-cookie是一个简单的,轻量级的处理cookies的js ，用来处理cookie相关的插件
## 下载
```bash
yarn add -S js-cookie
```
## 引入
```js
import Cookies from 'js-cookie'
```
## 添加cookie
```js
// 创建一个名称为name，对应值为value的cookie，由于没有设置失效时间，默认失效时间为该网站关闭时
Cookies.set(name, value)
// 创建一个有效时间为7天的cookie
Cookies.set(name, value, { expires: 7})
// 创建一个带有路径的cookie
Cookies.set(name, value, { path: '' })
// 创建一个value为对象的cookie
const obj = { name: 'ryan' }
Cookies.set('user', obj)
```
## 获取cookie
```js
// 获取指定名称的cookie
Cookies.get('name') //value
// 获取value为对象的cookie
const obj = { name: 'ryan' }
Cookies.set('user', obj)
JSON.parse(Cookies.get('user'))

// 获取所有cookie
Cookies.get()
```
## 删除cookie
```js
// 删除指定名称的cookie
Cookies.remove(name) // value

// 删除带有路径的cookie
Cookies.set(name, value, { path: '' })
Cookies.remove(name, { path: '' })
```
