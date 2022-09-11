import chalk from 'chalk'
import ProgressBar from 'progress'

// chalk能够让我们更好的在终端中变换颜色和背景等
// progress能够在我们的终端中创建进度条
const bar = new ProgressBar(':bar', {total: 50})
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
    console.log(chalk.bgBlue.white('hello world'))
  }
}, 10)
