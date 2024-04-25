function searchTree(nodes, searchKey) {
  for (let i = 0; i < nodes.length; i++) {
    const item = nodes[i]
    if (item.label === searchKey) {
      console.log(item)
      return item.id
    }
    if (item.children !== undefined) {
      searchTree(item.children, searchKey)
    }
  }
  return null
}

nodes = [
  {
    id: 0,
    label: '00label',
  },
  {
    id: 1,
    label: '123d',
  },
  {
    id: 2,
    label: 'ccx',
    children: [
      {
        id: 20,
        label: '00lel',
      },
      {
        id: 21,
        label: '0label',
        children: [
          {
            id: 222,
            label: 'sjvs',
          },
          {
            id: 221,
            label: 'chnz',
          },
        ],
      },
    ],
  },
]
const a = searchTree(nodes, 'sjvs')
console.log(a)
