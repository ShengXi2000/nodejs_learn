import fs from 'fs'
import path from 'path'

// copyFile：拷贝文件

const filePath = path.resolve('./file/say.txt')
// 目标路径不是目录，也是要文件，copy时自己便可重命名
const destFilePath = path.resolve('./hi.txt')
console.log(filePath + '\n', destFilePath)
fs.copyFileSync(filePath, destFilePath)

fs.unlinkSync(`${path.resolve('./hi.txt')}`)
