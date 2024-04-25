// 定义判断数据
let jibie = [1, 2]
let leibie = [10, 20, 30, 41, 42, 43, 44, 45, 46, 47, 48]
let quyu = [
  11, 12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44,
  45, 46, 50, 51, 52, 53, 54, 61, 62, 63, 64, 65,
]
// 在指定事件下执行
let testValue = 120450081234567
checktsn(testValue)

// 封装函数
function checktsn(sn) {
  if (sn.toString().length === 15) {
    // 编号长度正确，要进行的逻辑
    console.log('编号长度正确')
    console.log(
      jibie.includes(Number(sn.toString().slice(0, 1))),
      leibie.includes(Number(sn.toString().slice(1, 3))),
      quyu.includes(Number(sn.toString().slice(3, 5))),
      !!(Number(sn.toString().slice(5, 7)) === 00)
    )
  } else {
    // 编号长度不正确，提示信息
    let number = sn.toString().length - 15
    if (number > 0) {
      console.log(`输入数值多了${number}位`)
    } else {
      console.log(`输入数值少了${-number}位`)
    }
  }
}
