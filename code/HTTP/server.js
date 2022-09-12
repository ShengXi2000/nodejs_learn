// 搭建HTTP服务器
import http from 'http'

const prot = 3000
// 使用http内置模块的createServer函数创建一个http服务
// 传入的回调会在每次请求时触发，req是请求的相关信息对象
// res是响应的相关操作，可设置响应状态码，响应头，然后再通过end响应本次请求
const server = http.createServer((req, res) => {
  // 设置本次响应的状态码
  res.status = 200
  // 设置服务端与客户端之间传输data的类型
  res.setHeader('Content-Type', 'text/plain')
  // console.log(`请求头相关信息：`, req)
  // console.log(`响应操作对象：`, res)
  // 响应本次请求，并返回hello world字符串
  res.end('hello world')
})

server.listen(prot, () => {
  console.log(`服务运行在：http://127.0.0.1:${prot}`)
})
