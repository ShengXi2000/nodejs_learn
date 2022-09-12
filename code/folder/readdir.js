// 读取目录的内容
// 使用fs.readdir或fs.readdirSync
// 只会读取一层，不会深层读取。没有后缀的代表文件夹

import fs, {readdir, readdirSync, statSync} from 'fs'
import path from 'path'

const dirPath = 'C:/Users/1/Desktop/nodejs/code/folder/list'

try {
  console.log(readdirSync(dirPath))
} catch (error) {
  console.error(error)
}

// 可以获取完整的路径
const filePath = readdirSync(dirPath).map((fileName) => {
  return path.join(dirPath, fileName)
})
console.log(filePath)

// 可以过滤结果，仅返回文件夹
const isFile = (fileName) => {
  return fs.statSync(fileName).isFile()
}
const filePath2 = readdirSync(dirPath)
  .map((fileName) => {
    return path.join(dirPath, fileName)
  })
  .filter(isFile)
console.log(filePath2)
