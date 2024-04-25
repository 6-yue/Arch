// 原始数组
let arr = [1, '2', [3, [4, 5]]] // 利用递归把arr转换成平铺的数组
console.log(arr)

// 平铺数组 -- 1
// console.log([...(arr+'')])

// 平铺数组 -- 2
// function flattenDeep(arr) {
//   return arr.reduce((acc,val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),[])
// }
// console.log(flattenDeep(arr))

// 平铺数组 -- 3
let arr2 = [[222, 333, 444], [55, 66, 77,[88,[99]]]]
arr2 += ''
arr2 = arr2.split(',')
console.log(arr2)