const fs = require('fs')

const numbers = fs.readFileSync('./input.txt', 'utf-8').split('\n')
  .map(item => Number.parseInt(item))

const increasements = numbers.reduce((acc, currentValue, index) => {
  if (index === 0) return 0
  return currentValue > numbers[index - 1] ? acc + 1 : acc
}, 0)

console.log(increasements)