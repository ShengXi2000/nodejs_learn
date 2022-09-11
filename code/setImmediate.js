process.nextTick(() => {
  console.log('NEXTTICK')
})

setTimeout(() => {
  console.log('SETTIMEOUT')
}, 0)

// setImmediate在setTimeout前，在nextTick和Promise后
setImmediate(() => {
  console.log('SETIMMEDIATE')
})

new Promise((resolve) => {
  resolve('PROMISE')
}).then((res) => {
  console.log(res)
})
