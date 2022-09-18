// 通过buffer.copy的方法可以复制buffer
const buf = Buffer.from('Hey!')
const copyBuf = Buffer.alloc(3)
buf.copy(copyBuf, 0, 0, 2) // (target,start,end,newBufferLength)
console.log(copyBuf.toString())
