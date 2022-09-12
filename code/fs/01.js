import fs from 'fs'

// 使用内置模块fs来与文件进行交互

// 获得文件描述符：
// 文件描述符是与文件交互前，所必须要的

// 第1个参数表示要打开的文件路径
// 第二个参数表示要做什么操作，可用的操作有以下：
/**
 * r+ 打开文件用于读写。
 * w+ 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
 * a 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
 * a+ 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。
 */
fs.open('file/say.txt', 'r', (err, fd) => {
  try {
    //fd则是文件描述符。
    console.log(fd)
  } catch (error) {
    console.error(err)
  }
})

// 也可用openSync方法来快捷获取文件描述符，这样不必通过回调的参数获得
try {
  const fd = fs.openSync('file/say.txt', 'r')
} catch (err) {
  console.error(err)
}
