## dataSys.js

```js
function initialization(arg) {
  let start = new Date();
  start.setDate(start.getDate() - arg);
  let ly = start.getFullYear()
  let lm = start.getMonth() + 1
  lm = lm > 9 ? lm : '0' + lm
  let ld = start.getDate()
  ld = ld > 9 ? ld : '0' + ld
  return `${ly}-${lm}-${ld}`
}

function late7now() {
  return (`${initialization(7)} - ${initialization(0)}`)
}

function yesterday() {
  return (initialization(1))
}

function today() {
  return (initialization(0))
}

export { late7now, yesterday, today }
```
