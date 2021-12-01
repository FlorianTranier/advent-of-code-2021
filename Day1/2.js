const fs = require("fs")

const numbers = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map((item) => Number.parseInt(item))

const increasements = numbers
  .map((value, index) => {
    return numbers
      .slice(index, index + 3)
      .reduce((previous, current) => previous + current)
  })
  .reduce((acc, currentValue, index, array) => {
    if (index === 0) return 0
    return currentValue > array[index - 1] ? acc + 1 : acc
  }, 0)

console.log(increasements)
