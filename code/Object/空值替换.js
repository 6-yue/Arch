// 'use strict'

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
}

const { a, i, j, ...obj3 } = obj1

console.log(obj1)

Object.keys(obj3).forEach((item) => {
  obj1[item] = ''
})
console.log(obj1)
console.log((num = 14).toString())

exam1 = '1234'
console.log(exam1)
