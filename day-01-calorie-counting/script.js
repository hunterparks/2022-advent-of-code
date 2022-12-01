// From https://adventofcode.com/2022/day/1
const fs = require('fs');
const setup = (inputPath = 'input.txt') => {
  return fs.readFileSync(inputPath, { encoding: 'utf-8' }).split('\n');
};
const partOne = () => {
  const input = setup();
  const elfCalories = [];
  let currentElf = 0;
  for (let line of input) {
    if (line === '') {
      currentElf += 1;
      continue;
    }
    if (!elfCalories[currentElf]) {
      elfCalories[currentElf] = 0;
    }
    elfCalories[currentElf] += +line;
  }
  const topOne = elfCalories.sort((a, b) => b - a).splice(0, 1)[0];
  console.log(`An elf is carrying the most calories of: ${topOne}`);
};
const partTwo = () => {
  const input = setup();
  let elfCalories = [];
  let currentElf = 0;
  for (let line of input) {
    if (line === '') {
      currentElf += 1;
      continue;
    }
    if (!elfCalories[currentElf]) {
      elfCalories[currentElf] = 0;
    }
    elfCalories[currentElf] += +line;
  }
  const topThree = elfCalories
    .sort((a, b) => b - a)
    .splice(0, 3)
    .reduce((acc, curr) => acc + curr, 0);
  console.log(
    `The top three elves have a combined calorie count of: ${topThree}`
  );
};
partOne();
partTwo();
