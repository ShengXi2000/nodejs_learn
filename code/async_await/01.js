const doSomethingAsync = () => {
  console.log('3s后调用回调')
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('调用setTimeout回调')
      resolve('hello world')
    }, 3000)
  })
}
const doSomething = async () => {
  // await可处理promise，如该pormise处于pending状态
  // ，则会停止后续任何代码的执行，直到promise转变为fulfilled状态时才会继续
  const res = await doSomethingAsync()
  console.log(res)
}
doSomething()
