import express from 'express'
// 使用express调用并创建一个应用
const app = express()

// 基本服务配置对象
const options = {
  host: '127.0.0.1',
  prot: 8080,
}

// 定义一组中间件队列
const middleware1 = (req, res, next) => {
  console.log('middleware1 start')
  // 使用next方法来结束当前中间件，跳转到下一个中间件的执行（如果有）
  next()
}
const middleware2 = (req, res, next) => {
  console.log('middleware2 start')
  next()
}
const middleware3 = (req, res, next) => {
  console.log('middleware3 start')
  next()
}
const middleware = [middleware1, middleware2, middleware3]

// 搭建基本路由
// 只有一个斜杠的路由，其中间件会在任何路由都触发（其次是看定义的顺序来触发）
app.use('/', middleware)

// 如果路由不是/ajax，则不会匹配到该路由，中间件也就不会触发
app.use('/ajax', (req, res, next) => {
  console.log('/ajax 路由')
  next()
})

app.use('/api', (req, res, next) => {
  console.log('/api 路由')
  // 通过res的send方法可以结束本次请求并返回data给客户端
  res.send('hello world')
})

// 使用express应用监听一个服务
app.listen(options.prot, () => {
  console.log(`服务启动在：${options.host}:${options.prot}`)
})
