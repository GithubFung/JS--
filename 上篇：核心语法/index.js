// 1.变量
var num = 10
var myAge = 18

// 2.数据类型
var myNum = 10 // number数值类型
var myStr = '文本'
var myName = "小冯" // string字符串类型
var myBool = true // boolean布尔类型
var myNull = null // 用于清空变量内容，表示空
var myUn // undefined默认值

// 控制台打印
console.log(myNum)

// 3.运算符
var sum = 1 + 2 //+ - * %
var resultStr = '你好' + 'JavaScript'
var isTrue = 2 > 3
2 === 2 //true
2 === '2' //false

// 4.语句
if (2 > 1) {  //if
  console.log('我会执行')
} else {
  console.log('我不会执行')
}
var sum = 0  //for
for (var i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    sum += i
  }
}
console.log(sum)
function getSumWithcondition (start, end, fn) {  //函数
  for (var i = start; i <= end; i++) {
    if (fn(i)) {
      sum += i
    }
  }
  return sum
}
getSumWithcondition(1, 100, function (n) {
  if (n % 2 === 0) {
    return true
  }
  return false
})
var myArr = [10, 20, 30, 40, 50] // 数组
console.log(myArr.length)
console.log(myArr[0])
console.log(myArr)
// 尾部插入
myArr.push(100)
// 头部插入
myArr.unshift(200)
// 输出值和索引
myArr.forEach(function (item, index) {
  console.log(item, index)
})
var obj = {  // 对象
  name: '小冯',
  age: 18
}
console.log(obj)
console.log(obj.name)
// k是属性名，name和age
for (var k in obj) {
  console.log(k, obj[k]) // name 小冯     age 18
}