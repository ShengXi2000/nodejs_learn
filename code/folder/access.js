// 使用 fs.access() 检查文件夹是否存在以及 Node.js 是否具有访问权限。
import fs, {access, accessSync} from 'fs'

// 使用fs.access方法可以判断文件是否存在
const filePath = './'
access(filePath, fs.constants.R_OK, (err) => {
  if (err) {
    console.log('文件夹不存在')
    return false
  }
  console.log('文件夹存在')
})

// 可以使用同步方法
try {
  const data = accessSync(filePath, fs.constants.R_OK)
  console.log('文件夹存在')
} catch (error) {
  console.log('文件夹不存在')
  console.error(error)
}
