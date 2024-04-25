function getValue(originObj, keyPath) {
  let keys = keyPath.split('.'),
    result,
    index = 0
  console.log(keys)
  const fn = obj => {
    if (index >= keys.length) return
    result = obj[keys[index++]]
    if (result == null || typeof result !== 'object') return
    fn(result)
  }
}

var obj = {
  a: {
    b: {
      c: {
        d: 1,
      },
    },
  },
}

var res = getValue(obj, 'a.b.c.d')
console.log(res) // 打印出1

var res2 = getValue(obj, 'a.b')
console.log(res2) // 打印出{c: {d: 1}}
