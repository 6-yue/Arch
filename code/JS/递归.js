// 递归求和
function Qh(n) {
  return n == 1 ? 1 : n + Qh(n - 1)
}
console.log('1-6的和:' + Qh(6))

// 递归求积
function Jc(n) {
  return n == 1 ? 1 : n * Jc(n - 1)
}
console.log('1-4的阶乘:' + Jc(4))
