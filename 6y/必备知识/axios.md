## get请求
```js
axios.get('/user?ID=12345')
	.then(res => {
		console.log('数据是：',res)
	})
	.catch(function (error) {
		console.log(error)
	})
```
## post请求
```js
axios.post('url', {
      username: "admin01",
      password: "123456"
    })
      .then(res => {
        console.log(res)
      })
```
## 遇到需要token的情况
```js
// 一、先调用登录接口，获取token值，存储到localStorage
import axios from 'axios'
axios.post('/entry/loginV2', {
  username: "admin01",
  password: "123456"
})
.then(({ data }) => {
let WATER_TOKEN = data.result.token
// console.log(WATER_TOKEN, 'res')
localStorage.setItem('liuyue', WATER_TOKEN)
})
// 二、在某个接口调用需要token的时候，把localStorage里面的值取出来
axios({
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('liuyue')}`
  },
  method: 'get',
  url: '/command-dispatch/sysConfig/list'
})
.then(({ data: res }) => {
console.log(res, '数据字典')
tableData.value = res.content
})
```