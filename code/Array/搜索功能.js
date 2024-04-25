var [fruits, arr1] = [[
  'apple',
  'banana',
  'grapes',
  'mango',
  'orange',
  'cdap',
  'dapc',
  '1234abcdef567',
  'Aza01z',
  'az002'
],
[
  { title: '1', text: '吃饭' },
  { title: '2', text: '睡觉' },
  { title: '3', text: '打豆豆' },
  { name: '李' },
]
]
function filterItems(query) {
  return fruits.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

arr1 = arr1.filter((item) => item.name === '李')

console.log(filterItems('az'), arr1);