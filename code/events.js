import EventEmitter from 'events'
const eventEmitter = new EventEmitter()

// events是nodejs内置包，拥有注册和触发事件的功能

// 事件注册
eventEmitter.on('start', (argv) => {
  console.log(argv.msg)
})

setTimeout(() => {
  // 事件触发
  eventEmitter.emit('start', {msg: 'start事件触发'})
}, 3000)

// 事件取消监听
eventEmitter.removeAllListeners('start')
