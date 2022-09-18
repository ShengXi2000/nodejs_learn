// 通过alloc可以只初始化buffer（传入大小字节）
// 如：创建一个1kb的buffer

import {Buffer} from 'buffer'
const buffer = Buffer.alloc(1024)
console.log(buffer)

// 如果使用这种方式创建buffer，则其在初始化buffer时，可访问包含随机数据的已预初始化
// 的内存（而不是空的buffer）！
console.log(buffer.toString())
