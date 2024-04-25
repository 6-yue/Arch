const times = (() => {
  var count = 1
  return () => console.log(count++)
})()
times()
times()

const outer = () => {
  let x = 1
  return () => console.log(x++)
}

let y = outer()
y()
y()
outer()(), outer()()
