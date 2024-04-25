const data = [
  { id: '01', name: '总裁办', pid: '' },
  { id: '02', name: '财政部', pid: '01' },
  { id: '03', name: '研发部', pid: '01' },
  { id: '04', name: '物流部', pid: '01' },
  { id: '05', name: '安保部', pid: '01' },
  { id: '06', name: '小赵', pid: '02' },
  { id: '07', name: '小钱', pid: '02' },
  { id: '08', name: '小孙', pid: '03' },
  { id: '09', name: '小周', pid: '03' },
  { id: '10', name: '小吴', pid: '04' },
  { id: '11', name: '小郑', pid: '04' },
  { id: '12', name: '小冯', pid: '05' },
  { id: '13', name: '小关', pid: '05' }
]

// 代码实现
function arrToTree(list) {
  const treeData = []
  list.forEach(item => {
    if (!item.pid) {
      treeData.push(item)
    }
    const children = list.filter(data => data.pid === item.id)
    if (!children.length) return
    item.children = children
  })
  return treeData
}
const treeData = arrToTree(data)
console.log(treeData)