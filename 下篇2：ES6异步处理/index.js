// 1.Promise Async 同步和异步，常见的异步：定时器 Ajax
console.log('任务1:...同步')
console.log('任务2:...同步')

setTimeout(() => {
  console.log('任务3:...异步')
  console.log('任务4:...异步')
  setTimeout(() => {
    console.log('任务5:...异步')
    console.log('任务6:...异步')
    setTimeout(() => {
      console.log('任务7:...异步')
      console.log('任务8:...异步')
    }, 0)
  }, 0)
}, 0)

//Promise解决异步写法中嵌套问题
const p1 = new Promise((resolve, reject) => {
  resolve('任务1成功得到的数据')
  // reject('任务1失败了')
})
p1.then(data => {
  console.log(data)
  return new Promise((resolve, reject) => {
    resolve('任务2成功得到的数据')
    // reject('任务2失败了')
  })
}, err => {
  console.log('任务1失败了')
  throw new Error('任务1失败了')
}).then(data => {
  console.log(data)
}, err => {
  console.log('任务2失败了')
})
// p1.then().then().then().catch()


// Async基于Promise，搭配await，追求跟同步写法完全一致
// 步骤一：准备一个返回promise对象的函数
function asyncTask () {
  return new Promise((resolve, reject) => {
    const isSuccess = true
    if (isSuccess) {
      resolve('task2成功的处理结果')
    } else {
      reject('task2失败的处理结果')
    }
  })
}
// 步骤二：为使用await的函数添加async
async function main () {
  console.log('task1')
  const data = await asyncTask()
  console.log(data)
  console.log('task3')
  await asyncTask()
  await asyncTask()
  await asyncTask()
  await asyncTask()
  await asyncTask()
}
main()
// 2.Proxy

// 3.Module