let a = [100, true, null, undefined, 'string', [], { a: '2' }]
// console.log(a)
let [a1] = [null]
a.forEach((item, index) => {
  a1 += item
  let a2 = []
  // console.log(item)
  for (let i = 0; i < index + 1; i++) {
    // console.log(a[i], 'a[i]')
    a2.push(a[i])
  }
  console.log(a2, '相加得值:', a1)
  a2 = []
})