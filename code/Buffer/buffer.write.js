// 使用buffer的write可以写入数据字符串
import {Buffer} from 'buffer'
// 初始化buffer，大小为4字节（英文1字节，中文2字节）
const buf = Buffer.alloc(4)
buf.write('Hey!')
console.log(buf.toString())

// 同样也可以通过数组的方式写入数据（数据需为unicode码）
// 前提是buffer的长度能够比在更改buffer后的长度要长或相等，否则更改将不生效
buf[4] = 111
console.log(buf.toString())
