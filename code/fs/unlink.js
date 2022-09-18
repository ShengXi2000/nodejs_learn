import fs from 'fs'
import path from 'path'

// 使用unlink来删除文件或符号链接

// 先创建下文件以便后续删除
const filePath = path.resolve('./hi.txt')
try {
  fs.copyFileSync('./file/say.txt', filePath)
  console.log('文件hi.txt创建完毕')
} catch (error) {}

try {
  fs.unlinkSync(filePath)
  console.log('文件hi.txt删除完毕')
} catch (error) {}

function sleepFun() {}
