// Buffer.from可以创建一个buffer
import {Buffer} from 'buffer'
const buffer = Buffer.from('Hey!')
// buffer会返回一个类似整数数组的数据结构，其中每个整数代表一个数据字节
console.log(buffer)
// 每个数字对应的是Unicode码，可使用toString方法打印buffer的全部内容
console.log(buffer.toString())

// 使用length属性获取buffer的长度
console.log('bufferLength:', buffer.length)
