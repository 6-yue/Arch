// reduce 有四个参数：
// prev 上一个归并值
// cur 当前项
// index 当前项索引
// arr 原数组
let arr = [1, 2, 3, 4, 5]
let value = arr.reduce((prev, cur, index, arr) => {
  console.log(prev, cur, index, arr)
  return prev + cur
}, 100)
console.log(value)
