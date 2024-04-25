let arr1 = arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arr1.concat(arr2))
console.log([...arr1,...arr2])
console.log(new Set(arr1.concat(arr2)))
arr1.concat(arr2).filter((b, c, a) => {
  return a.indexOf(b) === c
})
console.log(arr1)