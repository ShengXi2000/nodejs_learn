// 使用writeFile可以写入文件，效果是直接替换掉所有内容为指定的内容
import {writeFile, writeFileSync, appendFile, appendFileSync, fstat} from 'fs'

const content = '需要写入的内容'
const filePath = './test.txt'
// 参数1：写入的路径目录（必须是文件，不能是目录）
// 参数2：写入的内容
// 参数3：写入完成后的回调（包括报错后）
writeFile(filePath, content, (err) => {
  if (err) throw new Error(err)
  // 写入成功
  console.log('写入成功')
})

// 同样，也可使用同步版本实现，同样省略回调
try {
  const data = writeFileSync(filePath, content)
  // 文件写入成功
} catch (error) {
  console.error(error)
}

// 可以通过指定标志来修改默认的行为（既不要默认的整个替换行为）：
/**
 * r+ 打开文件用于读写。
 * w+ 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
 * a 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
 * a+ 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。
 */

writeFile(filePath, content, {flag: 'a+'}, (err) => {
  if (err) throw new Error(err)
  // 写入成功
})

// 追加文件内容，使用appendFile方法
appendFile(filePath, '\nhello 1', (err) => {
  if (err) throw new Error(err)
  // 执行完成
})
// 使用同步
const data = appendFileSync(filePath, '\nhello 2')
console.log(data)
