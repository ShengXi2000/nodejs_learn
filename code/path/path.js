// 在 Linux 和 macOS 上，路径可能类似于：
// /users/joe/file.txt

// 在 Windows 上则有所不同，具有类似以下的结构：
// C:\users\joe\file.txt
// 当在应用程序中使用路径时需要注意，因为必须考虑到这种差异。

import path from 'path'

const notes = 'C:/Users/1/Desktop/nodejs'
// 通过path的dirname可以获取文件的上级目录
console.log(path.dirname(notes))
// 通过path的basename可以获取文件名部分，
// 传入的如果是目录，则返回目录名，如是文件，则返回文件名
console.log(path.basename(notes))

// 通过path的extname方法可以获取文件的扩展名（传入的如是目录，则返回空）
console.log(path.extname(notes)) // 空
const filePath = 'C:/Users/1/Desktop/nodejs/code/fs/file/say.txt'
console.log(path.basename(filePath))
// basename通过指定传入的第二个参数，可省略掉后缀名，直接获得文件前缀名
console.log(path.basename(filePath, path.extname(filePath)))
