// 创建新的文件夹
// 使用fs.mkdir或fs.mkdirSync来创建

import {mkdir, mkdirSync, existsSync} from 'fs'

const folderPath = 'C:/Users/1/Desktop/nodejs/code/folder/list'

try {
  // 先检测目录是否存在，如果存在就不创建，不存在再创建文件夹比较合适
  if (!existsSync(folderPath)) {
    console.log(`目录不存在，准备创建文件夹`)
    // 创建文件夹
    mkdirSync(folderPath)
  } else {
    console.log(`目录已存在，不创建文件夹`)
  }
} catch (error) {
  console.error(error)
}
