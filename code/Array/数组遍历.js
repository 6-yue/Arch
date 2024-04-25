let userList = [
  { name: 'zhangsan', age: 18 },
  { name: 'lisi', age: 22 },
  { name: 'wangwu', age: 18 },
  { name: 'zhaoliu', age: 22 },
  { name: 'lilei', age: 23 },
  { name: 'hanmeimei', age: 27 },
]
let names = userList.map((item) => item.name)
let ages = userList.map((item) => item.age)
console.log(`姓名：${names}\n年龄：${ages}`)
userList.forEach((item) => {
  console.log(`姓名是：${item.name}年龄是：${item.age}`)
})
