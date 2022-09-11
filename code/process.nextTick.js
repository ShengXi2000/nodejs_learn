// setTimeout在promise前
setTimeout(() => {
  console.log('larry')
}, 0)

// nextTick在setTimeout前，在promise后
process.nextTick(() => {
  console.log('joe')
})

// promise在nextTick前
new Promise((resolve) => {
  resolve('hello world')
}).then((res) => {
  console.log(res)
})
