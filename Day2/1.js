const fs = require("fs")

const instructions = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map((item) => item.split(" "))

const result = instructions.reduce((acc, [instruction, value]) => {
  switch (instruction) {
    case "forward": return { ...acc, forwards: acc.forwards + parseInt(value) }
    case "up": return { ...acc, depth: acc.depth - parseInt(value) }
    case "down": return { ...acc, depth: acc.depth + parseInt(value) }
  }
}, { forwards: 0, depth: 0 })


console.log(result.forwards * result.depth)