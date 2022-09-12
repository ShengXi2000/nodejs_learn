import http from 'http'

const data = JSON.stringify({
  name: 'jack',
  msg: 'hi ~ my name is jack',
})

const options = {
  hostname: '127.0.0.1',
  prot: 3000,
  path: '/user',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
}

const req = http.request(options, (res) => {
  console.log(`状态码为：${res.statusCode}`)
  res.on('data', (d) => {
    process.stdout.write(d)
  })
})

req.on('error', (e) => {
  console.error(e)
})
req.write(data)
req.end()
