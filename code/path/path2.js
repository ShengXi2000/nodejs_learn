// path的join可以拼接多个path片段
import path from 'path'
const name = 'joe'
console.log(path.join('/', 'users', name, 'notes.txt'))

// 可以使用path.resolve() 获得相对路径的绝对路径计算：
console.log(path.resolve('./')) // 获得当前目录的绝对路径

// 如果指定第二个参数，则会将第一个参数的path作为第二个参数的基础
console.log(path.resolve('tmp', 'joe.txt')) // /C:/Users/1/Desktop/nodejs/code/path/tmp/joe.txt
// 如果第一个参数是以斜杠/开头，则他会作为绝对路径的基础
console.log(path.resolve('/etc', 'joe.txt')) // /etc/joe.txt
