// // 2.Proxy 代理对象
// const obj = {
//   name: '小冯',
//   age: 18
// }
// const container = document.getElementById('container')
// const p1 = new Proxy(obj, {
//   get (taget, property) {
//     return obj[property]
//   },
//   set (target, property, value) {
//     obj[property] = value
//     container.textContent = obj.name
//   }
// })
// console.log(p1.name)
// p1.age = 21
// p1.name = 'Jack'

// 3.Module: ESM(浏览器) CommonJS(Node.js)
//ESM
// import moduleA from './a.js'
// import moduleB from './b.js'
// import { aTitle, aFn } from './a.js'
// import { bTitle, bFn } from './b.js'

// console.log(moduleA)
// console.log(moduleB)
// console.log(aTitle, aFn, bTitle, bFn)

//CommonJS
const moduleC = require('./c')
console.log(moduleC)

