// 文件属性
import fs from 'fs'
// 每个文件都带有一组详细信息，可以使用fs模块提供的stat方法获取并检查
// 可以通过属性提取哪些信息？
/**
 * 例如：
 *  使用 stats.isFile() 和 stats.isDirectory() 判断文件是否目录或文件。
 *  使用 stats.isSymbolicLink() 判断文件是否符号链接。
 *  使用 stats.size 获取文件的大小（以字节为单位）。
 */

fs.stat('file/say.txt', (err, stats) => {
  if (err) console.error(err)
  console.log('文件详细信息1：', stats)
})
// 会优先打印helloworld，因为stat方法是异步
console.log('1') // 前执行，因为stat不会阻塞

// 可使用同功能但同步的方法，其会阻塞线程直到属性详细信息完全获取到之后
// 且省略写入回调，直接获取到stats
try {
  const stats = fs.statSync('file/say.txt')
  console.log('文件详细信息2：', stats)
  console.log(`是否为文件？ ${stats.isFile() ? '是' : '不是'}`)
  console.log(
    `是否为符号链接？（windows里的快捷方式）  ${
      stats.isSymbolicLink() ? '是' : '不是'
    }`
  )
  console.log(`文件大小（字节单位）：${stats.size}`)
} catch (error) {
  console.error(error)
}
console.log('2') // 后执行，因为statSync会阻塞线程
