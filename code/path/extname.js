// path.extname()
// path.extnameAPI用于返回路径的扩展名部分
import {extname} from 'path'

const path = '/test/something/file.txt'

console.log(extname(path)) // .txt
