// fs.existsSync是用于检测目录是否存在
import {existsSync} from 'fs'

const path = 'C:/Users/1/Desktop/nodejs/code'
console.log(`目录是否存在：${existsSync(path) ? '是' : '不是'}`)
