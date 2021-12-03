const fs = require("fs")

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map((line) => line.split("").map(item => parseInt(item)))

const getMostCommonBits = (lines) =>
  lines.reduce((acc, line) => {
    return acc.map((bit, index) => bit + line[index])
  }, new Array(lines[0].length).fill(0))
    .reduce((acc, value) => acc + (value >= (lines.length / 2) ? "1" : "0"), "");

const getLeastCommonBits = (lines) =>
  lines.reduce((acc, line) => {
    return acc.map((bit, index) => bit + line[index])
  }, new Array(lines[0].length).fill(0))
    .reduce((acc, value) => acc + (value >= (lines.length / 2) ? "0" : "1"), "");

const getOxygen = (lines, index = 0) => {
  const mostCommonBit = getMostCommonBits(lines)[index]
  const filteredLines = lines.filter(line => line.join("").charAt(index).startsWith(mostCommonBit))
  if (filteredLines.length === 1) return filteredLines[0].join("")
  return getOxygen(filteredLines, index + 1)
}

const getCO2 = (lines, index = 0) => {
  const leastCommonBit = getLeastCommonBits(lines)[index]
  const filteredLines = lines.filter(line => line.join("").charAt(index).startsWith(leastCommonBit))
  if (filteredLines.length === 1) return filteredLines[0].join("")
  return getCO2(filteredLines, index + 1)
}

console.log(parseInt(getOxygen(input), 2) * parseInt(getCO2(input), 2))
