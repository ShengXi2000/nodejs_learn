import minimist from 'minimist'
// minimist用于更好的接收命令行调用参数
// 但需要在每个参数前增加--，如：
// node .\process.argv.js --name=joe --age=19
const {name, age} = minimist(process.argv)
console.log(name, age)
