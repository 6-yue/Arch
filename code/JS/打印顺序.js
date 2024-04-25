setTimeout(() => {
  console.log('a')
}, 0)

new Promise((resolve, reject) => {
  console.log('b')
  resolve(1)
}).then(() => {
  console.log('c')
})

console.log('d')
