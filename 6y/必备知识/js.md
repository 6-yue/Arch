## 随机不重复的数值
```js
function my_ran2(n,min,max){
  var arr=[];
  for(let i=0;i<n;i++){
   arr[i]=parseInt(Math.random()*(max-min+1)+min);
   for(let j=0;j<i;j++){
    if(arr[i]==arr[j]){
     i=i-1;
     break;
    }
   }
  }
  return arr;
 }
 
let a = my_ran2(10,11,123)
console.log(a)
```

## 截取指定位置的字符串

### 忽略前11 位，保留后面的
```js
"2018-01-01 01:01".slice(11)
// 结果为：'01:01'
```

### 保留前十位
```js
"2018-01-01 01:01".slice(0,10)
// 结果为：'2018-01-01'
```

## 生成随机字符串

```js
Math.random().toString(36).substr(2)
```

## 获取当前日期

```js
'星期'+'日一二三四五六'.charAt(new Date().getDay())
```

## for-innerHTML
```js
// document.getElementById("demo").innerHTML=x;放在了for循环里面，但运行结果变成了：
// The number is 4 

// 有点懵逼，之后搜了下，发现要把
document.getElementById("demo").innerHTML=x;
// 换成
document.getElementById("demo").innerHTML+=x;
// 就行了。

// 后来找了找innerHTML的意思是“内部的HTML”，然后恍然大悟，也就是说document.getElementById("demo").innerHTML指的是id为demo的元素的整体内容，所以如果直接用“=”，相当于将原来的内容覆盖（/取代？）了，所以需要变为“+=”。
```

## 禁用调试工具
```js
//【第一种】 debugger
setInterval(function () {
	check()
}, 1000);
var check = function () {
  function doCheck(a) {
	if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
	  (function () { }
	  ["constructor"]("debugger")())
	} else {
	  (function () { }
	  ["constructor"]("debugger")())
	}
	doCheck(++a)
  }
  try {
	doCheck(0)
  } catch (err) { }
};
check();

// 【第二种】禁用右键 （防止右键查看源代码）  
window.oncontextmenu = function () { return true; };

//【第三种】在本网页的任何键盘敲击事件都是无效操作 （防止F12和shift+ctrl+i调起开发者工具）  
window.onkeydown = window.onkeyup = window.onkeypress = function () {
  window.event.returnValue = false;
  return false;
};


//【第四种】如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面  
var [h, w] = [window.innerHeight, window.innerWidth]
window.onresize = function () {
  if (h != window.innerHeight || w != window.innerWidth) {
	// window.location = "https://www.baidu.com";
	document.body.style.display = 'none'
	// document.querySelector('h1').style.display = 'none'
  }
};

//【第五种】监视DOM修改
/*好吧，你的开发者工具是单独的窗口显示，不会改变原来网页的高度和宽度，
 但是你只要修改页面元素我就重新加载一次数据,让你无法修改页面元素（不支持IE9以下浏览器）*/
if (window.addEventListener) {
  window.addEventListener("DOMCharacterDataModified", function () { window.location.reload(); }, true);
  window.addEventListener("DOMAttributeNameChanged", function () { window.location.reload(); }, true);
  window.addEventListener("DOMCharacterDataModified", function () { window.location.reload(); }, true);
  window.addEventListener("DOMElementNameChanged", function () { window.location.reload(); }, true);
  window.addEventListener("DOMNodeInserted", function () { window.location.reload(); }, true);
  window.addEventListener("DOMNodeInsertedIntoDocument", function () { window.location.reload(); }, true);
  window.addEventListener("DOMNodeRemoved", function () { window.location.reload(); }, true);
  window.addEventListener("DOMNodeRemovedFromDocument", function () { window.location.reload(); }, true);
  window.addEventListener("DOMSubtreeModified", function () { window.location.reload(); }, true);
}
```