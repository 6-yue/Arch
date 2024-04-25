let reg = /(^2$)/gi
if (reg.exec([1, 2, 12, 122, 3, 4])) {
  console.log(true)
} else {
  console.log(false)
}
