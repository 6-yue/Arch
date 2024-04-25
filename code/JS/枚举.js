const NumType = {
  NOTSTARTED: '未开始',
  LOADING: '进行中',
  NOTCOMPLETED: '未完成',
  FINISHED: '已完成',
}

console.log(NumType['LOADING'])
console.log(Object.keys(NumType))
console.log(Object.values(NumType))
Object.keys(NumType).forEach((i) => console.log(NumType[i]))
