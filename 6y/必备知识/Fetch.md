#### 关于Fetch API
```bash
1. Fetch是浏览器内置API，在浏览器环境中，可以通过顶层对象window获取。
2. Fetch 提供了对 Request 和 Response （以及其他与网络请求有关的）对象的通用定义。说明Fetch的目标不仅仅是浏览器环境，将来在服务器环境中也有可能提供对Fetch的支持。
3. 在使用Fetch发送请求或者获取资源时，需要使用 fetch() 方法。
4. fetch() 方法必须接受一个参数：要请求的路径，和一个可选参数 Request 对象。无论请求成功与否，它都返回一个 Promise 对象
5. 请求成功时，会得到请求的 Response 对象
6. 请求失败时，会得到一个TypeError
7. 需要注意的是：当接收到一个代表错误的 HTTP 状态码时（如404），从 fetch() 返回的 Promise 不会被标记为 reject，仅当网络故障时或请求被阻止时，才会标记为 reject。但fetch会修改 resolve 返回值的 ok 属性为 false。
```
#### fetch()方法的基本使用
```bash
1. 请求成功，resolve
2. fetch(url).then( response=>console.log(response) ) // 此时resolve得到的是response对象
3. 需要注意的是，此时拿到的仅仅是Response对象，如果需要更进一步获取到接口数据，必须进一步解析Response对象。
4. fetch(url).then(response=>response.json())
5. 将response数据解析成json
6. .then( json=>console.log(json) )
```
#### 关于Response对象读取内容方法解析：
	1. response.text()：得到文本字符串，如html数据。
	2. response.json()：得到 JSON 对象。
	3. response.blob()：得到二进制 Blob 对象。
	4. response.formData()：得到 FormData 表单对象。
	5. response.arrayBuffer()：得到二进制 ArrayBuffer 对象，如流媒体文件，视频音频类
#### 简单使用方法
```jsx
fetch('./POST.json')
.then( response=> response.json())
.then( res => {
	console.log(res)
})
```

```jsx
const [listData, setListData] = useState([])
useEffect(() => {
	const loadData = async () => {
		const result = await fetch('./json/POST.json').then(response=>response.json())
		console.log(result.data.links)
		setListData([ ...result.data.links])
	};
	loadData();
}, [])
```
#### 关于报错的问题
	在使用 Vue 框架编写前端时，需要加载一个本地 json 文件中的数据。
	原来使用原生 HTML 的时候，曾经使用 `fetch` 来读取本地文件，优点是不需要引用第三方包：
	`fetch` 中的 url 属性是 json 文件与当前 vue 文件的相对路径。然而这次在 vue 中使用却报错了：
	Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
	反复检查了路径的拼写和 json 文件本身，并没有发现任何不对，何况我的 json 文件中也根本没有 `<` 字符。尝试改了一下路径中的文件名，发现如果写一个不存在的文件名，报的错是完全一致的；因此猜测可能是根本没有正确访问到 json 文件。
	后来发现，`fetch` 是网页向前端服务器发起的请求，访问到的是**项目根目录下的 public 文件夹**，并不像在 vue 文件中 `import` 时一样使用相对路径。
	因此只需要将想要获取的文件移动到正确位置即可。例如上文中提到的 url 对应的目录就是`/public/sampleData/project.json`。