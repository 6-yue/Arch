## 自动保存格式化
```bash
npm run lint --fix
```
## 临时关闭eslint
```js
// 在vue.config.js中配置后重启服务
module.exports = {
	// ...其他配置
	lintOnSave: false // 关闭eslint检查
}
```