const fs = require("fs")

const lines = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map((line) => line.split("").map(item => parseInt(item)))

const result = lines.reduce((acc, line) => {
  return acc.map((bit, index) => bit + line[index])
}, new Array(lines[0].length).fill(0))
  .reduce((acc, value) => acc + (value >= (lines.length / 2) ? "1" : "0"), "")

console.log(parseInt(result, 2) * parseInt(result.replace(/[01]/g, (n) => 1 - n), 2))