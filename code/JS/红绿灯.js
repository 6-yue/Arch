function delay(light) {
  return new Promise((resolve, reject) => {
    console.log(`现在是${light.color}${light.delay / 1000}秒变化`)
    setTimeout(() => {
      resolve()
    }, light.delay)
  })
}
// 模拟红绿灯
async function lightTransform(lights) {
  while (true) {
    // lights.forEach((item)=>{
    //   await delay(item)
    // })
    for (i in lights) {
      await delay(lights[i])
    }
  }
}
// 数据
const arr = [
  { color: '红灯', delay: 3000 },
  { color: '绿灯', delay: 5000 },
  { color: '黄灯', delay: 2000 },
]
lightTransform(arr)
