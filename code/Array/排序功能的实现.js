let arr1 = [
  { name: 'zs', age: 50 },
  { name: 'ls', age: 19 },
  { name: 'ww', age: 30 },
]

let exam = arr1.sort((a,b) => {
  let c = a.age
  let d = b.age
  return c - d
})
console.log(exam)
