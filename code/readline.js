import readline from 'readline'
import inquirer from 'inquirer'

// const myReadline = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })
// myReadline.question('你叫什么名字？\n', (msg) => {
//   console.log(`我叫：`, msg)
//   myReadline.close()
// })

// 使用inquirer软件包，更加完整且抽象的使用
const question = [
  {
    type: 'input',
    name: 'name',
    message: '你叫什么名字？\n',
  },
]
inquirer.prompt(question).then((res) => {
  console.log(res.name)
})
