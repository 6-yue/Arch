let arr = [1,100,2,3,2,21,2,3,2,1,3,43,2,32]
// 方案一
// let newArr = [...new Set(arr)]
// let lastArr = []
// newArr.forEach(item => {
//   console.log(item)
//   let num = 0
//   arr.forEach(i => {
//     if(item == i) {
//       num++
//     }
//   })
//   lastArr.push({
//     name:item,
//     num
//   })
// })
// console.log(lastArr)

// 方案二
let transportation2 = arr.reduce((p, i) => {
  i in p ? p[i]++ : p[i] = 1
  return p
}, {})
console.log(transportation2)

// 方案三
// let transportation3 = arr.reduce((p, i) => {
//   p[i] ? p[i]++ : p[i] = 0
//   return p
// }, {})
// console.log(transportation3)