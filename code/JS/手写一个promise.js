function myPromise(excuter) {
  // 1.执行结构
  let self = this
  self.status = 'pending' // 状态
  self.value = null // 成功的值
  self.reason = null // 失败原因

  // 4.判断状态，做相应处理
  // 成功的回调
  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value // 保存成功的结果
      self.status = 'fulfilled'
    }
  }
  // 失败的回调
  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason // 失败原因
      self.status = 'rejected'
    }
  }
  // 3.执行一遍
  try {
    excuter(resolve, reject)
  } catch (err) {
    reject(err)
  }
}
// 2.then
myPromise.prototype.then = function () {}
let demo = new myPromise((resolve, reject) => {
  console.log('许以臣民一梦')
})
