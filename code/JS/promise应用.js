let isForget = false
let getLv = new Promise((resolve, reject) => {
  if (isForget) {
    let lv = {
      color: 'orange',
      price: '￥99',
    }
    resolve(lv)
  } else {
    let err = new Error('我加班去了，忘记了')
    reject(err)
  }
})
// let testFn = function() {
//   getLv.then((fulfilled) => {
//     console.log(fulfilled)
//   }).catch((rejected)=> {
//     console.log(rejected.message)
//   })
// }
// testFn()

let buyLip = (lv) => {
  let lip = {
    brand: 'koki',
    color: 'white',
  }
  let msg = {
    message: '我买的口红是' + lip.brand + '搭配我的' + lv.color,
    lip: lip,
    lv: lv,
  }
  return Promise.resolve(msg)
}
let testFn = () => {
  getLv
    .then(buyLip)
    .then((fulfilled) => {
      console.log(fulfilled)
    })
    .catch((rejected) => {
      console.log(rejected.message)
    })
}
testFn()
