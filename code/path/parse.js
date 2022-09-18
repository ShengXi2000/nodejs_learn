// path.parse用于解析一个路径地址并返回该路径相应的信息
import {parse} from 'path'

const path = '/users/joe/test.txt'
const parsePathObj = parse(path)
console.log(parsePathObj)
/**
 {
  root: '/',
  dir: '/users/joe',
  base: 'test.txt',
  ext: '.txt',
  name: 'test'
}
 */
