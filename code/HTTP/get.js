// // 使用HTTP模块发送HTTP GET请求
import http from 'http'

const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '',
  method: 'GET',
}

const req = http.request(options, (res) => {
  // 监听返回的状态码，200代表正常
  if (res.statusCode !== 200) throw new Error('状态码不为200')
  console.log(`状态码：${res.statusCode}`)
  // 监听是否有数据返回
  res.on('data', (d) => {
    // 将该数据写入控制台
    process.stdout.write(d)
  })
})

// 监听错误事件，输出错误信息到控制台
req.on('error', (e) => {
  console.error(e)
})

// 结束本次请求
req.end()
