let exam = [
  typeof 'a',
  typeof 1324,
  typeof null,
  typeof undefined,
  typeof [1, 23, 4],
  [].constructor,
  {}.constructor,
  (1234).constructor,
  // undefined.constructor, // 会报错
  // null.constructor, // 会报错
  Object.prototype.toString.call(''),
  Object.prototype.toString.call(1234),
  Object.prototype.toString.call(null),
  Object.prototype.toString.call(undefined),
  Object.prototype.toString.call([]),
]
console.log(exam)
