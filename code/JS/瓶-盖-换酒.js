// 一道题，假如2个瓶子可以换1瓶酒，
// 4个瓶盖可以换1瓶酒，写一个函数来计算，
// 传入两个参数，假如传入10个瓶子，10个瓶盖，
// 问最后一共能换几瓶酒

// 每次兑换的瓶子数量
let sum = 0
// 定义瓶子余数
let pn = 200
// 定义盖子余数
let gn = 10
//每次循环的瓶子数 定义一个空数组
let arr = []
function sumFn(p, g) {
  // 计算瓶子数量
  // 每次结果push到一个数组
  arr.push((sum = Math.floor(p / 2) + Math.floor(g / 4)))
  // console.log(p % 2, g % 4); -----余下的空瓶和盖子的算法
  // 因为第一次算出来换成功的瓶子和盖子数量是一样的所以直接加sum就可以
  // 空瓶余数 + 瓶
  pn = (p % 2) + sum
  // 空盖余数 + 盖
  gn = (g % 4) + sum
  // 如果瓶子和盖子已经无法兑换了就不向下进行
  if (pn < 2 && gn < 4) return
  // ****每次递归得到瓶子和盖子的顺序，可以释放看一下规则***
  // console.log("瓶", pn, "盖", gn);
  // 每次都需要递归一下调用自身然后把新的瓶数和盖子的数值进去进行兑换
  sumFn(pn, gn)
  // 定义瓶子最终的总数
  let sumNumber = 0
  // 循环然后求数组之和
  arr.forEach((item) => (sumNumber += item))
  return sumNumber
}
console.log('最终能兑换的瓶数：', sumFn(pn, gn), "\n", '剩余的空瓶子：', pn, "\n", '剩余的盖子', gn)
