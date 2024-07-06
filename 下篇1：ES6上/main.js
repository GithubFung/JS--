// 1.变量和常量
{
  let count = 0
  count++

  const BASE_URL = 'http://base...'
}

// 2.模板字符串
const str1 = 'abc' + 'efg'
const str2 = `efg${str1}
  这也是字段串的内容
`
// 3.解构赋值
const [a, b, c] = [1, 2, 3]
const { usernamem, age: userAge, ...otherInfo } = {
  username: '小冯',
  age: 18,
  gender: 'female',
  category: 'user'
}

// 4.数组和对象的扩展
//4.1扩展运算符
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2, 10, 20]
const obj1 = {
  a: 1
}
const obj2 = {
  b: 2
}
const obj3 = {
  name: '小冯',
  ...obj1,
  ...obj2
}
//4.2数组方法
function fn () {
  Array.from(arguments).forEach(function (item) {
    console.log(item)
  })
}
fn(1, 2, 3, 4)
//4.3对象方法
const objA = {
  name: '小冯',
  age: 18
}
const objB = {
  gender: 'female'
}
const objC = Object.assign({}, objA, objB)

// 5.Class
class A {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  introduce () {
    console.log(`我的名字是${this.name}，我的年龄是${this.age}`)
  }
}
const a1 = new A('小冯', 18)
a1.introduce
class B extends A {
  constructor(name, age, gender) {
    super(name, age)
    this.gender = gender
  }

  sayHello () {
    console.log('你好呀！')
  }
}
const b1 = new B('张三', 18, '女')
b1.introduce
b1.sayHello

// 6.箭头函数
// const getSum1 = function (n) {
//   return n + 3
// }
const getSum1 = n => n + 3
const getSum2 = (n1, n2) => n1 + n2
getSum2(10, 20)
const getSum3 = (n1, n2, ...ohter) => console.log(n1, n2, ohter)
console.log(getSum3(10, 20, 100, 200, 300))
const getResult = arr => {
  let sum = 0
  arr.forEach(item => sum += item)
  return sum
}
console.log(getResult([1, 2, 3, 4, 5]))
