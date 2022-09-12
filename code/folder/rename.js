// fs.rename可以重命名文件夹
import {renameSync} from 'fs'

const folderPath = 'C:/Users/1/Desktop/nodejs/code/folder/list'
const newFolderPath = 'newList'
try {
  renameSync(folderPath, newFolderPath)
  console.log(`文件夹重命名成功`)
} catch (error) {
  console.error(`文件夹重命名失败${error}`)
}
