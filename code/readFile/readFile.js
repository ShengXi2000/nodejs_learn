import {readFile, readFileSync} from 'fs'

// 在 Node.js 中读取文件最简单的方式是使用 fs.readFile() 方法，
// 向其传入文件路径、编码、以及会带上文件数据（以及错误）进行调用的回调函数：
const notes = 'test.txt'
// 路径可以是绝对或相对
readFile(notes, 'utf-8', (err, data) => {
  if (err) throw new Error(err)
  // 读取到的文件内容会保存在data中（如果不出错的话）
  console.log(data)
})

// 也可使用同步版本，其可省略回调，直接接受读取到的data
try {
  const data = readFileSync(notes, 'utf-8')
  console.log(data)
} catch (error) {
  console.error(error)
}

console.log(2)
