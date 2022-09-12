// fs.rmdir是删除文件夹
import {rmdirSync, mkdirSync, existsSync, writeFileSync} from 'fs'
import {join} from 'path'
import fs from 'fs-extra'

const folderPath = 'C:/Users/1/Desktop/nodejs/code/folder/testFolder'

// 创建目录与文件（方便后续使用rmdir进行深层删除）
try {
  // 目录不存在则执行创建执行，否则停止
  if (existsSync(folderPath)) throw new Error('所指定的目录已存在')
  // 创建该目录
  mkdirSync(folderPath)
  // 往该目录创建a.txt并写入hello world
  writeFileSync(join(folderPath, 'a.txt'), 'hello world', {flag: 'a+'})
} catch (error) {
  console.error(error)
}

try {
  rmdirSync(folderPath)
  console.log(`删除文件夹成功`)
} catch (error) {
  console.log(`删除文件夹失败：${error}`)
}

// 删除带有文件的文件夹会变得很复杂，所以我们引入fs-extra模块
// 他是fs的替代品，增强改善了fs的很多功能
// 使用removeSync替代rmdirSync来删除文件夹
// try {
//   fs.removeSync(folderPath)
//   console.log(`删除文件夹成功`)
// } catch (error) {
//   console.error(`删除文件夹失败：${error}`)
// }

// 也可使用promise异步删除
fs.remove(folderPath)
  .then((res) => {
    console.log(`删除完成`)
  })
  .catch((err) => {
    console.error(`删除失败`)
  })
